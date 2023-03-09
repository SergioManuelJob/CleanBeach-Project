import prisma from "../config/prisma";
import express, { Request, Response } from "express";

import { ReviewData, reviewValidation }  from "../types/review";
import { validate } from "../utils/validation";
import { Result, Ok, Err } from "../types/meta/result"

type RID = { rid: number };
const validateRID = (rid: RID) => rid ? Ok(rid) : Err({ code: 400, msg: "Must provide review ID!" })

export const reviewController = {
    create: async (req: Request, res: Response) => {
        const result = validate<ReviewData>(
            req.body,
            [reviewValidation.validCreate]
        );

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        const review = result.value as ReviewData;

        // Check if the beach & the user exist:
        if (!(await prisma.beach.findUnique({where: { bid: req.body.beachId }})))
            return res.json({ code: 404, msg: "Beach not found" });

        if (!(await prisma.user.findUnique({where: { uid: req.body.userId }})))
                return res.json({ code: 404, msg: "User not found" });

        try{
            const data: ReviewData = await prisma.review.create({ data: review});
            res.send(data)
        } catch (err: any) {
            const code = err.code == "P2002" ? 400 : 500;
            const msg  = err.code == "P2002"
                       ? `Review with ${review.rid} already exists!`
                       : err.message ?? "Something went wrong while adding the review!";

            res.status(code).send(msg);
        }
    },

    findAll: async (req: Request, res: Response) => {
        try {
            const data = await prisma.review.findMany()
            res.send(data)
        } catch (err: any) {
            res.status(500).send("An error ocurred while retrieving the reviews!")
        }
    },

    findByPk: async (req: Request<RID>, res: Response) => {
        const result = validate<RID>(
            req.params, 
            [validateRID]
        );

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        const rid: number = result.value.rid as number;

        try {
            const data = await prisma.review.findUniqueOrThrow({ where: { rid: +rid } });
            res.send(data);
        } catch (err: any) {
            res.status(500).send(err.message ?? "Some error corrued while retrieving Review by RID");
        }
    },

    delete: async (req: Request<RID>, res: Response) => {
        const result = validate<RID>(
            req.params,
            [validateRID]
        )

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        const rid: number = result.value.rid as number;

        try {
            res.send(
                await prisma.review.delete({
                    where: { rid: +rid },
                })
            );
        } catch (err: any) {
            res.status(500).send(
                "Some error occurred while deleting review by RID"
            );
        }
    },

    update: async (req: Request<RID>, res: Response) => {
        if (!req.params.rid) {
            res.status(400).send("Must provide review ID!")
            return;
        }

        const result = validate<ReviewData>(
            req.body,
            [reviewValidation.validUpdate]
        )

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        const review = {
            rating: result.value.rating,
            comment: result.value.comment
        } as ReviewData

        try {
            res.send(
                await prisma.review.update({
                    where: { rid: +req.params.rid },
                    data: review
                })
            );
        } catch (err: any) {
            res.status(500).send(
                err.message ?? "Some error ocurred while retrieving the user by UID"
            );
        }
    },
}
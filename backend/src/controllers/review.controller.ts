import prisma from "../config/prisma";
import express, { Request, Response } from "express";

import { ReviewData, reviewValidation }  from "../types/review";

export const reviewController = {
    create: async (req: Request, res: Response) => {
        if (!req.body) {
            res.status(400).send("Body cannot be empty!");
            return;
        }

        const review = req.body as ReviewData;
        if (!reviewValidation.notNull_create(review)) {
            res.status(400).send("Must provide all the obligatory review fields!");
            return;
        }
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
    }
}
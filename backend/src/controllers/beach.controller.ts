import prisma from "../config/prisma";
import express, { Request, Response } from "express";

import { BeachData, beachValidation} from "../types/beach";
import { validate } from "../utils/validation";
import { Result, Ok, Err } from "../types/meta/result"

type BID = { bid: number };
const validateBID = (bid: BID) => bid ? Ok(bid) : Err({ code: 400, msg: "Must provide beach ID!" })

export const beachController = {
    create: async (req: Request, res: Response) => {
        const result = validate<BeachData>(
            req.body,
            [beachValidation.valid]
        );

        if (!result.ok) {
            res.status(400).send("Body cannot be empty!");
            return;
        }

        const beach = result.value as BeachData;
        console.log(req.body)
        
        try{
            const data = await prisma.beach.create({ data: req.body });
            res.send(data)
        } catch (err: any) {
            const code = err.code == "P2002" ? 400 : 500;
            const msg  = err.code == "P2002"
                       ? `Beach with ${beach.name} already exists!`
                       : err.message ?? "Something went wrong while adding the beach!";

            res.status(code).send(msg);
        }
    },

    findAll: async (req: Request, res: Response) => {
        try{
            const data = await prisma.beach.findMany()
            res.send(data)
        }
        catch (err: any) {
            res.status(500).send("An error ocurred while retrieving the beaches!")
        }
    },

    findByPk: async (req: Request<BID>, res: Response) => {
        const result = validate<BID>(
            req.params, 
            [validateBID]
        );

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        const bid: number = result.value.bid as number;

        try {
            const data = await prisma.beach.findUniqueOrThrow({ where: { bid: +bid } });
            res.send(data);
        } catch (err: any) {
            res.status(500).send(err.message ?? "Some error corrued while retrieving Beach by BID");
        }
    },

    delete: async (req: Request<BID>, res: Response) => {
        const result = validate<BID>(
            req.params,
            [validateBID]
        )

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        const bid: number = result.value.bid as number;

        try {
            res.send(
                await prisma.beach.delete({
                    where: { bid: +bid },
                })
            );
        } catch (err: any) {
            res.status(500).send(
                "Some error occurred while deleting beach by BID"
            );
        }
    },

    update: async (req: Request<BID>, res: Response) => {
        if (!req.params.bid) {
            res.status(400).send("Must provide beach ID!")
            return;
        }

        const result = validate<BeachData>(
            req.body,
            [beachValidation.validUpdate]
        )

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        const beach = {
            name: result.value.name,
            status: result.value.status,
            image: result.value.image,
            description: result.value.description,
            location: result.value.location
        } as BeachData

        try {
            res.send(
                await prisma.beach.update({
                    where: { bid: +req.params.bid },
                    data: beach
                })
            );
        } catch (err: any) {
            res.status(500).send(
                err.message ?? "Some error ocurred while retrieving the event by EID"
            );
        }
    },
}
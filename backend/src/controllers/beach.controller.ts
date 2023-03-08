import prisma from "../config/prisma";
import express, { Request, Response } from "express";

import { BeachData, beachValidation} from "../types/beach";

export const beachController = {
    create: async (req: Request, res: Response) => {
        
        if (!req.body) {
            res.status(400).send("Body cannot be empty!");
            return;
        }

        const beach = req.body as BeachData;
        if (beachValidation.notNull_create(beach)) {
            res.status(400).send("Must provide all the obligatory beach fields!");
            return;
        }
        try{
            const data = await prisma.beach.create({ data: req.body});
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

    findByPk: async (req: Request<{ bid: number }>, res: Response) => {
        if (!req.params) {
            res.status(400).send("Empty request!");
            return;
        }
        const bid: number = req.params.bid as number

        if (!bid || bid === undefined) {
            res.status(400).send("BID cannot be empty!");
            return;
        }

        prisma.beach
            .findUniqueOrThrow({ where: { bid: +bid } })
            .then((data) => res.send(data))
            .catch((err) => res.status(500)
                               .send(err.message ?? "Some error occurred while retrieving Beach by BID")
            );

    },

    delete: async (req: Request<{ bid: number }>, res: Response) => {
        if (!req.body) {
            res.status(400).send("Empty request!");
            return;
        }
        const { bid } = req.params as { bid: number };

        if (!bid) {
            res.status(400).send("Content cannot be empty!");
            return;
        }

        try {
            res.send(
                await prisma.beach.delete({
                    where: { bid: +bid },
                })
            );
        } catch (err: any) {
            res.status(500).send(
                "Some error occurred while deleting Beach by BID"
            );
        }
    },
}
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
    }
}
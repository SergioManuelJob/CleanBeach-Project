import prisma from "../config/prisma";
import express, { Request, Response } from "express";

import { participantsListData, participantsListValidation } from "../types/participantsList";

export const participantsListController = {
    create: async (req: Request, res: Response) => {
        if (!req.body) {
            res.status(400).send("Body cannot be empty!");
            return;
        }

        const participantsList = req.body as participantsListData;
        if (!participantsListValidation.notNull_create(participantsList)) {
            res.status(400).send("Must provide all the obligatory participants list fields!");
            return;
        }
        try{
            const data: participantsListData = await prisma.participantsList.create({ data: participantsList});
            res.send(data)
        } catch (err: any) {
            const code = err.code == "P2002" ? 400 : 500;
            const msg  = err.code == "P2002"
                       ? `Participants list with ${participantsList.pid} already exists!`
                       : err.message ?? "Something went wrong while adding the beach!";

            res.status(code).send(msg);
        }
    }
}
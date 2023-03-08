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
    },

    findAll: async (req: Request, res: Response) => {
        try{
            const data = await prisma.participantsList.findMany()
            res.send(data)
        }
        catch (err: any) {
            res.status(500).send("An error ocurred while retrieving the participants lists!")
        }
    },

    findByPk: async (req: Request<{ pid: number }>, res: Response) => {
        if (!req.params) {
            res.status(400).send("Empty request!");
            return;
        }
        const pid: number = req.params.pid as number

        if (!pid || pid === undefined) {
            res.status(400).send("PID cannot be empty!");
            return;
        }

        prisma.participantsList
            .findUniqueOrThrow({ where: { pid: +pid } })
            .then((data) => res.send(data))
            .catch((err) => res.status(500)
                               .send(err.message ?? "Some error occurred while retrieving Participats list by PID")
            );

    },

    delete: async (req: Request<{ pid: number }>, res: Response) => {
        if (!req.body) {
            res.status(400).send("Empty request!");
            return;
        }
        const { pid } = req.params as { pid: number };

        if (!pid) {
            res.status(400).send("Content cannot be empty!");
            return;
        }

        try {
            res.send(
                await prisma.participantsList.delete({
                    where: { pid: +pid },
                })
            );
        } catch (err: any) {
            res.status(500).send(
                "Some error occurred while deleting Participant List by PID"
            );
        }
    },
}
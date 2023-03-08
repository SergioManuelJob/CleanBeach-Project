import prisma from "../config/prisma";
import express, { Request, Response } from "express";

import { EventData, eventValidation } from "../types/event";

export const eventController = {
    create: async (req: Request, res: Response) => {
        if (!req.body) {
            res.status(400).send("Body cannot be empty!");
            return;
        }

        const event = req.body as EventData;
        if (!eventValidation.notNull_create(event)) {
            res.status(400).send("Must provide all the obligatory event fields!");
            return;
        }
        try{
            const data: EventData = await prisma.event.create({ data: event});
            res.send(data)
        } catch (err: any) {
            const code = err.code == "P2002" ? 400 : 500;
            const msg  = err.code == "P2002"
                       ? `Event with ${event.eid} already exists!`
                       : err.message ?? "Something went wrong while adding the event!";

            res.status(code).send(msg);
        }
    },

    findAll: async (req: Request, res: Response) => {
        try{
            const data = await prisma.event.findMany()
            res.send(data)
        }
        catch (err: any) {
            res.status(500).send("An error ocurred while retrieving the events!")
        }
    },

    findByPk: async (req: Request<{ eid: number }>, res: Response) => {
        if (!req.params) {
            res.status(400).send("Empty request!");
            return;
        }
        const eid = req.params.eid

        if (!eid || eid === undefined) {
            res.status(400).send("EID cannot be empty!");
            return;
        }

        await prisma.event
            .findUnique({ where: { eid } })
            .then((data) => res.send(data))
            .catch((err) => res.status(500)
                               .send(err.message ?? "Some error occurred while retrieving Player by PID")
            );

    },

    delete: async (req: Request<{ eid: number }>, res: Response) => {
        if (!req.body) {
            res.status(400).send("Empty request!");
            return;
        }
        const { eid } = req.params as { eid: number };

        if (!eid) {
            res.status(400).send("Content cannot be empty!");
            return;
        }

        try {
            res.send(
                await prisma.event.delete({
                    where: { eid },
                })
            );
        } catch (err: any) {
            res.status(500).send(
                "Some error occurred while deleting Event by EID"
            );
        }
    },
}
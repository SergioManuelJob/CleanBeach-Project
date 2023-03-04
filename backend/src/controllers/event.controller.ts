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
    }
}
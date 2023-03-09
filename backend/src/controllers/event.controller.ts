import prisma from "../config/prisma";
import express, { Request, Response } from "express";

import { EventData, eventValidation } from "../types/event";
import { validate } from "../utils/validation";
import { Result, Ok, Err } from "../types/meta/result"

type EID = { eid: number };
const validateEID = (eid: EID) => eid ? Ok(eid) : Err({ code: 400, msg: "Must provide event ID!" })

export const eventController = {
    create: async (req: Request, res: Response) => {
        if (!req.body) {
            res.status(400).send("Body cannot be empty!");
            return;
        }

        const event = req.body as EventData;
        if (!eventValidation.validCreate(event)) {
            res.status(400).send("Must provide all the obligatory event fields!");
            return;
        }

        if (
            !(await prisma.user.findUnique({
                where: { uid: req.body.organizerId },
            }))
        )
            return res.json({ code: 404, msg: "User not found" });

        if (
            !(await prisma.beach.findUnique({
                where: { bid: req.body.beachId },
            }))
        )
            return res.json({ code: 404, msg: "Beach not found" });

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
        const eid: number = req.params.eid as number

        if (!eid || eid === undefined) {
            res.status(400).send("EID cannot be empty!");
            return;
        }

        await prisma.event
            .findUniqueOrThrow({ where: { eid: +eid } })
            .then((data) => res.send(data))
            .catch((err) => res.status(500)
                               .send(err.message ?? "Some error occurred while retrieving Event by EID")
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
                    where: { eid: +eid },
                })
            );
        } catch (err: any) {
            res.status(500).send(
                "Some error occurred while deleting Event by EID"
            );
        }
    },

    update: async (req: Request<EID>, res: Response) => {
        if (!req.params.eid) {
            res.status(400).send("Must provide event ID!")
            return;
        }

        const result = validate<EventData>(
            req.body,
            [eventValidation.validUpdate]
        )

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        if (
            !(await prisma.beach.findUnique({
                where: { bid: req.body.beachId },
            }))
        )
            return res.json({ code: 404, msg: "Beach not found" });

        const event = {
            name: result.value.name,
            beachId: result.value.beachId,
            description: result.value.description,
            date: result.value.date
        } as EventData

        try {
            res.send(
                await prisma.event.update({
                    where: { eid: +req.params.eid },
                    data: event
                })
            );
        } catch (err: any) {
            res.status(500).send(
                err.message ?? "Some error ocurred while retrieving the event by EID"
            );
        }
    },
}
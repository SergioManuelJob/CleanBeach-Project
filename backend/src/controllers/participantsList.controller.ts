import prisma from "../config/prisma";
import express, { Request, Response } from "express";

import { ParticipantsListData, participantsListValidation } from "../types/participantsList";
import { validate } from "../utils/validation";

import { Result, Ok, Err } from "../types/meta/result";

type PID = { pid: number };
const validatePID = (pid: PID) => pid ? Ok(pid) : Err({ code: 400, msg: "Must provide user ID!" })

export const participantsListController = {
    create: async (req: Request, res: Response) => {
        const result = validate<ParticipantsListData>(
            req.body,
            [participantsListValidation.validCreate]
        );

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        const participant = result.value as ParticipantsListData;

        if (!(await prisma.event.findUnique({where: { eid: participant.eventId }})))
            return res.json({ code: 404, msg: "Event not found" });

        if (!(await prisma.user.findUnique({where: { uid: participant.userId }})))
            return res.json({ code: 404, msg: "User not found" });

        try{
            const data: ParticipantsListData = await prisma.participantsList.create({ data: participant });
            res.send(data)
        } catch (err: any) {
            const code = err.code == "P2002" ? 400 : 500;
            const msg  = err.code == "P2002"
                       ? `Participants list with ${participant.pid} already exists!`
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

    findByPk: async (req: Request<PID>, res: Response) => {
        const result = validate<PID>(
            req.params, 
            [validatePID]
        );

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        const pid: number = result.value.pid as number;

        try {
            const data = await prisma.participantsList.findUniqueOrThrow({ where: { pid: +pid } });
            res.send(data);
        } catch (err: any) {
            res.status(500).send(err.message ?? "Some error corrued while retrieveing Participant by PID");
        }
    },

    delete: async (req: Request<PID>, res: Response) => {
        const result = validate<PID>(
            req.params,
            [validatePID]
        )

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        const pid: number = result.value.pid as number;

        try {
            res.send(
                await prisma.participantsList.delete({
                    where: { pid: +pid }, // +uid = uid as number
                })
            );
        } catch (err: any) {
            res.status(500).send(
                "Some error occurred while deleting Participant by PID"
            );
        }
    },
}
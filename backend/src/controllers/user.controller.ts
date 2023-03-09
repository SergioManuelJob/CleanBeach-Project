import prisma from "../config/prisma";
import express, { Request, Response } from "express";

import { UserData, userValidation } from "../types/user";
import { validate } from "../utils/validation";
import { Result, Ok, Err } from "../types/meta/result";

type UID = { uid: number };

export const userController = {
    create: async (req: Request, res: Response) => {
        const result = validate<UserData>(
            req.body,
            [userValidation.notNull_create, userValidation.userEmail]
        );

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return
        }

        const user: UserData = {
            ...result.value,
            // password: // encrypting function
            isAdmin: result.value.isAdmin !== undefined ? result.value.isAdmin : false
        }; 

        try {
            const data: UserData = await prisma.user.create({ data: user });
            prisma.user.findUnique
            res.send(data);
        } catch (err: any) {
            const code = err.code == "P2002" ? 400 : 500;
            const msg  = err.code == "P2002"
                       ? `User with ${user.email} or ${user.name} already exists!`
                       : err.message ?? "Something went wrong while adding the user!";

            res.status(code).send(msg);
        }
    },

    findAll: async (req: Request, res: Response) => {
        try{
            const data = await prisma.user.findMany()
            res.send(data)
        }
        catch (err: any) {
            res.status(500).send("An error ocurred while retrieving the users!")
        }
    },

    findByPk: async (req: Request<UID>, res: Response) => {
        const result = validate<UID>(
            req.params, 
            [(uid: UID) => uid ? Ok(uid) : Err({ code: 400, msg: "Must provide user ID!" })]
        );

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        const uid: number = result.value.uid as number;

        try {
            const data = await prisma.user.findUniqueOrThrow({ where: { uid: +uid } });
            res.send(data);
        } catch (err: any) {
            res.status(500).send(err.message ?? "Some error corrued while retrieveing User by UID");
        }
    },

    delete: async (req: Request<{ uid: number }>, res: Response) => {
        if (!req.body) {
            res.status(400).send("Empty request!");
            return;
        }
        const { uid } = req.params as { uid: number };

        if (!uid) {
            res.status(400).send("Content cannot be empty!");
            return;
        }

        try {
            res.send(
                await prisma.user.delete({
                    where: {uid: +uid },
                })
            );
        } catch (err: any) {
            res.status(500).send(
                "Some error occurred while deleting User by UID"
            );
        }
    },
}
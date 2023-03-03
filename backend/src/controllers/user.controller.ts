import prisma from "../config/prisma";
import express, { Request, Response } from "express";

import { UserData, userValidation } from "../types/user";

export const userController = {
    create: async (req: Request, res: Response) => {
        /* ... */
        if (!req.body) {
            res.status(400).send("Body cannot be empty!");
            return;
            // return res.json({code: 400, msg: "Body cannot be empty!"});
        }

        const user = req.body as UserData;
        if (!userValidation.notNull_create(user)) {
            res.status(400).send("Must provide user fields!");
            return;
        }

        try {
            const data: UserData = await prisma.user.create({ data: user });
            prisma.user.findUnique
            res.send(data);
        } catch (err: any) {
            const code = err.code == "P2002" ? 400 : 500;
            const msg  = err.code == "P2002"
                       ? `User with ${user.email} already exists!`
                       : err.message ?? "Something went wrong while adding the user!";

            res.status(code).send(msg);
        }
    }
}
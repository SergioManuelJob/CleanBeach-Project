import express, { Request, Response } from "express";
import prisma from "../config/prisma";

import { UserData, userValidation } from "../types/user";
import { Result, Ok, Err } from "../types/meta/result";
import { validate } from "../utils/validation";

import { generateToken, encryptPassword, matchPassword } from "../utils/encrypt";

type LoginParams   = { email: string, password: string };

const authController = {
    login: async (req: Request, res: Response) => {
        
        const result = validate<LoginParams>(
            req.body,
            [(params: LoginParams) => {
                return params.password && userValidation.email(params.email)
                     ? Ok(params)
                     : Err({ code: 400, msg: "[VALIDATION ERROR] Must provide a valid email & a password!" })
            }]
        )

        if (!result.ok) {
            res.status(result.error.code).send(result.error.msg);
            return;
        }

        try{
            const data = await prisma.user.findUnique({ where: { email: result.value.email }});
            if(!data || !matchPassword(result.value.password, data.password))
                return res.json("Email or password invalid!");

            const { name, uid, email, password, isAdmin } = data;
            return res.json({ 
                uid, name, email, isAdmin,
                access_token: generateToken({ uid, email, password, isAdmin }),
            })
        } catch (err: any){
            res.status(500).send("Some error ocurred while logging in!")
        }
    },

    signin: async (req: Request, res: Response) => {

        const result = validate<UserData>(
            req.body,
            [userValidation.validCreate, userValidation.userEmail]
        );

        if (!result.ok) return res.json(result.error);

        const body = {
            name: result.value.name,
            password: await encryptPassword(result.value.password),
            email: result.value.email
        };

        try {
            const data: UserData = await prisma.user.create({ data: body });
            const { name, uid, email, password, isAdmin } = data;
            if (!uid) throw new Error("XDDDDDDDDDDDDDDD");
            return res.json({ 
                email, isAdmin, uid, name,
                access_token: generateToken({ uid, email, password, isAdmin }),
            });
        } catch (err: any) {
            const code = err.code == "P2002" ? 400 : 500;
            const msg  = err.code == "P2002"
                       ? `User with ${body.email} or ${body.name} already exists!`
                       : err.message ?? "Something went wrong while adding the user!";

            res.status(code).send(msg);
        }
    },
}

export default authController;
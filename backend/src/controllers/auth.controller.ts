import express, { Request, Response } from "express";
import prisma from "../config/prisma";

import { UserData, userValidation } from "../types/user";
import { validate } from "../utils/validation";

import { generateToken, encryptPassword, matchPassword } from "../utils/encrypt";

import { userController } from "./user.controller";
import bcrypt from "bcrypt";

type LoginParams = { email: string, password: string };

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

        try{
            prisma.user.findUnique({where: { email: req.body.email}}).
            then(data => {
                if(!data || !matchPassword(req.body.password, data.password))
                return res.json("Username or password invalid!")

                const { uid, email, isAdmin } = data;
                return res.json({ 
                    email, isAdmin,
                    access_token: generateToken({ uid, email
                        
                        , isAdmin }),
                })
            })
        }
    catch (err: any){
        res.status(500).send("Some error ocurred while logging in")
    }
    },

    signin: async (req: Request, res: Response) => {
        const result = handleReqBody<UserData>(
            req.body,
            { code: 400, msg: "Must provide username and password!" },
            bodyNotEmpty
        );

        if (!result.ok) return res.json(result.error);

        const body = {
            name: result.value.name,
            password: await encryptPassword(result.value.password),
            email: result.value.email
        };

        prisma.user
            .create({ data: body })
            .then((data) => {
                const { uid, email, isAdmin } = data;
                return res.json({
                    email, isAdmin,
                    access_token: generateToken(data),
                });
            })
            .catch((err) => {
                switch (err.code) {
                    case "P2002":
                        return res.json({
                            code: 400,
                            msg: `User with name ${body.name} or ${body.email} already exists`,
                        });

                    default:
                        return res.json({
                            code: 500,
                            msg: "Some error occurred while creating the User",
                        });
                }
            });
    },
}

export default authController;
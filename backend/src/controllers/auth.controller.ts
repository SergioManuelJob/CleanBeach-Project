import express, { Request, Response } from "express";
import prisma from "../config/prisma";

import { UserData } from "../types/user";
import { validate } from "../utils/validation";

import { userController } from "./user.controller";
import bcrypt from "bcrypt";

const authController = {
    login: async (req: Request, res: Response) => {
        const result = validate<string>(
            req.body,
        )

        try{
            prisma.user.findUnique({where: { email: req.body.email}}).
            then(data => {
                if(!data || data.password == req.body.password)
                return res.json("Username or password invalid!")

                const { uid, name, isAdmin } = data;
                return res.json({ 
                    name, isAdmin,
                    access_token: generateToken({ uid, name, isAdmin }),
                })
            })
        }
    catch (err: any){
        res.status(500).send("Some error ocurred while logging in")
    }
    }
}
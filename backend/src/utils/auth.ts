import { Request, Response, RequestHandler } from "express"
import jwt from "jsonwebtoken";
import { UserData } from "../types/user";
import { handleReqBody } from "./validation";

const verifyAdmin: RequestHandler = (
    req, res, next
) => {
    if (!req.headers.authorization) {
        res.status(401).send("Not logged in");
        return;
    }

    const token = req.headers.authorization.split("Bearer ")[1];
    const body = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as UserData;

    // console.log(body)
    if (body.isAdmin === false) {
        res.status(403).send("Not authorized");
        return;
    }

    next() // Once you finish whatever the hell you are doing continue the request
}

export { verifyAdmin };
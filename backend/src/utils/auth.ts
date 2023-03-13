import { Request, Response, NextFunction, RequestHandler } from "express"
import jwt from "jsonwebtoken";
import { UserData } from "../types/user";

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

    next() // Once you finish wathever the hell you are doing continue the request
}

type UserRelated<T> = T & { userId: number };

const verifyAdminOrSelf: RequestHandler = (
    req: Request,
    res: Response, 
    next: NextFunction, 
) => {
    if (!req.headers.authorization) {
        res.status(401).send("Not logged in!");
        return;
    }

    const token = req.headers.authorization.split("Bearer ")[1];
    const authBody = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as UserData;

    console.log(`authBody: ${authBody}`);
    console.log(`{\n\tauthBody.uid: ${authBody.uid},\n\treq.params: ${JSON.stringify(req.params)},\n\treq.body.userId: ${req.body.userId}\n}`)

    let check = false;
    if (req.params && req.params.uid) {
        check = authBody.uid !== +req.params.uid
    } else if (req.body && req.body.userId !== undefined) {
        check = authBody.uid !== +req.body.userId;
    }

    if (check || authBody.isAdmin === false) {
        res.status(403).send("Not authorized");
        return;
    }

    next()
}

export { verifyAdmin, verifyAdminOrSelf };
import { User } from "@prisma/client";
import { Request, Response, NextFunction, RequestHandler } from "express"
import jwt from "jsonwebtoken";
import { UserData } from "../types/user";
import { Result, Ok, Err } from "../types/meta/result";
import { validate } from "./validation";

const verifyAdmin: RequestHandler = (
    req, res, next
) => {
    if (!req.headers.authorization) {
        res.status(401).send("Not logged in");
        return;
    }

    const token = req.headers.authorization.split("Bearer ")[1];
    const body  = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as UserData;

    // console.log(body)
    if (body.isAdmin === false) {
        res.status(403).send("Not authorized");
        return;
    }

    next() // Once you finish wathever the hell you are doing continue the request
}


// const verifyAdminOrSelfForRouter: RequestHandler = (
//     req: Request,
//     res: Response, 
//     next: NextFunction, 
// ) => {
//     if (!req.headers.authorization) {
//         res.status(401).send("Not logged in!");
//         return;
//     }

//     const token = req.headers.authorization.split("Bearer ")[1];
//     const authBody = jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as UserData;

//     console.log(`authBody: ${authBody}`);
//     console.log(`{\n\tauthBody.uid: ${authBody.uid},\n\treq.params: ${JSON.stringify(req.params)},\n\treq.body.userId: ${req.body.userId}\n}`)

//     let check = false;
//     // This kinda sucks and idk if it works
//     // TODO: Try and fix it?
//     if (req.params && req.params.uid) {
//         check = authBody.uid !== undefined && +req.params.uid !== undefined
//              && authBody.uid !== +req.params.uid;
//     } else if (req.body && req.body.userId) {
//         check = authBody.uid !== undefined && +req.body.userId !== undefined
//              && authBody.uid !== +req.body.userId;
//     }

//     if (check || authBody.isAdmin === false) {
//         res.status(403).send("Not authorized");
//         return;
//     }

//     next()
// }

const verifyAdminOrSelfUid = (
    req: Request<{ uid: number }>,
    res: Response,
    next: NextFunction
) => {
    if (!req.headers.authorization) {
        res.status(401).send("Not logged in!");
        return;
    }

    const token = req.headers.authorization.split("Bearer ")[1];
    console.log(token);
    const validBody = () => {
        try {
            return jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as UserData;
        } catch(err) {
            return null;
        }
    };
    const authBody = validBody();


    if (authBody === null) {
        res.status(403).send("Invalid token!");
        return;
    }

    const result = validate<{ uid: number }>(
        req.params,
        [(param: { uid: number }) => { 
            return param !== undefined && param.uid !== undefined
                 ? Ok(param)
                 : Err({ code: 400, msg: "Must provide user ID" })
        }]
    )

    if (!result.ok) {
        res.status(result.error.code).send(result.error.msg);
        return;
    }
    console.log(authBody.uid, result.value.uid)
    if (!authBody.isAdmin && authBody.uid != result.value.uid) {
        res.status(403).send("Unauthorized!");
        return;
    }

    next()
}

// type UserRelated<T> = T extends { userId: number } 

const verifyAdminOrSelfUserId = <T>(
    req: Request<T>,
    res: Response,
    next: NextFunction
) => {
    if (!req.headers.authorization) {
        res.status(401).send("Not logged in!");
        return;
    }

    const token = req.headers.authorization.split("Bearer ")[1];
    const validBody = () => {
        try {
            return jwt.verify(token, process.env.JWT_SECRET as jwt.Secret) as UserData;
        } catch(err) {
            return null;
        }
    };
    const authBody = validBody();


    if (authBody === null) {
        res.status(403).send("Invalid token!");
        return;
    }

    const result = validate<{ userId: number }>(
        req.body,
        [(param: { userId: number }) => { 
            return param !== undefined && param.userId !== undefined
                 ? Ok(param)
                 : Err({ code: 400, msg: "Must provide user ID" })
        }]
    )

    if (!result.ok) {
        res.status(result.error.code).send(result.error.msg);
        return;
    }

    if (!authBody.isAdmin && authBody.uid != result.value.userId) {
        res.status(403).send("Unauthorized!");
        return;
    }

    next()
}

export { verifyAdmin, verifyAdminOrSelfUid, verifyAdminOrSelfUserId };
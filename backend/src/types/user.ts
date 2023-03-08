import { Result, Ok, Err } from "./meta/result";
import { ResponseData } from "./meta/response-data";

export type UserData = {
    uid?: number,
    name: string,
    email: string,
    password: string,
    isAdmin: boolean
}

export const userValidation = {
    notNull_create: (user: UserData): Result<UserData, ResponseData> => {
        const valid  = user.name     !== undefined
                    && user.email    !== undefined
                    && user.password !== undefined;

        return valid 
             ? Ok(user) 
             : Err({
                code: 400,
                msg: "[VALIDATION ERROR] Must provide the following fields: { name, email, password }"
            } as ResponseData);
    },

    notNull_update: (user: UserData): Result<UserData, ResponseData> => {
        const valid  = user.uid      !== undefined
                    && user.name     !== undefined
                    && user.email    !== undefined
                    && user.password !== undefined;

        return
    }

    email: ()

    userEmail: (user: UserData): Result<UserData, ResponseData> => {

    }
}
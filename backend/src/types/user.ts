import { Result, Ok, Err } from "./meta/result";
import { ResponseData } from "./meta/response-data";

export type UserData = {
    uid?: number,
    name: string,
    email: string,
    password: string,
    isAdmin: boolean
}

const email = (email: string): Result<string, ResponseData> => {
    return email && email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
         ? Ok(email)
         : Err({
            code: 400,
            msg: "[VALIDATION ERROR] Email not valid!"
         })
};

export const userValidation = {
    validCreate: (user: UserData): Result<UserData, ResponseData> => {
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

    // validUpdate: (user: UserData): Result<UserData, ResponseData> => {
    //     const valid  = user.uid      !== undefined
    //                 && user.name     !== undefined
    //                 && user.email    !== undefined
    //                 && user.password !== undefined;

    //     return valid
    //          ? Ok(user)
    //          : Err({
    //             code: 400,
    //             msg: "[VALIDATION ERROR] Must provide the following fields: { uid, name, email, password }"
    //          } as ResponseData);
    // },

    email,

    userEmail: (user: UserData): Result<UserData, ResponseData> => {
        const result = email(user.email);
        return result.ok ? Ok(user) : Err(result.error);
    }
}
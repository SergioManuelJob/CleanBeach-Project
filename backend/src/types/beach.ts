import { Result, Ok, Err } from "../types/meta/result";
import { ResponseData } from "./meta/response-data";
import { Status } from "@prisma/client";


export type BeachData = {
    bid?: number,
    name: string 
    status: Status
    image: string
    description: string
    location: string
}


export const beachValidation = {
    valid: (beach: BeachData): Result<BeachData, ResponseData> => {
        const valid = beach.name        !== undefined 
                   && beach.description !== undefined
                   && beach.image       !== undefined
                   && beach.location    !== undefined;

        return valid 
            ? Ok(beach) 
            : Err({
                code: 400,
                msg: "[VALIDATION ERROR] Must provide the following fields: { name, description, image, location }"
            } as ResponseData);
    },

    validUpdate: (beach: BeachData): Result<BeachData, ResponseData> => {
        const valid  = beach.name        !== undefined
                    && beach.status      !== undefined
                    && beach.image       !== undefined
                    && beach.location    !== undefined
                    && beach.description !== undefined

        return valid 
             ? Ok(beach) 
             : Err({
                code: 400,
                msg: "[VALIDATION ERROR] Must provide the following fields: { name, status, image, location, description  }"
            } as ResponseData);
    },
}
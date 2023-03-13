import { Result, Ok, Err } from "./meta/result";
import { ResponseData } from "./meta/response-data";

export type EventData = {
    eid?: number
    name: string
    beachId: number 
    organizerId: number
    description: string 
    date: Date
}


export const eventValidation = {

    validCreate: (event: EventData): Result<EventData, ResponseData> => {
        const valid = event.beachId     !== undefined 
        && event.name !== undefined
        && event.organizerId    !== undefined
        && event.description !== undefined
        && event.date !== undefined;

        return valid 
             ? Ok(event) 
             : Err({
                code: 400,
                msg: "[VALIDATION ERROR] Must provide the following fields: { name, beachId, organizerId, description, date }"
            } as ResponseData);
    },

    validUpdate: (event: EventData): Result<EventData, ResponseData> => {
        const valid  = event.name     !== undefined
                    && event.beachId    !== undefined
                    && event.description    !== undefined
                    && event.date    !== undefined

        return valid 
             ? Ok(event) 
             : Err({
                code: 400,
                msg: "[VALIDATION ERROR] Must provide the following fields: { name, beachId, description, date  }"
            } as ResponseData);
    },
}
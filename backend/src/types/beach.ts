import { Result, Ok, Err } from "../types/meta/result";
import { ResponseData } from "./meta/response-data";
import { Status } from "@prisma/client";


export type BeachData = {
    bid?: number,
    name: string 
    status: Status
    image: string
    description: string
    address: string,
    latitude: number,
    longitude: number
}

const LatitudeRanges  = { min:  -90, max:  90 };
const LongitudeRanges = { min: -180, max: 180 }


export const beachValidation = {
    validCreate: (beach: BeachData): Result<BeachData, ResponseData> => {
        const valid = beach.name        !== undefined 
                //    && beach.image       !== undefined
                   && beach.description !== undefined
                   && beach.address     !== undefined
                   && beach.latitude    !== undefined
                   && beach.longitude   !== undefined;

        return valid 
            ? Ok(beach) 
            : Err({
                code: 400,
                msg: "[VALIDATION ERROR] Must provide the following fields: { name, description, address, latitude, longitude }"
            } as ResponseData);
    },

    validUpdate: (beach: BeachData): Result<BeachData, ResponseData> => {
        const valid  = beach.name        !== undefined
                    && beach.status      !== undefined
                    // && beach.image       !== undefined
                    && beach.description !== undefined
                    && beach.address     !== undefined
                    && beach.latitude    !== undefined
                    && beach.longitude   !== undefined;

        return valid 
             ? Ok(beach) 
             : Err({
                code: 400,
                msg: "[VALIDATION ERROR] Must provide the following fields: { name, status, description, address, latitude, longitude  }"
            } as ResponseData);
    },

    validLatLong: (beach: BeachData): Result<BeachData, ResponseData> => {
        const valid = beach.latitude  >= LatitudeRanges.min  
                   && beach.latitude  <= LatitudeRanges.max
                   && beach.longitude >= LongitudeRanges.min 
                   && beach.longitude <= LongitudeRanges.max
        
        const msg = `[VALIDATION ERROR] Provided LatLong { ${beach.latitude}, ${beach.longitude} } is out of bounds; `
                  + `Latitude ranges: [${LatitudeRanges.min}, ${LatitudeRanges.max}]; `
                  + `Longitude ranges: [${LongitudeRanges.min}, ${LongitudeRanges.max}]`;

        return valid
             ? Ok(beach)
             : Err({ code: 400, msg })
    }
}
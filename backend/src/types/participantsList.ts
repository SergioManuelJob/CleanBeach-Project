import { Result, Ok, Err } from "../types/meta/result";
import { ResponseData } from "../types/meta/response-data";

export type ParticipantsListData = {
    pid?: number
    userId: number
    eventId: number
}


export const participantsListValidation = {
    validCreate: (participantsList: ParticipantsListData): Result<ParticipantsListData, ResponseData> => {
        const valid = participantsList.userId  !== undefined 
                   && participantsList.eventId !== undefined;
        
        return valid
             ? Ok(participantsList)
             : Err({ code: 400, msg: "[VALIDATION ERROR] Must provide the following fields: { userId, eventId }" })
    }
}
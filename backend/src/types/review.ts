import { Result, Ok, Err } from "./meta/result";
import { ResponseData } from "./meta/response-data";

export type ReviewData = {
    rid?: number
    userId: number 
    beachId: number
    rating: number 
    comment: string
}


export const reviewValidation = {
    validCreate: (review: ReviewData): Result<ReviewData, ResponseData> => {
        const valid  = review.rating     !== undefined
                    && review.comment    !== undefined
                    && review.userId    !== undefined
                    && review.beachId    !== undefined

        return valid 
             ? Ok(review) 
             : Err({
                code: 400,
                msg: "[VALIDATION ERROR] Must provide the following fields: { rating, comment }"
            } as ResponseData);
    },

    validUpdate: (review: ReviewData): Result<ReviewData, ResponseData> => {
        const valid  = review.rating     !== undefined
                    && review.comment    !== undefined

        return valid 
             ? Ok(review) 
             : Err({
                code: 400,
                msg: "[VALIDATION ERROR] Must provide the following fields: { rating, comment }"
            } as ResponseData);
    },
}
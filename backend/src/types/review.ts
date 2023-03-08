export type ReviewData = {
    rid?: number
    userId: number 
    beachId: number
    rating: number 
    comment: string
}


export const reviewValidation = {
    notNull_create: (review: ReviewData): boolean => {
        return review.rating     !== undefined 
            && review.userId    !== undefined
            && review.beachId !== undefined
            && review.comment !== undefined;
    }
}
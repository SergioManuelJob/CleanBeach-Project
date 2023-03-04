export type ReviewData = {
    rid?: string
    userId: string 
    beachId: string
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
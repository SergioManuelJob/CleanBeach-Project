enum Status {
    Poor,
    Sufficient,
    Good,
    Excellent
}

export type BeachData = {
    bid?: number,
    name: string 
    status: Status
    image: Blob 
    description: string
    location: string
}


export const beachValidation = {
    notNull_create: (beach: BeachData): boolean => {
        return beach.name     !== undefined 
            && beach.description !== undefined
            && beach.image !== undefined
            && beach.location !== undefined;
    }
}
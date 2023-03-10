export type EventData = {
    eid?: number
    name: string
    beachId: number 
    organizerId: number
    description: string 
    date: Date
}


export const eventValidation = {
    notNull_create: (event: EventData): boolean => {
        return event.beachId     !== undefined 
            && event.name !== undefined
            && event.organizerId    !== undefined
            && event.description !== undefined;
    }
}
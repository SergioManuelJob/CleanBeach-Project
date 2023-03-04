export type EventData = {
    eid?: string
    name: string
    beachId: string 
    organizerId: string
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
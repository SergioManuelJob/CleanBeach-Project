export type participantsListData = {
    pid?: number
    userId: number
    eventId: number
}


export const participantsListValidation = {
    notNull_create: (participantsList: participantsListData): boolean => {
        return participantsList.userId     !== undefined 
            && participantsList.eventId    !== undefined;
    }
}
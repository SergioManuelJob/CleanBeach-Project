export type participantsListData = {
    pid?: string
    userId: string
    eventId: string
}


export const participantsListValidation = {
    notNull_create: (participantsList: participantsListData): boolean => {
        return participantsList.userId     !== undefined 
            && participantsList.eventId    !== undefined;
    }
}
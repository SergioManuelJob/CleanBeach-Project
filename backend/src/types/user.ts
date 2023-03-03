export type UserData = {
    uid?: string,
    name: string,
    email: string,
    password: string,
    isAdmin: boolean
}

export const userValidation = {
    notNull_create: (user: UserData): boolean => {
        return user.name     !== undefined 
            && user.email    !== undefined
            && user.password !== undefined;
    }
}
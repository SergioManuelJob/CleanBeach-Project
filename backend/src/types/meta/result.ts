type Defined<T> = T extends null | undefined ? never : T;

type Result<T, E = Error> = { ok: true , value: Defined<T> }
                          | { ok: false, error: Defined<E> }

const Ok  = <T>(value: Defined<T>): Result<T, never> => {
    return { ok: true , value }
}

const Err = <E>(error: Defined<E>): Result<never, E> => {
    return { ok: false, error }
}

export {
    Defined,
    Result,
    Ok,
    Err,
}
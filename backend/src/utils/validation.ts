import { Defined, Result, Ok, Err } from "../types/meta/result";
import { ResponseData } from "../types/meta/response-data";

type ValidationFunction<T> = (param: T) => Result<T, ResponseData>

const validate = <T>(
    body: any,
    validationFuncs: [ValidationFunction<T>, ...ValidationFunction<T>[]] // At least one function!
): Result<T, ResponseData> => {
    if (!body)
        return Err({ code: 400, msg: "Body cannot be empty!" });

    const data = body as Defined<T>;

    for (let func of validationFuncs) {
        const result = func(data);
        if (!result.ok) return Err(result.error);
    }

    return Ok(data);
}

export { validate };
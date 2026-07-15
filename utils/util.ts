import * as R from "ramda"

//Higgery order function
export function testedfun(tested: boolean) {
    return function (func: Function): Function {
        if (!tested) {
            //This finction fun implemetation
            console.log(`%c function ${func.name} is not tested %c`, `color: red`, `color: black`)
            return ()=>{
                // This finction fun call
                throw Error(`function ${func.name} is not tested`)
            }
        }
        else
            return func
    }
}


export let isUndefined = testedfun(false)(function isUndefined(value: any) {
    return R.isNil(value)
})

export let isNull = testedfun(false)(function isNull(value: any) {
    return R.isNil(value)
})

export let isUndefinedOrNull = testedfun(false)(function isUndefinedOrNull(value: any) {
    return (isUndefined(value) || isNull(value))
})

export let isEmpty = testedfun(false)(function isEmpty(value: any) {
    if (typeof value === "string") {
        return value.trim().length === 0;
    }
    else if (typeof value === "number") {
        return value === 0;
    } else if (typeof value === "object") {
        return Object.keys(value).length === 0;
    } else if (typeof value === 'boolean') {
        return !value;
    } else if (value instanceof Map) {
        return value.size === 0;
    }
    else if (Array.isArray(value)) {
        return value.length === 0;
    }
    return isUndefinedOrNull(value)
}) 


//Backend  connected to frontend

type RequestInterceptor = (request: Request) => Request | Promise<Request>;
type ResponseInterceptor = (response: Response) => Response | Promise<Response>;

class HttpReq extends Request {
    // Registry for interceptors
    private static requestInterceptors: RequestInterceptor[] = [];
    private static responseInterceptors: ResponseInterceptor[] = [];

    // Static methods to add interceptors globally
    static addRequestInterceptor(interceptor: RequestInterceptor) {
        this.requestInterceptors.push(interceptor);
    }

    static addResponseInterceptor(interceptor: ResponseInterceptor) {
        this.responseInterceptors.push(interceptor);
    }

    constructor(url: string, options: RequestInit = {}) {
        super(url, options);
    }

    async response(): Promise<Response> {
        let request: Request = this;

        // Run all request interceptors
        for (const interceptor of HttpReq.requestInterceptors) {
            request = await interceptor(request);
        }

        try {
            let res = await fetch(request);

            // Run all response interceptors
            for (const interceptor of HttpReq.responseInterceptors) {
                res = await interceptor(res);
            }

            if (!res.ok) throw res;
            return res;
        } catch (err) {
            throw err;
        }
    }
}




  




















import { RequestMethod, RequestParameter, Response } from "../model";
export declare function registerRequestMapping(tag: {
    new (): any;
} | string, path: string, method: RequestMethod, requestParameters: RequestParameter[], responses: Response[], summary?: string): void;

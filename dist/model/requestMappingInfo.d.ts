import { RequestMethod } from "./requestMethod";
import { RequestParameter } from "./requestParameter";
import { Response } from "./response";
export declare class RequestMappingInfo {
    unqiueKey: string;
    tag: string;
    path: string;
    method: RequestMethod;
    requestParameters: RequestParameter[];
    responses: Response[];
    summary: string;
}

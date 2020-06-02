import { DataType } from "./dataType";
import { HttpStatusCode } from "./httpStatusCode";
export declare class Response {
    code: HttpStatusCode;
    dataType: DataType;
    refModel: {
        new (): any;
    } | DataType;
    description: string;
    constructor(code: HttpStatusCode, dataType: DataType);
    constructor(code: HttpStatusCode, dataType: DataType, refModel: {
        new (): any;
    } | DataType);
    constructor(code: HttpStatusCode, dataType: DataType, description: string);
    constructor(code: HttpStatusCode, dataType: DataType, refModel: {
        new (): any;
    } | DataType, description: string);
}

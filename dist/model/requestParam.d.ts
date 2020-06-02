import { DataType } from "./dataType";
import { RequestParameter } from "./requestParameter";
export declare class RequestParam extends RequestParameter {
    required: boolean;
    constructor(name: string, dataType: DataType);
    constructor(name: string, dataType: DataType, required: boolean);
    constructor(name: string, dataType: DataType, description: string);
    constructor(name: string, dataType: DataType, required: boolean, description: string);
}

import { DataType } from "./dataType";
export declare abstract class RequestParameter {
    name: string;
    dataType: DataType;
    description: string;
    constructor(name: string, dataType: DataType, description?: string);
}

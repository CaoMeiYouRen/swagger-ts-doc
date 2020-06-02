import { DataType } from "./dataType";
import { RequestParameter } from "./requestParameter";
export declare class RequestBody extends RequestParameter {
    refModel: {
        new (): any;
    };
    constructor(name: string, dataType: DataType);
    constructor(name: string, dataType: DataType, refModel: {
        new (): any;
    });
    constructor(name: string, dataType: DataType, description: string);
    constructor(name: string, dataType: DataType, refModel: {
        new (): any;
    }, description: string);
}

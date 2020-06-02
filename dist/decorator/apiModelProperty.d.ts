import { DataType } from "../model";
export declare function apiModelProperty(dataType: DataType): any;
export declare function apiModelProperty(dataType: DataType, required: boolean): any;
export declare function apiModelProperty(dataType: DataType, required: boolean, refModel: {
    new (): any;
} | DataType): any;
export declare function apiModelProperty(dataType: DataType, required: boolean, description: string): any;
export declare function apiModelProperty(dataType: DataType, required: boolean, refModel: {
    new (): any;
} | DataType, description: string): any;

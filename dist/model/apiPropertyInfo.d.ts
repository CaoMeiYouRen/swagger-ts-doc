import { DataType } from "../model";
export declare class ApiPropertyInfo {
    modelName: string;
    propertyName: string;
    dataType: DataType;
    required: boolean;
    description: string;
    refModel: {
        new (): any;
    } | DataType;
}

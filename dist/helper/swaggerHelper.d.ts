import { ApiPropertyInfo, RequestMappingInfo, RequestParameter, Response } from "../model";
export declare class SwaggerHelper {
    static generateDefinitions(propertyCache: {
        [modelName: string]: {
            [property: string]: ApiPropertyInfo;
        };
    }): any;
    static generatePaths(requestMappingInfos: RequestMappingInfo[]): any;
    static generateModelDefinition(apiPropertyInfos: ApiPropertyInfo[]): any;
    static generatePathParameter(requestArgument: RequestParameter): any;
    static generateResponse(responseBody: Response): any;
    private static generatePropertyDef;
}

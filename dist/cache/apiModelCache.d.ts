import { ApiPropertyInfo } from "../model";
export declare class ApiModelCache {
    static getInstance(): ApiModelCache;
    private static instance;
    private readonly propertyCache;
    private constructor();
    cachePropertyInfo(propertyInfo: ApiPropertyInfo): void;
    getModelInfos(modelName: string): ApiPropertyInfo[];
    getPropertyCache(): {
        [modelName: string]: {
            [property: string]: ApiPropertyInfo;
        };
    };
}

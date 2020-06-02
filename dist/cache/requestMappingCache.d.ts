import { RequestMappingInfo } from "../model";
export declare class RequestMappingCache {
    static getInstance(): RequestMappingCache;
    private static instance;
    private readonly requestMappingCache;
    private constructor();
    cacheRequestMappingInfo(requestMappingInfo: RequestMappingInfo): void;
    getRequestMappingInfos(): RequestMappingInfo[];
}

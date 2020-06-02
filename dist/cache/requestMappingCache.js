"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMappingCache = void 0;
const lodash = require("lodash");
let RequestMappingCache = /** @class */ (() => {
    class RequestMappingCache {
        constructor() {
            this.requestMappingCache = {};
            // hide constructor
        }
        static getInstance() {
            return this.instance;
        }
        cacheRequestMappingInfo(requestMappingInfo) {
            const unqiueKey = requestMappingInfo.unqiueKey;
            this.requestMappingCache[unqiueKey] = requestMappingInfo;
        }
        getRequestMappingInfos() {
            return lodash.values(this.requestMappingCache);
        }
    }
    RequestMappingCache.instance = new RequestMappingCache();
    return RequestMappingCache;
})();
exports.RequestMappingCache = RequestMappingCache;
//# sourceMappingURL=requestMappingCache.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModelCache = void 0;
const lodash = require("lodash");
const helper_1 = require("../helper");
let ApiModelCache = /** @class */ (() => {
    class ApiModelCache {
        constructor() {
            this.propertyCache = {};
            // hide constructor
        }
        static getInstance() {
            return this.instance;
        }
        cachePropertyInfo(propertyInfo) {
            const modelName = propertyInfo.modelName;
            const propertyName = propertyInfo.propertyName;
            let propMap = this.propertyCache[modelName];
            if (helper_1.CommonHelper.isNullOrUndefined(propMap)) {
                propMap = {};
                propMap[propertyName] = propertyInfo;
                this.propertyCache[modelName] = propMap;
            }
            else {
                propMap[propertyName] = propertyInfo;
            }
        }
        getModelInfos(modelName) {
            const propMap = this.propertyCache[modelName];
            if (helper_1.CommonHelper.isNullOrUndefined(propMap)) {
                return [];
            }
            return lodash.values(propMap);
        }
        getPropertyCache() {
            return this.propertyCache;
        }
    }
    ApiModelCache.instance = new ApiModelCache();
    return ApiModelCache;
})();
exports.ApiModelCache = ApiModelCache;
//# sourceMappingURL=apiModelCache.js.map
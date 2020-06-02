"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiModelProperty = void 0;
const cache_1 = require("../cache");
const helper_1 = require("../helper");
const model_1 = require("../model");
function apiModelProperty(dataType, required, a1, a2) {
    const cache = cache_1.ApiModelCache.getInstance();
    return (target, propertyKey) => {
        if (helper_1.CommonHelper.isNullOrUndefined(target)
            || helper_1.CommonHelper.isNullOrUndefined(target.constructor)
            || helper_1.CommonHelper.isNullOrUndefined(target.constructor.name)) {
            throw new Error("cannot find model from target.constructor.name");
        }
        let internalRefModel = null;
        let propertyNotes;
        if (typeof a1 === "function" || Number.isInteger(a1)) {
            internalRefModel = a1;
        }
        else if (typeof a1 === "string") {
            propertyNotes = a1;
        }
        if (typeof a2 === "string") {
            propertyNotes = a2;
        }
        const propertyInfo = new model_1.ApiPropertyInfo();
        propertyInfo.modelName = target.constructor.name;
        propertyInfo.propertyName = propertyKey;
        propertyInfo.dataType = dataType;
        propertyInfo.required = helper_1.CommonHelper.isNullOrUndefined(required) ? false : required;
        propertyInfo.description = propertyNotes;
        propertyInfo.refModel = internalRefModel;
        cache.cachePropertyInfo(propertyInfo);
    };
}
exports.apiModelProperty = apiModelProperty;
//# sourceMappingURL=apiModelProperty.js.map
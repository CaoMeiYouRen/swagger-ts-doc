"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRequestMapping = void 0;
const lodash = require("lodash");
const cache_1 = require("../cache");
const helper_1 = require("../helper");
const model_1 = require("../model");
function registerRequestMapping(tag, path, method, requestParameters, responses, summary) {
    const cache = cache_1.RequestMappingCache.getInstance();
    const requestMappingInfo = new model_1.RequestMappingInfo();
    const tagStr = typeof tag === "function" ? helper_1.CommonHelper.getModelName(tag) : tag;
    requestMappingInfo.tag = tagStr;
    requestMappingInfo.unqiueKey = generateUniqueKey(path, method, requestParameters);
    requestMappingInfo.path = path;
    requestMappingInfo.method = method;
    requestMappingInfo.requestParameters = requestParameters;
    requestMappingInfo.responses = responses;
    requestMappingInfo.summary = summary;
    cache.cacheRequestMappingInfo(requestMappingInfo);
}
exports.registerRequestMapping = registerRequestMapping;
function generateUniqueKey(path, method, requestArguments) {
    const methodStr = model_1.RequestMethod[method];
    let requestArgumentStr;
    if (helper_1.CommonHelper.isNullOrUndefined(requestArguments)) {
        requestArgumentStr = "";
    }
    else {
        const argNames = lodash.map(requestArguments, (x) => x.name);
        requestArgumentStr = lodash.join(argNames, "-");
    }
    return `path:${path}_method:${methodStr}_arg:${requestArgumentStr}`;
}
//# sourceMappingURL=registerRequestMapping.js.map
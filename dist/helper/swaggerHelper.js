"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerHelper = void 0;
const lodash = require("lodash");
const helper_1 = require("../helper");
const model_1 = require("../model");
class SwaggerHelper {
    static generateDefinitions(propertyCache) {
        const result = {};
        for (const modelName in propertyCache) {
            if (propertyCache.hasOwnProperty(modelName)) {
                const propertyMap = propertyCache[modelName];
                const apiPropertyInfos = lodash.values(propertyMap);
                result[modelName] = SwaggerHelper.generateModelDefinition(apiPropertyInfos);
            }
        }
        return result;
    }
    static generatePaths(requestMappingInfos) {
        const pathGroup = lodash.groupBy(requestMappingInfos, "path");
        const result = {};
        for (const key in pathGroup) {
            if (pathGroup.hasOwnProperty(key)) {
                const pathDef = {};
                const groupRequestMappingInfos = pathGroup[key];
                for (const requestMappingInfo of groupRequestMappingInfos) {
                    const tags = [requestMappingInfo.tag];
                    const consumes = ["application/json"];
                    const produces = ["application/json"];
                    const parameters = [];
                    const responses = {};
                    if (!helper_1.CommonHelper.isNullOrUndefined(requestMappingInfo.requestParameters)) {
                        for (const requestArgument of requestMappingInfo.requestParameters) {
                            const parameter = SwaggerHelper.generatePathParameter(requestArgument);
                            parameters.push(parameter);
                        }
                    }
                    for (const response of requestMappingInfo.responses) {
                        responses[response.code] = SwaggerHelper.generateResponse(response);
                    }
                    const methodDef = {};
                    methodDef.tags = tags;
                    methodDef.consumes = consumes;
                    methodDef.produces = produces;
                    methodDef.parameters = parameters;
                    methodDef.responses = responses;
                    methodDef.summary = requestMappingInfo.summary;
                    const requestMethod = model_1.RequestMethod[requestMappingInfo.method].toLowerCase();
                    pathDef[requestMethod] = methodDef;
                }
                result[key] = pathDef;
            }
        }
        return result;
    }
    static generateModelDefinition(apiPropertyInfos) {
        const required = [];
        const properties = {};
        for (const apiPropertyInfo of apiPropertyInfos) {
            const propertyName = apiPropertyInfo.propertyName;
            if (apiPropertyInfo.required) {
                required.push(propertyName);
            }
            const propTypeDef = SwaggerHelper.generatePropertyDef(apiPropertyInfo.dataType, apiPropertyInfo.refModel) || {};
            propTypeDef.type = model_1.DataType[apiPropertyInfo.dataType].toLowerCase();
            propTypeDef.description = apiPropertyInfo.description;
            properties[propertyName] = propTypeDef;
        }
        const modelDef = {};
        modelDef.type = "object";
        modelDef.required = required;
        modelDef.properties = properties;
        return modelDef;
    }
    static generatePathParameter(requestArgument) {
        const result = {};
        result.description = requestArgument.description;
        if (requestArgument instanceof model_1.RequestBody) {
            result.in = "body";
            result.name = requestArgument.name;
            result.required = true;
            const refModel = {};
            const modelName = helper_1.CommonHelper.getModelName(requestArgument.refModel);
            refModel.$ref = `#/definitions/${modelName}`;
            result.schema = refModel;
        }
        else if (requestArgument instanceof model_1.RequestParam) {
            result.in = "query";
            result.name = requestArgument.name;
            result.required = requestArgument.required;
            result.type = model_1.DataType[requestArgument.dataType].toLowerCase();
        }
        else if (requestArgument instanceof model_1.PathVariable) {
            result.in = "path";
            result.name = requestArgument.name;
            result.required = true;
            result.type = model_1.DataType[requestArgument.dataType].toLowerCase();
        }
        return result;
    }
    static generateResponse(responseBody) {
        const result = {};
        result.description = responseBody.description;
        const typeStr = model_1.DataType[responseBody.dataType].toLowerCase();
        result.type = typeStr;
        result.schema = SwaggerHelper.generatePropertyDef(responseBody.dataType, responseBody.refModel);
        return result;
    }
    static generatePropertyDef(dataType, refModel) {
        if (helper_1.CommonHelper.isNullOrUndefined(refModel)) {
            return undefined;
        }
        const propTypeDef = {};
        if (typeof refModel === "function") {
            const refModelStr = helper_1.CommonHelper.getModelName(refModel);
            switch (dataType) {
                case model_1.DataType.ARRAY:
                    propTypeDef.items = {
                        $ref: `#/definitions/${refModelStr}`,
                    };
                    break;
                case model_1.DataType.OBJECT:
                    propTypeDef.$ref = `#/definitions/${refModelStr}`;
                    break;
            }
        }
        else {
            switch (dataType) {
                case model_1.DataType.ARRAY:
                    propTypeDef.items = {
                        type: model_1.DataType[refModel].toLowerCase(),
                    };
                    break;
            }
        }
        return propTypeDef;
    }
}
exports.SwaggerHelper = SwaggerHelper;
//# sourceMappingURL=swaggerHelper.js.map
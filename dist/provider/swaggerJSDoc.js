"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerJSDoc = void 0;
const cache_1 = require("../cache");
const helper_1 = require("../helper");
function swaggerJSDoc(options) {
    const apiModelCache = cache_1.ApiModelCache.getInstance();
    const requestMappingCache = cache_1.RequestMappingCache.getInstance();
    const definitions = helper_1.SwaggerHelper.generateDefinitions(apiModelCache.getPropertyCache());
    const paths = helper_1.SwaggerHelper.generatePaths(requestMappingCache.getRequestMappingInfos());
    const result = {};
    result.info = options.info;
    result.schemes = ["http", "https"];
    result.definitions = definitions;
    result.paths = paths;
    result.swagger = "2.0";
    return JSON.stringify(result);
}
exports.swaggerJSDoc = swaggerJSDoc;
//# sourceMappingURL=swaggerJSDoc.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonHelper = void 0;
class CommonHelper {
    static isNullOrUndefined(value) {
        return value === null
            || typeof value === "undefined";
    }
    static isBlank(value) {
        return CommonHelper.isNullOrUndefined(value)
            || value.trim() === "";
    }
    static isNotBlank(value) {
        return !CommonHelper.isBlank(value);
    }
    static isArray(value) {
        const result = value instanceof Array;
        return result;
    }
    static getModelName(o) {
        if (CommonHelper.isNullOrUndefined(o)) {
            return "";
        }
        const testObj = typeof o === "function" ? new o() : o;
        return testObj.constructor.name;
    }
    constructor() {
        // hide constructor
    }
}
exports.CommonHelper = CommonHelper;
//# sourceMappingURL=commonHelper.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestParam = void 0;
const helper_1 = require("../helper");
const requestParameter_1 = require("./requestParameter");
class RequestParam extends requestParameter_1.RequestParameter {
    constructor(name, dataType, a1, a2) {
        if (typeof a1 === "string") {
            super(name, dataType, a1);
        }
        else if (typeof a1 === "boolean") {
            super(name, dataType, a2);
            this.required = a1;
        }
        if (helper_1.CommonHelper.isNullOrUndefined(a1)) {
            this.required = false;
        }
    }
}
exports.RequestParam = RequestParam;
//# sourceMappingURL=requestParam.js.map
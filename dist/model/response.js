"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    constructor(code, dataType, a1, a2) {
        this.dataType = dataType;
        this.code = code;
        if (typeof a1 === "string") {
            this.description = a1;
        }
        else if (typeof a1 === "function" || Number.isInteger(a1)) {
            this.refModel = a1;
            this.description = a2;
        }
    }
}
exports.Response = Response;
//# sourceMappingURL=response.js.map
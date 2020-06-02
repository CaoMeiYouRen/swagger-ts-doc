"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestBody = void 0;
const requestParameter_1 = require("./requestParameter");
class RequestBody extends requestParameter_1.RequestParameter {
    constructor(name, dataType, a1, a2) {
        if (typeof a1 === "string") {
            super(name, dataType, a1);
        }
        else if (typeof a1 === "function") {
            super(name, dataType, a2);
            this.refModel = a1;
        }
    }
}
exports.RequestBody = RequestBody;
//# sourceMappingURL=requestBody.js.map
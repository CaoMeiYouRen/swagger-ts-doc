"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
function log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value; // save a reference to the original method
    // NOTE: Do not use arrow syntax here. Use a function expression in 
    // order to use the correct value of `this` in this method (see notes below)
    descriptor.value = (...args) => {
        // pre
        console.log("The method args are: " + JSON.stringify(args));
        // run and store result
        const result = originalMethod.apply(this, args);
        // post
        console.log("The return value is: " + result);
        // return the result of the original method (or modify it before returning)
        return result;
    };
    return descriptor;
}
exports.log = log;
//# sourceMappingURL=log.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyAttributes = void 0;
var PropertyAttributes = /** @class */ (function () {
    function PropertyAttributes() {
        this.Detached = true;
        this.Semi = true;
        this.Terraced = true;
        this.Flat = true;
        this.low = 50000;
        this.high = 500000;
        this.minbeds = 1;
        this.maxbeds = 4;
        this.radius = 2;
        this.location = "islington";
    }
    return PropertyAttributes;
}());
exports.PropertyAttributes = PropertyAttributes;

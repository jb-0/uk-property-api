"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var TryApi_styles_1 = require("./TryApi.styles");
// interface PropertyType {
//     Detached: boolean;
//     Semi: boolean;
//     Terraced: boolean;
//     Flat: boolean;
// }
var PropertyType = /** @class */ (function () {
    function PropertyType() {
        this.Detached = false;
        this.Semi = true;
        this.Terraced = true;
        this.Flat = true;
    }
    return PropertyType;
}());
function TryApi() {
    var _a = react_1.useState(new PropertyType()), propertyType = _a[0], setPropertyType = _a[1];
    return (react_1.default.createElement(TryApi_styles_1.TryApiForm, null,
        react_1.default.createElement(TryApi_styles_1.PropertyTypeSection, null, Object.keys(propertyType).map(function (key, idx) {
            var checkedState = propertyType[key];
            return (react_1.default.createElement("input", { key: idx, value: key, id: key, name: key, type: 'checkbox', defaultChecked: checkedState }));
        })),
        react_1.default.createElement("p", { className: 'form-label' }, "Detached"),
        react_1.default.createElement("input", { className: 'form-input', type: 'checkbox', id: 'detached', name: 'detached', checked: true })));
}
exports.default = TryApi;

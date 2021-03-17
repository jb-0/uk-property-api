"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TryApi_styles_1 = require("./TryApi.styles");
function PropertyType(_a) {
    var propertyAttributes = _a.propertyAttributes, handleFormUpdates = _a.handleFormUpdates;
    return (react_1.default.createElement(TryApi_styles_1.PropertyTypeSection, null, Object.keys(propertyAttributes).map(function (key, idx) {
        var checkedState = propertyAttributes[key];
        if (typeof checkedState === 'boolean') {
            return (react_1.default.createElement("input", { key: idx, value: key, id: key, name: key, type: 'checkbox', defaultChecked: checkedState, onChange: handleFormUpdates }));
        }
    })));
}
exports.default = PropertyType;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TryApi_styles_1 = require("./TryApi.styles");
function Price(_a) {
    var propertyAttributes = _a.propertyAttributes, handleFormUpdates = _a.handleFormUpdates;
    return (react_1.default.createElement(TryApi_styles_1.PriceSection, null,
        react_1.default.createElement("label", null, "Min Price (\u00A3)"),
        react_1.default.createElement("input", { type: 'number', id: 'low', name: 'low', value: propertyAttributes.low, onChange: handleFormUpdates }),
        react_1.default.createElement("label", null, "Max Price (\u00A3)"),
        react_1.default.createElement("input", { type: 'number', id: 'high', name: 'high', value: propertyAttributes.high, onChange: handleFormUpdates })));
}
exports.default = Price;

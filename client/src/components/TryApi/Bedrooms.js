"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TryApi_styles_1 = require("./TryApi.styles");
function Bedrooms(_a) {
    var propertyAttributes = _a.propertyAttributes, handleFormUpdates = _a.handleFormUpdates;
    return (react_1.default.createElement(TryApi_styles_1.BedroomsSection, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("label", null, "Min Beds"),
            react_1.default.createElement("input", { type: 'number', id: 'minbeds', name: 'minbeds', value: propertyAttributes.minbeds, onChange: handleFormUpdates })),
        react_1.default.createElement("div", null,
            react_1.default.createElement("label", null, "Max Beds"),
            react_1.default.createElement("input", { type: 'number', id: 'maxbeds', name: 'maxbeds', value: propertyAttributes.maxbeds, onChange: handleFormUpdates }))));
}
exports.default = Bedrooms;

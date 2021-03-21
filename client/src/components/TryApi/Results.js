"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TryApi_styles_1 = require("./TryApi.styles");
function Results(_a) {
    var propertyData = _a.propertyData;
    if (!propertyData)
        return react_1.default.createElement(react_1.default.Fragment, null);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", null, "Results"),
        react_1.default.createElement(TryApi_styles_1.ResultsSection, null, JSON.stringify(propertyData))));
}
exports.default = Results;

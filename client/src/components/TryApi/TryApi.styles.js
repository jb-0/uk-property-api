"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyTypeSection = exports.BedroomsSection = exports.PriceSection = exports.LocationSection = exports.TryApiForm = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.TryApiForm = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 800px;\n  margin: auto;\n"], ["\n  max-width: 800px;\n  margin: auto;\n"])));
exports.LocationSection = styled_components_1.default.section(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
exports.PriceSection = styled_components_1.default.section(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
exports.BedroomsSection = styled_components_1.default.section(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
exports.PropertyTypeSection = styled_components_1.default.section(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

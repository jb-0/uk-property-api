"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsSection = exports.PropertyTypeSection = exports.BedroomsSection = exports.PriceSection = exports.LocationSection = exports.SubmitButton = exports.TryApiForm = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.TryApiForm = styled_components_1.default.form(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 800px;\n  margin: auto;\n  padding-bottom: 50px;\n\n  & label {\n    padding-right: 10px;\n  }\n\n  & div {\n    padding: 10px;\n  }\n\n  & section {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: baseline;\n    justify-content: center;\n  }\n"], ["\n  max-width: 800px;\n  margin: auto;\n  padding-bottom: 50px;\n\n  & label {\n    padding-right: 10px;\n  }\n\n  & div {\n    padding: 10px;\n  }\n\n  & section {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    align-items: baseline;\n    justify-content: center;\n  }\n"])));
exports.SubmitButton = styled_components_1.default.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-family: inherit;\n  margin: 10px 0;\n"], ["\n  font-family: inherit;\n  margin: 10px 0;\n"])));
exports.LocationSection = styled_components_1.default.section(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
exports.PriceSection = styled_components_1.default.section(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
exports.BedroomsSection = styled_components_1.default.section(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
exports.PropertyTypeSection = styled_components_1.default.section(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""])));
exports.ResultsSection = styled_components_1.default.section(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: var(--secondary-color);\n  border: solid 2px var(--tertiary-color);\n  color: var(--tertiary-color);\n  margin: 0 15px;\n"], ["\n  background-color: var(--secondary-color);\n  border: solid 2px var(--tertiary-color);\n  color: var(--tertiary-color);\n  margin: 0 15px;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;

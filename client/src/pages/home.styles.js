"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyFeaturesSection = exports.KeyFeaturesArticle = exports.HeaderSection = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.HeaderSection = styled_components_1.default.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  width: 800px;\n  margin: auto;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  height: 400px;\n  width: 800px;\n  margin: auto;\n"])));
exports.KeyFeaturesArticle = styled_components_1.default.article(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  display: flex;\n  flex-direction: row;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 10px;\n"], ["\n  width: 100%;\n  color: var(--primary-color);\n  background-color: var(--secondary-color);\n  display: flex;\n  flex-direction: row;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 10px;\n"])));
exports.KeyFeaturesSection = styled_components_1.default.section(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  max-width: 800px;\n  display: flex;\n  flex-direction: row;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n\n  @media only screen and (min-width: 768px) {\n  h3 {\n    flex-basis: 20%;\n  }\n\n  p {\n    flex-basis: 80%\n  }\n}\n"], ["\n  max-width: 800px;\n  display: flex;\n  flex-direction: row;\n  flex-flow: row wrap;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n\n  @media only screen and (min-width: 768px) {\n  h3 {\n    flex-basis: 20%;\n  }\n\n  p {\n    flex-basis: 80%\n  }\n}\n"])));
var templateObject_1, templateObject_2, templateObject_3;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TryApiForm_js_1 = __importDefault(require("../components/TryApiForm.js"));
var home_styles_js_1 = require("./home.styles.js");
function Home() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(home_styles_js_1.HeaderSection, null,
            react_1.default.createElement("h1", null, "UK Property API"),
            react_1.default.createElement("p", null, "Access details for almost half a million properties currently listed for sale on the UK property market")),
        react_1.default.createElement(home_styles_js_1.KeyFeaturesArticle, null,
            react_1.default.createElement(home_styles_js_1.KeyFeaturesSection, null,
                react_1.default.createElement("h3", null, "140"),
                react_1.default.createElement("p", null, "cities/towns across england, scotland, wales and northern island"),
                react_1.default.createElement("h3", null, "10"),
                react_1.default.createElement("p", null, "query parameters, allowing for highly targeted searches"),
                react_1.default.createElement("h3", null, "< >"),
                react_1.default.createElement("p", null, "open source code base, allowing for customisations and improvements"))),
        react_1.default.createElement(TryApiForm_js_1.default, null)));
}
exports.default = Home;

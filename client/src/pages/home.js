"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var home_styles_js_1 = require("./home.styles.js");
var Home = function () {
    return (react_1.default.createElement(home_styles_js_1.HeaderSection, null,
        react_1.default.createElement("h1", null, "UK Property API"),
        react_1.default.createElement("p", null, "Access details for almost half a million properties currently listed for sale on the UK property market")));
};
exports.default = Home;

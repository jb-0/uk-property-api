"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var interfaces_1 = require("./interfaces");
var Location_1 = __importDefault(require("./Location"));
var Price_1 = __importDefault(require("./Price"));
var TryApi_styles_1 = require("./TryApi.styles");
function TryApi() {
    var _a = react_1.useState(new interfaces_1.PropertyAttributes()), propertyAttributes = _a[0], setPropertyAttributes = _a[1];
    function handleFormUpdates(event) {
        // Get the object key so we know which element needs updating
        var targetPropertyType = event.target.id;
        // For boolean cases just use not to switch the value
        if (typeof propertyAttributes[targetPropertyType] === 'boolean') {
            setPropertyAttributes(function (prevValues) {
                var _a;
                return __assign(__assign({}, prevValues), (_a = {}, _a[targetPropertyType] = !propertyAttributes[targetPropertyType], _a));
            });
        }
        // For all non-boolean (number and string) cases, simply set the value
        else {
            setPropertyAttributes(function (prevValues) {
                var _a;
                return __assign(__assign({}, prevValues), (_a = {}, _a[targetPropertyType] = event.target.value, _a));
            });
        }
    }
    return (react_1.default.createElement(TryApi_styles_1.TryApiForm, null,
        react_1.default.createElement(Location_1.default, { propertyAttributes: propertyAttributes, handleFormUpdates: handleFormUpdates }),
        react_1.default.createElement(Price_1.default, { propertyAttributes: propertyAttributes, handleFormUpdates: handleFormUpdates })));
}
exports.default = TryApi;

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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var TryApi_styles_1 = require("./TryApi.styles");
var PropertyAttributes = /** @class */ (function () {
    function PropertyAttributes() {
        this.Detached = true;
        this.Semi = true;
        this.Terraced = true;
        this.Flat = true;
        this.low = 50000;
        this.high = 500000;
        this.minbeds = 1;
        this.maxbeds = 4;
        this.radius = 2;
    }
    return PropertyAttributes;
}());
function TryApi() {
    var _a = react_1.useState(new PropertyAttributes()), propertyAttributes = _a[0], setPropertyAttributes = _a[1];
    function handleFormUpdates(event) {
        var targetPropertyType = event.target.id;
        if (typeof propertyAttributes[targetPropertyType] === 'boolean') {
            setPropertyAttributes(function (prevValues) {
                var _a;
                return __assign(__assign({}, prevValues), (_a = {}, _a[targetPropertyType] = !propertyAttributes[targetPropertyType], _a));
            });
        }
        else {
            setPropertyAttributes(function (prevValues) {
                var _a;
                return __assign(__assign({}, prevValues), (_a = {}, _a[targetPropertyType] = event.target.value, _a));
            });
        }
    }
    return (react_1.default.createElement(TryApi_styles_1.TryApiForm, null,
        react_1.default.createElement(TryApi_styles_1.LocationSection, null,
            react_1.default.createElement("p", { className: 'form-label', id: 'radius-label' }, "Radius (miles)"),
            react_1.default.createElement("input", { className: 'form-input', id: 'radius', type: 'range', min: '1', max: '40', value: propertyAttributes.radius, onChange: handleFormUpdates }),
            react_1.default.createElement("output", { id: 'radiusvalue' }, propertyAttributes.radius)),
        react_1.default.createElement(TryApi_styles_1.PriceSection, null,
            react_1.default.createElement("p", null, "Min Price (\u00A3)"),
            react_1.default.createElement("input", { type: 'number', id: 'low', name: 'low', value: propertyAttributes.low, onChange: handleFormUpdates }),
            react_1.default.createElement("p", null, "Max Price (\u00A3)"),
            react_1.default.createElement("input", { type: 'number', id: 'high', name: 'high', value: propertyAttributes.high, onChange: handleFormUpdates })),
        react_1.default.createElement(TryApi_styles_1.BedroomsSection, null,
            react_1.default.createElement("p", null, "Min Beds"),
            react_1.default.createElement("input", { type: 'number', id: 'minbeds', name: 'minbeds', value: propertyAttributes.minbeds, onChange: handleFormUpdates }),
            react_1.default.createElement("p", null, "Max Beds"),
            react_1.default.createElement("input", { type: 'number', id: 'maxbeds', name: 'maxbeds', value: propertyAttributes.maxbeds, onChange: handleFormUpdates })),
        react_1.default.createElement(TryApi_styles_1.PropertyTypeSection, null, Object.keys(propertyAttributes).map(function (key, idx) {
            var checkedState = propertyAttributes[key];
            if (typeof checkedState === 'boolean') {
                return (react_1.default.createElement("input", { key: idx, value: key, id: key, name: key, type: 'checkbox', defaultChecked: checkedState, onChange: handleFormUpdates }));
            }
        }))));
}
exports.default = TryApi;

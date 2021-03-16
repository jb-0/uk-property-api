"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TryApi_styles_1 = require("./TryApi.styles");
function Location(_a) {
    var propertyAttributes = _a.propertyAttributes, handleFormUpdates = _a.handleFormUpdates;
    return (react_1.default.createElement(TryApi_styles_1.LocationSection, null,
        react_1.default.createElement("label", null, "Location"),
        react_1.default.createElement("select", { name: 'location', id: 'location', value: propertyAttributes.location, onChange: handleFormUpdates },
            react_1.default.createElement("option", { value: 'islington' }, "Islington"),
            react_1.default.createElement("option", { value: 'berkhamsted' }, "Berkhamsted"),
            react_1.default.createElement("option", { value: 'edinburgh' }, "Edinburgh")),
        react_1.default.createElement("label", null, "Radius (miles)"),
        react_1.default.createElement("input", { id: 'radius', type: 'range', min: '1', max: '40', value: propertyAttributes.radius, onChange: handleFormUpdates }),
        react_1.default.createElement("output", null, propertyAttributes.radius)));
}
exports.default = Location;

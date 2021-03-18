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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Bedrooms_1 = __importDefault(require("./Bedrooms"));
var interfaces_1 = require("./interfaces");
var Location_1 = __importDefault(require("./Location"));
var Price_1 = __importDefault(require("./Price"));
var PropertyType_1 = __importDefault(require("./PropertyType"));
var Results_1 = __importDefault(require("./Results"));
var TryApi_styles_1 = require("./TryApi.styles");
function TryApi() {
    var _a = react_1.useState(new interfaces_1.PropertyAttributes()), propertyAttributes = _a[0], setPropertyAttributes = _a[1];
    var _b = react_1.useState(false), submittedForm = _b[0], setSubmittedForm = _b[1];
    var _c = react_1.useState(), propertyData = _c[0], setPropertyData = _c[1];
    function handleFormUpdates(e) {
        // Get the object key so we know which element needs updating
        var targetPropertyType = e.target.id;
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
                return __assign(__assign({}, prevValues), (_a = {}, _a[targetPropertyType] = e.target.value, _a));
            });
        }
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        setSubmittedForm(true);
    }
    react_1.useEffect(function () {
        function callPropertyAPI() {
            return __awaiter(this, void 0, void 0, function () {
                var query, response, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            query = Object.keys(propertyAttributes)
                                .map(function (key) {
                                return key + "=" + propertyAttributes[key];
                            })
                                .join('&');
                            return [4 /*yield*/, fetch("/properties?" + query, {
                                    method: 'GET',
                                    headers: {
                                        Accept: 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                })];
                        case 1:
                            response = _b.sent();
                            _a = setPropertyData;
                            return [4 /*yield*/, response.json()];
                        case 2:
                            _a.apply(void 0, [_b.sent()]);
                            return [2 /*return*/];
                    }
                });
            });
        }
        if (submittedForm) {
            callPropertyAPI();
            setSubmittedForm(false);
        }
    });
    return (react_1.default.createElement(TryApi_styles_1.TryApiForm, { onSubmit: handleFormSubmit },
        react_1.default.createElement("h1", null, "Try it out"),
        react_1.default.createElement("p", null, "Fill out the form below and click submit to try out the UK Property API"),
        react_1.default.createElement(Location_1.default, { propertyAttributes: propertyAttributes, handleFormUpdates: handleFormUpdates }),
        react_1.default.createElement(Price_1.default, { propertyAttributes: propertyAttributes, handleFormUpdates: handleFormUpdates }),
        react_1.default.createElement(Bedrooms_1.default, { propertyAttributes: propertyAttributes, handleFormUpdates: handleFormUpdates }),
        react_1.default.createElement(PropertyType_1.default, { propertyAttributes: propertyAttributes, handleFormUpdates: handleFormUpdates }),
        react_1.default.createElement(TryApi_styles_1.SubmitButton, { type: 'submit' }),
        react_1.default.createElement(Results_1.default, { propertyData: propertyData })));
}
exports.default = TryApi;

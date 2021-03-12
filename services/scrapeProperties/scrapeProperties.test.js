"use strict";
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
var scrapeProperties_js_1 = require("./scrapeProperties.js");
var baseURL = 'https://www.home.co.uk/search/results.htm?inc_sold=0&showmap=0&location=';
describe('getNumberOfPages function tests', function () {
    test('searching for a central london location returns a high page count', function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, pageLimit, noOfPages;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = baseURL + 'islington';
                    pageLimit = 1000;
                    return [4 /*yield*/, scrapeProperties_js_1.getNumberOfPages(url, pageLimit)];
                case 1:
                    noOfPages = _a.sent();
                    expect(noOfPages).toBeGreaterThan(50); // in this location we would expect at least 50 pages
                    return [2 /*return*/];
            }
        });
    }); }, 20000);
    test('applying a limit of 2 returns a page count of 2', function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, pageLimit, noOfPages;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = baseURL + 'islington';
                    pageLimit = 2;
                    return [4 /*yield*/, scrapeProperties_js_1.getNumberOfPages(url, pageLimit)];
                case 1:
                    noOfPages = _a.sent();
                    expect(noOfPages).toEqual(2);
                    return [2 /*return*/];
            }
        });
    }); }, 20000);
    test('applying no explicit limit returns a page count of 3', function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, noOfPages;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = baseURL + 'islington';
                    return [4 /*yield*/, scrapeProperties_js_1.getNumberOfPages(url)];
                case 1:
                    noOfPages = _a.sent();
                    expect(noOfPages).toEqual(3);
                    return [2 /*return*/];
            }
        });
    }); }, 20000);
    test('an invalid location will return a count of 0', function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, pageLimit, noOfPages;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = baseURL + 'lalaland';
                    pageLimit = 20;
                    return [4 /*yield*/, scrapeProperties_js_1.getNumberOfPages(url, pageLimit)];
                case 1:
                    noOfPages = _a.sent();
                    expect(noOfPages).toEqual(0);
                    return [2 /*return*/];
            }
        });
    }); }, 20000);
});
describe('processSearch function tests', function () {
    test('for a central london location 30 dwellings are returned', function () { return __awaiter(void 0, void 0, void 0, function () {
        var url, dwellings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = baseURL + 'islington';
                    return [4 /*yield*/, scrapeProperties_js_1.processSearch(url)];
                case 1:
                    dwellings = _a.sent();
                    expect(dwellings.noOfDwellings).toEqual(30); // given limit of 3 pages expect 30 results
                    return [2 /*return*/];
            }
        });
    }); }, 60000);
});
var puppeteer_1 = __importDefault(require("puppeteer"));
describe('scrapePropertiesFromPage function tests', function () {
    test('for a central london location ten dwellings are returned from the first page', function () { return __awaiter(void 0, void 0, void 0, function () {
        var browser, page, dwellings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, puppeteer_1.default.launch({ args: ['--disable-dev-shm-usage', '--no-sandbox'] })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    return [4 /*yield*/, page.goto(baseURL + 'islington')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, scrapeProperties_js_1.scrapePropertiesFromPage(page)];
                case 4:
                    dwellings = _a.sent();
                    return [4 /*yield*/, browser.close()];
                case 5:
                    _a.sent();
                    expect(dwellings.length).toEqual(10); // on one page (the 1st) we would expect 10
                    return [2 /*return*/];
            }
        });
    }); }, 20000);
});

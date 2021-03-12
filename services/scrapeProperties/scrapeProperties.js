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
exports.scrapePropertiesFromPage = exports.getNumberOfPages = exports.processSearch = void 0;
var puppeteer_1 = __importDefault(require("puppeteer"));
var puppeteerConfig = {
    args: ['--disable-dev-shm-usage', '--no-sandbox'],
};
var processSearch = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var allDwellings, numberOfPages, i, browser, page, pageDwellings, dwellings;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log(url);
                allDwellings = [];
                return [4 /*yield*/, getNumberOfPages(url, 3)];
            case 1:
                numberOfPages = _a.sent();
                i = 1;
                _a.label = 2;
            case 2:
                if (!(i <= numberOfPages)) return [3 /*break*/, 9];
                return [4 /*yield*/, puppeteer_1.default.launch(puppeteerConfig)];
            case 3:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 4:
                page = _a.sent();
                return [4 /*yield*/, page.goto(url + "&page=" + i)];
            case 5:
                _a.sent();
                return [4 /*yield*/, scrapePropertiesFromPage(page)];
            case 6:
                pageDwellings = _a.sent();
                allDwellings.push.apply(allDwellings, pageDwellings);
                return [4 /*yield*/, browser.close()];
            case 7:
                _a.sent();
                console.log(allDwellings);
                _a.label = 8;
            case 8:
                i++;
                return [3 /*break*/, 2];
            case 9:
                dwellings = {
                    noOfDwellings: allDwellings.length,
                    dwellings: allDwellings,
                };
                return [2 /*return*/, dwellings];
        }
    });
}); };
exports.processSearch = processSearch;
/* Identify the number of pages to be scraped, this is based on the number returned at the top of
the page for example: "The Home.co.uk Property Search Engine found 31 flats and houses for sale
in Chelsea (within 1 mile radius)." - Each page contains a max of 10 properties */
var getNumberOfPages = function (url, limit) { return __awaiter(void 0, void 0, void 0, function () {
    var browser, page, pageLimit, numberOfPages;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, puppeteer_1.default.launch(puppeteerConfig)];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                pageLimit = limit || 3;
                return [4 /*yield*/, page.goto(url)];
            case 3:
                _a.sent();
                return [4 /*yield*/, page.evaluate(function () {
                        var _a;
                        var noOfDwellingsText = (_a = document.querySelector('.homeco_pr_content .bluebold')) === null || _a === void 0 ? void 0 : _a.textContent;
                        var pages = 0;
                        var maxPropertiesPerPage = 10;
                        if (noOfDwellingsText) {
                            // Larger numbers may have a comma in, so these are removed. 
                            noOfDwellingsText = noOfDwellingsText.split(',').join('');
                            // By dividing by ten and rounding down we get the number of pages required
                            pages = Math.floor(parseInt(noOfDwellingsText) / maxPropertiesPerPage);
                            // If there is a remainder then +1 so we loop one more page to get the remaining dwellings
                            if (parseInt(noOfDwellingsText) % maxPropertiesPerPage) {
                                pages += 1;
                            }
                        }
                        return pages;
                    })];
            case 4:
                numberOfPages = _a.sent();
                // Limit max number of pages
                if (numberOfPages > pageLimit) {
                    numberOfPages = pageLimit;
                }
                return [4 /*yield*/, browser.close()];
            case 5:
                _a.sent();
                return [2 /*return*/, numberOfPages];
        }
    });
}); };
exports.getNumberOfPages = getNumberOfPages;
var scrapePropertiesFromPage = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var propertiesOnPage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, page.evaluate(function () {
                    var propertyDivs = document.querySelectorAll('.property-listing');
                    var propertiesOnPage = [];
                    var j;
                    for (j = 0; j < propertyDivs.length; j++) {
                        // Property name and link
                        var propertyNameLink = propertyDivs[j].querySelector('.property-listing__header .property-listing__title .house_link');
                        // Property price
                        // Prices containing commentary such as "Offers Over" sit in a Span so an OR is used
                        var propertyPrice = propertyDivs[j].querySelector('.property-listing__header .property-listing__title .property-listing__price');
                        // Property type
                        var propertyType = propertyDivs[j].querySelector('.property-listing__header .property-listing__type');
                        if (propertyNameLink) {
                            var property = {
                                name: (propertyNameLink === null || propertyNameLink === void 0 ? void 0 : propertyNameLink.textContent) || "",
                                price: (propertyPrice === null || propertyPrice === void 0 ? void 0 : propertyPrice.textContent) || "",
                                type: (propertyType === null || propertyType === void 0 ? void 0 : propertyType.textContent) || "",
                                link: "" + propertyNameLink,
                            };
                            propertiesOnPage.push(property);
                        }
                    }
                    return propertiesOnPage;
                })];
            case 1:
                propertiesOnPage = _a.sent();
                return [4 /*yield*/, page.close()];
            case 2:
                _a.sent();
                return [2 /*return*/, propertiesOnPage];
        }
    });
}); };
exports.scrapePropertiesFromPage = scrapePropertiesFromPage;

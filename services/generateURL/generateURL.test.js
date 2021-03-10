"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var generateURL_js_1 = __importDefault(require("./generateURL.js"));
describe('Generate URL function tests (ts)', function () {
    test('using two parameters returns the expected url', function () {
        var url = generateURL_js_1.default({ low: '100', location: 'islington' });
        expect(url).toEqual('https://www.home.co.uk/search/results.htm?inc_sold=0&showmap=0&low=100&location=islington');
    });
    test('using all parameters returns the expected url', function () {
        var url = generateURL_js_1.default({
            low: '100',
            high: '500',
            location: 'islington',
            radius: '20',
            minbeds: '1',
            maxbeds: '3',
            detached: 'true',
            terraced: 'false',
            flat: 'false',
            semi: 'false',
        });
        expect(url).toEqual('https://www.home.co.uk/search/results.htm?inc_sold=0&showmap=0&low=100&high=500&location=islington&radius=20&minbeds=1&maxbeds=3&detached=true&terraced=false&flat=false&semi=false');
    });
});

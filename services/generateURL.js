"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateURL = void 0;
var generateURL = function (query) {
    var baseURL = 'https://www.home.co.uk/search/results.htm?';
    var validKeys = [
        'low',
        'high',
        'location',
        'radius',
        'minbeds',
        'maxbeds',
        'detached',
        'terraced',
        'flat',
        'semi',
    ];
    // Exclude sold properties and given there is no browser do not show showmap
    var cleanQuery = 'inc_sold=0&showmap=0';
    for (var key in query) {
        var value = query[key];
        if (validKeys.includes(key.toLowerCase())) {
            cleanQuery += "&" + key + "=" + value;
        }
    }
    return "" + baseURL + cleanQuery;
};
exports.generateURL = generateURL;

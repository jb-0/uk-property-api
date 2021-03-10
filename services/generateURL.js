"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a URL that can be used to query home.co.uk
 * @param  {QueryParams} query the query object that defines search parameters
 * @return {string} a complete URL including site and query parameters
 */
var generateURL = function (query) {
    var baseURL = 'https://www.home.co.uk/search/results.htm?';
    // Exclude sold properties and given there is no browser do not show showmap
    var cleanQuery = 'inc_sold=0&showmap=0';
    for (var key in query) {
        var value = query[key];
        if (value && isKeyValid(key)) {
            cleanQuery += "&" + key + "=" + value;
        }
    }
    return "" + baseURL + cleanQuery;
};
/**
 * Check if a given key is valid, e.g. can be used in url query string
 * @param  {string} key the key that requires validation
 * @return {boolean} indicates whether or not it is valid
 */
var isKeyValid = function (key) {
    var validKeys = ['low', 'high', 'location', 'radius', 'minbeds', 'maxbeds', 'detached',
        'terraced', 'flat', 'semi'];
    var isKeyValid = validKeys.includes(key.toLowerCase());
    return isKeyValid;
};
exports.default = generateURL;

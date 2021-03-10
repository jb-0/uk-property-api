import { processSearch, getNumberOfPages, scrapePropertiesFromPage } from './scrapeProperties.js';

describe('getNumberOfPages function tests', () => {
  test('using two parameters returns the expected url', () => {
    const url = 'https://www.home.co.uk/search/results.htm?inc_sold=0&showmap=0&low=100&location=islington'
    console.log(getNumberOfPages(url));
    
    // expect(url).toEqual(
    //   'https://www.home.co.uk/search/results.htm?inc_sold=0&showmap=0&low=100&location=islington'
    // );
  });
});
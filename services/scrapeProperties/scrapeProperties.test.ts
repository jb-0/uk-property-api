import { processSearch, getNumberOfPages, scrapePropertiesFromPage } from './scrapeProperties';

const baseURL = 'https://www.home.co.uk/search/results.htm?inc_sold=0&showmap=0&location='

describe('getNumberOfPages function tests', () => {
  test('searching for a central london location returns a high page count', async () => {
    const url = baseURL + 'islington';
    const pageLimit = 1000; // unreasonably high page limit to ensure full count is returned
    const noOfPages = await getNumberOfPages(url, pageLimit);
    
    expect(noOfPages).toBeGreaterThan(50); // in this location we would expect at least 50 pages
  }, 20000);

  test('applying a limit of 2 returns a page count of 2', async () => {
    const url = baseURL + 'islington';
    const pageLimit = 2;
    const noOfPages = await getNumberOfPages(url, pageLimit);
    
    expect(noOfPages).toEqual(2);
  }, 20000);

  test('applying no explicit limit returns a page count of 3', async () => {
    const url = baseURL + 'islington';
    const noOfPages = await getNumberOfPages(url);
    
    expect(noOfPages).toEqual(3);
  }, 20000);

  test('an invalid location will return a count of 0', async () => {
    const url = baseURL + 'lalaland';
    const pageLimit = 20;
    const noOfPages = await getNumberOfPages(url, pageLimit);
    
    expect(noOfPages).toEqual(0);
  }, 20000);
});

describe('processSearch function tests', () => {
  test('for a central london location 30 dwellings are returned', async () => {
    const url = baseURL + 'islington';
    const dwellings = await processSearch(url);

    expect(dwellings.noOfDwellings).toEqual(30); // given limit of 3 pages expect 30 results
  }, 60000);
});

import puppeteer from 'puppeteer';
describe('scrapePropertiesFromPage function tests', () => {
  test('for a central london location ten dwellings are returned from the first page', async () => {
    const browser = await puppeteer.launch({ args: ['--disable-dev-shm-usage', '--no-sandbox']});
    const page = await browser.newPage();
    await page.goto(baseURL + 'islington');
    const dwellings = await scrapePropertiesFromPage(page)

    await browser.close();
    expect(dwellings.length).toEqual(10); // on one page (the 1st) we would expect 10
  }, 20000);
});

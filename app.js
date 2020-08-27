
const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const scrape = require(`${__dirname}/js/scrape.js`);

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

async function scrapeProperties(url) {
  const properties = [];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // Properties appear in divs which iterate through odd numbers, there are 10 results per page
  for (let i = 1; i < 21; i += 2) {
    let propertyName;
    let propertyLink;

    // Begin with a try, if we cannot get the name of the property then we should break the loop
    // this will also handle cases where pages have less than 10 results.
    try {
      const [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[3]/table/tbody/tr[${ i }]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[2]/b/a`);

      // Get property name
      propertyName = await (await el.getProperty('textContent')).jsonValue();
      propertyName = propertyName.replace('\n', ' ');

      // Get property link
      propertyLink = await (await el.getProperty('href')).jsonValue();
    } catch (err) {
      break;
    }

    // Get property type
    let [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[3]/table/tbody/tr[${ i }]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[3]`);
    const propertyType = await (await el.getProperty('textContent')).jsonValue();

    // Get price
    [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[3]/table/tbody/tr[${ i }]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[1]/b`);
    const propertyPrice = await (await el.getProperty('textContent')).jsonValue();

    // Get image src, some properties do not have images so catch those instances
    let propertyImageLink;
    try {
      [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[3]/table/tbody/tr[${ i }]/td/table/tbody/tr[2]/td/div[1]/div[1]/a/img`);
      propertyImageLink = await (await el.getProperty('src')).jsonValue();
    } catch (err) {
      propertyImageLink = 'Image not available';
    }

    const property = {
      name: propertyName,
      price: propertyPrice,
      type: propertyType,
      link: propertyLink,
      imageLink: propertyImageLink,
    };

    properties.push(property);
  }

  return properties;
}

(async () => {
  const properties = await scrapeProperties('https://www.home.co.uk/search/results.htm?location=harrow&TOWN_SEARCH=1&high=500000');
  console.log(properties.length);
})();

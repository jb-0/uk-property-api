
const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const properties = [];

async function scrapeProperties(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  for (let i = 1; i < 21; i += 2) {
    // Get property name
    let [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[3]/table/tbody/tr[${ i }]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[2]/b/a`);
    let propertyName = await (await el.getProperty('textContent')).jsonValue();
    propertyName = propertyName.replace('\n', ' ');

    // Get property link
    const propertyLink = await (await el.getProperty('href')).jsonValue();

    // Get property type
    [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[3]/table/tbody/tr[${ i }]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[3]`);
    const propertyType = await (await el.getProperty('textContent')).jsonValue();

    // Get price
    [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[3]/table/tbody/tr[${ i }]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[1]/b`);
    const propertyPrice = await (await el.getProperty('textContent')).jsonValue();

    // Get image src
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


  console.log(properties);
}

scrapeProperties('https://www.home.co.uk/search/results.htm?location=harrow&TOWN_SEARCH=1&high=500000');

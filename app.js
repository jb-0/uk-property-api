
const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// https://www.home.co.uk/search/

async function scrapeProperties(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const [el] = await page.$x('//*[@id="homeco_v6_main"]/div[1]/div[2]/div[3]/table/tbody/tr[1]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[2]/b/a')
  const propertyName = await (await el.getProperty('textContent')).jsonValue();


  console.log(propertyName)

}

scrapeProperties('https://www.home.co.uk/search/results.htm?location=islington&TOWN_SEARCH=1&high=500000&detached=true&semi=true&terraced=true&flat=true&sort=PRICE_DESC&inc_sold=0&showmap=0&loose=1');

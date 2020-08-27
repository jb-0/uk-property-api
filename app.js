
const express = require('express');
const bodyParser = require('body-parser');

const scrape = require(`${__dirname}/js/scrape.js`);
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

(async () => {
  const properties = await scrape.scrapeProperties('https://www.home.co.uk/search/results.htm?location=harrow&TOWN_SEARCH=1&high=500000');
  console.log(properties.length);
})();

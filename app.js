
const express = require('express');
const bodyParser = require('body-parser');

const scrape = require(`${__dirname}/js/scrape.js`);
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.route('/properties')
  .get((req, res) => {
    // SAMPLE: location=harrow&low=30&high=200000&terraced=true&radius=2
    scrape.constructURL(req.query);
    res.send(req.query);
  });

(async () => {
  //const properties = await scrape.scrapeProperties('https://www.home.co.uk/search/results.htm?location=harrow&TOWN_SEARCH=1&high=500000');
  //console.log(properties.length);
})();

app.listen(port, () => {
  console.log(`UK Property API listening on port ${port}`);
});

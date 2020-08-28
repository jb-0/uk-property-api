
const express = require('express');
const bodyParser = require('body-parser');

const scrape = require(`${__dirname}/js/scrape.js`);
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.route('/properties')
  .get(async (req, res) => {
    const url = scrape.constructURL(req.query);
    const properties = await scrape.scrapeProperties(url);
    res.send(properties);
  });

app.listen(port, () => {
  console.log(`UK Property API listening on port ${port}`);
});

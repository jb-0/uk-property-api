const express = require('express');
const bodyParser = require('body-parser');

const scrape = require(`${__dirname}/methods/scrape.js`);
const app = express();
// const port = process.env.PORT || 3000;

const PORT = 8080;
const HOST = '0.0.0.0';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.route('/').get((req, res) => {
  res.sendFile(`${__dirname}/views/home.html`);
});

app.route('/properties')
  .get(async (req, res) => {
    const url = scrape.constructURL(req.query);
    const properties = await scrape.scrapeProperties(url);
    res.send(properties);
  });

// app.listen(port, () => {
//   console.log(`UK Property API listening on port ${port}`);
// });
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import generateURL from './services/generateURL/generateURL.js'
import { processSearch } from './services/scrapeProperties/scrapeProperties.js'

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors())

app.route('/').get((req, res) => {  
  res.sendFile(`${__dirname}/views/home.html`);
});

app.route('/properties')
  .get(async (req, res) => {
    const url = generateURL(req.query);
    const properties = await processSearch(url);
    res.send(properties);
  });

app.listen(PORT);
console.log(`Running on port ${PORT}`);
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

app.use(express.static(`${__dirname}/client/public`));
app.route('/properties')
  .get(async (req, res) => {
    console.log(req.query);
    
    const url = generateURL(req.query);
    const properties = await processSearch(url);
    res.send(properties);
  });
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/public/index.html`);
});


app.listen(PORT);
console.log(`Running on port ${PORT}`);
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import generateURL from './services/generateURL/generateURL'
import { processSearch } from './services/scrapeProperties/scrapeProperties'

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors())

if (process.env._ && process.env._.indexOf("heroku") !== -1) {
  console.log('Think I am in Heroku, path:');
  console.log(path.join(__dirname, '../client/public'));
  app.use(express.static(path.join(__dirname, '../client/public')));
}
else {
  app.use(express.static(`${__dirname}/client/public`));
}

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
const puppeteer = require('puppeteer');

exports.constructURL = (query) => {
  const baseURL = 'https://www.home.co.uk/search/results.htm?'

  const keys = Object.keys(query);
  const validKeys = ['low', 'high', 'location', 'radius', 'minbeds', 'maxbeds', 'detached',
    'terraced', 'flat', 'semi'];

  // Exclude sold properties and given there is no browser do not show showmap
  let cleanQuery = 'inc_sold=0&showmap=0';

  keys.forEach((key, index) => {
    if (validKeys.includes(key.toLowerCase())) {
      cleanQuery += `&${key}=${query[key]}`;
    }
  });

  return `${baseURL}${cleanQuery}`;
};

exports.scrapeProperties = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const properties = await page.evaluate(() => {
    const propertyDivs = document.querySelectorAll('.homeco_v6_result');
    const properties = [];

    let i;
    for (i = 0; i < propertyDivs.length; i++) {
      const propertyHouseLink = propertyDivs[i].querySelector('.house_link');

      const propertyPrice = propertyDivs[i].querySelector('.blue .bold')

      if (propertyHouseLink) {
        const property = {
          name: propertyHouseLink.textContent,
          link: `${propertyHouseLink}`,
        };

        properties.push(property)
      }
    }
    return properties
  });

  console.log(properties);
};

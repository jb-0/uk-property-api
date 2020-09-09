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

  // Identify the number of pages to be scraped, this is absed on the number returned at the top of
  // the page for example: "The Home.co.uk Property Search Engine found 31 flats and houses for sale
  // in Chelsea (within 1 mile radius)." - Each page contains a max of 10 properties
  const numberOfPages = await page.evaluate(() => {
    const numberOfProperties = document.querySelector('.homeco_pr_content .bluebold');
    const maxPropertiesPerPage = 10;
    const pages = Math.floor(numberOfProperties.textContent / 10)
                            + (numberOfProperties.textContent % maxPropertiesPerPage);
    return pages
  });

  const overallListOfProperties = [];
  const promises = [];

  let i;
  for (i = 0; i <= numberOfPages; i++) {
    const page = await browser.newPage();
    await page.goto(`${url}&page=${i}`);

    promises.push(GetPropertiesOnPage(page));
  }

  const allProperties = await Promise.all(promises);

  // Overall return for scrapeProperties - return list of properties
  return allProperties;
};

function GetPropertiesOnPage(page) {
return page.evaluate(() => {
    const propertyDivs = document.querySelectorAll('.homeco_v6_result');
    const propertiesOnPage = [];

    let j;
    for (j = 0; j < propertyDivs.length; j++) {
      // Property name and link
      const propertyNameLink = propertyDivs[j].querySelector('.house_link');

      // Property price
      // Prices containing commentary such as "Offers Over" sit in a Span so an OR is used
      const propertyPrice = propertyDivs[j].querySelector('.blue .bold .span')
                            || propertyDivs[j].querySelector('.blue .bold');

      // Property type
      const propertyType = propertyDivs[j].querySelectorAll('.blue .bold');

      if (propertyNameLink) {
        const property = {
          name: propertyNameLink.textContent,
          link: `${propertyNameLink}`,
          price: propertyPrice.textContent,
          type: propertyType[2].textContent,
        };
        propertiesOnPage.push(property);
      }
    }

    // page.evaluate return list of properties to the const
    return propertiesOnPage;
  });
}
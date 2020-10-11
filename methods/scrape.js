const puppeteer = require('puppeteer');

exports.constructURL = (query) => {
  const baseURL = 'https://www.home.co.uk/search/results.htm?';

  const keys = Object.keys(query);
  const validKeys = [
    'low',
    'high',
    'location',
    'radius',
    'minbeds',
    'maxbeds',
    'detached',
    'terraced',
    'flat',
    'semi',
  ];

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
  const browser = await puppeteer.launch({
    args: ['--disable-dev-shm-usage', '--no-sandbox'],
  });
  const page = await browser.newPage();
  await page.goto(url);

  let numberOfPages = await GetNumberOfPages(page);

  // Limit max number of pages
  if (numberOfPages > 3) {
    numberOfPages = 3;
  }

  // Close browser instance, this is done to try conserve memory, the same approach is taken in the
  // loop below. This allows the app to be hosted on a free source such as Heroku.
  await browser.close();

  const allProperties = [];

  let i;
  for (i = 1; i <= numberOfPages; i++) {
    const browser = await puppeteer.launch({
      args: ['--disable-dev-shm-usage', '--no-sandbox'],
    });
    const page = await browser.newPage();

    await page.goto(`${url}&page=${i}`);

    allProperties.push(await GetPropertiesOnPage(page));

    await browser.close();
  }

  // Create a valid JSON return
  const propertiesJSON = {
    numberOfPropertiesFound: allProperties.flat().length,
    properties: allProperties.flat(),
  };

  // Overall return for scrapeProperties - return list of properties
  return propertiesJSON;
};

/* Identify the number of pages to be scraped, this is based on the number returned at the top of
the page for example: "The Home.co.uk Property Search Engine found 31 flats and houses for sale
in Chelsea (within 1 mile radius)." - Each page contains a max of 10 properties */
async function GetNumberOfPages(page) {
  const numberOfPages = await page.evaluate(() => {
    const numberOfProperties =
      document.querySelector('.homeco_pr_content .bluebold') || false;
    const maxPropertiesPerPage = 10;
    let pages = 0;
    if (numberOfProperties) {
      // Larger numbers may have a comma in, so these are removed. By dividing by ten
      // and rounding down we get the number of pages required
      pages = Math.floor(
        numberOfProperties.textContent.split(',').join('') / 10,
      );

      // If there is a remainder then +1 so we loop one more page to get these
      if (numberOfProperties.textContent % maxPropertiesPerPage) {
        pages += 1;
      }
    }
    return pages;
  });

  return numberOfPages;
}

async function GetPropertiesOnPage(page) {
  // page.on('console', (consoleObj) => console.log(consoleObj.text()));

  const propertiesOnPage = await page.evaluate(() => {
    const propertyDivs = document.querySelectorAll('.property-listing');
    const propertiesOnPage = [];

    let j;
    for (j = 0; j < propertyDivs.length; j++) {
      // Property name and link
      const propertyNameLink = propertyDivs[j].querySelector(
        '.property-listing__header .property-listing__title .house_link',
      );

      // Property price
      // Prices containing commentary such as "Offers Over" sit in a Span so an OR is used
      const propertyPrice = propertyDivs[j].querySelector(
        '.property-listing__header .property-listing__title .property-listing__price',
      );

      // Property type
      const propertyType = propertyDivs[j].querySelector(
        '.property-listing__header .property-listing__type',
      );

      if (propertyNameLink) {
        const property = {
          name: propertyNameLink.textContent,
          price: propertyPrice.textContent,
          type: propertyType.textContent,
          link: `${propertyNameLink}`,
        };
        propertiesOnPage.push(property);
      }
    }

    // page.evaluate return list of properties to the const
    return propertiesOnPage;
  });

  await page.close();

  return propertiesOnPage;
}

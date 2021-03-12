import puppeteer from 'puppeteer';

// Opted to start using the term dwelling/dwellings as properties can be a bit misleading
interface Dwelling {
  name: string,
  price: string,
  type: string,
  link: string,
}

interface DwellingsSearchRes {
  noOfDwellings: number;
  dwellings: Array<Dwelling>;
}

const puppeteerConfig = {
  args: ['--disable-dev-shm-usage', '--no-sandbox'],
};

const processSearch = async (url: string): Promise<DwellingsSearchRes> => {
  console.log(url);
  
  const allDwellings: Array<Dwelling> = [];
  const numberOfPages = await getNumberOfPages(url, 3);

  // Iterate through the web pages, the pagination on home.co.uk starts at 1, while it appears
  // inefficient to keep opening and browser it is done to conserve memory, this means the site
  // will work on a free tier in heroku.
  for (let i = 1; i <= numberOfPages; i++) {
    const browser = await puppeteer.launch(puppeteerConfig);
    const page = await browser.newPage();
    await page.goto(`${url}&page=${i}`);

    // Scrape the properties from the current page
    const pageDwellings = await scrapePropertiesFromPage(page);
    allDwellings.push(...pageDwellings);

    await browser.close();
    console.log(allDwellings);
    
  }

  const dwellings: DwellingsSearchRes = {
    noOfDwellings: allDwellings.length,
    dwellings: allDwellings,
  };

  return dwellings;
};

/* Identify the number of pages to be scraped, this is based on the number returned at the top of
the page for example: "The Home.co.uk Property Search Engine found 31 flats and houses for sale
in Chelsea (within 1 mile radius)." - Each page contains a max of 10 properties */
const getNumberOfPages = async(url: string, limit?: number): Promise<number> => {
  const browser = await puppeteer.launch(puppeteerConfig);
  const page = await browser.newPage();
  const pageLimit = limit || 3;
  await page.goto(url);
  
  let numberOfPages = await page.evaluate(() => {
    let noOfDwellingsText = document.querySelector('.homeco_pr_content .bluebold')?.textContent;
    let pages = 0; 
    const maxPropertiesPerPage = 10;
    
    if (noOfDwellingsText) {
      // Larger numbers may have a comma in, so these are removed. 
      noOfDwellingsText = noOfDwellingsText.split(',').join('');

      // By dividing by ten and rounding down we get the number of pages required
      pages = Math.floor(parseInt(noOfDwellingsText) / maxPropertiesPerPage);

      // If there is a remainder then +1 so we loop one more page to get the remaining dwellings
      if (parseInt(noOfDwellingsText) % maxPropertiesPerPage) {
        pages += 1;
      }
    }

    return pages;
  });

  // Limit max number of pages
  if (numberOfPages > pageLimit) {
    numberOfPages = pageLimit;
  }

  await browser.close();

  return numberOfPages;
}

const scrapePropertiesFromPage = async(page: puppeteer.Page): Promise<Array<Dwelling>> => {
  const propertiesOnPage = await page.evaluate(() => {
    const propertyDivs = document.querySelectorAll('.property-listing');
    const propertiesOnPage: Array<Dwelling> = [];

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
        const property: Dwelling = {
          name: propertyNameLink?.textContent || "",
          price: propertyPrice?.textContent || "",
          type: propertyType?.textContent || "",
          link: `${propertyNameLink}`,
        };
        propertiesOnPage.push(property);
      }
    }

    return propertiesOnPage;
  });

  await page.close();

  return propertiesOnPage;
}

export { processSearch, getNumberOfPages, scrapePropertiesFromPage };
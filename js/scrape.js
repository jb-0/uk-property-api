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
  const properties = [];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // Having observed cases where the number of the third div in the x path can be either 1, 3 and 4
  // the below exists to identify which of these it so it can be passed to main loop
  let thirdDivInt;
  let lastTdInt; // As with the above, there are cases where the number of the last td varies
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 2; j++) {
      const [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[${i}]/table/tbody/
        tr[1]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[${j}]/b/a`)
      if (el) {
        thirdDivInt = i;
        lastTdInt = j;
        console.log(`thirdDivInt=${thirdDivInt}  lastTdInt${lastTdInt}`)
        break;
      }
    }
  }

  // Properties appear in divs which iterate through odd numbers, there are 10 results per page
  for (let i = 1; i < 21; i += 2) {
    let propertyName;
    let propertyLink;
    // Begin with a try, if we cannot get the name of the property then we should break the loop
    // this will also handle cases where pages have less than 10 results.
    try {
      const [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[${thirdDivInt}]/table/tbody/tr[${i}]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[${lastTdInt}]/b/a`);
      // Get property name        //*[@id="homeco_v6_main"]/div[1]/div[2]/div[--------------]/table/tbody/tr[----]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[2]/b/a
      propertyName = await (await el.getProperty('textContent')).jsonValue();
      propertyName = propertyName.replace(/\n/g, ' ');

      // Get property link
      propertyLink = await (await el.getProperty('href')).jsonValue();
    } catch (err) {
      console.log(`******* \nError getting property name/link in loop iteration ${i} \n${err}`);
      //break;
    }

    // Get property type
    let [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[${thirdDivInt}]/table/tbody/tr[${i}]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[${lastTdInt + 1}]`); //2
    const propertyType = await (await el.getProperty('textContent')).jsonValue();

    // Get price
    [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[${thirdDivInt}]/table/tbody/tr[${i}]/td/table/tbody/tr[1]/td[2]/table/tbody/tr/td[1]/b`);
    const propertyPrice = await (await el.getProperty('textContent')).jsonValue();

    // Get image src, some properties do not have images so catch those instances
    let propertyImageLink;
    try {
      [el] = await page.$x(`//*[@id="homeco_v6_main"]/div[1]/div[2]/div[${thirdDivInt}]/table/tbody/tr[${i}]/td/table/tbody/tr[2]/td/div[1]/div[1]/a/img`);
      propertyImageLink = await (await el.getProperty('src')).jsonValue();
    } catch (err) {
      console.log(`******* \nError getting property image in loop iteration ${i} \n${err}`);
      propertyImageLink = 'Image not available';
    }

    const property = {
      name: propertyName,
      price: propertyPrice,
      type: propertyType,
      link: propertyLink,
      imageLink: propertyImageLink,
    };

    properties.push(property);
  }

  return properties;
};

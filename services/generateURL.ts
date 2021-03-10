interface QueryParams {
  low?: string;
  high?: string;
  location: string;
  radius?: string;
  minbeds?: string;
  maxbeds?: string;
  detached?: string;
  terraced?: string;
  flat?: string;
  semi?: string;
}

/**
 * Creates a URL that can be used to query home.co.uk
 * @param  {QueryParams} query the query object that defines search parameters
 * @return {string} a complete URL including site and query parameters
 */
 const generateURL = (query: QueryParams): string => {
  const baseURL = 'https://www.home.co.uk/search/results.htm?';

  // Exclude sold properties and given there is no browser do not show showmap
  let cleanQuery = 'inc_sold=0&showmap=0';

  for (let key in query) {
    let value: string | undefined = query[key as keyof QueryParams];

    if (value && isKeyValid(key)) {
      cleanQuery += `&${key}=${value}`;
    }
  }

  return `${baseURL}${cleanQuery}`;
};

/**
 * Check if a given key is valid, e.g. can be used in url query string
 * @param  {string} key the key that requires validation
 * @return {boolean} indicates whether or not it is valid
 */
const isKeyValid = (key: string): boolean => {
  const validKeys = ['low', 'high', 'location', 'radius', 'minbeds', 'maxbeds', 'detached', 
    'terraced', 'flat', 'semi'];  

  const isKeyValid = validKeys.includes(key.toLowerCase());

  return isKeyValid;
}

export default generateURL;

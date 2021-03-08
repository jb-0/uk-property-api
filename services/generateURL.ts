interface QueryParams {
  low: String;
  high: String;
  location: String;
  radius: String;
  minbeds: String;
  maxbeds: String;
  detached: String;
  terraced: String;
  flat: String;
  semi: String;
}

export const constructURL = (query: QueryParams) => {
  const baseURL = 'https://www.home.co.uk/search/results.htm?';

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

  for (let key in query) {
    let value: string = query[key];
    if (validKeys.includes(key.toLowerCase())) {
      cleanQuery += `&${key}=${value}`;
    }
  }

  return `${baseURL}${cleanQuery}`;
};

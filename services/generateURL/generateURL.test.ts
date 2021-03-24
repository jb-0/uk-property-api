import generateURL from './generateURL';

describe('Generate URL function tests (ts)', () => {
  test('using two parameters returns the expected url', () => {
    const url = generateURL({ low: '100', location: 'islington' });
    expect(url).toEqual(
      'https://www.home.co.uk/search/results.htm?inc_sold=0&showmap=0&low=100&location=islington'
    );
  });

  test('using all parameters returns the expected url', () => {
    const url = generateURL({
      low: '100',
      high: '500',
      location: 'islington',
      radius: '20',
      minbeds: '1',
      maxbeds: '3',
      detached: 'true',
      terraced: 'false',
      flat: 'false',
      semi: 'false',
    });

    expect(url).toEqual(
      'https://www.home.co.uk/search/results.htm?inc_sold=0&showmap=0&low=100&high=500&location=islington&radius=20&minbeds=1&maxbeds=3&detached=true&terraced=false&flat=false&semi=false'
    );
  });
});
const getPriceData = require('../src/getPriceData');

describe('getPriceData', () => {
  it('returns price data from yahoo finance API', async () => {
    const response = await getPriceData('vtwix')
    expect(response.symbol).toBe('VTWIX');
  });
})

const priceDataModule = require('../src/getPriceData');

describe('getPriceData', () => {
  it('returns price data from yahoo finance API', async () => {
    const response = await priceDataModule.getPriceData('vtwix')
    expect(response.symbol).toBe('VTWIX');
  });
})

describe('getMultiplePriceData', () => {
  it('returns arr of priceData objects', async () => {
    const targetArray = [
      {
        symbol: 'vtwix',
        region: "us"
      },
      {
        symbol: 'btc-gbp',
        region: "en"
      }]
    const priceDataArray = await priceDataModule.getMultiplePriceData(targetArray)

    expect(priceDataArray[0].symbol).toBe('VTWIX')
    expect(priceDataArray[1].symbol).toBe('BTC-GBP')
  })
})
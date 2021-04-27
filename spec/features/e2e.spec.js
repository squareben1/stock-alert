const StockChecker = require('../../src/StockChecker')
const priceDataModule = require('../../src/getPriceData');
const multiStockModule = require('../../src/getMultiStocks');
const AWSMock = require('jest-aws-sdk-mock');

AWSMock.mock('SNS', 'publish', 'test-message');

AWSMock.restore('SNS', 'publish');

xdescribe('E2E Tests', () => {
  const targetArray = [
    {
      symbol: 'vtwix',
      region: "us",
      targetMarketChangePercent: -10
    },
    {
      symbol: 'btc-gbp',
      region: "en"
    }
  ]

  AWSMock.mock('SNS', 'publish', 'test-message');

  it('getMultiPriceData returns array of price data objects', async () => {
    const priceDataArray = await priceDataModule.getMultiplePriceData(targetArray)
    expect(priceDataArray[0].symbol).toBe('VTWIX')
    expect(priceDataArray[1].symbol).toBe('BTC-GBP')
  })
  // it('getMultiStocks returns array', async () => {
  // const priceDataArray = await priceDataModule.getMultiplePriceData(targetArray)
  // stringArray = multiStockModule.getMultiStocks(priceDataArray)
  //   console.log(stringArray)
  //   expect(typeof stringArray).toBe('list')
  // })
})

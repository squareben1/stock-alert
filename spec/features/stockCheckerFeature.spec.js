const StockChecker = require('../../src/StockChecker')
const priceDataModule = require('../../src/getPriceData');

describe('StockChecker works with live API', () => {
  it('accesses VTI', async () => {
    var priceData = await priceDataModule.getPriceData('vti')
    var stockChecker = new StockChecker(priceData);
    expect(stockChecker.getSymbol()).toBe('VTI')
  })
  xit('returns info string ', async () => {
    // works at 11:34pm 20/1 but this will fail - 
    // could get a robust one dynamically by using the biggestLoser endpoint
    var priceData = await priceDataModule.getPriceData('btc-gbp', 'gb')
    var stockChecker = new StockChecker(priceData);
    expect(stockChecker.checkPercent()).toBe('BTC-GBP is down by -9.20%; £23,221.68')
  })
})

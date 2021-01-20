const StockChecker = require('../../src/StockChecker')
const getPriceData = require('../../src/getPriceData')

describe('StockChecker works with live API', () => {
  it('accesses VTI', async () => {
    var priceData = await getPriceData('vti')
    var stockChecker = new StockChecker(priceData);
    expect(stockChecker.getSymbol()).toBe('VTI')
  })
})
const StockChecker = require('../src/StockChecker')
const mockPriceObject = require('../mockStockObject.json')

const stockChecker = new StockChecker();

describe('stockObjectAnalyser', () => {
  it('returns false when percent change < 5%', () => {
    expect(stockChecker.checkPercent()).toBe(false)
  })
})
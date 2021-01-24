const StockChecker = require('../src/StockChecker')
const mockPriceObject = require('../mockStockObject.json')

const mockPriceDataOver5 = {
  currencySymbol: '$',
  currency: 'USD',
  regularMarketPrice: { raw: 192.4, fmt: '182.78' },
  symbol: 'VTWIX',
  regularMarketChangePercent: { raw: -0.010542556, fmt: '-5.00%' }
}

describe('StockChecker', () => {
  it('returns null when percent change < 5%', () => {
    var stockChecker = new StockChecker(mockPriceObject);
    expect(stockChecker.getSymbol()).toBe('VTWIX')
    expect(stockChecker.checkPercent()).toBe(null)
  })
  it('returns percentage + info if down 5%', () => {
    var stockChecker = new StockChecker(mockPriceDataOver5);
    expect(stockChecker.checkPercent()).toBe('VTWIX is down by -5.00%; $182.78')
  })
  it('sets custom price percent change threshold', () => {
    var stockChecker = new StockChecker(mockPriceObject, 1);
    expect(stockChecker.checkPercent()).toBe('VTWIX is down by -1.05%; $192.40')
  })
})
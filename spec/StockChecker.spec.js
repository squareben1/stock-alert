const StockChecker = require('../src/StockChecker')
const getPriceData = require('../src/getPriceData')
const mockPriceObject = require('../mockStockObject.json')

const mockPriceDataUnder5 = {
  currencySymbol: '$',
  currency: 'USD',
  regularMarketPrice: { raw: 192.4, fmt: '192.40' },
  symbol: 'VTWIX',
  regularMarketChangePercent: { raw: -0.010542556, fmt: '-2.05%' }
}

const mockPriceDataOver5 = {
  currencySymbol: '$',
  currency: 'USD',
  regularMarketPrice: { raw: 192.4, fmt: '182.78' },
  symbol: 'VTWIX',
  regularMarketChangePercent: { raw: -0.010542556, fmt: '-5.00%' }
}



describe('stockObjectAnalyser', () => {
  it('returns null when percent change < 5%', () => {
    var stockChecker = new StockChecker(mockPriceDataUnder5);
    expect(stockChecker.checkPercent()).toBe(null)
  })
  it('returns percentage + info if down 5%', () => {
    var stockChecker = new StockChecker(mockPriceDataOver5);
    expect(stockChecker.checkPercent()).toBe('VTWIX is down by 5%; $194.40')
  })
})
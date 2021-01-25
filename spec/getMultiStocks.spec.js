const StockChecker = require('../src/StockChecker')
const multiStockModule = require('../src/getMultiStocks');


jest.mock('../src/StockChecker')

const mockPriceDataOver5 = {
  currencySymbol: '$',
  currency: 'USD',
  regularMarketPrice: { raw: 192.4, fmt: '182.78' },
  symbol: 'VTWIX',
  regularMarketChangePercent: { raw: -0.050042556, fmt: '-5.00%' }
}

const mockPriceDataArray = [
  mockPriceDataOver5,
  mockPriceDataOver5
]

it('iterates over array of priceData Objects', () => {
  const mockCheckPercent = jest.fn();
  StockChecker.prototype.checkPercent = mockCheckPercent;
  mockCheckPercent.mockReturnValue('VTWIX is down by -5.00%; $182.78');
  expected = ['VTWIX is down by -5.00%; $182.78', 'VTWIX is down by -5.00%; $182.78']
  expect(multiStockModule.getMultiStocks(mockPriceDataArray)).toMatchObject(expected)
})
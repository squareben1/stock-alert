const StockChecker = require('../src/StockChecker')
const multiStockModule = require('../src/getMultiStocks');


jest.mock('../src/StockChecker')

const mockPriceData = {
  currencySymbol: '$',
  currency: 'USD',
  regularMarketPrice: { raw: 192.4, fmt: '182.78' },
  symbol: 'VTWIX',
  regularMarketChangePercent: { raw: -0.050042556, fmt: '-5.00%' }
}

const mockPriceDataArray = [
  mockPriceData,
  mockPriceData
]

describe('getMultiStocks', () => {
  it('iterates over array of priceData Objects', () => {
    const mockCheckPercent = jest.fn();
    StockChecker.prototype.checkPercent = mockCheckPercent;
    mockCheckPercent.mockReturnValue('VTWIX is down by -5.00%; $182.78');

    expected = ['VTWIX is down by -5.00%; $182.78', 'VTWIX is down by -5.00%; $182.78']
    expect(multiStockModule.getMultiStocks(mockPriceDataArray)).toMatchObject(expected)
  })

  it('returns false if none of the multi objects over threshold', () => {
    const mockCheckPercent = jest.fn();
    StockChecker.prototype.checkPercent = mockCheckPercent;
    mockCheckPercent.mockReturnValue(false);
    expect(multiStockModule.getMultiStocks(mockPriceDataArray)).toMatchObject([false, false])
  })
})



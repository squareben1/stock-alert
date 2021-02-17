const StockChecker = require('../src/StockChecker')
const multiStockModule = require('../src/getMultiStocks');
const mockPriceObject = require('../mockStockObject.json')

const mockPriceDataOver5 = {
  currencySymbol: '$',
  currency: 'USD',
  regularMarketPrice: { raw: 192.4, fmt: '182.78' },
  symbol: 'VTWIX',
  regularMarketChangePercent: { raw: -0.050042556, fmt: '-5.00%' }
}

const priceDataArray = [mockPriceDataOver5, mockPriceObject]

const targetStonkEvent = [
  {
    "symbol": "DNLM.L",
    "region": "en",
    "marketChangePercent": "-5"
  },
  {
    "symbol": "btc-gbp",
    "region": "en",
    "marketChangePercent": "-5"
  }
]

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

describe('filterJoinArray', () => {
  it('returns false if only false values in array', () => {
    inputArray = [false, false]
    expect(multiStockModule.filterJoinArray(inputArray)).toBe("")
  })
  it('returns condensed string if no values in array', () => {
    stringArray = ['VTWIX is down by -5.00%; $182.78', 'VTWIX is down by -5.00%; $182.78']
    expected = 'VTWIX is down by -5.00%; $182.78\nVTWIX is down by -5.00%; $182.78'
    expect(multiStockModule.filterJoinArray(stringArray)).toBe(expected)
  })
  it('returns condensed string if 1 false 1 string value in array', () => {
    stringArray = [false, 'VTWIX is down by -5.00%; $182.78']
    expected = 'VTWIX is down by -5.00%; $182.78'
    expect(multiStockModule.filterJoinArray(stringArray)).toBe(expected)
  })
})

describe('getStringArray', () => {
  it('runs against both arrays using stockObj and %change from each respectively', () => {
    const mockCheckPercent = jest.fn();
    StockChecker.prototype.checkPercent = mockCheckPercent;
    mockCheckPercent.mockReturnValue('VTWIX is down by -5.00%; $182.78');
    action = multiStockModule.getStringArray(priceDataArray, targetStonkEvent)
    expected = ['VTWIX is down by -5.00%; $182.78', 'VTWIX is down by -5.00%; $182.78']
    expect(action).toMatchObject(expected)
    expect(StockChecker).toBeCalledWith(mockPriceDataOver5, "-5")
  })

  it('returns false if none of the multi objects over threshold', () => {
    const mockCheckPercent = jest.fn();
    StockChecker.prototype.checkPercent = mockCheckPercent;
    mockCheckPercent.mockReturnValue(false);
    expect(multiStockModule.getStringArray(mockPriceDataArray, targetStonkEvent)).toMatchObject([false, false])
  })

})

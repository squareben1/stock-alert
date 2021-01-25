const StockChecker = require('./src/StockChecker')
const getPriceData = require('./src/getPriceData')

const targetArray = [
  {
    symbol: '0P00018XAR.L',
    region: "en"
  },
  {
    symbol: 'btc-gbp',
    region: "en"
  },
  {
    symbol: '0P00018XAR.L',
    region: "en"
  },
]

exports.handler = async (event) => {
  const priceData = await getPriceData('vti')
  checker = new StockChecker(priceData, -0.10)
  return checker.checkPercent()
};


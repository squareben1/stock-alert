const StockChecker = require('./src/StockChecker')
const getPriceData = require('./src/getPriceData')

// runMultiChecks = () => {

// }

exports.handler = async (event) => {
  const priceData = await getPriceData('vti')
  checker = new StockChecker(priceData, -0.10)
  return checker.checkPercent()
};


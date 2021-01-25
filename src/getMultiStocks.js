const StockChecker = require('./StockChecker')

getMultiStocks = (array) => {
  return array.map(x => new StockChecker(x).checkPercent())
}

module.exports = { getMultiStocks }
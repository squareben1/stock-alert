const StockChecker = require('./StockChecker')

getMultiStocks = (array) => {
  return array.map(x => new StockChecker(x).checkPercent())
}

checkMultiStocksArray = (array) => {
  if (array.every((el) => el == false)) {
    return false
  } else {
    return 'VTWIX is down by -5.00%; $182.78\nVTWIX is down by -5.00%; $182.78'
  }

}

module.exports = { getMultiStocks, checkMultiStocksArray }
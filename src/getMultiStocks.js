const StockChecker = require('./StockChecker')

getMultiStocks = (array, marketChangePercentThreshold = -5) => {
  return array.map(x => new StockChecker(x, marketChangePercentThreshold).checkPercent())
}

filterJoinArray = (array) => {
  const filteredArray = array.filter(i => i !== false)
  return filteredArray.join('\n')
  // is this how I want to do this? It will need a string.length check
  // in handler...seems...lame?
}

module.exports = { getMultiStocks, filterJoinArray }

// TODO: rename this module?
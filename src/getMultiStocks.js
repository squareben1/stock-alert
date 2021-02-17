const StockChecker = require('./StockChecker')

filterJoinArray = (array) => {
  const filteredArray = array.filter(i => i !== false)
  return filteredArray.join('\n')
}

getStringArray = (dataArray, percentArray) => {
  const stringArray = []
  for (var i = 0; i < dataArray.length; i += 1) {
    stringArray.push(new StockChecker(dataArray[i], percentArray[i].targetMarketChangePercent).checkPercent())
  }
  return stringArray
}

module.exports = { filterJoinArray, getStringArray }

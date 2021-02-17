const StockChecker = require('./StockChecker')

filterJoinArray = (array) => {
  const filteredArray = array.filter(i => i !== false)
  return filteredArray.join('\n')
  // is this how I want to do this? It will need a string.length check
  // in handler...seems...lame?
}

getStringArray = (dataArray, percentArray) => {
  const stringArray = []
  for (var i = 0; i < dataArray.length; i += 1) {
    stringArray.push(new StockChecker(dataArray[i], percentArray[i].marketChangePercent).checkPercent())
  }
  return stringArray
}

module.exports = { filterJoinArray, getStringArray }

// TODO: rename this module?
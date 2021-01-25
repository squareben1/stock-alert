const StockChecker = require('./StockChecker')

getMultiStocks = (array) => {

  const checkedStringsArray = []

  for (let i = 0; i < array.length; i++) {
    console.log(array[i].symbol)
    checker = new StockChecker(array[i])
    checkedStringsArray.push(checker.checkPercent())
  }
  console.log(checkedStringsArray)
  return checkedStringsArray
}

module.exports = { getMultiStocks }
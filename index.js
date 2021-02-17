const StockChecker = require('./src/StockChecker')
const priceDataModule = require('./src/getPriceData')
const multiStockModule = require('./src/getMultiStocks')
const sendSMS = require('./src/sendSMS')

stripMarketPercent = (arr) => {
  return arr.filter(i => i !== "marketChangePercent")
}

exports.handler = async (event) => {
  const targetArray = stripMarketPercent(event)
  console.log("event:", event)
  console.log("targetArray", targetArray)

  try {
    const priceDataArray = await priceDataModule.getMultiplePriceData(targetArray)
    const stringArray = multiStockModule.getStringArray(priceDataArray, event)
    const joinedResultString = multiStockModule.filterJoinArray(stringArray)
  } catch (e) {
    console.log("Error:", e)
  }
  console.log('joinedResultString: ', joinedResultString)

  const isResult = joinedResultString.length > 0

  if (isResult) {
    console.log('SMS Sent:', joinedResultString)
    sendSMS(joinedResultString)
  } else {
    console.log("SMS NOT sent")
  }
};

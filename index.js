const StockChecker = require('./src/StockChecker')
const priceDataModule = require('./src/getPriceData')
const multiStockModule = require('./src/getMultiStocks')
const sendSMS = require('./src/sendSMS')

// TODO: add here? - const defaultMarketChangePercent = -5

exports.handler = async (event) => {
  const targetArray = event
  console.log("event:", event)
  console.log("targetArray", targetArray)
  try {
    const priceDataArray = await priceDataModule.getMultiplePriceData(targetArray)
    const stringArray = multiStockModule.getMultiStocks(priceDataArray, -0.5)
    var joinedResultString = multiStockModule.filterJoinArray(stringArray)
  } catch (e) {
    console.log("Error:", e)
  }
  console.log('joinedResultString', joinedResultString)

  if (joinedResultString.length > 0) {
    console.log('SMS Sent:', joinedResultString)
    sendSMS(joinedResultString)
  } else {
    console.log("SMS NOT sent")
  }
};

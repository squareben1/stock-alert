const StockChecker = require('./src/StockChecker')
const priceDataModule = require('./src/getPriceData')
const multiStockModule = require('./src/getMultiStocks')
const sendSMS = require('./src/sendSMS')
const stripMarketPercent = require('../src/formatEvent')


// TODO: add here? - const defaultMarketChangePercent = -5

exports.handler = async (event) => {
  const targetArray = stripMarketPercent(event)
  // extract percentArray then run for x, y in each
  console.log("event:", event)
  console.log("targetArray", targetArray)

  // getStringArray = (dataArray, percentArray) => {
  //   for (x, y in zip(dataArray, percentArray))
  //     print(x, y.marketChangePercent)
  // }

  try {
    const priceDataArray = await priceDataModule.getMultiplePriceData(targetArray)
    // need to get priceDataArr
    // then run getMultiStocks on priceDataArr & original targetArray.marketChange%Threshold
    // like:
    // for f, b in zip(foo, bar):
    // print(f, b)
    //  for x, y in zip(priceDataArray, targetArray):
    //      stockChecker.checkPercent(priceDataArray[x], targetArray[y].marketChange%x)
    const stringArray = multiStockModule.getMultiStocks(priceDataArray, -0.5)
    // const stringArray = 
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

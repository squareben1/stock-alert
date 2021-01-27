const StockChecker = require('./src/StockChecker')
const priceDataModule = require('./src/getPriceData')
const multiStockModule = require('./src/getMultiStocks')
const sendSMS = require('./src/sendSMS')

// TODO: add here? - const defaultMarketChangePercent = -5

// const targetArray = [
//   {
//     // Vanguard FTSA Global All Cap Acc
//     symbol: '0P00018XAR.L',
//     region: "en"
//   },
//   {
//     symbol: 'btc-gbp',
//     region: "en"
//   },
//   {
//     symbol: 'DNLM.L',
//     region: "en"
//   },
// ]

// need to refactor to accomodate JSON only event data w/ multi target stocks

exports.handler = async (event) => {
  const targetArray = [event]
  console.log("event:", event)
  console.log("targetArray", targetArray)
  const priceDataArray = await priceDataModule.getMultiplePriceData(targetArray)
  const stringArray = multiStockModule.getMultiStocks(priceDataArray, -0.5)
  const joinedResultString = multiStockModule.filterJoinArray(stringArray)
  console.log('joinedResultString', joinedResultString)

  if (joinedResultString.length > 0) {
    console.log('SMS Sent:', joinedResultString)
    sendSMS(joinedResultString)
  } else {
    console.log("SMS NOT sent")
  }
};

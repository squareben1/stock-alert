const StockChecker = require('./src/StockChecker')
const priceDataModule = require('./src/getPriceData')
const multiStockModule = require('./src/getMultiStocks')
const sendSMS = require('./sns_publishsms')

const targetArray = [
  {
    // Vanguard FTSA Global All Cap Acc
    symbol: '0P00018XAR.L',
    region: "en"
  },
  {
    symbol: 'btc-gbp',
    region: "en"
  },
  {
    symbol: 'DNLM.L',
    region: "en"
  },
]

exports.handler = async (event) => {
  const priceDataArray = await priceDataModule.getMultiplePriceData(targetArray)
  stringArray = multiStockModule.getMultiStocks(priceDataArray)
  const priceData = await priceDataModule.getPriceData('vti')
  checker = new StockChecker(priceData, -0.10)
  return checker.checkPercent()
};


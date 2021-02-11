
class StockChecker {
  constructor(priceDataObject, marketChangePercentThreshold) {
    this.currencySymbol = priceDataObject.currencySymbol
    this.regularMarketPrice = priceDataObject.regularMarketPrice.fmt
    this.symbol = priceDataObject.symbol
    this.marketChangePercentString = priceDataObject.regularMarketChangePercent.fmt
    this.marketChangePercentFloat = parseFloat(this.marketChangePercentString)
    this.marketChangePercentThreshold = marketChangePercentThreshold
  }

  checkPercent = () => {
    if (this.marketChangePercentFloat <= this.marketChangePercentThreshold) {
      const responseString = `${this.symbol} is down by ${this.marketChangePercentString}; ${this.currencySymbol + this.regularMarketPrice}`
      console.log(responseString)
      return responseString
    } else {
      console.log(`Below Threshold: ${this.symbol} change = ${this.marketChangePercentString}`)
      return false
    }
  }
  getSymbol = () => {
    return this.symbol
  }
}

// TODO: function that sets diff marketChangePercent for BTC
module.exports = StockChecker

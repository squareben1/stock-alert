
class StockChecker {
  constructor(priceDataObject, marketChangePercentThreshold = -5) {
    this.currencySymbol = priceDataObject.currencySymbol
    this.regularMarketPrice = priceDataObject.regularMarketPrice.fmt
    this.symbol = priceDataObject.symbol
    this.marketChangePercentString = priceDataObject.regularMarketChangePercent.fmt
    this.marketChangePercentFloat = parseFloat(this.marketChangePercentString)
    this.marketChangePercentThreshold = marketChangePercentThreshold
  }
  checkPercent = () => {
    if (this.marketChangePercentFloat <= this.marketChangePercentThreshold) {
      return `${this.symbol} is down by ${this.marketChangePercentString}; ${this.currencySymbol + this.regularMarketPrice}`
    } else {
      console.log(`${this.symbol} change = ${this.marketChangePercentString}`)
      return null
    }
  }
  getSymbol = () => {
    return this.symbol
  }
}

module.exports = StockChecker

// TODO remove magic 5 - pass in? 
// run multiple
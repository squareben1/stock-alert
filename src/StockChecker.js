
class StockChecker {
  constructor(priceDataObject) {
    this.currencySymbol = priceDataObject.currencySymbol
    this.regularMarketPrice = priceDataObject.regularMarketPrice.fmt
    this.symbol = priceDataObject.symbol
    this.marketChangePercentString = priceDataObject.regularMarketChangePercent.fmt
    this.marketChangePercentFloat = parseFloat(this.marketChangePercentString)
  }
  checkPercent = () => {
    if (this.marketChangePercentFloat <= -5) {
      return 'VTWIX is down by 5%; $194.40'
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
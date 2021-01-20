
class StockChecker {
  constructor(stockObject) {
    this.currencySymbol = stockObject.currencySymbol
    this.regularMarketPrice = stockObject.regularMarketPrice.fmt
    this.symbol = stockObject.symbol
    this.marketChangePercentString = stockObject.regularMarketChangePercent.fmt
    this.marketChangePercentFloat = parseFloat(this.marketChangePercentString)
  }
  checkPercent = () => {
    if (this.marketChangePercentFloat <= -5.00) {
      return 'VTWIX is down by 5%; $194.40'
    } else {
      return null
    }
  }
}

module.exports = StockChecker
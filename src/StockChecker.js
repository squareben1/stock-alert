class StockChecker {
  constructor(priceDataObject, targetMarketChangePercent = -5) {
    this.currencySymbol = priceDataObject.currencySymbol;
    this.regularMarketPrice = priceDataObject.regularMarketPrice.fmt;
    this.symbol = priceDataObject.symbol;
    this.marketChangePercentString =
      priceDataObject.regularMarketChangePercent.fmt;
    this.marketChangePercentFloat = parseFloat(this.marketChangePercentString);
    this.targetMarketChangePercent = targetMarketChangePercent;
  }

  checkPercent = () => {
    if (this.marketChangePercentFloat <= this.targetMarketChangePercent) {
      const responseString = `${this.symbol} is down by ${
        this.marketChangePercentString
      }; ${this.currencySymbol + this.regularMarketPrice}`;
      console.info("checkPercent() responseString: ", responseString);
      return responseString;
    } else {
      console.info(
        `${this.symbol} is below change threshold; change % = ${this.marketChangePercentString}`
      );
      return false;
    }
  };
  getSymbol = () => {
    return this.symbol;
  };
}

module.exports = StockChecker;

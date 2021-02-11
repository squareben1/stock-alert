
stripMarketPercent = (arr) => {
  return arr.filter(i => i !== "marketChangePercent")
}

module.exports = { stripMarketPercent }
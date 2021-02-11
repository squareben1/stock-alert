
stripMarketPercent = (arr) => {
  // const arr = JSON.parse(array)
  // // const targetArray = []
  for (i = 0; i < arr.length; i++) {
    delete arr[i].marketChangePercent
    // targetArray.append()
    console.log('HEHREEHDHD:', arr[i])
  }

  return arr
  // return arr.map(x => delete x['marketChangePercent'])
}

module.exports = { stripMarketPercent }
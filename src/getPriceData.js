var axios = require("axios").default;
require('dotenv').config()

getPriceData = (symbol, region = 'us') => {
  var formData = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary',
    params: { symbol: symbol, region: region },
    headers: {
      'x-rapidapi-key': process.env.API_KEY,
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

  return axios.request(formData).then(function (response) {
    priceData = response.data.price;
    return priceData
  }).catch(function (error) {
    console.error(error);
  });
}

getMultiplePriceData = async (arr) => {
  const promises = arr.map(x => getPriceData(x.symbol, x.region))

  const priceDataObjectArr = await Promise.all(promises)
  return priceDataObjectArr
}

module.exports = { getPriceData, getMultiplePriceData }

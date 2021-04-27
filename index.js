const priceDataModule = require("./src/getPriceData");
const multiStockModule = require("./src/getMultiStocks");
const sendSMS = require("./src/sendSMS");

stripMarketPercent = (arr) => {
  return arr.filter((i) => i !== "marketChangePercent");
};

exports.handler = async (event) => {
  const targetArray = stripMarketPercent(event);
  console.log("event:", event);
  console.log("targetArray", targetArray);

  try {
    const priceDataArray = await priceDataModule.getMultiplePriceData(
      targetArray
    );
    const stringArray = multiStockModule.getStringArray(priceDataArray, event);
    var joinedResultString = multiStockModule.filterJoinArray(stringArray);
  } catch (e) {
    console.log("Error:", e);
  }
  console.log("joinedResultString: ", joinedResultString);

  if (joinedResultString.length > 0) {
    console.log("SMS Sent:", joinedResultString);
    await sendSMS(joinedResultString);
  } else {
    console.log("SMS NOT sent");
  }
};

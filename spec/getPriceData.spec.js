const priceDataModule = require("../src/getPriceData");
const mockPriceObject = require("../mockStockObject.json");

xdescribe("getPriceData", () => {
  it("returns price data from yahoo finance API", async () => {
    const response = await priceDataModule.getPriceData("vtwix");
    expect(response.symbol).toBe("VTWIX");
  });
});

describe("getMultiplePriceData", () => {
  it("returns arr of priceData objects", async () => {
    const mockGetPriceData = jest.fn();
    priceDataModule.getPriceData = mockGetPriceData;
    mockGetPriceData.mockReturnValue(mockPriceObject);
    const targetArray = [
      {
        symbol: "vtwix",
        region: "us",
      },
      {
        symbol: "vtwix",
        region: "us",
      },
    ];
    const priceDataArray = await priceDataModule.getMultiplePriceData(
      targetArray
    );

    expect(priceDataArray[0].symbol).toBe("VTWIX");
    expect(priceDataArray[1].symbol).toBe("VTWIX");
  });
});

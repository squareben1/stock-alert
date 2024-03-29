require("../index");

const targetStonkEventSingle = [
  {
    symbol: "DNLM.L",
    region: "en",
    marketChangePercent: "-5",
  },
];

const targetStonkEvent = [
  {
    symbol: "DNLM.L",
    region: "en",
    marketChangePercent: "-5",
  },
  {
    symbol: "btc-gbp",
    region: "en",
    marketChangePercent: "-5",
  },
];

const strippedArray = [
  {
    symbol: "DNLM.L",
    region: "en",
  },
  {
    symbol: "btc-gbp",
    region: "en",
  },
];

describe("stripMarketPercent", () => {
  it("returns array of symbol/region key pair json obj, 1", () => {
    const expected = [
      {
        symbol: "DNLM.L",
        region: "en",
      },
    ];
    expect(stripMarketPercent(targetStonkEventSingle)).toMatchObject(expected);
  });

  it("returns array of symbol/region key pair json objs", () => {
    expect(stripMarketPercent(targetStonkEvent)).toMatchObject(strippedArray);
  });
});

const getPriceData = require('../src/stockApi');

it('your test', async () => {
  const response = await getPriceData('vtwix')
  expect(response.symbol).toBe('VTWIX');
});

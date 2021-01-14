const getPriceData = require('../src/stockApi');

it('your test', async () => {
  const response = await getPriceData('vtwix')
  expect(response).toBe('0.06%');
});

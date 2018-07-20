const { reloadApp } = require('detox-expo-helpers');
 
describe('Login Page Tests', () => {
  before(async () => {
    await reloadApp();
  });

  it('should have welcome Text', async () => {
    await waitFor(element(by.id('welcome'))).toBeVisible().withTimeout(1000);
    await expect(element(by.id('welcome'))).toBeVisible();
  });

})
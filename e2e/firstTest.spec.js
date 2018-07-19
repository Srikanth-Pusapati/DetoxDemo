const { reloadApp } = require('detox-expo-helpers');
 
describe('Login Page Tests', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

})
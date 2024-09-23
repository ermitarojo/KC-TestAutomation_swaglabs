import { test, expect } from '@playwright/test';
const { url } = require('./globalvariables/globalvariables')

test('Verify Login Page is shown', async ({ page }) => {
  await page.goto(url);
  await expect(page.getByText('Swag Labs')).toBeVisible()
});
/*
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/
test('Login as a standard user', async ({page})=>{


});
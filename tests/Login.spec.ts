import { test, expect } from '@playwright/test';
import {url} from './globalvariables/globalvariables'
import {standard_username,pw, locked_out_user } from './globalvariables/login_data';
import { login } from './helpers/helpers';
import { errorLockedOut } from './objects/login';

test('Verify Login Page is shown', async ({ page }) => {
  await page.goto(url);
  await expect(page.getByText('Swag Labs')).toBeVisible()
  await expect(page.getByText('Swag Labs')).toHaveText('Swag Labs')
});

test('Login as a standard user', async ({page})=>{
 
  await page.goto(url);
  await login(page,url,standard_username,pw);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');

});

test('Login as a locked out user',async ({page})=>{
  await page.goto(url);
  await login(page, url, locked_out_user,pw);
  await expect(page.locator(errorLockedOut)).toHaveText('Epic sadface: Sorry, this user has been locked out.');
});
import {test, expect } from '@playwright/test';
import {url} from './globalvariables/globalvariables'
import {standard_username,pw } from './globalvariables/login_data';
import {login,addtocart,fillCustomerDetails } from './helpers/helpers';
import {btnAddBackPack, iconCart, lblProducts} from './objects/products'
import {btnCheckout, btnContinue, btnFinish, btnHome, iconCheck, lblCheckoutPage, lblComplete } from './objects/checkout';

test('Standard-checkout', async ({ page }) => {
    //await page.goto(url);
    //method login
    await login(page,url,standard_username,pw);
    await expect(page.locator(lblProducts)).toBeVisible();

    //method add to cart from products
    await addtocart(page,btnAddBackPack)
    //click checkout button
    await page.locator(iconCart).click();
    //Assert cart contents
    await expect(page.locator(lblCheckoutPage)).toBeVisible();
    await expect(page.locator(lblCheckoutPage)).toHaveText('Your Cart')
    //Assert price
        //TODO
    //checkout
    await page.locator(btnCheckout).click();
    //Fill customer details
    await expect(page.locator(lblCheckoutPage)).toHaveText('Checkout: Your Information');
    fillCustomerDetails(page,'robot','cruz','101');
    await page.locator(btnContinue).click();
    //Finish checkout
    await expect(page.locator(lblCheckoutPage)).toHaveText('Checkout: Overview')
    await page.locator(btnFinish).click;

    //Complete
    await expect(page.locator(lblCheckoutPage)).toHaveText('Checkout: Complete!')
    await expect(page.locator(iconCheck)).toBeVisible;
    await expect(page.locator(lblComplete)).toBeVisible;
    await page.locator(btnHome).click();
  });
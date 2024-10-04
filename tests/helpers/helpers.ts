import {Page} from 'playwright';
import {expect} from '@playwright/test';
import { txtusername,txtpassword,btnLogin } from '../objects/login';
import { txtFirstName,txtLastName,txtZip } from '../objects/checkout';

export async function login(page: Page, url:string, username:string,password:string): Promise<void>{
    await page.goto(url);
    await page.locator(txtusername).fill(username);
    await page.locator(txtpassword).fill(password);
    await page.locator(btnLogin).click();
}

export async function addtocart(page:Page,item:string):Promise<void>{
    await page.locator(item).click();
}

export async function fillCustomerDetails(page:Page,firstname:string,lastname:string,zip:string):Promise<void>{
    await page.locator(txtFirstName).fill(firstname)
    await page.locator(txtLastName).fill(lastname)
    await page.locator(txtZip).fill(zip);
}
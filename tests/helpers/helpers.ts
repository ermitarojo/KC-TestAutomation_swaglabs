import {Page} from 'playwright';
import {expect} from '@playwright/test';
import { txtusername,txtpassword,btnLogin } from '../objects/login';

export async function login(page: Page, url:string, username:string,password:string): Promise<void>{
    await page.goto(url);
    await page.locator(txtusername).fill(username);
    await page.locator(txtpassword).fill(password);
    await page.locator(btnLogin).click();
}
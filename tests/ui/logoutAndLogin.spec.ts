import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/PageLocators.ts';

test('Valid Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate('/web/index.php/auth/login');

  await loginPage.login('Admin', 'admin123');

  await expect(page).toHaveURL(/dashboard/);


   await page.goto('https://webims.meditab.local/#/login');
  await page.locator('#clinic').getByRole('textbox').click();
  await page.locator('#clinic').getByRole('textbox').fill('CNHF5');
  await page.locator('#username').getByRole('textbox').click();
  await page.locator('#username').getByRole('textbox').fill('zampaa');
  await page.locator('input[type="PASSWORD"]').click();
  await page.locator('input[type="PASSWORD"]').fill('Govind@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('AZ').click();
  await page.getByText('Logout').first().click();

  //added new line for testing
  

});
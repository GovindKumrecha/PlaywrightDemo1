import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  // Locators
  usernameInput = 'input[name="username"]';
  passwordInput = 'input[name="password"]';
  loginButton = 'button[type="submit"]';

  async login(username: string, password: string) {

    await this.page.fill(this.usernameInput, username);

    await this.page.fill(this.passwordInput, password);

    await this.page.click(this.loginButton);
  }
}
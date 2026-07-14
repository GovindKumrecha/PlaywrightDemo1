import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 30000,

  retries: 1,

  fullyParallel: true,

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
    browserName: 'chromium',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',

    baseURL: 'https://opensource-demo.orangehrmlive.com'
  }
});
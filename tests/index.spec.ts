import { test, expect } from '@playwright/test'



  test('my test', async ({ page }) => {
    // Assertions use the expect API.
    await expect page.goto('https://www.google.co.in/');

    const title = await page.locator('Google');
    await expect(page).toHaveURL('https://www.google.co.in/');
  })


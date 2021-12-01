import { test, expect } from '@playwright/test'

test('Button is loading ', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.locator('img')).toBeVisible()
})

test('Check Hello text', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await expect(page.locator('text=Hello')).toBeVisible()
})

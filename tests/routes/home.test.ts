import { test, expect } from '@playwright/test'

test('home page displays welcome content correctly', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByText('to your new')).toBeVisible()
  await expect(page.getByText('React app')).toBeVisible()

  const welcomeImage = page.getByAltText('Welcome')
  await expect(welcomeImage).toBeVisible()

  await expect(page.getByText('try editing')).toBeVisible()
  await expect(page.getByText('src/App.tsx')).toBeVisible()
})

test('counter starts at zero and increments correctly', async ({ page }) => {
  await page.goto('/')

  const incrementButton = page.getByRole('button', { name: 'Increase the counter by one' })
  await expect(incrementButton).toBeVisible()

  const counter = page.locator('.counter')
  await expect(counter.getByText('0')).toBeVisible()

  await incrementButton.click()
  await expect(counter.getByText('1')).toBeVisible()
})

test('counter handles multiple increments correctly', async ({ page }) => {
  await page.goto('/')

  const incrementButton = page.getByRole('button', { name: 'Increase the counter by one' })
  const counter = page.locator('.counter')

  await incrementButton.click()
  await incrementButton.click()
  await expect(counter.getByText('2')).toBeVisible()

  for (let i = 0; i < 5; i++) {
    await incrementButton.click()
  }
  await expect(counter.getByText('7')).toBeVisible()
})

test('counter handles negative numbers correctly', async ({ page }) => {
  await page.goto('/')

  const decrementButton = page.getByRole('button', { name: 'Decrease the counter by one' })
  const counter = page.locator('.counter')
  await expect(decrementButton).toBeVisible()

  await decrementButton.click()
  await expect(counter.getByText('-1')).toBeVisible()

  await decrementButton.click()
  await expect(counter.getByText('-2')).toBeVisible()
})

test('counter handles mixed increment and decrement operations', async ({ page }) => {
  await page.goto('/')

  const incrementButton = page.getByRole('button', { name: 'Increase the counter by one' })
  const decrementButton = page.getByRole('button', { name: 'Decrease the counter by one' })
  const counter = page.locator('.counter')

  await decrementButton.click()
  await expect(counter.getByText('-1')).toBeVisible()

  await incrementButton.click()
  await expect(counter.getByText('0')).toBeVisible()

  await incrementButton.click()
  await decrementButton.click()
  await expect(counter.getByText('0')).toBeVisible()
})

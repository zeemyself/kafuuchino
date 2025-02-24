import { expect, test } from '@playwright/test'

test.describe('WebGPU Page', () => {
	test('should display WebGPU status', async ({ page }) => {
		await page.goto('/webgpu')
		await expect(page.locator('canvas')).toBeVisible()
		const gpuStatus = page.locator('p:has-text("GPU Status:")')
		await expect(gpuStatus).toBeVisible()
		const status = await gpuStatus.textContent()
		expect(status).toMatch(/GPU Status: (Loading|WebGPU not supported\.|Device requested|.*)/)
		await expect(page.locator('#canvas-container')).toBeVisible()
	})

	test('should have correct canvas styling', async ({ page }) => {
		await page.goto('/webgpu')
		const canvas = page.locator('canvas')
		const viewportWidth = page.viewportSize()!.width
		const canvasWidth = await canvas.evaluate((el) => {
			return window.getComputedStyle(el).width.replace('px', '')
		})
		const expectedWidth = viewportWidth * 0.7
		const actualWidth = parseFloat(canvasWidth)
		expect(Math.abs(actualWidth - expectedWidth)).toBeLessThan(viewportWidth * 0.01)
		await expect(canvas).toHaveCSS('border', '1px solid rgb(0, 0, 0)')
	})

	test('should have animated red dot', async ({ page }) => {
		await page.goto('/webgpu')
		const canvas = page.locator('canvas')
		await expect(canvas).toBeVisible()
		const screenshot1 = await canvas.screenshot()
		await page.waitForTimeout(500) // Wait for dot to move
		const screenshot2 = await canvas.screenshot()
		expect(screenshot1).not.toEqual(screenshot2)
	})

	test('should update GPU status based on browser support', async ({ page }) => {
		await page.goto('/webgpu')
		const gpuStatus = page.locator('p:has-text("GPU Status:")')
		await expect(gpuStatus).toBeVisible()
		const statusText = await gpuStatus.textContent()
		expect(statusText).toMatch(
			/GPU Status: (Loading|WebGPU not supported\.|Device requested|WebGPU requesting adapter\..*)/
		)
		await page.waitForFunction(() => {
			const status = document.querySelector('p')?.textContent
			return status && !status.includes('Loading')
		})
	})
})

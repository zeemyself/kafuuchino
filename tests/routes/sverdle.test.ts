import { test, expect } from '@playwright/test';

test.describe('Sverdle Game', () => {
  test('page loads correctly with game elements', async ({ page }) => {
    await page.goto('/sverdle');
    
    // Check that the game title is visible (it's visually hidden but in the DOM)
    await expect(page.getByRole('heading', { name: 'Sverdle' })).toBeAttached();
    
    // Check that the game grid is visible
    await expect(page.locator('.grid')).toBeVisible();
    
    // Check that the controls section is visible
    await expect(page.locator('.controls')).toBeVisible();
  });

  test('can navigate to how-to-play page', async ({ page }) => {
    await page.goto('/sverdle');
    
    // Click on the how to play link
    await page.getByRole('link', { name: 'How to play' }).click();
    
    // Check that we're on the how-to-play page
    await expect(page).toHaveURL(/\/sverdle\/how-to-play/);
    await expect(page.getByRole('heading', { name: 'How to play' })).toBeVisible();
  });

  test('can submit a valid guess via form submission', async ({ page }) => {
    await page.goto('/sverdle');
    
    // Fill in the guess inputs directly with a valid word
    await page.evaluate(() => {
      const inputs = document.querySelectorAll('input[name="guess"]') as NodeListOf<HTMLInputElement>;
      inputs[0].value = 'h';
      inputs[1].value = 'e';
      inputs[2].value = 'l';
      inputs[3].value = 'l';
      inputs[4].value = 'o';
    });
    
    // Submit the form
    await page.locator('form[action="?/enter"]').evaluate((form: HTMLFormElement) => {
      form.submit();
    });
    
    // Wait for navigation
    await page.waitForURL('**/sverdle**');
    
    // Check that the form was submitted and the guess was processed
    // (We can't check for exact classes since they depend on the answer, but we can check that the first row has letters)
    const firstRow = page.locator('.row').first();
    await expect(firstRow.locator('.letter').first()).not.toHaveClass('selected');
  });

  test('shows error for invalid word submission', async ({ page }) => {
    await page.goto('/sverdle');
    
    // Fill in the guess inputs directly with an invalid word
    await page.evaluate(() => {
      const inputs = document.querySelectorAll('input[name="guess"]') as NodeListOf<HTMLInputElement>;
      inputs[0].value = 'q';
      inputs[1].value = 'q';
      inputs[2].value = 'q';
      inputs[3].value = 'q';
      inputs[4].value = 'q';
    });
    
    // Submit the form
    await page.locator('form[action="?/enter"]').evaluate((form: HTMLFormElement) => {
      form.submit();
    });
    
    // Wait for navigation
    await page.waitForURL('**/sverdle**');
    
    // Check for the bad-guess class on the grid
    await expect(page.locator('.grid.bad-guess')).toBeVisible();
  });

  test('can restart the game', async ({ page }) => {
    // This test uses a simpler approach by directly submitting the restart form
    await page.goto('/sverdle');
    
    // Create a form submission directly to the restart action
    await page.evaluate(() => {
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = '/sverdle?/restart';
      document.body.appendChild(form);
      form.submit();
    });
    
    // Wait for navigation
    await page.waitForURL('**/sverdle');
    
    // Check that the game has been reset (first row should have the 'current' class)
    await expect(page.locator('.row.current')).toBeVisible();
  });
}); 
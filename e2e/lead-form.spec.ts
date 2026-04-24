import { test, expect } from '@playwright/test';

test.describe('EVR Website E2E', () => {
  test('should navigate and submit lead form successfully', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');

    // Check Hero is visible
    await expect(page.getByRole('heading', { name: /Your fleet runs on energy/i })).toBeVisible();

    // Click CTA to go to form
    await page.getByRole('link', { name: /See your fleet's uptime plan/i }).first().click();

    // Wait for smooth scroll to anchor
    await expect(page).toHaveURL(/.*#conversion/);
    
    // Select Persona (Step 1)
    await page.getByRole('button', { name: /Fleet Operator/i }).click();

    // Fill Form (Step 2)
    await page.getByLabel('Name').fill('E2E Test User');
    await page.getByLabel('Company').fill('Test Fleet Co');
    await page.getByLabel('Fleet Size').selectOption('20-50');
    
    await page.getByLabel('Work Email').fill('test@evrecharge.org');
    await page.getByLabel('City / Region').fill('Test City');

    // Submit again with valid data
    await page.getByRole('button', { name: /Build my fleet's uptime plan/i }).click();

    // Verify success state renders
    await expect(page.getByRole('heading', { name: /Plan is in motion/i })).toBeVisible();
    await expect(page.getByText(/Arpit or Dewansh will reach out within 4 hours/i)).toBeVisible();
  });
});

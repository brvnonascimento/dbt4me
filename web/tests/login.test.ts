import { expect, test } from '@playwright/test';

test('Should go to Login page when clicking the Login link on the header', async ({ page }) => {
	await page.goto('/signup');

	await page.getByRole('link', { name: 'Login' }).click();

	expect(page.url()).toBe('http://localhost:4173/');
});

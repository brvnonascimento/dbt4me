import { expect, test } from '@playwright/test';

test('Should go to Sign Up page when clicking the Sign Up link on the header', async ({ page }) => {
	await page.goto('/');

	await page.getByRole('link', { name: 'Sign Up' }).click();

	expect(page.url()).toBe('http://localhost:4173/signup');
});

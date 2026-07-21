import { test,expect } from '@playwright/test';

test('web page', async ({ page }) => {
    await page.goto('https://xenoframes008.github.io/automation-test-website/index.html');
    await expect(page).toHaveTitle('Resonance — Music for focused listening');
    const footerLinks = page.locator('footer a')
    await expect(footerLinks).toHaveCount(4);

    const footerLinkText = await footerLinks.allTextContents();
    await expect(footerLinkText).toContain('About');
    await expect(footerLinkText).toContain('Help');
    await expect(footerLinkText).toContain('Sign in');
    await expect(footerLinkText).toContain('Sign up');
});
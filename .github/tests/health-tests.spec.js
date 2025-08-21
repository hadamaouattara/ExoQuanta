// Automated visual and functional tests for EXONOV QUANTUM
const { test, expect } = require('@playwright/test');

test.describe('EXONOV QUANTUM Site Health Tests', () => {
  
  test('Homepage loads with proper styling', async ({ page }) => {
    await page.goto('/');
    
    // Check critical elements are visible
    await expect(page.locator('text=EXONOV QUANTUM')).toBeVisible();
    await expect(page.locator('text=Plateforme révolutionnaire')).toBeVisible();
    
    // Verify CSS is loaded by checking computed styles
    const body = page.locator('body');
    const bgColor = await body.evaluate(el => window.getComputedStyle(el).background);
    expect(bgColor).toMatch(/(gradient|purple|#[0-9a-f]{6})/i);
    
    // Check for quantum visual elements
    await expect(page.locator('text=État Quantique')).toBeVisible();
    await expect(page.locator('text=Fonctionnalités Quantiques')).toBeVisible();
  });

  test('Authentication elements are present', async ({ page }) => {
    await page.goto('/');
    
    // Should show user profile or login option
    const hasUserProfile = await page.locator('[data-testid="user-profile"]').isVisible().catch(() => false);
    const hasLoginButton = await page.locator('text=Connexion').isVisible().catch(() => false);
    
    expect(hasUserProfile || hasLoginButton).toBeTruthy();
  });

  test('Navigation is functional', async ({ page }) => {
    await page.goto('/');
    
    // Test main navigation links
    const dashboardLink = page.locator('text=Dashboard');
    const simulationLink = page.locator('text=Simulation');
    
    await expect(dashboardLink).toBeVisible();
    await expect(simulationLink).toBeVisible();
    
    // Click dashboard should redirect to auth or dashboard
    await dashboardLink.click();
    await page.waitForLoadState('networkidle');
    
    const currentUrl = page.url();
    expect(currentUrl).toMatch(/(dashboard|auth|login)/);
  });

  test('CSS classes are properly applied', async ({ page }) => {
    await page.goto('/');
    
    // Check for Tailwind classes in DOM
    const hasGradientClasses = await page.evaluate(() => {
      return document.querySelector('[class*="bg-gradient"]') !== null;
    });
    
    const hasPurpleClasses = await page.evaluate(() => {
      return document.querySelector('[class*="purple"]') !== null;
    });
    
    expect(hasGradientClasses || hasPurpleClasses).toBeTruthy();
  });

  test('Responsive design works', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    await expect(page.locator('text=EXONOV QUANTUM')).toBeVisible();
    
    // Test desktop view
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    
    await expect(page.locator('text=EXONOV QUANTUM')).toBeVisible();
  });

  test('Performance is acceptable', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('No JavaScript errors in console', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForTimeout(2000); // Wait for potential errors
    
    // Filter out known acceptable errors
    const criticalErrors = errors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('websocket') &&
      !error.includes('localhost:8098')
    );
    
    expect(criticalErrors.length).toBe(0);
  });

  test('Visual regression - homepage screenshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Take screenshot for visual comparison
    await expect(page).toHaveScreenshot('homepage.png', {
      fullPage: true,
      threshold: 0.2 // Allow 20% difference to account for dynamic content
    });
  });

  test('Critical user flows work', async ({ page }) => {
    await page.goto('/');
    
    // Test simulation button click
    const simulationButton = page.locator('text=Démarrer Simulation');
    if (await simulationButton.isVisible()) {
      await simulationButton.click();
      await page.waitForLoadState('networkidle');
      
      // Should redirect to simulation or auth
      const url = page.url();
      expect(url).toMatch(/(simulation|auth|login)/);
    }
  });

  test('Site metadata is correct', async ({ page }) => {
    await page.goto('/');
    
    const title = await page.title();
    expect(title).toContain('Exonov Quantum');
    
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toContain('simulation quantique');
  });
});

test.describe('Health Monitoring Specific Tests', () => {
  
  test('CSS bundle is properly loaded', async ({ page }) => {
    await page.goto('/');
    
    // Check if CSS files are loaded
    const stylesheets = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => link.href);
    });
    
    // Should have at least one CSS file or inline styles
    const hasStylesheets = stylesheets.length > 0;
    const hasInlineStyles = await page.locator('style').count() > 0;
    
    expect(hasStylesheets || hasInlineStyles).toBeTruthy();
  });

  test('Firebase integration status', async ({ page }) => {
    await page.goto('/');
    
    // Check if Firebase is loaded
    const hasFirebase = await page.evaluate(() => {
      return typeof window.firebase !== 'undefined' || 
             document.querySelector('script[src*="firebase"]') !== null ||
             document.body.innerHTML.includes('firebase');
    });
    
    expect(hasFirebase).toBeTruthy();
  });

  test('No critical accessibility issues', async ({ page }) => {
    await page.goto('/');
    
    // Basic accessibility checks
    const missingAltImages = await page.locator('img:not([alt])').count();
    const missingHeadings = await page.locator('h1').count();
    
    expect(missingAltImages).toBe(0);
    expect(missingHeadings).toBeGreaterThan(0);
  });
});

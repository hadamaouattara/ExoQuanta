// Playwright configuration for visual regression testing
module.exports = {
  testDir: '.github/tests',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:3000',
    browserName: 'chromium',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Mobile Safari',
      use: { 
        browserName: 'webkit',
        viewport: { width: 375, height: 667 }
      },
    },
  ],
  reporter: [['html'], ['json', { outputFile: 'test-results.json' }]],
};

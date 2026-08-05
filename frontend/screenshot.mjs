import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Users\\rupesh vishwakarma\\.cache\\puppeteer\\chrome\\win64-151.0.7922.71\\chrome-win64\\chrome.exe'
  });
  const page = await browser.newPage();
  
  // Set viewport for a standard desktop
  await page.setViewport({ width: 1280, height: 800 });

  // Dashboard
  console.log('Navigating to Dashboard...');
  await page.goto('http://localhost:5173/dashboard', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot-dashboard.png' });
  console.log('Saved screenshot-dashboard.png');

  // Login
  console.log('Navigating to Login...');
  await page.goto('http://localhost:5173/login', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'screenshot-login.png' });
  console.log('Saved screenshot-login.png');

  await browser.close();
})();

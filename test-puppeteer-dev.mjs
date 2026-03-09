import puppeteer from 'puppeteer';
import { spawn } from 'child_process';

const viteProcess = spawn('npm', ['run', 'dev'], { detached: true });

setTimeout(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    
    await browser.close();
  } catch (err) {
    console.error(err);
  } finally {
    process.kill(-viteProcess.pid);
    process.exit(0);
  }
}, 3000);

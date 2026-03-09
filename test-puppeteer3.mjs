import puppeteer from 'puppeteer';
import { spawn } from 'child_process';

const viteProcess = spawn('npm', ['run', 'preview'], { detached: true });

setTimeout(async () => {
  try {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
    
    const html = await page.content();
    console.log("HTML length:", html.length);
    const rootHtml = await page.$eval('#root', el => el.innerHTML);
    console.log("Root content:", rootHtml.slice(0, 200));
    if(rootHtml.trim() === '') {
       console.log("Root is empty!");
    } else {
       console.log("Root is NOT empty.");
    }
    
    await browser.close();
  } catch (err) {
    console.error(err);
  } finally {
    process.kill(-viteProcess.pid);
    process.exit(0);
  }
}, 3000);

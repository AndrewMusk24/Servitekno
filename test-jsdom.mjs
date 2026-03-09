import { JSDOM, VirtualConsole } from 'jsdom';
import fs from 'fs';

const virtualConsole = new VirtualConsole();
virtualConsole.on("error", (err) => {
  console.error("Virtual Console Error:", err);
});
virtualConsole.on("jsdomError", (err) => {
  console.error("JSDOM Error:", err);
});

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body><div id="root"></div></body></html>', {
  url: "http://localhost",
  runScripts: "dangerously",
  virtualConsole
});
const { window } = dom;

const script = fs.readFileSync('./dist/assets/index-DIW8DZrY.js', 'utf8');

try {
  const el = window.document.createElement("script");
  el.textContent = script;
  window.document.body.appendChild(el);
} catch (e) {
  console.error("Evaluation Error:", e);
}

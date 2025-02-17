const puppeteer = require("puppeteer");

async function start() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/JavaScript");
    await page.screenshot({path: "jswiki.png", fullPage:true});
    await browser.close();
}

start()
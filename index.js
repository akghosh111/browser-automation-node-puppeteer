const puppeteer = require("puppeteer");

async function start() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://google.com");
    await page.screenshot({path: "googless.png"});
    await browser.close();
}

start()
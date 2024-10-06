const puppeteer = require('puppeteer');

(async () => {
    const testPath = `file://${__dirname}/../index.html`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(testPath);

    const pngPath = `${__dirname}/browser.png`; // 改為只用 browser.png
    await page.screenshot({ path: pngPath, fullPage: true });
    await browser.close();
})();

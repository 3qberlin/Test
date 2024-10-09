import puppeteer from 'puppeteer';

(async () => {
  // eslint-disable-next-line no-undef
  const testPath = `file://${__dirname}/../index.html`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(testPath);

  // eslint-disable-next-line no-undef
  const pngPath = `${__dirname}/browser.png`; // 改為只用 browser.png
  await page.screenshot({ path: pngPath, fullPage: true });
  await browser.close();
})();

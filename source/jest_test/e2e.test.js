describe('Basic user flow for Website', () => {
    beforeAll(async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("http://localhost:9000/source");
        console.log(await page.title());
    });
  
  });
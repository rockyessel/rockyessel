import chromium from '@sparticuz/chromium-min';
import puppeteer from 'puppeteer-core';

const localExcuPath = process.env.CHROME_EXECUTABLE_PATH_DEV;
const prodExcuPath = process.env.CHROME_EXECUTABLE_PATH_PROD;

const isLocal = !!localExcuPath;

export const maxDuration = 20;

export const GET = async (request: Request) => {
  const siteUrl = 'https://rockyessel.me';

  try {
    const cpath = isLocal
      ? localExcuPath
      : await chromium.executablePath(prodExcuPath);

    const browser = await puppeteer.launch({
      args: isLocal ? puppeteer.defaultArgs() : chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: cpath,
      headless: chromium.headless,
    });

    const page = await browser.newPage();
    await page.goto(siteUrl);

    // Get the page title
    const pageTitle = await page.title();

    // Get meta description
    const metaDescription = await page.$eval(
      'meta[name="description"]',
      (element) => element.getAttribute('content')
    );

    // Get meta keywords
    const metaKeywords = await page.$eval('meta[name="keywords"]', (element) =>
      element.getAttribute('content')
    );

    // Get favicon
    const favicon = await page.$eval('link[rel="icon"]', (element) =>
      element.getAttribute('href')
    );

    await browser.close();

    return new Response(
      JSON.stringify({
        success: true,
        title: pageTitle,
        description: metaDescription,
        keywords: metaKeywords,
        favicon: favicon,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error during Puppeteer launch or page interaction:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

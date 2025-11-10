import { isWeakValidURL } from '@/components/editor/lib/helpers';
import {
  CHROME_EXECUTABLE_DEV,
  CHROME_EXECUTABLE_PROD,
} from '@/lib/config/env';
import { createSlug, isProduction } from '@/lib/utils/helpers';
import chromium from '@sparticuz/chromium-min';
import puppeteer, { Page } from 'puppeteer-core';
import { errorResponse } from '../../../../../shared/helpers';

const CHROME_EXECUTABLE_PATH = isProduction
  ? CHROME_EXECUTABLE_PROD
  : CHROME_EXECUTABLE_DEV;

export const maxDuration = 20;

// Helper function to get meta content or return null if not found
const getMetaContent = async (page: Page, selector: string) => {
  try {
    return await page.$eval(selector, (element) =>
      element.getAttribute('content')
    );
  } catch (error) {
    return null; // Return null if the selector fails (element not found)
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();
  const siteUrl = body.siteUrl;

  const parseUrl = siteUrl.replace(/\/+$/, '');
  try {
    const viewport = {
      deviceScaleFactor: 1,
      hasTouch: false,
      height: 1080,
      isLandscape: true,
      isMobile: false,
      width: 1920,
    };

    const execPath = isProduction
      ? await chromium.executablePath(CHROME_EXECUTABLE_PATH)
      : CHROME_EXECUTABLE_PATH;

    const browser = await puppeteer.launch({
      args: isProduction ? chromium.args : puppeteer.defaultArgs(),
      defaultViewport: viewport,
      executablePath: execPath,
      headless: 'shell',
    });

    const page = await browser.newPage();
    await page.goto(siteUrl);

    // Get the page title
    const pageTitle = await page.title();

    /// Fetch description and keywords
    const metaDescription =
      (await getMetaContent(page, 'meta[name="description"]')) ||
      (await getMetaContent(page, 'meta[property="og:description"]')) ||
      'No description found'; // Fallback if neither exists

    const metaKeywords =
      (await getMetaContent(page, 'meta[name="keywords"]')) ||
      (await getMetaContent(page, 'meta[property="og:keywords"]')) ||
      'No keywords found'; // Fallback if neither exists

    let metaImage =
      (await getMetaContent(page, 'meta[name="image"]')) ||
      (await getMetaContent(page, 'meta[property="og:image"]')) ||
      (await getMetaContent(page, 'meta[property="twitter:image"]'));

    // Check if the logo is a valid URL, otherwise, append the site URL
    if (metaImage && !isWeakValidURL(metaImage)) {
      metaImage = parseUrl + metaImage;
    }

    // Try to get site name (og:site_name or application-name)
    let siteName = await page
      .$eval(
        'meta[property="og:site_name"], meta[name="application-name"]',
        (element) => element.getAttribute('content')
      )
      .catch(() => null); // If not found, return null

    // If siteName is undefined, extract from the URL
    if (!siteName) {
      const parsedUrl = new URL(siteUrl);
      // Remove the extension and capitalize the first letter
      const hostnameWithoutExtension = parsedUrl.hostname.split('.')[0];
      siteName =
        hostnameWithoutExtension.charAt(0).toUpperCase() +
        hostnameWithoutExtension.slice(1);
    }

    await browser.close();

    const keywords =
      metaKeywords?.split(',')?.map((keyword) => {
        const slugKeyword = createSlug(keyword);

        return slugKeyword;
      }) || [];

    return new Response(
      JSON.stringify({
        url: parseUrl,
        keywords,
        name: siteName,
        title: pageTitle,
        logo: metaImage,
        slug: createSlug(siteName),
        description: metaDescription,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error during Puppeteer launch or page interaction:', error);
    return new Response(
      JSON.stringify(errorResponse(error?.message ?? '', false)),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

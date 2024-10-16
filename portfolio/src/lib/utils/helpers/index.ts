import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Check if the environment is Vercel production or standard production.
const isVercelProduction = process.env.VERCEL === '1';
const isStandardProduction = process.env.NODE_ENV === 'production';

// Determine if the environment is production.
export const isProduction = isVercelProduction || isStandardProduction;

// Define the development and production domains from environment variables.
const DEV_ENV = process.env.DEV_DOMAIN || process.env.NEXT_PUBLIC_DEV_DOMAIN;
const PRO_ENV = process.env.PROD_DOMAIN || process.env.NEXT_PUBLIC_PROD_DOMAIN;
// const VERCEL_ENV = process.env.DOMAIN_VERCEL || process.env.NEXT_PUBLIC_DOMAIN_VERCEL;

// Determine the domain based on the environment.
export const DOMAIN = isProduction ? PRO_ENV : DEV_ENV;

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Creates a slug from the input string for SEO-friendly URLs.
 * @param {string} input - The input string to create a slug from.
 * @returns {string} - The generated slug.
 */
export const createSlug = (input?: string): string => {
  console.log('input: ', input);

  if (!input) return '';

  // Define a set of replacements for specific characters or words
  const replacements: { [key: string]: string } = {
    '@': 'at',
    '&': 'and',
    '%': 'percent',
    '+': 'plus',
    '#': 'number',
    $: 'dollar',
    '€': 'euro',
    '£': 'pound',
    '™': 'tm',
    '©': 'c',
    '®': 'r',
  };

  // Process input by replacing specific characters and applying additional rules
  let slug = input
    .replace(/@|&|%|\+|#|\$|€|£|™|©|®/g, (match) => replacements[match]) // Replace defined symbols using the replacements map
    .replace(/(\b[a-zA-Z]+)'s\b/g, '$1') // Replace possessive forms like "car's" to "cars"
    .replace(/(\d+)\s*%\s*/g, '$1-percent') // Handle numeric percentages like "50 %" to "50-percent"
    .replace(/\b\d{1,2}\/\d{1,2}\/\d{2,4}\b/g, (date) =>
      date.replace(/\//g, '-')
    ) // Format dates like "12/31/2024" to "12-31-2024"
    .replace(/\b\d+(\.\d+)?\b/g, (number) => number.replace(/\./g, '-')) // Replace decimal points in numbers with hyphens, e.g., "3.14" to "3-14"
    .replace(/[^a-zA-Z0-9-]+/g, '-') // Replace any remaining non-alphanumeric characters with hyphens
    .replace(/-+/g, '-') // Replace consecutive hyphens with a single hyphen
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing spaces
    .replace(/^-|-$/g, ''); // Remove leading or trailing hyphens

  return slug;
};

export const fileToBase64 = async (input: File | string): Promise<string> => {
  // If the input is a File
  if (input instanceof File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1]); // Extract the Base64 part
      };

      reader.onerror = (error) => reject(error);

      reader.readAsDataURL(input);
    });
  }

  // If the input is a URL (string)
  else if (typeof input === 'string') {
    return fetch(input)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch image.');
        }
        return response.blob(); // Convert the response to a blob
      })
      .then((blob) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();

          reader.onloadend = () => {
            const result = reader.result as string;
            resolve(result.split(',')[1]); // Extract the Base64 part
          };

          reader.onerror = (error) => reject(error);

          reader.readAsDataURL(blob); // Read blob as data URL
        });
      });
  }

  // Handle other cases
  else {
    return Promise.reject(
      new Error('Input must be a File or a valid image URL.')
    );
  }
};

export const urlToBase64 = (url: string) => {
  return toSafeBase64Url(Buffer.from(url).toString('base64'));
};

export const toSafeBase64Url = (base64: string): string => {
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
};

export const profile = `https://avatars.githubusercontent.com/u/97303710?s=400&u=bf45658532dceeaa02804dcb458f09189dbe6e77&v=4`;

export const createOgImage = ({
  title,
  meta,
}: {
  title: string;
  meta: string;
}) =>
  [
    // ACCOUNT PREFIX
    // Add your own Cloudinary account ID.
    `https://res.cloudinary.com/djkbznbcp/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // TITLE
    // Karla google font in light rose
    `l_text:Karla_72_bold:${e(title)},co_rgb:ffe4e6,c_fit,w_1400,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_180`,

    // META
    // Karla, but smaller
    `l_text:Karla_48:${e(meta)},co_rgb:ffe4e680,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_100`,

    // PROFILE IMAGE
    // dynamically fetched from my twitter profile
    `l_fetch:${urlToBase64(profile)}`,
    // Transformations
    `c_thumb,g_face,r_max,w_380,h_380,q_100`,
    // Positioning
    `fl_layer_apply,w_140,g_north_west,x_100,y_100`,

    // BG
    `qcpioymg5esflgrmn4tc.png`,
  ].join('/');

export const createOgImagePage = ({ title, meta }: { title: string; meta: string }) =>
  [
    // ACCOUNT PREFIX
    // Add your own Cloudinary account ID.
    `https://res.cloudinary.com/djkbznbcp/image/upload`,
    // Composed Image Transformations
    `w_1600,h_836,q_100`,

    // TITLE
    // Karla google font in light rose
    `l_text:Karla_72_bold:${e(title)},co_rgb:ffe4e6,c_fit,w_1400,h_240`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_180`,

    // META
    // Karla, but smaller
    `l_text:Karla_48:${e(meta)},co_rgb:ffe4e680,c_fit,w_1400`,
    // Positioning
    `fl_layer_apply,g_south_west,x_100,y_100`,

    // PROFILE IMAGE
    // dynamically fetched from my twitter profile
    `l_fetch:${urlToBase64(domainURL('/assets/logo-re.svg'))}`,
    // Transformations
    `c_thumb,g_face,r_max,w_380,h_380,q_100`,
    // Positioning
    `fl_layer_apply,w_140,g_north_west,x_100,y_100`,

    // BG
    `qcpioymg5esflgrmn4tc.png`,
  ].join('/');

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));

// Check if the window object is defined (i.e., the code is running in a browser).
export const windowIsDefined = typeof window !== 'undefined';

type URLPathType = string | `/${string}` | '#';
/**
 * Constructs a domain URL with an optional path.
 * @param {URLPathType} [path] - Optional path to append to the domain URL.
 * @returns {string} - The constructed domain URL.
 * @throws {Error} - If the domain is not set or is an empty string.
 */
export const domainURL = (path?: URLPathType): string => {
  const protocol = isProduction ? 'https' : 'http';

  if (!DOMAIN) {
    throw new Error('Domain is not set or is an empty string');
  }

  // Ensure path starts with a '/'
  const formattedPath =
    path && typeof path === 'string' && !path.startsWith('/')
      ? `/${path}`
      : path;

  let url: URL;
  if (formattedPath) {
    url = new URL(`${protocol}://${DOMAIN}${formattedPath}`);
  } else {
    url = new URL(`${protocol}://${DOMAIN}`);
  }

  return url.toString();
};

/**
 * Truncates a string to a specified length, appending "..." if truncated.
 * @param {string} str - The string to be truncated.
 * @param {number} num - The maximum length of the truncated string.
 * @returns {string} - The truncated string with "..." appended if necessary.
 */
export const truncate = (str: string, num: number) => {
  if (!str) return '';
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num).trimEnd() + '...';
};

export const isContentNew = (contentDateISO: string): boolean => {
  // Convert the ISO date string to a Date object
  const contentDate = new Date(contentDateISO);

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the difference in milliseconds using getTime()
  const diffInMilliseconds = currentDate.getTime() - contentDate.getTime();

  // Convert milliseconds to days
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

  // Return true if the content is within 7 days, otherwise false
  return diffInDays <= 7;
};

// Function to calculate reading time based on total word count
export const calculateReadTime = (wordCount: number): string => {
  const averageWordsPerMinute = 150; // Updated average reading speed
  const minutes = wordCount / averageWordsPerMinute;
  const minutesRounded = Math.floor(minutes); // Rounds down to the nearest whole minute
  // const seconds = Math.round((minutes - minutesRounded) * 60); // Calculate remaining seconds

  // Build the time string with minutes and seconds
  let timeString = `${minutesRounded > 0 ? `${minutesRounded} minute${minutesRounded > 1 ? 's' : ''}` : ''}`;
  // if (seconds > 0) timeString += `${minutesRounded > 0 ? " and " : ""}${seconds} second${seconds > 1 ? "s" : ""}`;

  // Default to "less than a minute" if no time string is constructed
  return timeString || 'less than a minute';
};

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomPreviousDay = () => {
  const today = new Date();

  // Generate a random number of days between 1 and 5
  const randomDaysAgo = getRandomInt(1, 3);
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - randomDaysAgo); // Move to a random number of days ago

  return pastDate.toISOString(); // Return the generated date as a string
};

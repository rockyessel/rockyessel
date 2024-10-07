import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * Creates a slug from the input string for SEO-friendly URLs.
 * @param {string} input - The input string to create a slug from.
 * @returns {string} - The generated slug.
 */
export const createSlug = (input: string): string => {
  console.log('input: ', input);

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

export const urlToBase64 = async (url: string): Promise<string> => {
  if (typeof window !== 'undefined') {
    return window.btoa(unescape(encodeURIComponent(url)));
  } else {
    // Handle the case where 'window' is not defined, if necessary
    throw new Error("window is not defined");
  }
};


export const toSafeBase64Url = (base64: string): string => {
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/\=+$/, '');
};

export const createOgImage = ({
  title,
  meta,
  image,
}: {
  title: string;
  meta: string;
  image: string;
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
    `l_fetch:${image}`,
    // Transformations
    `c_thumb,g_face,r_max,w_380,h_380,q_100`,
    // Positioning
    `fl_layer_apply,w_140,g_north_west,x_100,y_100`,

    // BG
    `qcpioymg5esflgrmn4tc.png`,
  ].join('/');

// double escape for commas and slashes
const e = (str: string) => encodeURIComponent(encodeURIComponent(str));

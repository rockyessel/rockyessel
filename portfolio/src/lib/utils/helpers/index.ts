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
'$': 'dollar',
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

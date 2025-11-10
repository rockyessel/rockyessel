/**
 * Deep equality comparison of two values.
 * @param {any} a - First value
 * @param {any} b - Second value
 * @returns {boolean} Whether values are deeply equal
 */
export const deepEqual = (a: any, b: any, seen = new WeakMap()): boolean => {
  if (a === b) return true;

  // Handle null or undefined
  if (a == null || b == null) return false;

  // Handle NaN
  if (Number.isNaN(a) && Number.isNaN(b)) return true;

  // Type mismatch
  if (typeof a !== typeof b) return false;

  // Handle Dates
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // Handle RegExp
  if (a instanceof RegExp && b instanceof RegExp) {
    return a.source === b.source && a.flags === b.flags;
  }

  // Handle Sets
  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) return false;
    for (const val of a) {
      if (![...b].some((bVal) => deepEqual(val, bVal, seen))) return false;
    }
    return true;
  }

  // Handle Maps
  if (a instanceof Map && b instanceof Map) {
    if (a.size !== b.size) return false;
    for (const [key, val] of a) {
      if (!b.has(key) || !deepEqual(val, b.get(key), seen)) return false;
    }
    return true;
  }

  // Handle arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((val, i) => deepEqual(val, b[i], seen));
  }

  // Handle objects (including circular references)
  if (typeof a === 'object' && typeof b === 'object') {
    if (seen.has(a)) return seen.get(a) === b;
    seen.set(a, b);

    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(
      (key) => b.hasOwnProperty(key) && deepEqual(a[key], b[key], seen)
    );
  }

  return false;
};

/**
 * Retrieves a server-only environment variable.
 * - If running in the browser (client), returns undefined.
 * - If on the server, throws if the variable is missing or empty.
 *
 * @param name - The name of the environment variable
 * @returns The environment variable string if available (only on server)
 */
export const getEnvVariable = (
  name: string,
  env: 'client' | 'convex' | 'server' | 'unknown' = 'unknown'
): string | undefined => {
  if (typeof window !== 'undefined') {
    // Client environment, skip accessing server-only env vars
    return undefined;
  }
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `🔴 Missing server environment variable: "${name}" -> ${env}`
    );
  }
  return value;
};

/**
 * Creates a standardized error response object.
 * This can be used for returning error responses from API endpoints.
 *
 * @param {string} message - The error message to return.
 * @param {T | null} [payload] - Optional payload to return along with the error message, defaults to `undefined` if not provided.
 */
export const errorResponse = <T>(message: string, payload: T) => ({
  message,
  success: false,
  payload,
});

/**
 * Creates a standardized success response object.
 * This can be used for returning successful responses from API endpoints.
 *
 * @param {string} message - The success message to return.
 * @param {T} payload - The payload (data) to return along with the success message.
 */
export const successResponse = <T>(message: string, payload: T) => {
  return {
    message,
    success: true,
    payload,
  };
};

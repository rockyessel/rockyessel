import { getEnvVariable } from "../../../shared/helpers";

export const CONVEX_URL = String(getEnvVariable('CONVEX_URL', 'server'));
export const CONVEX_DEPLOYMENT = String(getEnvVariable('CONVEX_DEPLOYMENT', 'server'));

export const NEXTAUTH_URL = String(getEnvVariable('NEXTAUTH_URL', 'server'));
export const NEXTAUTH_SECRET = String(getEnvVariable('NEXTAUTH_SECRET', 'server'));

export const GITHUB_CLIENT_ID = String(getEnvVariable('GITHUB_CLIENT_ID', 'server'));
export const GITHUB_CLIENT_SECRET = String(getEnvVariable('GITHUB_CLIENT_SECRET', 'server'));

export const DEV_DOMAIN = String(getEnvVariable('DEV_DOMAIN', 'server'));
export const PROD_DOMAIN = String(getEnvVariable('PROD_DOMAIN', 'server'));


export const WEB_MASTER_API_KEY = String(process.env.WEB_MASTER_API_KEY)

export const CHROME_EXECUTABLE_PROD = String(getEnvVariable('CHROME_EXECUTABLE_PATH_PROD', 'server'));
export const CHROME_EXECUTABLE_DEV = String(getEnvVariable('CHROME_EXECUTABLE_PATH_DEV', 'server'));



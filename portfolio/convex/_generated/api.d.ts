/* prettier-ignore-start */

/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as configs_https from "../configs/https.js";
import type * as core_newsletter_index from "../core/newsletter/index.js";
import type * as core_posts_draft from "../core/posts/draft.js";
import type * as core_posts_main from "../core/posts/main.js";
import type * as core_publications_index from "../core/publications/index.js";
import type * as core_storage_file from "../core/storage/file.js";
import type * as myFunctions from "../myFunctions.js";
import type * as types_index from "../types/index.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "configs/https": typeof configs_https;
  "core/newsletter/index": typeof core_newsletter_index;
  "core/posts/draft": typeof core_posts_draft;
  "core/posts/main": typeof core_posts_main;
  "core/publications/index": typeof core_publications_index;
  "core/storage/file": typeof core_storage_file;
  myFunctions: typeof myFunctions;
  "types/index": typeof types_index;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

/* prettier-ignore-end */

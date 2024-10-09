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
import type * as core_posts_draft from "../core/posts/draft.js";
import type * as core_posts_main from "../core/posts/main.js";
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
  "core/posts/draft": typeof core_posts_draft;
  "core/posts/main": typeof core_posts_main;
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

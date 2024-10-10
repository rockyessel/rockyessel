import { httpRouter } from 'convex/server';
import { httpAction } from '../_generated/server';
import { api } from '../_generated/api';
import { Id } from '../_generated/dataModel';

const http = httpRouter();

http.route({
  path: '/file/upload',
  method: 'POST',
  handler: httpAction(async (ctx, request) => {
    // Step 1: Store the file
    const blob = await request.blob();
    const storageId = await ctx.storage.store(blob);

    // Step 2: Save the storage ID to the database via a mutation
    await ctx.runMutation(api.core.storage.file.createFile, {
      storageId,
      mimeType: blob.type,
      fileUrl: String(await ctx.storage.getUrl(storageId)),
    });

    // Step 3: Return a response with the correct CORS headers
    return new Response(null, {
      status: 200,
      // CORS headers
      headers: new Headers({
        // e.g. https://mywebsite.com, configured on your Convex dashboard
        'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
        Vary: 'origin',
      }),
    });
  }),
});

http.route({
  path: '/file/get',
  method: 'GET',
  handler: httpAction(async (ctx, request) => {
    const { searchParams } = new URL(request.url);
    // This storageId param should be an Id<"_storage">
    const storageId = searchParams.get('storageId')!;
    const blob = await ctx.storage.get(storageId);
    if (blob === null) {
      return new Response('Image not found', {
        status: 404,
      });
    }
    return new Response(blob);
  }),
});

// Pre-flight request for /sendImage
http.route({
  path: '/file/upload',
  method: 'OPTIONS',
  handler: httpAction(async (_, request) => {
    // Make sure the necessary headers are present
    // for this to be a valid pre-flight request
    const headers = request.headers;
    if (
      headers.get('Origin') !== null &&
      headers.get('Access-Control-Request-Method') !== null &&
      headers.get('Access-Control-Request-Headers') !== null
    ) {
      return new Response(null, {
        headers: new Headers({
          // e.g. https://mywebsite.com, configured on your Convex dashboard
          'Access-Control-Allow-Origin': process.env.CLIENT_ORIGIN!,
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type, Digest',
          'Access-Control-Max-Age': '86400',
        }),
      });
    } else {
      return new Response();
    }
  }),
});

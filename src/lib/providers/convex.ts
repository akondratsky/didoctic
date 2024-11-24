import { PUBLIC_CONVEX_URL } from '$env/static/public';
import { ConvexHttpClient } from 'convex/browser';

console.log('Initializing Convex client with public URL:', PUBLIC_CONVEX_URL);

export const convex = new ConvexHttpClient(PUBLIC_CONVEX_URL);

import { type APIRoute } from 'astro';
import db from '@lib/db';

export const prerender = false;

export const GET: APIRoute = async () => {
  if (import.meta.env.DEV) return new Response();

  let client = null;

  try {
    client = db();
    
   const {status, statusText, data} = await client.rpc('get_pathnames_count');

    if (status !== 200) throw Error(statusText);
     
    return new Response(JSON.stringify(data));
  } catch (error: unknown) {
    if (client) {
      const stack =
        error instanceof Error
          ? error.stack
          : typeof error === 'object'
          ? JSON.stringify(error)
          : typeof error === 'string'
          ? error
          : 'unexpected error type';

      await client.from('error').insert([{ stack }]);
    }
  }

  return new Response();
};

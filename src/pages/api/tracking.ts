import { type APIRoute } from 'astro';
import db from '@lib/db';

export const prerender = false;

export const POST: APIRoute = async (context) => {
  if (import.meta.env.DEV) return new Response();

  let client = null;

  try {
    const { pathname, details } = await context.request.json();

    client = db();
    const { status, statusText } = await client.from('tracking').insert([
      {
        pathname,
        ip: context.clientAddress,
        user_agent: context.request.headers.get('User-Agent'),
        details,
      },
    ]);

    if (status !== 201) throw Error(statusText);
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

// The site map, built from the pages themselves so it never falls out of step.
import type { APIRoute } from 'astro';
import { doorPages } from '../content/pages';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const routes = ['', 'safe-workspace', 'plans', 'who-its-for', ...doorPages.map((d) => `who-its-for/${d.id}`), 'trust', 'company', 'start', 'privacy'];
  const urls = routes.map((r) => `  <url><loc>${new URL(`${base}/${r ? r + '/' : ''}`, site).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml' } });
};

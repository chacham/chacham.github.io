import rss from "@astrojs/rss";
import type { APIContext } from 'astro';
import { getCollection } from "astro:content";

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Chacham\'s TMI',
    description: 'Too Minor Information for Chacham',
    site: context.site || 'https://chacham.github.io',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>ko</language>`,
  });
}

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { filterPublished, sortNewest } from '../lib/content';

export async function GET(context: { site?: URL }) {
  const articles = sortNewest(filterPublished(await getCollection('articles')));
  return rss({
    title: 'Dennis Wu — Research Notes',
    description: 'Public writing on quantitative research, physics, and AI safety.',
    site: context.site ?? new URL('https://denniswu28.github.io'),
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.abstract,
      pubDate: article.data.publishedAt,
      link: `/blog/${article.data.category}/${article.data.slug}/`,
      categories: [article.data.category, ...article.data.tags]
    })),
    customData: '<language>en-us</language>'
  });
}

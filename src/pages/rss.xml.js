import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const sparks = await getCollection('sparks', ({ data }) => data.status === 'published');
  const sorted = sparks.sort((a, b) => b.data.publishDate - a.data.publishDate);

  return rss({
    title: 'Realspark',
    description: 'Short, useful summaries of the best videos, books, and research.',
    site: context.site,
    items: sorted.map(spark => ({
      title: spark.data.title,
      pubDate: spark.data.publishDate,
      description: spark.data.description ?? '',
      link: `/${spark.data.category}/${spark.slug}/`,
    })),
  });
}

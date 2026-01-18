import RSS from 'rss'
import { getAllPosts } from '@/lib/content'

export async function GET() {
  const feed = new RSS({
    title: 'HaoAI Blog',
    description: 'Latest news and updates from HaoAI - Agentic AI for Bioinformatics and Healthcare',
    feed_url: 'https://haoai.org/rss',
    site_url: 'https://haoai.org',
    language: 'en',
    pubDate: new Date(),
  })

  const posts = getAllPosts()

  posts.forEach((post) => {
    if (!post || !post.title) {
      console.warn('Skipping invalid post in RSS feed generation')
      return
    }

    feed.item({
      title: post.title,
      description: post.excerpt || '',
      url: `https://haoai.org/blog/${post.slug}`,
      date: post.date ? new Date(post.date) : new Date(),
      categories: post.category ? [post.category] : [],
    })
  })

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
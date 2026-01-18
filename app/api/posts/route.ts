import { getAllBlogPosts } from '@/lib/content'

export async function GET() {
  try {
    const posts = getAllBlogPosts()
    return Response.json(
      { posts: posts.map(({ content, ...post }) => post) },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      },
    )
  } catch (error) {
    return Response.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  getBlogPostBySlug,
  getBlogPostSlugs,
  getRelatedBlogPosts,
} from '@/lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = getBlogPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - HaoAI`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedBlogPosts(post.slug, post.category, 3)

  const heroImage = 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&auto=format&fit=crop'

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-12">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            ← Back to all posts
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-lg opacity-90">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span>By {post.author}</span>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 md:p-12">
            {post.content && (
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <MDXRemote
                  source={post.content}
                  options={{
                    mdxOptions: {
                      remarkPlugins: [remarkGfm],
                      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
                    },
                  }}
                />
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                About the Author
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {post.author}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    Contributor to HaoAI's research and development efforts.
                  </p>
                </div>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">
                Share this post
              </h3>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                  LinkedIn
                </button>
                <button className="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                  Copy Link
                </button>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center">
                        <div className="text-white text-4xl font-bold opacity-30">
                          {relatedPost.title[0]}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-xs font-medium">
                            {relatedPost.category}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {relatedPost.readTime} min
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              ← Back to all posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

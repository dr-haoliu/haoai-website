import Link from 'next/link'
import { getAllBlogPosts, getFeaturedBlogPosts } from '@/lib/content'

export const metadata = {
  title: 'News & Updates - HaoAI',
  description:
    'Latest news, updates, and blog posts from the HaoAI research team',
}

export default function BlogPage() {
  const featuredPosts = getFeaturedBlogPosts()
  const recentPosts = getAllBlogPosts().slice(3)

  const featuredImages = [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
  ]

  const recentImages = [
    'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl opacity-90">
            Latest news, research updates, and blog posts from HaoAI
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={featuredImages[index % featuredImages.length]}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Recent Posts */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={recentImages[index % recentImages.length]}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {post.readTime} min
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

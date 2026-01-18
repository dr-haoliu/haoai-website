'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card, CardBody, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

interface Post {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  readTime: number
  featured: boolean
}

export function News() {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([])

  const newsImages = [
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583912260925-14dd25133bc2?w=800&auto=format&fit=crop',
  ]

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        const featured = data.posts.filter((p: Post) => p.featured).slice(0, 3)
        setFeaturedPosts(featured)
      })
      .catch((err) => console.error('Failed to fetch posts:', err))
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for subscribing! Newsletter coming soon.')
  }

  return (
    <Section className="bg-white dark:bg-surface-800" id="news">
      <Container>
        <SectionHeader
          title="Latest News & Insights"
          subtitle="Stay Updated"
          description="Discover the latest developments in AI research, bioinformatics breakthroughs, and opinions from our team on emerging trends."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                {newsImages[index % newsImages.length] && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={newsImages[index % newsImages.length]}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime} min read</span>
                    <span className="text-sm text-primary-600 dark:text-primary-500 font-medium">
                      Read more →
                    </span>
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog">
            <Button size="lg">View All News</Button>
          </Link>
        </div>

        <div className="mt-16 max-w-xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-900/30">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Stay Informed</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest research updates, publications, and AI insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  )
}
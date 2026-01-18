'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card, CardBody, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function News() {
  const featuredNews = [
    {
      slug: 'nsf-grant-2025',
      title: 'HaoAI Receives 2025 NSF Grant for AI-Powered Disease Diagnosis',
      category: 'Grant',
      date: '2025-01-15',
      excerpt: 'Our research team has been awarded a prestigious NSF grant to develop agentic AI systems for early disease detection and personalized treatment recommendations.',
      readTime: 5
    },
    {
      slug: 'nature-medicine-paper-2024',
      title: 'New Research Paper Published in Nature Medicine',
      category: 'Publication',
      date: '2024-12-10',
      excerpt: 'Our latest work on transformer models for clinical note understanding has been published in Nature Medicine, demonstrating state-of-the-art performance on multiple medical NLP benchmarks.',
      readTime: 3
    },
    {
      slug: 'biomed-lm-20-release',
      title: 'Open Source Release: BioMed-LM-2.0',
      category: 'Open Source',
      date: '2024-09-01',
      excerpt: 'We have released BioMed-LM-2.0, an improved language model specifically trained on biomedical literature. The model is available on Hugging Face for research use.',
      readTime: 6
    }
  ]

  return (
    <Section className="bg-white dark:bg-surface-800" id="news">
      <Container>
        <SectionHeader 
          title="Latest News & Insights"
          subtitle="Stay Updated"
          description="Discover the latest developments in AI research, bioinformatics breakthroughs, and opinions from our team on emerging trends."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredNews.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
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
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
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
            <Button size="lg">
              View All News
            </Button>
          </Link>
        </div>

        <div className="mt-16 max-w-xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-900/30">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Stay Informed</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest research updates, publications, and AI insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
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
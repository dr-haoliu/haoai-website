'use client'

import { useState } from 'react'
import Fuse from 'fuse.js'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  author: string
  readTime: number
  featured: boolean
}

interface SearchResponse {
  posts: Post[]
}

export function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Post[]>([])
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const [fuse, setFuse] = useState<Fuse<Post> | null>(null)

  const initFuse = (posts: Post[]) => {
    return new Fuse(posts, {
      keys: [
        { name: 'title', weight: 2 },
        { name: 'excerpt', weight: 1.5 },
      ],
      threshold: 0.3,
    })
  }

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery)

    if (searchQuery.trim().length < 2) {
      setResults([])
      return
    }

    if (allPosts.length === 0) {
      try {
        const res = await fetch('/api/posts')
        if (res.ok) {
          const data: SearchResponse = await res.json()
          setAllPosts(data.posts)
          const fuseInstance = initFuse(data.posts)
          setFuse(fuseInstance)

          const searchResults = fuseInstance.search(searchQuery)
          setResults(searchResults.map((result) => result.item))
        }
      } catch (error) {
        console.error('Failed to fetch posts:', error)
      }
    } else if (fuse) {
      const searchResults = fuse.search(searchQuery)
      setResults(searchResults.map((result) => result.item))
    }
  }

  return (
    <div className="relative w-full max-w-md">
      <input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {results.length > 0 && query.trim().length >= 2 && (
        <div className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
          <ul className="max-h-64 overflow-y-auto">
            {results.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => {
                    setQuery('')
                    setResults([])
                  }}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {post.excerpt}
                  </p>
                  <span className="text-xs text-gray-500 dark:text-gray-500 mt-2 block">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
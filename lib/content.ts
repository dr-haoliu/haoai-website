import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface BlogPost {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  author: string
  readTime: number
  featured: boolean
  content?: string
}

export function getBlogPostSlugs() {
  const blogDirectory = path.join(contentDirectory, 'blog')
  
  if (!fs.existsSync(blogDirectory)) {
    return []
  }
  
  const fileNames = fs.readdirSync(blogDirectory)
  return fileNames
    .filter(name => name.endsWith('.mdx') || name.endsWith('.md'))
    .map(name => name.replace(/\.(mdx|md)$/, ''))
}

export function getBlogPostBySlug(slug: string): BlogPost {
  try {
    const realSlug = slug.replace(/\.mdx$/, '').replace(/\.md$/, '')
    const fullPath = path.join(contentDirectory, 'blog', `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug: realSlug,
      title: data.title || '',
      date: data.date || '',
      category: data.category || '',
      excerpt: data.excerpt || '',
      author: data.author || '',
      readTime: data.readTime || 5,
      featured: data.featured || false,
      content: content || ''
    } as BlogPost
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null as any
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogPostSlugs()
  const posts = slugs
    .map(slug => getBlogPostBySlug(slug))
    .filter(post => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1))
  
  return posts
}

export function getFeaturedBlogPosts(): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => post.featured)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getRecentBlogPosts(count: number = 5): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.slice(0, count)
}

export function getRelatedBlogPosts(currentSlug: string, category: string, count: number = 3): BlogPost[] {
  const categoryPosts = getBlogPostsByCategory(category)
  return categoryPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, count)
}
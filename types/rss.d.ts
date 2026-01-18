declare module 'rss' {
  export default class RSS {
    constructor(options: RSS.RSSOptions)
    item(options: RSS.ItemOptions): void
    xml(): string
  }

  namespace RSS {
    interface RSSOptions {
      title: string
      description: string
      feed_url: string
      site_url: string
      language?: string
      pubDate?: Date
      ttl?: number
    }

    interface ItemOptions {
      title: string
      description: string
      url: string
      date: Date
      categories?: string[]
      author?: string
    }
  }
}
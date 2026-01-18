import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card, CardBody, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function News() {
  const news = [
    {
      title: 'Agentic AI in Drug Discovery: New Perspectives',
      category: 'Research',
      date: '2025-01-15',
      excerpt: 'Exploring how autonomous AI agents are revolutionizing the drug discovery process through novel approaches to target identification and compound screening.',
    },
    {
      title: 'HaoAI团队在AAAI论文被接收',
      category: 'Announcement',
      date: '2025-01-10',
      excerpt: 'We are excited to announce that our paper on multi-modal integration for drug interaction prediction has been accepted at AAAI 2025.',
    },
    {
      title: 'The Future of Clinical Trial Matching with AI',
      category: 'Opinion',
      date: '2025-01-05',
      excerpt: 'Why agentic AI systems will transform how clinical trials recruit patients and conduct real-time monitoring of study progress.',
    },
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
          {news.map((item) => (
            <Card key={item.title} className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                  {item.title}
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Read More
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg">
            View All News
          </Button>
        </div>
      </Container>
    </Section>
  )
}
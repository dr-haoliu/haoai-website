import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card, CardBody } from '@/components/ui/card'

export function About() {
  const values = [
    {
      title: 'Innovation',
      description: 'Pushing the boundaries of AI research to solve complex biomedical challenges',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Collaboration',
      description: 'Working with researchers worldwide to accelerate scientific discovery',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Ethics',
      description: 'Committed to responsible AI development with strong ethical principles',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ]

  return (
    <Section className="bg-white dark:bg-surface-800" id="about">
      <Container>
        <SectionHeader 
          title="Our Mission"
          subtitle="Who We Are"
          description="HaoAI is dedicated to developing agentic AI systems that transform biomedical research and healthcare for the greater good of humanity."
        />
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            Our organization focuses on cutting-edge research at the intersection of artificial intelligence and bioinformatics. We believe that agentic AI systems—AI agents that can autonomously reason, act, and collaborate—hold tremendous potential for accelerating scientific discovery, improving patient outcomes, and addressing some of the most pressing challenges in healthcare and life sciences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
              <CardBody className="h-full flex flex-col">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 flex-grow">
                  {value.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
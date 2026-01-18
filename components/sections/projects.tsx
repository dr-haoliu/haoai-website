import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card, CardBody, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { projects } from '@/lib/data/projects'

export function Projects() {
const projectImages = [
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80',
  ]

  const statusColors = {
    Ongoing: 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-400',
    Completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Active: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  }

  return (
    <Section className="bg-surface-50 dark:bg-surface-900" id="projects">
      <Container>
        <SectionHeader 
          title="Our Projects"
          subtitle="Current Initiatives"
          description="Explore our ongoing research projects that push the boundaries of AI applications in bioinformatics and healthcare."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="hover:shadow-lg transition-all hover:-translate-y-1 h-full">
                {projectImages[index] && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={projectImages[index]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[project.status as keyof typeof statusColors]}`}>
                      {project.status}
                    </span>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-surface-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="https://dr-haoliu.github.io/projects/" target="_blank" rel="noopener noreferrer">
            <Button size="lg">View All Projects</Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
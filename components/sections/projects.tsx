import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card, CardBody, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Projects() {
  const projects = [
    {
      title: 'Drug-Drug Interaction Prediction',
      description: 'Multi-modal feature integration with graph neural networks to predict adverse drug interactions and improve patient safety.',
      status: 'Active',
      tags: ['GNN', 'Drug Discovery', 'Healthcare'],
    },
    {
      title: 'Clinical Trial Agent',
      description: 'Agentic AI system for automated patient screening, matching, and monitoring in clinical trials.',
      status: 'Active',
      tags: ['LLM', 'Clinical Trials', 'Agentic AI'],
    },
    {
      title: 'Ontology Engineering Automation',
      description: 'Machine learning algorithms for automated ontology enrichment, quality assurance, and classification.',
      status: 'Active',
      tags: ['NLP', 'Ontology', 'Bioinformatics'],
    },
    {
      title: 'EHR Phenotyping',
      description: 'AI-powered electronic health record annotation with cluster-focused algorithms and interface terminologies.',
      status: 'Active',
      tags: ['EHR', 'Phenotyping', 'ML'],
    },
    {
      title: 'Claim Verification System',
      description: 'Retrieval-augmented generation for scientific claim verification against clinical trial literature.',
      status: 'Active',
      tags: ['RAG', 'NLP', 'Verification'],
    },
    {
      title: 'Biomarker Extraction',
      description: 'Large language model-based extraction of fluid biomarkers for Alzheimer&apos;s disease knowledge base construction.',
      status: 'Active',
      tags: ['LLM', 'Neuroscience', 'Knowledge Graph'],
    },
  ]

  const statusColors = {
    Active: 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900/30 dark:text-secondary-400',
    Completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
    Planned: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-400',
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
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusColors[project.status as keyof typeof statusColors]}`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
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
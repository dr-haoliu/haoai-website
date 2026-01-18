import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card, CardBody, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Publications() {
  const publications = [
    {
      title: 'Retrieval Augmented Scientific Claim Verification',
      authors: 'Hao Liu, Soroush Ali, Jordan G. Nestor, Elizabeth Park, Betina Idnay, Yilu Fang, et al.',
      venue: 'JAMIA Open',
      year: '2024',
      abstract: 'Evaluating the veracity of PICO-based claims against clinical trial literature on PubMed using CoVERt dataset and CliVER system.',
      doi: '10.1093/jamiaopen/ooae021',
    },
    {
      title: 'Can Race-sensitive Biomedical Embeddings Improve Healthcare Predictive Models?',
      authors: 'Hao Liu, Nour Moustafa-Fahmy, Casey Ta, Chunhua Weng',
      venue: 'AMIA Informatics Summit',
      year: '2023',
      abstract: 'Algorithm weighing race distribution data in biomedical embeddings for improved healthcare prediction models.',
      doi: null,
    },
    {
      title: 'Ontology-based Categorization of Clinical Studies by Their Conditions',
      authors: 'Hao Liu, Simona Carini, Zhehuan Chen, Spencer Phillips Hey, Ida Sim, Chunhua Weng',
      venue: 'Journal of Biomedical Informatics',
      year: '2022',
      abstract: 'Method for automated ontology-based categorization of clinical studies using SNOMED CT concepts.',
      doi: '10.1016/j.jbi.2022.104173',
    },
    {
      title: 'A Knowledge Base of Clinical Trial Eligibility Criteria',
      authors: 'Hao Liu, Chi Yuan, Alex Butler, Yingcheng Sun, Chunhua Weng',
      venue: 'Journal of Biomedical Informatics',
      year: '2021',
      abstract: 'Comprehensive knowledge base of discrete clinical trial eligibility criteria with web-based user interface.',
      doi: '10.1016/j.jbi.2021.103872',
    },
    {
      title: 'Concept Placement using BERT Trained by Transforming and Summarizing Biomedical Ontology Structure',
      authors: 'Hao Liu, Yehoshua Perl, James Geller',
      venue: 'Journal of Biomedical Informatics',
      year: '2020',
      abstract: 'Method to automatically predict IS-A relationships between concepts in ontologies using BERT language representation model.',
      doi: '10.1016/j.jbi.2020.103795',
    },
  ]

  return (
    <Section className="bg-white dark:bg-surface-800" id="publications">
      <Container>
        <SectionHeader 
          title="Selected Publications"
          subtitle="Our Research"
          description="Explore our peer-reviewed research publications in top venues focusing on AI applications in bioinformatics and healthcare."
        />
        
        <div className="space-y-6">
          {publications.map((pub) => (
            <Card key={pub.title} className="hover:shadow-lg transition-shadow">
              <CardBody>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 italic">
                  {pub.authors}
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {pub.venue}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {pub.year}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {pub.abstract}
                </p>
                {pub.doi && (
                  <Button variant="outline" size="sm">
                    DOI: {pub.doi}
                  </Button>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="https://dr-haoliu.github.io/publications/" target="_blank" rel="noopener noreferrer">
            <Button size="lg">View All Publications</Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}
import { Container } from '@/components/ui/container'
import { Section, SectionHeader } from '@/components/ui/section'
import { Card, CardBody } from '@/components/ui/card'
import { featuredTeam } from '@/lib/data/team'

export function Team() {
  const team = featuredTeam

  return (
    <Section className="bg-surface-50 dark:bg-surface-900" id="team">
      <Container>
        <SectionHeader 
          title="Our Team"
          subtitle="People Behind HaoAI"
          description="Meet our dedicated team of researchers and contributors working to advance agentic AI for the greater good."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow text-center">
              <CardBody className="p-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {member.bio}
                </p>
                {member.googleScholar && (
                  <div className="flex justify-center">
                    <a
                      href={member.googleScholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 font-medium text-sm"
                    >
                      Google Scholar
                    </a>
                  </div>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}
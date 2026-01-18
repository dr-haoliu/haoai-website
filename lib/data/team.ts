export const teamMembers = [
  {
    id: 1,
    name: 'Dr. Hao Liu',
    role: 'Founder & Principal Investigator',
    image: 'https://dr-haoliu.github.io/assets/img/prof_pic.jpg',
    bio: 'Assistant Professor in the Department of Computer Science at Montclair State University and Founder of HaoAI. Research focuses on developing agentic AI systems for healthcare applications with emphasis on clinical decision support, biomedical ontology engineering, and natural language processing for clinical text.',
    email: 'hliu@montclair.edu',
    googleScholar: 'https://scholar.google.com/citations?user=hliu',
    researchInterests: ['Agentic AI', 'Clinical NLP', 'Biomedical Ontologies', 'Healthcare Informatics'],
    featured: true,
    category: 'faculty'
  }
]

export const featuredTeam = teamMembers.filter(member => member.featured)

export const getFaculty = () => {
  return teamMembers.filter(member => member.category === 'faculty')
}

export const getCurrentStudents = () => {
  return teamMembers.filter(member => member.category === 'current')
}

export const getAlumni = () => {
  return teamMembers.filter(member => member.category === 'alumni')
}

export const getMemberById = (id: number) => {
  return teamMembers.find(member => member.id === id)
}
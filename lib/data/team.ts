export const teamMembers = [
  {
    id: 1,
    name: 'Dr. Hao Liu',
    role: 'Founder & Principal Investigator',
    image: '/images/team/hao-liu.jpg',
    bio: 'Dr. Hao Liu is an Assistant Professor in the Department of Computer Science at Montclair State University. His research focuses on developing agentic AI systems for healthcare applications, with particular emphasis on clinical decision support, biomedical ontology engineering, and natural language processing for clinical text.',
    email: 'hliu@montclair.edu',
    linkedin: 'https://linkedin.com/in/dr-haoliu',
    twitter: 'https://twitter.com/dr_haoliu',
    googleScholar: 'https://scholar.google.com/citations?user=hliu',
    researchInterests: ['Agentic AI', 'Clinical NLP', 'Biomedical Ontologies', 'Healthcare Informatics'],
    publications: 45,
    education: [
      { degree: 'Ph.D. in Computer Science', institution: 'Stanford University', year: 2018 },
      { degree: 'M.S. in Computer Science', institution: 'MIT', year: 2014 },
      { degree: 'B.S. in Computer Science', institution: 'Tsinghua University', year: 2012 }
    ],
    featured: true
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Postdoctoral Researcher',
    image: '/images/team/jane-smith.jpg',
    bio: 'Jane Smith is a postdoctoral researcher specializing in natural language processing for clinical applications. Her current work focuses on grounding medical concepts to biomedical ontologies and developing transformer-based models for clinical decision support.',
    email: 'jane.smith@montclair.edu',
    linkedin: 'https://linkedin.com/in/janesmith',
    twitter: null,
    googleScholar: 'https://scholar.google.com/citations?user=jsmith',
    researchInterests: ['NLP', 'Transformers', 'Entity Linking', 'Clinical NLP'],
    publications: 12,
    education: [
      { degree: 'Ph.D. in Computer Science', institution: 'Columbia University', year: 2023 },
      { degree: 'M.S. in Data Science', institution: 'Carnegie Mellon', year: 2019 }
    ],
    featured: true
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Ph.D. Student',
    image: '/images/team/michael-chen.jpg',
    bio: 'Michael Chen is a second-year Ph.D. student working on multi-agent systems for clinical decision support. His research focuses on developing autonomous agents that can collaborate to solve complex healthcare problems.',
    email: 'm.chen@montclair.edu',
    linkedin: 'https://linkedin.com/in/michaelchen',
    twitter: 'https://twitter.com/michaelchen',
    googleScholar: null,
    researchInterests: ['Multi-agent Systems', 'Agentic AI', 'Clinical Decision Support'],
    publications: 5,
    education: [
      { degree: 'B.S. in Computer Science', institution: 'UC Berkeley', year: 2022 }
    ],
    featured: true
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Ph.D. Student',
    image: '/images/team/sarah-johnson.jpg',
    bio: 'Sarah Johnson is a Ph.D. student specializing in biomedical knowledge graphs and ontology integration. Her work aims to create comprehensive knowledge representations that can support AI-driven biomedical research.',
    email: 's.johnson@montclair.edu',
    linkedin: 'https://linkedin.com/in/sarahjohnson',
    twitter: null,
    googleScholar: null,
    researchInterests: ['Knowledge Graphs', 'Ontology Integration', 'Graph Neural Networks'],
    publications: 3,
    education: [
      { degree: 'M.S. in Bioinformatics', institution: 'University of Washington', year: 2023 },
      { degree: 'B.S. in Biology', institution: 'University of Michigan', year: 2021 }
    ],
    featured: false
  },
  {
    id: 5,
    name: 'David Park',
    role: 'Research Software Engineer',
    image: '/images/team/david-park.jpg',
    bio: 'David Park brings extensive experience in software engineering and machine learning infrastructure to the team. He develops and maintains the core systems and platforms used across multiple HaoAI projects.',
    email: 'd.park@montclair.edu',
    linkedin: 'https://linkedin.com/in/davidpark',
    twitter: 'https://twitter.com/davidpark',
    googleScholar: null,
    researchInterests: ['Software Engineering', 'MLOps', 'Cloud Infrastructure', 'Machine Learning'],
    publications: 2,
    education: [
      { degree: 'M.S. in Computer Science', institution: 'Georgia Tech', year: 2019 },
      { degree: 'B.S. in Computer Engineering', institution: 'University of Illinois', year: 2017 }
    ],
    featured: false
  },
  {
    id: 6,
    name: 'Emma Wilson',
    role: 'M.S. Student',
    image: '/images/team/emma-wilson.jpg',
    bio: 'Emma Wilson is a master\'s student focusing on evaluating large language models for clinical tasks. Her work includes developing comprehensive benchmarks and evaluation protocols for clinical AI systems.',
    email: 'e.wilson@montclair.edu',
    linkedin: 'https://linkedin.com/in/emmawilson',
    twitter: null,
    googleScholar: null,
    researchInterests: ['Large Language Models', 'Evaluation', 'Clinical Benchmarks'],
    publications: 1,
    education: [
      { degree: 'B.S. in Computer Science', institution: 'Princeton University', year: 2023 }
    ],
    featured: false
  },
  {
    id: 7,
    name: 'Robert Kim',
    role: 'Undergraduate Researcher',
    image: '/images/team/robert-kim.jpg',
    bio: 'Robert Kim is an undergraduate student contributing to the clinical decision support project. He is developing web-based interfaces for visualizing AI-generated recommendations and explanations.',
    email: 'r.kim@montclair.edu',
    linkedin: 'https://linkedin.com/in/robertkim',
    twitter: null,
    googleScholar: null,
    researchInterests: ['Web Development', 'UI/UX', 'Visualization', 'Clinical Decision Support'],
    publications: 0,
    education: [
      { degree: 'B.S. in Computer Science (In Progress)', institution: 'Montclair State', year: 2025 }
    ],
    featured: false
  },
  {
    id: 8,
    name: 'Laura Martinez',
    role: 'Undergraduate Researcher',
    image: '/images/team/laura-martinez.jpg',
    bio: 'Laura Martinez is an undergraduate student working on drug repurposing research. She helps curate biomedical datasets and develops algorithms for identifying novel therapeutic candidates.',
    email: 'l.martinez@montclair.edu',
    linkedin: 'https://linkedin.com/in/lauramartinez',
    twitter: null,
    googleScholar: null,
    researchInterests: ['Bioinformatics', 'Drug Discovery', 'Data Mining'],
    publications: 0,
    education: [
      { degree: 'B.S. in Biochemistry (In Progress)', institution: 'Montclair State', year: 2025 }
    ],
    featured: false
  }
]

export const featuredTeam = teamMembers.filter(member => member.featured)

export const getFaculty = () => {
  return teamMembers.filter(member => member.role.includes('Principal Investigator') || member.role.includes('Professor'))
}

export const getPostdocs = () => {
  return teamMembers.filter(member => member.role.includes('Postdoctoral'))
}

export const getPhDStudents = () => {
  return teamMembers.filter(member => member.role.includes('Ph.D.'))
}

export const getMSStudents = () => {
  return teamMembers.filter(member => member.role.includes('M.S.'))
}

export const getUndergraduates = () => {
  return teamMembers.filter(member => member.role.includes('Undergraduate'))
}

export const getStaff = () => {
  return teamMembers.filter(member => member.role.includes('Engineer') || member.role.includes('Manager'))
}

export const getMemberById = (id: number) => {
  return teamMembers.find(member => member.id === id)
}
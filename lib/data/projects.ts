export const projects = [
  {
    id: 1,
    title: 'MedBERT-Grounding',
    description: 'A transformer model that grounds medical concepts to biomedical ontologies, enabling better understanding of clinical text.',
    status: 'Active',
    startDate: '2024-06',
    collaborators: ['Montclair State University', 'Stanford University'],
    repository: 'https://github.com/dr-haoliu/MedBERT-Grounding',
    image: '/images/projects/medbert.jpg',
    tags: ['NLP', 'Ontology', 'Transformers'],
    featured: true,
    link: 'https://github.com/dr-haoliu/MedBERT-Grounding'
  },
  {
    id: 2,
    title: 'Clinical Agent Framework',
    description: 'An agentic AI framework for clinical decision support that can autonomously gather and synthesize information from multiple sources.',
    status: 'Active',
    startDate: '2024-01',
    collaborators: ['Montclair State University'],
    repository: 'https://github.com/dr-haoliu/clinical-agent',
    image: '/images/projects/clinical-agent.jpg',
    tags: ['Agentic AI', 'Clinical Decision Support', 'Multi-agent Systems'],
    featured: true,
    link: 'https://github.com/dr-haoliu/clinical-agent'
  },
  {
    id: 3,
    title: 'BioMed-LM',
    description: 'A language model pre-trained on biomedical literature for downstream tasks in medical NLP.',
    status: 'Released',
    startDate: '2023-09',
    collaborators: ['Montclair State University'],
    repository: 'https://github.com/dr-haoliu/BioMed-LM',
    image: '/images/projects/biomed-lm.jpg',
    tags: ['Language Models', 'Pre-training', 'Biomedical NLP'],
    featured: false,
    link: 'https://github.com/dr-haoliu/BioMed-LM'
  },
  {
    id: 4,
    title: 'SNOMED-CT Alignment',
    description: 'Tools for mapping free-text clinical notes to SNOMED-CT concepts using neural machine translation.',
    status: 'Active',
    startDate: '2024-03',
    collaborators: ['Montclair State University', 'Columbia University'],
    repository: 'https://github.com/dr-haoliu/snomed-alignment',
    image: '/images/projects/snomed.jpg',
    tags: ['Entity Linking', 'SNOMED-CT', 'Medical Coding'],
    featured: false,
    link: 'https://github.com/dr-haoliu/snomed-alignment'
  },
  {
    id: 5,
    title: 'Disease Progression Predictor',
    description: 'A machine learning system for predicting disease progression patterns using electronic health record data.',
    status: 'Active',
    startDate: '2024-08',
    collaborators: ['Montclair State University Hospital'],
    repository: null,
    image: '/images/projects/disease-progression.jpg',
    tags: ['Predictive Analytics', 'EHR', 'Machine Learning'],
    featured: true,
    link: null
  },
  {
    id: 6,
    title: 'Biomedical Knowledge Graph',
    description: 'A comprehensive knowledge graph integrating multiple biomedical ontologies and literature for AI-driven discovery.',
    status: 'Development',
    startDate: '2024-10',
    collaborators: ['Montclair State University'],
    repository: null,
    image: '/images/projects/knowledge-graph.jpg',
    tags: ['Knowledge Graph', 'Ontology Integration', 'Graph Neural Networks'],
    featured: false,
    link: null
  }
]

export const featuredProjects = projects.filter(item => item.featured)

export const getActiveProjects = () => {
  return projects.filter(item => item.status === 'Active')
}

export const getProjectById = (id: number) => {
  return projects.find(item => item.id === id)
}
export const teamMembers = [
  {
    id: 1,
    name: 'Dr. Hao Liu',
    role: 'Principal Investigator',
    image: 'https://dr-haoliu.github.io/assets/img/prof_pic.jpg',
    bio: 'Assistant Professor in the Department of Computer Science at Montclair State University. Research focuses on developing agentic AI systems for healthcare applications with emphasis on clinical decision support, biomedical ontology engineering, and natural language processing for clinical text.',
    email: 'hliu@montclair.edu',
    googleScholar: 'https://scholar.google.com/citations?user=hliu',
    researchInterests: ['Agentic AI', 'Clinical NLP', 'Biomedical Ontologies', 'Healthcare Informatics'],
    featured: true,
    category: 'faculty'
  },
  {
    id: 2,
    name: 'Sangeun Lee',
    role: 'Graduate Student, MS in Data Science',
    image: null,
    bio: 'Graduate student in Data Science at Montclair State University with a background in Psychology. Research focuses on the application of machine learning and deep learning techniques to medical imaging, particularly in the analysis of brain MRI for Alzheimer\'s disease classification. Works on developing neural network models for image-based diagnostics, with emphasis on multimodal integration and sequence modeling.',
    email: null,
    googleScholar: null,
    researchInterests: ['Machine Learning', 'Deep Learning', 'Medical Imaging', 'Alzheimer\'s Disease'],
    featured: true,
    category: 'current'
  },
  {
    id: 3,
    name: 'Ahnasia Goulbourne',
    role: 'Undergraduate, BS in Data Science',
    image: null,
    bio: 'Undergraduate student pursuing a major in Data Science with a minor in Mathematics. Current research focuses on the implementation of artificial intelligence and retrieval-augmented generation (RAG) agents to interface with large language models (LLMs) for the evaluation of heart disease risk factors, treatments, and follow-up plans.',
    email: null,
    googleScholar: null,
    researchInterests: ['Artificial Intelligence', 'RAG Agents', 'LLMs', 'Heart Disease Risk Assessment'],
    featured: true,
    category: 'current'
  },
  {
    id: 4,
    name: 'Pritom Bhowmik',
    role: 'Alumni, MS Data Science 2025',
    image: null,
    bio: 'AI & Data Science Researcher with 3+ years of experience applying advanced analytics and machine learning to logistics and product intelligence. Focuses on harnessing AI to optimize supply chain workflows and guide strategic product decisions through behavioral data. Research includes Agentic RAG systems, Graph RAG architecture, and AI-driven experimentation.',
    email: null,
    googleScholar: null,
    researchInterests: ['Agentic RAG', 'Graph RAG', 'AI Driven Experimentation', 'Supply Chain Analytics'],
    featured: false,
    category: 'alumni'
  },
  {
    id: 5,
    name: 'Andres Campoverde',
    role: 'Alumni, MS Computer Science 2025',
    image: null,
    bio: 'Master\'s graduate in Computer Science from Montclair State University with 4+ years of software engineering experience. Expertise in distributed computing, cloud computing, and machine learning, developing high-quality backend code using Go, Python, TypeScript, Scala, and Java.',
    email: null,
    googleScholar: null,
    researchInterests: ['Distributed Computing', 'Cloud Computing', 'Machine Learning', 'Software Engineering'],
    featured: false,
    category: 'alumni'
  },
  {
    id: 6,
    name: 'Shibbir Ahmed Arif',
    role: 'Alumni, MS Data Science 2025',
    image: null,
    bio: 'Graduate of the Master of Data Science program and former graduate teaching assistant at the School of Computing. Involved in cutting-edge research in natural language processing (NLP) with 2+ years of experience in data science and machine learning using Python.',
    email: null,
    googleScholar: null,
    researchInterests: ['Natural Language Processing', 'Artificial Intelligence', 'Health Informatics', 'Data Science'],
    featured: false,
    category: 'alumni'
  },
  {
    id: 7,
    name: 'Ernest Chianumba',
    role: 'Alumni, MS Data Science 2025',
    image: null,
    bio: 'Master\'s graduate in Data Science with over 8 years of experience in data analysis and operation management, specializing in healthcare analytics and e-commerce. Proficient in Python, SQL, and PowerBI. Contributed to research in healthcare predictive analytics, including a project funded by Bristol Myers Squibb utilizing NLP models to improve clinical predictions for underrepresented populations.',
    email: null,
    googleScholar: null,
    researchInterests: ['Healthcare Analytics', 'NLP', 'Predictive Analytics', 'Data Analysis'],
    featured: false,
    category: 'alumni'
  },
  {
    id: 8,
    name: 'Anand Gopeekrishnan',
    role: 'Alumni, MS Data Science 2024',
    image: null,
    bio: 'Machine Learning Engineer with a robust background in Python, Machine Learning, Deep Learning, and Computer Vision. Holds a master\'s degree with over 6 years of working experience. Expertise includes working on LLMs such as BERT, RoBERTa, and XLM-Roberta, integrating OpenAI models, generating prompts, and utilizing Autogen agents.',
    email: null,
    googleScholar: null,
    researchInterests: ['Large Language Models', 'BERT', 'Computer Vision', 'Deep Learning'],
    featured: false,
    category: 'alumni'
  },
  {
    id: 9,
    name: 'Rachel Rubio',
    role: 'Alumni, BS Data Science',
    image: null,
    bio: 'Former undergraduate student in the Bachelor of Data Science program at Montclair State University. Interested in medical image processing and machine learning research.',
    email: null,
    googleScholar: null,
    researchInterests: ['Medical Image Processing', 'Machine Learning', 'Data Science'],
    featured: false,
    category: 'alumni'
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
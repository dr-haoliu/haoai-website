export const newsItems = [
  {
    id: 1,
    title: 'HaoAI Receives 2025 NSF Grant for AI-Powered Disease Diagnosis',
    date: '2025-01-15',
    category: 'Grant',
    excerpt: 'Our research team has been awarded a prestigious NSF grant to develop agentic AI systems for early disease detection and personalized treatment recommendations.',
    image: '/images/news/nsf-grant.jpg',
    featured: true,
    author: 'Dr. Hao Liu',
    readTime: '5 min',
    slug: 'nsf-grant-2025'
  },
  {
    id: 2,
    title: 'New Research Paper Published in Nature Medicine',
    date: '2024-12-10',
    category: 'Publication',
    excerpt: 'Our latest work on transformer models for clinical note understanding has been published in Nature Medicine, demonstrating state-of-the-art performance on multiple medical NLP benchmarks.',
    image: '/images/news/nature-medicine.jpg',
    featured: true,
    author: 'Dr. Hao Liu',
    readTime: '3 min',
    slug: 'nature-medicine-paper-2024'
  },
  {
    id: 3,
    title: 'HaoAI Team Presents at AMIA 2024 Symposium',
    date: '2024-11-20',
    category: 'Conference',
    excerpt: 'Our team presented three papers at the American Medical Informatics Association Annual Symposium, covering topics in biomedical ontology engineering and clinical decision support.',
    image: '/images/news/amia-2024.jpg',
    featured: false,
    author: 'HaoAI Team',
    readTime: '4 min',
    slug: 'amia-2024-symposium'
  },
  {
    id: 4,
    title: 'New Collaboration with Montclair State University Hospital',
    date: '2024-10-15',
    category: 'Collaboration',
    excerpt: 'We are excited to announce a new partnership with Montclair State University Hospital to pilot our AI-powered clinical decision support system in real-world clinical settings.',
    image: '/images/news/hospital-collab.jpg',
    featured: false,
    author: 'Dr. Hao Liu',
    readTime: '3 min',
    slug: 'msu-hospital-collab'
  },
  {
    id: 5,
    title: 'Open Source Release: BioMed-LM-2.0',
    date: '2024-09-01',
    category: 'Open Source',
    excerpt: 'We have released BioMed-LM-2.0, an improved language model specifically trained on biomedical literature. The model is available on Hugging Face for research use.',
    image: '/images/news/biomed-lm.jpg',
    featured: false,
    author: 'Research Team',
    readTime: '6 min',
    slug: 'biomed-lm-20-release'
  },
  {
    id: 6,
    title: 'Dr. Hao Liu Featured in AI Health Podcast',
    date: '2024-08-20',
    category: 'Media',
    excerpt: 'Dr. Liu discusses the future of agentic AI in healthcare on the AI Health Podcast, covering challenges and opportunities in clinical AI deployment.',
    image: '/images/news/podcast.jpg',
    featured: false,
    author: 'AI Health Podcast',
    readTime: '2 min',
    slug: 'liu-podcast-2024'
  }
]

export const featuredNews = newsItems.filter(item => item.featured)

export const getNewsByCategory = (category: string) => {
  return newsItems.filter(item => item.category.toLowerCase() === category.toLowerCase())
}

export const getNewsBySlug = (slug: string) => {
  return newsItems.find(item => item.slug === slug)
}
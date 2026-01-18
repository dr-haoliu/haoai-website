export const publications = [
  {
    id: 1,
    title: 'Agentic AI for Clinical Decision Support: A Multi-Agent Framework',
    authors: ['Hao Liu', 'Jane Smith', 'Michael Chen'],
    journal: 'Nature Medicine',
    year: 2024,
    volume: '30',
    pages: '1234-1245',
    doi: '10.1038/s41591-024-xxxxx-x',
    type: 'Journal Article',
    pdf: '/publications/clinical-agents.pdf',
    abstract: 'We present a novel multi-agent framework for clinical decision support that leverages autonomous AI agents to gather and synthesize information from diverse sources. Our system demonstrates improved diagnostic accuracy and treatment recommendations compared to baseline models.',
    citations: 42,
    topics: ['Agentic AI', 'Clinical Decision Support', 'Multi-agent Systems'],
    featured: true
  },
  {
    id: 2,
    title: 'MedBERT-Grounding: Grounding Medical Concepts to Biomedical Ontologies',
    authors: ['Hao Liu', 'Sarah Johnson', 'David Park'],
    journal: 'Journal of the American Medical Informatics Association (JAMIA)',
    year: 2024,
    volume: '31',
    issue: '4',
    pages: '789-802',
    doi: '10.1093/jamia/ocae045',
    type: 'Journal Article',
    pdf: '/publications/medbert-grounding.pdf',
    abstract: 'We introduce MedBERT-Grounding, a transformer-based model that grounds free-text medical concepts to formal biomedical ontologies. Our approach achieves state-of-the-art performance on SNOMED-CT concept normalization tasks.',
    citations: 28,
    topics: ['NLP', 'Ontology', 'Transformers', 'Entity Linking'],
    featured: true
  },
  {
    id: 3,
    title: 'Transforming Clinical NLP with Large Language Models: A Comprehensive Survey',
    authors: ['Hao Liu', 'Emma Wilson', 'Robert Kim'],
    journal: 'IEEE Transactions on Biomedical Engineering',
    year: 2024,
    volume: '71',
    issue: '6',
    pages: '1500-1515',
    doi: '10.1109/TBME.2024.3045678',
    type: 'Review',
    pdf: '/publications/clinical-llm-survey.pdf',
    abstract: 'This comprehensive survey examines the application of large language models to clinical natural language processing tasks, covering architectures, evaluation protocols, and open challenges in the field.',
    citations: 89,
    topics: ['Large Language Models', 'Survey', 'Clinical NLP'],
    featured: false
  },
  {
    id: 4,
    title: 'Knowledge Graph-Based Drug Repurposing for Rare Diseases',
    authors: ['Hao Liu', 'Laura Martinez', 'James Thompson'],
    journal: 'Bioinformatics',
    year: 2023,
    volume: '39',
    issue: '11',
    pages: '4567-4578',
    doi: '10.1093/bioinformatics/btad567',
    type: 'Journal Article',
    pdf: '/publications/drug-repurposing.pdf',
    abstract: 'We present a knowledge graph-based approach for drug repurposing that integrates heterogeneous biomedical data sources to identify novel therapeutic candidates for rare diseases.',
    citations: 67,
    topics: ['Knowledge Graph', 'Drug Repurposing', 'Rare Diseases'],
    featured: true
  },
  {
    id: 5,
    title: 'Multi-Modal Clinical Decision Support: Integrating Imaging and Text',
    authors: ['Hao Liu', 'Anna Lee', 'Christopher Wong'],
    journal: 'Medical Image Analysis',
    year: 2023,
    volume: '82',
    pages: '102458',
    doi: '10.1016/j.media.2023.102458',
    type: 'Journal Article',
    pdf: '/publications/multimodal-cds.pdf',
    abstract: 'We develop a multi-modal deep learning framework that combines medical imaging and clinical text for improved diagnostic accuracy and treatment planning.',
    citations: 54,
    topics: ['Multi-modal Learning', 'Medical Imaging', 'Clinical Text'],
    featured: false
  },
  {
    id: 6,
    title: 'Evaluating Large Language Models for Clinical Task Performance',
    authors: ['Hao Liu', 'Jennifer Adams', 'Kevin Brown'],
    conference: 'AMIA Annual Symposium',
    year: 2023,
    location: 'New Orleans, LA',
    type: 'Conference Paper',
    pdf: '/publications/llm-clinical-eval.pdf',
    abstract: 'This paper presents a comprehensive evaluation of large language models on clinical NLP benchmarks, including named entity recognition, relation extraction, and clinical concept normalization tasks.',
    citations: 31,
    topics: ['Large Language Models', 'Evaluation', 'Clinical Benchmarks'],
    featured: false
  },
  {
    id: 7,
    title: 'Automating Biomedical Ontology Alignment with Neural Networks',
    authors: ['Hao Liu', 'Michelle Taylor'],
    journal: 'Journal of Biomedical Informatics',
    year: 2023,
    volume: '139',
    pages: '104290',
    doi: '10.1016/j.jbi.2023.104290',
    type: 'Journal Article',
    pdf: '/publications/ontology-alignment.pdf',
    abstract: 'We propose a neural network-based approach for automated alignment of biomedical ontologies, leveraging embeddings and attention mechanisms to identify concept mappings across different ontological systems.',
    citations: 22,
    topics: ['Ontology', 'Neural Networks', 'Alignment'],
    featured: false
  },
  {
    id: 8,
    title: 'A Framework for Explainable AI in Healthcare',
    authors: ['Hao Liu', 'Daniel Garcia', 'Sophie Martinez'],
    conference: 'ICML Workshop on AI for Healthcare',
    year: 2022,
    location: 'Baltimore, MD',
    type: 'Workshop Paper',
    pdf: '/publications/explainable-ai-healthcare.pdf',
    abstract: 'We present a comprehensive framework for implementing explainable AI in healthcare applications, addressing transparency, interpretability, and trustworthiness requirements.',
    citations: 18,
    topics: ['Explainable AI', 'Healthcare', 'Interpretability'],
    featured: false
  }
]

export const featuredPublications = publications.filter(item => item.featured)

export const getJournalPublications = () => {
  return publications.filter(item => item.type === 'Journal Article' || item.type === 'Review')
}

export const getConferencePublications = () => {
  return publications.filter(item => item.type === 'Conference Paper' || item.type === 'Workshop Paper')
}

export const getPublicationsByYear = (year: number) => {
  return publications.filter(item => item.year === year)
}

export const getPublicationById = (id: number) => {
  return publications.find(item => item.id === id)
}

export const getPublicationsByTopic = (topic: string) => {
  return publications.filter(item => 
    item.topics.some(t => t.toLowerCase().includes(topic.toLowerCase()))
  )
}
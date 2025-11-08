// Type definitions for better type safety and IDE support
export interface PersonalInfo {
  name: string;
  title: string;
  about: string;
  profileImage?: string;
  blog?: string;
  cv?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  description: string;
  gpa?: string; // Optional, can be extracted from description
  location?: string; // Optional for future use
}

export interface Publication {
  title: string;
  authors: string; // HTML string with bold names
  venue: string;
  year: string;
  doi?: string; // Optional for future use
  pdf?: string; // Optional for future use
  code?: string; // Optional code repository link
  data?: string; // Optional dataset link
  type?: "conference" | "journal" | "workshop" | "preprint"; // Optional categorization
}

export interface Award {
  title: string;
  year?: string; // Optional, can be extracted from title
  organization?: string; // Optional for future use
}

export interface ContactInfo {
  email: string;
  office: string;
  address: string;
  linkedin: string;
  scholar: string;
  github?: string; // Added GitHub
  website?: string; // Optional for personal website
  orcid?: string; // Optional for ORCID ID
  twitter?: string; // Optional for social media
}

export interface SectionConfig {
  id: string;
  title: string;
  enabled: boolean;
  order: number;
}

// Main portfolio data structure
export interface PortfolioData {
  personal: PersonalInfo;
  education: EducationItem[];
  researchInterests: string[];
  publications: Publication[];
  awards: Award[];
  contact: ContactInfo;
  sections: SectionConfig[]; // Controls which sections to show and their order
}

// The centralized data - Update this with your information
export const portfolioData: PortfolioData = {
  personal: {
    name: "K M Nafi Asib",
    title: "Software Engineer & Researcher",
    about:
      "I'm a researcher and software engineer with a deep interest in Computer Vision, Natural Language Processing, and Large Language Models. I completed my undergraduate thesis under <a href='https://scholar.google.com/citations?user=du_bCPIAAAAJ&hl=en' target='_blank' rel='noopener noreferrer'>Dr. Kaushik Deb</a>, where I worked on deep learning approaches for Bangla sign language recognition. Since then, I've been drawn to challenges in low-resource language processing and the broader questions of LLM interpretability, efficient large-scale training, and reinforcement learning for model alignment. Beyond research, I've spent several years as a software engineer, building reliable, production-grade systems. <br/><br/>I'm actively seeking PhD opportunities that bridges my engineering experience with advanced, exploratory research in intelligent and interpretable AI systems.",
    blog: "https://blog.nafiasib.com",
    cv: "https://drive.google.com/file/d/1A8ytOwTeAZDcXmETbWSYQRqYIJuIUrFi/view?usp=sharing",
  },

  education: [
    {
      degree: "BSc in Computer Science and Engineering",
      institution: "Chittagong University of Engineering & Technology",
      date: "2018 - 2023",
      description:
        "GPA: 3.12/4.0 | Thesis: 'Recognition of Static Bangla Sign Language Words using Deep Learning' ",
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution: "St. Joseph Higher Secondary School, Dhaka",
      date: "2015 - 2017",
      description: "GPA: 5.00/5.00",
    },
  ],

  researchInterests: [
    "Computer Vision and Image Processing",
    "Natural Language Processing",
    "Machine Learning and Deep Learning",
    "Artificial Intelligence Applications in Healthcare",
    "Data Mining and Analytics",
    "Human-Computer Interaction",
  ],

  publications: [
    {
      title:
        "Retriv at BLP-2025 Task 2: Test-Driven Feedback-Guided Framework for Bangla-to-Python Code Generation",
      authors: "<strong>K M Nafi Asib</strong>, Sourav Saha, M Moshiul Hoqueh",
      venue: "In Bangla Language Processing(BLP) Workshop at IJCNLP-AACL",
      year: "2025",
      type: "workshop",
      pdf: "https://example.com/paper1.pdf",
      code: "https://github.com/NafiAsib/blp-task2",
      data: "https://example.com/dataset1",
    },
    {
      title:
        "Retriv at BLP-2025 Task 1: A Transformer Ensemble and Multi-Task Learning Approach for Bangla Hate Speech Identification",
      authors: "Sourav Saha, <strong>K M Nafi Asib</strong>, M Moshiul Hoque",
      venue: "In Bangla Language Processing(BLP) Workshop at IJCNLP-AACL",
      year: "2025",
      type: "workshop",
      pdf: "https://example.com/paper2.pdf",
      code: "https://github.com/NafiAsib/blp-task1",
    },
    {
      title:
        "ToxiFusion: A Hybrid Semantic–Sequential Neural Architecture for Multi-Label Toxic Comment Classification.",
      authors: "Sourav Saha, Soumik Ghosh, <strong>K M Nafi Asib</strong>,",
      venue:
        "28th International Conference on Computer and Information Technology (ICCIT)",
      year: "2025",
      type: "conference",
      pdf: "https://example.com/paper3.pdf",
    },
  ],

  awards: [
    { title: "Dean's List for Academic Excellence (2023, 2024)" },
    { title: "Best Final Year Project Award (2024)" },
    { title: "University Scholarship for Outstanding Performance (2022-2024)" },
    { title: "Programming Competition First Place (2023)" },
  ],

  contact: {
    email: "nafi.asib@gmail.com",
    office: "Available for virtual meetings",
    address: "City, Country (Available for relocation)",
    linkedin: "linkedin.com/in/nafiasib",
    scholar: "scholar.google.com/citations?user=nafiasib",
    github: "github.com/NafiAsib",
  },

  // Section configuration - controls which sections appear and their order
  sections: [
    { id: "about", title: "About", enabled: true, order: 1 },
    { id: "education", title: "Education", enabled: true, order: 2 },
    { id: "research", title: "Research Interests", enabled: true, order: 3 },
    { id: "publications", title: "Publications", enabled: true, order: 4 },
    { id: "awards", title: "Awards & Honors", enabled: true, order: 5 },
    { id: "contact", title: "Contact", enabled: true, order: 6 },
  ],
};

// Utility functions for data processing
export const utils = {
  // Get sections in order
  getEnabledSections: () =>
    portfolioData.sections
      .filter((section) => section.enabled)
      .sort((a, b) => a.order - b.order),

  // Get publications by type
  getPublicationsByType: (type?: Publication["type"]) =>
    type
      ? portfolioData.publications.filter((pub) => pub.type === type)
      : portfolioData.publications,

  // Get publications sorted by year (newest first)
  getPublicationsByYear: () =>
    [...portfolioData.publications].sort(
      (a, b) => parseInt(b.year) - parseInt(a.year)
    ),

  // Format name for different contexts (e.g., remove title for footer)
  formatName: (includeTitles = true) =>
    includeTitles
      ? portfolioData.personal.name
      : portfolioData.personal.name.replace(
          /^(Dr\.|Prof\.|Mr\.|Ms\.|Mrs\.)\s/,
          ""
        ),

  // Get current year for footer
  getCurrentYear: () => new Date().getFullYear(),

  // Validate required fields (useful for development)
  validateData: () => {
    const errors: string[] = [];
    if (!portfolioData.personal.name) errors.push("Personal name is required");
    if (!portfolioData.contact.email) errors.push("Email is required");
    if (portfolioData.education.length === 0)
      errors.push("At least one education entry is required");
    return { isValid: errors.length === 0, errors };
  },
};

// Export individual sections for easy access
export const {
  personal,
  education,
  researchInterests,
  publications,
  awards,
  contact,
  sections,
} = portfolioData;

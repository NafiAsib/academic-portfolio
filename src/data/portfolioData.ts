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
  gpa: string;
  lastFourSemestersCGPA?: string;
  thesis?: string;
  coursework?: string[];
  extracurricular?: string[];
  location?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doi?: string;
  pdf?: string;
  code?: string;
  data?: string;
  type?: "conference" | "journal" | "workshop" | "preprint";
}

export interface ContactInfo {
  email: string;
  office: string;
  address: string;
  linkedin: string;
  scholar?: string;
  github?: string;
  website?: string;
  orcid?: string;
  twitter?: string;
}

export interface NewsItem {
  date: string;
  content: string;
}

export interface CompetitionItem {
  date: string;
  content: string;
}

export interface ExperienceItem {
  position: string;
  company: string;
  date: string; // DD/MM/YYYY - DD/MM/YYYY or DD/MM/YYYY - Present
  location?: string;
  description?: string;
  technologies?: string[];
  link?: string;
}

export interface VolunteerItem {
  role: string;
  organization: string;
  date: string;
  location?: string;
  description: string;
  achievements?: string[];
}

export interface TestScore {
  name: string;
  score: string;
  components?: {
    listening?: string;
    reading?: string;
    writing?: string;
    speaking?: string;
  };
  type?: string;
  cefrLevel?: string;
  description?: string;
}

export interface SectionConfig {
  id: string;
  title: string;
  enabled: boolean;
  order: number;
}

export interface PortfolioData {
  personal: PersonalInfo;
  education: EducationItem[];
  researchInterests: string[];
  publications: Publication[];
  contact: ContactInfo;
  news: NewsItem[];
  competitions: CompetitionItem[];
  experience: ExperienceItem[];
  volunteer: VolunteerItem[];
  testScores: TestScore[];
  sections: SectionConfig[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "K M Nafi Asib",
    title: "Software Engineer & Researcher",
    about:
      "I'm a researcher and software engineer with a deep interest in Computer Vision, Natural Language Processing, and Large Language Models. I completed my undergraduate thesis under <a href='https://scholar.google.com/citations?user=du_bCPIAAAAJ&hl=en' target='_blank' rel='noopener noreferrer'>Dr. Kaushik Deb</a>, where I worked on deep learning approaches for Bangla sign language recognition. Since then, I've been drawn to challenges in low-resource language processing and the broader questions of LLM interpretability, efficient large-scale training, and reinforcement learning for model alignment. Beyond research, I've spent several years as a software engineer, building reliable, production-grade systems. <br/><br/>I'm actively seeking PhD opportunities that bridges my engineering experience with advanced, exploratory research in intelligent and interpretable AI systems.",
    profileImage: "/nafi-asib.jpg",
    blog: "https://blog.nafiasib.com",
    cv: "https://drive.google.com/file/d/1A8ytOwTeAZDcXmETbWSYQRqYIJuIUrFi/view?usp=sharing",
  },

  education: [
    {
      degree: "BSc in Computer Science and Engineering",
      institution:
        "<a href='https://cuet.ac.bd/' target='_blank' rel='noopener noreferrer'>Chittagong University of Engineering & Technology</a>",
      date: "Jan 2018 - Aug 2023",
      gpa: "CGPA <strong>3.12</strong>/4.0 (Last four semesters avg: <strong>3.35</strong>/4.0)",
      lastFourSemestersCGPA: "3.35/4.0",
      thesis:
        "Recognition of Static Bangla Sign Language Words using Deep Learning",
      coursework: [
        "Digital Image Processing",
        "Artificial Intelligence",
        "Discrete Mathematics",
        "Applied Statistics and Queuing Theory",
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "Database Systems",
        "Digital Systems Design",
      ],
      extracurricular: [
        "Development Co-ordinator - CUET Computer Club (Aug 2022 - Aug 2023)",
        "Publication and Research Secretary - Robo Mechatronics Association (RMABD) (Aug 2022 - Sep 2023)",
      ],
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institution:
        "<a href='https://sjs.edu.bd/new/index.php' target='_blank' rel='noopener noreferrer'>St. Joseph Higher Secondary School, Dhaka</a>",
      date: "2015 - 2017",
      gpa: "GPA <strong>5.00</strong>/5.00",
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
      authors: "<strong>K M Nafi Asib</strong>, Sourav Saha, M Moshiul Hoque",
      venue:
        "<a href='https://blp-workshop.github.io/' target='_blank' rel='noopener noreferrer'>In Bangla Language Processing(BLP) Workshop at IJCNLP-AACL</a>",
      year: "2025",
      type: "workshop",
      pdf: "http://arxiv.org/abs/2511.07382",
      code: "https://github.com/NafiAsib/Retriv-BLP25-Task-2",
    },
    {
      title:
        "Retriv at BLP-2025 Task 1: A Transformer Ensemble and Multi-Task Learning Approach for Bangla Hate Speech Identification",
      authors: "Sourav Saha, <strong>K M Nafi Asib</strong>, M Moshiul Hoque",
      venue:
        "<a href='https://blp-workshop.github.io/' target='_blank' rel='noopener noreferrer'>In Bangla Language Processing(BLP) Workshop at IJCNLP-AACL</a>",
      year: "2025",
      type: "workshop",
      pdf: "http://arxiv.org/abs/2511.07304",
      code: "https://github.com/sahasourav17/Retriv-BLP25-Task-1",
    },
    {
      title:
        "ToxiFusion: A Hybrid Semantic–Sequential Neural Architecture for Multi-Label Toxic Comment Classification.",
      authors: "Sourav Saha, Soumik Ghosh, <strong>K M Nafi Asib</strong>,",
      venue:
        "28th International Conference on Computer and Information Technology (ICCIT)",
      year: "2025",
      type: "conference",
    },
  ],

  contact: {
    email: "nafi.asib@gmail.com",
    office: "Available for virtual meetings",
    address: "Dhaka, Bangladesh (Available for relocation)",
    linkedin: "linkedin.com/in/nafiasib",
    scholar: "scholar.google.com/citations?user=FeFZfGEAAAAJ&hl=en",
    github: "github.com/NafiAsib",
    twitter: "twitter.com/nafiasib",
  },

  news: [
    {
      date: "Nov 2025",
      content:
        "Paper accepted on Code Generation with LLM at the BLP Workshop at IJCNLP-AACL 2025!",
    },
    {
      date: "Nov 2025",
      content:
        "Paper accepted on Bangla Hate Speech Identification at the BLP Workshop at IJCNLP-AACL 2025!",
    },
  ],

  competitions: [
    {
      date: "Oct 2025",
      content:
        "<strong>1st Runner-up</strong> at <a href='https://noshinulfat.github.io/blp25_code_generation_task/#/home' target='_blank'>Code Generation in Bangla (Shared Task 2), BLP Workshop @IJCNLP-AACL 2025</a>",
    },
    {
      date: "Oct 2025",
      content:
        "<strong>9th, 10th, 7th</strong> at <a href='https://github.com/AridHasan/blp25_task1?tab=readme-ov-file#leaderboard' target='_blank'>Hatespeech Identification (Shared Task 1A, 1B, 1C), BLP Workshop @IJCNLP-AACL 2025</a>",
    },
  ],

  experience: [
    {
      position: "Software Engineer",
      company: "Cantaloupe, Inc",
      date: "01/06/2024 - Present",
      location: "Malvern, Pennsylvania (Remote)",
      link: "https://www.cantaloupe.com/",
    },
    {
      position: "Associate Software Developer",
      company: "The WOS Group GmbH",
      date: "15/11/2022 - 31/06/2024",
      location: "Moenchengladbach, Germany (Remote)",
      link: "https://thewos.com/",
    },
    {
      position: "Associate Software Engineer",
      company: "Brain Station 23 Ltd.",
      date: "01/11/2021 - 30/11/2022",
      location: "Dhaka, Bangladesh",
      link: "https://brainstation-23.com/",
    },
    {
      position: "Frontend Developer",
      company: "Dast Inc.",
      date: "15/12/2020 - 01/06/2021",
      location: "Texas, USA (Remote)",
    },
  ],

  testScores: [
    {
      name: "IELTS",
      score: "8.0",
      components: {
        listening: "9.0",
        reading: "9.0",
        writing: "6.5",
        speaking: "7.0",
      },
      type: "Academic",
      cefrLevel: "C1",
      description: "Advanced/Proficient User",
    },
  ],

  volunteer: [
    {
      role: "Development Co-ordinator",
      organization: "CUET Computer Club",
      date: "Aug 2022 - Aug 2023",
      description:
        "Coordinated development activities and managed technical projects for the university computer club.",
    },
    {
      role: "Publication and Research Secretary",
      organization: "Robo Mechatronics Association (RMABD)",
      date: "Aug 2022 - Sep 2023",
      description:
        "Managed publications and research activities for the robotics and mechatronics association.",
    },
  ],

  // Section configuration - controls which sections appear and their order
  sections: [
    { id: "about", title: "About", enabled: true, order: 1 },
    { id: "news", title: "Recent News", enabled: true, order: 2 },
    {
      id: "competitions",
      title: "Competitions & Achievements",
      enabled: true,
      order: 3,
    },
    { id: "education", title: "Education", enabled: true, order: 4 },
    { id: "testScores", title: "Test Scores", enabled: true, order: 5 },
    { id: "experience", title: "Experience", enabled: true, order: 6 },
    { id: "volunteer", title: "Volunteer Experience", enabled: true, order: 7 },
    { id: "research", title: "Research Interests", enabled: true, order: 8 },
    { id: "publications", title: "Publications", enabled: true, order: 9 },
    { id: "awards", title: "Awards & Honors", enabled: true, order: 10 },
    { id: "contact", title: "Contact", enabled: true, order: 11 },
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

  // Parse DD/MM/YYYY format to Date object
  parseDate: (dateString: string): Date => {
    if (dateString.toLowerCase() === "present") {
      return new Date();
    }
    const [day, month, year] = dateString.split("/").map(Number);
    return new Date(year, month - 1, day);
  },

  // Convert Date to short format (e.g., "Jun 2024")
  formatShortDate: (date: Date): string => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  },

  // Convert DD/MM/YYYY to short format
  formatDateFromString: (dateString: string): string => {
    if (dateString.toLowerCase() === "present") {
      return "Present";
    }
    return utils.formatShortDate(utils.parseDate(dateString));
  },

  // Calculate duration between two dates in LinkedIn format (e.g., "1 yr 5 mos")
  calculateDuration: (startDate: string, endDate: string): string => {
    const start = utils.parseDate(startDate);
    const end =
      endDate.toLowerCase() === "present"
        ? new Date()
        : utils.parseDate(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    // If the end day is before the start day, subtract a month
    if (end.getDate() < start.getDate()) {
      months--;
      if (months < 0) {
        years--;
        months += 12;
      }
    }

    months++;
    if (months >= 12) {
      years++;
      months -= 12;
    }

    const parts = [];
    if (years > 0) {
      parts.push(`${years} yr${years !== 1 ? "s" : ""}`);
    }
    if (months > 0) {
      parts.push(`${months} mo${months !== 1 ? "s" : ""}`);
    }

    return parts.length > 0 ? parts.join(" ") : "1 mo";
  },

  // Format experience date range with duration
  formatExperienceDateRange: (dateRange: string): string => {
    const [startDateStr, endDateStr] = dateRange.split(" - ");
    const formattedStart = utils.formatDateFromString(startDateStr);
    const formattedEnd = utils.formatDateFromString(endDateStr);
    const duration = utils.calculateDuration(startDateStr, endDateStr);

    return `${formattedStart} - ${formattedEnd} (${duration})`;
  },

  // Get formatted experience data with computed display dates
  getFormattedExperiences: () =>
    portfolioData.experience.map((exp) => ({
      ...exp,
      formattedDate: utils.formatExperienceDateRange(exp.date),
    })),

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

export const {
  personal,
  education,
  researchInterests,
  publications,
  contact,
  news,
  competitions,
  experience,
  volunteer,
  testScores,
  sections,
} = portfolioData;

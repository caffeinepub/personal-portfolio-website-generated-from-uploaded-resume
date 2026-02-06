export interface ExperienceEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  link?: string;
}

export interface ProjectEntry {
  title: string;
  description: string;
  bullets: string[];
  technologies: string[];
  link?: string;
  github?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface TrainingEntry {
  title: string;
  organization: string;
}

export interface ResumeContent {
  name: string;
  title: string;
  summary: string;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: SkillCategory[];
  education: EducationEntry[];
  training: TrainingEntry[];
  languages: { language: string; proficiency: string }[];
  contact: ContactInfo;
}

export const resumeContent: ResumeContent = {
  name: 'Hamza Ali Arshad',
  title: 'Medical Billing & RCM Specialist',
  summary:
    'Medical Billing & RCM Specialist experienced in Denial Management, AR, Payment Posting, and Eligibility & Benefits. Skilled in major EHRs and clearinghouses. Strong problem-solving ability with growing interest in web design and front-end development.',
  experience: [
    {
      title: 'Medical Billing Specialist',
      company: 'Hardstone Enterprises',
      location: 'Lahore, Pakistan',
      period: 'Sep 2024 - Present',
      bullets: [
        'Managing Denial Management for 22 U.S. practices',
        'Resolving rejections and improving clean-claim performance',
        'Handling E&B, Payment Posting, and Charge Entry',
        'Communicating with providers/payers for quick reimbursements',
        'Using Waystar, Office Ally, eProviderSolutions & multiple EHRs',
        'Experienced in reporting, authorization workflow, practice communication, and efficient use of billing software & tools',
      ],
    },
  ],
  projects: [
    {
      title: 'Programming / Self-Learner',
      description: 'Personal programming and web development projects',
      bullets: [
        'Built console-based applications using C++ (loops, arrays, functions, logic building)',
        'Created responsive static websites using HTML & CSS',
        'Practiced front-end layouts, UI structuring, and clean code formatting',
        'Developed small portfolio projects following CodeWithHarry tutorials',
        'Actively learning full-stack fundamentals and automation basics',
      ],
      technologies: ['C++', 'HTML', 'CSS', 'Front-End Design'],
    },
  ],
  skills: [
    {
      category: 'Medical Billing & RCM',
      skills: [
        'Denial Management',
        'AR & Claim Follow-Up',
        'Eligibility & Benefits Verification',
        'Payment Posting',
        'Charge Entry / Charge Capture',
        'Rejection Handling',
        'ICD-10 & CPT Familiarity',
      ],
    },
    {
      category: 'Programming & Web',
      skills: ['C++', 'HTML & CSS', 'Basic Front-End Design', 'Algorithms & Problem Solving'],
    },
    {
      category: 'Software & Tools',
      skills: [
        'CollaborateMD',
        'AdvancedMD',
        'TherapyNotes',
        'SimplePractice',
        'Alleva',
        'PracticeQ',
        'Insync',
        'Practice Fusion',
        'Rittern',
        'Reliatrax',
        'Waystar',
        'eProviderSolutions',
        'Office Ally',
        'MS Office',
        'Google Sheets',
      ],
    },
    {
      category: 'Soft Skills',
      skills: ['Communication & Leadership', 'Team Coordination', 'Problem Solving', 'Organization & Reporting'],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science (BSCS)',
      institution: 'Superior University Lahore',
      location: 'Gold Campus',
      period: 'Feb 2025 - Present',
      details: [
        'Participated in AI & cloud seminars',
        'Worked on HTML/CSS mini projects',
        'Continued hands-on experience with medical billing and RCM tools',
      ],
    },
  ],
  training: [
    {
      title: 'Medical Billing & Denial Management',
      organization: 'Hardstone Enterprises',
    },
    {
      title: 'ICD-10, CPT, HCPCS Training',
      organization: 'Hardstone Enterprises',
    },
    {
      title: 'AR/DM Training',
      organization: 'Hardstone Enterprises',
    },
  ],
  languages: [
    { language: 'English', proficiency: 'Fluent' },
    { language: 'Urdu', proficiency: 'Native' },
    { language: 'Punjabi', proficiency: 'Native' },
  ],
  contact: {
    email: 'hamzajani0035@gmail.com',
    phone: '+92 329 4320299',
    location: 'Lahore, Defence Road, Labour Colony 54/2',
  },
};

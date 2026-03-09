export interface RcmCaseStudy {
  title: string;
  subtitle: string;
  role?: string;
  scope?: string;
  tools: string[];
  responsibilities: string[];
  impact: string[];
  portfolioValue: string;
}

export const rcmCaseStudies: RcmCaseStudy[] = [
  {
    title: 'Denial Management Optimization',
    subtitle: 'Multi-Practice RCM Project',
    role: 'Medical Billing & RCM Specialist',
    scope: '22 U.S. Practices',
    tools: ['Waystar', 'Office Ally', 'eProviderSolutions', 'Multiple EHRs'],
    responsibilities: [
      'Analyzed high-frequency denial reasons across payers',
      'Categorized denials (CO-50, CO-97, eligibility, auth, coding)',
      'Resubmitted corrected claims with supporting documentation',
      'Coordinated with providers for missing clinical data',
    ],
    impact: [
      'Improved clean-claim rate',
      'Reduced repeat denials',
      'Faster reimbursement turnaround',
      'Maintained accuracy across high claim volume',
    ],
    portfolioValue: 'Shows payer logic + denial strategy',
  },
  {
    title: 'AR Follow-Up & Aging Reduction Project',
    subtitle: 'Insurance AR (30–120+ Days)',
    tools: ['Waystar', 'Office Ally', 'Payer portals', 'Google Sheets (tracking)'],
    responsibilities: [
      'Worked aging buckets systematically',
      'Followed up with major payers via portals & calls',
      'Identified stalled claims & escalation triggers',
      'Logged payer responses for tracking & reporting',
    ],
    impact: [],
    portfolioValue: 'Shows AR ownership + payer communication',
  },
  {
    title: 'Eligibility & Benefits Verification Workflow',
    subtitle: 'Pre-Billing Accuracy Improvement',
    tools: ['eProviderSolutions', 'Insurance portals', 'EHR eligibility modules'],
    responsibilities: [
      'Verified coverage, deductibles, copays, prior auth',
      'Identified inactive or limited plans before claim submission',
      'Reduced eligibility-based rejections',
    ],
    impact: [],
    portfolioValue: 'Preventive billing skill (very valuable)',
  },
  {
    title: 'Payment Posting & Reconciliation Project',
    subtitle: 'Accurate Financial Posting',
    tools: [],
    responsibilities: [
      'Posted ERA/EOB payments',
      'Adjusted contractual write-offs',
      'Identified underpayments & discrepancies',
      'Flagged claims for secondary billing',
    ],
    impact: [
      'Accurate patient balances',
      'Clean financial reporting',
      'Improved AR accuracy',
    ],
    portfolioValue: 'Financial accuracy + compliance',
  },
  {
    title: 'Charge Entry & Clean Claim Submission',
    subtitle: 'First-Pass Acceptance',
    tools: [],
    responsibilities: [
      'Entered charges with correct ICD-10 & CPT mapping',
      'Ensured modifiers & POS accuracy',
      'Submitted claims through clearinghouses',
      'Corrected rejections before payer submission',
    ],
    impact: [],
    portfolioValue: 'Shows billing fundamentals mastery',
  },
  {
    title: 'RCM Reporting & Practice Communication',
    subtitle: 'Providers & Internal Teams',
    tools: [],
    responsibilities: [
      'Daily/weekly billing status updates',
      'Denial trend insights',
      'Authorization & eligibility issues reporting',
      'Practice-level communication',
    ],
    impact: [],
    portfolioValue: 'Corporate professionalism + leadership',
  },
  {
    title: 'Tech + RCM Hybrid Project',
    subtitle: 'RCM Workflow Awareness with Front-End Fundamentals',
    tools: [],
    responsibilities: [
      'Used HTML/CSS knowledge to understand UI/UX of EHR systems',
      'Analyzed how form design impacts billing errors',
      'Built static layouts to practice clean data presentation',
      'Learning automation & digital workflows for future RCM optimization',
    ],
    impact: [],
    portfolioValue: 'Sets you apart from 90% billers',
  },
];

export const rcmSections = {
  systemsTools: [
    'Waystar',
    'Office Ally',
    'eProviderSolutions',
    'Multiple EHR Systems',
    'Payer Portals',
    'Clearinghouses',
    'Google Sheets',
  ],
  billingWorkflows: [
    'Charge Entry & Coding',
    'Eligibility Verification',
    'Prior Authorization',
    'Claim Submission',
    'Payment Posting',
    'Denial Management',
    'AR Follow-Up',
  ],
  processImprovements: [
    'Clean-claim rate optimization',
    'Denial categorization & tracking',
    'Aging bucket management',
    'Payer communication protocols',
    'Financial reconciliation accuracy',
  ],
  techBillingSkills: [
    'EHR UI/UX Analysis',
    'HTML/CSS Fundamentals',
    'Data Presentation',
    'Workflow Automation Concepts',
    'Digital Process Optimization',
  ],
};

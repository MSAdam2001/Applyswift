// Mock Data for AutoApply.ng
export const mockUser = {
  id: "user_001",
  name: "Aisha Bello",
  email: "aisha@example.com",
  phone: "08012345678",
  location: "Abuja",
  avatar: "/images/avatar.png",
  experience: [
    {
      id: "exp_01",
      company: "SoftDev Nigeria",
      role: "Frontend Developer",
      duration: "Jan 2023 - Feb 2024",
      description: "Built responsive web applications using React and Tailwind CSS"
    }
  ],
  skills: ["React", "CSS", "UI/UX", "Tailwind", "JavaScript", "TypeScript"],
  subscription: {
    plan: "Free",
    cvRegenerations: 1,
    cvRegenerationsUsed: 0,
    autoApplyEnabled: false
  }
};

export const mockCVs = [
  {
    id: "cv_01",
    title: "General Tech CV",
    created_at: "2025-01-10",
    lastModified: "2025-01-15",
    status: "active"
  },
  {
    id: "cv_02",
    title: "Frontend Developer CV",
    created_at: "2025-01-12",
    lastModified: "2025-01-18",
    status: "active"
  }
];

export const mockCoverLetters = [
  {
    id: "cl_01",
    jobTitle: "Frontend Developer",
    company: "TechMatter",
    template: "Modern Professional",
    content: "Dear Hiring Manager,\n\nI am excited to apply for the Frontend Developer position at TechMatter. With my experience in React and modern web technologies, I am confident I can contribute to your team's success...",
    createdAt: "2025-01-20"
  },
  {
    id: "cl_02",
    jobTitle: "UI/UX Designer",
    company: "PixelPro",
    template: "Creative",
    content: "Hello PixelPro Team,\n\nI was thrilled to discover the UI/UX Designer opening. My passion for creating intuitive user experiences aligns perfectly with your company's mission...",
    createdAt: "2025-01-21"
  }
];

export const mockJobs = [
  {
    id: "job_01",
    title: "Frontend Developer",
    company: "TechMatter",
    location: "Lagos",
    salary: "₦300k - ₦450k",
    type: "Full-time",
    remote: false,
    apply_method: "email",
    email: "hr@techmatter.com",
    description: "Looking for a skilled Frontend Developer to join our growing team.",
    requirements: ["React", "TypeScript", "3+ years experience"],
    posted: "2 days ago",
    match: 95
  },
  {
    id: "job_02",
    title: "UI/UX Designer",
    company: "PixelPro",
    location: "Remote",
    salary: "₦250k - ₦350k",
    type: "Full-time",
    remote: true,
    apply_method: "form",
    url: "https://pixelpro.com/apply",
    description: "Creative UI/UX Designer needed for exciting projects.",
    requirements: ["Figma", "User Research", "Portfolio"],
    posted: "5 days ago",
    match: 88
  },
  {
    id: "job_03",
    title: "Full Stack Developer",
    company: "CodeCraft Solutions",
    location: "Abuja",
    salary: "₦400k - ₦600k",
    type: "Full-time",
    remote: false,
    apply_method: "email",
    email: "careers@codecraft.ng",
    description: "Join our team building innovative solutions for Nigerian businesses.",
    requirements: ["Node.js", "React", "MongoDB", "5+ years experience"],
    posted: "1 week ago",
    match: 82
  },
  {
    id: "job_04",
    title: "Product Designer",
    company: "StartupHub NG",
    location: "Lagos",
    salary: "₦280k - ₦420k",
    type: "Contract",
    remote: true,
    apply_method: "form",
    url: "https://startuphub.ng/careers",
    description: "Help design the future of Nigerian fintech.",
    requirements: ["Product Design", "Prototyping", "Agile"],
    posted: "3 days ago",
    match: 90
  }
];

export const mockApplications = [
  {
    id: "app_01",
    job: "Frontend Developer",
    company: "TechMatter",
    status: "Delivered",
    sent_at: "2025-01-20",
    opened: true,
    replied: false,
    location: "Lagos",
    salary: "₦300k - ₦450k"
  },
  {
    id: "app_02",
    job: "UI/UX Designer",
    company: "PixelPro",
    status: "Sent",
    sent_at: "2025-01-21",
    opened: false,
    replied: false,
    location: "Remote",
    salary: "₦250k - ₦350k"
  },
  {
    id: "app_03",
    job: "Full Stack Developer",
    company: "CodeCraft Solutions",
    status: "Replied",
    sent_at: "2025-01-18",
    opened: true,
    replied: true,
    location: "Abuja",
    salary: "₦400k - ₦600k"
  }
];

export const mockNotifications = [
  {
    id: "notif_01",
    type: "application",
    title: "Application Delivered",
    message: "Your application to TechMatter has been delivered",
    timestamp: "2 hours ago",
    read: false
  },
  {
    id: "notif_02",
    type: "match",
    title: "5 New Job Matches",
    message: "We found 5 new jobs matching your profile",
    timestamp: "5 hours ago",
    read: false
  },
  {
    id: "notif_03",
    type: "response",
    title: "Company Response",
    message: "CodeCraft Solutions replied to your application",
    timestamp: "1 day ago",
    read: true
  }
];

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    price: "₦0",
    period: "forever",
    features: [
      "1 CV regeneration",
      "Basic job matching",
      "Manual applications only",
      "Email support"
    ],
    limitations: [
      "No auto-apply",
      "Limited CV downloads",
      "Standard cover letters only"
    ],
    cta: "Current Plan",
    popular: false
  },
  {
    id: "basic",
    name: "Basic",
    price: "₦5,000",
    period: "per month",
    features: [
      "5 CV regenerations/month",
      "Advanced job matching",
      "10 auto-applications/day",
      "Priority email support",
      "Basic analytics"
    ],
    cta: "Upgrade Now",
    popular: false
  },
  {
    id: "standard",
    name: "Standard",
    price: "₦12,000",
    period: "per month",
    features: [
      "Unlimited CV regenerations",
      "AI-powered matching",
      "50 auto-applications/day",
      "Custom cover letter templates",
      "Advanced analytics",
      "Priority support"
    ],
    cta: "Upgrade Now",
    popular: true
  },
  {
    id: "premium",
    name: "Premium",
    price: "₦25,000",
    period: "per month",
    features: [
      "Everything in Standard",
      "Unlimited auto-applications",
      "Interview coaching credits",
      "LinkedIn optimization",
      "Dedicated account manager",
      "SMS alerts",
      "API access"
    ],
    cta: "Upgrade Now",
    popular: false
  }
];

export const mockAdminData = {
  totalUsers: 1247,
  activeUsers: 892,
  totalApplications: 5634,
  successRate: 23.5,
  recentUsers: [
    { id: "1", name: "Aisha Bello", email: "aisha@example.com", plan: "Free", joined: "2025-01-20" },
    { id: "2", name: "Chidi Okafor", email: "chidi@example.com", plan: "Standard", joined: "2025-01-19" },
    { id: "3", name: "Fatima Ahmed", email: "fatima@example.com", plan: "Basic", joined: "2025-01-18" }
  ],
  scrapeSources: [
    { id: "1", name: "Jobberman", status: "Active", lastScrape: "2 hours ago", jobsFound: 45 },
    { id: "2", name: "LinkedIn", status: "Active", lastScrape: "1 hour ago", jobsFound: 78 },
    { id: "3", name: "Indeed", status: "Paused", lastScrape: "1 day ago", jobsFound: 23 }
  ]
};
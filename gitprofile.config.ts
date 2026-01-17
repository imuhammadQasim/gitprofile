// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'imuhammadQasim', // Your GitHub username
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, 
      header: 'Technical Repositories',
      mode: 'automatic', 
      automatic: {
        sortBy: 'stars', 
        limit: 8, 
        exclude: {
          forks: true, 
          projects: [], 
        },
      },
    },
    external: {
      header: 'Featured Business Projects',
      projects: [
        {
          title: 'AUSTIN DAVID APARTMENTS',
          description:
            'A premium rental platform for a UK-based company. Implemented Tokeet and Global Payment integrations with Price Labs for AI-driven dynamic pricing.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://austindavidapartments.co.uk/',
        },
        {
          title: 'Zync Logic Automation Hub',
          description:
            'A custom-built ecosystem using Gemini API and Make.com to automate business lead generation and client outreach workflows.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://imuhammadqasim.github.io/gitprofile',
        },
      ],
    },
  },
  seo: { 
    title: 'Portfolio of Muhammad | CEO & Automation Expert', 
    description: 'Expert in AI integrations, Web Development, and Business Automation.', 
    imageURL: '' 
  },
  social: {
    linkedin: 'imuhammadqasim', // Update with your actual LinkedIn ID
    website: 'https://imuhammadqasim.github.io/gitprofile',
    email: 'contact@yourdomain.com', // Update with your actual email
    facebook: '',
    instagram: '',
    x: '',
    medium: '',
    dev: '',
  },
  resume: {
    fileUrl: '', // Add a link to your resume PDF here later
  },
  skills: [
    'AI & Gemini API',
    'Automation (Make.com/Zapier)',
    'Shopify & eCommerce',
    'WordPress & Wix',
    'Python',
    'React.js',
    'Tailwind CSS',
    'PHP / Laravel',
    'Technical SEO',
    'Stripe & Payment Integration',
    'Node.js',
    'Git',
  ],
  experiences: [
    {
      company: 'Zync Logic',
      position: 'CEO & Founder',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://imuhammadqasim.github.io/gitprofile',
    },
    {
      company: 'Independent Freelance',
      position: 'Full-Stack Developer',
      from: '2021',
      to: '2023',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'Your University Name',
      degree: 'Bachelor of Computer Science',
      from: '2019',
      to: '2023',
    },
  ],
  blog: {
    source: 'dev', 
    username: '', // Kept empty to hide blog until you have posts
    limit: 2, 
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'corporate', // Professional "Make.com" style
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'corporate',
      'business',
      'luxury',
      'lofi',
      'dracula',
      'winter',
    ],
  },

  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;

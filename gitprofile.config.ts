// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'imuhammadQasim', 
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
        exclude: { forks: true, projects: [] },
      },
    },
    external: {
      header: 'Featured Business Projects',
      projects: [
        {
          title: 'Austin David Apartments',
          description:
            'A premium rental platform for a UK-based company. Integrated Tokeet, Airbnb, and Price Labs using a Node.js monolith architecture deployed on AWS.',
          imageUrl: 'https://www.austindavidapartments.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstories7.b3646955.webp&w=384&q=75',
          link: 'https://austindavidapartments.co.uk/',
        },
        {
          title: 'SwiftRide (Uber Alternative)',
          description:
            'Engineered a robust backend MVP using Node.js and PostgreSQL/PostGIS to handle real-time ride requests and scalable driver-matching logic.',
          imageUrl: 'https://cdn.prod.website-files.com/643e15786c3c1ff52f75bd0d/677eb83ebf8f38ef9cdd6ec8_652436df54c346949e6836b2_Ride%2520hailing%2520Version%25202.webp',
          link: 'https://github.com/imuhammadQasim/swiftride', 
        },
        {
          title: 'Madrasa.io',
          description:
            'A comprehensive MERN stack educational platform scaling to 2,000+ active users. Features dynamic dashboards and complex resource management.',
          imageUrl: 'https://madrasa.io/static/media/muslimMan.9577d84057964fb54a7a.webp',
          link: 'https://madrasa.io/', 
        },
      ],
    },
  },
  seo: { 
    title: 'Muhammad Qasim Khalid | Software Engineer', 
    description: 'Expert in MERN Stack, Payment Gateways, and Scalable Backend Systems.', 
    imageURL: '' 
  },
  social: {
    linkedin: 'isoftwaredeveloper',
    website: 'https://imuhammadqasim.github.io/gitprofile',
    email: 'mq80140@email.com',
    instagram: 'mianqasim726',
    phone: '+92 3240682963',
  },
  resume: {
    fileUrl: '', 
  },
  skills: [
    'MERN Stack', 'PostgreSQL', 'PostGIS', 'Stripe', 'Global Payment', 'AWS (EC2/S3)', 
    'TypeScript', 'Socket.io', 'Webhooks', 'JWT', 'System Design', 'Tailwind CSS'
  ],
  experiences: [
    {
      company: 'Webevis',
      position: 'Full-Stack Software Engineer',
      from: 'Aug 2025',
      to: 'Present',
      companyLink: 'https://www.webevis.com/',
    },
    {
      company: 'FTS',
      position: 'Junior Web Developer',
      from: 'Aug 2024',
      to: 'July 2025',
      companyLink: '',
    },
  ],
  educations: [
    {
      institution: 'University of the Punjab',
      degree: 'BS in IT (CGIS) - GPA: 3.80/4.00',
      from: '2022',
      to: '2026',
    },
  ],
  googleAnalytics: {
    id: '', 
  },
  hotjar: {
    id: '', 
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'luxury', // Beautiful Black & Gold Premium theme
    disableSwitch: false, 
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'luxury',
      'night',
      'cupcake',
      'retro',
      'aqua',
      'sunset',
      'cyberpunk',
      'business',
    ],
  },
  footer: `Built with ❤️ by Muhammad Qasim Khalid`,
  enablePWA: true,
};

export default CONFIG;

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
            'A premium rental platform for a UK-based company. Integrated Tokeet, Airbnb, and Price Labs using a Node.js monolith architecture deployed on AWS. Highly optimized for scalability.',
          imageUrl: 'https://www.austindavidapartments.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstories7.b3646955.webp&w=384&q=75',
          link: 'https://austindavidapartments.co.uk/',
        },
        {
          title: 'SwiftRide (Uber Alternative)',
          description:
            'Engineered a robust backend MVP using Node.js and PostgreSQL/PostGIS to handle real-time ride requests and scalable driver-matching logic.',
          imageUrl: 'https://cdn.prod.website-files.com/643e15786c3c1ff52f75bd0d/677eb83ebf8f38ef9cdd6ec8_652436df54c346949e6836b2_Ride%2520hailing%2520Version%25202.webp',
          link: 'https://github.com/imuhammadQasim', 
        },
        {
          title: 'Madrasa.io',
          description:
            'A comprehensive MERN stack educational platform scaling to 2,000+ active users. Features dynamic dashboards and complex resource management.',
          imageUrl: 'https://img.freepik.com/free-vector/online-education-concept-illustration_114360-1250.jpg',
          link: '#', 
        },
      ],
    },
  },
  seo: { 
    title: 'Muhammad Qasim Khalid | Full-Stack Software Engineer', 
    description: 'Expert in MERN Stack, Payment Gateways (Stripe/Global), and Scalable Backend Systems.', 
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
    fileUrl: '', // Upload your PDF to GitHub and paste the link here
  },
  skills: [
    'MERN Stack (MongoDB, Express, React, Node.js)',
    'PostgreSQL & PostGIS (Geospatial Data)',
    'Payment Gateways (Stripe, Global Payment, Tokeet)',
    'AWS & Cloud Deployment (EC2, S3)',
    'TypeScript & JavaScript (ES6+)',
    'Real-time Web (Socket.io & Webhooks)',
    'System Design & OOPs',
    'Technical SEO & Performance Optimization',
    'Redis & Caching',
    'Tailwind CSS & Bootstrap',
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
  certifications: [
    {
      name: 'MERN Stack Specialization',
      body: 'Advanced Web Development and Backend Systems',
      year: '2024',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of the Punjab',
      degree: 'BS in Information Technology (CGIS) - GPA: 3.80/4.00',
      from: '2022',
      to: '2026',
    },
  ],
  blog: {
    source: 'dev', 
    username: '', 
    limit: 2, 
  },
  themeConfig: {
    defaultTheme: 'corporate', 
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
    themes: ['light', 'dark', 'corporate', 'business', 'winter'],
  },
  footer: `© ${new Date().getFullYear()} Muhammad Qasim Khalid`,
  enablePWA: true,
};

export default CONFIG;

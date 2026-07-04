export const personal = {
  name: 'Mannena Ganesh',
  firstName: 'Mannena',
  lastName: 'Ganesh',
  title: 'Full-Stack Developer & AI Engineer',
  tagline: 'Building intelligent systems that turn data into decisions and ideas into impact.',
  email: 'mannenaganesh09@gmail.com',
  phone: '+91 9133446324',
  linkedin: 'https://linkedin.com/in/mannenaganesh',
  github: 'https://github.com/mannenaganesh',
  location: 'Amaravati, Andhra Pradesh, India',
  bio: [
    'I\'m a passionate Computer Science Engineering student at VIT-AP University with a CGPA of 8.1/10, driven by the intersection of software engineering and artificial intelligence.',
    'With hands-on experience building AI-powered platforms, full-stack web applications, and cloud-integrated systems, I bridge the gap between complex data and human-centered digital experiences.',
    'From predicting business success to advising farmers with AI, my projects reflect a commitment to solving real-world problems through technology.',
  ],
};

export const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'VIT-AP University',
    location: 'Amaravati, Andhra Pradesh',
    period: '2023 – 2027',
    grade: 'CGPA: 8.1/10',
    courses: ['Data Structures & Algorithms', 'Database Management Systems', 'Operating Systems', 'Computer Networks', 'Object-Oriented Programming', 'Software Engineering', 'Machine Learning'],
  },
];

export const skills = {
  languages: [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 88 },
    { name: 'TypeScript', level: 82 },
    { name: 'Java', level: 80 },
    { name: 'SQL', level: 78 },
    { name: 'C++', level: 72 },
    { name: 'HTML/CSS', level: 92 },
  ],
  frameworks: [
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 83 },
    { name: 'Redux', level: 75 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Bootstrap', level: 80 },
  ],
  databases: [
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 78 },
    { name: 'MySQL', level: 80 },
    { name: 'Redis', level: 70 },
  ],
  cloud: ['AWS (EC2, S3)', 'Oracle Cloud Infrastructure (OCI)'],
  tools: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code'],
  technologies: ['REST APIs', 'WebSockets', 'WebRTC'],
};

export const projects = [
  {
    id: '01',
    title: 'Business Success Predictor',
    description: 'An AI-powered platform that predicts business success using location, competition, budget, and market demand analysis. Features geospatial mapping, machine learning models, and interactive dashboards to deliver revenue forecasts and actionable business insights.',
    tech: ['Python', 'React.js', 'Machine Learning', 'Geospatial APIs', 'Node.js', 'MongoDB'],
    features: ['ML-based success prediction', 'Geospatial mapping', 'Interactive dashboards', 'Revenue forecasting', 'Competitor analysis'],
    github: 'https://github.com/mannenaganesh',
    live: null,
    gradient: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(191,0,255,0.05))',
  },
  {
    id: '02',
    title: 'Smart Rent Analyzer',
    description: 'A location intelligence platform that evaluates rental properties based on rent, safety, commute time, nearby amenities, and neighborhood analysis. Implements AI-driven recommendations and interactive maps to help users make informed, data-backed rental decisions.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Maps API', 'MongoDB', 'AI/ML'],
    features: ['AI-driven recommendations', 'Interactive property maps', 'Neighborhood scoring', 'Commute analysis', 'Safety ratings'],
    github: 'https://github.com/mannenaganesh',
    live: null,
    gradient: 'linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,245,255,0.05))',
  },
  {
    id: '03',
    title: 'Smart Crop Advisor',
    description: 'An AI-based crop advisory system that recommends suitable crops using soil composition, weather patterns, and budget constraints. Integrates predictive analytics for yield estimation, real-time disease alerts, smart irrigation planning, and profit forecasting.',
    tech: ['Python', 'Machine Learning', 'React.js', 'Weather APIs', 'Node.js', 'PostgreSQL'],
    features: ['AI crop recommendations', 'Yield prediction', 'Disease alert system', 'Irrigation planning', 'Profit forecasting'],
    github: 'https://github.com/mannenaganesh',
    live: null,
    gradient: 'linear-gradient(135deg, rgba(255,0,128,0.08), rgba(191,0,255,0.05))',
  },
];

export const certifications = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    year: '2025',
    icon: '☁️',
    color: 'rgba(255, 0, 128, 0.1)',
    border: 'rgba(255, 0, 128, 0.3)',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Data Science Professional',
    issuer: 'Oracle',
    year: '2025',
    icon: '🔬',
    color: 'rgba(0, 245, 255, 0.1)',
    border: 'rgba(0, 245, 255, 0.3)',
  },
  {
    name: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    year: '2024',
    icon: '🚀',
    color: 'rgba(191, 0, 255, 0.1)',
    border: 'rgba(191, 0, 255, 0.3)',
  },
];

export const achievements = [
  { num: 250, suffix: '+', label: 'DSA Problems Solved', sublabel: 'LeetCode, CodeChef, HackerRank', icon: '⚡' },
  { num: 100, suffix: '', label: 'Days Coding Challenge', sublabel: 'Completed in Java', icon: '🔥' },
  { num: 8.1, suffix: '/10', label: 'CGPA at VIT-AP', sublabel: 'B.Tech CSE', icon: '🎓', decimals: 1 },
  { num: 3, suffix: '+', label: 'Industry Certifications', sublabel: 'Oracle, AWS, IBM, HackerRank', icon: '🏆' },
];

export const strengths = [
  'Problem Solving', 'System Design', 'AI/ML Integration',
  'Full-Stack Dev', 'Cloud Architecture', 'Data Analysis',
  'REST APIs', 'Agile', 'Open Source',
];

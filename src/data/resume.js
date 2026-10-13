export const personal = {
  name: 'Mannena Ganesh',
  firstName: 'Mannena',
  lastName: 'Ganesh',
  title: 'Full-Stack Developer & AI Engineer',
  tagline: 'Building intelligent systems that turn data into decisions and ideas into impact.',
  email: 'mannenaganesh09@gmail.com',
  phone: '+91 9133446324',
  linkedin: 'https://linkedin.com/in/mannenaganesh',
  github: 'https://github.com/MGanesh09',
  location: 'Amaravati, Andhra Pradesh, India',
  bio: [
    'I\'m a passionate Computer Science Engineering student at VIT-AP University with a CGPA of 8.24/10, driven by the intersection of software engineering and artificial intelligence.',
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
    grade: 'CGPA: 8.24/10',
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
    github: 'https://github.com/MGanesh09/business-success-predictor',
    live: 'https://github.com/MGanesh09/business-success-predictor',
    gradient: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(191,0,255,0.05))',
    icon: '🏢',
  },
  {
    id: '02',
    title: 'Smart Rent Analyzer',
    description: 'A location intelligence platform that evaluates rental properties based on rent, safety, commute time, nearby amenities, and neighborhood analysis. Implements AI-driven recommendations and interactive maps to help users make informed, data-backed rental decisions.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Maps API', 'MongoDB', 'AI/ML'],
    features: ['AI-driven recommendations', 'Interactive property maps', 'Neighborhood scoring', 'Commute analysis', 'Safety ratings'],
    github: 'https://github.com/MGanesh09/smart-rent-analyzer',
    live: 'https://github.com/MGanesh09/smart-rent-analyzer',
    gradient: 'linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,245,255,0.05))',
    icon: '🏠',
  },
  {
    id: '03',
    title: 'Smart Crop Advisor',
    description: 'An AI-based crop advisory system that recommends suitable crops using soil composition, weather patterns, and budget constraints. Integrates predictive analytics for yield estimation, real-time disease alerts, smart irrigation planning, and profit forecasting.',
    tech: ['Python', 'Machine Learning', 'React.js', 'Weather APIs', 'Node.js', 'PostgreSQL'],
    features: ['AI crop recommendations', 'Yield prediction', 'Disease alert system', 'Irrigation planning', 'Profit forecasting'],
    github: 'https://github.com/MGanesh09/smart-crop-analyzer',
    live: 'https://github.com/MGanesh09/smart-crop-analyzer',
    gradient: 'linear-gradient(135deg, rgba(255,0,128,0.08), rgba(191,0,255,0.05))',
    icon: '🌾',
  },
  {
    id: '04',
    title: 'Crickee – Cricket Auction Room',
    description: 'A real-time fantasy cricket auction platform featuring live multiplayer bidding, dynamic countdown timers, squad management, and custom fantasy point calculation. Built with Socket.io for instant bidding synchronization and interactive live banter chat.',
    tech: ['React.js', 'Node.js', 'Socket.io', 'Express.js', 'MongoDB', 'WebSockets'],
    features: ['Live real-time auction room', 'Dynamic countdown timers', 'Squad & captain management', 'Custom fantasy scoring system', 'Live match scoreboard integration'],
    github: 'https://github.com/MGanesh09/cricketAuctionRoom',
    live: 'https://mganesh09.github.io/cricketAuctionRoom/',
    gradient: 'linear-gradient(135deg, rgba(255,170,0,0.1), rgba(255,0,128,0.05))',
    icon: '🏏',
  },
  {
    id: '05',
    title: 'Crop Doctor',
    description: 'An AI-powered plant disease detection and agronomic advisory platform. Uses a Deep Learning CNN trained on 15,000+ leaf images across 41 classes, coupled with RAG (FAISS + LangChain) and LLM advisory to diagnose diseases and deliver agronomic treatment recommendations.',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'CNN / Deep Learning', 'LangChain', 'FAISS'],
    features: ['41-class CNN leaf disease detection', 'RAG agronomic advisory system', 'Organic & chemical treatment plans', 'Interactive drag-and-drop analysis', 'Preventive care guidelines'],
    github: 'https://github.com/MGanesh09/Crop_doctor',
    live: 'https://mganesh09.github.io/Crop_doctor/',
    gradient: 'linear-gradient(135deg, rgba(0,255,136,0.1), rgba(0,245,255,0.05))',
    icon: '🌿',
  },
];

export const certifications = [
  {
    name: 'IBM Advanced Generative AI',
    issuer: 'IBM Career Education',
    year: '2025',
    icon: '🧠',
    link: 'https://courses.ibmcep.cognitiveclass.ai/certificates/1c20a0bc468248879a7bab474fada3fb',
    color: 'rgba(15, 98, 254, 0.1)',
    border: 'rgba(15, 98, 254, 0.35)',
  },
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
  { num: 100, suffix: '+', label: 'DSA Problems Solved', sublabel: 'LeetCode, CodeChef, HackerRank', icon: '⚡' },
  { num: 100, suffix: '', label: 'Days Coding Challenge', sublabel: 'Completed in Java', icon: '🔥' },
  { num: 8.24, suffix: '/10', label: 'CGPA at VIT-AP', sublabel: 'B.Tech CSE', icon: '🎓', decimals: 2 },
  { num: 4, suffix: '+', label: 'Industry Certifications', sublabel: 'Oracle, AWS, IBM, HackerRank', icon: '🏆' },
];

export const strengths = [
  'Problem Solving', 'System Design', 'AI/ML Integration',
  'Full-Stack Dev', 'Cloud Architecture', 'Data Analysis',
  'REST APIs', 'Agile', 'Open Source',
];

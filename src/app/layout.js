import './globals.css';

export const metadata = {
  title: 'Mannena Ganesh | Full-Stack Developer & AI Engineer',
  description: 'Portfolio of Mannena Ganesh — B.Tech CSE student at VIT-AP, Full-Stack Developer skilled in React, Next.js, Node.js, Python, and AI/ML technologies. Building impactful digital products.',
  keywords: 'Mannena Ganesh, Full Stack Developer, React, Next.js, Python, AI, Machine Learning, Portfolio, VIT-AP',
  authors: [{ name: 'Mannena Ganesh' }],
  openGraph: {
    title: 'Mannena Ganesh | Full-Stack Developer & AI Engineer',
    description: 'Building impactful, AI-powered digital experiences.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

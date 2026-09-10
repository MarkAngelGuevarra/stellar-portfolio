// Animated SVG Icons
export const AnimatedShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-icon shield">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <line x1="12" y1="8" x2="12" y2="16" className="scan-line" />
  </svg>
);

export const AnimatedGears = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-icon gears">
    <circle cx="12" cy="12" r="3" />
    <path className="gear-spin" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const AnimatedCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-icon cloud">
    <path className="cloud-pulse" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

export const AnimatedChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-icon chart">
    <line x1="18" y1="20" x2="18" y2="10" className="bar bar-1" />
    <line x1="12" y1="20" x2="12" y2="4" className="bar bar-2" />
    <line x1="6" y1="20" x2="6" y2="14" className="bar bar-3" />
    <line x1="3" y1="20" x2="21" y2="20" />
  </svg>
);

export const skillsData = [
  {
    id: 'security',
    title: 'Security & Networks',
    shortDesc: 'Cybersecurity, Cisco Networking, Ethical Hacking, IAM, Firewall Configuration',
    focus: 'Defending organizational assets and ensuring secure, uninterrupted connectivity.',
    details: 'Extensive experience in penetration testing (Ethical Hacking), designing robust firewall architectures, managing Identity and Access Management (IAM) protocols, and implementing secure, enterprise-grade Cisco network topologies to thwart emerging cyber threats.',
    Icon: AnimatedShield
  },
  {
    id: 'automation',
    title: 'Automation & Coding',
    shortDesc: 'Python, Bash, Git, IT Automation',
    focus: 'Eliminating manual overhead and accelerating IT workflows through code.',
    details: 'Proficient in writing complex Python scripts for system administration, building Bash automation for Linux environments, and utilizing Git for version control. Focused on reducing human error and increasing operational efficiency through programmatic solutions.',
    Icon: AnimatedGears
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    shortDesc: 'Linux Administration, AWS Cloud Operations, IoT',
    focus: 'Building, scaling, and maintaining the backbone of modern digital applications.',
    details: 'Deep knowledge in administering enterprise Linux servers, architecting scalable, highly-available AWS Cloud Operations, and deploying resilient Internet of Things (IoT) ecosystems. Capable of managing both on-premise and cloud-native environments.',
    Icon: AnimatedCloud
  },
  {
    id: 'analytics',
    title: 'Data & Analytics',
    shortDesc: 'Data Science, Power BI, SQL',
    focus: 'Transforming raw data into actionable business intelligence.',
    details: 'Skilled in modern Data Science methodologies, writing efficient SQL queries for complex database management, and crafting dynamic, interactive dashboards with Microsoft Power BI to drive data-informed decision-making.',
    Icon: AnimatedChart
  }
];

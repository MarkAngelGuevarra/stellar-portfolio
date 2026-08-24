import { useState, useEffect, useRef, useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import './App.css'

// Animated Icons
const AnimatedShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-icon shield">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <line x1="12" y1="8" x2="12" y2="16" className="scan-line" />
  </svg>
);

const AnimatedGears = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-icon gears">
    <circle cx="12" cy="12" r="3" />
    <path className="gear-spin" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const AnimatedCloud = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-icon cloud">
    <path className="cloud-pulse" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
  </svg>
);

const AnimatedChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animated-icon chart">
    <line x1="18" y1="20" x2="18" y2="10" className="bar bar-1" />
    <line x1="12" y1="20" x2="12" y2="4" className="bar bar-2" />
    <line x1="6" y1="20" x2="6" y2="14" className="bar bar-3" />
    <line x1="3" y1="20" x2="21" y2="20" />
  </svg>
);

const skillsData = [
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

const projectsData = [
  {
    id: 'cisco-congress',
    title: 'Cisco Networking Academy Student Congress 2026',
    category: 'Cybersecurity & Enterprise Networking',
    icon: '🏆',
    role: 'Baliuag University Delegate & Competitor',
    date: 'January 2026 • Pampanga, Philippines',
    description: 'Selected as official student delegate for Baliuag University at the 2026 Cisco Student Congress. Engaged with industry leaders, analyzed next-generation enterprise networking architectures, and competed in team-based network configuration and cybersecurity Capture-The-Flag (CTF) challenges on physical Cisco equipment.',
    tech: ['Cisco IOS', 'Enterprise Routing (OSPF/EIGRP)', 'Network Security & ACLs', 'Packet Analysis', 'Team CTF'],
    highlights: [
      'Represented Baliuag University in regional technical conferences and hands-on networking competitions.',
      'Configured physical Cisco routers, switches, and security appliances under strict time constraints.',
      'Solved defensive cybersecurity CTF scenarios and analyzed packet captures in real-time.'
    ],
    gallery: [
      {
        src: '/projects/cisco-1.jpg',
        title: 'Official Event Stage & Convention Backdrop',
        tag: 'Official Venue',
        description: 'The main stage and assembly of the 2026 Cisco Networking Academy Student Congress, convening leading IT student delegates, university faculty, and Cisco networking professionals under the theme of future-proofing enterprise networking skills.'
      },
      {
        src: '/projects/cisco-2.jpg',
        title: 'Baliuag University Delegation & CTF Lab Team',
        tag: 'Competition & Lab Session',
        description: 'Our university delegate team collaborating on-site during hands-on network cabling, topology routing setups, and defensive cybersecurity problem-solving on enterprise Cisco switches.'
      }
    ]
  },
  {
    id: 'gigpay',
    title: 'GigPay — Decentralized Escrow Marketplace',
    category: 'Web3 & Blockchain',
    icon: '⛓️',
    role: 'Web3 & Backend Developer',
    date: '2026',
    description: 'A zero-fee peer-to-peer freelance escrow platform built on the Stellar blockchain. Automates trustless milestone fund release through custom smart contracts while ensuring cryptographic non-repudiation and off-chain data synchronization.',
    tech: ['Stellar Blockchain', 'Soroban Smart Contracts', 'React', 'Supabase PostgreSQL'],
    highlights: [
      'Eliminated third-party escrow commission fees using on-chain smart contract conditions.',
      'Synchronized real-time dispute resolution workflows and transaction history with Supabase.',
      'Designed a non-custodial milestone-based fund disbursement protocol.'
    ],
    gallery: [
      {
        src: '/projects/gigpay.png',
        title: 'GigPay Platform Dashboard',
        tag: 'Platform Architecture',
        description: 'User interface demonstrating active freelance agreements, cryptographic milestone validation, and transparent on-chain escrow transaction auditing.'
      }
    ],
    github: 'https://github.com/MarkAngelGuevarra/GigPay'
  },
  {
    id: 'klasspay',
    title: 'KlassPay — Web3 Split-Payment Protocol',
    category: 'Web3 & Fintech',
    icon: '💸',
    role: 'Full-Stack Web3 Developer',
    date: '2026',
    description: 'A decentralized shared-expense and split-payment application on the Stellar blockchain. Uses non-custodial smart contracts and Freighter wallet integration with FeeBumpTransaction support for smooth, gas-optimized pool payouts.',
    tech: ['React', 'Vite', 'Soroban', 'Stellar SDK', 'TypeScript', 'Web3'],
    highlights: [
      'Integrated Freighter wallet authentication with seamless transaction signing.',
      'Engineered smart contracts to safely lock, track, and disburse split contributions.',
      'Implemented FeeBumpTransaction optimization for friction-free end-user transactions.'
    ],
    github: 'https://github.com/MarkAngelGuevarra/KlassPay'
  },
  {
    id: 'sorobanauditor',
    title: 'SorobanAuditor — Smart Contract Security Scanner',
    category: 'Cybersecurity & Web3 SAST',
    icon: '🛡️',
    role: 'Lead Security Engineer & Developer',
    date: '2026',
    description: 'A specialized Static Application Security Testing (SAST) CLI framework developed in Python to audit Rust-based Stellar Soroban smart contracts for authorization bypasses, reentrancy vulnerabilities, and exposed secrets before mainnet deployment.',
    tech: ['Python', 'AST Analysis', 'SAST', 'Rust Soroban', 'CWE Mapping', 'CLI'],
    highlights: [
      'Implemented Abstract Syntax Tree (AST) parsing to statically inspect contract execution paths.',
      'Automated detection of OWASP & CWE smart contract vulnerability patterns.',
      'Generated standardized audit reports with CVSS severity ratings and developer remediation guides.'
    ],
    github: 'https://github.com/MarkAngelGuevarra/SorobanAuditor'
  },
  {
    id: 'packet-tracer',
    title: 'Enterprise Multi-Site Secure Network Simulation',
    category: 'Cisco Enterprise Networking',
    icon: '🌐',
    role: 'Network Security Architect',
    date: '2025 – 2026',
    description: 'Designed and simulated a redundant multi-branch enterprise network topology in Cisco Packet Tracer. Features dynamic multi-area OSPF with MD5 authentication, GRE over IPSec VPN tunnels, VLAN segmentation, and perimeter firewall security.',
    tech: ['Cisco IOS', 'Multi-Area OSPF', 'IPSec VPN', 'GRE Tunneling', 'VLAN / Trunking', 'Extended ACLs'],
    highlights: [
      'Implemented encrypted site-to-site communication via IPSec VPN and GRE tunneling.',
      'Hardened layer 2/3 infrastructure using DHCP Snooping, Dynamic ARP Inspection (DAI), and port security.',
      'Structured VLSM subnetting across departmental segments with extended access control lists.'
    ]
  },
  {
    id: 'securesync',
    title: 'SecureSync Zero-Trust IAM Framework',
    category: 'Cybersecurity & IAM',
    icon: '🔐',
    role: 'Security Engineer',
    date: '2025',
    description: 'An enterprise Identity and Access Management (IAM) framework built to enforce least-privilege access and zero-trust authentication across hybrid network assets, automated credential rotation, and multi-factor authentication policies.',
    tech: ['Zero Trust', 'IAM Protocols', 'Python', 'Cryptography', 'Bash Automation'],
    highlights: [
      'Engineered automated credential rotation scripts with cryptographic hashing.',
      'Implemented role-based access control (RBAC) schemas adhering to NIST cybersecurity standards.',
      'Integrated real-time authentication logging and anomaly notification triggers.'
    ]
  },
  {
    id: 'mms',
    title: 'Centralized Maintenance & Monitoring System (MMS)',
    category: 'IT Automation & Analytics',
    icon: '📈',
    role: 'Systems Analyst & Developer',
    date: '2025',
    description: 'A proactive IT infrastructure monitoring and maintenance reporting MVP. Collects real-time server health and network telemetry, automates threshold alert dispatching, and renders executive health dashboards.',
    tech: ['Power BI', 'SQL Server', 'Python Scripts', 'IT Operations'],
    highlights: [
      'Automated daily server health check routines and alert notifications via Python.',
      'Constructed interactive Power BI KPI dashboards for system uptime and incident tracking.',
      'Optimized SQL database queries for rapid historical telemetry analysis.'
    ]
  }
];

const certData = [
  {
    id: 'qualys-vmdr',
    title: 'Qualys Certified Specialist: Vulnerability Management (VMDR)',
    issuer: 'Qualys',
    image: '/certs/qualys-vmdr.png',
    modalImage: '/certs/qualys-vmdr-full.png',
    issueDate: 'August 2026',
    description: 'An enterprise-grade vulnerability management and threat prioritization certification issued by Qualys. Validates technical mastery in deploying the Qualys Cloud Platform, configuring network/agent sensors, analyzing TruRisk scores (QVS/QDS/ACS), mitigating Real Threat Indicators (RTIs), and executing patch remediation.',
    difficulty: 'Advanced',
    effort: 'Requires passing the official Qualys VMDR Specialist certification exam demonstrating mastery over asset discovery, vulnerability scoring, risk-based prioritization, and patch management.',
    badgeId: '34a46083-ca69-4d71-9213-b176aca517bf',
    verifyUrl: 'https://www.qualys.com/training/',
    skills: ['Qualys VMDR', 'TruRisk & QVS/QDS Scoring', 'Vulnerability Assessment', 'Patch Management', 'Asset Tagging & CSAM', 'Threat Prioritization']
  },
  {
    id: 'google-python',
    title: 'Google IT Automation with Python Professional',
    issuer: 'Google',
    image: '/certs/google-python.png',
    modalImage: '/certs/google-python-full.png',
    issueDate: 'July 2026',
    description: 'A comprehensive multi-course professional program developed by Google engineering. Validates hands-on proficiency in Python scripting, Git/GitHub version control, Linux system administration, and large-scale IT infrastructure automation.',
    difficulty: 'Advanced',
    effort: 'Requires passing rigorous programming assignments, mastering version control with Git, and automating system administration tasks with Python scripts.',
    badgeId: 'ac8499cf-025c-4b72-84b1-92f836ad95b7',
    verifyUrl: 'https://www.credly.com/badges/ac8499cf-025c-4b72-84b1-92f836ad95b7',
    skills: ['Python 3', 'Git & GitHub', 'System Automation', 'Bash/Linux CLI', 'Unit Testing', 'Configuration Management']
  },
  {
    id: 'google-cyber',
    title: 'Google Cybersecurity Professional',
    issuer: 'Google',
    image: '/certs/google-cyber.png',
    modalImage: '/certs/google-cyber-full.png',
    issueDate: 'July 2026',
    description: 'An industry-aligned professional credential covering enterprise cybersecurity operations, threat modeling, SIEM tool analysis, Linux network security, and defensive incident response workflows.',
    difficulty: 'Intermediate',
    effort: 'Requires completing multiple hands-on labs simulating real-world security breaches, configuring firewalls, and analyzing packet captures.',
    badgeId: '851998ed-3d5b-4ed3-93b5-63ec5bb29e60',
    verifyUrl: 'https://www.credly.com/badges/851998ed-3d5b-4ed3-93b5-63ec5bb29e60',
    skills: ['SIEM (Splunk/Chronicle)', 'Network Security', 'Python for Security', 'Linux & SQL', 'Incident Detection', 'NIST Framework']
  },
  {
    id: 'aws-cloud',
    title: 'AWS Academy Graduate: Cloud Operations',
    issuer: 'Amazon Web Services',
    image: '/certs/aws-cloud.png',
    modalImage: '/certs/aws-cloud-full.png',
    issueDate: 'January 2026',
    description: 'Prepares IT professionals for enterprise cloud operations, focusing on deploying, managing, securing, and operating scalable, fault-tolerant infrastructure on Amazon Web Services (AWS).',
    difficulty: 'Advanced',
    effort: 'Requires a deep understanding of AWS services, networking, and security, proven through complex infrastructure deployment labs.',
    badgeId: '8a510a04-b86d-4170-afc3-34e387a1a4e7',
    verifyUrl: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-aws-academy-cloud-operations',
    skills: ['AWS EC2 & S3', 'IAM & Security Policies', 'VPC & Networking', 'CloudWatch Monitoring', 'High Availability']
  },
  {
    id: 'microsoft-excel',
    title: 'Microsoft Office Specialist: Excel Associate',
    issuer: 'Microsoft',
    image: '/certs/microsoft.png',
    modalImage: '/certs/microsoft-full.png',
    issueDate: '2024',
    description: 'Validates professional mastery in advanced spreadsheet engineering, nested formula logic, dynamic data modeling, workbook optimization, and executive reporting analytics.',
    difficulty: 'Intermediate',
    effort: 'Requires passing a strict, timed, proctored exam demonstrating mastery over advanced data manipulation and complex nested formulas.',
    badgeId: '47299149',
    verifyUrl: 'https://verify.certiport.com',
    skills: ['Advanced Formulas', 'Data Analysis', 'Pivot Tables & Charts', 'Lookup Functions', 'Workbook Optimization']
  },
  {
    id: 'cisco-ethical',
    title: 'Ethical Hacker',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-ethical.png',
    modalImage: '/certs/cisco-ethical-full.png',
    issueDate: 'July 2025',
    description: 'Offensive security certification focusing on penetration testing methodologies, network reconnaissance, vulnerability identification, exploitation techniques, and defensive hardening.',
    difficulty: 'Advanced',
    effort: 'Requires passing intensive penetration testing labs, mastering reconnaissance, scanning, gaining access, and covering tracks.',
    badgeId: 'b5d36473-5cfb-4281-85ea-a4f26ae85439',
    verifyUrl: 'https://www.credly.com/badges/b5d36473-5cfb-4281-85ea-a4f26ae85439',
    skills: ['Penetration Testing', 'Reconnaissance & Footprinting', 'Vulnerability Exploitation', 'Post-Exploitation', 'Threat Remediation']
  },
  {
    id: 'cisco-linux',
    title: 'Linux Essentials',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-linux.png',
    modalImage: '/certs/cisco-linux-full.png',
    issueDate: '2025',
    description: 'Validates foundational and practical knowledge of open-source Linux operating systems, terminal file management, permission structures, process handling, and Bash scripting.',
    difficulty: 'Intermediate',
    effort: 'Requires navigating the Linux command line, managing files, understanding permissions, and basic bash scripting.',
    badgeId: 'dd8c9f3f-ebc3-4b1c-bafe-ba3721074683',
    verifyUrl: 'https://www.credly.com/badges/dd8c9f3f-ebc3-4b1c-bafe-ba3721074683',
    skills: ['Linux Kernel & Shell', 'File Permissions & Users', 'Bash Scripting', 'Package Management', 'Process Control']
  },
  {
    id: 'cisco-networking',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-networking.png',
    modalImage: '/certs/cisco-networking-full.png',
    issueDate: '2025',
    description: 'Covers the core architecture, protocols, models (OSI and TCP/IP), IPv4/IPv6 addressing schemes, and subnetting strategies used to power modern enterprise networks.',
    difficulty: 'Intermediate',
    effort: 'Requires understanding the OSI and TCP/IP models, IP addressing, and configuring basic network topologies.',
    badgeId: '3fd3c79f-1906-4631-a788-986747166767',
    verifyUrl: 'https://www.credly.com/badges/3fd3c79f-1906-4631-a788-986747166767',
    skills: ['OSI & TCP/IP Models', 'IPv4 & IPv6 Subnetting', 'Cisco IOS CLI', 'Routing & Switching Basics', 'Topology Design']
  },
  {
    id: 'cisco-os-basics',
    title: 'Operating Systems Basics',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-os-basics.png',
    modalImage: '/certs/cisco-os-basics-full.png',
    issueDate: '2025',
    description: 'Provides in-depth knowledge of operating system architectures, memory management, process synchronization, security perimeters, and cross-platform management.',
    difficulty: 'Beginner',
    effort: 'Requires grasping process management, memory management, and file systems across Windows and Linux environments.',
    badgeId: 'f7bc993d-1a03-4257-af44-911cce59d82a',
    verifyUrl: 'https://www.credly.com/badges/f7bc993d-1a03-4257-af44-911cce59d82a',
    skills: ['Process Scheduling', 'Virtual Memory & File Systems', 'Windows & Linux Admin', 'Hardware Abstraction']
  },
  {
    id: 'cisco-hardware',
    title: 'Computer Hardware Basics',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-hardware.png',
    modalImage: '/certs/cisco-hardware-full.png',
    issueDate: '2025',
    description: 'Focuses on motherboard architectures, CPU/GPU subsystems, storage bus technologies, memory configurations, diagnostics, and component lifecycle maintenance.',
    difficulty: 'Beginner',
    effort: 'Requires identifying components, understanding their functions, and solving practical hardware failure scenarios.',
    badgeId: '5d7f447d-c596-49f3-b780-cfb8a831c15d',
    verifyUrl: 'https://www.credly.com/badges/5d7f447d-c596-49f3-b780-cfb8a831c15d',
    skills: ['PC Architecture', 'Motherboard & CPU Diagnostics', 'Storage & RAID', 'Hardware Assembly & Safety']
  },
  {
    id: 'cisco-ite',
    title: 'IT Essentials',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-ite.png',
    modalImage: '/certs/cisco-ite-full.png',
    issueDate: '2025',
    description: 'Comprehensive curriculum spanning computer hardware, operating systems, mobile devices, security basics, networking protocols, and enterprise troubleshooting.',
    difficulty: 'Intermediate',
    effort: 'Requires passing extensive theoretical exams and practical labs covering hardware diagnostics and software configurations.',
    badgeId: '8c6d1b2e-3905-424e-ae40-0cffdded1655',
    verifyUrl: 'https://www.credly.com/badges/8c6d1b2e-3905-424e-ae40-0cffdded1655',
    skills: ['Hardware & Software Diagnostics', 'Operating System Installation', 'Networking Setup', 'Client Security Protocols']
  },
  {
    id: 'cisco-ai',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-ai.png',
    modalImage: '/certs/cisco-ai-full.png',
    issueDate: '2026',
    description: 'Explores artificial intelligence paradigms, neural networks, machine learning algorithms, large language models (LLMs), and ethical AI deployment in enterprise environments.',
    difficulty: 'Intermediate',
    effort: 'Requires grasping the concepts of neural networks, data modeling, and ethical considerations in AI deployment.',
    badgeId: 'b0527a73-a92c-4ab2-85dd-27e529084793',
    verifyUrl: 'https://www.credly.com/badges/b0527a73-a92c-4ab2-85dd-27e529084793',
    skills: ['Neural Networks', 'Machine Learning Workflows', 'Generative AI & LLMs', 'AI Ethics & Deployment']
  },
  {
    id: 'cisco-iot',
    title: 'Introduction to IoT',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-iot.png',
    modalImage: '/certs/cisco-iot-full.png',
    issueDate: '2025',
    description: 'Covers edge device sensors, embedded architectures, industrial telemetry, wireless IoT standards, and telemetry data pipeline integration with cloud backends.',
    difficulty: 'Beginner',
    effort: 'Requires understanding IoT architectures, sensor networks, and data flow from edge devices to the cloud.',
    badgeId: '14ff4624-5864-47c4-8068-2b35bbd08f8c',
    verifyUrl: 'https://www.credly.com/badges/14ff4624-5864-47c4-8068-2b35bbd08f8c',
    skills: ['Sensor Architectures', 'Edge Computing', 'Microcontrollers & Telemetry', 'IoT Security Fundamentals']
  },
  {
    id: 'cisco-data-science',
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-data-science.png',
    modalImage: '/certs/cisco-data-science-full.png',
    issueDate: '2025',
    description: 'Provides practical grounding in statistical data analysis, data cleaning pipelines, exploratory visualization, and extracting predictive patterns using Python data stacks.',
    difficulty: 'Intermediate',
    effort: 'Requires applying statistical methods and utilizing Python libraries to extract insights from raw datasets.',
    badgeId: 'e96f5357-69b0-4416-ad9d-d51818948396',
    verifyUrl: 'https://www.credly.com/badges/e96f5357-69b0-4416-ad9d-d51818948396',
    skills: ['Data Cleaning & Wrangling', 'Python Analytics', 'Exploratory Data Analysis', 'Statistical Inference']
  },
  {
    id: 'cisco-data-analytics',
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-data-analytics.png',
    modalImage: '/certs/cisco-data-analytics-full.png',
    issueDate: '2025',
    description: 'Focuses on analytical reasoning, structured SQL queries, data warehousing concepts, and converting complex enterprise datasets into actionable intelligence.',
    difficulty: 'Intermediate',
    effort: 'Requires building data pipelines, cleaning datasets, and generating comprehensive reports using analytics tools.',
    badgeId: '87cb6c58-e1d1-48c7-96d6-bf68b7b1f243',
    verifyUrl: 'https://www.credly.com/badges/87cb6c58-e1d1-48c7-96d6-bf68b7b1f243',
    skills: ['Data Pipelines', 'SQL Data Extraction', 'Visual Reporting', 'KPI Metric Modeling']
  },
  {
    id: 'cisco-cyber',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-cyber.png',
    modalImage: '/certs/cisco-cyber-full.png',
    issueDate: '2025',
    description: 'Explores global cyber threat landscapes, malware categories, defense-in-depth principles, cryptography foundations, and enterprise data privacy protection.',
    difficulty: 'Beginner',
    effort: 'Requires understanding core security principles, threat vectors, and basic mitigation strategies.',
    badgeId: '437f35d9-be6e-42d4-90f7-3b221725e2d5',
    verifyUrl: 'https://www.credly.com/badges/437f35d9-be6e-42d4-90f7-3b221725e2d5',
    skills: ['CIA Triad', 'Malware Analysis', 'Authentication & Cryptography', 'Defense-in-Depth']
  },
  {
    id: 'cisco-digital-awareness',
    title: 'Digital Awareness',
    issuer: 'Cisco Networking Academy',
    image: '/certs/cisco-digital-awareness.png',
    modalImage: '/certs/cisco-digital-awareness-full.png',
    issueDate: '2025',
    description: 'Focuses on digital identity defense, privacy regulations, safe organizational communication, and mitigating social engineering and phishing tactics.',
    difficulty: 'Beginner',
    effort: 'Requires demonstrating proficiency in digital communication, privacy, and online safety best practices.',
    badgeId: 'c425f47e-9cb1-4262-95a2-e55f5f630cc4',
    verifyUrl: 'https://www.credly.com/badges/c425f47e-9cb1-4262-95a2-e55f5f630cc4',
    skills: ['Digital Footprint Defense', 'Data Privacy Regulations', 'Phishing & Threat Identification', 'Safe Collaboration']
  },
  {
    id: 'fit-dbms',
    title: 'Smartbooks & Power BI DBMS',
    issuer: 'FIT Academy',
    image: '/certs/fit-academy.png',
    modalImage: '/certs/fit-academy-full.png',
    issueDate: '2025',
    description: 'Specialized enterprise training in relational database schema design, normalized data modeling, DAX query logic, and dynamic Microsoft Power BI dashboard development.',
    difficulty: 'Advanced',
    effort: 'Requires designing complex relational databases and building interactive, dynamic Power BI dashboards from scratch.',
    badgeId: '4abc3aebb5b251a9a4fc3fbbf7a4113023300bb9ec39e6efc4c7b57705c9d749',
    verifyUrl: '#',
    skills: ['Relational DB Design', 'Power BI Dashboards', 'DAX Calculations', 'Data Modeling', 'Business Intelligence']
  },
  {
    id: 'eastwest-cyber1',
    title: 'Introduction to Cybersecurity 1',
    issuer: 'East West',
    image: '/certs/eastwest-cyber.png',
    modalImage: '/certs/eastwest-cyber-full.png',
    issueDate: '2024',
    description: 'Foundational certification covering the core pillars of organizational security, risk governance, perimeter defense controls, and access management standards.',
    difficulty: 'Beginner',
    effort: 'Requires understanding the CIA triad, risk management, and fundamental access control mechanisms.',
    badgeId: '55dd99a5-f7ff-41d4-8076-484f2fb80e0d',
    verifyUrl: '#',
    skills: ['Information Assurance', 'Risk Management', 'Security Policies & Audits', 'Access Controls']
  }
];

function FadeInSection(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Only animate once
          if(domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

// Magnetic Button Hook
function useMagnetic() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Calculate pull based on distance
      const distance = Math.sqrt(x*x + y*y);
      if (distance < 100) {
        element.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      } else {
        element.style.transform = `translate(0px, 0px)`;
      }
    };

    const handleMouseLeave = () => {
      element.style.transform = `translate(0px, 0px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (element) element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}

function App() {
  const [activeCert, setActiveCert] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [formStatus, setFormStatus] = useState('');
  const [copiedId, setCopiedId] = useState(false);

  const handleCopyId = (id) => {
    if (!id) return;
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };
  
  // Custom Cursor logic
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const magBtn1 = useMagnetic();
  const magBtn2 = useMagnetic();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable elements
      const target = e.target;
      if (target.closest('a') || target.closest('button') || target.closest('.clickable-card')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending secure message...');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/marcangelguevarra@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setFormStatus('Message securely sent! (Check your email for 1st-time activation)');
        e.target.reset();
      } else {
        setFormStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      setFormStatus('Error sending message. Please try again.');
    }
  };

  const openCertModal = (cert) => {
    setActiveCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeCertModal = () => {
    setActiveCert(null);
    document.body.style.overflow = 'unset';
  };

  const openProjectModal = (project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'unset';
  };

  const openSkillModal = (skill) => {
    setActiveSkill(skill);
    document.body.style.overflow = 'hidden';
  };

  const closeSkillModal = () => {
    setActiveSkill(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`} 
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      ></div>

      <nav className="navbar glass-panel">
        <div className="nav-content container">
          <h2 className="logo">Mark.</h2>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#timeline">Journey</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container">
        
        <FadeInSection>
          <section id="hero" className="hero-section">
            <Particles 
              id="tsparticles" 
              init={particlesInit} 
              options={{
                fullScreen: { enable: false, zIndex: -1 },
                background: { color: "transparent" },
                particles: {
                  number: { value: 40, density: { enable: true, value_area: 800 } },
                  color: { value: ["#c084fc", "#00f0ff"] },
                  links: { enable: true, color: "#ffffff", opacity: 0.1, distance: 150 },
                  move: { enable: true, speed: 1 },
                  size: { value: { min: 1, max: 3 } },
                  opacity: { value: 0.3 }
                },
                interactivity: {
                  events: {
                    onHover: { enable: true, mode: "grab" },
                  },
                  modes: { grab: { distance: 140, links: { opacity: 0.5 } } }
                }
              }}
              className="particles-canvas"
            />
            
            <img src="/profile.jpg" alt="Mark Angel Guevarra" className="profile-pic" />
            <h1 className="hero-title">
              Hi, I'm <span className="highlight-cyan">Mark Angel</span>.<br/>
              I build <span className="highlight-purple">Secure & Automated</span> Systems.
            </h1>
            
            <div className="hero-subtitle type-wrap">
              <TypeAnimation
                sequence={[
                  '> IT Operations & Security Intern @ Telework PH_',
                  1500,
                  '> Cybersecurity & Threat Analyst_',
                  1500,
                  '> Qualys Certified Specialist (VMDR)_',
                  1500,
                  '> Cisco & AWS Certified Professional_',
                  1500,
                ]}
                wrapper="span"
                speed={75}
                repeat={Infinity}
                style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}
              />
            </div>
            
            <div className="hero-cta">
              <div ref={magBtn1} style={{transition: 'transform 0.1s ease-out'}}>
                <a href="#certifications" className="btn-primary">View Credentials</a>
              </div>
              <div ref={magBtn2} style={{transition: 'transform 0.1s ease-out'}}>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary resume-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Download Resume
                </a>
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="about" className="about-section">
            <div className="about-content glass-panel">
              <h2 className="section-title">About Me</h2>
              <p>
                Welcome! I'm <strong>Mark Angel Guevarra</strong>, a passionate Information Technology professional specializing in Cybersecurity, Network Administration, Vulnerability Management, and IT Automation. With a strong foundation in building secure, scalable systems, I thrive at the intersection of enterprise infrastructure and technical innovation.
              </p>
              <p>
                I hold a Bachelor of Science in Information Technology and am driven by continuous learning—having earned 19 industry-recognized certifications from global tech leaders like <strong>Qualys, Google, Cisco, AWS, and Microsoft</strong>. Currently contributing as an <strong>IT Operations & Security Intern at Telework PH</strong>, I actively apply my skills across enterprise hardware, Slack-driven helpdesk triage, vulnerability remediation, and network defense to create resilient digital environments.
              </p>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="timeline" className="timeline-section">
            <h2 className="section-title">Professional Journey</h2>
            <div className="timeline">
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <h3>IT Operations & Security Intern</h3>
                  <span className="timeline-date">Telework PH • Aug 2026 – Present</span>
                  <p>Supporting enterprise IT operations, hardware diagnostics, desktop provisioning, Slack helpdesk triage, and network troubleshooting in a fast-paced BPO environment.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <h3>Cybersecurity Analyst</h3>
                  <span className="timeline-date">Recent Focus</span>
                  <p>Specializing in vulnerability management (Qualys VMDR), threat mitigation, TruRisk scoring, and deploying robust IAM protocols to defend enterprise architectures.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <h3>Network Administrator</h3>
                  <span className="timeline-date">Applied Experience</span>
                  <p>Managing Cisco network topologies, configuring firewalls, and ensuring high-availability connections across diverse infrastructures.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-panel">
                  <h3>BS Information Technology</h3>
                  <span className="timeline-date">Educational Foundation</span>
                  <p>Developed a rigorous foundation in software engineering, database management, network security, and systems administration at Baliuag University.</p>
                </div>
              </div>

            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="skills" className="skills-section">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle" style={{textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem'}}>Click on any domain to view my specific capabilities.</p>
            <div className="skills-grid">
              {skillsData.map((skill) => (
                <div key={skill.id} className="skill-card glass-panel clickable-card" onClick={() => openSkillModal(skill)}>
                  <div className="skill-icon-container">
                    <skill.Icon />
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.shortDesc}</p>
                  <div className="cert-overlay">
                    <span>View Expertise</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="projects" className="projects-section">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projectsData.map((project) => (
                <div key={project.id} className="project-card glass-panel clickable-card" onClick={() => openProjectModal(project)}>
                  <div className="project-header">
                    <span className="project-icon">{project.icon}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech-list">
                    {project.tech.map((t, index) => (
                      <span key={index} className="tech-badge">{t}</span>
                    ))}
                  </div>
                  <div className="cert-overlay">
                    <span>View Project Details</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="certifications" className="certs-section">
            <h2 className="section-title">Featured Certifications</h2>
            <p className="section-subtitle" style={{textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem'}}>Click on any certification to view authenticity details.</p>
            <div className="certs-grid">
              
              {certData.map((cert) => (
                <div key={cert.id} className="cert-card glass-panel clickable-card" onClick={() => openCertModal(cert)}>
                  <img src={cert.image} alt={cert.title} className="cert-image" />
                  <div className="cert-header">
                    <h3>{cert.title}</h3>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                  <div className="cert-overlay">
                    <span>View Verification</span>
                  </div>
                </div>
              ))}

            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section id="contact" className="contact-section">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
              <div className="contact-info glass-panel">
                <h3>Let's Secure the Future</h3>
                <p>Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!</p>
                <div className="contact-details">
                  <a href="mailto:marcangelguevarra@gmail.com" className="contact-link clickable-card">
                    📧 marcangelguevarra@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/markangelguevarra" target="_blank" rel="noreferrer" className="contact-link clickable-card">
                    💼 LinkedIn Profile
                  </a>
                  <a href="https://github.com/MarkAngelGuevarra" target="_blank" rel="noreferrer" className="contact-link clickable-card">
                    🐙 GitHub Repositories
                  </a>
                </div>
              </div>
              
              <form className="contact-form glass-panel" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Hello Mark..."></textarea>
                </div>
                <button type="submit" className="btn-primary form-submit clickable-card">Send Message</button>
                {formStatus && <p style={{color: 'var(--accent-cyan)', marginTop: '1rem', fontWeight: '600'}}>{formStatus}</p>}
              </form>
            </div>
          </section>
        </FadeInSection>

      </main>
      
      <footer className="footer glass-panel" style={{marginTop: '0'}}>
        <div className="container footer-content">
          <p className="copyright">© 2026 Mark Angel Guevarra. Designed for Stellar.</p>
        </div>
      </footer>

      {/* Certification Modal */}
      {activeCert && (
        <div className="modal-backdrop" onClick={closeCertModal}>
          <div className="modal-content modal-large glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close clickable-card" onClick={closeCertModal}>✕</button>
            
            {/* Framed Certificate Preview */}
            <a 
              href={activeCert.modalImage || activeCert.image} 
              target="_blank" 
              rel="noreferrer" 
              title="Click to expand high-resolution certificate"
              className="cert-showcase-frame clickable-card"
            >
              <img 
                src={activeCert.modalImage || activeCert.image} 
                alt={activeCert.title} 
                className="cert-showcase-img" 
              />
              <span className="cert-zoom-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                Click to Expand Full Credential
              </span>
            </a>
            
            {/* Header and Badges */}
            <div className="modal-project-header">
              <h2 className="modal-title" style={{ fontSize: '1.6rem', marginBottom: '0.6rem' }}>{activeCert.title}</h2>
              <div className="modal-meta-row">
                <span className="cert-issuer modal-issuer">{activeCert.issuer}</span>
                <span className="cert-status-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Verified & Active Credential
                </span>
                {activeCert.issueDate && (
                  <span className="modal-date-badge">📅 {activeCert.issueDate}</span>
                )}
                <span className={`difficulty-badge ${activeCert.difficulty.toLowerCase()}`}>
                  {activeCert.difficulty} Level
                </span>
              </div>
            </div>

            {/* Overview Section */}
            <div className="project-modal-section-title">
              <span>📜</span> Credential Overview
            </div>
            <p className="cert-overview-box">{activeCert.description}</p>

            {/* Skills & Competencies */}
            {activeCert.skills && activeCert.skills.length > 0 && (
              <>
                <div className="project-modal-section-title">
                  <span>🎯</span> Core Competencies Validated
                </div>
                <div className="cert-competencies-wrap">
                  {activeCert.skills.map((skill, idx) => (
                    <span key={idx} className="cert-competency-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </>
            )}

            {/* Acquisition Rigor */}
            <div className="cert-rigor-card">
              <div className="cert-rigor-header">
                <h4>
                  <span>⚡</span> Curriculum Rigor & Examination Criteria
                </h4>
              </div>
              <p className="cert-rigor-text">{activeCert.effort}</p>
            </div>

            {/* Verification Box */}
            <div className="cert-verification-card">
              <div className="cert-verification-top">
                <div className="credential-label-wrap">
                  <span className="credential-label">Official Credential ID</span>
                  <span className="credential-id-val">{activeCert.badgeId}</span>
                </div>
                <button 
                  className="copy-id-btn clickable-card"
                  onClick={() => handleCopyId(activeCert.badgeId)}
                >
                  {copiedId ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                      Copy ID
                    </>
                  )}
                </button>
              </div>

              {activeCert.verifyUrl && activeCert.verifyUrl !== '#' && (
                <a 
                  href={activeCert.verifyUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-primary cert-verify-action-btn clickable-card"
                >
                  Verify on Official Registry
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
            </div>

            <div className="project-modal-footer">
              <button className="btn-secondary clickable-card" onClick={closeCertModal}>
                Close Credential
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Skill Modal */}
      {activeSkill && (
        <div className="modal-backdrop" onClick={closeSkillModal}>
          <div className="modal-content glass-panel skill-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close clickable-card" onClick={closeSkillModal}>✕</button>
            
            <div className="modal-skill-icon-wrap">
               <activeSkill.Icon />
            </div>

            <div className="modal-header">
              <h2 className="modal-title" style={{color: 'var(--accent-cyan)'}}>{activeSkill.title}</h2>
            </div>
            
            <div className="skill-focus-box">
              <h3>Core Focus</h3>
              <p>{activeSkill.focus}</p>
            </div>

            <div className="skill-details">
              <h3>Technical Execution</h3>
              <p>{activeSkill.details}</p>
            </div>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {activeProject && (
        <div className="modal-backdrop" onClick={closeProjectModal}>
          <div className="modal-content modal-large glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close clickable-card" onClick={closeProjectModal}>✕</button>
            
            <div className="modal-project-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '2rem' }}>{activeProject.icon}</span>
                <h2 className="modal-title">{activeProject.title}</h2>
              </div>
              <div className="modal-meta-row">
                <span className="cert-issuer modal-issuer">{activeProject.category}</span>
                {activeProject.role && (
                  <span className="modal-role-badge">👤 {activeProject.role}</span>
                )}
                {activeProject.date && (
                  <span className="modal-date-badge">📅 {activeProject.date}</span>
                )}
              </div>
            </div>

            <div className="project-modal-section-title">
              <span>📋</span> Executive Summary
            </div>
            <p className="project-modal-overview">{activeProject.description}</p>
            
            {activeProject.highlights && activeProject.highlights.length > 0 && (
              <>
                <div className="project-modal-section-title">
                  <span>⚡</span> Key Technical Highlights
                </div>
                <div className="project-highlights-box">
                  <ul className="project-highlights-list">
                    {activeProject.highlights.map((item, idx) => (
                      <li key={idx}>
                        <span className="highlight-bullet">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}

            <div className="project-modal-section-title">
              <span>🛠️</span> Technologies & Competencies
            </div>
            <div className="project-tech-list" style={{ marginBottom: '1.75rem' }}>
              {activeProject.tech.map((t, idx) => (
                <span key={idx} className="tech-badge" style={{ background: 'rgba(34, 211, 238, 0.1)', color: 'var(--text-primary)', borderColor: 'rgba(34, 211, 238, 0.25)', fontWeight: '600' }}>
                  {t}
                </span>
              ))}
            </div>

            {activeProject.gallery && activeProject.gallery.length > 0 && (
              <>
                <div className="project-modal-section-title">
                  <span>📸</span> Photographic Evidence & Field Documentation
                </div>
                <div className="project-gallery-container">
                  {activeProject.gallery.map((item, idx) => (
                    <div key={idx} className="gallery-card">
                      <div className="gallery-img-wrap">
                        <img 
                          src={item.src} 
                          alt={item.title} 
                          className="gallery-img" 
                        />
                        {item.tag && <span className="gallery-badge">{item.tag}</span>}
                      </div>
                      <div className="gallery-info">
                        <h4 className="gallery-title">{item.title}</h4>
                        <p className="gallery-desc">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="project-modal-footer">
              {activeProject.github && (
                <a href={activeProject.github} target="_blank" rel="noreferrer" className="btn-primary clickable-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub Repository
                </a>
              )}
              <button className="btn-secondary clickable-card" onClick={closeProjectModal}>
                Close Overview
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default App

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
    id: 'gigpay',
    title: 'GigPay Escrow Marketplace',
    category: 'Web3 & Blockchain',
    icon: '⛓️',
    description: 'A decentralized, zero-fee escrow marketplace built natively on the Stellar blockchain for global freelancers. Features an AI estimator, smart contract escrow, and Supabase real-time sync.',
    tech: ['Stellar', 'Smart Contracts', 'React', 'Supabase'],
    images: ['/projects/gigpay.png']
  },
  {
    id: 'klasspay',
    title: 'KlassPay Decentralized Split-Payment Engine',
    category: 'Web3 & Fintech',
    icon: '💸',
    description: 'Built and deployed a full-stack decentralized application on the Stellar blockchain using Soroban smart contracts. Implemented FeeBumpTransactions to provide a gasless Web2-like experience. Engineered the frontend using React and Vite, managing on-chain state to securely track pooled funds and organizer withdrawals.',
    tech: ['React', 'Vite', 'Soroban', 'Stellar', 'Web3']
  },
  {
    id: 'sorobanauditor',
    title: 'SorobanAuditor Security Scanner',
    category: 'Cybersecurity & Web3',
    icon: '🛡️',
    description: 'Engineered a hybrid SAST CLI tool in Python to statically analyze Rust-based Stellar Soroban smart contracts. Leveraged AST parsing to inspect contract logic prior to deployment. Implemented automated vulnerability detection mapped to CWE standards for hardcoded secrets and authorization bypasses.',
    tech: ['Python', 'AST Parsing', 'SAST', 'CLI']
  },
  {
    id: 'cisco-congress',
    title: 'Cisco Student Congress',
    category: 'Cybersecurity & Networking',
    icon: '🏆',
    description: 'Selected to represent Baliuag University at the 2026 Cisco Congress in Pampanga. Solved physical routing and cybersecurity CTF challenges using enterprise Cisco equipment.',
    tech: ['Cisco iOS', 'Cybersecurity', 'CTF', 'Routing'],
    images: ['/projects/cisco-1.jpg', '/projects/cisco-2.jpg']
  },
  {
    id: 'packet-tracer',
    title: 'Enterprise Network Topology',
    category: 'Cisco Networking',
    icon: '🌐',
    description: 'Designed and simulated a comprehensive enterprise network architecture using Cisco Packet Tracer. Implemented VLANs, OSPF routing, and ACLs for secure subnetwork communication.',
    tech: ['Cisco iOS', 'OSPF', 'VLAN', 'ACL']
  },
  {
    id: 'securesync',
    title: 'SecureSync Implementation',
    category: 'Cybersecurity',
    icon: '🔐',
    description: 'Deployed a robust identity and access management framework enforcing zero-trust principles. Automated credential rotation and integrated multi-factor authentication protocols.',
    tech: ['IAM', 'Python', 'Cryptography', 'Bash']
  },
  {
    id: 'mms',
    title: 'Maintenance Monitoring System',
    category: 'IT Automation & Analytics',
    icon: '📈',
    description: 'Developed an MVP for a centralized IT monitoring dashboard. Aggregates system health metrics, automates alert dispatching, and visualizes uptime data via interactive reports.',
    tech: ['Power BI', 'SQL', 'Python Scripts']
  }
];

const certData = [
  {
    id: 'google-python',
    title: 'Google IT Automation with Python',
    issuer: 'Google',
    image: '/certs/google-python.png',
    modalImage: '/certs/google-python-full.png',
    description: 'This six-course certificate, developed by Google, is designed to provide IT professionals with in-demand skills -- including Python, Git, and IT automation.',
    difficulty: 'Advanced',
    effort: 'Requires passing rigorous programming assignments, mastering version control with Git, and automating system administration tasks with Python scripts.',
    badgeId: 'ac8499cf-025c-4b72-84b1-92f836ad95b7',
    verifyUrl: 'https://www.credly.com/badges/ac8499cf-025c-4b72-84b1-92f836ad95b7'
  },
  {
    id: 'google-cyber',
    title: 'Google Cybersecurity Professional',
    issuer: 'Google',
    image: '/certs/google-cyber.png',
    modalImage: '/certs/google-cyber-full.png',
    description: 'A comprehensive program covering the fundamental concepts of cybersecurity, including network security, Linux, SQL, and SIEM tools.',
    difficulty: 'Intermediate',
    effort: 'Requires completing multiple hands-on labs simulating real-world security breaches, configuring firewalls, and analyzing packet captures.',
    badgeId: '851998ed-3d5b-4ed3-93b5-63ec5bb29e60',
    verifyUrl: 'https://www.credly.com/badges/851998ed-3d5b-4ed3-93b5-63ec5bb29e60'
  },
  {
    id: 'aws-cloud',
    title: 'AWS Academy Cloud Operations',
    issuer: 'AWS',
    image: '/certs/aws-cloud.png',
    modalImage: '/certs/aws-cloud-full.png',
    description: 'Prepares students for entry-level cloud computing careers, focusing on deploying, managing, and operating scalable systems on AWS.',
    difficulty: 'Advanced',
    effort: 'Requires a deep understanding of AWS services, networking, and security, proven through complex infrastructure deployment labs.',
    badgeId: 'AWS Academy Graduate',
    verifyUrl: '#'
  },
  {
    id: 'microsoft-excel',
    title: 'Microsoft Office Specialist: Excel Associate',
    issuer: 'Microsoft',
    image: '/certs/microsoft.png',
    modalImage: '/certs/microsoft-full.png',
    description: 'Validates skills in creating and managing worksheets and workbooks, creating cells and ranges, creating tables, and applying formulas and functions.',
    difficulty: 'Intermediate',
    effort: 'Requires passing a strict, timed, proctored exam demonstrating mastery over advanced data manipulation and complex nested formulas.',
    badgeId: '47299149',
    verifyUrl: 'https://verify.certiport.com'
  },
  {
    id: 'cisco-cyber',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    image: '/certs/cisco-cyber.png',
    modalImage: '/certs/cisco-cyber-full.png',
    description: 'Explores cyber trends, threats, and staying safe in cyberspace, protecting personal and company data.',
    difficulty: 'Beginner',
    effort: 'Requires understanding core security principles, threat vectors, and basic mitigation strategies.',
    badgeId: '437f35d9-be6e-42d4-90f7-3b221725e2d5',
    verifyUrl: 'https://www.credly.com/badges/437f35d9-be6e-42d4-90f7-3b221725e2d5'
  },
  {
    id: 'cisco-ethical',
    title: 'Ethical Hacker',
    issuer: 'Cisco',
    image: '/certs/cisco-ethical.png',
    modalImage: '/certs/cisco-ethical-full.png',
    description: 'Focuses on offensive security tactics to discover and patch vulnerabilities before malicious actors can exploit them.',
    difficulty: 'Advanced',
    effort: 'Requires passing intensive penetration testing labs, mastering reconnaissance, scanning, gaining access, and covering tracks.',
    badgeId: 'b5d36473-5cfb-4281-85ea-a4f26ae85439',
    verifyUrl: 'https://www.credly.com/badges/b5d36473-5cfb-4281-85ea-a4f26ae85439'
  },
  {
    id: 'cisco-linux',
    title: 'Linux Essentials',
    issuer: 'Cisco',
    image: '/certs/cisco-linux.png',
    modalImage: '/certs/cisco-linux-full.png',
    description: 'Validates foundational knowledge in the Linux operating system and open-source software.',
    difficulty: 'Intermediate',
    effort: 'Requires navigating the Linux command line, managing files, understanding permissions, and basic bash scripting.',
    badgeId: 'dd8c9f3f-ebc3-4b1c-bafe-ba3721074683',
    verifyUrl: 'https://www.credly.com/badges/dd8c9f3f-ebc3-4b1c-bafe-ba3721074683'
  },
  {
    id: 'cisco-networking',
    title: 'Networking Basics',
    issuer: 'Cisco',
    image: '/certs/cisco-networking.png',
    modalImage: '/certs/cisco-networking-full.png',
    description: 'Covers the architecture, structure, functions, components, and models of the Internet and other computer networks.',
    difficulty: 'Intermediate',
    effort: 'Requires understanding the OSI and TCP/IP models, IP addressing, and configuring basic network topologies.',
    badgeId: '3fd3c79f-1906-4631-a788-986747166767',
    verifyUrl: 'https://www.credly.com/badges/3fd3c79f-1906-4631-a788-986747166767'
  },
  {
    id: 'cisco-os-basics',
    title: 'Operating Systems Basics',
    issuer: 'Cisco',
    image: '/certs/cisco-os-basics.png',
    modalImage: '/certs/cisco-os-basics-full.png',
    description: 'Provides a foundational understanding of operating system configuration and management.',
    difficulty: 'Beginner',
    effort: 'Requires grasping process management, memory management, and file systems across Windows and Linux environments.',
    badgeId: 'f7bc993d-1a03-4257-af44-911cce59d82a',
    verifyUrl: 'https://www.credly.com/badges/f7bc993d-1a03-4257-af44-911cce59d82a'
  },
  {
    id: 'cisco-hardware',
    title: 'Computer Hardware Basics',
    issuer: 'Cisco',
    image: '/certs/cisco-hardware.png',
    modalImage: '/certs/cisco-hardware-full.png',
    description: 'Focuses on the internal components of a computer, assembling a system, and troubleshooting hardware issues.',
    difficulty: 'Beginner',
    effort: 'Requires identifying components, understanding their functions, and solving practical hardware failure scenarios.',
    badgeId: '5d7f447d-c596-49f3-b780-cfb8a831c15d',
    verifyUrl: 'https://www.credly.com/badges/5d7f447d-c596-49f3-b780-cfb8a831c15d'
  },
  {
    id: 'cisco-ite',
    title: 'IT Essentials',
    issuer: 'Cisco',
    image: '/certs/cisco-ite.png',
    modalImage: '/certs/cisco-ite-full.png',
    description: 'A comprehensive curriculum covering PC hardware and software, mobile devices, networking, and troubleshooting.',
    difficulty: 'Intermediate',
    effort: 'Requires passing extensive theoretical exams and practical labs covering hardware diagnostics and software configurations.',
    badgeId: '8c6d1b2e-3905-424e-ae40-0cffdded1655',
    verifyUrl: 'https://www.credly.com/badges/8c6d1b2e-3905-424e-ae40-0cffdded1655'
  },
  {
    id: 'cisco-ai',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco',
    image: '/certs/cisco-ai.png',
    modalImage: '/certs/cisco-ai-full.png',
    description: 'Explores the foundations of Artificial Intelligence, Machine Learning, and their real-world applications.',
    difficulty: 'Intermediate',
    effort: 'Requires grasping the concepts of neural networks, data modeling, and ethical considerations in AI deployment.',
    badgeId: 'b0527a73-a92c-4ab2-85dd-27e529084793',
    verifyUrl: 'https://www.credly.com/badges/b0527a73-a92c-4ab2-85dd-27e529084793'
  },
  {
    id: 'cisco-iot',
    title: 'Introduction to IoT',
    issuer: 'Cisco',
    image: '/certs/cisco-iot.png',
    modalImage: '/certs/cisco-iot-full.png',
    description: 'Covers the Internet of Things, transforming digital business by connecting billions of smart devices.',
    difficulty: 'Beginner',
    effort: 'Requires understanding IoT architectures, sensor networks, and data flow from edge devices to the cloud.',
    badgeId: '14ff4624-5864-47c4-8068-2b35bbd08f8c',
    verifyUrl: 'https://www.credly.com/badges/14ff4624-5864-47c4-8068-2b35bbd08f8c'
  },
  {
    id: 'cisco-data-science',
    title: 'Introduction to Data Science',
    issuer: 'Cisco',
    image: '/certs/cisco-data-science.png',
    modalImage: '/certs/cisco-data-science-full.png',
    description: 'Provides a foundation in gathering, analyzing, and visualizing data to make informed decisions.',
    difficulty: 'Intermediate',
    effort: 'Requires applying statistical methods and utilizing Python libraries to extract insights from raw datasets.',
    badgeId: 'e96f5357-69b0-4416-ad9d-d51818948396',
    verifyUrl: 'https://www.credly.com/badges/e96f5357-69b0-4416-ad9d-d51818948396'
  },
  {
    id: 'cisco-digital-awareness',
    title: 'Digital Awareness',
    issuer: 'Cisco',
    image: '/certs/cisco-digital-awareness.png',
    modalImage: '/certs/cisco-digital-awareness-full.png',
    description: 'Focuses on responsible and secure use of digital technologies in professional environments.',
    difficulty: 'Beginner',
    effort: 'Requires demonstrating proficiency in digital communication, privacy, and online safety best practices.',
    badgeId: 'c425f47e-9cb1-4262-95a2-e55f5f630cc4',
    verifyUrl: 'https://www.credly.com/badges/c425f47e-9cb1-4262-95a2-e55f5f630cc4'
  },
  {
    id: 'cisco-data-analytics',
    title: 'Data Analytics Essentials',
    issuer: 'Cisco',
    image: '/certs/cisco-data-analytics.png',
    modalImage: '/certs/cisco-data-analytics-full.png',
    description: 'Covers the fundamentals of data analysis, focusing on transforming data into actionable insights.',
    difficulty: 'Intermediate',
    effort: 'Requires building data pipelines, cleaning datasets, and generating comprehensive reports using analytics tools.',
    badgeId: '87cb6c58-e1d1-48c7-96d6-bf68b7b1f243',
    verifyUrl: 'https://www.credly.com/badges/87cb6c58-e1d1-48c7-96d6-bf68b7b1f243'
  },
  {
    id: 'fit-dbms',
    title: 'Smartbooks & Power BI DBMS',
    issuer: 'FIT Academy',
    image: '/certs/fit-academy.png',
    modalImage: '/certs/fit-academy-full.png',
    description: 'Specialized training in database management and utilizing Microsoft Power BI for advanced business intelligence.',
    difficulty: 'Advanced',
    effort: 'Requires designing complex relational databases and building interactive, dynamic Power BI dashboards from scratch.',
    badgeId: '4abc3aebb5b251a9a4fc3fbbf7a4113023300bb9ec39e6efc4c7b57705c9d749',
    verifyUrl: '#'
  },
  {
    id: 'eastwest-cyber1',
    title: 'Introduction to Cybersecurity 1',
    issuer: 'East West',
    image: '/certs/eastwest-cyber.png',
    modalImage: '/certs/eastwest-cyber-full.png',
    description: 'Foundational training covering the primary pillars of information security and organizational defense.',
    difficulty: 'Beginner',
    effort: 'Requires understanding the CIA triad, risk management, and fundamental access control mechanisms.',
    badgeId: '55dd99a5-f7ff-41d4-8076-484f2fb80e0d',
    verifyUrl: '#'
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
                  '> Cybersecurity Analyst_',
                  1500,
                  '> Network Administrator_',
                  1500,
                  '> Cisco Certified Professional_',
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
                Welcome! I'm <strong>Mark Angel Guevarra</strong>, a passionate Information Technology professional specializing in Cybersecurity, Network Administration, and IT Automation. With a strong foundation in building secure, scalable systems, I thrive at the intersection of infrastructure and innovation.
              </p>
              <p>
                I hold a Bachelor of Science in Information Technology and am driven by continuous learning—having earned 18 industry-recognized certifications from tech leaders like <strong>Google, Cisco, AWS, and Microsoft</strong>. Whether it's defending networks against emerging threats, automating complex workflows with Python, or engineering cloud solutions, I am dedicated to creating secure and highly efficient digital environments.
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
                  <h3>Cybersecurity Analyst</h3>
                  <span className="timeline-date">Recent Focus</span>
                  <p>Specializing in penetration testing, threat mitigation, and deploying robust IAM protocols to defend enterprise architectures.</p>
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
                  <p>Developed a rigorous foundation in software engineering, database management, and systems administration.</p>
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
                  <a href="https://www.linkedin.com/in/mark-angel-guevarra/" target="_blank" rel="noreferrer" className="contact-link clickable-card">
                    💼 LinkedIn Profile
                  </a>
                  <a href="https://github.com/Markyy0411" target="_blank" rel="noreferrer" className="contact-link clickable-card">
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
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close clickable-card" onClick={closeCertModal}>✕</button>
            <a href={activeCert.modalImage || activeCert.image} target="_blank" rel="noreferrer" title="Click to view full size">
              <img src={activeCert.modalImage || activeCert.image} alt={activeCert.title} className="modal-image clickable-card" />
            </a>
            
            <div className="modal-header">
              <h2 className="modal-title">{activeCert.title}</h2>
              <span className="cert-issuer modal-issuer">{activeCert.issuer}</span>
            </div>
            
            <p className="modal-description">{activeCert.description}</p>
            
            <div className="verification-box">
              <div className="verification-info">
                <span className="verification-label">Credential ID</span>
                <span className="verification-id">{activeCert.badgeId}</span>
              </div>
              <a href={activeCert.verifyUrl} target="_blank" rel="noreferrer" className="btn-primary verify-btn clickable-card">
                Verify Authenticity
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>

            <div className="modal-difficulty-box">
              <div className="difficulty-header">
                <h3>Acquisition Effort</h3>
                <span className={`difficulty-badge ${activeCert.difficulty.toLowerCase()}`}>
                  {activeCert.difficulty}
                </span>
              </div>
              <p className="modal-effort">{activeCert.effort}</p>
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
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close clickable-card" onClick={closeProjectModal}>✕</button>
            <div className="modal-header">
              <h2 className="modal-title">{activeProject.title}</h2>
              <span className="cert-issuer modal-issuer">{activeProject.category}</span>
            </div>
            <p className="modal-description" style={{marginTop: '1rem', marginBottom: '1.5rem'}}>{activeProject.description}</p>
            
            {activeProject.images && (
              <div className="project-modal-gallery" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                {activeProject.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`Project Event ${idx+1}`} style={{ width: '100%', maxHeight: '350px', borderRadius: '8px', objectFit: 'contain', border: '1px solid rgba(255,255,255,0.1)' }} />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default App

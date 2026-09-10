export const projectsData = [
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
        src: '/projects/gigpay-2.png',
        title: 'Instant Gig Payouts & Zero-Middlemen Portal',
        tag: 'Decentralized Platform',
        description: 'Primary landing interface for APAC gig workers highlighting sub-5-second USDC cross-border settlements, Soroban smart escrow, and zero platform commissions.'
      },
      {
        src: '/projects/gigpay.png',
        title: 'GigPay Escrow Agreements & Milestone Dashboard',
        tag: 'Platform Architecture',
        description: 'User interface demonstrating active freelance agreements, cryptographic milestone validation, and transparent on-chain escrow transaction auditing.'
      }
    ],
    demo: 'https://gigpay-gules.vercel.app',
    github: 'https://github.com/MarkAngelGuevarra/gigpay'
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
    gallery: [
      {
        src: '/projects/klasspay-3.png',
        title: 'Decentralized Split Payments & Zero Gas Pooling Engine',
        tag: 'APAC Hackathon Showcase',
        description: 'Primary landing and protocol interface built for the APAC Stellar Hackathon, highlighting trustless pooling on Soroban, gasless UX with FeeBumpTransactions, and local fiat offramp integration.'
      },
      {
        src: '/projects/klasspay-1.png',
        title: 'KlassPay Web3 Application & Pooling Interface',
        tag: 'Platform UI',
        description: 'Decentralized split-payment application interface featuring gasless FeeBumpTransaction sponsorship, trustless pooling milestones, and local fiat e-wallet offramp integration.'
      },
      {
        src: '/projects/klasspay-2.png',
        title: 'APAC Stellar Demo Day Manila Selection',
        tag: 'Demo Day Finalist',
        description: 'Selected project submission showcased at the APAC Stellar Demo Day Manila hosted at the GCash Office, competing for the $60,000 regional prize pool.'
      }
    ],
    demo: 'https://klass-pay.vercel.app',
    github: 'https://github.com/MarkAngelGuevarra/klass-pay'
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
    github: 'https://github.com/MarkAngelGuevarra/soroban-auditor'
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
    ],
    github: 'https://github.com/MarkAngelGuevarra/Packet-Tracer-Labs',
    gallery: [
      {
        src: '/projects/packet-tracer.png',
        title: 'Cisco Network & Security Infrastructure Lab Repository',
        tag: 'CCNA & CyberOps Labs',
        description: 'Comprehensive enterprise networking repository containing fully configured Cisco Packet Tracer (.pkt/.pka) topologies, multi-area dynamic routing architectures, Layer 2 hardening, and VirtualBox CyberOps penetration testing environments.'
      }
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
    category: 'IT Automation & Operations',
    icon: '📈',
    role: 'Systems Analyst & Full-Stack Developer',
    date: '2025 – 2026',
    description: 'An enterprise campus facility maintenance, incident triage, and monitoring portal engineered for Baliuag University. Replaces manual paper-based facility requests with an automated, role-based digital workflow allowing students and faculty to log campus infrastructure faults, track ticketing lifecycles in real-time, coordinate with Facilities Management Services (FMS), and streamline campus operational dispatch.',
    tech: ['JavaScript', 'HTML5 / CSS3', 'Vercel Edge Cloud', 'RESTful Workflows', 'Role-Based Access (RBAC)', 'ITSM & Ticketing', 'UI/UX Design'],
    highlights: [
      'Digitized institutional maintenance workflows for Baliuag University, eliminating paper delays and accelerating ticket triage.',
      'Designed role-based access control (RBAC) separating student and faculty requesters from FMS administrative dispatchers.',
      'Implemented real-time ticket metric tracking, campus building/room routing, calendar scheduling, and direct in-app messaging.',
      'Architected and deployed the production prototype on Vercel with automated continuous deployment and edge caching.'
    ],
    demo: 'https://mms-prototype-liart.vercel.app',
    github: 'https://github.com/MarkAngelGuevarra/mms-prototype',
    gallery: [
      {
        src: '/projects/mms-1.png',
        title: 'Baliuag University Authentication & Role Gate',
        tag: 'Authentication Portal',
        description: 'Official Baliuag University branded authentication portal supporting institutional (@baliuagu.edu.ph) identity verification, role-specific session gating (Student/Faculty vs FMS Administrator), and password recovery workflows.'
      },
      {
        src: '/projects/mms-2.png',
        title: 'Requester Telemetry & Incident KPI Dashboard',
        tag: 'Operational Dashboard',
        description: 'Centralized monitoring console displaying real-time ticket metrics (Total, Pending, Resolved), category-based work order breakdown, and instant status summaries in an ergonomic dark theme.'
      },
      {
        src: '/projects/mms-3.png',
        title: 'Service Ticket Submission & Campus Location Dispatch',
        tag: 'Request Submission',
        description: 'Structured issue reporting workflow capturing maintenance category (Electrical, HVAC, Plumbing, IT), precise campus building and room coordinates, SLA urgency levels, and an immediate editable queue of unprocessed work orders.'
      },
      {
        src: '/projects/mms-4.png',
        title: 'Searchable Ticket Lifecycle Registry',
        tag: 'Ticket Tracking',
        description: 'Unified request history table providing real-time search filtering across Ticket IDs, maintenance categories, and campus locations with end-to-end status visibility from submission to resolution.'
      },
      {
        src: '/projects/mms-5.png',
        title: 'Maintenance Operations Schedule & Interactive Calendar',
        tag: 'Facility Scheduling',
        description: 'Integrated monthly and weekly facility calendar mapping planned campus inspections, scheduled repair interventions, and preventative maintenance deadlines.'
      },
      {
        src: '/projects/mms-6.png',
        title: 'Direct Real-Time FMS Communication Channel',
        tag: 'In-App Messaging',
        description: 'Two-way messaging gateway enabling direct, authenticated communication between university requesters and Facilities Management Services (FMS) staff for live ticket clarifications.'
      },
      {
        src: '/projects/mms-7.png',
        title: 'Real-Time Incident & Status Notification Center',
        tag: 'Audit & Alerts',
        description: 'Centralized alert log delivering instant timestamped status updates (e.g., ticket marked as Resolved) and incoming dispatch notifications with status badges.'
      },
      {
        src: '/projects/mms-8.png',
        title: 'Requester Profile Management & Security Settings',
        tag: 'User Security',
        description: 'Self-service account dashboard allowing authenticated campus requesters to maintain contact profile credentials and securely perform password updates.'
      },
      {
        src: '/projects/mms-9.png',
        title: 'Production Vercel Cloud Architecture & CI/CD Pipeline',
        tag: 'Cloud Deployment',
        description: 'High-availability cloud deployment on the Vercel Edge Network (mms-prototype-liart.vercel.app) featuring automated Git-integrated branch builds, instant rollbacks, and continuous observability.'
      }
    ]
  }
];

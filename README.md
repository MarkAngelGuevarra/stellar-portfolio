# 🌌 Stellar Portfolio — Mark Angel Guevarra

[![Live Demo](https://img.shields.io/badge/Live_Portfolio-markguevarraportfolio.me-0284c7?style=for-the-badge&logo=vercel)](https://www.markguevarraportfolio.me/)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-Modern_Glassmorphism-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)

A modern, high-performance personal portfolio and interactive technical showcase built for **Mark Angel Guevarra** (Cybersecurity Analyst, Network Administrator & Web3 Developer). Showcases 22 industry certifications, featured blockchain & enterprise network engineering projects, interactive verification modals, dynamic particle canvas animations, and full mobile optimization.

---

## 🌟 Key Features

* **Interactive Particle Background:** Powered by `tsparticles` / `tsparticles-slim` for fluid visual engagement.
* **Glassmorphism UI:** Sleek, futuristic cyberpunk-inspired aesthetic with responsive glass panels.
* **Mobile Responsive Navigation:** Accessible animated hamburger menu and mobile dropdown drawer for fluid viewing across smartphones and tablets.
* **Touch & Coarse Pointer Optimization:** Intelligent pointer handling with automatic cursor fallbacks on touch/mobile devices for native scrolling performance.
* **Modular Data Architecture:** Clean separation of concerns with isolated data layers in `src/data/` for projects, certifications, and skills.
* **Live Certification Verification:** Modal showcase containing credential verification IDs, direct issuer links (Credly, Qualys, Certiport), exam rigor metrics, and validated competencies across 22 credentials.
* **Featured Projects Showcase:** Interactive project cards with technology stack badges, repository/live links, and screenshot galleries for **SorobanAuditor**, **KlassPay**, **GigPay**, **Enterprise Cisco Network Topologies**, and more.
* **Direct Contact Gateway:** Integrated secure contact form with instant AJAX feedback.
* **ATS Resume Generator:** Direct link to ATS-compliant Harvard format resume.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
|---|---|
| **Frontend Framework** | React 19, Vite 8 |
| **Languages & Syntax** | JavaScript (ES6+ / JSX), CSS3 |
| **UI Design System** | Modern Glassmorphism, CSS Grid & Flexbox, Custom CSS Variables |
| **Architecture** | Component-driven UI with decoupled data schemas (`src/data/`) |
| **Animations & Effects** | `tsparticles-slim`, `react-type-animation`, CSS Keyframes |
| **Analytics & Edge** | `@vercel/speed-insights`, Serverless SVG Counter Function (`/api/views.svg`) |
| **Deployment & Hosting** | Vercel CI/CD with Custom Apex Domain Routing |

---

## 📁 Project Structure

```text
stellar-portfolio/
├── api/
│   └── views.svg.js           # Serverless dynamic SVG view counter
├── public/
│   ├── certs/                 # High-resolution certification badges
│   ├── projects/              # Project screenshots & architectures
│   └── resume.pdf             # ATS-compliant resume
├── src/
│   ├── assets/                # Static brand logos & hero art
│   ├── data/                  # Decoupled static datasets
│   │   ├── certs.js           # 22 verified certifications & credentials
│   │   ├── projects.js        # Featured engineering projects & galleries
│   │   └── skills.js          # Categorized technical competencies & SVGs
│   ├── App.css                # Responsive styles, glassmorphism & animations
│   ├── App.jsx                # Main application component & mobile drawer
│   ├── index.css              # Global baseline typography & resets
│   └── main.jsx               # React 19 entry root
├── index.html                 # Canonical SEO metadata, Open Graph & Twitter Cards
├── package.json               # Dependencies & scripts
└── vite.config.js             # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites
* Node.js (v18.0.0 or higher)
* npm, pnpm, or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/MarkAngelGuevarra/stellar-portfolio.git
   cd stellar-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📬 Let's Connect

* **Developer:** Mark Angel Guevarra
* **Portfolio:** [markguevarraportfolio.me](https://www.markguevarraportfolio.me/)
* **LinkedIn:** [linkedin.com/in/markangelguevarra](https://www.linkedin.com/in/markangelguevarra)
* **GitHub:** [@MarkAngelGuevarra](https://github.com/MarkAngelGuevarra)
* **Email:** [marcangelguevarra@gmail.com](mailto:marcangelguevarra@gmail.com)
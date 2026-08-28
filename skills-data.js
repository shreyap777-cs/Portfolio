// Comprehensive Skills Data with Official Authentic SVG Logos & Neon Accents
const SKILLS_CATEGORIES = [
  { id: 'all', label: 'All Technologies', icon: '🌐' },
  { id: 'languages', label: 'Programming', icon: '⚡' },
  { id: 'ai', label: 'AI & Agentic Tech', icon: '🧠' },
  { id: 'tools', label: 'Dev & DevOps', icon: '🛠️' },
  { id: 'cybersecurity', label: 'Cybersecurity', icon: '🛡️' },
  { id: 'data', label: 'Data Analytics', icon: '📊' }
];

const SKILLS_DATA = [
  // --- Programming Languages ---
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    level: 'Advanced',
    percent: 92,
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.4)',
    desc: 'Core language for Machine Learning, NLP pipelines, data algorithms & cyber-security tools.',
    icon: `<svg viewBox="0 0 128 128" class="skill-svg"><path fill="#38BDF8" d="M63.4 3.7c-7.7 0-14.7.7-20.7 2-17.7 3.8-20.8 11.8-20.8 26.5v19.6h41.6v5.9H22.1c-14.7 0-27.6 8.9-31.5 25.8-4.5 19.5-4.7 31.7 0 51.3 3.5 15.1 12.1 24.3 26.8 24.3h17.3v-23.4c0-16.7 14.2-31.5 31.2-31.5h41.3c14 0 25.4-11.7 25.4-25.7V32.2c0-14-11.8-24.5-25.4-26.5-9.3-1.4-27.7-2-44.8-2zm-12 14.4c4.3 0 7.8 3.5 7.8 7.8 0 4.3-3.5 7.8-7.8 7.8-4.3 0-7.8-3.5-7.8-7.8 0-4.3 3.5-7.8 7.8-7.8z"/><path fill="#FDE047" d="M64.6 124.3c7.7 0 14.7-.7 20.7-2 17.7-3.8 20.8-11.8 20.8-26.5V76.2H64.5v-5.9h41.4c14.7 0 27.6-8.9 31.5-25.8 4.5-19.5 4.7-31.7 0-51.3-3.5-15.1-12.1-24.3-26.8-24.3H93.3v23.4c0 16.7-14.2 31.5-31.2 31.5H20.8C6.8 23.9-4.6 35.6-4.6 49.6v45.8c0 14 11.8 24.5 25.4 26.5 9.3 1.4 27.7 2.4 43.8 2.4zm12-14.4c-4.3 0-7.8-3.5-7.8-7.8 0-4.3 3.5-7.8 7.8-7.8 4.3 0 7.8 3.5 7.8 7.8 0 4.3-3.5 7.8-7.8 7.8z"/></svg>`
  },
  {
    id: 'java',
    name: 'Java',
    category: 'languages',
    level: 'Proficient',
    percent: 85,
    color: '#FB923C',
    glow: 'rgba(251, 146, 60, 0.4)',
    desc: 'Object-oriented application development, data structures & backend system foundations.',
    icon: `<svg viewBox="0 0 128 128" class="skill-svg"><path fill="#FB923C" d="M46.7 101.4s-8.1 4.5 5.8 6c16.8 1.9 25.5 1.7 44.1-2.4 0 0 4 2.6 9.8 4.9-30.8 13.8-69.6 1.4-59.7-8.5M43.7 87.7s-8.7 5.6 5 7.3c17.5 2.1 29.8 2.2 52.8-3.1 0 0 2.8 2.8 7.2 4.4-38.1 12.9-76.3 2.5-65-8.6M68.5 61.2c6.4 7.4-1.7 14.1-1.7 14.1s16.4-8.5 8.9-19c-7.2-10.1-13.6-15.1 18.2-31.5 0 0-40.4 10.3-25.4 36.4M100.9 109.8c-23.7 15.3-67.9 8.2-58.4-.7 3.8-3.6 11.2-4.7 11.2-4.7s-4.3-.9-7.7.9c-8.9 4.7 3.3 9.4 12.9 9.8 27.5 1.2 50.8-7.4 42-5.3M52.3 40.5c-4.9 11.7 5.1 18 13.3 25.6 3.8 3.5 7.4 7.2 9.5 11.6 6-12.7-14.7-22.1-22.8-37.2M87.5 78.4c17.2-2.1 22.8-12.3 22.8-12.3s-5.8 4.7-17 7.7c-13.2 3.6-26.6 4.3-39.7 1.8-6.1-1.2-11.4-3.1-11.4-3.1s1.9 2.5 10.6 4.4c12.3 2.7 23.3 2.6 34.7 1.5"/></svg>`
  },
  {
    id: 'c',
    name: 'C Language',
    category: 'languages',
    level: 'Proficient',
    percent: 80,
    color: '#60A5FA',
    glow: 'rgba(96, 165, 250, 0.4)',
    desc: 'Low-level systems programming, memory architecture, pointers and algorithmic speed.',
    icon: `<svg viewBox="0 0 128 128" class="skill-svg"><path fill="#60A5FA" d="M116.4 89.2c-7.9 17.5-22.9 28.5-42.3 28.5-28.5 0-48.4-22.7-48.4-53.7 0-31.1 19.8-53.7 48.4-53.7 19.7 0 34.8 11.2 42.6 29.1l-18.7 8.3c-4.6-11.5-12.9-17.7-23.9-17.7-17.6 0-28.2 14.8-28.2 34 0 19.3 10.6 34 28.2 34 11.4 0 19.8-6.6 24.3-18.4l18 9.6z"/></svg>`
  },
  {
    id: 'javascript',
    name: 'JavaScript / ES6+',
    category: 'languages',
    level: 'Advanced',
    percent: 90,
    color: '#FACC15',
    glow: 'rgba(250, 204, 21, 0.4)',
    desc: 'Dynamic interactive frontends, asynchronous DOM engines, Web APIs, and animations.',
    icon: `<svg viewBox="0 0 128 128" class="skill-svg"><path fill="#FACC15" d="M1.5 1.5h125v125H1.5z"/><path fill="#000000" d="M109.9 83.3c-2.4-3.9-6.3-6.6-12.2-8.6l-5.3-1.8c-4.4-1.5-6.5-3.3-6.5-5.9 0-3.3 2.7-5.4 7.4-5.4 4.5 0 7.3 1.9 9.3 6.1l11.4-7c-4.1-7.7-11.1-11.9-20.7-11.9-12.6 0-21.3 7.5-21.3 18.6 0 8.1 4.7 14.3 14.5 17.7l5.3 1.9c5.1 1.8 7.3 3.9 7.3 7 0 3.8-3.4 6.2-8.6 6.2-6.5 0-10.4-3.4-12.8-9.1l-11.7 6.7c4.6 9.8 13.5 15.3 24.5 15.3 14.5 0 22.8-8.2 22.8-19.8.1-5.7-2.1-10.4-8.2-13.8zM42.2 109.9h14.2V49.8H42.2v42.9c0 5.4-2.8 8.2-7.5 8.2-2.1 0-3.9-.4-5.4-1.2l-3.3 10.8c3.1 1.7 7.7 2.6 12.3 2.6 2.7 0 3.9-3.2 3.9-3.2z"/></svg>`
  },
  {
    id: 'sql',
    name: 'SQL & Database Design',
    category: 'languages',
    level: 'Advanced',
    percent: 88,
    color: '#C084FC',
    glow: 'rgba(192, 132, 252, 0.4)',
    desc: 'Relational database architecture, complex multi-table joins, subqueries, and optimizations.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#C084FC" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`
  },

  // --- AI & Agentic Technologies ---
  {
    id: 'gemini',
    name: 'Google Gemini & Gemma',
    category: 'ai',
    level: 'Expert',
    percent: 96,
    color: '#00F0FF',
    glow: 'rgba(0, 240, 255, 0.5)',
    desc: 'Multimodal AI generation, structured schema output, Live API & high-context reasoning.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#geminiGrad)"/><defs><linearGradient id="geminiGrad" x1="2" y1="2" x2="22" y2="22"><stop stop-color="#00F0FF"/><stop offset="1" stop-color="#3B82F6"/></linearGradient></defs></svg>`
  },
  {
    id: 'agentic-ai',
    name: 'Agentic AI & Multi-Agent Workflows',
    category: 'ai',
    level: 'Advanced',
    percent: 94,
    color: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.5)',
    desc: 'Autonomous agent design, tool calling, execution loops, orchestration, and state graphs.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#A855F7" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16.01"/><line x1="16" y1="16" x2="16" y2="16.01"/><path d="M10 19h4"/></svg>`
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT & OpenAI Models',
    category: 'ai',
    level: 'Advanced',
    percent: 92,
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.4)',
    desc: 'GPT-4o prompting, code synthesis, cognitive architectures, and automated agent pipelines.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="#10B981"><path d="M22.28 9.5a5.55 5.55 0 0 0-.47-4.47 5.72 5.72 0 0 0-4.85-2.73 5.86 5.86 0 0 0-1.63.23A5.55 5.55 0 0 0 11 1.25a5.71 5.71 0 0 0-4.7 2.98 5.6 5.6 0 0 0-3.32 2.41 5.72 5.72 0 0 0-.58 5.48 5.56 5.56 0 0 0 .47 4.47 5.72 5.72 0 0 0 4.85 2.73c.54 0 1.09-.08 1.63-.23a5.55 5.55 0 0 0 4.33 1.28 5.71 5.71 0 0 0 4.7-2.98 5.6 5.6 0 0 0 3.32-2.41 5.72 5.72 0 0 0 .58-5.47zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`
  },
  {
    id: 'claude',
    name: 'Claude & Anthropic AI',
    category: 'ai',
    level: 'Advanced',
    percent: 92,
    color: '#FB7185',
    glow: 'rgba(251, 113, 133, 0.4)',
    desc: 'Deep analytical decomposition, nuanced artifact drafting, and long-context reasoning.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="#FB7185"><circle cx="12" cy="12" r="10"/><path fill="#05070D" d="M12 6l2 5h5l-4 3 1.5 5-4.5-3.5L7.5 19 9 14l-4-3h5z"/></svg>`
  },
  {
    id: 'google-antigravity',
    name: 'Google Antigravity & AI Flow',
    category: 'ai',
    level: 'Expert',
    percent: 95,
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.5)',
    desc: 'Autonomous pair programming, subagent orchestration, workflow skills & CLI toolchains.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#38BDF8" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
  },
  {
    id: 'prompt-engineering',
    name: 'Prompt Engineering & Few-Shot',
    category: 'ai',
    level: 'Expert',
    percent: 95,
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.4)',
    desc: 'Chain-of-thought, persona structuring, constraint enforcement, and zero-error prompting.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#F59E0B" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h5"/></svg>`
  },
  {
    id: 'creative-ai',
    name: 'Lovable, Gamma & Lemon AI',
    category: 'ai',
    level: 'Advanced',
    percent: 88,
    color: '#EC4899',
    glow: 'rgba(236, 72, 153, 0.4)',
    desc: 'Rapid AI UI prototyping, intelligent slide/document generation & generative visual design.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#EC4899" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`
  },

  // --- Development & DevOps Tools ---
  {
    id: 'git',
    name: 'Git Version Control',
    category: 'tools',
    level: 'Advanced',
    percent: 90,
    color: '#F97316',
    glow: 'rgba(249, 115, 22, 0.4)',
    desc: 'Branch workflows, rebasing, merge conflict resolution, semantic commit structures.',
    icon: `<svg viewBox="0 0 128 128" class="skill-svg"><path fill="#F97316" d="M124.7 57.3L70.7 3.3c-4.4-4.4-11.5-4.4-15.9 0L39.2 18.9l20.2 20.2c4.7-1.6 10.2-.5 13.9 3.2 3.7 3.7 4.8 9.2 3.2 13.9l19.5 19.5c4.7-1.6 10.2-.5 13.9 3.2 5.5 5.5 5.5 14.3 0 19.8-5.5 5.5-14.3 5.5-19.8 0-3.9-3.9-4.9-9.7-3-14.5L48.8 65.9c-4.8 1.9-10.6.9-14.5-3-3.9-3.9-4.9-9.7-3-14.5L11.7 28.8 3.3 37.2c-4.4 4.4-4.4 11.5 0 15.9l54 54c4.4 4.4 11.5 4.4 15.9 0l51.5-51.5c4.4-4.4 4.4-11.6 0-15.9v1.7z"/></svg>`
  },
  {
    id: 'github',
    name: 'GitHub & CI/CD Actions',
    category: 'tools',
    level: 'Advanced',
    percent: 90,
    color: '#FFFFFF',
    glow: 'rgba(255, 255, 255, 0.3)',
    desc: 'Open-source collaboration, issue tracking, project boards, and automated workflows.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="#FFFFFF"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`
  },
  {
    id: 'vscode',
    name: 'VS Code & Cloud IDEs',
    category: 'tools',
    level: 'Advanced',
    percent: 94,
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.4)',
    desc: 'Advanced debugging configurations, remote containers, linting, extensions ecosystem.',
    icon: `<svg viewBox="0 0 128 128" class="skill-svg"><path fill="#38BDF8" d="M96.7 125.6c3.2 1.8 7.3 1.4 10.2-.9l18.4-15c3-2.4 4.7-6.1 4.7-10V28.3c0-3.9-1.7-7.6-4.7-10l-18.4-15c-2.9-2.3-7-2.7-10.2-.9-3.3 1.7-5.3 5.1-5.3 8.8v6.2L42.8 55.8 20.3 38.6c-2.7-2.1-6.5-2.1-9.2 0L2.4 45.3c-3.2 2.5-3.2 7.3 0 9.8l20.4 16.1L2.4 87.3c-3.2 2.5-3.2 7.3 0 9.8l8.7 6.8c2.7 2.1 6.5 2.1 9.2 0l22.5-17.3 48.6 37.4v6.2c0 3.7 2.1 7.1 5.3 8.8v-3.4zM96.7 36.2l-41.9 32 41.9 32.1V36.2z"/></svg>`
  },
  {
    id: 'colab',
    name: 'Google Colab & Jupyter',
    category: 'tools',
    level: 'Expert',
    percent: 92,
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.4)',
    desc: 'Cloud GPU acceleration, data exploration, ML model training & reproducible notebooks.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="#F59E0B"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5zm-5-3a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5zm4-6a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>`
  },
  {
    id: 'linux',
    name: 'Linux / Bash Shell',
    category: 'tools',
    level: 'Proficient',
    percent: 82,
    color: '#E2E8F0',
    glow: 'rgba(226, 232, 240, 0.3)',
    desc: 'Command-line scripting, server administration, file permissions & process automation.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#E2E8F0" stroke-width="2"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`
  },

  // --- Cybersecurity & Systems ---
  {
    id: 'phishing',
    name: 'AI Phishing Detection',
    category: 'cybersecurity',
    level: 'Advanced',
    percent: 94,
    color: '#EF4444',
    glow: 'rgba(239, 68, 68, 0.4)',
    desc: 'Heuristic URL analysis, token entropy classification & real-time malicious email defense.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#EF4444" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  },
  {
    id: 'crypto',
    name: 'Password Cryptography',
    category: 'cybersecurity',
    level: 'Advanced',
    percent: 90,
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.4)',
    desc: 'NIST compliant entropy algorithms, SHA/bcrypt hashing principles & brute-force mitigation.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#10B981" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/></svg>`
  },
  {
    id: 'sec-audit',
    name: 'Security Auditing & Vulns',
    category: 'cybersecurity',
    level: 'Proficient',
    percent: 84,
    color: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.4)',
    desc: 'OWASP Top 10 mitigation, web vulnerability identification, input sanitation & SSL/TLS.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#A855F7" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/><path d="M4.93 4.93l14.14 14.14"/></svg>`
  },

  // --- Data Analytics & Visualization ---
  {
    id: 'powerbi',
    name: 'Power BI & Dashboards',
    category: 'data',
    level: 'Advanced',
    percent: 88,
    color: '#FACC15',
    glow: 'rgba(250, 204, 21, 0.4)',
    desc: 'Interactive business intelligence dashboards, DAX queries, data modeling & reporting.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#FACC15" stroke-width="2"><rect x="3" y="12" width="4" height="9"/><rect x="10" y="7" width="4" height="14"/><rect x="17" y="3" width="4" height="18"/></svg>`
  },
  {
    id: 'pandas',
    name: 'Pandas & NumPy',
    category: 'data',
    level: 'Advanced',
    percent: 90,
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.4)',
    desc: 'Data wrangling, matrix manipulation, feature engineering, and statistical analysis.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#38BDF8" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
  },
  {
    id: 'office',
    name: 'Microsoft Office & Advanced Excel',
    category: 'data',
    level: 'Expert',
    percent: 92,
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.4)',
    desc: 'VLOOKUP/XLOOKUP formulas, pivot tables, structured documentation & automated sheets.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#10B981" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`
  }
];

// Export to window
window.SKILLS_CATEGORIES = SKILLS_CATEGORIES;
window.SKILLS_DATA = SKILLS_DATA;

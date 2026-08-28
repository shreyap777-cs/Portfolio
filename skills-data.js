// 5 Categorized Skills Sections: Programming Languages, Data Analytics, AI Tools, Developers Tools, Concepts
const SKILLS_CATEGORIES = [
  { id: 'all', label: 'All Skills', icon: '🌐' },
  { id: 'languages', label: 'Programming Language', icon: '⚡' },
  { id: 'data', label: 'Data Analytics', icon: '📊' },
  { id: 'ai-tools', label: 'AI Tools', icon: '🧠' },
  { id: 'dev-tools', label: 'Developers Tool', icon: '🛠️' },
  { id: 'concepts', label: 'Concepts', icon: '💡' }
];

const SKILLS_DATA = [
  // =========================================================================
  // 1. PROGRAMMING LANGUAGE
  // =========================================================================
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    level: 'Proficient',
    percent: 92,
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.4)',
    desc: 'Core language for Machine Learning, data processing, automation, and backend development.',
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
    desc: 'Object-oriented programming, data structures, and algorithmic application design.',
    icon: `<svg viewBox="0 0 128 128" class="skill-svg"><path fill="#FB923C" d="M46.7 101.4s-8.1 4.5 5.8 6c16.8 1.9 25.5 1.7 44.1-2.4 0 0 4 2.6 9.8 4.9-30.8 13.8-69.6 1.4-59.7-8.5M43.7 87.7s-8.7 5.6 5 7.3c17.5 2.1 29.8 2.2 52.8-3.1 0 0 2.8 2.8 7.2 4.4-38.1 12.9-76.3 2.5-65-8.6M68.5 61.2c6.4 7.4-1.7 14.1-1.7 14.1s16.4-8.5 8.9-19c-7.2-10.1-13.6-15.1 18.2-31.5 0 0-40.4 10.3-25.4 36.4M100.9 109.8c-23.7 15.3-67.9 8.2-58.4-.7 3.8-3.6 11.2-4.7 11.2-4.7s-4.3-.9-7.7.9c-8.9 4.7 3.3 9.4 12.9 9.8 27.5 1.2 50.8-7.4 42-5.3M52.3 40.5c-4.9 11.7 5.1 18 13.3 25.6 3.8 3.5 7.4 7.2 9.5 11.6 6-12.7-14.7-22.1-22.8-37.2M87.5 78.4c17.2-2.1 22.8-12.3 22.8-12.3s-5.8 4.7-17 7.7c-13.2 3.6-26.6 4.3-39.7 1.8-6.1-1.2-11.4-3.1-11.4-3.1s1.9 2.5 10.6 4.4c12.3 2.7 23.3 2.6 34.7 1.5"/></svg>`
  },
  {
    id: 'c',
    name: 'C',
    category: 'languages',
    level: 'Proficient',
    percent: 82,
    color: '#60A5FA',
    glow: 'rgba(96, 165, 250, 0.4)',
    desc: 'Foundational programming, pointer arithmetic, memory management, and structured code.',
    icon: `<svg viewBox="0 0 128 128" class="skill-svg"><path fill="#60A5FA" d="M116.4 89.2c-7.9 17.5-22.9 28.5-42.3 28.5-28.5 0-48.4-22.7-48.4-53.7 0-31.1 19.8-53.7 48.4-53.7 19.7 0 34.8 11.2 42.6 29.1l-18.7 8.3c-4.6-11.5-12.9-17.7-23.9-17.7-17.6 0-28.2 14.8-28.2 34 0 19.3 10.6 34 28.2 34 11.4 0 19.8-6.6 24.3-18.4l18 9.6z"/></svg>`
  },

  // =========================================================================
  // 2. DATA ANALYTICS
  // =========================================================================
  {
    id: 'sql',
    name: 'SQL',
    category: 'data',
    level: 'Proficient',
    percent: 88,
    color: '#C084FC',
    glow: 'rgba(192, 132, 252, 0.4)',
    desc: 'Relational database queries, multi-table joins, aggregations, and data manipulation.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#C084FC" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`
  },
  {
    id: 'powerbi',
    name: 'Power BI',
    category: 'data',
    level: 'Proficient',
    percent: 86,
    color: '#FACC15',
    glow: 'rgba(250, 204, 21, 0.4)',
    desc: 'Business intelligence dashboards, visual reports, and data transformation analytics.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#FACC15" stroke-width="2"><rect x="3" y="12" width="4" height="9"/><rect x="10" y="7" width="4" height="14"/><rect x="17" y="3" width="4" height="18"/></svg>`
  },
  {
    id: 'msoffice',
    name: 'Microsoft Office',
    category: 'data',
    level: 'Advanced',
    percent: 92,
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.4)',
    desc: 'Excel data modeling, formulas, pivot tables, Word documentation & PowerPoint presentations.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#10B981" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`
  },

  // =========================================================================
  // 3. AI TOOLS
  // =========================================================================
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'ai-tools',
    level: 'Advanced',
    percent: 94,
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.4)',
    desc: 'Prompt crafting, code generation, cognitive brainstorming, and productivity pipelines.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="#10B981"><path d="M22.28 9.5a5.55 5.55 0 0 0-.47-4.47 5.72 5.72 0 0 0-4.85-2.73 5.86 5.86 0 0 0-1.63.23A5.55 5.55 0 0 0 11 1.25a5.71 5.71 0 0 0-4.7 2.98 5.6 5.6 0 0 0-3.32 2.41 5.72 5.72 0 0 0-.58 5.48 5.56 5.56 0 0 0 .47 4.47 5.72 5.72 0 0 0 4.85 2.73c.54 0 1.09-.08 1.63-.23a5.55 5.55 0 0 0 4.33 1.28 5.71 5.71 0 0 0 4.7-2.98 5.6 5.6 0 0 0 3.32-2.41 5.72 5.72 0 0 0 .58-5.47zM12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>`
  },
  {
    id: 'claude',
    name: 'Claude',
    category: 'ai-tools',
    level: 'Advanced',
    percent: 92,
    color: '#FB7185',
    glow: 'rgba(251, 113, 133, 0.4)',
    desc: 'Complex problem decomposition, structured analysis, long-form synthesis & artifact generation.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="#FB7185"><circle cx="12" cy="12" r="10"/><path fill="#05070D" d="M12 6l2 5h5l-4 3 1.5 5-4.5-3.5L7.5 19 9 14l-4-3h5z"/></svg>`
  },
  {
    id: 'gamma',
    name: 'Gamma',
    category: 'ai-tools',
    level: 'Proficient',
    percent: 90,
    color: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.4)',
    desc: 'AI-assisted visual presentation generation, document design & interactive layouts.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#A855F7" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
  },
  {
    id: 'gemini',
    name: 'Gemini',
    category: 'ai-tools',
    level: 'Advanced',
    percent: 94,
    color: '#00F0FF',
    glow: 'rgba(0, 240, 255, 0.4)',
    desc: 'Multimodal AI reasoning, coding assistance, and intelligent workflows.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#00F0FF"/></svg>`
  },
  {
    id: 'lovable',
    name: 'Lovable',
    category: 'ai-tools',
    level: 'Proficient',
    percent: 88,
    color: '#EC4899',
    glow: 'rgba(236, 72, 153, 0.4)',
    desc: 'Rapid AI full-stack application prototyping, modern frontend creation & iteration.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#EC4899" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`
  },
  {
    id: 'google-antigravity',
    name: 'Google Antigravity',
    category: 'ai-tools',
    level: 'Advanced',
    percent: 92,
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.4)',
    desc: 'Agentic coding environment, autonomous workflows, skills architecture & tooling.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#38BDF8" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`
  },
  {
    id: 'google-ai-flow',
    name: 'Google AI Flow',
    category: 'ai-tools',
    level: 'Proficient',
    percent: 88,
    color: '#4ADE80',
    glow: 'rgba(74, 222, 128, 0.4)',
    desc: 'Visual agent builders, workflow automation, and multimodal prompt chaining.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#4ADE80" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6M9 6h6"/></svg>`
  },
  {
    id: 'stitch',
    name: 'Stitch',
    category: 'ai-tools',
    level: 'Proficient',
    percent: 86,
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.4)',
    desc: 'AI-assisted data integrations, ETL pipeline connections, and automated syncing.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#F59E0B" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
  },
  {
    id: 'lemon',
    name: 'Lemon',
    category: 'ai-tools',
    level: 'Proficient',
    percent: 85,
    color: '#FDE047',
    glow: 'rgba(253, 224, 71, 0.4)',
    desc: 'AI workflow acceleration, rapid prototyping, and automated software workflows.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#FDE047" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 0 1 8 0"/></svg>`
  },

  // =========================================================================
  // 4. DEVELOPERS TOOL
  // =========================================================================
  {
    id: 'git',
    name: 'Git',
    category: 'dev-tools',
    level: 'Proficient',
    percent: 88,
    color: '#F97316',
    glow: 'rgba(249, 115, 22, 0.4)',
    desc: 'Version control, branch management, merge conflict resolution, and commit history.',
    icon: `<svg viewBox="0 0 128 128" class="skill-svg"><path fill="#F97316" d="M124.7 57.3L70.7 3.3c-4.4-4.4-11.5-4.4-15.9 0L39.2 18.9l20.2 20.2c4.7-1.6 10.2-.5 13.9 3.2 3.7 3.7 4.8 9.2 3.2 13.9l19.5 19.5c4.7-1.6 10.2-.5 13.9 3.2 5.5 5.5 5.5 14.3 0 19.8-5.5 5.5-14.3 5.5-19.8 0-3.9-3.9-4.9-9.7-3-14.5L48.8 65.9c-4.8 1.9-10.6.9-14.5-3-3.9-3.9-4.9-9.7-3-14.5L11.7 28.8 3.3 37.2c-4.4 4.4-4.4 11.5 0 15.9l54 54c4.4 4.4 11.5 4.4 15.9 0l51.5-51.5c4.4-4.4 4.4-11.6 0-15.9v1.7z"/></svg>`
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'dev-tools',
    level: 'Proficient',
    percent: 90,
    color: '#FFFFFF',
    glow: 'rgba(255, 255, 255, 0.3)',
    desc: 'Remote repositories, collaborative development, GitHub Pages deployment & project tracking.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="#FFFFFF"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`
  },
  {
    id: 'vscode',
    name: 'VS Code',
    category: 'dev-tools',
    level: 'Advanced',
    percent: 92,
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.4)',
    desc: 'Primary code editor, debugging, integrated terminal, syntax extensions & project setup.',
    icon: `<svg viewBox="0 0 128 128" class="skill-svg"><path fill="#38BDF8" d="M96.7 125.6c3.2 1.8 7.3 1.4 10.2-.9l18.4-15c3-2.4 4.7-6.1 4.7-10V28.3c0-3.9-1.7-7.6-4.7-10l-18.4-15c-2.9-2.3-7-2.7-10.2-.9-3.3 1.7-5.3 5.1-5.3 8.8v6.2L42.8 55.8 20.3 38.6c-2.7-2.1-6.5-2.1-9.2 0L2.4 45.3c-3.2 2.5-3.2 7.3 0 9.8l20.4 16.1L2.4 87.3c-3.2 2.5-3.2 7.3 0 9.8l8.7 6.8c2.7 2.1 6.5 2.1 9.2 0l22.5-17.3 48.6 37.4v6.2c0 3.7 2.1 7.1 5.3 8.8v-3.4zM96.7 36.2l-41.9 32 41.9 32.1V36.2z"/></svg>`
  },
  {
    id: 'colab',
    name: 'Google Colab',
    category: 'dev-tools',
    level: 'Proficient',
    percent: 90,
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.4)',
    desc: 'Cloud Python execution, ML model experiments, Jupyter notebooks & dataset analysis.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="#F59E0B"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5zm-5-3a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5zm4-6a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>`
  },

  // =========================================================================
  // 5. CONCEPTS
  // =========================================================================
  {
    id: 'dsa',
    name: 'Data Structures and Algorithms',
    category: 'concepts',
    level: 'Proficient',
    percent: 88,
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.4)',
    desc: 'Arrays, Linked Lists, Trees, Graphs, Sorting, Searching, and Big-O algorithmic efficiency.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#38BDF8" stroke-width="2"><circle cx="12" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/><line x1="12" y1="8" x2="6" y2="16"/><line x1="12" y1="8" x2="18" y2="16"/></svg>`
  },
  {
    id: 'cn',
    name: 'Computer Networks',
    category: 'concepts',
    level: 'Proficient',
    percent: 85,
    color: '#00F0FF',
    glow: 'rgba(0, 240, 255, 0.4)',
    desc: 'OSI & TCP/IP models, routing protocols, IP addressing, HTTP/HTTPS, and network security.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#00F0FF" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`
  },
  {
    id: 'os',
    name: 'Operating Systems',
    category: 'concepts',
    level: 'Proficient',
    percent: 84,
    color: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.4)',
    desc: 'Process management, CPU scheduling, multi-threading, memory virtualisation & deadlock handling.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#A855F7" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="15" y2="15"/><line x1="15" y1="9" x2="9" y2="15"/></svg>`
  },
  {
    id: 'dbms',
    name: 'Databases',
    category: 'concepts',
    level: 'Proficient',
    percent: 86,
    color: '#C084FC',
    glow: 'rgba(192, 132, 252, 0.4)',
    desc: 'Relational database management, ACID properties, normalization, indexing & schema architecture.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#C084FC" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`
  },
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    category: 'concepts',
    level: 'Proficient',
    percent: 88,
    color: '#10B981',
    glow: 'rgba(16, 185, 129, 0.4)',
    desc: 'Heuristic search, knowledge representation, neural computation & autonomous reasoning systems.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#10B981" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    category: 'concepts',
    level: 'Proficient',
    percent: 88,
    color: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.4)',
    desc: 'Supervised & unsupervised learning, classification, regression, model training & evaluation metrics.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#38BDF8" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    category: 'concepts',
    level: 'Proficient',
    percent: 85,
    color: '#EF4444',
    glow: 'rgba(239, 68, 68, 0.4)',
    desc: 'Threat detection, phishing identification, authentication security, cryptography & vulnerability mitigation.',
    icon: `<svg viewBox="0 0 24 24" class="skill-svg" fill="none" stroke="#EF4444" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`
  }
];

// Export to window
window.SKILLS_CATEGORIES = SKILLS_CATEGORIES;
window.SKILLS_DATA = SKILLS_DATA;

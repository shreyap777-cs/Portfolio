// Interactive Cyberdeck Terminal Emulator (shreya@cyberdeck:~$)
class CyberTerminal {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.output = this.container.querySelector('.terminal-output');
    this.input = this.container.querySelector('.terminal-input');
    this.history = [];
    this.historyIndex = -1;

    this.commands = {
      help: () => `
<div class="terminal-cmd-list">
  <span class="cmd-cyan">bio</span>          - Display full biography & engineering philosophy
  <span class="cmd-cyan">skills</span>       - List technology stack & AI toolchains
  <span class="cmd-cyan">projects</span>     - Browse flagship machine learning & cyber projects
  <span class="cmd-cyan">education</span>    - View academic records, scores & coursework
  <span class="cmd-cyan">contact</span>      - Get direct communication links (Email, LinkedIn, GitHub)
  <span class="cmd-cyan">warp</span>         - Trigger hyperspace warp drive animation
  <span class="cmd-cyan">status</span>       - Check system telemetry & availability status
  <span class="cmd-cyan">clear</span>        - Clean terminal console buffer
</div>`,

      bio: () => `
<div class="terminal-bio-res">
  <p><span class="cmd-cyan">NAME:</span> Shreya Patra</p>
  <p><span class="cmd-cyan">ROLE:</span> Full-Stack AI Engineer & Creative Problem Solver</p>
  <p><span class="cmd-cyan">EDUCATION:</span> B.Tech in Computer Science & Engineering (2022 - 2026)</p>
  <p><span class="cmd-cyan">CORE MISSION:</span> Developing autonomous agentic AI architectures, machine-learning cyber defense mechanisms, and immersive futuristic user interfaces.</p>
</div>`,

      skills: () => `
<div class="terminal-skills-res">
  <p class="cmd-purple">[Programming]</p> Python, Java, C, JavaScript (ES6+), SQL, HTML5/CSS3
  <p class="cmd-purple">[GenAI & Tools]</p> OpenAI/ChatGPT, Claude, Google Gemini, Agentic AI, Antigravity, Lovable, Gamma
  <p class="cmd-purple">[Cybersecurity]</p> AI Phishing Detection, Password Cryptography, Vulnerability Analysis
  <p class="cmd-purple">[Data Analytics]</p> Power BI, Pandas, NumPy, MS Excel
</div>`,

      projects: () => `
<div class="terminal-projects-res">
  <p>1. <span class="cmd-cyan">AI-Powered Phishing Detection System</span> (ML + Python + Flask + Cyber Defense)</p>
  <p>2. <span class="cmd-cyan">Password Strength Checker & Generator</span> (Security + Cryptographic Entropy)</p>
  <p>3. <span class="cmd-cyan">Sentiment Analysis on Product Reviews</span> (NLP + Python + Analytics)</p>
  <p>4. <span class="cmd-cyan">Next-Gen Cyberpunk Portfolio</span> (WebGL + Canvas + Video Warp + Glassmorphism)</p>
</div>`,

      education: () => `
<div class="terminal-edu-res">
  <p>🎓 <span class="cmd-cyan">B.Tech - Computer Science & Engineering (2022-2026)</span></p>
  <p>   St. Thomas' College of Engineering and Technology | Score: <strong>82.6%</strong></p>
  <p>🏫 <span class="cmd-cyan">Class XII - Higher Secondary (2022)</span></p>
  <p>   Sibpur Hindu Girls' High School | Score: <strong>84.83%</strong></p>
  <p>🏫 <span class="cmd-cyan">Class X - Secondary (2020)</span></p>
  <p>   Sibpur Hindu Girls' High School | Score: <strong>89.28%</strong></p>
</div>`,

      contact: () => `
<div class="terminal-contact-res">
  <p>📧 Email: <a href="mailto:shreya.patra2510@gmail.com" class="cmd-cyan">shreya.patra2510@gmail.com</a></p>
  <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/shreyap777" target="_blank" class="cmd-cyan">linkedin.com/in/shreyap777</a></p>
  <p>🐙 GitHub: <a href="https://github.com/shreyap777-cs" target="_blank" class="cmd-cyan">github.com/shreyap777-cs</a></p>
</div>`,

      status: () => `
<div class="terminal-status-res">
  <p>⚡ <span class="cmd-green">STATUS:</span> OPEN TO HIGH-IMPACT ROLES & COLLABORATIONS</p>
  <p>📍 <span class="cmd-cyan">LOCATION:</span> Kolkata, India / Remote</p>
  <p>🛡️ <span class="cmd-purple">INTEGRITY:</span> 100% OPERATIONAL // ZERO VULNERABILITIES</p>
</div>`,

      warp: () => {
        if (window.cyberParticles) window.cyberParticles.triggerWarp(2500);
        return `<span class="cmd-cyan">🚀 HYPERSPACE WARP ENGAGED. PREPARE FOR JUMP...</span>`;
      },

      clear: () => {
        this.output.innerHTML = '';
        return null;
      },

      sudo: () => `<span class="cmd-red">ACCESS RESTRICTED: Nice try, hacker! But Shreya holds root clearance. 😉</span>`
    };

    this.bindEvents();
    this.initWelcomeMessage();
  }

  initWelcomeMessage() {
    this.printLine(`
<div class="terminal-boot">
  <span class="cmd-cyan">CYBERDECK OS v4.2.0 [Quantum Edition]</span><br/>
  Connected to core identity matrix of <strong>Shreya Patra</strong>.<br/>
  Type <span class="cmd-cyan">'help'</span> to view available commands.
</div>`);
  }

  bindEvents() {
    if (!this.input) return;

    this.input.addEventListener('keydown', (e) => {
      if (window.cyberAudio) window.cyberAudio.playKeystroke();

      if (e.key === 'Enter') {
        const raw = this.input.value.trim();
        if (raw) {
          this.executeCommand(raw);
          this.history.push(raw);
          this.historyIndex = this.history.length;
        }
        this.input.value = '';
      } else if (e.key === 'ArrowUp') {
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
      }
    });

    this.container.addEventListener('click', () => {
      this.input.focus();
    });
  }

  executeCommand(cmdStr) {
    const cmd = cmdStr.toLowerCase().trim();
    this.printLine(`<div class="terminal-prompt-line"><span class="terminal-user">shreya@cyberdeck:~$</span> ${cmdStr}</div>`);

    if (this.commands[cmd]) {
      const res = this.commands[cmd]();
      if (res !== null) this.printLine(res);
      if (window.cyberAudio) window.cyberAudio.playClick();
    } else {
      this.printLine(`<span class="cmd-red">Command not recognized: '${cmdStr}'. Type 'help' for command list.</span>`);
    }

    this.container.scrollTop = this.container.scrollHeight;
  }

  printLine(html) {
    const el = document.createElement('div');
    el.className = 'terminal-line';
    el.innerHTML = html;
    this.output.appendChild(el);
  }
}

window.CyberTerminal = CyberTerminal;

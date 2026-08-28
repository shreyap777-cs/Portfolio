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
  <span class="cmd-cyan">bio</span>          - Display background & introduction
  <span class="cmd-cyan">skills</span>       - List programming languages & technical toolkit
  <span class="cmd-cyan">projects</span>     - Browse flagship machine learning & cybersecurity projects
  <span class="cmd-cyan">education</span>    - View academic qualifications, boards & scores
  <span class="cmd-cyan">contact</span>      - Get direct communication links (Email, LinkedIn, GitHub)
  <span class="cmd-cyan">status</span>       - Check current availability status
  <span class="cmd-cyan">warp</span>         - Trigger hyperspace warp drive animation
  <span class="cmd-cyan">clear</span>        - Clean terminal console buffer
</div>`,

      bio: () => `
<div class="terminal-bio-res">
  <p><span class="cmd-cyan">NAME:</span> Shreya Patra</p>
  <p><span class="cmd-cyan">ROLE:</span> Computer Science & Engineering Graduate (Fresher)</p>
  <p><span class="cmd-cyan">DEGREE:</span> B.Tech in CSE (MAKAUT)</p>
  <p><span class="cmd-cyan">PROFILE:</span> Passionate fresher with a solid foundation in Python, Java, Machine Learning, and web development. Enthusiastic about continuous learning and contributing to high-quality software solutions.</p>
</div>`,

      skills: () => `
<div class="terminal-skills-res">
  <p class="cmd-purple">[Programming Language]</p> Python, Java, C
  <p class="cmd-purple">[Data Analytics]</p> SQL, Power BI, Microsoft Office
  <p class="cmd-purple">[AI Tools]</p> ChatGPT, Claude, Gamma, Gemini, Lovable, Google Antigravity, Google AI Flow, Stitch, Lemon
  <p class="cmd-purple">[Developers Tool]</p> Git, GitHub, VS Code, Google Colab
  <p class="cmd-purple">[Concepts]</p> Data Structures & Algorithms, Computer Networks, Operating Systems, Databases, Artificial Intelligence, Machine Learning, Cybersecurity
</div>`,

      projects: () => `
<div class="terminal-projects-res">
  <p>1. <span class="cmd-cyan">AI-Powered Phishing Detection System</span> (ML + Python + Flask + Cyber Defense)</p>
  <p>2. <span class="cmd-cyan">Password Strength Checker & Generator</span> (Security + Cryptographic Entropy)</p>
  <p>3. <span class="cmd-cyan">Sentiment Analysis on Product Reviews</span> (NLP + Python + Scikit-Learn)</p>
  <p>4. <span class="cmd-cyan">Interactive Web Portfolio</span> (HTML5 Canvas + Modern CSS + Responsive Architecture)</p>
</div>`,

      education: () => `
<div class="terminal-edu-res">
  <p>🎓 <span class="cmd-cyan">B.Tech in Computer Science & Engineering (Completed)</span></p>
  <p>   St. Thomas' College of Engineering and Technology | Board: <strong>MAKAUT</strong> | Score: <strong>82.6%</strong></p>
  <p>🏫 <span class="cmd-cyan">Class XII (Physics, Chemistry, Mathematics, Biology) (2022)</span></p>
  <p>   Sibpur Hindu Girls' High School | Board: <strong>West Bengal Board (WBCHSE)</strong> | Score: <strong>84.83%</strong></p>
  <p>🏫 <span class="cmd-cyan">Class X (2020)</span></p>
  <p>   Sibpur Hindu Girls' High School | Board: <strong>West Bengal Board (WBBSE)</strong> | Score: <strong>89.28%</strong></p>
</div>`,

      contact: () => `
<div class="terminal-contact-res">
  <p>📧 Email: <a href="mailto:shreya.patra2510@gmail.com" class="cmd-cyan">shreya.patra2510@gmail.com</a></p>
  <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/shreyap777" target="_blank" class="cmd-cyan">linkedin.com/in/shreyap777</a></p>
  <p>🐙 GitHub: <a href="https://github.com/shreyap777-cs" target="_blank" class="cmd-cyan">github.com/shreyap777-cs</a></p>
</div>`,

      status: () => `
<div class="terminal-status-res">
  <p>⚡ <span class="cmd-green">STATUS:</span> Open to entry level and freshers role</p>
  <p>📍 <span class="cmd-cyan">LOCATION:</span> Kolkata, India / Open to Relocation & Remote</p>
  <p>💡 <span class="cmd-purple">EXPERIENCE:</span> Fresher (Strong Academic & Hands-on Project Background)</p>
</div>`,

      warp: () => {
        if (window.cyberParticles) window.cyberParticles.triggerWarp(2500);
        return `<span class="cmd-cyan">🚀 HYPERSPACE WARP ENGAGED. PREPARE FOR JUMP...</span>`;
      },

      clear: () => {
        this.output.innerHTML = '';
        return null;
      },

      sudo: () => `<span class="cmd-red">ACCESS RESTRICTED: Root clearance granted to Shreya. 😉</span>`
    };

    this.bindEvents();
    this.initWelcomeMessage();
  }

  initWelcomeMessage() {
    this.printLine(`
<div class="terminal-boot">
  <span class="cmd-cyan">PORTFOLIO TERMINAL v2.0</span><br/>
  Connected to <strong>Shreya Patra</strong>'s workspace.<br/>
  Type <span class="cmd-cyan">'help'</span> or <span class="cmd-cyan">'skills'</span> to explore.
</div>`);
  }

  bindEvents() {
    if (!this.input) return;

    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const rawCmd = this.input.value.trim();
        if (rawCmd) {
          this.history.push(rawCmd);
          this.historyIndex = this.history.length;
          this.executeCommand(rawCmd);
          this.input.value = '';
        }
      } else if (e.key === 'ArrowUp') {
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex];
        }
        e.preventDefault();
      } else if (e.key === 'ArrowDown') {
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
        e.preventDefault();
      }
    });

    this.container.addEventListener('click', () => {
      this.input.focus();
    });
  }

  executeCommand(cmdStr) {
    const cmd = cmdStr.toLowerCase().trim();
    this.printLine(`<div class="terminal-cmd-echo"><span class="cmd-user">shreya@terminal:~$</span> ${cmdStr}</div>`);

    if (this.commands[cmd]) {
      const res = this.commands[cmd]();
      if (res) this.printLine(res);
    } else {
      this.printLine(`<div class="terminal-cmd-err">Command not recognized: '${cmdStr}'. Type <span class="cmd-cyan">'help'</span> for available commands.</div>`);
    }

    this.output.scrollTop = this.output.scrollHeight;
  }

  printLine(html) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = html;
    this.output.appendChild(line);
    this.output.scrollTop = this.output.scrollHeight;
  }
}

window.CyberTerminal = CyberTerminal;

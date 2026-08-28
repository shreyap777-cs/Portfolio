// Main Application Controller & Dynamic Renderer
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Subsystems
  if (window.CyberParticleEngine) {
    window.cyberParticles = new CyberParticleEngine('particleCanvas');
  }
  if (window.HeroEngine) {
    window.heroEngine = new HeroEngine();
  }
  if (window.CyberTerminal) {
    window.terminal = new CyberTerminal('cyberTerminal');
  }
  if (window.CyberCursor && window.innerWidth > 900) {
    window.cyberCursor = new CyberCursor();
  }

  // Initialize UI Features
  initNavbar();
  initSkillsMatrix();
  initProjectCards();
  initContactForm();
  initScrollSpy();
  initAudioToggle();
});

// 1. Navbar Controller
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }, { passive: true });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
      if (window.cyberAudio) window.cyberAudio.playClick();
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        if (mobileMenu) mobileMenu.classList.remove('open');
        if (mobileToggle) mobileToggle.classList.remove('active');
        if (window.cyberAudio) window.cyberAudio.playClick();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// 2. Audio Mute Toggle
function initAudioToggle() {
  const soundBtn = document.getElementById('soundToggleBtn');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    if (window.cyberAudio) {
      const isMuted = window.cyberAudio.toggleMute();
      soundBtn.innerHTML = isMuted
        ? `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg> <span>AUDIO: OFF</span>`
        : `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg> <span class="text-glow">AUDIO: ON</span>`;
      soundBtn.classList.toggle('audio-active', !isMuted);
      showToast(isMuted ? 'Audio System Muted' : 'Audio Cyber Synthesizer Engaged! 🔊');
    }
  });
}

// 3. Dynamic Skills Matrix with Category Filters & Search
function initSkillsMatrix() {
  const categoryContainer = document.getElementById('skillsCategories');
  const gridContainer = document.getElementById('skillsGrid');
  const searchInput = document.getElementById('skillsSearchInput');
  const countBadge = document.getElementById('skillsCountBadge');

  if (!gridContainer || !window.SKILLS_DATA) return;

  let currentCategory = 'all';
  let searchTerm = '';

  // Render category buttons
  if (categoryContainer && window.SKILLS_CATEGORIES) {
    categoryContainer.innerHTML = window.SKILLS_CATEGORIES.map(cat => `
      <button class="skill-cat-btn ${cat.id === 'all' ? 'active' : ''}" data-cat="${cat.id}">
        <span class="cat-icon">${cat.icon}</span>
        <span class="cat-label">${cat.label}</span>
      </button>
    `).join('');

    categoryContainer.querySelectorAll('.skill-cat-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        categoryContainer.querySelectorAll('.skill-cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.cat;
        if (window.cyberAudio) window.cyberAudio.playClick();
        renderSkills();
      });
    });
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      renderSkills();
    });
  }

  function renderSkills() {
    const filtered = window.SKILLS_DATA.filter(skill => {
      const matchCat = currentCategory === 'all' || skill.category === currentCategory;
      const matchSearch = !searchTerm ||
        skill.name.toLowerCase().includes(searchTerm) ||
        skill.desc.toLowerCase().includes(searchTerm) ||
        skill.level.toLowerCase().includes(searchTerm);
      return matchCat && matchSearch;
    });

    if (countBadge) {
      countBadge.textContent = `${filtered.length} / ${window.SKILLS_DATA.length} MODULES`;
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="skills-empty-state">
          <p class="text-zinc-400">No cyber technologies found matching "${searchTerm}"</p>
          <button class="cyber-btn-sm mt-3" onclick="document.getElementById('skillsSearchInput').value=''; document.querySelector('.skill-cat-btn[data-cat=all]').click();">Reset Filters</button>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered.map((skill, i) => `
      <div class="skill-card glass-card" style="--skill-color: ${skill.color}; --skill-glow: ${skill.glow}; animation-delay: ${i * 40}ms" data-hover="true">
        <div class="skill-card-sheen"></div>
        <div class="skill-card-header">
          <div class="skill-icon-wrap" style="color: ${skill.color}; box-shadow: 0 0 20px ${skill.glow};">
            ${skill.icon}
          </div>
          <div class="skill-level-badge" style="border-color: ${skill.color}55; color: ${skill.color}">
            ${skill.level}
          </div>
        </div>
        <div class="skill-card-body">
          <h3 class="skill-name">${skill.name}</h3>
          <p class="skill-desc">${skill.desc}</p>
        </div>
        <div class="skill-card-footer">
          <div class="skill-bar-wrap">
            <div class="skill-bar-fill" style="width: ${skill.percent}%; background: linear-gradient(90deg, ${skill.color}, #00F0FF);"></div>
          </div>
          <span class="skill-percent" style="color: ${skill.color}">${skill.percent}%</span>
        </div>
      </div>
    `).join('');

    // Attach 3D tilt effects
    attachCardTilt(gridContainer.querySelectorAll('.skill-card'));
  }

  // Initial render
  renderSkills();
}

// 4. 3D Card Tilt Interaction
function attachCardTilt(cards) {
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;

      const sheen = card.querySelector('.skill-card-sheen, .project-card-sheen');
      if (sheen) {
        sheen.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 60%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      const sheen = card.querySelector('.skill-card-sheen, .project-card-sheen');
      if (sheen) sheen.style.background = 'transparent';
    });
  });
}

// 5. Projects Interactive Engine
function initProjectCards() {
  const projectCards = document.querySelectorAll('.project-card');
  attachCardTilt(projectCards);
}

// 6. Contact Form Submission with Simulated API
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    const btn = form.querySelector('.contact-submit-btn');

    if (!name || !email || !message) {
      showToast('⚠️ Please complete all telemetry fields.', 'error');
      return;
    }

    btn.disabled = true;
    btn.innerHTML = `<span class="spinner"></span> Transmitting Payload...`;

    try {
      // Send to server API or simulated quantum relay
      await new Promise(r => setTimeout(r, 1200));

      showToast(`Transmission received! Shreya will respond to ${email} shortly. 🚀`, 'success');
      if (window.cyberAudio) window.cyberAudio.playActivate();
      form.reset();
    } catch (err) {
      showToast('Transmission glitch. Please retry or email directly.', 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = `<span>Send Transmission</span> <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
    }
  });
}

// 7. ScrollSpy & Intersection Reveal
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => observer.observe(s));

  // Reveal animations
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));
}

// 8. Cyberpunk Toast Notifications
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `cyber-toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-indicator"></div>
    <div class="toast-body">${message}</div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

window.showToast = showToast;

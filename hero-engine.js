// Hero Engine: Controls Video 1.mp4, Synchronized Subtitles, HUD Telemetry & Hyperspace Transition
class HeroEngine {
  constructor() {
    this.video = document.getElementById('heroVideo');
    this.container = document.getElementById('heroContainer');
    this.subtitlesEl = document.getElementById('heroSubtitles');
    this.roleBadgeEl = document.getElementById('heroRoleBadge');
    this.warpOverlay = document.getElementById('warpOverlay');
    this.soundToggleBtn = document.getElementById('soundToggleBtn');
    this.replayBtn = document.getElementById('replayIntroBtn');
    this.skipBtn = document.getElementById('skipIntroBtn');

    // Video Cue Points (matching Video 1.mp4 exactly)
    this.cues = [
      { start: 0.0, end: 1.8, role: 'SYSTEM ONLINE', title: "Hi! I'm Shreya Patra", desc: "AI Engineer & Creative Problem Solver" },
      { start: 1.8, end: 3.2, role: 'ROLE_01 // DEV', title: "I'm a Developer", desc: "Crafting robust AI algorithms, Python pipelines & scalable web platforms." },
      { start: 3.2, end: 4.9, role: 'ROLE_02 // DESIGN', title: "I'm a Designer", desc: "Architecting intuitive UI/UX, holographic cyber systems & modern design tokens." },
      { start: 4.9, end: 6.8, role: 'ROLE_03 // ENG', title: "I'm an Engineer", desc: "Designing precision mechanical data systems, cyber defenses & ML architectures." },
      { start: 6.8, end: 8.0, role: 'ROLE_04 // SOLVER', title: "I'm a Problem Solver", desc: "Translating complex mathematical challenges into elegant high-impact solutions." },
      { start: 8.0, end: 9.5, role: 'WARP // TRANSCEND', title: "Entering Cyberspace...", desc: "Initializing full portfolio database." }
    ];

    this.currentCueIndex = -1;
    this.hasTriggeredWarp = false;
    this.isScrollDriven = false;

    this.init();
  }

  init() {
    if (!this.video) return;

    // Set video attributes for autoplay compatibility
    this.video.muted = true;
    this.video.playsInline = true;
    this.video.autoplay = true;

    // Start video playback
    const playPromise = this.video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy prevented playback, attach click listener
        document.body.addEventListener('click', () => this.video.play(), { once: true });
      });
    }

    // Time update listener
    this.video.addEventListener('timeupdate', () => this.onTimeUpdate());
    this.video.addEventListener('ended', () => this.onEnded());

    // Scroll listener to smoothly scrub video if user scrolls
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });

    // Buttons
    if (this.replayBtn) {
      this.replayBtn.addEventListener('click', () => this.replay());
    }
    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', () => this.skipToPortfolio());
    }
  }

  onTimeUpdate() {
    const t = this.video.currentTime;
    const duration = this.video.duration || 9.0;

    // Find current cue
    let activeCue = this.cues.find(c => t >= c.start && t < c.end);
    if (!activeCue && t >= 8.0) activeCue = this.cues[this.cues.length - 1];

    if (activeCue) {
      const cueIdx = this.cues.indexOf(activeCue);
      if (cueIdx !== this.currentCueIndex) {
        this.currentCueIndex = cueIdx;
        this.updateSubtitle(activeCue);
        if (window.cyberAudio) window.cyberAudio.playHover();
      }
    }

    // Trigger warp when reaching warp tunnel (t >= 8.0s)
    if (t >= 7.9 && !this.hasTriggeredWarp) {
      this.hasTriggeredWarp = true;
      if (window.cyberParticles) {
        window.cyberParticles.triggerWarp(2200);
      }
      if (window.cyberAudio) {
        window.cyberAudio.playWarp();
      }
      this.flashWarp();
    }
  }

  updateSubtitle(cue) {
    if (!this.subtitlesEl) return;

    this.subtitlesEl.style.opacity = '0';
    this.subtitlesEl.style.transform = 'translateY(12px) scale(0.97)';

    setTimeout(() => {
      if (this.roleBadgeEl) {
        this.roleBadgeEl.innerHTML = `<span class="pulse-dot"></span> ${cue.role}`;
      }
      this.subtitlesEl.innerHTML = `
        <h1 class="hero-title-text text-glow">${cue.title}</h1>
        <p class="hero-desc-text">${cue.desc}</p>
      `;
      this.subtitlesEl.style.opacity = '1';
      this.subtitlesEl.style.transform = 'translateY(0) scale(1)';
    }, 150);
  }

  flashWarp() {
    if (this.warpOverlay) {
      this.warpOverlay.classList.add('active');
      setTimeout(() => {
        this.warpOverlay.classList.remove('active');
      }, 1200);
    }
  }

  onEnded() {
    // Loop smoothly or scroll gently to About
    setTimeout(() => {
      this.hasTriggeredWarp = false;
      this.video.currentTime = 0;
      this.video.play().catch(() => {});
    }, 1000);
  }

  onScroll() {
    const heroRect = this.container.getBoundingClientRect();
    const scrollProgress = Math.min(1, Math.max(0, -heroRect.top / (heroRect.height - window.innerHeight * 0.5)));

    // When scrolling deep into hero, we can scrub time or allow video to progress
    if (scrollProgress > 0.85 && !this.hasTriggeredWarp) {
      this.hasTriggeredWarp = true;
      if (window.cyberParticles) window.cyberParticles.triggerWarp(1500);
    }
  }

  replay() {
    this.hasTriggeredWarp = false;
    this.video.currentTime = 0;
    this.video.play().catch(() => {});
    if (window.cyberAudio) window.cyberAudio.playActivate();
    this.updateSubtitle(this.cues[0]);
  }

  skipToPortfolio() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      if (window.cyberParticles) window.cyberParticles.triggerWarp(1000);
      if (window.cyberAudio) window.cyberAudio.playClick();
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

window.HeroEngine = HeroEngine;

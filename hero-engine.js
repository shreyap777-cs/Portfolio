// Hero Engine: Scroll-Driven Video Playback & Timed Welcome Transition
class HeroEngine {
  constructor() {
    this.video = document.getElementById('heroVideo');
    this.container = document.getElementById('heroContainer');
    this.welcomeSubtitle = document.getElementById('welcomeSubtitle');
    this.warpOverlay = document.getElementById('warpOverlay');
    this.replayBtn = document.getElementById('replayIntroBtn');
    this.skipBtn = document.getElementById('skipIntroBtn');
    this.scrollCue = document.getElementById('heroScrollCue');

    this.isPlaying = false;
    this.hasTriggeredWarp = false;
    this.duration = 9.0;
    this.targetTime = 0;
    this.rafId = null;

    this.init();
  }

  init() {
    if (!this.video) return;

    this.video.muted = true;
    this.video.playsInline = true;
    this.video.pause();

    this.video.addEventListener('loadedmetadata', () => {
      this.duration = this.video.duration || 9.0;
    });

    // Scroll listener for interactive scrubbing
    window.addEventListener('scroll', () => this.onScroll(), { passive: true });

    // Time update listener
    this.video.addEventListener('timeupdate', () => this.onTimeUpdate());

    // Button interactions
    if (this.replayBtn) {
      this.replayBtn.addEventListener('click', () => this.togglePlayback());
    }
    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', () => this.skipToPortfolio());
    }

    // Initial check
    this.onScroll();
  }

  onScroll() {
    if (this.isPlaying) return; // If manually playing, don't override with scroll

    const scrollY = window.scrollY;
    const heroHeight = this.container ? this.container.offsetHeight : window.innerHeight;
    
    // Calculate scroll progress through hero section (0.0 to 1.0)
    const maxScroll = Math.max(1, heroHeight - 120);
    const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

    // Target time in video based on scroll
    this.targetTime = progress * (this.duration || 9.0);

    // Smooth scrub via RAF
    if (!this.rafId) {
      this.rafId = requestAnimationFrame(() => this.smoothScrub());
    }

    // Hide scroll cue once user starts scrolling
    if (this.scrollCue) {
      this.scrollCue.style.opacity = scrollY > 60 ? '0' : '0.85';
    }
  }

  smoothScrub() {
    this.rafId = null;
    if (!this.video) return;

    // Apply scrub smoothly
    if (Math.abs(this.video.currentTime - this.targetTime) > 0.05) {
      this.video.currentTime = this.targetTime;
    }

    this.checkCues(this.video.currentTime);
  }

  onTimeUpdate() {
    this.checkCues(this.video.currentTime);
  }

  checkCues(t) {
    // Reveal "Welcome to my portfolio" ONLY when robot body dissolves (t >= 7.0s)
    if (this.welcomeSubtitle) {
      if (t >= 7.0) {
        this.welcomeSubtitle.classList.add('visible');
      } else {
        this.welcomeSubtitle.classList.remove('visible');
      }
    }

    // Trigger subtle warp tunnel effect at transition end (t >= 7.9s)
    if (t >= 7.9 && !this.hasTriggeredWarp) {
      this.hasTriggeredWarp = true;
      if (window.cyberParticles) {
        window.cyberParticles.triggerWarp(2000);
      }
      this.flashWarp();
    } else if (t < 7.0) {
      this.hasTriggeredWarp = false;
    }
  }

  flashWarp() {
    if (this.warpOverlay) {
      this.warpOverlay.classList.add('active');
      setTimeout(() => {
        this.warpOverlay.classList.remove('active');
      }, 1000);
    }
  }

  togglePlayback() {
    if (!this.video) return;

    if (this.video.paused) {
      this.isPlaying = true;
      if (this.video.currentTime >= (this.duration - 0.5)) {
        this.video.currentTime = 0;
      }
      this.video.play();
      if (this.replayBtn) {
        this.replayBtn.innerHTML = `
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          <span>Pause Video</span>
        `;
      }
    } else {
      this.isPlaying = false;
      this.video.pause();
      if (this.replayBtn) {
        this.replayBtn.innerHTML = `
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          <span>Play Video</span>
        `;
      }
    }
  }

  skipToPortfolio() {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      if (window.cyberParticles) window.cyberParticles.triggerWarp(1000);
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

window.HeroEngine = HeroEngine;

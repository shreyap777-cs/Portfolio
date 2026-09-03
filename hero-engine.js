// Hero Engine: Autoplay Video & Timed Welcome Transition
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

    this.init();
  }

  init() {
    if (!this.video) return;

    this.video.muted = true;
    this.video.playsInline = true;
    this.video.currentTime = 0;

    this.video.addEventListener('loadedmetadata', () => {
      this.duration = this.video.duration || 9.0;
    });

    // Time update listener for cue points
    this.video.addEventListener('timeupdate', () => this.onTimeUpdate());

    // When video ends, show welcome and keep it visible
    this.video.addEventListener('ended', () => {
      this.isPlaying = false;
      this.updateReplayBtn(false);
      if (this.welcomeSubtitle) {
        this.welcomeSubtitle.classList.add('visible');
      }
    });

    // Button interactions
    if (this.replayBtn) {
      this.replayBtn.addEventListener('click', () => this.togglePlayback());
    }
    if (this.skipBtn) {
      this.skipBtn.addEventListener('click', () => this.skipToPortfolio());
    }

    // Hide scroll cue after a few seconds
    if (this.scrollCue) {
      this.scrollCue.style.opacity = '0.85';
      setTimeout(() => {
        if (this.scrollCue) this.scrollCue.style.opacity = '0';
      }, 4000);
    }

    // Autoplay on page load
    this.startAutoplay();
  }

  startAutoplay() {
    if (!this.video) return;
    this.isPlaying = true;
    this.updateReplayBtn(true);

    const playPromise = this.video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked by browser (e.g. no user interaction yet)
        // Fall back silently — user can press Play button
        this.isPlaying = false;
        this.updateReplayBtn(false);
      });
    }
  }

  onTimeUpdate() {
    this.checkCues(this.video.currentTime);
  }

  checkCues(t) {
    // Reveal "Welcome to my portfolio" when robot body dissolves (t >= 7.0s)
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

  updateReplayBtn(playing) {
    if (!this.replayBtn) return;
    if (playing) {
      this.replayBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
        <span>Pause Video</span>
      `;
    } else {
      this.replayBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        <span>Play Video</span>
      `;
    }
  }

  togglePlayback() {
    if (!this.video) return;

    if (this.video.paused) {
      this.isPlaying = true;
      if (this.video.currentTime >= (this.duration - 0.5)) {
        this.video.currentTime = 0;
        this.hasTriggeredWarp = false;
      }
      this.video.play();
      this.updateReplayBtn(true);
    } else {
      this.isPlaying = false;
      this.video.pause();
      this.updateReplayBtn(false);
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

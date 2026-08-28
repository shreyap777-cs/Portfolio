// Custom Futuristic Cyber Cursor Engine
class CyberCursor {
  constructor() {
    this.dot = document.getElementById('cursorDot');
    this.ring = document.getElementById('cursorRing');
    if (!this.dot || !this.ring) return;

    this.pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    this.isHovering = false;

    this.bindEvents();
    this.render();
  }

  bindEvents() {
    window.addEventListener('mousemove', (e) => {
      this.target.x = e.clientX;
      this.target.y = e.clientY;
      this.dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Check hoverable elements
    const hoverSelectors = 'a, button, input, textarea, .skill-card, .project-card, .timeline-node, [data-hover]';
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(hoverSelectors)) {
        this.ring.classList.add('cursor-hover');
        if (window.cyberAudio) window.cyberAudio.playHover();
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(hoverSelectors)) {
        this.ring.classList.remove('cursor-hover');
      }
    });

    document.addEventListener('mousedown', () => {
      this.ring.classList.add('cursor-click');
      if (window.cyberAudio) window.cyberAudio.playClick();
    });

    document.addEventListener('mouseup', () => {
      this.ring.classList.remove('cursor-click');
    });
  }

  render() {
    // Smooth lerp for outer ring
    this.pos.x += (this.target.x - this.pos.x) * 0.18;
    this.pos.y += (this.target.y - this.pos.y) * 0.18;

    this.ring.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px)`;
    requestAnimationFrame(() => this.render());
  }
}

window.CyberCursor = CyberCursor;

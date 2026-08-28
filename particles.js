// Ambient Starfield, Cyber Grid & Hyperspace Warp Canvas Engine
class CyberParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.warpStars = [];
    this.numParticles = 65;
    this.numWarpStars = 350;
    this.isWarping = false;
    this.warpSpeed = 0.5;
    this.mouse = { x: null, y: null, radius: 120 };

    this.resize();
    this.initParticles();
    this.initWarpStars();
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.6,
        color: Math.random() > 0.6 ? '#00F0FF' : (Math.random() > 0.5 ? '#A855F7' : '#3B82F6'),
        alpha: Math.random() * 0.6 + 0.2
      });
    }
  }

  initWarpStars() {
    this.warpStars = [];
    for (let i = 0; i < this.numWarpStars; i++) {
      this.warpStars.push({
        x: (Math.random() - 0.5) * this.width * 2,
        y: (Math.random() - 0.5) * this.height * 2,
        z: Math.random() * this.width,
        pz: 0,
        color: Math.random() > 0.4 ? '#00F0FF' : '#E0E7FF'
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.initParticles();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  triggerWarp(duration = 2000) {
    this.isWarping = true;
    this.warpSpeed = 15;
    if (window.cyberAudio) window.cyberAudio.playWarp();

    setTimeout(() => {
      let fadeOut = setInterval(() => {
        this.warpSpeed *= 0.85;
        if (this.warpSpeed <= 0.8) {
          this.warpSpeed = 0.5;
          this.isWarping = false;
          clearInterval(fadeOut);
        }
      }, 50);
    }, duration);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.isWarping) {
      this.drawWarp();
    } else {
      this.drawAmbient();
    }
  }

  drawAmbient() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw connecting lines
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 130)})`;
          this.ctx.lineWidth = 0.7;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }

    // Draw & update particles
    for (let p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      // Mouse repulsion
      if (this.mouse.x !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          const force = (1 - dist / this.mouse.radius) * 1.5;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
      this.ctx.shadowBlur = 0;
    }
  }

  drawWarp() {
    this.ctx.fillStyle = 'rgba(5, 7, 13, 0.35)';
    this.ctx.fillRect(0, 0, this.width, this.height);

    const cx = this.width / 2;
    const cy = this.height / 2;

    for (let star of this.warpStars) {
      star.pz = star.z;
      star.z -= this.warpSpeed;

      if (star.z <= 0) {
        star.z = this.width;
        star.pz = star.z;
        star.x = (Math.random() - 0.5) * this.width * 2;
        star.y = (Math.random() - 0.5) * this.height * 2;
      }

      const k = 128.0 / star.z;
      const px = star.x * k + cx;
      const py = star.y * k + cy;

      if (px >= 0 && px <= this.width && py >= 0 && py <= this.height) {
        const pk = 128.0 / star.pz;
        const ppx = star.x * pk + cx;
        const ppy = star.y * pk + cy;

        const size = (1 - star.z / this.width) * 3 + 0.5;

        this.ctx.beginPath();
        this.ctx.moveTo(ppx, ppy);
        this.ctx.lineTo(px, py);
        this.ctx.lineWidth = size;
        this.ctx.strokeStyle = star.color;
        this.ctx.shadowBlur = 10;
        this.ctx.shadowColor = star.color;
        this.ctx.stroke();
        this.ctx.shadowBlur = 0;
      }
    }
  }
}

window.CyberParticleEngine = CyberParticleEngine;

// World Cup Draft & Simulation - Sound Synthesizer Module

class AudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('wc_draft_muted') === 'true';
    this.crowdNode = null;
    this.crowdGain = null;
  }

  init() {
    if (this.ctx) return;
    // Create audio context lazily
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      this.ctx = new AudioContextClass();
    }
  }

  setMute(isMuted) {
    this.muted = isMuted;
    localStorage.setItem('wc_draft_muted', isMuted ? 'true' : 'false');
    if (this.muted) {
      this.stopCrowdAtmosphere();
    } else {
      this.init();
      // If we are currently on a match screen, we might want to restart, but we let app.js handle it
    }
  }

  toggleMute() {
    this.setMute(!this.muted);
    return this.muted;
  }

  // Crisp short click sound
  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(150, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  // Pack rip/opening swoosh and spark explosion
  playPackOpen() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    
    // 1. Swoosh (Filter Sweep)
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(100, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.4);
    
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.5);

    // 2. Tear Burst (White Noise explosion)
    setTimeout(() => {
      if (this.muted || !this.ctx) return;
      const bufferSize = this.ctx.sampleRate * 0.4; // 0.4 seconds
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1000, this.ctx.currentTime);
      filter.Q.setValueAtTime(3, this.ctx.currentTime);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.35);

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      noise.start();
      noise.stop(this.ctx.currentTime + 0.4);
    }, 380);
  }

  // Double whistle sound (referee whistle)
  playWhistle() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Play two whistling sounds rapidly
    this._synthWhistle(now, 0.25);
    this._synthWhistle(now + 0.3, 0.45);
  }

  _synthWhistle(startTime, duration) {
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(1000, startTime);
    // Vibrato effect using LFO on frequency
    osc1.frequency.linearRampToValueAtTime(1050, startTime + duration * 0.2);
    osc1.frequency.linearRampToValueAtTime(950, startTime + duration * 0.5);
    osc1.frequency.linearRampToValueAtTime(1000, startTime + duration);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1200, startTime);
    osc2.frequency.linearRampToValueAtTime(1250, startTime + duration * 0.2);
    osc2.frequency.linearRampToValueAtTime(1150, startTime + duration * 0.5);
    osc2.frequency.linearRampToValueAtTime(1200, startTime + duration);

    gain.gain.setValueAtTime(0.01, startTime);
    gain.gain.linearRampToValueAtTime(0.12, startTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration);
    osc2.stop(startTime + duration);
  }

  // Ambient crowd roar/chant generator
  startCrowdAtmosphere() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    if (this.crowdNode) return; // already running

    const now = this.ctx.currentTime;

    // We generate continuous noise using a script processor or loop buffer
    const bufferSize = this.ctx.sampleRate * 2.0; // 2 seconds loop
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    this.crowdNode = this.ctx.createBufferSource();
    this.crowdNode.buffer = buffer;
    this.crowdNode.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, now);

    this.crowdGain = this.ctx.createGain();
    this.crowdGain.gain.setValueAtTime(0.02, now); // low volume constant murmur

    this.crowdNode.connect(filter);
    filter.connect(this.crowdGain);
    this.crowdGain.connect(this.ctx.destination);

    this.crowdNode.start(now);
  }

  setCrowdVolume(level) {
    if (this.muted || !this.ctx || !this.crowdGain) return;
    // level is 0.0 to 1.0
    const targetVolume = 0.02 + level * 0.08;
    this.crowdGain.gain.linearRampToValueAtTime(targetVolume, this.ctx.currentTime + 0.5);
  }

  stopCrowdAtmosphere() {
    if (this.crowdNode) {
      try {
        this.crowdNode.stop();
      } catch(e) {}
      this.crowdNode = null;
    }
    this.crowdGain = null;
  }

  // Giant cheer explosion
  playGoalCheer() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    
    // Set current crowd noise to high temporarily
    this.setCrowdVolume(1.0);
    setTimeout(() => {
      this.setCrowdVolume(0.1); // decay down to stadium murmur
    }, 2800);

    // Horn/Vuvuzela synth sound
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const hornGain = this.ctx.createGain();

    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(180, now);
    osc1.frequency.linearRampToValueAtTime(220, now + 1.5);
    
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(183, now);
    osc2.frequency.linearRampToValueAtTime(223, now + 1.5);

    hornGain.gain.setValueAtTime(0.08, now);
    hornGain.gain.exponentialRampToValueAtTime(0.01, now + 1.8);

    osc1.connect(hornGain);
    osc2.connect(hornGain);
    hornGain.connect(this.ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 1.8);
    osc2.stop(now + 1.8);
  }
}

export const audio = new AudioSynthesizer();

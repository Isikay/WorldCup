import { i18n } from './i18n.js';
import { audio } from './audio.js';

export class ScreenManager {
  constructor(controller) {
    this.controller = controller;
  }

  showScreen(screenId) {
    if (screenId !== 'screen-stats') {
      this.controller.lastActiveGameScreen = screenId;
    }
    
    // Stop simulation ticks and ambient audio if exiting match arena
    if (screenId !== 'screen-match') {
      if (this.controller.matchIntervalId) {
        clearInterval(this.controller.matchIntervalId);
        this.controller.matchIntervalId = null;
      }
      this.controller.currentMatchSimulator = null;
      audio.stopCrowdAtmosphere();
    }

    // Hide trophy room header button during active match
    const navStatsBtn = document.getElementById('nav-stats-btn');
    if (navStatsBtn) {
      if (screenId === 'screen-match') {
        navStatsBtn.style.display = 'none';
      } else {
        navStatsBtn.style.display = 'flex';
      }
    }

    const screens = document.querySelectorAll('.game-screen');
    screens.forEach(s => {
      s.classList.remove('active');
      s.classList.add('hidden');
    });
    
    const active = document.getElementById(screenId);
    if (active) {
      active.classList.remove('hidden');
      void active.offsetWidth; // Force reflow
      active.classList.add('active');
    }
  }

  validateSetupForm() {
    const mName = document.getElementById('input-manager').value.trim();
    const tName = document.getElementById('input-team').value.trim();
    const btn = document.getElementById('btn-start-game');

    const isValid = mName.length > 0 && tName.length > 0 && this.controller.selectedFormation !== null;
    if (btn) {
      if (isValid) {
        btn.classList.remove('disabled');
        btn.disabled = false;
      } else {
        btn.classList.add('disabled');
        btn.disabled = true;
      }
    }
  }

  updateSoundButtonUI(isMuted = audio.muted) {
    const btn = document.getElementById('sound-btn');
    if (btn) {
      const soundIcon = btn.querySelector('.sound-icon');
      if (soundIcon) soundIcon.textContent = isMuted ? "🔇" : "🔊";
    }
  }
}

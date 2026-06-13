import { i18n } from './i18n.js';
import { audio } from './audio.js';
import { playersDatabase } from './data.js';

// Select 1 player from pool matching tier roll
function selectPlayerFromPoolWithTierRoll(pool, excludedSet, round = 0) {
  const available = pool.filter(p => !excludedSet.has(p.id || p.name));
  if (available.length === 0) return null;

  // Probabilities scale by round (0-2 Group, 3 QF, 4 SF, 5 Final)
  let tierProbs;
  if (round < 3) {
    tierProbs = [
      { tier: "icon", min: 95, max: 100, prob: 0.02 },
      { tier: "hero", min: 90, max: 94,  prob: 0.08 },
      { tier: "gold", min: 80, max: 89,  prob: 0.45 },
      { tier: "silver", min: 70, max: 79, prob: 0.30 },
      { tier: "bronze", min: 0,  max: 69,  prob: 0.15 }
    ];
  } else if (round === 3) {
    tierProbs = [
      { tier: "icon", min: 95, max: 100, prob: 0.06 },
      { tier: "hero", min: 90, max: 94,  prob: 0.14 },
      { tier: "gold", min: 80, max: 89,  prob: 0.50 },
      { tier: "silver", min: 70, max: 79, prob: 0.20 },
      { tier: "bronze", min: 0,  max: 69,  prob: 0.10 }
    ];
  } else if (round === 4) {
    tierProbs = [
      { tier: "icon", min: 95, max: 100, prob: 0.12 },
      { tier: "hero", min: 90, max: 94,  prob: 0.23 },
      { tier: "gold", min: 80, max: 89,  prob: 0.45 },
      { tier: "silver", min: 70, max: 79, prob: 0.15 },
      { tier: "bronze", min: 0,  max: 69,  prob: 0.05 }
    ];
  } else {
    tierProbs = [
      { tier: "icon", min: 95, max: 100, prob: 0.25 },
      { tier: "hero", min: 90, max: 94,  prob: 0.35 },
      { tier: "gold", min: 80, max: 89,  prob: 0.30 },
      { tier: "silver", min: 70, max: 79, prob: 0.08 },
      { tier: "bronze", min: 0,  max: 69,  prob: 0.02 }
    ];
  }

  const rand = Math.random();
  let cumulative = 0;
  let rolledTier = tierProbs[tierProbs.length - 1];
  for (const t of tierProbs) {
    cumulative += t.prob;
    if (rand <= cumulative) {
      rolledTier = t;
      break;
    }
  }

  let matching = available.filter(p => p.rating >= rolledTier.min && p.rating <= rolledTier.max);

  if (matching.length === 0) {
    const sortedTiers = [...tierProbs].sort((a, b) => {
      const midA = (a.min + a.max) / 2;
      const midB = (b.min + b.max) / 2;
      const midRolled = (rolledTier.min + rolledTier.max) / 2;
      return Math.abs(midA - midRolled) - Math.abs(midB - midRolled);
    });

    for (const t of sortedTiers) {
      matching = available.filter(p => p.rating >= t.min && p.rating <= t.max);
      if (matching.length > 0) break;
    }
  }

  if (matching.length === 0) {
    matching = available;
  }

  return matching[Math.floor(Math.random() * matching.length)];
}

export class RewardManager {
  constructor(controller) {
    this.controller = controller;
    this.selectedRewardPlayer = null;
  }

  triggerRewardPackFlow(callback) {
    const modal = document.getElementById('modal-reward-pack');
    if (!modal) {
      callback();
      return;
    }

    const sceneOpening = document.getElementById('reward-pack-opening');
    const sceneSelection = document.getElementById('reward-player-selection');
    const sceneSwap = document.getElementById('reward-swap-interface');
    
    sceneOpening.classList.remove('hidden');
    sceneSelection.classList.add('hidden');
    sceneSwap.classList.add('hidden');
    modal.classList.remove('hidden');

    const pack = sceneOpening.querySelector('.card-pack');
    if (pack) pack.classList.remove('pack-tear-top');

    const userSquadIds = new Set([
      ...this.controller.draftStarters.filter(p => p).map(p => p.id || p.name),
      ...this.controller.draftBench.filter(p => p).map(p => p.id || p.name)
    ]);
    const available = playersDatabase.filter(p => !userSquadIds.has(p.id || p.name));
    
    const rewardOptions = [];
    const chosenSet = new Set();
    for (let i = 0; i < 3; i++) {
      const p = selectPlayerFromPoolWithTierRoll(available, chosenSet, this.controller.tournamentRound);
      if (p) {
        rewardOptions.push(p);
        chosenSet.add(p.id || p.name);
      }
    }

    const packWrapper = document.getElementById('reward-pack-wrapper');
    const onPackClick = () => {
      audio.playPackOpen();
      if (pack) pack.classList.add('pack-tear-top');
      
      setTimeout(() => {
        sceneOpening.classList.add('hidden');
        sceneSelection.classList.remove('hidden');
        this.renderRewardOptionsList(rewardOptions, callback);
      }, 800);
    };

    packWrapper.replaceWith(packWrapper.cloneNode(true));
    document.getElementById('reward-pack-wrapper').addEventListener('click', onPackClick);

    const skipBtn = document.getElementById('btn-skip-reward');
    const onSkipClick = () => {
      audio.playClick();
      modal.classList.add('hidden');
      callback();
    };
    skipBtn.replaceWith(skipBtn.cloneNode(true));
    document.getElementById('btn-skip-reward').addEventListener('click', onSkipClick);

    const cancelSwapBtn = document.getElementById('btn-cancel-swap');
    const onCancelClick = () => {
      audio.playClick();
      sceneSwap.classList.add('hidden');
      sceneSelection.classList.remove('hidden');
    };
    cancelSwapBtn.replaceWith(cancelSwapBtn.cloneNode(true));
    document.getElementById('btn-cancel-swap').addEventListener('click', onCancelClick);
  }

  renderRewardOptionsList(options, callback) {
    const container = document.getElementById('reward-cards-container');
    container.innerHTML = "";

    options.forEach(player => {
      const wrapper = document.createElement('div');
      wrapper.className = "reward-card-wrapper";
      wrapper.innerHTML = this.controller.draftManager.generateSelectionCardHTML(player);
      
      wrapper.addEventListener('click', () => {
        audio.playClick();
        this.selectedRewardPlayer = player;
        this.showRewardSwapInterface(callback);
      });

      container.appendChild(wrapper);
    });
  }

  showRewardSwapInterface(callback) {
    const sceneSelection = document.getElementById('reward-player-selection');
    const sceneSwap = document.getElementById('reward-swap-interface');
    
    sceneSelection.classList.add('hidden');
    sceneSwap.classList.remove('hidden');

    const newPlayer = this.selectedRewardPlayer;
    document.getElementById('reward-swap-desc').innerHTML = i18n.currentLang === 'tr'
      ? `Yeni oyuncu: <strong>${newPlayer.name} (${newPlayer.position})</strong>. Kadronuzda yerini almasını istediğiniz oyuncuya tıklayın.`
      : `New player: <strong>${newPlayer.name} (${newPlayer.position})</strong>. Click the squad player you wish to replace.`;

    const startersList = document.getElementById('reward-starters-list');
    startersList.innerHTML = "";
    
    const pitch = document.createElement('div');
    pitch.className = "football-pitch mini-pitch-layout";
    pitch.style.width = "100%";
    pitch.style.maxWidth = "480px";
    pitch.style.margin = "0 auto";
    pitch.style.background = "var(--bg-pitch)";
    pitch.style.border = "2px solid rgba(255, 255, 255, 0.15)";
    pitch.style.borderRadius = "8px";
    pitch.style.aspectRatio = "4 / 3";
    pitch.style.position = "relative";
    pitch.style.overflow = "hidden";

    pitch.innerHTML = `
      <div class="pitch-markings" style="position: absolute; width: 100%; height: 100%; pointer-events: none;">
        <div class="pitch-center-circle" style="position: absolute; top: 50%; left: 50%; width: 18%; aspect-ratio: 1; border: 1.5px solid rgba(255, 255, 255, 0.12); border-radius: 50%; transform: translate(-50%, -50%);"></div>
        <div class="pitch-center-line" style="position: absolute; left: 50%; top: 0; width: 1.5px; height: 100%; background: rgba(255, 255, 255, 0.12);"></div>
        <div class="pitch-penalty-area top" style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 45%; height: 18%; border: 1.5px solid rgba(255,255,255,0.12); border-top: none;"></div>
        <div class="pitch-penalty-area bottom" style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 45%; height: 18%; border: 1.5px solid rgba(255,255,255,0.12); border-bottom: none;"></div>
      </div>
    `;

    this.controller.draftStarters.forEach((player, idx) => {
      if (!player) return;
      const slot = this.controller.selectedFormation.slots[idx];

      const slotEl = document.createElement('div');
      slotEl.className = "pitch-slot";
      slotEl.style.position = "absolute";
      slotEl.style.left = `${slot.x}%`;
      slotEl.style.top = `${slot.y}%`;
      slotEl.style.transform = "translate(-50%, -50%)";
      slotEl.style.cursor = "pointer";
      slotEl.style.zIndex = "5";

      const effRating = this.controller.draftManager.getEffectiveRating(player, slot.pos);
      const ratingDiff = effRating - player.rating;

      const stamina = Math.round(player.stamina || 100);
      let staminaClass = "stamina-high";
      if (stamina < 40) staminaClass = "stamina-low";
      else if (stamina < 70) staminaClass = "stamina-medium";

      slotEl.innerHTML = `
        <div class="mini-player-card">
          <div class="mini-card-badge ${staminaClass}">
            <span class="mini-avatar">${player.emoji}</span>
            <span class="mini-rating-badge ${ratingDiff < 0 ? 'penalty' : ''}">${effRating}</span>
            <span class="mini-pos-badge">${slot.pos}</span>
          </div>
          <div class="mini-name-capsule">
            <span class="mini-player-name">${player.name}</span>
            <span class="mini-player-meta" style="color: ${stamina < 40 ? '#ef4444' : (stamina < 70 ? '#f59e0b' : '#a7f3d0')}">⚡${stamina}%</span>
          </div>
        </div>
      `;

      slotEl.addEventListener('click', () => {
        audio.playClick();
        this.executeRewardSwap(idx, "starter", callback);
      });

      pitch.appendChild(slotEl);
    });

    startersList.appendChild(pitch);

    const benchList = document.getElementById('reward-bench-list');
    benchList.innerHTML = "";

    this.controller.draftBench.forEach((player, idx) => {
      if (!player) return;
      const item = document.createElement('div');
      item.className = "sub-item-card";
      item.innerHTML = `
        <div class="sub-item-info">
          <span class="sub-item-rating">${player.rating}</span>
          <span class="sub-item-name">${player.name}</span>
        </div>
        <span class="sub-item-pos">${player.position}</span>
      `;
      item.addEventListener('click', () => {
        audio.playClick();
        this.executeRewardSwap(idx, "bench", callback);
      });
      benchList.appendChild(item);
    });
  }

  executeRewardSwap(idx, type, callback) {
    const newPlayer = this.selectedRewardPlayer;
    if (type === "starter") {
      const oldPlayer = this.controller.draftStarters[idx];
      this.controller.draftStarters[idx] = newPlayer;
      if (oldPlayer) this.controller.draftedPlayerIds.delete(oldPlayer.id || oldPlayer.name);
    } else {
      const oldPlayer = this.controller.draftBench[idx];
      this.controller.draftBench[idx] = newPlayer;
      if (oldPlayer) this.controller.draftedPlayerIds.delete(oldPlayer.id || oldPlayer.name);
    }
    this.controller.draftedPlayerIds.add(newPlayer.id || newPlayer.name);

    this.controller.draftManager.recalculateDraftStats();
    
    document.getElementById('modal-reward-pack').classList.add('hidden');
    callback();
  }
}

import { i18n } from './i18n.js';
import { audio } from './audio.js';
import { formations, playersDatabase, isPositionCompatible, getEligiblePositionsForSlot, getFlagUrl, getBasePosition } from './data.js';

const TIER_PROBABILITIES = [
  { tier: "icon", min: 95, max: 100, prob: 0.03 },
  { tier: "hero", min: 90, max: 94,  prob: 0.12 },
  { tier: "gold", min: 80, max: 89,  prob: 0.50 },
  { tier: "silver", min: 70, max: 79, prob: 0.25 },
  { tier: "bronze", min: 0,  max: 69,  prob: 0.10 }
];

function getPositionCategory(pos) {
  if (pos === "GK") return "GK";
  if (["CB", "LB", "RB", "LWB", "RWB", "LCB", "RCB"].includes(pos)) return "DEF";
  if (["CM", "CDM", "CAM", "LM", "RM", "LDM", "RDM", "LCM", "RCM"].includes(pos)) return "MID";
  if (["ST", "CF", "LW", "RW", "LS", "RS", "LAM", "RAM"].includes(pos)) return "ATT";
  return "MID";
}

function selectPlayerFromPoolWithTierRoll(pool, excludedSet) {
  const available = pool.filter(p => !excludedSet.has(p.id || p.name));
  if (available.length === 0) return null;

  const rand = Math.random();
  let cumulative = 0;
  let rolledTier = TIER_PROBABILITIES[TIER_PROBABILITIES.length - 1];
  for (const t of TIER_PROBABILITIES) {
    cumulative += t.prob;
    if (rand <= cumulative) {
      rolledTier = t;
      break;
    }
  }

  let matching = available.filter(p => p.rating >= rolledTier.min && p.rating <= rolledTier.max);

  if (matching.length === 0) {
    const sortedTiers = [...TIER_PROBABILITIES].sort((a, b) => {
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

export class DraftManager {
  constructor(controller) {
    this.controller = controller;
    this.selectedSwapSlot = null; // Track selected slot for swapping
  }

  getEffectiveRating(player, slotPos) {
    if (!player) return 0;
    
    // Mild form modifier: OVR altered by lastMatchRating if present
    let formMod = 0;
    if (player.lastMatchRating !== undefined) {
      if (player.lastMatchRating < 5.5) formMod = -1;
      else if (player.lastMatchRating > 8.0) formMod = 1;
    }
    
    const baseRating = player.rating + formMod;
    if (player.position === slotPos) return baseRating;

    // Zero penalty for same-position family (e.g. CM playing LCM, CB playing LCB)
    if (getBasePosition(slotPos) === getBasePosition(player.position)) {
      return baseRating;
    }

    const compatible = isPositionCompatible(slotPos, player.position);
    if (compatible) {
      return baseRating - 3;
    }

    if (player.position === "GK" || slotPos === "GK") {
      return Math.max(30, baseRating - 45);
    }

    return Math.max(40, baseRating - 15);
  }

  generateCardHTML(player, additionalClass = "", slotPos = null) {
    let rarity = "card-bronze";
    let isGlowing = false;

    let displayRating = player.rating;
    let penaltyBadge = "";
    if (slotPos && player.position !== slotPos) {
      const eff = this.getEffectiveRating(player, slotPos);
      const diff = eff - player.rating;
      displayRating = eff;
      penaltyBadge = `<span class="rating-diff-penalty">${diff}</span>`;
    }

    if (displayRating >= 95) {
      rarity = "card-icon";
      isGlowing = true;
    } else if (displayRating >= 90) {
      rarity = "card-hero";
      isGlowing = true;
    } else if (displayRating >= 80) {
      rarity = "card-gold";
    } else if (displayRating >= 70) {
      rarity = "card-silver";
    } else {
      rarity = "card-bronze";
    }

    let chemBadge = "";
    if (player.chemistry !== undefined && slotPos) {
      chemBadge = `<span class="card-chem-badge">🧪 ${Math.round(player.chemistry)}</span>`;
    }

    let formArrow = "";
    if (player.lastMatchRating !== undefined) {
      if (player.lastMatchRating < 5.5) {
        formArrow = `<div class="card-form-arrow down">▼</div>`;
      } else if (player.lastMatchRating > 8.0) {
        formArrow = `<div class="card-form-arrow up">▲</div>`;
      }
    }

    return `
      <div class="fut-card ${rarity} ${isGlowing ? 'glowing' : ''} ${additionalClass}" 
           data-player-id="${player.id || player.name}">
        <div class="card-top">
          <div class="card-rating-pos">
            <span class="card-rating">${displayRating}${penaltyBadge}</span>
            <span class="card-pos">${player.position}</span>
          </div>
          ${chemBadge}
          ${getFlagUrl(player.countryCode) ? `<img src="${getFlagUrl(player.countryCode, 40)}" class="card-flag-img" alt="${player.country}">` : `<span class="card-flag">${player.flag}</span>`}
        </div>
        <div class="card-avatar">${player.emoji}</div>
        <div class="card-info">
          <h4 class="card-name">${player.name}</h4>
          <div class="card-year-nation">
            <span>'${String(player.year).slice(-2)}</span>
            <span>/</span>
            <span>${player.country.slice(0, 3).toUpperCase()}</span>
          </div>
        </div>
        ${formArrow}
      </div>
    `;
  }

  generateSelectionCardHTML(player) {
    let rarity = "card-bronze";
    let isGlowing = false;

    if (player.rating >= 95) {
      rarity = "card-icon";
      isGlowing = true;
    } else if (player.rating >= 90) {
      rarity = "card-hero";
      isGlowing = true;
    } else if (player.rating >= 80) {
      rarity = "card-gold";
    } else if (player.rating >= 70) {
      rarity = "card-silver";
    } else {
      rarity = "card-bronze";
    }

    const stats = player.stats || {};
    const statNames = ['pac', 'sho', 'pas', 'dri', 'def', 'phy'];
    const statLabels = { pac: 'PAC', sho: 'SHO', pas: 'PAS', dri: 'DRI', def: 'DEF', phy: 'PHY' };

    let statBarsHTML = '<div class="card-stats-grid">';
    statNames.forEach(key => {
      const val = stats[key] || 50;
      const fillClass = val >= 80 ? 'stat-high' : (val >= 60 ? 'stat-mid' : 'stat-low');
      statBarsHTML += `
        <div class="card-stat-row">
          <span class="card-stat-label">${statLabels[key]}</span>
          <div class="card-stat-bar"><div class="card-stat-fill ${fillClass}" style="width:${val}%"></div></div>
          <span class="card-stat-val">${val}</span>
        </div>
      `;
    });
    statBarsHTML += '</div>';

    return `
      <div class="fut-card ${rarity} ${isGlowing ? 'glowing' : ''} selection-card-item" 
           data-player-id="${player.id || player.name}">
        <div class="card-top">
          <div class="card-rating-pos">
            <span class="card-rating">${player.rating}</span>
            <span class="card-pos">${player.position}</span>
          </div>
          ${getFlagUrl(player.countryCode) ? `<img src="${getFlagUrl(player.countryCode, 40)}" class="card-flag-img" alt="${player.country}">` : `<span class="card-flag">${player.flag}</span>`}
        </div>
        <div class="card-avatar">${player.emoji}</div>
        <div class="card-info">
          <h4 class="card-name">${player.name}</h4>
          <div class="card-year-nation">
            <span>'${String(player.year).slice(-2)}</span>
            <span>/</span>
            <span>${player.country.slice(0, 3).toUpperCase()}</span>
          </div>
          ${statBarsHTML}
        </div>
      </div>
    `;
  }

  renderFormationsList() {
    const container = document.getElementById('formations-list');
    if (!container) return;
    container.innerHTML = "";

    if (!this.controller.unlockedFormations || this.controller.unlockedFormations.length === 0) {
      const packCard = document.createElement('div');
      packCard.className = "formation-pack-card";
      packCard.innerHTML = `
        <div class="pack-glow"></div>
        <div class="pack-foil">
          <span class="pack-title">TACTICS</span>
          <span class="pack-subtitle">FORMATION PACK</span>
          <span class="pack-icon">📋</span>
        </div>
        <div class="pack-hint" data-i18n="btn_open_formation_pack">${i18n.t('btn_open_formation_pack')}</div>
      `;

      packCard.addEventListener('click', () => {
        audio.playPackOpen();
        packCard.classList.add('pack-tear-animation');
        
        setTimeout(() => {
          const allKeys = Object.keys(formations);
          const shuffled = allKeys.sort(() => Math.random() - 0.5);
          this.controller.unlockedFormations = shuffled.slice(0, 3).map(k => formations[k]);
          
          this.renderFormationsList();
          this.controller.screenManager.validateSetupForm();
        }, 800);
      });

      container.appendChild(packCard);
      container.classList.add('pack-mode');
      return;
    }

    container.classList.remove('pack-mode');
    this.controller.unlockedFormations.forEach(form => {
      const card = document.createElement('div');
      card.className = "formation-card";
      if (this.controller.selectedFormation === form) {
        card.classList.add('active');
      }

      card.innerHTML = `
        <div class="form-name">${form.name}</div>
        <div class="form-desc">${i18n.currentLang === 'tr' ? 'Düzenli' : 'Standard'}</div>
      `;

      card.addEventListener('click', () => {
        audio.playClick();
        document.querySelectorAll('.formation-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.controller.selectedFormation = form;
        this.controller.screenManager.validateSetupForm();
      });

      container.appendChild(card);
    });
  }

  renderPitchSlots() {
    const container = document.getElementById('pitch-slots-container');
    if (!container) return;
    container.innerHTML = "";

    if (!this.controller.selectedFormation) return;

    this.controller.selectedFormation.slots.forEach((slot, index) => {
      const slotEl = document.createElement('div');
      slotEl.className = "pitch-slot";
      slotEl.style.left = `${slot.x}%`;
      slotEl.style.top = `${slot.y}%`;

      const player = this.controller.draftStarters[index];
      const isSelectedForSwap = this.selectedSwapSlot && this.selectedSwapSlot.type === "starter" && this.selectedSwapSlot.index === index;

      if (player) {
        slotEl.innerHTML = this.generateCardHTML(player, "pitch-card" + (isSelectedForSwap ? " swap-selected" : ""), slot.pos);
        slotEl.classList.add('locked');
      } else {
        slotEl.innerHTML = `
          <div class="slot-bubble${isSelectedForSwap ? " swap-selected" : ""}">
            <span class="slot-plus">+</span>
          </div>
          <span class="slot-pos-label">${slot.pos}</span>
        `;
        slotEl.classList.remove('locked');
      }

      slotEl.addEventListener('click', () => {
        this.handleSlotClick(index, "starter", slot.pos);
      });

      container.appendChild(slotEl);
    });
  }

  renderBenchSlots() {
    const container = document.getElementById('bench-slots-container');
    if (!container) return;
    container.innerHTML = "";

    for (let i = 0; i < this.controller.draftBench.length; i++) {
      const slotEl = document.createElement('div');
      const isSelectedForSwap = this.selectedSwapSlot && this.selectedSwapSlot.type === "bench" && this.selectedSwapSlot.index === i;
      slotEl.className = "bench-slot" + (isSelectedForSwap ? " swap-selected" : "");

      const player = this.controller.draftBench[i];

      if (player) {
        slotEl.innerHTML = `
          ${this.generateCardHTML(player, "bench-card")}
          <div class="bench-bubble-empty" style="display:none">SUB</div>
          <span class="bench-lbl-empty" style="color:white;font-weight:700">${player.name} (${player.position})</span>
        `;
        slotEl.classList.add('locked');
      } else {
        slotEl.innerHTML = `
          <div class="bench-bubble-empty">+</div>
          <span class="bench-lbl-empty">SUB ${i + 1}</span>
        `;
        slotEl.classList.remove('locked');
      }

      slotEl.addEventListener('click', () => {
        this.handleSlotClick(i, "bench", "SUB");
      });

      container.appendChild(slotEl);
    }

    this.updateBenchCounter();
  }

  updateBenchCounter() {
    const filled = this.controller.draftBench.filter(p => p !== null).length;
    const counter = document.getElementById('bench-count');
    if (counter) counter.textContent = `${filled} / ${this.controller.draftBench.length}`;
  }

  updateChemistryLines() {
    const svg = document.getElementById('chemistry-lines');
    if (!svg) return;
    svg.innerHTML = "";

    if (!this.controller.selectedFormation) return;

    const drawnConnections = new Set();

    this.controller.selectedFormation.slots.forEach((slot, index) => {
      slot.conn.forEach(linkedId => {
        const connKey = [index, linkedId].sort().join('-');
        if (drawnConnections.has(connKey)) return;
        drawnConnections.add(connKey);

        const linkedSlot = this.controller.selectedFormation.slots[linkedId];

        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", `${slot.x}%`);
        line.setAttribute("y1", `${slot.y}%`);
        line.setAttribute("x2", `${linkedSlot.x}%`);
        line.setAttribute("y2", `${linkedSlot.y}%`);
        line.setAttribute("class", "chem-link none");

        const p1 = this.controller.draftStarters[index];
        const p2 = this.controller.draftStarters[linkedId];

        if (p1 && p2) {
          let score = 0;
          if (p1.country === p2.country) score += 2;
          if (p1.year === p2.year) score += 1;
          if (p1.era === p2.era) score += 1;

          if (score >= 3) {
            line.setAttribute("class", "chem-link perfect");
          } else if (score >= 1) {
            line.setAttribute("class", "chem-link medium");
          }
        }

        svg.appendChild(line);
      });
    });
  }

  showPlayerSelectionOptions() {
    const slotPos = this.controller.activeDraftSlotType === "starter" 
      ? this.controller.selectedFormation.slots[this.controller.activeDraftSlotIndex].pos 
      : "";

    const eligiblePositions = this.controller.activeDraftSlotType === "starter" 
      ? getEligiblePositionsForSlot(slotPos)
      : [];

    let compatiblePool = playersDatabase.filter(p => {
      const pid = p.id || p.name;
      if (this.controller.draftedPlayerIds.has(pid)) return false;
      if (this.controller.activeDraftSlotType === "bench") return true;
      return isPositionCompatible(slotPos, p.position);
    });

    if (!compatiblePool.length) {
      compatiblePool = playersDatabase.filter(p => !this.controller.draftedPlayerIds.has(p.id || p.name));
    }

    const generalPool = playersDatabase.filter(p => {
      const pid = p.id || p.name;
      if (this.controller.draftedPlayerIds.has(pid)) return false;
      if (this.controller.activeDraftSlotType === "bench") return true;
      
      if (slotPos === "GK") {
        return p.position === "GK";
      } else {
        if (p.position === "GK") return false;
        return eligiblePositions.includes(p.position);
      }
    });

    const chosenOptions = [];
    const chosenSet = new Set();

    for (let i = 0; i < 3; i++) {
      const p = selectPlayerFromPoolWithTierRoll(compatiblePool, new Set([...this.controller.draftedPlayerIds, ...chosenSet]));
      if (p) {
        chosenOptions.push(p);
        chosenSet.add(p.id || p.name);
      }
    }

    for (let i = 0; i < 2; i++) {
      const p = selectPlayerFromPoolWithTierRoll(generalPool, new Set([...this.controller.draftedPlayerIds, ...chosenSet]));
      if (p) {
        chosenOptions.push(p);
        chosenSet.add(p.id || p.name);
      }
    }

    if (chosenOptions.length < 5) {
      const fallbackPool = playersDatabase.filter(p => {
        const pid = p.id || p.name;
        if (this.controller.draftedPlayerIds.has(pid) || chosenSet.has(pid)) return false;
        if (this.controller.activeDraftSlotType === "starter") {
          return slotPos === "GK" ? p.position === "GK" : p.position !== "GK";
        }
        return true;
      });
      while (chosenOptions.length < 5 && fallbackPool.length > 0) {
        const randIdx = Math.floor(Math.random() * fallbackPool.length);
        const p = fallbackPool.splice(randIdx, 1)[0];
        chosenOptions.push(p);
        chosenSet.add(p.id || p.name);
      }
    }

    chosenOptions.sort(() => Math.random() - 0.5);

    const container = document.getElementById('selection-cards-grid');
    container.innerHTML = "";

    chosenOptions.forEach(player => {
      const cardWrapper = document.createElement('div');
      cardWrapper.style.perspective = "1000px";
      cardWrapper.innerHTML = this.generateSelectionCardHTML(player);
      const card = cardWrapper.querySelector('.fut-card');

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -(y - centerY) / 6;
        const rotateY = (x - centerX) / 6;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        const percentX = (x / rect.width) * 100;
        card.style.setProperty('--shine-pos', `${percentX}%`);
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      });

      card.addEventListener('click', () => {
        audio.playClick();
        this.controller.selectDraftPlayer(player);
      });

      container.appendChild(cardWrapper);
    });

    document.getElementById('modal-draft-selection').classList.remove('hidden');
  }

  recalculateDraftStats() {
    const activeStarters = this.controller.draftStarters.filter(p => p !== null);
    const starterSum = this.controller.draftStarters.reduce((acc, p, idx) => {
      if (!p) return acc;
      const slotPos = this.controller.selectedFormation ? this.controller.selectedFormation.slots[idx].pos : p.position;
      return acc + this.getEffectiveRating(p, slotPos);
    }, 0);
    const starterRating = activeStarters.length ? starterSum / activeStarters.length : 0;

    const activeBench = this.controller.draftBench.filter(p => p !== null);
    const benchSum = activeBench.reduce((acc, p) => acc + p.rating, 0);
    const benchRating = activeBench.length ? benchSum / activeBench.length : 0;

    const finalRating = activeStarters.length 
      ? Math.round(starterRating * 0.85 + benchRating * 0.15) 
      : 0;

    this.controller.teamRating = finalRating;
    document.getElementById('stat-rating-value').textContent = this.controller.teamRating;

    let chemistrySum = 0;
    if (this.controller.selectedFormation) {
      this.controller.selectedFormation.slots.forEach((slot, index) => {
        const player = this.controller.draftStarters[index];
        if (!player) return;

        let playerChem = 0;
        const correctPos = isPositionCompatible(slot.pos, player.position);
        if (correctPos) {
          playerChem += 4;
        } else {
          if (slot.pos === "GK" || player.position === "GK") {
            playerChem -= 3;
          } else {
            const catSlot = getPositionCategory(slot.pos);
            const catPlayer = getPositionCategory(player.position);
            if ((catSlot === "DEF" && catPlayer === "ATT") || (catSlot === "ATT" && catPlayer === "DEF")) {
              playerChem -= 1;
            } else {
              playerChem += 0;
            }
          }
        }

        slot.conn.forEach(linkedId => {
          const neighbor = this.controller.draftStarters[linkedId];
          if (!neighbor) return;

          if (player.country === neighbor.country) playerChem += 2.0;
          if (player.year === neighbor.year) playerChem += 1.5;
          if (player.era === neighbor.era) playerChem += 0.5;
        });

        if (this.controller.managerPerk === "legend" && player.era === "retro") {
          playerChem += 2;
        }

        if (player.chemistryBonus) {
          playerChem += player.chemistryBonus;
        }

        playerChem = Math.max(0, Math.min(10, playerChem));
        player.chemistry = playerChem; // Store player chemistry on object
        chemistrySum += playerChem;
      });
    }

    this.controller.teamChemistry = Math.min(100, Math.round((chemistrySum / 110) * 100));
    document.getElementById('stat-chemistry-value').textContent = this.controller.teamChemistry;
  }

  handleSlotClick(index, type, position) {
    const player = type === "starter" 
      ? this.controller.draftStarters[index] 
      : this.controller.draftBench[index];

    // Case 1: No active swap selection
    if (!this.selectedSwapSlot) {
      if (player) {
        // Start swap mode with this player
        audio.playClick();
        this.selectedSwapSlot = { index, type };
        
        // Show swap hint banner with current language
        const hintBanner = document.getElementById('draft-swap-hint');
        const hintText = document.getElementById('draft-swap-hint-text');
        if (hintBanner && hintText) {
          hintText.textContent = i18n.currentLang === 'tr'
            ? "Yer değiştirmek için başka bir oyuncu seçin (İptal için kartına tekrar dokunun)"
            : "Select another player to swap (Tap card again to cancel)";
          hintBanner.classList.remove('hidden');
        }
        
        this.renderPitchSlots();
        this.renderBenchSlots();
      } else {
        // Empty slot, open draft selection pack
        audio.playClick();
        this.controller.openPackSelectionModal(index, type, position);
      }
    } 
    // Case 2: Active swap selection exists
    else {
      audio.playClick();
      const source = this.selectedSwapSlot;

      // Hide hint banner
      const hintBanner = document.getElementById('draft-swap-hint');
      if (hintBanner) hintBanner.classList.add('hidden');

      // Clicked the exact same slot -> cancel selection
      if (source.index === index && source.type === type) {
        this.selectedSwapSlot = null;
        this.renderPitchSlots();
        this.renderBenchSlots();
        return;
      }

      // Perform swap
      const player1 = source.type === "starter"
        ? this.controller.draftStarters[source.index]
        : this.controller.draftBench[source.index];

      const player2 = type === "starter"
        ? this.controller.draftStarters[index]
        : this.controller.draftBench[index];

      // Assign to slots
      if (source.type === "starter") {
        this.controller.draftStarters[source.index] = player2;
      } else {
        this.controller.draftBench[source.index] = player2;
      }

      if (type === "starter") {
        this.controller.draftStarters[index] = player1;
      } else {
        this.controller.draftBench[index] = player1;
      }

      // Reset selection and play swap sound
      this.selectedSwapSlot = null;
      audio.playPackOpen();

      // Recalculate stats and render updates
      this.recalculateDraftStats();
      this.renderPitchSlots();
      this.renderBenchSlots();
      this.updateChemistryLines();

      // Enable/disable tournament enter button
      const btn = document.getElementById('btn-to-tournament');
      if (btn) {
        const isComplete = this.controller.isDraftComplete();
        btn.disabled = !isComplete;
        if (isComplete) {
          btn.classList.remove('disabled');
        } else {
          btn.classList.add('disabled');
        }
      }
    }
  }
}

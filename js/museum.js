import { i18n } from './i18n.js';

export class MuseumManager {
  constructor(controller) {
    this.controller = controller;
  }

  loadStatsFromStorage() {
    const data = localStorage.getItem('wc_draft_records');
    if (data) {
      try {
        this.controller.records = JSON.parse(data);
      } catch (e) {
        console.error("Failed to parse records", e);
      }
    }
  }

  saveStatsToStorage() {
    localStorage.setItem('wc_draft_records', JSON.stringify(this.controller.records));
  }

  saveRunHistory(outcome) {
    this.controller.records.totalDrafts++;
    
    if (this.controller.teamRating > this.controller.records.highestRating) {
      this.controller.records.highestRating = this.controller.teamRating;
    }
    if (this.controller.teamChemistry > this.controller.records.highestChem) {
      this.controller.records.highestChem = this.controller.teamChemistry;
    }

    const outcomeLabels = {
      0: "outcome_r16",
      1: "outcome_qf",
      2: "outcome_sf",
      3: "outcome_final"
    };

    let resultText = i18n.t(outcomeLabels[this.controller.tournamentRound]);
    if (outcome === "win" && this.controller.tournamentRound === 3) {
      resultText = i18n.t("outcome_champ");
    }

    const newHistory = {
      team: `${this.controller.teamEmoji} ${this.controller.teamName}`,
      rating: this.controller.teamRating,
      chemistry: this.controller.teamChemistry,
      result: resultText,
      outcome: outcome,
      date: new Date().toLocaleDateString(i18n.currentLang === 'tr' ? 'tr-TR' : 'en-US')
    };

    this.controller.records.history.unshift(newHistory);
    if (this.controller.records.history.length > 15) {
      this.controller.records.history.pop();
    }

    this.saveStatsToStorage();
  }

  renderStatsScreen() {
    document.getElementById('rec-total-drafts').textContent = this.controller.records.totalDrafts;
    document.getElementById('rec-trophies-won').textContent = this.controller.records.trophiesWon;
    document.getElementById('rec-highest-rating').textContent = this.controller.records.highestRating;
    document.getElementById('rec-highest-chem').textContent = this.controller.records.highestChem;
    document.getElementById('rec-total-wins').textContent = this.controller.records.totalWins;

    const tbody = document.getElementById('history-table-body');
    if (tbody) {
      tbody.innerHTML = "";
      this.controller.records.history.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td style="font-weight:700">${item.team}</td>
          <td>${item.rating} / ${item.chemistry}</td>
          <td><span class="hist-outcome ${item.outcome}">${item.result}</span></td>
          <td>${item.date}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    // Dynamic Museum Back Button visibility handling
    const backBtn = document.getElementById('btn-stats-back');
    if (backBtn) {
      // If we are mid-game (in tournament or draft board), allow returning. 
      // If the game just ended, or not started, hide the back button and force main menu/new game
      const hasActiveGame = this.controller.draftStarters.some(p => p !== null) && 
                           (this.controller.tournamentRound >= 0 && this.controller.tournamentRound < 6);
      
      const isGameOver = (this.controller.tournamentRound === 3 && this.controller.currentMatchSimulator && this.controller.currentMatchSimulator.isOver && this.controller.currentMatchSimulator.away.score > this.controller.currentMatchSimulator.home.score) ||
                         (this.controller.tournamentRound === 5 && this.controller._confettiRunning === false); // won final or eliminated

      if (hasActiveGame && !isGameOver) {
        backBtn.classList.remove('hidden');
        backBtn.style.display = 'inline-block';
      } else {
        backBtn.classList.add('hidden');
        backBtn.style.display = 'none';
      }
    }
  }

  renderTrophyRoom() {
    const container = document.getElementById('trophy-cabinet');
    if (!container) return;
    container.innerHTML = "";

    const maxTrophies = Math.max(1, this.controller.records.trophiesWon);
    const shelfCount = Math.ceil(maxTrophies / 5);

    for (let shelfIdx = 0; shelfIdx < shelfCount; shelfIdx++) {
      const shelfEl = document.createElement('div');
      shelfEl.className = "trophy-shelf";

      const shelfTrophiesEl = document.createElement('div');
      shelfTrophiesEl.className = "shelf-trophies";

      const trophiesOnThisShelf = Math.min(5, this.controller.records.trophiesWon - shelfIdx * 5);
      
      for (let t = 0; t < trophiesOnThisShelf; t++) {
        const trophyItem = document.createElement('div');
        trophyItem.className = "trophy-item";
        trophyItem.innerHTML = `
          <svg class="trophy-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 30 85 L 70 85 L 65 75 L 35 75 Z" fill="#4b5563" />
            <rect x="42" y="65" width="16" height="10" fill="#6b7280" />
            <path d="M 25 25 C 25 55 75 55 75 25 Z" fill="#eab308" filter="url(#gold-glow)" />
            <path d="M 25 30 C 12 30 12 45 25 45" fill="none" stroke="#ca8a04" stroke-width="6" />
            <path d="M 75 30 C 88 30 88 45 75 45" fill="none" stroke="#ca8a04" stroke-width="6" />
            <polygon points="50,32 53,38 60,39 55,44 56,51 50,47 44,51 45,44 40,39 47,38" fill="#ffffff" />
            <defs>
              <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
          </svg>
          <div class="trophy-tooltip">
            <strong>${i18n.t('status_winner')}</strong>
            <p style="font-size:0.65rem;margin-top:0.2rem;color:var(--text-secondary)">${i18n.t('trophy_wc_desc')}</p>
          </div>
        `;
        shelfTrophiesEl.appendChild(trophyItem);
      }

      if (this.controller.records.trophiesWon === 0 && shelfIdx === 0) {
        for (let m = 0; m < 3; m++) {
          const medalItem = document.createElement('div');
          medalItem.className = "trophy-item";
          medalItem.style.opacity = "0.2";
          medalItem.innerHTML = `
            <svg class="trophy-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" stroke-width="4" stroke-dasharray="4" />
              <path d="M 40 10 L 45 20 L 55 20 L 60 10 Z" fill="none" stroke="white" stroke-width="2" />
            </svg>
            <div class="trophy-tooltip">${i18n.t('trophy_conf_desc')}</div>
          `;
          shelfTrophiesEl.appendChild(medalItem);
        }
      }

      shelfEl.appendChild(shelfTrophiesEl);
      container.appendChild(shelfEl);
    }
  }
}

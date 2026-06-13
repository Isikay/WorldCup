import { i18n } from './i18n.js';

const defaultLeaderboard = [
  { name: "Sir Alex Ferguson", team: "🔴 Man United '99", trophies: 6, wins: 32, rating: 93, isUser: false },
  { name: "Pep Guardiola", team: "🔵 Barcelona '11", trophies: 5, wins: 28, rating: 95, isUser: false },
  { name: "Carlo Ancelotti", team: "⚫ Milan '07", trophies: 4, wins: 25, rating: 92, isUser: false },
  { name: "Vicente del Bosque", team: "⚪ Real Madrid '02", trophies: 3, wins: 19, rating: 91, isUser: false },
  { name: "Fatih Terim", team: "🟡 Galatasaray '00", trophies: 3, wins: 21, rating: 90, isUser: false },
  { name: "Didier Deschamps", team: "🔵 France '18", trophies: 2, wins: 15, rating: 90, isUser: false },
  { name: "Joachim Löw", team: "⚫ Germany '14", trophies: 2, wins: 16, rating: 89, isUser: false },
  { name: "Şenol Güneş", team: "🔴 Turkey '02", trophies: 1, wins: 12, rating: 88, isUser: false }
];

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
    if (!this.controller.records.leaderboard || this.controller.records.leaderboard.length === 0) {
      this.controller.records.leaderboard = [...defaultLeaderboard];
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
      0: "outcome_groups",
      1: "outcome_groups",
      2: "outcome_groups",
      3: "outcome_qf",
      4: "outcome_sf",
      5: "outcome_final"
    };

    let resultKey = outcomeLabels[this.controller.tournamentRound];
    if (outcome === "win" && this.controller.tournamentRound === 5) {
      resultKey = "outcome_champ";
    }

    const newHistory = {
      team: `${this.controller.teamEmoji} ${this.controller.teamName}`,
      rating: this.controller.teamRating,
      chemistry: this.controller.teamChemistry,
      resultKey: resultKey,
      outcome: outcome,
      date: new Date().toLocaleDateString(i18n.currentLang === 'tr' ? 'tr-TR' : 'en-US')
    };

    this.controller.records.history.unshift(newHistory);
    if (this.controller.records.history.length > 15) {
      this.controller.records.history.pop();
    }

    this.saveStatsToStorage();

    // Trigger cloud-synced leaderboard update
    const userEntry = {
      name: this.controller.managerName || "Siz",
      team: `${this.controller.teamEmoji} ${this.controller.teamName}`,
      trophies: this.controller.records.trophiesWon,
      wins: this.controller.records.totalWins,
      rating: this.controller.records.highestRating,
      isUser: true
    };
    this.syncAndRenderLeaderboard(userEntry);
  }

  async syncAndRenderLeaderboard(newEntry = null) {
    const BUCKET_ID = 'wcdraft_lb_p3k9m2a7';
    const KEY = 'leaderboard';
    const URL = `https://kvdb.io/${BUCKET_ID}/${KEY}`;
    
    let currentList = [];
    
    try {
      const res = await fetch(URL);
      if (res.ok) {
        const text = await res.text();
        if (text.trim()) {
          currentList = JSON.parse(text);
        }
      }
    } catch (err) {
      console.warn("Failed to fetch cloud leaderboard, falling back to local:", err);
    }
    
    // Fallback if cloud list empty
    if (currentList.length === 0) {
      currentList = this.controller.records.leaderboard && this.controller.records.leaderboard.length > 0
        ? [...this.controller.records.leaderboard]
        : [...defaultLeaderboard];
    }
    
    // Merge newEntry
    if (newEntry) {
      let userIdx = currentList.findIndex(e => e.isUser || (e.name === newEntry.name && e.team === newEntry.team));
      if (userIdx !== -1) {
        const existing = currentList[userIdx];
        // Only update if stats are higher
        if (newEntry.trophies > existing.trophies || 
           (newEntry.trophies === existing.trophies && newEntry.wins > existing.wins) ||
           (newEntry.trophies === existing.trophies && newEntry.wins === existing.wins && newEntry.rating > existing.rating)) {
          currentList[userIdx] = { ...existing, ...newEntry };
        }
      } else {
        currentList.push(newEntry);
      }
    }
    
    // Sort
    currentList.sort((a, b) => {
      if (b.trophies !== a.trophies) return b.trophies - a.trophies;
      if (b.wins !== a.wins) return b.wins - a.wins;
      return b.rating - a.rating;
    });
    
    // Trim
    currentList = currentList.slice(0, 30);
    
    // Save locally
    this.controller.records.leaderboard = currentList;
    this.saveStatsToStorage();
    
    // Try to upload
    try {
      await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(currentList),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (err) {
      console.error("Failed to upload leaderboard to cloud:", err);
    }
    
    // Render in UI
    this.renderLeaderboardUI(currentList);
  }

  renderLeaderboard() {
    this.syncAndRenderLeaderboard(null);
  }

  renderLeaderboardUI(list) {
    const tbody = document.getElementById('leaderboard-table-body');
    if (!tbody) return;
    tbody.innerHTML = "";

    list.forEach((item, index) => {
      const tr = document.createElement('tr');
      if (item.isUser) {
        tr.style.background = "rgba(16, 185, 129, 0.15)";
        tr.style.border = "1px solid var(--primary)";
      }
      
      const rankTd = document.createElement('td');
      rankTd.style.fontWeight = "700";
      rankTd.textContent = index + 1;

      const nameTd = document.createElement('td');
      nameTd.style.fontWeight = "700";
      nameTd.textContent = item.name;
      
      const teamSpan = document.createElement('span');
      teamSpan.style.fontSize = "0.8rem";
      teamSpan.style.fontWeight = "400";
      teamSpan.style.color = "var(--text-secondary)";
      teamSpan.style.marginLeft = "0.5rem";
      teamSpan.textContent = `(${item.team})`;
      nameTd.appendChild(teamSpan);

      const trophiesTd = document.createElement('td');
      trophiesTd.style.textAlign = "center";
      trophiesTd.textContent = `🏆 ${item.trophies}`;

      const winsTd = document.createElement('td');
      winsTd.style.textAlign = "center";
      winsTd.textContent = `✌️ ${item.wins}`;

      const ratingTd = document.createElement('td');
      ratingTd.style.textAlign = "center";
      ratingTd.textContent = `⭐ ${item.rating}`;

      tr.appendChild(rankTd);
      tr.appendChild(nameTd);
      tr.appendChild(trophiesTd);
      tr.appendChild(winsTd);
      tr.appendChild(ratingTd);

      tbody.appendChild(tr);
    });
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
        const displayResult = item.resultKey ? i18n.t(item.resultKey) : (item.result || "");
        tr.innerHTML = `
          <td style="font-weight:700">${item.team}</td>
          <td>${item.rating} / ${item.chemistry}</td>
          <td><span class="hist-outcome ${item.outcome}">${displayResult}</span></td>
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
      
      const isGameOver = this.controller.isGameOver;
      
      if (hasActiveGame && !isGameOver) {
        backBtn.classList.remove('hidden');
        backBtn.style.display = 'inline-block';
      } else {
        backBtn.classList.add('hidden');
        backBtn.style.display = 'none';
      }
    }

    // Start background sync for the leaderboard tab
    this.syncAndRenderLeaderboard(null);
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

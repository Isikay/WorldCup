import { i18n } from './i18n.js';
import { audio } from './audio.js';
import { cpuTeams, getFlagUrl, formations } from './data.js';

export class TournamentManager {
  constructor(controller) {
    this.controller = controller;
  }

  startTournamentProcess() {
    this.controller.tournamentRound = 0;

    const userTeam = {
      name: this.controller.teamName,
      emoji: this.controller.teamEmoji,
      rating: this.controller.teamRating,
      chemistry: this.controller.teamChemistry,
      perk: this.controller.managerPerk,
      starters: [...this.controller.draftStarters],
      bench: [...this.controller.draftBench],
      isUser: true,
      colorPrimary: this.controller.teamColorPrimary,
      colorSecondary: this.controller.teamColorSecondary,
      chemistryBonus: 0
    };

    const pool = [...cpuTeams].sort(() => Math.random() - 0.5);
    const chosenCpu = pool.slice(0, 15);
    const allTeams = [userTeam, ...chosenCpu].sort(() => Math.random() - 0.5);

    this.controller.groups = {
      A: allTeams.slice(0, 4),
      B: allTeams.slice(4, 8),
      C: allTeams.slice(8, 12),
      D: allTeams.slice(12, 16)
    };

    this.controller.groupStandings = {};
    ['A', 'B', 'C', 'D'].forEach(gk => {
      this.controller.groupStandings[gk] = this.controller.groups[gk].map(t => ({
        team: t,
        name: t.name,
        emoji: t.emoji,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        gf: 0,
        ga: 0,
        gd: 0,
        points: 0,
        isUser: !!t.isUser
      }));
    });

    this.controller.groupFixtures = [[], [], []];
    ['A', 'B', 'C', 'D'].forEach(gk => {
      const gTeams = this.controller.groups[gk];
      this.controller.groupFixtures[0].push({ group: gk, team1: gTeams[0], team2: gTeams[1], score1: null, score2: null, played: false });
      this.controller.groupFixtures[0].push({ group: gk, team1: gTeams[2], team2: gTeams[3], score1: null, score2: null, played: false });
      this.controller.groupFixtures[1].push({ group: gk, team1: gTeams[0], team2: gTeams[2], score1: null, score2: null, played: false });
      this.controller.groupFixtures[1].push({ group: gk, team1: gTeams[1], team2: gTeams[3], score1: null, score2: null, played: false });
      this.controller.groupFixtures[2].push({ group: gk, team1: gTeams[0], team2: gTeams[3], score1: null, score2: null, played: false });
      this.controller.groupFixtures[2].push({ group: gk, team1: gTeams[1], team2: gTeams[2], score1: null, score2: null, played: false });
    });

    this.controller.bracketData = [
      new Array(4).fill(null).map((_, i) => ({ id: i, team1: null, team2: null, score1: null, score2: null, played: false, winner: null })), // QF
      new Array(2).fill(null).map((_, i) => ({ id: i, team1: null, team2: null, score1: null, score2: null, played: false, winner: null })), // SF
      new Array(1).fill(null).map((_, i) => ({ id: i, team1: null, team2: null, score1: null, score2: null, played: false, winner: null }))  // Final
    ];

    this.switchTournamentTab('groups-view');
    this.renderGroupStageStandingsUI();
    this.renderBracketStageUI();
    this.updateTournamentSidebar();

    this.controller.screenManager.showScreen('screen-tournament');
  }

  switchTournamentTab(tabId) {
    const tabs = document.querySelectorAll('.tour-tab-content');
    tabs.forEach(tab => {
      if (tab.id === tabId) {
        tab.classList.remove('hidden');
        tab.classList.add('active');
      } else {
        tab.classList.add('hidden');
        tab.classList.remove('active');
      }
    });

    const tabBtns = document.querySelectorAll('.tour-tab-btn');
    tabBtns.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  renderGroupStageStandingsUI() {
    const container = document.getElementById('groups-grid-container');
    if (!container) return;
    container.innerHTML = "";

    const groupKeys = ['A', 'B', 'C', 'D'];
    groupKeys.forEach(gk => {
      const standings = this.controller.groupStandings[gk];
      standings.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        const gdA = a.gf - a.ga;
        const gdB = b.gf - b.ga;
        if (gdB !== gdA) return gdB - gdA;
        return b.gf - a.gf;
      });

      const card = document.createElement('div');
      card.className = "group-card";
      
      let rowsHTML = "";
      standings.forEach((row, idx) => {
        const isUser = row.isUser;
        const rowClass = isUser ? "user-row" : "";
        const rankClass = `rank-${idx + 1}`;
        const gd = row.gf - row.ga;
        const signedGd = gd > 0 ? `+${gd}` : gd;

        const flagUrl = row.team.countryCode ? getFlagUrl(row.team.countryCode, 40) : null;
        const logoHtml = flagUrl 
          ? `<img src="${flagUrl}" class="team-flag-img" alt="${row.name}">` 
          : `<span class="team-emoji">${row.emoji}</span>`;

        rowsHTML += `
          <tr class="${rowClass}">
            <td style="text-align:center;"><span class="rank-badge ${rankClass}">${idx + 1}</span></td>
            <td style="font-weight:600; vertical-align: middle;">${logoHtml} ${row.name}</td>
            <td style="text-align:center;">${row.played}</td>
            <td style="text-align:center;">${row.won}</td>
            <td style="text-align:center;">${row.drawn}</td>
            <td style="text-align:center;">${row.lost}</td>
            <td style="text-align:center;color:${gd > 0 ? '#10b981' : (gd < 0 ? '#ef4444' : 'var(--text-secondary)')};">${signedGd}</td>
            <td style="text-align:center;font-weight:800;">${row.points}</td>
          </tr>
        `;
      });

      card.innerHTML = `
        <h4 class="group-title">
          <span>${i18n.currentLang === 'tr' ? 'GRUP' : 'GROUP'} ${gk}</span>
          <span style="font-size:0.75rem;font-weight:400;color:var(--text-muted)">
            ${i18n.currentLang === 'tr' ? 'Maç günü' : 'Matchday'} ${this.controller.tournamentRound < 3 ? this.controller.tournamentRound + 1 : 3}/3
          </span>
        </h4>
        <table class="standings-table">
          <thead>
            <tr>
              <th style="width:30px;text-align:center;">#</th>
              <th>${i18n.currentLang === 'tr' ? 'TAKIM' : 'TEAM'}</th>
              <th style="width:30px;text-align:center;">O</th>
              <th style="width:30px;text-align:center;">G</th>
              <th style="width:30px;text-align:center;">B</th>
              <th style="width:30px;text-align:center;">M</th>
              <th style="width:40px;text-align:center;">AV</th>
              <th style="width:40px;text-align:center;">P</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHTML}
          </tbody>
        </table>
      `;

      container.appendChild(card);
    });
  }

  renderBracketStageUI() {
    const roundIDs = ["bracket-qf", "bracket-sf", "bracket-final"];

    for (let roundIdx = 0; roundIdx < 3; roundIdx++) {
      const container = document.getElementById(roundIDs[roundIdx]);
      if (!container) continue;
      container.innerHTML = "";

      const roundMatches = this.controller.bracketData[roundIdx];

      roundMatches.forEach((match) => {
        const matchEl = document.createElement('div');
        matchEl.className = "tour-match";

        const isUserMatch = (match.team1 && match.team1.isUser) || (match.team2 && match.team2.isUser);
        const isNextUserMatch = isUserMatch && (roundIdx + 3) === this.controller.tournamentRound && !match.played;
        if (isNextUserMatch) {
          matchEl.classList.add('active-next');
        }

        const t1FlagUrl = match.team1 && match.team1.countryCode ? getFlagUrl(match.team1.countryCode, 40) : null;
        const t2FlagUrl = match.team2 && match.team2.countryCode ? getFlagUrl(match.team2.countryCode, 40) : null;

        const t1Logo = t1FlagUrl ? `<img src="${t1FlagUrl}" class="team-flag-img" alt="">` : (match.team1 ? `<span class="team-emoji">${match.team1.emoji}</span>` : "");
        const t2Logo = t2FlagUrl ? `<img src="${t2FlagUrl}" class="team-flag-img" alt="">` : (match.team2 ? `<span class="team-emoji">${match.team2.emoji}</span>` : "");

        const t1Name = match.team1 ? `${t1Logo} ${match.team1.name}` : "...";
        const t2Name = match.team2 ? `${t2Logo} ${match.team2.name}` : "...";

        const t1Score = match.score1 !== null ? match.score1 : "";
        const t2Score = match.score2 !== null ? match.score2 : "";

        const t1WinnerClass = match.winner === match.team1 && match.played ? "winner" : "";
        const t2WinnerClass = match.winner === match.team2 && match.played ? "winner" : "";
        const t1UserClass = match.team1 && match.team1.isUser ? "user-team" : "";
        const t2UserClass = match.team2 && match.team2.isUser ? "user-team" : "";

        matchEl.innerHTML = `
          <div class="tour-team ${t1WinnerClass} ${t1UserClass}">
            <span class="tour-team-name">${t1Name}</span>
            <span class="tour-score">${t1Score}</span>
          </div>
          <div class="tour-team ${t2WinnerClass} ${t2UserClass}">
            <span class="tour-team-name">${t2Name}</span>
            <span class="tour-score">${t2Score}</span>
          </div>
        `;

        container.appendChild(matchEl);
      });
    }
  }

  updateTournamentSidebar() {
    document.getElementById('tour-rating').textContent = this.controller.teamRating;
    document.getElementById('tour-chem').textContent = this.controller.teamChemistry;
    
    const kit = document.getElementById('team-kit-preview');
    if (kit) kit.style.color = this.controller.teamColorPrimary;
    const kitName = document.getElementById('kit-team-name');
    if (kitName) kitName.textContent = this.controller.teamName;

    let opponent = null;

    if (this.controller.tournamentRound < 3) {
      const currentFixtures = this.controller.groupFixtures[this.controller.tournamentRound];
      if (currentFixtures) {
        const userMatch = currentFixtures.find(m => m.team1.isUser || m.team2.isUser);
        if (userMatch) {
          opponent = userMatch.team1.isUser ? userMatch.team2 : userMatch.team1;
        }
      }
    } else {
      const currentRoundMatches = this.controller.bracketData[this.controller.tournamentRound - 3];
      if (currentRoundMatches) {
        const userMatch = currentRoundMatches.find(m => 
          (m.team1 && m.team1.isUser) || (m.team2 && m.team2.isUser)
        );
        if (userMatch) {
          opponent = userMatch.team1.isUser ? userMatch.team2 : userMatch.team1;
        }
      }
    }

    if (opponent) {
      const homeEmojiEl = document.getElementById('vs-home-emoji');
      const awayEmojiEl = document.getElementById('vs-away-emoji');
      if (homeEmojiEl) {
        homeEmojiEl.innerHTML = `<span class="team-emoji">${this.controller.teamEmoji}</span>`;
      }
      if (awayEmojiEl) {
        const flagUrl = opponent.countryCode ? getFlagUrl(opponent.countryCode, 80) : null;
        awayEmojiEl.innerHTML = flagUrl 
          ? `<img src="${flagUrl}" class="team-flag-img-large" alt="${opponent.name}">` 
          : `<span class="team-emoji">${opponent.emoji}</span>`;
      }
      document.getElementById('vs-home-name').textContent = this.controller.teamName;
      document.getElementById('vs-away-name').textContent = opponent.name;

      const analysisBox = document.getElementById('opponent-analysis-box');
      if (analysisBox) {
        const ratingDiff = opponent.rating - this.controller.teamRating;
        let diffText = "";
        if (ratingDiff > 3) {
          diffText = i18n.currentLang === 'tr' ? "🔴 ZORLU RAKİP" : "🔴 DANGEROUS OPPONENT";
        } else if (ratingDiff < -3) {
          diffText = i18n.currentLang === 'tr' ? "🟢 KOLAY RAKİP" : "🟢 FAVORABLE MATCHUP";
        } else {
          diffText = i18n.currentLang === 'tr' ? "🟡 DENGELİ MAÇ" : "🟡 BALANCED MATCHUP";
        }

        // Formations analysis
        const userForm = this.controller.selectedFormation;
        const oppFormKey = opponent.formation || "4-4-2";
        const oppForm = formations[oppFormKey] || formations["4-4-2"];
        
        const userStyle = userForm ? userForm.style : "Balanced";
        const oppStyle = oppForm.style || "Balanced";
        
        // Counter logic check
        const rules = {
          "Possession": "Wing Play",
          "Wing Play": "Low Block",
          "Low Block": "Balanced",
          "Balanced": "Possession"
        };
        
        let counterText = "";
        if (userStyle === oppStyle) {
          counterText = i18n.currentLang === 'tr' 
            ? `Dizilişler benzer tarzda (${userStyle}). Orta sahada kıran kırana bir mücadele olacak.`
            : `Both play similar style (${userStyle}). Expect a tight midfield battle.`;
        } else if (rules[userStyle] === oppStyle) {
          counterText = i18n.currentLang === 'tr'
            ? `✔️ Taktiksel Avantaj! Sizin <strong>${userStyle}</strong> tarzınız, onların <strong>${oppStyle}</strong> tarzını kontralıyor.`
            : `✔️ Tactical Edge! Your <strong>${userStyle}</strong> style counters their <strong>${oppStyle}</strong>.`;
        } else if (rules[oppStyle] === userStyle) {
          counterText = i18n.currentLang === 'tr'
            ? `⚠️ Taktiksel Risk! Onların <strong>${oppStyle}</strong> tarzı, sizin <strong>${userStyle}</strong> tarzınızı kontralıyor.`
            : `⚠️ Tactical Risk! Their <strong>${oppStyle}</strong> style counters your <strong>${userStyle}</strong>.`;
        } else {
          counterText = i18n.currentLang === 'tr'
            ? `Dizilişler: ${userForm ? userForm.name : 'Dengeli'} vs ${oppForm.name}.`
            : `Formations: ${userForm ? userForm.name : 'Balanced'} vs ${oppForm.name}.`;
        }
        
        analysisBox.innerHTML = `
          <div style="margin-bottom:0.4rem;"><strong>${i18n.currentLang === 'tr' ? 'Rakip Gücü' : 'Opponent Rating'}:</strong> ${opponent.rating} (${diffText})</div>
          <div style="margin-bottom:0.4rem;"><strong>${i18n.currentLang === 'tr' ? 'Rakip Dizilişi' : 'Opponent Formation'}:</strong> ${oppForm.name} (${oppStyle})</div>
          <div style="font-size:0.75rem; color:#fcd34d; line-height:1.3; font-weight: 500;">${counterText}</div>
        `;
      }
    }
  }

  recalculateGroupStandings() {
    for (const gk in this.controller.groupStandings) {
      this.controller.groupStandings[gk].forEach(row => {
        row.played = 0;
        row.won = 0;
        row.drawn = 0;
        row.lost = 0;
        row.gf = 0;
        row.ga = 0;
        row.gd = 0;
        row.points = 0;
      });
    }

    this.controller.groupFixtures.forEach(matchdayFixtures => {
      matchdayFixtures.forEach(f => {
        if (!f.played) return;
        const gk = f.group;
        const row1 = this.controller.groupStandings[gk].find(r => r.name === f.team1.name);
        const row2 = this.controller.groupStandings[gk].find(r => r.name === f.team2.name);
        
        if (row1 && row2) {
          row1.played++;
          row2.played++;
          row1.gf += f.score1;
          row1.ga += f.score2;
          row2.gf += f.score2;
          row2.ga += f.score1;
          row1.gd = row1.gf - row1.ga;
          row2.gd = row2.gf - row2.ga;
          
          if (f.score1 > f.score2) {
            row1.won++;
            row1.points += 3;
            row2.lost++;
          } else if (f.score2 > f.score1) {
            row2.won++;
            row2.points += 3;
            row1.lost++;
          } else {
            row1.drawn++;
            row2.drawn++;
            row1.points += 1;
            row2.points += 1;
          }
        }
      });
    });

    for (const gk in this.controller.groupStandings) {
      this.controller.groupStandings[gk].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.gd !== a.gd) return b.gd - a.gd;
        return b.gf - a.gf;
      });
    }
  }

  recoverStaminaBetweenMatches() {
    this.controller.draftStarters.forEach(p => {
      if (p) {
        p.stamina = Math.min(100, (p.stamina || 100) + 10);
      }
    });
    this.controller.draftBench.forEach(p => {
      if (p) {
        p.stamina = Math.min(100, (p.stamina || 100) + 30);
      }
    });
  }

  advanceToNextTournamentStep() {
    this.recoverStaminaBetweenMatches();
    this.controller.tournamentRound++;

    this.renderGroupStageStandingsUI();
    this.renderBracketStageUI();
    this.updateTournamentSidebar();

    if (this.controller.tournamentRound >= 3) {
      this.switchTournamentTab('bracket-view');
    } else {
      this.switchTournamentTab('groups-view');
    }

    this.controller.screenManager.showScreen('screen-tournament');
  }
}

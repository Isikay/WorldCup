// World Cup Draft & Simulation - Main Application Controller
import { i18n } from './i18n.js';
import { audio } from './audio.js';
import { MatchSimulator } from './simulator.js';
import { ScreenManager } from './ui.js';
import { DraftManager } from './draft.js';
import { TournamentManager } from './tournament.js';
import { MuseumManager } from './museum.js';
import { RewardManager } from './reward.js';
import { getFlagUrl, isPositionCompatible, formations } from './data.js';

class GameController {
  constructor() {
    // Game States
    this.managerName = "";
    this.teamName = "";
    this.teamEmoji = "🦁";
    this.teamColorPrimary = "#10b981";
    this.teamColorSecondary = "#d97706";
    this.managerPerk = "attacker";
    this.difficulty = "normal";

    this.selectedFormation = null;
    this.unlockedFormations = [];
    this.draftStarters = new Array(11).fill(null);
    this.draftBench = new Array(8).fill(null);
    this.activeDraftSlotIndex = -1;
    this.activeDraftSlotType = "starter";
    this.draftedPlayerIds = new Set();
    this.teamRating = 0;
    this.teamChemistry = 0;
    this.performanceViewSide = "home";

    // Tournament state
    this.tournamentRound = 0;
    this.bracketData = [];
    this.currentMatchSimulator = null;
    this.matchSpeed = 1;
    this.matchIntervalId = null;
    this.isMatchPaused = false;
    this.isAutoSubEnabled = false;
    this.subsCountThisMatch = 0;
    this.lastActiveGameScreen = "screen-start";
    this.isGameOver = false;

    // Stats records
    this.records = {
      totalDrafts: 0,
      trophiesWon: 0,
      highestRating: 0,
      highestChem: 0,
      totalWins: 0,
      history: [],
      leaderboard: []
    };

    // Sub managers initialization
    this.screenManager = new ScreenManager(this);
    this.draftManager = new DraftManager(this);
    this.tournamentManager = new TournamentManager(this);
    this.museumManager = new MuseumManager(this);
    this.rewardManager = new RewardManager(this);
  }

  init() {
    i18n.translatePage();
    this.museumManager.loadStatsFromStorage();

    this.setupEventListeners();
    this.draftManager.renderFormationsList();
    this.museumManager.renderTrophyRoom();

    this.screenManager.updateSoundButtonUI();

    document.body.addEventListener('click', () => {
      audio.init();
    }, { once: true });
  }

  setupEventListeners() {
    // Language toggle
    document.getElementById('lang-btn').addEventListener('click', () => {
      audio.playClick();
      i18n.toggleLanguage();
      this.draftManager.renderFormationsList();
    });

    // Sound toggle
    document.getElementById('sound-btn').addEventListener('click', () => {
      const isMuted = audio.toggleMute();
      this.screenManager.updateSoundButtonUI(isMuted);
    });

    // Trophy room button
    document.getElementById('nav-stats-btn').addEventListener('click', () => {
      audio.playClick();
      this.screenManager.showScreen('screen-stats');
      this.museumManager.renderStatsScreen();
    });

    // Emoji customization dropdown toggle
    const emojiPicker = document.getElementById('current-badge-emoji');
    const emojiDropdown = document.getElementById('emoji-dropdown');
    emojiPicker.addEventListener('click', (e) => {
      audio.playClick();
      e.stopPropagation();
      emojiDropdown.classList.toggle('hidden');
    });

    // Emoji select
    emojiDropdown.querySelectorAll('span').forEach(span => {
      span.addEventListener('click', (e) => {
        audio.playClick();
        this.teamEmoji = e.target.textContent;
        emojiPicker.textContent = this.teamEmoji;
        emojiDropdown.classList.add('hidden');
      });
    });

    // Close dropdown on outside click
    document.addEventListener('click', () => {
      emojiDropdown.classList.add('hidden');
    });

    // Color customizations
    document.getElementById('color-primary').addEventListener('input', (e) => {
      this.teamColorPrimary = e.target.value;
    });
    document.getElementById('color-secondary').addEventListener('input', (e) => {
      this.teamColorSecondary = e.target.value;
    });

    // Perks selection
    const perkCards = document.querySelectorAll('.perk-card');
    perkCards.forEach(card => {
      card.addEventListener('click', () => {
        audio.playClick();
        perkCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.managerPerk = card.getAttribute('data-perk');
        this.screenManager.validateSetupForm();
      });
    });

    // Difficulty selection
    const diffCards = document.querySelectorAll('.diff-card');
    diffCards.forEach(card => {
      card.addEventListener('click', () => {
        audio.playClick();
        diffCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.difficulty = card.getAttribute('data-diff');
      });
    });

    // Validation
    const managerInput = document.getElementById('input-manager');
    const teamInput = document.getElementById('input-team');
    const validateInputs = () => this.screenManager.validateSetupForm();
    managerInput.addEventListener('input', validateInputs);
    teamInput.addEventListener('input', validateInputs);

    // Start Draft Button
    document.getElementById('btn-start-game').addEventListener('click', () => {
      audio.playClick();
      this.managerName = managerInput.value.trim();
      this.teamName = teamInput.value.trim();
      this.startDraftProcess();
    });

    // Reset draft button
    document.getElementById('btn-reset-draft').addEventListener('click', () => {
      audio.playClick();
      if (confirm(i18n.currentLang === 'tr' ? "Draftı sıfırlamak istediğinizden emin misiniz?" : "Are you sure you want to reset the draft?")) {
        this.resetDraftState();
      }
    });

    // Enter tournament button
    document.getElementById('btn-to-tournament').addEventListener('click', () => {
      audio.playClick();
      if (!this.isDraftComplete()) {
        alert(i18n.t('alert_complete_draft'));
        return;
      }
      this.tournamentManager.startTournamentProcess();
    });

    // Play match button
    document.getElementById('btn-start-match').addEventListener('click', () => {
      audio.playClick();
      this.setupActiveMatchScreen();
    });

    // Match Speed controls
    const speedButtons = document.querySelectorAll('.match-ctrl-btn[data-speed]');
    speedButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        audio.playClick();
        speedButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.matchSpeed = parseInt(btn.getAttribute('data-speed'), 10);
        this.adjustSimulationSpeed();
      });
    });

    // Match Pause button
    const pauseBtn = document.getElementById('btn-match-pause');
    pauseBtn.addEventListener('click', () => {
      audio.playClick();
      this.isMatchPaused = !this.isMatchPaused;
      pauseBtn.textContent = this.isMatchPaused ? "▶" : "⏸";
      if (this.isMatchPaused) {
        clearInterval(this.matchIntervalId);
      } else {
        this.startSimulationLoop();
      }
    });

    // Tactic buttons
    const tacticButtons = document.querySelectorAll('.tactic-btn');
    tacticButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        audio.playClick();
        tacticButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.getAttribute('data-tactic');
        if (this.currentMatchSimulator) {
          this.currentMatchSimulator.setTacticalMode(mode);
        }
      });
    });

    // Auto-sub toggle button
    const autoSubBtn = document.getElementById('btn-toggle-autosub');
    if (autoSubBtn) {
      autoSubBtn.addEventListener('click', () => {
        audio.playClick();
        this.isAutoSubEnabled = !this.isAutoSubEnabled;
        this.updateAutoSubButtonUI();
        if (this.currentMatchSimulator) {
          this.currentMatchSimulator.isAutoSubEnabled = this.isAutoSubEnabled;
        }
      });
    }

    // Substitutions modal controls
    document.getElementById('btn-close-subs').addEventListener('click', () => {
      audio.playClick();
      document.getElementById('modal-substitutions').classList.add('hidden');
    });

    document.getElementById('btn-open-subs').addEventListener('click', () => {
      audio.playClick();
      this.renderSubstitutionsModal();
      document.getElementById('modal-substitutions').classList.remove('hidden');
    });

    document.getElementById('btn-match-continue').addEventListener('click', () => {
      audio.playClick();
      this.handlePostMatchCompletion();
    });

    // Back to menu from statistics
    document.getElementById('btn-back-to-menu').addEventListener('click', () => {
      audio.playClick();
      this.resetForNewGame();
      this.screenManager.showScreen('screen-start');
    });

    // New Game button
    const newGameBtn = document.getElementById('btn-new-game');
    if (newGameBtn) {
      newGameBtn.addEventListener('click', () => {
        audio.playClick();
        this.resetForNewGame();
        this.screenManager.showScreen('screen-start');
      });
    }

    // Back from museum screen to active game
    document.getElementById('btn-stats-back').addEventListener('click', () => {
      audio.playClick();
      this.screenManager.showScreen(this.lastActiveGameScreen || 'screen-start');
    });

    // Stats tabs switching
    document.getElementById('btn-stats-tab-history').addEventListener('click', () => {
      audio.playClick();
      document.getElementById('btn-stats-tab-history').classList.add('active');
      document.getElementById('btn-stats-tab-leaderboard').classList.remove('active');
      document.getElementById('stats-history-view').classList.remove('hidden');
      document.getElementById('stats-leaderboard-view').classList.add('hidden');
    });
    document.getElementById('btn-stats-tab-leaderboard').addEventListener('click', () => {
      audio.playClick();
      document.getElementById('btn-stats-tab-leaderboard').classList.add('active');
      document.getElementById('btn-stats-tab-history').classList.remove('active');
      document.getElementById('stats-leaderboard-view').classList.remove('hidden');
      document.getElementById('stats-history-view').classList.add('hidden');
      this.museumManager.renderLeaderboard();
    });

    // Reset data button
    const resetHistoryBtn = document.getElementById('btn-reset-history');
    if (resetHistoryBtn) {
      resetHistoryBtn.addEventListener('click', () => {
        audio.playClick();
        if (confirm(i18n.t('msg_confirm_reset'))) {
          this.records = {
            totalDrafts: 0,
            trophiesWon: 0,
            highestRating: 0,
            highestChem: 0,
            totalWins: 0,
            history: [],
            leaderboard: []
          };
          this.museumManager.saveStatsToStorage();
          this.museumManager.renderStatsScreen();
          this.museumManager.renderTrophyRoom();
          document.getElementById('btn-stats-tab-history').click();
          alert(i18n.currentLang === 'tr' ? "Tüm veriler sıfırlandı." : "All data has been reset.");
        }
      });
    }

    // Pack click tearing trigger
    document.getElementById('pack-wrapper').addEventListener('click', () => {
      this.tearPackOpening();
    });

    // Tournament tabs
    document.getElementById('btn-tab-groups').addEventListener('click', () => {
      audio.playClick();
      this.tournamentManager.switchTournamentTab('groups-view');
    });
    document.getElementById('btn-tab-bracket').addEventListener('click', () => {
      audio.playClick();
      this.tournamentManager.switchTournamentTab('bracket-view');
    });

    // Match commentary / performance tabs
    document.getElementById('tab-btn-commentary').addEventListener('click', () => {
      audio.playClick();
      document.getElementById('tab-btn-commentary').classList.add('active');
      document.getElementById('tab-btn-performance').classList.remove('active');
      document.getElementById('tab-commentary-content').classList.remove('hidden');
      document.getElementById('tab-performance-content').classList.add('hidden');
    });
    document.getElementById('tab-btn-performance').addEventListener('click', () => {
      audio.playClick();
      document.getElementById('tab-btn-performance').classList.add('active');
      document.getElementById('tab-btn-commentary').classList.remove('active');
      document.getElementById('tab-performance-content').classList.remove('hidden');
      document.getElementById('tab-commentary-content').classList.add('hidden');
      this.renderMatchPerformanceUI();
    });

    // Squad management modal
    document.getElementById('btn-edit-squad').addEventListener('click', () => {
      audio.playClick();
      this.renderSquadManagementModal();
      document.getElementById('modal-squad-management').classList.remove('hidden');
    });
    document.getElementById('btn-close-squad').addEventListener('click', () => {
      audio.playClick();
      document.getElementById('modal-squad-management').classList.add('hidden');
    });
    document.getElementById('btn-save-squad').addEventListener('click', () => {
      audio.playClick();
      this.draftStarters = [...this.tempStarters];
      this.draftBench = [...this.tempBench];
      this.draftManager.recalculateDraftStats();
      this.tournamentManager.updateTournamentSidebar();
      this.draftManager.renderPitchSlots();
      this.draftManager.renderBenchSlots();
      this.draftManager.updateChemistryLines();
      document.getElementById('modal-squad-management').classList.add('hidden');
    });

    // Chemistry info button click
    document.getElementById('btn-chem-info').addEventListener('click', () => {
      audio.playClick();
      alert(i18n.currentLang === 'tr' 
        ? "🧪 KİMYA SİSTEMİ HESAPLAMASI:\n\n" +
          "1. POZİSYON UYUMU:\n" +
          "   - Oyuncu kendi veya uyumlu pozisyonda oynuyorsa +4 Kimya.\n" +
          "   - Tamamen farklı bir pozisyonda oynuyorsa +1 Kimya.\n\n" +
          "2. BAĞLANTILAR (Komşular):\n" +
          "   - Aynı ülkeye sahip her komşu için +2.0 Kimya.\n" +
          "   - Aynı yıla sahip her komşu için +1.5 Kimya.\n" +
          "   - Aynı döneme (retro/modern) sahip her komşu için +0.5 Kimya.\n\n" +
          "3. DİĞER ETKENLER:\n" +
          "   - Oyuncunun her maç performansı/golü ekstra Kimya sağlar.\n" +
          "   - Legend Perki retro oyunculara +2 Kimya ekler.\n\n" +
          "* Bir oyuncunun alabileceği maksimum kimya 10'dur.\n" +
          "* Takım Kimyası: (11 oyuncunun toplam kimyası / 110) * 100 olarak hesaplanır."
        : "🧪 CHEMISTRY SYSTEM CALCULATION:\n\n" +
          "1. POSITION MATCH:\n" +
          "   - Plays in exact or compatible position: +4 Chem.\n" +
          "   - Plays in out of position: +1 Chem.\n\n" +
          "2. NEIGHBOR LINKS:\n" +
          "   - Neighbor has same country: +2.0 Chem.\n" +
          "   - Neighbor has same year: +1.5 Chem.\n" +
          "   - Neighbor has same era (retro/modern): +0.5 Chem.\n\n" +
          "3. OTHER FACTORS:\n" +
          "   - Player matches/goals add bonus Chemistry.\n" +
          "   - Legend Perk adds +2 Chem to retro players.\n\n" +
          "* Maximum chemistry per player is capped at 10.\n" +
          "* Team Chemistry is calculated as: (sum of 11 players' chemistry / 110) * 100."
      );
    });

    // Close opponent squad view modal
    document.getElementById('btn-close-opponent-squad').addEventListener('click', () => {
      audio.playClick();
      document.getElementById('modal-opponent-squad').classList.add('hidden');
    });

    // Performance tab home/away toggle
    document.getElementById('btn-perf-show-home').addEventListener('click', () => {
      audio.playClick();
      this.performanceViewSide = "home";
      document.getElementById('btn-perf-show-home').classList.add('active');
      document.getElementById('btn-perf-show-home').style.background = "rgba(255,255,255,0.1)";
      document.getElementById('btn-perf-show-home').style.color = "white";
      document.getElementById('btn-perf-show-away').classList.remove('active');
      document.getElementById('btn-perf-show-away').style.background = "rgba(0,0,0,0.2)";
      document.getElementById('btn-perf-show-away').style.color = "rgba(255,255,255,0.6)";
      this.renderMatchPerformanceUI();
    });

    document.getElementById('btn-perf-show-away').addEventListener('click', () => {
      audio.playClick();
      this.performanceViewSide = "away";
      document.getElementById('btn-perf-show-away').classList.add('active');
      document.getElementById('btn-perf-show-away').style.background = "rgba(255,255,255,0.1)";
      document.getElementById('btn-perf-show-away').style.color = "white";
      document.getElementById('btn-perf-show-home').classList.remove('active');
      document.getElementById('btn-perf-show-home').style.background = "rgba(0,0,0,0.2)";
      document.getElementById('btn-perf-show-home').style.color = "rgba(255,255,255,0.6)";
      this.renderMatchPerformanceUI();
    });

    // Event delegation for inspectable teams
    document.addEventListener('click', (e) => {
      const inspectable = e.target.closest('.inspectable-team');
      if (inspectable) {
        audio.playClick();
        const teamName = inspectable.getAttribute('data-team-name');
        if (teamName) {
          this.inspectTeamSquad(teamName);
        }
      }
    });
  }

  updateAutoSubButtonUI() {
    const btn = document.getElementById('btn-toggle-autosub');
    if (!btn) return;
    
    if (this.isAutoSubEnabled) {
      btn.setAttribute('data-i18n', 'btn_autosub_on');
      btn.textContent = i18n.t('btn_autosub_on') || "AÇIK";
      btn.style.borderColor = 'rgba(16, 185, 129, 0.4)';
      btn.style.color = '#a7f3d0';
    } else {
      btn.setAttribute('data-i18n', 'btn_autosub_off');
      btn.textContent = i18n.t('btn_autosub_off') || "KAPALI";
      btn.style.borderColor = 'rgba(239, 68, 68, 0.4)';
      btn.style.color = '#fca5a5';
    }
  }

  resetForNewGame() {
    if (this.matchIntervalId) {
      clearInterval(this.matchIntervalId);
      this.matchIntervalId = null;
    }
    audio.stopCrowdAtmosphere();
    this.selectedFormation = null;
    this.unlockedFormations = [];
    this.draftStarters = new Array(11).fill(null);
    this.draftBench = new Array(8).fill(null);
    this.draftedPlayerIds.clear();
    this.teamRating = 0;
    this.teamChemistry = 0;
    this.tournamentRound = 0;
    this.bracketData = [];
    this.currentMatchSimulator = null;
    this.subsCountThisMatch = 0;
    this.isGameOver = false;
    this.stopConfetti();

    if (this.draftManager) {
      this.draftManager.selectedSwapSlot = null;
    }
    const hintBanner = document.getElementById('draft-swap-hint');
    if (hintBanner) hintBanner.classList.add('hidden');

    this.selectedSquadSwapSlot = null;
    this.selectedMatchSwapSlot = null;

    // Clear manager inputs to start fresh
    const mInput = document.getElementById('input-manager');
    const tInput = document.getElementById('input-team');
    if (mInput) mInput.value = "";
    if (tInput) tInput.value = "";

    // RE-RENDER formations panel so the "Open Tactic Pack" card shows up!
    this.draftManager.renderFormationsList();
    this.screenManager.validateSetupForm();
  }

  startDraftProcess() {
    this.resetDraftState();
    document.getElementById('draft-team-name').textContent = `${this.teamEmoji} ${this.teamName}`;
    document.getElementById('draft-team-perk').textContent = i18n.t(`perk_${this.managerPerk}_name`);
    
    this.draftManager.renderPitchSlots();
    this.draftManager.renderBenchSlots();
    this.draftManager.updateChemistryLines();
    this.draftManager.recalculateDraftStats();

    this.screenManager.showScreen('screen-draft');
  }

  resetDraftState() {
    this.draftStarters = new Array(11).fill(null);
    this.draftBench = new Array(8).fill(null);
    this.draftedPlayerIds.clear();
    this.teamRating = 0;
    this.teamChemistry = 0;
    this.subsCountThisMatch = 0;
    this.isGameOver = false;

    if (this.draftManager) {
      this.draftManager.selectedSwapSlot = null;
    }
    const hintBanner = document.getElementById('draft-swap-hint');
    if (hintBanner) hintBanner.classList.add('hidden');

    this.selectedSquadSwapSlot = null;
    this.selectedMatchSwapSlot = null;

    const btn = document.getElementById('btn-to-tournament');
    if (btn) {
      btn.classList.add('disabled');
      btn.disabled = true;
    }

    this.draftManager.renderPitchSlots();
    this.draftManager.renderBenchSlots();
    this.draftManager.updateChemistryLines();
    this.draftManager.recalculateDraftStats();
    this.draftManager.updateBenchCounter();
  }

  isDraftComplete() {
    return this.draftStarters.every(p => p !== null) && this.draftBench.every(p => p !== null);
  }

  openPackSelectionModal(index, type, position) {
    this.activeDraftSlotIndex = index;
    this.activeDraftSlotType = type;

    const packWrapper = document.getElementById('pack-wrapper');
    if (packWrapper) {
      packWrapper.style.transform = "scale(1)";
      const cardPack = packWrapper.querySelector('.card-pack');
      if (cardPack) cardPack.classList.remove('pack-tear-top');
    }
    
    const overlay = document.getElementById('modal-pack-open');
    if (overlay) overlay.classList.remove('hidden');

    const slotName = document.getElementById('selection-slot-name');
    if (slotName) slotName.textContent = position;
  }

  tearPackOpening() {
    audio.playPackOpen();
    const pack = document.querySelector('.card-pack');
    if (pack) pack.classList.add('pack-tear-top');

    setTimeout(() => {
      const overlay = document.getElementById('modal-pack-open');
      if (overlay) overlay.classList.add('hidden');
      this.draftManager.showPlayerSelectionOptions();
    }, 800);
  }

  selectDraftPlayer(player) {
    const overlay = document.getElementById('modal-draft-selection');
    if (overlay) overlay.classList.add('hidden');
    
    const pid = player.id || player.name;

    // Initialize stamina for drafted players
    player.stamina = 100;
    player.chemistryBonus = 0;

    if (this.activeDraftSlotType === "starter") {
      const oldPlayer = this.draftStarters[this.activeDraftSlotIndex];
      if (oldPlayer) this.draftedPlayerIds.delete(oldPlayer.id || oldPlayer.name);
      this.draftStarters[this.activeDraftSlotIndex] = player;
    } else {
      const oldPlayer = this.draftBench[this.activeDraftSlotIndex];
      if (oldPlayer) this.draftedPlayerIds.delete(oldPlayer.id || oldPlayer.name);
      this.draftBench[this.activeDraftSlotIndex] = player;
    }

    this.draftedPlayerIds.add(pid);

    this.draftManager.renderPitchSlots();
    this.draftManager.renderBenchSlots();
    this.draftManager.updateChemistryLines();
    this.draftManager.recalculateDraftStats();

    if (this.isDraftComplete()) {
      const btn = document.getElementById('btn-to-tournament');
      if (btn) {
        btn.classList.remove('disabled');
        btn.disabled = false;
      }
    }
  }

  setupActiveMatchScreen() {
    let userMatch = null;
    let opponent = null;
    let isKnockout = true;

    if (this.tournamentRound < 3) {
      const currentFixtures = this.groupFixtures[this.tournamentRound];
      userMatch = currentFixtures.find(m => m.team1.isUser || m.team2.isUser);
      if (userMatch) {
        opponent = userMatch.team1.isUser ? userMatch.team2 : userMatch.team1;
        isKnockout = false;
      }
    } else {
      const currentRoundMatches = this.bracketData[this.tournamentRound - 3];
      userMatch = currentRoundMatches.find(m => 
        (m.team1 && m.team1.isUser) || (m.team2 && m.team2.isUser)
      );
      if (userMatch) {
        opponent = userMatch.team1.isUser ? userMatch.team2 : userMatch.team1;
        isKnockout = true;
      }
    }

    if (!userMatch || !opponent) return;

    let stageName = "";
    if (this.tournamentRound < 3) {
      stageName = `${i18n.currentLang === 'tr' ? 'Grup Maçı' : 'Group Match'} ${this.tournamentRound + 1}`;
    } else {
      const stageKeys = [i18n.t('stage_qf'), i18n.t('stage_sf'), i18n.t('stage_final')];
      stageName = stageKeys[this.tournamentRound - 3];
    }
    
    const isFinal = this.tournamentRound === 5;

    const userSquad = {
      name: this.teamName,
      emoji: this.teamEmoji,
      rating: this.teamRating,
      chemistry: this.teamChemistry,
      perk: this.managerPerk,
      starters: [...this.draftStarters],
      bench: [...this.draftBench],
      formation: this.selectedFormation,
      isUser: true
    };

    // Optimize CPU opponent lineup (resting tired players) before match kickoff
    this.optimizeCpuLineup(opponent);

    this.currentMatchSimulator = new MatchSimulator(
      userSquad, 
      opponent, 
      stageName, 
      isFinal,
      this.difficulty,
      isKnockout
    );
    this.currentMatchSimulator.isAutoSubEnabled = this.isAutoSubEnabled;
    this.updateAutoSubButtonUI();

    document.getElementById('match-home-name').textContent = this.teamName;
    document.getElementById('match-home-badge').innerHTML = `<span class="badge-emoji">${this.teamEmoji}</span>`;
    document.getElementById('match-home-badge').style.background = this.teamColorPrimary;

    document.getElementById('match-away-name').textContent = opponent.name;
    const awayFlagUrl = opponent.countryCode ? getFlagUrl(opponent.countryCode, 80) : null;
    if (awayFlagUrl) {
      document.getElementById('match-away-badge').innerHTML = `<img src="${awayFlagUrl}" class="match-badge-flag-img" alt="${opponent.name}">`;
      document.getElementById('match-away-badge').style.background = 'transparent';
    } else {
      document.getElementById('match-away-badge').innerHTML = `<span class="badge-emoji">${opponent.emoji}</span>`;
      document.getElementById('match-away-badge').style.background = opponent.colorPrimary || '#eab308';
    }

    document.getElementById('score-home').textContent = "0";
    document.getElementById('score-away').textContent = "0";
    document.getElementById('match-timer').textContent = "00:00";
    document.getElementById('match-stage-name').textContent = stageName;

    const commentaryList = document.getElementById('commentary-list');
    if (commentaryList) commentaryList.innerHTML = "";
    document.getElementById('post-match-panel').classList.add('hidden');

    document.querySelectorAll('.tactic-btn').forEach(b => b.classList.remove('active'));
    const balancedBtn = document.querySelector('.tactic-btn[data-tactic="balanced"]');
    if (balancedBtn) balancedBtn.classList.add('active');

    const commTabBtn = document.getElementById('tab-btn-commentary');
    const perfTabBtn = document.getElementById('tab-btn-performance');
    if (commTabBtn && perfTabBtn) {
      commTabBtn.classList.add('active');
      perfTabBtn.classList.remove('active');
      document.getElementById('tab-commentary-content').classList.remove('hidden');
      document.getElementById('tab-performance-content').classList.add('hidden');
    }

    this.performanceViewSide = "home";
    document.getElementById('btn-perf-show-home').classList.add('active');
    document.getElementById('btn-perf-show-home').style.background = "rgba(255,255,255,0.1)";
    document.getElementById('btn-perf-show-home').style.color = "white";
    document.getElementById('btn-perf-show-away').classList.remove('active');
    document.getElementById('btn-perf-show-away').style.background = "rgba(0,0,0,0.2)";
    document.getElementById('btn-perf-show-away').style.color = "rgba(255,255,255,0.6)";
 
    this.renderMatchPerformanceUI();
 
    this.subsCountThisMatch = 0;
    this.isMatchPaused = false;
    document.getElementById('btn-match-pause').textContent = "⏸";

    audio.playWhistle();
    audio.startCrowdAtmosphere();

    this.screenManager.showScreen('screen-match');
    this.startSimulationLoop();
  }

  startSimulationLoop() {
    clearInterval(this.matchIntervalId);
    const tickDuration = 1200 / this.matchSpeed;
    this.matchIntervalId = setInterval(() => {
      this.runSimulationTick();
    }, tickDuration);
  }

  adjustSimulationSpeed() {
    if (!this.isMatchPaused) {
      this.startSimulationLoop();
    }
  }

  runSimulationTick() {
    if (!this.currentMatchSimulator) return;

    const data = this.currentMatchSimulator.tick();

    if (!data) {
      clearInterval(this.matchIntervalId);
      return;
    }

    document.getElementById('score-home').textContent = data.scoreHome;
    document.getElementById('score-away').textContent = data.scoreAway;
    document.getElementById('match-timer').textContent = `${String(data.minute).padStart(2, '0')}:00`;

    const ball = document.getElementById('pitch-ball');
    if (ball) {
      ball.style.left = `${data.ballX}%`;
      ball.style.top = `${50 + (Math.sin(data.minute) * 20)}%`;
    }

    const attackLight = document.getElementById('attack-light-overlay');
    if (attackLight) {
      attackLight.className = "attack-light";
      if (data.ballX > 58) {
        attackLight.classList.add('home-attack');
      } else if (data.ballX < 42) {
        attackLight.classList.add('away-attack');
      }
    }

    document.getElementById('momentum-home-fill').style.width = `${data.momentumHome}%`;
    document.getElementById('momentum-away-fill').style.width = `${100 - data.momentumHome}%`;
    document.getElementById('lbl-momentum-home').textContent = `${this.teamName} (${data.momentumHome}%)`;
    document.getElementById('lbl-momentum-away').textContent = `${this.currentMatchSimulator.away.name} (${100 - data.momentumHome}%)`;

    const crowdFill = document.getElementById('crowd-bar-fill');
    if (crowdFill) {
      crowdFill.style.width = `${Math.round(data.crowdVolume * 100)}%`;
    }

    audio.setCrowdVolume(data.crowdVolume);

    if (data.event) {
      this.appendCommentary(data.event);
    }

    this.renderMatchPerformanceUI();

    if (data.isOver) {
      clearInterval(this.matchIntervalId);
      audio.stopCrowdAtmosphere();
      audio.playWhistle();
      this.displayPostMatchSummary();
    }
  }

  appendCommentary(event) {
    const list = document.getElementById('commentary-list');
    if (!list) return;
    const item = document.createElement('div');
    
    let cssClass = event.type;
    if (event.type === 'yellow') cssClass = 'card-yellow';
    if (event.type === 'red') cssClass = 'card-red';
    
    item.className = `comm-item ${cssClass}`;

    let teamPrefix = '';
    let teamColor = '';

    if (event.team === 'home') {
      teamColor = this.teamColorPrimary || '#10b981';
      teamPrefix = `<span style="color: ${teamColor}; font-weight: bold;">${this.teamEmoji || '🦁'} ${this.teamName}:</span> `;
    } else if (event.team === 'away' && this.currentMatchSimulator && this.currentMatchSimulator.away) {
      teamColor = this.currentMatchSimulator.away.colorPrimary || '#ffffff';
      const awayName = this.currentMatchSimulator.away.name || 'Away';
      const awayEmoji = this.currentMatchSimulator.away.emoji || '🏳️';
      teamPrefix = `<span style="color: ${teamColor}; font-weight: bold;">${awayEmoji} ${awayName}:</span> `;
    }

    if (teamColor) {
      item.style.borderLeft = `4px solid ${teamColor}`;
    }
    
    item.innerHTML = `
      <span class="comm-time">${event.minute}'</span>
      <span class="comm-text">${teamPrefix}${event.commentary}</span>
    `;

    list.insertBefore(item, list.firstChild);

    if (event.type === 'goal') {
      audio.playGoalCheer();
      this.triggerGoalFlashOverlay();
    }
  }

  triggerGoalFlashOverlay() {
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0'; flash.style.left = '0';
    flash.style.width = '100vw'; flash.style.height = '100vh';
    flash.style.background = 'rgba(255,255,255,0.8)';
    flash.style.zIndex = '9999';
    flash.style.pointerEvents = 'none';
    flash.style.transition = 'opacity 0.6s ease';
    document.body.appendChild(flash);

    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '50%'; banner.style.left = '50%';
    banner.style.transform = 'translate(-50%, -50%) scale(0.5)';
    banner.style.fontFamily = 'var(--font-logo)';
    banner.style.fontWeight = '950';
    banner.style.fontSize = '8vw';
    banner.style.color = '#eab308';
    banner.style.textShadow = '0 0 20px rgba(0,0,0,0.8), 0 5px 30px #dc2626';
    banner.style.zIndex = '10000';
    banner.textContent = 'GOOOOL!!!';
    banner.style.pointerEvents = 'none';
    banner.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease';
    document.body.appendChild(banner);

    setTimeout(() => {
      flash.style.opacity = '0';
      banner.style.transform = 'translate(-50%, -50%) scale(1.2)';
    }, 100);

    setTimeout(() => {
      banner.style.opacity = '0';
    }, 1200);

    setTimeout(() => {
      flash.remove();
      banner.remove();
    }, 1800);
  }

  displayPostMatchSummary() {
    const sim = this.currentMatchSimulator;
    const isWin = sim.home.score > sim.away.score;
    const isDraw = sim.home.score === sim.away.score;
    const isFinal = this.tournamentRound === 5;
    const isGroupStage = this.tournamentRound < 3;

    const title = document.getElementById('match-result-title');
    const subtitle = document.getElementById('match-result-subtitle');
    const card = document.querySelector('.post-match-card');
    if (card) card.classList.remove('champion-card');

    if (isGroupStage) {
      if (isWin) {
        title.textContent = i18n.t('group_win_title');
        subtitle.textContent = i18n.t('group_win_subtitle');
      } else if (isDraw) {
        title.textContent = i18n.t('group_draw_title');
        subtitle.textContent = i18n.t('group_draw_subtitle');
      } else {
        title.textContent = i18n.t('group_loss_title');
        subtitle.textContent = i18n.t('group_loss_subtitle');
      }
    } else {
      if (isWin) {
        if (isFinal) {
          title.textContent = i18n.t('champion_title');
          subtitle.textContent = i18n.t('champion_subtitle');
          if (card) card.classList.add('champion-card');
          this.startConfetti();
        } else {
          title.textContent = i18n.t('advanced_title');
          subtitle.textContent = i18n.t('advanced_subtitle');
        }
      } else {
        title.textContent = i18n.t('eliminated_title');
        subtitle.textContent = i18n.t('eliminated_subtitle', { team: sim.away.name });
      }
    }

    const stats = sim.getMatchStats();
    const boxes = document.getElementById('post-match-stats-boxes');
    if (boxes) {
      boxes.innerHTML = `
        <div class="post-stat-item">
          <span class="post-stat-val">${sim.home.score} - ${sim.away.score}</span>
          <span class="post-stat-lbl">${i18n.t('stat_score')}</span>
        </div>
        <div class="post-stat-item">
          <span class="post-stat-val">${stats.possession}% - ${100 - stats.possession}%</span>
          <span class="post-stat-lbl">${i18n.t('stat_possession')}</span>
        </div>
        <div class="post-stat-item">
          <span class="post-stat-val">${stats.homeShots} - ${stats.awayShots}</span>
          <span class="post-stat-lbl">${i18n.t('stat_shots')}</span>
        </div>
        <div class="post-stat-item">
          <span class="post-stat-val">${stats.homeShotsOnTarget} - ${stats.awayShotsOnTarget}</span>
          <span class="post-stat-lbl">${i18n.t('stat_shots_on')}</span>
        </div>
        <div class="post-stat-item">
          <span class="post-stat-val">${stats.homeYellows} - ${stats.awayYellows}</span>
          <span class="post-stat-lbl">${i18n.t('stat_yellows')}</span>
        </div>
        <div class="post-stat-item">
          <span class="post-stat-val">${sim.home.rating}</span>
          <span class="post-stat-lbl">${i18n.t('stat_rating')}</span>
        </div>
      `;
    }

    const scorersContainer = document.getElementById('post-match-scorers');
    if (scorersContainer) {
      scorersContainer.innerHTML = '';
      const allGoals = [
        ...stats.homeGoals.map(g => ({ ...g, side: 'home' })),
        ...stats.awayGoals.map(g => ({ ...g, side: 'away' }))
      ];

      if (allGoals.length > 0) {
        let html = `<div class="scorers-title">⚽ ${i18n.t('stat_scorers')}</div><div class="scorers-list">`;
        allGoals.forEach(g => {
          const sideClass = g.side === 'away' ? 'away-scorer' : '';
          html += `<span class="scorer-tag ${sideClass}">⚽ ${g.player} ${g.minute}'</span>`;
        });
        html += '</div>';
        scorersContainer.innerHTML = html;
      }
    }

    if (isWin && isFinal) {
      const trophyEl = document.createElement('div');
      trophyEl.className = 'champion-trophy';
      trophyEl.textContent = '🏆';
      card.insertBefore(trophyEl, title);
    }

    document.getElementById('post-match-panel').classList.remove('hidden');
  }

  optimizeCpuLineup(team) {
    if (!team || !team.starters || !team.bench || !team.formation) return;
    let form = team.formation;
    if (typeof form === 'string') {
      form = formations[form] || formations["4-4-2"];
    }

    for (let idx = 0; idx < team.starters.length; idx++) {
      const starter = team.starters[idx];
      if (!starter) continue;

      if (starter.stamina < 70) {
        const slot = form.slots[idx];
        let bestSubIdx = -1;
        let bestSubRating = -1;

        team.bench.forEach((sub, subIdx) => {
          if (!sub || sub.stamina < 80) return;
          const compatible = sub.position === slot.pos || isPositionCompatible(slot.pos, sub.position);
          if (compatible && sub.rating > bestSubRating) {
            bestSubIdx = subIdx;
            bestSubRating = sub.rating;
          }
        });

        if (bestSubIdx !== -1) {
          const sub = team.bench[bestSubIdx];
          team.starters[idx] = sub;
          team.bench[bestSubIdx] = starter;
        }
      }
    }
  }

  findTeamByName(teamName) {
    if (this.teamName === teamName) {
      return {
        name: this.teamName,
        emoji: this.teamEmoji,
        rating: this.teamRating,
        chemistry: this.teamChemistry,
        starters: this.draftStarters,
        bench: this.draftBench,
        isUser: true,
        colorPrimary: this.teamColorPrimary,
        colorSecondary: this.teamColorSecondary
      };
    }
    if (this.groups) {
      for (const gk in this.groups) {
        const team = this.groups[gk].find(t => t.name === teamName);
        if (team) return team;
      }
    }
    if (this.bracketData) {
      for (const round of this.bracketData) {
        for (const match of round) {
          if (match.team1 && match.team1.name === teamName) return match.team1;
          if (match.team2 && match.team2.name === teamName) return match.team2;
        }
      }
    }
    return null;
  }

  inspectTeamSquad(teamName) {
    const team = this.findTeamByName(teamName);
    if (!team) return;

    document.getElementById('opponent-squad-title').textContent = `${team.emoji || "🏳️"} ${team.name} (${i18n.currentLang === 'tr' ? 'Kadro' : 'Squad'})`;

    const startersList = document.getElementById('opponent-starters-list');
    const benchList = document.getElementById('opponent-bench-list');
    startersList.innerHTML = "";
    benchList.innerHTML = "";

    const renderRoster = (players, container) => {
      players.forEach(player => {
        if (!player) return;
        const stamina = Math.round(player.stamina !== undefined ? player.stamina : 100);
        
        let staminaClass = "stamina-high";
        if (stamina < 40) staminaClass = "stamina-low";
        else if (stamina < 70) staminaClass = "stamina-medium";

        let formArrow = "";
        if (player.lastMatchRating !== undefined) {
          if (player.lastMatchRating < 5.5) {
            formArrow = `<span style="color:#ef4444; margin-left: 0.25rem;">▼</span>`;
          } else if (player.lastMatchRating > 8.0) {
            formArrow = `<span style="color:#10b981; margin-left: 0.25rem;">▲</span>`;
          }
        }

        const item = document.createElement('div');
        item.className = "sub-item-card";
        item.style.cursor = "default";
        item.innerHTML = `
          <div class="sub-item-info">
            <span class="sub-item-rating">${player.rating}</span>
            <span class="sub-item-name">${player.name} ${formArrow}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="font-size: 0.75rem; font-weight: 600; color: ${stamina < 40 ? '#ef4444' : (stamina < 70 ? '#f59e0b' : '#a7f3d0')}">⚡${stamina}%</span>
            <span class="sub-item-pos">${player.position}</span>
          </div>
        `;
        container.appendChild(item);
      });
    };

    if (team.starters) renderRoster(team.starters, startersList);
    if (team.bench) renderRoster(team.bench, benchList);

    document.getElementById('modal-opponent-squad').classList.remove('hidden');
  }

  applyPostMatchStaminaToCpu(sim, team1, team2) {
    const homeSimDataMap = new Map();
    [...sim.home.starters, ...sim.home.bench].forEach(p => {
      if (!p) return;
      const key = p.id || p.name;
      if (!homeSimDataMap.has(key)) {
        homeSimDataMap.set(key, { stamina: p.stamina, matchRating: p.matchRating });
      }
    });

    team1.starters.forEach((mainPlayer) => {
      if (!mainPlayer) return;
      const key = mainPlayer.id || mainPlayer.name;
      if (homeSimDataMap.has(key)) {
        const simData = homeSimDataMap.get(key);
        mainPlayer.stamina = simData.stamina;
        mainPlayer.lastMatchRating = simData.matchRating;
      }
      delete mainPlayer.injuryPenalty;
    });

    team1.bench.forEach((mainPlayer) => {
      if (!mainPlayer) return;
      const key = mainPlayer.id || mainPlayer.name;
      if (homeSimDataMap.has(key)) {
        const simData = homeSimDataMap.get(key);
        mainPlayer.stamina = simData.stamina;
        mainPlayer.lastMatchRating = simData.matchRating;
      }
      delete mainPlayer.injuryPenalty;
    });

    const awaySimDataMap = new Map();
    [...sim.away.starters, ...sim.away.bench].forEach(p => {
      if (!p) return;
      const key = p.id || p.name;
      if (!awaySimDataMap.has(key)) {
        awaySimDataMap.set(key, { stamina: p.stamina, matchRating: p.matchRating });
      }
    });

    team2.starters.forEach((mainPlayer) => {
      if (!mainPlayer) return;
      const key = mainPlayer.id || mainPlayer.name;
      if (awaySimDataMap.has(key)) {
        const simData = awaySimDataMap.get(key);
        mainPlayer.stamina = simData.stamina;
        mainPlayer.lastMatchRating = simData.matchRating;
      }
      delete mainPlayer.injuryPenalty;
    });

    team2.bench.forEach((mainPlayer) => {
      if (!mainPlayer) return;
      const key = mainPlayer.id || mainPlayer.name;
      if (awaySimDataMap.has(key)) {
        const simData = awaySimDataMap.get(key);
        mainPlayer.stamina = simData.stamina;
        mainPlayer.lastMatchRating = simData.matchRating;
      }
      delete mainPlayer.injuryPenalty;
    });
  }

  simulateBackgroundMatch(team1, team2, stageName, isKnockout) {
    this.optimizeCpuLineup(team1);
    this.optimizeCpuLineup(team2);

    const sim = new MatchSimulator(team1, team2, stageName, false, 'normal', isKnockout);
    while (!sim.isOver) {
      sim.tick();
    }

    this.applyPostMatchStaminaToCpu(sim, team1, team2);

    return {
      score1: sim.home.score,
      score2: sim.away.score,
      winner: sim.home.score > sim.away.score ? team1 : team2
    };
  }

  handlePostMatchCompletion() {
    const sim = this.currentMatchSimulator;
    const isWin = sim.home.score > sim.away.score;

    this.stopConfetti();

    // Build a map of player id/name -> { stamina, matchRating } from sim starters + bench
    const userScorers = sim.home.goals.map(g => g.player);
    const playerSimDataMap = new Map();
    [...sim.home.starters, ...sim.home.bench].forEach(p => {
      if (!p) return;
      const key = p.id || p.name;
      if (!playerSimDataMap.has(key)) {
        playerSimDataMap.set(key, { stamina: p.stamina, matchRating: p.matchRating });
      }
    });

    // Update draftStarters using identity match (not array index, since subs may have shuffled)
    this.draftStarters.forEach((mainPlayer) => {
      if (!mainPlayer) return;
      const key = mainPlayer.id || mainPlayer.name;
      if (playerSimDataMap.has(key)) {
        const simData = playerSimDataMap.get(key);
        mainPlayer.stamina = simData.stamina;
        mainPlayer.lastMatchRating = simData.matchRating;
      }
      // Clear match-only injury penalty
      delete mainPlayer.injuryPenalty;
      // Chemistry bonus for playing
      mainPlayer.chemistryBonus = (mainPlayer.chemistryBonus || 0) + 1;
      if (userScorers.includes(mainPlayer.name)) {
        mainPlayer.chemistryBonus += 1;
      }
    });

    // Update draftBench using identity match
    this.draftBench.forEach((mainPlayer) => {
      if (!mainPlayer) return;
      const key = mainPlayer.id || mainPlayer.name;
      if (playerSimDataMap.has(key)) {
        const simData = playerSimDataMap.get(key);
        mainPlayer.stamina = simData.stamina;
        mainPlayer.lastMatchRating = simData.matchRating;
      }
      delete mainPlayer.injuryPenalty;
    });

    // Update opponent (CPU team) players' stamina & lastMatchRating
    const opponent = sim.awayOriginal;
    if (opponent && opponent.starters && opponent.bench) {
      const awaySimDataMap = new Map();
      [...sim.away.starters, ...sim.away.bench].forEach(p => {
        if (!p) return;
        const key = p.id || p.name;
        if (!awaySimDataMap.has(key)) {
          awaySimDataMap.set(key, { stamina: p.stamina, matchRating: p.matchRating });
        }
      });

      opponent.starters.forEach((mainPlayer) => {
        if (!mainPlayer) return;
        const key = mainPlayer.id || mainPlayer.name;
        if (awaySimDataMap.has(key)) {
          const simData = awaySimDataMap.get(key);
          mainPlayer.stamina = simData.stamina;
          mainPlayer.lastMatchRating = simData.matchRating;
        }
        delete mainPlayer.injuryPenalty;
      });

      opponent.bench.forEach((mainPlayer) => {
        if (!mainPlayer) return;
        const key = mainPlayer.id || mainPlayer.name;
        if (awaySimDataMap.has(key)) {
          const simData = awaySimDataMap.get(key);
          mainPlayer.stamina = simData.stamina;
          mainPlayer.lastMatchRating = simData.matchRating;
        }
        delete mainPlayer.injuryPenalty;
      });
    }

    this.draftManager.recalculateDraftStats();

    let isEliminated = false;
    let wonFinal = false;

    if (this.tournamentRound < 3) {
      const currentFixtures = this.groupFixtures[this.tournamentRound];
      const userFixture = currentFixtures.find(m => m.team1.isUser || m.team2.isUser);
      
      if (userFixture) {
        userFixture.played = true;
        if (userFixture.team1.isUser) {
          userFixture.score1 = sim.home.score;
          userFixture.score2 = sim.away.score;
        } else {
          userFixture.score1 = sim.away.score;
          userFixture.score2 = sim.home.score;
        }
      }

      const stageName = `${i18n.currentLang === 'tr' ? 'Grup Maçı' : 'Group Match'} ${this.tournamentRound + 1}`;
      currentFixtures.forEach(f => {
        if (f.played) return;
        const res = this.simulateBackgroundMatch(f.team1, f.team2, stageName, false);
        f.score1 = res.score1;
        f.score2 = res.score2;
        f.played = true;
      });

      this.tournamentManager.recalculateGroupStandings();

      if (this.tournamentRound === 2) {
        let userGroupKey = null;
        for (const gk in this.groups) {
          if (this.groups[gk].some(t => t.isUser)) {
            userGroupKey = gk;
            break;
          }
        }

        const standings = this.groupStandings[userGroupKey];
        const userIndex = standings.findIndex(r => r.isUser);
        if (userIndex === 0 || userIndex === 1) {
          const getTopTwo = (gk) => [this.groupStandings[gk][0].team, this.groupStandings[gk][1].team];
          const [a1, a2] = getTopTwo('A');
          const [b1, b2] = getTopTwo('B');
          const [c1, c2] = getTopTwo('C');
          const [d1, d2] = getTopTwo('D');

          this.bracketData[0] = [
            { id: 0, team1: a1, team2: b2, score1: null, score2: null, played: false, winner: null },
            { id: 1, team1: c1, team2: d2, score1: null, score2: null, played: false, winner: null },
            { id: 2, team1: b1, team2: a2, score1: null, score2: null, played: false, winner: null },
            { id: 3, team1: d1, team2: c2, score1: null, score2: null, played: false, winner: null }
          ];
        } else {
          isEliminated = true;
        }
      }
    } else {
      const currentRoundMatches = this.bracketData[this.tournamentRound - 3];
      const userMatchIdx = currentRoundMatches.findIndex(m => 
        (m.team1 && m.team1.isUser) || (m.team2 && m.team2.isUser)
      );

      const userMatch = currentRoundMatches[userMatchIdx];
      userMatch.played = true;
      
      const userTeamInBracket = userMatch.team1.isUser ? userMatch.team1 : userMatch.team2;
      const opponentInBracket = userMatch.team1.isUser ? userMatch.team2 : userMatch.team1;
      
      if (userMatch.team1.isUser) {
        userMatch.score1 = sim.home.score;
        userMatch.score2 = sim.away.score;
      } else {
        userMatch.score1 = sim.away.score;
        userMatch.score2 = sim.home.score;
      }

      userMatch.winner = isWin ? userTeamInBracket : opponentInBracket;

      const stageKeys = [i18n.t('stage_qf'), i18n.t('stage_sf'), i18n.t('stage_final')];
      const stageName = stageKeys[this.tournamentRound - 3] || "Cup Round";
      currentRoundMatches.forEach((match, idx) => {
        if (idx === userMatchIdx) return;
        const res = this.simulateBackgroundMatch(match.team1, match.team2, stageName, true);
        match.score1 = res.score1;
        match.score2 = res.score2;
        match.played = true;
        match.winner = res.winner;
      });

      if (isWin) {
        if (this.tournamentRound === 5) {
          wonFinal = true;
        } else {
          const nextRound = this.tournamentRound - 3 + 1;
          const nextRoundMatches = this.bracketData[nextRound];

          currentRoundMatches.forEach((m, idx) => {
            const nextMatchIdx = Math.floor(idx / 2);
            const nextMatchSlot = idx % 2 === 0 ? "team1" : "team2";
            nextRoundMatches[nextMatchIdx][nextMatchSlot] = m.winner;
          });
        }
      } else {
        isEliminated = true;
      }
    }

    if (isEliminated) {
      this.isGameOver = true;
      this.museumManager.saveRunHistory("loss");
      this.screenManager.showScreen('screen-stats');
      this.museumManager.renderStatsScreen();
    } else if (wonFinal) {
      this.isGameOver = true;
      this.records.totalWins++;
      this.records.trophiesWon++;
      this.museumManager.saveRunHistory("win");
      this.museumManager.renderTrophyRoom();
      this.screenManager.showScreen('screen-stats');
      this.museumManager.renderStatsScreen();
    } else {
      if (isWin) {
        this.records.totalWins++;
      }
      this.rewardManager.triggerRewardPackFlow(() => {
        this.tournamentManager.advanceToNextTournamentStep();
      });
    }
  }

  renderMatchPerformanceUI() {
    const container = document.getElementById('match-performance-list');
    if (!container || !this.currentMatchSimulator) return;
    container.innerHTML = "";

    const side = this.performanceViewSide || "home";
    const team = side === "home" ? this.currentMatchSimulator.home : this.currentMatchSimulator.away;

    team.starters.forEach((player, idx) => {
      if (!player) return;

      const stamina = Math.round(player.stamina);
      const rating = player.matchRating.toFixed(1);

      let staminaClass = "high";
      if (stamina < 40) staminaClass = "low";
      else if (stamina < 70) staminaClass = "medium";

      let ratingClass = "high";
      if (player.matchRating < 6.0) ratingClass = "low";
      else if (player.matchRating < 7.5) ratingClass = "mid";

      const item = document.createElement('div');
      item.className = "perf-item";
      if (side === "home") {
        item.style.cursor = "pointer";
      } else {
        item.style.cursor = "default";
      }

      item.innerHTML = `
        <div class="perf-player-info">
          <div class="perf-name-row">
            <span class="perf-pos">${player.position}</span>
            <span class="perf-name">${player.name}</span>
          </div>
          <div class="perf-stamina-row">
            <div class="perf-stamina-bar">
              <div class="perf-stamina-fill ${staminaClass}" style="width: ${stamina}%"></div>
            </div>
            <span class="perf-stamina-val">${stamina}%</span>
          </div>
        </div>
        <div class="perf-rating-badge ${ratingClass}">${rating}</div>
      `;

      if (side === "home") {
        item.addEventListener('click', () => {
          audio.playClick();
          this.renderSubstitutionsModal(idx);
          document.getElementById('modal-substitutions').classList.remove('hidden');
        });
      }

      container.appendChild(item);
    });
  }

  renderSubstitutionsModal(preselectedStarterIndex = -1) {
    const startersList = document.getElementById('subs-starters-list');
    startersList.innerHTML = "";
    const benchList = document.getElementById('subs-bench-list');
    benchList.innerHTML = "";

    // Track active selection for match swapping
    if (this.selectedMatchSwapSlot === undefined || this.selectedMatchSwapSlot === null) {
      this.selectedMatchSwapSlot = null;
    }
    // Set preselected starter if provided (e.g. clicked from performance list)
    if (preselectedStarterIndex !== -1) {
      this.selectedMatchSwapSlot = { index: preselectedStarterIndex, type: "starter" };
    }

    const renderPitch = () => {
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

      this.currentMatchSimulator.home.starters.forEach((player, idx) => {
        if (!player) return;
        const slot = this.selectedFormation.slots[idx];

        const slotEl = document.createElement('div');
        slotEl.className = "pitch-slot";
        slotEl.style.position = "absolute";
        slotEl.style.left = `${slot.x}%`;
        slotEl.style.top = `${slot.y}%`;
        slotEl.style.transform = "translate(-50%, -50%)";
        slotEl.style.cursor = "pointer";
        slotEl.style.zIndex = "5";

        const isSelected = this.selectedMatchSwapSlot && this.selectedMatchSwapSlot.type === "starter" && this.selectedMatchSwapSlot.index === idx;
        const effRating = this.draftManager.getEffectiveRating(player, slot.pos);
        const ratingDiff = effRating - player.rating;

        let staminaClass = "stamina-high";
        const stamina = Math.round(player.stamina);
        if (stamina < 40) staminaClass = "stamina-low";
        else if (stamina < 70) staminaClass = "stamina-medium";

        slotEl.innerHTML = `
          <div class="mini-player-card ${isSelected ? 'selected' : ''}">
            <div class="mini-card-badge ${staminaClass} ${isSelected ? 'selected' : ''}">
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
          handleMatchSlotClick(idx, "starter");
        });

        pitch.appendChild(slotEl);
      });

      startersList.appendChild(pitch);
    };

    const renderBench = () => {
      benchList.innerHTML = "";
      this.currentMatchSimulator.home.bench.forEach((player, idx) => {
        if (!player) return;
        const isSubbedOut = this.currentMatchSimulator.subbedOutPlayerIds.has(player.id || player.name);
        const isSelected = this.selectedMatchSwapSlot && this.selectedMatchSwapSlot.type === "bench" && this.selectedMatchSwapSlot.index === idx;

        const card = document.createElement('div');
        card.className = "sub-item-card" + (isSubbedOut ? " subbed-out-disabled" : "") + (isSelected ? " selected" : "");
        if (isSubbedOut) {
          card.style.opacity = "0.4";
          card.style.cursor = "not-allowed";
        }

        card.innerHTML = `
          <div class="sub-item-info">
            <span class="sub-item-rating">${player.rating}</span>
            <span class="sub-item-name">${player.name} ${isSubbedOut ? `<span style="color:#ef4444;font-size:0.65rem;font-weight:800;margin-left:0.25rem;">(ÇIKTI)</span>` : ''}</span>
          </div>
          <span class="sub-item-pos">${player.position}</span>
        `;

        if (!isSubbedOut) {
          card.addEventListener('click', () => {
            audio.playClick();
            handleMatchSlotClick(idx, "bench");
          });
        }

        benchList.appendChild(card);
      });
    };

    const handleMatchSlotClick = (index, type) => {
      if (!this.selectedMatchSwapSlot) {
        this.selectedMatchSwapSlot = { index, type };
        renderPitch();
        renderBench();
      } else {
        const source = this.selectedMatchSwapSlot;
        
        // Cancel if clicking exact same slot
        if (source.index === index && source.type === type) {
          this.selectedMatchSwapSlot = null;
          renderPitch();
          renderBench();
          return;
        }

        // Tactic Swap: Starter <-> Starter
        if (source.type === "starter" && type === "starter") {
          const p1 = this.currentMatchSimulator.home.starters[source.index];
          const p2 = this.currentMatchSimulator.home.starters[index];

          this.currentMatchSimulator.home.starters[source.index] = p2;
          this.currentMatchSimulator.home.starters[index] = p1;
          this.currentMatchSimulator._recalculateHomeWeight();

          // Keep starting lineup order unchanged during matches
          // this.draftStarters = [...this.currentMatchSimulator.home.starters];
          this.selectedMatchSwapSlot = null;

          this.renderMatchPerformanceUI();
          renderPitch();
          renderBench();

          // Add Ticker message
          this.appendCommentary({
            type: 'sub',
            minute: this.currentMatchSimulator.minute,
            commentary: i18n.currentLang === 'tr'
              ? `${p1.name} ve ${p2.name} taktiksel olarak yer değiştirdi.`
              : `${p1.name} and ${p2.name} swapped positions tactically.`,
            team: 'home'
          });
        } 
        // Actual Substitution: Starter <-> Bench
        else {
          const starterIdx = source.type === "starter" ? source.index : index;
          const benchIdx = source.type === "bench" ? source.index : index;

          const res = this.currentMatchSimulator.makeSubstitution(starterIdx, benchIdx);
          if (res.success) {
            document.getElementById('modal-substitutions').classList.add('hidden');
            this.appendCommentary(res.event);
            // Keep starting lineup order unchanged during matches
            // this.draftStarters = [...this.currentMatchSimulator.home.starters];
            // this.draftBench = [...this.currentMatchSimulator.home.bench];
            this.subsCountThisMatch++;
            this.draftManager.recalculateDraftStats();
            this.renderMatchPerformanceUI();
            this.selectedMatchSwapSlot = null;
          } else {
            alert(res.msg);
            this.selectedMatchSwapSlot = null;
            renderPitch();
            renderBench();
          }
        }
      }
    };

    renderPitch();
    renderBench();
  }

  renderSquadManagementModal() {
    this.tempStarters = [...this.draftStarters];
    this.tempBench = [...this.draftBench];
    this.renderSquadManagementLists();
  }

  renderSquadManagementLists() {
    const startersList = document.getElementById('squad-starters-list');
    startersList.innerHTML = "";
    const benchList = document.getElementById('squad-bench-list');
    benchList.innerHTML = "";

    // Track active selection in squad swap
    if (this.selectedSquadSwapSlot === undefined || this.selectedSquadSwapSlot === null) {
      this.selectedSquadSwapSlot = null;
    }

    const renderPitch = () => {
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

      this.tempStarters.forEach((player, idx) => {
        if (!player) return;
        const slot = this.selectedFormation.slots[idx];

        const slotEl = document.createElement('div');
        slotEl.className = "pitch-slot";
        slotEl.style.position = "absolute";
        slotEl.style.left = `${slot.x}%`;
        slotEl.style.top = `${slot.y}%`;
        slotEl.style.transform = "translate(-50%, -50%)";
        slotEl.style.cursor = "pointer";
        slotEl.style.zIndex = "5";

        const isSelected = this.selectedSquadSwapSlot && this.selectedSquadSwapSlot.type === "starter" && this.selectedSquadSwapSlot.index === idx;
        const effRating = this.draftManager.getEffectiveRating(player, slot.pos);
        const ratingDiff = effRating - player.rating;

        let staminaClass = "stamina-high";
        const stamina = Math.round(player.stamina || 100);
        if (stamina < 40) staminaClass = "stamina-low";
        else if (stamina < 70) staminaClass = "stamina-medium";

        slotEl.innerHTML = `
          <div class="mini-player-card ${isSelected ? 'selected' : ''}">
            <div class="mini-card-badge ${staminaClass} ${isSelected ? 'selected' : ''}">
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
          handleSquadSlotClick(idx, "starter");
        });

        pitch.appendChild(slotEl);
      });

      startersList.appendChild(pitch);
    };

    renderPitch();

    this.tempBench.forEach((player, idx) => {
      if (!player) return;
      const isSelected = this.selectedSquadSwapSlot && this.selectedSquadSwapSlot.type === "bench" && this.selectedSquadSwapSlot.index === idx;

      const card = document.createElement('div');
      card.className = "sub-item-card" + (isSelected ? " selected" : "");
      card.innerHTML = `
        <div class="sub-item-info">
          <span class="sub-item-rating">${player.rating}</span>
          <span class="sub-item-name">${player.name}</span>
        </div>
        <span class="sub-item-pos">${player.position}</span>
      `;
      card.addEventListener('click', () => {
        audio.playClick();
        handleSquadSlotClick(idx, "bench");
      });
      benchList.appendChild(card);
    });

    const handleSquadSlotClick = (index, type) => {
      if (!this.selectedSquadSwapSlot) {
        this.selectedSquadSwapSlot = { index, type };
        renderPitch();
        const bCards = document.querySelectorAll('#squad-bench-list .sub-item-card');
        bCards.forEach((bc, bIdx) => {
          if (type === "bench" && bIdx === index) {
            bc.classList.add('selected');
          } else {
            bc.classList.remove('selected');
          }
        });
      } else {
        const source = this.selectedSquadSwapSlot;
        
        // Cancel if exact same slot
        if (source.index === index && source.type === type) {
          this.selectedSquadSwapSlot = null;
          renderPitch();
          this.renderSquadManagementLists();
          return;
        }

        // Swap players in temp lists
        const p1 = source.type === "starter" ? this.tempStarters[source.index] : this.tempBench[source.index];
        const p2 = type === "starter" ? this.tempStarters[index] : this.tempBench[index];

        if (source.type === "starter") {
          this.tempStarters[source.index] = p2;
        } else {
          this.tempBench[source.index] = p2;
        }

        if (type === "starter") {
          this.tempStarters[index] = p1;
        } else {
          this.tempBench[index] = p1;
        }

        this.selectedSquadSwapSlot = null;
        this.renderSquadManagementLists();
      }
    };
  }

  startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#eab308', '#10b981', '#ef4444', '#3b82f6', '#f97316', '#8b5cf6', '#ffffff'];
    const pieces = [];
    
    for (let i = 0; i < 200; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 12 + 4,
        h: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        dx: (Math.random() - 0.5) * 3,
        dy: Math.random() * 3 + 2,
        rot: Math.random() * 360,
        dRot: (Math.random() - 0.5) * 10
      });
    }

    this._confettiRunning = true;

    const animate = () => {
      if (!this._confettiRunning) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let allDone = true;
      pieces.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        p.rot += p.dRot;
        p.dy += 0.03;

        if (p.y < canvas.height + 50) allDone = false;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      if (!allDone) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this._confettiRunning = false;
      }
    };

    animate();
  }

  stopConfetti() {
    this._confettiRunning = false;
    const canvas = document.getElementById('confetti-canvas');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
}

// Instantiate and initiate
const app = new GameController();
window.addEventListener('DOMContentLoaded', () => {
  app.init();
});
export default app;

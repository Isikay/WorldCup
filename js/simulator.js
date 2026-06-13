// World Cup Draft & Simulation - Match Simulator Module
import { i18n } from './i18n.js';
import { isPositionCompatible, getBasePosition, getPlayersForCpuTeam, formations, getPositionPenalty } from './data.js';
import { getCommentary, isChainedCommentary } from './commentary.js';

export class MatchSimulator {
  constructor(homeTeam, awayTeam, stageName, isFinal = false, difficulty = 'normal', isKnockout = true) {
    this.awayOriginal = awayTeam;

    let homeForm = homeTeam.formation;
    if (typeof homeForm === 'string') {
      homeForm = formations[homeForm] || formations["4-4-2"];
    } else if (!homeForm) {
      homeForm = formations["4-4-2"];
    }

    this.home = {
      name: homeTeam.name,
      emoji: homeTeam.emoji || "🦁",
      rating: homeTeam.rating,
      chemistry: homeTeam.chemistry,
      perk: homeTeam.perk,
      isUser: homeTeam.isUser,
      starters: homeTeam.starters.map(p => p ? { ...p, stamina: p.stamina !== undefined ? p.stamina : 100, matchRating: 7.0 } : null),
      bench: homeTeam.bench.map(p => p ? { ...p, stamina: p.stamina !== undefined ? p.stamina : 100, matchRating: 7.0 } : null),
      formation: homeForm,
      score: 0,
      goals: []
    };

    let cpuForm = awayTeam.formation;
    if (typeof cpuForm === 'string') {
      cpuForm = formations[cpuForm] || formations["4-4-2"];
    } else if (!cpuForm) {
      cpuForm = formations["4-4-2"];
    }

    this.away = {
      name: awayTeam.name,
      emoji: awayTeam.emoji || "🏳️",
      rating: awayTeam.rating,
      colorPrimary: awayTeam.colorPrimary || "#ffffff",
      colorSecondary: awayTeam.colorSecondary || "#000000",
      formation: cpuForm,
      score: 0,
      goals: []
    };
    this.away.tactic = awayTeam.tactic || "balanced";

    if (awayTeam.starters && awayTeam.bench) {
      this.away.starters = awayTeam.starters.map(p => p ? { ...p, stamina: p.stamina !== undefined ? p.stamina : 100, matchRating: 7.0 } : null);
      this.away.bench = awayTeam.bench.map(p => p ? { ...p, stamina: p.stamina !== undefined ? p.stamina : 100, matchRating: 7.0 } : null);
    } else {
      const cpuPlayers = getPlayersForCpuTeam(this.away.name);
      this.away.starters = new Array(11).fill(null);
      this.away.bench = [];
      
      if (cpuPlayers.length > 0) {
        const unassigned = [...cpuPlayers].sort((a, b) => b.rating - a.rating);
        const gkIdx = cpuForm.slots.findIndex(s => s.pos === "GK");
        if (gkIdx !== -1) {
          const gkPlayer = unassigned.find(p => p.position === "GK");
          if (gkPlayer) {
            this.away.starters[gkIdx] = { ...gkPlayer, stamina: 100, matchRating: 7.0 };
            unassigned.splice(unassigned.indexOf(gkPlayer), 1);
          }
        }
        
        cpuForm.slots.forEach((slot, idx) => {
          if (this.away.starters[idx] !== null) return;
          const matching = unassigned.find(p => isPositionCompatible(slot.pos, p.position));
          if (matching) {
            this.away.starters[idx] = { ...matching, stamina: 100, matchRating: 7.0 };
            unassigned.splice(unassigned.indexOf(matching), 1);
          }
        });
        
        cpuForm.slots.forEach((slot, idx) => {
          if (this.away.starters[idx] !== null) return;
          if (unassigned.length > 0) {
            const p = unassigned.shift();
            this.away.starters[idx] = { ...p, stamina: 100, matchRating: 7.0 };
          }
        });
        
        for (let i = 0; i < 8 && unassigned.length > 0; i++) {
          const p = unassigned.shift();
          this.away.bench.push({ ...p, stamina: 100, matchRating: 7.0 });
        }
      } else {
        const positions = cpuForm.slots.map(s => s.pos);
        positions.forEach((pos, idx) => {
          this.away.starters[idx] = {
            id: `cpu_${idx}`,
            name: `${awayTeam.name} ${pos}`,
            position: pos,
            rating: awayTeam.rating,
            stats: { pac: awayTeam.rating, sho: awayTeam.rating, pas: awayTeam.rating, dri: awayTeam.rating, def: awayTeam.rating, phy: awayTeam.rating },
            stamina: 100,
            matchRating: 7.0
          };
        });
        for (let i = 0; i < 8; i++) {
          this.away.bench.push({
            id: `cpu_sub_${i}`,
            name: `${awayTeam.name} Yedek ${i+1}`,
            position: "SUB",
            rating: awayTeam.rating - 5,
            stats: { pac: awayTeam.rating - 5, sho: awayTeam.rating - 5, pas: awayTeam.rating - 5, dri: awayTeam.rating - 5, def: awayTeam.rating - 5, phy: awayTeam.rating - 5 },
            stamina: 100,
            matchRating: 7.0
          });
        }
      }
    }

    this.stageName = stageName;
    this.isFinal = isFinal;
    this.difficulty = difficulty; // 'easy', 'normal', 'legend'
    this.isKnockout = isKnockout;

    this.minute = 0;
    this.half = 1; // 1 = first half, 2 = second half
    this.waitingForSecondHalf = false; // flag for half-time transition
    this.ballX = 50;
    this.momentumHome = 50;
    this.crowdVolume = 0.2;
    this.isOver = false;
    this.substitutionsUsed = 0;
    this.maxSubs = 8;

    this.homeSubsUsed = 0;
    this.awaySubsUsed = 0;
    this.awaySubbedOutPlayerIds = new Set();
    this.pendingCpuSubEvent = null;
    this.isAutoSubEnabled = false;
    this.pendingUserAutoSubEvent = null;

    // Track subbed-out player IDs/names to restrict re-entry
    this.subbedOutPlayerIds = new Set();

    // Tactical mode: 'attacking', 'balanced', 'defensive'
    this.tacticalMode = 'balanced';

    this.buildupPhase = 0;
    this.possessionSide = Math.random() < 0.5 ? 'home' : 'away';

    // Pending chained commentary (multi-line events)
    this.pendingChain = null;

    // Match statistics tracking
    this.matchStats = {
      homePossessionTicks: 0,
      awayPossessionTicks: 0,
      homeShots: 0,
      awayShots: 0,
      homeShotsOnTarget: 0,
      awayShotsOnTarget: 0,
      homeYellows: 0,
      awayYellows: 0,
      homeReds: 0,
      awayReds: 0,
      homeCorners: 0,
      awayCorners: 0,
    };

    // Calculate initial team weights
    this.formationAdvantage = this._getFormationAdvantage();
    this._recalculateHomeWeight();
    this._recalculateAwayWeight();
  }

  _getStaminaFactor(stamina) {
    if (stamina >= 75) return 1.0;
    if (stamina >= 50) return 0.9;   // 10% drop
    if (stamina >= 25) return 0.7;   // 30% drop
    return 0.4;                     // 60% drop
  }

  _getFormationAdvantage() {
    const homeStyle = this.home.formation ? this.home.formation.style : "Balanced";
    const awayStyle = this.away.formation ? this.away.formation.style : "Balanced";
    
    if (homeStyle === awayStyle) return 0;
    
    const rules = {
      "Possession": "Wing Play",
      "Wing Play": "Low Block",
      "Low Block": "Balanced",
      "Balanced": "Possession"
    };
    
    if (rules[homeStyle] === awayStyle) {
      return 1; // Home counters Away
    }
    if (rules[awayStyle] === homeStyle) {
      return -1; // Away counters Home
    }
    return 0;
  }

  // Set tactical mode mid-match
  setTacticalMode(mode) {
    this.tacticalMode = mode; // 'attacking', 'balanced', 'defensive'
  }

  // Swap starter with bench player
  makeSubstitution(starterIndex, benchIndex) {
    if (this.substitutionsUsed >= this.maxSubs) {
      return { success: false, msg: i18n.t('msg_sub_limit') };
    }

    const starter = this.home.starters[starterIndex];
    const substitute = this.home.bench[benchIndex];

    if (!starter || !substitute) {
      return { success: false, msg: "Hata!" };
    }

    // Check if the substitute was already subbed out in this match
    if (this.subbedOutPlayerIds.has(substitute.id || substitute.name)) {
      return { success: false, msg: i18n.t('msg_subbed_out_reentry_error') || "Oyundan çıkan oyuncu tekrar giremez!" };
    }

    // Swap players
    this.home.starters[starterIndex] = substitute;
    this.home.bench[benchIndex] = starter;
    
    // Add starter to subbed out set
    this.subbedOutPlayerIds.add(starter.id || starter.name);
    
    this.substitutionsUsed++;

    // Re-calculate rating & chemistry changes
    this._recalculateHomeWeight();
    this._recalculateAwayWeight();

    const commentary = getCommentary('sub', {
      player: substitute.name,
      keeper: starter.name, // "keeper" reused as "outPlayer" in sub commentary
      team: this.home.name,
      minute: this.minute,
    });

    return {
      success: true,
      msg: i18n.t('msg_sub_done'),
      event: {
        type: 'sub',
        minute: this.minute,
        commentary,
        team: 'home'
      }
    };
  }

  makeCpuSubstitutions(teamKey) {
    const team = this[teamKey];
    if (!team || !team.starters || !team.bench || !team.formation) return;
    
    const subLimit = this.maxSubs;
    const usedKey = teamKey === 'home' ? 'homeSubsUsed' : 'awaySubsUsed';
    if (this[usedKey] === undefined) this[usedKey] = 0;
    if (this[usedKey] >= subLimit) return;

    team.starters.forEach((starter, sIdx) => {
      if (!starter || this[usedKey] >= subLimit) return;

      if (starter.stamina < 60) {
        const slot = team.formation.slots[sIdx];
        let bestSubIdx = -1;
        let bestSubRating = -1;

        team.bench.forEach((sub, bIdx) => {
          if (!sub || sub.stamina < 80) return;
          
          const subbedOutSet = teamKey === 'home' ? this.subbedOutPlayerIds : this.awaySubbedOutPlayerIds;
          if (subbedOutSet && subbedOutSet.has(sub.id || sub.name)) return;

          const compatible = sub.position === slot.pos || isPositionCompatible(slot.pos, sub.position);
          if (compatible && sub.rating > bestSubRating) {
            bestSubIdx = bIdx;
            bestSubRating = sub.rating;
          }
        });

        if (bestSubIdx !== -1) {
          const sub = team.bench[bestSubIdx];
          team.starters[sIdx] = sub;
          team.bench[bestSubIdx] = starter;
          
          const subbedOutSet = teamKey === 'home' ? this.subbedOutPlayerIds : this.awaySubbedOutPlayerIds;
          if (subbedOutSet) subbedOutSet.add(starter.id || starter.name);

          this[usedKey]++;

          this.pendingCpuSubEvent = {
            type: 'sub',
            minute: this.minute,
            commentary: getCommentary('sub', {
              player: sub.name,
              keeper: starter.name,
              team: team.name,
              minute: this.minute
            }),
            team: teamKey
          };
        }
      }
    });
  }

  makeUserAutoSubstitutions() {
    if (this.substitutionsUsed >= this.maxSubs) return;

    for (let sIdx = 0; sIdx < this.home.starters.length; sIdx++) {
      const starter = this.home.starters[sIdx];
      if (!starter) continue;

      if (starter.stamina < 50) {
        const slot = this.home.formation.slots[sIdx];
        let bestSubIdx = -1;
        let bestSubRating = -1;

        this.home.bench.forEach((sub, bIdx) => {
          if (!sub || sub.stamina < 75) return;
          
          if (this.subbedOutPlayerIds.has(sub.id || sub.name)) return;

          const compatible = sub.position === slot.pos || isPositionCompatible(slot.pos, sub.position);
          if (compatible && sub.rating > bestSubRating) {
            bestSubIdx = bIdx;
            bestSubRating = sub.rating;
          }
        });

        if (bestSubIdx !== -1) {
          const sub = this.home.bench[bestSubIdx];
          
          this.home.starters[sIdx] = sub;
          this.home.bench[bestSubIdx] = starter;

          this.subbedOutPlayerIds.add(starter.id || starter.name);
          this.substitutionsUsed++;

          this._recalculateHomeWeight();
          this._recalculateAwayWeight();

          const prefix = i18n.currentLang === 'tr' ? '[OTO-DEĞİŞİKLİK]' : '[AUTO-SUB]';
          const subComm = getCommentary('sub', {
            player: sub.name,
            keeper: starter.name,
            team: this.home.name,
            minute: this.minute
          });

          this.pendingUserAutoSubEvent = {
            type: 'sub',
            minute: this.minute,
            commentary: `${prefix} ${subComm}`,
            team: 'home'
          };
          break;
        }
      }
    }
  }

  _getEffectiveRating(player, slotPos) {
    if (!player) return 0;
    let formMod = 0;
    if (player.lastMatchRating !== undefined) {
      if (player.lastMatchRating < 5.5) formMod = -1;
      else if (player.lastMatchRating > 8.0) formMod = 1;
    }
    let baseRating = player.rating + formMod;
    if (player.injuryPenalty) {
      baseRating = Math.max(50, baseRating - player.injuryPenalty);
    }
    const penalty = getPositionPenalty(slotPos, player.position);

    if (penalty === 0) {
      return baseRating;
    }

    if (penalty === 45) {
      return Math.max(30, baseRating - 45);
    }

    return Math.max(40, baseRating - penalty);
  }

  _recalculateHomeWeight() {
    const avgRating = this.home.starters.reduce((acc, p, idx) => {
      if (!p) return acc;
      const slotPos = this.home.formation ? this.home.formation.slots[idx].pos : p.position;
      const effectiveRating = this._getEffectiveRating(p, slotPos);
      const staminaFactor = this._getStaminaFactor(p.stamina);
      return acc + (effectiveRating * staminaFactor);
    }, 0) / 11;
    this.home.rating = Math.round(avgRating);
    this.homeWeight = (this.home.rating * 0.7) + (this.home.chemistry * 0.3);
    if (this.home.perk === 'attacker') this.homeWeight += 3.5;
    if (this.home.perk === 'tactician') this.homeWeight += 2.0;

    // Difficulty modifiers (affect user relative power)
    if (this.difficulty === 'easy') {
      this.homeWeight += 5;
    } else if (this.difficulty === 'legend') {
      this.homeWeight -= 3;
    }

    // Formation counter bonus
    if (this.formationAdvantage === 1) {
      this.homeWeight += 3.0;
    }
  }

  _recalculateAwayWeight() {
    const avgRating = this.away.starters.reduce((acc, p, idx) => {
      if (!p) return acc;
      const slotPos = this.away.formation ? this.away.formation.slots[idx].pos : p.position;
      const effectiveRating = this._getEffectiveRating(p, slotPos);
      const staminaFactor = this._getStaminaFactor(p.stamina);
      return acc + (effectiveRating * staminaFactor);
    }, 0) / 11;
    this.away.rating = Math.round(avgRating);
    this.awayWeight = this.away.rating;

    // Difficulty modifiers for CPU
    if (this.difficulty === 'easy') {
      this.awayWeight -= 5;
    } else if (this.difficulty === 'legend') {
      this.awayWeight += 5;
    }

    // Boss boost in finals
    if (this.isFinal) {
      this.awayWeight += 2.0;
    }

    // Formation counter bonus
    if (this.formationAdvantage === -1) {
      this.awayWeight += 3.0;
    }
  }

  // Get tactical weight modifiers
  _getTacticalModifiers() {
    switch (this.tacticalMode) {
      case 'attacking':
        return { homeGoalChance: 0.08, awayGoalChance: 0.04, possessionBonus: 5 };
      case 'defensive':
        return { homeGoalChance: -0.06, awayGoalChance: -0.08, possessionBonus: -5 };
      default: // balanced
        return { homeGoalChance: 0, awayGoalChance: 0, possessionBonus: 0 };
    }
  }

  // Simulates one game cycle (representing 1-3 minutes)
  tick() {
    if (this.isOver) return null;

    // Check for CPU automatic substitutions
    this.makeCpuSubstitutions('away');
    if (!this.home.isUser) {
      this.makeCpuSubstitutions('home');
    }

    // Check for User automatic substitutions if enabled
    if (this.isAutoSubEnabled && this.home.isUser) {
      this.makeUserAutoSubstitutions();
    }

    if (this.pendingCpuSubEvent) {
      const subEvent = this.pendingCpuSubEvent;
      this.pendingCpuSubEvent = null;
      return {
        minute: this.minute,
        scoreHome: this.home.score,
        scoreAway: this.away.score,
        ballX: this.ballX,
        momentumHome: this.momentumHome,
        crowdVolume: this.crowdVolume,
        isOver: false,
        event: subEvent
      };
    }

    if (this.pendingUserAutoSubEvent) {
      const subEvent = this.pendingUserAutoSubEvent;
      this.pendingUserAutoSubEvent = null;
      return {
        minute: this.minute,
        scoreHome: this.home.score,
        scoreAway: this.away.score,
        ballX: this.ballX,
        momentumHome: this.momentumHome,
        crowdVolume: this.crowdVolume,
        isOver: false,
        event: subEvent
      };
    }

    let event = null;

    // If there's a pending chained commentary — flush the second part
    if (this.pendingChain) {
      const chainEvent = this.pendingChain;
      this.pendingChain = null;
      return {
        minute: this.minute,
        scoreHome: this.home.score,
        scoreAway: this.away.score,
        ballX: this.ballX,
        momentumHome: this.momentumHome,
        crowdVolume: this.crowdVolume,
        isOver: false,
        event: chainEvent
      };
    }

    // First cycle: Kickoff
    if (this.minute === 0) {
      this.minute = 1;
      this.ballX = 50;
      return {
        minute: this.minute,
        scoreHome: this.home.score,
        scoreAway: this.away.score,
        ballX: this.ballX,
        momentumHome: this.momentumHome,
        crowdVolume: this.crowdVolume,
        isOver: false,
        event: {
          type: 'kickoff',
          minute: 0,
          commentary: getCommentary('kickoff', {}),
          team: 'neutral'
        }
      };
    }

    // Second half kickoff — triggered after halftime was sent
    if (this.waitingForSecondHalf) {
      this.waitingForSecondHalf = false;
      this.minute = 46;
      this.ballX = 50;
      return {
        minute: 46,
        scoreHome: this.home.score,
        scoreAway: this.away.score,
        ballX: 50,
        momentumHome: 50,
        crowdVolume: 0.2,
        isOver: false,
        event: {
          type: 'kickoff',
          minute: 46,
          commentary: getCommentary('secondhalf', {}),
          team: 'neutral'
        }
      };
    }

    // Advance match minute
    const timeDelta = Math.floor(Math.random() * 3) + 1;
    this.minute += timeDelta;

    // Update player fatigue and performance ratings for Home
    this.home.starters.forEach(p => {
      if (!p) return;
      let staminaLoss = (0.25 + Math.random() * 0.35) * timeDelta;
      staminaLoss *= (1.25 - ((p.stats.phy || 75) / 100));
      if (this.tacticalMode === 'attacking') staminaLoss *= 1.4;
      if (this.tacticalMode === 'defensive') staminaLoss *= 0.7;
      p.stamina = Math.max(0, p.stamina - staminaLoss);

      let ratingDelta = (Math.random() - 0.5) * 0.04 * timeDelta;
      if (p.stamina < 50) ratingDelta -= 0.02 * timeDelta;
      if (p.stamina < 25) ratingDelta -= 0.05 * timeDelta;
      p.matchRating = Math.max(3.0, Math.min(10.0, p.matchRating + ratingDelta));
    });

    // Rest bench players to recover stamina for Home
    this.home.bench.forEach(p => {
      if (!p) return;
      if (p.stamina < 100) {
        const recovery = (0.15 + Math.random() * 0.15) * timeDelta;
        p.stamina = Math.min(100, p.stamina + recovery);
      }
    });

    // Update player fatigue and performance ratings for CPU
    this.away.starters.forEach(p => {
      if (!p) return;
      let staminaLoss = (0.25 + Math.random() * 0.35) * timeDelta;
      staminaLoss *= (1.25 - ((p.stats.phy || 75) / 100));
      if (this.away.tactic === 'attacking') staminaLoss *= 1.4;
      if (this.away.tactic === 'defensive') staminaLoss *= 0.7;
      p.stamina = Math.max(0, p.stamina - staminaLoss);

      let ratingDelta = (Math.random() - 0.5) * 0.04 * timeDelta;
      if (p.stamina < 50) ratingDelta -= 0.02 * timeDelta;
      if (p.stamina < 25) ratingDelta -= 0.05 * timeDelta;
      p.matchRating = Math.max(3.0, Math.min(10.0, p.matchRating + ratingDelta));
    });

    // Rest bench players for CPU
    this.away.bench.forEach(p => {
      if (!p) return;
      if (p.stamina < 100) {
        const recovery = (0.15 + Math.random() * 0.15) * timeDelta;
        p.stamina = Math.min(100, p.stamina + recovery);
      }
    });

    // Re-calculate weights
    this._recalculateHomeWeight();
    this._recalculateAwayWeight();

    // Check halftime
    if (this.half === 1 && this.minute >= 45) {
      this.minute = 45;
      this.half = 2;
      this.waitingForSecondHalf = true;
      this.ballX = 50;
      return {
        minute: 45,
        scoreHome: this.home.score,
        scoreAway: this.away.score,
        ballX: 50,
        momentumHome: 50,
        crowdVolume: 0.1,
        isOver: false,
        event: {
          type: 'halftime',
          minute: 45,
          commentary: getCommentary('halftime', {}),
          team: 'neutral'
        }
      };
    }

    // Fulltime check
    if (this.minute >= 90) {
      this.minute = 90;
      this.isOver = true;
      this.ballX = 50;

      // Resolve draws in knockout
      if (this.isKnockout && this.home.score === this.away.score) {
        const homePenScores = Math.floor(Math.random() * 3) + 3;
        const awayPenScores = Math.floor(Math.random() * 3) + 3;

        let pWinner = 'home';
        if (homePenScores > awayPenScores) {
          this.home.score++;
          pWinner = 'home';
        } else if (awayPenScores > homePenScores) {
          this.away.score++;
          pWinner = 'away';
        } else {
          // sudden death
          if (Math.random() > 0.5) {
            this.home.score++;
            pWinner = 'home';
          } else {
            this.away.score++;
            pWinner = 'away';
          }
        }

        const penWinnerName = pWinner === 'home' ? this.home.name : this.away.name;
        return {
          minute: 90,
          scoreHome: this.home.score,
          scoreAway: this.away.score,
          ballX: 50,
          momentumHome: 50,
          crowdVolume: 0.3,
          isOver: true,
          event: {
            type: 'penalties',
            minute: 90,
            commentary: getCommentary('penalties', { player: penWinnerName }),
            team: pWinner
          }
        };
      }

      // Match summary
      const topPlayer = this._getTopPerformingPlayer();
      const summaryComm = getCommentary('match_summary', {
        homeScore: this.home.score,
        awayScore: this.away.score,
        homeTeamName: this.home.name,
        awayTeamName: this.away.name,
        player: topPlayer ? topPlayer.name : null,
      });

      return {
        minute: 90,
        scoreHome: this.home.score,
        scoreAway: this.away.score,
        ballX: 50,
        momentumHome: 50,
        crowdVolume: 0.1,
        isOver: true,
        event: {
          type: 'fulltime',
          minute: 90,
          commentary: getCommentary('fulltime', {
            homeScore: this.home.score,
            awayScore: this.away.score,
          }) + ' ' + summaryComm,
          team: 'neutral'
        }
      };
    }

    // Normal play phase logic
    const tacticalMods = this._getTacticalModifiers();
    const isHomeAttacking = this.possessionSide === 'home';

    // Track possession ticks
    if (isHomeAttacking) {
      this.matchStats.homePossessionTicks++;
    } else {
      this.matchStats.awayPossessionTicks++;
    }

    const lang = i18n.currentLang || 'tr';
    const attackingTeam = isHomeAttacking ? this.home : this.away;
    const defendingTeam = isHomeAttacking ? this.away : this.home;

    const phaseCommentaries = {
      tr: {
        midfield_pass_success: [
          "{team} orta sahada kısa paslarla hazırlık pasları yapıyor, oyun kuruyor.",
          "{team} paslaşarak rakip yarı alana doğru yerleşiyor.",
          "{team} orta sahada pas trafiğiyle boşluk aramaya başladı.",
          "{team} ayağa paslarla topu ileriye taşıyor."
        ],
        midfield_pass_fail: [
          "{opp_team} orta alanda topu kaptı ve hızlı hücum fırsatı yakaladı.",
          "{team} orta sahada pas hatası yaptı, top {opp_team} kontrolünde.",
          "{opp_team} presle topu kazanarak hücumu kesti.",
          "{team} oyun kurmaya çalışırken araya giren {opp_team} topun sahibi oldu."
        ],
        attack_creation_success: [
          "{team} ceza sahası yayına yakın bir noktada tehlikeli paslaşıyor, boşluk arıyor.",
          "{player} şık bir çalımla çizgiye indi, içeri çevirmek istiyor!",
          "{team} rakip savunmayı geriye koşturuyor, ceza alanında tehlike!",
          "{player} topla buluştu, driplingle ceza sahasına sokuluyor!"
        ],
        attack_creation_fail: [
          "{opp_team} defansı zamanında araya girerek tehlikeyi önledi.",
          "{player} ceza sahasına girmek isterken topu kaybetti, savunma başarılı.",
          "{opp_team} savunması presle hücum oyuncusunu pas hatasına zorladı.",
          "{team} kanattan yüklenmek istedi ancak savunma topu taçla kesti."
        ]
      },
      en: {
        midfield_pass_success: [
          "{team} is building up from the midfield with short passes.",
          "{team} shifts the play forward, entering the opponent's half.",
          "{team} dictates the tempo of the match in the middle of the pitch.",
          "{team} moves the ball quickly through the midfield."
        ],
        midfield_pass_fail: [
          "{opp_team} intercepts the ball in midfield and launches a counter.",
          "A poor pass from {team} allows {opp_team} to recover possession.",
          "{opp_team} applies high pressure and successfully wins the ball back.",
          "{team} tries to build up but the pass is cut off by {opp_team}."
        ],
        attack_creation_success: [
          "{team} is passing sharply near the opponent's penalty area.",
          "{player} beats his marker with a neat skill move and looks to cross!",
          "{team} stretches the defense, pushing into a dangerous area!",
          "{player} gets on the ball and drives directly into the box!"
        ],
        attack_creation_fail: [
          "{opp_team} defense reads the play well and intercepts the pass.",
          "{player} tries to penetrate the box but is tackled successfully.",
          "High intensity defending from {opp_team} forces a turnover.",
          "{team} attempts to build down the wing, but the ball is cleared."
        ]
      }
    };

    if (this.buildupPhase === 0) {
      // Phase 0: Midfield Buildup
      const passer = this._pickStarPlayer(attackingTeam, 'pas');
      const defender = this._pickStarPlayer(defendingTeam, 'def');
      
      let successChance = 0.52 + (passer.stats.pas - defender.stats.def) * 0.004;
      if (isHomeAttacking && this.tacticalMode === 'attacking') successChance += 0.02;
      if (!isHomeAttacking && this.away.tactic === 'attacking') successChance += 0.02;
      if (isHomeAttacking && this.away.tactic === 'defensive') successChance -= 0.03;
      if (!isHomeAttacking && this.tacticalMode === 'defensive') successChance -= 0.03;
      successChance = Math.max(0.35, Math.min(0.85, successChance));

      if (Math.random() < successChance) {
        this.buildupPhase = 1;
        if (isHomeAttacking) {
          this.ballX = Math.round(58 + Math.random() * 12);
          this.momentumHome = Math.round(55 + Math.random() * 20);
        } else {
          this.ballX = Math.round(42 - Math.random() * 12);
          this.momentumHome = Math.round(45 - Math.random() * 20);
        }
        this.crowdVolume = 0.2 + Math.abs(this.ballX - 50) / 100;

        const templates = phaseCommentaries[lang].midfield_pass_success;
        const text = templates[Math.floor(Math.random() * templates.length)].replace("{team}", attackingTeam.name);
        
        event = {
          type: 'pass',
          minute: this.minute,
          commentary: text,
          team: this.possessionSide
        };
      } else {
        this.possessionSide = isHomeAttacking ? 'away' : 'home';
        this.buildupPhase = 0;
        if (isHomeAttacking) {
          this.ballX = Math.round(42 - Math.random() * 8);
          this.momentumHome = Math.round(45 - Math.random() * 10);
        } else {
          this.ballX = Math.round(58 + Math.random() * 8);
          this.momentumHome = Math.round(55 + Math.random() * 10);
        }
        this.crowdVolume = 0.2;

        const templates = phaseCommentaries[lang].midfield_pass_fail;
        const text = templates[Math.floor(Math.random() * templates.length)]
          .replace("{team}", attackingTeam.name)
          .replace("{opp_team}", defendingTeam.name);

        event = {
          type: 'interception',
          minute: this.minute,
          commentary: text,
          team: this.possessionSide
        };
      }
    } else if (this.buildupPhase === 1) {
      // Phase 1: Attacking Third Creation
      const creator = this._pickStarPlayer(attackingTeam, 'dri');
      const defender = this._pickStarPlayer(defendingTeam, 'def');

      let successChance = 0.48 + (creator.stats.dri - defender.stats.def) * 0.004;
      if (isHomeAttacking && this.tacticalMode === 'attacking') successChance += 0.03;
      if (!isHomeAttacking && this.away.tactic === 'attacking') successChance += 0.03;
      successChance = Math.max(0.25, Math.min(0.80, successChance));

      if (Math.random() < successChance) {
        this.buildupPhase = 2;
        if (isHomeAttacking) {
          this.ballX = Math.round(75 + Math.random() * 15);
          this.momentumHome = Math.round(68 + Math.random() * 20);
        } else {
          this.ballX = Math.round(25 - Math.random() * 15);
          this.momentumHome = Math.round(32 - Math.random() * 20);
        }
        this.crowdVolume = 0.4 + Math.abs(this.ballX - 50) / 80;

        const templates = phaseCommentaries[lang].attack_creation_success;
        const text = templates[Math.floor(Math.random() * templates.length)]
          .replace("{team}", attackingTeam.name)
          .replace("{player}", creator.name);

        event = {
          type: 'creation',
          minute: this.minute,
          commentary: text,
          team: this.possessionSide
        };
      } else {
        this.possessionSide = isHomeAttacking ? 'away' : 'home';
        this.buildupPhase = 0;
        this.ballX = 50;
        this.momentumHome = 50;
        this.crowdVolume = 0.2;

        const templates = phaseCommentaries[lang].attack_creation_fail;
        const text = templates[Math.floor(Math.random() * templates.length)]
          .replace("{opp_team}", defendingTeam.name)
          .replace("{player}", creator.name)
          .replace("{team}", attackingTeam.name);

        event = {
          type: 'tackle',
          minute: this.minute,
          commentary: text,
          team: this.possessionSide
        };
      }
    } else {
      // Phase 2: Shot opportunity
      event = this._generateMatchEvent(isHomeAttacking, tacticalMods);
      if (event) {
        if (event.type === 'goal') {
          this.possessionSide = isHomeAttacking ? 'away' : 'home';
          this.buildupPhase = 0;
        } else if (event.type === 'corner') {
          this.buildupPhase = 1; // set-piece corner attack!
        } else {
          this.possessionSide = isHomeAttacking ? 'away' : 'home';
          this.buildupPhase = 0;
        }
      } else {
        this.buildupPhase = 0;
      }
    }

    return {
      minute: this.minute,
      scoreHome: this.home.score,
      scoreAway: this.away.score,
      ballX: this.ballX,
      momentumHome: this.momentumHome,
      crowdVolume: this.crowdVolume,
      isOver: false,
      event: event
    };
  }

  // Build shared commentary context
  _commCtx(extra = {}) {
    return {
      homeScore: this.home.score,
      awayScore: this.away.score,
      minute: this.minute,
      homeTeamName: this.home.name,
      awayTeamName: this.away.name,
      ...extra,
    };
  }

  // Generate match events with stat tracking
  _generateMatchEvent(isHomeAttacking, tacticalMods) {
    const actionRoll = Math.random();

    if (isHomeAttacking) {
      const scorer = this._pickHomeStarPlayer('sho');
      const defender = this._pickAwayStarPlayer('def');
      const cpuGk = this.away.starters[0] || { name: `${this.away.name} Kalecisi`, rating: this.away.rating, stats: { def: this.away.rating }, stamina: 100 };
      const cpuGkEff = this._getEffectiveRating(cpuGk, "GK");

      const shootPower = scorer.stats.sho * (0.5 + 0.5 * (scorer.stamina / 100));
      const defPower = defender.stats.def * (0.5 + 0.5 * (defender.stamina / 100));
      const savePower = ((cpuGk.stats ? cpuGk.stats.def : cpuGkEff) * 0.7 + defPower * 0.3) * (0.5 + 0.5 * (cpuGk.stamina / 100));
      const goalRatio = shootPower / (shootPower + savePower || 1);

      // Dynamically scaled goal/shot thresholds (adjusted for higher event rate)
      const goalThreshold = 0.08 + (goalRatio * 0.18) + tacticalMods.homeGoalChance;
      const saveThreshold = goalThreshold + (0.28 * (savePower / (shootPower || 1)));
      const missThreshold = saveThreshold + 0.24;
      const cornerThreshold = missThreshold + 0.10;
      const offsideThreshold = cornerThreshold + 0.10;

      if (actionRoll < goalThreshold) {
        // GOAL Home!
        this.home.score++;
        this.ballX = 98;
        this.home.goals.push({ minute: this.minute, player: scorer.name });
        this.matchStats.homeShots++;
        this.matchStats.homeShotsOnTarget++;
        scorer.matchRating = Math.min(10.0, scorer.matchRating + 1.5);
        scorer.stamina = Math.max(0, scorer.stamina - 4);

        const rawComm = getCommentary('goal', this._commCtx({
          player: scorer.name,
          playerId: scorer.id,
          team: this.home.name,
        }));

        // Handle chained commentary
        let commentary, chainEvent = null;
        if (isChainedCommentary(rawComm)) {
          commentary = rawComm[0];
          chainEvent = {
            type: 'goal',
            minute: this.minute,
            commentary: rawComm[1],
            team: 'home'
          };
          this.pendingChain = chainEvent;
        } else {
          commentary = rawComm;
        }

        return {
          type: 'goal',
          minute: this.minute,
          commentary,
          team: 'home'
        };

      } else if (actionRoll < saveThreshold) {
        // Shot - Save
        this.ballX = 92;
        this.matchStats.homeShots++;
        this.matchStats.homeShotsOnTarget++;
        scorer.matchRating = Math.min(10.0, scorer.matchRating + 0.1);
        scorer.stamina = Math.max(0, scorer.stamina - 2);
        
        cpuGk.matchRating = Math.min(10.0, cpuGk.matchRating + 0.3);
        cpuGk.stamina = Math.max(0, cpuGk.stamina - 1);

        return {
          type: 'save',
          minute: this.minute,
          commentary: getCommentary('save', this._commCtx({ player: scorer.name, keeper: `${this.away.name} kalecisi ${cpuGk.name}` })),
          team: 'home'
        };

      } else if (actionRoll < missThreshold) {
        // Miss
        this.ballX = 88;
        this.matchStats.homeShots++;
        scorer.matchRating = Math.max(3.0, scorer.matchRating - 0.3);
        scorer.stamina = Math.max(0, scorer.stamina - 2);
        return {
          type: 'miss',
          minute: this.minute,
          commentary: getCommentary('miss', this._commCtx({ player: scorer.name })),
          team: 'home'
        };

      } else if (actionRoll < cornerThreshold) {
        // Corner kick for home
        this.matchStats.homeCorners++;
        this.ballX = 95;
        return {
          type: 'corner',
          minute: this.minute,
          commentary: getCommentary('corner', this._commCtx({ team: this.home.name })),
          team: 'home'
        };

      } else if (actionRoll < offsideThreshold) {
        // Offside
        scorer.matchRating = Math.max(3.0, scorer.matchRating - 0.1);
        return {
          type: 'offside',
          minute: this.minute,
          commentary: getCommentary('offside', this._commCtx({ player: scorer.name })),
          team: 'home'
        };

      } else {
        // Yellow card against away CPU player
        this.matchStats.awayYellows++;
        const badCpu = this._pickAwayStarPlayer('def');
        badCpu.matchRating = Math.max(3.0, badCpu.matchRating - 0.8);
        badCpu.stamina = Math.max(0, badCpu.stamina - 3);

        return {
          type: 'yellow',
          minute: this.minute,
          commentary: getCommentary('yellow', this._commCtx({ player: badCpu.name })),
          team: 'away'
        };
      }

    } else {
      // Away attack (CPU attacks)
      const shooter = this._pickAwayStarPlayer('sho');
      const defender = this._pickHomeStarPlayer('def');
      const userGk = this.home.starters[0] || { name: 'Kaleci', rating: 50, stats: { def: 50 }, stamina: 100 };
      const userGkEff = this._getEffectiveRating(userGk, "GK");

      const shootPower = shooter.stats.sho * (0.5 + 0.5 * (shooter.stamina / 100));
      const defPower = defender.stats.def * (0.5 + 0.5 * (defender.stamina / 100));
      const savePower = (userGkEff * 0.7 + defPower * 0.3) * (0.5 + 0.5 * (userGk.stamina / 100));
      const goalRatio = shootPower / (shootPower + savePower || 1);

      // Dynamically scaled goal thresholds
      const awayGoalThreshold = 0.08 + (goalRatio * 0.16) + tacticalMods.awayGoalChance;
      const saveThreshold = awayGoalThreshold + (0.30 * (savePower / (shootPower || 1)));
      const missThreshold = saveThreshold + 0.20;
      const counterThreshold = missThreshold + 0.07;
      const cornerThreshold = counterThreshold + 0.07;
      const yellowThreshold = cornerThreshold + 0.10;

      if (actionRoll < awayGoalThreshold) {
        // GOAL Away!
        this.away.score++;
        this.ballX = 2;
        this.away.goals.push({ minute: this.minute, player: shooter.name });
        this.matchStats.awayShots++;
        this.matchStats.awayShotsOnTarget++;
        
        userGk.matchRating = Math.max(3.0, userGk.matchRating - 0.6);
        userGk.stamina = Math.max(0, userGk.stamina - 3);

        const defender = this._pickHomeStarPlayer('def');
        if (defender) {
          defender.matchRating = Math.max(3.0, defender.matchRating - 0.4);
          defender.stamina = Math.max(0, defender.stamina - 2);
        }

        shooter.matchRating = Math.min(10.0, shooter.matchRating + 1.5);
        shooter.stamina = Math.max(0, shooter.stamina - 4);

        return {
          type: 'goal',
          minute: this.minute,
          commentary: getCommentary('goal', this._commCtx({
            player: shooter.name,
            playerId: shooter.id,
            team: this.away.name,
          })),
          team: 'away'
        };

      } else if (actionRoll < saveThreshold) {
        // Save by our keeper
        this.ballX = 8;
        this.matchStats.awayShots++;
        this.matchStats.awayShotsOnTarget++;
        
        userGk.matchRating = Math.min(10.0, userGk.matchRating + 0.8);
        userGk.stamina = Math.max(0, userGk.stamina - 2);
        
        shooter.matchRating = Math.max(3.0, shooter.matchRating - 0.2);
        shooter.stamina = Math.max(0, shooter.stamina - 2);

        const defender = this._pickHomeStarPlayer('def');
        if (defender) {
          defender.matchRating = Math.min(10.0, defender.matchRating + 0.2);
          defender.stamina = Math.max(0, defender.stamina - 1);
        }

        return {
          type: 'save',
          minute: this.minute,
          commentary: getCommentary('save', this._commCtx({
            player: shooter.name,
            keeper: userGk.name,
          })),
          team: 'away'
        };

      } else if (actionRoll < missThreshold) {
        // Away miss
        this.ballX = 12;
        this.matchStats.awayShots++;
        
        shooter.matchRating = Math.max(3.0, shooter.matchRating - 0.3);
        shooter.stamina = Math.max(0, shooter.stamina - 2);

        const defender = this._pickHomeStarPlayer('def');
        if (defender) defender.matchRating = Math.min(10.0, defender.matchRating + 0.1);
        return {
          type: 'miss',
          minute: this.minute,
          commentary: getCommentary('miss', this._commCtx({ player: shooter.name })),
          team: 'away'
        };

      } else if (actionRoll < counterThreshold) {
        // Counter attack by away
        return {
          type: 'counter',
          minute: this.minute,
          commentary: getCommentary('counter', this._commCtx({ team: this.away.name })),
          team: 'away'
        };

      } else if (actionRoll < cornerThreshold) {
        // Away corner
        this.matchStats.awayCorners++;
        return {
          type: 'corner',
          minute: this.minute,
          commentary: getCommentary('corner', this._commCtx({ team: this.away.name })),
          team: 'away'
        };

      } else if (actionRoll < yellowThreshold) {
        // Yellow card on our player
        const badPlayer = this._pickHomeStarPlayer('def');
        this.matchStats.homeYellows++;
        badPlayer.matchRating = Math.max(3.0, badPlayer.matchRating - 0.8);
        badPlayer.stamina = Math.max(0, badPlayer.stamina - 3);
        return {
          type: 'yellow',
          minute: this.minute,
          commentary: getCommentary('yellow', this._commCtx({ player: badPlayer.name })),
          team: 'home'
        };

      } else {
        // Injury to our player
        const injuredPlayer = this._pickHomeStarPlayer('phy');
        const injurySeverity = this.home.perk === 'tactician' ? 8 : 15;
        injuredPlayer.injuryPenalty = (injuredPlayer.injuryPenalty || 0) + injurySeverity;
        injuredPlayer.stamina = Math.max(0, injuredPlayer.stamina - 40);
        injuredPlayer.matchRating = Math.max(3.0, injuredPlayer.matchRating - 1.2);
        this._recalculateHomeWeight();

        return {
          type: 'injury',
          minute: this.minute,
          commentary: getCommentary('injury', this._commCtx({ player: injuredPlayer.name })),
          team: 'home'
        };
      }
    }
  }

  // Picks a star home player focusing on a stat
  _pickHomeStarPlayer(statType) {
    const list = this.home.starters.filter(p => p !== null);
    if (!list.length) return { name: 'Menajer', id: null, rating: 50, stats: { pac: 50, sho: 50, pas: 50, dri: 50, def: 50, phy: 50 } };

    const sorted = [...list].sort((a, b) => (b.stats[statType] || 0) - (a.stats[statType] || 0));
    const idx = Math.min(Math.floor(Math.random() * 3), sorted.length - 1);
    return sorted[idx];
  }

  // Picks a star CPU player focusing on a stat
  _pickAwayStarPlayer(statType) {
    const list = this.away.starters.filter(p => p !== null);
    if (!list.length) return { name: 'Rakip Oyuncu', id: null, rating: 50, stats: { pac: 50, sho: 50, pas: 50, dri: 50, def: 50, phy: 50 } };

    const sorted = [...list].sort((a, b) => (b.stats[statType] || 0) - (a.stats[statType] || 0));
    const idx = Math.min(Math.floor(Math.random() * 3), sorted.length - 1);
    return sorted[idx];
  }

  _pickStarPlayer(team, statType) {
    const list = team.starters.filter(p => p !== null);
    if (!list.length) return { name: 'Oyuncu', id: null, rating: 50, stats: { pac: 50, sho: 50, pas: 50, dri: 50, def: 50, phy: 50 }, stamina: 100 };
    const sorted = [...list].sort((a, b) => (b.stats[statType] || 0) - (a.stats[statType] || 0));
    const idx = Math.min(Math.floor(Math.random() * 3), sorted.length - 1);
    return sorted[idx];
  }

  // Get top performing player in the match
  _getTopPerformingPlayer() {
    const list = this.home.starters.filter(p => p !== null);
    if (!list.length) return null;
    return list.reduce((best, p) => (!best || p.matchRating > best.matchRating) ? p : best, null);
  }

  // Get computed match statistics
  getMatchStats() {
    const totalTicks = this.matchStats.homePossessionTicks + this.matchStats.awayPossessionTicks;
    const possession = totalTicks > 0
      ? Math.round((this.matchStats.homePossessionTicks / totalTicks) * 100)
      : 50;

    return {
      possession: possession,
      homeShots: this.matchStats.homeShots,
      awayShots: this.matchStats.awayShots,
      homeShotsOnTarget: this.matchStats.homeShotsOnTarget,
      awayShotsOnTarget: this.matchStats.awayShotsOnTarget,
      homeYellows: this.matchStats.homeYellows,
      awayYellows: this.matchStats.awayYellows,
      homeCorners: this.matchStats.homeCorners,
      awayCorners: this.matchStats.awayCorners,
      homeGoals: this.home.goals,
      awayGoals: this.away.goals
    };
  }
}

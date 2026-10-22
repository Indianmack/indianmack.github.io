/* tt-dayboard-final — FINAL CANDIDATE (mobile polish, queue task_50de17a2). NOT LIVE.
 * Polish v2: 'Final' centered under the score, records smaller/dimmer, loser names
 * dimmer, more air around logos/names/scores, team names 16px, tighter rows.
 * Today now renders from ESPN like Yesterday/Tomorrow so all three tabs share one
 * row style (config today_card is ignored); ESPN panels refresh every minute so
 * live games stay current. Tabs, swipe, popup contract: unchanged.
 *
 * All three days are rendered from ESPN's free date-based scoreboard API
 * (the per-team sensors each hold only one event, so they cannot build complete
 * day slates). ESPN rows reuse the exact .game-row markup and the
 * data-ev / data-sp / data-lp / data-title contract, so the existing
 * tt-game-card popup (gamecard-append.js, browser_mod) opens them unchanged.
 *
 * Config:
 *   type: custom:tt-dayboard-card
 *   league: NBA                      (display only)
 *   sport_path: basketball           (ESPN path segment)
 *   league_path: nba                 (ESPN path segment)
 *   colors: { ... }                  (same color object as the scoreboard card)
 *   special_teams: [lal]             (lowercase ESPN abbreviations)
 *   today_card: (ignored in this design; kept in configs for rollback)
 */
(() => {
  'use strict';

  const TZ = 'America/Los_Angeles';

  function ptDate(offsetDays) {
    const t = new Date(Date.now() + offsetDays * 864e5);
    const parts = new Intl.DateTimeFormat('en-CA', {
      timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit'
    }).formatToParts(t);
    const p = {};
    for (const part of parts) p[part.type] = part.value;
    return p.year + p.month + p.day;
  }

  function fmtTime(iso) {
    try {
      return new Date(iso).toLocaleTimeString('en-US', {
        timeZone: TZ, hour: 'numeric', minute: '2-digit'
      });
    } catch (e) { return ''; }
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  const CSS = `
    :host { display: block; }
    ha-card {
      display: block;
      background: #0d1523;
      border: 1px solid rgba(45, 212, 191, 0.28);
      border-radius: 22px;
      box-shadow: 0 0 22px rgba(45, 212, 191, 0.07);
      padding: 10px;
      color: #eef4fb;
      overflow: hidden;
      font-family: var(--paper-font-body1_-_font-family, sans-serif);
    }
    .tabs {
      display: flex;
      background: #0a1220;
      border: 1px solid rgba(45, 212, 191, 0.25);
      border-radius: 999px;
      padding: 3px;
      margin-bottom: 4px;
    }
    .tab {
      flex: 1;
      appearance: none;
      border: none;
      background: transparent;
      text-align: center;
      font: inherit;
      font-size: 13px;
      font-weight: 600;
      color: #8fb0d8;
      padding: 7px 0;
      border-radius: 999px;
      cursor: pointer;
    }
    .tab.active { background: #2dd4bf; color: #06251f; }
    .panel { display: none; }
    .panel.active { display: block; }

    /* Row styles replicate the patched scoreboard bundle's final rendered look
       (its own CSS plus the card_mod overrides Kumar Home applies). */
    .game-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      height: auto;
      padding: 6px 3px;
      column-gap: 2px;
      border-bottom: 1px solid var(--divider-color, rgba(255, 255, 255, 0.05));
      position: relative;
      cursor: pointer;
    }
    .game-row:last-child { border-bottom: none; }
    .team-col {
      flex: 1 1 0;
      width: auto;
      min-width: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0;
    }
    .team-col-a { text-align: right; padding-right: 3px; }
    .team-col-b { text-align: left; padding-left: 3px; }
    .team-name {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: -0.4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
    }
    .team-name.fit { font-size: 14.5px; }
    .team-rank { font-size: 10px; line-height: 1.2; white-space: nowrap; overflow: hidden; }
    .logo { flex: none; width: 20px; min-width: 20px; margin: 0 3px; display: flex; align-items: center; justify-content: center; }
    .logo img { width: 20px; height: 20px; object-fit: contain; display: block; }
    .score {
      flex: none;
      width: 34px;
      min-width: 34px;
      font-size: 20px;
      font-weight: bold;
      display: flex;
      flex-direction: row;
      align-items: center;
      align-self: center;
    }
    .score-a { justify-content: flex-end; }
    .score-b { justify-content: flex-start; }
    .colon {
      flex: none;
      width: 9px;
      min-width: 9px;
      font-size: 15px;
      font-weight: bold;
      text-align: center;
      color: #2dd4bf;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .live-bg { background: rgba(45, 212, 191, 0.16); }
    .message {
      flex: 1 1 100%;
      order: 9;
      display: flex;
      flex-direction: row;
      align-items: baseline;
      column-gap: 8px;
      margin-top: 4px;
      font-size: 13px;
      font-weight: bold;
      line-height: 1.1;
      min-width: 0;
    }
    .message > span:first-child { flex: none; }
    .msg-sub { font-size: 11px; font-weight: normal; color: #7d94b5; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .message .tv-badge { margin-left: auto; flex: none; }
    .tv-badge {
      font-size: 8px;
      font-weight: bold;
      color: white;
      border-radius: 3px;
      padding: 1px 2px;
      white-space: nowrap;
      background: rgba(102, 102, 102, 0.75);
    }
    .tv-badge.live { background: rgba(255, 93, 93, 0.75); }
    .final-line {
      flex: 1 1 100%;
      order: 9;
      text-align: center;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.4px;
      color: #647d9e;
      margin-top: 2px;
      line-height: 1.1;
    }
    .empty { padding: 10px 4px; font-size: 13px; font-style: italic; color: #8fb0d8; }
  `;
  class TtDayboardCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._day = 0;               // -1 Yesterday, 0 Today, +1 Tomorrow
      this._events = {};           // offset -> [espn events]
      this._failed = {};           // offset -> bool
      this._fetchDate = null;      // PT yyyymmdd the data belongs to
      this._timer = null;
      this._board = null;          // nested Today scoreboard element
    }

    setConfig(cfg) {
      if (!cfg || !cfg.sport_path || !cfg.league_path) {
        throw new Error('tt-dayboard-card: sport_path and league_path are required');
      }
      const key = JSON.stringify(cfg);
      if (this._cfgKey === key) return;
      this._cfgKey = key;
      this._config = cfg;
      this._colors = Object.assign({
        name_default: '#a9bcd6', name_leading: '#eef4fb', name_winner: '#eef4fb',
        name_special: '#60a5fa', score_leading: '#2dd4bf', score_winner: '#eef4fb',
        score_loser: '#647d9e', live: '#ff5d5d', name_loser: '#7d94b5'
      }, cfg.colors || {});
      this._special = (cfg.special_teams || []).map(s => String(s).toLowerCase());
      this._build();
      this._fetchAll();
    }

    set hass(h) {
      this._hass = h;
      if (this._board) this._board.hass = h;
    }
    get hass() { return this._hass; }

    connectedCallback() {
      if (this._timer) return;
      this._timer = setInterval(() => this._tick(), 60000);
    }
    disconnectedCallback() {
      if (this._timer) { clearInterval(this._timer); this._timer = null; }
    }

    _tick() {
      // Runs every 60s: refetch so live games stay current (this also rolls
      // the panels over automatically at Pacific midnight).
      this._fetchAll();
    }

    _build() {
      const root = this.shadowRoot;
      root.innerHTML = `
        <style>${CSS}</style>
        <ha-card>
          <div class="tabs">
            <button class="tab" data-day="-1">Yesterday</button>
            <button class="tab active" data-day="0">Today</button>
            <button class="tab" data-day="1">Tomorrow</button>
          </div>
          <div class="panels">
            <div class="panel" data-panel="-1"><div class="empty">Loading…</div></div>
            <div class="panel active" data-panel="0"></div>
            <div class="panel" data-panel="1"><div class="empty">Loading…</div></div>
          </div>
        </ha-card>`;

      root.querySelectorAll('.tab').forEach(btn => {
        btn.addEventListener('click', () => this._setDay(parseInt(btn.dataset.day, 10)));
      });

      const panels = root.querySelector('.panels');
      let sx = 0, sy = 0;
      panels.addEventListener('touchstart', (e) => {
        const t = e.changedTouches[0];
        sx = t.clientX; sy = t.clientY;
      }, { passive: true });
      panels.addEventListener('touchend', (e) => {
        const t = e.changedTouches[0];
        const dx = t.clientX - sx, dy = t.clientY - sy;
        if (Math.abs(dx) >= 48 && Math.abs(dx) > 1.4 * Math.abs(dy)) {
          this._setDay(this._day + (dx < 0 ? 1 : -1));
        }
      }, { passive: true });

      // Today panel: rendered from ESPN by _renderPanel, exactly like
      // Yesterday/Tomorrow, so all three tabs share one row style. (In this
      // final design the config's today_card is intentionally not nested.)
      const todayPanel = root.querySelector('[data-panel="0"]');
      this._board = null;
      todayPanel.innerHTML = '<div class="empty">Loading…</div>';
    }
    _setDay(d) {
      d = Math.max(-1, Math.min(1, d));
      this._day = d;
      this.shadowRoot.querySelectorAll('.tab').forEach(b => {
        b.classList.toggle('active', parseInt(b.dataset.day, 10) === d);
      });
      this.shadowRoot.querySelectorAll('.panel').forEach(p => {
        p.classList.toggle('active', parseInt(p.dataset.panel, 10) === d);
      });
    }

    async _fetchAll() {
      this._fetchDate = ptDate(0);
      const offsets = [-1, 0, 1];
      await Promise.all(offsets.map(o => this._fetchDay(o)));
    }

    async _fetchDay(offset) {
      const url = 'https://site.api.espn.com/apis/site/v2/sports/'
        + this._config.sport_path + '/' + this._config.league_path
        + '/scoreboard?dates=' + ptDate(offset);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        this._events[offset] = data.events || [];
        this._failed[offset] = false;
      } catch (e) {
        this._failed[offset] = true;
      }
      this._renderPanel(offset);
    }

    _renderPanel(offset) {
      const panel = this.shadowRoot.querySelector('[data-panel="' + offset + '"]');
      if (!panel) return;
      const events = this._events[offset];
      if (events === undefined) {
        panel.innerHTML = this._failed[offset]
          ? '<div class="empty">Scores unavailable right now</div>'
          : '<div class="empty">Loading…</div>';
        return;
      }
      if (!events.length) {
        panel.innerHTML = '<div class="empty">No games scheduled</div>';
        return;
      }
      let list = events.slice();
      if (offset === 0) {
        const order = { in: 0, pre: 1, post: 2 };
        list.sort((a, b) => {
          const sa = order[(a.status && a.status.type && a.status.type.state) || 'pre'] ?? 1;
          const sb = order[(b.status && b.status.type && b.status.type.state) || 'pre'] ?? 1;
          if (sa !== sb) return sa - sb;
          const da = Date.parse(a.date), db = Date.parse(b.date);
          return sa === 2 ? db - da : da - db;
        });
      } else {
        list.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
      }
      const dayLabel = { '-1': 'Yesterday', '0': 'Today', '1': 'Tomorrow' }[offset] || '';
      panel.innerHTML = list.map(ev => this._row(ev, dayLabel)).join('');
    }

    _record(team) {
      const recs = team.records || [];
      const total = recs.find(r => r.type === 'total') || recs[0];
      return total ? total.summary : '';
    }

    _isSpecial(team) {
      return this._special.includes(String(team.abbreviation || '').toLowerCase());
    }

    _broadcasts(comp) {
      const all = [];
      const lists = comp.broadcasts || [];
      const national = lists.filter(b => b.market === 'national');
      const src = national.length ? national : lists;
      for (const b of src) for (const n of (b.names || [])) {
        if (!all.includes(n)) all.push(n);
      }
      return all;
    }

    _row(ev, dayLabel) {
      const C = this._colors;
      const comp = (ev.competitions || [])[0] || {};
      const competitors = comp.competitors || [];
      const home = competitors.find(c => c.homeAway === 'home') || competitors[0] || {};
      const away = competitors.find(c => c.homeAway === 'away') || competitors[1] || {};
      const st = (ev.status && ev.status.type) || {};
      const state = st.state || 'pre';

      const side = (c, opp) => {
        const team = c.team || {};
        const isSpecial = this._isSpecial(team);
        let nameColor = C.name_default;
        let scoreColor = '#000';
        if (state === 'post') {
          if (c.winner) { nameColor = C.name_winner; scoreColor = C.score_winner; }
          else { nameColor = C.name_loser; scoreColor = C.score_loser; }
        } else if (state === 'in') {
          const lead = parseFloat(c.score || 0) > parseFloat(opp.score || 0);
          if (lead) { nameColor = C.name_leading; scoreColor = C.score_leading; }
          else { scoreColor = '#eef4fb'; }
        }
        if (isSpecial) nameColor = C.name_special;
        const nm = team.shortDisplayName || team.name || team.displayName || '';
        return {
          name: nm,
          nameCls: nm.length >= 12 ? 'team-name fit' : 'team-name',
          rank: this._record(c),
          logo: team.logo || '',
          score: state === 'pre' ? '' : (c.score != null ? String(c.score) : ''),
          nameColor, scoreColor
        };
      };
      const H = side(home, away);   // home renders on the left, like the bundle
      const A = side(away, home);
      const liveBg = state === 'in' ? ' live-bg' : '';

      // Network badge rides at the right end of the message line (not the row
      // corner), so it never eats into the away team's name column.
      let badgeHtml = '';
      if (state === 'pre' || state === 'in') {
        const nets = this._broadcasts(comp);
        if (nets.length) {
          // Badge text is the first network cut to 4 chars, with a '>' marker
          // when truncated or multi-network (full list in title).
          const badge = nets[0].substring(0, 4) + ((nets[0].length > 4 || nets.length > 1) ? '>' : '');
          badgeHtml = '<span class="tv-badge' + (state === 'in' ? ' live' : '')
            + '" title="' + esc(nets.join(' · ')) + '">' + esc(badge) + '</span>';
        }
      }

      let msgHtml = '';
      if (state === 'pre') {
        const bits = [];
        const city = comp.venue && comp.venue.address ? comp.venue.address.city : '';
        if (city) bits.push(city);
        const odds = comp.odds && comp.odds[0] ? comp.odds[0].summary : '';
        if (odds) bits.push(odds);
        msgHtml = '<div class="message"><span style="color:#8fb0d8">' + esc((dayLabel ? dayLabel + ' · ' : '') + fmtTime(ev.date)) + '</span>'
          + (bits.length ? '<span class="msg-sub">' + esc(bits.join(', ')) + '</span>' : '') + badgeHtml + '</div>';
      } else if (state === 'in') {
        msgHtml = '<div class="message"><span style="color:' + C.live + '">' + esc(st.shortDetail || st.detail || 'Live') + '</span>' + badgeHtml + '</div>';
      } else {
        const note = (comp.notes || []).find(n => n.headline);
        msgHtml = '<div class="final-line">' + esc(st.shortDetail || st.detail || 'Final')
          + (note ? ' · ' + esc(note.headline) : '') + '</div>';
      }

      const title = String(ev.name || 'Game Details').replace(/"/g, '');
      return '<div class="game-row" data-ev="' + esc(ev.id) + '" data-sp="' + esc(this._config.sport_path)
        + '" data-lp="' + esc(this._config.league_path) + '" data-title="' + esc(title) + '">'
        + '<div class="team-col team-col-a"><div class="' + H.nameCls + '" style="color:' + H.nameColor + '">' + esc(H.name) + '</div>'
        + '<div class="team-rank" style="color:#647d9e">' + esc(H.rank) + '</div></div>'
        + '<div class="logo logo-a">' + (H.logo ? '<img src="' + esc(H.logo) + '" alt="">' : '') + '</div>'
        + '<div class="score score-a' + liveBg + '" style="color:' + H.scoreColor + '"><span class="score-value">' + esc(H.score) + '</span></div>'
        + '<div class="colon' + liveBg + '">–</div>'
        + '<div class="score score-b' + liveBg + '" style="color:' + A.scoreColor + '"><span class="score-value">' + esc(A.score) + '</span></div>'
        + '<div class="logo logo-b">' + (A.logo ? '<img src="' + esc(A.logo) + '" alt="">' : '') + '</div>'
        + '<div class="team-col team-col-b"><div class="' + A.nameCls + '" style="color:' + A.nameColor + '">' + esc(A.name) + '</div>'
        + '<div class="team-rank" style="color:#647d9e">' + esc(A.rank) + '</div></div>'
        + msgHtml
        + '</div>';
    }

    getCardSize() { return 6; }
    getGridOptions() { return { columns: 'full' }; }
  }

  if (!customElements.get('tt-dayboard-card')) {
    customElements.define('tt-dayboard-card', TtDayboardCard);
  }
  window.customCards = window.customCards || [];
  if (!window.customCards.some(c => c.type === 'tt-dayboard-card')) {
    window.customCards.push({
      type: 'tt-dayboard-card',
      name: 'TT Dayboard (Yesterday/Today/Tomorrow)',
      description: 'Swipeable per-league day scoreboard for Kumar Home Sports'
    });
  }
})();



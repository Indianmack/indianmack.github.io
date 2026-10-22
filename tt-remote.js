/* tt-remote-card — Kumar Home unified entertainment remote (preview).
 * One bespoke card for the Family Room: Samsung Frame TV + Apple TV 4K
 * + Sonos Arc. Navy/teal Kumar styling. All service calls mirror the
 * v1 preview's bindings exactly (same entities, same scripts, same
 * remote commands); only the presentation is new.
 *   power      -> script.turn_on script.family_room_power_toggle
 *   dpad       -> remote.send_command on the native ATV remote
 *                 (up/down/left/right/select, menu=Back, home, top_menu)
 *   transport  -> remote.send_command skip_backward/skip_forward
 *                 (±15s) + media_player.media_play_pause. Previous/
 *                 next were dropped: in Infuse/tvOS they map to
 *                 chapter/track skips most apps ignore.
 *   sonos      -> input_number.sonos_arc_volume (guard automations
 *                 sync the Arc both ways) + volume_mute toggle
 *   modes      -> script.family_room_apple_tv_home, toggle
 *                 switch.family_room_tv_art_mode, script
 *                 family_room_tv_off (two-tap confirm, like v1's
 *                 confirmation dialog)
 *   apps       -> media_player.select_source Infuse / YouTube TV
 */
(() => {
  const TV = 'media_player.family_room_tv';
  const ART = 'switch.family_room_tv_art_mode';
  const ATV = 'media_player.family_room_appletv_family_room_appletv';
  const ATV_R = 'remote.family_room_appletv_family_room_appletv';
  const ARC = 'media_player.family_room_sonos_family_room_sonos';
  const FMT = 'sensor.family_room_sonos_family_room_sonos_audio_input_format';
  const VOL = 'input_number.sonos_arc_volume';
  const PWR = 'script.family_room_power_toggle';
  const HOME_SCRIPT = 'script.family_room_apple_tv_home';
  const OFF_SCRIPT = 'script.family_room_tv_off';
  const ICON_INFUSE = 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/93/ed/86/93ed8676-929d-3c28-8429-be6cffbf422f/AppIcon-0-0-1x_U007epad-0-11-0-0-0-0-85-220.png/100x100bb.jpg';
  const ICON_YTTV = 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/45/ed/6c/45ed6c2f-6060-caf6-ec21-b2808eb12ebd/logo_youtube_television_2024_q4_color-0-0-1x_U007emarketing-0-0-0-7-0-0-0-85-220.png/100x100bb.jpg';

  const CSS = `
    :host { display: block; container-type: inline-size; }
    ha-card {
      background: linear-gradient(165deg, #141e30, #0b1220);
      border: 1px solid rgba(94,234,212,0.16); border-radius: 26px;
      box-shadow: none; color: #e8eef7; overflow: hidden;
      font-family: -apple-system, system-ui, sans-serif;
      padding: 14px 16px 16px;
    }
    * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
    button { font-family: inherit; cursor: pointer; }
    button:active { transform: scale(0.96); }

    .layout { display: grid; gap: 12px; grid-template-areas: "head" "np" "pad" "vol" "modes"; }
    .head { grid-area: head; } .np { grid-area: np; } .padcol { grid-area: pad; }
    .vol { grid-area: vol; } .modes { grid-area: modes; }
    @container (min-width: 700px) {
      .layout { grid-template-columns: 1.15fr 0.85fr; grid-template-areas: "head head" "np pad" "vol pad" "modes pad"; gap: 14px 22px; }
      .padcol { align-self: center; }
    }

    /* ---- header ---- */
    .head { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .room { font-size: 16.5px; font-weight: 700; letter-spacing: 0.02em; }
    .stateline { display: flex; align-items: center; gap: 6px; margin-top: 2px;
      font-size: 12.5px; color: #8fa3bf; }
    .dot { width: 8px; height: 8px; border-radius: 50%; background: #64748b; flex: none; }
    .dot.watch { background: #2dd4bf; box-shadow: 0 0 8px rgba(45,212,191,0.8); }
    .dot.art { background: #f5c15c; box-shadow: 0 0 8px rgba(245,193,92,0.7); }
    .power { width: 46px; height: 46px; border-radius: 50%; flex: none;
      background: linear-gradient(160deg, #1a2740, #101a2c);
      border: 1px solid rgba(45,212,191,0.4); color: #2dd4bf;
      display: flex; align-items: center; justify-content: center; }
    .power ha-icon { --mdc-icon-size: 24px; }
    .power.off { color: #8fa3bf; border-color: rgba(143,163,191,0.3); }

    /* ---- now playing ---- */
    .np { background: rgba(255,255,255,0.03); border: 1px solid rgba(143,163,191,0.14);
      border-radius: 20px; padding: 12px 14px; }
    .np-top { display: flex; gap: 12px; }
    .art { width: 76px; height: 76px; border-radius: 14px; flex: none; object-fit: cover;
      background: linear-gradient(150deg, #1d2c47, #0e1626); }
    .art-fallback { width: 76px; height: 76px; border-radius: 14px; flex: none;
      background: linear-gradient(150deg, #1d2c47, #0e1626); color: #5eead4;
      display: flex; align-items: center; justify-content: center; }
    .art-fallback ha-icon { --mdc-icon-size: 34px; }
    .np-text { min-width: 0; flex: 1; }
    .np-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.12em; color: #5eead4; }
    .np-title { font-size: 15.5px; font-weight: 600; line-height: 1.3; margin-top: 3px;
      display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
    .np-meta { font-size: 12px; color: #8fa3bf; margin-top: 3px; }
    .prog { margin-top: 10px; }
    .bar { height: 4px; border-radius: 2px; background: rgba(143,163,191,0.25); overflow: hidden; }
    .fill { height: 100%; background: #2dd4bf; border-radius: 2px; width: 0%; }
    .times { display: flex; justify-content: space-between; font-size: 11px; color: #8fa3bf; margin-top: 4px; }
    .transport { display: flex; align-items: center; justify-content: center; gap: 34px; margin-top: 8px; }
    .tbtn { width: 44px; height: 40px; border-radius: 12px; border: none; background: transparent;
      color: #dbe6f5; display: flex; align-items: center; justify-content: center; }
    .tbtn ha-icon { --mdc-icon-size: 25px; }
    .tbtn.main { width: 56px; height: 44px; background: rgba(45,212,191,0.14); color: #5eead4; border-radius: 14px; }
    .tbtn.main ha-icon { --mdc-icon-size: 30px; }

    /* ---- d-pad ---- */
    .padcol { display: flex; flex-direction: column; align-items: center; gap: 10px; }
    .disc { position: relative; width: 228px; height: 228px; border-radius: 50%;
      background: radial-gradient(circle at 50% 38%, #1b2a45, #0d1523 78%);
      border: 1px solid rgba(143,163,191,0.28);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.05), 0 10px 24px rgba(0,0,0,0.35); }
    .disc::after { content: ''; position: absolute; inset: 55px; border-radius: 50%;
      border: 1px solid rgba(143,163,191,0.14); pointer-events: none; }
    .arrow { position: absolute; width: 58px; height: 58px; border-radius: 50%;
      background: transparent; border: none; color: #dbe6f5;
      display: flex; align-items: center; justify-content: center; }
    .arrow ha-icon { --mdc-icon-size: 36px; }
    .arrow:active { background: rgba(45,212,191,0.12); }
    .a-up { top: 4px; left: 50%; transform: translateX(-50%); }
    .a-down { bottom: 4px; left: 50%; transform: translateX(-50%); }
    .a-left { left: 4px; top: 50%; transform: translateY(-50%); }
    .a-right { right: 4px; top: 50%; transform: translateY(-50%); }
    .arrow:active { transform: scale(0.94); }
    .a-up:active, .a-down:active { transform: translateX(-50%) scale(0.94); }
    .a-left:active, .a-right:active { transform: translateY(-50%) scale(0.94); }
    .ok { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
      width: 82px; height: 82px; border-radius: 50%;
      background: radial-gradient(circle at 38% 30%, #16403a, #0d1f22 78%);
      border: 2px solid rgba(45,212,191,0.55); color: #5eead4;
      font-size: 15px; font-weight: 700; letter-spacing: 0.04em;
      box-shadow: 0 0 16px rgba(45,212,191,0.18); }
    .ok:active { transform: translate(-50%, -50%) scale(0.95); }
    .secondary { display: flex; gap: 8px; width: 100%; max-width: 300px; }
    .pill { flex: 1; height: 42px; border-radius: 21px;
      background: linear-gradient(160deg, #162136, #101a2c);
      border: 1px solid rgba(143,163,191,0.22); color: #dbe6f5;
      display: flex; align-items: center; justify-content: center; gap: 6px;
      font-size: 12.5px; font-weight: 600; }
    .pill ha-icon { --mdc-icon-size: 19px; color: #5eead4; }

    /* ---- sonos ---- */
    .vol { background: rgba(255,255,255,0.03); border: 1px solid rgba(143,163,191,0.14);
      border-radius: 20px; padding: 10px 14px 9px; }
    .vol-row { display: flex; align-items: center; gap: 10px; }
    .vol-row > ha-icon { color: #5eead4; --mdc-icon-size: 22px; flex: none; }
    input[type=range] { flex: 1; -webkit-appearance: none; appearance: none; height: 6px;
      border-radius: 3px; outline: none; min-width: 0;
      background: linear-gradient(to right, #2dd4bf var(--val, 0%), rgba(143,163,191,0.3) var(--val, 0%)); }
    input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px;
      border-radius: 50%; background: #e8eef7; border: none; box-shadow: 0 1px 5px rgba(0,0,0,0.5); }
    input[type=range]::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%;
      background: #e8eef7; border: none; box-shadow: 0 1px 5px rgba(0,0,0,0.5); }
    .pct { font-size: 13.5px; font-weight: 600; width: 40px; text-align: right; flex: none; }
    .mute { width: 38px; height: 38px; border-radius: 50%; flex: none;
      background: linear-gradient(160deg, #162136, #101a2c);
      border: 1px solid rgba(143,163,191,0.22); color: #dbe6f5;
      display: flex; align-items: center; justify-content: center; }
    .mute ha-icon { --mdc-icon-size: 20px; }
    .mute.on { color: #f5c15c; border-color: rgba(245,193,92,0.5); }
    .vol-cap { font-size: 11px; color: #8fa3bf; margin-top: 6px; }

    /* ---- modes & apps ---- */
    .modes { display: flex; flex-direction: column; gap: 8px; }
    .chiprow { display: flex; gap: 8px; }
    .chip { flex: 1; height: 56px; border-radius: 16px;
      background: linear-gradient(160deg, #162136, #101a2c);
      border: 1px solid rgba(143,163,191,0.22); color: #dbe6f5;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px;
      font-size: 11.5px; font-weight: 600; min-width: 0; }
    .chip ha-icon { --mdc-icon-size: 22px; color: #5eead4; }
    .chip.active { border-color: rgba(45,212,191,0.6); background: linear-gradient(160deg, #143330, #0e1c24); }
    .chip.danger { border-color: rgba(248,113,113,0.7) !important; color: #fca5a5 !important; }
    .chip.danger ha-icon { color: #f87171 !important; }
    .chip img { width: 26px; height: 26px; border-radius: 7px; }
    .chip.app { flex-direction: row; gap: 8px; font-size: 12.5px; height: 50px; }
  `;

  class TtRemoteCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this._dragging = false;
      this._confirmOff = false;
      this._confirmTimer = null;
      this._timer = null;
      this._lastSig = '';
    }
    setConfig(config) { this._config = config || {}; }
    getCardSize() { return 12; }
    set hass(hass) {
      this._hass = hass;
      const sig = this._sig();
      if (sig !== this._lastSig) { this._lastSig = sig; this._render(); }
      this._manageTimer();
    }
    _st(id) { return this._hass && this._hass.states ? this._hass.states[id] : undefined; }
    _fmt(sec) {
      if (sec === null || sec === undefined || isNaN(sec)) return '0:00';
      sec = Math.max(0, Math.floor(sec));
      const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
      return (h > 0 ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(s).padStart(2, '0');
    }
    _pos(atv) {
      const a = atv.attributes || {};
      let pos = typeof a.media_position === 'number' ? a.media_position : null;
      if (pos === null) return { pos: null, dur: null, pct: 0 };
      const dur = typeof a.media_duration === 'number' ? a.media_duration : null;
      if (atv.state === 'playing' && a.media_position_updated_at) {
        const upd = Date.parse(a.media_position_updated_at);
        if (!isNaN(upd)) pos += Math.max(0, (Date.now() - upd) / 1000);
      }
      if (dur) pos = Math.min(pos, dur);
      return { pos, dur, pct: dur ? Math.min(100, (pos / dur) * 100) : 0 };
    }
    _sig() {
      if (!this._hass) return '';
      const g = (id) => { const s = this._st(id); return s ? s.state : '?'; };
      const atv = this._st(ATV), arc = this._st(ARC);
      const aa = atv ? atv.attributes : {}, ra = arc ? arc.attributes : {};
      return [g(TV), g(ART), g(ATV), aa.app_name || '', aa.media_title || '',
        aa.media_duration || '', aa.entity_picture || '',
        g(ARC), ra.is_volume_muted ? 'm' : '', g(VOL), g(FMT),
        this._confirmOff ? 'cf' : ''].join('|');
    }
    _manageTimer() {
      const atv = this._st(ATV);
      const need = !!(atv && atv.state === 'playing' && atv.attributes.media_duration);
      if (need && !this._timer) {
        this._timer = setInterval(() => this._updateProgress(), 1000);
      } else if (!need && this._timer) {
        clearInterval(this._timer); this._timer = null;
      }
    }
    _updateProgress() {
      const atv = this._st(ATV);
      if (!atv) return;
      const { pos, dur } = this._pos(atv);
      const root = this.shadowRoot;
      const fill = root.querySelector('.fill');
      const el = root.querySelector('.t-elapsed');
      const rem = root.querySelector('.t-remain');
      if (fill && dur) fill.style.width = (Math.min(100, (pos / dur) * 100)) + '%';
      if (el && pos !== null) el.textContent = this._fmt(pos);
      if (rem && pos !== null && dur) rem.textContent = '-' + this._fmt(dur - pos);
    }
    _call(domain, service, data, target) {
      if (this._hass) this._hass.callService(domain, service, data || {}, target);
    }
    _cmd(command) { this._call('remote', 'send_command', { command: [command] }, { entity_id: ATV_R }); }

    _render() {
      const root = this.shadowRoot;
      const tv = this._st(TV), art = this._st(ART), atv = this._st(ATV),
            arc = this._st(ARC), fmtS = this._st(FMT), volS = this._st(VOL);
      const tvState = tv ? tv.state : 'off';
      // Watching / Art Mode / Off come from the Frame itself: the TV
      // media player's state plus its own art_mode_status attribute
      // (the art switch mirrors the same TV data). The Apple TV only
      // ever contributes the app-name suffix, and only while it is
      // actually playing or paused.
      const artOn = (tv && tv.attributes.art_mode_status === 'on')
        || (art ? art.state === 'on' : false);
      const aa = atv ? atv.attributes : {};
      const atvActive = !!(atv && (atv.state === 'playing' || atv.state === 'paused'));
      const mode = (tvState === 'off' || tvState === 'standby') ? 'off'
        : (artOn ? 'art' : 'watch');
      const stateText = mode === 'off' ? 'Off'
        : mode === 'art' ? 'Art Mode'
        : 'Watching' + (atvActive && aa.app_name ? ' · ' + aa.app_name : '');
      const dotCls = mode === 'watch' ? 'dot watch' : mode === 'art' ? 'dot art' : 'dot';
      const appName = aa.app_name || 'Apple TV';
      const title = aa.media_title || appName;
      const playing = atv && atv.state === 'playing';
      const paused = atv && atv.state === 'paused';
      const { pos, dur, pct } = atv ? this._pos(atv) : { pos: null, dur: null, pct: 0 };
      const showProg = !!(dur && pos !== null && (playing || paused));
      const meta = playing ? 'Playing in ' + appName : paused ? 'Paused in ' + appName
        : 'Apple TV · ' + (atv ? atv.state : 'off');
      const vol = volS ? Math.round(parseFloat(volS.state) || 0)
        : arc ? Math.round((arc.attributes.volume_level || 0) * 100) : 0;
      const muted = arc ? !!arc.attributes.is_volume_muted : false;
      const fmt = fmtS ? fmtS.state : '';
      // Real playback artwork only: the ATV entity serves
      // entity_picture (episode/movie art) while media is loaded,
      // and nothing when idle — so require a title + active playback
      // before using it, and fall back to a styled tile otherwise
      // (never an app logo, never a broken image).
      const hasMedia = !!aa.media_title && atvActive;
      const pic = (aa.entity_picture && hasMedia)
        ? '<img class="art" src="' + aa.entity_picture + '" alt="" onerror="this.style.visibility=\'hidden\'">'
        : '<div class="art-fallback"><ha-icon icon="mdi:television-play"></ha-icon></div>';

      root.innerHTML =
        '<style>' + CSS + '</style>' +
        '<ha-card><div class="layout">' +

        '<div class="head">' +
          '<div><div class="room">Family Room</div>' +
          '<div class="stateline"><span class="' + dotCls + '"></span>' + stateText + '</div></div>' +
          '<button class="power' + (mode === 'off' ? ' off' : '') + '" data-act="power" aria-label="Power">' +
            '<ha-icon icon="mdi:power"></ha-icon></button>' +
        '</div>' +

        '<div class="np">' +
          '<div class="np-top">' + pic +
            '<div class="np-text"><div class="np-label">NOW PLAYING</div>' +
            '<div class="np-title">' + title + '</div>' +
            '<div class="np-meta">' + meta + '</div></div>' +
          '</div>' +
          (showProg ?
            '<div class="prog"><div class="bar"><div class="fill" style="width:' + pct + '%"></div></div>' +
            '<div class="times"><span class="t-elapsed">' + this._fmt(pos) + '</span>' +
            '<span class="t-remain">-' + this._fmt(dur - pos) + '</span></div></div>' : '') +
          '<div class="transport">' +
            '<button class="tbtn" data-act="back15" aria-label="Back 15 seconds"><ha-icon icon="mdi:rewind"></ha-icon></button>' +
            '<button class="tbtn main" data-act="playpause" aria-label="Play or pause"><ha-icon icon="mdi:' + (playing ? 'pause' : 'play') + '"></ha-icon></button>' +
            '<button class="tbtn" data-act="fwd15" aria-label="Forward 15 seconds"><ha-icon icon="mdi:fast-forward"></ha-icon></button>' +
          '</div>' +
        '</div>' +

        '<div class="padcol">' +
          '<div class="disc">' +
            '<button class="arrow a-up" data-act="up" aria-label="Up"><ha-icon icon="mdi:chevron-up"></ha-icon></button>' +
            '<button class="arrow a-left" data-act="left" aria-label="Left"><ha-icon icon="mdi:chevron-left"></ha-icon></button>' +
            '<button class="ok" data-act="select">OK</button>' +
            '<button class="arrow a-right" data-act="right" aria-label="Right"><ha-icon icon="mdi:chevron-right"></ha-icon></button>' +
            '<button class="arrow a-down" data-act="down" aria-label="Down"><ha-icon icon="mdi:chevron-down"></ha-icon></button>' +
          '</div>' +
          '<div class="secondary">' +
            '<button class="pill" data-act="back"><ha-icon icon="mdi:arrow-u-left-top"></ha-icon>Back</button>' +
            '<button class="pill" data-act="home"><ha-icon icon="mdi:home"></ha-icon>Home</button>' +
            '<button class="pill" data-act="menu"><ha-icon icon="mdi:menu"></ha-icon>Menu</button>' +
          '</div>' +
        '</div>' +

        '<div class="vol">' +
          '<div class="vol-row">' +
            '<ha-icon icon="mdi:' + (muted ? 'volume-off' : 'volume-high') + '"></ha-icon>' +
            '<input type="range" min="0" max="100" step="1" value="' + vol + '" style="--val:' + vol + '%" aria-label="Sonos Arc volume">' +
            '<span class="pct">' + vol + '%</span>' +
            '<button class="mute' + (muted ? ' on' : '') + '" data-act="mute" aria-label="Mute">' +
              '<ha-icon icon="mdi:' + (muted ? 'volume-off' : 'volume-variant-off') + '"></ha-icon></button>' +
          '</div>' +
          '<div class="vol-cap">Sonos Arc' + (fmt ? ' · TV · ' + fmt : '') + (muted ? ' · Muted' : '') + '</div>' +
        '</div>' +

        '<div class="modes">' +
          '<div class="chiprow">' +
            '<button class="chip" data-act="atvhome"><ha-icon icon="mdi:apple"></ha-icon>Apple TV</button>' +
            '<button class="chip' + (artOn ? ' active' : '') + '" data-act="art"><ha-icon icon="mdi:image-frame"></ha-icon>Art Mode</button>' +
            '<button class="chip' + (this._confirmOff ? ' danger' : '') + '" data-act="off">' +
              '<ha-icon icon="mdi:television-off"></ha-icon>' + (this._confirmOff ? 'Tap again to turn off' : 'TV Off') + '</button>' +
          '</div>' +
          '<div class="chiprow">' +
            '<button class="chip app" data-act="infuse"><img src="' + ICON_INFUSE + '" alt="" onerror="this.style.display=\'none\'">Infuse</button>' +
            '<button class="chip app" data-act="yttv"><img src="' + ICON_YTTV + '" alt="" onerror="this.style.display=\'none\'">YouTube TV</button>' +
          '</div>' +
        '</div>' +

        '</div></ha-card>';
      this._bind();
    }

    _bind() {
      const root = this.shadowRoot;
      const on = (act, fn) => {
        const el = root.querySelector('[data-act="' + act + '"]');
        if (el) el.addEventListener('click', fn);
      };
      on('power', () => this._call('script', 'turn_on', {}, { entity_id: PWR }));
      on('up', () => this._cmd('up'));
      on('down', () => this._cmd('down'));
      on('left', () => this._cmd('left'));
      on('right', () => this._cmd('right'));
      on('select', () => this._cmd('select'));
      on('back', () => this._cmd('menu'));
      on('home', () => this._cmd('home'));
      on('menu', () => this._cmd('top_menu'));
      on('playpause', () => this._call('media_player', 'media_play_pause', {}, { entity_id: ATV }));
      on('back15', () => this._cmd('skip_backward'));
      on('fwd15', () => this._cmd('skip_forward'));
      on('mute', () => {
        const arc = this._st(ARC);
        const m = arc ? !!arc.attributes.is_volume_muted : false;
        this._call('media_player', 'volume_mute', { is_volume_muted: !m }, { entity_id: ARC });
      });
      on('atvhome', () => this._call('script', 'turn_on', {}, { entity_id: HOME_SCRIPT }));
      on('art', () => this._call('switch', 'toggle', {}, { entity_id: ART }));
      on('off', () => {
        if (!this._confirmOff) {
          this._confirmOff = true;
          this._lastSig = this._sig();
          this._render();
          this._confirmTimer = setTimeout(() => {
            this._confirmOff = false;
            this._lastSig = this._sig();
            this._render();
          }, 3500);
        } else {
          clearTimeout(this._confirmTimer);
          this._confirmOff = false;
          this._call('script', 'turn_on', {}, { entity_id: OFF_SCRIPT });
          this._lastSig = this._sig();
          this._render();
        }
      });
      on('infuse', () => this._call('media_player', 'select_source', { source: 'Infuse' }, { entity_id: ATV }));
      on('yttv', () => this._call('media_player', 'select_source', { source: 'YouTube TV' }, { entity_id: ATV }));

      const slider = root.querySelector('input[type=range]');
      const pct = root.querySelector('.pct');
      if (slider) {
        slider.addEventListener('pointerdown', () => { this._dragging = true; });
        slider.addEventListener('input', () => {
          slider.style.setProperty('--val', slider.value + '%');
          if (pct) pct.textContent = slider.value + '%';
        });
        slider.addEventListener('change', () => {
          this._dragging = false;
          this._call('input_number', 'set_value',
            { entity_id: VOL, value: Number(slider.value) });
        });
      }
    }
  }

  if (!customElements.get('tt-remote-card')) {
    customElements.define('tt-remote-card', TtRemoteCard);
  }
})();

/* Kumar patch: real start times for PRE games (Pacific) */
window.__ttTime=function(iso,fb){try{if(!iso)return fb??"";const d=new Date(iso);if(isNaN(d.getTime()))return fb??"";const tz="America/Los_Angeles";const df=new Intl.DateTimeFormat("en-US",{timeZone:tz,year:"numeric",month:"numeric",day:"numeric"});const today=df.format(new Date());const tom=df.format(new Date(Date.now()+864e5));const day=df.format(d);const time=new Intl.DateTimeFormat("en-US",{timeZone:tz,hour:"numeric",minute:"2-digit"}).format(d);const label=day===today?"Today":day===tom?"Tomorrow":new Intl.DateTimeFormat("en-US",{timeZone:tz,weekday:"short",month:"short",day:"numeric"}).format(d);return label+" \u00b7 "+time;}catch(e){return fb??""}};
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const n=this.t;if(e&&void 0===t){const e=void 0!==n&&1===n.length;e&&(t=s.get(n)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(n,t))}return t}toString(){return this.cssText}};const o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:r,defineProperty:a,getOwnPropertyDescriptor:c,getOwnPropertyNames:l,getOwnPropertySymbols:h,getPrototypeOf:d}=Object,p=globalThis,u=p.trustedTypes,g=u?u.emptyScript:"",f=p.reactiveElementPolyfillSupport,m=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},$=(t,e)=>!r(t,e),v={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:$};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(t,n,e);void 0!==s&&a(this.prototype,t,s)}}static getPropertyDescriptor(t,e,n){const{get:s,set:i}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const o=s?.call(this);i?.call(this,e),this.requestUpdate(t,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...l(t),...h(t)];for(const n of e)this.createProperty(n,t[n])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,n]of e)this.elementProperties.set(t,n)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const n=this._$Eu(t,e);void 0!==n&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((n,s)=>{if(e)n.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of s){const s=document.createElement("style"),i=t.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}})(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){const n=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,n);if(void 0!==s&&!0===n.reflect){const i=(void 0!==n.converter?.toAttribute?n.converter:_).toAttribute(e,n.type);this._$Em=t,null==i?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(t,e){const n=this.constructor,s=n._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=n.getPropertyOptions(s),i="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s;const o=i.fromAttribute(e,t.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,n,s=!1,i){if(void 0!==t){const o=this.constructor;if(!1===s&&(i=this[t]),n??=o.getPropertyOptions(t),!((n.hasChanged??$)(i,e)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,n))))return;this.C(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:s,wrapped:i},o){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),!0!==i||void 0!==o)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,n]of t){const{wrapped:t}=n,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,n,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,f?.({ReactiveElement:b}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y=globalThis,w=t=>t,x=y.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+k,C=`<${E}>`,T=document,O=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,I="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,B=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,z=/"/g,j=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...n)=>({_$litType$:t,strings:e,values:n}))(1),F=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),W=new WeakMap,q=T.createTreeWalker(T,129);function V(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const Y=(t,e)=>{const n=t.length-1,s=[];let i,o=2===e?"<svg>":3===e?"<math>":"",r=P;for(let e=0;e<n;e++){const n=t[e];let a,c,l=-1,h=0;for(;h<n.length&&(r.lastIndex=h,c=r.exec(n),null!==c);)h=r.lastIndex,r===P?"!--"===c[1]?r=H:void 0!==c[1]?r=R:void 0!==c[2]?(j.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=B):void 0!==c[3]&&(r=B):r===B?">"===c[0]?(r=i??P,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?B:'"'===c[3]?z:U):r===z||r===U?r=B:r===H||r===R?r=P:(r=B,i=void 0);const d=r===B&&t[e+1].startsWith("/>")?" ":"";o+=r===P?n+C:l>=0?(s.push(a),n.slice(0,l)+S+n.slice(l)+k+d):n+k+(-2===l?e:d)}return[V(t,o+(t[n]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class K{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let i=0,o=0;const r=t.length-1,a=this.parts,[c,l]=Y(t,e);if(this.el=K.createElement(c,n),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=l[o++],n=s.getAttribute(t).split(k),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:i,name:r[2],strings:n,ctor:"."===r[1]?Q:"?"===r[1]?tt:"@"===r[1]?et:G}),s.removeAttribute(t)}else t.startsWith(k)&&(a.push({type:6,index:i}),s.removeAttribute(t));if(j.test(s.tagName)){const t=s.textContent.split(k),e=t.length-1;if(e>0){s.textContent=x?x.emptyScript:"";for(let n=0;n<e;n++)s.append(t[n],O()),q.nextNode(),a.push({type:2,index:++i});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===E)a.push({type:2,index:i});else{let t=-1;for(;-1!==(t=s.data.indexOf(k,t+1));)a.push({type:7,index:i}),t+=k.length-1}i++}}static createElement(t,e){const n=T.createElement("template");return n.innerHTML=t,n}}function J(t,e,n=t,s){if(e===F)return e;let i=void 0!==s?n._$Co?.[s]:n._$Cl;const o=M(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),void 0===o?i=void 0:(i=new o(t),i._$AT(t,n,s)),void 0!==s?(n._$Co??=[])[s]=i:n._$Cl=i),void 0!==i&&(e=J(t,i._$AS(t,e.values),i,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);q.currentNode=s;let i=q.nextNode(),o=0,r=0,a=n[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Z(i,i.nextSibling,this,t):1===a.type?e=new a.ctor(i,a.name,a.strings,this,t):6===a.type&&(e=new nt(i,this,t)),this._$AV.push(e),a=n[++r]}o!==a?.index&&(i=q.nextNode(),o++)}return q.currentNode=T,s}p(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,s){this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=J(this,t,e),M(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==L&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=K.createElement(V(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),n=t.u(this.options);t.p(e),this.T(n),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,s=0;for(const i of t)s===e.length?e.push(n=new Z(this.O(O()),this.O(O()),this,this.options)):n=e[s],n._$AI(i),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,s,i){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=L}_$AI(t,e=this,n,s){const i=this.strings;let o=!1;if(void 0===i)t=J(this,t,e,0),o=!M(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const s=t;let r,a;for(t=i[0],r=0;r<i.length-1;r++)a=J(this,s[n+r],e,r),a===F&&(a=this._$AH[r]),o||=!M(a)||a!==this._$AH[r],a===L?t=L:t!==L&&(t+=(a??"")+i[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Q extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}class tt extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==L)}}class et extends G{constructor(t,e,n,s,i){super(t,e,n,s,i),this.type=5}_$AI(t,e=this){if((t=J(this,t,e,0)??L)===F)return;const n=this._$AH,s=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==L&&(n===L||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){J(this,t)}}const st=y.litHtmlPolyfillSupport;st?.(K,Z),(y.litHtmlVersions??=[]).push("3.3.3");const it=(t,e,n)=>{const s=n?.renderBefore??e;let i=s._$litPart$;if(void 0===i){const t=n?.renderBefore??null;s._$litPart$=i=new Z(e.insertBefore(O(),t),t,void 0,n??{})}return i._$AI(t),i
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */},ot=globalThis;let rt=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=it(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};rt._$litElement$=!0,rt.finalized=!0,ot.litElementHydrateSupport?.({LitElement:rt});const at=ot.litElementPolyfillSupport;function ct(t,e){const{date:n,team_abbr:s,opponent_abbr:i}=e[t]?.attributes??{};return null==n?t:`${n}_${[s,i].sort().join("_")}`}function lt(t){const e=t?.attributes,n={abbr:e?.team_abbr??"team",score:e?.team_score,own:!0,names:{name:e?.team_name,long_name:e?.team_long_name,abbr:e?.team_abbr},record:e?.team_record,logo:e?.team_logo,winner:e?.team_winner},s={abbr:e?.opponent_abbr??"opponent",score:e?.opponent_score,own:!1,names:{name:e?.opponent_name,long_name:e?.opponent_long_name,abbr:e?.opponent_abbr},record:e?.opponent_record,logo:e?.opponent_logo,winner:e?.opponent_winner};return"home"===e?.team_homeaway?{home:n,away:s}:{home:s,away:n}}at?.({LitElement:rt}),(ot.litElementVersions??=[]).push("4.2.2");class ht{_handle=null;get active(){return null!==this._handle}start(t,e){this.stop(),this._handle=setInterval(e,t)}armOnce(t,e){null===this._handle&&(this._handle=setTimeout(()=>{this._handle=null,e()},t))}stop(){null!==this._handle&&(clearTimeout(this._handle),this._handle=null)}}const dt={PRE:"PRE",IN:"IN",POST:"POST",BYE:"BYE"},pt=new Set(Object.values(dt));function ut(t,e){const n=t[e]?.state;return pt.has(n)?n:void 0}const gt=(t,e)=>ut(t,e)===dt.IN,ft=4;function mt(t,e){return t.split(e)[0]}function _t(t,e){return void 0!==t&&e-t<1e3}function $t(t,e){const n=new Map;for(const s of t){const t=lt(e[s]);for(const e of[t.home,t.away]){const{abbr:t}=e,s=Number(e.score??0),i=n.get(t);void 0!==i&&(!Number.isFinite(s)||s<=i)||n.set(t,s)}}return n}class vt{_games=new Map;_timer=new ht;_blinkOnById=new Map;_reducedMotion=!1;update(t){this._blinkOnById=t.blinkOnById,this._reducedMotion=t.reducedMotion,this.record(t.trackedIds,t.states),this._prune(),this._armTimer(t.onExpire)}_isOn=t=>!this._reducedMotion&&(this._blinkOnById.get(t)??!0);get timerActive(){return this._timer.active}record(t,e){const n=new Map;for(const s of t){const t=ct(s,e),i=n.get(t);i?i.push(s):n.set(t,[s])}const s=Date.now();for(const[t,i]of n){const n=i.filter(t=>gt(e,t));if(!n.length){this._games.delete(t);continue}const o=this._games.get(t)??{prev:{},changedAt:{},held:{},liveIds:n};o.liveIds=n,this._games.set(t,o);for(const[t,e]of Object.entries(o.changedAt))_t(e,s)||(delete o.changedAt[t],delete o.held[t]);for(const[t,i]of $t(n,e)){if(!Number.isFinite(i)){delete o.changedAt[t],delete o.held[t],delete o.prev[t];continue}const e=o.prev[t];void 0!==e&&e!==i&&(o.changedAt[t]=s,o.held[t]??=e),o.prev[t]=i}}}rowView(t,e){const n=this._isOn(t),s=ct(t,e),i=this._games.get(s),{home:o,away:r}=lt(e[t]),a=o.abbr,c=r.abbr,l=Date.now(),h=n&&_t(i?.changedAt[a],l),d=n&&_t(i?.changedAt[c],l);return{freshHome:h,freshAway:d,heldHome:h?i?.held[a]:void 0,heldAway:d?i?.held[c]:void 0}}_prune(){const t=Date.now();for(const e of this._games.values()){const n=Object.entries(e.changedAt);if(!n.length)continue;const s=e.liveIds.some(this._isOn);for(const[i,o]of n)s&&_t(o,t)||(delete e.changedAt[i],delete e.held[i])}}_armTimer(t){if(this._timer.active)return;const e=Date.now();let n=1/0;for(const t of this._games.values())if(t.liveIds.some(this._isOn))for(const e of Object.values(t.changedAt))n=Math.min(n,e+1e3);n!==1/0&&this._timer.armOnce(Math.max(50,n-e),t)}clearTimer(){this._timer.stop()}clear(){this._games.clear(),this.clearTimer()}}function bt(){return!0===window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches}function yt(t,e,n){return D`<button
    class="slide-btn ${n}"
    title=${t}
    aria-label=${t}
    @click=${e}
  ></button>`}class wt{_onChange;_reducedMotion;_timer=new ht;_index=0;_paused=!1;_count=0;_slide=!1;_sec=45;constructor(t,e=bt){this._onChange=t,this._reducedMotion=e}configure(t){this._count=t?.sections?.length??0,this._slide="slide"===t?.mode;const e=t?.slide_sec;this._sec="number"==typeof e&&e>0?e:45,this._index=0,this._paused=this._reducedMotion(),this.stop()}get active(){return this._slide&&this._count>=2}get index(){return this._index}get paused(){return this._paused}sync(){const t=this.active&&!this._paused;t&&!this._timer.active?this._timer.start(1e3*this._sec,()=>{this._index=(this._index+1)%this._count,this._onChange()}):!t&&this._timer.active&&this.stop()}stop(){this._timer.stop()}step(t){this._count<2||(this._index=((this._index+t)%this._count+this._count)%this._count,this._paused=!0,this.sync(),this._onChange())}toggle(){this._paused=!this._paused,this.sync(),this._onChange()}controls(){if(!this.active)return L;const t=this._paused;return D`<span class="slide-ctrls${t?" paused":""}"
      >${yt("Previous section",()=>this.step(-1),"nav prev")}${yt(t?"Resume rotation":"Stop rotation",()=>this.toggle(),t?"toggle paused":"toggle")}${yt("Next section",()=>this.step(1),"nav next")}</span
    >`}}class xt{_data={events:[],filtered:[],rendered:[]};track(t){const e=Date.now();this._data[t].push(e),this._data[t]=this._data[t].filter(t=>t>e-108e5)}counts(t){const e=Date.now(),n=this._data[t],s={min1:0,min5:0,min15:0,min30:0,hour1:0,hour3:n.length};for(const t of n){const n=e-t;n<=6e4&&s.min1++,n<=3e5&&s.min5++,n<=9e5&&s.min15++,n<=18e5&&s.min30++,n<=36e5&&s.hour1++}return s}tableHtml(){const t=t=>`<td style="padding-right:8px;text-align:right">${t}</td>`,e=t=>`<td style="padding-right:8px;text-align:right;color:orange">${t}</td>`,n=(e,n)=>{const s=this.counts(n);return`<tr><td style="padding-right:10px;color:orange">${e}</td>${t(s.min1)}${t(s.min5)}${t(s.min15)}${t(s.min30)}${t(s.hour1)}${t(s.hour3)}</tr>`},s=(t,e=2)=>String(t).padStart(e,"0"),i=this._data.rendered.at(-1);let o="--";if(void 0!==i){const t=new Date(i);o=`${`${s(t.getHours())}:${s(t.getMinutes())}:${s(t.getSeconds())}.${s(t.getMilliseconds(),3)}`} (${r=Date.now()-i,r<6e4?`${Math.floor(r/1e3)}s`:r<36e5?`${Math.floor(r/6e4)}m`:`${Math.floor(r/36e5)}h`} ago)`}var r;const a=`<tr style="font-size:10px"><td style="padding-right:10px;color:indianred">${o}</td>${e("1m")}${e("5m")}${e("15m")}${e("30m")}${e("1h")}${e("3h")}</tr>`;return`<table style="border-collapse:collapse;width:100%">${n("events","events")}${n("filtered","filtered")}${n("rendered","rendered")}${a}</table>`}}const At="--ttsc-team-width",St="--ttsc-logo-width",kt="--ttsc-score-width",Et="--ttsc-colon-width",Ct="--ttsc-row-height",Tt="--ttsc-row-padding",Ot="--ttsc-font-scale",Mt="--ttsc-header-color",Nt="--ttsc-name-default-color",It="--ttsc-name-special-color",Pt="--ttsc-name-leading-color",Ht="--ttsc-name-winner-color",Rt="--ttsc-score-leading-color",Bt="--ttsc-score-winner-color",Ut="--ttsc-score-loser-color",zt="--ttsc-live-color",jt="--ttsc-sub-color";function Dt(t){const e=/^(\d+(?:\.\d+)?)px$/.exec((t??"").trim());return e?Number(e[1]):null}function Ft(t,e){return(Dt(t)??28)+2*(Dt(e)??5)}function Lt(t,e){const n=t.map(t=>1+Number(t.limit??10));return e?Math.max(0,...n):n.reduce((t,e)=>t+e,0)}function Wt(t,e){return(void 0!==t.prefix||void 0===t.entities)&&e.startsWith(t.prefix??"")||(t.entities?.includes(e)??!1)}function qt(t,e){const{prefix:n="",special_teams:s=[]}=t;return s.includes(e)||s.includes(e.replace(n,""))}function Vt(t){return![!1,0,"false"].includes(t.score_blink)}class Yt{opts;config=null;hass=null;trackedIds=null;trackedBySection=null;blinkOnById=null;detached=!1;fixedTimer=new ht;debugTimer=new ht;renderTimer=new ht;constructor(t){this.opts=t}refreshTracked(t){const e=function(t,e){const n=new Set,s=new Map,i=new Map(t.map((t,e)=>[e,[]]));for(const o of e)for(const[e,r]of t.entries())Wt(r,o)&&(n.add(o),i.get(e)?.push(o),s.set(o,(s.get(o)??!1)||Vt(r)));return{trackedIds:n,trackedBySection:i,blinkOnById:s}}(this.config?.sections??[],t);return this.trackedIds=e.trackedIds,this.trackedBySection=e.trackedBySection,this.blinkOnById=e.blinkOnById,e.trackedIds}reset(){this.trackedIds=null,this.trackedBySection=null,this.blinkOnById=null}configure(t){this.reset(),this.config=t,this.renderTimer.stop(),this.detached||(this.startTimers(),this.opts.onConfigured?.(),this.hass&&this.opts.onRender())}setHass(t){const e=this.hass;this.hass=t,this.detached||(e?this.trackedIds&&this.config&&function(t,e,n){if(!n)return!0;if(!t)return!0;for(const s of t)if(e[s]!==n[s])return!0;return!1}(this.trackedIds,t.states,e?.states)&&(this.config.debug&&this.opts.onDebug?.("events"),this.scheduleRender()):this.config?this.opts.onRender():this.refreshTracked(Object.keys(t.states)))}attach(){this.detached=!1,this.config&&(this.startTimers(),this.hass&&!this.trackedIds&&this.opts.onRender())}detach(){this.detached=!0,this.reset(),this.stopTimers(),this.renderTimer.stop()}scheduleRender(){if(this.renderTimer.active)return;this.config?.debug&&this.opts.onDebug?.("filtered");const t=1e3*(this.config?.lazy_refresh??5);0!==t?this.renderTimer.armOnce(t,()=>{this.hass&&this.config&&this.opts.onRender()}):this.opts.onRender()}startTimers(){this.stopTimers();const t=1e3*(this.config?.fixed_refresh??60);t>0&&this.fixedTimer.start(t,()=>{this.hass&&this.config&&this.opts.onRender()}),this.config?.debug&&this.debugTimer.start(1e3,()=>{this.hass&&this.config&&this.opts.onDebugTick?.()})}stopTimers(){this.fixedTimer.stop(),this.debugTimer.stop()}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=2,Jt=t=>(...e)=>({_$litDirective$:t,values:e});let Xt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt={},Gt=Jt(class extends Xt{constructor(){super(...arguments),this.key=L}render(t,e){return this.key=t,e}update(t,[e,n]){return e!==this.key&&(((t,e=Zt)=>{t._$AH=e;
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(t),this.key=e),n}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Qt extends Xt{constructor(t){if(super(t),this.it=L,t.type!==Kt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===L||null==t)return this._t=void 0,this.it=t;if(t===F)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Qt.directiveName="unsafeHTML",Qt.resultType=1;const te=Jt(Qt);function ee(t,e,n){return t??`var(${e}, ${n})`}function ne(t,e,n){const s=parseFloat(String(t.score??0)),i=parseFloat(String(e.score??0));return n===dt.IN?s>i?"ahead":s<i?"trailing":"tied":t.winner??s>i?"ahead":"trailing"}function se(t,e,n){return"trailing"!==ne(t,e,n)}function ie(t,e,n){return"ahead"===ne(t,e,n)}function oe(t,e,n,s={}){return n===dt.IN&&ie(t,e,n)?ee(s.name_leading,Pt,"var(--primary-text-color)"):n===dt.POST&&ie(t,e,n)?ee(s.name_winner,Ht,"var(--primary-text-color)"):ee(s.name_default,Nt,"#777")}function re(t,e,n,s={}){return n===dt.PRE?"black":n===dt.IN?se(t,e,n)?ee(s.score_leading,Rt,"brown"):"black":n===dt.POST?se(t,e,n)?ee(s.score_winner,Bt,"orange"):ee(s.score_loser,Ut,"darkgray"):"black"}function ae(t){return t===dt.PRE||t===dt.IN?"black":t===dt.POST?"#777":"transparent"}function ce(t,e){return e===dt.PRE?"":String(t.score??"")}function le(t,e="name"){const n=t.names[e];return String(String(n??"").trim()?n:t.names.name??"")}function he(t){return String(t.record??"")}function de(t){const e=Date.parse(t?.date??"");return Number.isNaN(e)?Number.POSITIVE_INFINITY:e}function pe(t,e,n,{liveFirst:s}){const i=n.filter(t=>ut(e,t)).map(n=>{const s=e[n]?.attributes;return{entityId:n,teamName:String(s?.team_name??n),special:qt(t,n),key:de(s)}});return i.sort(function(f,e){const n=n=>{const s=ut(e,n.entityId);return s===dt.IN?0:s===dt.PRE?1:s===dt.POST?2:3};return(t,e)=>{const i=n(t),o=n(e);if(i!==o)return i-o;const r=t.key===e.key?0:t.key<e.key?-1:1;return(2===i?-r:r)||t.teamName.localeCompare(e.teamName)||t.entityId.localeCompare(e.entityId)}}({liveFirst:s},e)),function(t,e){const n=new Map;for(const s of t){const t=ct(s.entityId,e),i=n.get(t);i?i.push(s):n.set(t,[s])}const s=new Map;for(const t of n.values()){const e=t.find(t=>t.special)??t[0],n=t.some(t=>t!==e&&t.special);s.set(e,n?{...e,opponentSpecial:!0}:e)}return t.filter(t=>s.has(t)).map(t=>s.get(t))}(i,e).slice(0,t.limit??10).map(({entityId:t,special:e=!1,opponentSpecial:n=!1})=>({entityId:t,special:e,opponentSpecial:n}))}const ue=`\n  :host { display: block; }\n\n  ha-card {\n    padding: 0 6px 2px;\n    box-sizing: border-box;\n    position: relative; /* anchor for .sc-version and #sc-debug */\n    font-family: var(--paper-font-body1_-_font-family, sans-serif);\n    color: #888; /* gray */\n    font-size: calc(14px * var(${Ot}, 1));\n  }\n\n  .section-header {\n    color: var(${Mt}, #2196F3); /* Material Blue */\n    font-size: calc(15px * var(${Ot}, 1));\n    padding: 2px 0 2px 0;\n    margin-top: 1px;\n  }\n\n  .section-header.has-controls {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 6px;\n    position: relative;\n  }\n  .section-title { flex: none; }\n  /* card-level badge: pinned to the top-centre of the card so it shows even when\n     no section renders, independent of the header layout */\n  .sc-version {\n    position: absolute;\n    left: 50%;\n    top: 3px;\n    transform: translateX(-50%);\n    z-index: 1;\n    font-family: monospace;\n    font-size: calc(9px * var(${Ot}, 1));\n    font-weight: normal;\n    color: #888;\n    white-space: nowrap;\n    pointer-events: none;\n  }\n  .slide-ctrls { display: inline-flex; align-items: center; gap: 0; flex: none; }\n  /* grouped-pill treatment mirroring ha-planetary-solar-system-card's .nav\n     buttons: translucent fill, 1px divider border, shared edges collapsed via\n     a -1px margin (not flex gap, which forces every button's fractional\n     font-scaled width to round to a whole device pixel — on a low-DPI\n     display that rounding can land unevenly gap-to-gap, e.g. a visibly wider\n     gap on one side; the collapsed shared border has no such leftover space\n     to divide, so it can't drift), only the outer corners rounded. */\n  .slide-btn {\n    position: relative;\n    box-sizing: border-box;\n    cursor: pointer;\n    color: #888;\n    vertical-align: middle;\n    background: color-mix(in srgb, currentColor 15%, transparent);\n    border: 1px solid var(--divider-color, color-mix(in srgb, currentColor 25%, transparent));\n    border-radius: 0;\n    /* force monochrome text glyphs so the stop/resume icon obeys 'color'\n       (grey while running, orange only when stopped) rather than falling\n       back to a colour emoji */\n    font-variant-emoji: text;\n    font-size: calc(13px * var(${Ot}, 1));\n    line-height: 1;\n    padding: 0;\n    /* fixed box so the stop/resume shape swap never shifts the nav buttons */\n    min-width: calc(20px * var(${Ot}, 1));\n    height: calc(18px * var(${Ot}, 1));\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .slide-btn + .slide-btn { margin-left: -1px; }\n  .slide-btn:first-child { border-radius: 6px 0 0 6px; }\n  .slide-btn:last-child { border-radius: 0 6px 6px 0; }\n  /* the stop / resume icons are drawn as CSS shapes, not font glyphs: square\n     and triangle glyphs both position off the text baseline and how far off\n     depends on the font, so a glyph never sits reliably centred. A pseudo-\n     element is a flex child of the button and lands dead centre everywhere. */\n  .slide-btn.toggle::before {\n    content: "";\n    background: currentColor;\n    /* even box so it splits the (even) content box's leftover space equally on\n       both axes — an odd size forces the browser to round one side further\n       than the other, biasing the icon toward the bottom-right */\n    width: calc(12px * var(${Ot}, 1));\n    height: calc(12px * var(${Ot}, 1));\n    border-radius: 1px;\n  }\n  .slide-btn.toggle.paused::before {\n    border-radius: 0;\n    clip-path: polygon(0 0, 100% 50%, 0 100%);\n  }\n  /* prev / next chevrons, also CSS shapes: a two-border corner rotated 45°.\n     The box is flex-centred and rotation is about its centre, so the chevron\n     stays centred — unlike a ❮/❯ glyph, whose size and vertical position ride\n     the font metrics and differ from machine to machine. */\n  .slide-btn.nav::before {\n    content: "";\n    width: calc(5px * var(${Ot}, 1));\n    height: calc(5px * var(${Ot}, 1));\n    border: 2px solid currentColor;\n    border-left: 0;\n    border-bottom: 0;\n  }\n  .slide-btn.nav.next::before { transform: rotate(45deg); margin-left: -1px; }\n  .slide-btn.nav.prev::before { transform: rotate(-135deg); margin-right: -1px; }\n  .slide-btn:hover { color: #ccc; background: color-mix(in srgb, currentColor 25%, transparent); z-index: 1; }\n  .slide-btn:focus-visible { outline: 1px solid #2196F3; outline-offset: 1px; z-index: 1; }\n  /* while paused the whole control group turns orange, not just the toggle */\n  .slide-ctrls.paused .slide-btn {\n    color: orange;\n    border-color: color-mix(in srgb, currentColor 35%, transparent);\n  }\n\n  .game-row {\n    display: flex;\n    align-items: center;\n    height: var(${Ct}, 28px);\n    /* equal padding above and below every row, so the divider sits centred in\n       the space: <pad> · row · <pad> · line · <pad> · row · <pad> · … */\n    padding: var(${Tt}, 5px) 0;\n    /* follow the active HA theme's divider (visible in light and dark, matches\n       other cards); the rgba fallback covers the standalone / no-theme case */\n    border-bottom: 1px solid var(--divider-color, rgba(255,255,255,0.04));\n    gap: 0;\n    position: relative;\n  }\n\n  .team-col {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    overflow: hidden;\n    /* width and min-width share one var, so any configured team_width is honoured\n       exactly (no hidden floor); long names truncate with an ellipsis instead */\n    width: var(${At}, 99px);\n    min-width: var(${At}, 99px);\n  }\n  .team-col-a { text-align: right; padding-right: 3px; }\n  .team-col-b { text-align: left; padding-left: 3px; }\n\n  .team-name {\n    font-size: calc(13px * var(${Ot}, 1));\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    line-height: 1.2;\n  }\n  .team-rank {\n    font-size: calc(9px * var(${Ot}, 1));\n    line-height: 1.2;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n\n  .logo {\n    width: var(${St}, 30px);\n    min-width: var(${St}, 30px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: var(${Ct}, 28px);\n    overflow: hidden;\n  }\n  .logo-a { padding-right: 3px; }\n  .logo-b { padding-left:  3px; }\n  .logo img {\n    width: var(${St}, 30px);\n    height: var(${Ct}, 28px);\n    object-fit: contain;\n    display: block;\n  }\n\n  .score {\n    width: var(${kt}, 34px);\n    min-width: var(${kt}, 34px);\n    font-size: calc(20px * var(${Ot}, 1));\n    font-weight: bold;\n    height: var(${Ct}, 28px);\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-self: center;\n  }\n  .score-a { justify-content: flex-end; }\n  .score-b { justify-content: flex-start; }\n\n  .colon {\n    width: var(${Et}, 9px);\n    min-width: var(${Et}, 9px);\n    font-size: calc(17px * var(${Ot}, 1));\n    font-weight: bold;\n    text-align: center;\n    height: var(${Ct}, 28px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .tv {\n    position: absolute;\n    top: 2px;\n    right: 2px;\n    font-size: 0;\n  }\n  .tv-badge {\n    font-size: calc(8px * var(${Ot}, 1));\n    font-weight: bold;\n    color: white;\n    border-radius: 3px;\n    padding: 1px 2px;\n    white-space: nowrap;\n  }\n  .tv-tooltip {\n    position: relative;\n    cursor: default;\n  }\n  .tv-tooltip::after {\n    content: attr(data-tooltip);\n    position: absolute;\n    bottom: calc(100% + 4px);\n    left: 50%;\n    transform: translateX(-50%);\n    background: #222;\n    color: #fff;\n    font-size: calc(10px * var(${Ot}, 1));\n    font-weight: bold;\n    padding: 3px 6px;\n    border-radius: 4px;\n    white-space: pre-wrap;\n    width: max-content;\n    max-width: 300px;\n    text-align: left;\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity 0.15s;\n    z-index: 10;\n  }\n  .tv-tooltip:hover::after {\n    opacity: 1;\n  }\n\n  .message {\n    flex: 1;\n    min-width: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-size: calc(13px * var(${Ot}, 1));\n    font-weight: bold;\n    line-height: 1.1;\n    padding-left: 4px;\n  }\n  /* the row has a fixed height, so a long line must never wrap onto a second one:\n     cut it with an ellipsis instead. The tooltip variant keeps overflow visible (its\n     ::after bubble would be clipped) and ellipsises the inner .msg-text instead. */\n  .message > span {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .message > .tv-tooltip {\n    overflow: visible;\n  }\n  .msg-text {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .msg-sub {\n    font-size: calc(10px * var(${Ot}, 1));\n    font-weight: normal;\n    color: #666; /* dimgray */\n    line-height: 1.1;\n  }\n\n  .empty {\n    padding: 8px 4px;\n    font-size: calc(13px * var(${Ot}, 1));\n    color: #555; /* dark gray */\n  }\n\n  @keyframes score-flash {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0; }\n  }\n  /* the animation targets the digits only (.score-value), not the .score cell\n     itself — the cell's own inline background must stay solid, or the fade\n     reads as the background flashing rather than the number that changed */\n  .score-fresh .score-value {\n    animation: score-flash 0.25s ease-in-out 4; /* 4 blinks inside the fixed 1s BLINK_MS window */\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .score-fresh .score-value {\n      animation: none;\n    }\n  }\n`,ge=new Map([["FT","Full Time"],["HT","Half Time"]]);function fe(t){const e=function(t){return t&&String(t).startsWith("https://")?String(t):""}(t.logo);return e?D`<img src="${e}" alt="">`:L}const me=te(`<style>${ue}</style>`);function _e(t,e,n={},s={}){const{tvBadge:i=ft}=s,{state:o,attr:r,bg:a,colon:c,rankColor:l,home:h,away:d,homeSide:p,awaySide:u}=function(t,e,n={},s={}){const{opponentSpecial:i=!1,freshHome:o=!1,freshAway:r=!1,heldHome:a,heldAway:c,highlightWinner:l=!0,nameFormat:h="name"}=s,d=t?.state??"",p=lt(t),u={...p.home,score:a??p.home.score},g={...p.away,score:c??p.away.score},f=ee(n.name_default,Nt,"#777"),m=ee(n.name_special,It,"#2196F3"),_=d===dt.IN||d===dt.POST,$=(t,s,o,r)=>{const a=t.own?e:i,c=l&&_&&ie(t,s,d);return{name:le(t,h),rank:he(t),nameColor:a?m:c?oe(t,s,d,n):f,score:ce(t,d),scoreColor:re(t,s,d,n),liveScore:r,fresh:o}};return{state:d,attr:t?.attributes??{},bg:(v=d,v===dt.PRE?"transparent":v===dt.IN?"lightgray":"transparent"),colon:ae(d),rankColor:f,home:$(u,g,o,p.home.score),away:$(g,u,r,p.away.score),homeSide:u,awaySide:g};var v}(t,e,n,s),g=h.fresh?" score-fresh":"",f=d.fresh?" score-fresh":"";return D`
<div class="game-row" data-ev="${r.event_id??""}" data-sp="${r.sport_path??""}" data-lp="${r.league_path??""}" data-title="${String(r.event_name??"Game Details").replace(/"/g,"")}">
  <div class="team-col team-col-a">
    <div class="team-name" style="color:${h.nameColor}">${h.name}</div>
    <div class="team-rank" style="color:${l}">${h.rank}</div>
  </div>
  <div class="logo logo-a">${fe(p)}</div>
  <div class="score score-a${g}" style="background:${a};color:${h.scoreColor}">${Gt(h.liveScore,D`<span class="score-value">${h.score}</span>`)}</div>
  <div class="colon" style="background:${a};color:${c}">${o&&"PRE"!==o?"–":""}</div>
  <div class="score score-b${f}" style="background:${a};color:${d.scoreColor}">${Gt(d.liveScore,D`<span class="score-value">${d.score}</span>`)}</div>
  <div class="logo logo-b">${fe(u)}</div>
  <div class="team-col team-col-b">
    <div class="team-name" style="color:${d.nameColor}">${d.name}</div>
    <div class="team-rank" style="color:${l}">${d.rank}</div>
  </div>
  <div class="message">${function(t,e,n={}){switch(t){case dt.PRE:{const t=window.__ttTime?window.__ttTime(e.date,e.kickoff_in):(e.kickoff_in??""),n=mt(String(e.location??""),",").trim(),s=e.odds??"",i=n&&s?`${n}, ${s}`:n||s;return D`<span style="color:var(${jt}, darkgray)">${t}</span>${i?D`<span class="msg-sub">${i}</span>`:L}`}case dt.BYE:return D`<span style="color:var(${jt}, darkgray)">Bye</span>`;case dt.IN:{const t=e.clock??"",s=String(e.last_play??"");let i=L;if(s)if(s.length>50){const t=s.replace(/; /g,";\n").replace(/ (\d+(?:'\+\d+)?')/g,"\n$1");i=D`<span class="msg-sub tv-tooltip" data-tooltip="${t}"><span class="msg-text">${s.substring(0,50)}</span></span>`}else i=D`<span class="msg-sub">${s}</span>`;return D`<span style="color:${ee(n.live,zt,"indianred")}">${t}</span>${i}`}default:{const t=e.clock??"",s=ge.get(t)??t,i=e.series_summary??"";return D`<span style="color:${ee(n.score_winner,Bt,"orange")}">${s}</span>${i?D`<span class="msg-sub">${i}</span>`:L}`}}}(o,r,n)}</div>
  <div class="tv">${function(t,e,n={},s=ft){if(0===s)return L;if(t!==dt.PRE&&t!==dt.IN)return L;const i=String(e.tv_network??"").trim();if(!i)return L;const o=i.split("/").map(t=>t.trim()),r=o.length>1,a=mt(i,"/").trim(),c=a.substring(0,s),l=a.length>s||r?`${c}>`:c,h=t===dt.IN?ee(n.live,zt,"indianred"):"#666",d=D`<span class="tv-badge" style="background:color-mix(in srgb, ${h} 75%, transparent)">${l}</span>`;if(r){const t=o.join(" · ");return D`<span class="tv-tooltip" data-tooltip="${t}">${d}</span>`}return d}(o,r,n,i)}</div>
</div>`}function $e(t){const e=t.visibleSections.map(([e,n])=>function(t,e,n,s={},i={}){const{carousel:o=!1,controls:r=L,highlightWinner:a=!0,tvBadge:c=ft,nameFormat:l="name",liveFirst:h=!1,blink:d}=i,{name:p}=t,u=Vt(t),g=r===L?D`<div class="section-header" style=${s.header?`color:${s.header}`:L}><span class="section-title">${p}</span></div>`:D`<div class="section-header has-controls" style=${s.header?`color:${s.header}`:L}><span class="section-title">${p}</span>${r}</div>`,f=pe(t,e,n,{liveFirst:h}).map(({entityId:t,special:n,opponentSpecial:i})=>_e(e[t],n,s,{opponentSpecial:i,...u&&d?.rowView(t,e)||{freshHome:!1,freshAway:!1},highlightWinner:a,tvBadge:c,nameFormat:l}));return f.length?D`${g}${f}`:o?D`${g}<div class="empty">No games found — check your section prefixes.</div>`:L}(n,t.states,t.trackedBySection.get(e),t.options.colors,{...t.options,carousel:t.carousel,controls:t.slideControls,blink:t.blink})),n=e.some(t=>t!==L);return D`
    ${me}
    <ha-card style=${t.haCardStyle||L}>
      ${t.versionBadge}
      ${null!==t.debugTableHtml?te(`<div id="sc-debug" style="position:absolute;bottom:0;left:0;right:0;z-index:10;background:rgba(0,0,0,0.5);color:#00e676;font-family:monospace;font-size:11px;line-height:1;padding:2px 6px;pointer-events:none;">${t.debugTableHtml}</div>`):L}
      ${n?e:D`<div class="empty">No games found — check your section prefixes.</div>`}
    </ha-card>
  `}class ve extends HTMLElement{_root;_carousel;_debug;_blink;_scheduler;constructor(){super(),this._root=this.attachShadow({mode:"open"}),this._carousel=new wt(()=>{this._hass&&this._config&&this._render()}),this._debug=new xt,this._blink=new vt,this._scheduler=new Yt({onRender:()=>this._render(),onDebug:t=>this._debug.track(t),onConfigured:()=>this._carousel.sync(),onDebugTick:()=>this._refreshDebugOverlay()})}get _config(){return this._scheduler.config}set _config(t){this._scheduler.config=t}get _hass(){return this._scheduler.hass}set _hass(t){this._scheduler.hass=t}setConfig(t){this._blink.clear(),this._carousel.configure(t),this._scheduler.configure(t)}set hass(t){this._scheduler.setHass(t)}_refreshDebugOverlay(){const t=this._root.querySelector("#sc-debug");t&&(t.innerHTML=this._debug.tableHtml())}connectedCallback(){this._scheduler.attach()}disconnectedCallback(){this._carousel.stop(),this._scheduler.detach(),this._blink.clear()}_layout(){return this._config?.layout??{}}_render(){try{const{sections:t,debug:e,show_version:n}=this._config,s=function(t){const e=t?.tv_badge,n=t?.name_format;return{tvBadge:"number"==typeof e&&e>=0?e:ft,nameFormat:"long_name"===n||"abbr"===n?n:"name",highlightWinner:t?.highlight_winner??!0,liveFirst:!0===t?.live_first,colors:t?.colors??{}}}(this._config),i=this._layout(),o=this._hass.states,r=Object.keys(o),a=this._scheduler.refreshTracked(r),c=bt();if(this._blink.update({states:o,trackedIds:a,blinkOnById:this._scheduler.blinkOnById,reducedMotion:c,onExpire:()=>{this._hass&&this._config&&this._render()}}),!Array.isArray(t)||!t.length)return void this._showError("Add at least one section to your card config.");e&&this._debug.track("rendered"),this._carousel.sync();const l=this._carousel.active,h=function(t,e,n){const{height:s,team_width:i,logo_width:o,score_width:r,colon_width:a,row_height:c,row_padding:l,font_scale:h}=t;let d="";if(n&&!s&&e.length){const t=Ft(c,l);d=`min-height:${Lt(e,n)*t}px;`}const p={[At]:i,[St]:o,[kt]:r,[Et]:a,[Ct]:c,[Tt]:l,[Ot]:null!=h&&1!==h?String(h):void 0},u=Object.entries(p).filter(([,t])=>t).map(([t,e])=>`${t}:${String(e)};`).join("");return`${d}${s?`height:${String(s)};min-height:${String(s)};max-height:${String(s)};overflow:hidden;`:""}${u}`}(i,t,l),d=function(t,e,n){if(!e)return Array.from(t.entries());const s=(n%t.length+t.length)%t.length;return[[s,t[s]]]}(t,l,this._carousel.index),p=n?D`<span id="sc-version" class="sc-version">v${"2.1.0"}</span>`:L,u=$e({states:o,trackedBySection:this._scheduler.trackedBySection,options:s,blink:this._blink,carousel:l,visibleSections:d,slideControls:this._carousel.controls(),haCardStyle:h,versionBadge:p,debugTableHtml:e?this._debug.tableHtml():null});it(u,this._root)}catch(t){this._showError(t.message),console.error("ha-teamtracker-scoreboard-card render error:",t)}}_showError(t){it(D`<ha-card>
        <div style="padding:12px;color:var(--error-color,red);font-size:13px;">
          <b>ha-teamtracker-scoreboard-card error:</b><br />${t}
        </div>
      </ha-card>`,this._root)}getCardSize(){const{height:t,row_height:e,row_padding:n}=this._layout(),s=Dt(t);if(null!==s)return Math.max(1,Math.ceil(s/50));const i=Lt(this._config?.sections??[],this._carousel.active),o=Ft(e,n);return Math.max(1,Math.ceil(i*o/50))}static getStubConfig(){return{sections:[{name:"NBA Scoreboard",prefix:"sensor.nba_",limit:10,special_teams:[]},{name:"NHL Scoreboard",prefix:"sensor.nhl_",limit:5,special_teams:[]}]}}}customElements.define("ha-teamtracker-scoreboard-card",ve),window.customCards=window.customCards||[],window.customCards.push({type:"ha-teamtracker-scoreboard-card",name:"TeamTracker Scoreboard Card",description:"Compact sports scoreboard powered by ha-teamtracker",preview:!1});export{ve as SportScoreboardCard};

/* Kumar patch part 2: clickable rows + ESPN game-detail card (tt-game-card).
   Tapping a scoreboard row fires browser_mod's ll-custom popup event with a
   tt-game-card configured from the row's ESPN event id. The detail card
   fetches ESPN's free summary API directly and re-fetches every 15s while
   the game is live (stops once final). Tabbed UI: Summary / Team Stats /
   Players / Plays; the header (logos + score) stays visible, the selected
   tab and scroll position survive live refreshes. No extra HA sensors. */
document.addEventListener('click', (ev) => {
  try {
    const path = ev.composedPath ? ev.composedPath() : [];
    const row = path.find(el => el && el.classList && el.classList.contains('game-row') && el.dataset && el.dataset.ev);
    if (!row) return;
    const detail = { browser_mod: { service: 'browser_mod.popup', data: {
      title: row.dataset.title || 'Game Details',
      content: { type: 'custom:tt-game-card', sport_path: row.dataset.sp, league_path: row.dataset.lp, event_id: row.dataset.ev },
      size: window.innerWidth < 700 ? 'fullscreen' : 'wide'
    } } };
    row.dispatchEvent(new CustomEvent('ll-custom', { bubbles: true, composed: true, detail }));
  } catch (e) { /* never break the board on a popup error */ }
});

class TtGameCard extends HTMLElement {
  setConfig(cfg) {
    cfg = cfg || {};
    if (cfg.event_id !== this._eventId) {
      this._eventId = cfg.event_id;
      this._tab = 'summary';
      this._loaded = false;
      this._hash = null;
      this._hasData = false;
      this._data = null;
    }
    this._cfg = cfg;
  }
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.addEventListener('click', (e) => {
        const b = e.target && e.target.closest ? e.target.closest('[data-tab]') : null;
        if (!b) return;
        this._tab = b.getAttribute('data-tab');
        if (this._data) this._render(this._data);
      });
    }
    if (!this._loaded) { this._loaded = true; this._renderShell('Loading game details…'); this._load(); }
    if (!this._timer) this._timer = setInterval(() => this._load(), 15000);
  }
  disconnectedCallback() { if (this._timer) { clearInterval(this._timer); this._timer = null; } }
  getCardSize() { return 12; }
  async _load() {
    const c = this._cfg || {};
    if (!c.event_id) { this._renderShell('No game selected.'); return; }
    try {
      const res = await fetch(`https://site.api.espn.com/apis/site/v2/sports/${c.sport_path}/${c.league_path}/summary?event=${c.event_id}`);
      if (!res.ok) throw new Error('http ' + res.status);
      const text = await res.text();
      let h = 0x811c9dc5;
      for (let i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 0x01000193); }
      const hash = (h >>> 0).toString(16) + ':' + text.length;
      if (hash === this._hash && this._hasData) return; // unchanged: leave DOM, tab and scroll untouched
      this._hash = hash;
      const data = JSON.parse(text);
      this._data = data;
      this._render(data);
      const st = data && data.header && data.header.competitions && data.header.competitions[0] &&
                 data.header.competitions[0].status && data.header.competitions[0].status.type &&
                 data.header.competitions[0].status.type.state;
      if (st === 'post' && this._timer) { clearInterval(this._timer); this._timer = null; }
    } catch (e) {
      if (!this._hasData) this._renderShell('Could not load game details. Check connection and reopen.');
    }
  }
  _esc(s) { return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  _renderShell(msg) {
    this.shadowRoot.innerHTML = `<style>${TtGameCard.CSS}</style><div class="wrap"><div class="msg">${this._esc(msg)}</div></div>`;
  }
  _scroller() {
    let el = this;
    while (el && el !== document.body) {
      el = el.parentElement || (el.getRootNode && el.getRootNode() ? el.getRootNode().host : null);
      if (!el) break;
      try {
        const cs = getComputedStyle(el);
        if (el.scrollHeight > el.clientHeight + 4 && /(auto|scroll)/.test(cs.overflowY)) return el;
      } catch (e) { /* keep walking */ }
    }
    return null;
  }
  _render(data) {
    // Preserve scroll: popup scroller (ancestor) + any horizontal table scrollers
    const sc = this._scroller();
    const scTop = sc ? sc.scrollTop : null;
    const hScrolls = this.shadowRoot ? [...this.shadowRoot.querySelectorAll('.scroll')].map(el => el.scrollLeft) : [];
    this._hasData = true;
    const E = (s) => this._esc(s);
    const comp = (data.header && data.header.competitions && data.header.competitions[0]) || {};
    const status = comp.status || {};
    const stType = status.type || {};
    const state = stType.state || 'pre';
    const comps = (comp.competitors || []).slice();
    const home = comps.find(x => x.homeAway === 'home') || comps[1] || {};
    const away = comps.find(x => x.homeAway === 'away') || comps[0] || {};
    const teamOf = (c) => c.team || {};
    const logoMap = {};
    ((data.boxscore && data.boxscore.teams) || []).forEach(t => { if (t.team && t.team.id) logoMap[t.team.id] = t.team.logo || ''; });
    (data.leaders || []).forEach(l => { if (l.team && l.team.id && l.team.logo) logoMap[l.team.id] = l.team.logo; });
    const logoOf = (c) => { const t = teamOf(c); if (t.logo) return t.logo; if (t.id && logoMap[t.id]) return logoMap[t.id];
      const ab = (t.abbreviation || '').toLowerCase(); const lg = (this._cfg.league_path || '').toLowerCase();
      return ab ? `https://a.espncdn.com/i/teamlogos/${lg}/500/${ab}.png` : ''; };
    const recOf = (c) => { const r = (c.records || []).find(x => x.type === 'total') || (c.records || [])[0]; return r ? r.summary : ''; };
    const clockLine = state === 'in'
      ? [stType.detail || stType.shortDetail || 'Live', status.displayClock ? `Q${status.period} · ${status.displayClock}` : ''].filter(Boolean).join(' — ')
      : (stType.detail || stType.shortDetail || '');
    const liveDot = state === 'in' ? '<span class="live">● LIVE</span> ' : '';
    const league = (this._cfg.league_path || '').toLowerCase();
    const isBaseball = league.includes('mlb') || league.includes('baseball');
    const isBasketball = league.includes('nba') || league.includes('basketball');

    let h = `<div class="wrap">`;
    h += `<div class="hd">
      <div class="side"><img src="${E(logoOf(away))}" alt=""><div class="nm">${E(teamOf(away).displayName || '')}</div><div class="rec">${E(recOf(away))}</div><div class="sc">${E(away.score ?? '')}</div></div>
      <div class="mid"><div class="st">${liveDot}${E(clockLine)}</div><div class="vs">${state === 'pre' ? 'vs' : ''}</div></div>
      <div class="side"><img src="${E(logoOf(home))}" alt=""><div class="nm">${E(teamOf(home).displayName || '')}</div><div class="rec">${E(recOf(home))}</div><div class="sc">${E(home.score ?? '')}</div></div>
    </div>`;
    const tabs = [['summary', 'Summary'], ['stats', 'Team Stats'], ['players', 'Players'], ['plays', 'Plays']];
    h += `<div class="tabs">${tabs.map(t => `<button class="tab${this._tab === t[0] ? ' on' : ''}" data-tab="${t[0]}">${t[1]}</button>`).join('')}</div>`;
    h += `<div class="panel">`;

    if (this._tab === 'summary') {
      const ls = (c) => c.linescores || [];
      if (ls(away).length || ls(home).length) {
        const n = Math.max(ls(away).length, ls(home).length);
        const heads = [];
        for (let i = 0; i < n; i++) {
          heads.push((ls(away)[i] && ls(away)[i].label) || (ls(home)[i] && ls(home)[i].label) || (isBaseball ? String(i + 1) : (i < 4 ? 'Q' + (i + 1) : 'OT' + (i > 4 ? i - 3 : ''))));
        }
        const rhe = (c) => {
          const t = (data.boxscore && data.boxscore.teams || []).find(x => x.team && x.team.id === teamOf(c).id);
          const get = (nm) => { const s = t && (t.statistics || []).find(x => x.name === nm); return s ? s.displayValue : ''; };
          return { r: c.score ?? '', hits: c.hits ?? get('hits'), err: c.errors ?? get('errors') };
        };
        h += `<div class="sec">Scoring</div><table class="tbl ls"><tr><th class="lft">Team</th>${heads.map(x => `<th>${E(x)}</th>`).join('')}<th class="tot">T</th>${isBaseball ? '<th class="tot">R</th><th>H</th><th>E</th>' : ''}</tr>`;
        for (const c of [away, home]) {
          const cells = []; for (let i = 0; i < n; i++) cells.push(ls(c)[i] ? ls(c)[i].displayValue : '–');
          const e = rhe(c);
          h += `<tr><td class="lft"><img class="mini" src="${E(logoOf(c))}" alt=""> ${E(teamOf(c).abbreviation || '')}</td>${cells.map(x => `<td>${E(x)}</td>`).join('')}<td class="tot">${E(c.score ?? '')}</td>${isBaseball ? `<td class="tot">${E(e.r)}</td><td>${E(e.hits)}</td><td>${E(e.err)}</td>` : ''}</tr>`;
        }
        h += `</table>`;
      }
      const venue = data.gameInfo && data.gameInfo.venue ? data.gameInfo.venue.fullName : '';
      const addr = data.gameInfo && data.gameInfo.venue && data.gameInfo.venue.address ? [data.gameInfo.venue.address.city, data.gameInfo.venue.address.state].filter(Boolean).join(', ') : '';
      const tv = (data.broadcasts || []).map(b => (b.names || []).join('/')).filter(Boolean).join(', ');
      const odds = (data.pickcenter || [])[0];
      const rows = [];
      if (venue) rows.push(['Venue', venue + (addr ? ` — ${addr}` : '')]);
      if (tv) rows.push(['TV', tv]);
      if (odds && odds.details) rows.push(['Line', odds.details + (odds.overUnder ? ` · O/U ${odds.overUnder}` : '')]);
      if (rows.length) h += `<div class="sec">Game Info</div><table class="tbl kv">${rows.map(r => `<tr><td class="lft k">${E(r[0])}</td><td class="lft">${E(r[1])}</td></tr>`).join('')}</table>`;
      if (state === 'pre') h += `<div class="note">Full box score and stats appear here once the game starts. This popup refreshes itself every 15 seconds during the game.</div>`;
      const leaders = data.leaders || [];
      const leaderRows = [];
      leaders.forEach(entry => {
        const tab = entry.team ? entry.team.abbreviation : '';
        (entry.leaders || []).forEach(cat => {
          const top = (cat.leaders || [])[0];
          if (top && top.athlete) leaderRows.push([tab, cat.displayName || cat.name || '', top.athlete.displayName || '', top.displayValue || '']);
        });
      });
      if (leaderRows.length) {
        h += `<div class="sec">Game Leaders</div><table class="tbl kv">${leaderRows.map(r => `<tr><td class="lft k">${E(r[0])}</td><td class="lft">${E(r[1])}</td><td class="lft b">${E(r[2])}</td><td class="rgt">${E(r[3])}</td></tr>`).join('')}</table>`;
      }
      if (!rows.length && !leaderRows.length && state !== 'pre') h += `<div class="note">Game details will appear here as they become available.</div>`;
    }

    if (this._tab === 'stats') {
      let built = '';
      if (isBaseball && state === 'pre') { built = ''; }
      else if (isBaseball) {
        const groups = (data.boxscore && data.boxscore.players) || [];
        const tot = (c, type, label) => {
          const g = groups.find(x => x.team && x.team.id === teamOf(c).id);
          const cat = g && (g.statistics || []).find(s => (s.type || s.name) === type);
          if (!cat) return '–';
          const i = (cat.labels || []).indexOf(label);
          return i >= 0 && cat.totals ? (cat.totals[i] ?? '–') : '–';
        };
        const rowsB = [['Runs', away.score ?? '', home.score ?? ''], ['Hits', away.hits ?? '', home.hits ?? ''], ['Errors', away.errors ?? '', home.errors ?? ''],
          ['Home Runs', tot(away, 'batting', 'HR'), tot(home, 'batting', 'HR')], ['RBIs', tot(away, 'batting', 'RBI'), tot(home, 'batting', 'RBI')],
          ['Walks (batting)', tot(away, 'batting', 'BB'), tot(home, 'batting', 'BB')], ['Strikeouts (batting)', tot(away, 'batting', 'K'), tot(home, 'batting', 'K')],
          ['Pitching Strikeouts', tot(away, 'pitching', 'K'), tot(home, 'pitching', 'K')], ['Pitching Walks', tot(away, 'pitching', 'BB'), tot(home, 'pitching', 'BB')]];
        built = `<table class="tbl ts"><tr><th class="lft">${E(teamOf(away).abbreviation || 'AWAY')}</th><th></th><th class="rgt">${E(teamOf(home).abbreviation || 'HOME')}</th></tr>` +
          rowsB.map(r => `<tr><td class="lft b">${E(r[1])}</td><td class="lab">${E(r[0])}</td><td class="rgt b">${E(r[2])}</td></tr>`).join('') + `</table>`;
      } else {
        const bt = (data.boxscore && data.boxscore.teams) || [];
        if (bt.length === 2) {
          const byId = {}; bt.forEach(t => { byId[t.team.id] = t; });
          const A = byId[teamOf(away).id], H = byId[teamOf(home).id];
          if (A && H) {
            const labels = [];
            (A.statistics || []).forEach(s => { if (s.displayValue !== undefined && !labels.find(l => l.name === s.name)) labels.push({ name: s.name, label: s.label || s.name }); });
            (H.statistics || []).forEach(s => { if (s.displayValue !== undefined && !labels.find(l => l.name === s.name)) labels.push({ name: s.name, label: s.label || s.name }); });
            const val = (t, nm) => { const s = (t.statistics || []).find(x => x.name === nm); return s ? s.displayValue : '–'; };
            if (labels.length) {
              built = `<table class="tbl ts"><tr><th class="lft">${E(teamOf(away).abbreviation || 'AWAY')}</th><th></th><th class="rgt">${E(teamOf(home).abbreviation || 'HOME')}</th></tr>` +
                labels.slice(0, 24).map(l => `<tr><td class="lft b">${E(val(A, l.name))}</td><td class="lab">${E(l.label)}</td><td class="rgt b">${E(val(H, l.name))}</td></tr>`).join('') + `</table>`;
            }
          }
        }
      }
      h += built ? `<div class="sec">${state === 'pre' ? 'Season Averages' : 'Team Stats'}</div>${built}` : `<div class="note">Team statistics appear here once the game is underway.</div>`;
    }

    if (this._tab === 'players') {
      const players = (data.boxscore && data.boxscore.players) || [];
      const catTitle = (nm) => ({ passing: 'Passing', rushing: 'Rushing', receiving: 'Receiving', fumbles: 'Fumbles', defensive: 'Defense', interceptions: 'Interceptions', kicking: 'Kicking', punting: 'Punting', kickReturns: 'Kick Returns', puntReturns: 'Punt Returns', batting: 'Batting', pitching: 'Pitching', boxscore: 'Box Score', scoring: 'Scoring' }[nm] || (nm ? nm.charAt(0).toUpperCase() + nm.slice(1) : 'Stats'));
      let any = false;
      players.forEach(group => {
        const t = group.team || {};
        (group.statistics || []).forEach(cat => {
          const athletes = cat.athletes || [];
          if (!athletes.length) return;
          any = true;
          const labels = cat.labels || [];
          h += `<div class="sec">${E(t.displayName || t.abbreviation || '')} — ${E(cat.name || cat.type ? catTitle(cat.name || cat.type) : ((cat.labels || [])[0] === 'MIN' ? 'Box Score' : 'Statistics'))}</div>`;
          h += `<div class="scroll"><table class="tbl ps"><tr><th class="lft">Player</th>${labels.map(l => `<th>${E(l)}</th>`).join('')}</tr>`;
          athletes.forEach(a => {
            const nm = (a.athlete && (a.athlete.displayName || a.athlete.shortName)) || '';
            const stats = a.stats || [];
            if (!stats.length) { h += `<tr><td class="lft">${E(nm)}</td><td colspan="${Math.max(labels.length, 1)}" class="lft dim">Did not play</td></tr>`; return; }
            h += `<tr><td class="lft nm2">${E(nm)}${a.starter ? ' •' : ''}</td>${labels.map((l, i) => `<td>${E(stats[i] ?? '')}</td>`).join('')}</tr>`;
          });
          if (cat.totals && cat.totals.length) h += `<tr class="totrow"><td class="lft">Total</td>${labels.map((l, i) => `<td>${E(cat.totals[i] ?? '')}</td>`).join('')}</tr>`;
          h += `</table></div>`;
        });
      });
      if (!any) h += `<div class="note">Player box scores appear here once the game is underway.</div>`;
    }

    if (this._tab === 'plays') {
      const pbp = (data.plays || []).filter(p => { const t = p.text || p.shortDescription || ''; return t && t !== 'None' && !t.startsWith('Pitch '); });
      const scoring = data.scoringPlays || [];
      if (pbp.length) {
        const scoringOnly = pbp.filter(p => p.scoringPlay);
        if (scoringOnly.length) {
          h += `<div class="sec">Scoring Plays</div><table class="tbl kv spt">${scoringOnly.map(p => {
            const per = p.period ? (p.period.displayValue || '') : '';
            const clk = p.clock && p.clock.displayValue ? p.clock.displayValue : '';
            return `<tr><td class="lft k">${E([per, clk].filter(Boolean).join(' '))}</td><td class="lft">${E(p.text || p.shortDescription || '')}</td><td class="rgt b">${E(p.awayScore ?? '')}–${E(p.homeScore ?? '')}</td></tr>`;
          }).join('')}</table>`;
        }
        const cap = isBaseball ? 300 : 120;
        const list = pbp.slice(-cap).reverse();
        h += `<div class="sec">Play-by-Play</div><div class="note2">Most recent first · scoring plays highlighted</div>`;
        list.forEach(p => {
          const per = p.period ? (p.period.displayValue || '') : '';
          const clk = p.clock && p.clock.displayValue ? p.clock.displayValue : '';
          const when = [per, clk].filter(Boolean).join(' · ');
          const txt = p.text || p.shortDescription || '';
          const score = (p.awayScore !== undefined && p.homeScore !== undefined) ? `${p.awayScore}–${p.homeScore}` : '';
          h += `<div class="pl${p.scoringPlay ? ' sc' : ''}"><div class="plw">${E(when)}</div><div class="plt">${E(txt)}</div>${p.scoringPlay ? `<div class="pls">${E(score)}</div>` : ''}</div>`;
        });
      } else if (scoring.length) {
        h += `<div class="sec">Scoring Plays</div><table class="tbl kv spt">${scoring.map(p => {
          const per = p.period ? (isBaseball ? 'Inn ' + p.period.number : 'Q' + p.period.number) : '';
          const clk = p.clock && p.clock.displayValue ? p.clock.displayValue : '';
          return `<tr><td class="lft k">${E([per, clk].filter(Boolean).join(' '))}</td><td class="lft">${E(p.text || '')}</td><td class="rgt b">${E(p.awayScore ?? '')}–${E(p.homeScore ?? '')}</td></tr>`;
        }).join('')}</table>`;
        const drives = data.drives && data.drives.previous ? data.drives.previous.slice().reverse() : [];
        if (drives.length) {
          h += `<div class="sec">Drive Summary</div>` + drives.slice(0, 16).map(d =>
            `<div class="pl"><div class="plt">${E(d.description || '')}</div><div class="pls2">${E(d.result || '')}</div></div>`).join('');
        }
      } else {
        h += `<div class="note">Play-by-play isn't available for this game yet — scoring plays and key events will show up here once ESPN publishes them, usually right after the game starts.</div>`;
      }
    }

    h += `<div class="foot">Data: ESPN · ${state === 'in' ? 'auto-refreshing every 15s · ' : ''}updated ${new Date().toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: 'numeric', minute: '2-digit', second: '2-digit' })} PT</div>`;
    h += `</div></div>`;
    this.shadowRoot.innerHTML = `<style>${TtGameCard.CSS}</style>${h}`;
    // Restore scroll positions after the DOM swap
    if (sc && scTop !== null) requestAnimationFrame(() => { try { sc.scrollTop = scTop; } catch (e) {} });
    if (hScrolls.length) {
      const now = this.shadowRoot.querySelectorAll('.scroll');
      hScrolls.forEach((v, i) => { if (now[i]) now[i].scrollLeft = v; });
    }
  }
}
TtGameCard.CSS = `
  :host { display: block; }
  .wrap { background: #0d1523; color: #eef4fb; border-radius: 18px; padding: 16px 14px 10px; font-family: -apple-system, 'Segoe UI', Roboto, sans-serif; }
  .msg { padding: 26px 8px; text-align: center; color: #8fb0d8; font-size: 14px; }
  .hd { display: flex; align-items: flex-start; justify-content: space-between; gap: 6px; }
  .side { flex: 1; text-align: center; min-width: 0; }
  .side img { width: 46px; height: 46px; object-fit: contain; }
  .nm { font-size: 14.5px; font-weight: 700; margin-top: 4px; line-height: 1.15; }
  .rec { font-size: 11px; color: #8fb0d8; margin-top: 1px; }
  .sc { font-size: 34px; font-weight: 800; margin-top: 2px; }
  .mid { flex: 0 0 86px; text-align: center; padding-top: 30px; }
  .st { font-size: 12px; color: #8fb0d8; line-height: 1.35; }
  .live { color: #ff5d5d; font-weight: 700; }
  .vs { font-size: 15px; color: #647d9e; font-weight: 700; }
  .tabs { display: flex; gap: 6px; margin: 14px 0 2px; }
  .tab { flex: 1 1 0; appearance: none; -webkit-appearance: none; border: 1px solid rgba(45,212,191,.22); background: rgba(45,212,191,.07); color: #8fb0d8; font-size: 12.5px; font-weight: 700; padding: 9px 2px; border-radius: 10px; cursor: pointer; font-family: inherit; }
  .tab.on { background: #2dd4bf; border-color: #2dd4bf; color: #052e2b; }
  .sec { margin: 16px 0 6px; font-size: 12px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase; color: #2dd4bf; }
  .tbl { width: 100%; border-collapse: collapse; font-size: 12.5px; }
  .tbl th { color: #647d9e; font-weight: 600; font-size: 11px; padding: 4px 5px; text-align: center; border-bottom: 1px solid rgba(45,212,191,.25); }
  .tbl td { padding: 4.5px 5px; text-align: center; border-bottom: 1px solid rgba(143,176,216,.12); color: #dbe7f5; }
  .tbl .lft { text-align: left; } .tbl .rgt { text-align: right; }
  .tbl .tot { font-weight: 800; color: #fff; }
  .tbl .b { font-weight: 700; color: #fff; }
  .tbl .lab { color: #8fb0d8; font-size: 11.5px; }
  .tbl .k { color: #8fb0d8; white-space: nowrap; width: 1%; }
  .tbl .nm2 { white-space: nowrap; font-weight: 600; color: #fff; }
  .tbl .dim { color: #647d9e; }
  .tbl .totrow td { font-weight: 700; color: #fff; border-top: 1px solid rgba(45,212,191,.35); }
  .mini { width: 16px; height: 16px; vertical-align: -3px; object-fit: contain; }
  .scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .note { margin-top: 14px; font-size: 12.5px; color: #8fb0d8; text-align: center; line-height: 1.5; padding: 0 6px; }
  .note2 { font-size: 11px; color: #647d9e; margin: -2px 0 6px; }
  .pl { display: flex; gap: 8px; align-items: baseline; padding: 6px 4px; border-bottom: 1px solid rgba(143,176,216,.10); }
  .pl.sc { background: rgba(45,212,191,.06); border-left: 3px solid #2dd4bf; padding-left: 6px; }
  .plw { flex: 0 0 74px; font-size: 10.5px; color: #647d9e; line-height: 1.3; }
  .plt { flex: 1; font-size: 12.5px; color: #dbe7f5; line-height: 1.4; min-width: 0; }
  .pl.sc .plt { color: #fff; font-weight: 600; }
  .pls { flex: none; font-size: 12px; font-weight: 800; color: #2dd4bf; }
  .pls2 { flex: none; font-size: 11px; font-weight: 700; color: #8fb0d8; text-transform: uppercase; }
  .tbl.spt td.rgt { white-space: nowrap; }
  .foot { margin-top: 14px; font-size: 10.5px; color: #647d9e; text-align: center; }
`;
if (!customElements.get('tt-game-card')) customElements.define('tt-game-card', TtGameCard);

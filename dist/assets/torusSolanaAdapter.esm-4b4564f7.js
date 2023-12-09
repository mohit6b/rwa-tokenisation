import{A as ie,_ as o,n as _,Q as x,R as M,S as $,T as se,q as K,U as re,V as oe,X as ae,F as ce,W as S,G as de,H as F,I as le,J as g,K as he,L as U,M as O,N as C,O as ue,P as z}from"./index-ec16bbbc.js";import{P as H,T as pe}from"./solanaProvider.esm-2e50dfdd.js";import{C as f,P as me,c as ge,a as b,b as W}from"./baseProvider.esm-72597f3e.js";import{d as fe,i as we}from"./index-dd51287f.js";import{B as _e}from"./baseSolanaAdapter.esm-260ca5a9.js";import"./nacl-fast-e944f0da.js";import"./util-7760e24a.js";var w={errors:{disconnected:()=>"Torus: Lost connection to Torus.",permanentlyDisconnected:()=>"Torus: Disconnected from iframe. Page reload required.",unsupportedSync:s=>"Torus: The Torus Ethereum provider does not support synchronous methods like ".concat(s," without a callback parameter."),invalidDuplexStream:()=>"Must provide a Node.js-style duplex stream.",invalidOptions:s=>"Invalid options. Received: { maxEventListeners: ".concat(s,"}"),invalidRequestArgs:()=>"Expected a single, non-array, object argument.",invalidRequestMethod:()=>"'args.method' must be a non-empty string.",invalidRequestParams:()=>"'args.params' must be an object or array if provided.",invalidLoggerObject:()=>"'args.logger' must be an object if provided.",invalidLoggerMethod:s=>"'args.logger' must include required method '".concat(s,"'.")},info:{connected:s=>'Torus: Connected to chain with ID "'.concat(s,'".')},warnings:{}};const ye={PRODUCTION:"production",DEVELOPMENT:"development",TESTING:"testing"},T={BOTTOM_LEFT:"bottom-left",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",TOP_RIGHT:"top-right"},q={GOOGLE:"google",FACEBOOK:"facebook",REDDIT:"reddit",DISCORD:"discord",TWITCH:"twitch",APPLE:"apple",LINE:"line",GITHUB:"github",KAKAO:"kakao",LINKEDIN:"linkedin",TWITTER:"twitter",WEIBO:"weibo",WECHAT:"wechat",EMAIL_PASSWORDLESS:"email_passwordless"},ve={en:{embed:{continue:"Continue",actionRequired:"Authorization required",pendingAction:"Click continue to proceed with your request in a popup",cookiesRequired:"Cookies Required",enableCookies:"Please enable cookies in your browser preferences to access Torus",clickHere:"More Info"}},de:{embed:{continue:"Fortsetzen",actionRequired:"Autorisierung erforderlich",pendingAction:"Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",cookiesRequired:"Cookies benötigt",enableCookies:"Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",clickHere:"Mehr Info"}},ja:{embed:{continue:"継続する",actionRequired:"認証が必要です",pendingAction:"続行をクリックして、ポップアップでリクエストを続行します",cookiesRequired:"必要なクッキー",enableCookies:"Torusにアクセスするには、ブラウザの設定でCookieを有効にしてください。",clickHere:"詳しくは"}},ko:{embed:{continue:"계속하다",actionRequired:"승인 필요",pendingAction:"팝업에서 요청을 진행하려면 계속을 클릭하십시오.",cookiesRequired:"쿠키 필요",enableCookies:"브라우저 환경 설정에서 쿠키를 활성화하여 Torus에 액세스하십시오.",clickHere:"더 많은 정보"}},zh:{embed:{continue:"继续",actionRequired:"需要授权",pendingAction:"单击继续以在弹出窗口中继续您的请求",cookiesRequired:"必填Cookie",enableCookies:"请在您的浏览器首选项中启用cookie以访问Torus。",clickHere:"更多信息"}}};var L={supportedVerifierList:[q.GOOGLE,q.REDDIT,q.DISCORD],api:"https://api.tor.us",translations:ve,prodTorusUrl:"",localStorageKey:"torus-".concat(window.location.hostname)},d=ie.getLogger("solana-embed");function Ee(){return(s,e,t)=>{(typeof s.method!="string"||!s.method)&&(e.error=_.ethErrors.rpc.invalidRequest({message:"The request 'method' must be a non-empty string.",data:s})),t(n=>{const{error:i}=e;return i&&d.error("Torus - RPC Error: ".concat(i.message),i),n()})}}function Ie(s,e,t){let n='Torus: Lost connection to "'.concat(s,'".');e!=null&&e.stack&&(n+=`
`.concat(e.stack)),d.warn(n),t&&t.listenerCount("error")>0&&t.emit("error",n)}const R=()=>Math.random().toString(36).slice(2),Q=async s=>{let e,t;switch(s){case"testing":e="https://solana-testing.tor.us",t="debug";break;case"development":e="http://localhost:8080",t="debug";break;default:e="https://solana.tor.us",t="error";break}return{torusUrl:e,logLevel:t}},Oe=()=>{let s=window.navigator.language||"en-US";const e=s.split("-");return s=Object.prototype.hasOwnProperty.call(L.translations,e[0])?e[0]:"en",s},be={height:660,width:375},Te={height:740,width:1315},Pe={height:700,width:1200},X={height:600,width:400};function Ae(s){let e;try{e=window[s];const t="__storage_test__";return e.setItem(t,t),e.removeItem(t),!0}catch(t){return t&&(t.code===22||t.code===1014||t.name==="QuotaExceededError"||t.name==="NS_ERROR_DOM_QUOTA_REACHED")&&e&&e.length!==0}}function P(s){let{width:e,height:t}=s;const n=window.screenLeft!==void 0?window.screenLeft:window.screenX,i=window.screenTop!==void 0?window.screenTop:window.screenY,r=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,a=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height,c=1,l=Math.abs((r-e)/2/c+n),h=Math.abs((a-t)/2/c+i);return"titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=".concat(t/c,",width=").concat(e/c,",top=").concat(h,",left=").concat(l)}class ee extends ${constructor(e,t){let{maxEventListeners:n=100,jsonRpcStreamName:i="provider"}=t;if(super(),o(this,"isTorus",void 0),o(this,"_rpcEngine",void 0),o(this,"jsonRpcConnectionEvents",void 0),o(this,"_state",void 0),!we.duplex(e))throw new Error(w.errors.invalidDuplexStream());this.isTorus=!0,this.setMaxListeners(n),this._handleConnect=this._handleConnect.bind(this),this._handleDisconnect=this._handleDisconnect.bind(this),this._handleStreamDisconnect=this._handleStreamDisconnect.bind(this),this._rpcRequest=this._rpcRequest.bind(this),this._initializeState=this._initializeState.bind(this),this.request=this.request.bind(this),this.sendAsync=this.sendAsync.bind(this);const r=new se;K(e,r,e,this._handleStreamDisconnect.bind(this,"Torus")),r.ignoreStream("phishing");const a=re();K(a.stream,r.createStream(i),a.stream,this._handleStreamDisconnect.bind(this,"Torus RpcProvider"));const c=new oe;c.push(ae()),c.push(Ee()),c.push(ge({origin:location.origin})),c.push(a.middleware),this._rpcEngine=c,this.jsonRpcConnectionEvents=a.events}async request(e){if(!e||typeof e!="object"||Array.isArray(e))throw _.ethErrors.rpc.invalidRequest({message:w.errors.invalidRequestArgs(),data:e});const{method:t,params:n}=e;if(typeof t!="string"||t.length===0)throw _.ethErrors.rpc.invalidRequest({message:w.errors.invalidRequestMethod(),data:e});if(n!==void 0&&!Array.isArray(n)&&(typeof n!="object"||n===null))throw _.ethErrors.rpc.invalidRequest({message:w.errors.invalidRequestParams(),data:e});return new Promise((i,r)=>{this._rpcRequest({method:t,params:n},x(i,r))})}send(e,t){this._rpcRequest(e,t)}sendAsync(e){return new Promise((t,n)=>{this._rpcRequest(e,x(t,n))})}_handleStreamDisconnect(e,t){Ie(e,t,this),this._handleDisconnect(!1,t?t.message:void 0)}}const Se=function(s,e,t){for(var n=arguments.length,i=new Array(n>3?n-3:0),r=3;r<n;r++)i[r-3]=arguments[r];const a=()=>{t(...i),s.removeEventListener(e,a)};s.addEventListener(e,a)};async function te(){return new Promise(s=>{document.readyState!=="loading"?s():Se(document,"DOMContentLoaded",s)})}const I=s=>{const e=window.document.createElement("template"),t=s.trim();return e.innerHTML=t,e.content.firstChild};class ne extends ${constructor(e){let{url:t,target:n,features:i}=e;super(),o(this,"url",void 0),o(this,"target",void 0),o(this,"features",void 0),o(this,"window",void 0),o(this,"windowTimer",void 0),o(this,"iClosedWindow",void 0),this.url=t,this.target=n||"_blank",this.features=i||P(Pe),this.window=void 0,this.windowTimer=void 0,this.iClosedWindow=!1,this._setupTimer()}_setupTimer(){this.windowTimer=Number(setInterval(()=>{this.window&&this.window.closed&&(clearInterval(this.windowTimer),this.iClosedWindow||this.emit("close"),this.iClosedWindow=!1,this.window=void 0),this.window===void 0&&clearInterval(this.windowTimer)},500))}open(){var e;return this.window=window.open(this.url.href,this.target,this.features),(e=this.window)!==null&&e!==void 0&&e.focus&&this.window.focus(),Promise.resolve()}close(){this.iClosedWindow=!0,this.window&&this.window.close()}redirect(e){e?window.location.replace(this.url.href):window.location.href=this.url.href}}function B(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable})),t.push.apply(t,n)}return t}function Ce(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?B(Object(t),!0).forEach(function(n){o(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}class D extends ee{constructor(e,t){let{maxEventListeners:n=100,jsonRpcStreamName:i="provider"}=t;super(e,{maxEventListeners:n,jsonRpcStreamName:i}),o(this,"embedTranslations",void 0),o(this,"torusUrl",void 0),o(this,"dappStorageKey",void 0),o(this,"windowRefs",void 0),o(this,"tryWindowHandle",void 0),o(this,"torusAlertContainer",void 0),o(this,"torusIframe",void 0),this._state=Ce({},D._defaultState),this.torusUrl="",this.dappStorageKey="";const r=L.translations[Oe()];this.embedTranslations=r.embed,this.windowRefs={},this.on("connect",()=>{this._state.isConnected=!0});const a=c=>{const{method:l,params:h}=c;if(l===b.IFRAME_STATUS){const{isFullScreen:p,rid:u}=h;this._displayIframe({isFull:p,rid:u})}else if(l===b.CREATE_WINDOW){const{windowId:p,url:u}=h;this._createPopupBlockAlert(p,u)}else if(l===b.CLOSE_WINDOW)this._handleCloseWindow(h);else if(l===b.USER_LOGGED_IN){const{currentLoginProvider:p}=h;this._state.isLoggedIn=!0,this._state.currentLoginProvider=p}else l===b.USER_LOGGED_OUT&&(this._state.isLoggedIn=!1,this._state.currentLoginProvider=null,this._displayIframe())};this.jsonRpcConnectionEvents.on("notification",a)}get isLoggedIn(){return this._state.isLoggedIn}get isIFrameFullScreen(){return this._state.isIFrameFullScreen}isConnected(){return this._state.isConnected}async _initializeState(e){try{const{torusUrl:t,dappStorageKey:n,torusAlertContainer:i,torusIframe:r}=e;this.torusUrl=t,this.dappStorageKey=n,this.torusAlertContainer=i,this.torusIframe=r,this.torusIframe.addEventListener("load",()=>{this._state.isIFrameFullScreen||this._displayIframe()});const{currentLoginProvider:a,isLoggedIn:c}=await this.request({method:f.GET_PROVIDER_STATE,params:[]});this._handleConnect(a,c)}catch(t){d.error("Torus: Failed to get initial state. Please report this bug.",t)}finally{d.info("initialized communication state"),this._state.initialized=!0,this.emit("_initialized")}}_handleWindow(e){let{url:t,target:n,features:i}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=new URL(t||"".concat(this.torusUrl,"/redirect?windowId=").concat(e));this.dappStorageKey&&(r.hash?r.hash+="&dappStorageKey=".concat(this.dappStorageKey):r.hash="#dappStorageKey=".concat(this.dappStorageKey));const a=new ne({url:r,target:n,features:i});if(a.open(),!a.window){this._createPopupBlockAlert(e,r.href);return}this.windowRefs[e]=a,this.request({method:f.OPENED_WINDOW,params:{windowId:e}}),a.once("close",()=>{delete this.windowRefs[e],this.request({method:f.CLOSED_WINDOW,params:{windowId:e}})})}_displayIframe(){let{isFull:e=!1,rid:t=""}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={};if(e)n.display="block",n.width="100%",n.height="100%",n.top="0px",n.right="0px",n.left="0px",n.bottom="0px";else switch(n.display=this._state.torusWidgetVisibility?"block":"none",n.height="70px",n.width="70px",this._state.buttonPosition){case T.TOP_LEFT:n.top="0px",n.left="0px",n.right="auto",n.bottom="auto";break;case T.TOP_RIGHT:n.top="0px",n.right="0px",n.left="auto",n.bottom="auto";break;case T.BOTTOM_RIGHT:n.bottom="0px",n.right="0px",n.top="auto",n.left="auto";break;case T.BOTTOM_LEFT:default:n.bottom="0px",n.left="0px",n.top="auto",n.right="auto";break}Object.assign(this.torusIframe.style,n),this._state.isIFrameFullScreen=e,this.request({method:f.IFRAME_STATUS,params:{isIFrameFullScreen:e,rid:t}})}hideTorusButton(){this._state.torusWidgetVisibility=!1,this._displayIframe()}showTorusButton(){this._state.torusWidgetVisibility=!0,this._displayIframe()}_rpcRequest(e,t){const n=t,i=e;Array.isArray(i)||i.jsonrpc||(i.jsonrpc="2.0"),this.tryWindowHandle(i,n)}_handleConnect(e,t){this._state.isConnected||(this._state.isConnected=!0,this.emit("connect",{currentLoginProvider:e,isLoggedIn:t}),d.debug(w.info.connected(e)))}_handleDisconnect(e,t){if(this._state.isConnected||!this._state.isPermanentlyDisconnected&&!e){this._state.isConnected=!1;let n;e?(n=new _.EthereumRpcError(1013,t||w.errors.disconnected()),d.debug(n)):(n=new _.EthereumRpcError(1011,t||w.errors.permanentlyDisconnected()),d.error(n),this._state.currentLoginProvider=null,this._state.isLoggedIn=!1,this._state.torusWidgetVisibility=!1,this._state.isIFrameFullScreen=!1,this._state.isPermanentlyDisconnected=!0),this.emit("disconnect",n)}}_handleCloseWindow(e){const{windowId:t}=e;this.windowRefs[t]&&(this.windowRefs[t].close(),delete this.windowRefs[t])}async _createPopupBlockAlert(e,t){const n=this.getLogoUrl(),i=I('<div id="torusAlert" class="torus-alert--v2">'+'<div id="torusAlert__logo"><img src="'.concat(n,'" /></div>')+"<div>"+'<h1 id="torusAlert__title">'.concat(this.embedTranslations.actionRequired,"</h1>")+'<p id="torusAlert__desc">'.concat(this.embedTranslations.pendingAction,"</p>")+"</div></div>"),r=I('<div><a id="torusAlert__btn">'.concat(this.embedTranslations.continue,"</a></div>")),a=I('<div id="torusAlert__btn-container"></div>');a.appendChild(r),i.appendChild(a);const c=()=>{r.addEventListener("click",()=>{this._handleWindow(e,{url:t,target:"_blank",features:P(X)}),i.remove(),this.torusAlertContainer.children.length===0&&(this.torusAlertContainer.style.display="none")})},l=()=>{this.torusAlertContainer.appendChild(i)};await te(),l(),c(),this.torusAlertContainer.style.display="block"}getLogoUrl(){return"".concat(this.torusUrl,"/images/torus_icon-blue.svg")}}o(D,"_defaultState",{buttonPosition:"bottom-left",currentLoginProvider:null,isIFrameFullScreen:!1,hasEmittedConnection:!1,torusWidgetVisibility:!1,initialized:!1,isLoggedIn:!1,isPermanentlyDisconnected:!1,isConnected:!1});function G(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable})),t.push.apply(t,n)}return t}function Re(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?G(Object(t),!0).forEach(function(n){o(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}class N extends ee{constructor(e,t){let{maxEventListeners:n=100,jsonRpcStreamName:i="provider"}=t;super(e,{maxEventListeners:n,jsonRpcStreamName:i}),o(this,"chainId",void 0),o(this,"selectedAddress",void 0),o(this,"tryWindowHandle",void 0),this._state=Re({},N._defaultState),this.selectedAddress=null,this.chainId=null,this._handleAccountsChanged=this._handleAccountsChanged.bind(this),this._handleChainChanged=this._handleChainChanged.bind(this),this._handleUnlockStateChanged=this._handleUnlockStateChanged.bind(this),this.on("connect",()=>{this._state.isConnected=!0});const r=a=>{const{method:c,params:l}=a;c===W.ACCOUNTS_CHANGED?this._handleAccountsChanged(l):c===W.UNLOCK_STATE_CHANGED?this._handleUnlockStateChanged(l):c===W.CHAIN_CHANGED&&this._handleChainChanged(l)};this.jsonRpcConnectionEvents.on("notification",r)}isConnected(){return this._state.isConnected}async _initializeState(){try{const{accounts:e,chainId:t,isUnlocked:n}=await this.request({method:me.GET_PROVIDER_STATE,params:[]});this.emit("connect",{chainId:t}),this._handleChainChanged({chainId:t}),this._handleUnlockStateChanged({accounts:e,isUnlocked:n}),this._handleAccountsChanged(e)}catch(e){d.error("Torus: Failed to get initial state. Please report this bug.",e)}finally{d.info("initialized provider state"),this._state.initialized=!0,this.emit("_initialized")}}_rpcRequest(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=t;const r=e;if(!Array.isArray(r)){if(r.jsonrpc||(r.jsonrpc="2.0"),r.method==="solana_accounts"||r.method==="solana_requestAccounts")i=(a,c)=>{this._handleAccountsChanged(c.result||[],r.method==="solana_accounts",n),t(a,c)};else if(r.method==="wallet_getProviderState"){this._rpcEngine.handle(e,i);return}}this.tryWindowHandle(r,i)}_handleConnect(e){this._state.isConnected||(this._state.isConnected=!0,this.emit("connect",{chainId:e}),d.debug(w.info.connected(e)))}_handleDisconnect(e,t){if(this._state.isConnected||!this._state.isPermanentlyDisconnected&&!e){this._state.isConnected=!1;let n;e?(n=new _.EthereumRpcError(1013,t||w.errors.disconnected()),d.debug(n)):(n=new _.EthereumRpcError(1011,t||w.errors.permanentlyDisconnected()),d.error(n),this.chainId=null,this._state.accounts=null,this.selectedAddress=null,this._state.isUnlocked=!1,this._state.isPermanentlyDisconnected=!0),this.emit("disconnect",n)}}_handleAccountsChanged(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=e;Array.isArray(i)||(d.error("Torus: Received non-array accounts parameter. Please report this bug.",i),i=[]);for(const r of e)if(typeof r!="string"){d.error("Torus: Received non-string account. Please report this bug.",e),i=[];break}fe(this._state.accounts,i)||(t&&Array.isArray(this._state.accounts)&&this._state.accounts.length>0&&!n&&d.error('Torus: "solana_accounts" unexpectedly updated accounts. Please report this bug.',i),this._state.accounts=i,this.emit("accountsChanged",i)),this.selectedAddress!==i[0]&&(this.selectedAddress=i[0]||null)}_handleChainChanged(){let{chainId:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!e){d.error("Torus: Received invalid network parameters. Please report this bug.",{chainId:e});return}e==="loading"?this._handleDisconnect(!0):(this._handleConnect(e),e!==this.chainId&&(this.chainId=e,this._state.initialized&&this.emit("chainChanged",this.chainId)))}_handleUnlockStateChanged(){let{accounts:e,isUnlocked:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof t!="boolean"){d.error("Torus: Received invalid isUnlocked parameter. Please report this bug.",{isUnlocked:t});return}t!==this._state.isUnlocked&&(this._state.isUnlocked=t,this._handleAccountsChanged(e||[]))}}o(N,"_defaultState",{accounts:null,isConnected:!1,isUnlocked:!1,initialized:!1,isPermanentlyDisconnected:!1,hasEmittedConnection:!1});function V(s){return new Promise((e,t)=>{try{const n=document.createElement("img");n.onload=()=>e(!0),n.onerror=()=>e(!1),n.src=s}catch(n){t(n)}})}const Le=s=>{const{document:e}=s,t=e.querySelector('head > meta[property="og:site_name"]');if(t)return t.content;const n=e.querySelector('head > meta[name="title"]');return n?n.content:e.title&&e.title.length>0?e.title:s.location.hostname};async function De(s){try{const{document:e}=s;let t=e.querySelector('head > link[rel="shortcut icon"]');return t&&await V(t.href)||(t=Array.from(e.querySelectorAll('head > link[rel="icon"]')).find(n=>!!n.href),t&&await V(t.href))?t.href:""}catch{return""}}const Ne=async()=>({name:Le(window),icon:await De(window)});function Y(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable})),t.push.apply(t,n)}return t}function j(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Y(Object(t),!0).forEach(function(n){o(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}const{version:ke}=require("../package.json"),Ue=["send_transaction","sign_transaction","sign_all_transactions","sign_message","connect"],We=[f.SET_PROVIDER],qe=Ae("localStorage");(async function(){try{if(typeof document>"u")return;const e=document.createElement("link"),{torusUrl:t}=await Q("production");e.href="".concat(t,"/frame"),e.crossOrigin="anonymous",e.type="text/html",e.rel="prefetch",e.relList&&e.relList.supports&&e.relList.supports("prefetch")&&document.head.appendChild(e)}catch(e){d.warn(e)}})();class je{constructor(){let{modalZIndex:e=99999}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};o(this,"isInitialized",void 0),o(this,"torusAlert",void 0),o(this,"modalZIndex",void 0),o(this,"alertZIndex",void 0),o(this,"requestedLoginProvider",void 0),o(this,"provider",void 0),o(this,"communicationProvider",void 0),o(this,"dappStorageKey",void 0),o(this,"torusAlertContainer",void 0),o(this,"torusUrl",void 0),o(this,"torusIframe",void 0),o(this,"styleLink",void 0),this.torusUrl="",this.isInitialized=!1,this.requestedLoginProvider=null,this.modalZIndex=e,this.alertZIndex=e+1e3,this.dappStorageKey=""}get isLoggedIn(){return this.communicationProvider?this.communicationProvider.isLoggedIn:!1}async init(){let{buildEnv:e=ye.PRODUCTION,enableLogging:t=!1,network:n,showTorusButton:i=!1,useLocalStorage:r=!1,buttonPosition:a=T.BOTTOM_LEFT,apiKey:c="torus-default",extraParams:l={}}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(this.isInitialized)throw new Error("Already initialized");ce(c);const{torusUrl:h,logLevel:p}=await Q(e);d.enableAll(),d.info(h,"url loaded"),d.info("Solana Embed Version :".concat(ke)),this.torusUrl=h,d.setDefaultLevel(p),t?d.enableAll():d.disableAll();const u=this.handleDappStorageKey(r),m=new URL(h);m.pathname.endsWith("/")?m.pathname+="frame":m.pathname+="/frame";const v=new URLSearchParams;u&&v.append("dappStorageKey",u),v.append("origin",window.location.origin),m.hash=v.toString(),this.torusIframe=I(`<iframe
        id="torusIframe"
        class="torusIframe"
        src="`.concat(m.href,`"
        style="display: none; position: fixed; top: 0; right: 0; width: 100%;
        height: 100%; border: none; border-radius: 0; z-index: `).concat(this.modalZIndex.toString(),`"
      ></iframe>`)),this.torusAlertContainer=I('<div id="torusAlertContainer" style="display:none; z-index: '.concat(this.alertZIndex.toString(),'"></div>')),this.styleLink=I('<link href="'.concat(h,'/css/widget.css" rel="stylesheet" type="text/css">'));const E=async()=>new Promise((k,A)=>{try{window.document.head.appendChild(this.styleLink),window.document.body.appendChild(this.torusIframe),window.document.body.appendChild(this.torusAlertContainer),this.torusIframe.addEventListener("load",async()=>{const y=await Ne();this.torusIframe.contentWindow.postMessage({buttonPosition:a,apiKey:c,network:n,dappMetadata:y,extraParams:l},m.origin),await this._setupWeb3({torusUrl:h}),i?this.showTorusButton():this.hideTorusButton(),this.isInitialized=!0,window.torus=this,k()})}catch(y){A(y)}});await te(),await E()}async login(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!this.isInitialized)throw new Error("Call init() first");try{this.requestedLoginProvider=e.loginProvider||null,this.requestedLoginProvider||this.communicationProvider._displayIframe({isFull:!0});const t=await new Promise((n,i)=>{this.provider._rpcRequest({method:"solana_requestAccounts",params:[this.requestedLoginProvider,e.login_hint]},x(n,i))});if(Array.isArray(t)&&t.length>0)return t;throw new Error("Login failed")}catch(t){throw d.error("login failed",t),t}finally{this.communicationProvider.isIFrameFullScreen&&this.communicationProvider._displayIframe()}}async loginWithPrivateKey(e){if(!this.isInitialized)throw new Error("Call init() first");const{privateKey:t,userInfo:n}=e,{success:i}=await this.communicationProvider.request({method:"login_with_private_key",params:{privateKey:t,userInfo:n}});if(!i)throw new Error("Login Failed")}async logout(){if(!this.communicationProvider.isLoggedIn)throw new Error("Not logged in");await this.communicationProvider.request({method:f.LOGOUT,params:[]}),this.requestedLoginProvider=null}async cleanUp(){this.communicationProvider.isLoggedIn&&await this.logout(),this.clearInit()}clearInit(){function e(t){return t instanceof Element||t instanceof Document}e(this.styleLink)&&window.document.body.contains(this.styleLink)&&(this.styleLink.remove(),this.styleLink=void 0),e(this.torusIframe)&&window.document.body.contains(this.torusIframe)&&(this.torusIframe.remove(),this.torusIframe=void 0),e(this.torusAlertContainer)&&window.document.body.contains(this.torusAlertContainer)&&(this.torusAlert=void 0,this.torusAlertContainer.remove(),this.torusAlertContainer=void 0),this.isInitialized=!1}hideTorusButton(){this.communicationProvider.hideTorusButton()}showTorusButton(){this.communicationProvider.showTorusButton()}async setProvider(e){await this.communicationProvider.request({method:f.SET_PROVIDER,params:j({},e)})}async showWallet(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=await this.communicationProvider.request({method:f.WALLET_INSTANCE_ID,params:[]}),i=e?"/".concat(e):"",r=new URL("".concat(this.torusUrl,"/wallet").concat(i));r.searchParams.append("instanceId",n),Object.keys(t).forEach(c=>{r.searchParams.append(c,t[c])}),this.dappStorageKey&&(r.hash="#dappStorageKey=".concat(this.dappStorageKey)),new ne({url:r,features:P(Te)}).open()}async getUserInfo(){return await this.communicationProvider.request({method:f.USER_INFO,params:[]})}async initiateTopup(e,t){if(!this.isInitialized)throw new Error("Torus is not initialized");const n=R();return this.communicationProvider._handleWindow(n),await this.communicationProvider.request({method:f.TOPUP,params:{provider:e,params:t,windowId:n}})}async getAccounts(){return await this.provider.request({method:"getAccounts",params:[]})}async sendTransaction(e){return await this.provider.request({method:"send_transaction",params:{message:e.serialize({requireAllSignatures:!1}).toString("hex")}})}async signTransaction(e){const t=await this.provider.request({method:"sign_transaction",params:{message:e.serializeMessage().toString("hex"),messageOnly:!0}}),n=JSON.parse(t),i={publicKey:new H(n.publicKey),signature:Buffer.from(n.signature,"hex")};return e.addSignature(i.publicKey,i.signature),e}async signAllTransactions(e){const t=e.map(r=>r.serializeMessage().toString("hex")),i=(await this.provider.request({method:"sign_all_transactions",params:{message:t,messageOnly:!0}})).map(r=>{const a=JSON.parse(r);return{publicKey:new H(a.publicKey),signature:Buffer.from(a.signature,"hex")}});return e.forEach((r,a)=>(r.addSignature(i[a].publicKey,i[a].signature),r)),e}async signMessage(e){return await this.provider.request({method:"sign_message",params:{data:e}})}async getGaslessPublicKey(){return await this.provider.request({method:"get_gasless_public_key",params:[]})}handleDappStorageKey(e){let t="";if(qe&&e){const n=window.localStorage.getItem(L.localStorageKey);if(n)t=n;else{const i="torus-app-".concat(R());window.localStorage.setItem(L.localStorageKey,i),t=i}}return this.dappStorageKey=t,t}async _setupWeb3(e){d.info("setupWeb3 running");const t=new M({name:"embed_torus",target:"iframe_torus",targetWindow:this.torusIframe.contentWindow}),n=new M({name:"embed_communication",target:"iframe_communication",targetWindow:this.torusIframe.contentWindow}),i=new N(t,{}),r=new D(n,{});i.tryWindowHandle=(h,p)=>{const u=h;if(!Array.isArray(u)&&Ue.includes(u.method)){if(!this.communicationProvider.isLoggedIn)throw new Error("User Not Logged In");const m=R();r._handleWindow(m,{target:"_blank",features:P(X)}),u.windowId=m}i._rpcEngine.handle(u,p)},r.tryWindowHandle=(h,p)=>{const u=h;if(!Array.isArray(u)&&We.includes(u.method)){const m=R();r._handleWindow(m,{target:"_blank",features:P(be)}),u.params.windowId=m}r._rpcEngine.handle(u,p)};const a=h=>{const p=i[h],u=this;i[h]=function(v,E){const{method:k,params:A=[]}=v;if(k==="solana_requestAccounts"){if(!E)return u.login({loginProvider:A[0]});u.login({loginProvider:A[0]}).then(y=>E(null,y)).catch(y=>E(y))}return p.apply(this,[v,E])}};a("request"),a("sendAsync"),a("send");const c=new Proxy(i,{deleteProperty:()=>!0}),l=new Proxy(r,{deleteProperty:()=>!0});this.provider=c,this.communicationProvider=l,await Promise.all([i._initializeState(),r._initializeState(j(j({},e),{},{dappStorageKey:this.dappStorageKey,torusAlertContainer:this.torusAlertContainer,torusIframe:this.torusIframe}))]),d.debug("Torus - injected provider")}}function Z(s,e){var t=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable})),t.push.apply(t,n)}return t}function J(s){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Z(Object(t),!0).forEach(function(n){o(s,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach(function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(t,n))})}return s}class Ge extends _e{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(),o(this,"name",S.TORUS_SOLANA),o(this,"adapterNamespace",de.SOLANA),o(this,"currentChainNamespace",F.SOLANA),o(this,"type",le.EXTERNAL),o(this,"status",g.NOT_READY),o(this,"torusInstance",null),o(this,"torusWalletOptions",void 0),o(this,"initParams",void 0),o(this,"loginSettings",{}),o(this,"solanaProvider",null),o(this,"rehydrated",!1),this.torusWalletOptions=e.adapterSettings||{},this.initParams=e.initParams||{},this.loginSettings=e.loginSettings||{},this.chainConfig=e.chainConfig||null,this.sessionTime=e.sessionTime||86400}get provider(){if(this.status===g.CONNECTED&&this.solanaProvider){var e;return((e=this.solanaProvider)===null||e===void 0?void 0:e.provider)||null}return null}set provider(e){throw new Error("Not implemented")}async init(e){super.checkInitializationRequirements();let t;if(this.chainConfig){const{chainId:n,blockExplorer:i,displayName:r,rpcTarget:a,ticker:c,tickerName:l}=this.chainConfig;t={chainId:n,rpcTarget:a,blockExplorerUrl:i,displayName:r,tickerName:l,ticker:c,logo:""}}else{this.chainConfig=he(F.SOLANA,"0x1");const{blockExplorer:n,displayName:i,ticker:r,tickerName:a,rpcTarget:c,chainId:l}=this.chainConfig;t={chainId:l,rpcTarget:c,blockExplorerUrl:n,displayName:i,ticker:r,tickerName:a,logo:""}}this.torusInstance=new je(this.torusWalletOptions),U.debug("initializing torus solana adapter init"),await this.torusInstance.init(J(J({showTorusButton:!1},this.initParams),{},{network:t})),this.solanaProvider=new pe({config:{chainConfig:this.chainConfig}}),this.status=g.READY,this.emit(O.READY,S.TORUS_SOLANA);try{U.debug("initializing torus solana adapter"),e.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(n){U.error("Failed to connect with cached torus solana provider",n),this.emit(O.ERRORED,n)}}async connect(){if(super.checkConnectionRequirements(),!this.torusInstance)throw C.notReady("Torus wallet is not initialized");if(!this.solanaProvider)throw C.notReady("Torus wallet is not initialized");this.status=g.CONNECTING,this.emit(O.CONNECTING,{adapter:S.TORUS_SOLANA});try{await this.torusInstance.login(this.loginSettings);try{const e=this.torusInstance.provider;e.sendTransaction=this.torusInstance.sendTransaction.bind(this.torusInstance),e.signAllTransactions=this.torusInstance.signAllTransactions.bind(this.torusInstance),e.signMessage=this.torusInstance.signMessage.bind(this.torusInstance),e.signTransaction=this.torusInstance.signTransaction.bind(this.torusInstance),await this.solanaProvider.setupProvider(e)}catch(e){if(e instanceof ue&&e.code===5010){const{chainId:t,blockExplorer:n,displayName:i,rpcTarget:r,ticker:a,tickerName:c}=this.chainConfig,l={chainId:t,rpcTarget:r,blockExplorerUrl:n,displayName:i,tickerName:c,ticker:a,logo:""};await this.torusInstance.setProvider(l)}else throw e}return this.status=g.CONNECTED,this.torusInstance.showTorusButton(),this.emit(g.CONNECTED,{adapter:S.TORUS_SOLANA,reconnected:this.rehydrated}),this.provider}catch(e){throw this.status=g.READY,this.rehydrated=!1,this.emit(O.ERRORED,e),z.connectionError("Failed to login with torus solana wallet")}}async disconnect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{cleanup:!1};if(!this.torusInstance)throw C.notReady("Torus wallet is not initialized");await super.disconnect(),await this.torusInstance.logout(),e.cleanup?(this.status=g.NOT_READY,this.torusInstance=null,this.solanaProvider=null):this.status=g.READY,this.emit(O.DISCONNECTED)}async getUserInfo(){if(this.status!==g.CONNECTED)throw z.notConnectedError("Not connected with wallet");if(!this.torusInstance)throw C.notReady("Torus wallet is not initialized");return await this.torusInstance.getUserInfo()}setAdapterSettings(e){this.status!==g.READY&&e!=null&&e.sessionTime&&(this.sessionTime=e.sessionTime)}}export{Ge as SolanaWalletAdapter};

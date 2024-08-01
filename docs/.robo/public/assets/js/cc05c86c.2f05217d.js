/*! For license information please see cc05c86c.2f05217d.js.LICENSE.txt */
"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[6700],{7844:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>h,toc:()=>u});var t=s(5893),i=s(1151),o=s(7294);const n=e=>{const{from:r,to:s}=e;return o.createElement("div",{className:"beforeAfter"},o.createElement("p",{className:"beforeAfterContent"},r),o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:16,height:16,className:"beforeAfterArrow"},o.createElement("title",null,"arrow-down-bold"),o.createElement("path",{d:"M9,4H15V12H19.84L12,19.84L4.16,12H9V4Z"})),o.createElement("p",{className:"beforeAfterContent"},s))};var a=s(5396),c=s(352);const d={description:"Learn how to make external network requests in your Discord Activity in a way compatible with the Discord Proxy.",image:"https://preview.robojs.dev?path=/discord-activities/proxy"},l="\ud83d\udee1\ufe0f Discord Proxy",h={id:"discord-activities/proxy",title:"\ud83d\udee1\ufe0f Discord Proxy",description:"Learn how to make external network requests in your Discord Activity in a way compatible with the Discord Proxy.",source:"@site/docs/discord-activities/proxy.mdx",sourceDirName:"discord-activities",slug:"/discord-activities/proxy",permalink:"/discord-activities/proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/discord-activities/proxy.mdx",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1720235282e3,frontMatter:{description:"Learn how to make external network requests in your Discord Activity in a way compatible with the Discord Proxy.",image:"https://preview.robojs.dev?path=/discord-activities/proxy"},sidebar:"tutorialSidebar",previous:{title:"\u2728 Getting Started",permalink:"/discord-activities/getting-started"},next:{title:"\u2694\ufe0f Multiplayer",permalink:"/discord-activities/multiplayer"}},p={},u=[{value:"Content Security Policy (CSP)",id:"content-security-policy-csp",level:2},{value:"Fetching External Resources",id:"fetching-external-resources",level:2},{value:"URL Mapping",id:"url-mapping",level:3},{value:"URL Patching",id:"url-patching",level:3},{value:"Proxying Requests",id:"proxying-requests",level:3},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Network Limitations",id:"network-limitations",level:2},{value:"Additional Resources",id:"additional-resources",level:2}];function x(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"\ufe0f-discord-proxy",children:"\ud83d\udee1\ufe0f Discord Proxy"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./client",children:"Client"})})," network requests made by your ",(0,t.jsx)(r.strong,{children:"Discord Activity"}),' are "sandboxed" through ',(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://discord.com/developers/docs/activities/development-guides#activity-proxy-considerations",children:"Discord's Proxy"})}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["That means you cannot directly make network requests to ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"#external-resources",children:"external URLs"})})," from it for security reasons. You may have seen this if you've tried using iframes. There are also ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"#network-limitations",children:"limitations"})})," to what network protocols you can use."]}),"\n",(0,t.jsx)(r.h2,{id:"content-security-policy-csp",children:"Content Security Policy (CSP)"}),"\n",(0,t.jsxs)(r.p,{children:["Ever tried to load a URL from an external resource and got a ",(0,t.jsx)(r.code,{children:"blocked:csp"})," error? That's the ",(0,t.jsx)(r.strong,{children:"Discord Proxy"})," doing its job."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",children:"Content Security Policy (CSP)"})})," is a security feature that helps prevent ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://owasp.org/www-community/attacks/xss/",children:"cross-site scripting (XSS)"})})," attacks. It restricts what can load, such as scripts, styles, and images. ",(0,t.jsx)(r.strong,{children:"Discord"})," trusts only you ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://discord.com/developers/docs/activities/development-guides#exceptions",children:"and itself"})}),". It will throw ",(0,t.jsx)(r.strong,{children:"CSP"})," errors at everyone else."]}),"\n",(0,t.jsx)(r.p,{children:"It may be a pain, but it's for your own good."}),"\n",(0,t.jsx)(r.h2,{id:"fetching-external-resources",children:"Fetching External Resources"}),"\n",(0,t.jsxs)(r.p,{children:["You can friend the ",(0,t.jsx)(r.strong,{children:"Discord Proxy"})," by using ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"#url-mapping",children:"URL Mappings"})}),", ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://github.com/discord/embedded-app-sdk/blob/main/patch-url-mappings.md",children:"patching URLs"})}),", or ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"#proxying-requests",children:"proxying requests"})}),"."]}),"\n",(0,t.jsx)(c._,{children:(0,t.jsx)(a.Z,{href:"https://discord.com/developers/applications",title:"\ud83d\udd17 Discord Developer Portal",description:"Find it under your app's URL Mappings."})}),"\n",(0,t.jsx)(r.h3,{id:"url-mapping",children:"URL Mapping"}),"\n",(0,t.jsxs)(r.p,{children:["Mapping URLs is a way to tell the ",(0,t.jsx)(r.strong,{children:"Discord Proxy"})," to allow certain external resources. You can map a URL to a specific path in the ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://discord.com/developers/applications",children:"Discord Developer Portal"})}),". This is the recommended way to allow external resources you need in your ",(0,t.jsx)(r.strong,{children:"Discord Activity"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Let's say you need to load something from ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://github.com",children:"GitHub"})}),". You can map it to a path like ",(0,t.jsx)(r.code,{children:"/github"})," and ",(0,t.jsx)(r.code,{children:"/assets"}),"."]}),"\n",(0,t.jsx)(n,{from:"/github",to:"https://github.com"}),"\n",(0,t.jsx)(n,{from:"/assets",to:"https://raw.githubusercontent.com/Wave-Play/robo.js/main"}),"\n",(0,t.jsx)(r.p,{children:"This configuration maps URLs you can use in your activity like so:"}),"\n",(0,t.jsx)(n,{from:"/github/Wave-Play/robo.js",to:"https://github.com/Wave-Play/robo.js"}),"\n",(0,t.jsx)(n,{from:"/assets/README.md",to:"https://raw.githubusercontent.com/Wave-Play/robo.js/main/README.md"}),"\n",(0,t.jsx)("p",{}),"\n",(0,t.jsxs)(r.p,{children:["And voila, you can now load those URLs in your ",(0,t.jsx)(r.strong,{children:"Discord Activity"})," using the mapped paths."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-HTML",children:'<iframe src="/assets/README.md"></iframe>\n'})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"fetch('/assets/docs/static/img/logo.png')\n"})}),"\n",(0,t.jsxs)(r.p,{children:["You can reference it as a path or ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://discord.com/developers/docs/activities/development-guides#construct-a-full-url",children:"construct a full URL"})}),"."]}),"\n",(0,t.jsx)(r.admonition,{title:"Don't actually use GitHub as a CDN",type:"tip",children:(0,t.jsxs)(r.p,{children:["GitHub is not a CDN. Connect ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://roboplay.dev",children:"your host"})})," to a CDN like ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://www.cloudflare.com",children:"Cloudflare"})})," or ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://bunny.net/",children:"Bunny.net"})})," for your assets."]})}),"\n",(0,t.jsx)(r.h3,{id:"url-patching",children:"URL Patching"}),"\n",(0,t.jsxs)(r.p,{children:["Mapping is great if you have control over the paths used, ",(0,t.jsx)(r.em,{children:"but what if you don't?"})," You know, like when using third-party libraries with hardcoded URLs. You can use the ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://github.com/discord/embedded-app-sdk/",children:"Embedded App SDK"})})," for that!"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import { patchUrlMappings } from '@discord/embedded-app-sdk'\n\npatchUrlMappings([{ prefix: '/foo', target: 'foo.com' }])\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Alternatively, you can use a post-install utility like ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://www.npmjs.com/package/patch-package",children:"patch-package"})})," or fork the library to use mapped URLs."]}),"\n",(0,t.jsx)(r.h3,{id:"proxying-requests",children:"Proxying Requests"}),"\n",(0,t.jsxs)(r.p,{children:["As a last resort, you can proxy requests through your ",(0,t.jsx)(r.strong,{children:"Web Server"}),". This is useful when you need to make requests to a specific port or handle requests that the ",(0,t.jsx)(r.strong,{children:"Discord Proxy"})," can't, but it's not always the best solution."]}),"\n",(0,t.jsxs)(r.p,{children:["Creating your own proxy is easy. Just create a file in ",(0,t.jsx)(r.code,{children:"/src/api"})," called ",(0,t.jsx)(r.code,{children:"proxy.js"})," with the following code:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"export default async (request) => {\n\treturn fetch(request.query.url)\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Modify as you see fit to validate requests. You can use it like so inside your ",(0,t.jsx)(r.strong,{children:"Activity Client"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-jsx",children:"<Player url={'/api/proxy?url=' + ExternalUrl} />\n"})}),"\n",(0,t.jsxs)(r.p,{children:["This code basically has your ",(0,t.jsx)(r.strong,{children:"Web Server"})," to fetch the data and send it back to your ",(0,t.jsx)(r.strong,{children:"Activity Client"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["While this method is effective for bypassing ",(0,t.jsx)(r.strong,{children:"CSP"})," restrictions, it does introduce additional latency because your server has to fetch the resource before serving it back to the activity. This may impact the performance of your activity, especially for large files or high traffic, so make sure your ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://docs.roboplay.dev/discord-activities/hosting",children:"Hosting Service"})})," can handle it."]}),"\n",(0,t.jsxs)(r.p,{children:["Be aware of potential security risks when using a proxy server, such as ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html",children:"URL Injections"})})," and ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_(SSRF)",children:"SSRF (Server-Side Request Forgery)"})})," attacks. Always use Discord's ",(0,t.jsx)(r.strong,{children:"URL Mapping"})," whenever possible."]}),"\n",(0,t.jsx)(r.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"Discord Proxy"})," hides the user's IP address and blocks URLs from known ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",children:"malicious endpoints"})}),". This ensures the safety of the user's data and privacy. However, it also means that you need to be careful when handling external resources."]}),"\n",(0,t.jsxs)(r.p,{children:["Don't trust info coming from the ",(0,t.jsx)(r.strong,{children:"Embedded App SDK"})," as truth. There could be an impostor among us. Call the Discord API directly from your app's ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./server",children:"Web Server"})})," with the ",(0,t.jsx)(r.strong,{children:"OAuth2"})," token you received during ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"./auth",children:"Authentication"})})," if you need information that's not sus."]}),"\n",(0,t.jsx)(r.admonition,{title:"Sanitize Your Inputs",type:"warning",children:(0,t.jsx)(r.p,{children:"Always sanitize user inputs such as usernames and channel names. You never know what might try to sneak in."})}),"\n",(0,t.jsx)(r.h2,{id:"network-limitations",children:"Network Limitations"}),"\n",(0,t.jsxs)(r.p,{children:["Want to use ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://webrtc.org/",children:"WebRTC"})})," or ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://w3c.github.io/webrtc-quic/",children:"WebTransport"})}),"? Sorry, you can't. ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://discord.com/developers/docs/activities/development-guides#activity-proxy-considerations",children:"For now"})}),", at least."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"Discord Proxy"})," does ",(0,t.jsx)(r.em,{children:"not"})," support the following:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://developers.cloudflare.com/fundamentals/reference/network-ports/#network-ports-compatible-with-cloudflares-proxy",children:"Some iframe ports"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://developers.cloudflare.com/workers/platform/known-issues/#custom-ports",children:"URL Mapping external ports"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://webrtc.org",children:"WebRTC"})})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://web.dev/webtransport",children:"WebTransport"})})}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["You'll be fine if you stick to ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",children:"WebSockets"})})," or ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/HTTPS",children:"HTTPS"})}),", as well as some protocols built on them like ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources#mpeg-dash_encoding",children:"DASH"})})," or ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/Setting_up_adaptive_streaming_media_sources#hls_encoding",children:"HLS"})})," for streaming."]}),"\n",(0,t.jsxs)(r.p,{children:["Need to make a request to a specific port? Have your ",(0,t.jsx)(r.strong,{children:"Web Server"})," handle it by ",(0,t.jsx)(r.strong,{children:(0,t.jsx)(r.a,{href:"#proxying-requests",children:"proxying the request"})}),". That won't always work on iframes, though. You may need to virtualize the source and livestream it from your server but that has its own limitations."]}),"\n",(0,t.jsx)(r.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,t.jsxs)(c._,{children:[(0,t.jsx)(a.Z,{href:"https://discord.com/developers/docs/activities/development-guides#activity-proxy-considerations",title:"\ud83d\udd17 Discord Developer Docs",description:"Learn more about the Discord Proxy."}),(0,t.jsx)(a.Z,{href:"https://dev.to/waveplay/resolve-content-security-policy-csp-issues-in-your-discord-activity-using-a-nodejs-proxy-2634",title:"\ud83d\udcda Resolve CSP Issues with a Proxy",description:"A guide on how to set up a proxy to bypass CSP issues."})]})]})}function g(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},5396:(e,r,s)=>{s.d(r,{Z:()=>n});var t=s(7294),i=s(3692),o=s(2503);const n=e=>{const{description:r,href:s,title:n}=e;return t.createElement(i.Z,{className:"col col--6 nodecor margin-bottom--lg",to:s},t.createElement("div",{className:"card padding--lg cardContent"},t.createElement(o.Z,{as:"h4",className:"text--truncate cardTitle"},n),t.createElement("p",{className:"text--truncate cardDescription"},r)))}},352:(e,r,s)=>{s.d(r,{_:()=>i});var t=s(7294);const i=e=>{const{children:r}=e;return t.createElement("div",{className:"row cardContainer"},r)}},5251:(e,r,s)=>{var t=s(7294),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,s){var t,o={},d=null,l=null;for(t in void 0!==s&&(d=""+s),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)n.call(r,t)&&!c.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===o[t]&&(o[t]=r[t]);return{$$typeof:i,type:e,key:d,ref:l,props:o,_owner:a.current}}r.Fragment=o,r.jsx=d,r.jsxs=d},5893:(e,r,s)=>{e.exports=s(5251)},1151:(e,r,s)=>{s.d(r,{Z:()=>a,a:()=>n});var t=s(7294);const i={},o=t.createContext(i);function n(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);
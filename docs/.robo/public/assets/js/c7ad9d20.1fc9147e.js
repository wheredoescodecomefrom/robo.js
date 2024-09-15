"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[1634],{947:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var t=o(5893),r=o(1151),s=o(4263);const l={image:"https://preview.robojs.dev?path=/hosting/self-host"},i="\ud83d\udd28 Self-hosting",a={id:"hosting/self-host",title:"\ud83d\udd28 Self-hosting",description:"Robo.js can be self-hosted, meaning you can run your own instance of Robo.js on your own server.",source:"@site/docs/hosting/self-host.mdx",sourceDirName:"hosting",slug:"/hosting/self-host",permalink:"/hosting/self-host",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/hosting/self-host.mdx",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1719205204e3,frontMatter:{image:"https://preview.robojs.dev?path=/hosting/self-host"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude80 RoboPlay",permalink:"/hosting/roboplay"},next:{title:"\u2728 Robo Plugins",permalink:"/plugins/overview"}},c={},d=[{value:"Running",id:"running",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Build for production",id:"build-for-production",level:3},{value:"Set environment variables",id:"set-environment-variables",level:3},{value:"Start in production mode",id:"start-in-production-mode",level:3},{value:"Extra tidbits",id:"extra-tidbits",level:2},{value:"CDN",id:"cdn",level:3},{value:"Logs",id:"logs",level:3},{value:"Recovery",id:"recovery",level:3},{value:"TLS",id:"tls",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-self-hosting",children:"\ud83d\udd28 Self-hosting"}),"\n",(0,t.jsx)(n.p,{children:"Robo.js can be self-hosted, meaning you can run your own instance of Robo.js on your own server."}),"\n",(0,t.jsxs)(n.p,{children:["This is great for those who want to have full control over their projects, or for those who want to run Robo.js in a private environment isolated from civilization. Before you can self-host Robo.js, you'll need ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://nodejs.org",children:"Node.js"})})," v20 or newer installed on your server."]}),"\n",(0,t.jsxs)(n.p,{children:["Feeling overwhelmed? ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./roboplay",children:"Deploy with one command on RoboPlay"})}),", a hosting service made for Robo.js projects!"]}),"\n",(0,t.jsx)(n.h2,{id:"running",children:"Running"}),"\n",(0,t.jsx)(n.h3,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,t.jsx)(n.p,{children:"Make sure you have all the necessary dependencies installed."}),"\n",(0,t.jsx)(s.o,{install:!0}),"\n",(0,t.jsx)(n.h3,{id:"build-for-production",children:"Build for production"}),"\n",(0,t.jsxs)(n.p,{children:["Some hosts might need you to run ",(0,t.jsx)(n.code,{children:"robo build"})," before or after uploading your code. This step compiles your source code into an optimized production format, especially important for TypeScript users."]}),"\n",(0,t.jsx)(s.o,{execute:!0,children:"robo build"}),"\n",(0,t.jsx)(n.p,{children:"This command will compile your Robo.js project into a production-ready format, making it easier to run on your server."}),"\n",(0,t.jsx)(n.h3,{id:"set-environment-variables",children:"Set environment variables"}),"\n",(0,t.jsxs)(n.p,{children:["Before starting your Robo, make sure you have all the necessary environment variables set up on your server. Check out the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docs/basics/secrets",children:"Secrets"})})," page for more info. You'll need to set ",(0,t.jsx)(n.code,{children:"NODE_ENV"})," to ",(0,t.jsx)(n.code,{children:'"production"'})," to run your Robo in production mode."]}),"\n",(0,t.jsx)(n.h3,{id:"start-in-production-mode",children:"Start in production mode"}),"\n",(0,t.jsx)(n.p,{children:"Once you've built your project, you can start your Robo.js server with the following command:"}),"\n",(0,t.jsx)(s.o,{execute:!0,children:"robo start"}),"\n",(0,t.jsx)(n.p,{children:"This will start your Robo.js server, making it accessible to the world."}),"\n",(0,t.jsx)(n.h2,{id:"extra-tidbits",children:"Extra tidbits"}),"\n",(0,t.jsxs)(n.p,{children:["Unlike ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"./roboplay",children:"Hosting on RoboPlay"})}),", self-hosting your Robo.js project means you're responsible for keeping your server up and running. Make sure you have the necessary resources and knowledge to maintain your server before self-hosting your Robo.js project."]}),"\n",(0,t.jsx)(n.p,{children:"The following are things that are already set up for you when you host on RoboPlay, but good to know when self-hosting."}),"\n",(0,t.jsx)(n.h3,{id:"cdn",children:"CDN"}),"\n",(0,t.jsxs)(n.p,{children:["We recommend using a CDN like ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://www.cloudflare.com/",children:"Cloudflare"})})," to cache your assets. This will help speed up and reduce the load on your server."]}),"\n",(0,t.jsx)(n.h3,{id:"logs",children:"Logs"}),"\n",(0,t.jsxs)(n.p,{children:["Logs are essential for debugging issues in production. The Robo.js ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"/docs/advanced/logger",children:"Logger"})})," will write logs to stdout by default, but you can configure it to write to a file or a logging service via custom drains."]}),"\n",(0,t.jsxs)(n.p,{children:["We recommend using a service like ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://betterstack.com/logs",children:"Better Stack"})})," to collect and analyze your logs. We even have the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://github.com/Wave-Play/robo.js/tree/main/packages/plugin-better-stack",children:(0,t.jsx)(n.code,{children:"@robojs/better-stack"})})})," plugin to make it easier to integrate."]}),"\n",(0,t.jsx)(n.h3,{id:"recovery",children:"Recovery"}),"\n",(0,t.jsxs)(n.p,{children:["Unlike ",(0,t.jsx)(n.code,{children:"robo dev"}),", ",(0,t.jsx)(n.code,{children:"robo start"})," will not automatically restart your Robo if it crashes. You'll need to set up a process manager like ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://pm2.keymetrics.io/",children:"PM2"})})," to keep your Robo running in the background."]}),"\n",(0,t.jsx)(n.h3,{id:"tls",children:"TLS"}),"\n",(0,t.jsxs)(n.p,{children:["Don't forget to create and ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.a,{href:"https://letsencrypt.org/",children:"set up a TLS certificate"})})," if you plan to serve your Robo over HTTPS. This is especially important if you're using a custom domain."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},4263:(e,n,o)=>{o.d(n,{o:()=>m});var t=o(5317),r=o(8849),s=o.n(r),l=o(7294);const i=e=>{const{defaultValue:n,onSelect:o,options:r}=e,[i,a]=(0,l.useState)(!1),[c,d]=(0,l.useState)(n??r[0]);(0,l.useEffect)((()=>{d(n??r[0])}),[n,r]);const u=e=>()=>{d(e),o(e),a(!1)};return l.createElement("div",{className:"select-container"},l.createElement("button",{className:"select-row",onClick:()=>{a(!i)}},l.createElement("span",{className:"select-text no-margin"},c.label),l.createElement(s(),{path:i?t.Waq:t.CW,size:"16px",color:"rgb(161, 161, 161)"})),i&&l.createElement("menu",{className:"select-menu"},r.map((e=>l.createElement("button",{key:e.value,className:e.value===c.value?"select-menu-active":void 0,onClick:u(e)},e.label)))))};var a=o(640),c=o.n(a);var d=o(5103),u=o(8583);const h=(0,d.cn)("npm");const p=[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"},{label:"PNPM",value:"pnpm"}],m=e=>{const{children:n,create:o,execute:r,install:a,title:d="Terminal"}=e,[m]=[async e=>c()(e)],[g,b]=function(){const[e,n]=(0,u.KO)(h);return[e,n]}(),v=p.find((e=>e.value===g));let f=n;"string"==typeof f&&(f=f.trim());let j="";o?j=function(e){if("npm"===e)return"npx create-robo";if("yarn"===e)return"yarn create robo";if("pnpm"===e)return"pnpm create robo"}(v.value)+" ":r?j=function(e){if("npm"===e)return"npx";if("yarn"===e)return"yarn";if("pnpm"===e)return"pnpm";if("bun"===e)return"bun"}(v.value)+" ":a&&f?j=function(e){if("npm"===e)return"npm install";if("yarn"===e)return"yarn add";if("pnpm"===e)return"pnpm add";if("bun"===e)return"bun add"}(v.value)+" ":a&&(j=v.value+" install");return l.createElement("div",{className:"margin-bottom--lg terminal"},l.createElement("div",{className:"terminal-header"},l.createElement(s(),{path:t.aTZ,size:"16px",color:"rgb(161, 161, 161)"}),l.createElement("span",{className:"terminal-header-text"},d),l.createElement("div",{className:"spacer"}),l.createElement(i,{defaultValue:v,onSelect:e=>{console.log(e),b(e.value)},options:p}),l.createElement("button",{onClick:()=>{m(j+f)}},l.createElement(s(),{path:t.a0Z,size:"20px",color:"rgb(161, 161, 161)"}))),l.createElement("pre",{className:"prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar terminal-bg"},l.createElement("code",{className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"},l.createElement("span",{className:"token-line"},o||r||a?l.createElement(l.Fragment,null,l.createElement("span",{className:"token plain"},j),l.createElement("strong",null,l.createElement("span",{className:"token plain"},f))):l.createElement("span",{className:"token plain"},f)))))}}}]);
"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[2110],{2141:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(5893),o=t(1151),l=t(4263);const s={image:"https://preview.robojs.dev?path=/cli/create-robo"},i="\u26a1 Create Robo",a={id:"cli/create-robo",title:"\u26a1 Create Robo",description:"The create-robo interactive CLI is your go-to for kickstarting fresh Robo.js projects and plugins! It's a nifty standalone tool that won't bloat your project, and it'll hold your hand through the setup process like a pro.",source:"@site/docs/cli/create-robo.mdx",sourceDirName:"cli",slug:"/cli/create-robo",permalink:"/cli/create-robo",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/cli/create-robo.mdx",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1719200191e3,frontMatter:{image:"https://preview.robojs.dev?path=/cli/create-robo"},sidebar:"tutorialSidebar",previous:{title:"\u2728 Overview",permalink:"/cli/overview"},next:{title:"\u2699\ufe0f Robo CLI",permalink:"/cli/robo"}},c={},d=[{value:"New Robo",id:"new-robo",level:2},{value:"New Plugin",id:"new-plugin",level:2},{value:"Options",id:"options",level:2},{value:"Kits",id:"kits",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"-create-robo",children:"\u26a1 Create Robo"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"create-robo"})," interactive CLI is your go-to for kickstarting fresh Robo.js projects and plugins! It's a nifty standalone tool that won't bloat your project, and it'll hold your hand through the setup process like a pro."]}),"\n",(0,r.jsx)(n.h2,{id:"new-robo",children:"New Robo"}),"\n",(0,r.jsx)(n.p,{children:'Ready to create a project named "my-awesome-robo"? Here\'s how:'}),"\n",(0,r.jsx)(l.o,{create:!0,children:"my-awesome-robo"}),"\n",(0,r.jsx)(n.p,{children:"Once you're in, the CLI will walk you through three easy-peasy steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"TypeScript or nah? (yes/no)"}),"\n",(0,r.jsx)(n.li,{children:"Choose your features! (ESLint, Prettier, Plugins - mix and match, or skip 'em all!)"}),"\n",(0,r.jsxs)(n.li,{children:["Pop in your Discord token and client id. Wanna skip it? Just press enter, but remember to edit your ",(0,r.jsx)(n.code,{children:".env"})," file later."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"new-plugin",children:"New Plugin"}),"\n",(0,r.jsxs)(n.p,{children:["Got your eyes on crafting a plugin? Run the CLI with the ",(0,r.jsx)(n.code,{children:"--plugin"})," option:"]}),"\n",(0,r.jsx)(l.o,{create:!0,children:"my-awesome-plugin --plugin"}),"\n",(0,r.jsx)(n.p,{children:"This will guide you through two simple steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"TypeScript or nah? (yes/no)"}),"\n",(0,r.jsx)(n.li,{children:"Choose your features! (ESLint, Prettier)"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsx)(n.p,{children:"Feeling adventurous? This CLI's got options for ya:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-f"}),", ",(0,r.jsx)(n.code,{children:"--features <features>"})," comma-separated list of features to include"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--js"}),", ",(0,r.jsx)(n.code,{children:"--javascript"})," create a Robo using JavaScript"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-k"}),", ",(0,r.jsx)(n.code,{children:"--kit"})," choose a kit to start off with your Robo"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-ni"}),", ",(0,r.jsx)(n.code,{children:"--no-install"})," skips the installation of dependencies"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-nu"}),", ",(0,r.jsx)(n.code,{children:"--no-update"})," skips the update check"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-P"}),", ",(0,r.jsx)(n.code,{children:"--plugin"})," lets you craft a plugin project instead of a full-fledged Robo"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-p"}),", ",(0,r.jsx)(n.code,{children:"--plugins <plugins>"})," installs plugins from the start (e.g., ",(0,r.jsx)(n.code,{children:"@robojs/ai"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-rv"}),", ",(0,r.jsx)(n.code,{children:"--robo-version <version>"})," specify a Robo.js version to use"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-t"}),", ",(0,r.jsx)(n.code,{children:"--template <template>"})," create a Robo from an online template"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"--ts"}),", ",(0,r.jsx)(n.code,{children:"--typescript"})," create a Robo using TypeScript"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"-v"}),", ",(0,r.jsx)(n.code,{children:"--verbose"})," print more information for debugging"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"kits",children:"Kits"}),"\n",(0,r.jsx)(n.p,{children:"Kits are pre-defined features and templates that you can use to start off your Robo. Here are some of the available kits:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"activity"})," - Create a Discord Activity"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"bot"})," - Create a Discord Bot"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},4263:(e,n,t)=>{t.d(n,{o:()=>m});var r=t(5317),o=t(8849),l=t.n(o),s=t(7294);const i=e=>{const{defaultValue:n,onSelect:t,options:o}=e,[i,a]=(0,s.useState)(!1),[c,d]=(0,s.useState)(n??o[0]);(0,s.useEffect)((()=>{d(n??o[0])}),[n,o]);const u=e=>()=>{d(e),t(e),a(!1)};return s.createElement("div",{className:"select-container"},s.createElement("button",{className:"select-row",onClick:()=>{a(!i)}},s.createElement("span",{className:"select-text no-margin"},c.label),s.createElement(l(),{path:i?r.Waq:r.CW,size:"16px",color:"rgb(161, 161, 161)"})),i&&s.createElement("menu",{className:"select-menu"},o.map((e=>s.createElement("button",{key:e.value,className:e.value===c.value?"select-menu-active":void 0,onClick:u(e)},e.label)))))};var a=t(640),c=t.n(a);var d=t(5103),u=t(8583);const h=(0,d.cn)("npm");const p=[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"},{label:"PNPM",value:"pnpm"}],m=e=>{const{children:n,create:t,execute:o,install:a,title:d="Terminal"}=e,[m]=[async e=>c()(e)],[j,x]=function(){const[e,n]=(0,u.KO)(h);return[e,n]}(),b=p.find((e=>e.value===j));let f=n;"string"==typeof f&&(f=f.trim());let v="";t?v=function(e){if("npm"===e)return"npx create-robo";if("yarn"===e)return"yarn create robo";if("pnpm"===e)return"pnpm create robo"}(b.value)+" ":o?v=function(e){if("npm"===e)return"npx";if("yarn"===e)return"yarn";if("pnpm"===e)return"pnpm";if("bun"===e)return"bun"}(b.value)+" ":a&&f?v=function(e){if("npm"===e)return"npm install";if("yarn"===e)return"yarn add";if("pnpm"===e)return"pnpm add";if("bun"===e)return"bun add"}(b.value)+" ":a&&(v=b.value+" install");return s.createElement("div",{className:"margin-bottom--lg terminal"},s.createElement("div",{className:"terminal-header"},s.createElement(l(),{path:r.aTZ,size:"16px",color:"rgb(161, 161, 161)"}),s.createElement("span",{className:"terminal-header-text"},d),s.createElement("div",{className:"spacer"}),s.createElement(i,{defaultValue:b,onSelect:e=>{console.log(e),x(e.value)},options:p}),s.createElement("button",{onClick:()=>{m(v+f)}},s.createElement(l(),{path:r.a0Z,size:"20px",color:"rgb(161, 161, 161)"}))),s.createElement("pre",{className:"prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar terminal-bg"},s.createElement("code",{className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module"},s.createElement("span",{className:"token-line"},t||o||a?s.createElement(s.Fragment,null,s.createElement("span",{className:"token plain"},v),s.createElement("strong",null,s.createElement("span",{className:"token plain"},f))):s.createElement("span",{className:"token plain"},f)))))}}}]);
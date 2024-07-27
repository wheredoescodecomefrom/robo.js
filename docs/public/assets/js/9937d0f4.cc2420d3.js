"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[2621],{454:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=s(4848),o=s(8453),t=s(9520);const r={image:"https://preview.robojs.dev?path=/robojs/mode"},d="\ud83c\udfad Mode",l={id:"robojs/mode",title:"\ud83c\udfad Mode",description:'Modes are a way to define "profiles" for your Robo session. Each with its own config(s), envionment variables, and code.',source:"@site/docs/robojs/mode.mdx",sourceDirName:"robojs",slug:"/robojs/mode",permalink:"/robojs/mode",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/robojs/mode.mdx",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1721595003e3,frontMatter:{image:"https://preview.robojs.dev?path=/robojs/mode"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdd Logger",permalink:"/robojs/logger"},next:{title:"\ud83d\udce6 Modules",permalink:"/robojs/modules"}},a={},c=[{value:"Running a Mode",id:"running-a-mode",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"A/B Testing",id:"ab-testing",level:3},{value:"AI Personalities",id:"ai-personalities",level:3},{value:"Beta Testing",id:"beta-testing",level:3},{value:"Experimental Features",id:"experimental-features",level:3},{value:"Secure Tokens",id:"secure-tokens",level:3},{value:"Staging Environments",id:"staging-environments",level:3},{value:"File Conventions",id:"file-conventions",level:2},{value:"Modules",id:"modules",level:2},{value:"Default Modes",id:"default-modes",level:2},{value:"Multiple Modes",id:"multiple-modes",level:2},{value:"JavaScript API",id:"javascript-api",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-mode",children:"\ud83c\udfad Mode"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Modes"}),' are a way to define "profiles" for your ',(0,i.jsx)(n.strong,{children:"Robo"})," session. Each with its own config(s), envionment variables, and code."]}),"\n",(0,i.jsx)(n.p,{children:"Everything is granular. You can even run multiple modes at the same time!"}),"\n",(0,i.jsx)(n.h2,{id:"running-a-mode",children:"Running a Mode"}),"\n",(0,i.jsxs)(n.p,{children:["To run a custom mode, use the ",(0,i.jsx)(n.code,{children:"--mode"})," flag with the name of the mode you want to run."]}),"\n",(0,i.jsxs)(t.B,{execute:!0,children:["robo dev --mode ","<mode>"]}),"\n",(0,i.jsxs)(n.p,{children:["This will make ",(0,i.jsx)(n.strong,{children:"Robo.js"})," prioritize files like ",(0,i.jsx)(n.code,{children:".env.<mode>"})," and ",(0,i.jsx)(n.code,{children:"robo.<mode>.js"})," over the default ones."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["A mode can be any string you want! For example, ",(0,i.jsx)(n.code,{children:"beta"}),", ",(0,i.jsx)(n.code,{children:"catgirl"}),", ",(0,i.jsx)(n.code,{children:"strict"}),", etc. Make sure there's no spaces, commas, and is lowercase."]})}),"\n",(0,i.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsxs)(n.p,{children:["Let's say you have a ",(0,i.jsx)(n.code,{children:"beta"})," mode for testing new features, or different personalities for your AI chatbot. You can use modes to switch between them easily, or even run multiple at the same time!"]}),"\n",(0,i.jsx)(n.h3,{id:"ab-testing",children:"A/B Testing"}),"\n",(0,i.jsx)(n.p,{children:"Got an economy bot and want to see how users react to different settings? Use custom economy modes!"}),"\n",(0,i.jsx)(t.B,{execute:!0,children:"robo dev --mode expensive"}),"\n",(0,i.jsxs)(n.p,{children:["In this use case, you can have a ",(0,i.jsx)(n.code,{children:".env.expensive"})," file with ",(0,i.jsx)(n.code,{children:'ECONOMY_MULTIPLIER="2"'})," or ",(0,i.jsx)(n.code,{children:'ECONOMY_TAX="0.1"'})," for example."]}),"\n",(0,i.jsx)(n.h3,{id:"ai-personalities",children:"AI Personalities"}),"\n",(0,i.jsx)(n.p,{children:"Got multiple chatbots with different personalities? Run them all at once!"}),"\n",(0,i.jsx)(t.B,{execute:!0,children:"robo dev --mode catgirl tsundere weirdo"}),"\n",(0,i.jsxs)(n.p,{children:["In this use case, different ",(0,i.jsx)(n.code,{children:".env.<mode>"})," files can have different bot tokens and custom ",(0,i.jsx)(n.code,{children:"ai.<mode>.mjs"})," config files for each personality."]}),"\n",(0,i.jsx)(n.h3,{id:"beta-testing",children:"Beta Testing"}),"\n",(0,i.jsxs)(n.p,{children:["Want to test a new feature with a small group of users? Run a ",(0,i.jsx)(n.code,{children:"beta"})," mode!"]}),"\n",(0,i.jsx)(t.B,{execute:!0,children:"robo dev --mode beta"}),"\n",(0,i.jsxs)(n.p,{children:["In this use case, you can have a ",(0,i.jsx)(n.code,{children:".env.beta"})," file with different tokens or configurations for your beta feature, or entirely different bot tokens for example."]}),"\n",(0,i.jsx)(n.h3,{id:"experimental-features",children:"Experimental Features"}),"\n",(0,i.jsx)(n.p,{children:"Got an idea for a new feature? Run it in a separate mode to test it out!"}),"\n",(0,i.jsx)(t.B,{execute:!0,children:"robo dev --mode gpt4"}),"\n",(0,i.jsxs)(n.p,{children:["In this use case, you can have a ",(0,i.jsx)(n.code,{children:".env.gpt4"})," file with different tokens or configurations for your GPT-4 feature. There can even be a ",(0,i.jsx)(n.code,{children:"smart.gpt4"})," module folder with commands specific to this mode."]}),"\n",(0,i.jsx)(n.h3,{id:"secure-tokens",children:"Secure Tokens"}),"\n",(0,i.jsx)(n.p,{children:"Need additional security features enabled only in production? Use mode modules!"}),"\n",(0,i.jsx)(t.B,{execute:!0,children:"robo start"}),"\n",(0,i.jsxs)(n.p,{children:["In this use case, you can have a ",(0,i.jsx)(n.code,{children:"security.production"})," module folder with additional security features enabled only in production mode, such as middleware or rate limiting."]}),"\n",(0,i.jsx)(n.h3,{id:"staging-environments",children:"Staging Environments"}),"\n",(0,i.jsxs)(n.p,{children:["Have a staging environment for testing before deploying to production? Use a ",(0,i.jsx)(n.code,{children:"staging"})," mode!"]}),"\n",(0,i.jsx)(t.B,{execute:!0,children:"robo start --mode staging"}),"\n",(0,i.jsxs)(n.p,{children:["In this use case, you can have a ",(0,i.jsx)(n.code,{children:".env.staging"})," file pointing to different databases or services for testing before deploying to production."]}),"\n",(0,i.jsx)(n.h2,{id:"file-conventions",children:"File Conventions"}),"\n",(0,i.jsxs)(n.p,{children:["The following ",(0,i.jsx)(n.strong,{children:"Robo.js"})," features support modes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Environment variable files (",(0,i.jsx)(n.code,{children:".env.<mode>"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Robo config files (",(0,i.jsx)(n.code,{children:"robo.<mode>.js"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Plugin config files (",(0,i.jsx)(n.code,{children:"pluginname.<mode>.js"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Module folders (",(0,i.jsx)(n.code,{children:"module.<mode>"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When running a mode, ",(0,i.jsx)(n.strong,{children:"Robo.js"})," will prioritize files in the following order:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Mode-based"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:".env.<mode>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:".env"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"robo.<mode>.js"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"robo.js"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ai.<mode>.mjs"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ai.mjs"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"security.<mode>"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"security"})})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["This means that if you have a ",(0,i.jsx)(n.code,{children:".env.beta"})," file, it will be used over the default ",(0,i.jsx)(n.code,{children:".env"})," file. If it doesn't exist, the default ",(0,i.jsx)(n.code,{children:".env"})," file will be used just like before."]}),"\n",(0,i.jsx)(n.h2,{id:"modules",children:"Modules"}),"\n",(0,i.jsxs)(n.p,{children:["You can also create mode-specific modules by adding a ",(0,i.jsx)(n.code,{children:".<mode>"})," suffix to the module folder name. This lets you write code that is only loaded when a specific mode is active."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-plaintext",metastring:'title="File Structure"',children:"/src/modules\n\u2514\u2500\u2500 security.production\n    \u2514\u2500\u2500 /middleware\n        \u2514\u2500\u2500 /rate-limiting.js\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Here rate limits will only be loaded when the ",(0,i.jsx)(n.code,{children:"production"})," mode is active, allowing you to have additional security features enabled only in production."]}),"\n",(0,i.jsxs)(n.p,{children:["When running ",(0,i.jsx)(n.code,{children:"robo dev"}),", the ",(0,i.jsx)(n.code,{children:"rate-limiting.js"})," middleware will not be loaded, keeping your dev environment fast and clean."]}),"\n",(0,i.jsx)(n.p,{children:"This can also be used to create slash commands only available in certain modes, or even entire features as a whole!"}),"\n",(0,i.jsx)(n.h2,{id:"default-modes",children:"Default Modes"}),"\n",(0,i.jsxs)(n.p,{children:["Did you know that you are always running a mode? When you run ",(0,i.jsx)(n.code,{children:"dev"})," or ",(0,i.jsx)(n.code,{children:"start"})," commands, ",(0,i.jsx)(n.strong,{children:"Robo.js"})," uses ",(0,i.jsx)(n.code,{children:"development"})," or ",(0,i.jsx)(n.code,{children:"production"})," modes respectively. If you have a ",(0,i.jsx)(n.code,{children:"NODE_ENV"})," environment variable set, that will be used instead."]}),"\n",(0,i.jsx)(n.p,{children:"Here's how it works:"}),"\n",(0,i.jsx)(t.B,{execute:!0,title:'Mode: "development"',children:"robo dev"}),"\n",(0,i.jsx)(t.B,{execute:!0,title:'Mode: "production"',children:"robo start"}),"\n",(0,i.jsx)(t.B,{execute:!0,title:'Mode: "beta"',children:"NODE_ENV=beta robo dev"}),"\n",(0,i.jsxs)(n.p,{children:["Because a mode is always set, that means you can use files like ",(0,i.jsx)(n.code,{children:".env.development"})," to set different tokens or configurations for your development environment by default, or vice versa!"]}),"\n",(0,i.jsx)(n.h2,{id:"multiple-modes",children:"Multiple Modes"}),"\n",(0,i.jsxs)(n.p,{children:["You can run multiple ",(0,i.jsx)(n.strong,{children:"Robo"})," instances with different modes at the same time! This can be useful for testing or running multiple chatbots with different personalities."]}),"\n",(0,i.jsx)(t.B,{execute:!0,children:"robo dev --mode <mode1> <mode2> <mode3>"}),"\n",(0,i.jsxs)(n.p,{children:["This will run ",(0,i.jsx)(n.strong,{children:"Robo"})," with each mode in a separate process as if you ran them individually in separate terminals. Logs will be prefixed with the mode name for easy debugging."]}),"\n",(0,i.jsx)(n.p,{children:"You can run as many modes as you want, but keep in mind that each mode will run in a separate process and use additional resources."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can run multiple bots in a single ",(0,i.jsx)(n.strong,{children:"RoboPlay"})," Pod by running multiple modes!"]})}),"\n",(0,i.jsx)(n.h2,{id:"javascript-api",children:"JavaScript API"}),"\n",(0,i.jsxs)(n.p,{children:["Need even more granular control? You can import ",(0,i.jsx)(n.code,{children:"Mode"})," from ",(0,i.jsx)(n.code,{children:"robo.js"})," and use it in your code."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="src/commands/what-mode.js"',children:"import { logger, Mode } from 'robo.js'\n\nexport default () => {\n\tif (Mode.is('development')) {\n\t\tlogger.info('This mode is being', Mode.color('tested'))\n\t}\n\n\treturn `Running in ${Mode.get()} mode!`\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Mode"})," object has the following methods:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Method"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"color(text)"})}),(0,i.jsx)(n.td,{children:"Returns a string colored with the current mode's color."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"get()"})}),(0,i.jsx)(n.td,{children:"Returns the current mode."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"is(mode)"})}),(0,i.jsxs)(n.td,{children:["Returns ",(0,i.jsx)(n.code,{children:"true"})," if the current mode is the specified mode."]})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"This can be useful for conditionally loading features, or even for debugging purposes!"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["You cannot change modes during runtime. Use the ",(0,i.jsx)(n.code,{children:"--mode"})," flag from the ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"../cli/robo",children:"command line"})})," instead."]})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9520:(e,n,s)=>{s.d(n,{B:()=>j});var i=s(9165),o=s(5996),t=s.n(o),r=s(6540),d=s(4848);const l=e=>{const{defaultValue:n,onSelect:s,options:o}=e,[l,a]=(0,r.useState)(!1),[c,h]=(0,r.useState)(n??o[0]);(0,r.useEffect)((()=>{h(n??o[0])}),[n,o]);const u=e=>()=>{h(e),s(e),a(!1)};return(0,d.jsxs)("div",{className:"select-container",children:[(0,d.jsxs)("button",{className:"select-row",onClick:()=>{a(!l)},children:[(0,d.jsx)("span",{className:"select-text no-margin",children:c.label}),(0,d.jsx)(t(),{path:l?i.Fb5:i.W5x,size:"16px",color:"rgb(161, 161, 161)"})]}),l&&(0,d.jsx)("menu",{className:"select-menu",children:o.map((e=>(0,d.jsx)("button",{className:e.value===c.value?"select-menu-active":void 0,onClick:u(e),children:e.label},e.value)))})]})};var a=s(7965),c=s.n(a);var h=s(2035),u=s(4843);const m=(0,h.eU)("npm");const x=[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"},{label:"PNPM",value:"pnpm"}],j=e=>{const{children:n,create:s,execute:o,install:r,title:a="Terminal"}=e,[h]=[async e=>c()(e)],[j,p]=function(){const[e,n]=(0,u.fp)(m);return[e,n]}(),f=x.find((e=>e.value===j));let v=n;"string"==typeof v&&(v=v.trim());let b="";s?b=function(e){if("npm"===e)return"npx create-robo";if("yarn"===e)return"yarn create robo";if("pnpm"===e)return"pnpm create robo"}(f.value)+" ":o?b=function(e){if("npm"===e)return"npx";if("yarn"===e)return"yarn";if("pnpm"===e)return"pnpm";if("bun"===e)return"bun"}(f.value)+" ":r&&v?b=function(e){if("npm"===e)return"npm install";if("yarn"===e)return"yarn add";if("pnpm"===e)return"pnpm add";if("bun"===e)return"bun add"}(f.value)+" ":r&&(b=f.value+" install");return(0,d.jsxs)("div",{className:"margin-bottom--lg terminal",children:[(0,d.jsxs)("div",{className:"terminal-header",children:[(0,d.jsx)(t(),{path:i.w_i,size:"16px",color:"rgb(161, 161, 161)"}),(0,d.jsx)("span",{className:"terminal-header-text",children:a}),(0,d.jsx)("div",{className:"spacer"}),(0,d.jsx)(l,{defaultValue:f,onSelect:e=>{console.log(e),p(e.value)},options:x}),(0,d.jsx)("button",{onClick:()=>{h(b+v)},children:(0,d.jsx)(t(),{path:i.$BT,size:"20px",color:"rgb(161, 161, 161)"})})]}),(0,d.jsx)("pre",{className:"prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar terminal-bg",children:(0,d.jsx)("code",{className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:(0,d.jsx)("span",{className:"token-line",children:s||o||r?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:"token plain",children:b}),(0,d.jsx)("strong",{children:(0,d.jsx)("span",{className:"token plain",children:v})})]}):(0,d.jsx)("span",{className:"token plain",children:v})})})})]})}}}]);
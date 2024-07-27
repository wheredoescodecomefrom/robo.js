"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[2231],{6551:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var l=s(4848),i=s(8453),r=s(5646),a=s(9733),t=s(9520);const o={image:"https://preview.robojs.dev?path=/plugins/install"},c="\ud83d\udd0c Installing Plugins",d={id:"plugins/install",title:"\ud83d\udd0c Installing Plugins",description:"Robo.js plugins are NPM packages at heart, but also need to be registered in your Robo's configuration.",source:"@site/docs/plugins/install.mdx",sourceDirName:"plugins",slug:"/plugins/install",permalink:"/plugins/install",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/plugins/install.mdx",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1719205204e3,frontMatter:{image:"https://preview.robojs.dev?path=/plugins/install"},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf1f Creating Plugins",permalink:"/plugins/create"},next:{title:"\u2728 Getting Started with Discord Activities",permalink:"/discord-activities/getting-started"}},h={},u=[{value:"Using Robo CLI",id:"using-robo-cli",level:2},{value:"Install",id:"install",level:3},{value:"Uninstall",id:"uninstall",level:3},{value:"Updates",id:"updates",level:3},{value:"Manually",id:"manually",level:2},{value:"Package Manager",id:"package-manager",level:3},{value:"Register Plugin",id:"register-plugin",level:3},{value:"Learn More",id:"learn-more",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"-installing-plugins",children:"\ud83d\udd0c Installing Plugins"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Robo.js"})," plugins are NPM packages at heart, but also need to be registered in your Robo's ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"../robojs/config",children:"configuration"})}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["You can install and manage plugins in ",(0,l.jsx)(n.strong,{children:"Robo.js"})," either using the ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"../cli/robo",children:"Robo CLI"})})," or manually."]}),"\n",(0,l.jsx)(n.h2,{id:"using-robo-cli",children:"Using Robo CLI"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.strong,{children:"Robo CLI"})," has its own commands install the plugin's ",(0,l.jsx)(n.strong,{children:"NPM package"})," and ",(0,l.jsx)(n.strong,{children:"register it"})," in your Robo's ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"../robojs/config",children:"configuration"})}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["When dealing with NPM packages, ",(0,l.jsx)(n.strong,{children:"Robo CLI"})," will use the executor command's package manager."]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Command"}),(0,l.jsx)(n.th,{children:"Package Manager"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"npx robo add"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"npm install"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"pnpm robo add"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"pnpm add"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"yarn robo add"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"yarn add"})})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"bun robo add"})}),(0,l.jsx)(n.td,{children:(0,l.jsx)(n.code,{children:"bun add"})})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"install",children:"Install"}),"\n",(0,l.jsxs)(n.p,{children:["Run in your terminal, replacing ",(0,l.jsx)(n.code,{children:"<package>"})," with the name of the plugin you want to install (e.g. ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"./ai",children:"@robojs/ai"})}),"):"]}),"\n",(0,l.jsxs)(t.B,{execute:!0,children:["robo add ","package"]}),"\n",(0,l.jsxs)(n.p,{children:["This will install the package and register it in your Robo's ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"../robojs/config",children:"configuration"})}),". To install many at once:"]}),"\n",(0,l.jsx)(t.B,{execute:!0,children:"robo add @robojs/ai @robojs/server"}),"\n",(0,l.jsx)(n.p,{children:"You can also create a new Robo project with plugins pre-installed:"}),"\n",(0,l.jsxs)(t.B,{create:!0,children:["<projectName>"," --plugins @robojs/ai @robojs/server"]}),"\n",(0,l.jsx)(n.h3,{id:"uninstall",children:"Uninstall"}),"\n",(0,l.jsx)(n.p,{children:"To remove a plugin:"}),"\n",(0,l.jsxs)(t.B,{execute:!0,children:["robo remove ","<package>"]}),"\n",(0,l.jsxs)(n.p,{children:["This will uninstall the package and remove it from your Robo's ",(0,l.jsx)(n.strong,{children:(0,l.jsx)(n.a,{href:"../robojs/config",children:"configuration"})}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"updates",children:"Updates"}),"\n",(0,l.jsxs)(n.p,{children:["You can use ",(0,l.jsx)(n.code,{children:"robo upgrade"})," to not only update ",(0,l.jsx)(n.strong,{children:"Robo.js"})," itself, but also all installed plugins."]}),"\n",(0,l.jsx)(t.B,{execute:!0,children:"robo upgrade"}),"\n",(0,l.jsx)(n.p,{children:"This will show you a list of updates and changelogs for you to select."}),"\n",(0,l.jsx)(n.h2,{id:"manually",children:"Manually"}),"\n",(0,l.jsxs)(n.p,{children:["Don't want to use the ",(0,l.jsx)(n.strong,{children:"Robo CLI"}),"? You can still install plugins manually. It's not as convenient as using the ",(0,l.jsx)(n.strong,{children:"Robo CLI"}),", but it's still a straightforward process."]}),"\n",(0,l.jsx)(n.p,{children:"Here's how you can do it."}),"\n",(0,l.jsx)(n.h3,{id:"package-manager",children:"Package Manager"}),"\n",(0,l.jsx)(n.p,{children:"Use the package manager of your choice to install the plugin:"}),"\n",(0,l.jsx)(t.B,{install:!0,children:"<package>"}),"\n",(0,l.jsx)(n.h3,{id:"register-plugin",children:"Register Plugin"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Robo.js"})," knows which plugins to use by looking the ",(0,l.jsx)(n.code,{children:"/config/plugins"})," directory."]}),"\n",(0,l.jsxs)(n.p,{children:["For each plugin you want, create an ",(0,l.jsx)(n.code,{children:".mjs"})," file in ",(0,l.jsx)(n.code,{children:"/config/plugins"})," with the same name as the plugin's package. The file should export the plugin's configuration."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",metastring:'title="config/plugins/<package>.mjs"',children:"export default {\n\t// ... plugin configuration\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"Remember to delete the file if you uninstall the plugin."}),"\n",(0,l.jsx)(n.h2,{id:"learn-more",children:"Learn More"}),"\n",(0,l.jsxs)(a.Q,{children:[(0,l.jsx)(r.Z,{href:"./create",title:"\ud83d\udd0c Creating Plugins",description:"Make your own plugins for Robo.js."}),(0,l.jsx)(r.Z,{href:"./directory",title:"\ud83d\uddc3\ufe0f Plugin Directory",description:"Browse plugins for your Robo."})]})]})}function g(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},5646:(e,n,s)=>{s.d(n,{Z:()=>a});s(6540);var l=s(8774),i=s(1107),r=s(4848);const a=e=>{const{description:n,href:s,title:a}=e;return(0,r.jsx)(l.A,{className:"col col--6 nodecor margin-bottom--lg",to:s,children:(0,r.jsxs)("div",{className:"card padding--lg cardContent",children:[(0,r.jsx)(i.A,{as:"h4",className:"text--truncate cardTitle",children:a}),(0,r.jsx)("p",{className:"text--truncate cardDescription",children:n})]})})}},9733:(e,n,s)=>{s.d(n,{Q:()=>i});s(6540);var l=s(4848);const i=e=>{const{children:n}=e;return(0,l.jsx)("div",{className:"row cardContainer",children:n})}},9520:(e,n,s)=>{s.d(n,{B:()=>j});var l=s(9165),i=s(5996),r=s.n(i),a=s(6540),t=s(4848);const o=e=>{const{defaultValue:n,onSelect:s,options:i}=e,[o,c]=(0,a.useState)(!1),[d,h]=(0,a.useState)(n??i[0]);(0,a.useEffect)((()=>{h(n??i[0])}),[n,i]);const u=e=>()=>{h(e),s(e),c(!1)};return(0,t.jsxs)("div",{className:"select-container",children:[(0,t.jsxs)("button",{className:"select-row",onClick:()=>{c(!o)},children:[(0,t.jsx)("span",{className:"select-text no-margin",children:d.label}),(0,t.jsx)(r(),{path:o?l.Fb5:l.W5x,size:"16px",color:"rgb(161, 161, 161)"})]}),o&&(0,t.jsx)("menu",{className:"select-menu",children:i.map((e=>(0,t.jsx)("button",{className:e.value===d.value?"select-menu-active":void 0,onClick:u(e),children:e.label},e.value)))})]})};var c=s(7965),d=s.n(c);var h=s(2035),u=s(4843);const p=(0,h.eU)("npm");const g=[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"},{label:"PNPM",value:"pnpm"}],j=e=>{const{children:n,create:s,execute:i,install:a,title:c="Terminal"}=e,[h]=[async e=>d()(e)],[j,x]=function(){const[e,n]=(0,u.fp)(p);return[e,n]}(),m=g.find((e=>e.value===j));let b=n;"string"==typeof b&&(b=b.trim());let f="";s?f=function(e){if("npm"===e)return"npx create-robo";if("yarn"===e)return"yarn create robo";if("pnpm"===e)return"pnpm create robo"}(m.value)+" ":i?f=function(e){if("npm"===e)return"npx";if("yarn"===e)return"yarn";if("pnpm"===e)return"pnpm";if("bun"===e)return"bun"}(m.value)+" ":a&&b?f=function(e){if("npm"===e)return"npm install";if("yarn"===e)return"yarn add";if("pnpm"===e)return"pnpm add";if("bun"===e)return"bun add"}(m.value)+" ":a&&(f=m.value+" install");return(0,t.jsxs)("div",{className:"margin-bottom--lg terminal",children:[(0,t.jsxs)("div",{className:"terminal-header",children:[(0,t.jsx)(r(),{path:l.w_i,size:"16px",color:"rgb(161, 161, 161)"}),(0,t.jsx)("span",{className:"terminal-header-text",children:c}),(0,t.jsx)("div",{className:"spacer"}),(0,t.jsx)(o,{defaultValue:m,onSelect:e=>{console.log(e),x(e.value)},options:g}),(0,t.jsx)("button",{onClick:()=>{h(f+b)},children:(0,t.jsx)(r(),{path:l.$BT,size:"20px",color:"rgb(161, 161, 161)"})})]}),(0,t.jsx)("pre",{className:"prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar terminal-bg",children:(0,t.jsx)("code",{className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:(0,t.jsx)("span",{className:"token-line",children:s||i||a?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:"token plain",children:f}),(0,t.jsx)("strong",{children:(0,t.jsx)("span",{className:"token plain",children:b})})]}):(0,t.jsx)("span",{className:"token plain",children:b})})})})]})}}}]);
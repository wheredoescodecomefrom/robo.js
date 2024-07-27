"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[2066],{7238:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=s(4848),o=s(8453),t=s(9520);const r={image:"https://preview.robojs.dev?path=/discord-bots/invite"},l="\ud83c\udfe0 Inviting to Servers",a={id:"discord-bots/invite",title:"\ud83c\udfe0 Inviting to Servers",description:"You've crafted an amazing Robo, and now it's time to bring it to life on your Discord Servers! To add your Robo, you'll need special invite links with the necessary permissions and scopes.",source:"@site/docs/discord-bots/invite.mdx",sourceDirName:"discord-bots",slug:"/discord-bots/invite",permalink:"/discord-bots/invite",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/discord-bots/invite.mdx",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1719205204e3,frontMatter:{image:"https://preview.robojs.dev?path=/discord-bots/invite"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udce1 Events",permalink:"/discord-bots/events"},next:{title:"\ud83c\udf19 Middleware",permalink:"/discord-bots/middleware"}},d={},c=[{value:"Robo.js CLI: The Cool Way \ud83d\udd25",id:"robojs-cli-the-cool-way-",level:2},{value:"Discord Developer Portal: The Classic Way \ud83d\udd70\ufe0f",id:"discord-developer-portal-the-classic-way-\ufe0f",level:2},{value:"Customizing Permissions in the Config File \ud83d\udee0\ufe0f",id:"customizing-permissions-in-the-config-file-\ufe0f",level:2},{value:"Intents: Tuning in to Discord Events \ud83d\udce1",id:"intents-tuning-in-to-discord-events-",level:2},{value:"Dive Deeper \ud83d\udcda",id:"dive-deeper-",level:2},{value:"Permissions and scopes are usually handled for you, but knowing the ins and outs of intents can be super helpful! \ud83e\udde0",id:"permissions-and-scopes-are-usually-handled-for-you-but-knowing-the-ins-and-outs-of-intents-can-be-super-helpful-",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"-inviting-to-servers",children:"\ud83c\udfe0 Inviting to Servers"}),"\n",(0,i.jsx)(n.p,{children:"You've crafted an amazing Robo, and now it's time to bring it to life on your Discord Servers! To add your Robo, you'll need special invite links with the necessary permissions and scopes."}),"\n",(0,i.jsx)(n.p,{children:"Don't worry, we've got you covered with two ways to generate these links: the Robo.js CLI and the Discord Developer Portal."}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Note:"})}),(0,i.jsx)(n.p,{children:"You can always re-generate invite links and add your Robo again to update the permissions given."})]}),"\n",(0,i.jsx)(n.h2,{id:"robojs-cli-the-cool-way-",children:"Robo.js CLI: The Cool Way \ud83d\udd25"}),"\n",(0,i.jsx)(n.p,{children:"Robo.js has a rad feature that lets you generate invite links in a snap. Just run the command below, and you'll get an invite link to share or use to add your Robo to Discord servers:"}),"\n",(0,i.jsx)(t.B,{execute:!0,children:"robo invite"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{children:(0,i.jsx)(n.strong,{children:"Heads up!"})}),(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"robo invite"})," command is currently in beta, so it might not detect all the permissions necessary, or it could ask for extra ones you don't need."]})]}),"\n",(0,i.jsx)(n.h2,{id:"discord-developer-portal-the-classic-way-\ufe0f",children:"Discord Developer Portal: The Classic Way \ud83d\udd70\ufe0f"}),"\n",(0,i.jsx)(n.p,{children:"If you're a fan of the Discord Developer Portal, you can generate your invite link by following these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Head over to the ",(0,i.jsx)(n.a,{href:"https://discord.com/developers/applications",children:"Discord Developer Portal"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Pick your application (Robo) from the list."}),"\n",(0,i.jsx)(n.li,{children:'Go to the "OAuth2" section in the left sidebar.'}),"\n",(0,i.jsx)(n.li,{children:'In the "Scopes" section, check the "bot" box.'}),"\n",(0,i.jsx)(n.li,{children:'In the "Bot Permissions" section, select the permissions your Robo requires.'}),"\n",(0,i.jsx)(n.li,{children:"Grab the generated invite link at the very bottom."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You're all set! Your invite link is ready to share or use to add your Robo to Discord servers! \ud83c\udf1f"}),"\n",(0,i.jsx)(n.h2,{id:"customizing-permissions-in-the-config-file-\ufe0f",children:"Customizing Permissions in the Config File \ud83d\udee0\ufe0f"}),"\n",(0,i.jsxs)(n.p,{children:["Wanna personalize permissions and scopes for ",(0,i.jsx)(n.code,{children:"robo invite"}),"? Add an ",(0,i.jsx)(n.code,{children:"invite"})," section to your config file like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'showLineNumbers {6-10} title="config/robo.mjs"',children:"/**\n * @type {import('robo.js').Config}\n **/\nexport default {\n\t// ...rest of config\n\tinvite: {\n\t\tautoPermissions: false,\n\t\tpermissions: ['SendMessages', 'ReadMessageHistory', 'AddReactions'],\n\t\tscopes: ['applications.commands']\n\t}\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By setting ",(0,i.jsx)(n.code,{children:"autoPermissions"})," to ",(0,i.jsx)(n.code,{children:"false"}),", Robo.js won't automatically add extra permissions it thinks you might need."]}),"\n",(0,i.jsx)(n.h2,{id:"intents-tuning-in-to-discord-events-",children:"Intents: Tuning in to Discord Events \ud83d\udce1"}),"\n",(0,i.jsxs)(n.p,{children:["Intents let Robo.js know which permissions to add automatically. Set 'em up in the ",(0,i.jsx)(n.code,{children:"clientOptions"}),' field of your config. Keep in mind that some features, like message content, need Privileged Gateway Intents. You\'ll find these in the Discord Developer Portal under the "Bot" section.']}),"\n",(0,i.jsx)(n.p,{children:"Here's an example of setting up intents in your config file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'showLineNumbers title="config/robo.mjs"',children:"/**\n * @type {import('robo.js').Config}\n **/\nexport default {\n\t// ...rest of config\n\tclientOptions: {\n\t\tintents: ['GUILD_MESSAGES', 'GUILD_PRESENCES']\n\t}\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dive-deeper-",children:"Dive Deeper \ud83d\udcda"}),"\n",(0,i.jsx)(n.p,{children:"Curious about permissions, scopes, and intents? Check out these reference links to learn when they're needed and what they mean:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://discord.com/developers/docs/topics/gateway#gateway-intents",children:"Discord Developer Docs: Gateway Intents"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://discord.com/developers/docs/topics/permissions",children:"Discord Developer Docs: Permissions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes",children:"Discord Developer Docs: OAuth2 Scopes"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It's especially important to understand intents, as they help Robo.js know which permissions to add automatically."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.h4,{id:"permissions-and-scopes-are-usually-handled-for-you-but-knowing-the-ins-and-outs-of-intents-can-be-super-helpful-",children:"Permissions and scopes are usually handled for you, but knowing the ins and outs of intents can be super helpful! \ud83e\udde0"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9520:(e,n,s)=>{s.d(n,{B:()=>v});var i=s(9165),o=s(5996),t=s.n(o),r=s(6540),l=s(4848);const a=e=>{const{defaultValue:n,onSelect:s,options:o}=e,[a,d]=(0,r.useState)(!1),[c,h]=(0,r.useState)(n??o[0]);(0,r.useEffect)((()=>{h(n??o[0])}),[n,o]);const u=e=>()=>{h(e),s(e),d(!1)};return(0,l.jsxs)("div",{className:"select-container",children:[(0,l.jsxs)("button",{className:"select-row",onClick:()=>{d(!a)},children:[(0,l.jsx)("span",{className:"select-text no-margin",children:c.label}),(0,l.jsx)(t(),{path:a?i.Fb5:i.W5x,size:"16px",color:"rgb(161, 161, 161)"})]}),a&&(0,l.jsx)("menu",{className:"select-menu",children:o.map((e=>(0,l.jsx)("button",{className:e.value===c.value?"select-menu-active":void 0,onClick:u(e),children:e.label},e.value)))})]})};var d=s(7965),c=s.n(d);var h=s(2035),u=s(4843);const p=(0,h.eU)("npm");const m=[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"},{label:"PNPM",value:"pnpm"}],v=e=>{const{children:n,create:s,execute:o,install:r,title:d="Terminal"}=e,[h]=[async e=>c()(e)],[v,x]=function(){const[e,n]=(0,u.fp)(p);return[e,n]}(),j=m.find((e=>e.value===v));let b=n;"string"==typeof b&&(b=b.trim());let f="";s?f=function(e){if("npm"===e)return"npx create-robo";if("yarn"===e)return"yarn create robo";if("pnpm"===e)return"pnpm create robo"}(j.value)+" ":o?f=function(e){if("npm"===e)return"npx";if("yarn"===e)return"yarn";if("pnpm"===e)return"pnpm";if("bun"===e)return"bun"}(j.value)+" ":r&&b?f=function(e){if("npm"===e)return"npm install";if("yarn"===e)return"yarn add";if("pnpm"===e)return"pnpm add";if("bun"===e)return"bun add"}(j.value)+" ":r&&(f=j.value+" install");return(0,l.jsxs)("div",{className:"margin-bottom--lg terminal",children:[(0,l.jsxs)("div",{className:"terminal-header",children:[(0,l.jsx)(t(),{path:i.w_i,size:"16px",color:"rgb(161, 161, 161)"}),(0,l.jsx)("span",{className:"terminal-header-text",children:d}),(0,l.jsx)("div",{className:"spacer"}),(0,l.jsx)(a,{defaultValue:j,onSelect:e=>{console.log(e),x(e.value)},options:m}),(0,l.jsx)("button",{onClick:()=>{h(f+b)},children:(0,l.jsx)(t(),{path:i.$BT,size:"20px",color:"rgb(161, 161, 161)"})})]}),(0,l.jsx)("pre",{className:"prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar terminal-bg",children:(0,l.jsx)("code",{className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:(0,l.jsx)("span",{className:"token-line",children:s||o||r?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"token plain",children:f}),(0,l.jsx)("strong",{children:(0,l.jsx)("span",{className:"token plain",children:b})})]}):(0,l.jsx)("span",{className:"token plain",children:b})})})})]})}}}]);
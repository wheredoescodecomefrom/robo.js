"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[6156],{7251:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(4848),t=n(8453);const o={image:"https://preview.robojs.dev?path=/robojs/internals"},r="\ud83d\udc40 Understanding Internals",a={id:"robojs/internals",title:"\ud83d\udc40 Understanding Internals",description:"Ready to understand how it comes alive? Here's a simplified overview of Robo.js's internals so you can get started with confidence.",source:"@site/docs/robojs/internals.md",sourceDirName:"robojs",slug:"/robojs/internals",permalink:"/robojs/internals",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/robojs/internals.md",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1715232348e3,frontMatter:{image:"https://preview.robojs.dev?path=/robojs/internals"},sidebar:"tutorialSidebar",previous:{title:"\u26a1 Flashcore Database",permalink:"/robojs/flashcore"},next:{title:"\ud83d\udc85 Linting",permalink:"/robojs/linting"}},d={},l=[{value:"The Installed Package",id:"the-installed-package",level:2},{value:"CLI",id:"cli",level:3},{value:"Runtime",id:"runtime",level:3},{value:"Robo File Structure",id:"robo-file-structure",level:2},{value:"Build Process",id:"build-process",level:2},{value:"Manifest",id:"manifest",level:3},{value:"TypeScript",id:"typescript",level:3},{value:"Plugins",id:"plugins",level:3},{value:"Registration",id:"registration",level:3},{value:"Sage",id:"sage",level:2},{value:"Sage Assist",id:"sage-assist",level:3},{value:"Sage Bot",id:"sage-bot",level:3},{value:"Sage CLI",id:"sage-cli",level:3}];function c(e){const i={admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"-understanding-internals",children:"\ud83d\udc40 Understanding Internals"}),"\n",(0,s.jsx)(i.p,{children:"Ready to understand how it comes alive? Here's a simplified overview of Robo.js's internals so you can get started with confidence."}),"\n",(0,s.jsx)(i.admonition,{type:"tip",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"You don't need to understand this to use Robo.js,"})," but it's helpful to know what's going on under the hood if you're curious!"]})}),"\n",(0,s.jsx)(i.h2,{id:"the-installed-package",children:"The Installed Package"}),"\n",(0,s.jsxs)(i.p,{children:["The core of Robo.js divides into two components: the ",(0,s.jsx)(i.strong,{children:"CLI"})," and the ",(0,s.jsx)(i.strong,{children:"Runtime"}),". When you install ",(0,s.jsx)(i.code,{children:"robo.js"}),", these are added to your ",(0,s.jsx)(i.code,{children:"node_modules"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"cli",children:"CLI"}),"\n",(0,s.jsx)(i.p,{children:"It serves as the primary means for starting and building your Robo, enabling streamlined development by handling configurations and tooling. Commands within the CLI facilitate automatic restarts, file watching, TypeScript integrations, and plugin installations. The CLI is designed to be efficient, loading only essential tools for specific tasks, especially during production."}),"\n",(0,s.jsx)(i.h3,{id:"runtime",children:"Runtime"}),"\n",(0,s.jsx)(i.p,{children:"This component operates with your code, managing events, loading plugins, overseeing logs, and providing access to Robo APIs such as States and Flashcore. It incorporates Sage Assist and is designed for efficiency."}),"\n",(0,s.jsx)(i.h2,{id:"robo-file-structure",children:"Robo File Structure"}),"\n",(0,s.jsx)(i.p,{children:"Robo.js and its Platform Plugins mandate a specific organization of files. A consistent structure simplifies various operations."}),"\n",(0,s.jsx)(i.h2,{id:"build-process",children:"Build Process"}),"\n",(0,s.jsxs)(i.p,{children:['Robos undergo a "build" phase before execution. Invoke ',(0,s.jsx)(i.code,{children:"robo build"})," before ",(0,s.jsx)(i.code,{children:"robo start"}),". For developers, ",(0,s.jsx)(i.code,{children:"robo dev"})," builds automatically, updating with every file modification. Build results are stored in the ",(0,s.jsx)(i.code,{children:".robo"})," directory. This approach ensures both performance and predictability."]}),"\n",(0,s.jsx)(i.h3,{id:"manifest",children:"Manifest"}),"\n",(0,s.jsxs)(i.p,{children:["Robo files are cataloged in a manifest. This indexing accelerates the start-up process by eliminating the need to navigate the file tree. The manifest contributes to a reduced memory footprint, quicker boot-ups, and also contains Robo metadata, which aids debugging and features like ",(0,s.jsx)(i.code,{children:"robo invite"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"typescript",children:"TypeScript"}),"\n",(0,s.jsxs)(i.p,{children:["For those utilizing TypeScript, the files undergo conversion to JavaScript and subsequent optimization during the build process. This means hosting environments don't need TypeScript compilation abilities, and there's no need to bundle a TypeScript runtime such as ",(0,s.jsx)(i.code,{children:"ts-node"}),"."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"By the way:"})," This step is bypassed by Bun due to native TypeScript support."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"plugins",children:"Plugins"}),"\n",(0,s.jsxs)(i.p,{children:["The build process also indexes plugin files, enhancing their performance. As plugins are expected to be pre-built using ",(0,s.jsx)(i.code,{children:"robo build plugin"})," before being made public, there's no requirement for TypeScript processing. The pre-indexing of these plugins ensures swift integration into Robo. Additionally, plugins have the capability to modify the build process, enabling Robo.js's adaptability to various platforms and maintaining file structure flexibility."]}),"\n",(0,s.jsx)(i.h3,{id:"registration",children:"Registration"}),"\n",(0,s.jsx)(i.p,{children:"Platforms, like Discord, require information on the slash commands your Robo registers. This registration during the build process ensures platforms stay updated. Previously, manual script updating was required for slash commands. With Robo.js, this process is automated. The internal manifest file tracks modifications, ensuring updates are sent only when there's a genuine change, thus avoiding excessive API calls."}),"\n",(0,s.jsx)(i.h2,{id:"sage",children:"Sage"}),"\n",(0,s.jsx)(i.p,{children:"Sage operates predominantly behind the scenes in Robo.js, functioning in various capacities."}),"\n",(0,s.jsx)(i.h3,{id:"sage-assist",children:"Sage Assist"}),"\n",(0,s.jsx)(i.p,{children:"Through Sage Assist, developers can directly return responses from slash commands, avoiding the direct use of interaction objects. Essentially, Sage Assist consists of built-in abstractions in the framework that modify the coding process seamlessly. No external server interactions occur as everything is self-contained."}),"\n",(0,s.jsx)(i.h3,{id:"sage-bot",children:"Sage Bot"}),"\n",(0,s.jsx)(i.p,{children:"Sage operates as a Robo on our dedicated Discord server, powered by Robo.js. Users can engage with Sage on this platform for questions related to the framework."}),"\n",(0,s.jsx)(i.h3,{id:"sage-cli",children:"Sage CLI"}),"\n",(0,s.jsx)(i.p,{children:"A distinct CLI from Robo.js, Sage CLI is optional and particularly useful during development. Its absence in a web host does not affect functionality. It offers framework upgrade automation, assists in converting plugins from modules and vice versa, and provides diagnostic capabilities for Robos."}),"\n",(0,s.jsx)(i.p,{children:"Being a standalone CLI package ensures a reduction in storage needs in environments where it's not needed."})]})}function u(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var s=n(6540);const t={},o=s.createContext(t);function r(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[5429],{3534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var s=n(4848),o=n(8453),i=n(9520);const r={image:"https://preview.robojs.dev?path=/robojs/typescript"},a="\ud83d\udcd8 TypeScript",c={id:"robojs/typescript",title:"\ud83d\udcd8 TypeScript",description:"TypeScript is like JavaScript's cooler cousin, ready to swoop in and save the day by catching those sneaky typos and helping you figure out what code exists. And guess what? It's super easy to learn, too! If you're already buds with JavaScript, hop on over to the W3Schools TypeScript Tutorial to kick things off!",source:"@site/docs/robojs/typescript.mdx",sourceDirName:"robojs",slug:"/robojs/typescript",permalink:"/robojs/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/robojs/typescript.mdx",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1719205204e3,frontMatter:{image:"https://preview.robojs.dev?path=/robojs/typescript"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcbe State Management",permalink:"/robojs/state"},next:{title:"Hosting Overview",permalink:"/hosting/overview"}},l={},p=[{value:"Setting Up TypeScript Projects",id:"setting-up-typescript-projects",level:2},{value:"TypeScript Types in Robo.js",id:"typescript-types-in-robojs",level:2},{value:"Building Plugins with TypeScript",id:"building-plugins-with-typescript",level:2},{value:"TypeScript in Config Files",id:"typescript-in-config-files",level:2},{value:"Smoothing Imports with Path Aliases \ud83d\ude80",id:"smoothing-imports-with-path-aliases-",level:2},{value:"Monorepos: Your Codebase Universe \ud83c\udf10",id:"monorepos-your-codebase-universe-",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"-typescript",children:"\ud83d\udcd8 TypeScript"}),"\n",(0,s.jsxs)(t.p,{children:["TypeScript is like JavaScript's cooler cousin, ready to swoop in and save the day by catching those sneaky typos and helping you figure out what code exists. And guess what? It's super easy to learn, too! If you're already buds with JavaScript, hop on over to the ",(0,s.jsx)(t.a,{href:"https://www.w3schools.com/typescript/",children:"W3Schools TypeScript Tutorial"})," to kick things off!"]}),"\n",(0,s.jsxs)(t.p,{children:["Robo.js and TypeScript? They're BFFs. With first-class TypeScript support, you can say goodbye to setting up compiling or handling it yourself. Just stick to the ",(0,s.jsx)(t.code,{children:"dev"})," and ",(0,s.jsx)(t.code,{children:"build"})," commands, and you're golden. Plus, Robo.js uses the zippy Rust-based compiler, ",(0,s.jsx)(t.a,{href:"https://swc.rs/",children:"SWC"}),", for a nice performance boost."]}),"\n",(0,s.jsx)(t.h2,{id:"setting-up-typescript-projects",children:"Setting Up TypeScript Projects"}),"\n",(0,s.jsxs)(t.p,{children:["Ready to roll? The ",(0,s.jsx)(t.code,{children:"create-robo"})," CLI is here to kickstart your TypeScript projects without breaking a sweat:"]}),"\n",(0,s.jsx)(i.B,{create:!0,children:"my-awesome-robo --ts"}),"\n",(0,s.jsxs)(t.p,{children:["For existing projects, just install ",(0,s.jsx)(t.code,{children:"@swc/core"})," and ",(0,s.jsx)(t.code,{children:"typescript"})," as dev dependencies, whip up a ",(0,s.jsx)(t.code,{children:"tsconfig.json"})," file, and swap out those ",(0,s.jsx)(t.code,{children:".js"})," files for ",(0,s.jsx)(t.code,{children:".ts"}),":"]}),"\n",(0,s.jsx)(i.B,{install:!0,children:"--save-dev @swc/core typescript"}),"\n",(0,s.jsxs)(t.p,{children:["Here's an example ",(0,s.jsx)(t.code,{children:"tsconfig.json"})," file to get you started:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="tsconfig.json" showLineNumbers',children:'{\n\t"compilerOptions": {\n\t\t"target": "ESNext",\n\t\t"lib": ["esnext"],\n\t\t"allowJs": true,\n\t\t"skipLibCheck": true,\n\t\t"strict": true,\n\t\t"forceConsistentCasingInFileNames": true,\n\t\t"noEmit": true,\n\t\t"esModuleInterop": true,\n\t\t"module": "esnext",\n\t\t"moduleResolution": "node",\n\t\t"resolveJsonModule": true,\n\t\t"isolatedModules": true,\n\t\t"incremental": true\n\t},\n\t"include": ["**/*.ts"],\n\t"exclude": ["node_modules"]\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"typescript-types-in-robojs",children:"TypeScript Types in Robo.js"}),"\n",(0,s.jsxs)(t.p,{children:["Robo.js was born and raised with TypeScript, so it's got native support for all those types. You'll run into common ones like ",(0,s.jsx)(t.code,{children:"CommandConfig"}),", ",(0,s.jsx)(t.code,{children:"EventConfig"}),", ",(0,s.jsx)(t.code,{children:"CommandResult"}),", and ",(0,s.jsx)(t.code,{children:"Config"}),", along with more advanced types like ",(0,s.jsx)(t.code,{children:"Plugin"})," and ",(0,s.jsx)(t.code,{children:"Manifest"}),". Check out this code example of an async Robo command with a custom export config object:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="/src/commands/command.ts" {1} showLineNumbers',children:"import { CommandConfig, CommandResult } from 'robo.js'\n\nexport const config: CommandConfig = {\n\tdescription: 'An async example command'\n}\n\nexport default async (): Promise<CommandResult> => {\n\tawait new Promise((resolve) => setTimeout(resolve, 1000))\n\treturn 'Waited for 1 second.'\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Using TypeScript means you'll need types for interactions and other related objects. No worries, just import them straight from Discord.js! Here's an example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'title="/src/commands/ts-command.ts" showLineNumbers',children:"import { CommandInteraction } from 'discord.js'\n\nexport default (interaction: CommandInteraction) => {\n\tinteraction.reply('Hello, TypeScript!')\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"building-plugins-with-typescript",children:"Building Plugins with TypeScript"}),"\n",(0,s.jsxs)(t.p,{children:["Why not build plugins with TypeScript? It's a match made in heaven for better type-safety and an awesome development experience. And the best part? The ",(0,s.jsx)(t.code,{children:"robo build plugin"})," command already takes care of building plugins with TypeScript for you:"]}),"\n",(0,s.jsx)(i.B,{execute:!0,children:"robo build plugin"}),"\n",(0,s.jsx)(t.h2,{id:"typescript-in-config-files",children:"TypeScript in Config Files"}),"\n",(0,s.jsxs)(t.p,{children:["Config files may be in JavaScript format, but TypeScript's still got your back! Just use ",(0,s.jsx)(t.code,{children:"@type"})," annotation comments to harness its power. Editors like VS Code will support these annotations, giving you a smooth sail with autocompletion suggestions and type checking."]}),"\n",(0,s.jsx)(t.p,{children:"Here's an example of a config file with the GPT plugin:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'showLineNumbers {3} {11} title="config/robo.mjs"',children:"// @ts-check\n\n/** @type {import('robo.js').Plugin} */\nconst gptPlugin = [\n\t'@roboplay/gpt',\n\t{\n\t\t// Your GPT plugin config options...\n\t}\n]\n\n/** @type {import('robo.js').Config} */\nexport default {\n\t// Your config options...\n\tplugins: [gptPlugin]\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["In this example, the ",(0,s.jsx)(t.code,{children:"@ts-check"})," and ",(0,s.jsx)(t.code,{children:"@type"})," annotation comments clue in the editor on the types for the variables below. You'll be treated to autocompletion suggestions and type checking as you code, making your code super readable and easy to maintain. \ud83c\udf89"]}),"\n",(0,s.jsx)(t.h2,{id:"smoothing-imports-with-path-aliases-",children:"Smoothing Imports with Path Aliases \ud83d\ude80"}),"\n",(0,s.jsxs)(t.p,{children:["Do ",(0,s.jsx)(t.code,{children:"../../"}),' paths keep showing up in your nightmares? If the answer is a resounding "Yes!", path aliases in TypeScript can be your dreamscape! This superhero of code organization squashes pesky, winding relative imports, paving the way for cleaner, easier-to-navigate code streets.']}),"\n",(0,s.jsxs)(t.p,{children:["Slide this setup into your ",(0,s.jsx)(t.code,{children:"tsconfig.json"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'showLineNumbers title="tsconfig.json" {4-5}',children:'{\n\t"compilerOptions": {\n\t\t"paths": {\n\t\t\t"@/robo/*": ["src/*"],\n\t\t\t"@/something/*": ["src/modules/something/*"]\n\t\t}\n\t}\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Now, TypeScript is your faithful sidekick, transforming any ",(0,s.jsx)(t.code,{children:"@/robo/"})," or ",(0,s.jsx)(t.code,{children:"@/something/"})," imports into ",(0,s.jsx)(t.code,{children:"src/"})," and ",(0,s.jsx)(t.code,{children:"src/modules/something/"})," respectively. Think of the ",(0,s.jsx)(t.code,{children:"baseUrl"})," as your trusty map (defaults to the project directory, ",(0,s.jsx)(t.code,{children:"."}),") that these paths navigate from."]}),"\n",(0,s.jsx)(t.p,{children:"Voila! Your import statements turn magical:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",metastring:'showLineNumbers title="/src/commands/easy-peasy.ts"',children:"// Before\nimport { someVariable } from '../../../../modules/something/commands/someCommand.js'\n\n// After\nimport { someVariable } from '@/something/commands/someCommand.js'\n"})}),"\n",(0,s.jsx)(t.h2,{id:"monorepos-your-codebase-universe-",children:"Monorepos: Your Codebase Universe \ud83c\udf10"}),"\n",(0,s.jsx)(t.p,{children:"Ever wished for a cozy little universe where all your projects could live together? Monorepos are that dream come true! They bundle multiple projects in one repository, transforming code sharing and management into a walk in the park."}),"\n",(0,s.jsx)(t.p,{children:"In this shared utopia, your Robo can coexist with other projects. Here's a typical monorepo layout:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"/my-monorepo\n\u251c\u2500\u2500 /packages\n\u2502   \u251c\u2500\u2500 /robo\n\u2502   \u2502   \u251c\u2500\u2500 /.robo\n\u2502   \u2502   \u251c\u2500\u2500 /src\n\u2502   \u2502   \u2514\u2500\u2500 package.json\n\u2502   \u2514\u2500\u2500 /api\n\u2502       \u251c\u2500\u2500 /dist\n\u2502       \u251c\u2500\u2500 /src\n\u2502       \u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 package.json\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Although Robo.js and monorepos naturally get along, there's a secret sauce for importing bits across projects \u2013 ",(0,s.jsx)(t.a,{href:"#smoothing-imports-with-path-aliases-%F0%9F%9A%80",children:"the magic of TypeScript's path aliases"})," \u2728."]}),"\n",(0,s.jsx)(t.p,{children:"Let's configure the path aliases:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="tsconfig.json" showLineNumbers',children:'{\n\t// ... rest of tsconfig.json\n\t"compilerOptions": {\n\t\t"paths": {\n\t\t\t"@/api/*": ["../api/dist/*"],\n\t\t\t"@/robo/*": ["src/*"],\n\t\t\t"@/something/*": ["src/modules/something/*"]\n\t\t}\n\t}\n}\n'})}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.mdxAdmonitionTitle,{children:(0,s.jsx)(t.strong,{children:"Just one golden rule!"})}),(0,s.jsxs)(t.p,{children:["Always reference the compiled files (residing in ",(0,s.jsx)(t.code,{children:"/dist"}),"), not the raw ",(0,s.jsx)(t.code,{children:".ts"})," ones when sharing code across TypeScript projects."]})]}),"\n",(0,s.jsxs)(t.p,{children:["With this, ",(0,s.jsx)(t.code,{children:"@/api"})," points to ",(0,s.jsx)(t.code,{children:"/api/dist"})," \u2014 home to the compiled files from the ",(0,s.jsx)(t.code,{children:"api"})," project. For example, importing a function from the api project into your Robo.js project is as simple as:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"// You can now import from other projects in your Robo!\nimport { someFunction } from '@/api/someFile.js'\n"})}),"\n",(0,s.jsx)(t.p,{children:"And voila! Now your projects can freely share and reuse code across your monorepo universe!"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9520:(e,t,n)=>{n.d(t,{B:()=>j});var s=n(9165),o=n(5996),i=n.n(o),r=n(6540),a=n(4848);const c=e=>{const{defaultValue:t,onSelect:n,options:o}=e,[c,l]=(0,r.useState)(!1),[p,d]=(0,r.useState)(t??o[0]);(0,r.useEffect)((()=>{d(t??o[0])}),[t,o]);const h=e=>()=>{d(e),n(e),l(!1)};return(0,a.jsxs)("div",{className:"select-container",children:[(0,a.jsxs)("button",{className:"select-row",onClick:()=>{l(!c)},children:[(0,a.jsx)("span",{className:"select-text no-margin",children:p.label}),(0,a.jsx)(i(),{path:c?s.Fb5:s.W5x,size:"16px",color:"rgb(161, 161, 161)"})]}),c&&(0,a.jsx)("menu",{className:"select-menu",children:o.map((e=>(0,a.jsx)("button",{className:e.value===p.value?"select-menu-active":void 0,onClick:h(e),children:e.label},e.value)))})]})};var l=n(7965),p=n.n(l);var d=n(2035),h=n(4843);const m=(0,d.eU)("npm");const u=[{label:"NPM",value:"npm"},{label:"Yarn",value:"yarn"},{label:"PNPM",value:"pnpm"}],j=e=>{const{children:t,create:n,execute:o,install:r,title:l="Terminal"}=e,[d]=[async e=>p()(e)],[j,g]=function(){const[e,t]=(0,h.fp)(m);return[e,t]}(),y=u.find((e=>e.value===j));let x=t;"string"==typeof x&&(x=x.trim());let f="";n?f=function(e){if("npm"===e)return"npx create-robo";if("yarn"===e)return"yarn create robo";if("pnpm"===e)return"pnpm create robo"}(y.value)+" ":o?f=function(e){if("npm"===e)return"npx";if("yarn"===e)return"yarn";if("pnpm"===e)return"pnpm";if("bun"===e)return"bun"}(y.value)+" ":r&&x?f=function(e){if("npm"===e)return"npm install";if("yarn"===e)return"yarn add";if("pnpm"===e)return"pnpm add";if("bun"===e)return"bun add"}(y.value)+" ":r&&(f=y.value+" install");return(0,a.jsxs)("div",{className:"margin-bottom--lg terminal",children:[(0,a.jsxs)("div",{className:"terminal-header",children:[(0,a.jsx)(i(),{path:s.w_i,size:"16px",color:"rgb(161, 161, 161)"}),(0,a.jsx)("span",{className:"terminal-header-text",children:l}),(0,a.jsx)("div",{className:"spacer"}),(0,a.jsx)(c,{defaultValue:y,onSelect:e=>{console.log(e),g(e.value)},options:u}),(0,a.jsx)("button",{onClick:()=>{d(f+x)},children:(0,a.jsx)(i(),{path:s.$BT,size:"20px",color:"rgb(161, 161, 161)"})})]}),(0,a.jsx)("pre",{className:"prism-code language-bash codeBlock_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module thin-scrollbar terminal-bg",children:(0,a.jsx)("code",{className:"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-Content-styles-module",children:(0,a.jsx)("span",{className:"token-line",children:n||o||r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"token plain",children:f}),(0,a.jsx)("strong",{children:(0,a.jsx)("span",{className:"token plain",children:x})})]}):(0,a.jsx)("span",{className:"token plain",children:x})})})})]})}}}]);
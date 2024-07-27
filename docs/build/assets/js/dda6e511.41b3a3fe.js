"use strict";(self.webpackChunkrobo_js_docs=self.webpackChunkrobo_js_docs||[]).push([[1254],{7510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(4848),r=n(8453),s=n(1470),o=n(9365);const i={image:"https://preview.robojs.dev?path=/discord-bots/context-menu"},l="\ud83d\uddb1\ufe0f Context Menu",c={id:"discord-bots/context-menu",title:"\ud83d\uddb1\ufe0f Context Menu",description:'These are your quick, right-click interactions that swoop in when users right-click a message or a user. They may not boast options, descriptions, or command stacking like slash commands, but they shine in simplicity and context awareness. Choose between "Message" and "User" to suit the situation.',source:"@site/docs/discord-bots/context-menu.md",sourceDirName:"discord-bots",slug:"/discord-bots/context-menu",permalink:"/discord-bots/context-menu",draft:!1,unlisted:!1,editUrl:"https://github.com/Wave-Play/robo.js/edit/main/docs/docs/discord-bots/context-menu.md",tags:[],version:"current",lastUpdatedBy:"Pkmmte Xeleon",lastUpdatedAt:1715232634e3,frontMatter:{image:"https://preview.robojs.dev?path=/discord-bots/context-menu"},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcdc Commands",permalink:"/discord-bots/commands"},next:{title:"\ud83d\udc1b Debugging",permalink:"/discord-bots/debug"}},u={},d=[{value:"Forging a Context Menu Command \ud83d\udee0\ufe0f",id:"forging-a-context-menu-command-\ufe0f",level:2},{value:"Message Command Example \ud83d\udcec",id:"message-command-example-",level:2},{value:"User Command Example \ud83d\udc64",id:"user-command-example-",level:2},{value:"Smooth Sailing from Here \ud83c\udf0a",id:"smooth-sailing-from-here-",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"\ufe0f-context-menu",children:"\ud83d\uddb1\ufe0f Context Menu"}),"\n",(0,a.jsx)(t.p,{children:'These are your quick, right-click interactions that swoop in when users right-click a message or a user. They may not boast options, descriptions, or command stacking like slash commands, but they shine in simplicity and context awareness. Choose between "Message" and "User" to suit the situation.'}),"\n",(0,a.jsx)(t.h2,{id:"forging-a-context-menu-command-\ufe0f",children:"Forging a Context Menu Command \ud83d\udee0\ufe0f"}),"\n",(0,a.jsxs)(t.p,{children:["Carving out a context menu command is a walk in the park. Simply whip up a new file in the fitting subdirectory under ",(0,a.jsx)(t.code,{children:"/src/context"}),", and voila - your command is born! Name your file, and hence the command, as you like - spaces and capitalized letters are A-OK here!"]}),"\n",(0,a.jsx)(t.p,{children:"Here's a snapshot of what it could look like:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"/src\n\u2514\u2500\u2500 /context\n    \u251c\u2500\u2500 /message\n    \u2502   \u251c\u2500\u2500 Translate.js\n    \u2502   \u2514\u2500\u2500 Analyze Sentiment.js\n    \u2514\u2500\u2500 /user\n        \u251c\u2500\u2500 Kick.js\n        \u2514\u2500\u2500 Send Welcome Message.js\n"})}),"\n",(0,a.jsx)(t.h2,{id:"message-command-example-",children:"Message Command Example \ud83d\udcec"}),"\n",(0,a.jsxs)(t.p,{children:["When your message command is summoned, you'll receive a ",(0,a.jsx)(t.code,{children:"MessageContextMenuCommandInteraction"})," object and the targeted message. Pretty neat, right?"]}),"\n",(0,a.jsx)(t.p,{children:"Let's say you're crafting a command to translate a message:"}),"\n",(0,a.jsxs)(s.A,{groupId:"examples-script",children:[(0,a.jsx)(o.A,{value:"js",label:"Javascript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="/src/context/message/Translate.js"',children:"import { translateMessage } from '../services/translator.js'\n\nexport default async function (interaction, message) {\n\tconst translatedContent = await translateMessage(message.content)\n\treturn `Translation: ${translatedContent}`\n}\n"})})}),(0,a.jsx)(o.A,{value:"ts",label:"Typescript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="/src/context/message/Translate.ts"',children:"import { translateMessage } from '../services/translator.js'\nimport type { MessageContextMenuCommandInteraction, Message } from 'discord.js'\n\nexport default async function (interaction: MessageContextMenuCommandInteraction, message: Message) {\n\tconst translatedContent = await translateMessage(message.content)\n\treturn `Translation: ${translatedContent}`\n}\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"user-command-example-",children:"User Command Example \ud83d\udc64"}),"\n",(0,a.jsxs)(t.p,{children:["If you're stirring up a user command instead, you'll be served a ",(0,a.jsx)(t.code,{children:"UserContextMenuCommandInteraction"})," object along with the selected user."]}),"\n",(0,a.jsx)(t.p,{children:"Here's a glimpse of a user command in action, giving a user the ol' kickaroo:"}),"\n",(0,a.jsxs)(s.A,{groupId:"examples-script",children:[(0,a.jsx)(o.A,{value:"js",label:"Javascript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",metastring:'title="/src/context/user/Kick.js"',children:"export default async function (interaction, user) {\n\tconst guildMember = interaction.guild.members.resolve(user)\n\tawait guildMember.kick()\n\treturn `Yeeted ${user.username} from the server. Bye! \ud83d\udc4b`\n}\n"})})}),(0,a.jsx)(o.A,{value:"ts",label:"Typescript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",metastring:'title="/src/context/user/Kick.ts"',children:"import type { UserContextMenuCommandInteraction, GuildMember } from 'discord.js'\n\nexport default async function (interaction: UserContextMenuCommandInteraction, user: GuildMember) {\n\tconst guildMember = interaction.guild.members.resolve(user)\n\tawait guildMember.kick()\n\treturn `Yeeted ${user.username} from the server. Bye! \ud83d\udc4b`\n}\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"smooth-sailing-from-here-",children:"Smooth Sailing from Here \ud83c\udf0a"}),"\n",(0,a.jsx)(t.p,{children:"If you've already dipped your toes into slash commands, this should be a familiar beach. Your context commands get the first-class ticket with automatic registration, and Sage stays by your side, making interaction replies as cool as a cucumber. So, go ahead, craft those unique context menu commands and let your server shine! \ud83c\udf1f"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(8215);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(6540),r=n(8215),s=n(3104),o=n(6347),i=n(205),l=n(7485),c=n(1682),u=n(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=m(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:n,groupId:r}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=c??g;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=g(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function k(e){const t=(0,b.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var a=n(6540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);
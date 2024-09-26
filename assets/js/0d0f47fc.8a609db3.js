"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4263],{3036:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>j});var r=t(4848),n=t(8453),i=t(9489),c=t(7227);const o={id:"presets",title:"Presets"},l=void 0,d={id:"getting-started/presets",title:"Presets",description:"The presets",source:"@site/versioned_docs/version-29.0/getting-started/presets.md",sourceDirName:"getting-started",slug:"/getting-started/presets",permalink:"/ts-jest/docs/29.0/getting-started/presets",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/presets.md",tags:[],version:"29.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727349849e3,frontMatter:{id:"presets",title:"Presets"},sidebar:"version-29.0-docs",previous:{title:"Installation",permalink:"/ts-jest/docs/29.0/getting-started/installation"},next:{title:"Options",permalink:"/ts-jest/docs/29.0/getting-started/options"}},a={},j=[{value:"The presets",id:"the-presets",level:3},{value:"Basic usage",id:"basic-usage",level:3},{value:"Advanced",id:"advanced",level:3}];function h(e){const s={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h3,{id:"the-presets",children:"The presets"}),"\n",(0,r.jsx)(s.admonition,{type:"important",children:(0,r.jsxs)(s.p,{children:["Starting from ",(0,r.jsx)(s.strong,{children:"v28.0.0"}),", ",(0,r.jsx)(s.code,{children:"ts-jest"})," will gradually opt in adoption of ",(0,r.jsx)(s.code,{children:"esbuild"}),"/",(0,r.jsx)(s.code,{children:"swc"})," more to improve the performance. To make the transition smoothly, we introduce ",(0,r.jsx)(s.code,{children:"legacy"})," presets as a fallback when the new codes don't work yet."]})}),"\n",(0,r.jsx)(s.admonition,{type:"caution",children:(0,r.jsxs)(s.p,{children:["If you are using custom ",(0,r.jsx)(s.code,{children:"transform"})," config, please remove ",(0,r.jsx)(s.code,{children:"preset"})," from your Jest config to avoid issues that Jest doesn't transform files correctly."]})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ts-jest"})," comes with several presets, covering most of the project's base configuration:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Preset name"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/default"}),(0,r.jsx)("br",{}),"or ",(0,r.jsx)(s.code,{children:"ts-jest"})]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax, leaving JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/default-legacy"}),(0,r.jsx)("br",{}),"or ",(0,r.jsx)(s.code,{children:"ts-jest/legacy"})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax, leaving JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/default-esm"}),(0,r.jsx)("br",{})]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax, leaving JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/default-esm-legacy"}),(0,r.jsx)("br",{})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax, leaving JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") as-is."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-ts"})}),(0,r.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),", ",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:".jsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax.",(0,r.jsx)("br",{}),"You'll need to set ",(0,r.jsx)(s.code,{children:"allowJs"})," to ",(0,r.jsx)(s.code,{children:"true"})," in your ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-ts-legacy"})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),", ",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:".jsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax.",(0,r.jsx)("br",{}),"You'll need to set ",(0,r.jsx)(s.code,{children:"allowJs"})," to ",(0,r.jsx)(s.code,{children:"true"})," in your ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-ts-esm"})}),(0,r.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),", ",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:".jsx"}),", ",(0,r.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax.",(0,r.jsx)("br",{}),"You'll need to set ",(0,r.jsx)(s.code,{children:"allowJs"})," to ",(0,r.jsx)(s.code,{children:"true"})," in your ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-ts-esm-legacy"})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript and JavaScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),", ",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:".jsx"}),", ",(0,r.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax.",(0,r.jsx)("br",{}),"You'll need to set ",(0,r.jsx)(s.code,{children:"allowJs"})," to ",(0,r.jsx)(s.code,{children:"true"})," in your ",(0,r.jsx)(s.code,{children:"tsconfig.json"})," file."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-babel"})}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax, and JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"babel-jest"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-babel-legacy"})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"CommonJS"})," syntax, and JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"babel-jest"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-babel-esm"})}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax, and JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),", ",(0,r.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"babel-jest"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"ts-jest/presets/js-with-babel-esm-legacy"})," (",(0,r.jsx)(s.strong,{children:"LEGACY"}),")"]}),(0,r.jsxs)(s.td,{children:["TypeScript files (",(0,r.jsx)(s.code,{children:".ts"}),", ",(0,r.jsx)(s.code,{children:".tsx"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"ts-jest"})," to ",(0,r.jsx)(s.strong,{children:"ESM"})," syntax, and JavaScript files (",(0,r.jsx)(s.code,{children:".js"}),", ",(0,r.jsx)(s.code,{children:"jsx"}),", ",(0,r.jsx)(s.code,{children:".mjs"}),") will be transformed by ",(0,r.jsx)(s.code,{children:"babel-jest"}),"."]})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"basic-usage",children:"Basic usage"}),"\n",(0,r.jsxs)(s.p,{children:["In most cases, simply setting the ",(0,r.jsx)(s.code,{children:"preset"})," key to the desired preset name in your Jest config should be enough to start\nusing TypeScript with Jest (assuming you added ",(0,r.jsx)(s.code,{children:"ts-jest"})," to your ",(0,r.jsx)(s.code,{children:"devDependencies"})," of course):"]}),"\n",(0,r.jsxs)(i.A,{groupId:"code-examples",children:[(0,r.jsx)(c.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n"})})}),(0,r.jsx)(c.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  // Replace `ts-jest` with the preset you want to use\n  // from the above list\n  preset: 'ts-jest',\n}\n\nexport default jestConfig\n"})})}),(0,r.jsx)(c.A,{value:"JSON",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n\n{\n  // [...]\n  "jest": {\n    // Replace `ts-jest` with the preset you want to use\n    // from the above list\n    "preset": "ts-jest"\n  }\n}\n'})})})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," presets use ",(0,r.jsx)(s.code,{children:"testMatch"}),", like Jest does in its defaults. If you want to use ",(0,r.jsx)(s.code,{children:"testRegex"})," instead in your configuration, you MUST set ",(0,r.jsx)(s.code,{children:"testMatch"})," to ",(0,r.jsx)(s.code,{children:"null"})," or Jest will bail."]}),"\n",(0,r.jsx)(s.h3,{id:"advanced",children:"Advanced"}),"\n",(0,r.jsxs)(s.p,{children:["Any preset can also be used with other options.\nIf you're already using another preset, you might want only some specific settings from the chosen ",(0,r.jsx)(s.code,{children:"ts-jest"})," preset.\nIn this case you'll need to use the JavaScript version of Jest config (comment/uncomment according to your use case):"]}),"\n",(0,r.jsxs)(i.A,{groupId:"code-examples",children:[(0,r.jsx)(c.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n// const { defaultsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTs: tsjPreset } = require('ts-jest/presets')\n// const { jsWithTsESM: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabel: tsjPreset } = require('ts-jest/presets')\n// const { jsWithBabelESM: tsjPreset } = require('ts-jest/presets')\n\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n"})})}),(0,r.jsx)(c.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nimport { defaults as tsjPreset } from 'ts-jest/presets'\n// import { defaultsESM as tsjPreset } from 'ts-jest/presets';\n// import { jsWithTs as tsjPreset } from 'ts-jest/presets';\n// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets';\n// import { jsWithBabel as tsjPreset } from 'ts-jest/presets';\n// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets';\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    ...tsjPreset.transform,\n    // [...]\n  },\n}\n\nexport default jestConfig\n"})})})]})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7227:(e,s,t)=>{t.d(s,{A:()=>c});t(6540);var r=t(4164);const n={tabItem:"tabItem_Ymn6"};var i=t(4848);function c(e){let{children:s,hidden:t,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,c),hidden:t,children:s})}},9489:(e,s,t)=>{t.d(s,{A:()=>w});var r=t(6540),n=t(4164),i=t(4245),c=t(6347),o=t(6494),l=t(2814),d=t(5167),a=t(9900);function j(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:s,children:t}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return j(e).map((e=>{let{props:{value:s,label:t,attributes:r,default:n}}=e;return{value:s,label:t,attributes:r,default:n}}))}(t);return function(e){const s=(0,d.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function u(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:t}=e;const n=(0,c.W6)(),i=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(n.location.search);s.set(i,e),n.replace({...n.location,search:s.toString()})}),[i,n])]}function p(e){const{defaultValue:s,queryString:t=!1,groupId:n}=e,i=h(e),[c,l]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!u({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:i}))),[d,j]=x({queryString:t,groupId:n}),[p,f]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[n,i]=(0,a.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:n}),m=(()=>{const e=d??p;return u({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),j(e),f(e)}),[j,f,i]),tabValues:i}}var f=t(1062);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function g(e){let{className:s,block:t,selectedValue:r,selectValue:c,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),a=e=>{const s=e.currentTarget,t=l.indexOf(s),n=o[t].value;n!==r&&(d(s),c(n))},j=e=>{let s=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;s=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;s=l[t]??l[l.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},s),children:o.map((e=>{let{value:s,label:t,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>l.push(e),onKeyDown:j,onClick:a,...i,className:(0,n.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===s}),children:t??s},s)}))})}function y(e){let{lazy:s,children:t,selectedValue:i}=e;const c=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=c.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:c.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function v(e){const s=p(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...s,...e}),(0,b.jsx)(y,{...s,...e})]})}function w(e){const s=(0,f.A)();return(0,b.jsx)(v,{...e,children:j(e.children)},String(s))}},8453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>o});var r=t(6540);const n={},i=r.createContext(n);function c(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);
"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[5258],{5003:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>j,frontMatter:()=>c,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"getting-started/options","title":"Options","description":"Introduction","source":"@site/versioned_docs/version-29.0/getting-started/options.md","sourceDirName":"getting-started","slug":"/getting-started/options","permalink":"/ts-jest/docs/29.0/getting-started/options","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/options.md","tags":[],"version":"29.0","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1733657937000,"frontMatter":{"id":"options","title":"Options"},"sidebar":"version-29.0-docs","previous":{"title":"Presets","permalink":"/ts-jest/docs/29.0/getting-started/presets"},"next":{"title":"Paths mapping","permalink":"/ts-jest/docs/29.0/getting-started/paths-mapping"}}');var r=s(4848),o=s(8453),i=s(9489),l=s(7227);const c={id:"options",title:"Options"},a=void 0,d={},h=[{value:"Introduction",id:"introduction",level:3},{value:"Options",id:"options",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsxs)(t.p,{children:["If you are using custom ",(0,r.jsx)(t.code,{children:"transform"})," config, please remove ",(0,r.jsx)(t.code,{children:"preset"})," from your Jest config to avoid issues that Jest doesn't transform files correctly."]})}),"\n",(0,r.jsxs)(t.p,{children:["All ",(0,r.jsx)(t.code,{children:"ts-jest"})," specific options can be defined in Jest ",(0,r.jsx)(t.code,{children:"transform"})," config object in the ",(0,r.jsx)(t.code,{children:"package.json"})," file of your project,\nor through a ",(0,r.jsx)(t.code,{children:"jest.config.js"}),", or ",(0,r.jsx)(t.code,{children:"jest.config.ts"})," file."]}),"\n",(0,r.jsxs)(i.A,{groupId:"code-examples",children:[(0,r.jsx)(l.A,{value:"js",label:"JavaScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        // ts-jest configuration goes here\n      },\n    ],\n  },\n}\n"})})}),(0,r.jsx)(l.A,{value:"ts",label:"TypeScript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        // ts-jest configuration goes here\n      },\n    ],\n  },\n}\n"})})}),(0,r.jsx)(l.A,{value:"JSON",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          // ts-jest configuration goes here\n        }\n      ]\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsx)(t.admonition,{type:"important",children:(0,r.jsxs)(t.p,{children:["When using TypeScript Jest config file, Jest will use ",(0,r.jsx)(t.code,{children:"ts-node"})," to compile the config file. ",(0,r.jsx)(t.code,{children:"ts-jest"})," doesn't take part in\nthat process."]})}),"\n",(0,r.jsx)(t.h3,{id:"options",children:"Options"}),"\n",(0,r.jsx)(t.p,{children:"All options have default values which should fit most of the projects. Click on the option's name to see details and example(s)."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Option"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Default"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/compiler",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"compiler"})})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/compiler",children:"TypeScript module to use as compiler."})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:'"typescript"'})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/tsconfig",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"tsconfig"})})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/tsconfig",children:"TypeScript compiler related configuration."})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"string"}),"|",(0,r.jsx)(t.code,{children:"object"}),"|",(0,r.jsx)(t.code,{children:"boolean"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"auto"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/isolatedModules",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"isolatedModules"})})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/isolatedModules",children:"Disable type-checking"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"disabled"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/astTransformers",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"astTransformers"})})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/astTransformers",children:"Custom TypeScript AST transformers"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"object"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"auto"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/diagnostics",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"diagnostics"})})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/diagnostics",children:"Diagnostics related configuration."})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"boolean"}),"|",(0,r.jsx)(t.code,{children:"object"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"enabled"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/babelConfig",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"babelConfig"})})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/babelConfig",children:"Babel(Jest) related configuration."})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"boolean"}),"|",(0,r.jsx)(t.code,{children:"string"}),"|",(0,r.jsx)(t.code,{children:"object"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"disabled"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/stringifyContentPathRegex",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"stringifyContentPathRegex"})})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/stringifyContentPathRegex",children:"Files which will become modules returning self content."})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"string"}),"|",(0,r.jsx)(t.code,{children:"RegExp"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"disabled"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/useESM",children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"useESM"})})})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"options/useESM",children:"Enable ESM support"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"boolean"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.em,{children:"auto"})})]})]})]})]})}function j(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},7227:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);var n=s(4164);const r={tabItem:"tabItem_Ymn6"};var o=s(4848);function i(e){let{children:t,hidden:s,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,i),hidden:s,children:t})}},9489:(e,t,s)=>{s.d(t,{A:()=>w});var n=s(6540),r=s(4164),o=s(4245),i=s(6347),l=s(6494),c=s(2814),a=s(5167),d=s(9900);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,a.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function j(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:s}=e;const r=(0,i.W6)(),o=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,c.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function p(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,o=u(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!j({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[a,h]=x({queryString:s,groupId:r}),[p,f]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,d.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:r}),m=(()=>{const e=a??p;return j({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{m&&c(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!j({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,o]),tabValues:o}}var f=s(1062);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function b(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,o.a_)(),d=e=>{const t=e.currentTarget,s=c.indexOf(t),r=l[s].value;r!==n&&(a(t),i(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;t=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;t=c[s]??c[c.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,r.A)("tabs__item",m.tabItem,o?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:o}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function y(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,g.jsx)(b,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(t))}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var n=s(6540);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
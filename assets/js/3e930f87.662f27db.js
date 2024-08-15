"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[2078],{1921:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=s(4848),r=s(8453),a=s(9489),o=s(7227);const l={title:"Compiler option"},i=void 0,c={id:"getting-started/options/compiler",title:"Compiler option",description:"The compiler option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler.",source:"@site/docs/getting-started/options/compiler.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/compiler",permalink:"/ts-jest/docs/next/getting-started/options/compiler",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/compiler.md",tags:[],version:"current",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1723737222e3,frontMatter:{title:"Compiler option"}},u={},d=[{value:"Example",id:"example",level:3}];function p(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"compiler"})," option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler."]}),"\n",(0,n.jsxs)(t.p,{children:["The default value is ",(0,n.jsx)(t.code,{children:"typescript"}),", which will load the original ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/typescript",children:"TypeScript compiler module"}),".\nThe loaded version will depend on the one installed in your project."]}),"\n",(0,n.jsxs)(t.p,{children:["If you use a custom compiler, such as ",(0,n.jsx)(t.code,{children:"ttypescript"}),", make sure its API is the same as the original TypeScript, at least for what ",(0,n.jsx)(t.code,{children:"ts-jest"})," is using."]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(a.A,{groupId:"code-examples",children:[(0,n.jsx)(o.A,{value:"js",label:"JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"tab",children:"// jest.config.js\n/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        compiler: 'ttypescript',\n      },\n    ],\n  },\n}\n"})})}),(0,n.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:"tab",children:"// jest.config.ts\nimport type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process ts,js,tsx,jsx with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        compiler: 'ttypescript',\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"})})}),(0,n.jsx)(o.A,{value:"JSON",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-JSON",metastring:"tab",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process ts,js,tsx,jsx with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process ts,js,tsx,jsx,mts,mjs,mtsx,mjsx with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "compiler": "ttypescript"\n        }\n      ]\n    }\n  }\n}\n'})})})]})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},7227:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var n=s(4164);const r={tabItem:"tabItem_Ymn6"};var a=s(4848);function o(e){let{children:t,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:s,children:t})}},9489:(e,t,s)=>{s.d(t,{A:()=>w});var n=s(6540),r=s(4164),a=s(4245),o=s(6347),l=s(6494),i=s(2814),c=s(5167),u=s(9900);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function m(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:s}=e;const r=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=h({queryString:s,groupId:r}),[f,j]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Dv)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),x=(()=>{const e=c??f;return m({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),j(e)}),[d,j,a]),tabValues:a}}var j=s(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(4848);function g(e){let{className:t,block:s,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,s=i.indexOf(t),r=l[s].value;r!==n&&(c(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;t=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;t=i[s]??i[i.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},t),children:l.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function v(e){let{lazy:t,children:s,selectedValue:a}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,b.jsx)(g,{...t,...e}),(0,b.jsx)(v,{...t,...e})]})}function w(e){const t=(0,j.A)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>l});var n=s(6540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
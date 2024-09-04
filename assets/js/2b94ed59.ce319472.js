"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[6797],{4510:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=o(4848),s=o(8453);const i={title:"Compiler option"},r=void 0,l={id:"getting-started/options/compiler",title:"Compiler option",description:"The compiler option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler.",source:"@site/versioned_docs/version-26.5/getting-started/options/compiler.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/compiler",permalink:"/ts-jest/docs/26.5/getting-started/options/compiler",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/getting-started/options/compiler.md",tags:[],version:"26.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1725431257e3,frontMatter:{title:"Compiler option"}},c={},p=[{value:"Example",id:"example",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"compiler"})," option allows you to define the compiler to be used. It'll be used to load the NodeJS module holding the TypeScript compiler."]}),"\n",(0,n.jsxs)(t.p,{children:["The default value is ",(0,n.jsx)(t.code,{children:"typescript"}),", which will load the original ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/typescript",children:"TypeScript compiler module"}),".\nThe loaded version will depend on the one installed in your project."]}),"\n",(0,n.jsxs)(t.p,{children:["If you use a custom compiler, such as ",(0,n.jsx)(t.code,{children:"ttypescript"}),", make sure its API is the same as the original TypeScript, at least for what ",(0,n.jsx)(t.code,{children:"ts-jest"})," is using."]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      compiler: 'ttypescript',\n    },\n  },\n}\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "compiler": "ttypescript"\n      }\n    }\n  }\n}\n'})})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>l});var n=o(6540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);
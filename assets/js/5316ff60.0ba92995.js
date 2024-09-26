"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[5520],{8863:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(4848),t=n(8453);const o={title:"AST transformers option"},a=void 0,i={id:"getting-started/options/astTransformers",title:"AST transformers option",description:"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom",source:"@site/versioned_docs/version-27.0/getting-started/options/astTransformers.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/astTransformers",permalink:"/ts-jest/docs/27.0/getting-started/options/astTransformers",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/getting-started/options/astTransformers.md",tags:[],version:"27.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727349849e3,frontMatter:{title:"AST transformers option"}},c={},l=[{value:"Examples",id:"examples",level:3},{value:"Basic Transformers",id:"basic-transformers",level:4},{value:"Configuring transformers with options",id:"configuring-transformers-with-options",level:4},{value:"Public transformers",id:"public-transformers",level:3},{value:"Example of opt-in transformers",id:"example-of-opt-in-transformers",level:4},{value:"Writing custom TypeScript AST transformers",id:"writing-custom-typescript-ast-transformers",level:3}];function d(e){const s={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ts-jest"})," by default does hoisting for a few ",(0,r.jsx)(s.code,{children:"jest"})," methods via a TypeScript AST transformer. One can also create custom\nTypeScript AST transformers and provide them to ",(0,r.jsx)(s.code,{children:"ts-jest"})," to include into compilation process."]}),"\n",(0,r.jsxs)(s.p,{children:["The option is ",(0,r.jsx)(s.code,{children:"astTransformers"})," and it allows ones to specify which 3 types of TypeScript AST transformers to use with ",(0,r.jsx)(s.code,{children:"ts-jest"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"before"})," means your transformers get run before TS ones, which means your transformers will get raw TS syntax\ninstead of transpiled syntax (e.g ",(0,r.jsx)(s.code,{children:"import"})," instead of ",(0,r.jsx)(s.code,{children:"require"})," or ",(0,r.jsx)(s.code,{children:"define"})," )."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"after"})," means your transformers get run after TS ones, which gets transpiled syntax."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"afterDeclarations"})," means your transformers get run during ",(0,r.jsx)(s.code,{children:"d.ts"})," generation phase, allowing you to transform output type declarations."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.h4,{id:"basic-transformers",children:"Basic Transformers"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: ['my-custom-transformer'],\n      },\n    },\n  },\n}\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": ["my-custom-transformer"]\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(s.h4,{id:"configuring-transformers-with-options",children:"Configuring transformers with options"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: [\n          {\n            path: 'my-custom-transformer-that-needs-extra-opts',\n            options: {}, // extra options to pass to transformers here\n          },\n        ],\n      },\n    },\n  },\n}\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": [\n            {\n              "path": "my-custom-transformer-that-needs-extra-opts",\n              "options": {} // extra options to pass to transformers here\n            }\n          ]\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"public-transformers",children:"Public transformers"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ts-jest"})," is able to expose transformers for public usage to provide the possibility to opt-in/out for users. Currently\nthe exposed transformers are:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"path-mapping"})," convert alias import/export to relative import/export path base on ",(0,r.jsx)(s.code,{children:"paths"})," in ",(0,r.jsx)(s.code,{children:"tsconfig"}),".\nThis transformer works similar to ",(0,r.jsx)(s.code,{children:"moduleNameMapper"})," in ",(0,r.jsx)(s.code,{children:"jest.config.js"}),". When using this transformer, one might not need\n",(0,r.jsx)(s.code,{children:"moduleNameMapper"})," anymore."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"example-of-opt-in-transformers",children:"Example of opt-in transformers"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      astTransformers: {\n        before: ['ts-jest/dist/transformers/path-mapping'],\n      },\n    },\n  },\n}\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "astTransformers": {\n          "before": ["ts-jest/dist/transformers/path-mapping"]\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"writing-custom-typescript-ast-transformers",children:"Writing custom TypeScript AST transformers"}),"\n",(0,r.jsxs)(s.p,{children:["To write a custom TypeScript AST transformers, one can take a look at ",(0,r.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest/tree/main/src/transformers",children:"the one"})," that ",(0,r.jsx)(s.code,{children:"ts-jest"})," is using."]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var r=n(6540);const t={},o=r.createContext(t);function a(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);
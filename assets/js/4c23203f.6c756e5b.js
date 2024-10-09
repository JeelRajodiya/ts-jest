"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8468],{6006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(4848),i=n(8453);const o={id:"react-native",title:"Using with React Native"},c=void 0,r={id:"guides/react-native",title:"Using with React Native",description:"To use ts-jest with React Native + TypeScript and Babel 7, you'll first need to follow this tutorial.",source:"@site/versioned_docs/version-26.5/guides/react-native.md",sourceDirName:"guides",slug:"/guides/react-native",permalink:"/ts-jest/docs/26.5/guides/react-native",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/guides/react-native.md",tags:[],version:"26.5",lastUpdatedBy:"Logan (ShinProg)",lastUpdatedAt:1728462101e3,frontMatter:{id:"react-native",title:"Using with React Native"},sidebar:"version-26.5-docs",previous:{title:"Mock ES6 class",permalink:"/ts-jest/docs/26.5/guides/mock-es6-class"},next:{title:"Test helpers",permalink:"/ts-jest/docs/26.5/guides/test-helpers"}},a={},l=[{value:"Babel config",id:"babel-config",level:3},{value:"TypeScript Configuration",id:"typescript-configuration",level:3},{value:"Jest config",id:"jest-config",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["To use ",(0,s.jsx)(t.code,{children:"ts-jest"})," with React Native + TypeScript and Babel 7, you'll first need to follow ",(0,s.jsx)(t.a,{href:"https://reactnative.dev/blog/2018/05/07/using-typescript-with-react-native",children:"this tutorial"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"After that, some little modifications will be required as follows:"}),"\n",(0,s.jsx)(t.h3,{id:"babel-config",children:"Babel config"}),"\n",(0,s.jsxs)(t.p,{children:["If you didn't yet, move any Babel config from ",(0,s.jsx)(t.code,{children:".babelrc"})," to ",(0,s.jsx)(t.code,{children:"babel.config.js"}),". It should at least contain:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// babel.config.js\nmodule.exports = {\n  presets: ['module:metro-react-native-babel-preset'],\n}\n"})}),"\n",(0,s.jsx)(t.h3,{id:"typescript-configuration",children:"TypeScript Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["Create a new ",(0,s.jsx)(t.code,{children:"tsconfig.spec.json"})," at the root of your project with the following content"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'// tsconfig.spec.json\n{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "jsx": "react"\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"jest-config",children:"Jest config"}),"\n",(0,s.jsxs)(t.p,{children:["In the same way that you moved Babel config, move Jest config from ",(0,s.jsx)(t.code,{children:"jest"})," key of ",(0,s.jsx)(t.code,{children:"package.json"})," to ",(0,s.jsx)(t.code,{children:"jest.config.js"}),". It should look like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  preset: 'react-native',\n  globals: {\n    'ts-jest': {\n      tsconfig: 'tsconfig.spec.json',\n    },\n  },\n  transform: {\n    '^.+\\\\.jsx$': 'babel-jest',\n    '^.+\\\\.tsx?$': 'ts-jest',\n  },\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>r});var s=n(6540);const i={},o=s.createContext(i);function c(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[9197],{71:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=n(4848),o=n(8453);const r={id:"mock-es6-class",title:"Mock ES6 class"},i=void 0,c={id:"guides/mock-es6-class",title:"Mock ES6 class",description:"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.",source:"@site/versioned_docs/version-26.5/guides/mock-es6-class.md",sourceDirName:"guides",slug:"/guides/mock-es6-class",permalink:"/ts-jest/docs/26.5/guides/mock-es6-class",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/guides/mock-es6-class.md",tags:[],version:"26.5",lastUpdatedBy:"Logan (ShinProg)",lastUpdatedAt:1728462101e3,frontMatter:{id:"mock-es6-class",title:"Mock ES6 class"},sidebar:"version-26.5-docs",previous:{title:"ESM Support",permalink:"/ts-jest/docs/26.5/guides/esm-support"},next:{title:"Using with React Native",permalink:"/ts-jest/docs/26.5/guides/react-native"}},a={},l=[];function d(e){const s={code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.\n",(0,t.jsx)(s.code,{children:"const soundPlayer = require('./sound-player')"}),". Therefore creating an instance of the class that was exported as\na default will look like this: ",(0,t.jsx)(s.code,{children:"new soundPlayer.default()"}),". However if you are mocking the class as suggested by the documentation."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n"})}),"\n",(0,t.jsx)(s.p,{children:"You will get the error"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"TypeError: sound_player_1.default is not a constructor\n"})}),"\n",(0,t.jsxs)(s.p,{children:["because ",(0,t.jsx)(s.code,{children:"soundPlayer.default"})," does not point to a function. Your mock has to return an object which has a property default\nthat points to a function."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For named imports, like ",(0,t.jsx)(s.code,{children:"import { OAuth2 } from './oauth'"}),", replace ",(0,t.jsx)(s.code,{children:"default"})," with imported module name, ",(0,t.jsx)(s.code,{children:"OAuth2"})," in this example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n"})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var t=n(6540);const o={},r=t.createContext(o);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);
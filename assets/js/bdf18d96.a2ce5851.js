"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[7555],{4078:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"guides/mock-es6-class","title":"Mock ES6 class","description":"TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.","source":"@site/versioned_docs/version-27.0/guides/mock-es6-class.md","sourceDirName":"guides","slug":"/guides/mock-es6-class","permalink":"/ts-jest/docs/27.0/guides/mock-es6-class","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/guides/mock-es6-class.md","tags":[],"version":"27.0","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1730858786000,"frontMatter":{"id":"mock-es6-class","title":"Mock ES6 class"},"sidebar":"version-27.0-docs","previous":{"title":"ESM Support","permalink":"/ts-jest/docs/27.0/guides/esm-support"},"next":{"title":"Using with React Native","permalink":"/ts-jest/docs/27.0/guides/react-native"}}');var o=n(4848),r=n(8453);const i={id:"mock-es6-class",title:"Mock ES6 class"},c=void 0,a={},l=[];function d(e){const s={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["TypeScript is transpiling your ts file and your module is likely being imported using ES2015s import.\n",(0,o.jsx)(s.code,{children:"const soundPlayer = require('./sound-player')"}),". Therefore creating an instance of the class that was exported as\na default will look like this: ",(0,o.jsx)(s.code,{children:"new soundPlayer.default()"}),". However if you are mocking the class as suggested by the documentation."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"jest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return { playSoundFile: mockPlaySoundFile }\n  })\n})\n"})}),"\n",(0,o.jsx)(s.p,{children:"You will get the error"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"TypeError: sound_player_1.default is not a constructor\n"})}),"\n",(0,o.jsxs)(s.p,{children:["because ",(0,o.jsx)(s.code,{children:"soundPlayer.default"})," does not point to a function. Your mock has to return an object which has a property default\nthat points to a function."]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"jest.mock('./sound-player', () => {\n  return {\n    default: jest.fn().mockImplementation(() => {\n      return {\n        playSoundFile: mockPlaySoundFile,\n      }\n    }),\n  }\n})\n"})}),"\n",(0,o.jsxs)(s.p,{children:["For named imports, like ",(0,o.jsx)(s.code,{children:"import { OAuth2 } from './oauth'"}),", replace ",(0,o.jsx)(s.code,{children:"default"})," with imported module name, ",(0,o.jsx)(s.code,{children:"OAuth2"})," in this example:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-js",children:"jest.mock('./oauth', () => {\n    return {\n        OAuth2: ... // mock here\n    }\n})\n"})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var t=n(6540);const o={},r=t.createContext(o);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);
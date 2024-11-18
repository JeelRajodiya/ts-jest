"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8282],{7033:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"guides/test-helpers","title":"Test helpers","description":"ts-jest provides some test utilities to be used in your test, related to TypeScript.","source":"@site/versioned_docs/version-27.0/guides/test-helpers.md","sourceDirName":"guides","slug":"/guides/test-helpers","permalink":"/ts-jest/docs/27.0/guides/test-helpers","draft":false,"unlisted":false,"editUrl":"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/guides/test-helpers.md","tags":[],"version":"27.0","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1731907998000,"frontMatter":{"id":"test-helpers","title":"Test helpers"},"sidebar":"version-27.0-docs","previous":{"title":"Using with React Native","permalink":"/ts-jest/docs/27.0/guides/react-native"},"next":{"title":"Troubleshooting","permalink":"/ts-jest/docs/27.0/guides/troubleshooting"}}');var n=s(4848),i=s(8453);const r={id:"test-helpers",title:"Test helpers"},d=void 0,c={},l=[{value:"<code>mocked&lt;T&gt;(item: T, deep = false)</code>",id:"mockedtitem-t-deep--false",level:2},{value:"Example",id:"example",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"ts-jest"})," provides some test utilities to be used in your test, related to TypeScript."]}),"\n",(0,n.jsx)(t.h2,{id:"mockedtitem-t-deep--false",children:(0,n.jsx)(t.code,{children:"mocked<T>(item: T, deep = false)"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"mocked"})," test helper provides typings on your mocked modules and even their deep methods, based on the typing of its source. It makes use of the latest TypeScript feature, so you even have argument types completion in the IDE (as opposed to ",(0,n.jsx)(t.code,{children:"jest.MockInstance"}),")."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," while it needs to be a function so that input type is changed, the helper itself does nothing else than returning the given input value."]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// foo.ts\nexport const foo = {\n  a: {\n    b: {\n      c: {\n        hello: (name: string) => `Hello, ${name}`,\n      },\n    },\n  },\n  name: () => 'foo',\n}\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"// foo.spec.ts\nimport { mocked } from 'ts-jest/utils'\nimport { foo } from './foo'\njest.mock('./foo')\n\n// here the whole foo var is mocked deeply\nconst mockedFoo = mocked(foo, true)\n\ntest('deep', () => {\n  // there will be no TS error here, and you'll have completion in modern IDEs\n  mockedFoo.a.b.c.hello('me')\n  // same here\n  expect(mockedFoo.a.b.c.hello.mock.calls).toHaveLength(1)\n})\n\ntest('direct', () => {\n  foo.name()\n  // here only foo.name is mocked (or its methods if it's an object)\n  expect(mocked(foo.name).mock.calls).toHaveLength(1)\n})\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var o=s(6540);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
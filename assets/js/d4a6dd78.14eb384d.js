"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[1163],{7433:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var t=s(4848),o=s(8453);const l={title:"Babel Config option"},i=void 0,a={id:"getting-started/options/babelConfig",title:"Babel Config option",description:"ts-jest by default does NOT use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ts-jest can call the BabelJest processor once TypeScript has transformed the source into JavaScript.",source:"@site/versioned_docs/version-27.0/getting-started/options/babelConfig.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/babelConfig",permalink:"/ts-jest/docs/27.0/getting-started/options/babelConfig",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/getting-started/options/babelConfig.md",tags:[],version:"27.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1729677014e3,frontMatter:{title:"Babel Config option"}},r={},c=[{value:"Examples",id:"examples",level:3},{value:"Use default <code>babelrc</code> file",id:"use-default-babelrc-file",level:4},{value:"Path to a <code>babelrc</code> file",id:"path-to-a-babelrc-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ts-jest"})," by default does ",(0,t.jsx)(n.strong,{children:"NOT"})," use Babel. But you may want to use it, especially if your code rely on Babel plugins to make some transformations. ",(0,t.jsx)(n.code,{children:"ts-jest"})," can call the BabelJest processor once TypeScript has transformed the source into JavaScript."]}),"\n",(0,t.jsxs)(n.p,{children:["The option is ",(0,t.jsx)(n.code,{children:"babelConfig"})," and it works pretty much as the ",(0,t.jsx)(n.code,{children:"tsconfig"})," option, except that it is disabled by default. Here is the possible values it can take:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"false"}),": the default, disables the use of Babel"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"true"}),": enables Babel processing. ",(0,t.jsx)(n.code,{children:"ts-jest"})," will try to find a ",(0,t.jsx)(n.code,{children:".babelrc"}),", ",(0,t.jsx)(n.code,{children:".babelrc.js"}),", ",(0,t.jsx)(n.code,{children:"babel.config.js"})," file or a ",(0,t.jsx)(n.code,{children:"babel"})," section in the ",(0,t.jsx)(n.code,{children:"package.json"})," file of your project and use it as the config to pass to ",(0,t.jsx)(n.code,{children:"babel-jest"})," processor."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"{ ... }"}),": inline ",(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/en/next/options",children:"Babel options"}),". You can also set this to an empty object (",(0,t.jsx)(n.code,{children:"{}"}),") so that the default Babel config file is not used."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(n.h4,{id:"use-default-babelrc-file",children:["Use default ",(0,t.jsx)(n.code,{children:"babelrc"})," file"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: true,\n    },\n  },\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": true\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.h4,{id:"path-to-a-babelrc-file",children:["Path to a ",(0,t.jsx)(n.code,{children:"babelrc"})," file"]}),"\n",(0,t.jsxs)(n.p,{children:["The path should be relative to the current working directory where you start Jest from. You can also use ",(0,t.jsx)(n.code,{children:"\\<rootDir>"})," in the path, or use an absolute path (this last one is strongly not recommended)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: 'babelrc.test.js',\n    },\n  },\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"or"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: require('./babelrc.test.js'),\n    },\n  },\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": "babelrc.test.js"\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"inline-compiler-options",children:"Inline compiler options"}),"\n",(0,t.jsxs)(n.p,{children:["Refer to the ",(0,t.jsx)(n.a,{href:"https://babeljs.io/docs/en/next/options",children:"Babel options"})," to know what can be used there."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      babelConfig: {\n        comments: false,\n        plugins: ['@babel/plugin-transform-for-of'],\n      },\n    },\n  },\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'// package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "babelConfig": {\n          "comments": false,\n          "plugins": ["@babel/plugin-transform-for-of"]\n        }\n      }\n    }\n  }\n}\n'})})]})}function b(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(6540);const o={},l=t.createContext(o);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);
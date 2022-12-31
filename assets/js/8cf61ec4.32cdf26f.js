"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4216],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(4137));const r={title:"Isolated Modules option"},i=void 0,s={unversionedId:"getting-started/options/isolatedModules",id:"version-27.0/getting-started/options/isolatedModules",title:"Isolated Modules option",description:"By default ts-jest uses TypeScript compiler in the context of a project (yours), with full type-checking and features.",source:"@site/versioned_docs/version-27.0/getting-started/options/isolatedModules.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/isolatedModules",permalink:"/ts-jest/docs/27.0/getting-started/options/isolatedModules",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/getting-started/options/isolatedModules.md",tags:[],version:"27.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1672522299,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{title:"Isolated Modules option"}},l={},p=[{value:"Example",id:"example",level:3},{value:"Performance",id:"performance",level:2},{value:"Example",id:"example-1",level:3},{value:"Caveats",id:"caveats",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," uses TypeScript compiler in the context of a project (yours), with full type-checking and features.\nBut it can also be used to compile each file separately, what TypeScript calls an 'isolated module'.\nThat's what the ",(0,a.kt)("inlineCode",{parentName:"p"},"isolatedModules")," option (which defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),") does."),(0,a.kt)("p",null,"You'll lose type-checking ability and some features such as ",(0,a.kt)("inlineCode",{parentName:"p"},"const enum"),", but in the case you plan on using Jest with the cache disabled (",(0,a.kt)("inlineCode",{parentName:"p"},"jest --no-cache"),"), your tests will then run much faster."),(0,a.kt)("p",null,"Here is how to disable type-checking and compile each file as an isolated module:"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      isolatedModules: true,\n    },\n  },\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "isolatedModules": true\n      }\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"performance"},"Performance"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"isolatedModules: false")," comes with a cost of performance comparing to ",(0,a.kt)("inlineCode",{parentName:"p"},"isolatedModules: true"),". There is a way\nto improve the performance when using this mode by changing the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"include")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig")," which is used by ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest"),".\nThe least amount of files which are provided in ",(0,a.kt)("inlineCode",{parentName:"p"},"include"),", the more performance the test run can gain."),(0,a.kt)("h3",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// tsconfig.json\n{\n  // ...other configs\n  "include": ["my-typings/*", "my-global-modules/*"]\n}\n')),(0,a.kt)("h2",{id:"caveats"},"Caveats"),(0,a.kt)("p",null,"Limiting the amount of files loaded via ",(0,a.kt)("inlineCode",{parentName:"p"},"include")," can greatly boost performance when running tests. However, the trade off\nis ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-jest")," might not recognize all files which are intended to use with ",(0,a.kt)("inlineCode",{parentName:"p"},"jest"),". One can run into issues with custom typings,\nglobal modules, etc..."),(0,a.kt)("p",null,"The suggested solution is what is needed for the test environment should be captured by\nglob patterns in ",(0,a.kt)("inlineCode",{parentName:"p"},"include"),", to gain both performance boost and avoid breaking behaviors."))}d.isMDXComponent=!0}}]);
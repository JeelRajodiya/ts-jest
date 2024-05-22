"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8121],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),u=i,m=f["".concat(p,".").concat(u)]||f[u]||d[u]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),i=(n(7294),n(4137));const r={title:"TypeScript Config option"},a=void 0,s={unversionedId:"getting-started/options/tsconfig",id:"version-28.0/getting-started/options/tsconfig",title:"TypeScript Config option",description:"The tsconfig option allows you to define which tsconfig JSON file to use. An inline compiler options object can also be specified instead of a file path.",source:"@site/versioned_docs/version-28.0/getting-started/options/tsconfig.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/tsconfig",permalink:"/ts-jest/docs/28.0/getting-started/options/tsconfig",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-28.0/getting-started/options/tsconfig.md",tags:[],version:"28.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1716350157,formattedLastUpdatedAt:"May 22, 2024",frontMatter:{title:"TypeScript Config option"}},p={},l=[{value:"Examples",id:"examples",level:3},{value:"Path to a <code>tsconfig</code> file",id:"path-to-a-tsconfig-file",level:4},{value:"Inline compiler options",id:"inline-compiler-options",level:4},{value:"Disable auto-lookup",id:"disable-auto-lookup",level:4}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig")," option allows you to define which ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig")," JSON file to use. An inline ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options")," object can also be specified instead of a file path."),(0,i.kt)("p",null,"By default ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," will try to find a ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project. If it cannot find one, it will use the default TypeScript ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options"),"; except, ",(0,i.kt)("inlineCode",{parentName:"p"},"ES2015")," is used as ",(0,i.kt)("inlineCode",{parentName:"p"},"target")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"ES5"),"."),(0,i.kt)("p",null,"If you need to use defaults and force ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," to use the defaults even if there is a ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project, you can set this option to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"path-to-a-tsconfig-file"},"Path to a ",(0,i.kt)("inlineCode",{parentName:"h4"},"tsconfig")," file"),(0,i.kt)("p",null,"The path should be relative to the current working directory where you start Jest from. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"<rootDir>")," in the path to start from the project root dir."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      tsconfig: 'tsconfig.test.json',\n    },\n  },\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "tsconfig": "tsconfig.test.json"\n      }\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"inline-compiler-options"},"Inline compiler options"),(0,i.kt)("p",null,"Refer to the TypeScript ",(0,i.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html#compiler-options"},"compiler options")," for reference.\nIt's basically the same object you'd put in your ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"compilerOptions"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      tsconfig: {\n        importHelpers: true,\n      },\n    },\n  },\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "tsconfig": {\n          "importHelpers": true\n        }\n      }\n    }\n  }\n}\n')),(0,i.kt)("h4",{id:"disable-auto-lookup"},"Disable auto-lookup"),(0,i.kt)("p",null,"By default ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," will try to find a ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your project. But you may not want to use it at all and keep TypeScript default options. You can achieve this by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      tsconfig: false,\n    },\n  },\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "tsconfig": false\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);
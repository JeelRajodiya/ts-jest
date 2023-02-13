"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[582],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(t),m=o,u=g["".concat(l,".").concat(m)]||g[m]||d[m]||a;return t?i.createElement(u,r(r({ref:n},c),{},{components:t})):i.createElement(u,r({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=t(7462),o=(t(7294),t(4137));const a={title:"Diagnostics option"},r=void 0,s={unversionedId:"getting-started/options/diagnostics",id:"version-26.5/getting-started/options/diagnostics",title:"Diagnostics option",description:"The diagnostics option configures error reporting.",source:"@site/versioned_docs/version-26.5/getting-started/options/diagnostics.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/diagnostics",permalink:"/ts-jest/docs/26.5/getting-started/options/diagnostics",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/getting-started/options/diagnostics.md",tags:[],version:"26.5",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1676260564,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{title:"Diagnostics option"}},l={},p=[{value:"Disabling/enabling",id:"disablingenabling",level:3},{value:"Advanced configuration",id:"advanced-configuration",level:3},{value:"Examples",id:"examples",level:3},{value:"Disabling diagnostics",id:"disabling-diagnostics",level:4},{value:"Advanced options",id:"advanced-options",level:4},{value:"Enabling diagnostics for test files only",id:"enabling-diagnostics-for-test-files-only",level:5},{value:"Do not fail on first error",id:"do-not-fail-on-first-error",level:5},{value:"Ignoring some error codes",id:"ignoring-some-error-codes",level:5}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"diagnostics")," option configures error reporting.\nIt can both be enabled/disabled entirely or limited to a specific type of errors and/or files."),(0,o.kt)("p",null,"If a diagnostic is not filtered out, ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," will fail the compilation and your test."),(0,o.kt)("h3",{id:"disablingenabling"},"Disabling/enabling"),(0,o.kt)("p",null,"By default all diagnostics are enabled. This is the same as setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"diagnostics")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".\nTo disable all diagnostics, set ",(0,o.kt)("inlineCode",{parentName:"p"},"diagnostics")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".\nThis might lead to slightly better performance, especially if you're not using Jest's cache."),(0,o.kt)("h3",{id:"advanced-configuration"},"Advanced configuration"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"diagnostics")," option's value can also accept an object for more advanced configuration. Each config. key is optional:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"warnOnly")),": If specified and ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", diagnostics will be reported but won't stop compilation (default: ",(0,o.kt)("em",{parentName:"li"},"disabled"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ignoreCodes")),": List of TypeScript error codes to ignore. Complete list can be found ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json"},"there"),". By default here are the ones ignored:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"6059"),": ",(0,o.kt)("em",{parentName:"li"},"'rootDir' is expected to contain all source files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"18002"),": ",(0,o.kt)("em",{parentName:"li"},"The 'files' list in config file is empty.")," (it is strongly recommended including this one)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"18003"),": ",(0,o.kt)("em",{parentName:"li"},"No inputs were found in config file.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"pathRegex"))," (",(0,o.kt)("strong",{parentName:"li"},"DEPRECATED"),"): If specified, diagnostics of source files which path does ",(0,o.kt)("strong",{parentName:"li"},"not")," match will be ignored."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"exclude")),": If specified, diagnostics of source files which path ",(0,o.kt)("strong",{parentName:"li"},"matches")," will be ignored. This works a bit\nsimilar to ",(0,o.kt)("inlineCode",{parentName:"li"},"tsconfig")," option ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/tsconfig#exclude"},"exclude")," with the only difference is that\nin TypeScript, ",(0,o.kt)("inlineCode",{parentName:"li"},"exclude")," will also exclude files from compilation process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"pretty")),": Enables/disables colorful and pretty output of errors (default: ",(0,o.kt)("em",{parentName:"li"},"enabled"),").")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("h4",{id:"disabling-diagnostics"},"Disabling diagnostics"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: false,\n    },\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": false\n      }\n    }\n  }\n}\n')),(0,o.kt)("h4",{id:"advanced-options"},"Advanced options"),(0,o.kt)("h5",{id:"enabling-diagnostics-for-test-files-only"},"Enabling diagnostics for test files only"),(0,o.kt)("p",null,"Assuming all your test files ends with ",(0,o.kt)("inlineCode",{parentName:"p"},".spec.ts")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".test.ts"),", using the following config will enable error reporting only for those files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        exclude: ['!**/*.(spec|test).ts'],\n      },\n    },\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "exclude": ["!**/*.(spec|test).ts"]\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("h5",{id:"do-not-fail-on-first-error"},"Do not fail on first error"),(0,o.kt)("p",null,"While some diagnostics are stop-blockers for the compilation, most of them are not. If you want the compilation (and so your tests) to continue when encountering those, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"warnOnly")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        warnOnly: true,\n      },\n    },\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "warnOnly": true\n        }\n      }\n    }\n  }\n}\n')),(0,o.kt)("h5",{id:"ignoring-some-error-codes"},"Ignoring some error codes"),(0,o.kt)("p",null,"All TypeScript error codes can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/blob/main/src/compiler/diagnosticMessages.json"},"there"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreCodes")," option accepts this values:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A single ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," (example: ",(0,o.kt)("inlineCode",{parentName:"li"},"1009"),"): unique error code to ignore"),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," with a code (example ",(0,o.kt)("inlineCode",{parentName:"li"},'"1009"'),", ",(0,o.kt)("inlineCode",{parentName:"li"},'"TS1009"')," or ",(0,o.kt)("inlineCode",{parentName:"li"},'"TS1009"'),")"),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," with a list of the above (example: ",(0,o.kt)("inlineCode",{parentName:"li"},'"1009, TS2571, 4072"'),")"),(0,o.kt)("li",{parentName:"ol"},"An ",(0,o.kt)("inlineCode",{parentName:"li"},"array")," of one or more from ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"3")," (example: ",(0,o.kt)("inlineCode",{parentName:"li"},'[1009, "TS2571", "6031"]'),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// jest.config.js\nmodule.exports = {\n  // [...]\n  globals: {\n    'ts-jest': {\n      diagnostics: {\n        ignoreCodes: [2571, 6031, 18003],\n      },\n    },\n  },\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'// OR package.json\n{\n  // [...]\n  "jest": {\n    "globals": {\n      "ts-jest": {\n        "diagnostics": {\n          "ignoreCodes": [2571, 6031, 18003]\n        }\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);
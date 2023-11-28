"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4671],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2580:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const i={id:"using-with-monorepo",title:"Using with monorepo"},s=void 0,a={unversionedId:"guides/using-with-monorepo",id:"version-27.0/guides/using-with-monorepo",title:"Using with monorepo",description:"To use ts-jest in a project with monorepo structure, you'll need to use Jest projects configuration.",source:"@site/versioned_docs/version-27.0/guides/using-with-monorepo.md",sourceDirName:"guides",slug:"/guides/using-with-monorepo",permalink:"/ts-jest/docs/27.0/guides/using-with-monorepo",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.0/guides/using-with-monorepo.md",tags:[],version:"27.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1701169189,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{id:"using-with-monorepo",title:"Using with monorepo"},sidebar:"version-27.0-docs",previous:{title:"Troubleshooting",permalink:"/ts-jest/docs/27.0/guides/troubleshooting"},next:{title:"Babel7 or TypeScript",permalink:"/ts-jest/docs/27.0/babel7-or-ts"}},c={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To use ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," in a project with monorepo structure, you'll need to use ",(0,o.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/next/configuration#projects-arraystring--projectconfig"},"Jest projects configuration"),"."),(0,o.kt)("p",null,"When using Jest ",(0,o.kt)("inlineCode",{parentName:"p"},"projects")," configuration, Jest will run ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-jest")," against each project which is defined in the configuration."))}l.isMDXComponent=!0}}]);
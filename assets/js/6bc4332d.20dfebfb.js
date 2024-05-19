"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[4103],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var n=r(7462),o=(r(7294),r(4137));const s={id:"processing",title:"Processing flow"},i=void 0,a={unversionedId:"processing",id:"version-27.1/processing",title:"Processing flow",description:"These are internal technical documents. If you're not a contributor to ts-jest, but simply trying to use the library you'll find nothing of value here",source:"@site/versioned_docs/version-27.1/processing.md",sourceDirName:".",slug:"/processing",permalink:"/ts-jest/docs/27.1/processing",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/processing.md",tags:[],version:"27.1",lastUpdatedBy:"Gareth Jones",lastUpdatedAt:1716099588,formattedLastUpdatedAt:"May 19, 2024",frontMatter:{id:"processing",title:"Processing flow"},sidebar:"version-27.1-docs",previous:{title:"Introduction",permalink:"/ts-jest/docs/27.1/"},next:{title:"Contributing",permalink:"/ts-jest/docs/27.1/contributing"}},c={},l=[{value:"Jest process",id:"jest-process",level:2},{value:"<code>ts-jest</code> process",id:"ts-jest-process",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"These are internal technical documents. If you're not a contributor to ",(0,o.kt)("inlineCode",{parentName:"em"},"ts-jest"),", but simply trying to use the library you'll find nothing of value here")),(0,o.kt)("h2",{id:"jest-process"},"Jest process"),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/NP0n5e8m44Jxd68xaq8E08M5fQU8C97uS8FPJS7jVI0FmNRspyo-4VLPZQaptYLcs5E80qwkCIO6ihqNygJPiuIKNnT7seF9JX2t0Di9cMRu0RtwjiSDqn6kTsIresnLLQun60HaEJbJ5m4z8Kht4WSzHsuCk8lX-r5aQcVhN_fiMdHg4ojO3v7xxZ6d5Y9hRrt6pklgtOf-rbNOvfc70NSV",alt:null}),(0,o.kt)("h2",{id:"ts-jest-process"},(0,o.kt)("inlineCode",{parentName:"h2"},"ts-jest")," process"),(0,o.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZLJRRjim37tNLn3Omn9WwGUaG8Uz3YWmOFq1nQ9YjJ8PY7Iz0lduGHV7YHjWyvDruI7FuH7FfyGTYd0w6r6Rr9YzoayKVMWd6-4nTRXzD2Pus4ZFOtGWcW8TW__ulWNjaM3pWR8r-rTXMWuVpUu9nfEpYgR2F1g3KH0sn5k3v8Ali3v493iW83c1AMWF3-v1vHPz2YU46OXO4L8uzcg8WH0TA4F7mob4D0vzeA212JAsv6IGGwuBCESlBtqGZNXkSGasdUrwTDjpgIi8HwleO60tHfHRkWlIlaje5S6IWm9WL21QEe9WUW-vtiPsztHXK3CGd31944NI6hlIj0e80muDsYSUFWNTAFllqlUDSD7QQB8aUVbSxZPn8terHJsOGenmm5bUPwp0Ei6Ln000IpLGljkCTUyYJbqkMQ5zWtr360M1VQv-3hYSLzaTs0E_Nwdlp88momP1CfA3gKUw72UqBj2ncQJkhNZKlbKAeoWFyEFtIraNsJod0PDK3ci6FQQIU2e_FGVHd8rzEt_DBstWxYrVSapu3Qp0X362dSiP1TEk-3bRV4vfixVdAmURYJ51n-J3qNnciNkwz6xnN-7amv-s0uCzDHwVJ7UxVSzyHQRprJov-_YN9zycIMxkmHumhlnPzkuFeaNapiOeDNoNfJINz8iP_tS4zLR0UiNqgs90p_osVZGsDsPzwTwOMseCrRdv8YJKCP4OuG6rpqu8-hMyB5EiQGK8fzQEwv5LozmlXhlg8fBx2m00",alt:null}))}u.isMDXComponent=!0}}]);
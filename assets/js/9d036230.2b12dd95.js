"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8810],{5923:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=s(4848),i=s(8453);const o={id:"contributing",title:"Contributing"},r=void 0,c={id:"contributing",title:"Contributing",description:"When contributing to this repository, please first discuss the change you wish to make via ts-jest GitHub discussion or issue with the owners of this repository before making a change.",source:"@site/versioned_docs/version-29.0/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/ts-jest/docs/29.0/contributing",draft:!1,unlisted:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/contributing.md",tags:[],version:"29.0",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1727349849e3,frontMatter:{id:"contributing",title:"Contributing"},sidebar:"version-29.0-docs",previous:{title:"Processing flow",permalink:"/ts-jest/docs/29.0/processing"},next:{title:"Installation",permalink:"/ts-jest/docs/29.0/getting-started/installation"}},h={},a=[{value:"Pull Request Process",id:"pull-request-process",level:2},{value:"E2E Testing",id:"e2e-testing",level:2},{value:"Preparing",id:"preparing",level:3},{value:"Running",id:"running",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["When contributing to this repository, please first discuss the change you wish to make via ",(0,n.jsxs)(t.a,{href:"https://github.com/kulshekhar/ts-jest/discussions",children:[(0,n.jsx)(t.code,{children:"ts-jest"})," GitHub discussion"]})," or ",(0,n.jsx)(t.a,{href:"https://github.com/kulshekhar/ts-jest/issues",children:"issue"})," with the owners of this repository before making a change."]}),"\n",(0,n.jsx)(t.p,{children:"Please note we have a code of conduct, please follow it in all your interactions with the project."}),"\n",(0,n.jsx)(t.h2,{id:"pull-request-process",children:"Pull Request Process"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Ensure the tests are passing and that you have latest ",(0,n.jsx)(t.code,{children:"main"})," branch merged in."]}),"\n",(0,n.jsxs)(t.li,{children:["Update the ",(0,n.jsx)(t.code,{children:"docs/"})," with details of your changes if required."]}),"\n",(0,n.jsx)(t.li,{children:"If possible, squash your commits. There must be only one commit in your PR (until a review). Then after each review requesting changes, DO NOT squash your commits with the one before the review, so that we can see intermediate modifications."}),"\n",(0,n.jsx)(t.li,{children:"You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["These are internal technical documents. If you're not a contributor to ",(0,n.jsx)(t.code,{children:"ts-jest"}),", but simply trying to use the library you'll find nothing of value here"]})}),"\n",(0,n.jsx)(t.h2,{id:"e2e-testing",children:"E2E Testing"}),"\n",(0,n.jsx)(t.h3,{id:"preparing",children:"Preparing"}),"\n",(0,n.jsxs)(t.p,{children:["The preparation of E2E test directory is done in ",(0,n.jsx)(t.code,{children:"scripts/e2e.js"}),". Here is the process:"]}),"\n",(0,n.jsx)(t.img,{src:"https://www.plantuml.com/plantuml/png/ZLBBRgGm4BpxA-eMEAmYxH6EEUrNW0StG--ODh9xGkQotnxP32D6YQ8z8L5TZovtKXlLcEPq5US9cdxzfQIjaQ24oET9pShUutHbxtOO9nf390oHhBASeHDXKp0a3fbiJ5DWWjAyO0tn0iVnIRcdt_Jwh-iow3XswJPxbalNzSZV10rWDVGnqA88WhS_87dd66GcqNGmMoVsX6eC4MI7gPXwgrGV_VQV2JOIMB07U01TzzeVL7b4jMClwLw2uqY3XdYhyzw2YZuuQQfDi_AIUr3q4XnrSt1NJwdVzYQV29K4nMD-AwZDXZpcmi9omyYU4iOOPXoi7SUjZKEATWkusE5YpmGVXajXVyaLoJhCfDPPjQqn0F0ZSx89msJbJAukqq0JQGxlzErg-uWiCrYIMkzHXOY1w-_1nnsLcxdFb89Auq_eJvd-JpDJvKMVsLldHMMDh8JhugpIKqzVd-p-KYJkVd0k2DN6D2N1uxnouRVMcAHX-GG0"}),"\n",(0,n.jsx)(t.h3,{id:"running",children:"Running"}),"\n",(0,n.jsxs)(t.p,{children:["When a test-case needs to be run with a given template within tests, here is what's happening (in ",(0,n.jsx)(t.code,{children:"e2e/__helpers__/test-case/runtime.ts"}),"):"]}),"\n",(0,n.jsx)(t.img,{src:"https://www.plantuml.com/plantuml/png/hLHDRzim3BthLn3OOGcsfC2E3R2TUzfFI1I9ZjN8f23IJOAX--s3PBknksAdtGoQ7-yzFahKPZNcqMMqYd3XV0OVyiuGAq8EfrRDatwE4Ou8FZGDPYI5X1aKHJVE2XfBVenqAPOsHoj1jWR9G-bZDjy1l-73x_s-3F0Xx-NMnK3d_VxXrrJrMZx7bgyxOq83gzOAM23skE_Ozn6beFkn1csHO7L3MPl7iTSYRIGGiL5ZNpXuoBZ9FL6W4r3g892eZT4qd06jQoiTABEXq9b0xUuaC0h2YdXTGg4fed6wGHCAgYPpDokQgMTZ77C2tHNo8OFDQ1odW1wKP_Ed9HYyEamAXpcnGu5d3icwiptX9h8xRv-5wN07QYvjY0YhDsfb_31z6k53NbU1Wu2GJTAork27mjuDKVMS2kekq2ddW5BOm5Y0tYm82VVP3Po5GLkhfa_UQjc5jjZ1XVleeSO6e2sQiQZXw37FoDKrZD2VKNJhc9fmsZxB0dp9MFw68D3qv3GmlNEGAqkw16qXsUflnwH8kd1HZ7mHQBZiHOi5wFGFSmm1rXPpdS3fzYzRBAKoeprWPe_sFnXZm8RagqFkPoy9NR0Ze0LCuUxTxm5NhQjhRYtvYD0odwiwW5VRfLZFo9ooFS8XPNOeibeVuEbdpIatK6WaT6hBGcI6yd4qmaYbibY2GWKBhXVb3ewzGXEkw85iDxn5BvWbC1LbvptANRYssA0IQe8RXJLt_R-ydUWCq2VbpYe_vdvObUp-lh7fADQb_weB8iNTyzr-v8AXosLsESjkOgOJktq5makyJTBFKW81CG5UWzIJAkQvX1Y1i7h77D-Cn2-O8P2o6T_Z0ao6LtXwUcUclXibe_QP8AFqiV8NvVG7"})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(6540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
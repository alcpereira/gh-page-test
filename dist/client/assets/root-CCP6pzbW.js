import{r as i,j as e}from"./index-CNRyvhWi.js";import{l as h,n as y,o as f,p as x,_ as S,O as w,M as j,L as g,S as k}from"./components-DMEjIUtb.js";/**
 * @remix-run/react v2.16.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function L({getKey:t,...l}){let{isSpaMode:c}=h(),o=y(),u=f();x({getKey:t,storageKey:a});let p=i.useMemo(()=>{if(!t)return null;let s=t(o,u);return s!==o.key?s:null},[]);if(c)return null;let m=((s,d)=>{if(!window.history.state||!window.history.state.key){let r=Math.random().toString(32).slice(2);window.history.replaceState({key:r},"")}try{let n=JSON.parse(sessionStorage.getItem(s)||"{}")[d||window.history.state.key];typeof n=="number"&&window.scrollTo(0,n)}catch(r){console.error(r),sessionStorage.removeItem(s)}}).toString();return i.createElement("script",S({},l,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${m})(${JSON.stringify(a)}, ${JSON.stringify(p)})`}}))}const M=""+new URL("globals-CLcr7pjn.css",import.meta.url).href,b=()=>[{rel:"stylesheet",href:M}];function _({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(j,{}),e.jsx(g,{})]}),e.jsxs("body",{children:[t,e.jsx(L,{}),e.jsx(k,{})]})]})}function v(){return e.jsx(w,{})}export{_ as Layout,v as default,b as links};

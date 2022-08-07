"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[9632],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,y=p["".concat(s,".").concat(d)]||p[d]||g[d]||a;return t?n.createElement(y,i(i({ref:r},u),{},{components:t})):n.createElement(y,i({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},80276:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const a={title:"Querying log sources"},i=void 0,c={unversionedId:"log-sources/querying",id:"log-sources/querying",title:"Querying log sources",description:"All Matano log sources are stored as Iceberg tables, with data stored in Parquet files on S3. You can query and interact with these like any other Iceberg table, using Athena, Spark, or any other technology supporting Iceberg.",source:"@site/docs/log-sources/querying.md",sourceDirName:"log-sources",slug:"/log-sources/querying",permalink:"/docs/log-sources/querying",draft:!1,editUrl:"https://github.com/matanolabs/matano/tree/main/website/docs/log-sources/querying.md",tags:[],version:"current",frontMatter:{title:"Querying log sources"},sidebar:"tutorialSidebar",previous:{title:"Log sources overview",permalink:"/docs/log-sources/overview"},next:{title:"Log source schema",permalink:"/docs/log-sources/schema"}},s={},l=[{value:"Querying a log source",id:"querying-a-log-source",level:2},{value:"Advanced",id:"advanced",level:3},{value:"Performing ACID transactions",id:"performing-acid-transactions",level:2}],u={toc:l};function g(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All Matano log sources are stored as Iceberg tables, with data stored in Parquet files on S3. You can query and interact with these like any other Iceberg table, using Athena, Spark, or any other technology supporting Iceberg."),(0,o.kt)("h2",{id:"querying-a-log-source"},"Querying a log source"),(0,o.kt)("h3",{id:"advanced"},"Advanced"),(0,o.kt)("h2",{id:"performing-acid-transactions"},"Performing ACID transactions"))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[8245],{38980:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(7896),o=t(31461),a=(t(2784),t(3905)),i=["components"],l={id:"config",category:"Util",title:"config",description:"Tool to access environment variables.",pagination_prev:null},c=void 0,s={unversionedId:"web/tools/config",id:"web/tools/config",isDocsHomePage:!1,title:"config",description:"Tool to access environment variables.",source:"@site/docs/web/tools/config.md",sourceDirName:"web/tools",slug:"/web/tools/config",permalink:"/web/tools/config",tags:[],version:"current",frontMatter:{id:"config",category:"Util",title:"config",description:"Tool to access environment variables.",pagination_prev:null},sidebar:"docs",next:{title:"createTheme",permalink:"/web/tools/create-theme"}},p=[{value:"Dev Env Config Example",id:"dev-env-config-example",children:[{value:"Environment Variables",id:"environment-variables",children:[],level:3},{value:"Config",id:"config",children:[],level:3}],level:2}],f={toc:p};function u(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { config } from '@abyss/web/tools/config';\n")),(0,a.kt)("h2",{id:"dev-env-config-example"},"Dev Env Config Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"}," Note: ",(0,a.kt)("a",{parentName:"strong",href:"/developers/getting-started/"},"Abyss App Starter-Kit")," Only ")),(0,a.kt)("p",null,"In the example below we are running the config tool in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," environment. Running ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," without passing it a value will return the available config including the global variables and environment specific variables. The ",(0,a.kt)("inlineCode",{parentName:"p"},"config")," method also can accept a variable name and returns it's value."),(0,a.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"Below is a standard setup for the environment config. Read more about Abyss environment configurations ",(0,a.kt)("a",{parentName:"p",href:"/developers/environments"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "env": {\n    // Global variables\n    "APP_NAME": "Create Abyss App - Micro Frontend"\n  },\n  "env.dev": {\n    // Env specific variables\n    "ENV_VAR": "dev-only"\n  },\n  "env.test": {\n    "ENV_VAR": "test-only"\n  },\n  "env.stage": {\n    "ENV_VAR": "stage-only"\n  },\n  "env.prod": {\n    "ENV_VAR": "prod-only"\n  }\n}\n')),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("p",null,"Example config uses:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const config = config();\n// {\n//   APP_NAME: 'Create Abyss App - Micro Frontend',\n//   ENV_VAR: 'dev-only',\n// }\n\nconst appName = config('APP_NAME');\n// \"Create Abyss App - Micro Frontend\"\n\nconst appName = config('ENV_VAR');\n// \"dev-only\"\n")))}u.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>v});var r=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),v=o,m=u["".concat(c,".").concat(v)]||u[v]||f[v]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[6944],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||a;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44575:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(7896),o=r(31461),a=(r(67294),r(30876)),i=["components"],s={id:"create-theme",category:"Util",title:"createTheme",description:"Tool to create and modify themes"},c=void 0,l={unversionedId:"web/tools/create-theme",id:"web/tools/create-theme",isDocsHomePage:!1,title:"createTheme",description:"Tool to create and modify themes",source:"@site/docs/web/tools/create-theme.md",sourceDirName:"web/tools",slug:"/web/tools/create-theme",permalink:"/web/tools/create-theme",tags:[],version:"current",frontMatter:{id:"create-theme",category:"Util",title:"createTheme",description:"Tool to create and modify themes"},sidebar:"docs",previous:{title:"config",permalink:"/web/tools/config"},next:{title:"styled",permalink:"/web/tools/styled"}},p=[{value:"Properties",id:"properties",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { createTheme } from '@abyss/web/tools/theme';\n")),(0,a.kt)("p",null,"The tool ",(0,a.kt)("inlineCode",{parentName:"p"},"createTheme")," allows for the creation of preset themes and allows you to override those themes to fit your design needs. ",(0,a.kt)("inlineCode",{parentName:"p"},"createTheme")," is used in conjunction with ",(0,a.kt)("a",{parentName:"p",href:"/web/ui/theme-provider"},"ThemeProvider"),"."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"createTheme(\n  theme: string,\n  override?: object,\n): object;\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"createTheme")," takes in two arguments. The first argument is the choice of a default theme. There are currently 4 themes available ",(0,a.kt)("inlineCode",{parentName:"p"},'"uhc"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"uhg"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"optum"'),", and ",(0,a.kt)("inlineCode",{parentName:"p"},'"abyss"'),". If no theme is chosen it will fallback to the default ",(0,a.kt)("inlineCode",{parentName:"p"},'"abyss"')," theme. The second argument is any overrides you wish to apply to the base theme you've chosen. Abyss theming leverages Stitches, to see more about theme configuration head ",(0,a.kt)("a",{parentName:"p",href:"https://stitches.dev/docs/tokens"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { ThemeProvider } from '@abyss/web/ui/ThemeProvider';\nimport { createTheme } from '@abyss/web/tools/theme';\n\nconst themeOverride = {\n  theme: {\n    colors: {...},\n    space: {...},\n    fontSizes: {...},\n    fonts: {...},\n    fontWeights: {...},\n    lineHeights: {...},\n    letterSpacings: {...},\n    sizes: {...},\n    borderWidths: {...},\n    borderStyles: {...},\n    radii: {...},\n    shadows: {...},\n    zIndices: {...},\n    transitions: {...},\n  },\n  themeCss: {...},\n};\n\nconst theme = createTheme('uhc', themeOverride);\n\nconst App = () => {\n  return <ThemeProvider theme={theme}>...</ThemeProvider>;\n};\n\nReactDOM.render(<App />, document.getElementById('root'));\n")))}d.isMDXComponent=!0}}]);
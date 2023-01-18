"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[2272],{68113:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>y,frontMatter:()=>p,metadata:()=>u,toc:()=>l});var n=r(7896),o=r(31461),i=(r(2784),r(3905)),a=["components"],p={id:"router-provider",category:"Providers",title:"RouterProvider",description:"Used to render routes that match a location.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1",pagination_prev:"web/ui/print-provider",pagination_next:"web/ui/theme-provider"},s=void 0,u={unversionedId:"web/ui/router-provider",id:"web/ui/router-provider",isDocsHomePage:!1,title:"RouterProvider",description:"Used to render routes that match a location.",source:"@site/docs/web/ui/RouterProvider.md",sourceDirName:"web/ui",slug:"/web/ui/router-provider",permalink:"/web/ui/router-provider",tags:[],version:"current",frontMatter:{id:"router-provider",category:"Providers",title:"RouterProvider",description:"Used to render routes that match a location.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1",pagination_prev:"web/ui/print-provider",pagination_next:"web/ui/theme-provider"},sidebar:"docs",previous:{title:"PrintProvider",permalink:"/web/ui/print-provider"},next:{title:"ThemeProvider",permalink:"/web/ui/theme-provider"}},l=[{value:"Usage",id:"usage",children:[],level:2},{value:"Type",id:"type",children:[],level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)}},c=d("Tab"),m=d("ExitLink"),h={toc:l};function y(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{label:"Overview",mdxType:"Tab"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { RouterProvider } from '@abyss/web/ui/RouterProvider';\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"All Router objects are passed to this RouterProvider for navigation to work. RouterProvider leverages version 6.0+ of ",(0,i.kt)(m,{href:"https://v5.reactrouter.com/web/guides/quick-start",mdxType:"ExitLink"},"React Router Dom"),". Find additional resources on our Router component in ",(0,i.kt)("a",{parentName:"p",href:"/web/ui/router"},"Router"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const Page = ({ title }) => {\n    return (\n      <div>\n        <Router.MetaTags>\n          <title>{title}</title>\n          <meta name="description" content={title + \'Page\'} />\n        </Router.MetaTags>\n        <Heading css={{ \'abyss-heading-root\': { marginTop: \'15px\' } }}>\n          {title} Page\n        </Heading>\n      </div>\n    );\n  };\n\n  return (\n    <RouterProvider type="memory">\n      <ul>\n        <li>\n          <Link href="/">Home Page</Link>\n        </li>\n        <li>\n          <Link href="/getting-started/">Getting Started</Link>\n        </li>\n        <li>\n          <Link href="/web/ui/router">Router Switch</Link>\n        </li>\n      </ul>\n      <Router.Routes>\n        <Router.Route path="/" element={<Page title="Home" />} />\n        <Router.Route\n          path="/getting-started/"\n          element={<Page title="Getting Started" />}\n        />\n        <Router.Route\n          path="/web/ui/router/"\n          element={<Page title="Router" />}\n        />\n      </Router.Routes>\n    </RouterProvider>\n  );\n};\n')),(0,i.kt)("h2",{id:"type"},"Type"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," prop to set the type of router provider. Types include: ",(0,i.kt)("inlineCode",{parentName:"p"},"'browser'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'hash'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"'memory'"),". The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"browser"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Browser: A router that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL."),(0,i.kt)("li",{parentName:"ul"},"Hash: A router that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"IMPORTANT NOTE: Hash history does not support location.key or location.state. Any code or plugin that needs this behavior won\u2019t work. As this technique is only intended to support legacy browsers, we encourage you to configure your server to work with type ",(0,i.kt)("inlineCode",{parentName:"li"},"'browser'")," instead."))),(0,i.kt)("li",{parentName:"ul"},"Memory: A router that keeps the history of your \u201cURL\u201d in memory (does not read or write to the address bar).")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<RouterProvider type="hash"></RouterProvider>\n'))),(0,i.kt)(c,{label:"Integration",mdxType:"Tab"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={RouterProvider}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The content of the router provider component',\n    },\n    {\n      name: 'type',\n      type: 'string',\n      description: 'Set the type of the route provider',\n    },\n  ]}\n/>\n"))))}y.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(h,a(a({ref:t},l),{},{components:r})):n.createElement(h,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"}}]);
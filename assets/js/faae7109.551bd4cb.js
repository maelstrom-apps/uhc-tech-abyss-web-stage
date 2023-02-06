"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[4792],{68727:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a,o=t(7896),r=t(31461),i=(t(2784),t(3905)),l=["components"],p={id:"skeleton",category:"Overlay",title:"Skeleton",description:"Placeholder for loading content.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Web?node-id=27600%3A98953&t=GGit0uZTUgmxvCLj-1",pagination_prev:"web/ui/popover",pagination_next:"web/ui/tooltip"},s=void 0,d={unversionedId:"web/ui/skeleton",id:"web/ui/skeleton",isDocsHomePage:!1,title:"Skeleton",description:"Placeholder for loading content.",source:"@site/docs/web/ui/Skeleton.md",sourceDirName:"web/ui",slug:"/web/ui/skeleton",permalink:"/web/ui/skeleton",tags:[],version:"current",frontMatter:{id:"skeleton",category:"Overlay",title:"Skeleton",description:"Placeholder for loading content.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Web?node-id=27600%3A98953&t=GGit0uZTUgmxvCLj-1",pagination_prev:"web/ui/popover",pagination_next:"web/ui/tooltip"},sidebar:"docs",previous:{title:"Popover",permalink:"/web/ui/popover"},next:{title:"Tooltip",permalink:"/web/ui/tooltip"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Width and Height",id:"width-and-height",children:[],level:2},{value:"Variant",id:"variant",children:[],level:2},{value:"Animated",id:"animated",children:[],level:2}],c=(a="Tab",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),g={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(c,{label:"Overview",mdxType:"Tab"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Skeleton } from '@abyss/web/ui/Skeleton';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'Skeleton',\n  inputs: [\n    {\n      prop: 'variant',\n      type: 'select',\n      options: [\n        { label: 'rectangular', value: 'rectangular' },\n        { label: 'rounded', value: 'rounded' },\n        { label: 'circular', value: 'circular' },\n      ],\n    },\n    {\n      prop: 'height',\n      type: 'string',\n    },\n    {\n      prop: 'width',\n      type: 'string',\n    },\n    {\n      prop: 'animated',\n      type: 'boolean'\n    },\n  ],\n}\n\n<Skeleton height={100} width={100}></Skeleton>\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Skeleton")," is a placeholder component for content that is loading. ",(0,i.kt)("inlineCode",{parentName:"p"},"Skeleton")," can help convey to users that content is on its way and the page is functioning as intended"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const { isOpen: isDoneLoading, onToggle } = useToggle();\n\n  const returnContent = () => {\n    if (isDoneLoading) {\n      return (\n        <>\n          <Announce>profile has loaded</Announce>\n          <Layout.Stack alignItems="left">\n            <Layout.Group>\n              <Layout.Group>\n                <Box\n                  height="50px"\n                  width="50px"\n                  padding="0px"\n                  css={{\n                    \'abyss-box-root\': {\n                      backgroundImage: `url(${utils.useBaseUrl(\n                        \'img/team/scott-houser.jpg\'\n                      )})`,\n                      backgroundRepeat: \'no-repeat\',\n                      backgroundSize: \'cover\',\n                      borderRadius: \'90px\',\n                    },\n                  }}\n                />\n              </Layout.Group>\n              <Layout.Group>\n                <Layout.Stack space={0} alignItems="left">\n                  <Text fontWeight={600}>Name goes here</Text>\n                  <Text size={\'$sm\'}>Description</Text>\n                </Layout.Stack>\n              </Layout.Group>\n            </Layout.Group>\n            <Layout.Group>\n              <Box\n                height="100px"\n                width="260px"\n                padding="0px"\n                css={{\n                  \'abyss-box-root\': {\n                    backgroundImage: `url(${utils.useBaseUrl(\n                      \'img/graphics/card-image-example.png\'\n                    )})`,\n                    backgroundRepeat: \'no-repeat\',\n                    backgroundSize: \'cover\',\n                    borderRadius: \'10px\',\n                  },\n                }}\n              />\n            </Layout.Group>\n          </Layout.Stack>\n        </>\n      );\n    }\n  };\n\n  const returnSkeletonStack = () => {\n    if (!isDoneLoading) {\n      return (\n        <Layout.Stack alignItems="left">\n          <Layout.Group>\n            <Skeleton variant="circular" width={50} height={50} />\n            <Layout.Stack>\n              <Skeleton variant="rounded" width={200} height={20} />\n              <Skeleton variant="rounded" width={200} height={20} />\n            </Layout.Stack>\n          </Layout.Group>\n          <Skeleton variant="rounded" width={260} height={100} />\n        </Layout.Stack>\n      );\n    }\n  };\n\n  return (\n    <Layout.Stack alignItems="left">\n      {returnContent()}\n      {returnSkeletonStack()}\n      <Button style={{ marginTop: \'15px\' }} onClick={onToggle}>\n        Toggle Loading\n      </Button>\n    </Layout.Stack>\n  );\n};\n')),(0,i.kt)("h2",{id:"width-and-height"},"Width and Height"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," props to size the Skeleton. The default settings are ",(0,i.kt)("inlineCode",{parentName:"p"},"100%")," for both width and height so if no values are provided the Skeleton will fill the parent container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  return (\n    <Layout.Stack alignItems=\"left\">\n      <div style={{ width: '100px', height: '100px' }}>\n        <Skeleton />\n      </div>\n      <Skeleton width={200} height={50} />\n    </Layout.Stack>\n  );\n};\n")),(0,i.kt)("h2",{id:"variant"},"Variant"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"variant")," prop to control the shape of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Skeleton")," component. Default is ",(0,i.kt)("inlineCode",{parentName:"p"},"rectangular")," which displays with no rounded edges. ",(0,i.kt)("inlineCode",{parentName:"p"},"rounded")," is displayed with rounded edges and a border radius of ",(0,i.kt)("inlineCode",{parentName:"p"},"8px"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"circular")," is displayed with fully rounded edges."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  return (\n    <Layout.Stack alignItems="left">\n      <Skeleton variant="rectangular" width={200} height={50} />\n      <Skeleton variant="rounded" width={200} height={50} />\n      <Skeleton variant="circular" width={50} height={50} />\n    </Layout.Stack>\n  );\n};\n')),(0,i.kt)("h2",{id:"animated"},"Animated"),(0,i.kt)("p",null,"Animation is enabled by default. If you'd like to disable animation pass in the ",(0,i.kt)("inlineCode",{parentName:"p"},"animated")," prop and set to a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  return (\n    <Layout.Stack alignItems="left">\n      <Skeleton animated={false} variant="rounded" width={200} height={50} />\n    </Layout.Stack>\n  );\n};\n'))),(0,i.kt)(c,{label:"Integration",mdxType:"Tab"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Skeleton}\n  rows={[\n    {\n      name: 'width',\n      type: 'number | string',\n      description: 'Set width of skeleton',\n    },\n    {\n      name: 'height',\n      type: 'number | string',\n      description: 'Set height of skeleton',\n    },\n    {\n      name: 'animated',\n      type: 'boolean',\n      description: 'Set to false to disable animation.',\n    },\n    {\n      name: 'variant',\n      type: \"'rectangular' | 'rounded' | 'circular'\",\n      description: 'Change shape of the skeleton',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Skeleton}\n  rows={[\n    {\n      name: 'skeleton-root',\n      description: 'Root element',\n    },\n  ]}\n/>\n"))))}m.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(t),g=o,m=c["".concat(p,".").concat(g)]||c[g]||u[g]||r;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);
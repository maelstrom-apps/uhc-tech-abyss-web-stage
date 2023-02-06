"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[2489],{18452:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var i=t(7896),a=t(31461),r=(t(2784),t(3905)),l=["components"],o={id:"link",category:"Navigation",title:"Link",description:"Used to hyperlink text and other components.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=3578%3A23321",pagination_prev:"web/ui/button",pagination_next:"web/ui/nav-menu"},s=void 0,p={unversionedId:"web/ui/link",id:"web/ui/link",isDocsHomePage:!1,title:"Link",description:"Used to hyperlink text and other components.",source:"@site/docs/web/ui/Link.md",sourceDirName:"web/ui",slug:"/web/ui/link",permalink:"/web/ui/link",tags:[],version:"current",frontMatter:{id:"link",category:"Navigation",title:"Link",description:"Used to hyperlink text and other components.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=3578%3A23321",pagination_prev:"web/ui/button",pagination_next:"web/ui/nav-menu"},sidebar:"docs",previous:{title:"Button",permalink:"/web/ui/button"},next:{title:"NavMenu",permalink:"/web/ui/nav-menu"}},c=[{value:"Text",id:"text",children:[],level:2},{value:"Href",id:"href",children:[],level:2},{value:"isDisabled",id:"isdisabled",children:[],level:2},{value:"Variant",id:"variant",children:[],level:2},{value:"Color",id:"color",children:[],level:2},{value:"Font Weight",id:"font-weight",children:[],level:2},{value:"Size",id:"size",children:[],level:2},{value:"Inserting Elements",id:"inserting-elements",children:[],level:2},{value:"Open Link in a New Tab or Window",id:"open-link-in-a-new-tab-or-window",children:[],level:2}],k=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)}},u=k("Tab"),d=k("ExitLink"),m={toc:c};function h(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(u,{label:"Overview",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Link } from '@abyss/web/ui/Link';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'Link',\n  inputs: [\n    {\n      prop: 'children',\n      type: 'string',\n    },\n    {\n      prop: 'color',\n      type: 'string',\n    },\n    {\n      prop: 'size',\n      type: 'string',\n    },\n    {\n      prop: 'fontWeight',\n      type: 'select',\n      options: [\n        { label: '$lighter', value: '$lighter' },\n        { label: '$light', value: '$light' },\n        { label: '$normal', value: '$normal' },\n        { label: '$bold', value: '$bold' },\n      ],\n    },\n    {\n      prop: 'variant',\n      type: 'select',\n      options: [\n        { label: 'underline', value: 'underline' },\n        { label: 'native', value: 'native' },\n      ],\n    },\n    {\n      prop: 'href',\n      type: 'string',\n    },\n    {\n      prop: 'isDisabled',\n      type: 'boolean',\n    },\n  ]\n}\n\n<Link>Link Sandbox</Link>\n")),(0,r.kt)("h2",{id:"text"},"Text"),(0,r.kt)("p",null,"Change the children of the link to set the text."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Link href="/web/ui/link">Insert link text here</Link>\n')),(0,r.kt)("h2",{id:"href"},"Href"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," prop to set the link to a separate page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Stack alignItems="left">\n  <Link href="https://www.google.com">Regular Link</Link>\n  <Link href="/web/ui/link">Based On Root Path</Link>\n</Layout.Stack>\n')),(0,r.kt)("h2",{id:"isdisabled"},"isDisabled"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"isDisabled")," or no ",(0,r.kt)("inlineCode",{parentName:"p"},"href")," prop is passed, the link becomes a native ",(0,r.kt)("inlineCode",{parentName:"p"},"<button>")," element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Layout.Stack alignItems=\"left\">\n  <Link onClick={() => console.log('onClick triggered!')}>Enabled Link</Link>\n  <Link isDisabled>Disabled Link</Link>\n</Layout.Stack>\n")),(0,r.kt)("h2",{id:"variant"},"Variant"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"variant")," prop to change the styling of the Link. The ",(0,r.kt)("inlineCode",{parentName:"p"},"variant")," property defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"'underline'"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"'native'")," variant is better suited for links with long text or having multiple lines."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Stack alignItems="left">\n  <Link href="https://www.google.com" variant="underline">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis\n    eros vel nibh suscipit rhoncus porta in nulla. Mauris nisl sem, semper sit\n    amet faucibus id, lacinia cursus odio.\n  </Link>\n  <Link href="https://www.google.com" variant="native">\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis\n    eros vel nibh suscipit rhoncus porta in nulla. Mauris nisl sem, semper sit\n    amet faucibus id, lacinia cursus odio.\n  </Link>\n</Layout.Stack>\n')),(0,r.kt)("h2",{id:"color"},"Color"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"color")," prop to set the color of the link. The default is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"interactive1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Stack alignItems="left">\n  <Link color="green" colorHover="darkGreen" href="/web/ui/link">\n    Regular color\n  </Link>\n  <Link color="$primary1" colorHover="$interactive1" href="/web/ui/link">\n    Primary color\n  </Link>\n  <Link color="#FF0000" colorHover="#AA0000" href="/web/ui/link">\n    Hexadecimal color\n  </Link>\n</Layout.Stack>\n')),(0,r.kt)("h2",{id:"font-weight"},"Font Weight"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"fontWeight")," prop to set the text weight of the link. Possible options are ",(0,r.kt)("inlineCode",{parentName:"p"},"soft")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"bold"),". The default is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"soft"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Stack alignItems="left">\n  <Link href="/web/ui/link">soft weight - default</Link>\n  <Link fontWeight="bold" href="/web/ui/link">\n    bold weight\n  </Link>\n</Layout.Stack>\n')),(0,r.kt)("h2",{id:"size"},"Size"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," prop to set the size of the link. The default is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"md"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Stack alignItems="left">\n  <Link size="sm" href="/web/ui/link">\n    Small / 16px\n  </Link>\n  <Link href="/web/ui/link">Medium / 20px</Link>\n  <Link size="lg" href="/web/ui/link">\n    Large / 24px\n  </Link>\n  <Link size="30px" href="/web/ui/link">\n    Custom / 30px\n  </Link>\n</Layout.Stack>\n')),(0,r.kt)("h2",{id:"inserting-elements"},"Inserting Elements"),(0,r.kt)("p",null,"Insert elements into the Link component using the ",(0,r.kt)("inlineCode",{parentName:"p"},"before")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"after")," props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Stack alignItems="left">\n  <Link before={<IconMaterial icon="chevron_left" />} href="/web/ui/link">\n    Before Link\n  </Link>\n  <Link after={<IconMaterial icon="chevron_right" />} href="/web/ui/link">\n    After Link\n  </Link>\n</Layout.Stack>\n')),(0,r.kt)("h2",{id:"open-link-in-a-new-tab-or-window"},"Open Link in a New Tab or Window"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"openNewWindow")," prop to specify whether links open in a new tab or window. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"openNewWindow")," is false for relative links, and true for absolute links."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Stack alignItems="left">\n  <Label>Relative Link</Label>\n  <Link href="/web/ui/link">Relative - Same Window/Tab</Link>\n  <Link href="/web/ui/link" openNewWindow>\n    Relative - New Window/Tab\n  </Link>\n  <Label>Absolute Link</Label>\n  <Link href="https://www.google.com" openNewWindow={false}>\n    Absolute - Same Window/Tab\n  </Link>\n  <Link href="https://www.google.com">Absolute - New Window/Tab</Link>\n</Layout.Stack>\n'))),(0,r.kt)(u,{label:"Integration",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Link}\n  rows={[\n    {\n      name: 'before',\n      type: 'ReactNode',\n      description: 'Insert element into link component before children',\n    },\n    {\n      name: 'after',\n      type: 'ReactNode',\n      description: 'Insert element into link component after children',\n    },\n    {\n      name: 'href',\n      type: 'string',\n      description: 'Set the URL of the link',\n    },\n    {\n      name: 'color',\n      type: 'string',\n      description: 'Set the color of the link',\n    },\n    {\n      name: 'colorHover',\n      type: 'string',\n      description: 'Set the color of the link when it is hovered',\n    },\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'Set the text of the link',\n    },\n    {\n      name: 'fontWeight',\n      type: 'string',\n      description: 'Flag to set font weight of link',\n    },\n    {\n      name: 'size',\n      type: 'number | string',\n      description: 'Set the size of the link',\n    },\n    {\n      name: 'sizes',\n      type: 'shape',\n      description: 'Default sizes of the link',\n    },\n    {\n      name: 'variant',\n      type: \"'underline' | 'native' | 'custom'\",\n      description:\n        'Indicate whether the items contained in link should be underlined',\n    },\n    {\n      name: 'hideIcon',\n      type: 'boolean',\n      description: 'Flag to hide icon',\n    },\n    {\n      name: 'openNewWindow',\n      type: 'boolean',\n      description: 'Flag to set link to open in a new window',\n    },\n    {\n      name: 'onClick',\n      type: 'function',\n      description: 'Used to trigger a custom function when the link is clicked',\n    },\n    {\n      name: 'isDisabled',\n      type: 'boolean',\n      description: 'Flag to enable/disable the link',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Link}\n  rows={[\n    {\n      name: 'link-root',\n      description: 'Link root element',\n    },\n    {\n      name: 'link-icon',\n      description: 'Link icon element',\n    },\n    {\n      name: 'link-icon-wrapper',\n      description: 'Link icon wrapper element',\n    },\n  ]}\n/>\n"))),(0,r.kt)(u,{label:"Accessibility",mdxType:"Tab"},(0,r.kt)("p",null,"A link widget provides an interactive reference to a resource. The target resource can be either external or local, i.e., either outside or within the current page or application."),(0,r.kt)("p",null,"Adheres to the ",(0,r.kt)(d,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#link",mdxType:"ExitLink"},"Link WAI-ARIA design pattern"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Stack alignItems="left">\n  <Link href="https://www.google.com">Regular Link</Link>\n  <Link href="/web/ui/link">Based On Root Path</Link>\n</Layout.Stack>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  rows={[\n    {\n      name: 'Enter',\n      description: 'Executes the link and moves focus to the link target.',\n    },\n  ]}\n/>\n")),(0,r.kt)("p",null,'The accessible name for the link must include the visible link text in its entirety. For example, if the visible link text is "Health Plans\u201d the accessible name must include "Health Plans\u201d. Preferably, the visible link text should precede any supplementary text in the accessible name.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Link href="/web/ui/link">Health Plans</Link>\n')),(0,r.kt)("br",null),"Keyboard operation: a keyboard only user must be able to tab to the link, and activate it with the enter key."))}h.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||r;return t?i.createElement(m,l(l({ref:n},c),{},{components:t})):i.createElement(m,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);
"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[7715],{37623:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>S,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var a,i=n(7896),r=n(31461),s=(n(2784),n(3905)),o=["components"],c={id:"status-indicator",category:"Data Display",title:"StatusIndicator",description:"Provides a status descriptor for UI elements.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A992",pagination_prev:"web/ui/service-sandbox",pagination_next:"web/ui/table"},l=void 0,d={unversionedId:"web/ui/status-indicator",id:"web/ui/status-indicator",isDocsHomePage:!1,title:"StatusIndicator",description:"Provides a status descriptor for UI elements.",source:"@site/docs/web/ui/StatusIndicator.md",sourceDirName:"web/ui",slug:"/web/ui/status-indicator",permalink:"/web/ui/status-indicator",tags:[],version:"current",frontMatter:{id:"status-indicator",category:"Data Display",title:"StatusIndicator",description:"Provides a status descriptor for UI elements.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A992",pagination_prev:"web/ui/service-sandbox",pagination_next:"web/ui/table"},sidebar:"docs",previous:{title:"ServiceSandbox",permalink:"/web/ui/service-sandbox"},next:{title:"Table",permalink:"/web/ui/table"}},u=[{value:"Usage",id:"usage",children:[],level:2},{value:"Variants",id:"variants",children:[],level:2},{value:"StatusIndicator.Text",id:"statusindicatortext",children:[],level:2},{value:"StatusIndicator.Icon",id:"statusindicatoricon",children:[],level:2},{value:"StatusIndicator.Link",id:"statusindicatorlink",children:[],level:2},{value:"Accessibility",id:"accessibility",children:[],level:2},{value:"Width",id:"width",children:[{value:"Decorative Icons",id:"decorative-icons",children:[],level:4},{value:"Meaningful Colors",id:"meaningful-colors",children:[],level:4}],level:2}],p=(a="Tab",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}),m={toc:u};function S(t){var e=t.components,n=(0,r.Z)(t,o);return(0,s.kt)("wrapper",(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)(p,{label:"Overview",mdxType:"Tab"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { StatusIndicator } from '@abyss/web/ui/StatusIndicator';\n")),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"Use StatusIndicator to display status messages to the user."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<StatusIndicator variant="success" statusLabel="Status label">\n  <StatusIndicator.Icon title="success" />\n  <StatusIndicator.Text>Status</StatusIndicator.Text>\n  <StatusIndicator.Link href="#">Link</StatusIndicator.Link>\n</StatusIndicator>\n')),(0,s.kt)("h2",{id:"variants"},"Variants"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"variant")," property to set the color of the ",(0,s.kt)("inlineCode",{parentName:"p"},"StatusIndicator"),".\nThe options are ",(0,s.kt)("inlineCode",{parentName:"p"},"success"),",",(0,s.kt)("inlineCode",{parentName:"p"},"info"),",",(0,s.kt)("inlineCode",{parentName:"p"},"warning"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"error"),". the default is ",(0,s.kt)("inlineCode",{parentName:"p"},"success"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Stack>\n  <StatusIndicator variant="success" statusLabel="Status label">\n    <StatusIndicator.Icon title="success" />\n    <StatusIndicator.Text>Status</StatusIndicator.Text>\n    <StatusIndicator.Link href="#">Link</StatusIndicator.Link>\n  </StatusIndicator>\n\n  <StatusIndicator variant="info" statusLabel="Status label">\n    <StatusIndicator.Icon title="info" />\n    <StatusIndicator.Text>Status</StatusIndicator.Text>\n    <StatusIndicator.Link href="#">Link</StatusIndicator.Link>\n  </StatusIndicator>\n\n  <StatusIndicator variant="warning" statusLabel="Status label">\n    <StatusIndicator.Icon title="warning" />\n    <StatusIndicator.Text>Status</StatusIndicator.Text>\n    <StatusIndicator.Link href="#">Link</StatusIndicator.Link>\n  </StatusIndicator>\n\n  <StatusIndicator variant="error" statusLabel="Status label">\n    <StatusIndicator.Icon title="error" />\n    <StatusIndicator.Text>Status</StatusIndicator.Text>\n    <StatusIndicator.Link href="#">Link</StatusIndicator.Link>\n  </StatusIndicator>\n</Layout.Stack>\n')),(0,s.kt)("h2",{id:"statusindicatortext"},"StatusIndicator.Text"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"StatusIndicator.Text")," to specify what status text should appear in the indicator."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Stack>\n  <StatusIndicator variant="success" statusLabel="Status label">\n    <StatusIndicator.Text>Success!</StatusIndicator.Text>\n  </StatusIndicator>\n  <StatusIndicator variant="error" statusLabel="Status label">\n    <StatusIndicator.Text>Error!</StatusIndicator.Text>\n  </StatusIndicator>\n</Layout.Stack>\n')),(0,s.kt)("h2",{id:"statusindicatoricon"},"StatusIndicator.Icon"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"StatusIndicator.Icon")," is an element used to set the icon of the ",(0,s.kt)("inlineCode",{parentName:"p"},"StatusIndicator"),". It has a ",(0,s.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"variant")," property. The variant of the icon can be ",(0,s.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"warning"),", or ",(0,s.kt)("inlineCode",{parentName:"p"},"error"),". The icon inherits the variant of the ",(0,s.kt)("inlineCode",{parentName:"p"},"StatusIndicator")," by default."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Layout.Stack>\n  <StatusIndicator variant="success" statusLabel="Status label">\n    <StatusIndicator.Icon title="success" />\n  </StatusIndicator>\n\n  <StatusIndicator variant="warning" statusLabel="Status label">\n    <StatusIndicator.Icon title="info" variant="info" />\n  </StatusIndicator>\n</Layout.Stack>\n')),(0,s.kt)("h2",{id:"statusindicatorlink"},"StatusIndicator.Link"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"StatusIndicator.Link")," to give the ",(0,s.kt)("inlineCode",{parentName:"p"},"StatusIndicator")," a link. ",(0,s.kt)("inlineCode",{parentName:"p"},"StatusIndicator.Link")," takes in an ",(0,s.kt)("inlineCode",{parentName:"p"},"href"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<StatusIndicator variant="info" statusLabel="Status label">\n  <StatusIndicator.Link href="#">Link</StatusIndicator.Link>\n</StatusIndicator>\n')),(0,s.kt)("h2",{id:"accessibility"},"Accessibility"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"ariaText")," prop to provide additional information denoted by the color. For more information visit the accessibility tab."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<StatusIndicator\n  ariaText="success"\n  variant="success"\n  statusLabel="Status label"\n>\n  <StatusIndicator.Link href="#">Link</StatusIndicator.Link>\n</StatusIndicator>\n')),(0,s.kt)("h2",{id:"width"},"Width"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"width")," prop to set the desired width. The default setting is ",(0,s.kt)("inlineCode",{parentName:"p"},"fit-content"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<StatusIndicator variant="success" statusLabel="Status label" width="100%">\n  <StatusIndicator.Icon title="success" />\n  <StatusIndicator.Text>Status</StatusIndicator.Text>\n  <StatusIndicator.Link href="#">Link</StatusIndicator.Link>\n</StatusIndicator>\n'))),(0,s.kt)(p,{label:"Integration",mdxType:"Tab"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={StatusIndicator}\n  rows={[\n    {\n      name: 'variant',\n      type: '\"success\" | \"info\" | \"warning\" | \"error\"',\n      description: 'Set the color of the StatusIndicator',\n    },\n    {\n      name: 'statusLabel',\n      type: 'string',\n      description: 'Set a label for the StatusIndicator',\n    },\n    {\n      name: 'ariaText',\n      type: 'string',\n      description: 'Sets the hidden text used for accessibility purposes',\n    },\n    {\n      name: 'width',\n      type: 'string | number',\n      description: 'Sets the width for the StatusIndicator',\n    },\n  ]}\n/>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={StatusIndicator.Icon}\n  rows={[\n    {\n      name: 'variant',\n      type: '\"success\" | \"info\" | \"warning\" | \"error\"',\n      description: 'Set the color of the StatusIcon',\n    },\n    {\n      name: 'title',\n      type: 'string',\n      description: 'Sets the title of the icon',\n    },\n  ]}\n/>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={StatusIndicator.Text}\n  rows={[\n    {\n      name: 'children',\n      type: 'string',\n      description: 'Set the text of the StatusIndicator',\n    },\n  ]}\n/>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={StatusIndicator.Link}\n  rows={[\n    {\n      name: 'children',\n      type: 'string',\n      description: 'Set the display text for the link',\n    },\n    {\n      name: 'href',\n      type: 'string',\n      description: 'Sets the destination the link should take you to',\n    },\n    {\n      name: 'hideIcon',\n      type: 'boolean',\n      description: 'Flag to hide icon',\n    },\n    {\n      name: 'openNewWindow',\n      type: 'boolean',\n      description: 'Flag to set link to open in a new window',\n    },\n    {\n      name: 'onClick',\n      type: 'function',\n      description: 'Used to trigger a custom function when the link is clicked',\n    },\n    {\n      name: 'isDisabled',\n      type: 'boolean',\n      description: 'Flag to enable/disable the link',\n    },\n  ]}\n/>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={StatusIndicator}\n  rows={[\n    {\n      name: 'status-indicator-root',\n      description: 'StatusIndicator root element',\n    },\n    {\n      name: 'status-indicator-label',\n      description: 'StatusIndicator label element',\n    },\n  ]}\n/>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={StatusIndicator.Icon}\n  rows={[\n    {\n      name: 'status-indicator-icon',\n      description: 'StatusIndicator icon element',\n    },\n  ]}\n/>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={StatusIndicator.Text}\n  rows={[\n    {\n      name: 'status-indicator-content',\n      description: 'StatusIndicator content element',\n    },\n  ]}\n/>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={StatusIndicator.Link}\n  rows={[\n    {\n      name: 'status-indicator-link',\n      description: 'StatusIndicator link element',\n    },\n  ]}\n/>\n"))),(0,s.kt)(p,{label:"Accessibility",mdxType:"Tab"},(0,s.kt)("p",null,"StatusIndicator's are not focusable, visual text elements used to show a status for quick recognition."),(0,s.kt)("h4",{id:"decorative-icons"},"Decorative Icons"),(0,s.kt)("p",null,"In the StatusIndicator below, since there is sufficient text next to the icon, the icon is considered decorative and and does not need to be exposed to assistive technology."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<StatusIndicator variant="warning" statusLabel="Warning Status">\n  <StatusIndicator.Icon />\n  <StatusIndicator.Text>Warning</StatusIndicator.Text>\n</StatusIndicator>\n')),(0,s.kt)("h4",{id:"meaningful-colors"},"Meaningful Colors"),(0,s.kt)("p",null,"Conveying Meaning Via Color Alone: Color must not used as the only means of conveying information, actions, prompting a response, or distinguishing elements. Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class. This can also be done by using the ariaText prop."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<StatusIndicator variant="warning" statusLabel="Warning Status">\n  <StatusIndicator.Text>Warning</StatusIndicator.Text>\n</StatusIndicator>\n'))))}S.isMDXComponent=!0},3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(2784);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},d=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),p=l(n),m=i,S=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(S,s(s({ref:e},d),{},{components:n})):a.createElement(S,s({ref:e},d))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,s=new Array(r);s[0]=p;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
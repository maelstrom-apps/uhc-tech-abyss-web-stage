"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[2502],{30876:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>b});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(a),b=l,u=m["".concat(s,".").concat(b)]||m[b]||p[b]||r;return a?t.createElement(u,o(o({ref:n},d),{},{components:a})):t.createElement(u,o({ref:n},d))}));function b(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13061:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>s,default:()=>T,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=a(7896),l=a(31461),r=(a(67294),a(30876)),o=["components"],i={id:"table",category:"Data Display",title:"Table",description:"Used to create a static table of data to easily convey information.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1606",pagination_prev:"web/ui/status-indicator",pagination_next:"web/ui/alert"},s=void 0,c={unversionedId:"web/ui/table",id:"web/ui/table",isDocsHomePage:!1,title:"Table",description:"Used to create a static table of data to easily convey information.",source:"@site/docs/web/ui/Table.md",sourceDirName:"web/ui",slug:"/web/ui/table",permalink:"/web/ui/table",tags:[],version:"current",frontMatter:{id:"table",category:"Data Display",title:"Table",description:"Used to create a static table of data to easily convey information.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1606",pagination_prev:"web/ui/status-indicator",pagination_next:"web/ui/alert"},sidebar:"docs",previous:{title:"StatusIndicator",permalink:"/web/ui/status-indicator"},next:{title:"Alert",permalink:"/web/ui/alert"}},d=[{value:"Usage",id:"usage",children:[],level:2},{value:"Table Overflow Scroll",id:"table-overflow-scroll",children:[],level:2},{value:"Manual Table",id:"manual-table",children:[],level:2},{value:"Custom Table",id:"custom-table",children:[],level:2}],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)}},m=p("Tab"),b=p("ExitLink"),u={toc:d};function T(e){var n=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(m,{label:"Overview",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Table } from '@abyss/web/ui/Table';\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," is used strictly for HTML markup on the page. It is a static tabular structure containing one or more rows that each contain one or more cells; it is not an interactive widget. Thus, its cells are not focusable or selectable. They organize information in a way that's easy to scan so that users can look for patterns and develop insights from data."),(0,r.kt)("p",null,"The table consists of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Table Header")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"Table Body"),". Column header names describe the type of content displayed in each column. Column header text uses a medium weight font to differentiate from row text. Each row contains data related to a single entity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const columns = [\n    { name: 'Name', key: 'name' },\n    { name: 'Type', key: 'type' },\n    { name: 'Date Modified', key: 'date' },\n  ];\n\n  const rows = [\n    { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },\n    { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },\n    { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },\n    { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' },\n  ];\n\n  return <Table title=\"Base Static Table\" columns={columns} rows={rows} />;\n};\n")),(0,r.kt)("h2",{id:"table-overflow-scroll"},"Table Overflow Scroll"),(0,r.kt)("p",null,"See the example below on how to add overflow scroll to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," by utilizing a wrapper container and adding the overflow style setting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const columns = [\n    { name: 'Name', key: 'name' },\n    { name: 'Type', key: 'type' },\n    { name: 'Content Size', key: 'size' },\n    { name: 'Upload By', key: 'uploadby' },\n    { name: 'Date Created', key: 'creationdate' },\n    { name: 'Date Modified', key: 'date' },\n    { name: 'Organization', key: 'org' },\n    { name: 'Team', key: 'team' },\n    { name: 'Location', key: 'location' },\n    { name: 'Status', key: 'status' },\n    { name: 'Approval', key: 'approval' },\n  ];\n\n  const rows = [\n    {\n      id: 1,\n      name: 'Games',\n      size: '5GB',\n      uploadby: 'SK',\n      date: '6/7/2020',\n      type: 'File folder',\n      creationdate: '5/7/2020',\n      org: 'Optum',\n      team: 'Abyss',\n      location: 'MN',\n      status: 'Completed',\n      approval: 'Manager',\n    },\n    {\n      id: 2,\n      name: 'Program Files',\n      size: '50GB',\n      uploadby: 'AB',\n      date: '4/7/2021',\n      type: 'File folder',\n      creationdate: '2/7/2021',\n      org: 'Optum',\n      team: 'Abyss',\n      location: 'MN',\n      status: 'Completed',\n      approval: 'Manager',\n    },\n    {\n      id: 3,\n      name: 'bootmgr',\n      size: '100GB',\n      uploadby: 'SK',\n      date: '11/20/2010',\n      type: 'System file',\n      creationdate: '11/10/2009',\n      org: 'Optum',\n      team: 'Abyss',\n      location: 'MN',\n      status: 'Pending',\n      approval: 'Manager',\n    },\n    {\n      id: 4,\n      name: 'log.txt',\n      size: '5KB',\n      uploadby: 'TK',\n      date: '1/18/2016',\n      type: 'Text Document',\n      creationdate: '1/1/2016',\n      org: 'Optum',\n      team: 'Abyss',\n      location: 'MN',\n      status: 'Review',\n      approval: 'Manager',\n    },\n  ];\n\n  const WrapperDiv = styled('div', { overflow: 'auto' });\n\n  return (\n    <WrapperDiv>\n      <Table title=\"Table Scroll\" columns={columns} rows={rows} />\n    </WrapperDiv>\n  );\n};\n")),(0,r.kt)("h2",{id:"manual-table"},"Manual Table"),(0,r.kt)("p",null,"If more customization is needed, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," sub-components to create each section. This allows for adjustments to the individual sections."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Table.Container title="Manual Static Table">\n  <Table.TableHeader>\n    <Table.TableHeaderRow>\n      <Table.Column>Name</Table.Column>\n      <Table.Column>Type</Table.Column>\n      <Table.Column>Date Modified</Table.Column>\n    </Table.TableHeaderRow>\n  </Table.TableHeader>\n  <Table.TableBody>\n    <Table.Row>\n      <Table.Cell>Games</Table.Cell>\n      <Table.Cell>File folder</Table.Cell>\n      <Table.Cell>6/7/2020</Table.Cell>\n    </Table.Row>\n    <Table.Row>\n      <Table.Cell>Program Files</Table.Cell>\n      <Table.Cell>File folder</Table.Cell>\n      <Table.Cell>4/7/2021</Table.Cell>\n    </Table.Row>\n    <Table.Row>\n      <Table.Cell>bootmgr</Table.Cell>\n      <Table.Cell>System file</Table.Cell>\n      <Table.Cell>11/20/2010</Table.Cell>\n    </Table.Row>\n    <Table.Row>\n      <Table.Cell>log.txt</Table.Cell>\n      <Table.Cell>Text Document</Table.Cell>\n      <Table.Cell>1/18/2016</Table.Cell>\n    </Table.Row>\n  </Table.TableBody>\n</Table.Container>\n')),(0,r.kt)("h2",{id:"custom-table"},"Custom Table"),(0,r.kt)("p",null,"If further customization is needed, most styles of ",(0,r.kt)("inlineCode",{parentName:"p"},"Table")," can be overridden using ",(0,r.kt)("inlineCode",{parentName:"p"},"css"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Table.Container title=\"Manual Static Table\">\n  <Table.TableHeader>\n    <Table.TableHeaderRow css={{ color: '$white', backgroundColor: '$black' }}>\n      <Table.Column>Name</Table.Column>\n      <Table.Column>Type</Table.Column>\n      <Table.Column>Date Modified</Table.Column>\n    </Table.TableHeaderRow>\n  </Table.TableHeader>\n  <Table.TableBody>\n    <Table.Row>\n      <Table.Cell css={{ color: '$primary1', backgroundColor: '$gray3' }}>\n        Games\n      </Table.Cell>\n      <Table.Cell>File folder</Table.Cell>\n      <Table.Cell css={{ color: '$primary2', backgroundColor: '$primary1' }}>\n        6/7/2020\n      </Table.Cell>\n    </Table.Row>\n    <Table.Row>\n      <Table.Cell css={{ color: '$primary1', backgroundColor: '$gray3' }}>\n        Program Files\n      </Table.Cell>\n      <Table.Cell>File folder</Table.Cell>\n      <Table.Cell css={{ color: '$primary2', backgroundColor: '$primary1' }}>\n        4/7/2021\n      </Table.Cell>\n    </Table.Row>\n  </Table.TableBody>\n</Table.Container>\n"))),(0,r.kt)(m,{label:"Integration",mdxType:"Tab"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Table}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the table component',\n    },\n    {\n      name: 'title',\n      type: 'string',\n      description: 'Title of the table',\n    },\n    {\n      name: 'columns',\n      type: 'array[object]',\n      description: 'Array of column data. { name: string, key: string }',\n    },\n    {\n      name: 'rows',\n      type: 'array[object]',\n      description: 'Array of column data. { id: number, [column key]: string }',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Table.Container}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the table container component',\n    },\n    {\n      name: 'title',\n      type: 'string',\n      description: 'Title of the table',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Table.TableHeader}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the table header component',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Table.TableHeaderRow}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the table header row component',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Table.Column}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the table header column component',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Table.TableBody}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the table body component',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Table.Row}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the table row component',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Table.Cell}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the table cell component',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Table}\n  rows={[\n    {\n      name: 'table-root',\n      description: 'Table root element',\n    },\n    {\n      name: 'table-head',\n      description: 'Header container',\n    },\n    {\n      name: 'table-styled-header',\n      description: 'Header Styled Container',\n    },\n    {\n      name: 'table-header-container',\n      description: 'Header Container',\n    },\n    {\n      name: 'table-header-cell-container',\n      description: 'Header cell container',\n    },\n    {\n      name: 'table-body',\n      description: 'Body container',\n    },\n    {\n      name: 'table-row',\n      description: 'Row element',\n    },\n    {\n      name: 'table-row-expanded',\n      description: 'Row expanded',\n    },\n    {\n      name: 'table-cell',\n      description: 'Cell element',\n    },\n    {\n      name: 'table-cell-expanded',\n      description: 'Cell expanded',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Table.Container}\n  rows={[\n    {\n      name: 'table-root',\n      description: 'Table root element',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Table.TableHeader}\n  rows={[\n    {\n      name: 'table-head',\n      description: 'Header container',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Table.TableHeaderRow}\n  rows={[\n    {\n      name: 'table-header',\n      description: 'Header row container',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Table.Column}\n  rows={[\n    {\n      name: 'table-styled-header',\n      description: 'Header styled cell container',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Table.TableBody}\n  rows={[\n    {\n      name: 'table-body',\n      description: 'Body container',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Table.Row}\n  rows={[\n    {\n      name: 'table-row',\n      description: 'Row element',\n    },\n  ]}\n/>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Table.Cell}\n  rows={[\n    {\n      name: 'table-cell',\n      description: 'Cell element',\n    },\n  ]}\n/>\n"))),(0,r.kt)(m,{label:"Accessibility",mdxType:"Tab"},(0,r.kt)("p",null,"Like an HTML table element, a WAI-ARIA table is a static tabular structure containing one or more rows that each contain one or more cells; it is not an interactive widget. Thus, its cells are not focusable or selectable. The grid pattern is used to make an interactive widget that has a tabular structure."),(0,r.kt)("p",null,"However, tables are often used to present a combination of information and interactive widgets. Since a table is not a widget, each widget contained in a table is a separate stop in the page tab sequence. If the number of widgets is large, replacing the table with a grid can dramatically reduce the length of the page tab sequence because a grid is a composite widget that can contain other widgets."),(0,r.kt)("p",null,"Adheres to the ",(0,r.kt)(b,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#table",mdxType:"ExitLink"},"Table WAI-ARIA design pattern"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const columns = [\n    { name: 'Name', key: 'name' },\n    { name: 'Type', key: 'type' },\n    { name: 'Date Modified', key: 'date' },\n  ];\n\n  const rows = [\n    { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },\n    { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },\n    { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },\n    { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' },\n  ];\n\n  return <Table title=\"Base Static Table\" columns={columns} rows={rows} />;\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  rows={[\n    {\n      name: 'Not Applicable',\n      description: 'Not Applicable',\n    },\n  ]}\n/>\n"))))}T.isMDXComponent=!0}}]);
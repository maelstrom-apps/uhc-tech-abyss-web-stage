"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[2392],{18914:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>b,toc:()=>u});var t=a(7896),i=a(31461),s=(a(2784),a(3905)),l=["components"],r={id:"tabs",category:"Content",title:"Tabs",description:"Used to view and switch between different sets of content.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1599",pagination_prev:"web/ui/step-indicator",pagination_next:"web/ui/badge"},o=void 0,b={unversionedId:"web/ui/tabs",id:"web/ui/tabs",isDocsHomePage:!1,title:"Tabs",description:"Used to view and switch between different sets of content.",source:"@site/docs/web/ui/Tabs.md",sourceDirName:"web/ui",slug:"/web/ui/tabs",permalink:"/web/ui/tabs",tags:[],version:"current",frontMatter:{id:"tabs",category:"Content",title:"Tabs",description:"Used to view and switch between different sets of content.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=0%3A1599",pagination_prev:"web/ui/step-indicator",pagination_next:"web/ui/badge"},sidebar:"docs",previous:{title:"StepIndicator",permalink:"/web/ui/step-indicator"},next:{title:"Badge",permalink:"/web/ui/badge"}},u=[{value:"Display",id:"display",children:[],level:2},{value:"Variants",id:"variants",children:[],level:2},{value:"Title",id:"title",children:[],level:2},{value:"Active (Controlled)",id:"active-controlled",children:[],level:2},{value:"Initial Tab (Uncontrolled)",id:"initial-tab-uncontrolled",children:[],level:2},{value:"SubText",id:"subtext",children:[],level:2},{value:"Grow",id:"grow",children:[],level:2},{value:"Position",id:"position",children:[],level:2},{value:"Size",id:"size",children:[],level:2},{value:"Height",id:"height",children:[],level:2},{value:"Custom Headers",id:"custom-headers",children:[],level:2}],c=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",n)}},p=c("Tab"),T=c("ExitLink"),d={toc:u};function m(e){var n=e.components,a=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(p,{label:"Overview",mdxType:"Tab"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Tabs } from '@abyss/web/ui/Tabs';\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'Tabs',\n  inputs: [\n    {\n      prop: 'initialTab',\n      type: 'number',\n      description: 'Used to indicate initial tab',\n    },\n    {\n      prop: 'size',\n      type: 'size',\n      description: 'Set size of tabs',\n    },\n    {\n      prop: 'height',\n      type: 'size',\n      description: 'Set size of tabs',\n    },\n    {\n      prop: 'position',\n      type: 'select',\n      options: [\n        { label: 'start', value: 'start' },\n        { label: 'center', value: 'center' },\n        { label: 'end', value: 'end' },\n      ],\n    },\n    {\n      prop: 'variant',\n      type: 'select',\n      options: [\n        { label: 'enclosed', value: 'enclosed' },\n        { label: 'line', value: 'line' },\n        { label: 'arrow', value: 'arrow' },\n      ],\n    },\n    {\n      prop: 'display',\n      type: 'select',\n      options: [\n        { label: 'row', value: 'row' },\n        { label: 'column', value: 'column' },\n      ],\n    },\n    {\n      prop: 'grow',\n      type: 'boolean',\n    },\n  ]\n}\n\n<Tabs title=\"Tabs Sandbox\">\n  <Tabs.Tab label=\"Tab 1\">Tab 1 Content</Tabs.Tab>\n  <Tabs.Tab label=\"Tab 2\">Tab 2 Content</Tabs.Tab>\n  <Tabs.Tab label=\"Tab 3\">Tab 3 Content</Tabs.Tab>\n</Tabs>\n")),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"display"},"Display"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"display")," property determines whether the tab buttons will be displayed horizontally or vertically. The two options are ",(0,s.kt)("inlineCode",{parentName:"p"},"row")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"column"),", and the default is ",(0,s.kt)("inlineCode",{parentName:"p"},"row"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Card>\n  <Card.Section backgroundColor="$gray3">\n    <Layout.Stack grow space={45}>\n      <Tabs title="Display - Row">\n        <Tabs.Tab label="Row Display - Tab 1">Tab 1 Content</Tabs.Tab>\n        <Tabs.Tab label="Row Display - Tab 2">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Row Display - Tab 3">Tab 3 Content</Tabs.Tab>\n      </Tabs>\n\n      <Tabs title="Display - Column" display="column">\n        <Tabs.Tab label="Column Display - Tab 1">Tab 1 Content</Tabs.Tab>\n        <Tabs.Tab label="Column Display - Tab 2">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Column Display - Tab 3">Tab 3 Content</Tabs.Tab>\n      </Tabs>\n    </Layout.Stack>\n  </Card.Section>\n</Card>\n')),(0,s.kt)("h2",{id:"variants"},"Variants"),(0,s.kt)("p",null,"Currently, there are three variants to choose from: ",(0,s.kt)("inlineCode",{parentName:"p"},"enclosed"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"line"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"arrow"),". Each variant can be displayed either vertically or horizontally by modifying the ",(0,s.kt)("inlineCode",{parentName:"p"},"display")," property. The default value is ",(0,s.kt)("inlineCode",{parentName:"p"},"enclosed"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Card>\n  <Card.Section backgroundColor="$gray3">\n    <Layout.Stack grow space={45}>\n      <Tabs title="Arrow Variant" variant="arrow">\n        <Tabs.Tab label="Arrow - Tab 1" />\n        <Tabs.Tab label="Arrow - Tab 2" />\n        <Tabs.Tab label="Arrow - Tab 3" />\n      </Tabs>\n\n      <Tabs title="Enclosed Variant">\n        <Tabs.Tab label="Enclosed - Tab 1" />\n        <Tabs.Tab label="Enclosed - Tab 2" />\n        <Tabs.Tab label="Enclosed - Tab 3" />\n      </Tabs>\n\n      <Tabs title="Line Variant" variant="line">\n        <Tabs.Tab label="Line - Tab 1" />\n        <Tabs.Tab label="Line - Tab 2" />\n        <Tabs.Tab label="Line - Tab 3" />\n      </Tabs>\n    </Layout.Stack>\n  </Card.Section>\n</Card>\n')),(0,s.kt)("h2",{id:"title"},"Title"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"title")," property provides a label that describes the purpose of the set of tabs. This is a required property as it gives screen reader users important context."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs title="Tab Group Title">\n  <Tabs.Tab label="Tab - 1">Tab 1 Content</Tabs.Tab>\n  <Tabs.Tab label="Tab - 2">Tab 2 Content</Tabs.Tab>\n  <Tabs.Tab label="Tab - 3">Tab 3 Content</Tabs.Tab>\n</Tabs>\n')),(0,s.kt)("h2",{id:"active-controlled"},"Active (Controlled)"),(0,s.kt)("p",null,"To control the tabs active state pass in the index of the desired tab to the ",(0,s.kt)("inlineCode",{parentName:"p"},"active")," prop. This must be used in combination with ",(0,s.kt)("inlineCode",{parentName:"p"},"onTabChange")," to ensure that the active tab state is always current. If no default state is passed the active tab will default to the first tab in the sequence."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [activeIndex, setActiveIndex] = useState(1);\n\n  return (\n    <Layout.Stack alignItems="left" grow>\n      <Tabs\n        title="Active Tab"\n        active={activeIndex}\n        onTabChange={setActiveIndex}\n      >\n        <Tabs.Tab label="Tab - 1">Tab 1 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab - 2">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab - 3">Tab 3 Content</Tabs.Tab>\n      </Tabs>\n      <Layout.Group>\n        <Button onClick={() => setActiveIndex(0)}>Set to Tab 1</Button>\n        <Button onClick={() => setActiveIndex(1)}>Set to Tab 2</Button>\n        <Button onClick={() => setActiveIndex(2)}>Set to Tab 3</Button>\n      </Layout.Group>\n    </Layout.Stack>\n  );\n};\n')),(0,s.kt)("h2",{id:"initial-tab-uncontrolled"},"Initial Tab (Uncontrolled)"),(0,s.kt)("p",null,"If you do not need to subscribe to the tabs active state use the ",(0,s.kt)("inlineCode",{parentName:"p"},"initialTab")," property to set the tab that is active at build time. The default is set to the first tab in the sequence. If used instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"active")," the active state will be uncontrolled and handled internally by the component."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Tabs initialTab={2} title="Initial Tab">\n  <Tabs.Tab label="Other Tab - 1">Tab 1 Content</Tabs.Tab>\n  <Tabs.Tab label="Initial Tab - 2">Tab 2 Content</Tabs.Tab>\n  <Tabs.Tab label="Other Tab - 3">Tab 3 Content</Tabs.Tab>\n</Tabs>\n')),(0,s.kt)("h2",{id:"subtext"},"SubText"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"subText")," prop of tab to display helpful text below the tab title."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Card>\n  <Card.Section backgroundColor="$gray3">\n    <Layout.Stack grow space={45}>\n      <Tabs title="Enclosed Variant">\n        <Tabs.Tab label="Enclosed - Tab 1" subText="Sub Text" />\n        <Tabs.Tab label="Enclosed - Tab 2" subText="Sub Text" />\n      </Tabs>\n      <Tabs title="Line Variant" variant="line">\n        <Tabs.Tab\n          label="Line - Tab 1"\n          subText={\n            <span\n              style={{\n                display: \'inline-flex\',\n                alignItems: \'center\',\n                flexWrap: \'wrap\',\n              }}\n            >\n              Sub Text\n              <IconMaterial\n                icon="check"\n                size={18}\n                style={{ marginLeft: \'8px\' }}\n              />\n            </span>\n          }\n        />\n        <Tabs.Tab\n          label="Line - Tab 2"\n          subText={\n            <span\n              style={{\n                display: \'inline-flex\',\n                alignItems: \'center\',\n                flexWrap: \'wrap\',\n              }}\n            >\n              Sub Text\n              <IconMaterial\n                icon="check"\n                size={18}\n                style={{ marginLeft: \'8px\' }}\n              />\n            </span>\n          }\n        />\n      </Tabs>\n    </Layout.Stack>\n  </Card.Section>\n</Card>\n')),(0,s.kt)("h2",{id:"grow"},"Grow"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"grow")," property to prevent the tabs from filling the container evenly. This allows for more customization in the structure of the tabs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Card>\n  <Card.Section backgroundColor="$gray3">\n    <Layout.Stack grow space={45}>\n      <Tabs grow={false} title="Grow False - Row Display">\n        <Tabs.Tab label="Tab 1">Tab 1 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 2">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 3">Tab 3 Content</Tabs.Tab>\n      </Tabs>\n\n      <Tabs title="Grow True - Row Display">\n        <Tabs.Tab label="Tab 1">Tab 1 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 2">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 3">Tab 3 Content</Tabs.Tab>\n      </Tabs>\n    </Layout.Stack>\n  </Card.Section>\n</Card>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Card>\n  <Card.Section backgroundColor="$gray3">\n    <Layout.Stack grow space={45}>\n      <Tabs\n        grow={false}\n        height={300}\n        title="Grow False - Row Display"\n        display="column"\n      >\n        <Tabs.Tab label="Tab 1">Tab 1 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 2">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 3">Tab 3 Content</Tabs.Tab>\n      </Tabs>\n\n      <Tabs height={300} title="Grow True - Row Display" display="column">\n        <Tabs.Tab label="Tab 1">Tab 1 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 2">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 3">Tab 3 Content</Tabs.Tab>\n      </Tabs>\n    </Layout.Stack>\n  </Card.Section>\n</Card>\n')),(0,s.kt)("h2",{id:"position"},"Position"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"position")," property to organize the tabs. The three options are ",(0,s.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"center"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"end"),", and the default is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"'start'"),". Note that this only takes effect when the ",(0,s.kt)("inlineCode",{parentName:"p"},"grow")," property is ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Card>\n  <Card.Section backgroundColor="$gray3">\n    <Layout.Stack grow space={45}>\n      <Tabs grow={false} title="Position (Default)" variant="line">\n        <Tabs.Tab label="Tab 1 Default">Tab 1 Default</Tabs.Tab>\n        <Tabs.Tab label="Tab 2 Default">Tab 2 Default</Tabs.Tab>\n        <Tabs.Tab label="Tab 3 Default">Tab 3 Default</Tabs.Tab>\n      </Tabs>\n\n      <Tabs\n        grow={false}\n        position="center"\n        title="Position (Center)"\n        variant="line"\n      >\n        <Tabs.Tab label="Tab 1 Center">Tab 1 Center</Tabs.Tab>\n        <Tabs.Tab label="Tab 2 Center">Tab 2 Center</Tabs.Tab>\n        <Tabs.Tab label="Tab 3 Center">Tab 3 Center</Tabs.Tab>\n      </Tabs>\n\n      <Tabs grow={false} position="end" title="Position (End)" variant="line">\n        <Tabs.Tab label="Tab 1 End">Tab 1 End</Tabs.Tab>\n        <Tabs.Tab label="Tab 2 End">Tab 2 End</Tabs.Tab>\n        <Tabs.Tab label="Tab 3 End">Tab 3 End</Tabs.Tab>\n      </Tabs>\n    </Layout.Stack>\n  </Card.Section>\n</Card>\n')),(0,s.kt)("h2",{id:"size"},"Size"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"size")," property to specify the left and right padding of the tabs, as well as the minimum height of tabs. The default is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"'$md'"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Card>\n  <Card.Section backgroundColor="$gray3">\n    <Layout.Stack grow space={45}>\n      <Tabs grow={false} size="$sm" title="Size (Small) - Row Display">\n        <Tabs.Tab label="Tab 1 - Small" />\n        <Tabs.Tab label="Tab 2 - Small" />\n        <Tabs.Tab label="Tab 3 - Small" />\n      </Tabs>\n\n      <Tabs grow={false} title="Size (Default) - Row Display">\n        <Tabs.Tab label="Tab 1 - Default" />\n        <Tabs.Tab label="Tab 2 - Default" />\n        <Tabs.Tab label="Tab 3 - Default" />\n      </Tabs>\n\n      <Tabs grow={false} size="$lg" title="Size (Large) - Row Display">\n        <Tabs.Tab label="Tab 1 - Large" />\n        <Tabs.Tab label="Tab 2 - Large" />\n        <Tabs.Tab label="Tab 3 - Large" />\n      </Tabs>\n    </Layout.Stack>\n  </Card.Section>\n</Card>\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Card>\n  <Card.Section backgroundColor="$gray3">\n    <Layout.Stack grow space={45}>\n      <Tabs\n        grow={false}\n        title="Size (Default) - Column Display"\n        variant="arrow"\n        display="column"\n      >\n        <Tabs.Tab label="Tab 1 - Default">Tab 1 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 2 - Default">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 3 - Default">Tab 3 Center</Tabs.Tab>\n      </Tabs>\n\n      <Tabs\n        grow={false}\n        size="$sm"\n        title="Size (Small) - Column Display"\n        variant="arrow"\n        display="column"\n      >\n        <Tabs.Tab label="Tab 1 - Small">Tab 1 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 2 - Small">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 3 - Small">Tab 3 Content</Tabs.Tab>\n      </Tabs>\n\n      <Tabs\n        grow={false}\n        size="$lg"\n        title="Size (Large) - Column Display"\n        variant="arrow"\n        display="column"\n      >\n        <Tabs.Tab label="Tab 1 - Large">Tab 1 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 2 - Large">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 3 - Large">Tab 3 Content</Tabs.Tab>\n      </Tabs>\n    </Layout.Stack>\n  </Card.Section>\n</Card>\n')),(0,s.kt)("h2",{id:"height"},"Height"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"height")," property to specify the height of the container. The default is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),". If height is not specified, the tab container will fit the size of the content. If height is specified, then the content becomes scrollable if the content is larger than the set height."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Card>\n  <Card.Section backgroundColor="$gray3">\n    <Layout.Stack grow space={45}>\n      <Tabs\n        display="column"\n        variant="arrow"\n        height="200px"\n        title="Height (200px)"\n      >\n        <Tabs.Tab label="Tab 1 - 200px Height">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum\n          quis eros vel nibh suscipit rhoncus porta in nulla. Mauris nisl sem,\n          semper sit amet faucibus id, lacinia cursus odio. Sed eu libero at est\n          volutpat pulvinar eget vitae ante. Donec nec urna vehicula, fringilla\n          nulla sit amet, laoreet justo. Phasellus accumsan ligula tempus lorem\n          sagittis blandit. Pellentesque habitant morbi tristique senectus et\n          netus et malesuada fames ac turpis egestas. Sed pellentesque dignissim\n          leo in maximus. Duis ac sapien nec dolor maximus condimentum eu\n          imperdiet urna. Nulla aliquet quam vitae massa eleifend, mattis\n          bibendum lorem viverra. Nam interdum mi ipsum, quis congue felis\n          pretium eu. Sed ligula augue, congue at enim id, ullamcorper gravida\n          felis. Ut ut justo sollicitudin, pellentesque lorem ut, aliquet mi.\n          Quisque vitae sem nulla. Praesent maximus luctus nisi, a efficitur\n          enim pharetra a.\n          <br />\n          Praesent ullamcorper nunc nec urna rutrum, sed finibus odio imperdiet.\n          Vestibulum vel lobortis nunc. Sed facilisis augue mollis molestie\n          faucibus. Vestibulum tincidunt faucibus dolor, vitae efficitur nibh\n          posuere ac. Cras tortor justo, vulputate sed justo a, auctor maximus\n          neque. Cras laoreet sodales mauris nec pulvinar. Phasellus semper\n          elementum eros sit amet hendrerit. Ut ullamcorper porta pretium. In\n          feugiat nisl eros, sit amet mattis lacus tincidunt ut. Cras sit amet\n          tortor purus. Integer ac maximus arcu. Nam arcu nisl, elementum vel\n          iaculis lobortis, mollis eget lorem. Fusce imperdiet dolor ipsum, id\n          lacinia dui molestie id. Cras auctor erat iaculis mauris tincidunt, id\n          dapibus tortor mollis. Nunc sagittis egestas lorem, non vehicula\n          mauris dignissim nec. Vivamus elementum urna lacinia ante interdum,\n          quis lobortis ligula volutpat.\n          <br />\n          Nulla felis elit, faucibus in tempor eu, porttitor ac erat. Quisque a\n          consequat nibh, nec pulvinar augue. Praesent fermentum hendrerit\n          viverra. Aliquam sed lacinia justo. Vivamus vitae pulvinar velit.\n          Phasellus in arcu leo. Lorem ipsum dolor sit amet, consectetur\n          adipiscing elit. Praesent congue leo in mauris tincidunt, eu laoreet\n          nulla ultricies. Mauris erat turpis, aliquam id commodo at, cursus non\n          lorem. Maecenas imperdiet auctor nibh, at luctus mi rutrum at. Donec\n          congue auctor dui, sit amet imperdiet ante rutrum eget. Sed lectus\n          ipsum, feugiat sed tincidunt non, efficitur sagittis turpis. Donec\n          pulvinar, augue at eleifend elementum, magna ante pellentesque diam,\n          nec pretium lacus massa vel lorem. Aliquam erat volutpat. Quisque sem\n          ipsum, ullamcorper in pharetra id, venenatis vel lectus. Fusce eros\n          felis, porttitor eget ligula at, sollicitudin accumsan diam.\n        </Tabs.Tab>\n        <Tabs.Tab label="Tab 2 - 200px Height">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 3 - 200px Height">Tab 3 Content</Tabs.Tab>\n      </Tabs>\n\n      <Tabs\n        display="column"\n        variant="arrow"\n        grow={false}\n        title="Content Height"\n      >\n        <Tabs.Tab label="Tab 1 - Content Height">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum\n          quis eros vel nibh suscipit rhoncus porta in nulla. Mauris nisl sem,\n          semper sit amet faucibus id, lacinia cursus odio. Sed eu libero at est\n          volutpat pulvinar eget vitae ante. Donec nec urna vehicula, fringilla\n          nulla sit amet, laoreet justo. Phasellus accumsan ligula tempus lorem\n          sagittis blandit. Pellentesque habitant morbi tristique senectus et\n          netus et malesuada fames ac turpis egestas. Sed pellentesque dignissim\n          leo in maximus. Duis ac sapien nec dolor maximus condimentum eu\n          imperdiet urna. Nulla aliquet quam vitae massa eleifend, mattis\n          bibendum lorem viverra. Nam interdum mi ipsum, quis congue felis\n          pretium eu. Sed ligula augue, congue at enim id, ullamcorper gravida\n          felis. Ut ut justo sollicitudin, pellentesque lorem ut, aliquet mi.\n          Quisque vitae sem nulla. Praesent maximus luctus nisi, a efficitur\n          enim pharetra a.\n          <br />\n          Praesent ullamcorper nunc nec urna rutrum, sed finibus odio imperdiet.\n          Vestibulum vel lobortis nunc. Sed facilisis augue mollis molestie\n          faucibus. Vestibulum tincidunt faucibus dolor, vitae efficitur nibh\n          posuere ac. Cras tortor justo, vulputate sed justo a, auctor maximus\n          neque. Cras laoreet sodales mauris nec pulvinar. Phasellus semper\n          elementum eros sit amet hendrerit. Ut ullamcorper porta pretium. In\n          feugiat nisl eros, sit amet mattis lacus tincidunt ut. Cras sit amet\n          tortor purus. Integer ac maximus arcu. Nam arcu nisl, elementum vel\n          iaculis lobortis, mollis eget lorem. Fusce imperdiet dolor ipsum, id\n          lacinia dui molestie id. Cras auctor erat iaculis mauris tincidunt, id\n          dapibus tortor mollis. Nunc sagittis egestas lorem, non vehicula\n          mauris dignissim nec. Vivamus elementum urna lacinia ante interdum,\n          quis lobortis ligula volutpat.\n          <br />\n          Nulla felis elit, faucibus in tempor eu, porttitor ac erat. Quisque a\n          consequat nibh, nec pulvinar augue. Praesent fermentum hendrerit\n          viverra. Aliquam sed lacinia justo. Vivamus vitae pulvinar velit.\n          Phasellus in arcu leo. Lorem ipsum dolor sit amet, consectetur\n          adipiscing elit. Praesent congue leo in mauris tincidunt, eu laoreet\n          nulla ultricies. Mauris erat turpis, aliquam id commodo at, cursus non\n          lorem. Maecenas imperdiet auctor nibh, at luctus mi rutrum at. Donec\n          congue auctor dui, sit amet imperdiet ante rutrum eget. Sed lectus\n          ipsum, feugiat sed tincidunt non, efficitur sagittis turpis. Donec\n          pulvinar, augue at eleifend elementum, magna ante pellentesque diam,\n          nec pretium lacus massa vel lorem. Aliquam erat volutpat. Quisque sem\n          ipsum, ullamcorper in pharetra id, venenatis vel lectus. Fusce eros\n          felis, porttitor eget ligula at, sollicitudin accumsan diam.\n        </Tabs.Tab>\n        <Tabs.Tab label="Tab 2 - Content Height">Tab 2 Content</Tabs.Tab>\n        <Tabs.Tab label="Tab 3 - Content Height">Tab 3 Content</Tabs.Tab>\n      </Tabs>\n    </Layout.Stack>\n  </Card.Section>\n</Card>\n')),(0,s.kt)("h2",{id:"custom-headers"},"Custom Headers"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"customRender")," prop to create custom headers with ability to differentiate between Active and Inactive tabs."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Tabs grow title=\"Custom Headers 1\">\n  <Tabs.Tab\n    customRender={(isActive) => {\n      return (\n        <React.Fragment>\n          <Heading offset={5} color={isActive ? '$gray8' : '$interactive1'}>\n            Manage 3rd Party Requests\n          </Heading>\n          <Text size=\"xs\">\n            View and edit 3rd party access to your organization\n          </Text>\n        </React.Fragment>\n      );\n    }}\n  >\n    Tab 1 Content\n  </Tabs.Tab>\n  <Tabs.Tab\n    customRender={(isActive) => {\n      return (\n        <React.Fragment>\n          <Heading offset={5} color={isActive ? '$gray8' : '$interactive1'}>\n            Request 3rd Party Access\n          </Heading>\n          <Text size=\"xs\">\n            Submit Access Requests to 3rd Party Organizations\n          </Text>\n        </React.Fragment>\n      );\n    }}\n  >\n    Tab 2 Content\n  </Tabs.Tab>\n</Tabs>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"render(() => {\n  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;\n  const src = utils.useBaseUrl('img/graphics/carousel/pillsMd.png');\n  const slides = Array.from(Array(2).keys()).map((i) => {\n    return (\n      <Slide height=\"300px\" compact variant=\"white\">\n        <Slide.Container>\n          <Slide.Title>Title {i + 1}</Slide.Title>\n          <Slide.Content>{content}</Slide.Content>\n          <Slide.Button href=\"https://www.google.com\">Primary</Slide.Button>\n        </Slide.Container>\n      </Slide>\n    );\n  });\n  return (\n    <Tabs display=\"column\" size=\"$md\" variant=\"arrow\" title=\"Custom Headers 2\">\n      <Tabs.Tab\n        customRender={(isActive) => {\n          return (\n            <React.Fragment>\n              <Flex justify=\"center\" alignItems=\"center\">\n                <IconBrand\n                  icon=\"chat\"\n                  size={24}\n                  style={{ marginRight: '8px' }}\n                />\n                <Flex direction=\"column\">\n                  <Heading\n                    size=\"20px\"\n                    offset={5}\n                    color={isActive ? '$gray8' : '$interactive1'}\n                  >\n                    Sample Tab 1\n                  </Heading>\n                  <Text\n                    size=\"12px\"\n                    color={isActive ? '$gray8' : '$gray7'}\n                    style={{ textAlign: 'left', fontWeight: 'normal' }}\n                  >\n                    {isActive ? 'ACTIVE' : 'INACTIVE'}\n                  </Text>\n                </Flex>\n              </Flex>\n            </React.Fragment>\n          );\n        }}\n      >\n        <div style={{ display: 'flex', justifyContent: 'end' }}>\n          <Carousel compact slides={slides} variant=\"white\" />\n        </div>\n      </Tabs.Tab>\n      <Tabs.Tab\n        customRender={(isActive) => {\n          return (\n            <React.Fragment>\n              <Flex justify=\"center\" alignItems=\"center\">\n                <IconBrand\n                  icon=\"chat\"\n                  size={24}\n                  style={{ marginRight: '8px' }}\n                />\n                <Flex direction=\"column\">\n                  <Heading\n                    size=\"20px\"\n                    offset={5}\n                    color={isActive ? '$gray8' : '$interactive1'}\n                  >\n                    Sample Tab 2\n                  </Heading>\n                  <Text\n                    size=\"12px\"\n                    color={isActive ? '$gray8' : '$gray7'}\n                    style={{ textAlign: 'left', fontWeight: 'normal' }}\n                  >\n                    {isActive ? 'ACTIVE' : 'INACTIVE'}\n                  </Text>\n                </Flex>\n              </Flex>\n            </React.Fragment>\n          );\n        }}\n      >\n        <div style={{ display: 'flex', justifyContent: 'end' }}>\n          <Carousel compact slides={slides} variant=\"white\" />\n        </div>\n      </Tabs.Tab>\n      <Tabs.Tab\n        customRender={(isActive) => {\n          return (\n            <React.Fragment>\n              <Flex justify=\"center\" alignItems=\"center\">\n                <IconBrand\n                  icon=\"chat\"\n                  size={24}\n                  style={{ marginRight: '8px' }}\n                />\n                <Flex direction=\"column\">\n                  <Heading\n                    size=\"20px\"\n                    offset={5}\n                    color={isActive ? '$gray8' : '$interactive1'}\n                  >\n                    Sample Tab 3\n                  </Heading>\n                  <Text\n                    size=\"12px\"\n                    color={isActive ? '$gray8' : '$gray7'}\n                    style={{ textAlign: 'left', fontWeight: 'normal' }}\n                  >\n                    {isActive ? 'ACTIVE' : 'INACTIVE'}\n                  </Text>\n                </Flex>\n              </Flex>\n            </React.Fragment>\n          );\n        }}\n      >\n        <div style={{ display: 'flex', justifyContent: 'end' }}>\n          <Carousel compact slides={slides} variant=\"white\" />\n        </div>\n      </Tabs.Tab>\n    </Tabs>\n  );\n});\n"))),(0,s.kt)(p,{label:"Integration",mdxType:"Tab"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Tabs}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the tabs component',\n    },\n    {\n      name: 'title',\n      type: 'string',\n      description:\n        'The name for the tab container.  Used to set the aria-label tag for accessibility concerns.',\n    },\n    {\n      name: 'initialTab',\n      type: 'number',\n      description: 'Used to indicate initial tab',\n    },\n    {\n      name: 'active',\n      type: 'number',\n      description: 'Used to control state and set active tab',\n    },\n    {\n      name: 'position',\n      type: \"'start' | 'center' | 'end'\",\n      description: 'Set position of tab',\n    },\n    {\n      name: 'grow',\n      type: 'boolean',\n      description: 'Flag to grow tabs evenly among space provided',\n    },\n    {\n      name: 'onTabChange',\n      type: 'function',\n      description:\n        'Callback fired everytime tab changes; returns index of selected tab',\n    },\n    {\n      name: 'display',\n      type: \"'row' | 'column'\",\n      description: 'Set the orientation of the tabs',\n    },\n    {\n      name: 'variant',\n      type: \"'enclosed' | 'line' | 'arrow'\",\n      description: 'Set variant of tab between enclosed, line, or arrow',\n    },\n    {\n      name: 'groupProps',\n      type: 'shape',\n      description: 'Set group props',\n    },\n    {\n      name: 'tabsListProps',\n      type: 'shape',\n      description: 'Props to be passed to tabs list',\n    },\n    {\n      name: 'space',\n      type: 'array[number]',\n      description: 'Set space of tabs',\n    },\n    {\n      name: 'size',\n      type: 'number | string',\n      description: 'Set size of tabs',\n    },\n    {\n      name: 'height',\n      type: 'number | string',\n      description: 'Set height of container',\n    },\n    {\n      name: 'sizes',\n      type: 'shape',\n      description: 'Default size options of tabs',\n    },\n  ]}\n/>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Tabs.Tab}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the tab',\n    },\n    {\n      name: 'label',\n      type: 'string | node',\n      description: 'The label of the tab',\n    },\n    {\n      name: 'customRender',\n      type: 'function',\n      description:\n        'Custom render for tab content. Callback returns the active state of the tab.',\n    },\n    {\n      name: 'subText',\n      type: 'string | node',\n      description: 'Sub Text of the tab.',\n    },\n  ]}\n/>\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Tabs}\n  rows={[\n    {\n      name: 'tabs-root',\n      description: 'Tabs root element',\n    },\n    {\n      name: 'tabs-list',\n      description: 'List of tabs',\n    },\n    {\n      name: 'tabs-content-container',\n      description: 'Container of content in tab',\n    },\n  ]}\n/>\n"))),(0,s.kt)(p,{label:"Accessibility",mdxType:"Tab"},(0,s.kt)("p",null,"Tabs are a set of layered sections of content, known as tab panels, that display one panel of content at a time. Each tab panel has an associated tab element, that when activated, displays the panel. The list of tab elements is arranged along one edge of the currently displayed panel, most commonly the top edge."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"title")," property is used to populate the ",(0,s.kt)("inlineCode",{parentName:"p"},"aria-label")," attribute for each Tabs component. This unique label will help distinguish one tab component from another if there are multiple tab components on the same page, which is helpful for screen reader users. Provide a name that reflects the purpose of the tabs."),(0,s.kt)("p",null,"Adheres to the ",(0,s.kt)(T,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel",mdxType:"ExitLink"},"Tabs WAI-ARIA design pattern"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  rows={[\n    {\n      name: 'Tab',\n      description:\n        'When focus moves into the tab list, places focus on the active tab element. If tab list has focus, focus moves to the tab panel. If the tab panel has focus, focus moves to the next focusable element, whether it is inside of the tab panel or outside of it.',\n    },\n    {\n      name: 'Left Arrow',\n      description:\n        'When tab list is in focus, moves focus to the previous tab if the tabs are horizontal.',\n    },\n    {\n      name: 'Right Arrow',\n      description:\n        'When tab list is in focus, moves focus to the next tab if the tabs are horizontal.',\n    },\n    {\n      name: 'Up Arrow',\n      description:\n        'When tab list is in focus, moves focus to the previous tab if the tabs are vertical.',\n    },\n    {\n      name: 'Down Arrow',\n      description:\n        'When the tab list is in focus, moves focus to the next tab if the tabs are vertical.',\n    },\n  ]}\n/>\n"))))}m.isMDXComponent=!0},3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>T});var t=a(2784);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=t.createContext({}),b=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=b(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=b(a),T=i,d=p["".concat(o,".").concat(T)]||p[T]||c[T]||s;return a?t.createElement(d,l(l({ref:n},u),{},{components:a})):t.createElement(d,l({ref:n},u))}));function T(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=a.length,l=new Array(s);l[0]=p;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var b=2;b<s;b++)l[b]=a[b];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);
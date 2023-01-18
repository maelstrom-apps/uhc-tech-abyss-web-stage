"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[62],{17454:(e,o,n)=>{n.r(o),n.d(o,{contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(7896),t=n(31461),a=(n(2784),n(3905)),i=["components"],l={id:"colors",title:"Colors",category:"Foundations",pagination_prev:"foundations/uhc/brandmark",pagination_next:"foundations/uhc/typography"},s=void 0,c={unversionedId:"foundations/uhc/colors",id:"foundations/uhc/colors",isDocsHomePage:!1,title:"Colors",description:"Overview",source:"@site/docs/foundations/uhc/colors.md",sourceDirName:"foundations/uhc",slug:"/foundations/uhc/colors",permalink:"/foundations/uhc/colors",tags:[],version:"current",frontMatter:{id:"colors",title:"Colors",category:"Foundations",pagination_prev:"foundations/uhc/brandmark",pagination_next:"foundations/uhc/typography"},sidebar:"docs",previous:{title:"Brandmark",permalink:"/foundations/uhc/brandmark"},next:{title:"Typography",permalink:"/foundations/uhc/typography"}},d=[{value:"Overview",id:"overview",children:[],level:2},{value:"Primary Palette",id:"primary-palette",children:[],level:2},{value:"Secondary",id:"secondary",children:[],level:2},{value:"Accent",id:"accent",children:[],level:2},{value:"Interactive",id:"interactive",children:[{value:"Tint",id:"tint",children:[],level:3}],level:2},{value:"Supporting",id:"supporting",children:[{value:"Status",id:"status",children:[],level:3},{value:"Neutrals",id:"neutrals",children:[],level:3}],level:2},{value:"Accessibility",id:"accessibility",children:[],level:2}],u={toc:d};function p(e){var o=e.components,n=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Color differentiates our brands and helps create consistent experiences across our digital products. We use color to help our users know exactly what they need to focus on."),(0,a.kt)("p",null,"We are committed to complying with the Web Content Accessibility Guidelines AA standard contrast ratios. To do this, choose primary, secondary, and extended colors that support usability by ensuring sufficient color contrast between elements."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"primary-palette"},"Primary Palette"),(0,a.kt)("p",null,"Our bold primary palette includes blues, neutrals and white and is used in logical ways throughout our products, marketing and sales to guide the eye and highlight important features. Utilizing our softer secondary colors, we bring warmth to the user experience to impart optimism and confidence."),(0,a.kt)("p",null,"We use blue ($primary1) for primary actions, buttons, text links, for indicating progress and representing authentication. Neutral ($gray8) is used primarily for body text and headings, and white ($primary2) is used for page backgrounds. These colors are used in combination wherever a color theme may be desired. The Abyss theme can be adjusted on a case by case basis to allow for custom color components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Grid columns={1}>\n  <Grid.Col span={1}>\n    <Docs.ColorTile color="$primary1" name="Blue">\n      Used as the main color of our components. Primarily used as the color that\n      fills, outlines, or as the most prominent color.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$primary2" name="White">\n      Used as the secondary color of our components. Primarily used for\n      backgrounds or to contrast with $primary1.\n    </Docs.ColorTile>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"secondary"},"Secondary"),(0,a.kt)("p",null,"Secondary colors are mostly used when a designer uses one or more of the brand's illustrated assets within a digital solution."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Grid columns={1}>\n  <Grid.Col span={1}>\n    <Docs.ColorTile color="$secondary1" name="Bright Blue">\n      Use as accents to bring warmth and lightness to our imagery and graphic\n      treatments.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$secondary2" name="Gold">\n      Use as accents to bring warmth and lightness to our imagery and graphic\n      treatments.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$secondary3" name="Orange">\n      Use as accents to bring warmth and lightness to our imagery and graphic\n      treatments.\n    </Docs.ColorTile>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"accent"},"Accent"),(0,a.kt)("p",null,"The accent color is used to keep things fresh and interesting. We lean on this color more frequently when brand awareness is high, or on our own properties where we control the surrounding environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Grid columns={1}>\n  <Grid.Col span={1}>\n    <Docs.ColorTile color="$accent1" name="Accent Blue">\n      Use in small details in brand elements.\n    </Docs.ColorTile>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"interactive"},"Interactive"),(0,a.kt)("p",null,"Our interactive palette contains a variety of colors make every moment feel on-brand and every interaction informative. Each color is selected intentionally to provide meaningful feedback within our products."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Grid columns={1}>\n  <Grid.Col span={1}>\n    <Docs.ColorTile color="$interactive1" name="Interactive Active">\n      Use for elements the user can interact with such as links or icons.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$interactive2" name="Interactive Hover">\n      Use when implementing hover for an $interactive1 element.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$interactive3" name="Interactive Light">\n      Use when implementing hover for a secondary button.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$interactive4" name="High Impact">\n      Use for elements that have a high impact or that is highly stressed.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$interactive5" name="High Impact Hover">\n      Use when implementing hover for an $interactive4 element.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$interactive6" name="High Impact Light">\n      Use when implementing hover for a secondary high impact button.\n    </Docs.ColorTile>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tint"},"Tint"),(0,a.kt)("p",null,"Tints are reserved for containing boxes to highlight information. Tints are used for background fills, visual sectioning, and callouts. They appear behind scrollable content to add visual sectioning and accents."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Grid columns={1}>\n  <Grid.Col span={1}>\n    <Docs.ColorTile color="$tint1" name="Bright Blue 5%">\n      (Extra Light Blue)\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$tint2" name="Bright Blue 10%">\n      Use as a background color for delineation in layouts.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$tint3" name="Bright Blue 20%">\n      Use in most cases where a tint is needed.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$tint4" name="Bright Blue 40%">\n      Use for delineation in charts where Bright Blue 20% is already in use.\n    </Docs.ColorTile>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"supporting"},"Supporting"),(0,a.kt)("p",null,"Supporting colors are primarily used for infographics and data visualizations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Grid columns={1}>\n  <Grid.Col span={1}>\n    <Docs.ColorTile color="$supporting1" name="Violet">\n      Use in digital spaces, for infographic and data visualizations.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$supporting2" name="Iris">\n      Use in digital spaces, for infographic and data visualizations.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$supporting3" name="Lagoon">\n      Use in digital spaces, for infographic and data visualizations.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$supporting4" name="Rainwater">\n      Use in digital spaces, for infographic and data visualizations.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$supporting5" name="Strawberry">\n      Use in digital spaces, for infographic and data visualizations.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$supporting6" name="Apple">\n      Use in digital spaces, for infographic and data visualizations.\n    </Docs.ColorTile>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("h3",{id:"status"},"Status"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Grid columns={1}>\n  <Grid.Col span={1}>\n    <Docs.ColorTile color="$success1" name="Success">\n      Use to indicate success to the user such as upon completion of a form.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$success2" name="Success Light">\n      Use for a hover or unfocused version of success.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$error1" name="Error">\n      Use to indicate an error to the user such as when a form submission fails.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$error2" name="Error Light">\n      Use for a hover or unfocused version of error.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$warning1" name="Warning">\n      Use to indicate a warning to the user such as when a form submission goes\n      through but may be inaccurate.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$warning2" name="Warning Light">\n      Use for a hover or unfocused version of warning.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$info1" name="Info">\n      Use to indicate information to the user such as after a form is submitted\n      and important information needs to be conveyed.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$info2" name="Info Light">\n      Use for a hover or unfocused version of info.\n    </Docs.ColorTile>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("h3",{id:"neutrals"},"Neutrals"),(0,a.kt)("p",null,'Neutrals have varying degrees of saturation that allow for the appropriate level of warmth across marketing and product. Typically they are used for text and subtle backgrounds when we don\'t want to draw too much attention to a particular touchpoint or convey information such as "disabled". Gray tints are limited to print when black is the only color option.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},'<Grid columns={1}>\n  <Grid.Col span={1}>\n    <Docs.ColorTile color="$white" name="White">\n      Use White as a background or to contrast with darker colors. Implement\n      white where it will never be necessary for the color theme to change.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$gray1" name="Gray 1">\n      Use as a background color for delineation in Layouts.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$gray2" name="Gray 2">\n      Use as a background color for delineation in Layouts.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$gray3" name="Gray 3">\n      Use as a background color for delineation in Layouts.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$gray4" name="Gray 4">\n      Use for additional delineation in Layouts.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$gray5" name="Gray 5">\n      Use for disabled text only.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$gray6" name="Gray 6">\n      Use for paragraph text.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$gray7" name="Gray 7">\n      Use for labels and borders. When used on white background it may be used\n      for legal copy.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$gray8" name="Gray 8">\n      Use for headings h4-h6, body text and dark accents such as outlines, and\n      actions.\n    </Docs.ColorTile>\n    <Docs.ColorTile color="$black" name="Black">\n      Use for headings, body text and dark accents such as outlines, and\n      actions.\n    </Docs.ColorTile>\n  </Grid.Col>\n</Grid>\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("p",null,"Color choices that are accessible ensure everyone can not only see every element on a page, but also understand a specific, intended meaning. You want everyone to be able to see the difference between two colors right next to or on top of each other."),(0,a.kt)("p",null,"Contrast refers to the perceived difference between foreground and background colors. People with low vision or color blindness, and those who have difficulty seeing the differences between colors all can have trouble seeing where one element ends and another begins. As we age, the shape of our eyes changes and that affects both how we perceive color and how well we can distinguish variations in color. If the contrast between different elements is too low, people may not be able to see them at all."),(0,a.kt)("p",null,"Contrast is expressed as a ratio with the first number representing the foreground color and the second representing the background color. For example, 3:1 means the foreground item color is three times more intense or visible than the background value. Contrast rules apply to text as well as any content that conveys meaning, including icons, graphics and form elements. Tools such as Colour Contrast Analyser or WebAIM's online color contrast tool are useful for verifying contrast ratios."),(0,a.kt)("p",null,"Color and contrast choices within a digital experience are accessible when people can:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"See UI elements and content"),(0,a.kt)("li",{parentName:"ul"},"Understand and interpret information"),(0,a.kt)("li",{parentName:"ul"},"Take action")),(0,a.kt)("p",null,"Our aim is to provide a contrast ratio that can be perceived by all users. For this reason, UnitedHealthcare has embraced a minimum contrast ratio of 4.5:1 (foreground vs background) for UI elements and content that convey meaning."),(0,a.kt)("b",null,"Recommendations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Include color combinations, good contrast and poor contrast, in design documentation"),(0,a.kt)("li",{parentName:"ul"},"Communicate meaning with more than just color, such as with color and descriptive text"),(0,a.kt)("li",{parentName:"ul"},"Give focus indicators a unique presentation that meets contrast requirements on all backgrounds")),(0,a.kt)("b",null,"Test for a minimum contrast ratio 4.5 to 1 for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Non-bolded text smaller than 24 pixels (18 points)"),(0,a.kt)("li",{parentName:"ul"},"Bold text smaller than 18 pixels (14 points)"),(0,a.kt)("li",{parentName:"ul"},"Essential icons that are close to body text size")),(0,a.kt)("b",null,"Test that non-text elements that communicate information meet a minimum contrast ratio of 3 to 1 for all states:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Icons"),(0,a.kt)("li",{parentName:"ul"},"Data visualizations"),(0,a.kt)("li",{parentName:"ul"},"Focus indicators"),(0,a.kt)("li",{parentName:"ul"},"Controls, including their borders or boundaries"),(0,a.kt)("li",{parentName:"ul"},"Non-bolded text at or above 24 pixels (18 points)"),(0,a.kt)("li",{parentName:"ul"},"Bold text at or above 18 pixels (14 points) in size")),(0,a.kt)("p",null,"Don't worry about contrast for logos and disabled elements. Watch out for using color alone to communicate meaning. People who are color blind or blind cannot perceive the meaning by color alone."))}p.isMDXComponent=!0},3905:(e,o,n)=>{n.d(o,{Zo:()=>d,kt:()=>m});var r=n(2784);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,r,t=function(e,o){if(null==e)return{};var n,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=r.createContext({}),c=function(e){var o=r.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},d=function(e){var o=c(e.components);return r.createElement(s.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},p=r.forwardRef((function(e,o){var n=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=t,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(h,i(i({ref:o},d),{},{components:n})):r.createElement(h,i({ref:o},d))}));function m(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);
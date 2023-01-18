"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[960],{30446:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(7896),r=t(31461),s=(t(2784),t(3905)),u=["components"],i={id:"use-countdown",category:"Utilities",title:"useCountdown",description:"The useCountdown is a custom hook for countdown capility.",pagination_prev:"web/hooks/use-media-query",pagination_next:null},a=void 0,l={unversionedId:"web/hooks/use-countdown",id:"web/hooks/use-countdown",isDocsHomePage:!1,title:"useCountdown",description:"The useCountdown is a custom hook for countdown capility.",source:"@site/docs/web/hooks/useCountdown.md",sourceDirName:"web/hooks",slug:"/web/hooks/use-countdown",permalink:"/web/hooks/use-countdown",tags:[],version:"current",frontMatter:{id:"use-countdown",category:"Utilities",title:"useCountdown",description:"The useCountdown is a custom hook for countdown capility.",pagination_prev:"web/hooks/use-media-query",pagination_next:null},sidebar:"docs",previous:{title:"useMediaQuery",permalink:"/web/hooks/use-media-query"}},c=[{value:"Callback Function",id:"callback-function",children:[],level:2},{value:"Reset Countdown Time",id:"reset-countdown-time",children:[],level:2},{value:"Set Countdown Time",id:"set-countdown-time",children:[],level:2},{value:"Output",id:"output",children:[],level:2}],m={toc:c};function p(e){var n=e.components,t=(0,r.Z)(e,u);return(0,s.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useCountdown } from '@abyss/web/hooks/useCountdown';\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const { formattedTime } = useCountdown({ time: 10 * 60 * 1000 });\n\n  return <Text size="$xl">{formattedTime}</Text>;\n};\n')),(0,s.kt)("h2",{id:"callback-function"},"Callback Function"),(0,s.kt)("p",null,"You can specify a callback function that will be executed every time the countdown reaches zero."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [isComplete, setComplete] = useState(false);\n  const onCompleted = () => setComplete(true);\n\n  const { formattedTime } = useCountdown({ time: 15 * 1000, onCompleted });\n\n  if (isComplete) {\n    return (\n      <Text size="$xl" color="$error1">\n        Time\'s Up!\n      </Text>\n    );\n  }\n\n  return <Text size="$xl">{formattedTime}</Text>;\n};\n')),(0,s.kt)("h2",{id:"reset-countdown-time"},"Reset Countdown Time"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"resetCountdown")," function returned by the hook to reset the countdown back to its starting value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [isComplete, setComplete] = useState(false);\n  const onCompleted = () => setComplete(true);\n\n  const { formattedTime, resetCountdown } = useCountdown({\n    time: 5 * 1000,\n    onCompleted,\n  });\n\n  if (isComplete) {\n    return (\n      <Layout.Stack>\n        <Text size="$xl" color="$error1">\n          Time\'s Up!\n        </Text>\n        <Button\n          size="sm"\n          onClick={() => {\n            resetCountdown();\n            setComplete(false);\n          }}\n        >\n          Reset Countdown\n        </Button>\n      </Layout.Stack>\n    );\n  }\n\n  return (\n    <Layout.Stack>\n      <Text size="$xl">{formattedTime}</Text>\n      <Button\n        size="sm"\n        onClick={() => {\n          resetCountdown();\n          setComplete(false);\n        }}\n      >\n        Reset Countdown\n      </Button>\n    </Layout.Stack>\n  );\n};\n')),(0,s.kt)("h2",{id:"set-countdown-time"},"Set Countdown Time"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"setCountdownTme")," function returned by the hook to set the countdown to a new time."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [isComplete, setComplete] = useState(true);\n  const onCompleted = () => setComplete(true);\n\n  const { formattedTime, setCountdownTime } = useCountdown({\n    time: 0,\n    onCompleted,\n  });\n\n  if (isComplete) {\n    return (\n      <React.Fragment>\n        <Text size="$xl" color="$error1">\n          Time\'s Up!\n        </Text>\n        <Layout.Group>\n          <Button\n            size="sm"\n            onClick={() => {\n              setCountdownTime(3 * 1000);\n              setComplete(false);\n            }}\n          >\n            Set countdown to 3 seconds\n          </Button>\n          <Button\n            size="sm"\n            onClick={() => {\n              setCountdownTime(5 * 1000);\n              setComplete(false);\n            }}\n          >\n            Set countdown to 5 seconds\n          </Button>\n          <Button\n            size="sm"\n            onClick={() => {\n              setCountdownTime(8 * 1000);\n              setComplete(false);\n            }}\n          >\n            Set countdown to 8 seconds\n          </Button>\n        </Layout.Group>\n      </React.Fragment>\n    );\n  }\n\n  return <Text size="$xl">{formattedTime}</Text>;\n};\n')),(0,s.kt)("h2",{id:"output"},"Output"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const countdown = useCountdown({ time: 31556952000 });\n\n  return <pre>{JSON.stringify(countdown, null, 2)}</pre>;\n};\n")))}p.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var o=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),l=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},c=function(e){var n=l(e.components);return o.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(t),d=r,w=p["".concat(a,".").concat(d)]||p[d]||m[d]||s;return t?o.createElement(w,u(u({ref:n},c),{},{components:t})):o.createElement(w,u({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,u=new Array(s);u[0]=p;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,u[1]=i;for(var l=2;l<s;l++)u[l]=t[l];return o.createElement.apply(null,u)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);
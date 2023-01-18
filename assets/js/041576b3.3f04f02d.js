"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[7077],{4075:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=t(7896),a=t(31461),l=(t(2784),t(3905)),o=["components"],i={id:"slider",category:"Forms",title:"Slider",description:"Used to traverse through different values in a given range.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=510%3A11970",pagination_prev:"web/ui/select-input-multi",pagination_next:"web/ui/text-input"},s=void 0,d={unversionedId:"web/ui/slider",id:"web/ui/slider",isDocsHomePage:!1,title:"Slider",description:"Used to traverse through different values in a given range.",source:"@site/docs/web/ui/Slider.md",sourceDirName:"web/ui",slug:"/web/ui/slider",permalink:"/web/ui/slider",tags:[],version:"current",frontMatter:{id:"slider",category:"Forms",title:"Slider",description:"Used to traverse through different values in a given range.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=510%3A11970",pagination_prev:"web/ui/select-input-multi",pagination_next:"web/ui/text-input"},sidebar:"docs",previous:{title:"SelectInputMulti",permalink:"/web/ui/select-input-multi"},next:{title:"TextInput",permalink:"/web/ui/text-input"}},u=[{value:"useForm (Recommended)",id:"useform-recommended",children:[],level:2},{value:"useState",id:"usestate",children:[],level:2},{value:"Range Slider",id:"range-slider",children:[],level:2},{value:"Label",id:"label",children:[],level:2},{value:"Min &amp; Max Values",id:"min--max-values",children:[],level:2},{value:"Step Value",id:"step-value",children:[],level:2},{value:"Marks",id:"marks",children:[],level:2},{value:"Custom Mark Label",id:"custom-mark-label",children:[],level:2},{value:"Validation",id:"validation",children:[],level:2},{value:"Disabled",id:"disabled",children:[],level:2},{value:"Popover Always On",id:"popover-always-on",children:[],level:2},{value:"Hide Popover",id:"hide-popover",children:[],level:2},{value:"Custom Popover Label",id:"custom-popover-label",children:[],level:2},{value:"Custom Text Values",id:"custom-text-values",children:[],level:2},{value:"Error Message",id:"error-message",children:[],level:2},{value:"Subtext",id:"subtext",children:[],level:2},{value:"Descriptors Display",id:"descriptors-display",children:[],level:2}],p=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",n)}},m=p("Tab"),c=p("ExitLink"),v={toc:u};function b(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)(m,{label:"Overview",mdxType:"Tab"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Slider } from '@abyss/web/ui/Slider';\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'Slider',\n  inputs: [\n    {\n      prop: 'label',\n      type: 'string',\n    },\n    {\n      prop: 'errorMessage',\n      type: 'string',\n    },\n    {\n      prop: 'minValue',\n      type: 'number',\n    },\n    {\n      prop: 'maxValue',\n      type: 'number',\n    },\n    {\n      prop: 'step',\n      type: 'number',\n    },\n    {\n      prop: 'hideLabel',\n      type: 'boolean',\n    },\n    {\n      prop: 'popoverAlwaysOn',\n      type: 'boolean',\n    },\n    {\n      prop: 'disablePopover',\n      type: 'boolean',\n    },\n    {\n      prop: 'isDisabled',\n      type: 'boolean',\n    },\n    {\n      prop: 'showMarks',\n      type: 'boolean',\n    },\n  ],\n}\n\n() => {\n  const [value, setValue] = React.useState(0);\n\n  return (\n    <Slider\n      step={10}\n      label=\"Sandbox Slider\"\n      value={value}\n      onChange={(e) => setValue(e)}\n    />\n  );\n};\n")),(0,l.kt)("h2",{id:"useform-recommended"},"useForm (Recommended)"),(0,l.kt)("p",null,"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"useForm")," hook lets the DOM handle form data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      slider: 25,\n    },\n  });\n\n  const handleSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={handleSubmit}>\n      <Slider label="Form Slider" model="slider" />\n      <Button type="submit">Submit</Button>\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"usestate"},"useState"),(0,l.kt)("p",null,"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"useState")," hook gets values from the component state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [value, setValue] = React.useState(25);\n\n  return (\n    <>\n      <Slider\n        label="State Slider"\n        value={value}\n        onChange={(e) => setValue(e)}\n      />\n      <Button onClick={() => console.log(value)}>Submit</Button>\n    </>\n  );\n};\n')),(0,l.kt)("h2",{id:"range-slider"},"Range Slider"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [value, setValue] = useState([-20, 20]);\n  const form = useForm({\n    defaultValues: {\n      slider: [-30, 30],\n    },\n  });\n\n  const handleSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <React.Fragment>\n      <FormProvider state={form} onSubmit={handleSubmit}>\n        <Slider\n          label="Range Slider Form"\n          model="slider"\n          step={10}\n          minValue={-50}\n          maxValue={50}\n          showMarks\n          isRange\n        />\n        <Button type="submit">Submit</Button>\n      </FormProvider>\n      <Slider\n        label="Range Slider State"\n        value={value}\n        onChange={(e) => setValue(e)}\n        step={10}\n        minValue={-50}\n        maxValue={50}\n        showMarks\n        isRange\n      />\n      <Button onClick={() => handleSubmit(value)}>Submit</Button>\n    </React.Fragment>\n  );\n};\n')),(0,l.kt)("h2",{id:"label"},"Label"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"label")," property to display a label above the slider. To hide the label set ",(0,l.kt)("inlineCode",{parentName:"p"},"hideLabel")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <Slider label="Visible Label" model="slider-label" />\n      <Slider\n        label="Hidden Label"\n        model="slider-hideLabel"\n        subText="Hidden Label"\n        hideLabel\n      />\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"min--max-values"},"Min & Max Values"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"minValue")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"maxValue")," properties to set the minimum and maximum values the slider can equal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      slider: 25,\n    },\n  });\n\n  return (\n    <FormProvider state={form}>\n      <Slider\n        label="Min/Max Values"\n        model="slider"\n        minValue={-50}\n        maxValue={50}\n        step={25}\n        showMarks\n      />\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"step-value"},"Step Value"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"step")," property to set the number by which value will be incremented/decremented with thumb drag and arrows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      slider: 20,\n    },\n  });\n\n  return (\n    <FormProvider state={form}>\n      <Slider label="Step Value" model="slider" step={20} showMarks />\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"marks"},"Marks"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"showMarks")," property to display marks which will be placed on the track based on the ",(0,l.kt)("inlineCode",{parentName:"p"},"step")," value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      slider: 20,\n    },\n  });\n\n  return (\n    <FormProvider state={form}>\n      <Slider label="Slider Marks" model="slider" step={10} showMarks />\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"custom-mark-label"},"Custom Mark Label"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"customMarkLabel")," property to override the default mark label."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      slider: 20,\n    },\n  });\n\n  return (\n    <FormProvider state={form}>\n      <Slider\n        label="Custom Mark Label"\n        model="slider"\n        step={10}\n        showMarks\n        customMarkLabel={(e) => `${e}%`}\n      />\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"validation"},"Validation"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"validators")," prop to set rules for the slider value to be valid."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      slider: 15,\n    },\n  });\n\n  const handleSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={handleSubmit}>\n      <Slider\n        label="Validation"\n        model="slider"\n        validators={{\n          validate: (value) => value >= 20 || \'Must be larger than 20\',\n        }}\n      />\n      <Button type="submit">Submit</Button>\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"disabled"},"Disabled"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"isDisabled")," property to disable the slider."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      slider: 25,\n    },\n  });\n\n  return (\n    <FormProvider state={form}>\n      <Slider label="Disabled Slider" model="slider" isDisabled />\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"popover-always-on"},"Popover Always On"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"popoverAlwaysOn")," property to keep the popover always displayed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      slider: 25,\n    },\n  });\n\n  return (\n    <FormProvider state={form}>\n      <Slider label="Always On Popover" model="slider" popoverAlwaysOn />\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"hide-popover"},"Hide Popover"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"disablePopover")," property to hide the popover."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      slider: 25,\n    },\n  });\n\n  return (\n    <FormProvider state={form}>\n      <Slider label="Disable Popover" model="slider" disablePopover />\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"custom-popover-label"},"Custom Popover Label"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"customPopoverLabel")," property to override the default value displayed in the popover."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      dollar: 0,\n      percent: 25,\n      temp: 75,\n    },\n  });\n\n  return (\n    <FormProvider state={form}>\n      <Slider\n        label="Dollar Label"\n        model="dollar"\n        popoverAlwaysOn\n        customPopoverLabel={(value) => {\n          return `$${value}`;\n        }}\n      />\n      <Slider\n        label="Label Percent"\n        model="percent"\n        popoverAlwaysOn\n        customPopoverLabel={(value, percent) => {\n          return `${Math.round(percent * 100)}%`;\n        }}\n      />\n      <Slider\n        label="Temperature Label"\n        model="temp"\n        popoverAlwaysOn\n        customPopoverLabel={(value) => {\n          return `${value}\xb0F`;\n        }}\n      />\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"custom-text-values"},"Custom Text Values"),(0,l.kt)("p",null,"Utilize an array such as ",(0,l.kt)("inlineCode",{parentName:"p"},"Marks")," below to change the slider text displayed from numbers to entire text values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const MARKS = [\n    { value: 0, label: 'xs' },\n    { value: 1, label: 'sm' },\n    { value: 2, label: 'md' },\n    { value: 3, label: 'lg' },\n    { value: 4, label: 'xl' },\n  ];\n\n  const form = useForm({\n    defaultValues: {\n      slider: 0,\n    },\n  });\n\n  return (\n    <FormProvider state={form}>\n      <Slider\n        label=\"Custom Text Values\"\n        model=\"slider\"\n        customMarkLabel={(val) =>\n          MARKS.find((mark) => mark.value === val).label\n        }\n        customPopoverLabel={(val) =>\n          MARKS.find((mark) => mark.value === val).label\n        }\n        maxValue={4}\n        showMarks\n      />\n    </FormProvider>\n  );\n};\n")),(0,l.kt)("h2",{id:"error-message"},"Error Message"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"errorMessage")," prop to display a custom error message below the slider."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [value, setValue] = useState(20);\n\n  return (\n    <React.Fragment>\n      <Slider\n        label="Error Message"\n        value={value}\n        onChange={(e) => setValue(e)}\n        errorMessage="Custom Error Message"\n      />\n    </React.Fragment>\n  );\n};\n')),(0,l.kt)("h2",{id:"subtext"},"Subtext"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"subText")," prop to display helpful text below the slider."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <Slider label="Sub Text" model="slider" subText="Custom SubText" />\n    </FormProvider>\n  );\n};\n')),(0,l.kt)("h2",{id:"descriptors-display"},"Descriptors Display"),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"descriptorsDisplay")," prop to set the orientation of the error message and subtext descriptor content. Available variants include 'column' and 'row'. The default is set to 'row'."),(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"form-provider#descriptors-display"},"FormProvider")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"descriptorsDisplay")," to set the descriptors orientation across an entire form."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [value, setValue] = useState(20);\n\n  return (\n    <React.Fragment>\n      <Slider\n        value={value}\n        onChange={(e) => setValue(e)}\n        label="Descriptors Display"\n        subText="Subtext Message"\n        errorMessage="Error Message"\n        descriptorsDisplay="column"\n      />\n    </React.Fragment>\n  );\n};\n'))),(0,l.kt)(m,{label:"Integration",mdxType:"Tab"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={Slider}\n  rows={[\n    {\n      name: 'children',\n      type: 'ReactNode',\n      description: 'The contents of the slider component',\n    },\n    {\n      name: 'customPopoverLabel',\n      type: 'function',\n      description: 'Set custom popover label',\n    },\n    {\n      name: 'customMarkLabel',\n      type: 'function',\n      description: 'Set custom mark label',\n    },\n    {\n      name: 'onChange',\n      type: 'function',\n      description: 'Callback fired every time the value changes',\n    },\n    {\n      name: 'onFocus',\n      type: 'function',\n      description: 'Callback fired everytime the component is focused',\n    },\n    {\n      name: 'onBlur',\n      type: 'function',\n      description: 'Callback fired everytime the component is unfocused',\n    },\n    {\n      name: 'isRange',\n      type: 'boolean',\n      description: 'Flag to set if slider is a range',\n    },\n    {\n      name: 'hideLabel',\n      type: 'boolean',\n      description: 'Flag to hide label',\n    },\n    {\n      name: 'minValue',\n      type: 'number',\n      description: 'Set min value',\n    },\n    {\n      name: 'maxValue',\n      type: 'number',\n      description: 'Set max value',\n    },\n    {\n      name: 'step',\n      type: 'number',\n      description: 'Set number of steps',\n    },\n    {\n      name: 'label',\n      type: 'string',\n      description: 'Set label',\n    },\n    {\n      name: 'model',\n      type: 'string',\n      description: 'Unique identifier used for FormProvider',\n    },\n    {\n      name: 'errorMessage',\n      type: 'string',\n      description: 'Set error message',\n    },\n    {\n      name: 'subText',\n      type: 'string',\n      description: 'Text displayed below the slider',\n    },\n    {\n      name: 'descriptorsDisplay',\n      type: '\"row\" | \"column\"',\n      description:\n        'Set the orientation of descriptor content located below the slider',\n    },\n    {\n      name: 'popoverAlwaysOn',\n      type: 'boolean',\n      description: 'Flag to set popover always on',\n    },\n    {\n      name: 'disablePopover',\n      type: 'boolean',\n      description: 'Flag to disable popover',\n    },\n    {\n      name: 'isDisabled',\n      type: 'boolean',\n      description: 'Flag to disable slider',\n    },\n    {\n      name: 'validation',\n      type: 'shape',\n      description: 'Set rules for slider validation',\n    },\n    {\n      name: 'showMarks',\n      type: 'boolean',\n      description: 'Flag to show slider marks',\n    },\n  ]}\n/>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={Slider}\n  rows={[\n    {\n      name: 'slider-root',\n      description: 'Slider root element',\n    },\n    {\n      name: 'slider-label',\n      description: 'Label',\n    },\n    {\n      name: 'slider-thumb',\n      description: 'Slider thumb',\n    },\n    {\n      name: 'slider-thumb-popover',\n      description: 'Slider thumb popover',\n    },\n    {\n      name: 'slider-track-wrapper',\n      description: 'Track wrapper',\n    },\n    {\n      name: 'slider-track',\n      description: 'Track',\n    },\n    {\n      name: 'slider-track-filler',\n      description: 'Track filler',\n    },\n    {\n      name: 'slider-track-marks',\n      description: 'Marks on track',\n    },\n    {\n      name: 'slider-track-mark-text',\n      description: 'Text at each mark',\n    },\n    {\n      name: 'slider-descriptor',\n      description: 'Descriptor for FormInput',\n    },\n  ]}\n/>\n"))),(0,l.kt)(m,{label:"Accessibility",mdxType:"Tab"},(0,l.kt)("h1",{id:"slider"},"Slider"),(0,l.kt)("p",null,"A slider is an input where the user selects a value from within a given range. Sliders typically have a slider thumb that can be moved along a bar or track to change the value of the slider."),(0,l.kt)("p",null,"Adheres to the ",(0,l.kt)(c,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#slider",mdxType:"ExitLink"},"Slider WAI-ARIA design pattern"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [value, setValue] = React.useState(25);\n\n  return (\n    <>\n      <Slider\n        label="State Slider"\n        value={value}\n        onChange={(e) => setValue(e)}\n      />\n      <Button onClick={() => console.log(value)}>Submit</Button>\n    </>\n  );\n};\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  rows={[\n    {\n      name: 'Right Arrow:',\n      description: 'Increase the value of the slider by one step.',\n    },\n    {\n      name: 'Up Arrow:',\n      description: 'Increase the value of the slider by one step.',\n    },\n    {\n      name: 'Down Arrow:',\n      description: 'Decrease the value of the slider by one step.',\n    },\n    {\n      name: 'Left Arrow:',\n      description: 'Decrease the value of the slider by one step.',\n    },\n    {\n      name: 'Home:',\n      description: 'Set the slider to the first allowed value in its range.',\n    },\n    {\n      name: 'End:',\n      description: 'Set the slider to the last allowed value in its range.',\n    },\n  ]}\n/>\n")),(0,l.kt)("h1",{id:"slider-multi-thumb"},"Slider (Multi-Thumb)"),(0,l.kt)("p",null,"A multi-thumb slider is a slider with two or more thumbs that each set a value in a group of related values. For example, in a product search, a two-thumb slider could be used to enable users to set the minimum and maximum price limits for the search. In many two-thumb sliders, the thumbs are not allowed to pass one another, such as when the slider sets the minimum and maximum values for a range. For example, in a price range selector, the maximum value of the thumb that sets the lower end of the range is limited by the current value of the thumb that sets the upper end of the range. Conversely, the minimum value of the upper end thumb is limited by the current value of the lower end thumb. However, in some multi-thumb sliders, each thumb sets a value that does not depend on the other thumb values."),(0,l.kt)("p",null,"Adheres to the ",(0,l.kt)(c,{href:"https://www.w3.org/TR/wai-aria-practices-1.2/#slidertwothumb",mdxType:"ExitLink"},"Slider WAI-ARIA design pattern"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [value, setValue] = useState([-20, 20]);\n  const form = useForm({\n    defaultValues: {\n      slider: [-30, 30],\n    },\n  });\n\n  const handleSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <React.Fragment>\n      <FormProvider state={form} onSubmit={handleSubmit}>\n        <Slider\n          label="Range Slider Form"\n          model="slider"\n          step={10}\n          minValue={-50}\n          maxValue={50}\n          showMarks\n          isRange\n        />\n        <Button type="submit">Submit</Button>\n      </FormProvider>\n      <Slider\n        label="Range Slider State"\n        value={value}\n        onChange={(e) => setValue(e)}\n        step={10}\n        minValue={-50}\n        maxValue={50}\n        showMarks\n        isRange\n      />\n      <Button onClick={() => handleSubmit(value)}>Submit</Button>\n    </React.Fragment>\n  );\n};\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  rows={[\n    {\n      name: 'Right Arrow',\n      description: 'Increase the value of the slider by one step.',\n    },\n    {\n      name: 'Up Arrow',\n      description: 'Increase the value of the slider by one step.',\n    },\n    {\n      name: 'Left Arrow',\n      description: 'Decrease the value of the slider by one step.',\n    },\n    {\n      name: 'Home',\n      description: 'Set the slider to the first allowed value in its range.',\n    },\n    {\n      name: 'End',\n      description: 'Set the slider to the last allowed value in its range.',\n    },\n  ]}\n/>\n"))))}b.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var r=t(2784);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(t),c=a,v=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return t?r.createElement(v,o(o({ref:n},u),{},{components:t})):r.createElement(v,o({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
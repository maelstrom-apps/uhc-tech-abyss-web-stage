"use strict";(self.webpackChunkabyss_docs=self.webpackChunkabyss_docs||[]).push([[5235],{76363:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var a=t(7896),r=t(31461),i=(t(2784),t(3905)),o=["components"],d={id:"date-input-range",category:"Forms",title:"DateInputRange",description:"Capture date input from user.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=23818%3A98579&t=2OvT77S1GipkwVQf-1",pagination_prev:"web/ui/date-input",pagination_next:"web/ui/radio-group"},l=void 0,s={unversionedId:"web/ui/date-input-range",id:"web/ui/date-input-range",isDocsHomePage:!1,title:"DateInputRange",description:"Capture date input from user.",source:"@site/docs/web/ui/DateInputRange.md",sourceDirName:"web/ui",slug:"/web/ui/date-input-range",permalink:"/web/ui/date-input-range",tags:[],version:"current",frontMatter:{id:"date-input-range",category:"Forms",title:"DateInputRange",description:"Capture date input from user.",design:"https://www.figma.com/file/tk08Md4NBBVUPNHQYthmqp/Abyss-Design-System?node-id=23818%3A98579&t=2OvT77S1GipkwVQf-1",pagination_prev:"web/ui/date-input",pagination_next:"web/ui/radio-group"},sidebar:"docs",previous:{title:"DateInput",permalink:"/web/ui/date-input"},next:{title:"RadioGroup",permalink:"/web/ui/radio-group"}},p=[{value:"useForm (Recommended)",id:"useform-recommended",children:[],level:2},{value:"useState",id:"usestate",children:[],level:2},{value:"Min/Max Date",id:"minmax-date",children:[],level:2},{value:"Excluded Dates",id:"excluded-dates",children:[],level:2},{value:"Starting/Ending Year",id:"startingending-year",children:[],level:2},{value:"Add Elements Inside Input",id:"add-elements-inside-input",children:[],level:2},{value:"Placeholder",id:"placeholder",children:[],level:2},{value:"Subtext",id:"subtext",children:[],level:2},{value:"Error Message",id:"error-message",children:[],level:2},{value:"Descriptors Display",id:"descriptors-display",children:[],level:2},{value:"Label",id:"label",children:[{value:"Hide Label",id:"hide-label",children:[],level:3}],level:2},{value:"Disabled",id:"disabled",children:[],level:2},{value:"Validation",id:"validation",children:[],level:2},{value:"Highlighted",id:"highlighted",children:[],level:2},{value:"Width",id:"width",children:[],level:2},{value:"Enable Outside Scroll",id:"enable-outside-scroll",children:[],level:2}],u=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}},c=u("Tab"),m=u("ExitLink"),h={toc:p};function g(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(c,{label:"Overview",mdxType:"Tab"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { DateInputRange } from '@abyss/web/ui/DateInputRange';\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"sandbox",sandbox:!0},"{\n  component: 'DateInputRange',\n  inputs: [\n    {\n      prop: 'startDateLabel',\n      type: 'string',\n    },\n    {\n      prop: 'endDateLabel',\n      type: 'string',\n    },\n    {\n      prop: 'width',\n      type: 'string',\n    },\n    {\n      prop: 'isDisabled',\n      type: 'boolean',\n    },\n    {\n      prop: 'highlighted',\n      type: 'boolean',\n      defaultValue: false,\n    },\n  ]\n}\n\n() => {\n  const [values, setValues] = useState({ from: '07/11/2022', to: '07/15/2022' });\n\n  return (\n    <DateInputRange\n      label=\"DateInputRange Sandbox\"\n      values={values}\n      onChange={setValues}\n    />\n  );\n};\n")),(0,i.kt)("h2",{id:"useform-recommended"},"useForm (Recommended)"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," hook for handling TextInput lets the DOM handle form data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const form = useForm({\n    defaultValues: {\n      'test-form-date': { from: '06/04/2022', to: '06/30/2022' },\n    },\n  });\n\n  const onSubmit = (data) => {\n    console.log('data', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit}>\n      <DateInputRange model=\"test-form-date\" validators={{ required: true }} />\n      <Button type=\"submit\" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n")),(0,i.kt)("h2",{id:"usestate"},"useState"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"useState")," hook gets values from the component state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [values, setValues] = useState({\n    from: '01/01/2022',\n    to: '06/20/2022',\n  });\n\n  console.log('useState values', values);\n\n  return <DateInputRange values={values} onChange={setValues} />;\n};\n")),(0,i.kt)("h2",{id:"minmax-date"},"Min/Max Date"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"minimumDate")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"maximumDate")," props to set the min and max dates in the Calendar dropdown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit}>\n      <DateInputRange\n        model="test-date"\n        minimumDate={new Date(2021, 1, 5)}\n        maximumDate={new Date(2021, 2, 5)}\n      />\n      <Button type="submit" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("h2",{id:"excluded-dates"},"Excluded Dates"),(0,i.kt)("p",null,"To exclude dates use the ",(0,i.kt)("inlineCode",{parentName:"p"},"excludeDates")," prop. Set a function that receives date as an argument and returns true if date should be disabled. For example, to disable weekends, check if date day is 0 or 6:."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit}>\n      <DateInputRange\n        model="test-date"\n        excludeDate={(date) => {\n          return date.getDay() === 0 || date.getDay() === 6;\n        }}\n      />\n      <Button type="submit" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("h2",{id:"startingending-year"},"Starting/Ending Year"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"startingYear")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"endingYear")," props to set the min and max years in the Calendar dropdown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit}>\n      <DateInputRange model="test-date" startingYear={2011} endingYear={2021} />\n      <Button type="submit" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("h2",{id:"add-elements-inside-input"},"Add Elements Inside Input"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"inputLeftElement")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"inputRightElement")," props to add elements to the inside of the start and end date input fields. Within each prop pass in a ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," and/or ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," property with the desired element node. The recommended usage is for inserting icons."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"#validation"},"Validation")," section below for an example on how to incorporate with validation and display error/success states with icons."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <DateInputRange\n        model="date-input-range-elements"\n        width="50%"\n        validators={{ required: true }}\n        inputLeftElement={{\n          start: <IconMaterial icon="assignment" size="18px" color="$gray6" />,\n          end: <IconMaterial icon="assignment" size="18px" color="$gray6" />,\n        }}\n        inputRightElement={{\n          start: <IconMaterial icon="check" size="18px" color="$success1" />,\n          end: <IconMaterial icon="check" size="18px" color="$success1" />,\n        }}\n      />\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("h2",{id:"placeholder"},"Placeholder"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"startDatePlaceholder")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"endDatePlaceholder")," prop to give users a short description in the input field before they enter a value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit}>\n      <DateInputRange\n        model="test-date"\n        startDatePlaceholder="Start Date"\n        endDatePlaceholder="End Date"\n      />\n      <Button type="submit" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("h2",{id:"subtext"},"Subtext"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"subtext")," prop to display helpful text below the date range input fields. By default it displays ",(0,i.kt)("inlineCode",{parentName:"p"},"Date Format: mm/dd/yyyy"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit}>\n      <DateInputRange model="subtext" subtext="Custom Subtext" />\n      <Button type="submit" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("h2",{id:"error-message"},"Error Message"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"errorMessage")," prop to display a custom error message below the date range input fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [values, setValues] = useState(null);\n\n  return (\n    <DateInputRange\n      values={values}\n      onChange={setValues}\n      errorMessage="Custom Error Message"\n    />\n  );\n};\n')),(0,i.kt)("h2",{id:"descriptors-display"},"Descriptors Display"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"descriptorsDisplay")," prop to set the orientation of the error message and subtext descriptor content. Available variants include 'column' and 'row'. The default is set to 'row'."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"form-provider#descriptors-display"},"FormProvider")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"descriptorsDisplay")," to set the descriptors orientation across an entire form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [values, setValues] = useState(null);\n\n  return (\n    <DateInputRange\n      values={values}\n      onChange={setValues}\n      label="Descriptors Display"\n      subText="Subtext Message"\n      errorMessage="Error Message"\n      descriptorsDisplay="column"\n    />\n  );\n};\n')),(0,i.kt)("h2",{id:"label"},"Label"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"startDateLabel")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"endDateLabel")," props to display a label above the input. To hide the input label set ",(0,i.kt)("inlineCode",{parentName:"p"},"hideLabel")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <DateInputRange\n        model="test-date"\n        startDateLabel="Custom Start Date Label"\n        endDateLabel="Custom End Date Label"\n      />\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("h3",{id:"hide-label"},"Hide Label"),(0,i.kt)("p",null,"To hide the input label set ",(0,i.kt)("inlineCode",{parentName:"p"},"hideLabel")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <DateInputRange\n        model="test-date-2"\n        hideLabel\n        startDatePlaceholder="Hidden Label"\n        endDatePlaceholder="Hidden Label"\n      />\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("h2",{id:"disabled"},"Disabled"),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"isDisabled")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to disable the input fields so users cannot enter a value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit}>\n      <DateInputRange model="test-date" isDisabled={true} />\n      <Button type="submit" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("h2",{id:"validation"},"Validation"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"validators")," prop to set rules for the field to be valid."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const form = useForm({\n    defaultValues: {\n      validate: { from: '07/07/2022', to: '07/01/2022' },\n    },\n  });\n\n  const { errors, isSubmitted, isSubmitSuccessful } = form.formState;\n\n  const getIconProps = useCallback(\n    (model) => {\n      if (!isSubmitted) return null;\n\n      let iconProps = {};\n\n      if (!!errors[model]) {\n        iconProps = { icon: 'error', color: '$error1', size: '18px' };\n      }\n      if (isSubmitSuccessful) {\n        iconProps = { icon: 'check', color: '$success1', size: '18px' };\n      }\n\n      const node = <IconMaterial {...iconProps} />;\n\n      return { inputRightElement: { start: node, end: node } };\n    },\n    [isSubmitted, isSubmitSuccessful]\n  );\n\n  return (\n    <FormProvider state={form}>\n      <DateInputRange\n        label=\"Required Default Message\"\n        model=\"required\"\n        width=\"50%\"\n        {...getIconProps('required')}\n        validators={{ required: true }}\n      />\n      <DateInputRange\n        label=\"Required Custom Message\"\n        model=\"custom-required\"\n        width=\"50%\"\n        validators={{ required: 'Custom Error Message' }}\n      />\n      <DateInputRange\n        label=\"Custom Validators\"\n        model=\"validate\"\n        width=\"50%\"\n        validators={{\n          required: true,\n          validate: {\n            isAfter: (v) => {\n              return (\n                dayjs(v.to, 'DD/MM/YYYY').isAfter(\n                  dayjs(v.from, 'DD/MM/YYYY')\n                ) || 'End date should be after start date'\n              );\n            },\n          },\n        }}\n      />\n      <Button type=\"submit\" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n")),(0,i.kt)("h2",{id:"highlighted"},"Highlighted"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"highlighted")," prop to enable the background color for the input. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"FormProvider")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"highlighted")," to enable the color to appear if validation is required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const [values, setValues] = useState(null);\n\n  return (\n    <DateInputRange\n      label="Highlighted"\n      values={values}\n      onChange={setValues}\n      highlighted\n    />\n  );\n};\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  const onSubmit = (data) => {\n    console.log(\'data\', data);\n  };\n\n  return (\n    <FormProvider state={form} onSubmit={onSubmit} highlighted>\n      <DateInputRange\n        label="FormProvider Highlighted"\n        model="highlighted"\n        validators={{ required: true }}\n      />\n      <Button type="submit" style={{ marginTop: 15 }}>\n        Submit\n      </Button>\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("h2",{id:"width"},"Width"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"width")," prop to set the width of both input fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm();\n\n  return (\n    <FormProvider state={form}>\n      <DateInputRange\n        model="width1"\n        startDateLabel="Width Default"\n        startDatePlaceholder="Default Width"\n        endDateLabel="Width Default"\n        endDatePlaceholder="Default Width"\n      />\n      <DateInputRange\n        width="75%"\n        model="width2"\n        startDateLabel="Width 75%"\n        startDatePlaceholder="Width Set To 75%"\n        endDateLabel="Width 75%"\n        endDatePlaceholder="Width Set To 75%"\n      />\n      <DateInputRange\n        width="100%"\n        model="width3"\n        startDateLabel="Width 100%"\n        startDatePlaceholder="Width Set To 100%"\n        endDateLabel="Width 100%"\n        endDatePlaceholder="Width Set To 100%"\n      />\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("h2",{id:"enable-outside-scroll"},"Enable Outside Scroll"),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"enableOutsideScroll")," prop to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to enable scroll outside of the date input range component while the calendar is open. Default is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"() => {\n  const [values, setValues] = useState({\n    from: '07/11/2022',\n    to: '07/15/2022',\n  });\n\n  return (\n    <DateInputRange\n      label=\"DateInputRange\"\n      values={values}\n      onChange={setValues}\n      enableOutsideScroll\n    />\n  );\n};\n"))),(0,i.kt)(c,{label:"Integration",mdxType:"Tab"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.PropsTable\n  of={DateInputRange}\n  rows={[\n    {\n      name: 'startDateLabel',\n      type: 'string',\n      description: 'Label for starting date input range field',\n    },\n    {\n      name: 'endDateLabel',\n      type: 'string',\n      description: 'Label for the ending date input range field',\n    },\n    {\n      name: 'startingYear',\n      type: 'number',\n      description:\n        'The minimum selectable year when user opens the date dialog',\n    },\n    {\n      name: 'endingYear',\n      type: 'number',\n      description: 'Callback function to determine if a day should be disabled',\n    },\n    {\n      name: 'excludeDate',\n      type: 'number',\n      description:\n        'The maximum selectable year when user opens the date dialog',\n    },\n    {\n      name: 'minimumDate',\n      type: 'string | date',\n      description: 'Specifies the minimum selectable day by a user',\n    },\n    {\n      name: 'maximumDate',\n      type: 'string | date',\n      description: 'Specifies the maximum selectable day by a user',\n    },\n    {\n      name: 'startDatePlaceholder',\n      type: 'string',\n      description:\n        'Short description displayed on the starting input before the user enters a value',\n    },\n    {\n      name: 'endDatePlaceholder',\n      type: 'string',\n      description:\n        'Short description displayed on the ending input before the user enters a value',\n    },\n    {\n      name: 'isDisabled',\n      type: 'boolean',\n      description:\n        'Flag to enable/disable the input. If true, the input will be disabled',\n    },\n    {\n      name: 'values',\n      type: 'object',\n      description:\n        'Values of the date input range { to: string, from: string }',\n    },\n    {\n      name: 'onChange',\n      type: 'function',\n      description: 'Callback fired every time the value changes',\n    },\n    {\n      name: 'onFocus',\n      type: 'function',\n      description: 'Callback fired every time the component is focused',\n    },\n    {\n      name: 'onBlur',\n      type: 'function',\n      description: 'Callback fired every time the component is unfocused',\n    },\n    {\n      name: 'onKeyDown',\n      type: 'function',\n      description:\n        'Callback fired every time a key is pressed while focused in the component',\n    },\n    {\n      name: 'onPaste',\n      type: 'function',\n      description:\n        'Callback fired every time something is pasted into the component',\n    },\n    {\n      name: 'model',\n      type: 'string',\n      description: 'Unique identifier used for FormProvider',\n    },\n    {\n      name: 'width',\n      type: 'string',\n      description: 'Width of the input fields',\n    },\n    {\n      name: 'subtext',\n      type: 'string',\n      description: 'Set the text displayed below the date input range fields',\n    },\n    {\n      name: 'descriptorsDisplay',\n      type: '\"row\" | \"column\"',\n      description:\n        'Set the orientation of descriptor content located below the date input range fields',\n    },\n    {\n      name: 'hideLabel',\n      type: 'boolean',\n      description: 'Flag to show or hide labels',\n    },\n    {\n      name: 'validators',\n      type: 'object',\n      description: 'Set rules for the date input range fields to be valid',\n    },\n    {\n      name: 'errorMessage',\n      type: 'string',\n      description:\n        'Set the error message to be displayed below the date input range fields',\n    },\n    {\n      name: 'enableOutsideScroll',\n      type: 'boolean',\n      description: 'Flag to enable scrolling when the calendar is open',\n    },\n    {\n      name: 'inputLeftElement',\n      type: 'object',\n      description:\n        'Add element to left of inside start and end date inputs { start: ReactNode, end: ReactNode }',\n    },\n    {\n      name: 'inputRightElement',\n      type: 'object',\n      description:\n        'Add element to right of inside start and end date inputs { start: ReactNode, end: ReactNode }',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.ClassesTable\n  of={DateInputRange}\n  rows={[\n    {\n      name: 'date-picker-range-root',\n      description: 'DateInputRange root element',\n    },\n    {\n      name: 'date-picker-input-container',\n      description: 'Date Picker Input Container',\n    },\n    {\n      name: 'start-date-input-container',\n      description: 'Start date input container',\n    },\n    {\n      name: 'end-date-input-container',\n      description: 'End date input container',\n    },\n    {\n      name: 'date-input-range-popper',\n      description: 'Date input range popper',\n    },\n    {\n      name: 'date-input-range-calendar-wrapper',\n      description: 'Date input range calendar wrapper',\n    },\n    {\n      name: 'date-input-range-inputs-wrapper',\n      description: 'Date input range inputs wrapper',\n    },\n    {\n      name: 'date-picker-input-root',\n      description: 'Text input root',\n    },\n    {\n      name: 'date-picker-input-label',\n      description: 'Text input label',\n    },\n    {\n      name: 'date-picker-input-wrapper',\n      description: 'Text input and icon wrapper',\n    },\n    {\n      name: 'date-picker-input-left-element-wrapper',\n      description: 'Text input wrapper for left element',\n    },\n    {\n      name: 'date-picker-input-left-element',\n      description: 'Text input content for left element',\n    },\n    {\n      name: 'date-picker-input-right-element-wrapper',\n      description: 'Text input wrapper for right element',\n    },\n    {\n      name: 'date-picker-input-right-element',\n      description: 'Text input content for right element',\n    },\n    { name: 'date-picker-input-button', description: 'Calendar open button' },\n    {\n      name: 'date-picker-input-icon',\n      description: 'Calendar open button icon',\n    },\n    {\n      name: 'date-picker-input-descriptors',\n      description: 'Text input descriptors',\n    },\n    {\n      name: 'date-picker-input',\n      description: 'Text input',\n    },\n    {\n      name: 'calendar-header-root',\n      description: 'Calendar header root',\n    },\n    {\n      name: 'calendar-header-month-year-container',\n      description: 'Calendar header month/year container',\n    },\n    {\n      name: 'calendar-header-previous-button',\n      description: 'Calendar header previous year button',\n    },\n    {\n      name: 'calendar-header-previous-month-button',\n      description: 'Calendar header previous month button',\n    },\n    {\n      name: 'calendar-header-next-month-button',\n      description: 'Calendar header next month button',\n    },\n    {\n      name: 'calendar-header-next-year-button',\n      description: 'Calendar header next year button',\n    },\n    {\n      name: 'calendar-day-grid-root',\n      description: 'Calendar day grid',\n    },\n    {\n      name: 'calendar-day-grid-header',\n      description: 'Calendar day grid table header',\n    },\n    {\n      name: 'calendar-day-grid-header-row',\n      description: 'Calendar day grid table header row',\n    },\n    {\n      name: 'calendar-day-grid-header-cell',\n      description: 'Calendar day grid table header cell',\n    },\n    {\n      name: 'calendar-day-grid-body',\n      description: 'Calendar day grid table body',\n    },\n    {\n      name: 'calendar-day-grid-body-row',\n      description: 'Calendar day grid table body row',\n    },\n    {\n      name: 'calendar-day-grid-body-cell',\n      description: 'Calendar day grid table body cell',\n    },\n    {\n      name: 'calendar-day-grid-day-button',\n      description: 'Calendar day grid day button',\n    },\n    {\n      name: 'calendar-day-grid-day-button-dot',\n      description: 'Calendar day grid day button dot',\n    },\n    {\n      name: 'calendar-action-buttons-root',\n      description: 'Calendar action button root',\n    },\n    {\n      name: 'calendar-action-button-confirm',\n      description: 'Calendar confirm action button',\n    },\n  ]}\n/>\n"))),(0,i.kt)(c,{label:"Accessibility",mdxType:"Tab"},(0,i.kt)("p",null,"The example below includes date input range field that open a date picker that implements the dialog design pattern. The dialog contains a calendar that uses the grid pattern to present buttons that enable the user to choose a day from the calendar. Choosing a date from the calendar closes the dialog and populates the date input field. When the dialog is opened, if the input field is empty, or does not contain a valid date, then the current date is focused in the calendar. Otherwise, the focus is placed on the day in the calendar that matches the value of the date input field."),(0,i.kt)("p",null,"Adheres to the ",(0,i.kt)(m,{href:"https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/datepicker-dialog.html",mdxType:"ExitLink"},"Date Picker Dialog WAI-ARIA design pattern"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'() => {\n  const form = useForm({\n    defaultValues: {\n      \'test-date\': \'01/01/2022\',\n    },\n  });\n\n  return (\n    <FormProvider state={form}>\n      <DateInputRange\n        model="test-date"\n        startDateLabel="Accessibility Practice"\n        endDateLabel="Accessibility Practice"\n        startDateSubtext="Utilize the Keyboard Interaction table below to test the components accessibility."\n        endDateSubtext="Utilize the Keyboard Interaction table below to test the components accessibility."\n        validators={{ required: true }}\n      />\n    </FormProvider>\n  );\n};\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<div style={{ marginTop: '25px' }}>\n  <Docs.AccessibilityTable\n    title=\"Choose Date Button\"\n    rows={[\n      {\n        name: 'Space',\n        description:\n          'Open the date picker dialog. Move focus to selected date.',\n      },\n      {\n        name: 'Enter',\n        description:\n          'Open the date picker dialog. Move focus to selected date.',\n      },\n    ]}\n  />\n</div>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  title=\"Date Picker Dialog\"\n  rows={[\n    {\n      name: 'Esc',\n      description:\n        'Closes the dialog and returns focus to the Choose Starting Date or Choose Ending Date button',\n    },\n    {\n      name: 'Tab',\n      description: 'Moves focus to next element in the dialog Tab sequence',\n    },\n    {\n      name: 'Shift + Tab',\n      description: 'Moves focus to previous element in the dialog Tab sequence',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  title=\"Date Picker Dialog: Month/Year Buttons\"\n  rows={[\n    {\n      name: 'Space',\n      description:\n        'Change the month and/or year displayed in the calendar grid',\n    },\n    {\n      name: 'Enter',\n      description:\n        'Change the month and/or year displayed in the calendar grid',\n    },\n  ]}\n/>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"render",render:!0},"<Docs.AccessibilityTable\n  title=\"Date Picker Dialog: Date Grid\"\n  rows={[\n    {\n      name: 'Space',\n      description:\n        'Select the date, close the dialog, and move focus to the Choose Starting Date or Choose Ending Date button',\n    },\n    {\n      name: 'Enter',\n      description:\n        'Select the date, close the dialog, and move focus to the Choose Starting Date or Choose Ending Date button',\n    },\n    {\n      name: 'Up Arrow',\n      description: 'Moves focus to the same day of the previous week',\n    },\n    {\n      name: 'Down Arrow',\n      description: 'Moves focus to the same day of the next week',\n    },\n    {\n      name: 'Right Arrow',\n      description: 'Moves focus to the next day',\n    },\n    {\n      name: 'Left Arrow',\n      description: 'Moves focus to the previous day',\n    },\n    {\n      name: 'Page Up',\n      description: 'Changes the grid of dates to the previous month',\n    },\n    {\n      name: 'Page Down',\n      description: 'Changes the grid of dates to the next month',\n    },\n    {\n      name: 'Shift + Page Down',\n      description: 'Changes the grid of dates to the previous Year',\n    },\n    {\n      name: 'Shift + Page Up',\n      description: 'Changes the grid of dates to the next Year',\n    },\n  ]}\n/>\n"))))}g.isMDXComponent=!0},3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(t),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);
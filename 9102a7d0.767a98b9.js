(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{147:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return f}));var t=r(2),a=r(6),i=(r(0),r(185)),d=r(186),o={id:"fixed-header",title:"Fixed Header",keywords:["javascript","table","javascript table","gridjs","grid js","fixed header"]},s={id:"examples/fixed-header",isDocsHomePage:!1,title:"Fixed Header",description:"Simply add height and fixedHeader to your Grid.js config object to enable fixed header feature:",source:"@site/docs/examples/fixed-header.md",permalink:"/docs/examples/fixed-header",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/fixed-header.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1594479559,sidebar:"sidebar",previous:{title:"Wide Table",permalink:"/docs/examples/wide-table"},next:{title:"JSON",permalink:"/docs/examples/import-json"}},p=[],c={rightToc:p};function f(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Simply add ",Object(i.b)("inlineCode",{parentName:"p"},"height")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fixedHeader")," to your Grid.js config object to enable fixed header feature:"),Object(i.b)(d.a,{children:"\nconst grid = new Grid({\n  columns: [\n      'Name',\n      'Email',\n      'Title',\n   ],\n  sort: true,\n  pagination: true,\n  fixedHeader: true,\n  height: '400px',\n  data: Array(50).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n    faker.name.title(),\n  ])\n});\n",mdxType:"LiveExample"}),Object(i.b)("br",null))}f.isMDXComponent=!0},186:function(e,n,r){"use strict";r.d(n,"a",(function(){return s}));var t=r(188),a=r(187),i=r(0),d=r.n(i),o=r(189);class s extends i.Component{render(){return d.a.createElement(a.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:t.d,html:t.h,h:t.g,gCreateRef:t.f,gComponent:t.c,PluginPosition:t.e,BaseComponent:t.a,BaseProps:t.BaseProps,CodeBlock:a.a,useEffect:i.useEffect,useRef:i.useRef,faker:o,...this.props.scope}})}}}}]);
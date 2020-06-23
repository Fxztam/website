(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),c=n(0),i=n(172),o=n(174),s=n(173),d=n(186),l={id:"virtual-dom",title:"Virtual DOM",keywords:["javascript","table","javascript table","gridjs","grid js","preact","virtual DOM","vdom"]},p={id:"examples/virtual-dom",isDocsHomePage:!1,title:"Virtual DOM",description:"Grid.js uses Preact to render the elements and that means that you can take advantage of Preact's Virtual DOM and render",source:"@site/docs/examples/virtual-dom.md",permalink:"/docs/examples/virtual-dom",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/virtual-dom.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592742780,sidebar:"sidebar",previous:{title:"Populating cells with HTML",permalink:"/docs/examples/html-cells"},next:{title:"React Component in cells",permalink:"/docs/examples/react-cells"}},m=[],b={rightToc:m};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Grid.js uses Preact to render the elements and that means that you can take advantage of Preact's Virtual DOM and render\ncomplex cells."),Object(i.b)("p",null,"Simply, import ",Object(i.b)("inlineCode",{parentName:"p"},"h")," from the ",Object(i.b)("inlineCode",{parentName:"p"},"gridjs")," package:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { h } from "gridjs";\n')),Object(i.b)("p",null,"Then, create a custom Preact component:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function bold(text) {\n  return h('b', {}, text);\n}\n")),Object(i.b)("p",null,"Finally, connect the component to Grid.js:"),Object(i.b)(s.a,{children:"\nfunction bold(text) {\n  return h('b', {}, text);\n}\nconst grid = new Grid({\n  columns: [\n      'Name',\n      'Email'\n   ],\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    bold(faker.internet.email())\n  ])\n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:o.b,CodeBlock:s.a,useEffect:c.useEffect,useRef:c.useRef,faker:d,h:o.d},mdxType:"CodeBlock"}),Object(i.b)("br",null),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Explore ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://preactjs.com/guide/v10/components"}),"Preact's documentation")," for more details."))))}u.isMDXComponent=!0}}]);
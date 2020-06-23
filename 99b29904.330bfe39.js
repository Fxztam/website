(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return j}));var a=t(2),r=t(6),o=t(0),c=t(172),i=t(174),s=t(173),l=t(46),d=t.n(l),m=t(186),p={id:"react-cells",title:"React Component in cells",keywords:["javascript","table","javascript table","gridjs","grid js","react","react component"]},b={id:"examples/react-cells",isDocsHomePage:!1,title:"React Component in cells",description:"Grid.js uses Preact to render the elements and that means that you can take advantage of Preact's Virtual DOM and render",source:"@site/docs/examples/react-cells.md",permalink:"/docs/examples/react-cells",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/react-cells.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592742780,sidebar:"sidebar",previous:{title:"Virtual DOM",permalink:"/docs/examples/virtual-dom"},next:{title:"Multi column sort",permalink:"/docs/examples/multi-sort"}},u=[],f={rightToc:u};function j(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},f,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Grid.js uses Preact to render the elements and that means that you can take advantage of Preact's Virtual DOM and render\ncomplex cells. In this example, we want to render React components in our cells."),Object(c.b)("p",null,"First of all, let's import ",Object(c.b)("inlineCode",{parentName:"p"},"Component")," and ",Object(c.b)("inlineCode",{parentName:"p"},"createRef")," from Grid.js:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { \n  Grid,\n  h,\n  createRef as gCreateRef,\n  Component as gComponent \n} from "gridjs";\n')),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},Object(c.b)("inlineCode",{parentName:"p"},"gComponent")," and ",Object(c.b)("inlineCode",{parentName:"p"},"gCreateRef")," are both coming from Grid.js package.\nI have renamed them in this example to avoid naming conflicts with React. "))),Object(c.b)("p",null,"Next, we can create a component named ",Object(c.b)("inlineCode",{parentName:"p"},"ReactComponent"),", that takes one input (our React component) mounts it to our table:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"class ReactComponent extends gComponent {\n  ref = gCreateRef(null);\n  \n  componentDidMount() {\n    ReactDOM.render(this.props.element, this.ref.current);\n  }\n  \n  render() {\n    return h('div', { ref: this.ref });\n  }\n}\n")),Object(c.b)("p",null,"Here is the finalized example:"),Object(c.b)(s.a,{children:"\nclass ReactComponent extends gComponent {\n  ref = gCreateRef(null);\n  \n  componentDidMount() {\n    ReactDOM.render(this.props.element, this.ref.current)\n  }\n  \n  render() {\n    return h('div', { ref: this.ref });\n  }\n}\nconst grid = new Grid({\n  columns: [\n    'Name',\n    'Email',\n    'Actions'\n  ],\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n    h(ReactComponent, { element: <b>Boom!!</b> })\n  ])\n});\n",transformCode:function(e){return"\nfunction () {\n  "+e+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:i.b,CodeBlock:s.a,useEffect:o.useEffect,useRef:o.useRef,faker:m,h:i.d,gComponent:i.a,gCreateRef:i.c,ReactDOM:d.a},mdxType:"CodeBlock"}))}j.isMDXComponent=!0}}]);
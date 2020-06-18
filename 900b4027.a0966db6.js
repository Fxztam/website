(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),i=n(6),r=(n(0),n(166)),c={id:"hello-world",title:"Hello World"},o={id:"hello-world",isDocsHomePage:!1,title:"Hello World",description:"Now that we have installed the library, let's write a simple example.",source:"@site/docs/hello-world.md",permalink:"/docs/hello-world",editUrl:"https://github.com/grid-js/website/edit/master/docs/hello-world.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1592339556,sidebar:"sidebar",previous:{title:"Install",permalink:"/docs/install"},next:{title:"Configuration",permalink:"/docs/config"}},s=[{value:"Browser",id:"browser",children:[]},{value:"Node.js module",id:"nodejs-module",children:[{value:"React",id:"react",children:[]}]}],d={rightToc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Now that we have installed the library, let's write a simple example."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We are currently working on developing wrappers for React, Angular and Vue"))),Object(r.b)("h2",{id:"browser"},"Browser"),Object(r.b)("p",null,"You ",Object(r.b)("strong",{parentName:"p"},"don't need any build tools")," to use Grid.js. Simply include the JavaScript and CSS files in your project and then\ncall the ",Object(r.b)("inlineCode",{parentName:"p"},"Grid")," class to create a new instance:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html",metastring:'title="index.html"',title:'"index.html"'}),'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <link\n      href="https://unpkg.com/gridjs/dist/theme/mermaid.min.css"\n      rel="stylesheet"\n    />\n  </head>\n  <body>\n    <div id="wrapper"></div>\n\n    <script src="https://unpkg.com/gridjs/dist/gridjs.development.js"><\/script>\n    <script src="src/index.js"><\/script>\n  </body>\n</html>\n\n')),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Grid.js is available as ",Object(r.b)("inlineCode",{parentName:"p"},"gridjs")," in the global scope (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"window.gridjs"),")"))),Object(r.b)("p",null,"And then instantiate ",Object(r.b)("inlineCode",{parentName:"p"},"gridjs.Grid")," class in your ",Object(r.b)("inlineCode",{parentName:"p"},"index.js")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="src/index.js"',title:'"src/index.js"'}),'new gridjs.Grid({\n  columns: ["Name", "Email", "Phone Number"],\n  data: [\n    ["John", "john@example.com", "(353) 01 222 3333"],\n    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],\n    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],\n    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],\n    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"]\n  ]\n}).render(document.getElementById("wrapper"));\n')),Object(r.b)("a",{target:"_blank",rel:"noreferrer",href:"https://codesandbox.io/s/gridjs-hello-world-o65fb?fontsize=14&hidenavigation=1&theme=dark"},Object(r.b)("img",{alt:"Edit gridjs-hello-world",src:"https://codesandbox.io/static/img/play-codesandbox.svg"})),Object(r.b)("h2",{id:"nodejs-module"},"Node.js module"),Object(r.b)("p",null,"You can import ",Object(r.b)("inlineCode",{parentName:"p"},"gridjs")," in your application using:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import { Grid } from "gridjs";\nimport "gridjs/dist/theme/mermaid.css";\n')),Object(r.b)("h3",{id:"react"},"React"),Object(r.b)("p",null,"Here is an example of using Grid.js in a React app (without the ",Object(r.b)("inlineCode",{parentName:"p"},"gridjs-react")," wrapper)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { Grid } from \"gridjs\";\nimport \"gridjs/dist/theme/mermaid.css\";\n\nfunction helloWorld () {\n  const wrapperRef = useRef(null);\n\n  const grid = new Grid({\n    columns: ['Name', 'Email', 'Phone Number'],\n    data: [\n      ['John', 'john@example.com', '(353) 01 222 3333'],\n      ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n    ]\n  });\n  \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return <div ref={wrapperRef} />;\n}\n")),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Above example is just to demonstrate how to import and initiate Grid.js.\nPlease use the ",Object(r.b)("inlineCode",{parentName:"p"},"gridjs-react")," component instead. See ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/integrations/react"}),"React integration"),"."))))}l.isMDXComponent=!0}}]);
(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[105],{1334:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var a=n(3),i=n(38),c=n(25),s=n(1210),r=n(417),o=n(207),j=n(1303),l=n(35),d=n(0),u=["links","action","heading","moreLink","sx"];function x(t){var e=t.links,n=t.action,x=t.heading,b=t.moreLink,O=void 0===b?[]:b,h=t.sx,m=Object(i.a)(t,u);return Object(d.jsxs)(s.a,{sx:h,mb:5,spacing:2,children:[Object(d.jsxs)(s.a,{direction:"row",alignItems:"center",children:[Object(d.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:x}),Object(d.jsx)(l.b,Object(a.a)({links:e},m))]}),n&&Object(d.jsx)(r.a,{sx:{flexShrink:0},children:n})]}),Object(c.isString)(O)?Object(d.jsx)(j.a,{href:O,target:"_blank",variant:"body2",children:O}):O.map((function(t){return Object(d.jsx)(j.a,{noWrap:!0,href:t,variant:"body2",target:"_blank",sx:{display:"flex"},children:t},t)}))]})}},1340:function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"a",(function(){return l}));var a=n(3),i=n(207),c=n(1327),s=n(1351),r=n(417),o=n(0);function j(t){var e=t.title;return Object(o.jsx)(i.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:e})}function l(t){var e=t.title,n=t.sx,i=t.children;return Object(o.jsxs)(c.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[e&&Object(o.jsx)(s.a,{title:e}),Object(o.jsx)(r.a,{sx:Object(a.a)({p:3,minHeight:180},n),children:i})]})}},2769:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var a=n(17),i=n(1),c=n(8),s=n(417),r=n(1314),o=n(1300),j=n(1940),l=n(2848),d=n(22),u=n(419),x=n(1334),b=n(1340),O=n(0),h=Object(c.a)(u.a)((function(t){var e=t.theme;return{paddingTop:e.spacing(11),paddingBottom:e.spacing(15)}})),m={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{my:1}};function g(){var t=Object(i.useState)(2),e=Object(a.a)(t,2),n=e[0],c=e[1],u=Object(i.useState)(10),g=Object(a.a)(u,2),p=g[0],f=g[1];return Object(O.jsxs)(h,{title:"Components: Pagination | Minimal-UI",children:[Object(O.jsx)(s.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(t){return"light"===t.palette.mode?"grey.200":"grey.800"}},children:Object(O.jsx)(r.a,{maxWidth:"lg",children:Object(O.jsx)(x.a,{heading:"Pagination",links:[{name:"Components",href:d.d.components},{name:"Pagination"}],moreLink:"https://next.material-ui.com/components/pagination"})})}),Object(O.jsx)(r.a,{maxWidth:"lg",children:Object(O.jsxs)(o.a,{container:!0,spacing:3,children:[Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(b.a,{title:"Basic",sx:m,children:[Object(O.jsx)(j.a,{count:10}),Object(O.jsx)(j.a,{count:10,color:"primary"}),Object(O.jsx)(j.a,{count:10,disabled:!0})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(b.a,{title:"Outlined",sx:m,children:[Object(O.jsx)(j.a,{count:10,variant:"outlined"}),Object(O.jsx)(j.a,{count:10,variant:"outlined",color:"primary"}),Object(O.jsx)(j.a,{count:10,variant:"outlined",disabled:!0})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(b.a,{title:"Rounded",sx:m,children:[Object(O.jsx)(j.a,{count:10,shape:"rounded"}),Object(O.jsx)(j.a,{count:10,variant:"outlined",shape:"rounded"}),Object(O.jsx)(j.a,{count:10,shape:"rounded",color:"primary"}),Object(O.jsx)(j.a,{count:10,variant:"outlined",shape:"rounded",color:"primary"})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(b.a,{title:"Size",sx:m,children:[Object(O.jsx)(j.a,{count:10,size:"small"}),Object(O.jsx)(j.a,{count:10}),Object(O.jsx)(j.a,{count:10,size:"large"})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(b.a,{title:"Buttons",sx:m,children:[Object(O.jsx)(j.a,{count:10,showFirstButton:!0,showLastButton:!0}),Object(O.jsx)(j.a,{count:10,hidePrevButton:!0,hideNextButton:!0})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsxs)(b.a,{title:"Ranges",sx:m,children:[Object(O.jsx)(j.a,{count:11,defaultPage:6,siblingCount:0}),Object(O.jsx)(j.a,{count:11,defaultPage:6}),Object(O.jsx)(j.a,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),Object(O.jsx)(j.a,{count:11,defaultPage:6,boundaryCount:2})]})}),Object(O.jsx)(o.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(b.a,{title:"Table",sx:m,children:Object(O.jsx)(l.a,{component:"div",count:100,page:n,onPageChange:function(t,e){c(e)},rowsPerPage:p,onRowsPerPageChange:function(t){f(parseInt(t.target.value,10)),c(0)}})})})]})})]})}}}]);
//# sourceMappingURL=105.5557a6b7.chunk.js.map
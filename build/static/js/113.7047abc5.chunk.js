(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[113],{1334:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(3),r=a(38),i=a(25),c=a(1210),s=a(417),o=a(207),l=a(1303),d=a(35),b=a(0),j=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,p=e.moreLink,h=void 0===p?[]:p,m=e.sx,x=Object(r.a)(e,j);return Object(b.jsxs)(c.a,{sx:m,mb:5,spacing:2,children:[Object(b.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(b.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(b.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:u}),Object(b.jsx)(d.b,Object(n.a)({links:t},x))]}),a&&Object(b.jsx)(s.a,{sx:{flexShrink:0},children:a})]}),Object(i.isString)(h)?Object(b.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(b.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},1351:function(e,t,a){"use strict";var n=a(7),r=a(6),i=a(2),c=a(1),s=(a(10),a(12)),o=a(168),l=a(207),d=a(13),b=a(8),j=a(142),u=a(169);function p(e){return Object(j.a)("MuiCardHeader",e)}var h=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=a(0),x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],O=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(i.a)((a={},Object(n.a)(a,"& .".concat(h.title),t.title),Object(n.a)(a,"& .".concat(h.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=c.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,c=a.avatar,b=a.className,j=a.component,u=void 0===j?"div":j,h=a.disableTypography,y=void 0!==h&&h,k=a.subheader,C=a.subheaderTypographyProps,P=a.title,M=a.titleTypographyProps,L=Object(r.a)(a,x),R=Object(i.a)({},a,{component:u,disableTypography:y}),T=function(e){var t=e.classes;return Object(o.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(R),w=P;null==w||w.type===l.a||y||(w=Object(m.jsx)(l.a,Object(i.a)({variant:c?"body2":"h5",className:T.title,component:"span",display:"block"},M,{children:w})));var N=k;return null==N||N.type===l.a||y||(N=Object(m.jsx)(l.a,Object(i.a)({variant:c?"body2":"body1",className:T.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:N}))),Object(m.jsxs)(O,Object(i.a)({className:Object(s.default)(T.root,b),as:u,ref:t,styleProps:R},L,{children:[c&&Object(m.jsx)(g,{className:T.avatar,styleProps:R,children:c}),Object(m.jsxs)(f,{className:T.content,styleProps:R,children:[w,N]}),n&&Object(m.jsx)(v,{className:T.action,styleProps:R,children:n})]}))}));t.a=y},2799:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a(17),r=a(1),i=a(8),c=a(417),s=a(1314),o=a(1210),l=a(1327),d=a(1351),b=a(1284),j=a(1325),u=a(1290),p=a(207),h=a(2848),m=a(22),x=a(295),O=a(419),g=a(1334),v=a(0),f=Object(i.a)(O.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function y(){var e=Object(x.a)(),t=e.allLang,a=e.currentLang,i=e.translate,O=e.onChangeLang,y=Object(r.useState)(2),k=Object(n.a)(y,2),C=k[0],P=k[1],M=Object(r.useState)(10),L=Object(n.a)(M,2),R=L[0],T=L[1];return Object(v.jsxs)(f,{title:"Components: Multi Language | Minimal-UI",children:[Object(v.jsx)(c.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(v.jsx)(s.a,{maxWidth:"lg",children:Object(v.jsx)(g.a,{heading:"Multi Language",links:[{name:"Components",href:m.d.components},{name:"Multi Language"}],moreLink:["https://react.i18next.com","https://next.material-ui.com/guides/localization/#main-content"]})})}),Object(v.jsx)(s.a,{maxWidth:"lg",children:Object(v.jsxs)(o.a,{spacing:5,children:[Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{title:"Flexible"}),Object(v.jsxs)(c.a,{sx:{p:3},children:[Object(v.jsx)(b.a,{row:!0,value:a.value,onChange:function(e){return O(e.target.value)},children:t.map((function(e){return Object(v.jsx)(j.a,{value:e.value,label:e.label,control:Object(v.jsx)(u.a,{})},e.label)}))}),Object(v.jsxs)(c.a,{sx:{my:3,display:"flex",alignItems:"center"},children:[Object(v.jsx)(c.a,{component:"img",alt:a.label,src:a.icon,sx:{mr:1}}),Object(v.jsx)(p.a,{variant:"h2",children:i("demo.title")})]}),Object(v.jsx)(p.a,{variant:"body1",children:i("demo.introduction")})]})]}),Object(v.jsxs)(l.a,{children:[Object(v.jsx)(d.a,{title:"System",sx:{pb:2}}),Object(v.jsx)(h.a,{component:"div",count:100,page:C,onPageChange:function(e,t){P(t)},rowsPerPage:R,onRowsPerPageChange:function(e){T(parseInt(e.target.value,10)),P(0)}})]})]})})]})}}}]);
//# sourceMappingURL=113.7047abc5.chunk.js.map
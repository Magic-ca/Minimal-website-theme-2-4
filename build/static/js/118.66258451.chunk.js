(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[118],{1353:function(t,e,o){"use strict";o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return b})),o.d(e,"c",(function(){return h})),o.d(e,"d",(function(){return j})),o.d(e,"e",(function(){return f})),o.d(e,"f",(function(){return w}));var a=o(3),n=o(1337),c=o(8),r=o(0),i=Object(c.a)(n.b)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(1.5),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function s(t){var e=Object.assign({},t);return Object(r.jsx)(i,Object(a.a)({},e))}var l=Object(c.a)(n.c)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8}}));function b(t){var e=Object.assign({},t);return Object(r.jsx)(l,Object(a.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},e))}var d=o(38),u=["onClick"],p=Object(c.a)("svg")((function(t){return{height:20,stroke:"none",cursor:"pointer",fill:t.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function h(t){var e=t.onClick,o=Object(d.a)(t,u);return Object(r.jsx)(n.f,Object(a.a)(Object(a.a)({},o),{},{children:Object(r.jsx)(p,{viewBox:"0 0 24 24",onClick:e,children:Object(r.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var m=Object(c.a)(n.g)((function(t){var e=t.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:e.spacing(6),left:e.spacing(1.5),boxShadow:e.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(e.palette.divider)}}}));function j(t){var e=Object.assign({},t);return Object(r.jsx)(m,Object(a.a)({},e))}var g=["children","onClose"],O=Object(c.a)(n.h)((function(t){var e=t.theme,o="rtl"===e.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:e.spacing(1),boxShadow:e.customShadows.z20,borderRadius:e.shape.borderRadius,backgroundColor:e.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:e.palette.common.white,right:o&&"0",left:o&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:e.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:e.palette.grey[800]}}}));function f(t){var e=t.children,o=t.onClose,n=Object(d.a)(t,g);return Object(r.jsx)(O,Object(a.a)(Object(a.a)({tipSize:8,anchor:"bottom",onClose:o,closeButton:!0,closeOnClick:!1},n),{},{children:e}))}var x=["sx"],v=Object(c.a)("div")((function(t){var e=t.theme;return{zIndex:99,position:"absolute",left:e.spacing(1.5),bottom:e.spacing(3.5),boxShadow:e.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:e.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function w(t){var e=t.sx,o=Object(d.a)(t,x);return Object(r.jsx)(v,{sx:e,children:Object(r.jsx)(n.i,Object(a.a)({maxWidth:100,unit:"imperial"},o))})}},1443:function(t,e,o){"use strict";var a=o(7),n=o(6),c=o(2),r=o(1),i=(o(10),o(12)),s=o(168),l=o(64),b=o(16),d=o(255),u=o(13),p=o(8),h=o(142),m=o(169);function j(t){return Object(h.a)("MuiSwitch",t)}var g=Object(m.a)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),O=o(0),f=["className","color","edge","size","sx"],x=Object(p.a)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(t,e){var o=t.styleProps;return[e.root,o.edge&&e["edge".concat(Object(b.a)(o.edge))],e["size".concat(Object(b.a)(o.size))]]}})((function(t){var e,o=t.styleProps;return Object(c.a)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===o.edge&&{marginLeft:-8},"end"===o.edge&&{marginRight:-8},"small"===o.size&&(e={width:40,height:24,padding:7},Object(a.a)(e,"& .".concat(g.thumb),{width:16,height:16}),Object(a.a)(e,"& .".concat(g.switchBase),Object(a.a)({padding:4},"&.".concat(g.checked),{transform:"translateX(16px)"})),e))})),v=Object(p.a)(d.a,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(t,e){var o=t.styleProps;return[e.switchBase,e.input,"default"!==o.color&&e["color".concat(Object(b.a)(o.color))]]}})((function(t){var e,o=t.theme;return e={position:"absolute",top:0,left:0,zIndex:1,color:"light"===o.palette.mode?o.palette.common.white:o.palette.grey[300],transition:o.transitions.create(["left","transform"],{duration:o.transitions.duration.shortest})},Object(a.a)(e,"&.".concat(g.checked),{transform:"translateX(20px)"}),Object(a.a)(e,"&.".concat(g.disabled),{color:"light"===o.palette.mode?o.palette.grey[100]:o.palette.grey[600]}),Object(a.a)(e,"&.".concat(g.checked," + .").concat(g.track),{opacity:.5}),Object(a.a)(e,"&.".concat(g.disabled," + .").concat(g.track),{opacity:"light"===o.palette.mode?.12:.2}),Object(a.a)(e,"& .".concat(g.input),{left:"-100%",width:"300%"}),e}),(function(t){var e,o=t.theme,n=t.styleProps;return Object(c.a)({"&:hover":{backgroundColor:Object(l.a)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(e={},Object(a.a)(e,"&.".concat(g.checked),Object(a.a)({color:o.palette[n.color].main,"&:hover":{backgroundColor:Object(l.a)(o.palette[n.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(g.disabled),{color:"light"===o.palette.mode?Object(l.i)(o.palette[n.color].main,.62):Object(l.b)(o.palette[n.color].main,.55)})),Object(a.a)(e,"&.".concat(g.checked," + .").concat(g.track),{backgroundColor:o.palette[n.color].main}),e))})),w=Object(p.a)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(t,e){return e.track}})((function(t){var e=t.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.mode?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.mode?.38:.3}})),k=Object(p.a)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(t,e){return e.thumb}})((function(t){return{boxShadow:t.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),y=r.forwardRef((function(t,e){var o=Object(u.a)({props:t,name:"MuiSwitch"}),a=o.className,r=o.color,l=void 0===r?"primary":r,d=o.edge,p=void 0!==d&&d,h=o.size,m=void 0===h?"medium":h,g=o.sx,y=Object(n.a)(o,f),S=Object(c.a)({},o,{color:l,edge:p,size:m}),z=function(t){var e=t.classes,o=t.edge,a=t.size,n=t.color,r=t.checked,i=t.disabled,l={root:["root",o&&"edge".concat(Object(b.a)(o)),"size".concat(Object(b.a)(a))],switchBase:["switchBase","color".concat(Object(b.a)(n)),r&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},d=Object(s.a)(l,j,e);return Object(c.a)({},e,d)}(S),C=Object(O.jsx)(k,{className:z.thumb,styleProps:S});return Object(O.jsxs)(x,{className:Object(i.default)(z.root,a),sx:g,styleProps:S,children:[Object(O.jsx)(v,Object(c.a)({type:"checkbox",icon:C,checkedIcon:C,ref:e,styleProps:S},y,{classes:Object(c.a)({},z,{root:z.switchBase})})),Object(O.jsx)(w,{className:z.track,styleProps:S})]})}));e.a=y},1950:function(t,e,o){"use strict";o.r(e),o.d(e,"default",(function(){return w}));var a=o(7),n=o(3),c=o(17),r=o(1337),i=o(1),s=o(1353),l=o(8),b=o(64),d=o(207),u=o(1443),p=o(71),h=o(417),m=o(0),j=Object(l.a)("div")((function(t){var e=t.theme;return{zIndex:99,minWidth:200,position:"absolute",top:e.spacing(1),right:e.spacing(1),padding:e.spacing(2),backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",borderRadius:e.shape.borderRadius,backgroundColor:Object(b.a)(e.palette.grey[900],.72)}})),g=Object(l.a)("div")((function(t){var e=t.theme;return{display:"flex",alignItems:"center",textTransform:"capitalize",justifyContent:"space-between",color:e.palette.common.white,"&:not(:last-child)":{marginBottom:e.spacing(1)}}})),O=[{label:"Dragging",value:"isDragging"},{label:"Transition",value:"inTransition"},{label:"Panning",value:"isPanning"},{label:"Rotating",value:"isRotating"},{label:"Zooming",value:"isZooming"}],f=/(^|[A-Z])[a-z]*/g;function x(t){return t.match(f).join(" ")}function v(t){var e=t.settings,o=t.interactionState,a=t.onChange;return Object(m.jsxs)(j,{children:[Object.keys(e).map((function(t){return function(t,e){switch(typeof e){case"boolean":return Object(m.jsxs)(g,{children:[Object(m.jsx)(d.a,{variant:"body2",children:x(t)}),Object(m.jsx)(u.a,{size:"small",checked:e,onChange:function(e){return a(t,e.target.checked)}})]},t);case"number":return Object(m.jsxs)(g,{children:[Object(m.jsx)(d.a,{variant:"body2",children:x(t)}),Object(m.jsx)(p.c,{value:e,onChange:function(e){return a(t,Number(e.target.value))},inputProps:{type:"number"},sx:{"& input":{py:.25,width:40,fontSize:14,borderRadius:.5,textAlign:"center",bgcolor:"grey.50012",color:"common.white"}}})]},t);default:return null}}(t,e[t])})),O.map((function(t){return Object(m.jsxs)(g,{children:[Object(m.jsx)(d.a,{variant:"body2",children:t.label}),Object(m.jsx)(h.a,{sx:{width:22,height:22,borderRadius:1,bgcolor:o[t.value]?"primary.main":"error.main"}})]},t.label)}))]})}function w(t){var e=Object.assign({},t),o=Object(i.useState)({}),l=Object(c.a)(o,2),b=l[0],d=l[1],u=Object(i.useState)({latitude:37.729,longitude:-122.36,zoom:11,bearing:0,pitch:50}),p=Object(c.a)(u,2),h=p[0],j=p[1],g=Object(i.useState)({dragPan:!0,dragRotate:!0,scrollZoom:!0,touchZoom:!0,touchRotate:!0,keyboard:!0,doubleClickZoom:!0,minZoom:0,maxZoom:20,minPitch:0,maxPitch:85}),O=Object(c.a)(g,2),f=O[0],x=O[1],w=Object(i.useCallback)((function(t,e){return x((function(o){return Object(n.a)(Object(n.a)({},o),{},Object(a.a)({},t,e))}))}),[]);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(r.l,Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({},h),f),{},{onViewportChange:j,onInteractionStateChange:function(t){return d(t)}},e),{},{children:[Object(m.jsx)(s.f,{}),Object(m.jsx)(s.d,{}),Object(m.jsx)(s.a,{}),Object(m.jsx)(s.b,{}),Object(m.jsx)(v,{settings:f,interactionState:b,onChange:w})]}))})}}}]);
//# sourceMappingURL=118.66258451.chunk.js.map
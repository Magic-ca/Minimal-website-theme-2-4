(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[70],{1334:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(3),i=n(38),r=n(25),c=n(1210),o=n(417),s=n(207),l=n(1303),d=n(35),j=n(0),b=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,n=e.action,u=e.heading,p=e.moreLink,h=void 0===p?[]:p,x=e.sx,O=Object(i.a)(e,b);return Object(j.jsxs)(c.a,{sx:x,mb:5,spacing:2,children:[Object(j.jsxs)(c.a,{direction:"row",alignItems:"center",children:[Object(j.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:u}),Object(j.jsx)(d.b,Object(a.a)({links:t},O))]}),n&&Object(j.jsx)(o.a,{sx:{flexShrink:0},children:n})]}),Object(r.isString)(h)?Object(j.jsx)(l.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(j.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"flex"},children:e},e)}))]})}},1421:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(3),i=n(38),r=n(647),c=n(207),o=n(0),s=["searchQuery"];function l(e){var t=e.searchQuery,n=void 0===t?"":t,l=Object(i.a)(e,s);return Object(o.jsxs)(r.a,Object(a.a)(Object(a.a)({},l),{},{children:[Object(o.jsx)(c.a,{gutterBottom:!0,align:"center",variant:"subtitle1",children:"Not found"}),Object(o.jsxs)(c.a,{variant:"body2",align:"center",children:["No results found for \xa0",Object(o.jsxs)("strong",{children:['"',n,'"']}),". Try checking for typos or using complete words."]})]}))}},1538:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(38),i=n(3),r=n(1),c=n(1716),o=n(1217),s=n(1270),l=n(64),d=n(207),j=n(0),b=["images","photoIndex","setPhotoIndex","isOpen","onClose"],u=Object(o.a)((function(e){var t="rtl"===e.direction,n=function(t){return{backgroundSize:"24px 24px",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundColor:Object(l.a)(e.palette.grey[900],.8),backgroundImage:'url("/static/icons/controls/'.concat(t,'.svg")')}};return Object(s.a)({root:{backdropFilter:"blur(8px)",backgroundColor:Object(l.a)(e.palette.grey[900],.88),"& .ril__toolbar":{height:"auto !important",padding:e.spacing(2,3),backgroundColor:"transparent"},"& .ril__toolbarLeftSide":{display:"none"},"& .ril__toolbarRightSide":{height:"auto !important",padding:0,flexGrow:1,display:"flex",alignItems:"center","& li":{display:"flex",alignItems:"center"},"& li:first-child":{flexGrow:1},"& li:not(:first-child)":{width:e.spacing(5),height:e.spacing(5),justifyContent:"center",marginLeft:e.spacing(1),borderRadius:e.shape.borderRadius}},"& button:focus":{outline:"none"},"& .ril__toolbarRightSide button":{width:"100%",height:"100%","&.ril__zoomInButton":n("maximize-outline"),"&.ril__zoomOutButton":n("minimize-outline"),"&.ril__closeButton":n("close")},"& .ril__navButtons":{padding:e.spacing(3),borderRadius:e.shape.borderRadiusSm,"&.ril__navButtonPrev":Object(i.a)({left:e.spacing(2),right:"auto"},n(t?"arrow-ios-forward":"arrow-ios-back")),"&.ril__navButtonNext":Object(i.a)({right:e.spacing(2),left:"auto"},n(t?"arrow-ios-back":"arrow-ios-forward"))}}})}));function p(e){var t=e.images,n=e.photoIndex,o=e.setPhotoIndex,s=e.isOpen,l=e.onClose,p=Object(a.a)(e,b),h=u();Object(r.useEffect)((function(){document.body.style.overflow=s?"hidden":"unset"}),[s]);var x=[Object(j.jsx)(d.a,{variant:"subtitle2",children:"".concat(n+1," / ").concat(t.length)})];return Object(j.jsx)(j.Fragment,{children:s&&Object(j.jsx)(c.a,Object(i.a)({mainSrc:t[n],nextSrc:t[(n+1)%t.length],prevSrc:t[(n+t.length-1)%t.length],onCloseRequest:l,onMovePrevRequest:function(){return o((n+t.length-1)%t.length)},onMoveNextRequest:function(){return o((n+1)%t.length)},toolbarButtons:x,reactModalStyle:{overlay:{zIndex:9999}},wrapperClassName:h.root},p))})}},1891:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(17),i=n(38),r=n(3),c=(n(2096),n(2121)),o=n(26),s=n(1),l=n(2097),d=n.n(l),j=n(8),b=n(64),u=n(52),p=n(284),h=n(1305),x=n(0),O=["disabled","value","setValue","alignRight"],f=Object(j.a)("div")({position:"relative"}),m=Object(j.a)("div")((function(e){var t=e.theme;return{bottom:40,overflow:"hidden",position:"absolute",left:t.spacing(-2),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadiusMd,"& .emoji-mart":{border:"none",backgroundColor:t.palette.background.paper},"& .emoji-mart-anchor":{color:t.palette.text.disabled,"&:hover, &:focus, &.emoji-mart-anchor-selected":{color:t.palette.text.primary}},"& .emoji-mart-bar":{borderColor:t.palette.divider},"& .emoji-mart-search input":{backgroundColor:"transparent",color:t.palette.text.primary,borderColor:t.palette.grey[50032],"&::placeholder":Object(r.a)(Object(r.a)({},t.typography.body2),{},{color:t.palette.text.disabled})},"& .emoji-mart-search-icon svg":{opacity:1,fill:t.palette.text.disabled},"& .emoji-mart-category-label span":Object(r.a)(Object(r.a)({},t.typography.subtitle2),{},{backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",color:t.palette.text.primary,backgroundColor:Object(b.a)(t.palette.background.paper,.8)}),"& .emoji-mart-title-label":{color:t.palette.text.primary},"& .emoji-mart-category .emoji-mart-emoji:hover:before":{backgroundColor:t.palette.action.selected},"& .emoji-mart-emoji":{outline:"none"},"& .emoji-mart-preview-name":{color:t.palette.text.primary},"& .emoji-mart-preview-shortname, .emoji-mart-preview-emoticon":{color:t.palette.text.secondary}}}));function g(e){var t,n=e.disabled,l=e.value,j=e.setValue,b=e.alignRight,g=void 0!==b&&b,v=Object(i.a)(e,O),y=Object(u.a)(),w=Object(s.useState)(!1),C=Object(a.a)(w,2),k=C[0],I=C[1];k&&(t=Object(x.jsx)(c.a,{color:y.palette.primary.main,title:"Pick your emoji\u2026",emoji:"point_up",onSelect:function(e){return j(l+e.native)}}));return Object(x.jsx)(p.a,{onClickAway:function(){I(!1)},children:Object(x.jsxs)(f,Object(r.a)(Object(r.a)({},v),{},{children:[Object(x.jsx)(m,{sx:Object(r.a)({},g&&{right:-2,left:"auto !important"}),children:t}),Object(x.jsx)(h.a,{disabled:n,size:"small",onClick:function(e){e.preventDefault(),I(!k)},children:Object(x.jsx)(o.Icon,{icon:d.a,width:20,height:20})})]}))})}},1894:function(e,t,n){"use strict";n.d(t,"d",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return g}));var a=n(417),i=n(26),r=n(426),c=n.n(r),o=n(0),s=["jpg","jpeg","gif","bmp","png"],l=["m4v","avi","mpg","mp4","webm"],d=["doc","docx"],j=["xls","xlsx"],b=["ppt","pptx"],u=["pdf"],p=["psd"],h=["ai","esp"];function x(e){return e.split(".").pop()}function O(e){return e.substring(e.lastIndexOf("/")+1).replace(/\.[^/.]+$/,"")}function f(e){return e.split("/").pop()}var m=function(e){return Object(o.jsx)(a.a,{component:"img",src:"/static/icons/file/".concat(e,".svg"),alt:e,sx:{width:28,height:28}})};function g(e){var t;switch(function(e){var t;switch(e.includes(x(e))){case s.includes(x(e)):t="image";break;case l.includes(x(e)):t="video";break;case d.includes(x(e)):t="word";break;case j.includes(x(e)):t="excel";break;case b.includes(x(e)):t="powerpoint";break;case u.includes(x(e)):t="pdf";break;case p.includes(x(e)):t="photoshop";break;case h.includes(x(e)):t="illustrator";break;default:t=x(e)}return t}(e)){case"image":t=Object(o.jsx)(a.a,{component:"img",src:e,alt:e,sx:{width:1,height:1}});break;case"video":t=m("file_type_video");break;case"word":t=m("file_type_word");break;case"excel":t=m("file_type_excel");break;case"powerpoint":t=m("file_type_powerpoint");break;case"pdf":t=m("file_type_pdf");break;case"photoshop":t=m("file_type_photoshop");break;case"illustrator":t=m("file_type_ai");break;default:t=Object(o.jsx)(a.a,{component:i.Icon,icon:c.a,sx:{width:28,height:28}})}return t}},2802:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return ln}));var a=n(1),i=n(1314),r=n(1327),c=n(330),o=n(446),s=n(22),l=n(84),d=n(419),j=n(1334),b=n(17),u=n(26),p=n(1282),h=n(572),x=n.n(h),O=n(1792),f=n.n(O),m=n(2597),g=n.n(m),v=n(417),y=n(1222),w=n(207),C=n(1319),k=n(1305),I=n(1211),S=n(1306),R=n(1308),_=n(1277),P=n(1278),W=n(1292),T=n(1276),A=n(58),z=n(211),G=n(434),L=n(0),M=["online","invisible","away"];function B(){var e=Object(A.a)().user,t=Object(a.useState)(null),n=Object(b.a)(t,2),i=n[0],r=n[1],c=Object(a.useState)("online"),o=Object(b.a)(c,2),s=o[0],l=o[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(v.a,{sx:{position:"relative"},children:[Object(L.jsx)(z.a,{onClick:function(e){r(e.currentTarget)},sx:{cursor:"pointer",width:48,height:48}}),Object(L.jsx)(G.a,{status:s,sx:{position:"absolute",bottom:2,right:2}})]}),Object(L.jsxs)(y.a,{open:Boolean(i),anchorEl:i,onClose:function(){r(null)},anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[Object(L.jsxs)(v.a,{sx:{py:2,pr:1,pl:2.5,display:"flex",alignItems:"center"},children:[Object(L.jsx)(z.a,{}),Object(L.jsxs)(v.a,{sx:{ml:2,mr:3},children:[Object(L.jsx)(w.a,{noWrap:!0,variant:"subtitle1",children:e.displayName}),Object(L.jsx)(w.a,{noWrap:!0,variant:"body2",sx:{color:"text.secondary"},children:e.email})]}),Object(L.jsx)(C.a,{title:"Log out",children:Object(L.jsx)(k.a,{children:Object(L.jsx)(u.Icon,{icon:g.a,width:24,height:24})})})]}),Object(L.jsx)(I.a,{}),Object(L.jsxs)(S.a,{children:[Object(L.jsxs)(R.a,{disableGutters:!0,sx:{py:1,px:2.5},children:[Object(L.jsx)(_.a,{children:Object(L.jsx)(v.a,{sx:{width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center"},children:Object(L.jsx)(G.a,{status:s})})}),Object(L.jsx)(P.a,{children:Object(L.jsx)(W.a,{native:!0,fullWidth:!0,size:"small",value:s,onChange:function(e){l(e.target.value)},sx:{"& svg":{display:"none"},"& select":{padding:0,typography:"body2","&:focus":{bgcolor:"transparent"}},"& fieldset":{borderWidth:"0 !important"}},children:M.map((function(e){return Object(L.jsx)("option",{value:e,children:Object(p.a)(e)},e)}))})})]}),Object(L.jsxs)(T.a,{disableGutters:!0,sx:{py:1,px:2.5},children:[Object(L.jsx)(_.a,{children:Object(L.jsx)(u.Icon,{icon:f.a,width:24,height:24})}),Object(L.jsx)(P.a,{primary:"Profile",primaryTypographyProps:{variant:"body2"}})]}),Object(L.jsxs)(T.a,{disableGutters:!0,sx:{py:1,px:2.5},children:[Object(L.jsx)(_.a,{children:Object(L.jsx)(u.Icon,{icon:x.a,width:24,height:24})}),Object(L.jsx)(P.a,{primary:"Settings",primaryTypographyProps:{variant:"body2"}})]})]})]})]})}var D=n(3),E=n(38),F=n(334),U=n.n(F),q=n(8),N=n(1301),H=n(284),Q=n(1322),V=n(1316),J=["query","onChange","onFocus","onClickAway"],K=Object(q.a)("div")((function(e){return{marginTop:e.theme.spacing(2)}})),Y=Object(q.a)(N.a)((function(e){var t=e.theme;return{transition:t.transitions.create("box-shadow",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"&.Mui-focused":{boxShadow:t.customShadows.z8},"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}));function $(e){var t=e.query,n=e.onChange,a=e.onFocus,i=e.onClickAway,r=Object(E.a)(e,J);return Object(L.jsx)(H.a,{onClickAway:i,children:Object(L.jsx)(K,Object(D.a)(Object(D.a)({},r),{},{children:Object(L.jsx)(Q.a,{fullWidth:!0,size:"small",children:Object(L.jsx)(Y,{value:t,onFocus:a,onChange:n,placeholder:"Search contacts...",startAdornment:Object(L.jsx)(V.a,{position:"start",children:Object(L.jsx)(v.a,{component:u.Icon,icon:U.a,sx:{color:"text.disabled"}})})})})}))})}var X=n(19),Z=n(25),ee=n(2859),te=n(1318),ne=n(1299),ae=["isSelected","conversation","onSelectConversation","isOpenSidebar"],ie=Object(q.a)(T.a)((function(e){var t=e.theme;return{padding:t.spacing(1.5,3),transition:t.transitions.create("all")}})),re=Object(q.a)("div")({position:"relative",width:48,height:48,"& .MuiAvatar-img":{borderRadius:"50%"},"& .MuiAvatar-root":{width:"100%",height:"100%"}});function ce(e){var t=e.isSelected,n=e.conversation,a=e.onSelectConversation,i=e.isOpenSidebar,r=Object(E.a)(e,ae),c=function(e,t){var n=e.participants.filter((function(e){return e.id!==t})),a=n.reduce((function(e,t){return[].concat(Object(X.a)(e),[t.name])}),[]).join(", "),i="",r=e.messages[e.messages.length-1];if(r){var c=r.senderId===t?"You: ":"",o="image"===r.contentType?"Sent a photo":r.body;i="".concat(c).concat(o)}return{otherParticipants:n,displayNames:a,displayText:i}}(n,"8864c717-587d-472a-929a-8e5f298024da-0"),o=Object(Z.last)(n.messages).createdAt,s=c.otherParticipants.length>1,l=n.unreadCount>0,d=s&&c.otherParticipants.map((function(e){return e.status})).includes("online");return Object(L.jsxs)(ie,Object(D.a)(Object(D.a)({disableGutters:!0,onClick:a,sx:Object(D.a)({},t&&{bgcolor:"action.selected"})},r),{},{children:[Object(L.jsx)(te.a,{children:Object(L.jsxs)(v.a,{sx:Object(D.a)({},s&&{position:"relative",width:48,height:48,"& .avatarWrapper":{position:"absolute",width:32,height:32,"&:nth-child(1)":{left:0,zIndex:9,bottom:2,"& .MuiAvatar-root":{border:function(e){return"solid 2px ".concat(e.palette.background.paper)}}},"&:nth-child(2)":{top:2,right:0}}}),children:[c.otherParticipants.slice(0,2).map((function(e){return Object(L.jsxs)(re,{className:"avatarWrapper",children:[Object(L.jsx)(ne.a,{alt:e.name,src:e.avatar}),!s&&Object(L.jsx)(G.a,{status:e.status,sx:{right:2,bottom:2,position:"absolute"}})]},e.id)})),d&&Object(L.jsx)(G.a,{status:"online",sx:{right:2,bottom:2,position:"absolute"}})]})}),i&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(P.a,{primary:c.displayNames,primaryTypographyProps:{noWrap:!0,variant:"subtitle2"},secondary:c.displayText,secondaryTypographyProps:{noWrap:!0,variant:l?"subtitle2":"body2",color:l?"textPrimary":"textSecondary"}}),Object(L.jsxs)(v.a,{sx:{ml:2,height:44,display:"flex",alignItems:"flex-end",flexDirection:"column"},children:[Object(L.jsx)(v.a,{sx:{mb:1.25,fontSize:12,lineHeight:"22px",whiteSpace:"nowrap",color:"text.disabled"},children:Object(ee.a)(new Date(o),{addSuffix:!1})}),l&&Object(L.jsx)(G.a,{status:"unread",size:"small"})]})]})]}))}var oe=n(34),se=["conversations","isOpenSidebar","activeConversationId"];function le(e){var t=e.conversations,n=e.isOpenSidebar,a=e.activeConversationId,i=Object(E.a)(e,se),r=Object(oe.h)();return Object(L.jsx)(S.a,Object(D.a)(Object(D.a)({disablePadding:!0},i),{},{children:t.allIds.map((function(e){return Object(L.jsx)(ce,{isOpenSidebar:n,conversation:t.byId[e],isSelected:a===e,onSelectConversation:function(){return function(e){var n="",a=t.byId[e];n="GROUP"===a.type?a.id:a.participants.find((function(e){return"8864c717-587d-472a-929a-8e5f298024da-0"!==e.id})).username,r("".concat(s.b.chat.root,"/").concat(n))}(e)}},e)}))}))}var de=n(1663),je=n.n(de),be=n(1664),ue=n.n(be),pe=n(1402),he=n.n(pe),xe=n(64),Oe=n(1807),fe=n(1678),me=n(1320),ge=n(1421),ve=["contacts","recipients","onAddRecipient"],ye=Object(q.a)("div")((function(e){return{display:"flex",alignItems:"center",padding:e.theme.spacing(2,3)}})),we=Object(q.a)("div")((function(e){var t=e.theme;return{"& .MuiAutocomplete-root":{minWidth:280,marginLeft:t.spacing(2),"&.Mui-focused .MuiAutocomplete-inputRoot":{boxShadow:t.customShadows.z8}},"& .MuiAutocomplete-inputRoot":{transition:t.transitions.create("box-shadow",{easing:t.transitions.easing.easeInOut,duration:t.transitions.duration.shorter}),"& fieldset":{borderWidth:"1px !important",borderColor:"".concat(t.palette.grey[50032]," !important")}}}}));function Ce(e){var t=e.contacts,n=e.recipients,i=e.onAddRecipient,r=Object(E.a)(e,ve),c=Object(a.useState)(""),o=Object(b.a)(c,2),s=o[0],l=o[1];return Object(L.jsxs)(ye,Object(D.a)(Object(D.a)({},r),{},{children:[Object(L.jsx)(w.a,{variant:"subtitle2",sx:{color:"text.secondary"},children:"To:"}),Object(L.jsx)(we,{children:Object(L.jsx)(Oe.a,{multiple:!0,size:"small",disablePortal:!0,popupIcon:null,clearText:null,noOptionsText:Object(L.jsx)(ge.a,{searchQuery:s}),onChange:function(e,t){l(""),i&&i(t)},onInputChange:function(e){l(e.target.value)},options:t,getOptionLabel:function(e){return e.name},renderOption:function(e,t,n){var a=n.inputValue,i=n.selected,r=t.name,c=t.avatar,o=ue()(r,a),s=je()(r,o);return Object(L.jsxs)("li",Object(D.a)(Object(D.a)({},e),{},{children:[Object(L.jsxs)(v.a,{sx:{width:32,height:32,overflow:"hidden",borderRadius:"50%",position:"relative"},children:[Object(L.jsx)(ne.a,{alt:r,src:c}),Object(L.jsx)(v.a,{sx:Object(D.a)({top:0,opacity:0,width:"100%",height:"100%",display:"flex",position:"absolute",alignItems:"center",justifyContent:"center",bgcolor:function(e){return Object(xe.a)(e.palette.grey[900],.8)},transition:function(e){return e.transitions.create("opacity",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.shorter})}},i&&{opacity:1,color:"primary.main"}),children:Object(L.jsx)(u.Icon,{icon:he.a,width:20,height:20})})]}),Object(L.jsx)(v.a,{sx:{ml:2}}),s.map((function(e,t){return Object(L.jsx)(w.a,{variant:"subtitle2",color:e.highlight?"primary":"textPrimary",children:e.text},t)}))]}))},renderTags:function(e,t){return e.map((function(e,n){var a=e.id,i=e.name,r=e.avatar;return Object(L.jsx)(fe.a,Object(D.a)({size:"small",label:i,color:"info",avatar:Object(L.jsx)(ne.a,{alt:i,src:r})},t({index:n})),a)}))},renderInput:function(e){return Object(L.jsx)(me.a,Object(D.a)(Object(D.a)({},e),{},{placeholder:0===n.length?"Recipients":""}))}})})]}))}var ke=n(2598),Ie=n.n(ke),Se=n(1733),Re=n.n(Se),_e=n(1368),Pe=n.n(_e),We=n(144),Te=n.n(We),Ae=n(1809),ze=n(1303),Ge=n(249),Le=n(35),Me=["participants"],Be=Object(q.a)("div")((function(e){return{flexShrink:0,minHeight:92,display:"flex",alignItems:"center",padding:e.theme.spacing(0,3)}}));function De(e){var t=e.participants,n=Object(X.a)(t)[0];return void 0===n?null:Object(L.jsxs)(v.a,{sx:{display:"flex",alignItems:"center"},children:[Object(L.jsxs)(v.a,{sx:{position:"relative"},children:[Object(L.jsx)(ne.a,{src:n.avatar,alt:n.name}),Object(L.jsx)(G.a,{status:n.status,sx:{position:"absolute",right:2,bottom:2}})]}),Object(L.jsxs)(v.a,{sx:{ml:2},children:[Object(L.jsx)(w.a,{variant:"subtitle2",children:n.name}),Object(L.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:"offline"!==n.status?Object(p.a)(n.status):Object(Ge.d)(n.lastActivity)})]})]})}function Ee(e){var t=e.participants;return Object(L.jsxs)("div",{children:[Object(L.jsx)(Ae.a,{max:3,sx:{mb:.5,"& .MuiAvatar-root":{width:32,height:32}},children:t.map((function(e){return Object(L.jsx)(ne.a,{alt:e.name,src:e.avatar},e.id)}))}),Object(L.jsx)(ze.a,{variant:"body2",underline:"none",component:"button",color:"text.secondary",onClick:function(){},children:Object(L.jsxs)(v.a,{sx:{display:"flex",alignItems:"center"},children:[t.length," persons",Object(L.jsx)(u.Icon,{icon:Te.a})]})})]})}function Fe(e){var t=e.participants,n=Object(E.a)(e,Me),a=t.length>1;return Object(L.jsxs)(Be,Object(D.a)(Object(D.a)({},n),{},{children:[a?Object(L.jsx)(Ee,{participants:t}):Object(L.jsx)(De,{participants:t}),Object(L.jsx)(v.a,{sx:{flexGrow:1}}),Object(L.jsx)(Le.e,{children:Object(L.jsx)(u.Icon,{icon:Re.a,width:20,height:20})}),Object(L.jsx)(Le.e,{children:Object(L.jsx)(u.Icon,{icon:Ie.a,width:20,height:20})}),Object(L.jsx)(Le.e,{children:Object(L.jsx)(u.Icon,{icon:Pe.a,width:20,height:20})})]}))}var Ue=n(1291),qe=n(2599),Ne=n.n(qe),He=n(1794),Qe=n.n(He),Ve=n(1545),Je=n.n(Ve),Ke=n(1544),Ye=n.n(Ke),$e=n(1315),Xe=n(1210),Ze=n(1891),et=["disabled","conversationId","onSend"],tt=Object(q.a)("div")((function(e){return{minHeight:56,display:"flex",position:"relative",alignItems:"center",paddingLeft:e.theme.spacing(2)}}));function nt(e){var t=e.disabled,n=e.conversationId,i=e.onSend,r=Object(E.a)(e,et),c=Object(a.useRef)(null),o=Object(a.useState)(""),s=Object(b.a)(o,2),l=s[0],d=s[1],j=function(){c.current.click()},p=function(){return l?(i&&i({conversationId:n,messageId:Object(Ue.a)(),message:l,contentType:"text",attachments:[],createdAt:new Date,senderId:"8864c717-587d-472a-929a-8e5f298024da-0"}),d("")):""};return Object(L.jsxs)(tt,Object(D.a)(Object(D.a)({},r),{},{children:[Object(L.jsx)($e.a,{disabled:t,fullWidth:!0,value:l,disableUnderline:!0,onKeyUp:function(e){"Enter"!==e.key&&13!==e.keyCode||p()},onChange:function(e){d(e.target.value)},placeholder:"Type a message",startAdornment:Object(L.jsx)(V.a,{position:"start",children:Object(L.jsx)(Ze.a,{disabled:t,value:l,setValue:d})}),endAdornment:Object(L.jsxs)(Xe.a,{direction:"row",spacing:.5,mr:1.5,children:[Object(L.jsx)(k.a,{disabled:t,size:"small",onClick:j,children:Object(L.jsx)(u.Icon,{icon:Ye.a,width:24,height:24})}),Object(L.jsx)(k.a,{disabled:t,size:"small",onClick:j,children:Object(L.jsx)(u.Icon,{icon:Je.a,width:24,height:24})}),Object(L.jsx)(k.a,{disabled:t,size:"small",children:Object(L.jsx)(u.Icon,{icon:Ne.a,width:24,height:24})})]}),sx:{height:"100%"}}),Object(L.jsx)(I.a,{orientation:"vertical",flexItem:!0}),Object(L.jsx)(k.a,{color:"primary",disabled:!l,onClick:p,sx:{mx:1},children:Object(L.jsx)(u.Icon,{icon:Qe.a,width:24,height:24})}),Object(L.jsx)("input",{type:"file",ref:c,style:{display:"none"}})]}))}var at=["message","conversation","onOpenLightbox"],it=Object(q.a)("div")((function(e){return{display:"flex",marginBottom:e.theme.spacing(3)}})),rt=Object(q.a)("div")((function(e){var t=e.theme;return{maxWidth:320,padding:t.spacing(1.5),marginTop:t.spacing(.5),borderRadius:t.shape.borderRadius,backgroundColor:t.palette.background.neutral}})),ct=Object(q.a)(w.a)((function(e){var t=e.theme;return{display:"flex",marginBottom:t.spacing(.75),color:t.palette.text.secondary}})),ot=Object(q.a)("img")((function(e){return{height:200,minWidth:296,width:"100%",cursor:"pointer",objectFit:"cover",borderRadius:e.theme.shape.borderRadius}}));function st(e){var t=e.message,n=e.conversation,a=e.onOpenLightbox,i=Object(E.a)(e,at),r=n.participants.find((function(e){return e.id===t.senderId})),c="8864c717-587d-472a-929a-8e5f298024da-0"===t.senderId?{type:"me"}:{avatar:r.avatar,name:r.name},o="me"===c.type,s="image"===t.contentType,l=c.name&&c.name.split(" ")[0];return Object(L.jsx)(it,Object(D.a)(Object(D.a)({},i),{},{children:Object(L.jsxs)(v.a,{sx:Object(D.a)({display:"flex"},o&&{ml:"auto"}),children:["me"!==c.type&&Object(L.jsx)(ne.a,{alt:c.name,src:c.avatar,sx:{width:32,height:32}}),Object(L.jsxs)(v.a,{sx:{ml:2},children:[Object(L.jsxs)(ct,{noWrap:!0,variant:"caption",sx:Object(D.a)({},o&&{justifyContent:"flex-end"}),children:[!o&&"".concat(l,","),"\xa0",Object(ee.a)(new Date(t.createdAt),{addSuffix:!0})]}),Object(L.jsx)(rt,{sx:Object(D.a)({},o&&{color:"grey.800",bgcolor:"primary.lighter"}),children:s?Object(L.jsx)(ot,{alt:"attachment",src:t.body,onClick:function(){return a(t.body)}}):Object(L.jsx)(w.a,{variant:"body2",children:t.body})})]})]})}))}var lt=n(99),dt=n(1538);function jt(e){var t=e.conversation,n=Object(a.useRef)(),i=Object(a.useState)(!1),r=Object(b.a)(i,2),c=r[0],o=r[1],s=Object(a.useState)(null),l=Object(b.a)(s,2),d=l[0],j=l[1];Object(a.useEffect)((function(){n.current&&(n.current.scrollTop=n.current.scrollHeight)}),[t.messages]);var u=t.messages.filter((function(e){return"image"===e.contentType})).map((function(e){return e.body})),p=function(e){var t=Object(Z.findIndex)(u,(function(t){return t===e}));o(!0),j(t)};return Object(L.jsxs)(lt.a,{scrollableNodeProps:{ref:n},sx:{p:3,flexGrow:1},children:[t.messages.map((function(e){return Object(L.jsx)(st,{message:e,conversation:t,onOpenLightbox:p},e.id)})),Object(L.jsx)(dt.a,{images:u,photoIndex:d,setPhotoIndex:j,isOpen:c,onClose:function(){return o(!1)}})]})}var bt=n(333),ut=n.n(bt),pt=n(52),ht=n(1266),xt=n(173),Ot=n.n(xt),ft=n(418),mt=n(538),gt=n(1894),vt=["conversation","isCollapse","onCollapse"],yt=Object(q.a)("div")((function(e){return{flexGrow:1,height:"100%",display:"flex",overflow:"hidden",flexDirection:"column",paddingBottom:e.theme.spacing(2)}})),wt=Object(q.a)("div")((function(e){var t=e.theme;return{display:"flex",alignItems:"center",marginTop:t.spacing(2),padding:t.spacing(0,2.5)}})),Ct=Object(q.a)("div")((function(e){var t=e.theme;return{width:40,height:40,flexShrink:0,display:"flex",overflow:"hidden",alignItems:"center",justifyContent:"center",color:t.palette.text.secondary,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[50016]}})),kt=Object(q.a)(ft.a)((function(e){var t=e.theme;return Object(D.a)(Object(D.a)({},t.typography.overline),{},{height:40,flexShrink:0,borderRadius:0,padding:t.spacing(1,2),justifyContent:"space-between",color:t.palette.text.disabled})}));function It(e){var t=e.file,n=e.fileUrl;return Object(L.jsxs)(wt,{children:[Object(L.jsx)(Ct,{children:Object(gt.c)(n)}),Object(L.jsxs)(v.a,{sx:{ml:1.5,maxWidth:150},children:[Object(L.jsx)(w.a,{variant:"body2",noWrap:!0,children:Object(gt.a)(n)}),Object(L.jsx)(w.a,{noWrap:!0,variant:"caption",sx:{color:"text.secondary",display:"block"},children:Object(Ge.b)(t.createdAt)})]})]},n)}function St(e){var t=e.conversation,n=e.isCollapse,a=e.onCollapse,i=Object(E.a)(e,vt),r=Object(Z.uniq)(Object(Z.flatten)(t.messages.map((function(e){return e.attachments})))).length;return Object(L.jsxs)(yt,Object(D.a)(Object(D.a)({},i),{},{children:[Object(L.jsxs)(kt,{fullWidth:!0,color:"inherit",onClick:a,endIcon:Object(L.jsx)(u.Icon,{icon:n?Ot.a:Te.a,width:16,height:16}),children:["attachment (",r,")"]}),!n&&Object(L.jsx)(I.a,{}),Object(L.jsx)(lt.a,{children:Object(L.jsx)(mt.a,{in:n,children:t.messages.map((function(e){return Object(L.jsx)("div",{children:e.attachments.map((function(t){return Object(L.jsx)(It,{file:e,fileUrl:t},t)}))},e.id)}))})})]}))}var Rt=n(1793),_t=n.n(Rt),Pt=n(1555),Wt=n.n(Pt),Tt=["participants","isCollapse","onCollapse"],At=Object(q.a)(ft.a)((function(e){var t=e.theme;return Object(D.a)(Object(D.a)({},t.typography.overline),{},{height:40,borderRadius:0,padding:t.spacing(1,2),justifyContent:"space-between",color:t.palette.text.disabled})})),zt=Object(q.a)(u.Icon)((function(e){return{width:16,height:16,marginTop:4,color:e.theme.palette.text.secondary}})),Gt=Object(q.a)(w.a)((function(e){var t=e.theme;return Object(D.a)({flexGrow:1,maxWidth:160,wordWrap:"break-word"},t.typography.body2)}));function Lt(e){var t=e.participants,n=e.isCollapse,a=e.onCollapse,i=Object(E.a)(e,Tt),r=Object(X.a)(t)[0];return void 0===r?null:Object(L.jsxs)(v.a,Object(D.a)(Object(D.a)({},i),{},{children:[Object(L.jsxs)(v.a,{sx:{pt:4,pb:3,display:"flex",alignItems:"center",flexDirection:"column"},children:[Object(L.jsx)(ne.a,{alt:r.name,src:r.avatar,sx:{width:96,height:96}}),Object(L.jsxs)(v.a,{sx:{mt:2,textAlign:"center"},children:[Object(L.jsx)(w.a,{variant:"subtitle1",children:r.name}),Object(L.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:r.position})]})]}),Object(L.jsx)(I.a,{}),Object(L.jsx)(At,{fullWidth:!0,color:"inherit",onClick:a,endIcon:Object(L.jsx)(u.Icon,{icon:n?Ot.a:Te.a,width:16,height:16}),children:"information"}),Object(L.jsx)(mt.a,{in:n,children:Object(L.jsxs)(Xe.a,{spacing:2,sx:{p:2.5,pt:1},children:[Object(L.jsxs)(Xe.a,{direction:"row",spacing:1,children:[Object(L.jsx)(zt,{icon:_t.a}),Object(L.jsx)(Gt,{children:r.address})]}),Object(L.jsxs)(Xe.a,{direction:"row",spacing:1,children:[Object(L.jsx)(zt,{icon:Re.a}),Object(L.jsx)(Gt,{children:r.phone})]}),Object(L.jsxs)(Xe.a,{direction:"row",spacing:1,children:[Object(L.jsx)(zt,{icon:Wt.a}),Object(L.jsx)(Gt,{children:r.email})]})]})})]}))}var Mt=n(1945),Bt=n(208),Dt=["participant","isOpen","onClose"],Et=Object(q.a)("div")((function(e){return{display:"flex",alignItems:"center",justifyContent:"center",marginTop:e.theme.spacing(1.5)}})),Ft=Object(q.a)(u.Icon)((function(e){var t=e.theme;return{width:16,height:16,marginRight:t.spacing(1),color:t.palette.text.secondary}}));function Ut(e){var t=e.participant,n=e.isOpen,a=e.onClose,i=Object(E.a)(e,Dt),r=t.name,c=t.avatar,o=t.position,s=t.address,l=t.phone,d=t.email;return Object(L.jsx)(Bt.b,Object(D.a)(Object(D.a)({fullWidth:!0,maxWidth:"xs",open:n,onClose:a},i),{},{children:Object(L.jsxs)(Mt.a,{sx:{pb:5,textAlign:"center"},children:[Object(L.jsx)(ne.a,{alt:r,src:c,sx:{mt:5,mb:2,mx:"auto",width:96,height:96}}),Object(L.jsx)(w.a,{variant:"h6",children:r}),Object(L.jsx)(w.a,{variant:"body2",paragraph:!0,sx:{color:"text.secondary"},children:o}),Object(L.jsxs)(Et,{children:[Object(L.jsx)(Ft,{icon:_t.a}),Object(L.jsx)(w.a,{variant:"body2",children:s})]}),Object(L.jsxs)(Et,{children:[Object(L.jsx)(Ft,{icon:Re.a}),Object(L.jsx)(w.a,{variant:"body2",children:l})]}),Object(L.jsxs)(Et,{children:[Object(L.jsx)(Ft,{icon:Wt.a}),Object(L.jsx)(w.a,{variant:"body2",children:d})]})]})}))}var qt=["participants","selectUserId","onShowPopupUserInfo","isCollapse","onCollapse"],Nt=Object(q.a)(ft.a)((function(e){var t=e.theme;return Object(D.a)(Object(D.a)({},t.typography.overline),{},{height:40,borderRadius:0,padding:t.spacing(1,2),justifyContent:"space-between",color:t.palette.text.disabled})}));function Ht(e){var t=e.participant,n=e.isOpen,a=e.onClosePopup,i=e.onShowPopup,r=t.name,c=t.avatar,o=t.status,s=t.position;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(T.a,{disableGutters:!0,onClick:i,sx:{height:64,px:2.5},children:[Object(L.jsx)(te.a,{children:Object(L.jsxs)(v.a,{sx:{position:"relative",width:40,height:40},children:[Object(L.jsx)(ne.a,{alt:r,src:c}),Object(L.jsx)(G.a,{status:o,sx:{right:0,bottom:0,position:"absolute"}})]})}),Object(L.jsx)(P.a,{primary:r,secondary:s,primaryTypographyProps:{variant:"subtitle2",noWrap:!0},secondaryTypographyProps:{noWrap:!0}})]}),Object(L.jsx)(Ut,{participant:t,isOpen:n,onClose:a})]})}function Qt(e){var t=e.participants,n=e.selectUserId,a=e.onShowPopupUserInfo,i=e.isCollapse,r=e.onCollapse,c=Object(E.a)(e,qt);return Object(L.jsxs)(v.a,Object(D.a)(Object(D.a)({},c),{},{children:[Object(L.jsxs)(Nt,{fullWidth:!0,disableRipple:!0,color:"inherit",onClick:r,endIcon:Object(L.jsx)(u.Icon,{icon:i?Ot.a:Te.a,width:16,height:16}),children:["In room (",t.length,")"]}),Object(L.jsx)(v.a,{sx:{height:i?256:0},children:Object(L.jsx)(lt.a,{children:Object(L.jsx)(mt.a,{in:i,children:Object(L.jsx)(S.a,{disablePadding:!0,children:t.map((function(e){return Object(L.jsx)(Ht,{participant:e,isOpen:n===e.id,onShowPopup:function(){return a(e.id)},onClosePopup:function(){return a(null)}},e.id)}))})})})})]}))}var Vt=["conversation","participants"],Jt=Object(q.a)("div")((function(e){var t=e.theme;return{width:240,flexShrink:0,display:"flex",position:"relative",flexDirection:"column",borderLeft:"solid 1px ".concat(t.palette.divider),transition:t.transitions.create("width")}})),Kt=Object(q.a)("div")((function(e){var t=e.theme;return{borderRight:0,display:"flex",overflow:"hidden",position:"absolute",alignItems:"center",top:t.spacing(1),left:t.spacing(-4),width:t.spacing(4),height:t.spacing(4),justifyContent:"center",boxShadow:t.customShadows.z8,border:"solid 1px ".concat(t.palette.divider),borderTopLeftRadius:t.shape.borderRadius,backgroundColor:t.palette.background.paper,borderBottomLeftRadius:t.shape.borderRadius}}));function Yt(e){var t=e.conversation,n=e.participants,i=Object(E.a)(e,Vt),r=Object(pt.a)(),c=Object(ht.a)(r.breakpoints.down("lg")),o=Object(a.useState)(!0),s=Object(b.a)(o,2),l=s[0],d=s[1],j=Object(a.useState)(!0),p=Object(b.a)(j,2),h=p[0],x=p[1],O=Object(a.useState)(null),f=Object(b.a)(O,2),m=f[0],g=f[1],v=Object(a.useState)(!0),y=Object(b.a)(v,2),w=y[0],C=y[1],S=Object(a.useState)(!0),R=Object(b.a)(S,2),_=R[0],P=R[1],W=n.length>1;return Object(a.useEffect)((function(){return d(!c)}),[c]),Object(L.jsxs)(Jt,Object(D.a)(Object(D.a)({sx:Object(D.a)({},!l&&{width:0,"& > *":{overflow:"hidden"}})},i),{},{children:[Object(L.jsx)(Kt,{children:Object(L.jsx)(k.a,{onClick:function(){return d(!l)},children:Object(L.jsx)(u.Icon,{width:16,height:16,icon:l?Te.a:ut.a})})}),W?Object(L.jsx)(Qt,{selectUserId:m,participants:n,isCollapse:_,onShowPopupUserInfo:function(e){return g(e)},onCollapse:function(){return P((function(e){return!e}))}}):Object(L.jsx)(Lt,{participants:n,isCollapse:h,onCollapse:function(){return x((function(e){return!e}))}}),Object(L.jsx)(I.a,{}),Object(L.jsx)(St,{conversation:t,isCollapse:w,onCollapse:function(){return C((function(e){return!e}))}})]}))}function $t(e){var t=e.query,n=e.results,a=e.onSelectContact,i=n.length>0;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(w.a,{paragraph:!0,variant:"subtitle1",sx:{px:3,color:"text.secondary"},children:"Contacts"}),Object(L.jsx)(S.a,{disablePadding:!0,children:n.map((function(e){return Object(L.jsxs)(T.a,{onClick:function(){return a(e)},sx:{py:1.5,px:3},children:[Object(L.jsx)(te.a,{children:Object(L.jsx)(ne.a,{alt:e.name,src:e.avatar})}),Object(L.jsx)(P.a,{primary:e.name,primaryTypographyProps:{noWrap:!0,variant:"subtitle2"}})]},e.id)}))}),!i&&Object(L.jsx)(ge.a,{searchQuery:t,sx:{p:3,mx:"auto",width:"calc(100% - 48px)",bgcolor:"background.neutral"}})]})}var Xt=n(15),Zt=n.n(Xt),en=n(24),tn=n(1401),nn=n.n(tn),an=n(32),rn=n(28),cn=Object(q.a)("div")((function(e){var t=e.theme;return{width:320,flexShrink:0,display:"flex",flexDirection:"column",transition:t.transitions.create("width"),borderRight:"1px solid ".concat(t.palette.divider)}}));function on(){var e=Object(pt.a)(),t=Object(oe.h)(),n=Object(ht.a)(e.breakpoints.down("md")),i=Object(a.useState)(!0),r=Object(b.a)(i,2),o=r[0],l=r[1],d=Object(a.useState)(""),j=Object(b.a)(d,2),p=j[0],h=j[1],x=Object(a.useState)([]),O=Object(b.a)(x,2),f=O[0],m=O[1],g=Object(a.useState)(!1),y=Object(b.a)(g,2),w=y[0],C=y[1],k=p&&w,I=Object(c.d)((function(e){return e.chat})),S=I.conversations,R=I.activeConversationId;Object(a.useEffect)((function(){return l(!n)}),[n]),Object(a.useEffect)((function(){if(!o)return C(!1)}),[o]);var _=function(){var e=Object(en.a)(Zt.a.mark((function e(t){var n,a;return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.target.value,h(n),!n){e.next=10;break}return e.next=6,rn.a.get("/api/chat/search",{params:{query:n}});case 6:a=e.sent,m(a.data.results),e.next=11;break;case 10:m([]);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}(),P=function(e){C(!1),h(""),t("".concat(s.b.chat.root,"/").concat(e))};return Object(L.jsxs)(cn,{sx:Object(D.a)({},!o&&{width:96}),children:[Object(L.jsxs)(v.a,{sx:{py:2,px:3},children:[Object(L.jsxs)(v.a,{sx:{display:"flex",alignItems:"center"},children:[o&&Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(B,{}),Object(L.jsx)(v.a,{sx:{flexGrow:1}})]}),Object(L.jsx)(Le.e,{onClick:function(){return l(!o)},children:Object(L.jsx)(u.Icon,{width:20,height:20,icon:o?ut.a:Te.a})}),o&&Object(L.jsx)(Le.e,{to:s.b.chat.new,component:an.b,children:Object(L.jsx)(u.Icon,{icon:nn.a,width:20,height:20})})]}),o&&Object(L.jsx)($,{query:p,onFocus:function(){C(!0)},onChange:_,onClickAway:function(){C(!1),h("")}})]}),Object(L.jsx)(lt.a,{children:k?Object(L.jsx)($t,{query:p,results:f,onSelectContact:function(e){P&&P(e.username)}}):Object(L.jsx)(le,{conversations:S,isOpenSidebar:o,activeConversationId:R,sx:Object(D.a)({},w&&{display:"none"})})})]})}function sn(){var e=Object(c.c)(),t=Object(oe.h)(),n=Object(oe.g)().pathname,i=Object(oe.i)().conversationKey,r=Object(c.d)((function(e){return e.chat})),l=r.contacts,d=r.recipients,j=r.participants,b=r.activeConversationId,u=Object(c.d)((function(e){return function(e){var t=e.chat,n=t.conversations,a=t.activeConversationId;return n.byId[a]||{id:null,messages:[],participants:[],unreadMessages:0}}(e)})),p=i?"DETAIL":"COMPOSE",h=j.filter((function(e){return"8864c717-587d-472a-929a-8e5f298024da-0"!==e.id}));Object(a.useEffect)((function(){i?function(){var n=Object(en.a)(Zt.a.mark((function n(){return Zt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e(Object(o.f)(i));try{e(Object(o.d)(i))}catch(a){console.error(a),t(s.b.chat.new)}case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()():b&&e(Object(o.i)())}),[i]),Object(a.useEffect)((function(){b&&e(Object(o.g)(b))}),[e,b]);var x=function(){var t=Object(en.a)(Zt.a.mark((function t(n){return Zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e(Object(o.h)(n))}catch(a){console.error(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(L.jsxs)(v.a,{sx:{flexGrow:1,display:"flex",flexDirection:"column"},children:["DETAIL"===p?Object(L.jsx)(Fe,{participants:h}):Object(L.jsx)(Ce,{recipients:d,contacts:Object.values(l.byId),onAddRecipient:function(t){e(Object(o.a)(t))}}),Object(L.jsx)(I.a,{}),Object(L.jsxs)(v.a,{sx:{flexGrow:1,display:"flex",overflow:"hidden"},children:[Object(L.jsxs)(v.a,{sx:{display:"flex",flexGrow:1,flexDirection:"column"},children:[Object(L.jsx)(jt,{conversation:u}),Object(L.jsx)(I.a,{}),Object(L.jsx)(nt,{conversationId:b,onSend:x,disabled:n===s.b.chat.new})]}),"DETAIL"===p&&Object(L.jsx)(Yt,{conversation:u,participants:h})]})]})}function ln(){var e=Object(l.a)().themeStretch,t=Object(c.c)();return Object(a.useEffect)((function(){t(Object(o.e)()),t(Object(o.c)())}),[t]),Object(L.jsx)(d.a,{title:"Chat | Minimal-UI",children:Object(L.jsxs)(i.a,{maxWidth:!e&&"xl",children:[Object(L.jsx)(j.a,{heading:"Chat",links:[{name:"Dashboard",href:s.b.root},{name:"Chat"}]}),Object(L.jsxs)(r.a,{sx:{height:"72vh",display:"flex"},children:[Object(L.jsx)(on,{}),Object(L.jsx)(sn,{})]})]})})}}}]);
//# sourceMappingURL=70.81adf104.chunk.js.map
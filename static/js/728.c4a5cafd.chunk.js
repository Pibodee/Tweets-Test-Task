"use strict";(self.webpackChunktweets_test_task=self.webpackChunktweets_test_task||[]).push([[728],{614:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var r=e(433),o=e(439),i=e(824),a=e(683),p=e(791),s=e(168),c=e(444),l=e.p+"static/media/picture1.b3d9942b3f9d5dad1ff0.png",d=e.p+"static/media/picture2.74a3d0a511d2f9354195.png";var u,x,f,g,b,h,w=e.p+"static/media/Logo.e917114d7945c04c85a8946a331d28b6.svg",m=c.ZP.li(u||(u=(0,s.Z)(["\n  position: relative;\n  width: 380px;\n  height: 460px;\n  padding-top: 178px;\n  box-sizing: border-box;\n  font-weight: 500;\n  color: #ebd8ff;\n\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n\n  background-image: ",",\n    ",",\n    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);\n\n  background-size: 76px 22px, 308px 168px, 100%;\n  background-position: top 20px left 20px, top 28px left 36px, 100%;\n  background-repeat: no-repeat;\n\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: ",",\n      ",",\n      linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);\n  }\n  ::before {\n    content: '';\n    position: absolute;\n    top: 214px;\n    left: 0px;\n\n    width: 380px;\n    height: 8px;\n    background-color: #ebd8ff;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n"])),"url(".concat(w,")"),"url(".concat(l,")"),"url(".concat(w,")"),"url(".concat(d,")")),Z=c.ZP.div(x||(x=(0,s.Z)(["\n  position: relative;\n  width: 80px;\n  height: 80px;\n  overflow: hidden;\n  margin: 0 auto 28px;\n  background-color: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border-radius: 85.9232px;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n"]))),v=c.ZP.div(f||(f=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),k=c.ZP.img(g||(g=(0,s.Z)(["\n  display: block;\n  position: absolute;\n  transform: translate(4px, 4px);\n  top: 0;\n  left: 0;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border: 4px solid #ebd8ff;\n"]))),y=c.ZP.p(b||(b=(0,s.Z)(["\n  font-size: 20px;\n  line-height: 24px;\n  margin: 0;\n  display: block;\n  text-transform: uppercase;\n  color: #ebd8ff;\n  margin-bottom: 16px;\n"]))),j=c.ZP.button(h||(h=(0,s.Z)(["\n  display: block;\n  width: 196px;\n  height: 50px;\n  padding: 14px 28px;\n\n  font-family: inherit;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  color: #373737;\n  cursor: pointer;\n\n  background-color: ",";\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: none;\n\n  transition-property: scale;\n  transition-duration: 100ms;\n  :hover {\n    scale: 1.1;\n  }\n"])),(function(n){return n.isActive?"#5cd3a8":"#ebd8ff"})),S=e(861),P=e(757),C=e.n(P),L=e(243);L.Z.defaults.baseURL="https://643287aad0127730d2d4343c.mockapi.io";function _(){return(_=(0,S.Z)(C().mark((function n(t){var e;return C().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.Z.get("/contacts",{params:{page:t,limit:3}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function z(){return(z=(0,S.Z)(C().mark((function n(t){var e;return C().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.Z.put("/contacts/".concat(t.id),t);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var F,A,I,J=e.p+"static/media/Avatar_alter.4b1822e13f639c746633.jpg",N=e(184),O=function(n){var t,e=n.tweet,r=(0,p.useState)(JSON.parse(localStorage.getItem("".concat(e.id)))||!1),i=(0,o.Z)(r,2),s=i[0],c=i[1],l=(0,p.useState)(e),d=(0,o.Z)(l,2),u=d[0],x=d[1];return(0,p.useEffect)((function(){u!==e&&function(n){return z.apply(this,arguments)}(u).catch((function(n){return console.log(n)}))}),[e,u]),(0,N.jsxs)(m,{children:[(0,N.jsx)(Z,{children:(0,N.jsx)(k,{src:null!==(t=e.avatar)&&void 0!==t?t:J,alt:"avatar"})}),(0,N.jsxs)(v,{children:[(0,N.jsxs)(y,{children:[u.tweets.toLocaleString("en",{useGrouping:!0})," tweets"]}),(0,N.jsxs)(y,{children:[u.followers.toLocaleString("en",{useGrouping:!0})," followers"]}),(0,N.jsx)(j,{onClick:function(){s?(c(!1),localStorage.setItem("".concat(u.id),JSON.stringify(!s)),x((function(n){return(0,a.Z)((0,a.Z)({},n),{},{followers:n.followers-1})}))):(c(!0),x((function(n){return(0,a.Z)((0,a.Z)({},n),{},{followers:n.followers+1})})),localStorage.setItem("".concat(u.id),JSON.stringify(!s)))},isActive:s,children:s?" Following":"Follow"})]})]})},E=c.ZP.ul(F||(F=(0,s.Z)(["\nlist-style: none;\nmargin: 0 auto;\npadding: 20px 15px;\ndisplay: flex;\ngap: 15px;\nflex-wrap: wrap;\njustify-content: center;\nalign-items: center;"]))),G=function(n){var t=n.tweets;return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(E,{children:t.map((function(n){return(0,N.jsx)(O,{tweet:n},n.id)}))})})},B=e(689),H=c.ZP.div(A||(A=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-items: center;\nposition: relative;"]))),M=c.ZP.button(I||(I=(0,s.Z)(["\n  display: block;\n  width: 130px;\n  height: 40px;\n  padding: 5px 15px;\n  background-color: #ebd8ff;\n  border-radius: 5px;\n\n  font-family: inherit;\n  font-weight: 600;\n  color: #502f9d;\n  cursor: pointer;\n  transition-property: scale;\n  transition-duration: 100ms;\n  :hover {\n    scale: 1.1;\n  }\n"]))),R=function(){var n=(0,p.useState)([]),t=(0,o.Z)(n,2),e=t[0],a=t[1],s=(0,p.useState)(!1),c=(0,o.Z)(s,2),l=c[0],d=c[1],u=(0,p.useState)(1),x=(0,o.Z)(u,2),f=x[0],g=x[1],b=(0,p.useState)(!1),h=(0,o.Z)(b,2),w=h[0],m=h[1],Z=(0,B.s0)(),v=(0,B.TH)();(0,p.useEffect)((function(){d(!0),function(n){return _.apply(this,arguments)}(f).then((function(n){n.length<3?m(!1):n&&(m(!0),1===f&&a((0,r.Z)(n)),f>1&&a((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(n))})))})).catch((function(n){return console.log(n)})).finally(d(!1))}),[f]);return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(H,{children:[(0,N.jsx)(M,{type:"button",onClick:function(){var n,t;Z(null!==(n=null===(t=v.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/")},children:"< Back"}),e&&(0,N.jsx)(G,{tweets:e}),w&&(0,N.jsx)(M,{onClick:function(){g((function(n){return n+1}))},children:"Load More"}),l&&(0,N.jsx)(i.a,{})]})})}}}]);
//# sourceMappingURL=728.c4a5cafd.chunk.js.map
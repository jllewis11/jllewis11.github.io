"use strict";(self.webpackChunkone_portfolio=self.webpackChunkone_portfolio||[]).push([[379],{1379:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(9439),i=n(2791),o=n(1674),r=n(9738),s=n(6145),c=n(9774),u=n(3827),d=n(184),l=function(){return(0,d.jsx)(c.$,{size:"xl",position:"absolute",left:"50%",top:"50%",ml:"calc(0px - var(--spinner-size) / 2)",mt:"calc(0px - var(--spinner-size))"})},h=(0,i.forwardRef)((function(e,t){var n=e.children;return(0,d.jsx)(u.xu,{ref:t,className:"panda-voxel",m:"auto",mt:["-20px","-60px","-120px"],mb:["-40px","-140px","-200px"],w:[280,480,640],h:[280,480,640],position:"relative",children:n})}));var f=function(){var e=(0,i.useRef)(),t=(0,i.useState)(!0),n=(0,a.Z)(t,2),c=n[0],u=n[1],f=(0,i.useState)(),p=(0,a.Z)(f,2),v=p[0],w=p[1],x=(0,i.useState)(),S=(0,a.Z)(x,2),m=(S[0],S[1]),M=(0,i.useState)(new o.Pa4(-.5,1.2,0)),z=(0,a.Z)(M,1)[0],P=(0,i.useState)(new o.Pa4(20*Math.sin(.2*Math.PI),10,20*Math.cos(.2*Math.PI))),g=(0,a.Z)(P,1)[0],k=(0,i.useState)(new o.xsS),E=(0,a.Z)(k,1)[0],Z=(0,i.useState)(),b=(0,a.Z)(Z,2),C=(b[0],b[1]),R=(0,i.useCallback)((function(){var t=e.current;if(t&&v){var n=t.clientWidth,a=t.clientHeight;v.setSize(n,a)}}),[v]);return(0,i.useEffect)((function(){var t=e.current;if(t&&!v){var n=t.clientWidth,a=t.clientHeight,i=new o.CP7({antialias:!0,alpha:!0});i.setPixelRatio(window.devicePixelRatio),i.setSize(n,a),i.outputEncoding=o.knz,t.appendChild(i.domElement),w(i);var c=.005*a+4.8,d=new o.iKG(-c,c,c,-c,.01,5e4);d.position.copy(g),d.lookAt(z),m(d);var l=new o.Mig(13421772,1);E.add(l);var h=new r.z(d,i.domElement);h.autoRotate=!0,h.target=z,C(h),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{receiveShadow:!0,castShadow:!0},a=n.receiveShadow,i=n.castShadow;return new Promise((function(n,o){(new s.E).load(t,(function(t){var o=t.scene;o.name="dog",o.position.y=0,o.position.x=0,o.receiveShadow=a,o.castShadow=i,e.add(o),o.traverse((function(e){e.isMesh&&(e.castShadow=i,e.receiveShadow=a)})),n(o)}),void 0,(function(e){o(e)}))}))}(E,"../src/assets/Panda.glb",{receiveShadow:!1,castShadow:!1}).then((function(){x(),u(!1)}));var f=null,p=0,x=function e(){if(f=requestAnimationFrame(e),(p=p<=100?p+1:p)<=100){var t=g,n=20*(a=p/120,-Math.sqrt(1-Math.pow(a-1,4))*Math.PI);d.position.y=10,d.position.x=t.x*Math.cos(n)+t.z*Math.sin(n),d.position.z=t.z*Math.cos(n)-t.x*Math.sin(n),d.lookAt(z)}else h.update();var a;i.render(E,d)};return function(){console.log("unmount"),cancelAnimationFrame(f),i.dispose()}}}),[]),(0,i.useEffect)((function(){return window.addEventListener("resize",R,!1),function(){window.removeEventListener("resize",R,!1)}}),[v,R]),(0,d.jsx)(h,{ref:e,children:c&&(0,d.jsx)(l,{})})}}}]);
//# sourceMappingURL=379.a2dccf82.chunk.js.map
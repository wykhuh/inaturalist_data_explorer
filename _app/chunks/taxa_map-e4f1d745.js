import{S as et,i as tt,s as lt,e as y,t as ie,c as E,a as B,g as fe,d as p,b as I,f as S,F as k,X as ot,J as rt,j as D,l as N,O as Ve,v as R,w as F,N as Ye,x as q,h as je,p as b,n as v,A as W,W as nt,u as st,m as he,o as ge,a5 as at,a0 as De,k as X,L as Me}from"./vendor-35134e52.js";import{a as it}from"./index-4cf94f11.js";import{i as Ne,r as ft,e as ct,s as ut,c as mt}from"./mapUtils-e9636914.js";import{s as pt,b as _t,u as ht,c as gt,d as dt,e as bt,i as kt,m as we}from"./dataUtils-977db69d.js";import{t as vt,M as St,e as Ct,b as Mt,g as Ze,h as Ue,i as He}from"./bar_chart-06d6f597.js";import{M as Tt,a as Lt,b as Ot,S as wt,c as yt,R as Et}from"./map_toggle_marker_type_button-8607250c.js";import{C as Ae}from"./CircleMarker-295969fc.js";import"./formatUtils-b852786f.js";import"./constants-3d7024b8.js";function Pe(t,o,r){const a=t.slice();return a[60]=o[r][0],a[0]=o[r][1],a}function ze(t,o,r){const a=t.slice();return a[52]=o[r],a}function Je(t,o,r){const a=t.slice();return a[55]=o[r][0],a[0]=o[r][1],a}function Re(t,o,r){const a=t.slice();return a[52]=o[r],a}function Fe(t,o,r){const a=t.slice();return a[52]=o[r],a}function qe(t){let o,r,a,e,i,l;return{c(){o=y("span"),r=ie("*"),this.h()},l(s){o=E(s,"SPAN",{class:!0,title:!0});var n=B(o);r=fe(n,"*"),n.forEach(p),this.h()},h(){I(o,"class","text-red-600"),I(o,"title",a="Since there are over "+Ee+" observations on the map, the map uses clustered markers.")},m(s,n){S(s,o,n),k(o,r),i||(l=ot(e=vt.call(null,o)),i=!0)},p:rt,d(s){s&&p(o),i=!1,l()}}}function It(t){let o,r,a=[...t[8]],e=[];for(let l=0;l<a.length;l+=1)e[l]=Xe(Pe(t,a,l));const i=l=>v(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();o=X()},l(l){for(let s=0;s<e.length;s+=1)e[s].l(l);o=X()},m(l,s){for(let n=0;n<e.length;n+=1)e[n].m(l,s);S(l,o,s),r=!0},p(l,s){if(s[0]&268448002){a=[...l[8]];let n;for(n=0;n<a.length;n+=1){const u=Pe(l,a,n);e[n]?(e[n].p(u,s),b(e[n],1)):(e[n]=Xe(u),e[n].c(),b(e[n],1),e[n].m(o.parentNode,o))}for(he(),n=a.length;n<e.length;n+=1)i(n);ge()}},i(l){if(!r){for(let s=0;s<a.length;s+=1)b(e[s]);r=!0}},o(l){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)v(e[s]);r=!1},d(l){Me(e,l),l&&p(o)}}}function jt(t){let o,r,a=[...t[8]],e=[];for(let l=0;l<a.length;l+=1)e[l]=Ke(Je(t,a,l));const i=l=>v(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();o=X()},l(l){for(let s=0;s<e.length;s+=1)e[s].l(l);o=X()},m(l,s){for(let n=0;n<e.length;n+=1)e[n].m(l,s);S(l,o,s),r=!0},p(l,s){if(s[0]&268435714){a=[...l[8]];let n;for(n=0;n<a.length;n+=1){const u=Je(l,a,n);e[n]?(e[n].p(u,s),b(e[n],1)):(e[n]=Ke(u),e[n].c(),b(e[n],1),e[n].m(o.parentNode,o))}for(he(),n=a.length;n<e.length;n+=1)i(n);ge()}},i(l){if(!r){for(let s=0;s<a.length;s+=1)b(e[s]);r=!0}},o(l){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)v(e[s]);r=!1},d(l){Me(e,l),l&&p(o)}}}function Dt(t){let o,r,a=t[8],e=[];for(let l=0;l<a.length;l+=1)e[l]=Qe(Fe(t,a,l));const i=l=>v(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();o=X()},l(l){for(let s=0;s<e.length;s+=1)e[s].l(l);o=X()},m(l,s){for(let n=0;n<e.length;n+=1)e[n].m(l,s);S(l,o,s),r=!0},p(l,s){if(s[0]&268435714){a=l[8];let n;for(n=0;n<a.length;n+=1){const u=Fe(l,a,n);e[n]?(e[n].p(u,s),b(e[n],1)):(e[n]=Qe(u),e[n].c(),b(e[n],1),e[n].m(o.parentNode,o))}for(he(),n=a.length;n<e.length;n+=1)i(n);ge()}},i(l){if(!r){for(let s=0;s<a.length;s+=1)b(e[s]);r=!0}},o(l){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)v(e[s]);r=!1},d(l){Me(e,l),l&&p(o)}}}function Nt(t){let o,r;return o=new yt({props:{items:t[8]}}),{c(){R(o.$$.fragment)},l(a){F(o.$$.fragment,a)},m(a,e){q(o,a,e),r=!0},p(a,e){const i={};e[0]&256&&(i.items=a[8]),o.$set(i)},i(a){r||(b(o.$$.fragment,a),r=!0)},o(a){v(o.$$.fragment,a),r=!1},d(a){W(o,a)}}}function At(t){let o,r;function a(...e){return t[40](t[52],...e)}return o=new Et({props:{events:["click"],latLngBounds:[[t[52].latitude-t[12],t[52].longitude-t[13]],[t[52].latitude+t[12],t[52].longitude+t[13]]],color:t[1].colorSchemeMonth[t[60]]||t[1].defaultColor,fillColor:t[1].colorSchemeMonth[t[60]]||t[1].defaultColor}}),o.$on("click",a),{c(){R(o.$$.fragment)},l(e){F(o.$$.fragment,e)},m(e,i){q(o,e,i),r=!0},p(e,i){t=e;const l={};i[0]&12544&&(l.latLngBounds=[[t[52].latitude-t[12],t[52].longitude-t[13]],[t[52].latitude+t[12],t[52].longitude+t[13]]]),i[0]&258&&(l.color=t[1].colorSchemeMonth[t[60]]||t[1].defaultColor),i[0]&258&&(l.fillColor=t[1].colorSchemeMonth[t[60]]||t[1].defaultColor),o.$set(l)},i(e){r||(b(o.$$.fragment,e),r=!0)},o(e){v(o.$$.fragment,e),r=!1},d(e){W(o,e)}}}function Bt(t){let o,r;function a(...e){return t[39](t[52],...e)}return o=new Ae({props:{events:["click"],latLng:[t[52].latitude,t[52].longitude],radius:Be,color:t[1].colorSchemeMonth[t[60]]||t[1].defaultColor,fillColor:t[1].colorSchemeMonth[t[60]]||t[1].defaultColor}}),o.$on("click",a),{c(){R(o.$$.fragment)},l(e){F(o.$$.fragment,e)},m(e,i){q(o,e,i),r=!0},p(e,i){t=e;const l={};i[0]&256&&(l.latLng=[t[52].latitude,t[52].longitude]),i[0]&258&&(l.color=t[1].colorSchemeMonth[t[60]]||t[1].defaultColor),i[0]&258&&(l.fillColor=t[1].colorSchemeMonth[t[60]]||t[1].defaultColor),o.$set(l)},i(e){r||(b(o.$$.fragment,e),r=!0)},o(e){v(o.$$.fragment,e),r=!1},d(e){W(o,e)}}}function We(t){let o,r,a,e,i;const l=[Bt,At],s=[];function n(u,h){return h[0]&256&&(o=null),o==null&&(o=!!mt.includes(u[52].month+1)),o?0:1}return r=n(t,[-1,-1,-1]),a=s[r]=l[r](t),{c(){a.c(),e=X()},l(u){a.l(u),e=X()},m(u,h){s[r].m(u,h),S(u,e,h),i=!0},p(u,h){let d=r;r=n(u,h),r===d?s[r].p(u,h):(he(),v(s[d],1,1,()=>{s[d]=null}),ge(),a=s[r],a?a.p(u,h):(a=s[r]=l[r](u),a.c()),b(a,1),a.m(e.parentNode,e))},i(u){i||(b(a),i=!0)},o(u){v(a),i=!1},d(u){s[r].d(u),u&&p(e)}}}function Xe(t){let o,r,a=t[0],e=[];for(let l=0;l<a.length;l+=1)e[l]=We(ze(t,a,l));const i=l=>v(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();o=X()},l(l){for(let s=0;s<e.length;s+=1)e[s].l(l);o=X()},m(l,s){for(let n=0;n<e.length;n+=1)e[n].m(l,s);S(l,o,s),r=!0},p(l,s){if(s[0]&268448002){a=l[0];let n;for(n=0;n<a.length;n+=1){const u=ze(l,a,n);e[n]?(e[n].p(u,s),b(e[n],1)):(e[n]=We(u),e[n].c(),b(e[n],1),e[n].m(o.parentNode,o))}for(he(),n=a.length;n<e.length;n+=1)i(n);ge()}},i(l){if(!r){for(let s=0;s<a.length;s+=1)b(e[s]);r=!0}},o(l){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)v(e[s]);r=!1},d(l){Me(e,l),l&&p(o)}}}function Ge(t){let o,r;function a(...e){return t[38](t[52],...e)}return o=new Ae({props:{events:["click"],latLng:[t[52].latitude,t[52].longitude],radius:Be,color:t[1].colorSchemeYear[we(t[55],t[1].colorSchemeYear.length)]||t[1].defaultColor,fillColor:t[1].colorSchemeYear[we(t[55],t[1].colorSchemeYear.length)]||t[1].defaultColor}}),o.$on("click",a),{c(){R(o.$$.fragment)},l(e){F(o.$$.fragment,e)},m(e,i){q(o,e,i),r=!0},p(e,i){t=e;const l={};i[0]&256&&(l.latLng=[t[52].latitude,t[52].longitude]),i[0]&258&&(l.color=t[1].colorSchemeYear[we(t[55],t[1].colorSchemeYear.length)]||t[1].defaultColor),i[0]&258&&(l.fillColor=t[1].colorSchemeYear[we(t[55],t[1].colorSchemeYear.length)]||t[1].defaultColor),o.$set(l)},i(e){r||(b(o.$$.fragment,e),r=!0)},o(e){v(o.$$.fragment,e),r=!1},d(e){W(o,e)}}}function Ke(t){let o,r,a=t[0],e=[];for(let l=0;l<a.length;l+=1)e[l]=Ge(Re(t,a,l));const i=l=>v(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();o=X()},l(l){for(let s=0;s<e.length;s+=1)e[s].l(l);o=X()},m(l,s){for(let n=0;n<e.length;n+=1)e[n].m(l,s);S(l,o,s),r=!0},p(l,s){if(s[0]&268435714){a=l[0];let n;for(n=0;n<a.length;n+=1){const u=Re(l,a,n);e[n]?(e[n].p(u,s),b(e[n],1)):(e[n]=Ge(u),e[n].c(),b(e[n],1),e[n].m(o.parentNode,o))}for(he(),n=a.length;n<e.length;n+=1)i(n);ge()}},i(l){if(!r){for(let s=0;s<a.length;s+=1)b(e[s]);r=!0}},o(l){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)v(e[s]);r=!1},d(l){Me(e,l),l&&p(o)}}}function Qe(t){let o,r;function a(...e){return t[37](t[52],...e)}return o=new Ae({props:{events:["click"],latLng:[t[52].latitude,t[52].longitude],radius:Be,color:t[1].defaultColor,fillColor:t[1].defaultColor}}),o.$on("click",a),{c(){R(o.$$.fragment)},l(e){F(o.$$.fragment,e)},m(e,i){q(o,e,i),r=!0},p(e,i){t=e;const l={};i[0]&256&&(l.latLng=[t[52].latitude,t[52].longitude]),i[0]&2&&(l.color=t[1].defaultColor),i[0]&2&&(l.fillColor=t[1].defaultColor),o.$set(l)},i(e){r||(b(o.$$.fragment,e),r=!0)},o(e){v(o.$$.fragment,e),r=!1},d(e){W(o,e)}}}function Vt(t){let o,r,a,e,i,l,s,n,u,h,d,Z;o=new Tt({props:{country:t[2].country,project:t[2]}});const H=[Nt,Dt,jt,It],V=[];function $(m,g){return g[0]&256&&(a=null),m[15]?0:(a==null&&(a=!!Array.isArray(m[8])),a?1:m[1].observationsTimeSpan==="year"?2:3)}e=$(t,[-1,-1,-1]),i=V[e]=H[e](t),s=new Lt({props:{map:t[4],coordinates:t[6]}});let j={coordinates:t[6],useMarkerCluster:t[15],observationsOnMapCount:t[18],clusterLimit:Ee,userSelectedMarkerType:t[16],zoomLevel:t[11],maxZoom:t[19]};u=new Ot({props:j}),t[41](u),u.$on("changeMarkerModeOnClick",t[24]),u.$on("changeMarkerModeAutomatic",t[25]);let P={position:"bottomleft",options:ut};return d=new wt({props:P}),t[42](d),{c(){R(o.$$.fragment),r=D(),i.c(),l=D(),R(s.$$.fragment),n=D(),R(u.$$.fragment),h=D(),R(d.$$.fragment)},l(m){F(o.$$.fragment,m),r=N(m),i.l(m),l=N(m),F(s.$$.fragment,m),n=N(m),F(u.$$.fragment,m),h=N(m),F(d.$$.fragment,m)},m(m,g){q(o,m,g),S(m,r,g),V[e].m(m,g),S(m,l,g),q(s,m,g),S(m,n,g),q(u,m,g),S(m,h,g),q(d,m,g),Z=!0},p(m,g){const A={};g[0]&4&&(A.country=m[2].country),g[0]&4&&(A.project=m[2]),o.$set(A);let z=e;e=$(m,g),e===z?V[e].p(m,g):(he(),v(V[z],1,1,()=>{V[z]=null}),ge(),i=V[e],i?i.p(m,g):(i=V[e]=H[e](m),i.c()),b(i,1),i.m(l.parentNode,l));const U={};g[0]&16&&(U.map=m[4]),g[0]&64&&(U.coordinates=m[6]),s.$set(U);const w={};g[0]&64&&(w.coordinates=m[6]),g[0]&32768&&(w.useMarkerCluster=m[15]),g[0]&262144&&(w.observationsOnMapCount=m[18]),g[0]&65536&&(w.userSelectedMarkerType=m[16]),g[0]&2048&&(w.zoomLevel=m[11]),g[0]&524288&&(w.maxZoom=m[19]),u.$set(w);const Y={};d.$set(Y)},i(m){Z||(b(o.$$.fragment,m),b(i),b(s.$$.fragment,m),b(u.$$.fragment,m),b(d.$$.fragment,m),Z=!0)},o(m){v(o.$$.fragment,m),v(i),v(s.$$.fragment,m),v(u.$$.fragment,m),v(d.$$.fragment,m),Z=!1},d(m){W(o,m),m&&p(r),V[e].d(m),m&&p(l),W(s,m),m&&p(n),t[41](null),W(u,m),m&&p(h),t[42](null),W(d,m)}}}function $e(t){let o,r,a,e,i,l,s;return{c(){o=y("label"),r=y("input"),a=D(),e=y("span"),i=ie("Show species list"),this.h()},l(n){o=E(n,"LABEL",{class:!0});var u=B(o);r=E(u,"INPUT",{type:!0}),a=N(u),e=E(u,"SPAN",{});var h=B(e);i=fe(h,"Show species list"),h.forEach(p),u.forEach(p),this.h()},h(){I(r,"type","checkbox"),I(o,"class","cursor-pointer mt-2 inline-block")},m(n,u){S(n,o,u),k(o,r),r.checked=t[22],k(o,a),k(o,e),k(e,i),l||(s=Ve(r,"change",t[45]),l=!0)},p(n,u){u[0]&4194304&&(r.checked=n[22])},d(n){n&&p(o),l=!1,s()}}}function Yt(t){let o,r,a,e,i,l,s,n,u,h,d,Z,H,V,$,j,P,m,g,A,z,U,w,Y,ce,M,x,ue,me,de,_e,ee,G,pe,K,te,le,be,Q,oe,Se,Te,T=t[18]>=Ee&&qe(),Ie={options:t[1],$$slots:{default:[Vt]},$$scope:{ctx:t}};Y=new it({props:Ie}),t[43](Y);let C=t[23]&&$e(t);return K=new St({props:{showSpeciesList:t[22],speciesList:t[9]}}),le=new Ct({props:{mapOptions:t[1],selectTimeSpanHandler:t[27],groupedObservations:t[7],toggleTimeSpans:t[26],timeSpanHistory:t[5],activeTaxaCount:1}}),{c(){o=y("div"),r=y("div"),a=y("div"),e=ie(`Observations
      `),T&&T.c(),i=D(),l=y("div"),s=ie(t[18]),n=D(),u=y("div"),h=y("div"),d=ie("Species"),Z=D(),H=y("div"),V=ie(t[20]),$=D(),j=y("div"),P=y("div"),m=ie("Observers"),g=D(),A=y("div"),z=ie(t[21]),U=D(),w=y("div"),R(Y.$$.fragment),ce=D(),M=y("label"),x=y("input"),ue=D(),me=y("span"),de=ie("Update charts as map changes"),_e=D(),C&&C.c(),ee=D(),G=y("br"),pe=D(),R(K.$$.fragment),te=D(),R(le.$$.fragment),be=D(),Q=y("div"),this.h()},l(f){o=E(f,"DIV",{class:!0});var _=B(o);r=E(_,"DIV",{class:!0});var re=B(r);a=E(re,"DIV",{class:!0});var se=B(a);e=fe(se,`Observations
      `),T&&T.l(se),se.forEach(p),i=N(re),l=E(re,"DIV",{class:!0});var ae=B(l);s=fe(ae,t[18]),ae.forEach(p),re.forEach(p),n=N(_),u=E(_,"DIV",{class:!0});var ke=B(u);h=E(ke,"DIV",{class:!0});var Le=B(h);d=fe(Le,"Species"),Le.forEach(p),Z=N(ke),H=E(ke,"DIV",{class:!0});var Oe=B(H);V=fe(Oe,t[20]),Oe.forEach(p),ke.forEach(p),$=N(_),j=E(_,"DIV",{class:!0});var ve=B(j);P=E(ve,"DIV",{class:!0});var c=B(P);m=fe(c,"Observers"),c.forEach(p),g=N(ve),A=E(ve,"DIV",{class:!0});var O=B(A);z=fe(O,t[21]),O.forEach(p),ve.forEach(p),_.forEach(p),U=N(f),w=E(f,"DIV",{id:!0,style:!0});var J=B(w);F(Y.$$.fragment,J),J.forEach(p),ce=N(f),M=E(f,"LABEL",{class:!0});var ne=B(M);x=E(ne,"INPUT",{type:!0}),ue=N(ne),me=E(ne,"SPAN",{});var Ce=B(me);de=fe(Ce,"Update charts as map changes"),Ce.forEach(p),ne.forEach(p),_e=N(f),C&&C.l(f),ee=N(f),G=E(f,"BR",{}),pe=N(f),F(K.$$.fragment,f),te=N(f),F(le.$$.fragment,f),be=N(f),Q=E(f,"DIV",{id:!0,class:!0}),B(Q).forEach(p),this.h()},h(){I(a,"class","stat-title svelte-oe1iet"),I(l,"class","stat-value svelte-oe1iet"),I(r,"class","stat place-items-center place-content-center svelte-oe1iet"),I(h,"class","stat-title svelte-oe1iet"),I(H,"class","stat-value svelte-oe1iet"),I(u,"class","stat place-items-center place-content-center svelte-oe1iet"),I(P,"class","stat-title svelte-oe1iet"),I(A,"class","stat-value svelte-oe1iet"),I(j,"class","stat place-items-center place-content-center svelte-oe1iet"),I(o,"class","w-full rounded-none border stats"),I(w,"id","taxa-map"),Ye(w,"width","100%"),Ye(w,"height","400px"),I(x,"type","checkbox"),I(M,"class","cursor-pointer mt-2 mr-3 inline-block"),I(Q,"id","observations-chart"),I(Q,"class","w-full mt-4")},m(f,_){S(f,o,_),k(o,r),k(r,a),k(a,e),T&&T.m(a,null),k(r,i),k(r,l),k(l,s),k(o,n),k(o,u),k(u,h),k(h,d),k(u,Z),k(u,H),k(H,V),k(o,$),k(o,j),k(j,P),k(P,m),k(j,g),k(j,A),k(A,z),S(f,U,_),S(f,w,_),q(Y,w,null),S(f,ce,_),S(f,M,_),k(M,x),x.checked=t[10],k(M,ue),k(M,me),k(me,de),S(f,_e,_),C&&C.m(f,_),S(f,ee,_),S(f,G,_),S(f,pe,_),q(K,f,_),S(f,te,_),q(le,f,_),S(f,be,_),S(f,Q,_),oe=!0,Se||(Te=Ve(x,"change",t[44]),Se=!0)},p(f,_){f[18]>=Ee?T?T.p(f,_):(T=qe(),T.c(),T.m(a,null)):T&&(T.d(1),T=null),(!oe||_[0]&262144)&&je(s,f[18]),(!oe||_[0]&1048576)&&je(V,f[20]),(!oe||_[0]&2097152)&&je(z,f[21]);const re={};_[0]&2&&(re.options=f[1]),_[0]&1046870|_[2]&8&&(re.$$scope={dirty:_,ctx:f}),Y.$set(re),_[0]&1024&&(x.checked=f[10]),f[23]?C?C.p(f,_):(C=$e(f),C.c(),C.m(ee.parentNode,ee)):C&&(C.d(1),C=null);const se={};_[0]&4194304&&(se.showSpeciesList=f[22]),_[0]&512&&(se.speciesList=f[9]),K.$set(se);const ae={};_[0]&2&&(ae.mapOptions=f[1]),_[0]&128&&(ae.groupedObservations=f[7]),_[0]&32&&(ae.timeSpanHistory=f[5]),le.$set(ae)},i(f){oe||(b(Y.$$.fragment,f),b(K.$$.fragment,f),b(le.$$.fragment,f),oe=!0)},o(f){v(Y.$$.fragment,f),v(K.$$.fragment,f),v(le.$$.fragment,f),oe=!1},d(f){f&&p(o),T&&T.d(),f&&p(U),f&&p(w),t[43](null),W(Y),f&&p(ce),f&&p(M),f&&p(_e),C&&C.d(f),f&&p(ee),f&&p(G),f&&p(pe),W(K,f),f&&p(te),W(le,f),f&&p(be),f&&p(Q),Se=!1,Te()}}}let Be=8,Zt="oldest",ye=.25,Ee=1e3;function Ut(t,o,r){let{observations:a}=o,{mapOptions:e}=o,{mapCenter:i}=o,{project:l}=o,{taxon:s}=o,{limitTaxaToSpecies:n=!1}=o,u,h,d={},Z=0,H=1,V=1,$=[],j=[],P=[];const m=nt();let g=!1,A=JSON.parse(JSON.stringify(Mt)),z,U=!1,w="markers",Y,ce=[],M=[],x=0,ue=!1,me=0,de=0,_e=0,ee=!1,G=[],pe=[],K=!1,te=!1;function le(c){r(15,U=c.detail.useMarkerCluster),r(16,w=c.detail.userSelectedMarkerType),r(8,M=Q(M))}function be(c){r(15,U=c.detail.useMarkerCluster),r(8,M=Q(M))}function Q(c){let O;if(Array.isArray(c))O=c.filter(J=>Ne(J,h,L));else if(U){let J=[];c.forEach((ne,Ce)=>{ne=ne.filter(xe=>Ne(xe,h,L)),J=J.concat(ne)}),O=J}else O=new Map,c.forEach((J,ne)=>{J=J.filter(Ce=>Ne(Ce,h,L)),O.set(ne,J)});return O}function oe(c){r(12,H=ft(c)),r(13,V=ct(c))}function Se(c){r(5,d=ht(c,d))}function Te(){r(5,d={})}function T(c,O){m("markerClick",{observation_id:O.id,latlng:c.detail.latlng})}function Ie(c){c.length>0&&h.fitBounds(c),m("doneLoading")}function C(c){at("#observations-chart",c,{actions:!1}).then(O=>{}).catch(console.warn)}st(()=>{r(33,g=!0),r(4,h=u.getMap()),r(11,Z=h.getZoom()),r(19,me=h.getMaxZoom()),oe(Z),h.on("zoomend",function(){r(11,Z=h.getZoom()),r(35,ue=!0),oe(Z)}),h.on("moveend",function(){r(35,ue=!0)})});const f=(c,O)=>T(O,c),_=(c,O)=>T(O,c),re=(c,O)=>T(O,c),se=(c,O)=>T(O,c);function ae(c){De[c?"unshift":"push"](()=>{Y=c,r(17,Y)})}function ke(c){De[c?"unshift":"push"](()=>{z=c,r(14,z)})}function Le(c){De[c?"unshift":"push"](()=>{u=c,r(3,u)})}function Oe(){te=this.checked,r(10,te)}function ve(){ee=this.checked,r(22,ee)}return t.$$set=c=>{"observations"in c&&r(0,a=c.observations),"mapOptions"in c&&r(1,e=c.mapOptions),"mapCenter"in c&&r(29,i=c.mapCenter),"project"in c&&r(2,l=c.project),"taxon"in c&&r(30,s=c.taxon),"limitTaxaToSpecies"in c&&r(31,n=c.limitTaxaToSpecies)},t.$$.update=()=>{if(t.$$.dirty[0]&1&&(r(0,a=a.filter(c=>c.latitude&&c.longitude)),r(6,$=a.map(c=>[c.latitude,c.longitude])),r(5,d={})),t.$$.dirty[0]&163|t.$$.dirty[1]&2&&(r(32,P=pt(a,Zt,e.observationsTimeSpan)),r(7,j=_t(P,e.observationsTimeSpan)),e.observationsTimeSpan!=="all"&&Object.keys(d).length===0&&j.forEach((c,O)=>r(5,d[O]=!0,d))),t.$$.dirty[0]&72&&u&&Ie($),t.$$.dirty[0]&1073742760|t.$$.dirty[1]&57&&u&&(r(34,ce=gt(j,d)),r(8,M=Q(ce)),r(18,x=dt(M)),r(9,G=bt(M,n)),r(20,de=G.length),r(36,pe=kt(M,n)),r(21,_e=pe.length),r(23,K=G.length>1||G.length==1&&G[0].taxon_id!==s.taxon_id),r(35,ue=!1)),t.$$.dirty[0]&1190|t.$$.dirty[1]&4&&g&&!te){if(e.observationsTimeSpan==="month"){let c=Ze(A,ye,d,e,j,l);C(c)}else if(e.observationsTimeSpan==="year"){let c=Ue(A,ye,d,e,j,l);C(c)}else if(e.observationsTimeSpan==="all"){let c=He(A,e,j);C(c)}}if(t.$$.dirty[0]&1318|t.$$.dirty[1]&4&&g&&te){if(e.observationsTimeSpan==="month"){let c=Ze(A,ye,d,e,M,l);C(c)}else if(e.observationsTimeSpan==="year"){let c=Ue(A,ye,d,e,M,l);C(c)}else if(e.observationsTimeSpan==="all"){let c=He(A,e,M);C(c)}}t.$$.dirty[0]&536870936&&u&&i&&i.longitude&&(document.getElementById("taxa-map").scrollIntoView(),h.flyTo([i.latitude,i.longitude],h.getMaxZoom()-1),r(29,i={}))},[a,e,l,u,h,d,$,j,M,G,te,Z,H,V,z,U,w,Y,x,me,de,_e,ee,K,le,be,Se,Te,T,i,s,n,P,g,ce,ue,pe,f,_,re,se,ae,ke,Le,Oe,ve]}class Gt extends et{constructor(o){super();tt(this,o,Ut,Yt,lt,{observations:0,mapOptions:1,mapCenter:29,project:2,taxon:30,limitTaxaToSpecies:31},null,[-1,-1,-1])}}export{Gt as default};

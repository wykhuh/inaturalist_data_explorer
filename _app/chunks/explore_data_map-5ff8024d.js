import{S as Me,i as de,s as Ce,e as ye,v as I,c as Oe,a as we,w as N,d as y,N as Y,f as w,x as z,O as Le,p as m,n as g,A,W as Se,u as je,j as W,k as H,l as q,m as U,o as Z,L as J,a0 as $}from"./vendor-358d5d08.js";import{L as Te}from"./index-f3ef0f46.js";import{s as Ie,i as Q}from"./mapUtils-e9636914.js";import{c as Ne,d as ze,e as Ae,h as Ee}from"./dataUtils-977db69d.js";import{M as He,a as Be,b as Ue,S as Ze,c as Re}from"./map_toggle_marker_type_button-de3816fe.js";import{T as x}from"./TileLayer-13f5fc87.js";import{C as ee}from"./CircleMarker-8dfa560c.js";import"./formatUtils-b852786f.js";import"./constants-3d7024b8.js";function te(a,l,r){const n=a.slice();return n[36]=l[r][0],n[37]=l[r][1],n}function le(a,l,r){const n=a.slice();return n[33]=l[r],n}function re(a,l,r){const n=a.slice();return n[33]=l[r],n}function ne(a,l,r){const n=a.slice();return n[42]=l[r],n}function oe(a){let l,r;return l=new x({props:{zIndex:201,url:a[42].InatTaxonRangeUrl}}),{c(){I(l.$$.fragment)},l(n){N(l.$$.fragment,n)},m(n,e){z(l,n,e),r=!0},p(n,e){const f={};e[0]&2&&(f.url=n[42].InatTaxonRangeUrl),l.$set(f)},i(n){r||(m(l.$$.fragment,n),r=!0)},o(n){g(l.$$.fragment,n),r=!1},d(n){A(l,n)}}}function ie(a){let l,r;return l=new x({props:{zIndex:201,url:a[42].InatGridUrl}}),{c(){I(l.$$.fragment)},l(n){N(l.$$.fragment,n)},m(n,e){z(l,n,e),r=!0},p(n,e){const f={};e[0]&2&&(f.url=n[42].InatGridUrl),l.$set(f)},i(n){r||(m(l.$$.fragment,n),r=!0)},o(n){g(l.$$.fragment,n),r=!1},d(n){A(l,n)}}}function se(a){let l,r,n,e=a[42].showInatTaxonRange&&oe(a),f=a[42].showInatGrid&&ie(a);return{c(){e&&e.c(),l=W(),f&&f.c(),r=H()},l(t){e&&e.l(t),l=q(t),f&&f.l(t),r=H()},m(t,o){e&&e.m(t,o),w(t,l,o),f&&f.m(t,o),w(t,r,o),n=!0},p(t,o){t[42].showInatTaxonRange?e?(e.p(t,o),o[0]&2&&m(e,1)):(e=oe(t),e.c(),m(e,1),e.m(l.parentNode,l)):e&&(U(),g(e,1,1,()=>{e=null}),Z()),t[42].showInatGrid?f?(f.p(t,o),o[0]&2&&m(f,1)):(f=ie(t),f.c(),m(f,1),f.m(r.parentNode,r)):f&&(U(),g(f,1,1,()=>{f=null}),Z())},i(t){n||(m(e),m(f),n=!0)},o(t){g(e),g(f),n=!1},d(t){e&&e.d(t),t&&y(l),f&&f.d(t),t&&y(r)}}}function De(a){let l,r,n=[...a[6]],e=[];for(let t=0;t<n.length;t+=1)e[t]=fe(te(a,n,t));const f=t=>g(e[t],1,1,()=>{e[t]=null});return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=H()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);l=H()},m(t,o){for(let s=0;s<e.length;s+=1)e[s].m(t,o);w(t,l,o),r=!0},p(t,o){if(o[0]&131136){n=[...t[6]];let s;for(s=0;s<n.length;s+=1){const p=te(t,n,s);e[s]?(e[s].p(p,o),m(e[s],1)):(e[s]=fe(p),e[s].c(),m(e[s],1),e[s].m(l.parentNode,l))}for(U(),s=n.length;s<e.length;s+=1)f(s);Z()}},i(t){if(!r){for(let o=0;o<n.length;o+=1)m(e[o]);r=!0}},o(t){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)g(e[o]);r=!1},d(t){J(e,t),t&&y(l)}}}function Ge(a){let l,r,n=a[6],e=[];for(let t=0;t<n.length;t+=1)e[t]=ue(re(a,n,t));const f=t=>g(e[t],1,1,()=>{e[t]=null});return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=H()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);l=H()},m(t,o){for(let s=0;s<e.length;s+=1)e[s].m(t,o);w(t,l,o),r=!0},p(t,o){if(o[0]&131136){n=t[6];let s;for(s=0;s<n.length;s+=1){const p=re(t,n,s);e[s]?(e[s].p(p,o),m(e[s],1)):(e[s]=ue(p),e[s].c(),m(e[s],1),e[s].m(l.parentNode,l))}for(U(),s=n.length;s<e.length;s+=1)f(s);Z()}},i(t){if(!r){for(let o=0;o<n.length;o+=1)m(e[o]);r=!0}},o(t){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)g(e[o]);r=!1},d(t){J(e,t),t&&y(l)}}}function ve(a){let l,r;return l=new Re({props:{items:a[6]}}),{c(){I(l.$$.fragment)},l(n){N(l.$$.fragment,n)},m(n,e){z(l,n,e),r=!0},p(n,e){const f={};e[0]&64&&(f.items=n[6]),l.$set(f)},i(n){r||(m(l.$$.fragment,n),r=!0)},o(n){g(l.$$.fragment,n),r=!1},d(n){A(l,n)}}}function ae(a){let l,r;function n(...e){return a[27](a[33],...e)}return l=new ee({props:{events:["click"],latLng:[a[33].latitude,a[33].longitude],radius:ce,color:a[33].color,fillColor:a[33].fillColor}}),l.$on("click",n),{c(){I(l.$$.fragment)},l(e){N(l.$$.fragment,e)},m(e,f){z(l,e,f),r=!0},p(e,f){a=e;const t={};f[0]&64&&(t.latLng=[a[33].latitude,a[33].longitude]),f[0]&64&&(t.color=a[33].color),f[0]&64&&(t.fillColor=a[33].fillColor),l.$set(t)},i(e){r||(m(l.$$.fragment,e),r=!0)},o(e){g(l.$$.fragment,e),r=!1},d(e){A(l,e)}}}function fe(a){let l,r,n=a[37],e=[];for(let t=0;t<n.length;t+=1)e[t]=ae(le(a,n,t));const f=t=>g(e[t],1,1,()=>{e[t]=null});return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=H()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);l=H()},m(t,o){for(let s=0;s<e.length;s+=1)e[s].m(t,o);w(t,l,o),r=!0},p(t,o){if(o[0]&131136){n=t[37];let s;for(s=0;s<n.length;s+=1){const p=le(t,n,s);e[s]?(e[s].p(p,o),m(e[s],1)):(e[s]=ae(p),e[s].c(),m(e[s],1),e[s].m(l.parentNode,l))}for(U(),s=n.length;s<e.length;s+=1)f(s);Z()}},i(t){if(!r){for(let o=0;o<n.length;o+=1)m(e[o]);r=!0}},o(t){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)g(e[o]);r=!1},d(t){J(e,t),t&&y(l)}}}function ue(a){let l,r;function n(...e){return a[26](a[33],...e)}return l=new ee({props:{events:["click"],latLng:[a[33].latitude,a[33].longitude],radius:ce,color:a[33].color,fillColor:a[33].fillColor}}),l.$on("click",n),{c(){I(l.$$.fragment)},l(e){N(l.$$.fragment,e)},m(e,f){z(l,e,f),r=!0},p(e,f){a=e;const t={};f[0]&64&&(t.latLng=[a[33].latitude,a[33].longitude]),f[0]&64&&(t.color=a[33].color),f[0]&64&&(t.fillColor=a[33].fillColor),l.$set(t)},i(e){r||(m(l.$$.fragment,e),r=!0)},o(e){g(l.$$.fragment,e),r=!1},d(e){A(l,e)}}}function We(a){let l,r,n,e,f,t,o,s,p,b,S,j,d;l=new He({props:{country:a[2],project:a[3]}});let h=a[1],_=[];for(let i=0;i<h.length;i+=1)_[i]=se(ne(a,h,i));const R=i=>g(_[i],1,1,()=>{_[i]=null}),P=[ve,Ge,De],O=[];function D(i,c){return c[0]&64&&(e=null),i[9]?0:(e==null&&(e=!!Array.isArray(i[6])),e?1:2)}f=D(a,[-1,-1]),t=O[f]=P[f](a),s=new Be({props:{map:a[5],coordinates:a[8]}});let V={coordinates:a[8],useMarkerCluster:a[9],observationsOnMapCount:a[7],clusterLimit:Pe,userSelectedMarkerType:a[10],zoomLevel:a[11],maxZoom:a[13]};return b=new Ue({props:V}),a[28](b),b.$on("changeMarkerModeOnClick",a[14]),b.$on("changeMarkerModeAutomatic",a[15]),j=new Ze({props:{position:"bottomleft",options:Ie}}),{c(){I(l.$$.fragment),r=W();for(let i=0;i<_.length;i+=1)_[i].c();n=W(),t.c(),o=W(),I(s.$$.fragment),p=W(),I(b.$$.fragment),S=W(),I(j.$$.fragment)},l(i){N(l.$$.fragment,i),r=q(i);for(let c=0;c<_.length;c+=1)_[c].l(i);n=q(i),t.l(i),o=q(i),N(s.$$.fragment,i),p=q(i),N(b.$$.fragment,i),S=q(i),N(j.$$.fragment,i)},m(i,c){z(l,i,c),w(i,r,c);for(let C=0;C<_.length;C+=1)_[C].m(i,c);w(i,n,c),O[f].m(i,c),w(i,o,c),z(s,i,c),w(i,p,c),z(b,i,c),w(i,S,c),z(j,i,c),d=!0},p(i,c){const C={};if(c[0]&4&&(C.country=i[2]),c[0]&8&&(C.project=i[3]),l.$set(C),c[0]&2){h=i[1];let k;for(k=0;k<h.length;k+=1){const v=ne(i,h,k);_[k]?(_[k].p(v,c),m(_[k],1)):(_[k]=se(v),_[k].c(),m(_[k],1),_[k].m(n.parentNode,n))}for(U(),k=h.length;k<_.length;k+=1)R(k);Z()}let B=f;f=D(i,c),f===B?O[f].p(i,c):(U(),g(O[B],1,1,()=>{O[B]=null}),Z(),t=O[f],t?t.p(i,c):(t=O[f]=P[f](i),t.c()),m(t,1),t.m(o.parentNode,o));const G={};c[0]&32&&(G.map=i[5]),c[0]&256&&(G.coordinates=i[8]),s.$set(G);const E={};c[0]&256&&(E.coordinates=i[8]),c[0]&512&&(E.useMarkerCluster=i[9]),c[0]&128&&(E.observationsOnMapCount=i[7]),c[0]&1024&&(E.userSelectedMarkerType=i[10]),c[0]&2048&&(E.zoomLevel=i[11]),c[0]&8192&&(E.maxZoom=i[13]),b.$set(E)},i(i){if(!d){m(l.$$.fragment,i);for(let c=0;c<h.length;c+=1)m(_[c]);m(t),m(s.$$.fragment,i),m(b.$$.fragment,i),m(j.$$.fragment,i),d=!0}},o(i){g(l.$$.fragment,i),_=_.filter(Boolean);for(let c=0;c<_.length;c+=1)g(_[c]);g(t),g(s.$$.fragment,i),g(b.$$.fragment,i),g(j.$$.fragment,i),d=!1},d(i){A(l,i),i&&y(r),J(_,i),i&&y(n),O[f].d(i),i&&y(o),A(s,i),i&&y(p),a[28](null),A(b,i),i&&y(S),A(j,i)}}}function qe(a){let l,r,n,e,f,t={options:a[0],$$slots:{default:[We]},$$scope:{ctx:a}};return r=new Te({props:t}),a[29](r),{c(){l=ye("div"),I(r.$$.fragment),this.h()},l(o){l=Oe(o,"DIV",{style:!0});var s=we(l);N(r.$$.fragment,s),s.forEach(y),this.h()},h(){Y(l,"width","100%"),Y(l,"height","70vh")},m(o,s){w(o,l,s),z(r,l,null),n=!0,e||(f=Le(window,"resize",a[16]),e=!0)},p(o,s){const p={};s[0]&1&&(p.options=o[0]),s[0]&16366|s[1]&16384&&(p.$$scope={dirty:s,ctx:o}),r.$set(p)},i(o){n||(m(r.$$.fragment,o),n=!0)},o(o){g(r.$$.fragment,o),n=!1},d(o){o&&y(l),a[29](null),A(r),e=!1,f()}}}let ce=7,Pe=1e3,me=!1;function Ve(a){let l=a.getBounds(),r=l.getEast(),n=l.getWest(),e=l.getNorth(),f=l.getSouth();var t=l.getEast()-l.getWest(),o=l.getNorth()-l.getSouth();return[[e-o*.3,r-t*.3],[f+o*.3,n+t*.3]]}function Fe(a,l,r){let{mapOptions:n}=l,{groupedObservations:e}=l,{timeSpanHistory:f}=l,{taxaHistory:t}=l,{country:o}=l,{mapCenter:s}=l,{speciesOnMapCount:p}=l,{observersOnMapCount:b}=l,{speciesList:S}=l,{project:j}=l,d,h,_=[],R=!1,P="markers",O,D,V=[],i=[],c=0,C=!1,B=0;const G=Se();function E(u){r(9,R=u.detail.useMarkerCluster),r(10,P=u.detail.userSelectedMarkerType),r(6,i=v(i))}function k(u){r(9,R=u.detail.useMarkerCluster),r(6,i=v(i))}function v(u){let M;if(Array.isArray(u))M=u.filter(T=>Q(T,h,L));else if(R){let T=[];u.forEach((F,X)=>{F=F.filter(be=>Q(be,h,L)),T=T.concat(F)}),M=T}else M=new Map,u.forEach((T,F)=>{T=T.filter(X=>Q(X,h,L)),M.set(F,T)});return M}function _e(){h&&h.invalidateSize()}function K(u,M){G("markerClick",{observation_id:M.id,latlng:u.detail.latlng})}je(()=>{r(5,h=d.getMap()),Ve(h),r(13,B=h.getMaxZoom()),h.on("zoomend",function(){r(11,O=h.getZoom()),r(25,C=!0)}),h.on("moveend",function(){r(25,C=!0)}),h.on("baselayerchange",function(u){r(13,B=h.getMaxZoom())})});const ge=(u,M)=>K(M,u),pe=(u,M)=>K(M,u);function he(u){$[u?"unshift":"push"](()=>{D=u,r(12,D)})}function ke(u){$[u?"unshift":"push"](()=>{d=u,r(4,d)})}return a.$$set=u=>{"mapOptions"in u&&r(0,n=u.mapOptions),"groupedObservations"in u&&r(22,e=u.groupedObservations),"timeSpanHistory"in u&&r(23,f=u.timeSpanHistory),"taxaHistory"in u&&r(1,t=u.taxaHistory),"country"in u&&r(2,o=u.country),"mapCenter"in u&&r(18,s=u.mapCenter),"speciesOnMapCount"in u&&r(19,p=u.speciesOnMapCount),"observersOnMapCount"in u&&r(20,b=u.observersOnMapCount),"speciesList"in u&&r(21,S=u.speciesList),"project"in u&&r(3,j=u.project)},a.$$.update=()=>{if(a.$$.dirty[0]&66584784&&d&&(r(24,V=Ne(e,f)),r(6,i=v(V)),r(7,c=ze(i)),r(21,S=Ae(i,me)),r(19,p=S.length),r(20,b=Ee(i,me)),G("updateStats",{observationsOnMapCount:c,speciesOnMapCount:p,speciesList:S,observationsOnMap:i,observersOnMapCount:b}),r(25,C=!1)),a.$$.dirty[0]&4194322&&d)if(t.length>0)if(Array.isArray(e))r(8,_=e.map(u=>[u.latitude,u.longitude]));else{let u=[];r(8,_=e.forEach((M,T)=>{u=u.concat(M)})),r(8,_=u.map(M=>[M.latitude,M.longitude]))}else r(8,_=[]);if(a.$$.dirty[0]&262160&&d&&s&&s.longitude){let u=d.getMap();u.flyTo([s.latitude,s.longitude],u.getMaxZoom()-1),r(18,s={})}},[n,t,o,j,d,h,i,c,_,R,P,O,D,B,E,k,_e,K,s,p,b,S,e,f,V,C,ge,pe,he,ke]}class lt extends Me{constructor(l){super();de(this,l,Fe,qe,Ce,{mapOptions:0,groupedObservations:22,timeSpanHistory:23,taxaHistory:1,country:2,mapCenter:18,speciesOnMapCount:19,observersOnMapCount:20,speciesList:21,project:3},null,[-1,-1])}}export{lt as default};
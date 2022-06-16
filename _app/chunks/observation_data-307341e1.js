var de=Object.defineProperty,ce=Object.defineProperties;var ue=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var B=(o,e,l)=>e in o?de(o,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[e]=l,F=(o,e)=>{for(var l in e||(e={}))_e.call(e,l)&&B(o,l,e[l]);if(W)for(var l of W(e))he.call(e,l)&&B(o,l,e[l]);return o},J=(o,e)=>ce(o,ue(e));import{S as G,i as K,s as X,e as _,c as h,a as m,d as n,b as j,f as b,J as A,t as O,g as L,F as c,h as H,j as M,l as z,O as Y,k as S,M as C,W as me}from"./vendor-358d5d08.js";import{f as x}from"./formatUtils-b852786f.js";function ge(o){return o.map(e=>J(F({},e),{id:Number(e.id),latitude:Number(e.latitude),longitude:Number(e.longitude),taxon_id:Number(e.taxon_id),coordinates_obscured:e.coordinates_obscured==="True"}))}function Ee(o){return o.map(e=>J(F({},e),{id:Number(e.id),observations_count:Number(e.observations_count),parent_id:Number(e.parent_id),taxa_count:Number(e.taxa_count),taxon_id:Number(e.taxon_id)}))}function be(o){let e;return{c(){e=_("div"),this.h()},l(l){e=h(l,"DIV",{class:!0}),m(e).forEach(n),this.h()},h(){j(e,"class","loader svelte-1q81au6")},m(l,a){b(l,e,a)},p:A,i:A,o:A,d(l){l&&n(e)}}}class Te extends G{constructor(e){super();K(this,e,null,be,X,{})}}function $(o){let e,l,a,r=o[0].user_login+"",i;return{c(){e=_("dt"),l=O("Observer"),a=_("dd"),i=O(r),this.h()},l(t){e=h(t,"DT",{class:!0});var s=m(e);l=L(s,"Observer"),s.forEach(n),a=h(t,"DD",{});var d=m(a);i=L(d,r),d.forEach(n),this.h()},h(){j(e,"class","svelte-1173w1j")},m(t,s){b(t,e,s),c(e,l),b(t,a,s),c(a,i)},p(t,s){s&1&&r!==(r=t[0].user_login+"")&&H(i,r)},d(t){t&&n(e),t&&n(a)}}}function ee(o){let e,l,a,r=new Date(o[0].time_observed_at).toLocaleDateString()+"",i;return{c(){e=_("dt"),l=O("Date"),a=_("dd"),i=O(r),this.h()},l(t){e=h(t,"DT",{class:!0});var s=m(e);l=L(s,"Date"),s.forEach(n),a=h(t,"DD",{});var d=m(a);i=L(d,r),d.forEach(n),this.h()},h(){j(e,"class","svelte-1173w1j")},m(t,s){b(t,e,s),c(e,l),b(t,a,s),c(a,i)},p(t,s){s&1&&r!==(r=new Date(t[0].time_observed_at).toLocaleDateString()+"")&&H(i,r)},d(t){t&&n(e),t&&n(a)}}}function te(o){let e,l,a,r=o[0].quality_grade+"",i;return{c(){e=_("dt"),l=O("Quality grade"),a=_("dd"),i=O(r),this.h()},l(t){e=h(t,"DT",{class:!0});var s=m(e);l=L(s,"Quality grade"),s.forEach(n),a=h(t,"DD",{});var d=m(a);i=L(d,r),d.forEach(n),this.h()},h(){j(e,"class","svelte-1173w1j")},m(t,s){b(t,e,s),c(e,l),b(t,a,s),c(a,i)},p(t,s){s&1&&r!==(r=t[0].quality_grade+"")&&H(i,r)},d(t){t&&n(e),t&&n(a)}}}function le(o){let e,l,a,r=o[0].license+"",i;return{c(){e=_("dt"),l=O("License"),a=_("dd"),i=O(r),this.h()},l(t){e=h(t,"DT",{class:!0});var s=m(e);l=L(s,"License"),s.forEach(n),a=h(t,"DD",{});var d=m(a);i=L(d,r),d.forEach(n),this.h()},h(){j(e,"class","svelte-1173w1j")},m(t,s){b(t,e,s),c(e,l),b(t,a,s),c(a,i)},p(t,s){s&1&&r!==(r=t[0].license+"")&&H(i,r)},d(t){t&&n(e),t&&n(a)}}}function ie(o){let e,l,a,r=o[0].description+"",i;return{c(){e=_("dt"),l=O("Description"),a=_("dd"),i=O(r),this.h()},l(t){e=h(t,"DT",{class:!0});var s=m(e);l=L(s,"Description"),s.forEach(n),a=h(t,"DD",{});var d=m(a);i=L(d,r),d.forEach(n),this.h()},h(){j(e,"class","svelte-1173w1j")},m(t,s){b(t,e,s),c(e,l),b(t,a,s),c(a,i)},p(t,s){s&1&&r!==(r=t[0].description+"")&&H(i,r)},d(t){t&&n(e),t&&n(a)}}}function ae(o){let e,l,a,r,i=o[0].geoprivacy==="obscured"&&se(),t=o[0].taxon_geoprivacy==="obscured"&&oe();return{c(){e=_("dt"),l=O("Coordinates are obscured"),a=_("dd"),i&&i.c(),r=M(),t&&t.c(),this.h()},l(s){e=h(s,"DT",{class:!0});var d=m(e);l=L(d,"Coordinates are obscured"),d.forEach(n),a=h(s,"DD",{});var y=m(a);i&&i.l(y),r=z(y),t&&t.l(y),y.forEach(n),this.h()},h(){j(e,"class","svelte-1173w1j")},m(s,d){b(s,e,d),c(e,l),b(s,a,d),i&&i.m(a,null),c(a,r),t&&t.m(a,null)},p(s,d){s[0].geoprivacy==="obscured"?i||(i=se(),i.c(),i.m(a,r)):i&&(i.d(1),i=null),s[0].taxon_geoprivacy==="obscured"?t||(t=oe(),t.c(),t.m(a,null)):t&&(t.d(1),t=null)},d(s){s&&n(e),s&&n(a),i&&i.d(),t&&t.d()}}}function se(o){let e;return{c(){e=O("Observer has choosen to obscure the coordinates.")},l(l){e=L(l,"Observer has choosen to obscure the coordinates.")},m(l,a){b(l,e,a)},d(l){l&&n(e)}}}function oe(o){let e;return{c(){e=O("Taxon is threatened or rare so the coordinates are obscured.")},l(l){e=L(l,"Taxon is threatened or rare so the coordinates are obscured.")},m(l,a){b(l,e,a)},d(l){l&&n(e)}}}function re(o){let e,l,a,r;return{c(){e=_("span"),l=O("Show on map"),this.h()},l(i){e=h(i,"SPAN",{class:!0});var t=m(e);l=L(t,"Show on map"),t.forEach(n),this.h()},h(){j(e,"class","link-color mr-4 svelte-1173w1j")},m(i,t){b(i,e,t),c(e,l),a||(r=Y(e,"click",o[6]),a=!0)},p:A,d(i){i&&n(e),a=!1,r()}}}function ne(o){let e,l,a,r,i;return{c(){e=_("a"),l=O("Species page"),this.h()},l(t){e=h(t,"A",{class:!0,href:!0});var s=m(e);l=L(s,"Species page"),s.forEach(n),this.h()},h(){j(e,"class","mr-4 svelte-1173w1j"),j(e,"href",a=""+(o[1]+"/taxa/"+o[0].taxon_id))},m(t,s){b(t,e,s),c(e,l),r||(i=Y(e,"click",o[7]),r=!0)},p(t,s){s&3&&a!==(a=""+(t[1]+"/taxa/"+t[0].taxon_id))&&j(e,"href",a)},d(t){t&&n(e),r=!1,i()}}}function ve(o){let e,l,a=x(o[0],!0,!1,!0)+"",r,i,t,s,d,y,Z,N,I,Q,q,V,R,v=o[0].user_login&&$(o),p=o[0].time_observed_at&&ee(o),k=o[0].quality_grade&&te(o),D=o[0].license&&le(o),w=o[0].description&&ie(o),g=o[0].coordinates_obscured&&ae(o),E=o[3]&&re(o),T=o[0].taxon_id!==o[4].taxon_id&&ne(o);return{c(){e=_("div"),l=_("h3"),r=M(),i=_("dl"),v&&v.c(),t=S(),p&&p.c(),s=S(),k&&k.c(),d=S(),D&&D.c(),y=S(),w&&w.c(),Z=S(),g&&g.c(),N=M(),E&&E.c(),I=M(),T&&T.c(),Q=M(),q=_("a"),V=O("iNaturalist observation"),this.h()},l(f){e=h(f,"DIV",{});var u=m(e);l=h(u,"H3",{class:!0});var fe=m(l);fe.forEach(n),r=z(u),i=h(u,"DL",{class:!0});var P=m(i);v&&v.l(P),t=S(),p&&p.l(P),s=S(),k&&k.l(P),d=S(),D&&D.l(P),y=S(),w&&w.l(P),Z=S(),g&&g.l(P),P.forEach(n),N=z(u),E&&E.l(u),I=z(u),T&&T.l(u),Q=z(u),q=h(u,"A",{class:!0,href:!0});var U=m(q);V=L(U,"iNaturalist observation"),U.forEach(n),u.forEach(n),this.h()},h(){j(l,"class","svelte-1173w1j"),C(l,"small",o[2]),j(i,"class","svelte-1173w1j"),j(q,"class","external-link svelte-1173w1j"),j(q,"href",R="https://www.inaturalist.org/observations/"+o[0].id),C(e,"prose",o[2]===!1),C(e,"p-4",!o[2])},m(f,u){b(f,e,u),c(e,l),l.innerHTML=a,c(e,r),c(e,i),v&&v.m(i,null),c(i,t),p&&p.m(i,null),c(i,s),k&&k.m(i,null),c(i,d),D&&D.m(i,null),c(i,y),w&&w.m(i,null),c(i,Z),g&&g.m(i,null),c(e,N),E&&E.m(e,null),c(e,I),T&&T.m(e,null),c(e,Q),c(e,q),c(q,V)},p(f,[u]){u&1&&a!==(a=x(f[0],!0,!1,!0)+"")&&(l.innerHTML=a),u&4&&C(l,"small",f[2]),f[0].user_login?v?v.p(f,u):(v=$(f),v.c(),v.m(i,t)):v&&(v.d(1),v=null),f[0].time_observed_at?p?p.p(f,u):(p=ee(f),p.c(),p.m(i,s)):p&&(p.d(1),p=null),f[0].quality_grade?k?k.p(f,u):(k=te(f),k.c(),k.m(i,d)):k&&(k.d(1),k=null),f[0].license?D?D.p(f,u):(D=le(f),D.c(),D.m(i,y)):D&&(D.d(1),D=null),f[0].description?w?w.p(f,u):(w=ie(f),w.c(),w.m(i,Z)):w&&(w.d(1),w=null),f[0].coordinates_obscured?g?g.p(f,u):(g=ae(f),g.c(),g.m(i,null)):g&&(g.d(1),g=null),f[3]?E?E.p(f,u):(E=re(f),E.c(),E.m(e,I)):E&&(E.d(1),E=null),f[0].taxon_id!==f[4].taxon_id?T?T.p(f,u):(T=ne(f),T.c(),T.m(e,Q)):T&&(T.d(1),T=null),u&1&&R!==(R="https://www.inaturalist.org/observations/"+f[0].id)&&j(q,"href",R),u&4&&C(e,"prose",f[2]===!1),u&4&&C(e,"p-4",!f[2])},i:A,o:A,d(f){f&&n(e),v&&v.d(),p&&p.d(),k&&k.d(),D&&D.d(),w&&w.d(),g&&g.d(),E&&E.d(),T&&T.d()}}}function pe(o,e,l){let{observation:a={}}=e,{projectPath:r}=e,{compactLayout:i=!1}=e,{enableZoomToObservation:t=!0}=e,{taxon:s={}}=e;const d=me();function y(){d("zoomToObservation",{observation_id:a.id,latitude:a.latitude,longitude:a.longitude})}const Z=()=>d("changeTaxon",{taxon_id:a.taxon_id});return o.$$set=N=>{"observation"in N&&l(0,a=N.observation),"projectPath"in N&&l(1,r=N.projectPath),"compactLayout"in N&&l(2,i=N.compactLayout),"enableZoomToObservation"in N&&l(3,t=N.enableZoomToObservation),"taxon"in N&&l(4,s=N.taxon)},[a,r,i,t,s,d,y,Z]}class je extends G{constructor(e){super();K(this,e,pe,ve,X,{observation:0,projectPath:1,compactLayout:2,enableZoomToObservation:3,taxon:4})}}export{Te as L,je as O,ge as a,Ee as f};
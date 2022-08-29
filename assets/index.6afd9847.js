import{d as i,o as _,c as v,a as e,r as d,b as r,e as S,w as a,f as t,g as M,h as O,n as V,_ as m,u as $,F as N,p as E,i as z,j as b,N as L,k as R,l as F,m as H}from"./index.15facae9.js";import{S as K}from"./SearchOutline.24f62492.js";const U="/vite.svg",A={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},D=e("path",{d:"M32 32v432a16 16 0 0 0 16 16h432",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),P=e("rect",{x:"96",y:"224",width:"80",height:"192",rx:"20",ry:"20",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),T=e("rect",{x:"240",y:"176",width:"80",height:"240",rx:"20",ry:"20",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),q=e("rect",{x:"383.64",y:"112",width:"80",height:"304",rx:"20",ry:"20",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),G=[D,P,T,q],J=i({name:"BarChartOutline",render:function(l,o){return _(),v("svg",A,G)}}),Q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},W=e("path",{d:"M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),X=e("path",{d:"M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),Y=e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M400 179V64h-48v69"},null,-1),Z=[W,X,Y],ee=i({name:"HomeOutline",render:function(l,o){return _(),v("svg",Q,Z)}}),oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},te=e("path",{d:"M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 0 1-6.14-.32a124.27 124.27 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 0 0-32.35 29.58a4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25z",fill:"currentColor"},null,-1),ne=e("path",{d:"M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z",fill:"currentColor"},null,-1),se=[te,ne],le=i({name:"PersonCircleOutline",render:function(l,o){return _(),v("svg",oe,se)}}),re={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ae=e("path",{d:"M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),ce=e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M32 256l44-44l46 44"},null,-1),ue=e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32",d:"M480 256l-44 44l-46-44"},null,-1),ie=[ae,ce,ue],_e=i({name:"SyncOutline",render:function(l,o){return _(),v("svg",re,ie)}}),de={class:"search-big"},he=O(" \u641C\u7D22 "),pe=i({__name:"layout-search",setup(s,{expose:l}){const o=d(!1),n=d(null),u=d(null);l({show:()=>{o.value=!0,n.value="",V(()=>{const c=u.value;c&&c.focus()})},hide:()=>{o.value=!1}});const h=()=>{console.log(n.value)};return(c,p)=>{const y=r("n-input"),k=r("n-button"),B=r("n-input-group"),j=r("n-drawer-content"),I=r("n-drawer");return _(),S(I,{show:o.value,"onUpdate:show":p[1]||(p[1]=x=>o.value=x),"show-mask":!1,height:"calc(100% - 64px)",placement:"bottom",class:"layout-search",style:{"background-color":"rgba(255, 255, 255, 0.8)","backdrop-filter":"blur(4px)"}},{default:a(()=>[t(j,{title:"",closable:""},{default:a(()=>[e("div",de,[t(B,null,{default:a(()=>[t(y,{ref_key:"searchValueRef",ref:u,class:"search-input",value:n.value,"onUpdate:value":p[0]||(p[0]=x=>n.value=x),placeholder:"\u8BF7\u8F93\u5165",onKeyup:M(h,["enter","native"])},null,8,["value","onKeyup"]),t(k,{type:"primary",class:"search-btn",onClick:h},{default:a(()=>[he]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"])}}});const ve=m(pe,[["__scopeId","data-v-370366bf"]]),C=s=>(E("data-v-25ea4b0c"),s=s(),z(),s),we={class:"layout-header"},ke=C(()=>e("div",{class:"layout-header-left"},[e("img",{src:U}),e("span",{class:"layout-header-title"},"\u6570\u636E\u7BA1\u7406\u5E73\u53F0")],-1)),fe={class:"layout-header-right"},me=C(()=>e("span",null,"\u641C\u7D22",-1)),ye=C(()=>e("span",null,"admin",-1)),xe=i({__name:"layout-header",setup(s){const l=d(null),o=()=>{const n=l.value;n&&n.show()};return(n,u)=>{const w=r("NIcon"),f=r("n-tooltip");return _(),v(N,null,[e("div",we,[ke,e("div",fe,[t(f,{placement:"bottom",trigger:"hover"},{trigger:a(()=>[t(w,{size:"24",onClick:o},{default:a(()=>[t($(K))]),_:1})]),default:a(()=>[me]),_:1}),t(w,{class:"right-user",size:"28"},{default:a(()=>[t($(le))]),_:1}),ye])]),t(ve,{ref_key:"layoutSearchRef",ref:l},null,512)],64)}}});const ge=m(xe,[["__scopeId","data-v-25ea4b0c"]]);function g(s){return()=>b(L,null,{default:()=>b(s)})}const Ce=()=>[{label:"\u6570\u636E\u5217\u8868",key:"home",icon:g(ee)},{label:"\u6570\u636E\u5206\u6790",key:"analysis",icon:g(J)},{label:"\u6570\u636E\u540C\u6B65",key:"datasync",icon:g(_e)}],$e=i({__name:"layout-nav",setup(s){const l=d(Ce()),o=d(!1),n=d(""),u=R(),w=F(),f=()=>{u.push({name:n.value})};return H(()=>{var h;n.value=((h=w.name)==null?void 0:h.toString())||""}),(h,c)=>{const p=r("n-menu"),y=r("n-layout-sider");return _(),S(y,{class:"layout-nav",bordered:"","collapse-mode":"width","collapsed-width":64,width:200,collapsed:o.value,"show-trigger":"",onCollapse:c[1]||(c[1]=k=>o.value=!0),onExpand:c[2]||(c[2]=k=>o.value=!1)},{default:a(()=>[t(p,{value:n.value,"onUpdate:value":[c[0]||(c[0]=k=>n.value=k),f],collapsed:o.value,"collapsed-width":64,"collapsed-icon-size":22,options:l.value},null,8,["value","collapsed","options"])]),_:1},8,["collapsed"])}}});const be=m($e,[["__scopeId","data-v-445110a9"]]),Se={class:"layout"},Be=i({__name:"index",setup(s){return(l,o)=>{const n=r("router-view"),u=r("n-layout");return _(),v("div",Se,[t(ge),t(u,{class:"layout-content","has-sider":""},{default:a(()=>[t(be),t(u,{class:"layout-page"},{default:a(()=>[t(n)]),_:1})]),_:1})])}}});const Me=m(Be,[["__scopeId","data-v-9ed914ea"]]);export{Me as default};

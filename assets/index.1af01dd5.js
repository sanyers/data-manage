import{e as m,f as r,r as a,o as y,a as C,L as n,M as e,N as c,O as V,g as $,n as E,_ as f,c as I,u as k,F as O,S as L,P as U,Q as F,R as K,h as S,U as z,V as H,W as D,m as M}from"./home.067335d6.js";import{N as P,u as T,a as A}from"./index.1da48a47.js";const Q=""+new URL("../vite.svg",import.meta.url).href,W={class:"search-big"},j=$(" \u641C\u7D22 "),q=m({__name:"layout-search",setup(l,{expose:_}){const o=r(!1),t=r(null),u=r(null);_({show:()=>{o.value=!0,t.value="",E(()=>{const s=u.value;s&&s.focus()})},hide:()=>{o.value=!1}});const d=()=>{console.log(t.value)};return(s,i)=>{const g=a("n-input"),v=a("n-button"),N=a("n-input-group"),B=a("n-drawer-content"),R=a("n-drawer");return y(),C(R,{show:o.value,"onUpdate:show":i[1]||(i[1]=w=>o.value=w),"show-mask":!1,height:"calc(100% - 64px)",placement:"bottom",class:"layout-search",style:{"background-color":"rgba(255, 255, 255, 0.8)","backdrop-filter":"blur(4px)"}},{default:n(()=>[e(B,{title:"",closable:""},{default:n(()=>[c("div",W,[e(N,null,{default:n(()=>[e(g,{ref_key:"searchValueRef",ref:u,class:"search-input",value:t.value,"onUpdate:value":i[0]||(i[0]=w=>t.value=w),placeholder:"\u8BF7\u8F93\u5165",onKeyup:V(d,["enter","native"])},null,8,["value","onKeyup"]),e(v,{type:"primary",class:"search-btn",onClick:d},{default:n(()=>[j]),_:1})]),_:1})])]),_:1})]),_:1},8,["show"])}}});const G=f(q,[["__scopeId","data-v-370366bf"]]),x=l=>(F("data-v-25ea4b0c"),l=l(),K(),l),J={class:"layout-header"},X=x(()=>c("div",{class:"layout-header-left"},[c("img",{src:Q}),c("span",{class:"layout-header-title"},"\u6570\u636E\u7BA1\u7406\u5E73\u53F0")],-1)),Y={class:"layout-header-right"},Z=x(()=>c("span",null,"\u641C\u7D22",-1)),ee=x(()=>c("span",null,"admin",-1)),te=m({__name:"layout-header",setup(l){const _=r(null),o=()=>{const t=_.value;t&&t.show()};return(t,u)=>{const p=a("NIcon"),h=a("n-tooltip");return y(),I(O,null,[c("div",J,[X,c("div",Y,[e(h,{placement:"bottom",trigger:"hover"},{trigger:n(()=>[e(p,{size:"24",onClick:o},{default:n(()=>[e(k(L))]),_:1})]),default:n(()=>[Z]),_:1}),e(p,{class:"right-user",size:"28"},{default:n(()=>[e(k(U))]),_:1}),ee])]),e(G,{ref_key:"layoutSearchRef",ref:_},null,512)],64)}}});const oe=f(te,[["__scopeId","data-v-25ea4b0c"]]);function b(l){return()=>S(P,null,{default:()=>S(l)})}const ae=()=>[{label:"\u6570\u636E\u5217\u8868",key:"home",icon:b(z)},{label:"\u6570\u636E\u5206\u6790",key:"analysis",icon:b(H)},{label:"\u6570\u636E\u540C\u6B65",key:"datasync",icon:b(D)}],ne=m({__name:"layout-nav",setup(l){const _=r(ae()),o=r(!1),t=r(""),u=T(),p=A(),h=()=>{u.push({name:t.value})};return M(()=>{var d;t.value=((d=p.name)==null?void 0:d.toString())||""}),(d,s)=>{const i=a("n-menu"),g=a("n-layout-sider");return y(),C(g,{class:"layout-nav",bordered:"","collapse-mode":"width","collapsed-width":64,width:200,collapsed:o.value,"show-trigger":"",onCollapse:s[1]||(s[1]=v=>o.value=!0),onExpand:s[2]||(s[2]=v=>o.value=!1)},{default:n(()=>[e(i,{value:t.value,"onUpdate:value":[s[0]||(s[0]=v=>t.value=v),h],collapsed:o.value,"collapsed-width":64,"collapsed-icon-size":22,options:_.value},null,8,["value","collapsed","options"])]),_:1},8,["collapsed"])}}});const se=f(ne,[["__scopeId","data-v-445110a9"]]),le={class:"layout"},ue=m({__name:"index",setup(l){return(_,o)=>{const t=a("router-view"),u=a("n-layout");return y(),I("div",le,[e(oe),e(u,{class:"layout-content","has-sider":""},{default:n(()=>[e(se),e(u,{class:"layout-page"},{default:n(()=>[e(t)]),_:1})]),_:1})])}}});const re=f(ue,[["__scopeId","data-v-9ed914ea"]]);export{re as default};

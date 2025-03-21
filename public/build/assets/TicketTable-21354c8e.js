import{m as $,K as y,o as _,i as p,g as e,f as t,k as r,t as s,b as h,c as k,F as v,e as T,u as d,l as o,a as f}from"./app-a39c937f.js";/* empty css              */import{_ as B}from"./Table-7daa1325.js";import{T as N,a as L,_ as n}from"./TableHeaderRowItem-2700d168.js";import{T as V,a as j,_ as i}from"./TableBodyRowItem-ed031f61.js";const z={class:"py-1 px-2 bg-gray-50 rounded-[5px] border border-dashed w-[20em] truncate text-xs capitalize"},C={class:"text-left bg-slate-100 py-2 px-3 rounded-xl text-[11px]"},R={class:"text-left"},S={class:"text-left"},F={class:"py-1 rounded-[5px] text-xs px-3 bg-[#ddebf7] text-slate-700"},H={class:"flex items-center mt-3"},K={__name:"TicketTable",props:{rows:{type:Object,required:!0}},setup(b){const c=$(()=>y().props.auth.user),u=l=>y().props.auth.user.role!="user"?"/admin/support/"+l:"/support/"+l;return(l,m)=>(_(),p(B,{rows:b.rows},{default:e(()=>[t(N,null,{default:e(()=>[t(L,null,{default:e(()=>[t(n,{position:"first"},{default:e(()=>[r(s(l.$t("Ref")),1)]),_:1}),t(n,null,{default:e(()=>[r(s(l.$t("Subject")),1)]),_:1}),t(n,null,{default:e(()=>[r(s(l.$t("Priority")),1)]),_:1}),c.value.role!="user"?(_(),p(n,{key:0},{default:e(()=>[r(s(l.$t("User")),1)]),_:1})):h("",!0),c.value.role!="user"?(_(),p(n,{key:1},{default:e(()=>[r(s(l.$t("Assigned to")),1)]),_:1})):h("",!0),t(n,null,{default:e(()=>[r(s(l.$t("Status")),1)]),_:1}),t(n,null,{default:e(()=>[r(s(l.$t("Last updated")),1)]),_:1}),t(n,{position:"last"})]),_:1})]),_:1}),t(V,null,{default:e(()=>[(_(!0),k(v,null,T(b.rows.data,(a,x)=>(_(),p(j,{key:x},{default:e(()=>[t(i,{position:"first",class:"capitalize"},{default:e(()=>[t(d(o),{href:u(a.uuid)},{default:e(()=>[r(s(a.reference),1)]),_:2},1032,["href"])]),_:2},1024),t(i,{class:"hidden sm:table-cell"},{default:e(()=>[t(d(o),{href:u(a.uuid)},{default:e(()=>[f("div",z,s(a.subject),1)]),_:2},1032,["href"])]),_:2},1024),t(i,{class:"hidden sm:table-cell"},{default:e(()=>[t(d(o),{href:u(a.uuid)},{default:e(()=>[f("span",C,s(a.priority??l.$t("Not set")),1)]),_:2},1032,["href"])]),_:2},1024),c.value.role!="user"?(_(),p(i,{key:0,class:"hidden sm:table-cell"},{default:e(()=>[t(d(o),{href:u(a.uuid)},{default:e(()=>[f("span",R,s(a.user.first_name+" "+a.user.last_name),1)]),_:2},1032,["href"])]),_:2},1024)):h("",!0),c.value.role!="user"?(_(),p(i,{key:1,class:"hidden sm:table-cell"},{default:e(()=>[t(d(o),{href:u(a.uuid)},{default:e(()=>{var g,w;return[f("span",S,s(a.agent?((g=a.agent)==null?void 0:g.first_name)+" "+((w=a.agent)==null?void 0:w.last_name):l.$t("Not set")),1)]}),_:2},1032,["href"])]),_:2},1024)):h("",!0),t(i,{class:"capitalize"},{default:e(()=>[t(d(o),{href:u(a.uuid)},{default:e(()=>[f("span",F,s(l.$t(a.status)),1)]),_:2},1032,["href"])]),_:2},1024),t(i,{class:"hidden sm:table-cell"},{default:e(()=>[t(d(o),{href:u(a.uuid)},{default:e(()=>[r(s(a.updated_at),1)]),_:2},1032,["href"])]),_:2},1024),t(i,{position:"last"},{default:e(()=>[f("div",H,[t(d(o),{href:u(a.uuid)},{default:e(()=>m[0]||(m[0]=[f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[f("path",{fill:"currentColor","fill-rule":"evenodd",d:"M9.97 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L13.44 12L9.97 8.53a.75.75 0 0 1 0-1.06Z","clip-rule":"evenodd"})],-1)])),_:2},1032,["href"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["rows"]))}};export{K as _};

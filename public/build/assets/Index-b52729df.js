import{_ as F}from"./App-c36b28d4.js";import N from"./Documentation-2bcbb845.js";import q from"./Menu-2e58c26a.js";import{T as B,r as f,o as l,c as m,f as s,g as r,k as $,t as a,F as M,e as H,i as _,n as T,a as e,u as g,j as I,b as D}from"./app-a39c937f.js";import"./_baseGetTag-fe27dbe8.js";import{_ as S}from"./AlertModal-3dc931bd.js";import{u as E}from"./useAlertModal-0cf952b8.js";/* empty css              */import{_ as L}from"./Table-7daa1325.js";import{T as O,a as P,_ as b}from"./TableHeaderRowItem-2700d168.js";import{T as Z,a as G,_ as k}from"./TableBodyRowItem-ed031f61.js";import{_ as U}from"./Dropdown-3f09e41f.js";import"./Sidebar-cfdf4c27.js";import"./Menu-bdf286ac.js";import"./Modal-df1e3aae.js";import"./transition-37a067aa.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./micro-task-89dcd6af.js";import"./ProfileModal-61a09d92.js";import"./FormInput-4b7fa008.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./FormSelect-c7672027.js";import"./index-8758cb17.js";import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";import"./index-80d9f634.js";import"./MobileSidebar-d61cbb69.js";import"./pusher-4059f127.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Pagination-10a3ee54.js";import"./use-tree-walker-d82ec41e.js";const J={class:"flex"},K={class:"text-left mr-3 text-sm relative"},Q=["onClick"],W={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},X={key:1,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},Y=["onClick"],ee={class:"py-1 px-2 bg-gray-50 rounded-[5px] border border-dashed w-[10em] truncate text-xs capitalize"},te=["onClick"],oe={__name:"TokenTable",props:{rows:{type:Object,required:!0}},emits:["delete"],setup(d,{emit:y}){const u=d,{isOpenAlert:c,openAlert:w,confirmAlert:p}=E(),i=B({test:null}),h=f(null),v=f(null),A=t=>{i.delete("/developer-tools/access-tokens/"+t)},V=t=>t===u.rows.data.length-1,z=async t=>{h.value=t;const o=document.createElement("textarea");o.value=t,document.body.appendChild(o),o.select(),document.execCommand("copy"),document.body.removeChild(o),setTimeout(()=>{h.value=null},2e3)},R=t=>v.value===t?t:t.replace(/./g,"*"),j=t=>{v.value=t};return(t,o)=>(l(),m(M,null,[s(L,{rows:d.rows},{default:r(()=>[s(O,null,{default:r(()=>[s(P,null,{default:r(()=>[s(b,{position:"first"},{default:r(()=>[$(a(t.$t("Token")),1)]),_:1}),s(b,null,{default:r(()=>[$(a(t.$t("Created on")),1)]),_:1}),s(b,{position:"last"})]),_:1})]),_:1}),s(Z,null,{default:r(()=>[(l(!0),m(M,null,H(d.rows.data,(n,x)=>(l(),_(G,{key:x,class:T(V(x)?"":"border-b")},{default:r(()=>[s(k,{position:"first",class:"capitalize"},{default:r(()=>[e("div",J,[e("div",K,[e("span",null,a(R(n.token)),1),e("span",{class:T(["bg-gray-50 text-xs p-1 border border-dashed rounded-[5px] absolute top-1/2 transform -translate-y-1/2",h.value===n.token?"":"hidden"])},a(t.$t("Copied")),3)]),e("span",{class:"cursor-pointer mr-1",onClick:C=>j(n.token)},[v.value!=n.token?(l(),m("svg",W,o[2]||(o[2]=[e("g",{fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd"},[e("path",{d:"M12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"}),e("path",{d:"M12 3.25c-4.514 0-7.555 2.704-9.32 4.997l-.031.041c-.4.519-.767.996-1.016 1.56c-.267.605-.383 1.264-.383 2.152c0 .888.116 1.547.383 2.152c.25.564.617 1.042 1.016 1.56l.032.041C4.445 18.046 7.486 20.75 12 20.75c4.514 0 7.555-2.704 9.32-4.997l.031-.041c.4-.518.767-.996 1.016-1.56c.267-.605.383-1.264.383-2.152c0-.888-.116-1.547-.383-2.152c-.25-.564-.617-1.041-1.016-1.56l-.032-.041C19.555 5.954 16.514 3.25 12 3.25M3.87 9.162C5.498 7.045 8.15 4.75 12 4.75c3.85 0 6.501 2.295 8.13 4.412c.44.57.696.91.865 1.292c.158.358.255.795.255 1.546s-.097 1.188-.255 1.546c-.169.382-.426.722-.864 1.292C18.5 16.955 15.85 19.25 12 19.25c-3.85 0-6.501-2.295-8.13-4.412c-.44-.57-.696-.91-.865-1.292c-.158-.358-.255-.795-.255-1.546s.097-1.188.255-1.546c.169-.382.426-.722.864-1.292"})],-1)]))):(l(),m("svg",X,o[3]||(o[3]=[e("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[e("path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24m-3.39-9.04A10 10 0 0 1 12 5c7 0 10 7 10 7a13.2 13.2 0 0 1-1.67 2.68"}),e("path",{d:"M6.61 6.61A13.5 13.5 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61M2 2l20 20"})],-1)])))],8,Q),e("span",{class:"cursor-pointer",onClick:C=>z(n.token)},o[4]||(o[4]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"1.5"},[e("path",{d:"M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z"}),e("path",{d:"M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h4a3 3 0 0 1 3 3"})])],-1)]),8,Y)])]),_:2},1024),s(k,{class:"hidden sm:table-cell"},{default:r(()=>[e("div",ee,a(n.created_at),1)]),_:2},1024),s(k,{position:"last"},{default:r(()=>[s(U,{align:"right",class:"mt-2"},{default:r(()=>[e("button",{onClick:C=>g(w)(n.uuid),class:"inline-flex w-full justify-center rounded-md text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"},o[5]||(o[5]=[e("span",{class:"hover:bg-[#F6F7F9] hover:rounded-full w-[fit-content] p-2"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"})])],-1)]),8,te)]),_:2},1024)]),_:2},1024)]),_:2},1032,["class"]))),128))]),_:1})]),_:1},8,["rows"]),s(S,{modelValue:g(c),"onUpdate:modelValue":o[0]||(o[0]=n=>I(c)?c.value=n:null),onConfirm:o[1]||(o[1]=()=>g(p)(A)),label:t.$t("Delete row"),description:t.$t("Are you sure you want to delete this row? This action can not be undone")},null,8,["modelValue","label","description"])],64))}},se={class:"bg-white md:bg-inherit md:flex md:flex-grow md:overflow-y-hidden"},re={class:"md:w-[60%] m-8"},ne={class:"flex justify-between mt-8"},le={class:"text-md mb-1"},ie={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},ae={class:"ml-1 mt-1"},de=["disabled"],ue={key:0},ce={key:1},me={class:"md:w-[40%] border-l bg-black h-screen hidden md:block"},Ge={__name:"Index",props:["rows","url","apirequests","webhookModule"],setup(d){const y=d;f(null),f("const foo = 'bar';");const u=f(!1),c=B({name:null}),w=()=>{u.value=!0,c.post("/developer-tools/access-tokens",{preserveScroll:!0,onSuccess:()=>c.reset(),onFinish:()=>{u.value=!1}})};return(p,i)=>(l(),_(F,null,{default:r(()=>[e("div",se,[e("div",re,[d.webhookModule?(l(),_(q,{key:0})):D("",!0),e("div",ne,[e("div",null,[e("h3",le,a(p.$t("Access Tokens")),1),e("p",ie,[i[1]||(i[1]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),e("span",ae,a(p.$t("Create and manage your API keys")),1)])]),e("div",null,[e("button",{onClick:i[0]||(i[0]=h=>w()),type:"button",disabled:u.value,class:"rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},[u.value==!1?(l(),m("span",ue,a(p.$t("Generate API key")),1)):(l(),m("span",ce,i[2]||(i[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-dasharray":"15","stroke-dashoffset":"15","stroke-linecap":"round","stroke-width":"2",d:"M12 3C16.9706 3 21 7.02944 21 12"},[e("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),e("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})])],-1)])))],8,de)])]),s(oe,{rows:y.rows},null,8,["rows"])]),e("div",me,[s(N,{apirequests:d.apirequests},null,8,["apirequests"])])])]),_:1}))}};export{Ge as default};

import{T as b,r as h,q as w,i as x,g as p,o as n,a as e,t as l,f as a,k as _,u as i,l as y,h as k,n as m,c as u}from"./app-a39c937f.js";import{_ as V}from"./App-c36b28d4.js";import{_ as C}from"./FormInput-4b7fa008.js";import{_ as $}from"./FormSelect-c7672027.js";import{_ as j}from"./FormTextArea-e893dff2.js";import"./index-8758cb17.js";import"./Sidebar-cfdf4c27.js";import"./Menu-bdf286ac.js";import"./Modal-df1e3aae.js";import"./transition-37a067aa.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./micro-task-89dcd6af.js";import"./ProfileModal-61a09d92.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";import"./index-80d9f634.js";import"./MobileSidebar-d61cbb69.js";/* empty css              */import"./pusher-4059f127.js";const B={class:"bg-white md:bg-inherit pt-0 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] overflow-y-scroll"},A={class:"md:flex justify-between hidden"},M={class:"text-xl mb-1"},Z={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},L={class:"ml-1 mt-1"},N={class:"mt-5 mb-5 grid grid-cols-2 space-x-4"},S={class:""},D={class:""},H={class:""},T={class:"flex justify-end py-2"},U={type:"submit",class:"self-end flex items-center space-x-4 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},q={key:0},z={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},me={__name:"Create",props:["categories"],setup(c){const f=c,s=b({subject:null,category:null,message:null}),d=h([]),g=o=>o.map(t=>({value:t.id,label:t.name})),v=()=>{s.post("/support")};return w(()=>{d.value=g(f.categories)}),(o,t)=>(n(),x(V,null,{default:p(()=>[e("div",B,[e("div",A,[e("div",null,[e("h2",M,l(o.$t("Create ticket")),1),e("p",Z,[t[4]||(t[4]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),e("span",L,l(o.$t("Have an issue? Describe it in detail below")),1)])]),e("div",null,[a(i(y),{href:"/support",class:"flex items-center space-x-4 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:p(()=>[t[5]||(t[5]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M5.841 5.28a.75.75 0 0 0-1.06-1.06L1.53 7.47L1 8l.53.53l3.25 3.25a.75.75 0 0 0 1.061-1.06l-1.97-1.97H24.25a.75.75 0 0 0 0-1.5H3.871l1.97-1.97Z","clip-rule":"evenodd"})],-1)),_(" "+l(o.$t("Back")),1)]),_:1})])]),e("form",{onSubmit:t[3]||(t[3]=k(r=>v(),["prevent"])),class:"bg-white md:border py-5 md:px-5 rounded-[0.5rem]"},[e("div",N,[e("div",S,[a(C,{modelValue:i(s).subject,"onUpdate:modelValue":t[0]||(t[0]=r=>i(s).subject=r),name:o.$t("Subject"),type:"text",error:i(s).errors.subject,class:m("w-full"),labelClass:"mb-0"},null,8,["modelValue","name","error"])]),e("div",D,[a($,{modelValue:i(s).category,"onUpdate:modelValue":t[1]||(t[1]=r=>i(s).category=r),name:o.$t("Category"),options:d.value,error:i(s).errors.category,class:m("w-full"),placeholder:o.$t("Select category")},null,8,["modelValue","name","options","error","placeholder"])])]),e("div",H,[a(j,{modelValue:i(s).message,"onUpdate:modelValue":t[2]||(t[2]=r=>i(s).message=r),name:o.$t("Description"),type:"text",showLabel:!0,error:i(s).errors.message,textAreaRows:5,class:m("sm:col-span-6 mb-10")},null,8,["modelValue","name","error"])]),e("div",T,[e("button",U,[o.isLoading?(n(),u("svg",z,t[6]||(t[6]=[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(n(),u("span",q,l(o.$t("Create ticket")),1))])])],32)])]),_:1}))}};export{me as default};

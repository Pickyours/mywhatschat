import{r as h,T as y,h as x,f as V,o as a,a as o,t as r,e as g,u as n,n as i,c as d,b as w,g as C}from"./app-43851608.js";import $ from"./App-2fea9171.js";import{_}from"./FormInput-4a309017.js";import"./App-ad5f7ecb.js";import"./Sidebar-7bb6d772.js";import"./Menu-4221d61f.js";import"./ProfileModal-628e5b7c.js";import"./LangToggle-8d05b0dc.js";import"./MobileSidebar-b73cd192.js";import"./index-99011d5f.js";/* empty css              */import"./Sidebar-7b5bc85b.js";const A={class:"text-xl mb-1"},j={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},B=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[o("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),S={class:"ml-1 mt-1"},M={class:"space-y-6"},L={class:""},N={class:"grid gap-6 grid-cols-2 pb-10 border-b md:w-2/3"},Z={class:"relative flex gap-x-3 col-span-2"},F={class:"flex items-center"},U=o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),G=[U],O={class:"relative flex gap-x-3 col-span-2"},T={class:"flex items-center"},q=o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),z=[q],D={class:"mt-6 flex items-center justify-end gap-x-6 md:w-2/3"},E={type:"button",class:"text-sm leading-6 text-gray-900"},J=["disabled"],K={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},H=o("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),I=o("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[o("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1),P=[H,I],Q={key:1},ao={__name:"Socials",props:{config:{type:Object,required:!0}},setup(b){const k=b,u=s=>{const l=k.config.find(t=>t.key===s);return l?l.value:""},c=(s,l)=>{const t=JSON.parse(u(s));return t!==null&&typeof t=="object"&&!Array.isArray(t)?t[l]??null:null},m=h(!1),e=y({allow_facebook_login:u("allow_facebook_login")==="1",allow_google_login:u("allow_google_login")==="1",facebook_login:{client_id:c("facebook_login","client_id")??null,client_secret:c("facebook_login","client_secret")??null},google_login:{client_id:c("google_login","client_id")??null,client_secret:c("google_login","client_secret")??null}}),p=()=>{e.allow_facebook_login=!e.allow_facebook_login},f=()=>{e.allow_google_login=!e.allow_google_login},v=async()=>{e.put("/admin/settings?type=socials",{preserveScroll:!0})};return(s,l)=>(a(),x($,null,{default:V(()=>[o("div",null,[o("h2",A,r(s.$t("Social login settings")),1),o("p",j,[B,o("span",S,r(s.$t("Configure social accounts for user login")),1)])]),o("form",{class:"",onSubmit:l[8]||(l[8]=C(t=>v(),["prevent"]))},[o("div",M,[o("div",L,[o("div",N,[g(_,{modelValue:n(e).google_login.client_id,"onUpdate:modelValue":l[0]||(l[0]=t=>n(e).google_login.client_id=t),name:s.$t("Google client id"),error:n(e).errors["google_login.client_id"],type:"text",class:i("col-span-1")},null,8,["modelValue","name","error"]),g(_,{modelValue:n(e).google_login.client_secret,"onUpdate:modelValue":l[1]||(l[1]=t=>n(e).google_login.client_secret=t),name:s.$t("Google client secret"),error:n(e).errors["google_login.client_secret"],type:"password",class:i("col-span-1")},null,8,["modelValue","name","error"]),g(_,{modelValue:n(e).facebook_login.client_id,"onUpdate:modelValue":l[2]||(l[2]=t=>n(e).facebook_login.client_id=t),name:s.$t("Facebook client id"),error:n(e).errors["facebook_login.client_id"],type:"text",class:i("col-span-1")},null,8,["modelValue","name","error"]),g(_,{modelValue:n(e).facebook_login.client_secret,"onUpdate:modelValue":l[3]||(l[3]=t=>n(e).facebook_login.client_secret=t),name:s.$t("Facebook client secret"),error:n(e).errors["facebook_login.client_secret"],type:"password",class:i("col-span-1")},null,8,["modelValue","name","error"]),o("div",Z,[o("div",F,[o("label",{onClick:l[4]||(l[4]=t=>f()),for:"myCheckbox",class:"cursor-pointer"},[o("div",{class:i(["w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center",n(e).allow_google_login?"bg-[#000]":""])},[n(e).allow_google_login?(a(),d("svg",{key:0,class:i(["w-4 h-4",n(e).allow_google_login?"text-white":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},G,2)):w("",!0)],2)]),o("span",{onClick:l[5]||(l[5]=t=>f()),class:"ml-2 text-[14px] cursor-pointer"},r(s.$t("Allow google login")),1)])]),o("div",O,[o("div",T,[o("label",{onClick:l[6]||(l[6]=t=>p()),for:"myCheckbox",class:"cursor-pointer"},[o("div",{class:i(["w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center",n(e).allow_facebook_login?"bg-[#000]":""])},[n(e).allow_facebook_login?(a(),d("svg",{key:0,class:i(["w-4 h-4",n(e).allow_facebook_login?"text-white":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},z,2)):w("",!0)],2)]),o("span",{onClick:l[7]||(l[7]=t=>p()),class:"ml-2 text-[14px] cursor-pointer"},r(s.$t("Allow facebook login")),1)])])]),o("div",D,[o("button",E,r(s.$t("Cancel")),1),o("button",{class:i(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":m.value}]),disabled:m.value},[m.value?(a(),d("svg",K,P)):(a(),d("span",Q,r(s.$t("Save")),1))],10,J)])])])],32)]),_:1}))}};export{ao as default};

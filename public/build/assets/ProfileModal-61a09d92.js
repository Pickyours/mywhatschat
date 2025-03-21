import{r as D,K as x,T as h,o as m,i as _,g as n,f as r,u as t,a as s,t as u,n as i,b as V,h as k,c as b,k as N,O}from"./app-a39c937f.js";import{_ as g}from"./FormInput-4b7fa008.js";import{_ as G}from"./FormPhoneInput-1c9c9926.js";import{_ as P}from"./FormSelect-c7672027.js";import{h as Z,G as q,U as I,S as L}from"./transition-37a067aa.js";import{x as J,I as K,y as C,S as H,g as $}from"./tabs-86fdd039.js";const W={class:"fixed inset-0 overflow-y-auto"},X={class:"flex min-h-full items-center justify-center p-4 text-center"},Y={class:"text-base text-xl leading-7 text-gray-900"},ee={class:"mb-4 text-sm leading-6 text-gray-600"},te={class:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4"},se={class:"mt-4 flex"},oe=["disabled"],ae={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},re={key:1},le={class:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4"},ne={class:"mt-4 flex"},ie=["disabled"],de={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},ue={key:1},me={key:0,class:"mt-2 text-sm text-green-700"},pe={class:"relative mt-4"},fe={key:0,class:"absolute inset-0 backdrop-blur-sm"},ce={class:"flex items-center text-sm"},be={class:"mb-6 md:mb-0 md:mr-2"},ge=["src"],ve={class:"h5 text-sm mt-3"},ye={class:"mt-4 flex"},we=["disabled"],xe={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},he={key:1},Se={__name:"ProfileModal",props:{user:Object,organization:Object,role:String,isOpen:Boolean},emits:["close"],setup(A,{emit:B}){var S,z,U,T,M,j;const p=A,l=D(!1),v=(a,e)=>{if(a){const o=JSON.parse(a);return(o==null?void 0:o[e])??null}else return null};x().props.config;const d=h({first_name:p.user.first_name,last_name:p.user.last_name,email:p.user.email,phone:p.user.phone});h({organization_name:(S=p.organization)==null?void 0:S.name,address:v((z=p.organization)==null?void 0:z.address,"street"),city:v((U=p.organization)==null?void 0:U.address,"city"),state:v((T=p.organization)==null?void 0:T.address,"state"),zip:v((M=p.organization)==null?void 0:M.address,"zip"),country:v((j=p.organization)==null?void 0:j.address,"country")});const f=h({old_password:null,password:null,password_confirmation:null}),c=h({status:x().props.tfa.enabled,token:null,secret:x().props.tfa.secret}),y=x().props.tfa,F=async a=>{l.value=!0,d.put("/profile/",{preserveScroll:!0,onFinish:()=>{l.value=!1}})},E=async a=>{l.value=!0,f.put("/profile/password",{preserveScroll:!0,onFinish:()=>{l.value=!1}})},Q=async a=>{l.value=!0,c.put("/profile/tfa",{preserveScroll:!0,onFinish:()=>{l.value=!1},onSuccess:()=>{O.visit(O.page.url)}})},R=B;function w(){R("close",!0)}return(a,e)=>(m(),_(t(L),{appear:"",show:A.isOpen,as:"template"},{default:n(()=>[r(t(I),{as:"div",onClose:w,class:"relative z-10"},{default:n(()=>[r(t(Z),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>e[12]||(e[12]=[s("div",{class:"fixed inset-0 bg-black bg-opacity-25"},null,-1)])),_:1}),s("div",W,[s("div",X,[r(t(Z),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:n(()=>[r(t(q),{class:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all min-w-[20em]"},{default:n(()=>[s("div",null,[s("h2",Y,u(a.$t("Personal information")),1),s("p",ee,u(a.$t("Update your account details and credentials")),1),r(t(J),null,{default:n(()=>[r(t(K),{class:"flex space-x-1 rounded-xl bg-primary p-1"},{default:n(()=>[r(t(C),{as:"template"},{default:n(({selected:o})=>[s("button",{class:i(["w-full rounded-lg py-2.5 text-sm leading-5 text-[#ffffffcc]","ring-white focus:outline-none",o?"bg-white text-black shadow":"hover:bg-white hover:text-black"])},u(a.$t("My profile")),3)]),_:1}),r(t(C),{as:"template"},{default:n(({selected:o})=>[s("button",{class:i(["w-full rounded-lg py-2.5 text-sm leading-5 text-[#ffffffcc]","ring-white focus:outline-none",o?"bg-white text-black shadow":"hover:bg-white hover:text-black"])},u(a.$t("Security")),3)]),_:1}),t(y).status?(m(),_(t(C),{key:0,as:"template"},{default:n(({selected:o})=>[s("button",{class:i(["w-full rounded-lg py-2.5 text-sm leading-5 text-[#ffffffcc]","ring-white focus:outline-none",o?"bg-white text-black shadow":"hover:bg-white hover:text-black"])},u(a.$t("Two-Factor")),3)]),_:1})):V("",!0)]),_:1}),r(t(H),{class:"mt-2"},{default:n(()=>[r(t($),null,{default:n(()=>[s("div",te,[s("form",{onSubmit:e[4]||(e[4]=k(o=>F(),["prevent"])),class:"grid gap-x-6 gap-y-4 sm:grid-cols-6"},[r(g,{modelValue:t(d).first_name,"onUpdate:modelValue":e[0]||(e[0]=o=>t(d).first_name=o),name:a.$t("First name"),error:t(d).errors.first_name,type:"text",class:i("sm:col-span-3")},null,8,["modelValue","name","error"]),r(g,{modelValue:t(d).last_name,"onUpdate:modelValue":e[1]||(e[1]=o=>t(d).last_name=o),name:a.$t("Last name"),error:t(d).errors.last_name,type:"text",class:i("sm:col-span-3")},null,8,["modelValue","name","error"]),r(g,{modelValue:t(d).email,"onUpdate:modelValue":e[2]||(e[2]=o=>t(d).email=o),name:a.$t("Email"),error:t(d).errors.email,type:"text",class:i("sm:col-span-6")},null,8,["modelValue","name","error"]),r(G,{modelValue:t(d).phone,"onUpdate:modelValue":e[3]||(e[3]=o=>t(d).phone=o),name:a.$t("Phone"),error:t(d).errors.phone,type:"text",class:i("sm:col-span-6")},null,8,["modelValue","name","error"]),s("div",se,[s("button",{type:"button",onClick:w,class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},u(a.$t("Cancel")),1),s("button",{class:i(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":l.value}]),disabled:l.value},[l.value?(m(),b("svg",ae,e[13]||(e[13]=[s("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),s("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[s("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(m(),b("span",re,u(a.$t("Save")),1))],10,oe)])],32)])]),_:1}),r(t($),null,{default:n(()=>[s("div",le,[s("form",{onSubmit:e[8]||(e[8]=k(o=>E(),["prevent"])),class:"grid gap-x-6 gap-y-4 sm:grid-cols-6"},[r(g,{modelValue:t(f).old_password,"onUpdate:modelValue":e[5]||(e[5]=o=>t(f).old_password=o),name:a.$t("Old password"),error:t(f).errors.old_password,type:"password",class:i("sm:col-span-6")},null,8,["modelValue","name","error"]),r(g,{modelValue:t(f).password,"onUpdate:modelValue":e[6]||(e[6]=o=>t(f).password=o),name:a.$t("New password"),error:t(f).errors.password,type:"password",class:i("sm:col-span-6")},null,8,["modelValue","name","error"]),r(g,{modelValue:t(f).password_confirmation,"onUpdate:modelValue":e[7]||(e[7]=o=>t(f).password_confirmation=o),name:a.$t("Confirm password"),error:t(f).errors.password_confirmation,type:"password",class:i("sm:col-span-6")},null,8,["modelValue","name","error"]),s("div",ne,[s("button",{type:"button",onClick:w,class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},u(a.$t("Cancel")),1),s("button",{class:i(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":l.value}]),disabled:l.value},[l.value?(m(),b("svg",de,e[14]||(e[14]=[s("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),s("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[s("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(m(),b("span",ue,u(a.$t("Save")),1))],10,ie)])],32)])]),_:1}),t(y).status?(m(),_(t($),{key:0},{default:n(()=>[s("form",{onSubmit:e[11]||(e[11]=k(o=>Q(),["prevent"]))},[r(P,{name:"Two-factor authentication",modelValue:t(c).status,"onUpdate:modelValue":e[9]||(e[9]=o=>t(c).status=o),options:[{value:1,label:"Enable"},{value:0,label:"Disable"}],error:t(c).errors.status},null,8,["modelValue","error"]),t(y).enabled===1?(m(),b("div",me,e[15]||(e[15]=[N(" Two-factor authentication is "),s("b",null,"enabled",-1),N(". ")]))):V("",!0),s("div",pe,[t(c).status===0?(m(),b("div",fe)):V("",!0),e[18]||(e[18]=s("h3",{class:"font-semibold"},"1. Scan QR Code",-1)),e[19]||(e[19]=s("p",{class:"text-gray-600 text-sm"}," Open the authentication app (ex: Authy, Google Authenticator) on your mobile device and scan the following QR Code with your camera. ",-1)),s("div",ce,[s("div",be,[s("img",{src:t(y).qrcode,alt:"qrcode",width:"200"},null,8,ge)]),s("div",null,[e[16]||(e[16]=s("label",null,"Can't scan the QR Code?",-1)),e[17]||(e[17]=s("p",{class:"text-gray-600 text-sm"}," Try inserting the following secret code into your app if you can't scan the QR Code. ",-1)),s("p",ve,u(t(y).secret),1)])]),e[20]||(e[20]=s("h3",{class:"font-semibold"}," 2. Enter Token from Authenticator App ",-1)),e[21]||(e[21]=s("p",{class:"text-sm text-gray-600 mb-2"}," To confirm that you setup your code properly, please enter the 6-digit token from your mobile app. ",-1)),r(g,{modelValue:t(c).token,"onUpdate:modelValue":e[10]||(e[10]=o=>t(c).token=o),placeholder:"6 digit code",error:t(c).errors.token,type:"text",class:i("sm:col-span-6")},null,8,["modelValue","error"])]),s("div",ye,[s("button",{type:"button",onClick:w,class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},u(a.$t("Cancel")),1),s("button",{class:i(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":l.value}]),disabled:l.value},[l.value?(m(),b("svg",xe,e[22]||(e[22]=[s("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),s("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[s("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(m(),b("span",he,u(a.$t("Save")),1))],10,we)])],32)]),_:1})):V("",!0)]),_:1})]),_:1})])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"]))}};export{Se as _};

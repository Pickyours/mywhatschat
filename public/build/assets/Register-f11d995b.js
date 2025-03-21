import{r as $,T as A,q as z,R as M,c as l,a as o,f as i,g as v,u as t,t as d,k as x,h as H,n as p,b as h,d as U,o as m,l as V}from"./app-a39c937f.js";import{_ as c}from"./FormInput-4b7fa008.js";import{_ as B}from"./FormPhoneInput-1c9c9926.js";import{u as F,a as j}from"./ReCaptcha-55f58cbf.js";/* empty css                      */const N={class:"flex h-screen justify-center"},R={class:"flex justify-center items-center"},S={class:"w-[20em] md:w-[30em]"},q={class:"flex justify-center mb-5"},L=["src","alt"],T={key:1,class:"text-2xl mb-2"},P={class:"text-2xl text-center"},Z={class:"text-center text-sm text-slate-500"},E={class:"mt-5 grid gap-x-6 gap-y-4 grid-cols-6"},O={class:"mt-5"},D={class:"mt-5"},K={class:"mt-5"},Q={class:"mt-5 grid gap-x-6 gap-y-4 grid-cols-6"},G={key:0,class:"form-error text-[#b91c1c] text-xs"},I={class:"mt-6"},J={key:0,type:"submit",class:"rounded-md bg-primary px-3 py-3 text-sm text-white shadow-sm w-full"},W={key:1,type:"button",class:"rounded-md bg-primary px-3 py-3 text-sm text-white shadow-sm w-full flex justify-center"},X={key:0,class:"flex justify-center my-6"},Y={class:"text-sm text-gray-500 px-4 text-center"},ee={class:"flex justify-center gap-4"},ae={key:0,href:"/social-login/facebook",class:"border rounded-full p-2 cursor-pointer"},te={key:1,href:"/social-login/google",class:"border rounded-full p-2 cursor-pointer"},ie={__name:"Register",props:["flash","config","companyConfig"],setup(b){const n=b,g=$(!1),a=A({first_name:null,last_name:null,organization_name:null,email:null,phone:null,password:null,password_confirmation:null,recaptcha_response:null}),u=s=>{const e=n.config.find(f=>f.key===s);return e?e.value:""},C=async()=>{if(g.value=!0,u("recaptcha_active")==="1"){const s=await k();a.recaptcha_response=s}a.post("signup",{preserveScroll:!0,onFinish:()=>{g.value=!1}})},k=()=>new Promise(s=>{grecaptcha.ready(()=>{grecaptcha.execute(u("recaptcha_site_key"),{action:"submit"}).then(e=>{s(e)})})});return z(()=>{u("recaptcha_active")==="1"&&F(u("recaptcha_site_key"))}),M(()=>{j(u("recaptcha_site_key"))}),(s,e)=>{var f,_,y,w;return m(),l("div",N,[o("div",R,[o("div",S,[o("div",q,[i(t(V),{href:"/"},{default:v(()=>[n.companyConfig.logo?(m(),l("img",{key:0,class:"max-w-[180px]",src:"/media/"+n.companyConfig.logo,alt:n.companyConfig.company_name},null,8,L)):(m(),l("h4",T,d(n.companyConfig.company_name),1))]),_:1})]),o("h1",P,d(s.$t("Create account")),1),o("div",Z,[x(d(s.$t("Already have an account?"))+" ",1),i(t(V),{href:"login",class:"text-sm text-primary-600 dark:text-primary-500 border-b hover:border-gray-500"},{default:v(()=>[x(d(s.$t("Login")),1)]),_:1})]),o("form",{onSubmit:e[7]||(e[7]=H(r=>C(),["prevent"])),class:"mt-5 pb-10"},[o("div",E,[i(c,{modelValue:t(a).first_name,"onUpdate:modelValue":e[0]||(e[0]=r=>t(a).first_name=r),name:s.$t("First name"),error:t(a).errors.first_name,type:"text",class:p("col-span-3")},null,8,["modelValue","name","error"]),i(c,{modelValue:t(a).last_name,"onUpdate:modelValue":e[1]||(e[1]=r=>t(a).last_name=r),name:s.$t("Last name"),error:t(a).errors.last_name,type:"text",class:p("col-span-3")},null,8,["modelValue","name","error"])]),o("div",O,[i(c,{modelValue:t(a).organization_name,"onUpdate:modelValue":e[2]||(e[2]=r=>t(a).organization_name=r),name:s.$t("Organization name"),error:t(a).errors.organization_name,type:"text",class:p("sm:col-span-6")},null,8,["modelValue","name","error"])]),o("div",D,[i(c,{modelValue:t(a).email,"onUpdate:modelValue":e[3]||(e[3]=r=>t(a).email=r),name:s.$t("Email"),error:t(a).errors.email,type:"email",class:p("sm:col-span-3")},null,8,["modelValue","name","error"])]),o("div",K,[i(B,{modelValue:t(a).phone,"onUpdate:modelValue":e[4]||(e[4]=r=>t(a).phone=r),name:s.$t("Phone"),error:t(a).errors.phone,type:"text",class:p("sm:col-span-3")},null,8,["modelValue","name","error"])]),o("div",Q,[i(c,{modelValue:t(a).password,"onUpdate:modelValue":e[5]||(e[5]=r=>t(a).password=r),name:s.$t("Password"),error:t(a).errors.password,type:"password",class:p("col-span-3")},null,8,["modelValue","name","error"]),i(c,{modelValue:t(a).password_confirmation,"onUpdate:modelValue":e[6]||(e[6]=r=>t(a).password_confirmation=r),name:s.$t("Confirm password"),error:t(a).errors.password_confirmation,type:"password",class:p("col-span-3")},null,8,["modelValue","name","error"])]),t(a).errors.recaptcha_response?(m(),l("div",G,d(t(a).errors.recaptcha_response),1)):h("",!0),o("div",I,[g.value?(m(),l("button",W,e[8]||(e[8]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[o("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}),o("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[o("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})])],-1)]))):(m(),l("button",J,d(s.$t("Create account")),1))])],32),((f=n.companyConfig)==null?void 0:f.allow_facebook_login)==="1"||((_=n.companyConfig)==null?void 0:_.allow_google_login)==="1"?(m(),l("div",X,[o("span",Y,d(s.$t("Or continue with")),1)])):h("",!0),o("div",ee,[((y=n.companyConfig)==null?void 0:y.allow_facebook_login)==="1"?(m(),l("a",ae,e[9]||(e[9]=[o("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 256 256"},[o("path",{fill:"#1877F2",d:"M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"}),o("path",{fill:"#FFF",d:"m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"})],-1)]))):h("",!0),((w=n.companyConfig)==null?void 0:w.allow_google_login)==="1"?(m(),l("a",te,e[10]||(e[10]=[U('<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.33 74.33 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.16 36.16 0 0 1-13.93 5.5a41.29 41.29 0 0 1-15.1 0A37.16 37.16 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.31 38.31 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.28 34.28 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38z"></path><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.22 61.22 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21z"></path><path fill="#f8bd00" d="M3.26 51.5a62.93 62.93 0 0 1 5.5-15.9l20.73 16.09a38.31 38.31 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9z"></path><path fill="#587dbd" d="M65.27 52.15h59.52a74.33 74.33 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"></path><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.16 37.16 0 0 0 14.08 6.08a41.29 41.29 0 0 0 15.1 0a36.16 36.16 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.73 63.73 0 0 1 8.75 92.4z"></path></svg>',1)]))):h("",!0)])])])])}}};export{ie as default};

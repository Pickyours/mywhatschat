import{L as F,r as M,o as s,i as n,g as U,a as l,h as x,c,F as w,e as N,n as m,b as B,t as $,O}from"./app-a39c937f.js";import{_ as T}from"./Modal-df1e3aae.js";import{_ as j}from"./FormInput-4b7fa008.js";import{_ as I}from"./FormImage-8d883861.js";import{_ as L}from"./FormSelect-c7672027.js";import{_ as R}from"./FormTextArea-e893dff2.js";const Z={class:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4"},z={class:"mt-4 flex"},D=["disabled"],E={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},q={key:1},W={__name:"FormModalModified",props:{modelValue:Boolean,label:String,url:String,form:Object,formInputs:Array,formMethod:String,errors:Object},emits:["update:modelValue","closeModal"],setup(i,{emit:k}){const f=i,o=F(f.form),t=M(!1),A=async()=>{O.visit(f.url,{method:f.formMethod,data:o,preserveState:!0,onStart:a=>{t.value=!0},onFinish:a=>{t.value=!1},onSuccess:a=>{p("closeModal",!0)}})},p=k;function S(){p("update:modelValue",!1)}return(a,d)=>(s(),n(T,{label:i.label,isOpen:i.modelValue},{default:U(()=>[l("div",Z,[l("form",{onSubmit:d[0]||(d[0]=x(e=>A(),["prevent"])),class:"grid gap-x-6 gap-y-4 sm:grid-cols-6"},[(s(!0),c(w,null,N(i.formInputs,(e,C)=>{var u,b,g,y,v,V,h,_;return s(),c(w,{key:C},[e.inputType=="FormInput"?(s(),n(j,{key:0,modelValue:o[e.name],"onUpdate:modelValue":r=>o[e.name]=r,name:e.label,error:(b=(u=a.$page.props)==null?void 0:u.errors)==null?void 0:b[e.name],type:e.type,class:m(e.className)},null,8,["modelValue","onUpdate:modelValue","name","error","type","class"])):e.inputType=="FormSelect"?(s(),n(L,{key:1,modelValue:o[e.name],"onUpdate:modelValue":r=>o[e.name]=r,options:e.options,name:e.label,error:(y=(g=a.$page.props)==null?void 0:g.errors)==null?void 0:y[e.name],class:m(e.className),placeholder:e.placeholder},null,8,["modelValue","onUpdate:modelValue","options","name","error","class","placeholder"])):e.inputType=="FormImage"?(s(),n(I,{key:2,modelValue:o[e.name],"onUpdate:modelValue":r=>o[e.name]=r,error:(V=(v=a.$page.props)==null?void 0:v.errors)==null?void 0:V[e.name],options:e.options,label:e.label,class:m(e.className)},null,8,["modelValue","onUpdate:modelValue","error","options","label","class"])):e.inputType=="FormTextArea"?(s(),n(R,{key:3,modelValue:o[e.name],"onUpdate:modelValue":r=>o[e.name]=r,error:(_=(h=a.$page.props)==null?void 0:h.errors)==null?void 0:_[e.name],options:e.options,name:e.label,label:e.label,class:m(e.className),textAreaRows:e.textAreaRows},null,8,["modelValue","onUpdate:modelValue","error","options","name","label","class","textAreaRows"])):B("",!0)],64)}),128)),l("div",z,[l("button",{type:"button",onClick:x(S,["self"]),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},$(a.$t("Cancel")),1),l("button",{class:m(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":t.value}]),disabled:t.value},[t.value?(s(),c("svg",E,d[1]||(d[1]=[l("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),l("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[l("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(s(),c("span",q,$(a.$t("Save")),1))],10,D)])],32)])]),_:1},8,["label","isOpen"]))}};export{W as _};

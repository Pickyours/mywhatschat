import{r as m,o as r,c as i,a as e,t as a,b as c,n as u,F as R,e as D,m as X,G as J,i as A,g as N,f as b,k as M,u as Q,l as W,a2 as q,h as ee,x as te,O as le}from"./app-a39c937f.js";import{_ as se}from"./App-c36b28d4.js";import{_ as k}from"./FormInput-4b7fa008.js";import{_ as j}from"./FormSelect-c7672027.js";import{_ as S}from"./FormTextArea-e893dff2.js";import{_ as oe}from"./Modal-df1e3aae.js";/* empty css              */import"./Sidebar-cfdf4c27.js";import"./Menu-bdf286ac.js";import"./ProfileModal-61a09d92.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./transition-37a067aa.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./micro-task-89dcd6af.js";import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";import"./index-8758cb17.js";import"./index-80d9f634.js";import"./MobileSidebar-d61cbb69.js";import"./pusher-4059f127.js";const ae={key:0,for:"name",class:"block text-sm leading-6 text-gray-900"},ne={class:"mt-2"},re=["value","placeholder","rows"],ie={key:1,class:"form-error text-[#b91c1c] text-xs"},de={class:"flex items-center justify-between mt-2"},ue={class:"text-xs"},me={class:"flex items-center space-x-3"},ce={class:"mt-3 bg-slate-100 p-3"},pe={class:"text-xs"},ve={class:"mt-4"},he={__name:"FormTemplateTextArea",props:{modelValue:[String,Number],showLabel:Boolean,name:String,type:String,className:String,placeholder:String,textAreaRows:Number,error:String,variables:Array},emits:["update:modelValue"],setup(h,{emit:w}){const f=h,y=w,V=m(f.modelValue),v=m(null),C=d=>{const n=window.getSelection();if(n&&n.toString()){let p=null;d==="bold"?p=`*${n.toString()}*`:d==="italic"?p=`_${n.toString()}_`:d==="strikethrough"?p=`~${n.toString()}~`:d==="monospace"&&(p=`\`\`\`${n.toString()}\`\`\``);const g=v.value.selectionStart;V.value=V.value.replace(n.toString(),p),y("update:modelValue",V.value),v.value.setSelectionRange(g,g+p.length),v.value.focus()}};let L=0;const $=()=>{if(v.value,!v.value)return;const d=v.value.selectionStart,n=`{{${++L}}} `;y("update:modelValue",f.modelValue.substring(0,d)+n+f.modelValue.substring(d)),v.value.setSelectionRange(d+n.length,d+n.length),v.value.focus()},U=d=>{(f.modelValue.match(/{{\d+}}/g)||[]).find(n=>{console.log(n)}),y("update:modelValue",d.target.value)};return(d,n)=>(r(),i(R,null,[e("div",{class:u(h.className)},[h.showLabel?(r(),i("label",ae,a(h.name),1)):c("",!0),e("div",ne,[e("textarea",{class:u(["block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6",h.error?"ring-[#b91c1c]":"ring-gray-300"]),value:f.modelValue,onInput:U,placeholder:h.placeholder,rows:h.textAreaRows,ref_key:"textareaRef",ref:v},"                "+a(f.modelValue)+`
            `,43,re)]),h.error?(r(),i("div",ie,a(h.error),1)):c("",!0)],2),e("div",de,[e("span",ue,a(d.$t("Characters"))+": "+a(0)+"/"+a(0),1),e("div",me,[e("button",{class:"hover:bg-slate-100 rounded p-1",onClick:n[0]||(n[0]=p=>C("bold"))},n[5]||(n[5]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M6 4.75c0-.69.56-1.25 1.25-1.25h5a4.752 4.752 0 0 1 3.888 7.479A5 5 0 0 1 14 20.5H7.25c-.69 0-1.25-.56-1.25-1.25ZM8.5 13v5H14a2.5 2.5 0 1 0 0-5Zm0-2.5h3.751A2.25 2.25 0 0 0 12.25 6H8.5Z"})],-1)])),e("button",{class:"hover:bg-slate-100 rounded p-1",onClick:n[1]||(n[1]=p=>C("italic"))},n[6]||(n[6]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M10 4.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-3.514l-5.828 13h3.342a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.514l5.828-13H10.75a.75.75 0 0 1-.75-.75Z"})],-1)])),e("button",{class:"hover:bg-slate-100 rounded p-1",onClick:n[2]||(n[2]=p=>C("strikethrough"))},n[7]||(n[7]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"m16.533 12.5l.054.043c.93.75 1.538 1.77 1.538 3.066a4.13 4.13 0 0 1-1.479 3.177c-1.058.904-2.679 1.464-4.974 1.464c-2.35 0-4.252-.837-5.318-1.865a.75.75 0 1 1 1.042-1.08c.747.722 2.258 1.445 4.276 1.445c2.065 0 3.296-.504 3.999-1.105a2.63 2.63 0 0 0 .954-2.036c0-.764-.337-1.38-.979-1.898c-.649-.523-1.598-.931-2.76-1.211H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 0 1.5ZM12.36 5C9.37 5 8.105 6.613 8.105 7.848c0 .411.072.744.193 1.02a.75.75 0 0 1-1.373.603a3.988 3.988 0 0 1-.32-1.623c0-2.363 2.271-4.348 5.755-4.348c1.931 0 3.722.794 4.814 1.5a.75.75 0 1 1-.814 1.26c-.94-.607-2.448-1.26-4-1.26Z"})],-1)])),e("button",{class:"hover:bg-slate-100 rounded p-1",onClick:n[3]||(n[3]=p=>C("monospace"))},n[8]||(n[8]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5"})],-1)])),e("button",{onClick:n[4]||(n[4]=p=>$()),class:"hover:bg-slate-100 rounded p-1 text-sm"},a(d.$t("Add variable")),1)])]),e("div",ce,[e("h1",null,a(d.$t("Samples")),1),e("p",pe,a(d.$t("In order for your template to be reviewed properly, please add an example for each variable")),1),e("div",ve,[(r(!0),i(R,null,D(f.variables,(p,g)=>(r(),i("div",{key:g,class:"flex items-center space-x-2 w-full"},n[9]||(n[9]=[e("span",null,a(1),-1),e("input",{type:"text",class:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"},null,-1)])))),128))])])],64))}},fe={class:"px-4 md:px-0 flex flex-col bg-white border-l py-4 text-[#000]"},ge={class:"flex justify-between md:px-8 border-b py-4 pb-2"},xe={class:"text-xl mb-1"},be={class:"flex items-center text-sm leading-6 text-gray-600"},we={class:"ml-1 mt-1"},ye={class:"space-x-2 flex items-center"},Ce=["disabled"],$e={key:0},_e={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},ke={class:"md:flex md:flex-grow-1"},Ve={class:"md:w-[50%] py-4 md:p-8 overflow-y-auto md:h-[90vh]"},Le={class:"grid gap-x-6 gap-y-4 sm:grid-cols-6 mb-8"},Ae={key:0},Me={class:"text-slate-600"},Ze={class:"text-xs"},Ee={class:"text-slate-600 text-xs"},Ue={class:"grid grid-cols-4 mt-2 bg-[#f9f9fa] rounded-lg mb-4"},Be={class:"mb-8"},Oe={key:0},Te={class:"flex items-center justify-between mt-2"},Ie={class:"text-xs"},Ne={class:"flex items-center space-x-3"},Re={class:"hover:bg-slate-100 rounded p-1 text-sm"},je={key:1},Se={class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},De={class:"text-center"},He={key:0,class:"flex justify-center items-center"},Pe={class:"flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2"},Fe={class:"flex items-center space-x-2"},Ge={class:"text-sm"},Ye={key:1,for:"file-upload"},ze={class:"flex text-sm text-gray-600"},Ke={for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},Xe={class:"text-xs text-gray-500"},Je={key:2},Qe={class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},We={class:"text-center"},qe={key:0,class:"flex justify-center items-center"},et={class:"flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2"},tt={class:"flex items-center space-x-2"},lt={class:"text-sm"},st={key:1,for:"file-upload2"},ot={class:"flex text-sm text-gray-600"},at={for:"file-upload2",class:"relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},nt={class:"text-xs text-gray-500"},rt={key:3},it={class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},dt={class:"text-center"},ut={key:0,class:"flex justify-center items-center"},mt={class:"flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2"},ct={class:"flex items-center space-x-2"},pt={class:"text-sm"},vt={key:1,for:"file-upload3"},ht={class:"flex text-sm text-gray-600"},ft={for:"file-upload3",class:"relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},gt={class:"text-xs text-gray-500"},xt={class:"text-slate-600"},bt={class:"text-xs"},wt={class:"text-slate-600 text-xs"},yt={class:"mb-8"},Ct={class:"text-slate-600 capitalize"},$t={class:"text-xs"},_t={class:"text-slate-600 text-xs"},kt={class:"mb-8"},Vt={class:"text-xs"},Lt={class:"text-slate-600"},At={class:"text-xs"},Mt={class:"text-slate-600 text-xs"},Zt={class:"grid grid-cols-2 mt-3 mb-2"},Et={class:"grid grid-cols-2 mt-3 mb-2"},Ut={key:0,class:"mt-3 mb-8"},Bt={class:"flex items-center justify-between pb-1"},Ot={class:"text-sm"},Tt=["onClick"],It={class:"flex space-x-1 border-t pt-2"},Nt={class:"md:w-[50%] py-20 px-20 overflow-y-auto",style:{"background-image":"url('/images/whatsapp-bg-02.png')"}},Rt={class:"mr-auto rounded-lg rounded-tl-none my-1 p-1 text-sm bg-white flex flex-col relative speech-bubble-left w-[25em]"},jt={key:0,class:"mb-4 bg-[#ccd0d5] flex justify-center py-8 rounded"},St={key:0,src:"/images/image-placeholder.png"},Dt={key:1,src:"/images/video-placeholder.png"},Ht={key:2,src:"/images/document-placeholder.png"},Pt={key:1,class:"text-gray-700 text-[16px] mb-1 px-2"},Ft={class:"px-2"},Gt={class:"text-[#8c8c8c] mt-1 px-2"},Yt={class:"text-[13px]"},zt={class:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4"},Kt={class:"text-center"},Xt={key:0,class:"bg-[#fae6e6] text-[darkred] rounded text-sm p-2 mb-4"},Jt={key:1},Qt={class:"text-xl capitalize"},wl={__name:"Edit",props:["languages","template"],setup(h){const w=h,f=m("60"),y=m("0"),V=m("1098"),v=m("0"),C=m("60"),L=m("0"),$=m(!1),U=m(null),d=m(!1),n=m(null),p=m(JSON.parse(w.template.metadata)),g=(l,t)=>{const o=p.value.components.find(_=>_.type===l);return o?o[t]:""},s=m({name:w.template.name,category:w.template.category,language:w.template.language,header:{format:g("HEADER","format"),text:g("HEADER","text"),example:g("HEADER","example")},body:{text:g("BODY","text"),variables:null},footer:{text:g("FOOTER","text")},buttons:[]});m("text");const H=m(w.languages),P=m([{value:"UTILITY",label:"Utility"},{value:"MARKETING",label:"Marketing"}]),Z=l=>{s.value.header.format=l,s.value.header.example=""},F=l=>{const t=l.target.value.toLowerCase();s.value.name=t.replace(/[^a-zA-Z0-9_]/g,"")},B=l=>{const t=l.target.files[0],o=new FileReader;o.onload=_=>{U.value=_.target.result,s.value.header.example=t},o.readAsDataURL(t)},O=()=>{s.value.header.example=""},G=l=>{l.preventDefault(),s.value.name+="_"},T=l=>{let t=0,o=0;switch(l){case"header":t=f.value,o=s.value.header.text.length,o<=t?y.value=o:(s.value.header.text=s.value.header.text.slice(0,t),y.value=t);break;case"body":t=V.value,o=s.value.body.text.length,o<=t?v.value=o:(s.value.body.text=s.value.body.text.slice(0,t),v.value=t);break;case"footer":t=C.value,o=s.value.footer.text.length,o<=t?L.value=o:(s.value.footer.text=s.value.footer.text.slice(0,t),L.value=t);break}},E=l=>{l==="call"?s.value.buttons.push({name:"Call Phone Number",type:"PHONE_NUMBER",country:null,text:null,phone_number:null}):l==="website"?s.value.buttons.push({name:"Website URL",type:"URL",text:null,url:null}):l==="custom"?s.value.buttons.push({name:"Custom Button",type:"QUICK_REPLY",text:null}):l==="offer"&&s.value.buttons.push({name:"Offer Code",type:"COPY_CODE",example:null})},Y=l=>{l>=0&&l<s.value.buttons.length&&s.value.buttons.splice(l,1)},I=X(()=>s.value.name===null||s.value.name.trim()===""||s.value.language===null||s.value.language.trim()===""||s.value.category===null||s.value.category.trim()===""||s.value.buttons.some(l=>l.name===null||l.name===""||l.type===null||l.type===""||l.country===null||l.country===""||l.text===null||l.text===""||l.phone_number===null||l.phone_number==="")?!1:!(s.value.body.text===null||s.value.body.text.trim()==="")),z=()=>{$.value=!0,d.value=!0,te.post("/templates/"+w.template.uuid,s.value,{headers:{"Content-Type":"multipart/form-data"}}).then(l=>{l.data.success===!1?($.value=!1,n.value=l.data.message):le.visit("/templates",{method:"get"})}).catch(l=>{})},K=()=>{d.value=!1,setTimeout(()=>{n.value=null},500)};return J(s,()=>{I.value}),(l,t)=>(r(),A(se,{class:"md:overflow-y-hidden capitalize"},{default:N(()=>[e("div",fe,[e("div",ge,[e("div",null,[e("h2",xe,a(l.$t("Edit template")),1),e("p",be,[t[24]||(t[24]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),e("span",we,a(l.$t("Modify whatsapp template")),1)])]),e("div",ye,[b(Q(W),{href:"/templates",class:"rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:N(()=>[M(a(l.$t("Back")),1)]),_:1}),e("button",{onClick:t[0]||(t[0]=o=>z()),type:"button",class:u(["rounded-md px-3 py-2 float-right text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 capitalize",I.value===!0?"bg-indigo-600 hover:bg-indigo-500 shadow-sm":"bg-gray-200"]),disabled:!I.value||$.value},[$.value?(r(),i("svg",_e,t[25]||(t[25]=[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(r(),i("span",$e,a(l.$t("Update template")),1))],10,Ce)])]),e("div",ke,[e("div",Ve,[e("div",Le,[b(k,{modelValue:s.value.name,"onUpdate:modelValue":t[1]||(t[1]=o=>s.value.name=o),name:l.$t("Name"),type:"text",onInput:F,onKeydown:q(ee(G,["prevent"]),["space"]),class:u("sm:col-span-6")},null,8,["modelValue","name","onKeydown"]),b(j,{modelValue:s.value.category,"onUpdate:modelValue":t[2]||(t[2]=o=>s.value.category=o),options:P.value,name:l.$t("Category"),class:u("sm:col-span-3"),placeholder:"Select Category"},null,8,["modelValue","options","name"]),b(j,{modelValue:s.value.language,"onUpdate:modelValue":t[3]||(t[3]=o=>s.value.language=o),options:H.value,name:l.$t("Language"),class:u("sm:col-span-3"),placeholder:"Select Language"},null,8,["modelValue","options","name"])]),s.value.category==="UTILITY"||s.value.category==="MARKETING"?(r(),i("div",Ae,[e("h2",Me,[M(a(l.$t("Header"))+" ",1),e("span",Ze,"("+a(l.$t("Optional"))+")",1)]),e("span",Ee,a(l.$t("Add a title or choose which type of media you'll use for this header")),1),e("div",Ue,[e("button",{onClick:t[4]||(t[4]=o=>Z("TEXT")),class:u(["text-center py-2 text-sm text-slate-800 m-1",s.value.header.format==="TEXT"?"bg-white shadow rounded-lg":""])},a(l.$t("Text")),3),e("button",{onClick:t[5]||(t[5]=o=>Z("IMAGE")),class:u(["text-center py-2 text-sm text-slate-800 m-1",s.value.header.format==="IMAGE"?"bg-white shadow rounded-lg":""])},a(l.$t("Image")),3),e("button",{onClick:t[6]||(t[6]=o=>Z("VIDEO")),class:u(["text-center py-2 text-sm text-slate-800 m-1",s.value.header.format==="VIDEO"?"bg-white shadow rounded-lg":""])},a(l.$t("Video")),3),e("button",{onClick:t[7]||(t[7]=o=>Z("DOCUMENT")),class:u(["text-center py-2 text-sm text-slate-800 m-1",s.value.header.format==="DOCUMENT"?"bg-white shadow rounded-lg":""])},a(l.$t("Document")),3)]),e("div",Be,[s.value.header.format==="TEXT"?(r(),i("div",Oe,[b(S,{modelValue:s.value.header.text,"onUpdate:modelValue":t[8]||(t[8]=o=>s.value.header.text=o),onInput:t[9]||(t[9]=o=>T("header")),name:l.$t("Header text"),showLabel:!1,type:"text",textAreaRows:2,class:u("sm:col-span-6")},null,8,["modelValue","name"]),e("div",Te,[e("span",Ie,a(l.$t("Characters"))+": "+a(y.value)+"/"+a(f.value),1),e("div",Ne,[e("button",Re,a(l.$t("Add variable")),1)])])])):c("",!0),s.value.header.format==="IMAGE"?(r(),i("div",je,[e("div",Se,[e("input",{type:"file",class:"sr-only",accept:".jpg, .png",ref:"fileInput",id:"file-upload",onChange:t[10]||(t[10]=o=>B(o))},null,544),e("div",De,[e("div",null,[s.value.header.format==="IMAGE"&&s.value.header.example?(r(),i("div",He,[e("div",Pe,[t[27]||(t[27]=e("div",null,[e("svg",{class:"mx-auto h-6 w-6 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M14 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"}),e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7.268 4.658a54.647 54.647 0 0 1 9.465 0l1.51.132a3.138 3.138 0 0 1 2.831 2.66a30.604 30.604 0 0 1 0 9.1a3.138 3.138 0 0 1-2.831 2.66l-1.51.131c-3.15.274-6.316.274-9.465 0l-1.51-.131a3.138 3.138 0 0 1-2.832-2.66a30.601 30.601 0 0 1 0-9.1a3.138 3.138 0 0 1 2.831-2.66l1.51-.132Zm9.335 1.495a53.147 53.147 0 0 0-9.206 0l-1.51.131A1.638 1.638 0 0 0 4.41 7.672a29.101 29.101 0 0 0-.311 5.17L7.97 8.97a.75.75 0 0 1 1.09.032l3.672 4.13l2.53-.844a.75.75 0 0 1 .796.21l3.519 3.91a29.101 29.101 0 0 0 .014-8.736a1.638 1.638 0 0 0-1.478-1.388l-1.51-.131Zm2.017 11.435l-3.349-3.721l-2.534.844a.75.75 0 0 1-.798-.213l-3.471-3.905l-4.244 4.243c.049.498.11.996.185 1.491a1.638 1.638 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131c.178-.016.35-.06.507-.128Z","clip-rule":"evenodd"})])],-1)),e("div",Fe,[e("span",Ge,a(s.value.header.example.name),1),e("button",{onClick:t[11]||(t[11]=o=>O())},t[26]||(t[26]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1)]))])])])):(r(),i("label",Ye,t[28]||(t[28]=[e("svg",{class:"mx-auto h-12 w-12 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M14 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"}),e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7.268 4.658a54.647 54.647 0 0 1 9.465 0l1.51.132a3.138 3.138 0 0 1 2.831 2.66a30.604 30.604 0 0 1 0 9.1a3.138 3.138 0 0 1-2.831 2.66l-1.51.131c-3.15.274-6.316.274-9.465 0l-1.51-.131a3.138 3.138 0 0 1-2.832-2.66a30.601 30.601 0 0 1 0-9.1a3.138 3.138 0 0 1 2.831-2.66l1.51-.132Zm9.335 1.495a53.147 53.147 0 0 0-9.206 0l-1.51.131A1.638 1.638 0 0 0 4.41 7.672a29.101 29.101 0 0 0-.311 5.17L7.97 8.97a.75.75 0 0 1 1.09.032l3.672 4.13l2.53-.844a.75.75 0 0 1 .796.21l3.519 3.91a29.101 29.101 0 0 0 .014-8.736a1.638 1.638 0 0 0-1.478-1.388l-1.51-.131Zm2.017 11.435l-3.349-3.721l-2.534.844a.75.75 0 0 1-.798-.213l-3.471-3.905l-4.244 4.243c.049.498.11.996.185 1.491a1.638 1.638 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131c.178-.016.35-.06.507-.128Z","clip-rule":"evenodd"})],-1)]))),e("div",ze,[e("label",Ke,[e("span",null,a(l.$t("Provide examples of the variables or media in the header")),1)])]),e("p",Xe,a(l.$t("PNG or JPG files only")),1)])])])])):c("",!0),s.value.header.format==="VIDEO"?(r(),i("div",Je,[e("div",Qe,[e("input",{type:"file",class:"sr-only",accept:".mp4",ref:"fileInput",id:"file-upload2",onChange:t[12]||(t[12]=o=>B(o))},null,544),e("div",We,[e("div",null,[s.value.header.format==="VIDEO"&&s.value.header.example?(r(),i("div",qe,[e("div",et,[t[30]||(t[30]=e("div",null,[e("svg",{class:"mx-auto h-6 w-6 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:"M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5v-1Zm15-2l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5v-5Z"})])],-1)),e("div",tt,[e("span",lt,a(s.value.header.example.name),1),e("button",{onClick:t[13]||(t[13]=o=>O())},t[29]||(t[29]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1)]))])])])):(r(),i("label",st,t[31]||(t[31]=[e("svg",{class:"mx-auto h-12 w-12 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:"M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5v-1Zm15-2l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5v-5Z"})],-1)]))),e("div",ot,[e("label",at,[e("span",null,a(l.$t("Provide examples of the variables or media in the header")),1)])]),e("p",nt,a(l.$t("MP4 files only")),1)])])])])):c("",!0),s.value.header.format==="DOCUMENT"?(r(),i("div",rt,[e("div",it,[e("input",{type:"file",class:"sr-only",accept:".pdf",ref:"fileInput",id:"file-upload3",onChange:t[14]||(t[14]=o=>B(o))},null,544),e("div",dt,[e("div",null,[s.value.header.format==="DOCUMENT"&&s.value.header.example?(r(),i("div",ut,[e("div",mt,[t[33]||(t[33]=e("div",null,[e("svg",{class:"mx-auto h-6 w-6 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M18.53 9L13 3.47a.75.75 0 0 0-.53-.22H8A2.75 2.75 0 0 0 5.25 6v12A2.75 2.75 0 0 0 8 20.75h8A2.75 2.75 0 0 0 18.75 18V9.5a.75.75 0 0 0-.22-.5Zm-5.28-3.19l2.94 2.94h-2.94ZM16 19.25H8A1.25 1.25 0 0 1 6.75 18V6A1.25 1.25 0 0 1 8 4.75h3.75V9.5a.76.76 0 0 0 .75.75h4.75V18A1.25 1.25 0 0 1 16 19.25Z"}),e("path",{fill:"currentColor",d:"M13.49 14.85a3.15 3.15 0 0 1-1.31-1.66a4.44 4.44 0 0 0 .19-2a.8.8 0 0 0-1.52-.19a5 5 0 0 0 .25 2.4A29 29 0 0 1 9.83 16c-.71.4-1.68 1-1.83 1.69c-.12.56.93 2 2.72-1.12a18.58 18.58 0 0 1 2.44-.72a4.72 4.72 0 0 0 2 .61a.82.82 0 0 0 .62-1.38c-.42-.43-1.67-.31-2.29-.23Zm-4.78 3a4.32 4.32 0 0 1 1.09-1.24c-.68 1.08-1.09 1.27-1.09 1.25Zm2.92-6.81c.26 0 .24 1.15.06 1.46a3.07 3.07 0 0 1-.06-1.45Zm-.87 4.88a14.76 14.76 0 0 0 .88-1.92a3.88 3.88 0 0 0 1.08 1.26a12.35 12.35 0 0 0-1.96.67Zm4.7-.18s-.18.22-1.33-.28c1.25-.08 1.46.21 1.33.29Z"})])],-1)),e("div",ct,[e("span",pt,a(s.value.header.example.name),1),e("button",{onClick:t[15]||(t[15]=o=>O())},t[32]||(t[32]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1)]))])])])):(r(),i("label",vt,t[34]||(t[34]=[e("svg",{class:"mx-auto h-12 w-12 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M18.53 9L13 3.47a.75.75 0 0 0-.53-.22H8A2.75 2.75 0 0 0 5.25 6v12A2.75 2.75 0 0 0 8 20.75h8A2.75 2.75 0 0 0 18.75 18V9.5a.75.75 0 0 0-.22-.5Zm-5.28-3.19l2.94 2.94h-2.94ZM16 19.25H8A1.25 1.25 0 0 1 6.75 18V6A1.25 1.25 0 0 1 8 4.75h3.75V9.5a.76.76 0 0 0 .75.75h4.75V18A1.25 1.25 0 0 1 16 19.25Z"}),e("path",{fill:"currentColor",d:"M13.49 14.85a3.15 3.15 0 0 1-1.31-1.66a4.44 4.44 0 0 0 .19-2a.8.8 0 0 0-1.52-.19a5 5 0 0 0 .25 2.4A29 29 0 0 1 9.83 16c-.71.4-1.68 1-1.83 1.69c-.12.56.93 2 2.72-1.12a18.58 18.58 0 0 1 2.44-.72a4.72 4.72 0 0 0 2 .61a.82.82 0 0 0 .62-1.38c-.42-.43-1.67-.31-2.29-.23Zm-4.78 3a4.32 4.32 0 0 1 1.09-1.24c-.68 1.08-1.09 1.27-1.09 1.25Zm2.92-6.81c.26 0 .24 1.15.06 1.46a3.07 3.07 0 0 1-.06-1.45Zm-.87 4.88a14.76 14.76 0 0 0 .88-1.92a3.88 3.88 0 0 0 1.08 1.26a12.35 12.35 0 0 0-1.96.67Zm4.7-.18s-.18.22-1.33-.28c1.25-.08 1.46.21 1.33.29Z"})],-1)]))),e("div",ht,[e("label",ft,[e("span",null,a(l.$t("Provide examples of the variables or media in the header")),1)])]),e("p",gt,a(l.$t("PDF files only")),1)])])])])):c("",!0)]),e("h2",xt,[M(a(l.$t("Body"))+" ",1),e("span",bt,"("+a(l.$t("Required"))+")",1)]),e("span",wt,a(l.$t("Enter the text for your message in the language that you've selected")),1),e("div",yt,[e("div",null,[b(he,{modelValue:s.value.body.text,"onUpdate:modelValue":t[16]||(t[16]=o=>s.value.body.text=o),onInput:t[17]||(t[17]=o=>T("body")),name:l.$t("Body text"),showLabel:!1,type:"text",textAreaRows:5,class:u("sm:col-span-6")},null,8,["modelValue","name"])])]),e("h2",Ct,[M(a(l.$t("Footer description"))+" ",1),e("span",$t,"("+a(l.$t("Optional"))+")",1)]),e("span",_t,a(l.$t("Add a short line of text to the bottom of your message template")),1),e("div",kt,[e("div",null,[b(S,{modelValue:s.value.footer.text,"onUpdate:modelValue":t[18]||(t[18]=o=>s.value.footer.text=o),onInput:t[19]||(t[19]=o=>T("footer")),name:l.$t("Footer text"),showLabel:!1,type:"text",textAreaRows:2,class:u("sm:col-span-6")},null,8,["modelValue","name"]),e("span",Vt,a(l.$t("Characters"))+": "+a(L.value)+"/"+a(C.value),1)])]),e("h2",Lt,[M(a(l.$t("Buttons"))+" ",1),e("span",At,"("+a(l.$t("Optional"))+")",1)]),e("span",Mt,a(l.$t("Create buttons that let customers respond to your message or take action")),1),e("div",Zt,[e("button",{onClick:t[20]||(t[20]=o=>E("call")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4 mr-2"},[e("span",null,a(l.$t("Call phone number (1)")),1)]),e("button",{onClick:t[21]||(t[21]=o=>E("website")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4"},[e("span",null,a(l.$t("Visit website (2)")),1)])]),e("div",Et,[e("button",{onClick:t[22]||(t[22]=o=>E("offer")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4 mr-2"},[e("span",null,a(l.$t("Copy offer code (1)")),1)]),e("button",{onClick:t[23]||(t[23]=o=>E("custom")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4"},[e("span",null,a(l.$t("Custom button (6)")),1)])]),s.value.buttons.length>0?(r(),i("div",Ut,[(r(!0),i(R,null,D(s.value.buttons,(o,_)=>(r(),i("div",{key:_,class:"bg-[#f9f9fa] p-3 rounded-lg mb-3"},[e("div",Bt,[e("span",Ot,a(o.name),1),e("button",{onClick:x=>Y(_),class:"bg-slate-200 hover:shadow rounded-full p-1"},t[35]||(t[35]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1)]),8,Tt)]),e("div",It,[b(k,{modelValue:o.text,"onUpdate:modelValue":x=>o.text=x,name:l.$t("Button text"),type:"text",class:u(o.type==="QUICK_REPLY"?"w-full":"sm:col-span-2"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name","class"]),o.type==="URL"?(r(),A(k,{key:0,modelValue:o.url,"onUpdate:modelValue":x=>o.url=x,name:l.$t("Website url"),type:"text",class:u("w-full"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):c("",!0),o.type==="PHONE_NUMBER"?(r(),A(k,{key:1,modelValue:o.country,"onUpdate:modelValue":x=>o.country=x,name:l.$t("Country"),type:"text",class:u("sm:col-span-2"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):c("",!0),o.type==="PHONE_NUMBER"?(r(),A(k,{key:2,modelValue:o.phone_number,"onUpdate:modelValue":x=>o.phone_number=x,name:l.$t("Phone number"),type:"text",class:u("sm:col-span-2"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):c("",!0),o.type==="COPY_CODE"?(r(),A(k,{key:3,modelValue:o.example,"onUpdate:modelValue":x=>o.example=x,name:l.$t("Sample code"),type:"text",class:u("w-full"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):c("",!0)])]))),128))])):c("",!0)])):c("",!0)]),e("div",Nt,[e("div",Rt,[s.value.header.format!="TEXT"?(r(),i("div",jt,[s.value.header.format==="IMAGE"?(r(),i("img",St)):c("",!0),s.value.header.format==="VIDEO"?(r(),i("img",Dt)):c("",!0),s.value.header.format==="DOCUMENT"?(r(),i("img",Ht)):c("",!0)])):(r(),i("h2",Pt,a(s.value.header.text),1)),e("p",Ft,a(s.value.body.text),1),e("div",Gt,[e("span",Yt,a(s.value.footer.text),1),e("span",{class:u(["text-right text-xs leading-none float-right",s.value.footer.text?"mt-2":""])},"9:15",2)])])])])]),b(oe,{label:"",isOpen:d.value},{default:N(()=>[e("div",zt,[e("div",Kt,[n.value!=null?(r(),i("div",Xt,[e("div",null,a(l.$t("Error"))+": ",1),e("div",null,a(n.value),1),e("button",{type:"button",onClick:K,class:"mt-4 inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},"Close")])):(r(),i("div",Jt,[e("h2",Qt,a(l.$t("Your template is being uploaded!")),1),t[36]||(t[36]=e("div",{class:"flex justify-center mt-4"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-dasharray":"15","stroke-dashoffset":"15","stroke-linecap":"round","stroke-width":"2",d:"M12 3C16.9706 3 21 7.02944 21 12"},[e("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),e("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})])])],-1))]))])])]),_:1},8,["isOpen"])]),_:1}))}};export{wl as default};

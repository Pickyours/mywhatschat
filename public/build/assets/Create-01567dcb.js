import{r as g,T as N,q as O,E as F,c as a,f as p,g as k,F as V,o as d,a as e,t as n,u as i,l as z,k as _,h as L,n as m,b as v,e as I}from"./app-a39c937f.js";import{_ as D}from"./App-c36b28d4.js";import{t as f}from"./index-8758cb17.js";import{_ as G}from"./FormInput-4b7fa008.js";import{_ as S}from"./FormSelect-c7672027.js";import{_ as W}from"./FormTextArea-e893dff2.js";import{_ as q}from"./Modal-df1e3aae.js";import{P as J}from"./style-5ef5fdb3.js";import"./Sidebar-cfdf4c27.js";import"./Menu-bdf286ac.js";import"./ProfileModal-61a09d92.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./transition-37a067aa.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./micro-task-89dcd6af.js";import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";import"./index-80d9f634.js";import"./MobileSidebar-d61cbb69.js";/* empty css              */import"./pusher-4059f127.js";const K={class:"bg-white md:bg-inherit pt-10 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] h-full md:overflow-y-auto"},Q={class:"flex justify-between"},X={class:"text-xl mb-1"},Y={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},ee={class:"ml-1 mt-1"},te={class:"flex border-b py-5"},se={class:"w-[40%] mb-1"},oe={class:"text-sm text-gray-500 tracking-[0px]"},le={class:"w-[60%] flex space-x-6"},ie={class:"w-[80%]"},ne={class:"flex border-b py-5"},re={class:"w-[40%] mb-1"},ae={class:"text-sm text-gray-500 tracking-[0px]"},de={class:"flex text-xs mt-2"},ce={class:"w-[60%] flex space-x-6"},ue={class:"w-[80%]"},pe={class:"flex border-b py-5"},me={class:"w-[40%] mb-1"},ge={class:"text-sm text-gray-500 tracking-[0px]"},he={class:"flex text-xs mt-2"},ve={class:"w-[60%] flex space-x-6"},fe={class:"w-[80%]"},xe={class:"flex border-b py-5"},we={class:"w-[40%] mb-1"},be={class:"text-sm text-gray-500 tracking-[0px]"},_e={class:"w-[60%] flex space-x-6"},ye={class:"w-[80%]"},ke={key:0,class:"flex py-5"},$e={class:"w-[40%] mb-1"},Ce={class:"text-sm text-gray-500 tracking-[0px]"},Ve={class:"w-[60%] flex space-x-6"},Le={class:"w-[80%]"},Se={class:m("sm:col-span-6 mb-2")},je={class:"mt-2"},Me={key:0,class:"form-error text-[#b91c1c] text-xs"},Be={class:"flex items-center"},Re={class:"relative ml-3"},Ze={type:"submit",class:"float-right flex items-center space-x-4 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},Te={key:1,class:"flex py-5"},Pe={class:"w-[40%] mb-1"},Ee={key:0,class:"text-sm text-gray-500 tracking-[0px]"},Ae={key:1,class:"text-sm text-gray-500 tracking-[0px]"},Ue={class:"w-[60%] flex space-x-6"},He={class:"w-[80%]"},Ne=["accept"],Oe={class:"text-center"},Fe={key:0,class:"flex justify-center items-center"},ze={class:"flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2"},Ie={class:"flex items-center space-x-2"},De={class:"text-sm"},Ge={class:"flex justify-center text-sm text-gray-600"},We={key:0,for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},qe={class:"text-xs text-center text-gray-500"},Je={key:1,for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},Ke={class:"text-xs text-center text-gray-500"},Qe={key:0,class:"form-error text-[#b91c1c] text-xs"},Xe={type:"submit",class:"mt-10 float-right flex items-center space-x-4 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},Ye={class:"mt-2 grid grid-cols-1 gap-x-6"},et={class:"pt-3 grid grid-cols-2 gap-x-2 text-sm gap-y-1"},tt=["onClick"],st={class:"mt-4 border-t pt-4"},Vt={__name:"Create",props:["placeholders"],setup(j){const M=j,x=g(!1),h=g(null),w=g(!1),y=g(null),B=s=>{const t=h.value,r=t.value||"",l=t.selectionStart||0,u=t.selectionEnd||0,c=`${r.substring(0,l)}${s}${r.substring(u)}`;t.value=c,o.response=c,setTimeout(()=>{t.focus(),t.setSelectionRange(l+s.length,l+s.length)},0),x.value=!1},R=s=>{o.response=s.target.value},o=N({name:null,trigger:null,match_criteria:null,response_type:"text",response:null}),Z=g([{value:"exact match",label:f("When text is an exact match to trigger text")},{value:"contains",label:f("When text contains trigger text")}]),T=g([{value:"text",label:f("Respond with text")},{value:"image",label:f("Respond with image")},{value:"audio",label:f("Respond with audio")}]),P=s=>{const t=s.target.files[0],r=new FileReader;r.onload=l=>{o.response=t},r.readAsDataURL(t)},$=()=>{o.response=null},E=()=>{o.post("/automation/basic",{preserveScroll:!0,onSuccess:()=>o.reset()})},b=s=>{const t=h.value,r=t.selectionStart,l=t.selectionEnd,u=o.response.slice(r,l);let c="";s=="bold"?c=o.response.slice(0,r)+"*"+u+"*"+o.response.slice(l):s=="italic"?c=o.response.slice(0,r)+"_"+u+"_"+o.response.slice(l):s=="strike-through"?c=o.response.slice(0,r)+"~"+u+"~"+o.response.slice(l):s=="monospace"&&(c=o.response.slice(0,r)+"```"+u+"```"+o.response.slice(l)),t.value=c,setTimeout(()=>{s=="monospace"?t.setSelectionRange(r+3,l+3):t.setSelectionRange(r+1,l+1),t.focus()},0)},A=s=>{s.stopPropagation(),w.value=!w.value},U=()=>{w.value=!1},H=s=>{const t=h.value,r=t.value||"",l=t.selectionStart||0,u=t.selectionEnd||0,c=r.substring(0,l)+s.i+r.substring(u);t.value=c,o.response=c,setTimeout(()=>{t.focus(),t.setSelectionRange(l+s.i.length,l+s.i.length)},0)},C=s=>{y.value&&!y.value.contains(s.target)&&!h.value.contains(s.target)&&U()};return O(()=>{document.addEventListener("click",C)}),F(()=>{document.removeEventListener("click",C)}),(s,t)=>(d(),a(V,null,[p(D,null,{default:k(()=>{var r;return[e("div",K,[e("div",Q,[e("div",null,[e("h2",X,n(s.$t("Create automation")),1),e("p",Y,[t[13]||(t[13]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),e("span",ee,n(s.$t("Create reply automation using your own criteria")),1)])]),e("div",null,[p(i(z),{href:"/automation/basic",class:"flex items-center space-x-4 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:k(()=>[t[14]||(t[14]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M5.841 5.28a.75.75 0 0 0-1.06-1.06L1.53 7.47L1 8l.53.53l3.25 3.25a.75.75 0 0 0 1.061-1.06l-1.97-1.97H24.25a.75.75 0 0 0 0-1.5H3.871l1.97-1.97Z","clip-rule":"evenodd"})],-1)),_(" "+n(s.$t("Back")),1)]),_:1})])]),e("form",{onSubmit:t[11]||(t[11]=L(l=>E(),["prevent"])),class:"bg-white border py-5 px-5 rounded-[0.5rem]"},[e("div",te,[e("div",se,[e("h2",oe,n(s.$t("Name")),1)]),e("div",le,[e("div",ie,[p(G,{modelValue:i(o).name,"onUpdate:modelValue":t[0]||(t[0]=l=>i(o).name=l),type:"text",error:i(o).errors.name,class:m("w-full"),labelClass:"mb-0"},null,8,["modelValue","error"])])])]),e("div",ne,[e("div",re,[e("h2",ae,n(s.$t("Trigger")),1),e("span",de,[t[15]||(t[15]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),_(" "+n(s.$t("Add the string of text responsible for triggering the response")),1)])]),e("div",ce,[e("div",ue,[p(W,{modelValue:i(o).trigger,"onUpdate:modelValue":t[1]||(t[1]=l=>i(o).trigger=l),type:"text",error:i(o).errors.trigger,textAreaRows:3,class:m("sm:col-span-6 mb-10")},null,8,["modelValue","error"])])])]),e("div",pe,[e("div",me,[e("h2",ge,n(s.$t("Match criteria")),1),e("span",he,[t[16]||(t[16]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),_(" "+n(s.$t("Select the criteria for matching the trigger text above")),1)])]),e("div",ve,[e("div",fe,[p(S,{modelValue:i(o).match_criteria,"onUpdate:modelValue":t[2]||(t[2]=l=>i(o).match_criteria=l),options:Z.value,error:i(o).errors.match_criteria,class:m("sm:col-span-6"),placeholder:s.$t("Select criteria")},null,8,["modelValue","options","error","placeholder"])])])]),e("div",xe,[e("div",we,[e("h2",be,n(s.$t("Response type")),1)]),e("div",_e,[e("div",ye,[p(S,{modelValue:i(o).response_type,"onUpdate:modelValue":[t[3]||(t[3]=l=>i(o).response_type=l),$],options:T.value,error:i(o).errors.response_type,class:m("sm:col-span-6"),placeholder:"Select Type"},null,8,["modelValue","options","error"])])])]),i(o).response_type==="text"?(d(),a("div",ke,[e("div",$e,[e("h2",Ce,n(s.$t("Text response")),1)]),e("div",Ve,[e("div",Le,[e("div",null,[e("div",Se,[e("div",je,[e("textarea",{class:m(["block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6",i(o).errors.response?"ring-[#b91c1c]":"ring-gray-300"]),onInput:R,rows:"3",ref_key:"textareaRef",ref:h},n(i(o).response),35)]),i(o).errors.response?(d(),a("div",Me,n(i(o).errors.response),1)):v("",!0)]),e("div",Be,[e("button",{type:"button",onClick:t[4]||(t[4]=l=>x.value=!0),class:"bg-slate-100 px-2 py-1 rounded-md text-sm flex items-center gap-x-1 shadow-sm"},t[17]||(t[17]=[_(" Add Variable "),e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M8.25 15L12 18.75L15.75 15m-7.5-6L12 5.25L15.75 9"})],-1)])),t[22]||(t[22]=e("div",{class:"ml-auto"},null,-1)),e("button",{type:"button",onClick:t[5]||(t[5]=l=>b("bold")),class:"hover:bg-slate-100 rounded p-1 ml-3"},t[18]||(t[18]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M5 3h8c1.06 0 2.078.474 2.828 1.318C16.578 5.162 17 6.307 17 7.5c0 1.193-.421 2.338-1.172 3.182C15.078 11.526 14.061 12 13 12H5zm0 9h10.039a4.44 4.44 0 0 1 3.154 1.318A4.52 4.52 0 0 1 19.5 16.5a4.52 4.52 0 0 1-1.307 3.182A4.442 4.442 0 0 1 15.038 21H5z"})],-1)])),e("button",{type:"button",onClick:t[6]||(t[6]=l=>b("italic")),class:"hover:bg-slate-100 rounded p-1 ml-3"},t[19]||(t[19]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M10 4.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-3.514l-5.828 13h3.342a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.514l5.828-13H20.75a.75.75 0 0 1-.75-.75Z"})],-1)])),e("button",{type:"button",onClick:t[7]||(t[7]=l=>b("strike-through")),class:"hover:bg-slate-100 rounded p-1 ml-3"},t[20]||(t[20]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"m16.533 12.5l.054.043c.93.75 1.538 1.77 1.538 3.066a4.13 4.13 0 0 1-1.479 3.177c-1.058.904-2.679 1.464-4.974 1.464c-2.35 0-4.252-.837-5.318-1.865a.75.75 0 1 1 1.042-1.08c.747.722 2.258 1.445 4.276 1.445c2.065 0 3.296-.504 3.999-1.105a2.63 2.63 0 0 0 .954-2.036c0-.764-.337-1.38-.979-1.898c-.649-.523-1.598-.931-2.76-1.211H3.75a.75.75 0 0 1 0-1.5h26.5a.75.75 0 0 1 0 1.5ZM12.36 5C9.37 5 8.105 6.613 8.105 7.848c0 .411.072.744.193 1.02a.75.75 0 0 1-1.373.603a3.988 3.988 0 0 1-.32-1.623c0-2.363 2.271-4.348 5.755-4.348c1.931 0 3.722.794 4.814 1.5a.75.75 0 1 1-.814 1.26c-.94-.607-2.448-1.26-4-1.26Z"})],-1)])),e("button",{type:"button",onClick:t[8]||(t[8]=l=>b("monospace")),class:"hover:bg-slate-100 rounded p-1 ml-3"},t[21]||(t[21]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5"})],-1)])),e("div",Re,[e("button",{type:"button",onClick:A},"😀"),w.value?(d(),a("div",{key:0,class:"absolute right-0 bottom-full",ref_key:"emojiPickerRef",ref:y},[p(i(J),{native:!0,onSelect:H})],512)):v("",!0)])])]),e("button",Ze,n(s.$t("Save")),1)])])])):i(o).response_type==="image"||i(o).response_type==="audio"?(d(),a("div",Te,[e("div",Pe,[i(o).response_type==="image"?(d(),a("h2",Ee,n(s.$t("Image response")),1)):(d(),a("h2",Ae,n(s.$t("Audio response")),1))]),e("div",Ue,[e("div",He,[e("div",{class:m([i(o).errors.response?"border-[#b91c1c]":"border-gray-300","flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-md"])},[e("input",{type:"file",class:"sr-only",accept:i(o).response_type==="image"?".jpg, .png":".mp3",ref:"fileInput",id:"file-upload",onChange:t[9]||(t[9]=l=>P(l))},null,40,Ne),e("div",Oe,[e("div",null,[i(o).response?(d(),a("div",Fe,[e("div",ze,[t[24]||(t[24]=e("div",null,[e("svg",{class:"mx-auto h-6 w-6 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M14 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"}),e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7.268 4.658a54.647 54.647 0 0 1 9.465 0l1.51.132a3.138 3.138 0 0 1 2.831 2.66a30.604 30.604 0 0 1 0 9.1a3.138 3.138 0 0 1-2.831 2.66l-1.51.131c-3.15.274-6.316.274-9.465 0l-1.51-.131a3.138 3.138 0 0 1-2.832-2.66a30.601 30.601 0 0 1 0-9.1a3.138 3.138 0 0 1 2.831-2.66l1.51-.132Zm9.335 1.495a53.147 53.147 0 0 0-9.206 0l-1.51.131A1.638 1.638 0 0 0 4.41 7.672a29.101 29.101 0 0 0-.311 5.17L7.97 8.97a.75.75 0 0 1 1.09.032l3.672 4.13l2.53-.844a.75.75 0 0 1 .796.21l3.519 3.91a29.101 29.101 0 0 0 .014-8.736a1.638 1.638 0 0 0-1.478-1.388l-1.51-.131Zm2.017 11.435l-3.349-3.721l-2.534.844a.75.75 0 0 1-.798-.213l-3.471-3.905l-4.244 4.243c.049.498.11.996.185 1.491a1.638 1.638 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131c.178-.016.35-.06.507-.128Z","clip-rule":"evenodd"})])],-1)),e("div",Ie,[e("span",De,n(((r=i(o).response)==null?void 0:r.name)??i(o).response),1),e("button",{type:"button",onClick:t[10]||(t[10]=l=>$())},t[23]||(t[23]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1)]))])])])):v("",!0),e("div",Ge,[i(o).response_type==="image"?(d(),a("label",We,[e("p",null,n(s.$t("Click to upload image")),1),e("p",qe,n(s.$t("PNG or JPG files only")),1)])):(d(),a("label",Je,[e("p",null,n(s.$t("Click to upload audio")),1),e("p",Ke,n(s.$t("MP3 files only")),1)]))])])])],2),i(o).errors.response?(d(),a("div",Qe,n(i(o).errors.response),1)):v("",!0),e("button",Xe,n(s.$t("Save")),1)])])])):v("",!0)],32)])]}),_:1}),p(q,{label:s.$t("Select variable"),isOpen:x.value},{default:k(()=>[t[25]||(t[25]=e("div",{class:"flex bg-slate-50 p-2 rounded-md mt-3"},[e("span",{class:"font-light text-sm"},"Select a placeholder to add to your response. The placeholder will replace itself with the actual data.")],-1)),e("div",Ye,[e("div",et,[(d(!0),a(V,null,I(M.placeholders,r=>(d(),a("button",{onClick:l=>B(r.value),class:"col-span-1 bg-gray-100 p-2 rounded-md text-left hover:bg-gray-50"},n(s.$t(r.label)),9,tt))),256))]),e("div",st,[e("button",{type:"button",onClick:t[12]||(t[12]=L(r=>x.value=!1,["self"])),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},n(s.$t("Cancel")),1)])])]),_:1},8,["label","isOpen"])],64))}};export{Vt as default};

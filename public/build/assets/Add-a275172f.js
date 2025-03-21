import{r as m,m as q,o as n,c as i,a as e,w as H,v as D,t as a,F as z,e as S,b as x,n as w,G as X,i as P,g as R,f as E,k as j,u as W,l as Q,a2 as oe,h as ne,x as re,O as ie}from"./app-a39c937f.js";import{_ as de}from"./App-c36b28d4.js";import{_ as T}from"./FormInput-4b7fa008.js";import{_ as J}from"./FormSelect-c7672027.js";import{_ as ue}from"./FormTextArea-e893dff2.js";import{_ as ce}from"./Modal-df1e3aae.js";import"./index-80d9f634.js";/* empty css              */import"./Sidebar-cfdf4c27.js";import"./Menu-bdf286ac.js";import"./ProfileModal-61a09d92.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./transition-37a067aa.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./micro-task-89dcd6af.js";import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";import"./index-8758cb17.js";import"./MobileSidebar-d61cbb69.js";import"./pusher-4059f127.js";const me={class:"normal-case"},pe={class:w("sm:col-span-6")},ve={class:"mt-2"},he={class:"flex items-center justify-between mt-2 mb-2"},ge={class:"text-xs"},fe={class:"flex items-center space-x-3"},xe={key:0,class:"bg-gray-100 p-2 rounded-md"},be={class:"mb-4"},we={class:"text-slate-600 mb-2"},ye={class:"text-xs"},_e={class:"w-[10%] text-sm"},Ce={class:"w-[90%]"},$e=["onUpdate:modelValue","placeholder"],ke={key:0,class:"p-2 bg-red-100 rounded-md flex items-center gap-x-2 mt-4"},Ve={class:"text-sm"},Me={__name:"BodyTextArea",props:{modelValue:[String,Number]},emits:["update:modelValue","updateExamples"],setup(Y,{emit:B}){const d=m(""),$=m(null),y=m([]),f=m([]),k=m("1098"),V=m("0"),C=m(0),N=()=>{let u=parseInt(k.value);if(parseInt(d.value.length)<u){const p=`{{${y.value.length+1}}}`;d.value.indexOf(p)===-1&&(d.value+=p,y.value.push(p),f.value.push("")),l(),A()}},U=()=>{const u=/\{\{\d+\}\}/g,r=d.value.match(u);if(r){r.reduce((p,b)=>{const _=parseInt(b.match(/\d+/)[0]);return _>p?_:p},0);for(let p=1;p<=r.length;p++){const b=`{{${p}}}`;if(!y.value.includes(b))break}C.value=r.length;const c=[...new Set(r)];y.value=c,y.value.forEach((p,b)=>{const _=parseInt(p.match(/\d+/)[0]),F=b+1,G=`{{${_}}}`,Z=`{{${F}}}`;d.value=d.value.replace(G,Z),y.value[b]=Z})}else y.value=[],f.value=[];M(),l(),A()},M=()=>{const u=y.value.length,r=f.value.length;if(u!==r){const c=u-r;if(c>0)for(let p=0;p<c;p++)f.value.push("");else c<0&&f.value.splice(u)}},l=u=>{let r=parseInt(k.value),c=parseInt(d.value.length);c<=r?V.value=c:(d.value=d.value.slice(0,r),V.value=r)},I=B,A=u=>{I("update:modelValue",d.value),I("updateExamples",f.value)},g=q(()=>f.value.some(u=>!u)),h=u=>{const r=$.value,c=r.selectionStart,p=r.selectionEnd,b=d.value.slice(c,p);let _="";u=="bold"?_=d.value.slice(0,c)+"*"+b+"*"+d.value.slice(p):u=="italic"?_=d.value.slice(0,c)+"_"+b+"_"+d.value.slice(p):u=="strike-through"?_=d.value.slice(0,c)+"~"+b+"~"+d.value.slice(p):u=="monospace"&&(_=d.value.slice(0,c)+"```"+b+"```"+d.value.slice(p)),d.value=_,l(),A(),setTimeout(()=>{u=="monospace"?r.setSelectionRange(c+3,p+3):r.setSelectionRange(c+1,p+1),r.focus()},0)};return(u,r)=>(n(),i("div",me,[e("div",null,[e("div",pe,[e("div",ve,[H(e("textarea",{ref_key:"textAreaRef",ref:$,class:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-gray-300","onUpdate:modelValue":r[0]||(r[0]=c=>d.value=c),onInput:U,rows:"5"},"                    ",544),[[D,d.value]])])]),e("div",he,[e("span",ge,a(u.$t("Characters"))+": "+a(V.value+"/"+k.value),1),e("div",fe,[e("button",{onClick:r[1]||(r[1]=c=>h("bold")),class:"hover:bg-slate-100 rounded p-1"},r[5]||(r[5]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M5 3h8c1.06 0 2.078.474 2.828 1.318C16.578 5.162 17 6.307 17 7.5c0 1.193-.421 2.338-1.172 3.182C15.078 11.526 14.061 12 13 12H5zm0 9h10.039a4.44 4.44 0 0 1 3.154 1.318A4.52 4.52 0 0 1 19.5 16.5a4.52 4.52 0 0 1-1.307 3.182A4.442 4.442 0 0 1 15.038 21H5z"})],-1)])),e("button",{onClick:r[2]||(r[2]=c=>h("italic")),class:"hover:bg-slate-100 rounded p-1"},r[6]||(r[6]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M10 4.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-3.514l-5.828 13h3.342a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5h3.514l5.828-13H20.75a.75.75 0 0 1-.75-.75Z"})],-1)])),e("button",{onClick:r[3]||(r[3]=c=>h("strike-through")),class:"hover:bg-slate-100 rounded p-1"},r[7]||(r[7]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"m16.533 12.5l.054.043c.93.75 1.538 1.77 1.538 3.066a4.13 4.13 0 0 1-1.479 3.177c-1.058.904-2.679 1.464-4.974 1.464c-2.35 0-4.252-.837-5.318-1.865a.75.75 0 1 1 1.042-1.08c.747.722 2.258 1.445 4.276 1.445c2.065 0 3.296-.504 3.999-1.105a2.63 2.63 0 0 0 .954-2.036c0-.764-.337-1.38-.979-1.898c-.649-.523-1.598-.931-2.76-1.211H3.75a.75.75 0 0 1 0-1.5h26.5a.75.75 0 0 1 0 1.5ZM12.36 5C9.37 5 8.105 6.613 8.105 7.848c0 .411.072.744.193 1.02a.75.75 0 0 1-1.373.603a3.988 3.988 0 0 1-.32-1.623c0-2.363 2.271-4.348 5.755-4.348c1.931 0 3.722.794 4.814 1.5a.75.75 0 1 1-.814 1.26c-.94-.607-2.448-1.26-4-1.26Z"})],-1)])),e("button",{onClick:r[4]||(r[4]=c=>h("monospace")),class:"hover:bg-slate-100 rounded p-1"},r[8]||(r[8]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5"})],-1)])),e("button",{type:"button",onClick:N,class:"hover:bg-slate-100 rounded p-1 text-sm"},a(u.$t("Add variable")),1)])])]),y.value.length>0?(n(),i("div",xe,[e("div",be,[e("h2",we,a(u.$t("Samples for body content")),1),e("p",ye,a(u.$t("Please add an example for each variable in your body text. Do not use real customer information. Cloud API hosted by Meta reviews templates and variable parameters to protect the security and integrity of their services.")),1)]),(n(!0),i(z,null,S(y.value,(c,p)=>(n(),i("div",{key:p,class:"flex items-center mb-1"},[e("div",_e,a(c),1),e("div",Ce,[H(e("input",{type:"text","onUpdate:modelValue":b=>f.value[p]=b,placeholder:"Enter content for "+c,class:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-gray-300",required:""},null,8,$e),[[D,f.value[p]]])])]))),128)),g.value?(n(),i("div",ke,[r[9]||(r[9]=e("svg",{class:"text-red-800",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75"}),e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M14.27 3.993a2.749 2.749 0 0 0-4.54 0l-.432.632a75.95 75.95 0 0 0-6.944 12.563l-.09.208a2.511 2.511 0 0 0 2.024 3.497a69.43 69.43 0 0 0 15.424 0a2.511 2.511 0 0 0 2.024-3.497l-.09-.208a75.951 75.951 0 0 0-6.944-12.563zm-3.302.846a1.25 1.25 0 0 1 2.064 0l.432.632a74.444 74.444 0 0 1 6.806 12.315l.09.208a1.011 1.011 0 0 1-.814 1.408c-5.015.56-10.077.56-15.092 0a1.011 1.011 0 0 1-.815-1.408l.09-.208a74.45 74.45 0 0 1 6.807-12.315z","clip-rule":"evenodd"})],-1)),e("p",Ve,a(u.$t("Add sample text")),1)])):x("",!0)])):x("",!0)]))}},Le={class:"normal-case"},Ee={class:w("sm:col-span-6")},Ue={class:"mt-2"},Ie={class:"flex items-center justify-between mt-2 mb-2"},Ae={class:"text-xs"},Ze={class:"flex items-center space-x-3"},Be=["disabled"],Oe={key:0,class:"bg-gray-100 p-2 rounded-md"},Te={class:"mb-4"},Ne={class:"text-slate-600 mb-2"},Pe={class:"text-xs"},je={class:"w-[10%] text-sm"},Re={class:"w-[90%]"},He=["onUpdate:modelValue","placeholder"],De={key:0,class:"p-2 bg-red-100 rounded-md flex items-center gap-x-2 mt-4"},ze={class:"text-sm"},Se={__name:"HeaderTextArea",props:{modelValue:[String,Number]},emits:["update:modelValue","updateExamples"],setup(Y,{emit:B}){const d=m(""),$=m([]),y=m({}),f=m([]),k=m("60"),V=m("0"),C=m(!1),N=()=>{let g=parseInt(k.value);if(parseInt(d.value.length)<g&&$.value.length===0){const u="{{1}}";d.value+=u,$.value.push(u),y.value[u]=1,f.value.push(""),C.value=!0,M()}},U=()=>{const g=/\{\{\d+\}\}/g,h=d.value.match(g);h&&h.length>1&&(d.value=h[0]),h?($.value=[h[0]],y.value={[h[0]]:1},f.value=[""],C.value=!0):($.value=[],y.value={},f.value=[],C.value=!1),M(),I()},M=g=>{let h=parseInt(k.value),u=parseInt(d.value.length);u<=h?V.value=u:(d.value=d.value.slice(0,h),V.value=h),I()},l=B,I=g=>{l("update:modelValue",d.value),l("updateExamples",f.value)};X(d,g=>{const h=parseInt(k.value);g.length>h&&(d.value=g.slice(0,h)),M(),U()});const A=q(()=>f.value.some(g=>!g));return(g,h)=>(n(),i("div",Le,[e("div",null,[e("div",Ee,[e("div",Ue,[H(e("input",{type:"text",class:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-gray-300","onUpdate:modelValue":h[0]||(h[0]=u=>d.value=u),onInput:U,rows:"5"},null,544),[[D,d.value]])])]),e("div",Ie,[e("span",Ae,a(g.$t("Characters"))+": "+a(V.value+"/"+k.value),1),e("div",Ze,[e("button",{type:"button",onClick:N,class:"hover:bg-slate-100 rounded p-1 text-sm cursor-pointer",disabled:C.value},a(g.$t("Add variable"))+" ("+a(g.$t("Max: 1"))+")",9,Be)])])]),$.value.length>0?(n(),i("div",Oe,[e("div",Te,[e("h2",Ne,a(g.$t("Samples for header content")),1),e("p",Pe,a(g.$t("Please add an example for each variable in your body text. Do not use real customer information. Cloud API hosted by Meta reviews templates and variable parameters to protect the security and integrity of their services.")),1)]),(n(!0),i(z,null,S($.value,(u,r)=>(n(),i("div",{key:r,class:"flex items-center mb-1"},[e("div",je,a(u),1),e("div",Re,[H(e("input",{type:"text","onUpdate:modelValue":c=>f.value[r]=c,placeholder:"Enter content for "+u,class:"block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-gray-300",required:""},null,8,He),[[D,f.value[r]]])])]))),128)),A.value?(n(),i("div",De,[h[1]||(h[1]=e("svg",{class:"text-red-800",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75"}),e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M14.27 3.993a2.749 2.749 0 0 0-4.54 0l-.432.632a75.95 75.95 0 0 0-6.944 12.563l-.09.208a2.511 2.511 0 0 0 2.024 3.497a69.43 69.43 0 0 0 15.424 0a2.511 2.511 0 0 0 2.024-3.497l-.09-.208a75.951 75.951 0 0 0-6.944-12.563zm-3.302.846a1.25 1.25 0 0 1 2.064 0l.432.632a74.444 74.444 0 0 1 6.806 12.315l.09.208a1.011 1.011 0 0 1-.814 1.408c-5.015.56-10.077.56-15.092 0a1.011 1.011 0 0 1-.815-1.408l.09-.208a74.45 74.45 0 0 1 6.807-12.315z","clip-rule":"evenodd"})],-1)),e("p",ze,a(g.$t("Add sample text")),1)])):x("",!0)])):x("",!0)]))}},Ye={class:"px-4 md:px-0 flex flex-col bg-white border-l py-4 text-[#000] md:overflow-y-hidden capitalize"},Fe={class:"flex justify-between md:px-8 border-b pb-4"},Ge={class:"text-xl mb-1"},Ke={class:"flex items-center text-sm leading-6 text-gray-600"},Xe={class:"ml-1 mt-1"},qe={class:"space-x-2 flex items-center"},We=["disabled"],Qe={key:0},Je={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},et={class:"md:flex md:flex-grow-1 md:h-[88vh] mt-4 md:mt-0"},tt={class:"md:w-[50%] md:p-8 overflow-y-auto"},lt={key:0,class:"p-4 md:p-8 overflow-y-auto p-4"},st={class:"bg-slate-50 border border-primary shadow rounded-md p-4 py-8"},at={class:"text-center text-lg font-medium mb-4"},ot={class:"text-center mb-4"},nt={class:"flex justify-center"},rt={key:0},it={key:1},dt={class:"grid gap-x-6 gap-y-4 sm:grid-cols-6 mb-8 capitalize"},ut={key:0},ct={class:"text-slate-600"},mt={class:"text-xs"},pt={class:"text-slate-600 text-xs"},vt={class:"grid grid-cols-4 mt-2 bg-[#f9f9fa] rounded-lg mb-4"},ht={class:"mb-8"},gt={key:0},ft={key:1},xt={class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},bt={class:"text-center"},wt={key:0,class:"flex justify-center items-center"},yt={class:"flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2"},_t={class:"flex items-center space-x-2"},Ct={class:"text-sm"},$t={key:1,for:"file-upload"},kt={class:"flex text-sm text-gray-600"},Vt={for:"file-upload",class:"relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},Mt={class:"text-xs text-gray-500"},Lt={key:2},Et={class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},Ut={class:"text-center"},It={key:0,class:"flex justify-center items-center"},At={class:"flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2"},Zt={class:"flex items-center space-x-2"},Bt={class:"text-sm"},Ot={key:1,for:"file-upload2"},Tt={class:"flex text-sm text-gray-600"},Nt={for:"file-upload2",class:"relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},Pt={class:"text-xs text-gray-500"},jt={key:3},Rt={class:"flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"},Ht={class:"text-center"},Dt={key:0,class:"flex justify-center items-center"},zt={class:"flex justify-center items-center space-x-3 py-1 border bg-slate-100 rounded-lg mb-2 w-fit px-2"},St={class:"flex items-center space-x-2"},Yt={class:"text-sm"},Ft={key:1,for:"file-upload3"},Gt={class:"flex text-sm text-gray-600"},Kt={for:"file-upload3",class:"relative cursor-pointer bg-white rounded-md font-medium hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"},Xt={class:"text-xs text-gray-500"},qt={class:"text-slate-600"},Wt={class:"text-xs"},Qt={class:"text-slate-600 text-xs"},Jt={class:"mb-8"},el={class:"text-slate-600"},tl={class:"text-xs"},ll={class:"text-slate-600 text-xs"},sl={class:"mb-8"},al={class:"text-xs"},ol={class:"text-slate-600"},nl={class:"text-xs"},rl={class:"text-slate-600 text-xs"},il={class:"grid grid-cols-2 mt-3 mb-2"},dl={class:"grid grid-cols-2 mt-3 mb-2"},ul={key:0,class:"mt-3 mb-8"},cl={class:"flex items-center justify-between pb-1"},ml={class:"text-sm"},pl=["onClick"],vl={class:"flex space-x-1 border-t pt-2"},hl={class:"md:w-[50%] py-20 px-4 md:px-20 overflow-y-auto",style:{"background-image":"url('/images/whatsapp-bg-02.png')"}},gl={class:"mr-auto rounded-lg rounded-tl-none my-1 p-1 text-sm bg-white flex flex-col relative speech-bubble-left w-[25em]"},fl={key:0,class:"mb-4 bg-[#ccd0d5] flex justify-center py-8 rounded"},xl={key:0,src:"/images/image-placeholder.png"},bl={key:1,src:"/images/video-placeholder.png"},wl={key:2,src:"/images/document-placeholder.png"},yl={key:1,class:"text-gray-700 text-sm mb-1 px-2 normal-case whitespace-pre-wrap"},_l=["innerHTML"],Cl={class:"text-[#8c8c8c] mt-1 px-2"},$l={class:"text-[13px]"},kl={key:0,class:"mr-auto text-sm text-[#00a5f4] flex flex-col relative max-w-[25em]"},Vl={key:0,xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},Ml={key:1,xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},Ll={key:2,src:"/images/icons/link.png",class:"h-4"},El={key:3,src:"/images/icons/reply.png",class:"h-4"},Ul={class:"mt-5 grid grid-cols-1 gap-x-6 gap-y-4"},Il={class:"text-center"},Al={key:0,class:"bg-[#fae6e6] text-[darkred] rounded text-sm p-2 mb-4"},Zl={key:1},Bl={class:"text-xl capitalize"},ss={__name:"Add",props:["languages","settings"],setup(Y){const B=Y,d=m("60"),$=m("0"),y=m("1098"),f=m("0"),k=m("60"),V=m("0"),C=m(!1),N=m(null),U=m(!1),M=m(null);m([]);const l=m({name:null,category:"UTILITY",language:null,header:{format:"TEXT",text:null,example:[]},body:{text:null,variables:null,example:[]},footer:{text:null},buttons:[]}),I=m(B.settings.metadata),A=m(I.value?JSON.parse(I.value):null),g=m(""),h=s=>{const t=/\*(.*?)\*/g,v=/_(.*?)_/g,o=/~(.*?)~/g,O=/```(.*?)```/g;return s.replace(t,"<b>$1</b>").replace(v,"<i>$1</i>").replace(o,"<del>$1</del>").replace(O,"<code>$1</code>")};X(()=>l.value.body.text,s=>{g.value=s?h(s):null}),m("text");const u=m(B.languages),r=m([{value:"UTILITY",label:"Utility"},{value:"MARKETING",label:"Marketing"}]),c=s=>{l.value.header.format=s,l.value.header.example=""},p=s=>{const t=s.target.value.toLowerCase();l.value.name=t.replace(/[^a-zA-Z0-9_]/g,"")},b=s=>{const t=s.target.files[0],v=new FileReader;v.onload=o=>{N.value=o.target.result,l.value.header.example=t},v.readAsDataURL(t)},_=()=>{l.value.header.example=""},F=s=>{s.preventDefault(),l.value.name+="_"},G=s=>{let t=0,v=0;switch(s){case"header":t=d.value,v=l.value.header.text.length,v<=t?$.value=v:(l.value.header.text=l.value.header.text.slice(0,t),$.value=t);break;case"body":t=y.value,v=l.value.body.text.length,v<=t?f.value=v:(l.value.body.text=l.value.body.text.slice(0,t),f.value=t);break;case"footer":t=k.value,v=l.value.footer.text.length,v<=t?V.value=v:(l.value.footer.text=l.value.footer.text.slice(0,t),V.value=t);break}},Z=s=>{s==="call"?l.value.buttons.filter(v=>v.type==="PHONE_NUMBER").length<1&&l.value.buttons.push({name:"Call Phone Number",type:"PHONE_NUMBER",country:null,text:null,phone_number:null}):s==="website"?l.value.buttons.filter(v=>v.type==="URL").length<2&&l.value.buttons.push({name:"Website URL",type:"URL",text:null,url:null}):s==="custom"?l.value.buttons.filter(v=>v.type==="QUICK_REPLY").length<6&&l.value.buttons.push({name:"Custom Button",type:"QUICK_REPLY",text:null}):s==="offer"&&l.value.buttons.filter(v=>v.type==="COPY_CODE").length<1&&l.value.buttons.push({name:"Offer Code",type:"COPY_CODE",example:null}),console.log(l.value)},ee=s=>{s>=0&&s<l.value.buttons.length&&l.value.buttons.splice(s,1)},K=q(()=>l.value.name===null||l.value.name.trim()===""||l.value.language===null||l.value.language.trim()===""||l.value.category===null||l.value.category.trim()===""||l.value.buttons.some(s=>s.name===null||s.name===""||s.type===null||s.type===""||s.country===null||s.country===""||s.text===null||s.text===""||s.phone_number===null||s.phone_number==="")||l.value.header.example.length>0&&!Object.keys(l.value.header.example).every(s=>{const t=l.value.header.example[s];return t!=null&&t!==""})?!1:!(l.value.body.text===null||l.value.body.text.trim()===""||l.value.body.example.length>0&&!Object.keys(l.value.body.example).every(t=>{const v=l.value.body.example[t];return v!=null&&v!==""}))),te=s=>{l.value.body.example=s},le=s=>{l.value.header.example=s},se=()=>{C.value=!0,U.value=!0,re.post("/templates/create",l.value,{headers:{"Content-Type":"multipart/form-data"}}).then(s=>{s.data.success===!1?(C.value=!1,M.value=s.data.message):ie.visit("/templates",{method:"get"})}).catch(s=>{})},ae=()=>{U.value=!1,setTimeout(()=>{M.value=null},500)};return X(l,()=>{K.value}),(s,t)=>(n(),P(de,null,{default:R(()=>{var v;return[e("div",Ye,[e("div",Fe,[e("div",null,[e("h2",Ge,a(s.$t("New template")),1),e("p",Ke,[t[22]||(t[22]=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),e("span",Xe,a(s.$t("Create template for review")),1)])]),e("div",qe,[E(W(Q),{href:"/templates",class:"rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:R(()=>[j(a(s.$t("Back")),1)]),_:1}),e("button",{onClick:t[0]||(t[0]=o=>se()),type:"button",class:w(["capitalize rounded-md px-3 py-2 float-right text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",K.value===!0?"bg-indigo-600 hover:bg-indigo-500 shadow-sm":"bg-gray-200"]),disabled:!K.value||C.value},[C.value?(n(),i("svg",Je,t[23]||(t[23]=[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(n(),i("span",Qe,a(s.$t("Create template")),1))],10,We)])]),e("div",et,[e("div",tt,[(v=A.value)!=null&&v.whatsapp?(n(),i("div",it,[e("div",dt,[E(T,{modelValue:l.value.name,"onUpdate:modelValue":t[1]||(t[1]=o=>l.value.name=o),name:s.$t("Name"),type:"text",onInput:p,onKeydown:oe(ne(F,["prevent"]),["space"]),class:w("sm:col-span-6")},null,8,["modelValue","name","onKeydown"]),E(J,{modelValue:l.value.category,"onUpdate:modelValue":t[2]||(t[2]=o=>l.value.category=o),options:r.value,name:s.$t("Category"),class:w("sm:col-span-3"),placeholder:s.$t("Select category")},null,8,["modelValue","options","name","placeholder"]),E(J,{modelValue:l.value.language,"onUpdate:modelValue":t[3]||(t[3]=o=>l.value.language=o),options:u.value,name:s.$t("Language"),class:w("sm:col-span-3"),placeholder:s.$t("Select language")},null,8,["modelValue","options","name","placeholder"])]),l.value.category==="UTILITY"||l.value.category==="MARKETING"?(n(),i("div",ut,[e("h2",ct,[j(a(s.$t("Header"))+" ",1),e("span",mt,"("+a(s.$t("Optional"))+")",1)]),e("span",pt,a(s.$t("Add a title or choose which type of media you'll use for this header")),1),e("div",vt,[e("button",{onClick:t[4]||(t[4]=o=>c("TEXT")),class:w(["text-center py-2 text-sm text-slate-800 m-1",l.value.header.format==="TEXT"?"bg-white shadow rounded-lg":""])},a(s.$t("Text")),3),e("button",{onClick:t[5]||(t[5]=o=>c("IMAGE")),class:w(["text-center py-2 text-sm text-slate-800 m-1",l.value.header.format==="IMAGE"?"bg-white shadow rounded-lg":""])},a(s.$t("Image")),3),e("button",{onClick:t[6]||(t[6]=o=>c("VIDEO")),class:w(["text-center py-2 text-sm text-slate-800 m-1",l.value.header.format==="VIDEO"?"bg-white shadow rounded-lg":""])},a(s.$t("Video")),3),e("button",{onClick:t[7]||(t[7]=o=>c("DOCUMENT")),class:w(["text-center py-2 text-sm text-slate-800 m-1",l.value.header.format==="DOCUMENT"?"bg-white shadow rounded-lg":""])},a(s.$t("Document")),3)]),e("div",ht,[l.value.header.format==="TEXT"?(n(),i("div",gt,[E(Se,{modelValue:l.value.header.text,"onUpdate:modelValue":t[8]||(t[8]=o=>l.value.header.text=o),onUpdateExamples:le},null,8,["modelValue"])])):x("",!0),l.value.header.format==="IMAGE"?(n(),i("div",ft,[e("div",xt,[e("input",{type:"file",class:"sr-only",accept:".jpg, .png",ref:"fileInput",id:"file-upload",onChange:t[9]||(t[9]=o=>b(o))},null,544),e("div",bt,[e("div",null,[l.value.header.format==="IMAGE"&&l.value.header.example?(n(),i("div",wt,[e("div",yt,[t[26]||(t[26]=e("div",null,[e("svg",{class:"mx-auto h-6 w-6 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M14 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"}),e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7.268 4.658a54.647 54.647 0 0 1 9.465 0l1.51.132a3.138 3.138 0 0 1 2.831 2.66a30.604 30.604 0 0 1 0 9.1a3.138 3.138 0 0 1-2.831 2.66l-1.51.131c-3.15.274-6.316.274-9.465 0l-1.51-.131a3.138 3.138 0 0 1-2.832-2.66a30.601 30.601 0 0 1 0-9.1a3.138 3.138 0 0 1 2.831-2.66l1.51-.132Zm9.335 1.495a53.147 53.147 0 0 0-9.206 0l-1.51.131A1.638 1.638 0 0 0 4.41 7.672a29.101 29.101 0 0 0-.311 5.17L7.97 8.97a.75.75 0 0 1 1.09.032l3.672 4.13l2.53-.844a.75.75 0 0 1 .796.21l3.519 3.91a29.101 29.101 0 0 0 .014-8.736a1.638 1.638 0 0 0-1.478-1.388l-1.51-.131Zm2.017 11.435l-3.349-3.721l-2.534.844a.75.75 0 0 1-.798-.213l-3.471-3.905l-4.244 4.243c.049.498.11.996.185 1.491a1.638 1.638 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131c.178-.016.35-.06.507-.128Z","clip-rule":"evenodd"})])],-1)),e("div",_t,[e("span",Ct,a(l.value.header.example.name),1),e("button",{onClick:t[10]||(t[10]=o=>_())},t[25]||(t[25]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1)]))])])])):(n(),i("label",$t,t[27]||(t[27]=[e("svg",{class:"mx-auto h-12 w-12 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M14 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"}),e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M7.268 4.658a54.647 54.647 0 0 1 9.465 0l1.51.132a3.138 3.138 0 0 1 2.831 2.66a30.604 30.604 0 0 1 0 9.1a3.138 3.138 0 0 1-2.831 2.66l-1.51.131c-3.15.274-6.316.274-9.465 0l-1.51-.131a3.138 3.138 0 0 1-2.832-2.66a30.601 30.601 0 0 1 0-9.1a3.138 3.138 0 0 1 2.831-2.66l1.51-.132Zm9.335 1.495a53.147 53.147 0 0 0-9.206 0l-1.51.131A1.638 1.638 0 0 0 4.41 7.672a29.101 29.101 0 0 0-.311 5.17L7.97 8.97a.75.75 0 0 1 1.09.032l3.672 4.13l2.53-.844a.75.75 0 0 1 .796.21l3.519 3.91a29.101 29.101 0 0 0 .014-8.736a1.638 1.638 0 0 0-1.478-1.388l-1.51-.131Zm2.017 11.435l-3.349-3.721l-2.534.844a.75.75 0 0 1-.798-.213l-3.471-3.905l-4.244 4.243c.049.498.11.996.185 1.491a1.638 1.638 0 0 0 1.478 1.389l1.51.131c3.063.266 6.143.266 9.206 0l1.51-.131c.178-.016.35-.06.507-.128Z","clip-rule":"evenodd"})],-1)]))),e("div",kt,[e("label",Vt,[e("span",null,a(s.$t("Provide examples of the variables or media in the header")),1)])]),e("p",Mt,a(s.$t("PNG or JPG files only")),1)])])])])):x("",!0),l.value.header.format==="VIDEO"?(n(),i("div",Lt,[e("div",Et,[e("input",{type:"file",class:"sr-only",accept:".mp4",ref:"fileInput",id:"file-upload2",onChange:t[11]||(t[11]=o=>b(o))},null,544),e("div",Ut,[e("div",null,[l.value.header.format==="VIDEO"&&l.value.header.example?(n(),i("div",It,[e("div",At,[t[29]||(t[29]=e("div",null,[e("svg",{class:"mx-auto h-6 w-6 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:"M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5v-1Zm15-2l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5v-5Z"})])],-1)),e("div",Zt,[e("span",Bt,a(l.value.header.example.name),1),e("button",{onClick:t[12]||(t[12]=o=>_())},t[28]||(t[28]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1)]))])])])):(n(),i("label",Ot,t[30]||(t[30]=[e("svg",{class:"mx-auto h-12 w-12 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:"M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4.001 4.001 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5v-1Zm15-2l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5v-5Z"})],-1)]))),e("div",Tt,[e("label",Nt,[e("span",null,a(s.$t("Provide examples of the variables or media in the header")),1)])]),e("p",Pt,a(s.$t("MP4 files only")),1)])])])])):x("",!0),l.value.header.format==="DOCUMENT"?(n(),i("div",jt,[e("div",Rt,[e("input",{type:"file",class:"sr-only",accept:".pdf",ref:"fileInput",id:"file-upload3",onChange:t[13]||(t[13]=o=>b(o))},null,544),e("div",Ht,[e("div",null,[l.value.header.format==="DOCUMENT"&&l.value.header.example?(n(),i("div",Dt,[e("div",zt,[t[32]||(t[32]=e("div",null,[e("svg",{class:"mx-auto h-6 w-6 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M18.53 9L13 3.47a.75.75 0 0 0-.53-.22H8A2.75 2.75 0 0 0 5.25 6v12A2.75 2.75 0 0 0 8 20.75h8A2.75 2.75 0 0 0 18.75 18V9.5a.75.75 0 0 0-.22-.5Zm-5.28-3.19l2.94 2.94h-2.94ZM16 19.25H8A1.25 1.25 0 0 1 6.75 18V6A1.25 1.25 0 0 1 8 4.75h3.75V9.5a.76.76 0 0 0 .75.75h4.75V18A1.25 1.25 0 0 1 16 19.25Z"}),e("path",{fill:"currentColor",d:"M13.49 14.85a3.15 3.15 0 0 1-1.31-1.66a4.44 4.44 0 0 0 .19-2a.8.8 0 0 0-1.52-.19a5 5 0 0 0 .25 2.4A29 29 0 0 1 9.83 16c-.71.4-1.68 1-1.83 1.69c-.12.56.93 2 2.72-1.12a18.58 18.58 0 0 1 2.44-.72a4.72 4.72 0 0 0 2 .61a.82.82 0 0 0 .62-1.38c-.42-.43-1.67-.31-2.29-.23Zm-4.78 3a4.32 4.32 0 0 1 1.09-1.24c-.68 1.08-1.09 1.27-1.09 1.25Zm2.92-6.81c.26 0 .24 1.15.06 1.46a3.07 3.07 0 0 1-.06-1.45Zm-.87 4.88a14.76 14.76 0 0 0 .88-1.92a3.88 3.88 0 0 0 1.08 1.26a12.35 12.35 0 0 0-1.96.67Zm4.7-.18s-.18.22-1.33-.28c1.25-.08 1.46.21 1.33.29Z"})])],-1)),e("div",St,[e("span",Yt,a(l.value.header.example.name),1),e("button",{onClick:t[14]||(t[14]=o=>_())},t[31]||(t[31]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1)]))])])])):(n(),i("label",Ft,t[33]||(t[33]=[e("svg",{class:"mx-auto h-12 w-12 text-gray-400 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M18.53 9L13 3.47a.75.75 0 0 0-.53-.22H8A2.75 2.75 0 0 0 5.25 6v12A2.75 2.75 0 0 0 8 20.75h8A2.75 2.75 0 0 0 18.75 18V9.5a.75.75 0 0 0-.22-.5Zm-5.28-3.19l2.94 2.94h-2.94ZM16 19.25H8A1.25 1.25 0 0 1 6.75 18V6A1.25 1.25 0 0 1 8 4.75h3.75V9.5a.76.76 0 0 0 .75.75h4.75V18A1.25 1.25 0 0 1 16 19.25Z"}),e("path",{fill:"currentColor",d:"M13.49 14.85a3.15 3.15 0 0 1-1.31-1.66a4.44 4.44 0 0 0 .19-2a.8.8 0 0 0-1.52-.19a5 5 0 0 0 .25 2.4A29 29 0 0 1 9.83 16c-.71.4-1.68 1-1.83 1.69c-.12.56.93 2 2.72-1.12a18.58 18.58 0 0 1 2.44-.72a4.72 4.72 0 0 0 2 .61a.82.82 0 0 0 .62-1.38c-.42-.43-1.67-.31-2.29-.23Zm-4.78 3a4.32 4.32 0 0 1 1.09-1.24c-.68 1.08-1.09 1.27-1.09 1.25Zm2.92-6.81c.26 0 .24 1.15.06 1.46a3.07 3.07 0 0 1-.06-1.45Zm-.87 4.88a14.76 14.76 0 0 0 .88-1.92a3.88 3.88 0 0 0 1.08 1.26a12.35 12.35 0 0 0-1.96.67Zm4.7-.18s-.18.22-1.33-.28c1.25-.08 1.46.21 1.33.29Z"})],-1)]))),e("div",Gt,[e("label",Kt,[e("span",null,a(s.$t("Provide examples of the variables or media in the header")),1)])]),e("p",Xt,a(s.$t("PDF files only")),1)])])])])):x("",!0)]),e("h2",qt,[j(a(s.$t("Body"))+" ",1),e("span",Wt,"("+a(s.$t("Required"))+")",1)]),e("span",Qt,a(s.$t("Enter the text for your message in the language that you've selected")),1),e("div",Jt,[e("div",null,[E(Me,{modelValue:l.value.body.text,"onUpdate:modelValue":t[15]||(t[15]=o=>l.value.body.text=o),onUpdateExamples:te},null,8,["modelValue"])])]),e("h2",el,[j(a(s.$t("Footer description"))+" ",1),e("span",tl,"("+a(s.$t("Optional"))+")",1)]),e("span",ll,a(s.$t("Add a short line of text to the bottom of your message template")),1),e("div",sl,[e("div",null,[E(ue,{modelValue:l.value.footer.text,"onUpdate:modelValue":t[16]||(t[16]=o=>l.value.footer.text=o),onInput:t[17]||(t[17]=o=>G("footer")),name:s.$t("Footer text"),showLabel:!1,type:"text",textAreaRows:2,class:w("sm:col-span-6")},null,8,["modelValue","name"]),e("span",al,a(s.$t("Characters"))+": "+a(V.value)+"/"+a(k.value),1)])]),e("h2",ol,[j(a(s.$t("Buttons"))+" ",1),e("span",nl,"("+a(s.$t("Optional"))+")",1)]),e("span",rl,a(s.$t("Create buttons that let customers respond to your message or take action")),1),e("div",il,[e("button",{onClick:t[18]||(t[18]=o=>Z("call")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4 mr-2"},[e("span",null,a(s.$t("Call phone number (1)")),1)]),e("button",{onClick:t[19]||(t[19]=o=>Z("website")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4"},[e("span",null,a(s.$t("Visit website (2)")),1)])]),e("div",dl,[e("button",{onClick:t[20]||(t[20]=o=>Z("offer")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4 mr-2"},[e("span",null,a(s.$t("Copy offer code (1)")),1)]),e("button",{onClick:t[21]||(t[21]=o=>Z("custom")),class:"flex items-center justify-center text-slate-700 text-sm bg-slate-100 hover:bg-slate-200 hover:shadow-sm rounded-lg p-2 px-4"},[e("span",null,a(s.$t("Custom button (6)")),1)])]),l.value.buttons.length>0?(n(),i("div",ul,[(n(!0),i(z,null,S(l.value.buttons,(o,O)=>(n(),i("div",{key:O,class:"bg-[#f9f9fa] p-3 rounded-lg mb-3"},[e("div",cl,[e("span",ml,a(s.$t(o.name)),1),e("button",{onClick:L=>ee(O),class:"bg-slate-200 hover:shadow rounded-full p-1"},t[34]||(t[34]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M17.707 7.707a1 1 0 0 0-1.414-1.414L12 10.586L7.707 6.293a1 1 0 0 0-1.414 1.414L10.586 12l-4.293 4.293a1 1 0 1 0 1.414 1.414L12 13.414l4.293 4.293a1 1 0 1 0 1.414-1.414L13.414 12l4.293-4.293Z","clip-rule":"evenodd"})],-1)]),8,pl)]),e("div",vl,[E(T,{modelValue:o.text,"onUpdate:modelValue":L=>o.text=L,name:s.$t("Button text"),type:"text",class:w(o.type==="QUICK_REPLY"?"w-full":"sm:col-span-2"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name","class"]),o.type==="URL"?(n(),P(T,{key:0,modelValue:o.url,"onUpdate:modelValue":L=>o.url=L,name:s.$t("Website url"),type:"url",class:w("w-full"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):x("",!0),o.type==="PHONE_NUMBER"?(n(),P(T,{key:1,modelValue:o.country,"onUpdate:modelValue":L=>o.country=L,name:s.$t("Country"),type:"text",class:w("sm:col-span-2"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):x("",!0),o.type==="PHONE_NUMBER"?(n(),P(T,{key:2,modelValue:o.phone_number,"onUpdate:modelValue":L=>o.phone_number=L,name:s.$t("Phone number"),type:"text",class:w("sm:col-span-2"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):x("",!0),o.type==="COPY_CODE"?(n(),P(T,{key:3,modelValue:o.example,"onUpdate:modelValue":L=>o.example=L,name:s.$t("Sample code"),type:"text",class:w("w-full"),labelClass:"mb-0"},null,8,["modelValue","onUpdate:modelValue","name"])):x("",!0)])]))),128))])):x("",!0)])):x("",!0)])):(n(),i("div",lt,[e("div",st,[t[24]||(t[24]=e("div",{class:"flex justify-center mb-4"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"72",height:"72",viewBox:"0 0 48 48"},[e("path",{fill:"black",d:"M43.634 4.366a1.25 1.25 0 0 1 0 1.768l-4.913 4.913a9.253 9.253 0 0 1-.744 12.244l-3.343 3.343a1.25 1.25 0 0 1-1.768 0l-11.5-11.5a1.25 1.25 0 0 1 0-1.768l3.343-3.343a9.25 9.25 0 0 1 12.244-.743l4.913-4.914a1.25 1.25 0 0 1 1.768 0m-7.611 7.425a6.75 6.75 0 0 0-9.546 0l-2.46 2.459l9.733 9.732l2.46-2.459a6.75 6.75 0 0 0 0-9.546zM9.28 36.953l-4.914 4.913a1.25 1.25 0 0 0 1.768 1.768l4.913-4.913a9.253 9.253 0 0 0 12.244-.744l3.343-3.343a1.25 1.25 0 0 0 0-1.768L25.268 31.5l3.366-3.366a1.25 1.25 0 0 0-1.768-1.768L23.5 29.732L18.268 24.5l3.366-3.366a1.25 1.25 0 0 0-1.768-1.768L16.5 22.732l-1.366-1.366a1.25 1.25 0 0 0-1.768 0l-3.343 3.343a9.25 9.25 0 0 0-.743 12.244m2.51-10.476l2.46-2.46l9.732 9.733l-2.459 2.46a6.75 6.75 0 0 1-9.546 0l-.186-.187a6.75 6.75 0 0 1 0-9.546"})])],-1)),e("h3",at,a(s.$t("Connect your whatsapp account")),1),e("h4",ot,a(s.$t("You need to connect your WhatsApp account first before you can create a template.")),1),e("div",nt,[E(W(Q),{href:"/settings/whatsapp",class:"rounded-md px-3 py-2 text-sm hover:shadow-md text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-primary",disabled:C.value},{default:R(()=>[C.value?x("",!0):(n(),i("span",rt,a(s.$t("Connect Whatsapp account")),1))]),_:1},8,["disabled"])])])]))]),e("div",hl,[e("div",gl,[l.value.header.format!="TEXT"?(n(),i("div",fl,[l.value.header.format==="IMAGE"?(n(),i("img",xl)):x("",!0),l.value.header.format==="VIDEO"?(n(),i("img",bl)):x("",!0),l.value.header.format==="DOCUMENT"?(n(),i("img",wl)):x("",!0)])):(n(),i("h2",yl,a(l.value.header.text),1)),e("p",{class:"px-2 normal-case whitespace-pre-wrap",innerHTML:g.value},null,8,_l),e("div",Cl,[e("span",$l,a(l.value.footer.text),1),e("span",{class:w(["text-right text-xs leading-none float-right",l.value.footer.text?"mt-2":""])},"9:15",2)])]),l.value.buttons.length>0?(n(),i("div",kl,[(n(!0),i(z,null,S(l.value.buttons,(o,O)=>(n(),i("div",{key:O,class:"flex justify-center items-center space-x-2 rounded-lg bg-white h-10 my-[0.1em]"},[e("span",null,[o.type==="COPY_CODE"?(n(),i("svg",Vl,t[35]||(t[35]=[e("path",{fill:"currentColor",d:"M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"},null,-1)]))):o.type==="PHONE_NUMBER"?(n(),i("svg",Ml,t[36]||(t[36]=[e("g",{fill:"none"},[e("path",{fill:"currentColor",d:"M20 16v4c-2.758 0-5.07-.495-7-1.325c-3.841-1.652-6.176-4.63-7.5-7.675C4.4 8.472 4 5.898 4 4h4l1 4l-3.5 3c1.324 3.045 3.659 6.023 7.5 7.675L16 15l4 1z"}),e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 18.675c1.93.83 4.242 1.325 7 1.325v-4l-4-1l-3 3.675zm0 0C9.159 17.023 6.824 14.045 5.5 11m0 0C4.4 8.472 4 5.898 4 4h4l1 4l-3.5 3z"})],-1)]))):o.type==="URL"?(n(),i("img",Ll)):(n(),i("img",El))]),e("span",null,a(o.text),1)]))),128))])):x("",!0)])])]),E(ce,{label:"",isOpen:U.value},{default:R(()=>[e("div",Ul,[e("div",Il,[M.value!=null?(n(),i("div",Al,[e("div",null,a(s.$t("Error"))+": ",1),e("div",null,a(M.value),1),e("button",{type:"button",onClick:ae,class:"mt-4 inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},"Close")])):(n(),i("div",Zl,[e("h2",Bl,a(s.$t("Your template is being uploaded!")),1),t[37]||(t[37]=e("div",{class:"flex justify-center mt-4"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-dasharray":"15","stroke-dashoffset":"15","stroke-linecap":"round","stroke-width":"2",d:"M12 3C16.9706 3 21 7.02944 21 12"},[e("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),e("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"})])])],-1))]))])])]),_:1},8,["isOpen"])]}),_:1}))}};export{ss as default};

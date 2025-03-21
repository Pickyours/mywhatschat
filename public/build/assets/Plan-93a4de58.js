import{r as c,T as tt,i as ut,g as pt,o as a,a as t,t as l,c as r,e as B,n as S,u,b as i,F as P,k as D,h as ct,w as ht,v as vt,O as et}from"./app-a39c937f.js";import{_ as mt}from"./App-c36b28d4.js";import"./Sidebar-cfdf4c27.js";import"./Menu-bdf286ac.js";import"./Modal-df1e3aae.js";import"./transition-37a067aa.js";import"./hidden-695af094.js";import"./use-text-value-d1d229e7.js";import"./micro-task-89dcd6af.js";import"./ProfileModal-61a09d92.js";import"./FormInput-4b7fa008.js";import"./FormPhoneInput-1c9c9926.js";/* empty css                      */import"./FormSelect-c7672027.js";import"./index-8758cb17.js";import"./tabs-86fdd039.js";import"./LangToggle-edfcdcaa.js";import"./index-80d9f634.js";import"./MobileSidebar-d61cbb69.js";/* empty css              */import"./pusher-4059f127.js";const wt={class:"bg-white md:bg-inherit pt-0 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] overflow-y-scroll"},gt={class:"flex justify-between mt-8 md:mt-0"},xt={class:"text-xl mb-1"},ft={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},bt={class:"ml-1 mt-1"},_t={class:"md:flex gap-4"},yt={class:"md:w-[65%]"},kt={class:"grid grid-cols-2 gap-4"},Ct=["onClick"],At={class:"flex justify-between"},$t={class:""},jt={class:""},Mt={for:"myCheckbox",class:"cursor-pointer"},Bt={key:0,class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},St={class:"text-2xl"},Pt={key:0,class:"text-sm mb-4"},Ft={key:1,class:"text-sm mb-4"},Dt={class:"mb-1"},Zt={class:"flex justify-between text-sm"},Vt={class:"flex space-x-1"},Lt={class:"flex justify-between text-sm"},Nt={class:"flex space-x-1"},Ot={class:"flex justify-between text-sm"},Tt={class:"flex space-x-1"},Ut={class:"flex justify-between text-sm"},Rt={class:"flex space-x-1"},zt={class:"flex justify-between text-sm"},Ht={class:"flex space-x-1"},Jt={class:"flex justify-between text-sm"},Et={class:"flex space-x-1"},Gt={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},It={key:1,class:"text-red-500",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 26 26"},qt={class:"md:w-[35%]"},Kt={class:"bg-white rounded-md shadow-md p-5"},Qt={class:"text-xl mb-4"},Wt={key:0},Xt={class:"border border-dashed flex itens-center justify-center p-10 rounded-md"},Yt={key:1},te={class:"flex justify-between mb-4 text-sm"},ee={class:"bg-slate-100 w-[fit-content] py-1 px-2 rounded-md capitalize text-xs"},se={class:"flex justify-between mt-4 text-sm"},oe={key:0,class:"bg-slate-100 px-2 py-2 space-y-2 rounded-md mt-2 mb-2"},le={class:"text-sm border-b border-dashed"},ne={class:""},ae={key:1,class:"bg-slate-100 px-2 py-2 space-y-2 rounded-md mt-2 mb-2"},re={class:"flex justify-between text-sm"},ie={class:"text-xs"},de={key:0,class:"text-red-500"},ue={key:1,class:"text-red-500"},pe={key:2,class:"bg-slate-100 px-2 py-2 space-y-2 rounded-md mt-2 mb-2"},ce={class:"flex justify-between text-sm"},he={class:"text-xs"},ve={key:3,class:"bg-slate-100 px-2 py-2 space-y-2 rounded-md mt-2 mb-2"},me={class:"text-sm"},we={class:"text-sm border-b border-dashed"},ge={class:"flex items-center justify-between"},xe=["disabled"],fe={key:0,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},be={key:1},_e={key:0,class:"text-red-500 text-xs"},ye={key:1,class:"mt-2 flex justify-between text-sm"},ke={class:"flex items-center"},Ce={key:0,class:""},Ae={class:"text-red-500"},$e={class:"flex justify-between text-xl mt-4 mb-4"},je={key:4,class:"text-[14px] mt-3 mb-2"},Me={key:5,class:"flex grid grid-cols-2 gap-2"},Be={class:"flex items-center"},Se=["onClick"],Pe={key:0,class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Fe=["onClick"],De={class:"mt-8"},Ze={key:1,class:"w-full flex justify-center items-center space-x-1 rounded-md bg-gray-300 px-3 py-2 text-sm text-gray-400 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},Ve={key:0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Le={key:1},Ne={key:2,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},Oe={key:3},as={__name:"Plan",props:["addons","plans","methods","subscription","subscriptionDetails"],setup(st){var V,L,N,O,T,U,R,z,H,J,E,G,I,q,K,Q,W;const v=st,p=c(v.subscriptionDetails),d=tt({plan:(V=v.subscription)==null?void 0:V.plan_id,method:null}),m=tt({coupon:(N=(L=p.value)==null?void 0:L.coupon)==null?void 0:N.code}),f=c(!1),F=c({name:(T=(O=v.subscription)==null?void 0:O.plan)==null?void 0:T.name,period:(R=(U=v.subscription)==null?void 0:U.plan)==null?void 0:R.period,amount:(H=(z=v.subscription)==null?void 0:z.plan)==null?void 0:H.price}),A=c((J=p.value)==null?void 0:J.grossAmount),_=c((E=p.value)==null?void 0:E.netAmount),w=c((G=p.value)==null?void 0:G.amountDue),y=c((I=p.value)==null?void 0:I.taxRates),b=c((q=p.value)==null?void 0:q.credit),k=c((K=p.value)==null?void 0:K.debit),$=c((Q=p.value)==null?void 0:Q.basePrice),g=c((W=p.value)==null?void 0:W.coupon),ot=(o,e,n,x)=>{d.plan=o,F.value={name:e,period:n,amount:x},nt(o)},Z=o=>{d.method=o},h=(o,e)=>{if(o){const n=JSON.parse(o);return(n==null?void 0:n[e])??null}else return null},lt=o=>{const e=JSON.parse(o.metadata).addons;return!e||typeof e!="object"?{}:Object.entries(v.addons).reduce((n,[x,j])=>(j===1&&e.hasOwnProperty(x)&&(n[x]=e[x]),n),{})},nt=o=>{et.visit("/subscription/"+o,{method:"get",preserveState:!0,onSuccess:e=>{d.plan=o;const n=e.props.response_data.data;p.value=e.props.response_data.data,A.value=n.grossAmount,y.value=n.taxRates,_.value=n.netAmount,b.value=n.credit,k.value=n.debit,$.value=n.basePrice,w.value=n.amountDue,g.value=n.coupon}})},at=()=>{const o=d.plan;et.visit("/subscription/coupon/remove/"+o,{method:"get",preserveState:!0,onSuccess:e=>{d.plan=o;const n=e.props.response_data.data;p.value=e.props.response_data.data,A.value=n.grossAmount,y.value=n.taxRates,_.value=n.netAmount,b.value=n.credit,k.value=n.debit,$.value=n.basePrice,w.value=n.amountDue,g.value=n.coupon}})},rt=()=>{const o=d.plan;m.post("/subscription/coupon/apply/"+o,{preserveScroll:!0,onSuccess:e=>{d.plan=o;const n=e.props.response_data.data;p.value=e.props.response_data.data,A.value=n.grossAmount,y.value=n.taxRates,_.value=n.netAmount,b.value=n.credit,k.value=n.debit,$.value=n.basePrice,w.value=n.amountDue,g.value=n.coupon}})},it=async()=>{f.value=!0,d.post("/subscription",{preserveScroll:!0})};return(o,e)=>(a(),ut(mt,null,{default:pt(()=>{var n,x,j,X,Y;return[t("div",wt,[t("div",gt,[t("div",null,[t("h2",xt,l(o.$t("Billing and subscription")),1),t("p",ft,[e[2]||(e[2]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1)),t("span",bt,l(o.$t("Select the plan that you want to subscribe to")),1)])])]),t("div",_t,[t("div",yt,[t("div",kt,[(a(!0),r(P,null,B((n=v.plans)==null?void 0:n.data,(s,C)=>(a(),r("div",{key:C,onClick:M=>ot(s.id,s.name,s.period,s.price),class:S(["rounded-[0.5rem] shadow-sm p-5 cursor-pointer border-2 col-span-2 md:col-span-1",u(d).plan===s.id?"border-gray-700 bg-slate-50":"border-slate-100 md:border-white bg-slate-20 md:bg-white"])},[t("div",At,[t("div",$t,[t("h3",null,l(s.name),1)]),t("div",jt,[t("label",Mt,[t("div",{class:S(["w-5 h-5 border border-gray-400 rounded-md flex items-center justify-center",u(d).plan===s.id?"bg-[#000]":""])},[u(d).plan===s.id?(a(),r("svg",Bt,e[3]||(e[3]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)]))):i("",!0)],2)])])]),t("h2",St,l(s.price),1),s.period==="monthly"?(a(),r("h3",Pt,l(o.$t("Per month")),1)):i("",!0),s.period==="yearly"?(a(),r("h3",Ft,l(o.$t("Per year")),1)):i("",!0),t("h3",Dt,l(o.$t("Features")),1),t("div",Zt,[t("div",Vt,[e[4]||(e[4]=t("span",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16px",height:"16px",viewBox:"0 0 16 16"},[t("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},[t("path",{d:"M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"}),t("path",{d:"m5.75 7.75l2.5 2.5l6-6.5"})])])],-1)),t("h3",null,l(h(s==null?void 0:s.metadata,"campaign_limit")=="-1"?o.$t("Unlimited"):h(s==null?void 0:s.metadata,"campaign_limit"))+" "+l(o.$t("Campaigns")),1)])]),t("div",Lt,[t("div",Nt,[e[5]||(e[5]=t("span",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16px",height:"16px",viewBox:"0 0 16 16"},[t("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},[t("path",{d:"M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"}),t("path",{d:"m5.75 7.75l2.5 2.5l6-6.5"})])])],-1)),t("h3",null,l(h(s==null?void 0:s.metadata,"message_limit")=="-1"?o.$t("Unlimited"):h(s==null?void 0:s.metadata,"message_limit"))+" "+l(o.$t("Messages")),1)])]),t("div",Ot,[t("div",Tt,[e[6]||(e[6]=t("span",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16px",height:"16px",viewBox:"0 0 16 16"},[t("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},[t("path",{d:"M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"}),t("path",{d:"m5.75 7.75l2.5 2.5l6-6.5"})])])],-1)),t("h3",null,l(h(s==null?void 0:s.metadata,"contacts_limit")=="-1"?o.$t("Unlimited"):h(s==null?void 0:s.metadata,"contacts_limit"))+" "+l(o.$t("Contacts")),1)])]),t("div",Ut,[t("div",Rt,[e[7]||(e[7]=t("span",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16px",height:"16px",viewBox:"0 0 16 16"},[t("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},[t("path",{d:"M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"}),t("path",{d:"m5.75 7.75l2.5 2.5l6-6.5"})])])],-1)),t("h3",null,l(h(s==null?void 0:s.metadata,"canned_replies_limit")=="-1"?o.$t("Unlimited"):h(s==null?void 0:s.metadata,"canned_replies_limit"))+" "+l(o.$t("Canned replies")),1)])]),t("div",zt,[t("div",Ht,[e[8]||(e[8]=t("span",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16px",height:"16px",viewBox:"0 0 16 16"},[t("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},[t("path",{d:"M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"}),t("path",{d:"m5.75 7.75l2.5 2.5l6-6.5"})])])],-1)),t("h3",null,l(h(s==null?void 0:s.metadata,"team_limit")=="-1"?o.$t("Unlimited"):h(s==null?void 0:s.metadata,"team_limit"))+" "+l(o.$t("Users")),1)])]),(a(!0),r(P,null,B(lt(s),(M,dt)=>(a(),r("div",Jt,[t("div",Et,[t("span",null,[M==!0?(a(),r("svg",Gt,e[9]||(e[9]=[t("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},[t("path",{d:"M14.25 8.75c-.5 2.5-2.385 4.854-5.03 5.38A6.25 6.25 0 0 1 3.373 3.798C5.187 1.8 8.25 1.25 10.75 2.25"}),t("path",{d:"m5.75 7.75l2.5 2.5l6-6.5"})],-1)]))):(a(),r("svg",It,e[10]||(e[10]=[t("g",{fill:"currentColor"},[t("path",{d:"M10.172 17.243a1 1 0 1 1-1.415-1.415l7.071-7.07a1 1 0 1 1 1.415 1.414z"}),t("path",{d:"M8.757 10.172a1 1 0 0 1 1.415-1.415l7.07 7.071a1 1 0 1 1-1.414 1.415z"}),t("path",{"fill-rule":"evenodd",d:"M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13","clip-rule":"evenodd"})],-1)])))]),t("h3",null,l(dt),1)])]))),256))],10,Ct))),128))])]),t("div",qt,[t("div",Kt,[t("h3",Qt,l(o.$t("Summary")),1),u(d).plan?i("",!0):(a(),r("div",Wt,[t("div",Xt,[t("h3",null,l(o.$t("Select plan to continue")),1)])])),u(d).plan?(a(),r("div",Yt,[t("div",te,[t("div",null,[t("h3",null,l(F.value.name),1),t("h3",ee,l(F.value.period),1)]),t("h3",null,l($.value),1)]),e[19]||(e[19]=t("hr",null,null,-1)),t("div",se,[t("h3",null,l(o.$t("Gross total")),1),t("h3",null,l(A.value),1)]),y.value.length>0?(a(),r("div",oe,[t("h3",le,l(o.$t("Tax")),1),(a(!0),r(P,null,B(y.value,(s,C)=>(a(),r("div",{key:C,class:"flex justify-between text-sm"},[t("h3",null,[D(l(s.name)+" ",1),t("span",ne,"("+l(s.percentage)+"%)",1)]),t("h3",null,l(s.amount),1)]))),128))])):i("",!0),b.value.total>0?(a(),r("div",ae,[t("div",re,[t("div",null,[D(l(o.$t("Available credits"))+" ",1),e[11]||(e[11]=t("br",null,null,-1)),t("span",ie,"("+l(o.$t("Applicable credits for this invoice"))+")",1)]),parseFloat(-b.value.total)<=parseFloat(_.value)?(a(),r("h3",de,l(b.value.total),1)):i("",!0),parseFloat(-b.value.total)>parseFloat(_.value)?(a(),r("h3",ue," ("+l(_.value)+") ",1)):i("",!0)])])):i("",!0),k.value.total>0?(a(),r("div",pe,[t("div",ce,[t("div",null,[D(l(o.$t("Available debits"))+" ",1),e[12]||(e[12]=t("br",null,null,-1)),t("span",he,"("+l(o.$t("Applicable debits due"))+")",1)]),t("h3",null,l(k.value.total),1)])])):i("",!0),parseFloat(w.value)>0?(a(),r("div",ve,[t("div",me,[t("div",we,l(o.$t("Coupon code")),1),g.value.length===0?(a(),r("form",{key:0,onSubmit:ct(rt,["prevent"]),class:"mt-2 bg-white w-full rounded-md border-0 py-1 pl-2 pr-1 text-gray-900 shadow-sm outline-none ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6"},[t("div",ge,[ht(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>u(m).coupon=s),class:"h-full w-3/4 outline-none"},null,512),[[vt,u(m).coupon]]),t("button",{class:S(["h-full w-[fit-content] py-0.5 px-2 text-[12px] flex items-center justify-center bg-primary text-white rounded-md",{"opacity-50":u(m).processing}]),disabled:u(m).processing},[u(m).processing?(a(),r("svg",fe,e[13]||(e[13]=[t("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),t("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[t("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):(a(),r("span",be,l(o.$t("Apply")),1))],10,xe)]),u(m).errors.coupon?(a(),r("span",_e,l(u(m).errors.coupon),1)):i("",!0)],32)):(a(),r("div",ye,[t("div",ke,[t("h3",null,l((x=g.value)==null?void 0:x.code),1),((j=g.value)==null?void 0:j.type)=="percentage"?(a(),r("span",Ce,"("+l((X=g.value)==null?void 0:X.amount)+"% OFF)",1)):i("",!0),t("button",{onClick:at,class:"text-red-500"},e[14]||(e[14]=[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M12 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16M9.707 8.293a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586z"})],-1)]))]),t("h3",Ae,l((Y=g.value)==null?void 0:Y.discount),1)]))])])):i("",!0),t("div",$e,[t("h3",null,l(o.$t("Total due")),1),t("h3",null,l(w.value),1)]),e[20]||(e[20]=t("hr",null,null,-1)),parseFloat(w.value)>0?(a(),r("h2",je,l(o.$t("Pay via")),1)):i("",!0),parseFloat(w.value)>0?(a(),r("div",Me,[(a(!0),r(P,null,B(v.methods,(s,C)=>(a(),r("div",{key:C,class:""},[t("div",Be,[t("label",{onClick:M=>Z(s.name),for:"myCheckbox",class:"cursor-pointer"},[t("div",{class:S(["w-5 h-5 border border-gray-400 rounded-md flex items-center justify-center",u(d).method===s.name?"bg-[#000]":""])},[u(d).method===s.name?(a(),r("svg",Pe,e[15]||(e[15]=[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1)]))):i("",!0)],2)],8,Se),t("span",{onClick:M=>Z(s.name),class:"ml-2 text-sm cursor-pointer"},l(s.name),9,Fe)])]))),128))])):i("",!0),t("div",De,[f.value==!1&&u(d).method!=null||f.value==!1&&w.value<=0?(a(),r("button",{key:0,onClick:e[1]||(e[1]=s=>it()),type:"button",class:"w-full flex justify-center items-center space-x-1 rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},[e[16]||(e[16]=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13m5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3M9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"})],-1)),t("span",null,l(o.$t("Continue")),1)])):(a(),r("div",Ze,[f.value==!1?(a(),r("svg",Ve,e[17]||(e[17]=[t("path",{fill:"currentColor",d:"M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13m5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3M9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"},null,-1)]))):i("",!0),f.value==!1?(a(),r("span",Le,l(o.$t("Continue")),1)):i("",!0),f.value!=!1?(a(),r("svg",Ne,e[18]||(e[18]=[t("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:"0.5"},null,-1),t("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[t("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1)]))):i("",!0),f.value!=!1?(a(),r("span",Oe,l(o.$t("Redirecting you")),1)):i("",!0)]))])])):i("",!0)])])])])]}),_:1}))}};export{as as default};

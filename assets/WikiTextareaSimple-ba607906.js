import{_ as u}from"./FormTextarea-04b99bf5.js";import{G as c,a8 as l,o as d,d as m,g as i,w as p,S as x,e as s}from"./index-b17261da.js";const h={class:"WikiTextareaSimple"},v=s("div",{style:{height:"10px"}},null,-1),f=s("div",{style:{height:"90vh"}},null,-1),S={__name:"WikiTextareaSimple",props:["origin_text"],emits:["text_changed","scroll_line"],setup(o,{emit:n}){const _=o,e=c("");return l(()=>_.origin_text,t=>{t?e.value=t:e.value=""},{immediate:!0}),l(()=>e.value,t=>{n("text_changed",t)},{immediate:!0}),(t,a)=>(d(),m("div",h,[i(x,null,{default:p(()=>[v,i(u,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=r=>e.value=r)},null,8,["modelValue"]),f]),_:1})]))}};export{S as default};

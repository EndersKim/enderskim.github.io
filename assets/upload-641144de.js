import{_ as g}from"./PageTitle-998ab926.js";import{O as d,X as b,Y as h,o as a,d as r,g as _,e as s,F as x,i as y,s as L,y as U}from"./index-520d7f93.js";import{m as V}from"./markdown_to_html_widget-a003ad54.js";import"./ArrowShape-c6fed64d.js";/* empty css                                                   *//* empty css                                                  */import"./index-97cf174a.js";const k={class:"content"},w={class:"imgs_row"},B=["title"],E=["src"],F=["innerHTML"],$=s("br",null,null,-1),H=s("br",null,null,-1),q={__name:"upload",setup(M){const l=d("");function m(o){console.log(o)}const i=d([]);function u(o){const t=o.clipboardData.items;for(let e=0;e<t.length;e++)if(t[e].type.indexOf("image")===0){const p=t[e].getAsFile(),c=URL.createObjectURL(p);i.value.push(c);const n=document.querySelector("textarea"),v=n.selectionStart,f=n.selectionEnd;n.value=n.value.substring(0,v)+`![img](${c})`+n.value.substring(f)}}return b(()=>{l.value="Hello, world!",document.addEventListener("paste",u)}),h(()=>{document.removeEventListener("paste",u)}),(o,t)=>(a(),r("div",k,[_(g,{parent:{title:o.$text("nav.laboratory"),link:"/laboratory"},title:"Upload"},null,8,["parent"]),s("div",w,[(a(!0),r(x,null,y(i.value,e=>(a(),r("div",{class:"img_item",title:e},[s("img",{src:e},null,8,E)],8,B))),256))]),s("article",{innerHTML:L(V)(l.value)},null,8,F),$,_(U,{modelValue:l.value,"onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),onInput:m},null,8,["modelValue"]),H]))}};export{q as default};

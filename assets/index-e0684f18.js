import{v as w,Y as r,a3 as V,a4 as D,o as d,d as p,g as F,e as a,h,O as x,Q as b,J as n,aQ as I}from"./index-508fea2e.js";import{_ as L}from"./PageTitle-28eeae2b.js";import"./ArrowShape-eb84f005.js";/* empty css                                                   *//* empty css                                                  */const O={class:"content"},S={class:"upload_main section"},A={class:"upload_local_part"},B=a("div",{class:"top_box_back"},[a("span",null,"Choose File")],-1),E=["src"],N=a("div",{class:"top_box_text"},[a("span",null,"Choose File")],-1),R=["title"],$=a("div",{class:"top_box_back"},[a("span",null,"Upload")],-1),q=["src"],z=a("div",{class:"top_box_text"},[a("span",null,"Upload")],-1),P={__name:"index",setup(M){const k=w(),m=r("");m.value=localStorage.getItem("server_address");const c=r(null),u=r(""),_=r(!1),l=r(""),i=r("");function v(s){function t(e){const o=e.lastIndexOf(".");return o>0?e.substring(0,o):e}if((s==null?void 0:s.type.indexOf("image"))===0){c.value=s,u.value=URL.createObjectURL(s),_.value=!1;let e=t(s.name);e=e.replace(/[^a-zA-Z0-9]/g,"_"),e=e.replace(/_{2,}/g,"_"),e=e.replace(/^_|_$/g,""),l.value=e||"untitled"}else n({status:"error",message:"not an image"})}async function y(){if(_.value){console.log("file already uploaded"),n({status:"error",message:"file already uploaded"});return}if(!c.value){console.log("no file"),n({status:"error",message:"no file"});return}if(!l.value){console.log("no img_name"),n({status:"error",message:"no img_name"});return}const s=l.value.replace(/[^a-zA-Z0-9_]/g,"");if(s!==l.value){console.log("img_name contains illegal characters"),n({status:"error",message:"img_name contains illegal characters"}),l.value=s;return}try{const t=new FormData;t.append("fileContent",c.value);const o=(await I.post(m.value+"/upload",t,{headers:{"Content-Type":"multipart/form-data",token:k.tokenid,"image-name":l.value}})).data;console.log(o),o.status==="success"?(i.value=o.data.webp,n({status:"success",message:"upload success"}),_.value=!0):n({status:"error",message:o.message})}catch(t){console.log(t),n({status:"error",message:"network error"})}}const g=r(null);function U(){g.value.click()}function C(s){const t=s.target.files[0];v(t)}function f(s){const t=s.clipboardData.items;for(let e=0;e<t.length;e++)if(t[e].type.indexOf("image")===0){const o=t[e].getAsFile();v(o)}}return V(()=>{document.addEventListener("paste",f)}),D(()=>{document.removeEventListener("paste",f)}),(s,t)=>(d(),p("div",O,[F(L,{title:"Upload",children:[{title:"Upload",link:"/laboratory/upload"},{title:"View Upload",link:"/laboratory/view_upload"},{title:"Server Settings",link:"/laboratory/upload_server"}]}),a("input",{class:"input_file_element",ref_key:"input_file",ref:g,type:"file",accept:"image/*",onChange:C},null,544),a("div",S,[a("div",A,[a("div",{class:"top_box",onClick:U},[B,u.value?(d(),p("img",{key:0,src:u.value},null,8,E)):h("",!0),N]),x(a("input",{type:"text",class:"kinput","onUpdate:modelValue":t[0]||(t[0]=e=>l.value=e),placeholder:"File Name"},null,512),[[b,l.value]])]),a("div",{class:"upload_net_part",title:i.value},[a("div",{class:"top_box",onClick:y},[$,i.value?(d(),p("img",{key:0,src:i.value},null,8,q)):h("",!0),z]),x(a("input",{type:"text",class:"kinput remote_img_url","onUpdate:modelValue":t[1]||(t[1]=e=>i.value=e),placeholder:"Image URL"},null,512),[[b,i.value]])],8,R)])]))}};export{P as default};

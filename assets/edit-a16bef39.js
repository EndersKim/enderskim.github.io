import{b as me,ab as Ae,a8 as K,ac as ie,o as c,d as b,k as R,p as P,ad as Se,D as Ue,G as h,j as I,a0 as G,aa as le,a as $,a6 as oe,a7 as se,r as Te,g as s,a3 as pe,f as B,e,w as d,A as ne,t as w,h as C,E as ae,ae as Me,af as j,F as de,i as We,a9 as Le,S as Be,H as f,J as v,P as A,ag as Pe,X as ue,l as re,O as S,Y as D,Q as E,$ as Re,a4 as Ne,v as He}from"./index-b17261da.js";import{D as qe,F as ze,S as Oe,a as je}from"./Save-a34b1f87.js";import{M as _e}from"./More-1ee246b5.js";import{a as Ge}from"./markdown_to_html_widget-a003ad54.js";import"./index-97cf174a.js";const Ke={class:"WikiTextarea"},Qe={__name:"WikiTextarea",props:["origin_text","editor_type"],emits:["text_changed","scroll_line"],setup(y,{emit:p}){const g=me(),a=Ae(null);return K(()=>g.settings.text_editor_type,m=>{a.value=null,m==="simple"?ie(()=>import("./WikiTextareaSimple-ba607906.js"),["assets/WikiTextareaSimple-ba607906.js","assets/FormTextarea-04b99bf5.js","assets/index-b17261da.js","assets/index-d770c7ad.css","assets/FormTextarea-709ce60b.css","assets/WikiTextareaSimple-58376fdb.css"]).then(u=>{a.value=u.default}):m==="monaco"&&ie(()=>import("./WikiTextareaMonaco-43112ded.js").then(u=>u.W),["assets/WikiTextareaMonaco-43112ded.js","assets/index-b17261da.js","assets/index-d770c7ad.css","assets/WikiTextareaMonaco-e462af76.css"]).then(u=>{a.value=u.default})},{immediate:!0}),(m,u)=>(c(),b("div",Ke,[(c(),R(Se(a.value),{origin_text:y.origin_text,onText_changed:u[0]||(u[0]=F=>p("text_changed",F)),onScroll_line:u[1]||(u[1]=F=>p("scroll_line",F)),is_dark:P(g).computed_dark},null,40,["origin_text","is_dark"]))]))}};function Ze(y){return y?y.replace(/([\u2E80-\u2FFF\u31C0-\u31EF\u3300-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFE30-\uFE4F])([A-Za-z0-9\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]|[@&=_\\$%\\^\\*-\\+/]|[\\(\\[\\{<‘“])/gi,"$1 $2").replace(/([A-Za-z0-9\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]|[@&=_\\$%\\^\\*-\\+/]|[,\\.\\?!:\\)\\]\\}>’”])([\u2E80-\u2FFF\u31C0-\u31EF\u3300-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF\uFE30-\uFE4F])/gi,"$1 $2"):""}function Je(y,p){for(var g="",a=y;a>0;--a)g+=p[Math.floor(Math.random()*p.length)];return g}function ce(){return Je(16,"0123456789abcdefghijklmnopqrstuvwxyz")}const Xe={class:"wiki_top_part"},Ye={class:"wiki_top section"},et={class:"icon"},tt={class:"text"},it=e("div",{class:"back_button_divide"},null,-1),lt={class:"wiki_top_buttons"},ot=["disabled"],st={class:"wiki_top_button"},nt={class:"wiki_top_button"},at=e("hr",null,null,-1),dt={class:"wiki_main_part"},ut={class:"wiki_view_wrapper"},rt={class:"wiki_view section"},_t={key:0,class:"wiki_children"},ct={class:"wiki_child_box"},mt={class:"wiki_child_title"},pt={class:"wiki_child_info"},ft={key:0},vt={key:1},kt={class:"wiki_child_buttons"},wt=["onClick"],ht={class:"wiki_child_button"},gt=["onClick"],bt={key:1},yt={key:2,class:"wiki_content"},Ft=["innerHTML"],Et=e("div",{style:{height:"90vh"}},null,-1),xt={class:"wiki_edit_wrapper"},Ct={class:"wiki_edit section"},Dt={class:"wiki_edit_dialog form_rows"},Vt=e("div",{class:"form_row_lable"},[e("h4",null,"ID")],-1),It=e("div",{class:"form_row_lable"},[e("h4",null,"Title")],-1),$t=e("div",{class:"form_row_lable"},[e("h4",null,"Weight")],-1),At={class:"wiki_edit_dialog form_rows"},St=e("div",{class:"form_row_lable"},[e("h4",null,"ID")],-1),Ut=e("div",{class:"form_row_lable"},[e("h4",null,"Title")],-1),Tt=e("div",{class:"form_row_lable"},[e("h4",null,"Weight")],-1),Mt=e("div",{class:"form_row_lable"},[e("h4",null,"Hidden")],-1),Wt={class:"wiki_edit_dialog form_rows"},Lt=e("div",{class:"form_row_lable"},[e("h4",null,"Move Item")],-1),Bt=e("div",{class:"form_row_lable"},[e("h4",null,"Target Parent")],-1),Pt={class:"confirm_dialog"},Rt={class:"icon_container"},Nt={class:"title_container"},Ht={class:"confirm_dialog_title"},qt={class:"confirm_dialog_text"},zt=e("p",{class:"confirm_dialog_text"}," File will not be deleted. If you create an item with same id, you can get content back. ",-1),Ot={class:"button_container"},jt={class:"wiki_edit_dialog form_rows"},Gt=e("div",{class:"form_row_lable"},[e("h4",null,"Old ID")],-1),Kt=e("div",{class:"form_row_lable"},[e("h4",null,"New ID")],-1),Qt=e("ul",{class:"form_row_note"},[e("li",null,"Edit ID is DANGER")],-1),Zt={class:"add_space_dialog"},Jt={__name:"WikiItemEdit",props:["item_id"],setup(y){const p=y,g=me(),a=Ue(),m=h(!1),u=h(!1),F=h(!1),U=h(!1),M=h(!1),N=h(!1),o=h(null),n=I({origin:"",current:"",modified:!1,ready:!1}),Q=h(null);function fe(){var l;(l=Q.value)==null||l.querySelectorAll("a").forEach(t=>{const _=t.getAttribute("href");_.slice(0,1)=="#"?t.setAttribute("target","_self"):_.startsWith("/")?(t.setAttribute("target","_self"),t.addEventListener("click",i=>{i.preventDefault(),a.push(t.getAttribute("href"))}),_.startsWith("/wiki/items/")&&t.setAttribute("href",t.getAttribute("href").replace("/wiki/items/","/wiki/edit/"))):t.setAttribute("target","_blank")})}const ve=G(()=>(le(()=>{fe()}),Ge(n.current))),x=I({loading:!1,not_found:!1}),Z=G(()=>$().hide.header),V=I({id:!1,weight:!1,time:!1});oe(()=>{$().hide.footer=!0}),se(()=>{$().hide.footer=!1,$().hide.header=!1});let H=null;async function W(){x.loading=!0,x.not_found=!1;let l=p.item_id;p.item_id==""&&(l="root"),H=o.value;let t=await Re("/wiki/get_item.php",{id:l,tokenid:await D()});if(x.loading=!1,!t||t.status!="success"){x.not_found=!0,o.value=null;return}o.value=t.data,n.ready=!1,n.origin=t.data.content,n.current=t.data.content,document.title=o.value.title+" - Kloudy Shape",le(()=>{n.modified=!1,n.ready=!0,H&&H.item_id!=o.value.item_id&&document.getElementById("wiki_scroll_box").scrollTo({top:0})})}function ke(l){n.ready&&(n.modified==!1?n.origin!=l&&(n.modified=!0,n.current=l):n.current=l)}let J=0;function we(l){n.ready&&l!=J&&(he(l),J=l)}function he(l){const t=document.querySelectorAll("article>*");if(t.length==0)return;const _={};t.forEach(T=>{let te=T.getAttribute("data-source-line"),$e=T.offsetTop;te&&(_[te]={offset_top:$e})});let i=l;for(;i>1&&!_[i];)i--;_[i]&&document.getElementById("wiki_scroll_box").scrollTo({top:_[i].offset_top-60,behavior:"smooth"})}K(()=>p.item_id,()=>{W()},{immediate:!0});function ge(){a.push({path:"/wiki/items/"+o.value.item_id})}const r=I({id:"",title:"",weight:0});function be(){r.id=o.value.item_id+"/"}function ye(){r.id=Ee(r.id)}function Fe(){r.id+=ce()}function Ee(l){return l.toLowerCase().replaceAll(" ","_").replaceAll("-","_").replace(/[^a-z0-9_\/]/gi,"")}async function xe(){let l="";if(o.value&&o.value.item_id&&(l=o.value.item_id),!r.id){r.id=l+"/"+ce();return}S("/wiki/new_item.php",{tokenid:await D(),parent_id:l,id:r.id,title:r.title||"Untitled",weight:r.weight}).then(t=>{t.status=="success"?(m.value=!1,E({message:"Created"}),W()):(E({status:"error",message:"Create Failed"}),console.log(t))})}const k=h({});function q(l){k.value=l,u.value=!0}async function Ce(){if(!k.value){console.log("no target");return}let l=k.value;S("/wiki/edit_item.php",{tokenid:await D(),id:l.item_id,title:l.title||"Untitled",weight:l.weight||0,hidden:l.hidden||0}).then(t=>{t.status=="success"?(E({message:"Edited"}),u.value=!1,W()):console.log(t)})}async function X(){if(!o.value)return;let l=o.value;const t="edit_content_"+Math.random();E({message:"Saving...",status:"loading",key:t}),S("/wiki/edit_content.php",{tokenid:await D(),id:l.item_id,content:n.current||""}).then(_=>{_.status=="success"&&(E({message:"Saved",status:"success",key:t}),n.modified=!1)})}function Y(l){l.ctrlKey&&l.key=="s"&&(l.preventDefault(),X())}oe(()=>{document.addEventListener("keydown",Y)}),se(()=>{document.removeEventListener("keydown",Y)});async function De(){if(!o.value)return;let l=o.value;S("/wiki/delete_item.php",{tokenid:await D(),id:l.item_id}).then(t=>{t.status=="success"&&(o.value.parent?a.push({path:"/wiki/edit/"+o.value.parent.item_id}):a.push({path:"/wiki/edit/"}),E({message:"Deleted"}),U.value=!1)})}const L=h("");async function Ve(){const l=await S("/wiki/edit_item_id.php",{tokenid:await D(),id:o.value.item_id,new_id:L.value});console.log(l),l.status=="success"&&(E({message:"Edited ID"}),a.push({path:"/wiki/edit/"+L.value}),M.value=!1)}const z=I({new_parent:""});async function Ie(){const l=await S("/wiki/move_item.php",{tokenid:await D(),id:o.value.item_id,parent_id:z.new_parent});console.log(l),l.status=="success"&&(E({message:"Moved"}),W(),F.value=!1)}const O=I({before:""});function ee(){$().hide.header=!$().hide.header}return(l,t)=>{const _=Te("RouterLink");return c(),b(de,null,[s(pe,{loading:!o.value&&!x.not_found,error:!o.value&&x.not_found,error_title:l.$text("page_not_found")},null,8,["loading","error","error_title"]),o.value?(c(),b("div",{key:0,class:B(["WikiItemEdit",{loading:x.loading,hide_header:Z.value}])},[e("div",Xe,[e("div",Ye,[e("div",{class:B(["wiki_top_title",{with_parent:o.value.parent}])},[o.value.parent?(c(),R(_,{key:0,class:"back_button",to:"/wiki/edit/"+o.value.parent.item_id},{default:d(()=>[e("span",et,[s(ne,{class:"left"})]),e("span",tt,w(o.value.parent.title),1),it]),_:1},8,["to"])):C("",!0),e("h3",null,w(o.value.title),1),e("p",null,w(o.value.hidden==1?"私有":"公开"),1)],2),e("div",lt,[e("button",{class:"wiki_top_button",onClick:t[0]||(t[0]=i=>q(o.value))},[s(ae)]),e("button",{class:"wiki_top_button",onClick:t[1]||(t[1]=i=>U.value=!0)},[s(qe)]),e("button",{class:"wiki_top_button",onClick:t[2]||(t[2]=i=>F.value=!0)},[s(ze)]),e("button",{class:"wiki_top_button",onClick:t[3]||(t[3]=i=>m.value=!0)},[s(Me)]),e("button",{class:"wiki_top_button",onClick:X,disabled:!n.modified},[s(Oe)],8,ot),s(j,{clickable:"",click_close:""},{dropdown:d(()=>[e("a",{onClick:t[4]||(t[4]=i=>V.weight=!V.weight)}," Display Weight "),e("a",{onClick:t[5]||(t[5]=i=>V.id=!V.id)}," Display ID "),e("a",{onClick:ee}," Hide Header "),e("a",{onClick:t[6]||(t[6]=i=>P(g).settings.text_editor_type="simple")}," Simple Editor "),e("a",{onClick:t[7]||(t[7]=i=>P(g).settings.text_editor_type="monaco")}," Monaco Editor ")]),default:d(()=>[e("button",st,[s(je)])]),_:1}),s(j,{clickable:"",click_close:""},{dropdown:d(()=>[e("a",{onClick:ge}," Switch to View Mode "),at,e("a",{onClick:t[8]||(t[8]=i=>M.value=!0)}," Edit ID "),e("a",{onClick:t[9]||(t[9]=i=>N.value=!0)}," Add Space ")]),default:d(()=>[e("button",nt,[s(_e)])]),_:1}),e("button",{class:"wiki_top_button",onClick:ee},[s(ne,{class:B({up:!Z.value})},null,8,["class"])])])])]),e("div",dt,[e("div",ut,[e("div",rt,[s(Be,{view_id:"wiki_scroll_box"},{default:d(()=>[o.value.children?(c(),b("div",_t,[(c(!0),b(de,null,We(o.value.children,i=>(c(),b("div",ct,[s(_,{class:B(["wiki_child",{hidden:i.hidden==1}]),to:"/wiki/edit/"+i.item_id},{default:d(()=>[s(Le,{class:"wiki_child_icon"}),e("span",mt,w(i.title),1),e("div",pt,[V.weight?(c(),b("p",ft,w(i.weight),1)):C("",!0),V.id?(c(),b("p",vt,w(i.item_id),1)):C("",!0)])]),_:2},1032,["to","class"]),e("div",kt,[e("button",{class:"wiki_child_button",onClick:T=>q(i)},[s(ae)],8,wt),s(j,{clickable:"",click_close:""},{dropdown:d(()=>[e("a",{onClick:T=>q(i)}," Edit Meta ",8,gt)]),default:d(()=>[e("button",ht,[s(_e)])]),_:2},1024)])]))),256))])):C("",!0),n.current&&o.value.children?(c(),b("hr",bt)):C("",!0),n.current?(c(),b("div",yt,[e("article",{ref_key:"article_el",ref:Q,innerHTML:ve.value},null,8,Ft)])):C("",!0),Et]),_:1})])]),e("div",xt,[e("div",Ct,[s(Qe,{origin_text:n.origin,onText_changed:ke,onScroll_line:we},null,8,["origin_text"])])])])],2)):C("",!0),s(A,{modelValue:m.value,"onUpdate:modelValue":t[13]||(t[13]=i=>m.value=i),title:"New Item"},{default:d(()=>[e("div",Dt,[Vt,f(e("input",{class:"kinput","onUpdate:modelValue":t[10]||(t[10]=i=>r.id=i),placeholder:"ID"},null,512),[[v,r.id]]),e("div",{class:"form_row_group"},[e("button",{class:"kbutton plain",onClick:be}," Use Parent ID "),e("button",{class:"kbutton plain",onClick:ye}," Format ID "),e("button",{class:"kbutton plain",onClick:Fe}," Random ID ")]),It,f(e("input",{class:"kinput","onUpdate:modelValue":t[11]||(t[11]=i=>r.title=i),placeholder:"title"},null,512),[[v,r.title]]),$t,f(e("input",{class:"kinput","onUpdate:modelValue":t[12]||(t[12]=i=>r.weight=i),placeholder:"weight"},null,512),[[v,r.weight]]),e("button",{class:"kbutton",onClick:xe},"New")])]),_:1},8,["modelValue"]),s(A,{modelValue:u.value,"onUpdate:modelValue":t[18]||(t[18]=i=>u.value=i),title:"Edit Item Meta"},{default:d(()=>[e("div",At,[St,f(e("input",{class:"kinput","onUpdate:modelValue":t[14]||(t[14]=i=>k.value.item_id=i),placeholder:"ID",disabled:""},null,512),[[v,k.value.item_id]]),Ut,f(e("input",{class:"kinput","onUpdate:modelValue":t[15]||(t[15]=i=>k.value.title=i),placeholder:"title"},null,512),[[v,k.value.title]]),Tt,f(e("input",{class:"kinput","onUpdate:modelValue":t[16]||(t[16]=i=>k.value.weight=i),placeholder:"Weight"},null,512),[[v,k.value.weight]]),Mt,f(e("input",{class:"kinput","onUpdate:modelValue":t[17]||(t[17]=i=>k.value.hidden=i),placeholder:"Hidden"},null,512),[[v,k.value.hidden]]),e("button",{class:"kbutton",onClick:Ce},"Save")])]),_:1},8,["modelValue"]),s(A,{modelValue:F.value,"onUpdate:modelValue":t[21]||(t[21]=i=>F.value=i),title:"Move Item"},{default:d(()=>[e("div",Wt,[Lt,f(e("input",{class:"kinput","onUpdate:modelValue":t[19]||(t[19]=i=>o.value.item_id=i),placeholder:"ID",disabled:""},null,512),[[v,o.value.item_id]]),Bt,f(e("input",{class:"kinput","onUpdate:modelValue":t[20]||(t[20]=i=>z.new_parent=i),placeholder:"new_parent"},null,512),[[v,z.new_parent]]),e("button",{class:"kbutton",onClick:Ie},"Move")])]),_:1},8,["modelValue"]),s(A,{modelValue:U.value,"onUpdate:modelValue":t[23]||(t[23]=i=>U.value=i)},{default:d(()=>[e("div",Pt,[e("div",Rt,[s(Pe)]),e("div",Nt,[e("h3",Ht," Delete "+w(o.value.title)+" ? ",1),e("p",qt,"(ID: "+w(o.value.item_id)+")",1),zt]),e("div",Ot,[s(ue,{class:"plain",icon:"cancel",onClick:t[22]||(t[22]=i=>U.value=!1)},{default:d(()=>[re(w(l.$text("dialog.cancel")),1)]),_:1}),s(ue,{class:"danger",icon:"confirm",onClick:De},{default:d(()=>[re(w(l.$text("dialog.confirm")),1)]),_:1})])])]),_:1},8,["modelValue"]),s(A,{modelValue:M.value,"onUpdate:modelValue":t[26]||(t[26]=i=>M.value=i),title:"Edit Item ID"},{default:d(()=>[e("div",jt,[Gt,f(e("input",{class:"kinput","onUpdate:modelValue":t[24]||(t[24]=i=>o.value.item_id=i),placeholder:"ID",disabled:""},null,512),[[v,o.value.item_id]]),Kt,f(e("input",{class:"kinput","onUpdate:modelValue":t[25]||(t[25]=i=>L.value=i),placeholder:"ID"},null,512),[[v,L.value]]),Qt,e("button",{class:"kbutton danger",onClick:Ve}," Edit ID ")])]),_:1},8,["modelValue"]),s(A,{modelValue:N.value,"onUpdate:modelValue":t[28]||(t[28]=i=>N.value=i),title:"Add Space"},{default:d(()=>[e("div",Zt,[f(e("textarea",{class:"kinput ktextarea","onUpdate:modelValue":t[27]||(t[27]=i=>O.before=i)},null,512),[[v,O.before]]),e("pre",null,w(P(Ze)(O.before)),1)])]),_:1},8,["modelValue"])],64)}}},li={__name:"edit",setup(y){const p=G(()=>He().is_admin),g=Ne(),a=h("");return K(()=>g.params.id,m=>{m?a.value=m.join("/"):a.value=""},{immediate:!0}),(m,u)=>p.value?(c(),R(Jt,{key:0,item_id:a.value},null,8,["item_id"])):(c(),R(pe,{key:1,error:"",error_title:m.$text("wiki.not_found")},null,8,["error_title"]))}};export{li as default};

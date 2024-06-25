import{o as a,d as o,F as y,i as x,f as g,e as t,n as z,h as u,J as q,p as I,W as O,O as k,j as R,X as F,Y as j,Z as T,r as P,g as c,Q as H,w as f,k as C,A as G,t as h,l as J,S as W,a0 as K,T as Q,s as U,u as X,c as A,$ as Y,B as Z,a1 as ee,V as te}from"./index-520d7f93.js";import{C as ie}from"./CommunityPost-c0225306.js";import{m as se}from"./markdown_to_html_widget-a003ad54.js";import"./Comment-da003ec4.js";import"./markdown_to_html_lite-855e1114.js";import"./index-97cf174a.js";import"./Pagination.vue_vue_type_style_index_0_lang-61e585e8.js";import"./More-8cb5c09b.js";import"./CharacterCard-2ce92522.js";import"./UserBusiness-5110ffc3.js";import"./Warning-e5251bc0.js";import"./Comment-53625186.js";const ae={class:"WikiArticleTOC"},oe=["onClick","innerHTML"],ne={key:0,class:"toc_empty"},le={__name:"WikiArticleTOC",props:{article_headers:Array,active_header_index:Number},emits:["goto_header"],setup(p,{emit:m}){function v(d){m("goto_header",d)}return(d,i)=>(a(),o("div",ae,[(a(!0),o(y,null,x(p.article_headers,(s,l)=>(a(),o("div",{class:g(["toc_item",{active:l==p.active_header_index,sub_header:s.tagName=="H3"}]),key:s.innerHTML,onClick:L=>v(l),innerHTML:s.innerHTML},null,10,oe))),128)),p.article_headers.length==0?(a(),o("div",ne,[(a(),o(y,null,x(5,s=>t("div",{class:"empty_bar",style:z({width:Math.random()*100+"%"})},null,4)),64))])):u("",!0)]))}};const re={class:"content"},_e={class:"icon"},ce={class:"text"},ue=t("div",{class:"back_button_divide"},null,-1),de={key:0,class:"wiki_children"},ve=t("div",{style:{height:"10px"}},null,-1),me={class:"wiki_child_icon"},he={class:"wiki_child_text"},pe={class:"wiki_child_title"},fe=t("div",{style:{height:"10px"}},null,-1),ke={key:1,class:"wiki_children_empty"},we={class:"wiki_main_box"},ge={class:"wiki_content"},ye={class:"info"},be={class:"info_item"},xe={class:"info_item"},Ae={key:0,class:"info_item"},Te=["innerHTML"],Ce={class:"wiki_toc_box"},Le=t("div",{class:"toc_title"},[t("h4",null,"本页目录")],-1),$e={class:"toc_content"},Ee={key:1,class:"wiki_comments"},Me={__name:"WikiItemDetail",props:["item_id"],setup(p){const m=p,v=q(()=>I().is_admin),d=O(),i=k(null),s=k(null),l=R({loading:!1,not_found:!1,goto_direction:0});async function L(){l.loading=!0,l.not_found=!1;let r=m.item_id;m.item_id||(r="root");let e=await Y("/wiki/get_item.php",{id:r,tokenid:await Z()});if(l.loading=!1,!e||e.status!="success"){l.not_found=!0,i.value=null;return}i.value=e.data,document.title=i.value.title+" - Kloudy Shape",A(),(i.value.children||!s.value)&&(s.value=i.value),ee(()=>{E(),N()})}const $=k(null);function N(){var r;(r=$.value)==null||r.querySelectorAll("a").forEach(e=>{const _=e.getAttribute("href");_.slice(0,1)=="#"?(e.removeAttribute("target"),e.addEventListener("click",n=>{n.preventDefault();let B=document.getElementById(e.getAttribute("href").slice(1));A(B,!0)})):_.startsWith("/")?(e.setAttribute("target","_self"),e.addEventListener("click",n=>{n.preventDefault(),d.push(e.getAttribute("href"))})):e.setAttribute("target","_blank")})}const w=k([]),b=k(-1);function E(){let r=document.querySelectorAll("article h2, article h3");w.value=[],b.value=-1,r.forEach(e=>{let _=0,n=e;for(;n;)_+=n.offsetTop,n=n.offsetParent;e.setAttribute("offset_top",_),w.value.push(e)})}let M=null;function S(){clearInterval(M),M=setTimeout(()=>{E()},500)}F(()=>{window.addEventListener("resize",S)}),j(()=>{window.removeEventListener("resize",S)}),T(()=>X().app_scroll.top,r=>{b.value=-1,w.value.forEach((e,_)=>{r>e.getAttribute("offset_top")-101&&(b.value=_)})});function D(r){A(w.value[r],!0)}T(()=>m.item_id,()=>{L()},{immediate:!0});function V(){d.push({path:"/wiki/edit/"+i.value.item_id})}return(r,e)=>{const _=P("RouterLink");return a(),o(y,null,[c(H,{loading:!i.value&&!l.not_found,error:!i.value&&l.not_found,error_title:r.$text("wiki.not_found")},null,8,["loading","error","error_title"]),i.value?(a(),o("div",{key:0,class:g(["wiki_detail_box",{loading:l.loading}])},[t("div",re,[t("div",{class:g(["wiki_browser_box",{back:l.goto_direction==-1,forward:l.goto_direction==1}])},[c(Q,{name:"wiki_browser_slide"},{default:f(()=>[s.value?(a(),o("div",{class:"wiki_browser",key:s.value.item_id},[t("div",{class:g(["wiki_top",{with_parent:s.value.parent}])},[s.value.parent?(a(),C(_,{key:0,class:"back_button",onClick:e[0]||(e[0]=n=>l.goto_direction=-1),to:"/wiki/items/"+s.value.parent.item_id},{default:f(()=>[t("span",_e,[c(G,{class:"left"})]),t("span",ce,h(s.value.parent.title),1),ue]),_:1},8,["to"])):u("",!0),c(_,{class:"current_button",to:"/wiki/items/"+s.value.item_id},{default:f(()=>[J(h(s.value.title),1)]),_:1},8,["to"])],2),s.value.children?(a(),o("div",de,[c(W,null,{default:f(()=>[ve,(a(!0),o(y,null,x(s.value.children,n=>(a(),C(_,{onClick:e[1]||(e[1]=B=>l.goto_direction=1),class:g(["wiki_child",{hidden:n.hidden==1,current:n.item_id==i.value.item_id}]),to:"/wiki/items/"+n.item_id},{default:f(()=>[t("div",me,[c(K)]),t("div",he,[t("p",pe,h(n.title),1)])]),_:2},1032,["to","class"]))),256)),fe]),_:1})])):u("",!0),!s.value.children||s.value.children.length==0?(a(),o("div",ke,[(a(),o(y,null,x(5,n=>t("div",{class:"empty_bar",style:z({width:Math.random()*100+"%"})},null,4)),64))])):u("",!0)])):u("",!0)]),_:1})],2),t("div",we,[t("div",ge,[t("h1",null,h(i.value.title),1),t("p",ye,[t("span",be,h(i.value.item_id),1),t("span",xe,h(i.value.update_time),1),v.value?(a(),o("span",Ae,h(i.value.hidden==1?"私有":"公开"),1)):u("",!0),v.value?(a(),o("a",{key:1,class:"info_item",onClick:V},"Edit")):u("",!0)]),i.value.content?(a(),o("article",{key:0,innerHTML:U(se)(i.value.content),ref_key:"article_el",ref:$},null,8,Te)):u("",!0),c(H,{empty:!i.value.content},null,8,["empty"])])]),t("div",Ce,[Le,t("div",$e,[c(W,null,{default:f(()=>[c(le,{article_headers:w.value,active_header_index:b.value,onGoto_header:D},null,8,["article_headers","active_header_index"])]),_:1})])])])],2)):u("",!0),i.value?(a(),o("div",Ee,[c(ie,{post_id:"wiki/items/"+i.value.item_id},null,8,["post_id"])])):u("",!0)],64)}}};const Fe={__name:"detail",setup(p){const m=te(),v=k("");return T(()=>m.params.id,d=>{d?v.value=d.join("/"):v.value=""},{immediate:!0}),(d,i)=>(a(),C(Me,{item_id:v.value},null,8,["item_id"]))}};export{Fe as default};

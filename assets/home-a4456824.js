import{_ as B,b as I,r as x,o as s,k as w,w as q,e as t,t as n,d as o,h as v,g as m,f as S,n as V,X as L,V as i,ab as N,ac as z,a1 as F,$ as k,W as G,F as M,i as T,ap as $,aq as j,a3 as A,c as D}from"./index-e4eea91b.js";import{d as b}from"./display_json_text-e58078e3.js";import{R as E}from"./Rate-ee22f9fc.js";import{_ as P}from"./PageTitle-63a9dbad.js";import{_ as U}from"./Pagination.vue_vue_type_style_index_0_lang-cd91223e.js";import{C as W}from"./CommunityPost-41c104e8.js";/* empty css                                             */import"./ArrowShape-ece7a45d.js";/* empty css                                                   *//* empty css                                                  */import"./More-2c944b97.js";import"./Comment-a9b181ea.js";import"./markdown_to_html_lite-855e1114.js";import"./index-97cf174a.js";import"./CharacterCard-49e2e0e5.js";import"./UserBusiness-5888d0d3.js";import"./Warning-5aff01ac.js";import"./Comment-455f2eb5.js";const X={components:{Rate:E},props:["game","index","no_appear_ani"],data(){return{open_tag:!1}},computed:{game_title_t(){return this.game.title_t?b(this.game.title_t):null},game_title_t_second(){return this.game.title_t?b(this.game.title_t,I().settings.second_language):null}},mounted(){},beforeUnmount(){},methods:{}},H={class:"game_item_bg"},J=["src"],K={class:"game_item_img"},O=["src"],Q=t("div",{class:"img_back"},null,-1),Y={class:"game_item_text_wrapper"},Z={class:"game_item_text"},ee={class:"title"},te={key:0},ae={key:1},se={class:"tag_box"},_e={class:"tag"},ne={key:0},ie={key:1},oe={key:2};function le(h,g,e,u,l,_){const c=x("Rate"),d=x("router-link");return s(),w(d,{class:S(["game_item",{appear_section:!e.no_appear_ani}]),to:"/archive/games/"+e.game.game_id.toLowerCase(),style:V({"animation-delay":Math.min(e.index,12)*.04+"s"})},{default:q(()=>[t("div",H,[t("img",{class:"game_item_bg_item",src:e.game.cover},null,8,J)]),t("div",K,[t("img",{src:e.game.cover},null,8,O),Q]),t("div",Y,[t("div",Z,[t("div",ee,[t("h2",null,n(e.game.title),1),_.game_title_t?(s(),o("h3",te,n(_.game_title_t),1)):_.game_title_t_second?(s(),o("h3",ae,n(_.game_title_t_second),1)):v("",!0)]),t("div",se,[t("div",_e,[m(c,{rate:e.game.rate},null,8,["rate"]),e.game.publish_date?(s(),o("div",ne,n(e.game.publish_date),1)):v("",!0),e.game.region?(s(),o("div",ie,n(h.$text("regions."+e.game.region)),1)):v("",!0),e.game.gameplay?(s(),o("div",oe,n(h.$text("gameplay_short."+e.game.gameplay)),1)):v("",!0)])])])])]),_:1},8,["to","class","style"])}const re=B(X,[["render",le]]);const ce={id:"games_home",class:"content"},me={class:"archive_count"},ge={class:"archive_pagination"},ue={class:"section archive_pagination_section blur_part"},Ne={__name:"home",setup(h){const g=L(),e=i([]),u=i(0),l=i(null),_=i(!1),c=i(!0),d=i(0);N((a,r,p)=>{d.value=$(),c.value=!1,p()}),z(()=>{c.value=!0;const a=g.query.page?parseInt(g.query.page):1;a===l.value?(j(d.value),_.value=!0):(l.value=a,e.value=[],y())}),F(()=>g.query.page,a=>{if(!c.value)return;const r=a?parseInt(a):1;r!==l.value&&(l.value=r,y(!0))}),C();async function C(){const a=await k("/archive/get_games_count.php");u.value=parseInt(a.data)}const f=i(null);async function y(a){const r=await k("/archive/get_all_games.php",{page:l.value});_.value=!1,e.value=r.data||[],a&&A(()=>{D(f.value)})}return(a,r)=>(s(),o("div",ce,[m(P,{title:a.$text("nav.archive.games"),parent:{title:a.$text("nav.archive"),link:"/archive"}},null,8,["title","parent"]),m(G,{class:"achive_items_placeholder",loading:e.value.length==0},null,8,["loading"]),t("div",{class:"games_item_container",ref_key:"games_item_container",ref:f},[(s(!0),o(M,null,T(e.value,(p,R)=>(s(),w(re,{game:p,key:p.game_no,no_appear_ani:_.value,index:R},null,8,["game","no_appear_ani","index"]))),128))],512),t("p",me,n(u.value)+" "+n(a.$text("nav.archive.games")),1),t("div",ge,[t("div",ue,[m(U,{max_page:Math.ceil(u.value/24)},null,8,["max_page"])])]),m(W,{post_id:"archive/games"})]))}};export{Ne as default};

import{_ as I,b as S,r as k,o as _,k as C,w as q,e as t,t as i,d as l,h as p,g as m,f as L,n as N,a0 as V,Y as n,ad as z,ae as F,a5 as G,$ as b,Z as M,F as T,i as $,at as j,au as A,a7 as D,c as E}from"./index-6f69462e.js";import{d as w}from"./display_json_text-3c34000c.js";import{R as P}from"./Rate-e035dc26.js";import{_ as U}from"./PageTitle-cf59474a.js";import{_ as Y}from"./Pagination.vue_vue_type_style_index_0_lang-ad72ae25.js";import{C as Z}from"./CommunityPost-6f7e7146.js";/* empty css                                             */import"./ArrowShape-b0eec782.js";/* empty css                                                   *//* empty css                                                  */import"./More-082db23d.js";import"./Comment-eb92300d.js";import"./markdown_to_html_lite-855e1114.js";import"./index-97cf174a.js";import"./CharacterCard-e52e3e02.js";import"./UserBusiness-18e9140c.js";import"./Warning-91344c2d.js";import"./Comment-c13126cb.js";const H={components:{Rate:P},props:["game","index","no_appear_ani"],data(){return{open_tag:!1}},computed:{game_title_t(){return this.game.title_t?w(this.game.title_t):null},game_title_t_second(){return this.game.title_t?w(this.game.title_t,S().settings.second_language):null}},mounted(){},beforeUnmount(){},methods:{}},J={class:"game_item_bg"},K=["src"],O={class:"game_item_img"},Q=["src"],W=t("div",{class:"img_back"},null,-1),X={class:"game_item_text_wrapper"},ee={class:"game_item_text"},te={class:"title"},ae={key:0},se={key:1},_e={class:"tag_box"},ne={class:"tag"},ie={key:0},oe={key:1},le={key:2};function re(v,g,e,u,h,s){const r=k("Rate"),c=k("router-link");return _(),C(c,{class:L(["game_item",{appear_section:!e.no_appear_ani}]),to:"/archive/games/"+e.game.game_id.toLowerCase(),style:N({"animation-delay":Math.min(e.index,12)*.04+"s"})},{default:q(()=>[t("div",J,[t("img",{class:"game_item_bg_item",src:e.game.cover},null,8,K)]),t("div",O,[t("img",{src:e.game.cover},null,8,Q),W]),t("div",X,[t("div",ee,[t("div",te,[t("h2",null,i(e.game.title),1),s.game_title_t?(_(),l("h3",ae,i(s.game_title_t),1)):s.game_title_t_second?(_(),l("h3",se,i(s.game_title_t_second),1)):p("",!0)]),t("div",_e,[t("div",ne,[m(r,{rate:e.game.rate},null,8,["rate"]),e.game.publish_date?(_(),l("div",ie,i(e.game.publish_date),1)):p("",!0),e.game.region?(_(),l("div",oe,i(v.$text("regions."+e.game.region)),1)):p("",!0),e.game.gameplay?(_(),l("div",le,i(v.$text("gameplay_short."+e.game.gameplay)),1)):p("",!0)])])])])]),_:1},8,["to","class","style"])}const ce=I(H,[["render",re]]);const me={id:"games_home",class:"content"},ge={class:"archive_count"},ue={class:"archive_pagination"},de={class:"section archive_pagination_section blur_part"},ze={__name:"home",setup(v){const g=V(),e=n([]),u=n(0),h=n(24),s=n(null),r=n(!1),c=n(!0),f=n(0);z((a,o,d)=>{f.value=j(),c.value=!1,d()}),F(()=>{c.value=!0;const a=g.query.page?parseInt(g.query.page):1;a===s.value?(A(f.value),r.value=!0):(s.value=a,e.value=[],x())}),G(()=>g.query.page,a=>{if(!c.value)return;const o=a?parseInt(a):1;o!==s.value&&(s.value=o,x(!0))}),R();async function R(){const a=await b("/archive/get_games_count.php");u.value=parseInt(a.data)}const y=n(null);async function x(a){const o=await b("/archive/get_games_all.php",{page:s.value});r.value=!1,e.value=o.data.games||[],h.value=o.data.capacity||24,a&&D(()=>{E(y.value)})}return(a,o)=>(_(),l("div",me,[m(U,{title:a.$text("nav.archive.games"),parent:{title:a.$text("nav.archive"),link:"/archive"}},null,8,["title","parent"]),m(M,{class:"achive_items_placeholder",loading:e.value.length==0},null,8,["loading"]),t("div",{class:"games_item_container",ref_key:"games_item_container",ref:y},[(_(!0),l(T,null,$(e.value,(d,B)=>(_(),C(ce,{game:d,key:d.game_no,no_appear_ani:r.value,index:B},null,8,["game","no_appear_ani","index"]))),128))],512),t("p",ge,i(u.value)+" "+i(a.$text("nav.archive.games")),1),t("div",ue,[t("div",de,[m(Y,{max_page:Math.ceil(u.value/h.value)},null,8,["max_page"])])]),m(Z,{post_id:"archive/games"})]))}};export{ze as default};

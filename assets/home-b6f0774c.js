import{_ as R,b as B,r as k,o,k as j,w as I,e as a,n as y,t as s,d as l,h as m,g as v,f as M,V as S,O as _,aa as V,ab as q,Z as L,$ as b,Q as N,F as z,i as F,ac as T,ad as A,a1 as D,c as E}from"./index-520d7f93.js";import{_ as O}from"./PageTitle-998ab926.js";import{d as P}from"./display_json_text-e8cb4bb2.js";import{R as Q}from"./Rate-ad8e1553.js";import{_ as U}from"./Pagination.vue_vue_type_style_index_0_lang-61e585e8.js";import{C as Z}from"./CommunityPost-c0225306.js";import"./ArrowShape-c6fed64d.js";/* empty css                                                   *//* empty css                                                  *//* empty css                                             */import"./More-8cb5c09b.js";import"./Comment-da003ec4.js";import"./markdown_to_html_lite-855e1114.js";import"./index-97cf174a.js";import"./CharacterCard-2ce92522.js";import"./UserBusiness-5110ffc3.js";import"./Warning-e5251bc0.js";import"./Comment-53625186.js";const G={components:{Rate:Q},props:["movie","index","no_appear_ani"],data(){return{display_json_text:P}},computed:{second_language(){return B().settings.second_language}},mounted(){},beforeUnmount(){},methods:{}},H={class:"movie_item_bg"},J={class:"movie_item_img"},K={class:"movie_item_text_wrapper"},W={class:"movie_item_text"},X={class:"title"},Y={key:0},$={key:1},ee={class:"tag"},te={key:0},ae={key:1},ie={key:2};function oe(h,u,e,d,i,n){const r=k("Rate"),p=k("router-link");return o(),j(p,{class:M(["movie_item section hover",{appear_section:!e.no_appear_ani}]),to:"/archive/movies/"+e.movie.movie_id.toLowerCase(),style:y({"animation-delay":Math.min(e.index,12)*.04+"s"})},{default:I(()=>[a("div",H,[a("div",{class:"movie_item_bg_item",style:y({"background-image":"url("+e.movie.cover+")"})},null,4)]),a("div",J,[a("div",{class:"img",style:y({"background-image":"url("+e.movie.cover+")"})},null,4)]),a("div",K,[a("div",W,[a("div",X,[a("h2",null,s(e.movie.title),1),e.movie.title_t&&i.display_json_text(e.movie.title_t)?(o(),l("h3",Y,s(i.display_json_text(e.movie.title_t)),1)):m("",!0),e.movie.title_t&&i.display_json_text(e.movie.title_t,n.second_language)&&i.display_json_text(e.movie.title_t,n.second_language)!=i.display_json_text(e.movie.title_t)?(o(),l("h3",$,s(i.display_json_text(e.movie.title_t,n.second_language)),1)):m("",!0)]),a("div",ee,[v(r,{rate:e.movie.rate},null,8,["rate"]),e.movie.publish_date&&e.movie.publish_date!="0000-00-00"?(o(),l("div",te,s(e.movie.publish_date),1)):m("",!0),e.movie.region?(o(),l("div",ae,s(h.$text("regions."+e.movie.region)),1)):m("",!0),e.movie.type?(o(),l("div",ie,s(h.$text("movie_type."+e.movie.type)),1)):m("",!0)])])])]),_:1},8,["to","class","style"])}const se=R(G,[["render",oe]]);const ne={id:"movies_home",class:"content"},_e={class:"archive_count"},le={class:"archive_pagination"},ce={class:"section archive_pagination_section blur_part"},Ie={__name:"home",setup(h){const u=S(),e=_([]),d=_(0),i=_(null),n=_(!1),r=_(!0),p=_(0);V((t,c,g)=>{p.value=T(),r.value=!1,g()}),q(()=>{r.value=!0;const t=u.query.page?parseInt(u.query.page):1;t===i.value?(A(p.value),n.value=!0):(i.value=t,e.value=[],x())}),L(()=>u.query.page,t=>{if(!r.value)return;const c=t?parseInt(t):1;c!==i.value&&(i.value=c,x(!0))}),w();async function w(){const t=await b("/archive/get_movies_count.php");d.value=parseInt(t.data)}const f=_(null);async function x(t){const c=await b("/archive/get_all_movies.php",{page:i.value});n.value=!1,e.value=c.data||[],t&&D(()=>{E(f.value)})}return(t,c)=>(o(),l("div",ne,[v(O,{title:t.$text("nav.archive.movies"),parent:{title:t.$text("nav.archive"),link:"/archive"}},null,8,["title","parent"]),v(N,{class:"achive_items_placeholder",loading:e.value.length==0},null,8,["loading"]),a("div",{class:"movie_item_container",ref_key:"movie_item_container",ref:f},[(o(!0),l(z,null,F(e.value,(g,C)=>(o(),j(se,{movie:g,key:g.movie_no,index:C,no_appear_ani:n.value},null,8,["movie","index","no_appear_ani"]))),128))],512),a("p",_e,s(d.value)+" "+s(t.$text("nav.archive.movies")),1),a("div",le,[a("div",ce,[v(U,{max_page:Math.ceil(d.value/36)},null,8,["max_page"])])]),v(Z,{post_id:"archive/movies"})]))}};export{Ie as default};

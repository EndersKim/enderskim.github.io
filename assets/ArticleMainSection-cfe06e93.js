import{_ as C,b as z,m as R,$,r as g,o as _,d as r,e as s,n as T,g as p,w as q,t as c,h as l,k as w,ai as P,W as V,O as S,Z as W,a1 as D,F as E,i as H,q as j,Q as F,S as G,l as Q,f as I,aj as Z,u as J,c as K}from"./index-520d7f93.js";import{m as X}from"./markdown_to_html_widget-a003ad54.js";import{d as M}from"./display_json_text-e8cb4bb2.js";import{R as U}from"./Rate-ad8e1553.js";import{_ as Y}from"./AMovie.vue_vue_type_style_index_0_lang-651f0bdd.js";import{L as ee}from"./List-0299c897.js";import{U as te}from"./UserBusiness-5110ffc3.js";const se={components:{Rate:U},props:["movie_id"],data(){return{open_tag:!1,movie:null,not_found:!1}},computed:{movie_title_t(){return this.movie.title_t?M(this.movie.title_t):null},movie_title_t_second(){return this.movie.title_t?M(this.movie.title_t,z().settings.second_language):null}},mounted(){this.get_info_request()},beforeUnmount(){},methods:{$text:R,get_info_request(){$("/archive/get_movie_detail.php",{movie_id:this.movie_id}).then(e=>{e.status=="success"?this.movie=e.data:this.not_found=!0})}}},ie={key:0,class:"a_movie"},ae={class:"bg_wrapper"},_e=s("div",{class:"img_back"},null,-1),re=[_e],oe={class:"text_wrapper"},ce={class:"text"},le={class:"title_box"},ne={class:"main_title"},de={key:0,class:"sub_title"},ue={key:1,class:"sub_title"},he={class:"tag_box"},me={key:0},ve={key:1},ge={key:2};function pe(e,n,i,f,t,a){const y=g("RouterLink"),u=g("Rate");return t.movie?(_(),r("div",ie,[s("div",ae,[s("div",{class:"bg",style:T({"background-image":"url("+t.movie.cover+")"})},null,4)]),p(y,{class:"img_wrapper",to:"/archive/movies/"+t.movie.movie_id.toLowerCase()},{default:q(()=>[s("div",{class:"img",style:T({"background-image":"url("+t.movie.cover+")"})},re,4)]),_:1},8,["to"]),s("div",oe,[s("div",ce,[s("div",le,[s("span",ne,c(t.movie.title),1),a.movie_title_t?(_(),r("span",de,c(a.movie_title_t),1)):l("",!0),a.movie_title_t_second?(_(),r("span",ue,c(a.movie_title_t_second),1)):l("",!0)]),s("div",he,[p(u,{rate:t.movie.rate},null,8,["rate"]),t.movie.publish_date?(_(),r("div",me,c(t.movie.publish_date),1)):l("",!0),t.movie.region?(_(),r("div",ve,c(a.$text("regions."+t.movie.region)),1)):l("",!0),t.movie.type?(_(),r("div",ge,c(a.$text("movie_type."+t.movie.type)),1)):l("",!0)])])])])):l("",!0)}const fe=C(se,[["render",pe]]);const ye={components:{Rate:U},props:["game_id"],data(){return{open_tag:!1,game:null,not_found:!1}},computed:{game_title_t(){return this.game.title_t?M(this.game.title_t):null},game_title_t_second(){return this.game.title_t?M(this.game.title_t,z().settings.second_language):null}},mounted(){this.get_info_request()},beforeUnmount(){},methods:{$text:R,get_info_request(){$("/archive/get_game_detail.php",{game_id:this.game_id}).then(e=>{e.status=="success"?this.game=e.data:this.not_found=!0})}}},xe={key:0,class:"a_game"},be={class:"bg_wrapper"},ke=s("div",{class:"img_back"},null,-1),we=[ke],Ae={class:"text_wrapper"},Le={class:"text"},Se={class:"title_box"},Te={class:"main_title"},Me={key:0,class:"sub_title"},Ce={key:1,class:"sub_title"},Be={class:"tag_box"},Ee={key:0},qe={key:1},ze={key:2};function Re(e,n,i,f,t,a){const y=g("RouterLink"),u=g("Rate");return t.game?(_(),r("div",xe,[s("div",be,[s("div",{class:"bg",style:T({"background-image":"url("+t.game.cover+")"})},null,4)]),p(y,{class:"img_wrapper",to:"/archive/games/"+t.game.game_id.toLowerCase()},{default:q(()=>[s("div",{class:"img",style:T({"background-image":"url("+t.game.cover+")"})},we,4)]),_:1},8,["to"]),s("div",Ae,[s("div",Le,[s("div",Se,[s("span",Te,c(t.game.title),1),a.game_title_t?(_(),r("span",Me,c(a.game_title_t),1)):l("",!0),a.game_title_t_second?(_(),r("span",Ce,c(a.game_title_t_second),1)):l("",!0)]),s("div",Be,[p(u,{rate:t.game.rate},null,8,["rate"]),t.game.publish_date?(_(),r("div",Ee,c(t.game.publish_date),1)):l("",!0),t.game.region?(_(),r("div",qe,c(a.$text("regions."+t.game.region)),1)):l("",!0),t.game.gameplay?(_(),r("div",ze,c(a.$text("gameplay_short."+t.game.gameplay)),1)):l("",!0)])])])])):l("",!0)}const $e=C(ye,[["render",Re]]);const He={__name:"ArticleWidget",props:["type","data","target"],setup(e){return(n,i)=>(_(),w(P,{to:e.target},[e.type==="game"?(_(),w($e,{key:0,game_id:e.data},null,8,["game_id"])):l("",!0),e.type==="movie"?(_(),w(fe,{key:1,movie_id:e.data},null,8,["movie_id"])):l("",!0),e.type==="song"?(_(),w(Y,{key:2,song_id:e.data},null,8,["song_id"])):l("",!0)],8,["to"]))}},Ie=["innerHTML"],Ue={__name:"ArticleContentMd",props:["article_data"],emits:["scroll_to","loaded"],setup(e,{emit:n}){const i=e,f=V(),t=S(""),a=S("/");W(()=>i.article_data,()=>{if(i.article_data.article_id)if(i.article_data.atype=="folder")a.value=i.article_data.article_id+"/";else{let d=i.article_data.article_id;a.value=d.slice(0,d.lastIndexOf("/")+1)}t.value=y(X(i.article_data.content)),D(()=>{k(),B(),x(),n("loaded")})},{immediate:!0});function y(d){let o=d,h=d.match(/<img.*?>/g);return h?(h.map(m=>{let b=m.match(/\ssrc=['"](.*?)['"]/);if(!b)return;let L=b[0],v=b[1];if(v.indexOf("http")!=0&&v.indexOf("//")!=0&&v.indexOf("#")!=0){let N=` src_data="${"https://api.kloudy.cn/blog/posts/"+a.value+v}" src="/static/img/img_loading.svg"`,O=m.replace(L,N);o=o.replace(m,O)}}),o):d}const u=S(null);function k(){var d;(d=u.value)==null||d.querySelectorAll("a").forEach(o=>{const h=o.getAttribute("href");h.slice(0,1)=="#"?(o.removeAttribute("target"),o.addEventListener("click",m=>{m.preventDefault();let b=document.getElementById(o.getAttribute("href").slice(1));n("scroll_to",b)})):h.startsWith("/")?(o.setAttribute("target","_self"),o.addEventListener("click",m=>{m.preventDefault(),f.push(o.getAttribute("href"))})):o.setAttribute("target","_blank")})}function B(){let d={root:document.querySelector("#App"),rootMargin:"0px",threshold:0},o=(m,b)=>{m.forEach(L=>{let v=L.target;L.isIntersecting?v.load_img_request=setTimeout(()=>{v.classList.add("active"),v.setAttribute("src",v.getAttribute("src_data")),v.removeAttribute("src_data"),b.unobserve(v)},200):clearTimeout(v.load_img_request)})},h=new IntersectionObserver(o,d);u.value.querySelectorAll("img").forEach(m=>{m.getAttribute("src_data")&&h.observe(m)})}const A=S([]);function x(){let d=0;u.value.querySelectorAll(".article_widget").forEach(o=>{A.value.push({id:d++,type:o.getAttribute("type"),data:o.getAttribute("data"),target:o})})}return(d,o)=>(_(),r(E,null,[s("article",{ref_key:"article_el",ref:u,innerHTML:t.value},null,8,Ie),(_(!0),r(E,null,H(A.value,h=>(_(),w(He,{key:h.id,type:h.type,data:h.data,target:h.target},null,8,["type","data","target"]))),128))],64))}};const Ne={components:{Avatar:j,Placeholder:F,ScrollBox:G,List:ee,UserBusiness:te},props:["article_data","article_headers","active_header_index"],data(){return{}},mounted(){},watch:{},methods:{scroll_to(e){this.$emit("scroll_to",e),this.$emit("switch_aside")}}},Oe={class:"article_aside"},Pe={key:0,class:"article_character_box section"},Ve={class:"article_character_box_text"},We={class:"name"},De={class:"descr"},je={class:"article_character_box_tags"},Fe={key:0,class:"uid_tag"},Ge={key:1,class:"admin_tag"},Qe={class:"article_indexes_box section"},Ze={class:"article_indexed_title"},Je={class:"article_indexed_title_text"},Ke={class:"article_indexes_links"},Xe=["onClick","href","innerHTML"];function Ye(e,n,i,f,t,a){const y=g("Avatar"),u=g("UserBusiness"),k=g("List"),B=g("ScrollBox"),A=g("Placeholder");return _(),r("aside",Oe,[i.article_data&&i.article_data.character?(_(),r("div",Pe,[p(y,{avatar_url:i.article_data.character.avatar_url,nickname:i.article_data.character.nickname,size:80},null,8,["avatar_url","nickname"]),s("div",Ve,[s("p",We,c(i.article_data.character.nickname),1),s("p",De,c(i.article_data.character.descr),1),s("div",je,[i.article_data.character.ctype!="temp"?(_(),r("div",Fe," @"+c(i.article_data.character.cid),1)):l("",!0),i.article_data.character.ctype=="admin"?(_(),r("div",Ge,[p(u),Q(" "+c(e.$text("account.admin")),1)])):l("",!0)])])])):l("",!0),s("div",Qe,[s("div",Ze,[p(k,{class:"article_indexed_title_icon"}),s("span",Je,c(e.$text("blog.toc")),1)]),p(B,null,{default:q(()=>[s("div",Ke,[(_(!0),r(E,null,H(i.article_headers,(x,d)=>(_(),r("a",{class:I(["article_header_link",{H2:x.tagName=="H2",H3:x.tagName=="H3",active:i.active_header_index>-1&&d==i.active_header_index}]),key:x.id,onClick:Z(o=>a.scroll_to(x),["prevent"]),href:"#"+x.id,innerHTML:x.innerHTML},null,10,Xe))),128))])]),_:1}),p(A,{empty:!i.article_headers||i.article_headers.length==0,empty_title:" "},null,8,["empty"])])])}const et=C(Ne,[["render",Ye]]);const tt={components:{ArticleContentMd:Ue,ArticleAside:et},props:["article_data"],data(){return{article_headers:[],active_header_index:-1,hl_timer:{},resize_timer:null,open_aside:!1}},computed:{app_scroll_top(){return J().app_scroll.top}},mounted(){window.addEventListener("resize",this.listen_resize)},beforeUnmount(){window.removeEventListener("resize",this.listen_resize)},watch:{app_scroll_top(e){this.active_header_index=-1,this.article_headers.forEach((n,i)=>{e>n.getAttribute("offset_top")-101&&(this.active_header_index=i)})}},methods:{listen_resize(){clearInterval(this.resize_timer),this.resize_timer=setTimeout(()=>{this.compute_article_headers()},500)},loaded(){this.compute_article_headers(),this.scroll_to_hash()},compute_article_headers(){let e=document.querySelectorAll("article h2, article h3");this.article_headers=[],e.forEach(n=>{let i=0,f=n;for(;f;)i+=f.offsetTop,f=f.offsetParent;n.setAttribute("offset_top",i),this.article_headers.push(n)})},scroll_to(e){this.compute_article_headers(),this.$nextTick(()=>{K(e,!0),e&&(clearInterval(this.hl_timer["start_"+e.id]),clearInterval(this.hl_timer["end_"+e.id]),e.classList.remove("h_transition"),e.classList.remove("h_transition_slow"),e.classList.add("scrollingTo","h_transition"),this.hl_timer["start_"+e.id]=setTimeout(()=>{e.classList.remove("scrollingTo"),e.classList.add("h_transition_slow")},500),this.hl_timer["end_"+e.id]=setTimeout(()=>{e.classList.remove("h_transition"),e.classList.remove("h_transition_slow")},2e3))})},scroll_to_hash(){if(this.$route.hash){let e=document.getElementById(decodeURI(this.$route.hash.slice(1)));setTimeout(()=>{this.scroll_to(e)},100)}},switch_aside(){this.open_aside=!this.open_aside}}},st={class:"article_main_section_content section"},it={class:"article_switch_aside"},at=s("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"128",height:"128"},[s("path",{d:"M219.818667 347.818667a51.2 51.2 0 0 0 0 72.405333l256 256a51.2 51.2 0 0 0 72.405333 0l256-256a51.2 51.2 0 0 0-72.448-72.405333L512 567.594667 292.224 347.818667a51.2 51.2 0 0 0-72.405333 0z"})],-1),_t={class:"article_main_section_aside",ref:"article_main_section_aside"};function rt(e,n,i,f,t,a){const y=g("ArticleContentMd"),u=g("ArticleAside");return _(),r("div",{class:I(["article_main_section",{open_aside:t.open_aside}])},[s("div",st,[p(y,{article_data:i.article_data,onLoaded:a.loaded,onScroll_to:a.scroll_to},null,8,["article_data","onLoaded","onScroll_to"]),s("div",it,[s("div",{class:"article_switch_aside_button blur_part",onClick:n[0]||(n[0]=(...k)=>a.switch_aside&&a.switch_aside(...k))},[at,s("p",null,c(e.$text("blog.toc")),1)])])]),s("div",_t,[s("div",{class:"article_main_section_aside_back",onClick:n[1]||(n[1]=k=>t.open_aside=!t.open_aside)}),p(u,{article_data:i.article_data,article_headers:t.article_headers,active_header_index:t.active_header_index,onScroll_to:a.scroll_to,onSwitch_aside:a.switch_aside},null,8,["article_data","article_headers","active_header_index","onScroll_to","onSwitch_aside"])],512)],2)}const vt=C(tt,[["render",rt]]);export{vt as A};

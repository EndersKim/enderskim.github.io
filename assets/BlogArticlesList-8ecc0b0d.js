import{r as d,o as a,k as h,w as k,e,d as l,n as m,h as s,t as o,p as w,a1 as A,_ as z,Z as L,$ as I,c as B,g as y,f as C,F as u,i as p}from"./index-6f69462e.js";import{_ as M}from"./Pagination.vue_vue_type_style_index_0_lang-ad72ae25.js";import{_ as H}from"./ArticleItemMiddle-4b3ca308.js";const V={class:"article_index_section_l section hover"},$={class:"article_index_text_l"},P=["category"],N={key:0},q={key:1},S={key:2},F={key:0},T={class:"article_index_section_info_l"},D=e("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[e("path",{d:"M896 864a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64z m-60.16-733.621333l15.093333 15.093333c45.866667 45.834667 45.866667 120.16 0 166.005333L418.794667 743.338667a160.192 160.192 0 0 1-78.122667 42.986666l-152.245333 34.197334c-23.84 5.365333-44.661333-16.853333-37.749334-40.288l43.338667-146.88a160.042667 160.042667 0 0 1 40.373333-67.925334l435.328-435.050666c45.866667-45.834667 120.245333-45.834667 166.112 0zM636.32 254.304L279.68 610.709333a96.021333 96.021333 0 0 0-24.213333 40.746667l-27.946667 94.656 99.093333-22.261333a96.117333 96.117333 0 0 0 46.869334-25.781334L726.933333 344.842667l-90.602666-90.538667z m78.698667-78.656l-33.397334 33.386667 90.602667 90.538666 33.386667-33.376a53.333333 53.333333 0 0 0 0-75.456l-15.093334-15.093333a53.408 53.408 0 0 0-75.498666 0z"})],-1),E=e("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[e("path",{d:"M725.333333 170.666667h74.709334C864.853333 170.666667 917.333333 223.189333 917.333333 288.096V799.893333C917.333333 864.757333 864.832 917.333333 800.042667 917.333333H223.957333C159.146667 917.333333 106.666667 864.810667 106.666667 799.904V288.106667C106.666667 223.242667 159.168 170.666667 223.957333 170.666667H298.666667v-32a32 32 0 0 1 64 0v32h298.666666v-32a32 32 0 0 1 64 0v32z m0 64v32a32 32 0 0 1-64 0v-32H362.666667v32a32 32 0 0 1-64 0v-32h-74.709334A53.354667 53.354667 0 0 0 170.666667 288.096V799.893333A53.301333 53.301333 0 0 0 223.957333 853.333333h576.085334A53.354667 53.354667 0 0 0 853.333333 799.904V288.106667A53.301333 53.301333 0 0 0 800.042667 234.666667H725.333333z m-10.666666 224a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h405.333334zM586.666667 618.666667a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h277.333334z","p-id":"3715"})],-1),Z=["title"],j={__name:"ArticleItemLarge",props:{article_data:{},index:{default:0,type:Number}},setup(t){return(r,n)=>{const c=d("router-link");return a(),h(c,{to:"/blog/articles/"+t.article_data.article_id.toLowerCase(),class:"ArticleItemLarge appear_section",style:m({"animation-delay":Math.min(t.index,12)*.08+"s"})},{default:k(()=>[e("div",V,[t.article_data.cover?(a(),l("div",{key:0,class:"article_index_img_l",style:m({"background-image":"url("+t.article_data.cover+")"})},null,4)):s("",!0),e("div",$,[e("div",{class:"article_index_text_l_category",category:t.article_data.category},[t.article_data.category=="life"?(a(),l("span",N,o(r.$text("nav.blog.categories.life")),1)):s("",!0),t.article_data.category=="study"?(a(),l("span",q,o(r.$text("nav.blog.categories.study")),1)):s("",!0),t.article_data.category=="about"?(a(),l("span",S,o(r.$text("nav.blog.categories.about")),1)):s("",!0)],8,P),e("h2",null,o(t.article_data.title),1),t.article_data.parent?(a(),l("h3",F,o(t.article_data.parent.title),1)):s("",!0),e("p",null,o(t.article_data.intro),1),e("div",T,[e("div",null,[D,e("span",null,o(t.article_data.character.nickname),1)]),e("div",null,[E,e("span",{title:t.article_data.insert_time},o(w(A)(t.article_data.insert_time))+" ",9,Z)])])])])]),_:1},8,["to","style"])}}};const G={components:{Placeholder:L,Pagination:M,ArticleItemLarge:j,ArticleItemMiddle:H},props:{limit_count:{type:Number,default:0},item_size:{type:String,default:"large"},category:{type:String,default:""}},data(){return{blog_articles:null,count:0,capacity:1,page:null}},watch:{"$route.query.page":{handler(){const t=this.$route.query.page||1;this.page===null?(this.page=t,this.get_all()):t!==this.page&&(this.page=t,this.get_all(!0))},immediate:!0}},methods:{async get_all(t){let r;const n={page:this.page};this.category?(r="/blog/get_articles_category.php",n.category=this.category):r="/blog/get_articles_all.php";const c=await I(r,n);if(this.blog_articles=null,c.status!="success"){console.log(c);return}this.$nextTick(()=>{this.limit_count>0?this.blog_articles=c.data.articles.splice(0,this.limit_count):this.blog_articles=c.data.articles,this.capacity=parseInt(c.data.capacity),this.count=parseInt(c.data.count),t&&this.$nextTick(()=>{B(this.$refs.article_items_container)})})}}},J={class:"BlogArticlesList"},K={key:0,class:"blog_pagination"},O={class:"section blur_part"};function Q(t,r,n,c,i,R){const v=d("Placeholder"),f=d("ArticleItemLarge"),x=d("ArticleItemMiddle"),b=d("Pagination");return a(),l("div",J,[y(v,{loading:!i.blog_articles,empty:i.blog_articles&&i.blog_articles.length==0},null,8,["loading","empty"]),i.blog_articles?(a(),l("div",{key:0,class:C(["article_items_container",n.item_size]),ref:"article_items_container"},[n.item_size=="large"?(a(!0),l(u,{key:0},p(i.blog_articles,(_,g)=>(a(),h(f,{key:_.post_no,article_data:_,index:g},null,8,["article_data","index"]))),128)):s("",!0),n.item_size=="middle"?(a(!0),l(u,{key:1},p(i.blog_articles,(_,g)=>(a(),h(x,{key:_.post_no,article_data:_,index:g},null,8,["article_data","index"]))),128)):s("",!0)],2)):s("",!0),n.limit_count?s("",!0):(a(),l(u,{key:1},[i.blog_articles&&i.count>i.capacity?(a(),l("div",K,[e("div",O,[y(b,{max_page:Math.ceil(i.count/i.capacity)},null,8,["max_page"])])])):s("",!0)],64))])}const Y=z(G,[["render",Q]]);export{Y as B};

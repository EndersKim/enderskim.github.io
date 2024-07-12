import{_ as p,Y as A,r as _,o as l,d as o,e as t,n as z,k as d,w as b,l as m,t as i,h as c,W as x,F as w,i as C,g as y,$ as k}from"./index-1fc629ac.js";import{A as M,_ as S}from"./ArticleMainSection-0626d820.js";import{C as B}from"./CommunityPost-b75616ac.js";import"./markdown_to_html_widget-a003ad54.js";import"./index-97cf174a.js";import"./display_json_text-01b7f379.js";import"./Rate-bb09ea0f.js";/* empty css                                             */import"./AMovie.vue_vue_type_style_index_0_lang-2abc3c15.js";import"./parse_song_data-87314fe1.js";import"./Pause-ae4119dd.js";import"./List-89a68290.js";import"./UserBusiness-680c825d.js";import"./Comment-40c00899.js";import"./markdown_to_html_lite-855e1114.js";import"./Pagination.vue_vue_type_style_index_0_lang-4ef08e73.js";import"./More-84fec72f.js";import"./CharacterCard-20be52a3.js";import"./Warning-f96db5f0.js";import"./Comment-f61365b3.js";const D={props:["article_data"],computed:{$relative_time_auto(){return A},cover(){return this.article_data&&this.article_data.cover?this.article_data.cover:this.article_data&&this.article_data.parent&&this.article_data.parent.cover?this.article_data.parent.cover:"https://pic1.zhimg.com/v2-8d5ebb4f0fa67e76cbdd3c468f596e98_r.jpg"}}},H={key:0,class:"ArticleTitle"},V={class:"article_title_img_box"},T={class:"content"},P={class:"article_title_text"},L={class:"intro_row"},j={key:1,class:"info_row"},N=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[t("path",{d:"M896 864a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64z m-60.16-733.621333l15.093333 15.093333c45.866667 45.834667 45.866667 120.16 0 166.005333L418.794667 743.338667a160.192 160.192 0 0 1-78.122667 42.986666l-152.245333 34.197334c-23.84 5.365333-44.661333-16.853333-37.749334-40.288l43.338667-146.88a160.042667 160.042667 0 0 1 40.373333-67.925334l435.328-435.050666c45.866667-45.834667 120.245333-45.834667 166.112 0zM636.32 254.304L279.68 610.709333a96.021333 96.021333 0 0 0-24.213333 40.746667l-27.946667 94.656 99.093333-22.261333a96.117333 96.117333 0 0 0 46.869334-25.781334L726.933333 344.842667l-90.602666-90.538667z m78.698667-78.656l-33.397334 33.386667 90.602667 90.538666 33.386667-33.376a53.333333 53.333333 0 0 0 0-75.456l-15.093334-15.093333a53.408 53.408 0 0 0-75.498666 0z"})],-1),E=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[t("path",{d:"M725.333333 170.666667h74.709334C864.853333 170.666667 917.333333 223.189333 917.333333 288.096V799.893333C917.333333 864.757333 864.832 917.333333 800.042667 917.333333H223.957333C159.146667 917.333333 106.666667 864.810667 106.666667 799.904V288.106667C106.666667 223.242667 159.168 170.666667 223.957333 170.666667H298.666667v-32a32 32 0 0 1 64 0v32h298.666666v-32a32 32 0 0 1 64 0v32z m0 64v32a32 32 0 0 1-64 0v-32H362.666667v32a32 32 0 0 1-64 0v-32h-74.709334A53.354667 53.354667 0 0 0 170.666667 288.096V799.893333A53.301333 53.301333 0 0 0 223.957333 853.333333h576.085334A53.354667 53.354667 0 0 0 853.333333 799.904V288.106667A53.301333 53.301333 0 0 0 800.042667 234.666667H725.333333z m-10.666666 224a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h405.333334zM586.666667 618.666667a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h277.333334z"})],-1),F=["title"],R=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[t("path",{d:"M865.92 188.34944a30.72 30.72 0 0 1 30.69952 29.568l0.02048 1.152v184.32a30.72 30.72 0 0 1-29.568 30.69952l-1.152 0.02048h-184.32a30.72 30.72 0 0 1-1.152-61.41952l1.152-0.02048 153.6-0.00512V219.06944a30.72 30.72 0 0 1 29.568-30.69952l1.152-0.02048z"}),t("path",{d:"M235.97056 251.33056c142.52544-142.52032 372.71552-143.9488 516.992-4.2752l4.34688 4.2752 130.33472 130.33472a30.72 30.72 0 0 1-42.51136 44.34432l-0.93696-0.90112-130.33472-130.3296c-119.96672-119.97184-314.47552-119.97184-434.44224 0-119.97184 119.96672-119.97184 314.4704 0 434.44224 119.96672 119.97184 314.4704 119.97184 434.44224 0a30.72 30.72 0 1 1 43.44832 43.44832c-143.96416 143.95904-377.37472 143.95904-521.33888 0-143.95904-143.96416-143.95904-377.37472 0-521.33888z"})],-1),K=["title"];function U(a,h,e,u,r,n){const s=_("router-link");return e.article_data?(l(),o("div",H,[t("div",V,[t("div",{class:"article_title_img",style:z({"background-image":"url("+n.cover+")"})},null,4)]),t("div",T,[t("div",P,[e.article_data.parent?(l(),d(s,{key:0,class:"article_parent_title",to:"/blog/articles/"+e.article_data.parent.article_id},{default:b(()=>[m(i(e.article_data.parent.title),1)]),_:1},8,["to"])):c("",!0),t("h1",null,i(e.article_data.title),1),t("p",L,i(e.article_data.intro),1),e.article_data.character?(l(),o("div",j,[t("div",null,[N,t("span",null,i(e.article_data.character.nickname),1)]),t("div",null,[E,t("span",{title:e.article_data.insert_time},i(n.$relative_time_auto(e.article_data.insert_time))+" ",9,F)]),t("div",null,[R,t("span",{title:e.article_data.update_time},i(n.$relative_time_auto(e.article_data.update_time))+" ",9,K)])])):c("",!0)])])])):c("",!0)}const W=p(D,[["render",U]]);const Y={components:{BlogArticleTitle:W,ArticleMainSection:M,CommunityPost:B,Placeholder:x},props:["article_data"]},q={class:"BlogArticleDetailDoc"},G={key:1,class:"content"},I={key:0,class:"section article_children_section"},J={class:"section_title"},O={class:"article_children_item_title"},Q={key:2,class:"section article_copyright_section"},X=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M512 0C229.888 0 0 229.888 0 512s229.888 512 512 512 512-229.888 512-512S794.112 0 512 0z m0 944.64c-238.592 0-432.64-194.048-432.64-432.64S273.408 79.36 512 79.36s432.64 194.048 432.64 432.64-194.048 432.64-432.64 432.64z"}),t("path",{d:"M644.608 379.392c15.36 15.36 40.448 15.36 55.808 0s15.36-40.448 0-55.808c-103.936-103.936-273.408-103.936-377.344 0-103.936 103.936-103.936 273.408 0 377.344 52.224 52.224 120.32 77.824 188.928 77.824s136.704-26.112 188.928-77.824c15.36-15.36 15.36-40.448 0-55.808s-40.448-15.36-55.808 0c-73.216 73.216-192.512 73.216-265.728 0-73.216-73.216-73.216-192.512 0-265.728 73.216-73.216 192-73.216 265.216 0z"})],-1),Z={class:"section_title"},t3={href:"https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh",target:"_blank"};function e3(a,h,e,u,r,n){const s=_("BlogArticleTitle"),g=_("router-link"),v=_("ArticleMainSection"),$=_("CommunityPost");return l(),o("div",q,[e.article_data?(l(),d(s,{key:0,article_data:e.article_data},null,8,["article_data"])):c("",!0),e.article_data?(l(),o("div",G,[e.article_data.children&&e.article_data.children.length>0?(l(),o("div",I,[t("h3",J,i(a.$text("blog.chapters")),1),(l(!0),o(w,null,C(e.article_data.children,f=>(l(),o("div",{class:"article_children_item_box",key:f.post_no},[y(g,{class:"article_children_item",to:"/blog/articles/"+f.article_id},{default:b(()=>[t("span",O,i(f.title),1)]),_:2},1032,["to"])]))),128))])):c("",!0),e.article_data.content?(l(),d(v,{key:1,article_data:e.article_data},null,8,["article_data"])):c("",!0),e.article_data.content?(l(),o("div",Q,[X,t("h3",Z,i(a.$text("blog.copyright")),1),t("p",null,[m(i(a.$text("blog.copyright1_1")),1),t("a",t3,i(a.$text("blog.copyright1_2")),1),m(i(a.$text("blog.copyright1_3")),1)]),t("p",null,i(a.$text("blog.copyright2")),1),t("p",null,i(a.$text("nav.copyright_info")),1)])):c("",!0),y($,{post_id:"blog/articles/"+e.article_data.article_id},null,8,["post_id"])])):c("",!0)])}const a3=p(Y,[["render",e3]]);const i3={props:["article_data"],computed:{$relative_time_auto(){return A},cover(){return this.article_data&&this.article_data.cover?this.article_data.cover:this.article_data&&this.article_data.parent&&this.article_data.parent.cover?this.article_data.parent.cover:"https://pic1.zhimg.com/v2-8d5ebb4f0fa67e76cbdd3c468f596e98_r.jpg"}}},l3={key:0,class:"BlogArticleTitleStory"},c3={class:"article_title_img_box"},o3={class:"content"},r3={class:"article_title_text"},_3={class:"intro_row"},n3={key:1,class:"info_row"},s3=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[t("path",{d:"M896 864a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64z m-60.16-733.621333l15.093333 15.093333c45.866667 45.834667 45.866667 120.16 0 166.005333L418.794667 743.338667a160.192 160.192 0 0 1-78.122667 42.986666l-152.245333 34.197334c-23.84 5.365333-44.661333-16.853333-37.749334-40.288l43.338667-146.88a160.042667 160.042667 0 0 1 40.373333-67.925334l435.328-435.050666c45.866667-45.834667 120.245333-45.834667 166.112 0zM636.32 254.304L279.68 610.709333a96.021333 96.021333 0 0 0-24.213333 40.746667l-27.946667 94.656 99.093333-22.261333a96.117333 96.117333 0 0 0 46.869334-25.781334L726.933333 344.842667l-90.602666-90.538667z m78.698667-78.656l-33.397334 33.386667 90.602667 90.538666 33.386667-33.376a53.333333 53.333333 0 0 0 0-75.456l-15.093334-15.093333a53.408 53.408 0 0 0-75.498666 0z"})],-1),d3=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[t("path",{d:"M725.333333 170.666667h74.709334C864.853333 170.666667 917.333333 223.189333 917.333333 288.096V799.893333C917.333333 864.757333 864.832 917.333333 800.042667 917.333333H223.957333C159.146667 917.333333 106.666667 864.810667 106.666667 799.904V288.106667C106.666667 223.242667 159.168 170.666667 223.957333 170.666667H298.666667v-32a32 32 0 0 1 64 0v32h298.666666v-32a32 32 0 0 1 64 0v32z m0 64v32a32 32 0 0 1-64 0v-32H362.666667v32a32 32 0 0 1-64 0v-32h-74.709334A53.354667 53.354667 0 0 0 170.666667 288.096V799.893333A53.301333 53.301333 0 0 0 223.957333 853.333333h576.085334A53.354667 53.354667 0 0 0 853.333333 799.904V288.106667A53.301333 53.301333 0 0 0 800.042667 234.666667H725.333333z m-10.666666 224a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h405.333334zM586.666667 618.666667a32 32 0 0 1 0 64H309.333333a32 32 0 0 1 0-64h277.333334z"})],-1),h3=["title"],u3=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[t("path",{d:"M865.92 188.34944a30.72 30.72 0 0 1 30.69952 29.568l0.02048 1.152v184.32a30.72 30.72 0 0 1-29.568 30.69952l-1.152 0.02048h-184.32a30.72 30.72 0 0 1-1.152-61.41952l1.152-0.02048 153.6-0.00512V219.06944a30.72 30.72 0 0 1 29.568-30.69952l1.152-0.02048z"}),t("path",{d:"M235.97056 251.33056c142.52544-142.52032 372.71552-143.9488 516.992-4.2752l4.34688 4.2752 130.33472 130.33472a30.72 30.72 0 0 1-42.51136 44.34432l-0.93696-0.90112-130.33472-130.3296c-119.96672-119.97184-314.47552-119.97184-434.44224 0-119.97184 119.96672-119.97184 314.4704 0 434.44224 119.96672 119.97184 314.4704 119.97184 434.44224 0a30.72 30.72 0 1 1 43.44832 43.44832c-143.96416 143.95904-377.37472 143.95904-521.33888 0-143.95904-143.96416-143.95904-377.37472 0-521.33888z"})],-1),m3=["title"];function g3(a,h,e,u,r,n){const s=_("router-link");return e.article_data?(l(),o("div",l3,[t("div",c3,[t("div",{class:"article_title_img",style:z({"background-image":"url("+n.cover+")"})},null,4)]),t("div",o3,[t("div",r3,[e.article_data.parent?(l(),d(s,{key:0,class:"article_parent_title",to:"/blog/articles/"+e.article_data.parent.article_id},{default:b(()=>[m(i(e.article_data.parent.title),1)]),_:1},8,["to"])):c("",!0),t("h1",null,i(e.article_data.title),1),t("p",_3,i(e.article_data.intro),1),e.article_data.character?(l(),o("div",n3,[t("div",null,[s3,t("span",null,i(e.article_data.character.nickname),1)]),t("div",null,[d3,t("span",{title:e.article_data.insert_time},i(n.$relative_time_auto(e.article_data.insert_time))+" ",9,h3)]),t("div",null,[u3,t("span",{title:e.article_data.update_time},i(n.$relative_time_auto(e.article_data.update_time))+" ",9,m3)])])):c("",!0)])])])):c("",!0)}const v3=p(i3,[["render",g3]]);const p3={components:{BlogArticleTitleStory:v3,ArticleContentMd:S,CommunityPost:B,Placeholder:x},props:["article_data"]},y3={class:"BlogArticleDetailStory"},f3={class:"title_and_article"},w3={key:1,class:"content"},b3={class:"story_content"},x3={key:0,class:"section article_copyright_section"},k3={class:"content"},A3=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",class:"article_copyright_section_svg"},[t("path",{d:"M512 0C229.888 0 0 229.888 0 512s229.888 512 512 512 512-229.888 512-512S794.112 0 512 0z m0 944.64c-238.592 0-432.64-194.048-432.64-432.64S273.408 79.36 512 79.36s432.64 194.048 432.64 432.64-194.048 432.64-432.64 432.64z"}),t("path",{d:"M644.608 379.392c15.36 15.36 40.448 15.36 55.808 0s15.36-40.448 0-55.808c-103.936-103.936-273.408-103.936-377.344 0-103.936 103.936-103.936 273.408 0 377.344 52.224 52.224 120.32 77.824 188.928 77.824s136.704-26.112 188.928-77.824c15.36-15.36 15.36-40.448 0-55.808s-40.448-15.36-55.808 0c-73.216 73.216-192.512 73.216-265.728 0-73.216-73.216-73.216-192.512 0-265.728 73.216-73.216 192-73.216 265.216 0z"})],-1),z3={class:"section_title"},B3={href:"https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh",target:"_blank"};function $3(a,h,e,u,r,n){const s=_("BlogArticleTitleStory"),g=_("ArticleContentMd"),v=_("CommunityPost");return l(),o("div",y3,[t("div",f3,[e.article_data?(l(),d(s,{key:0,article_data:e.article_data},null,8,["article_data"])):c("",!0),e.article_data?(l(),o("div",w3,[t("div",b3,[e.article_data.content?(l(),d(g,{key:0,article_data:e.article_data},null,8,["article_data"])):c("",!0)])])):c("",!0)]),e.article_data.content?(l(),o("div",x3,[t("div",k3,[A3,t("h3",z3,i(a.$text("blog.copyright")),1),t("p",null,[m(i(a.$text("blog.copyright1_1")),1),t("a",B3,i(a.$text("blog.copyright1_2")),1),m(i(a.$text("blog.copyright1_3")),1)]),t("p",null,i(a.$text("blog.copyright2")),1),t("p",null,i(a.$text("nav.copyright_info")),1)])])):c("",!0),y(v,{post_id:"blog/articles/"+e.article_data.article_id},null,8,["post_id"])])}const C3=p(p3,[["render",$3]]),M3={components:{BlogArticleDetailDoc:a3,BlogArticleDetailStory:C3,Placeholder:x},data(){return{article_data:null,not_found:!1}},methods:{set_article_data(a){a.status=="success"?(this.article_data=a.data,document.title=this.article_data.title+" - Kloudy Shape"):(this.article_data=null,this.not_found=!0)}},async beforeRouteEnter(a,h,e){const u=await k("/blog/get_article_detail.php",{article_id:a.params.id.join("/")});e(r=>r.set_article_data(u))},async beforeRouteUpdate(a,h){const e=await k("/blog/get_article_detail.php",{article_id:a.params.id.join("/")});this.set_article_data(e)}};function S3(a,h,e,u,r,n){const s=_("BlogArticleDetailStory"),g=_("BlogArticleDetailDoc"),v=_("Placeholder");return l(),o(w,null,[r.article_data?(l(),o(w,{key:0},[r.article_data.category=="life"?(l(),d(s,{key:0,article_data:r.article_data},null,8,["article_data"])):(l(),d(g,{key:1,article_data:r.article_data},null,8,["article_data"]))],64)):c("",!0),y(v,{loading:!r.article_data&&!r.not_found,error:!r.article_data&&r.not_found,error_title:a.$text("blog.article_not_found"),error_text:a.$text("blog.article_not_found_info")},null,8,["loading","error","error_title","error_text"])],64)}const Q3=p(M3,[["render",S3]]);export{Q3 as default};

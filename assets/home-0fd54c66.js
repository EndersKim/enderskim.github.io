import{_ as b,x as w,o as l,d,e as t,t as o,f as k,Q as y,$ as L,D,r as S,g as x,F as $,i as I,k as B,a6 as C,b as P,a as V,j as F,O as f,X as M,Y as N,s as v,A,h as E,H,I as U}from"./index-520d7f93.js";const j={components:{FormButton:w},props:["link_content","index"],data(){return{img_error:!1}},computed:{is_enabled(){return!(this.link_content.disabled=="1"||!this.link_content.link_url)}},methods:{edit(){this.$emit("edit_event",this.link_content)},click(n){if(!this.is_enabled){n.preventDefault();return}this.link_content.link_url.startsWith("http")||(n.preventDefault(),this.$router.push(this.link_content.link_url))}}},q=["href"],z={class:"link_item_icon_box"},O={key:0,class:"link_icon_img_box"},Q=["src"],T={key:1,class:"link_icon_img_text_box"},W={class:"link_icon_img_text"},X={class:"link_item_text_box"},Y={class:"link_title"};function G(n,_,e,s,i,a){return l(),d("div",{class:k(["StartLinkItem",{img_error:i.img_error}])},[t("a",{class:k(["link_item_main",{disabled:!a.is_enabled,hover:a.is_enabled}]),href:e.link_content.link_url,target:"_blank",onClick:_[1]||(_[1]=(...r)=>a.click&&a.click(...r))},[t("div",z,[e.link_content.icon&&!i.img_error?(l(),d("div",O,[t("img",{class:"link_icon_img",src:e.link_content.icon,onError:_[0]||(_[0]=r=>i.img_error=!0)},null,40,Q)])):(l(),d("div",T,[t("p",W,o(e.link_content.title?e.link_content.title.slice(0,1):" "),1)]))]),t("div",X,[t("p",Y,o(e.link_content.title),1)])],10,q)],2)}const J=b(j,[["render",G]]);const K={components:{StartLinkItem:J,Placeholder:y},props:["class_id","page"],data(){return{links:null,error:!1}},mounted(){this.get_links()},methods:{get_links(){L("links/get_links.php",{class_id:this.class_id,page:this.page||1}).then(n=>{n.status=="success"?this.links=n.data:(this.links=null,this.error=!0,D({message:n.message||n,status:"error"}))})}}},R={class:"StartLinks"},Z={class:"link_item_container"};function tt(n,_,e,s,i,a){const r=S("Placeholder"),m=S("StartLinkItem");return l(),d("div",R,[x(r,{class:"link_class_placeholder",loading:!i.links&&!i.error},null,8,["loading"]),t("div",Z,[(l(!0),d($,null,I(i.links,(u,p)=>(l(),B(m,{key:u.link_no,link_content:u,index:p},null,8,["link_content","index"]))),128))])])}const et=b(K,[["render",tt]]),st={class:"start_bg"},nt=t("div",{class:"bg_shadow"},null,-1),it={class:"start_container"},ot={class:"content"},at={class:"start_main"},lt={class:"start_time"},_t={key:0,class:"fixed_width"},rt={class:"fixed_width"},ct=t("span",{class:"colon"},":",-1),dt={class:"fixed_width"},ut={class:"fixed_width"},ht=t("span",{class:"colon sec"},":",-1),mt={class:"fixed_width sec"},kt={class:"fixed_width sec"},pt={class:"start_date"},gt={class:"start_search"},ft=t("div",{style:{flex:"1"}},null,-1),xt=C({__name:"home",setup(n){const _=P(),e=V(),s=F({full:"0:00:00",hours:"0",minutes:"00",seconds:"00"}),i=f("");function a(){let c=new Date;s.hours=c.getHours().toString().padStart(2,"0"),s.minutes=c.getMinutes().toString().padStart(2,"0"),s.seconds=c.getSeconds().toString().padStart(2,"0"),s.full=`${s.hours}:${s.minutes}`,i.value=c.toLocaleDateString(_.computed_language,{year:"numeric",month:"long",day:"numeric",weekday:"long"})}let r;M(()=>{a(),r=setInterval(a,1e3),e.hide.footer=!0,e.header.dark_when_transparent=!0}),N(()=>{clearInterval(r),e.hide.footer=!1,e.header.dark_when_transparent=!1});const m=f(!1),u=f("");function p(c){c.preventDefault(),window.open("https://cn.bing.com/search?q="+u.value,"_blank")}return(c,h)=>(l(),d($,null,[t("div",st,[t("img",{class:k(["bg_item",{img_loaded:m.value}]),src:"https://api.kloudy.cn/bing",onLoad:h[0]||(h[0]=g=>m.value=!0)},null,34),nt]),t("div",it,[t("div",ot,[t("div",{class:k(["start_top",{header_opened:!v(e).hide.header}])},[t("div",{class:"down_botton",onClick:h[1]||(h[1]=g=>v(e).hide.header=!v(e).hide.header)},[x(A)])],2),t("div",at,[t("div",lt,[s.hours[0]!="0"?(l(),d("span",_t,o(s.hours[0]),1)):E("",!0),t("span",rt,o(s.hours[1]),1),ct,t("span",dt,o(s.minutes[0]),1),t("span",ut,o(s.minutes[1]),1),ht,t("span",mt,o(s.seconds[0]),1),t("span",kt,o(s.seconds[1]),1)]),t("div",pt,o(i.value),1),t("div",gt,[t("form",{onSubmit:p},[H(t("input",{class:"kinput",placeholder:"搜索","onUpdate:modelValue":h[2]||(h[2]=g=>u.value=g)},null,512),[[U,u.value]])],32)]),ft,x(et,{class_id:"start"})])])])],64))}});export{xt as default};

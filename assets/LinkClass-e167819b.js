import{_ as L,D as F,r as h,o as _,d as a,e,n as V,h as m,t as g,f as D,g as d,ac as P,P as W,Z as E,b as S,v as T,$ as A,J as u,H as b,I as y,l as k,w as r,F as z,i as M,k as x,O as f,Q as v}from"./index-7b0ed318.js";import{W as R}from"./Warning-2ffc4d14.js";const H={components:{FormButton:F},props:["link_content","editing","routerlink","index"],data(){return{img_error:!1}},computed:{is_enabled(){return!(this.link_content.disabled=="1"||!this.link_content.link_url)}},methods:{edit(){this.$emit("edit_event",this.link_content)},click(t){if(!this.is_enabled){t.preventDefault();return}this.routerlink&&!this.link_content.link_url.startsWith("http")&&(t.preventDefault(),this.$router.push(this.link_content.link_url))}}},J=["href"],O={class:"link_item_bg_box"},Q={class:"link_item_icon_box"},Z={key:0,class:"link_icon_img_box"},j=["src"],q={key:1,class:"link_icon_img_text_box"},G={class:"link_icon_img_text"},K={class:"link_item_text_box"},X={key:0,class:"link_title"},Y={key:1,class:"link_descr"},$={key:2,class:"link_url"},ee={key:0,class:"link_item_edit_row"};function ie(t,i,s,B,n,o){const c=h("FormButton");return _(),a("div",{class:D(["LinkItem appear_section",{img_error:n.img_error}]),style:V({"animation-delay":Math.min(s.index,24)*.02+"s"})},[e("a",{class:D(["link_item_main section",{disabled:!o.is_enabled,hover:o.is_enabled}]),href:s.link_content.link_url,target:"_blank",onClick:i[1]||(i[1]=(...p)=>o.click&&o.click(...p))},[e("div",O,[s.link_content.icon?(_(),a("div",{key:0,class:"link_item_bg",style:V({"background-image":"url("+s.link_content.icon.replaceAll(" ","%20")+")"})},null,4)):m("",!0)]),e("div",Q,[s.link_content.icon&&!n.img_error?(_(),a("div",Z,[e("img",{class:"link_icon_img",src:s.link_content.icon,onError:i[0]||(i[0]=p=>n.img_error=!0)},null,40,j)])):(_(),a("div",q,[e("p",G,g(s.link_content.title?s.link_content.title.slice(0,1):" "),1)]))]),e("div",K,[s.link_content.title?(_(),a("h3",X,g(s.link_content.title),1)):m("",!0),s.link_content.descr?(_(),a("p",Y,g(s.link_content.descr),1)):m("",!0),s.link_content.link_url?(_(),a("p",$,g(s.link_content.link_url),1)):m("",!0)])],10,J),s.editing?(_(),a("div",ee,[d(c,{no_text:"",icon:"edit",onClick:i[2]||(i[2]=p=>o.edit())})])):m("",!0)],6)}const te=L(H,[["render",ie]]);const ne={components:{LinkItem:te,FormNum:P,FormButton:F,PageDialog:W,Placeholder:E,Warning:R},props:["class_id","page","routerlink"],data(){return{links:null,error:!1,editing_link:null,open_edit_dialog:!1,open_delete_confirm_dialog:!1,edit_info:{link_no:null,title:"",icon:"",descr:"",link_url:"",class_id:"",weight:0}}},computed:{editing(){var t;return S().settings.active_admin&&((t=T().active_character)==null?void 0:t.ctype)=="admin"}},mounted(){this.get_links()},methods:{get_links(){A("links/get_links.php",{class_id:this.class_id,page:this.page||1}).then(t=>{t.status=="success"?this.links=t.data:(this.links=null,this.error=!0,u({message:t.message||t,status:"error"}))})},edit_event(t){this.open_edit_dialog=!0,this.edit_info.link_no=t.link_no,this.edit_info.icon=t.icon,this.edit_info.title=t.title,this.edit_info.descr=t.descr,this.edit_info.link_url=t.link_url,this.edit_info.class_id=t.class_id,this.edit_info.weight=t.weight*1,this.editing_link=t},async edit_action(){b("links/edit_link.php",{tokenid:await y(),link_no:this.edit_info.link_no,icon:this.edit_info.icon||"",title:this.edit_info.title||"",descr:this.edit_info.descr||"",link_url:this.edit_info.link_url||"",class_id:this.edit_info.class_id||"",weight:this.edit_info.weight}).then(t=>{t.status=="success"?(u({message:"编辑成功",status:"success"}),this.open_edit_dialog=!1,this.get_links()):u({message:t.message||t,status:"error"})})},async delete_action(){b("links/delete_link.php",{tokenid:await y(),link_no:this.edit_info.link_no}).then(t=>{t.status=="success"?(u({message:"删除成功",status:"success"}),this.get_links(),this.open_delete_confirm_dialog=!1,this.$nextTick(()=>{this.open_edit_dialog=!1})):u({message:t.message||t,status:"error"})})},async disable_action(t){b("links/disable_link.php",{tokenid:await y(),link_no:this.edit_info.link_no,disabled:t}).then(i=>{i.status=="success"?(u({message:"禁用/启用成功",status:"success"}),this.get_links(),this.open_delete_confirm_dialog=!1,this.$nextTick(()=>{this.open_edit_dialog=!1})):u({message:i.message||i,status:"error"})})},async new_link_action(){b("links/new_link.php",{tokenid:await y(),class_id:this.class_id}).then(t=>{t.status=="success"?(u({message:"添加成功",status:"success"}),this.get_links()):u({message:t.message||t,status:"error"})})}}},le={class:"LinkClass"},se={key:0,class:"link_class_top_row"},oe=e("b",null,"Class ID: ",-1),_e={class:"link_item_container"},de={key:0,class:"add_new_link"},ae={class:"edit_link_dialog"},ce=e("div",{style:{height:"20px"}},null,-1),re=e("div",{style:{height:"20px"}},null,-1),ue={class:"form_table"},ke=e("td",null,[e("div",{class:"form_table_lable"},[e("h4",null,"Link No")])],-1),me=e("td",null,[e("div",{class:"form_table_lable"},[e("h4",null,"Link URL")])],-1),ge=e("div",{style:{height:"20px"}},null,-1),he=e("td",null,[e("div",{class:"form_table_lable"},[e("h4",null,"Icon")])],-1),fe=e("td",null,[e("div",{class:"form_table_lable"},[e("h4",null,"Title")])],-1),ve=e("td",null,[e("div",{class:"form_table_lable"},[e("h4",null,"Descr")])],-1),pe=e("div",{style:{height:"20px"}},null,-1),be=e("td",null,[e("div",{class:"form_table_lable"},[e("h4",null,"Class ID")])],-1),ye=e("td",null,[e("div",{class:"form_table_lable"},[e("h4",null,"Weight")])],-1),xe=e("div",{style:{height:"20px"}},null,-1),we=e("div",{style:{height:"20px"}},null,-1),Ce=e("div",{style:{height:"20px"}},null,-1),Ve={class:"confirm_dialog"},De={class:"icon_container"},Le=e("div",{class:"title_container"},[e("h3",{class:"confirm_dialog_title"}," Are you sure to delete? ")],-1),Fe={class:"button_container"};function Be(t,i,s,B,n,o){const c=h("FormButton"),p=h("Placeholder"),w=h("LinkItem"),U=h("FormNum"),I=h("Warning"),C=h("PageDialog");return _(),a("div",le,[o.editing?(_(),a("div",se,[e("p",null,[oe,k(g(s.class_id),1)]),d(c,{onClick:i[0]||(i[0]=l=>o.get_links())},{default:r(()=>[k("Refresh")]),_:1})])):m("",!0),d(p,{class:"link_class_placeholder",loading:!n.links&&!n.error,empty:n.links&&n.links.length==0},null,8,["loading","empty"]),e("div",_e,[(_(!0),a(z,null,M(n.links,(l,N)=>(_(),x(w,{key:l.link_no,link_content:l,editing:o.editing,onEdit_event:o.edit_event,routerlink:s.routerlink,index:N},null,8,["link_content","editing","onEdit_event","routerlink","index"]))),128)),o.editing?(_(),a("div",de,[d(c,{class:"plain",onClick:i[1]||(i[1]=l=>o.new_link_action())},{default:r(()=>[k(" Add ")]),_:1})])):m("",!0)]),d(C,{modelValue:n.open_edit_dialog,"onUpdate:modelValue":i[16]||(i[16]=l=>n.open_edit_dialog=l),title:"Edit"},{default:r(()=>[e("div",ae,[ce,d(w,{link_content:n.editing_link},null,8,["link_content"]),re,e("table",ue,[e("tr",null,[ke,e("td",null,[f(e("input",{class:"kinput","onUpdate:modelValue":i[2]||(i[2]=l=>n.edit_info.link_no=l),disabled:""},null,512),[[v,n.edit_info.link_no]])])]),e("tr",null,[me,e("td",null,[f(e("input",{class:"kinput","onUpdate:modelValue":i[3]||(i[3]=l=>n.edit_info.link_url=l)},null,512),[[v,n.edit_info.link_url]])])]),ge,e("tr",null,[he,e("td",null,[f(e("input",{class:"kinput","onUpdate:modelValue":i[4]||(i[4]=l=>n.edit_info.icon=l)},null,512),[[v,n.edit_info.icon]])])]),e("tr",null,[fe,e("td",null,[f(e("input",{class:"kinput","onUpdate:modelValue":i[5]||(i[5]=l=>n.edit_info.title=l)},null,512),[[v,n.edit_info.title]])])]),e("tr",null,[ve,e("td",null,[f(e("textarea",{class:"kinput ktextarea","onUpdate:modelValue":i[6]||(i[6]=l=>n.edit_info.descr=l)},null,512),[[v,n.edit_info.descr]])])]),pe,e("tr",null,[be,e("td",null,[f(e("input",{class:"kinput","onUpdate:modelValue":i[7]||(i[7]=l=>n.edit_info.class_id=l)},null,512),[[v,n.edit_info.class_id]])])]),e("tr",null,[ye,e("td",null,[d(U,{modelValue:n.edit_info.weight,"onUpdate:modelValue":i[8]||(i[8]=l=>n.edit_info.weight=l),title:"Weight",min:-100,max:100},null,8,["modelValue"])])])]),xe,d(c,{icon:"submit",onClick:i[9]||(i[9]=l=>o.edit_action())},{default:r(()=>[k(g(t.$text("dialog.submit")),1)]),_:1}),we,n.editing_link&&n.editing_link.disabled=="0"?(_(),x(c,{key:0,icon:"cancel",class:"danger",onClick:i[10]||(i[10]=l=>o.disable_action(1))},{default:r(()=>[k("Disable")]),_:1})):m("",!0),n.editing_link&&n.editing_link.disabled=="1"?(_(),x(c,{key:1,icon:"confirm",onClick:i[11]||(i[11]=l=>o.disable_action(0))},{default:r(()=>[k("Enable")]),_:1})):m("",!0),Ce,d(c,{icon:"cancel",class:"danger",onClick:i[12]||(i[12]=l=>n.open_delete_confirm_dialog=!0)},{default:r(()=>[k("Delete")]),_:1}),d(C,{modelValue:n.open_delete_confirm_dialog,"onUpdate:modelValue":i[15]||(i[15]=l=>n.open_delete_confirm_dialog=l)},{default:r(()=>[e("div",Ve,[e("div",De,[d(I)]),Le,e("div",Fe,[d(c,{class:"plain",icon:"cancel",onClick:i[13]||(i[13]=l=>n.open_delete_confirm_dialog=!1)},{default:r(()=>[k(g(t.$text("dialog.cancel")),1)]),_:1}),d(c,{class:"danger",icon:"confirm",onClick:i[14]||(i[14]=l=>o.delete_action())},{default:r(()=>[k(g(t.$text("dialog.confirm")),1)]),_:1})])])]),_:1},8,["modelValue"])])]),_:1},8,["modelValue"])])}const Ne=L(ne,[["render",Be]]);export{Ne as L};

import{_ as $,x as M,q as a,r as v,o as r,d as l,g as t,e as o,t as e,h as p,w as s,l as n,v as B,p as c,F as y,U as C,E,M as w,C as N,y as x,k as A,z as V,B as z,K as U}from"./index-1cda587c.js";import{B as F}from"./Box-d45ef130.js";const K={components:{Avatar:M},props:["character"],computed:{display_name(){return this.character.cname?this.character.cname:this.character.nickname?this.character.nickname:a("account.no_nickname")}}},L={key:0,class:"AccountMenuCharacterCard"},R={class:"text"},S={class:"name"},q={key:0,class:"cid"},D={key:1,class:"cid"},T={key:1,class:"AccountMenuCharacterCard"},b={class:"text"},j={class:"name"},G={class:"cid"};function H(m,i,_,d,u,g){const f=v("Avatar"),k=v("RouterLink");return _.character?(r(),l("div",L,[t(f,{avatar_url:_.character.avatar_url,nickname:_.character.nickname,size:80},null,8,["avatar_url","nickname"]),o("div",R,[o("h3",S,e(_.character.nickname),1),_.character.ctype!="temp"?(r(),l("p",q," @"+e(_.character.cid),1)):p("",!0),_.character.ctype=="temp"?(r(),l("p",D,e(m.$text("account.guest")),1)):p("",!0)])])):(r(),l("div",T,[t(f,{size:80}),o("div",b,[o("h3",j,e(m.$text("account.not_login")),1),o("p",G,[t(k,{to:"/account/login"},{default:s(()=>[n(e(m.$text("account.login")),1)]),_:1}),n(" / "),t(k,{to:"/account/register"},{default:s(()=>[n(e(m.$text("account.register")),1)]),_:1})])])]))}const h=$(K,[["render",H]]);const I={class:"AccountMenu"},J={class:"account_menu_heading"},O={class:"account_menu_heading"},P=o("hr",{class:"account_menu_hr"},null,-1),Q={class:"account_menu_heading"},W=o("h3",{class:"account_menu_heading"},"游客",-1),Z={__name:"AccountMenu",setup(m){const i=B();return(_,d)=>{const u=v("router-link");return r(),l("div",I,[c(i).active_character?(r(),l(y,{key:0},[t(h,{character:c(i).active_character},null,8,["character"]),o("h3",J,e(c(a)("nav.account")),1),t(u,{class:"account_menu_item",to:"/account/overview"},{default:s(()=>[t(C),n(" "+e(c(a)("nav.account.overview")),1)]),_:1}),t(u,{class:"account_menu_item",to:"/account/edit"},{default:s(()=>[t(E),n(" "+e(c(a)("nav.account.edit")),1)]),_:1}),t(u,{class:"account_menu_item",to:"/account/property"},{default:s(()=>[t(F),n(" "+e(c(a)("nav.account.property")),1)]),_:1}),o("h3",O,e(c(a)("nav.account.messages")),1),t(u,{class:"account_menu_item",to:"/account/messages"},{default:s(()=>[t(w),n(" "+e(c(a)("nav.account.messages")),1)]),_:1}),t(u,{class:"account_menu_item",to:"/account/comments"},{default:s(()=>[t(N),n(" "+e(c(a)("nav.account.comments")),1)]),_:1}),P,o("a",{class:"account_menu_item",onClick:d[0]||(d[0]=g=>c(i).logout_confirm_open=!0)},[t(x),n(" "+e(c(a)("account.logout")),1)])],64)):(r(),l(y,{key:1},[c(i).guest_character?(r(),A(h,{key:0,character:c(i).guest_character},null,8,["character"])):(r(),A(h,{key:1})),o("h3",Q,e(c(a)("nav.account")),1),t(u,{class:"account_menu_item",to:"/account/login"},{default:s(()=>[t(V),n(" "+e(c(a)("nav.account.login")),1)]),_:1}),t(u,{class:"account_menu_item",to:"/account/register"},{default:s(()=>[t(z),n(" "+e(c(a)("nav.account.register")),1)]),_:1}),t(u,{class:"account_menu_item",to:"/account/forgot"},{default:s(()=>[t(U),n(" "+e(c(a)("nav.account.forgot")),1)]),_:1}),W,t(u,{class:"account_menu_item",to:"/account/guest"},{default:s(()=>[t(C),n(" "+e(c(a)("nav.account.guest")),1)]),_:1}),o("a",{class:"account_menu_item",onClick:d[1]||(d[1]=g=>c(i).open_delete_guest_info=!0)},[t(x),n(" 删除游客信息 ")])],64))])}}};export{Z as _};

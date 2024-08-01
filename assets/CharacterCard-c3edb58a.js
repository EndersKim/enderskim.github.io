import{_ as l,x as u,q as i,r as _,o as c,d as s,e as a,g as o,t,h as r,l as v}from"./index-1cda587c.js";import{U as k}from"./UserBusiness-bc3e61f6.js";const y={components:{Avatar:u,UserBusiness:k},props:["character"],computed:{display_name(){return this.character.cname?this.character.cname:this.character.nickname?this.character.nickname:i("account.no_nickname")},display_descr(){return this.character.descr?this.character.descr:i("account.no_intro")}},methods:{display_website(n){return n.replace(/^https*:\/\//,"").replace(/\/$/,"")}}},z={key:0,class:"CharacterCard"},f={class:"character_card_main"},g={class:"text"},p={class:"name"},x={class:"descr"},w={class:"character_tags"},C={key:0,class:"uid_tag"},H={key:1,class:"temp_tag"},V={key:2,class:"admin_tag"},b={key:0,class:"character_info"},A={class:"character_info_box"},B=a("span",{class:"title"},[a("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[a("path",{d:"M290.0992 409.6H155.136a371.4048 371.4048 0 0 0-14.2848 102.4c0 35.5328 4.9664 69.888 14.336 102.4h134.9632c-5.632-32.768-8.4992-66.9184-8.4992-102.4 0-35.4816 2.8672-69.632 8.4992-102.4z m52.0704 0a542.1056 542.1056 0 0 0-9.3696 102.4c0 35.7376 3.072 69.888 9.3696 102.4H486.4V409.6H342.1696z m75.008 461.3632A491.8784 491.8784 0 0 1 301.568 665.6H173.9776a372.0704 372.0704 0 0 0 243.2 205.3632z m69.2224-3.584V665.6H354.9696c24.064 77.1072 67.84 144.2304 131.4304 201.8304zM417.1776 153.088A372.0704 372.0704 0 0 0 173.9776 358.4H301.568a491.8784 491.8784 0 0 1 115.5584-205.3632z m69.2224 3.584C422.8096 214.1184 379.0848 281.2416 354.9696 358.4H486.4V156.5696zM733.9008 409.6c5.632 32.768 8.4992 66.9184 8.4992 102.4 0 35.4816-2.8672 69.632-8.4992 102.4h135.0144c9.3184-32.512 14.2848-66.8672 14.2848-102.4s-4.9664-69.888-14.336-102.4h-134.9632z m-52.0704 0H537.6v204.8h144.2304c6.2464-32.512 9.3696-66.6624 9.3696-102.4s-3.072-69.888-9.3696-102.4z m-75.008 461.3632A372.0704 372.0704 0 0 0 850.0224 665.6H722.432a491.8784 491.8784 0 0 1-115.5584 205.3632z m-69.2224-3.584c63.5904-57.5488 107.3152-124.672 131.4304-201.7792H537.6v201.8304zM606.8224 153.088A491.8784 491.8784 0 0 1 722.432 358.4h127.6416a372.0704 372.0704 0 0 0-243.2-205.3632z m-69.2224 3.584V358.4h131.4304c-24.064-77.1072-67.84-144.2304-131.4304-201.8304zM512 947.2a435.2 435.2 0 1 1 0-870.4 435.2 435.2 0 0 1 0 870.4z"})])],-1),M=["href"];function N(n,U,e,q,D,h){const d=_("Avatar"),m=_("UserBusiness");return e.character?(c(),s("div",z,[a("div",f,[o(d,{avatar_url:e.character.avatar_url,nickname:e.character.nickname,size:80},null,8,["avatar_url","nickname"]),a("div",g,[a("p",p,t(e.character.nickname),1),a("p",x,t(e.character.descr),1),a("div",w,[e.character.ctype!="temp"?(c(),s("div",C," @"+t(e.character.cid),1)):r("",!0),e.character.ctype=="temp"?(c(),s("div",H,t(n.$text("account.guest")),1)):r("",!0),e.character.ctype=="admin"?(c(),s("div",V,[o(m),v(" "+t(n.$text("account.admin")),1)])):r("",!0)])])]),e.character.website?(c(),s("div",b,[a("div",A,[B,a("p",null,[a("a",{class:"link",href:e.character.website,target:"_blank"},t(h.display_website(e.character.website)),9,M)])])])):r("",!0)])):r("",!0)}const T=l(y,[["render",N]]);export{T as C};

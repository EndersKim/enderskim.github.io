import{W as p,O as n,J as _,o as i,d as m,e,g as f,av as d,k as v,H as h,I as y}from"./index-520d7f93.js";const V={class:"content"},k={class:"search_options"},b=e("h2",null,"自定义播放",-1),g=e("p",null," 提供歌单或者歌曲ID，即可播放自定义歌曲。通常可以在网页地址栏、分享链接中找到歌单或歌曲的ID。 ",-1),w={class:"option_row"},x=e("p",{class:"label"},"平台",-1),B={class:"option_row"},D=e("p",{class:"label"},"类型",-1),I={class:"option_row"},U=e("p",{class:"label"},"ID",-1),N=["disabled"],E={__name:"platforms",setup(Q){const u=p(),t=n(""),l=n("netease"),s=n("playlist"),r=_(()=>!(!t.value||s.value!="playlist"&&l.value!="netease"));function c(){s.value=="playlist"&&l.value=="netease"?u.push("/archive/music/playlist/"+t.value):s.value=="radio"&&l.value=="netease"?u.push("/archive/music/radio/"+t.value):s.value=="ncm_song"&&l.value=="netease"?u.push("/archive/music/ncm_song/"+t.value):s.value=="playlist"&&l.value!="netease"&&u.push("/archive/music/all_server/"+l.value+"/"+t.value)}return(R,a)=>(i(),m("div",V,[e("div",k,[b,g,e("div",w,[x,f(d,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=o=>l.value=o),options:{netease:"网易云音乐",tencent:"QQ 音乐",kugou:"酷狗音乐",kuwo:"酷我音乐"}},null,8,["modelValue"])]),e("div",B,[D,l.value=="netease"?(i(),v(d,{key:0,modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=o=>s.value=o),options:{ncm_song:"歌曲",playlist:"歌单",radio:"电台"}},null,8,["modelValue"])):(i(),v(d,{key:1,modelValue:s.value,"onUpdate:modelValue":a[2]||(a[2]=o=>s.value=o),options:{playlist:"歌单"}},null,8,["modelValue"]))]),e("div",I,[U,h(e("input",{class:"kinput","onUpdate:modelValue":a[3]||(a[3]=o=>t.value=o)},null,512),[[y,t.value]])]),e("button",{class:"kbutton",onClick:c,disabled:!r.value}," 查找 ",8,N)])]))}};export{E as default};

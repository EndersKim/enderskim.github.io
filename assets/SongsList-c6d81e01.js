import{at as $,a1 as m,r as S,o as a,d as o,e as s,g as v,aE as C,k as i,av as L,t as n,w as h,l as x,h as r,f as d,p as l,au as N,ad as I,q as u,F as q,i as B}from"./index-1cda587c.js";import{P}from"./Pause-49059a31.js";const V={class:"cover_box"},M=["src"],w={key:1,class:"no_cover"},z={class:"index_box"},E={class:"text_box"},F={key:2,class:"song_title"},R={class:"song_subtitle"},j={key:3,class:"song_artist_undertitle"},A={key:0,class:"text_box artist_box"},D={class:"info_box"},O={class:"button_box"},T={__name:"SongItem",props:{song_data:Object,index:Number},setup(t){const{song_data:_,index:b}=t,e=$(),c=m(()=>e.current_song?e.current_song.song_key===(_==null?void 0:_.song_key):!1),y=m(()=>e.current_song_state==="playing");function k(){e.push_and_play_song(_)}function f(){e.push_song(_)}return(ts,as)=>{const g=S("RouterLink");return a(),o("div",{class:d(["SongItem",{is_current:c.value}])},[s("div",V,[t.song_data.cover_thumb_url?(a(),o("img",{key:0,src:t.song_data.cover_thumb_url,loading:"lazy"},null,8,M)):(a(),o("div",w,[v(C)])),s("div",{class:"cover_play",onClick:k},[c.value&&y.value?(a(),i(P,{key:0})):(a(),i(L,{key:1}))])]),s("h5",z,n(t.index),1),s("div",E,[t.song_data.song_source=="kloudy"?(a(),i(g,{key:0,to:"/archive/music/songs/"+t.song_data.song_id,class:"song_title link"},{default:h(()=>[x(n(t.song_data.title),1)]),_:1},8,["to"])):t.song_data.song_source=="ncm_song"?(a(),i(g,{key:1,class:"song_title link",to:"/archive/music/ncm_song/"+t.song_data.ncm_id},{default:h(()=>[x(n(t.song_data.title),1)]),_:1},8,["to"])):(a(),o("p",F,n(t.song_data.title),1)),s("p",R,n(t.song_data._title_cn),1),t.song_data._artists_name?(a(),o("p",j,n(t.song_data._artists_name),1)):r("",!0)]),t.song_data._artists_name||t.song_data._album_name?(a(),o("div",A,[s("div",{class:d(["song_artist",{disabled:!t.song_data._artists_name}])},[s("p",null,n(t.song_data._artists_name),1)],2),s("div",{class:d(["song_album",{disabled:!t.song_data._album_name}])},[s("p",null,n(t.song_data._album_name),1)],2)])):r("",!0),s("div",D,[s("p",{class:d(["song_duration",{disabled:t.song_data.song_duration<=0}])},n(l(N)(t.song_data.song_duration)),3)]),s("div",O,[s("button",{onClick:f},[v(I)])])],2)}}};const G={key:0,class:"SongsList"},H={class:"SongItem head"},J=s("div",{class:"cover_box"},null,-1),K=s("h5",{class:"index_box"},null,-1),Q=s("div",{class:"text_box"},[s("span",{class:"song_title"})],-1),U={class:"text_box artist_box"},W={class:"song_artist"},X={class:"song_album"},Y={class:"info_box"},Z={class:"song_duration"},p=s("div",{class:"button_box"},null,-1),ss={class:"song_items"},os={__name:"SongsList",props:{songs_data:{type:[Array,null],required:!0},start_index:{type:Number,default:1}},setup(t){return(_,b)=>t.songs_data?(a(),o("div",G,[s("div",H,[J,K,Q,s("div",U,[s("div",W,[s("p",null,n(l(u)("archive.music.artist")),1)]),s("div",X,[s("p",null,n(l(u)("archive.music.album")),1)])]),s("div",Y,[s("p",Z,n(l(u)("archive.music.duration")),1)]),p]),s("div",ss,[(a(!0),o(q,null,B(t.songs_data,(e,c)=>(a(),i(T,{key:e.song_key,song_data:e,index:c+t.start_index},null,8,["song_data","index"]))),128))])])):r("",!0)}};export{os as _};

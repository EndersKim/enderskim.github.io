import{_ as N,ae as R,al as L,aB as G,aC as O,at as k,r as M,o as n,d as o,g as _,w as i,e as t,t as g,G as y,a1 as V,au as x,p as s,n as f,h as l,aD as T,aE as Z,aF as F,l as z,f as q,T as P,k as U}from"./index-1cda587c.js";import{F as D}from"./FullScreen-6fbbb600.js";const I={components:{Popper:R,FormSlide:L,SwitchSongButton:G,VolumeButton:O},computed:{Music:()=>k(),is_playing(){return k().current_song_state=="playing"}},methods:{play_pause(){this.Music.play_pause()},seek_to_begin(){this.Music.seek_to_begin()},play_prev_song(){this.Music.play_prev_song()},play_next_song(){this.Music.play_next_song()},stop_play_song(){this.Music.stop_play_song()},open_settings(){this.Music.open.settings=!0},open_lrc(){this.Music.open.lrc=!0},open_meta(){this.Music.open.meta=!0},click_queue_action(){this.Music.open.full_player=!0,this.Music.full_player_show.lrc=!1,this.Music.full_player_show.queue=!0},click_lrc_action(){this.Music.open.full_player=!0,this.Music.full_player_show.lrc=!0,this.Music.full_player_show.queue=!1}}},J={class:"SongButtonsOpen"},Q=t("svg",{viewBox:"-9 -9 36 36",width:"36",height:"36"},[t("path",{d:"m9.67 13.982-2.43 2.474c-.472.471-.79.675-1.145.675-.479 0-.623-.314-.623-1.012v-2.137H5.26c-1.406 0-1.915-.146-2.429-.42a2.877 2.877 0 0 1-1.192-1.192c-.274-.514-.421-1.024-.421-2.429V6.464c0-1.405.147-1.915.421-2.428a2.872 2.872 0 0 1 1.192-1.192c.514-.275 1.023-.421 2.429-.421h7.68c1.406 0 1.915.146 2.429.421a2.86 2.86 0 0 1 1.192 1.192c.274.513.421 1.023.421 2.428v3.477c0 1.405-.147 1.915-.421 2.429a2.866 2.866 0 0 1-1.192 1.192c-.514.274-1.023.42-2.429.42H9.67Zm-.974-.957c.257-.261.608-.408.974-.408h3.27c1.076 0 1.426-.068 1.785-.26.276-.147.484-.356.631-.632.192-.358.26-.709.26-1.784V6.464c0-1.075-.068-1.426-.26-1.784a1.49 1.49 0 0 0-.631-.631c-.359-.192-.709-.26-1.785-.26H5.26c-1.075 0-1.425.068-1.785.26a1.5 1.5 0 0 0-.631.631c-.192.358-.26.709-.26 1.784v3.477c0 1.075.068 1.426.26 1.784.148.276.356.485.631.632.36.192.71.26 1.785.26h.212c.754 0 1.365.611 1.365 1.365v.934l1.859-1.891ZM5.422 8.01c0-.821.67-1.383 1.554-1.383.976 0 1.599.726 1.599 1.634 0 1.73-1.46 2.084-2.242 2.084-.222 0-.381-.148-.381-.329 0-.173.084-.294.372-.364.502-.12 1.005.028 1.274-.491h-.056c-.185.208-.483.242-.771.242-.837 0-1.349-.614-1.349-1.393Zm4.204 0c0-.821.669-1.383 1.553-1.383.976 0 1.6.726 1.6 1.634 0 1.73-1.46 2.084-2.242 2.084-.223 0-.381-.148-.381-.329 0-.173.084-.294.372-.364.502-.12 1.004.028 1.274-.491h-.056c-.186.208-.483.242-.772.242-.837 0-1.348-.614-1.348-1.393Z"})],-1),X=[Q],Y=t("span",null,"打开歌词",-1),j=t("svg",{viewBox:"-9 -9 36 36",width:"36",height:"36"},[t("path",{d:"M2.634 5.537a.906.906 0 1 0 0-1.813.906.906 0 1 0 0 1.813zm3.192-.325h9.865a.576.576 0 0 0 .585-.578.578.578 0 0 0-.585-.585H5.826a.574.574 0 0 0-.585.585c0 .325.253.578.585.578zM2.634 9.906c.506 0 .91-.404.91-.91a.906.906 0 0 0-.91-.91.906.906 0 0 0-.91.91c0 .506.405.91.91.91zm3.192-.325h9.865a.582.582 0 1 0 0-1.162H5.826a.572.572 0 0 0-.585.577c0 .325.253.585.585.585zm-3.192 4.694a.91.91 0 1 0-.001-1.82.91.91 0 0 0 0 1.82zm3.192-.332h9.865a.576.576 0 0 0 .585-.577.578.578 0 0 0-.585-.585H5.826a.574.574 0 0 0-.585.585c0 .324.253.577.585.577z"})],-1),K=[j];function W(w,e,A,h,v,c){const a=M("Popper"),u=M("VolumeButton");return n(),o("div",J,[_(a,{placement:"top",class:"song_button_box"},{dropdown:i(()=>[Y]),default:i(()=>[t("button",{class:"song_button_small open_button",onClick:e[0]||(e[0]=(...p)=>c.click_lrc_action&&c.click_lrc_action(...p))},X)]),_:1}),_(a,{placement:"top",class:"song_button_box"},{dropdown:i(()=>[t("span",null,"打开播放队列 ("+g(c.Music.queue.length)+")",1)]),default:i(()=>[t("button",{class:"song_button_small open_button",onClick:e[1]||(e[1]=(...p)=>c.click_queue_action&&c.click_queue_action(...p))},K)]),_:1}),_(u)])}const ee=N(I,[["render",W]]);const te={class:"MusicPlayerSmall"},se={key:0,class:"bg_box"},ne={class:"left_box"},oe={class:"center_part"},_e={class:"center_box"},ce=["src"],ae={key:1,class:"no_cover"},ie={class:"img_action"},le={class:"text_box"},ue={class:"title"},re={key:0,class:"artists"},de={class:"time_box"},pe={class:"total_time"},me={key:0,class:"time_bar"},ge=t("div",{class:"button_shape"},null,-1),he=[ge],ve={class:"right_box"},ye={__name:"MusicPlayerSmall",setup(w){const e=k();function A(){e.open.full_player=!0}const h=y("");function v(){h.value=e.current_song.cover_url}const c=y(null),a=y(!1),u=y(0);function p(r){a.value=!0,b(r),document.addEventListener("mousemove",b),document.addEventListener("mouseup",$)}function b(r){if(window.getSelection?window.getSelection().removeAllRanges():document.selection.empty(),!c.value)return;let d=(r.clientX-c.value.getBoundingClientRect().left)/c.value.clientWidth;d<0&&(d=0),d>1&&(d=1),u.value=d}function $(r){a.value=!1,document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",$),e.seek_to_time(u.value*e.playing_duration)}const S=V(()=>a.value?u.value*100+"%":e.playing_duration>0?e.playing_current_time/e.playing_duration*100+"%":"0%"),H=V(()=>a.value?x(u.value*e.playing_duration):x(e.playing_current_time));return(r,d)=>(n(),o("div",te,[s(e).current_song?(n(),o("div",se,[t("div",{class:"bg_item",style:f({"background-image":`url(${h.value||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC"})`})},null,4)])):l("",!0),t("div",ne,[_(T)]),t("div",oe,[t("div",_e,[_(P,{name:"center_box_trans"},{default:i(()=>{var B,C,E;return[(n(),o("div",{class:"center_box_content",key:(B=s(e).current_song)==null?void 0:B.song_key},[t("div",{class:"img_box",onClick:A},[s(e).current_song?(n(),o("img",{key:0,src:(C=s(e).current_song)==null?void 0:C.cover_url,onLoad:v},null,40,ce)):(n(),o("div",ae,[_(Z)])),t("div",ie,[_(D)])]),t("div",le,[t("h4",ue,[_(F,null,{default:i(()=>{var m;return[z(g(((m=s(e).current_song)==null?void 0:m.title)||r.$text("player.not_playing")),1)]}),_:1})]),(E=s(e).current_song)!=null&&E._artists_name?(n(),o("p",re,[_(F,null,{default:i(()=>{var m;return[z(g((m=s(e).current_song)==null?void 0:m._artists_name),1)]}),_:1})])):l("",!0)]),t("div",de,[t("p",{class:q(["current_time",{seeking:a.value}])},g(H.value),3),t("p",pe,g(s(x)(s(e).playing_duration)),1)]),s(e).playing_duration>0?(n(),o("div",me,[t("div",{class:"played",style:f({width:S.value})},null,4)])):l("",!0)]))]}),_:1})]),s(e).current_song?(n(),o("div",{key:0,class:q(["center_time_box",{seeking:a.value}]),ref_key:"seek_area",ref:c},[t("div",{class:"center_time_button",style:f({left:S.value}),onMousedown:p},he,36)],2)):l("",!0)]),t("div",ve,[_(ee)])]))}};const fe={id:"music_page_main"},ke={key:0,class:"content music_cpoyright"},Ae=t("h3",null,"版权声明",-1),be=t("li",null,"音乐图鉴仅以介绍为目的收集整理歌曲标题、艺人、专辑等信息。",-1),xe=t("li",null," 本站提供的音乐资源均系来源于各大音乐网站，本网站只提供 web 页面服务，并不提供音乐资源存储，也不参与录制、上传。若本站收录的音乐无意侵犯了贵司版权，我们会立即删除。 ",-1),Me=t("li",null," 音乐图鉴中所显示的歌词，其著作权属于原著作权人，仅以介绍为目的引用。 ",-1),we=[Ae,be,xe,Me],$e={key:1,class:"music_small_container"},Se=t("div",{class:"music_small_back"},null,-1),Be={class:"music_small_box content"},Ve={__name:"index",setup(w){const e=k();return e.active_app_music=!0,(A,h)=>{const v=M("router-view");return n(),o("div",{id:"music_page",style:f({"--sticky-bottom":s(e).active_app_music?"70px":"0px"})},[t("div",fe,[_(v)]),s(e).open.single_page_player?l("",!0):(n(),o("div",ke,we)),s(e).active_app_music&&!s(e).open.single_page_player?(n(),o("div",$e,[Se,t("div",Be,[_(P,{name:"music_small_transition"},{default:i(()=>[s(e).open.full_player?l("",!0):(n(),U(ye,{key:0}))]),_:1})])])):l("",!0)],4)}}};export{Ve as default};

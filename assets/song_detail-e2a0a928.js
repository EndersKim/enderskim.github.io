import{am as D,V as p,o as l,d as c,e as t,g as d,ay as K,p as r,ai as T,t as i,h as n,W as k,F as w,i as m,az as f,n as $,f as W,X,j as G,$ as A,aA as q,aB as F,aC as I,N as O,J as N,ak as P,w as b,ar as j,k as Y,an as Z,ao as t6,A as s6}from"./index-e4eea91b.js";import{C as e6}from"./CommunityPost-41c104e8.js";import{P as o6}from"./Pause-e0ed6f63.js";import{d as y}from"./display_json_text-e58078e3.js";import{p as l6}from"./parse_song_data-b4c42901.js";import"./Comment-a9b181ea.js";import"./markdown_to_html_lite-855e1114.js";import"./index-97cf174a.js";import"./Pagination.vue_vue_type_style_index_0_lang-cd91223e.js";import"./More-2c944b97.js";import"./CharacterCard-49e2e0e5.js";import"./UserBusiness-5888d0d3.js";import"./Warning-5aff01ac.js";import"./Comment-455f2eb5.js";const c6={class:"LrcViewer section"},a6=t("h3",{class:"section_title"},"歌词",-1),i6={class:"lrc_setting_buttons"},_6={class:"form_buttons_row"},n6={class:"lrc_content_title"},r6={key:0,class:"lrc_content_title_trans"},d6=t("div",{style:{height:"20px"}},null,-1),h6={key:1,class:"row_lrc"},u6={key:2,class:"row_lrc"},v6={class:"lrc_row"},w6={class:"row_time"},m6={class:"row_main"},g6={class:"text"},p6={class:"translate"},x6={key:3,class:"word_lrc"},y6={class:"lrc_row"},k6={class:"row_time"},b6={class:"row_main"},M6={class:"text"},f6={class:"lrc_word"},$6={class:"word_time"},z6=["innerHTML"],H6={class:"translate"},V6={key:4,class:"colored_lrc"},L6={key:0,class:"character_list"},B6=t("div",{class:"chara_label"},null,-1),C6={class:"chara_name"},S6={class:"lrc_row"},T6={class:"row_time"},A6={class:"row_main"},q6={class:"colored_text"},F6={class:"colored_part_label"},N6=["innerHTML"],P6=["innerHTML"],j6={class:"colored_translate"},D6={class:"colored_part_label"},U6=["innerHTML"],Q6=["innerHTML"],R6={class:"show_all_button"},E6={__name:"LrcViewer",props:["lrc"],setup(_){const v=D(),u=p("row"),e=p(!1);return(x,h)=>(l(),c("div",c6,[a6,t("div",i6,[t("div",_6,[t("div",null,[d(K,{modelValue:u.value,"onUpdate:modelValue":h[0]||(h[0]=s=>u.value=s),options:{row:"逐行",word:"逐字",colored:"彩色"}},null,8,["modelValue"])]),t("div",null,[d(T,{modelValue:r(v).settings.show_translate,"onUpdate:modelValue":h[1]||(h[1]=s=>r(v).settings.show_translate=s),on_text:"显示翻译"},null,8,["modelValue"])]),t("div",null,[d(T,{modelValue:r(v).settings.show_ruby,"onUpdate:modelValue":h[2]||(h[2]=s=>r(v).settings.show_ruby=s),on_text:"显示注音"},null,8,["modelValue"])])])]),t("div",{class:W(["lrc_content",{show_all:e.value,show_translate:r(v).settings.show_translate,show_ruby:r(v).settings.show_ruby}])},[t("h3",n6,i(_.lrc.title),1),_.lrc.title_translate?(l(),c("h4",r6,i(_.lrc.title_translate),1)):n("",!0),d6,u.value=="plain_text"?(l(),c("div",h6,[t("p",null,i(_.lrc.plain_text),1),d(k,{empty:!_.lrc.plain_text,empty_title:"暂无纯文本歌词"},null,8,["empty"])])):n("",!0),u.value=="row"?(l(),c("div",u6,[(l(!0),c(w,null,m(_.lrc.row,s=>(l(),c("div",v6,[t("p",w6,i(r(f)(s.time)),1),t("div",m6,[t("p",g6,i(s.text),1),t("p",p6,i(s.translate),1)])]))),256)),d(k,{empty:!_.lrc.row,empty_title:"暂无逐行歌词"},null,8,["empty"])])):n("",!0),u.value=="word"?(l(),c("div",x6,[(l(!0),c(w,null,m(_.lrc.word,s=>(l(),c("div",y6,[t("p",k6,i(r(f)(s.time)),1),t("div",b6,[t("p",M6,[(l(!0),c(w,null,m(s.words,a=>(l(),c("span",f6,[t("span",$6,i(a.w_start)+" ("+i(a.w_duration)+") ",1),t("span",{class:"word_text",innerHTML:a.w_text},null,8,z6)]))),256))]),t("p",H6,i(s.translate),1)])]))),256)),d(k,{empty:!_.lrc.word,empty_title:"暂无逐字歌词"},null,8,["empty"])])):n("",!0),u.value=="colored"?(l(),c("div",V6,[_.lrc.colored?(l(),c("div",L6,[(l(!0),c(w,null,m(_.lrc.colored.characters,s=>(l(),c("div",{class:"character_item",style:$({"--chara-color":s.color,"--chara-text-color":s.text_color})},[B6,t("p",C6,i(s.name),1)],4))),256))])):n("",!0),_.lrc.colored?(l(!0),c(w,{key:1},m(_.lrc.colored.rows,s=>(l(),c("div",S6,[t("p",T6,i(r(f)(s.time)),1),t("div",A6,[t("div",q6,[(l(!0),c(w,null,m(s.text,a=>(l(),c("div",{class:"colored_part",style:$({"--chara-color":_.lrc.colored.characters[a.chara_id].color,"--chara-text-color":_.lrc.colored.characters[a.chara_id].text_color})},[t("p",F6,i(_.lrc.colored.characters[a.chara_id].name),1),t("p",{class:"colored_part_text border",innerHTML:a.text},null,8,N6),t("p",{class:"colored_part_text text",innerHTML:a.text},null,8,P6)],4))),256))]),t("div",j6,[(l(!0),c(w,null,m(s.translate,a=>(l(),c("div",{class:"colored_part",style:$({"--chara-color":_.lrc.colored.characters[a.chara_id].color,"--chara-text-color":_.lrc.colored.characters[a.chara_id].text_color})},[t("p",D6,i(_.lrc.colored.characters[a.chara_id].name),1),t("p",{class:"colored_part_text border",innerHTML:a.text},null,8,U6),t("p",{class:"colored_part_text text",innerHTML:a.text},null,8,Q6)],4))),256))])])]))),256)):n("",!0),d(k,{empty:!_.lrc.colored,empty_title:"暂无彩色歌词"},null,8,["empty"])])):n("",!0)],2),t("div",R6,[t("p",null,[t("a",{onClick:h[3]||(h[3]=s=>e.value=!e.value)},i(e.value?"收起歌词":"展开歌词"),1)])])]))}};const J6={key:0,class:"song_detail_heading"},K6={class:"bg_box"},W6=["src"],X6={class:"content"},G6={class:"img_box"},I6=["src"],O6={class:"text_box"},Y6={key:0},Z6={class:"song_detail_tags"},t3={key:0,class:"song_detail_tag"},s3=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1050",width:"200",height:"200"},[t("path",{d:"M256.003008 341.329323c0-141.182341 114.806118-255.996992 255.988459-255.996992 141.182341 0 255.996992 114.814651 255.996992 255.996992 0 141.173808-114.814651 255.996992-255.996992 255.996992s-255.996992-114.823184-255.996992-255.996992m723.874161 629.018742c-41.949374-157.139487-152.540074-280.018043-291.409909-337.404035 98.592975-59.903296 164.862063-168.019359 164.862062-291.623241C853.312256 153.128867 700.183389 0 511.982934 0s-341.329323 153.128867-341.329323 341.329323c0 123.595348 66.260555 231.711411 164.904729 291.614707-138.878368 57.428659-249.469069 180.264549-291.444042 337.404035a42.649099 42.649099 0 0 0 30.207645 52.172187 42.708832 42.708832 0 0 0 52.257519-30.207645C175.278623 810.008616 333.740761 682.658645 512 682.658645s336.75551 127.358504 385.446138 309.671028a42.580833 42.580833 0 0 0 52.223386 30.207646 42.649099 42.649099 0 0 0 30.207645-52.180721"})],-1),e3={key:1,class:"song_detail_tag"},o3=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5306",width:"200",height:"200"},[t("path",{d:"M512 981.333333C252.8 981.333333 42.666667 771.2 42.666667 512S252.8 42.666667 512 42.666667s469.333333 210.133333 469.333333 469.333333-210.133333 469.333333-469.333333 469.333333z m0-85.333333c212.074667 0 384-171.925333 384-384S724.074667 128 512 128 128 299.925333 128 512s171.925333 384 384 384z m223.850667-313.322667a42.666667 42.666667 0 1 1 81.386666 25.664 320.64 320.64 0 0 1-208.896 208.896 42.666667 42.666667 0 0 1-25.664-81.386666 235.328 235.328 0 0 0 153.173334-153.173334z m-447.701334-141.354666a42.666667 42.666667 0 1 1-81.386666-25.664 320.64 320.64 0 0 1 208.896-208.896 42.666667 42.666667 0 1 1 25.664 81.386666 235.328 235.328 0 0 0-153.173334 153.173334zM512 640a128 128 0 1 1 0-256 128 128 0 0 1 0 256z m0-85.333333a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z"})],-1),l3={key:2,class:"song_detail_tag"},c3=t("svg",{t:"1703740543711",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1198",width:"200",height:"200"},[t("path",{d:"M128 170.666667c-23.509333 0-42.666667 19.157333-42.666667 42.666666v682.666667c0 23.552 19.157333 42.666667 42.666667 42.666667h768c23.552 0 42.666667-19.114667 42.666667-42.666667V213.333333c0-23.509333-19.114667-42.666667-42.666667-42.666666H128z m768 853.333333H128c-70.570667 0-128-57.429333-128-128V213.333333c0-70.570667 57.429333-128 128-128h768c70.570667 0 128 57.429333 128 128v682.666667c0 70.570667-57.429333 128-128 128z"}),t("path",{d:"M301.3376 256h-5.341867a40.0896 40.0896 0 0 1-39.970133-39.978667V40.021333c0-22.016 17.962667-40.021333 39.970133-40.021333h5.341867c22.016 0 39.970133 18.005333 39.970133 40.021333v176A40.0896 40.0896 0 0 1 301.346133 256M728.004267 256h-5.341867a40.0896 40.0896 0 0 1-39.970133-39.978667V40.021333c0-22.016 17.962667-40.021333 39.970133-40.021333h5.341867c22.016 0 39.970133 18.005333 39.970133 40.021333v176A40.0896 40.0896 0 0 1 728.0128 256M298.666667 725.333333H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h85.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666M554.666667 725.333333H469.333333c-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667h85.333334c23.466667 0 42.666667 19.2 42.666666 42.666667s-19.2 42.666667-42.666666 42.666666M298.666667 512H213.333333c-23.466667 0-42.666667-19.2-42.666666-42.666667s19.2-42.666667 42.666666-42.666666h85.333334c23.466667 0 42.666667 19.2 42.666666 42.666666s-19.2 42.666667-42.666666 42.666667M810.666667 512H725.333333c-23.466667 0-42.666667-19.2-42.666666-42.666667s19.2-42.666667 42.666666-42.666666h85.333334c23.466667 0 42.666667 19.2 42.666666 42.666666s-19.2 42.666667-42.666666 42.666667M554.666667 512H469.333333c-23.466667 0-42.666667-19.2-42.666666-42.666667s19.2-42.666667 42.666666-42.666666h85.333334c23.466667 0 42.666667 19.2 42.666666 42.666666s-19.2 42.666667-42.666666 42.666667"})],-1),a3={key:3,class:"song_detail_tag"},i3=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2505",width:"200",height:"200"},[t("path",{d:"M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m42.666667 934.4V853.333333c0-25.6-17.066667-42.666667-42.666667-42.666666s-42.666667 17.066667-42.666667 42.666666v81.066667c-200.533333-21.333333-362.666667-179.2-379.733333-379.733333H170.666667c25.6 0 42.666667-17.066667 42.666666-42.666667s-17.066667-42.666667-42.666666-42.666667H89.6c17.066667-200.533333 179.2-362.666667 379.733333-379.733333V170.666667c0 25.6 17.066667 42.666667 42.666667 42.666666s42.666667-17.066667 42.666667-42.666666V89.6c200.533333 21.333333 362.666667 179.2 379.733333 379.733333H853.333333c-25.6 0-42.666667 17.066667-42.666666 42.666667s17.066667 42.666667 42.666666 42.666667h81.066667c-17.066667 200.533333-179.2 362.666667-379.733333 379.733333z"}),t("path",{d:"M704 580.266667l-153.6-89.6-46.933333-174.933334c-4.266667-21.333333-29.866667-38.4-51.2-29.866666-25.6 8.533333-38.4 34.133333-34.133334 55.466666l51.2 192c0 4.266667 4.266667 8.533333 8.533334 12.8l4.266666 4.266667 8.533334 8.533333 170.666666 98.133334c8.533333 4.266667 12.8 4.266667 21.333334 4.266666 12.8 0 29.866667-8.533333 38.4-21.333333 8.533333-21.333333 4.266667-46.933333-17.066667-59.733333z"})],-1),_3={key:4,class:"song_detail_tag"},n3=t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3985",width:"200",height:"200"},[t("path",{d:"M725.333333 85.333333H298.666667C226.133333 85.333333 170.666667 140.8 170.666667 213.333333v682.666667c0 17.066667 8.533333 29.866667 21.333333 38.4s29.866667 4.266667 42.666667-4.266667l273.066666-196.266666 273.066667 196.266666c8.533333 4.266667 17.066667 8.533333 25.6 8.533334s12.8 0 21.333333-4.266667c12.8-8.533333 21.333333-21.333333 21.333334-38.4V213.333333c4.266667-72.533333-51.2-128-123.733334-128z m42.666667 729.6l-230.4-166.4c-8.533333-4.266667-17.066667-8.533333-25.6-8.533333s-17.066667 4.266667-25.6 8.533333L256 814.933333V213.333333c0-25.6 17.066667-42.666667 42.666667-42.666666h426.666666c25.6 0 42.666667 17.066667 42.666667 42.666666v601.6z","p-id":"3986"})],-1),r3={class:"songlist_buttons"},d3={class:"action_button with_more"},h3={class:"icon"},u3={class:"text"},v3={class:"more_button"},w3={class:"song_wiki"},m3=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2672",width:"200",height:"200"},[t("path",{d:"M874.666667 469.333333H554.666667V149.333333c0-23.466667-19.2-42.666667-42.666667-42.666666s-42.666667 19.2-42.666667 42.666666v320H149.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667s19.2 42.666667 42.666666 42.666667h320v320c0 23.466667 19.2 42.666667 42.666667 42.666666s42.666667-19.2 42.666667-42.666666V554.666667h320c23.466667 0 42.666667-19.2 42.666666-42.666667s-19.2-42.666667-42.666666-42.666667z"})])],-1),g3=t("p",null,"添加到播放队列",-1),p3=[m3,g3],x3=t("hr",null,null,-1),y3=t("p",{class:"song_wiki_info"},"其他播放平台",-1),k3=["href"],b3=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3819",width:"200",height:"200"},[t("path",{d:"M616.64142222 49.16337778c25.14488889-7.24764445 52.08746667-6.88355555 77.48266667-1.04675556 29.16124445 6.92906667 56.75235555 20.32071111 80.49777778 38.57066667 8.66986667 6.58773333 16.49777778 14.77973333 20.48 25.088 6.16675555 15.24622222 4.51697778 33.47342222-4.58524445 47.2064-7.94168889 12.33351111-21.44711111 20.92373333-35.99928889 22.76693333-11.62808889 1.59288889-23.81368889-0.87608889-33.80337778-7.05422222-5.632-3.31093333-9.92142222-8.41955555-15.57617777-11.69635555-15.16657778-9.6256-32.63146667-17.2032-50.8928-16.77084445-12.85688889 0.14791111-24.1664 7.68-32.88177778 16.53191111-8.15786667 8.41955555-12.31075555 20.83271111-9.61422222 32.38115556 6.26915555 23.59751111 12.50417778 47.19502222 18.76195555 70.79253333 44.98773333 2.30968889 89.95271111 14.21084445 128.62577778 37.69457778 37.59217778 23.25617778 71.55484445 52.74737778 98.48604444 87.89333333 22.85795555 29.78702222 40.18631111 63.80657778 50.7904 99.82862222 11.48017778 38.82097778 15.20071111 79.75822222 12.20835556 120.08106667-2.49173333 33.26862222-9.03395555 66.34382222-20.32071111 97.78062222-29.184 76.54968889-83.23982222 143.6672-152.81493333 187.16444445-51.02933333 32.23324445-109.63626667 51.67786667-169.40373334 59.09617778-41.25582222 5.15413333-83.29671111 5.17688889-124.34773333-1.85457778-84.35484445-13.93777778-163.40764445-55.97866667-223.40266667-116.70186667-59.61955555-59.73333333-101.11431111-137.26151111-117.89653333-219.96657778-12.37902222-60.3136-11.82151111-123.2896 1.91146667-183.33013333 16.78222222-74.0352 53.87377778-143.29173333 106.01813333-198.43982222 42.53013333-45.28355555 95.06133333-81.11217778 152.72391111-104.2432 5.9392-2.26417778 11.78737778-4.94933333 18.11342222-5.95057778 13.50542222-2.36657778 27.93244445 0.83057778 38.99164445 8.97706666 14.97315555 10.56995555 23.21066667 29.74151111 20.71893333 47.8776889-2.05937778 18.51164445-15.20071111 35.20284445-32.71111111 41.54026666-58.25422222 21.77706667-109.90933333 60.68906667-147.09191111 110.51235556-33.23448889 44.21404445-54.92053333 97.02968889-62.19093334 151.88195555-7.33866667 54.29475555-0.80782222 110.36444445 18.64817778 161.56444445 28.10311111 74.8544 83.97937778 139.264 155.21564445 175.9232 42.89422222 22.2208 91.18151111 33.82613333 139.48017777 33.49617778 39.7312-0.512 79.58755555-6.89493333 116.92942223-20.70755556 32.83626667-12.19697778 63.61315555-30.208 89.78204444-53.5552 24.39395555-21.61777778 44.69191111-47.74115555 60.17706667-76.40177778 7.75964445-14.62044445 14.92764445-29.67324445 19.30808889-45.68177778 12.92515555-45.76142222 15.16657778-95.35715555 1.34257777-141.18684444-11.43466667-38.43413333-34.96391111-72.69262222-65.01262222-99.00942222-13.28924445-11.62808889-27.48871111-22.28906667-42.71217778-31.25475556-13.44853333-7.55484445-28.13724445-12.6976-43.12177777-16.21333333 10.4448 40.84622222 21.61777778 81.52177778 32.21048889 122.33386667 1.79768889 9.78488889 3.59537778 19.56977778 5.27928888 29.37742222 1.54737778 42.10915555-13.22097778 84.52551111-40.37973333 116.736-25.30417778 30.35591111-61.2352 51.712-100.10168889 59.05066666-41.89297778 8.35128889-86.9376 0.46648889-122.91413333-22.75555555-34.34951111-21.77706667-59.72195555-56.26311111-73.10222222-94.43555556-7.5776-21.35608889-11.35502222-43.94097778-12.10595556-66.56-2.29831111-49.20888889 10.56995555-99.48728889 38.71857778-140.1856 33.0752-48.57173333 85.21955555-81.96551111 141.12995555-98.25848889-4.11875555-15.74684445-8.32853333-31.47093333-12.4928-47.21777778-10.79751111-33.98542222-8.4992-72.14648889 7.61173334-104.09528888 8.69262222-17.82897778 21.61777778-33.35964445 36.56817778-46.27342222 16.64568889-14.2336 36.07893333-25.47484445 57.26435555-31.30026667M483.14595555 419.33937778c-14.99591111 15.74684445-25.50897778 35.65795555-30.03733333 56.91164444-4.07324445 19.29671111-4.096 39.41262222-0.43235555 58.76622223 4.47146667 21.37884445 15.50791111 42.2912 33.80337778 54.90915555 14.19946667 10.08071111 32.68835555 13.14133333 49.62986666 9.8304 31.34577778-5.50684445 56.92302222-34.34951111 57.79911111-66.26417778-1.19466667-7.90755555-2.50311111-15.81511111-4.73315555-23.50648889-11.70773333-44.28231111-23.51786667-88.53048889-35.15733334-132.83555555-26.48746667 8.16924445-51.70062222 21.93635555-70.87217778 42.1888z"})])],-1),M3=t("p",null,"在网易云查看",-1),f3=[b3,M3],$3=["href"],z3=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},[t("path",{d:"M629.9648 137.3184c-35.328 10.1888-70.4 21.9136-106.24 30.3104-40.448 9.472-82.0224 14.0288-123.5968 13.5168a226.7136 226.7136 0 0 0-37.12 2.048 21.504 21.504 0 0 0-19.0464 23.1424 21.3504 21.3504 0 0 0 3.6864 10.24c19.456 34.7136 39.68 68.608 59.648 102.0416 16.896 29.5424 33.28 59.392 51.2 88.9856 21.248 36.7104 43.264 72.9088 64.7168 109.6192 3.584 5.888 6.144 11.9808 10.24 20.1728-12.288-1.28-21.504-2.304-30.9248-2.816a181.8624 181.8624 0 0 0-79.36 12.7488 168.5504 168.5504 0 0 0-98.304 93.5936c-9.5232 23.3472-11.776 48.9984-6.4 73.6768a144.64 144.64 0 0 0 96.512 106.5472c12.4928 6.7072 26.112 11.008 40.192 12.8 25.088 2.6624 50.4832 1.536 75.264-3.328 17.5104-4.4032 34.6624-10.24 51.2-17.6128a160.256 160.256 0 0 0 68.8128-63.744 127.0784 127.0784 0 0 0 3.072-124.16c-11.52-22.2208-25.6-43.3664-37.632-64.768-16.384-28.5696-32.768-57.1392-49.408-85.7088-21.504-37.2224-43.264-74.1888-64.7168-111.104a336.0256 336.0256 0 0 1-13.056-25.5488 467.5584 467.5584 0 0 0 210.1248-229.4784l2.816 1.792c3.072 17.8176 6.656 35.4304 8.704 53.5552a20.8384 20.8384 0 0 0 9.216 17.3056 378.0608 378.0608 0 0 1 140.288 211.1488c9.728 41.0624 12.8 83.456 8.96 125.44a349.8496 349.8496 0 0 1-19.456 94.6176 460.8 460.8 0 0 1-33.792 71.8848 372.224 372.224 0 0 1-97.536 109.1584 399.7184 399.7184 0 0 1-81.92 46.6432 385.3824 385.3824 0 0 1-98.048 27.0336 395.3152 395.3152 0 0 1-102.4 0 360.96 360.96 0 0 1-122.5728-37.7344 392.6528 392.6528 0 0 1-174.08-178.4832 327.0144 327.0144 0 0 1-30.208-96.6656A485.2736 485.2736 0 0 1 102.4 484.864a386.7136 386.7136 0 0 1 95.232-250.368A362.5984 362.5984 0 0 1 321.536 140.8c22.5792-10.0352 45.8752-18.5344 69.632-25.4976a351.232 351.232 0 0 1 134.4-10.7008 476.672 476.672 0 0 1 67.2768 13.5168c9.728 2.4576 19.3536 5.5296 28.672 9.216 2.9184 1.4336 5.7344 3.072 8.448 4.8128v5.12z"})])],-1),H3=t("p",null,"搜索 QQ 音乐",-1),V3=[z3,H3],L3=["href"],B3=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M791.488 544.095c-1.28-129.695 105.76-191.871 110.528-194.975-60.16-88.032-153.856-100.064-187.232-101.472-79.744-8.064-155.584 46.944-196.064 46.944-40.352 0-102.816-45.76-168.96-44.544-86.912 1.28-167.072 50.528-211.808 128.384-90.304 156.703-23.136 388.831 64.896 515.935 43.008 62.208 94.304 132.064 161.632 129.568 64.832-2.592 89.376-41.952 167.744-41.952s100.416 41.952 169.056 40.672c69.76-1.312 113.984-63.392 156.704-125.792 49.376-72.16 69.728-142.048 70.912-145.632-1.536-0.704-136.064-52.224-137.408-207.136zM662.56 163.52C698.304 120.16 722.432 60 715.84 0c-51.488 2.112-113.888 34.304-150.816 77.536-33.152 38.368-62.144 99.616-54.368 158.432 57.472 4.48 116.128-29.216 151.904-72.448z"})])],-1),C3=t("p",null,"搜索 Apple Music",-1),S3=[B3,C3],T3={class:"action_button"},A3=t("div",{class:"icon",style:{transform:"scale(1.4)"}},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M174.336 768l-119.168 119.168a42.666667 42.666667 0 0 0 60.330667 60.330667L234.666667 828.330667l119.168 119.168a42.666667 42.666667 0 0 0 60.330666-60.330667L294.997333 768l119.168-119.168a42.666667 42.666667 0 0 0-60.330666-60.330667L234.666667 707.669333l-119.168-119.168a42.666667 42.666667 0 0 0-60.330667 60.330667L174.336 768zM768 469.333333c-117.824 0-213.333333-95.509333-213.333333-213.333333S650.176 42.666667 768 42.666667s213.333333 95.509333 213.333333 213.333333-95.509333 213.333333-213.333333 213.333333z m0-85.333333a128 128 0 1 0 0-256 128 128 0 0 0 0 256zM554.666667 661.546667c0-59.093333 47.68-106.88 106.88-106.88h212.906666c59.093333 0 106.88 47.68 106.88 106.88v212.906666c0 59.093333-47.68 106.88-106.88 106.88h-212.906666A106.730667 106.730667 0 0 1 554.666667 874.453333v-212.906666z m85.333333 0v212.906666c0 12.032 9.536 21.546667 21.546667 21.546667h212.906666c12.032 0 21.546667-9.536 21.546667-21.546667v-212.906666c0-12.032-9.536-21.546667-21.546667-21.546667h-212.906666c-12.032 0-21.546667 9.536-21.546667 21.546667zM183.829333 109.888c36.117333-61.162667 108.245333-61.248 144.426667 0l126.208 213.653333c35.733333 60.522667 3.52 124.437333-66.816 124.437334H124.437333c-70.613333 0-102.634667-63.765333-66.816-124.437334L183.829333 109.909333zM133.653333 362.666667H378.453333l-122.410666-207.232L133.653333 362.666667z"})])],-1),q3={class:"text"},F3={class:"song_wiki"},N3=["href"],P3=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M687.8 607.5H339.7c37.4 62.9 71.5 130.3 102.1 202.1h142.1c43.6-68.2 78.2-135.6 103.9-202.1z m41.7-76.7V381.5H302v149.4h427.5z m173.1 356H121.4v-77.1h233.7c-28.6-62.9-58.9-117.3-90.7-163.1l60.1-39H219.2V303h593.6v304.5H702.3l60.1 39.9c-28.4 62.9-57.9 117-88.6 162.2h228.8v77.2z m-17.1-673.3H143.7v-76.2h741.8v76.2z"})])],-1),j3=t("p",null,"搜索豆瓣",-1),D3=[P3,j3],U3=["href"],Q3=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M853.333333 981.333333H170.666667c-72.533333 0-128-55.466667-128-128V384c0-72.533333 55.466667-128 128-128h682.666666c72.533333 0 128 55.466667 128 128v469.333333c0 72.533333-55.466667 128-128 128zM170.666667 341.333333c-25.6 0-42.666667 17.066667-42.666667 42.666667v469.333333c0 25.6 17.066667 42.666667 42.666667 42.666667h682.666666c25.6 0 42.666667-17.066667 42.666667-42.666667V384c0-25.6-17.066667-42.666667-42.666667-42.666667H170.666667z"}),t("path",{d:"M512 341.333333c-12.8 0-21.333333-4.266667-29.866667-12.8l-213.333333-213.333333c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0L512 238.933333l183.466667-183.466666c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733333l-213.333333 213.333333c-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"})])],-1),R3=t("p",null,"搜索 Bangumi",-1),E3=[Q3,R3],J3=["href"],K3=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M184.081688 539.606474c111.325025-23.971136 95.969849-157.134634 92.813507-186.224162-5.459618-44.78593-58.264362-123.182633-129.836543-116.86995-89.998392 7.933508-103.135598 138.196583-103.135598 138.196584-12.241487 60.141106 29.089528 188.783357 140.158634 164.854874m206.655076-223.503116c61.420704 0 111.069106-70.804422 111.069105-158.243618 0-87.012664-49.477789-157.817086-110.898492-157.817086S279.539698 70.420543 279.539698 157.859739s49.904322 158.243618 111.325025 158.243619m264.748825 10.45005c82.320804 11.089849 134.869628-76.77588 145.532945-143.314975 10.663317-66.112563-42.653266-143.314975-100.661709-156.537488-58.434975-13.478432-130.518995 79.932221-137.77005 140.755779-7.677588 74.643216 10.663317 148.8599 92.557588 159.395257M981.185931 438.688845c0-31.819337-26.146452-127.661226-124.121006-127.661226-97.889246 0-111.325025 90.424925-111.325025 154.404824 0 60.994171 5.033085 145.874171 127.32 143.314976 121.775076-2.985729 108.467257-138.196583 108.467257-170.186534M857.491458 717.470595s-127.32-98.529045-201.579337-204.735679c-100.661709-156.836061-243.763418-92.984121-291.492423-13.478432-47.771658 80.316101-121.988342 130.604302-132.438392 144.04008-10.663317 13.222513-153.551759 90.424925-121.732423 231.180704 31.98995 140.755779 143.314975 138.196583 143.314976 138.196584s81.894272 8.104121 177.437588-13.222513 177.437588 5.118392 177.437588 5.118392 222.095558 74.643216 283.558916-68.671759c60.738251-143.741508-34.549146-217.958191-34.549146-217.958191"})])],-1),W3=t("p",null,"搜索百度百科",-1),X3=[K3,W3],G3=["href"],I3=t("div",{class:"wiki_img_box"},[t("p",null,"萌")],-1),O3=t("p",null,"搜索萌娘百科",-1),Y3=[I3,O3],Z3={key:1,class:"content"},v1={__name:"song_detail",setup(_){const v=X(),u=D(),e=p(null),x=p("loading"),h=p(null),s=p(null),a=G({title:null,plain_text:null,row:null,word:null,colored:null});U();async function U(){const o=await A("/archive/music/get_song_detail.php",{song_id:v.params.id});if(o.status!="success"){x.value="error";return}x.value="success",e.value=o.data.song,h.value=l6(e.value),document.title=e.value.title+" - Kloudy Shape",a.title=e.value.title,a.title_translate=y(e.value.title_t),s.value=o.data.lrc,Q()}function Q(){if(!s.value){R();return}s.value.lrc_row&&(a.row=q(s.value.lrc_row,s.value.lrc_row_cn,s.value.lrc_row_roma)),s.value.lrc_word&&(a.word=F(s.value.lrc_word,s.value.lrc_word_cn,s.value.lrc_word_roma)),s.value.lrc_row_colored&&(a.colored=I(s.value.lrc_row_colored_chara,s.value.lrc_row_colored_time,s.value.lrc_row_colored,s.value.lrc_row_colored_cn))}async function R(){var g,z,H,V,L,B,C,S;if(!e.value.ncm_id)return;const o=await A("/ncm/lyric/?id="+e.value.ncm_id);s.value=o,(g=o==null?void 0:o.lrc)!=null&&g.lyric&&(a.row=q((z=o==null?void 0:o.lrc)==null?void 0:z.lyric,(H=o==null?void 0:o.tlyric)==null?void 0:H.lyric,(V=o==null?void 0:o.romalrc)==null?void 0:V.lyric)),(L=o==null?void 0:o.yrc)!=null&&L.lyric&&(a.word=F((B=o==null?void 0:o.yrc)==null?void 0:B.lyric,(C=o==null?void 0:o.ytlrc)==null?void 0:C.lyric,(S=o==null?void 0:o.yromalrc)==null?void 0:S.lyric))}const M=O(()=>{var o,g;return u.current_song_state=="playing"&&((o=u.current_song)==null?void 0:o.song_key)==((g=h.value)==null?void 0:g.song_key)});function E(){u.push_song(h.value)}function J(){u.push_and_play_song(h.value)}return(o,g)=>(l(),c(w,null,[d(k,{loading:x.value=="loading",error:x.value=="error",error_text:"无法找到此歌曲"},null,8,["loading","error"]),e.value?(l(),c("div",J6,[t("div",K6,[t("img",{src:e.value.cover_url},null,8,W6)]),t("div",X6,[t("div",G6,[t("img",{src:e.value.cover_url},null,8,I6)]),t("div",O6,[t("h1",null,i(e.value.title),1),r(y)(e.value.title_t)?(l(),c("h2",Y6,i(r(y)(e.value.title_t)),1)):n("",!0),t("div",Z6,[e.value._artists_name?(l(),c("div",t3,[s3,t("span",null,i(e.value._artists_name),1)])):n("",!0),e.value._album_name?(l(),c("div",e3,[o3,t("span",null,i(e.value._album_name),1)])):n("",!0),e.value.publish_date?(l(),c("div",l3,[c3,t("span",null,i(e.value.publish_date),1)])):n("",!0),e.value.audio_duration?(l(),c("div",a3,[i3,t("span",null,i(r(Z)(e.value.audio_duration)),1)])):n("",!0),r(y)(e.value.subtitle_t)?(l(),c("div",_3,[n3,t("span",null,i(r(y)(e.value.subtitle_t)),1)])):n("",!0)]),t("div",r3,[t("button",d3,[t("div",{class:"main_button",onClick:J},[t("div",h3,[N(d(t6,null,null,512),[[P,!M.value]]),N(d(o6,null,null,512),[[P,M.value]])]),t("p",u3,i(M.value?"暂停":"播放"),1)]),d(j,{width:260,click_to_close:""},{dropdown:b(()=>[t("div",w3,[t("span",{class:"song_wiki_item",onClick:E},p3),x3,y3,t("a",{href:"https://music.163.com/#/song?id="+e.value.ncm_id,target:"_blank",class:"song_wiki_item"},f3,8,k3),t("a",{href:"https://y.qq.com/n/ryqq/search?w="+e.value.title,target:"_blank",class:"song_wiki_item"},V3,8,$3),t("a",{href:"https://music.apple.com/cn/search?term="+e.value.title,target:"_blank",class:"song_wiki_item"},S3,8,L3)])]),default:b(()=>[t("div",v3,[d(s6)])]),_:1})]),d(j,{width:260,click_to_close:""},{dropdown:b(()=>[t("div",F3,[t("a",{href:"https://www.douban.com/search?cat=1003&q="+e.value.title,target:"_blank",class:"song_wiki_item"},D3,8,N3),t("a",{href:"https://bgm.tv/subject_search/"+e.value.title+"?cat=3",target:"_blank",class:"song_wiki_item"},E3,8,U3),t("a",{href:"https://baike.baidu.com/search?word="+e.value.title,target:"_blank",class:"song_wiki_item"},X3,8,J3),t("a",{href:"https://zh.moegirl.org.cn/Special:Search/"+e.value.title,target:"_blank",class:"song_wiki_item"},Y3,8,G3)])]),default:b(()=>[t("div",T3,[A3,t("p",q3,i(o.$text("archive.wiki_rate")),1)])]),_:1})])])])])):n("",!0),e.value?(l(),c("div",Z3,[s.value?(l(),Y(E6,{key:0,lrc:a},null,8,["lrc"])):n("",!0),d(e6,{post_id:"archive/music/songs/"+e.value.song_id},null,8,["post_id"])])):n("",!0)],64))}};export{v1 as default};

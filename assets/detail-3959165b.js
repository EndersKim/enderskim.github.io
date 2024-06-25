import{J as v,b as x,o,d as l,e as t,t as c,s as w,h as _,g as d,l as b,w as r,ae as p,_ as f,Q as M,$ as u,r as z,k as y,F as H}from"./index-520d7f93.js";import{d as h}from"./display_json_text-e8cb4bb2.js";import{R as B}from"./Rate-ad8e1553.js";import{C as S}from"./CommunityPost-c0225306.js";/* empty css                                             */import"./Comment-da003ec4.js";import"./markdown_to_html_lite-855e1114.js";import"./index-97cf174a.js";import"./Pagination.vue_vue_type_style_index_0_lang-61e585e8.js";import"./More-8cb5c09b.js";import"./CharacterCard-2ce92522.js";import"./UserBusiness-5110ffc3.js";import"./Warning-e5251bc0.js";import"./Comment-53625186.js";const L={class:"game_detail"},V={class:"game_detail_top"},C={class:"game_detail_bg"},$=["src"],D={class:"content"},G={class:"game_detail_img"},N=["src"],P=t("div",{class:"img_back"},null,-1),R={class:"game_detail_text_wrapper"},j={class:"game_detail_text"},E={class:"title"},T={key:0},q={key:1},A={class:"tag_box"},F={class:"tag"},J={key:0},K={key:1},O={key:2},Q={class:"tag_title"},U={class:"game_actions"},X=t("div",{class:"action_button"},[t("div",{class:"icon"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M682.667 349.867h-140.8V238.933h140.8c17.066 0 34.133-12.8 34.133-34.133V85.333c0-17.066-12.8-34.133-34.133-34.133s-34.134 17.067-34.134 34.133v89.6H512c-17.067 0-34.133 12.8-34.133 34.134v140.8H341.333C183.467 349.867 51.2 477.867 51.2 640c0 157.867 128 290.133 290.133 290.133h341.334c157.866 0 290.133-128 290.133-290.133 0-157.867-132.267-290.133-290.133-290.133z m-256 320h-51.2v55.466c0 17.067-12.8 34.134-34.134 34.134S307.2 742.4 307.2 725.333v-51.2H256c-17.067 0-34.133-12.8-34.133-34.133 0-17.067 12.8-34.133 34.133-34.133h51.2v-51.2c0-17.067 12.8-34.134 34.133-34.134s34.134 12.8 34.134 34.134v51.2h51.2c17.066 0 34.133 12.8 34.133 34.133 0 17.067-17.067 29.867-34.133 29.867z m256 85.333c-64 0-119.467-51.2-119.467-119.467s51.2-119.466 119.467-119.466 119.466 51.2 119.466 119.466S746.667 755.2 682.667 755.2z"})])]),t("p",{class:"text"},"游玩")],-1),I=t("div",{class:"game_wiki"},[t("a",{href:"https://store.steampowered.com/",target:"_blank",class:"game_wiki_item"},[t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M1008 512c0 274-222.4 496-496.8 496-227.6 0-419.2-152.6-478-360.8l190.4 78.6c12.8 64.2 69.8 112.8 137.8 112.8 78.4 0 143.8-64.8 140.4-147l169-120.4c104.2 2.6 191.6-81.8 191.6-187 0-103.2-84-187-187.4-187s-187.4 84-187.4 187v2.4L369.2 558c-31-1.8-61.4 6.8-87 24.2L16 472.2C36.4 216.8 250.2 16 511.2 16 785.6 16 1008 238 1008 512zM327.4 768.6l-61-25.2a105.58 105.58 0 0 0 54.4 51.6c53.8 22.4 115.6-3.2 138-56.8 10.8-26 11-54.6 0.2-80.6-10.8-26-31-46.4-57-57.2-25.8-10.8-53.4-10.4-77.8-1.2l63 26c39.6 16.4 58.4 61.8 41.8 101.4-16.6 39.8-62 58.4-101.6 42z m347.6-259.8c-68.8 0-124.8-56-124.8-124.6s56-124.6 124.8-124.6 124.8 56 124.8 124.6-55.8 124.6-124.8 124.6z m0.2-31.2c51.8 0 93.8-42 93.8-93.6 0-51.8-42-93.6-93.8-93.6s-93.8 42-93.8 93.6c0.2 51.6 42.2 93.6 93.8 93.6z"})])]),t("p",null,"Steam")]),t("a",{href:"https://www.epicgames.com/site/zh-CN/home",target:"_blank",class:"game_wiki_item"},[t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M150.954667 0C92.416 0 70.826667 21.589333 70.826667 80.128v706.773333c0 6.613333 0.298667 12.757333 0.810666 18.389334 1.450667 12.885333 1.578667 25.301333 13.525334 39.338666 1.109333 1.621333 13.226667 10.496 13.226666 10.496 6.442667 3.242667 10.965333 5.461333 18.346667 8.533334l355.584 148.992c18.389333 8.405333 26.154667 11.776 39.509333 11.306666H512c13.525333 0.469333 21.290667-2.901333 39.68-11.306666l355.541333-148.992c7.424-3.072 11.776-5.290667 18.389334-8.533334 0 0 12.117333-9.045333 13.226666-10.496 11.946667-14.037333 12.074667-26.453333 13.525334-39.338666 0.512-5.632 0.853333-11.776 0.853333-18.346667V80.085333C953.173333 21.589333 931.541333 0 873.002667 0z m569.856 132.693333h29.013333c48.384 0 71.936 23.552 71.936 72.405334v80.170666h-58.538667V208.341333c0-15.658667-7.253333-22.912-22.4-22.912h-9.984c-15.658667 0-22.912 7.253333-22.912 22.912v248.021334c0 15.616 7.253333 22.869333 22.912 22.869333h11.093334c15.018667 0 22.272-7.253333 22.272-22.869333v-88.746667h58.709333v91.477333c0 48.853333-24.064 72.874667-72.576 72.874667h-29.525333c-48.682667 0-72.533333-24.192-72.533334-72.874667V205.610667c0-48.725333 23.850667-72.917333 72.533334-72.917334z m-520.021334 3.242667H333.653333v54.485333H260.437333v111.104h70.485334v54.357334H260.437333v118.357333h74.197334v54.357333H200.789333z m162.858667 0h93.696c48.512 0 72.533333 24.192 72.533333 73.045333v104.32c0 48.853333-24.021333 72.917333-72.533333 72.917334h-33.877333v142.378666H363.648z m193.194667 0h59.648v392.661333h-59.648z m-133.546667 52.906667v144.64h24.704c14.976 0 22.229333-7.253333 22.229333-23.04v-98.56c0-15.786667-7.253333-23.04-22.229333-23.04zM258.816 622.08h8.874667l1.962666 0.298667h3.2l1.621334 0.512h1.621333l1.621333 0.469333 1.578667 0.341333 1.450667 0.298667 1.450666 0.341333 1.450667 0.298667 1.621333 0.512 1.28 0.298667 1.28 0.512 1.621334 0.469333 1.28 0.64 1.664 0.64 1.450666 0.64 1.28 0.853333 1.621334 0.597334 1.109333 0.853333 1.621333 0.768 1.28 0.853333 1.450667 0.768 1.28 0.981334 1.28 0.810666 1.28 0.938667 1.322667 0.981333 1.28 1.109334 1.28 0.981333-0.938667 1.28-1.152 1.152-0.938667 1.28-1.152 1.28-0.938666 1.152-0.981334 1.109333-1.152 1.28-0.938666 1.28-0.981334 1.152-1.109333 1.28-0.981333 1.28-1.152 1.28-0.938667 1.152-0.981333 1.28-1.109334 1.28-0.981333 1.322667-1.109333 1.109333-0.981334 1.28-1.28-0.938666-1.28-1.109334-1.28-0.853333-1.493333-0.938667-1.109333-0.810666-1.450667-0.810667-1.28-0.810667-1.493333-0.810666-1.28-0.64-1.28-0.64-1.28-0.469334-1.450667-0.512-1.621333-0.426666-1.28-0.341334-1.621334-0.341333-1.621333-0.341333-1.621333-0.128h-1.749334l-1.962666-0.341334h-3.2l-1.621334 0.170667h-1.621333l-1.621333 0.469333-1.450667 0.341334-1.450667 0.469333-1.578666 0.469333-1.28 0.64-1.621334 0.682667-1.152 0.768-1.28 0.853333-1.28 0.768-1.152 0.981334-1.109333 0.981333-1.152 0.938667-0.938667 1.152-1.28 1.109333-0.853333 1.28-0.768 1.152-0.981333 1.28-0.64 1.450667-0.853334 1.28-0.768 1.450666-0.469333 1.450667-0.682667 1.450667-0.426666 1.621333-0.213334 1.621333-0.469333 1.450667-0.341333 1.792v1.578667l-0.298667 1.621333v3.84l0.170667 1.664 0.128 1.450667 0.170666 1.578666 0.341334 1.621334 0.469333 1.28 0.170667 1.621333 0.469333 1.28 0.512 1.28 0.64 1.664 0.810667 1.578667 0.64 1.28 0.810666 1.28 0.938667 1.322666 0.981333 1.28 0.810667 1.152 1.28 1.109334 0.981333 1.152 1.109334 0.938666 1.28 0.981334 1.28 0.981333 1.322666 0.810667 1.28 0.768 1.450667 0.682666 1.621333 0.64 1.28 0.64 1.621334 0.469334 1.621333 0.512 1.621333 0.298666 1.578667 0.341334 1.621333 0.170666 1.962667 0.128h5.290667l1.962666-0.298666h1.578667l1.621333-0.512 1.621334-0.298667 1.621333-0.512 1.450667-0.298667 1.450666-0.64 1.28-0.64 1.621334-0.682666 0.981333-0.64 1.28-0.810667v-14.805333h-23.552v-23.893334h53.205333v53.248l-1.109333 0.938667-1.28 0.981333-1.152 0.810667-1.28 0.981333-1.28 0.768-1.28 0.981334-1.28 0.810666-1.322667 0.810667-1.621333 0.810667-1.450667 0.810666-1.28 0.810667-1.621333 0.64-1.28 0.810667-1.621333 0.64-1.621334 0.64-1.621333 0.64-1.450667 0.64-1.450666 0.469333-1.450667 0.512-1.578667 0.469333-1.450666 0.469334-1.621334 0.512-1.450666 0.298666-1.621334 0.341334-1.621333 0.341333-1.621333 0.298667-1.578667 0.170666-1.621333 0.170667-1.621334 0.170667-1.92 0.128-1.621333 0.170666-1.792 0.170667h-8.362667l-1.792-0.341333h-1.621333l-1.578667-0.298667h-1.621333l-1.621333-0.512-1.621334-0.298667-1.621333-0.341333-1.578667-0.298667-1.28-0.512-1.621333-0.298666-1.621333-0.512-1.450667-0.64-1.450667-0.469334-1.621333-0.64-1.450667-0.64-1.621333-0.64-1.28-0.682666-1.621333-0.768-1.109334-0.853334-1.621333-0.768-1.152-0.853333-1.28-0.768-1.28-0.981333-1.28-0.981334-1.450667-0.938666-0.981333-0.981334-1.28-0.981333-1.152-1.109333-1.109333-0.981334-1.152-1.109333-0.938667-1.152-1.152-1.109333-0.938667-1.28-0.981333-1.152-0.810667-1.28-0.981333-1.28-0.810667-1.28-0.768-1.28-0.853333-1.493334-0.768-1.28-0.64-1.450666-0.64-1.450667-0.682667-1.450667-0.64-1.450666-0.469333-1.28-0.64-1.450667-0.341333-1.450667-0.469334-1.450666-0.341333-1.621334-0.469333-1.450666-0.341334-1.621334-0.128-1.450666-0.341333-1.621334-0.170667-1.450666-0.128-1.621334-0.170666-1.578666-0.170667-1.621334v-8.874666l0.341333-1.621334v-1.749333l0.426667-1.621333v-1.621334l0.512-1.621333 0.512-1.578667 0.298667-1.621333 0.469333-1.450667 0.512-1.621333 0.469333-1.450667 0.64-1.621333 0.64-1.450667 0.682667-1.450666 0.64-1.450667 0.64-1.450667 0.810667-1.450666 0.810666-1.28 0.768-1.28 0.853334-1.28 0.768-1.28 0.981333-1.322667 0.981333-1.28 0.938667-1.28 1.152-1.152 0.938667-1.109333 0.981333-1.152 1.28-1.109334 0.981333-1.152 1.28-0.981333 1.152-1.109333 1.28-0.981334 1.28-0.938666 1.28-0.853334 1.28-0.938666 1.28-0.810667 1.322667-0.810667 1.450667-0.810666 1.621333-0.810667 1.28-0.768 1.621333-0.682667 1.450667-0.64 1.621333-0.810666 1.28-0.426667 1.621334-0.512 1.450666-0.64 1.450667-0.341333 1.450667-0.469334 1.621333-0.341333 1.450667-0.469333 1.578666-0.341334h1.621334l1.621333-0.469333h1.621333l1.621334-0.341333h1.578666z m511.530667 0.298667h8.832l1.962666 0.341333h3.2l1.621334 0.469333h1.92l1.621333 0.512 1.450667 0.298667 1.621333 0.341333 1.621333 0.298667 1.450667 0.341333 1.621333 0.469334 1.578667 0.512 1.28 0.298666 1.621333 0.64 1.621334 0.512 1.28 0.64 1.621333 0.64 1.621333 0.64 1.450667 0.853334 1.152 0.597333 1.578667 0.853333 1.450666 0.768 1.28 0.810667 1.493334 0.981333 1.28 0.768 1.28 0.981334 1.28 0.981333 1.28 0.938667-0.938667 1.28-0.810667 1.322666-0.981333 1.28-0.938667 1.28-0.981333 1.450667-0.810667 1.28-0.981333 1.28-0.938667 1.322667-0.853333 1.28-0.938667 1.28-0.981333 1.28-0.938667 1.322666-0.853333 1.450667-0.938667 1.28-1.109333 1.28-0.853333 1.28-0.938667 1.322667-1.28-0.981334-1.450667-0.810666-1.28-0.768-1.28-0.981334-1.493333-0.64-1.28-0.853333-1.621333-0.597333-1.109334-0.64-1.621333-0.682667-1.28-0.64-1.28-0.469333-1.450667-0.64-1.621333-0.469334-1.621333-0.512-1.621334-0.469333-1.749333-0.341333-1.621333-0.298667-1.621334-0.341333-1.621333-0.170667-1.578667-0.170667-1.450666-0.128h-3.584l-1.749334 0.298667-1.621333 0.341333-1.621333 0.298667-1.28 0.682667-1.109334 0.64-1.450666 1.28-0.981334 1.450666-0.64 1.450667v4.010667l0.810667 1.792 0.64 0.981333 1.109333 1.109333 1.621334 0.853334 1.28 0.768 1.621333 0.64 1.621333 0.64 2.090667 0.64 1.28 0.341333 1.28 0.469333 1.621333 0.341334 1.28 0.469333 1.621334 0.341333 1.792 0.469334 1.749333 0.469333 1.792 0.512 1.792 0.298667 1.578667 0.512 1.792 0.469333 1.621333 0.341333 1.578667 0.469334 1.621333 0.469333 1.621333 0.512 1.621334 0.469333 1.450666 0.469334 1.621334 0.512 1.578666 0.64 1.621334 0.810666 1.621333 0.64 1.621333 0.810667 1.621334 0.810667 1.28 0.810666 1.28 0.768 1.450666 0.981334 1.152 0.853333 1.450667 1.109333 1.109333 1.109334 1.28 1.28 1.152 1.152 0.810667 1.28 1.109333 1.621333 0.810667 1.109333 0.64 1.621334 0.810667 1.109333 0.469333 1.621333 0.512 1.28 0.298667 1.621334 0.341333 1.621333 0.298667 1.621333 0.170666 1.621334 0.170667 1.578666v4.053334l-0.170667 1.749333-0.170666 1.621333-0.128 1.792-0.341334 1.621334-0.469333 1.578666-0.341333 1.621334-0.469334 1.621333-0.64 1.450667-0.64 1.28-0.682666 1.450666-0.768 1.28-0.981334 1.28-0.853333 1.28-0.768 1.322667-1.109333 1.152-0.981334 1.109333-1.152 0.981334-1.28 1.109333-1.109333 0.981333-1.28 0.981334-1.28 0.768-1.322667 0.981333-1.621333 0.810667-1.28 0.64-1.621333 0.853333-1.621334 0.597333-1.578666 0.64-1.621334 0.512-1.621333 0.469334-1.28 0.469333-1.621333 0.341333-1.621334 0.341334-1.28 0.298666-1.621333 0.341334h-1.621333l-1.578667 0.298666h-1.621333l-1.621334 0.341334h-11.946666l-1.578667-0.170667-1.621333-0.170667-1.792-0.128-1.621334-0.341333-1.578666-0.170667-1.621334-0.298666-1.621333-0.341334-1.792-0.469333-1.578667-0.341333-1.621333-0.469334-1.621333-0.341333-1.621334-0.469333-1.578666-0.512-1.621334-0.64-1.450666-0.469334-1.621334-0.469333-1.621333-0.682667-1.28-0.64-1.621333-0.64-1.28-0.810666-1.621334-0.64-1.450666-0.810667-1.109334-0.810667-1.621333-0.810666-1.152-0.768-1.450667-0.853334-1.28-0.938666-1.28-0.981334-1.28-0.938666-1.28-0.981334-1.152-0.981333-1.28-1.109333 0.938667-1.28 1.152-1.152 0.981333-1.28 1.109334-1.28 0.981333-1.152 0.938667-1.28 1.152-1.28 0.981333-1.152 1.109333-1.28 0.981334-1.109334 1.109333-1.28 0.981333-1.28 0.938667-1.152 1.152-1.28 0.981333-1.28 1.109334-1.152 1.152-1.28 1.109333 0.938667 1.621333 0.981333 1.109334 0.981334 1.621333 0.938666 1.28 0.853334 1.450667 0.938666 1.28 0.810667 1.493333 0.64 1.28 0.810667 1.450667 0.64 1.621333 0.64 1.28 0.64 1.621333 0.469333 1.28 0.682667 1.621334 0.426666 1.578666 0.512 1.621334 0.512 1.621333 0.298667 1.621333 0.341333 1.621334 0.298667h1.749333l1.621333 0.512h8.874667l1.621333-0.341333 1.578667-0.341334 1.28-0.298666 1.28-0.469334 1.152-0.682666 1.450667-0.938667 0.853333-1.152 0.768-1.28 0.469333-1.621333v-3.712l-0.64-1.578667-0.938666-1.28-0.981334-0.981333-1.450666-0.981334-1.152-0.64-1.578667-0.64-1.621333-0.64-1.92-0.853333-1.152-0.298667-1.28-0.341333-1.621334-0.426667-1.28-0.341333-1.621333-0.512-1.621333-0.298667-1.749334-0.512-1.621333-0.298666-1.792-0.512-1.578667-0.298667-1.621333-0.512-1.621333-0.298667-1.621334-0.512-1.621333-0.426666-1.578667-0.341334-1.450666-0.512-1.450667-0.469333-1.450667-0.512-1.621333-0.64-1.792-0.64-1.621333-0.64-1.578667-0.64-1.621333-0.810667-1.621334-0.810666-1.109333-0.810667-1.621333-0.810667-1.152-0.938666-1.450667-0.853334-0.938667-0.938666-1.152-1.109334-1.28-1.152-0.981333-1.109333-0.938667-1.152-0.853333-1.109333-0.768-1.28-0.853333-1.450667-0.597334-1.152-0.512-1.28-0.469333-1.450667-0.469333-1.28-0.341334-1.621333-0.298666-1.450667v-1.621333l-0.341334-1.621333v-6.912l0.170667-1.621334 0.170667-1.621333 0.298666-1.28 0.341334-1.621333 0.469333-1.28 0.341333-1.621334 0.64-1.28 0.64-1.621333 0.64-1.28 0.810667-1.621333 0.810667-1.28 1.109333-1.28 0.853333-1.28 1.28-1.28 1.109334-1.152 0.981333-1.28 1.450667-1.152 0.938666-0.810667 1.450667-0.981333 1.28-0.938667 1.28-0.853333 1.621333-0.768 1.28-0.64 1.664-0.810667 1.28-0.64 1.621334-0.512 1.578666-0.64 1.621334-0.469333 1.152-0.341334 1.578666-0.298666 1.28-0.341334 1.621334-0.298666 1.621333-0.341334 1.621333-0.170666 1.621334-0.170667 1.621333-0.128z m-394.112 1.152h30.165333l0.64 1.450666 0.64 1.450667 0.64 1.450667 0.469333 1.621333 0.64 1.450667 0.64 1.450666 0.682667 1.450667 0.64 1.450667 0.469333 1.450666 0.810667 1.578667 0.64 1.450667 0.64 1.493333 0.341333 1.450667 0.64 1.450666 0.810667 1.450667 0.64 1.578667 0.64 1.450666 0.469333 1.450667 0.64 1.450667 0.853334 1.450666 0.426666 1.450667 0.682667 1.621333 0.469333 1.621334 0.64 1.28 0.853334 1.621333 0.597333 1.28 0.64 1.621333 0.512 1.621334 0.469333 1.28 0.810667 1.621333 0.64 1.28 0.64 1.621333 0.469333 1.28 0.682667 1.621334 0.810667 1.621333 0.64 1.450667 0.469333 1.450666 0.469333 1.450667 0.64 1.450667 0.853334 1.450666 0.597333 1.578667 0.682667 1.493333 0.426666 1.450667 0.682667 1.450667 0.64 1.450666 0.64 1.450667 0.64 1.578667 0.512 1.450666 0.64 1.450667 0.810667 1.450667 0.64 1.450666 0.64 1.450667 0.341333 1.621333 0.64 1.450667 0.810667 1.450667 0.64 1.450666 0.469333 1.450667 0.64 1.450667 0.64 1.621333 0.853333 1.621333 0.426667 1.28 0.682667 1.621334 0.469333 1.28 0.64 1.621333 0.810667 1.621333 0.64 1.28 0.469333 1.621334 0.682667 1.28 0.469333 1.621333 0.810667 1.28 0.64 1.621333 0.469333 1.621334 0.64 1.28 0.682667 1.621333 0.768 1.28 0.682666 1.621333 0.426667 1.578667 0.512 1.28 0.64 1.621333 0.853333 1.28h-33.408l-0.853333-1.408-0.426667-1.450666-0.682666-1.450667-0.64-1.621333-0.469334-1.450667-0.64-1.450667-0.64-1.450666-0.512-1.450667-0.64-1.450667-0.64-1.450666-0.469333-1.450667-0.64-1.621333-0.64-1.450667-0.512-1.450667-0.64-1.450666H367.658667l-0.64 1.621333-0.469334 1.28-0.64 1.621333-0.810666 1.578667-0.341334 1.28-0.64 1.664-0.64 1.28-0.469333 1.621333-0.64 1.28-0.64 1.621334-0.512 1.28-0.64 1.621333-0.64 1.578667-0.64 1.28-0.469333 1.621333h-33.066667l0.64-1.578667 0.64-1.450666 0.64-1.450667 0.512-1.621333 0.426667-1.450667 0.853333-1.450667 0.64-1.450666 0.64-1.450667 0.469333-1.450667 0.64-1.621333 0.853334-1.450667 0.597333-1.450666 0.512-1.450667 0.469333-1.450667 0.64-1.450666 0.853334-1.621334 0.597333-1.450666 0.64-1.450667 0.512-1.450667 0.64-1.450666 0.64-1.450667 0.64-1.621333 0.64-1.621334 0.512-1.28 0.64-1.621333 0.810667-1.28 0.64-1.621333 0.469333-1.578667 0.469333-1.28 0.64-1.621333 0.853334-1.28 0.597333-1.621334 0.682667-1.28 0.426666-1.621333 0.682667-1.621333 0.810667-1.28 0.469333-1.621334 0.64-1.28 0.512-1.621333 0.64-1.621333 0.810667-1.28 0.64-1.621334 0.469333-1.28 0.64-1.621333 0.512-1.28 0.810667-1.621333 0.64-1.621334 0.64-1.450666 0.469333-1.450667 0.64-1.450667 0.853333-1.450666 0.597334-1.450667 0.341333-1.621333 0.64-1.450667 0.64-1.450667 0.810667-1.450666 0.64-1.450667 0.469333-1.450667 0.682667-1.621333 0.64-1.578667 0.64-1.28 0.64-1.621333 0.469333-1.28 0.64-1.621333 0.64-1.621334 0.853333-1.28 0.597334-1.621333 0.512-1.28 0.469333-1.621333 0.64-1.28 0.853333-1.621334 0.597334-1.621333 0.512-1.28 0.64-1.621333 0.64-1.28 0.810666-1.621334 0.469334-1.621333 0.469333-1.28 0.682667-1.621333z m93.525333 0.810666h33.066667l0.938666 1.28 0.853334 1.450667 0.938666 1.28 0.810667 1.450667 0.810667 1.28 0.810666 1.450666 0.768 1.28 0.981334 1.493334 0.810666 1.28 0.810667 1.28 0.810667 1.450666 0.810666 1.28 1.109334 1.450667 0.64 1.28 0.853333 1.493333 0.938667 1.28 0.981333 1.28 0.64 1.450667 0.938667 1.28 0.853333 1.450667 0.597333 1.28 1.152 1.493333 0.810667 1.28 0.810667 1.450667 0.810666 1.28 0.768 1.28 0.981334 1.450666 0.810666 1.28 0.810667 1.493334 0.810667 1.28 0.810666 1.450666 0.938667 1.28 0.853333 1.450667 0.768 1.28 0.981334-1.28 0.64-1.621333 0.981333-1.109334 0.938667-1.621333 0.853333-1.109333 0.597333-1.621334 1.152-1.152 0.810667-1.578666 0.64-1.152 0.981333-1.28 0.938667-1.621334 0.853333-1.109333 0.768-1.621333 0.810667-1.152 0.981333-1.578667 0.768-1.152 0.853334-1.621333 0.768-1.109334 0.853333-1.28 0.938667-1.621333 0.810666-1.152 0.810667-1.578667 0.938667-1.152 0.853333-1.621333 0.768-1.109333 0.981333-1.28 0.810667-1.621334 0.938667-1.152 0.853333-1.578666 0.768-1.152 0.853333-1.621334 0.938667-1.109333 0.810667-1.621333 0.810666-1.109334h33.365334v118.997334h-31.317334v-69.973334l-0.768 1.109334-0.981333 1.621333-0.810667 1.109333-0.981333 1.28-0.810667 1.621334-0.938666 1.152-0.853334 1.28-0.938666 1.621333-0.810667 1.109333-0.810667 1.28-1.109333 1.28-0.810667 1.664-0.981333 1.109334-0.810667 1.28-0.768 1.621333-0.981333 1.109333-0.810667 1.28-0.981333 1.621334-0.810667 1.152-0.938666 1.28-0.853334 1.621333-0.768 1.109333-0.981333 1.28-0.810667 1.621334-0.938666 1.152-0.981334 1.28-0.810666 1.28-0.810667 1.621333-0.981333 1.152-0.938667 1.28-0.64 1.621333-1.152 1.109334-0.810667 1.28-0.938666 1.621333-0.853334 1.152h-0.597333l-0.981333-1.450667-0.810667-1.28-0.981333-1.493333-0.810667-1.28-0.938667-1.450667-0.853333-1.28-0.938667-1.450666-0.810666-1.28-0.938667-1.450667-0.853333-1.28-1.109334-1.493333-0.64-1.28-0.981333-1.450667-0.938667-1.28-0.853333-1.450667-0.938667-1.28-0.810666-1.621333-0.938667-1.28-0.853333-1.450667-0.938667-1.28-0.810667-1.493333-0.981333-1.28-0.768-1.450667-0.981333-1.28-0.810667-1.450666-0.981333-1.28-0.810667-1.450667-0.938667-1.28-0.853333-1.493333-0.938667-1.28-0.810666-1.450667-1.109334-1.28-0.64-1.450667-0.981333-1.28v70.144h-30.933333v-117.76z m148.053333 0h93.824v26.88h-62.72v19.072h56.405334v25.301334H648.96v20.48h63.530667v26.922666h-94.506667v-117.717333z m-226.901333 36.437334l-0.64 1.621333-0.512 1.28-0.64 1.621333-0.64 1.578667-0.469333 1.450667-0.64 1.450666-0.682667 1.621334-0.64 1.621333-0.469333 1.28-0.64 1.621333-0.64 1.28-0.512 1.621334-0.64 1.621333-0.64 1.28-0.469334 1.621333-0.64 1.28-0.64 1.621334-0.682666 1.621333-0.426667 1.28-0.682667 1.621333-0.64 1.621334-0.469333 1.28-0.682667 1.621333h27.434667l-0.64-1.621333-0.512-1.450667-0.64-1.621333-0.64-1.450667-0.469333-1.450667-0.64-1.450666-0.64-1.621334-0.512-1.450666-0.64-1.450667-0.64-1.450667-0.469334-1.450666-0.64-1.621334-0.512-1.450666-0.64-1.450667-0.64-1.450667-0.469333-1.450666-0.64-1.578667-0.64-1.621333-0.512-1.28-0.64-1.621334-0.64-1.621333-0.469333-1.450667z m-49.066667 222.848h341.888l-174.506666 57.6z"})])]),t("p",null,"Epic")]),t("a",{href:"https://apps.apple.com/cn/charts/iphone",target:"_blank",class:"game_wiki_item"},[t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M791.488 544.095c-1.28-129.695 105.76-191.871 110.528-194.975-60.16-88.032-153.856-100.064-187.232-101.472-79.744-8.064-155.584 46.944-196.064 46.944-40.352 0-102.816-45.76-168.96-44.544-86.912 1.28-167.072 50.528-211.808 128.384-90.304 156.703-23.136 388.831 64.896 515.935 43.008 62.208 94.304 132.064 161.632 129.568 64.832-2.592 89.376-41.952 167.744-41.952s100.416 41.952 169.056 40.672c69.76-1.312 113.984-63.392 156.704-125.792 49.376-72.16 69.728-142.048 70.912-145.632-1.536-0.704-136.064-52.224-137.408-207.136zM662.56 163.52C698.304 120.16 722.432 60 715.84 0c-51.488 2.112-113.888 34.304-150.816 77.536-33.152 38.368-62.144 99.616-54.368 158.432 57.472 4.48 116.128-29.216 151.904-72.448z"})])]),t("p",null,"App Store")]),t("a",{href:"https://play.google.com",target:"_blank",class:"game_wiki_item"},[t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M650.6 468.6L209.2 26l561.6 322.4-120.2 120.2zM94 0C68 13.6 50.6 38.4 50.6 70.6v882.6c0 32.2 17.4 57 43.4 70.6l513.2-512L94 0z m850.4 451.2l-117.8-68.2-131.4 129 131.4 129 120.2-68.2c36-28.6 36-93-2.4-121.6zM209.2 998l561.6-322.4-120.2-120.2L209.2 998z"})])]),t("p",null,"Google Play")]),t("a",{href:"https://www.nintendo.com/switch/",target:"_blank",class:"game_wiki_item"},[t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M255.69989 67c-89.2 16-161 82-183.6 168.8C63.89989 267.2 63.29989 285.6 64.29989 528.8 64.69989 752 64.89989 757.2 68.69989 774.6c20.6 93 86.6 159.2 180.6 181 12.2 2.8 27.8 3.4 128.2 3.8 103.8 0.8 114.6 0.6 117.4-2.2 2.8-2.8 3-38.6 3-444.4 0-301-0.6-442.6-1.8-445.2-1.8-3.4-5-3.6-113.8-3.4-88.4 0.2-115 0.8-126.6 2.8z m167.8 445.2V888l-75.6-1c-69.6-0.8-77-1.2-91-4.6-59.8-15.4-104-61.4-116.6-121.4-4-18.8-4-480.2-0.2-498.6 11.2-52.2 47.4-95.4 96-114.8 24.4-9.8 35.8-11 115.2-11.2l71.8-0.2v376z m-151.8-262.4c-11.6 2.2-29.4 11.2-39 19.4-19.4 16.8-29.2 40.8-27.6 69 0.8 14.6 1.6 18.6 7.6 30.4 8.8 18 21.8 31.2 39.8 40 12.4 6.2 15.6 6.8 31.8 7.4 14.6 0.6 19.8 0 29.6-3.4 40.2-13.6 64.6-52.6 57.6-92.8-7.8-47.4-53.2-79.4-99.8-70z m316.4-184.6c-0.8 0.6-1.2 201.6-1.2 447 0 404.6 0.2 445.6 3 446.8 5 1.8 149 1.2 166.8-0.8 75.4-8.6 142-54.4 178-122.4 4.6-8.8 10.8-23.4 14-32.4 11.6-34.8 11.4-25.6 11.4-292.2 0-212.8-0.4-244.6-3-258-18.4-96.6-92.2-169.6-189-186.2-13-2.2-33-2.8-97.6-2.8-44.8-0.2-81.8 0.4-82.4 1z m198.2 404.2c29 7.6 52.6 29.6 62.4 57.8 6.2 17.4 6 43-0.2 59-11.4 29.4-33.6 50-62.2 57.6-46.4 12-95.8-16-109.2-62-4-14-3.8-37.8 0.8-52.4 13.8-45.4 62-72.2 108.4-60z"})])]),t("p",null,"Nintendo Switch")]),t("a",{href:"https://www.xbox.com/",target:"_blank",class:"game_wiki_item"},[t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M728.6 589.8c-97.6-120-217-198-217-198s-118.8 78-216.6 198c-84 103.2-115.2 178.8-132 227.4l-2.8 10.2c5.6 6.2 11.2 12.2 17 18 5.8 5.8 11.8 11.6 18 17.2 6.2 5.6 12.4 11 18.8 16.2 6.4 5.2 13 10.2 19.6 15.2 6.6 4.8 13.4 9.6 20.4 14 7 4.6 14 8.8 21.2 13 7.2 4.2 14.4 8.2 21.8 11.8 7.4 3.8 14.8 7.4 22.4 10.8 7.6 3.4 15.2 6.6 23 9.6 7.8 3 15.6 5.8 23.4 8.4 7.8 2.6 15.8 5 23.8 7 8 2.2 16 4 24.2 5.8 8 1.8 16.2 3.2 24.4 4.6s16.4 2.4 24.6 3.2 16.4 1.6 24.8 2a513.06 513.06 0 0 0 49.6 0c8.2-0.4 16.6-1 24.8-2 8.2-0.8 16.4-2 24.6-3.2 8.2-1.2 16.2-2.8 24.4-4.6 8-1.8 16.2-3.6 24.2-5.8 8-2.2 16-4.6 23.8-7 7.8-2.6 15.6-5.4 23.4-8.4s15.4-6.2 23-9.6c7.6-3.4 15-7 22.4-10.8s14.6-7.8 21.8-11.8c7.2-4.2 14.2-8.4 21.2-13s13.8-9.2 20.4-14 13.2-10 19.6-15.2c6.4-5.2 12.6-10.6 18.8-16.2s12.2-11.2 18-17.2 11.6-11.8 17-18l-3-10.2c-17.6-48.4-49-124.2-133-227.4zM396.4 142.6c61.8 27.6 115.2 73 115.2 73s53.8-45.2 115.6-73c77.6-34.8 136.8-23.8 152.6-20-4.8-3.4-9.8-6.6-14.8-9.8-5-3.2-10-6.2-15.2-9.2-5.2-3-10.4-5.8-15.6-8.6s-10.6-5.4-15.8-8c-5.4-2.6-10.8-5-16.2-7.4-5.4-2.4-10.8-4.6-16.4-6.8-5.6-2.2-11-4.2-16.6-6.2s-11.2-3.8-16.8-5.6c-5.6-1.8-11.4-3.4-17-5-5.8-1.6-11.4-3-17.2-4.4-5.8-1.4-11.6-2.6-17.4-3.6s-11.6-2.2-17.6-3c-5.8-0.8-11.8-1.6-17.6-2.4-5.8-0.6-11.8-1.2-17.8-1.6-6-0.4-11.8-0.8-17.8-1-6-0.2-11.8-0.4-17.8-0.4s-11.8 0.2-17.8 0.4-11.8 0.6-17.8 1-11.8 1-17.8 1.6c-5.8 0.6-11.8 1.4-17.6 2.4-5.8 0.8-11.8 1.8-17.6 3l-17.4 3.6c-5.8 1.4-11.6 2.8-17.2 4.4s-11.4 3.2-17 5-11.2 3.6-16.8 5.6-11.2 4-16.6 6.2-11 4.4-16.4 6.8c-5.4 2.4-10.8 4.8-16.2 7.4s-10.6 5.2-15.8 8c-5.2 2.8-10.4 5.6-15.6 8.6-5.2 3-10.2 6-15.2 9.2-5 3.2-10 6.4-14.8 9.8 15-3.8 74-15 151.8 20z m588 369.4c0-8.4-0.2-16.8-0.6-25.2s-1.2-16.8-2-25.2c-0.8-8.4-2-16.6-3.4-25-1.4-8.2-2.8-16.6-4.6-24.8s-3.8-16.4-6-24.4-4.6-16.2-7.2-24.2c-2.6-8-5.4-15.8-8.6-23.6-3-7.8-6.4-15.6-9.8-23.2s-7.2-15.2-11-22.6c-3.8-7.4-8-14.8-12.2-22-4.2-7.2-8.8-14.4-13.4-21.4-4.6-7-9.4-13.8-14.4-20.6-5-6.8-10.2-13.4-15.6-19.8s-10.8-12.8-16.6-19c-5.8-6.2-11.6-12.2-17.6-18-6-5.8-12.2-11.6-18.6-17l-6.8 1.8c-107 39-196 142.2-196 142.2s80.6 72.2 164.4 195.8c103.4 152.8 104.6 291.8 104.4 301 7.8-10.2 15-20.6 21.8-31.4 6.8-10.8 13.2-21.8 19.2-33s11.4-22.8 16.4-34.4 9.6-23.6 13.6-35.8c4-12 7.6-24.4 10.6-36.8 3-12.4 5.6-24.8 7.6-37.4s3.6-25.2 4.6-38c1.4-12.4 2-25.2 1.8-38z m-745-16.2c83.8-123.6 164.4-195.8 164.4-195.8S315 196.8 208 157.8l-7-1.6c-5.6 4.8-11 9.8-16.4 15-5.4 5.2-10.6 10.4-15.6 15.8s-10 10.8-14.8 16.4c-4.8 5.6-9.6 11.2-14 17-4.6 5.8-9 11.8-13.2 17.8-4.2 6-8.4 12.2-12.4 18.4-4 6.2-7.8 12.6-11.6 18.8-3.6 6.4-7.2 12.8-10.6 19.4-3.4 6.6-6.6 13.2-9.8 19.8-3 6.8-6 13.4-8.8 20.4-2.8 6.8-5.4 13.8-7.8 20.8-2.4 7-4.8 14-6.8 21s-4 14.2-5.8 21.4-3.4 14.4-4.8 21.6c-1.4 7.2-2.8 14.6-3.8 21.8-1.2 7.2-2 14.6-2.8 22-0.8 7.4-1.4 14.6-1.8 22-0.4 7.4-0.6 14.8-0.8 22.2 0 7.4 0 14.8 0.4 22.2 0.2 7.4 0.8 14.8 1.4 22 0.6 7.4 1.4 14.6 2.4 22s2.2 14.6 3.4 21.8c1.4 7.2 2.8 14.4 4.4 21.6 1.6 7.2 3.4 14.4 5.4 21.4 2 7.2 4.2 14.2 6.4 21.2 2.4 7 4.8 14 7.4 20.8 2.6 6.8 5.4 13.8 8.4 20.4 3 6.8 6 13.4 9.4 20 3.2 6.6 6.6 13.2 10.2 19.6 3.6 6.4 7.4 12.8 11.2 19.2 3.8 6.2 7.8 12.4 12 18.6 4.2 6 8.4 12 13 18 0-9.2 1.4-148.2 104.6-300.8z"})])]),t("p",null,"Xbox")]),t("a",{href:"https://www.playstation.com/",target:"_blank",class:"game_wiki_item"},[t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1331 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M1039.488 370.688c-2.0992-45.6192-8.576-92.032-28.0832-133.632a219.904 219.904 0 0 0-42.9056-61.8496c-16.384-17.0752-35.3536-31.2064-55.3728-43.4688-44.4672-27.2128-97.5104-45.3376-219.4432-82.688C571.7504 11.7504 499.2 0 499.2 0v955.4688L706.944 1024s0.256-530.1248 0.256-798.6688v-10.1376c0-24.8064 19.5072-44.8 41.856-44.8h1.28c22.1184 0 40.32 20.0192 40.32 44.8V570.6752c28.5952 14.1312 75.9296 24.7808 108.672 24.2688a121.7536 121.7536 0 0 0 62.4128-15.2064c19.7632-10.9312 36.1472-27.7504 47.8464-47.4624 13.2608-22.144 21.3248-47.488 25.728-72.8064 4.9408-28.8 5.1968-58.9312 4.1728-88.8064zM225.408 783.4624c71.2448-26.112 232.192-78.6688 232.192-78.6688v-125.8496s-198.912 66.1248-289.3824 98.9184c-22.3488 8.2688-44.9792 15.744-66.816 25.344-25.472 10.9312-50.432 23.1936-73.0624 39.4496-9.8816 6.9376-18.7136 15.744-23.9104 26.9312a47.36 47.36 0 0 0-1.3056 36.2752c5.1968 13.5936 15.0784 24.8064 26.2656 33.6128 20.2752 15.7184 44.4416 25.344 68.608 32.512a666.624 666.624 0 0 0 229.8624 35.4816c37.7088-0.512 93.5936-5.0688 129.9968-11.7248v-112s-28.5952 6.656-107.3664 33.3312c-11.9808 3.9936-23.936 8.7808-36.4032 11.4688-18.4576 4.2496-37.4528 5.5808-56.1664 5.8624-16.896-0.8192-34.304-1.8688-50.176-8.2688-5.7344-2.6624-11.9552-5.888-14.3104-12.288-2.0736-5.3248 0.768-10.6496 4.4288-14.3872 7.2704-7.7312 17.664-12.0064 27.5456-16z"}),t("path",{d:"M1331.2 751.744c-0.256-16-9.6256-29.8752-20.5312-40.0128-18.4576-16.7936-41.344-27.4688-64.2304-35.9936-14.3104-5.0688-24.1664-8.8064-38.2208-13.3376-65.536-21.8624-134.9376-29.8752-203.5712-30.1312-20.8128 0.7936-60.0576 1.3312-80.6144 3.7376-56.9344 6.656-174.976 41.0624-174.976 41.0624v130.1248s175.5136-57.6 250.88-84.7872c25.2416-8.8064 52.2752-12.288 78.7968-12.288 16.896 0.5376 34.304 1.8688 50.432 8.2688 5.7344 2.4064 11.7248 5.888 14.336 12.032 2.304 6.912-2.3552 13.312-7.552 17.3056-12.2368 10.1376-27.8272 14.1312-42.1376 19.7376-106.5984 38.656-345.0112 119.1936-345.0112 119.1936v125.3376s304.7168-105.6 444.0832-156.8c23.1424-8.7808 46.5408-16.256 68.6336-27.7248 20.5312-10.6752 41.088-22.9376 56.6784-40.8064 8.064-9.6 13.0048-21.3248 13.0048-34.9184z"})])]),t("p",null,"PlayStation")])],-1),W={class:"action_button"},Y=t("div",{class:"icon"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M174.336 768l-119.168 119.168a42.666667 42.666667 0 0 0 60.330667 60.330667L234.666667 828.330667l119.168 119.168a42.666667 42.666667 0 0 0 60.330666-60.330667L294.997333 768l119.168-119.168a42.666667 42.666667 0 0 0-60.330666-60.330667L234.666667 707.669333l-119.168-119.168a42.666667 42.666667 0 0 0-60.330667 60.330667L174.336 768zM768 469.333333c-117.824 0-213.333333-95.509333-213.333333-213.333333S650.176 42.666667 768 42.666667s213.333333 95.509333 213.333333 213.333333-95.509333 213.333333-213.333333 213.333333z m0-85.333333a128 128 0 1 0 0-256 128 128 0 0 0 0 256zM554.666667 661.546667c0-59.093333 47.68-106.88 106.88-106.88h212.906666c59.093333 0 106.88 47.68 106.88 106.88v212.906666c0 59.093333-47.68 106.88-106.88 106.88h-212.906666A106.730667 106.730667 0 0 1 554.666667 874.453333v-212.906666z m85.333333 0v212.906666c0 12.032 9.536 21.546667 21.546667 21.546667h212.906666c12.032 0 21.546667-9.536 21.546667-21.546667v-212.906666c0-12.032-9.536-21.546667-21.546667-21.546667h-212.906666c-12.032 0-21.546667 9.536-21.546667 21.546667zM183.829333 109.888c36.117333-61.162667 108.245333-61.248 144.426667 0l126.208 213.653333c35.733333 60.522667 3.52 124.437333-66.816 124.437334H124.437333c-70.613333 0-102.634667-63.765333-66.816-124.437334L183.829333 109.909333zM133.653333 362.666667H378.453333l-122.410666-207.232L133.653333 362.666667z"})])],-1),Z={class:"text"},t3={class:"game_wiki"},e3=["href"],s3=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M687.8 607.5H339.7c37.4 62.9 71.5 130.3 102.1 202.1h142.1c43.6-68.2 78.2-135.6 103.9-202.1z m41.7-76.7V381.5H302v149.4h427.5z m173.1 356H121.4v-77.1h233.7c-28.6-62.9-58.9-117.3-90.7-163.1l60.1-39H219.2V303h593.6v304.5H702.3l60.1 39.9c-28.4 62.9-57.9 117-88.6 162.2h228.8v77.2z m-17.1-673.3H143.7v-76.2h741.8v76.2z"})])],-1),a3=t("p",null,"搜索豆瓣",-1),i3=[s3,a3],c3=["href"],o3=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M853.333333 981.333333H170.666667c-72.533333 0-128-55.466667-128-128V384c0-72.533333 55.466667-128 128-128h682.666666c72.533333 0 128 55.466667 128 128v469.333333c0 72.533333-55.466667 128-128 128zM170.666667 341.333333c-25.6 0-42.666667 17.066667-42.666667 42.666667v469.333333c0 25.6 17.066667 42.666667 42.666667 42.666667h682.666666c25.6 0 42.666667-17.066667 42.666667-42.666667V384c0-25.6-17.066667-42.666667-42.666667-42.666667H170.666667z"}),t("path",{d:"M512 341.333333c-12.8 0-21.333333-4.266667-29.866667-12.8l-213.333333-213.333333c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0L512 238.933333l183.466667-183.466666c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733333l-213.333333 213.333333c-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"})])],-1),l3=t("p",null,"搜索 Bangumi",-1),_3=[o3,l3],n3=["href"],h3=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M184.081688 539.606474c111.325025-23.971136 95.969849-157.134634 92.813507-186.224162-5.459618-44.78593-58.264362-123.182633-129.836543-116.86995-89.998392 7.933508-103.135598 138.196583-103.135598 138.196584-12.241487 60.141106 29.089528 188.783357 140.158634 164.854874m206.655076-223.503116c61.420704 0 111.069106-70.804422 111.069105-158.243618 0-87.012664-49.477789-157.817086-110.898492-157.817086S279.539698 70.420543 279.539698 157.859739s49.904322 158.243618 111.325025 158.243619m264.748825 10.45005c82.320804 11.089849 134.869628-76.77588 145.532945-143.314975 10.663317-66.112563-42.653266-143.314975-100.661709-156.537488-58.434975-13.478432-130.518995 79.932221-137.77005 140.755779-7.677588 74.643216 10.663317 148.8599 92.557588 159.395257M981.185931 438.688845c0-31.819337-26.146452-127.661226-124.121006-127.661226-97.889246 0-111.325025 90.424925-111.325025 154.404824 0 60.994171 5.033085 145.874171 127.32 143.314976 121.775076-2.985729 108.467257-138.196583 108.467257-170.186534M857.491458 717.470595s-127.32-98.529045-201.579337-204.735679c-100.661709-156.836061-243.763418-92.984121-291.492423-13.478432-47.771658 80.316101-121.988342 130.604302-132.438392 144.04008-10.663317 13.222513-153.551759 90.424925-121.732423 231.180704 31.98995 140.755779 143.314975 138.196583 143.314976 138.196584s81.894272 8.104121 177.437588-13.222513 177.437588 5.118392 177.437588 5.118392 222.095558 74.643216 283.558916-68.671759c60.738251-143.741508-34.549146-217.958191-34.549146-217.958191"})])],-1),m3=t("p",null,"搜索百度百科",-1),d3=[h3,m3],r3=["href"],v3=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M184.081688 539.606474c111.325025-23.971136 95.969849-157.134634 92.813507-186.224162-5.459618-44.78593-58.264362-123.182633-129.836543-116.86995-89.998392 7.933508-103.135598 138.196583-103.135598 138.196584-12.241487 60.141106 29.089528 188.783357 140.158634 164.854874m206.655076-223.503116c61.420704 0 111.069106-70.804422 111.069105-158.243618 0-87.012664-49.477789-157.817086-110.898492-157.817086S279.539698 70.420543 279.539698 157.859739s49.904322 158.243618 111.325025 158.243619m264.748825 10.45005c82.320804 11.089849 134.869628-76.77588 145.532945-143.314975 10.663317-66.112563-42.653266-143.314975-100.661709-156.537488-58.434975-13.478432-130.518995 79.932221-137.77005 140.755779-7.677588 74.643216 10.663317 148.8599 92.557588 159.395257M981.185931 438.688845c0-31.819337-26.146452-127.661226-124.121006-127.661226-97.889246 0-111.325025 90.424925-111.325025 154.404824 0 60.994171 5.033085 145.874171 127.32 143.314976 121.775076-2.985729 108.467257-138.196583 108.467257-170.186534M857.491458 717.470595s-127.32-98.529045-201.579337-204.735679c-100.661709-156.836061-243.763418-92.984121-291.492423-13.478432-47.771658 80.316101-121.988342 130.604302-132.438392 144.04008-10.663317 13.222513-153.551759 90.424925-121.732423 231.180704 31.98995 140.755779 143.314975 138.196583 143.314976 138.196584s81.894272 8.104121 177.437588-13.222513 177.437588 5.118392 177.437588 5.118392 222.095558 74.643216 283.558916-68.671759c60.738251-143.741508-34.549146-217.958191-34.549146-217.958191"})])],-1),g3=t("p",null,"访问百度百科词条",-1),w3=[v3,g3],p3=["href"],u3=t("div",{class:"wiki_img_box"},[t("p",null,"萌")],-1),z3=t("p",null,"搜索萌娘百科",-1),k3=[u3,z3],x3=["href"],b3=t("div",{class:"wiki_img_box"},[t("p",null,"萌")],-1),f3=t("p",null,"访问萌娘百科词条",-1),M3=[b3,f3],y3={class:"game_detail_main content"},H3={key:0,class:"section"},B3={class:"section_title"},S3=["innerHTML"],L3={class:"content"},V3={__name:"GameDetail",props:{game_data:{type:Object,required:!0}},setup(e){const a=e,i=v(()=>h(a.game_data.title_t,"zh")?h(a.game_data.title_t,"zh"):a.game_data.title),m=v(()=>a.game_data.title_t?h(a.game_data.title_t,x().settings.second_language):null),s=v(()=>h(a.game_data.intro_t));return(n,g)=>(o(),l("div",L,[t("div",V,[t("div",C,[t("img",{class:"game_detail_bg_item",src:e.game_data.cover},null,8,$)]),t("div",D,[t("div",G,[t("img",{src:e.game_data.cover},null,8,N),P]),t("div",R,[t("div",j,[t("div",E,[t("h1",null,c(e.game_data.title),1),e.game_data.title_t&&w(h)(e.game_data.title_t)?(o(),l("h2",T,c(w(h)(e.game_data.title_t)),1)):_("",!0),m.value?(o(),l("h2",q,c(m.value),1)):_("",!0)]),t("div",A,[t("div",F,[d(B,{rate:e.game_data.rate},null,8,["rate"]),e.game_data.publish_date?(o(),l("div",J,c(e.game_data.publish_date),1)):_("",!0),e.game_data.region?(o(),l("div",K,c(n.$text("regions."+e.game_data.region)),1)):_("",!0),e.game_data.gameplay?(o(),l("div",O,[t("span",Q,c(n.$text("gameplay")),1),b(c(n.$text("gameplay."+e.game_data.gameplay)),1)])):_("",!0)])]),t("div",U,[d(p,{width:260},{dropdown:r(()=>[I]),default:r(()=>[X]),_:1}),d(p,{width:260},{dropdown:r(()=>[t("div",t3,[t("a",{href:"https://www.douban.com/search?cat=3114&q="+e.game_data.title,target:"_blank",class:"game_wiki_item"},i3,8,e3),t("a",{href:"https://bgm.tv/subject_search/"+e.game_data.title+"?cat=4",target:"_blank",class:"game_wiki_item"},_3,8,c3),t("a",{href:"https://baike.baidu.com/search?word="+i.value,target:"_blank",class:"game_wiki_item"},d3,8,n3),t("a",{href:"https://baike.baidu.com/item/"+i.value,target:"_blank",class:"game_wiki_item"},w3,8,r3),t("a",{href:"https://zh.moegirl.org.cn/Special:Search/"+i.value,target:"_blank",class:"game_wiki_item"},k3,8,p3),t("a",{href:"https://zh.moegirl.org.cn/"+i.value,target:"_blank",class:"game_wiki_item"},M3,8,x3)])]),default:r(()=>[t("div",W,[Y,t("p",Z,c(n.$text("archive.wiki_rate")),1)])]),_:1})])])])])]),t("div",y3,[s.value?(o(),l("div",H3,[t("h2",B3,c(n.$text("archive.intro")),1),t("p",{innerHTML:s.value},null,8,S3)])):_("",!0)]),t("div",L3,[d(S,{post_id:"archive/games/"+e.game_data.game_id},null,8,["post_id"])])]))}},C3={components:{GameDetail:V3,Placeholder:M},async beforeRouteEnter(e,a,i){const m=await u("/archive/get_game_detail.php",{game_id:e.params.id});i(s=>s.set_game_data(m))},async beforeRouteUpdate(e,a){const i=await u("/archive/get_game_detail.php",{game_id:e.params.id});this.set_game_data(i)},data(){return{game_data:null,not_found:!1}},methods:{set_game_data(e){e.status=="success"?(this.game_data=e.data,document.title=this.game_data.title+" - Kloudy Shape"):(this.game_data=null,this.not_found=!0)}}};function $3(e,a,i,m,s,n){const g=z("GameDetail"),k=z("Placeholder");return o(),l(H,null,[s.game_data?(o(),y(g,{key:0,game_data:s.game_data},null,8,["game_data"])):_("",!0),d(k,{loading:!s.game_data&&!s.not_found,error:!s.game_data&&s.not_found,error_title:e.$text("page_not_found")},null,8,["loading","error","error_title"])],64)}const Q3=f(C3,[["render",$3]]);export{Q3 as default};

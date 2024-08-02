import{_ as u,a3 as k,az as f,b,r as d,o as _,d as c,e as t,n as g,t as a,h as l,g as n,w as m,$ as p,k as z,F as M}from"./index-b17261da.js";import{d as y}from"./display_json_text-b6b09356.js";import{R as V}from"./Rate-467c38fb.js";import{C as q}from"./CommunityPost-b03e6721.js";/* empty css                                             */import"./Comment-c7f6dd89.js";import"./markdown_to_html_lite-855e1114.js";import"./index-97cf174a.js";import"./Pagination.vue_vue_type_style_index_0_lang-51f35c6a.js";import"./More-1ee246b5.js";import"./CharacterCard-0e460992.js";import"./UserBusiness-1e7a0f3b.js";import"./FormTextarea-04b99bf5.js";import"./Warning-c02491ed.js";import"./Comment-b7d843c6.js";import"./GuestInfo-3e087214.js";const C={components:{Rate:V,CommunityPost:q,Placeholder:k,Dropdown:f},props:["movie_data"],computed:{search_name(){return this.display_json_text(this.movie_data.title_t,"zh")?this.display_json_text(this.movie_data.title_t,"zh"):this.movie_data.title},title_t_second(){return this.movie_data.title_t?this.display_json_text(this.movie_data.title_t,b().settings.second_language):null}},methods:{display_json_text:y}},H={class:"movie_detail"},B={class:"movie_detail_top"},L={class:"movie_detail_bg"},S={class:"content"},j={class:"movie_detail_img"},D=t("div",{class:"img_back"},null,-1),P=[D],R={class:"movie_detail_text_wrapper"},A={class:"movie_detail_text"},N={class:"title"},E={key:0},F={key:1},I={class:"tag_box"},K={class:"tag"},T={key:0},U={key:1},G={key:2},J={class:"movie_actions"},O=t("div",{class:"action_button"},[t("div",{class:"icon"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M512 1024A512 512 0 1 1 512 0a512 512 0 0 1 0 1024zM383.232 287.616v448l384-223.104-384-224.896z"})])]),t("p",{class:"text"},"观看")],-1),Q={class:"movie_wiki"},W=["href"],X=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M977.2 208.2c33.4 36.2 48.8 79.4 46.6 131.4v404.8c-0.8 52.8-18.4 96.2-53 130.2-34.4 34-78.2 51.8-131 53.4H184.04c-52.9-1.6-96.42-19.6-130.56-54.4C19.364 838.8 1.534 793 0 736.4V339.6c1.534-52 19.364-95.2 53.48-131.4C87.62 175.5 131.14 157.54 184.04 156h58.76L192.1 104.38c-11.5-11.46-17.26-26-17.26-43.58 0-17.6 5.76-32.12 17.26-43.594C203.6 5.736 218.2 0 235.8 0s32.2 5.736 43.8 17.206L426.2 156h176l149-138.794C763.4 5.736 778.4 0 796 0c17.6 0 32.2 5.736 43.8 17.206 11.4 11.474 17.2 25.994 17.2 43.594 0 17.58-5.8 32.12-17.2 43.58L789.2 156h58.6c52.8 1.54 96 19.5 129.4 52.2z m-77.6 139.4c-0.8-19.2-7.4-34.8-21.4-47-10.4-12.2-28-18.8-45.4-19.6H192.1c-19.18 0.8-34.9 7.4-47.16 19.6-12.28 12.2-18.8 27.8-19.56 47v388.8c0 18.4 6.52 34 19.56 47s28.76 19.6 47.16 19.6H832.8c18.4 0 34-6.6 46.6-19.6 12.6-13 19.4-28.6 20.2-47V347.6z m-528.6 85.4c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.4 12.6-28 19-47.2 19-19.2 0-35-6.4-47.2-19-12.2-12.6-18.8-28-19.6-46.4v-66.6c0.8-18.2 7.6-33.8 20.2-46.4 12.6-12.6 26.4-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z m383 0c12.6 12.6 19.4 28.2 20.2 46.4V546c-0.8 18.4-7.4 33.8-19.6 46.4-12.2 12.6-28 19-47.2 19-19.2 0-34.8-6.4-47.2-19-14-12.6-18.8-28-19.4-46.4v-66.6c0.6-18.2 7.4-33.8 20-46.4 12.6-12.6 28.2-19.2 46.6-20 18.4 0.8 34 7.4 46.6 20z"})])],-1),Y=t("p",null,"搜索 Bilibili",-1),Z=[X,Y],$=["href"],t1=t("div",{class:"wiki_img_box"},[t("p",null,"B")],-1),e1=t("p",null,"巴哈姆特",-1),i1=[t1,e1],s1=t("a",{href:"https://v.qq.com",target:"_blank",class:"movie_wiki_item"},[t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1107 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M587.7685 475.803L379.2985 317.52c-27.023-23.163-50.187-11.581-50.187 27.024v347.45c0 34.744 23.164 46.326 50.187 23.162l208.47-158.282c23.163-15.442 27.024-42.466 15.442-61.769-3.86-11.581-7.721-15.442-15.442-19.302z"}),t("path",{d:"M1058.7555 406.313C842.5635 197.843 560.7455 74.306 390.8795 8.677c-73.35-27.024-154.422 11.581-181.446 81.071-3.86 7.721-3.86 15.442-7.72 23.163v15.442c158.282 50.188 413.078 146.701 609.966 301.123 42.466 30.884 54.047 92.653 23.163 135.12-7.721 11.58-15.442 19.302-27.024 23.162-185.306 131.259-389.915 235.494-606.106 304.983l3.86 11.582c11.583 77.211 84.933 127.398 162.144 115.816 11.581 0 19.303-3.86 30.884-7.72 239.354-96.514 463.266-231.633 660.153-401.497 57.909-50.187 65.63-138.98 15.443-196.888-7.721 0-11.582-3.86-15.443-7.721z"}),t("path",{d:"M205.5745 128.353h-3.86c-77.212-23.163-158.283 15.443-169.865 81.072-42.466 200.748-42.466 405.357 0 606.106C47.2925 881.16 132.2255 923.626 205.5755 896.602h3.86c-46.326-254.796-46.326-513.453-3.86-768.249z"})])]),t("p",null,"腾讯视频")],-1),o1=t("a",{href:"https://www.iqiyi.com",target:"_blank",class:"movie_wiki_item"},[t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M266.622942 667.807578c27.710109 13.487176 57.219189 16.874319 87.606267 14.361079 3.733021-0.306992 6.67605-0.838088 7.754614 4.311189 3.403516 16.222473 12.164041 23.613814 28.613688 25.535583 13.706163 1.599428 27.431769 0.787946 41.148166 0.86367 5.618974 0.030699 8.289804-2.774183 8.454556-8.41567 0.191358-6.5246 0.158612-13.063527 0.035816-19.593244-0.127913-6.817266-2.659573-9.188266-9.642614-9.233292-7.870248-0.053212-15.742543 0.032746-23.613814-0.050142-2.616594-0.026606-5.378497 0.301875-7.952112-1.766226 1.147126-1.983167 2.982938-2.094708 4.430916-2.828418 17.404392-8.836249 29.739325-21.457708 29.777187-42.283012 0.141216-76.876901 0.089028-153.754826 0.028653-230.632751-0.01228-14.887059-6.311753-26.730805-18.033725-35.892465-8.949836-7.001461-19.396769-10.413164-30.125111-13.234419-25.838482-6.794753-52.074006-6.429433-78.314647-3.6399-14.059204 1.496074-27.7756 5.201465-39.98876 12.573363-15.971763 9.640568-25.858948 22.906709-25.775037 42.854017 0.311085 75.368548 0.183172 150.740166 0.082888 226.110761C241.086335 645.965108 249.746576 659.592476 266.622942 667.807578zM313.779961 404.813792c0-2.670829-0.01228-5.395894 0.49221-7.997138 1.063215-5.489014 4.231371-9.435906 9.671267-11.190877 8.673543-2.794649 17.47807-2.920516 26.214035-0.479931 6.592139 1.842974 9.333576 5.430686 9.66615 12.408611 0.265036 5.513574 0.13917 11.045567 0.13917 16.569374 0.010233 32.981159 0.004093 65.963341 0.004093 98.9445-0.002047 36.665061 0.008186 73.329099-0.004093 109.99416-0.00614 13.960966-3.62762 18.144242-17.579377 19.789719-7.395434 0.87288-14.721283 0.500397-21.370727-3.52222-4.330632-2.620687-6.600325-6.55223-7.063883-11.522428-0.200568-2.161223-0.182149-4.348028-0.182149-6.522554C313.759495 549.129642 313.757448 476.971206 313.779961 404.813792z"}),t("path",{d:"M132.619972 328.946894c20.436448-0.042979 40.871873-0.106424 61.309344 0.048095 4.427846 0.033769 6.071276-1.570775 6.644327-5.987365 2.451842-18.8493 11.310603-33.082466 30.011524-39.767725 5.856381-2.093684 11.895935-3.470031 18.029632-4.412496 62.11264-9.54233 124.627439-14.725376 187.399087-16.923438 22.750143-0.797156 45.533033-0.268106 68.302619-0.923022 17.721617-0.506537 35.483142 0.292666 53.226249 0.649799 11.039427 0.222057 22.086018 0.403183 33.128515 0.733711 36.82879 1.102101 73.535807 3.761674 110.172215 7.500834 25.478278 2.600221 50.918693 5.624091 76.157517 10.037611 25.308409 4.426823 38.588877 18.193361 42.085514 43.597961 0.604774 4.39203 2.541893 5.502317 6.551206 5.478781 20.436448-0.112564 40.871873-0.150426 61.309344 0.023536 4.767584 0.040932 6.210445-1.824555 5.776563-6.311753-1.102101-11.338233-2.335185-22.644743-5.14109-33.719986-8.612145-33.965579-28.610618-56.087413-63.819514-64.039525-32.906457-7.43125-66.165955-12.093433-99.615788-15.773242-24.452925-2.690272-48.972365-4.572132-73.510224-6.345522-28.882817-2.088568-57.789171-3.635807-86.71906-4.539386-18.071587-0.565888-36.178991-0.106424-54.270021-0.106424-30.302143-0.068562-60.609403-0.38374-90.876754 1.77032-19.693528 1.400906-39.446407 1.977028-59.134819 3.432169-30.202882 2.233877-60.373019 4.915963-90.411149 8.834202-27.393907 3.573385-54.67832 7.66968-81.412195 15.032368-24.543999 6.759961-40.532135 22.579251-50.29243 45.382607-7.013741 16.385179-9.210779 33.831526-10.595312 51.414997C126.582465 328.366679 129.181663 328.95508 132.619972 328.946894z"}),t("path",{d:"M887.342062 698.827059c-20.258393 0.324388-40.520879 0.659009-60.775178 0.592494-4.7727-0.01535-6.133697 1.476631-6.825452 6.076392-2.188852 14.548344-7.433296 27.493168-21.264303 35.157731-7.576559 4.197602-15.69854 6.753821-24.180725 8.080026-46.667879 7.294127-93.612051 12.165064-140.742465 15.021112-25.723871 1.557472-51.498908 2.617617-77.260641 2.948145-30.970362 0.399089-61.948911 0.210801-92.934622-0.343831-41.199331-0.737804-82.296331-2.639107-123.32784-6.330172-31.351032-2.820232-62.61406-6.411013-93.684706-11.437493-10.603499-1.715061-20.857027-4.861728-29.420053-12.034081-10.220782-8.56098-13.870916-20.214391-15.760962-32.691563-0.448208-2.957355-1.191128-4.544503-4.586458-4.403287-14.234189 0.599657-28.442796-1.280156-40.901549-0.567935-8.986675 0-16.187681 0.033769-23.390733-0.014326-3.434216-0.022513-4.814656 1.570775-4.581342 4.975315 1.130753 16.607236 3.39226 33.024138 9.461489 48.622394 9.41237 24.194028 25.675776 41.062208 51.387367 48.202838 23.473621 6.520507 47.39852 10.467399 71.448262 13.755282 47.444569 6.486738 95.17771 9.93221 142.937456 13.021571 33.42732 2.162246 66.919109 2.483564 100.382245 2.787486 34.640961 0.315178 69.301366-0.215918 103.902418-2.51631 19.200294-1.277086 38.442544-1.984191 57.628512-3.433192 29.363771-2.220574 58.690704-4.937452 87.902002-8.738012 27.243481-3.544733 54.333466-7.751544 80.871889-15.168468 23.989367-6.705726 39.436174-22.560832 49.134047-44.646849 7.095605-16.150842 9.215896-33.477462 10.764158-50.879807C893.950574 700.04684 891.710556 698.755428 887.342062 698.827059z"}),t("path",{d:"M736.938564 509.999436c17.520025-48.677653 35.057447-97.351212 52.524261-146.049331 2.910283-8.110725 0.245593-11.875468-8.311293-11.911284-17.919115-0.070608-35.83823-0.061398-53.760414 0.005117-6.867408 0.024559-8.366551 1.14508-10.451026 7.762801-6.592139 20.920472-13.170974 41.84606-19.62292 62.811558-4.418636 14.366196-8.614192 28.800953-13.265118 44.397163-0.754177-2.601244-1.13894-3.867074-1.493004-5.14109-9.462512-34.220383-20.275789-68.031443-30.944779-101.884458-2.089591-6.628978-3.789303-7.906064-10.413164-7.934716-18.253736-0.080841-36.509519-0.106424-54.765301 0.008186-7.816013 0.049119-10.589173 4.246721-7.964392 11.501962 2.506077 6.928806 5.021364 13.852496 7.519254 20.784372 16.96437 47.104831 33.507138 94.369298 51.092655 141.241838 7.158027 19.071358 11.564383 37.96773 10.707876 58.560744-1.101077 26.414603-0.300852 52.912094-0.243547 79.373769 0.01842 9.104355 2.288113 11.293207 11.235902 11.299347 16.916275 0.011256 33.833573 0.011256 50.747801 0 9.090029-0.00614 10.541077-1.440815 10.543124-10.457166 0.010233-33.830503 0.013303-67.662029-0.008186-101.493555-0.002047-3.365654 0.174985-6.655584 1.350764-9.881045C726.634894 538.679639 731.779054 524.33698 736.938564 509.999436z"}),t("path",{d:"M537.833877 352.018356c-16.417925-0.013303-32.833803-0.01228-49.251727 0-10.070356 0.00614-12.033058 1.969864-12.036128 12.05557-0.008186 49.755194-0.002047 99.510388-0.002047 149.265582 0.002047 50.258661-0.01228 100.516298 0.013303 150.774959 0.005117 8.498558 2.267647 10.697643 10.760065 10.708899 16.918321 0.01842 33.838689 0.010233 50.760081 0.002047 9.859555-0.002047 11.799744-1.90028 11.80486-11.689227 0.016373-31.327496 0.008186-62.656015 0.008186-93.982488-0.00307-68.350714 0.005117-136.702452-0.011256-205.053166C549.877167 354.037339 547.832601 352.024495 537.833877 352.018356z"}),t("path",{d:"M883.827005 352.023472c-16.914228-0.030699-33.82948-0.021489-50.743708-0.005117-9.078773 0.00921-10.911514 1.826602-10.914584 10.847046-0.008186 50.242288-0.00307 100.484575-0.00307 150.726863 0 50.41011-0.005117 100.818173 0.00614 151.228283 0.002047 8.209986 1.771343 9.981329 10.066263 9.996678 17.247826 0.031722 34.498722 0.021489 51.749618 0.00614 8.5487-0.008186 10.667967-2.073218 10.667967-10.706853 0.021489-100.483552 0.021489-200.969151 0.00307-301.452703C894.655631 354.217441 892.406404 352.040868 883.827005 352.023472z"}),t("path",{d:"M134.55095 674.761967c18.925025 0.115634 37.85005 0.044002 56.776098 0.039909 4.668323-0.002047 7.105838-2.518357 7.603165-6.992251 0.223081-1.988284 0.166799-4.01443 0.166799-6.021134 0.008186-33.330106 0.00614-66.659189 0.00614-99.988272 0-34.166147 0.016373-68.332295-0.013303-102.499465-0.005117-8.292873-1.730411-9.959839-10.069333-9.969049-17.417695-0.017396-34.836413-0.016373-52.254108 0-8.673543 0.00921-10.1645 1.51961-10.1645 10.3006-0.007163 39.86187-0.005117 79.722716-0.002047 119.583562 0 28.806069-0.01842 57.613162 0.01842 86.421278C126.626467 672.235424 128.66694 674.725128 134.55095 674.761967z"}),t("path",{d:"M126.644887 417.044348c0.062422 5.426593 2.654456 8.195659 7.976672 8.227382 18.591427 0.113587 37.181831 0.115634 55.773258 0 5.990434-0.037862 8.612145-2.683109 8.647961-8.694009 0.109494-18.591427 0.109494-37.182854 0-55.774281-0.033769-6.0416-2.622734-8.68173-8.613168-8.719592-18.424628-0.11768-36.848233-0.125867-55.270814 0.014326-6.16235 0.046049-8.478092 2.577708-8.53335 8.673543-0.080841 9.210779-0.021489 18.423605-0.01842 27.635407C126.610094 397.951501 126.530276 407.498948 126.644887 417.044348z"})])]),t("p",null,"爱奇艺")],-1),_1={class:"action_button"},a1=t("div",{class:"icon"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M174.336 768l-119.168 119.168a42.666667 42.666667 0 0 0 60.330667 60.330667L234.666667 828.330667l119.168 119.168a42.666667 42.666667 0 0 0 60.330666-60.330667L294.997333 768l119.168-119.168a42.666667 42.666667 0 0 0-60.330666-60.330667L234.666667 707.669333l-119.168-119.168a42.666667 42.666667 0 0 0-60.330667 60.330667L174.336 768zM768 469.333333c-117.824 0-213.333333-95.509333-213.333333-213.333333S650.176 42.666667 768 42.666667s213.333333 95.509333 213.333333 213.333333-95.509333 213.333333-213.333333 213.333333z m0-85.333333a128 128 0 1 0 0-256 128 128 0 0 0 0 256zM554.666667 661.546667c0-59.093333 47.68-106.88 106.88-106.88h212.906666c59.093333 0 106.88 47.68 106.88 106.88v212.906666c0 59.093333-47.68 106.88-106.88 106.88h-212.906666A106.730667 106.730667 0 0 1 554.666667 874.453333v-212.906666z m85.333333 0v212.906666c0 12.032 9.536 21.546667 21.546667 21.546667h212.906666c12.032 0 21.546667-9.536 21.546667-21.546667v-212.906666c0-12.032-9.536-21.546667-21.546667-21.546667h-212.906666c-12.032 0-21.546667 9.536-21.546667 21.546667zM183.829333 109.888c36.117333-61.162667 108.245333-61.248 144.426667 0l126.208 213.653333c35.733333 60.522667 3.52 124.437333-66.816 124.437334H124.437333c-70.613333 0-102.634667-63.765333-66.816-124.437334L183.829333 109.909333zM133.653333 362.666667H378.453333l-122.410666-207.232L133.653333 362.666667z"})])],-1),c1={class:"text"},l1={class:"movie_wiki"},n1=["href"],d1=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M687.8 607.5H339.7c37.4 62.9 71.5 130.3 102.1 202.1h142.1c43.6-68.2 78.2-135.6 103.9-202.1z m41.7-76.7V381.5H302v149.4h427.5z m173.1 356H121.4v-77.1h233.7c-28.6-62.9-58.9-117.3-90.7-163.1l60.1-39H219.2V303h593.6v304.5H702.3l60.1 39.9c-28.4 62.9-57.9 117-88.6 162.2h228.8v77.2z m-17.1-673.3H143.7v-76.2h741.8v76.2z"})])],-1),h1=t("p",null,"搜索豆瓣",-1),m1=[d1,h1],v1=["href"],r1=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M599.713331 455.428571v104q0 2.285714 0.285715 8.571429t0 8.571429l-0.857143 6.857142-2 6.571429-3.714286 4.285714-6.285714 3.142857-9.142857 0.857143V421.714286q5.142857 0 9.142857 0.571428t6.285714 2.857143 3.714286 3.142857 2 5.428572 0.571428 6V455.428571z m180.571429 54.857143v69.142857q0 0.571429 0.285714 7.142858t0 8.857142-1.428571 6.571429-4.285714 6-7.714286 1.714286q-5.142857 0-8-5.142857-2.285714-5.714286-2.285714-94.285715v-14l0.857142-4.857143 2-4 2.857143-3.142857 4.571429-0.857143q3.428571 0 5.714286 0.857143t3.714285 2.571429 2.285715 3.428571 1.142857 4.857143 0.285714 4.571429V510.285714zM175.713331 645.142857h69.714286V375.428571H175.713331v269.714286z m248 0h60.571429V375.428571H393.427617l-16 126.285715q-11.428571-84.571429-18.285714-126.285715H268.856189v269.714286h61.142857V466.857143l25.714285 178.285714h43.428572l24.571428-182.285714v182.285714z m242.857143-174.285714q0-38.285714-2.857143-51.428572-1.714286-9.142857-6.285714-16.285714t-9.714286-11.714286-14.285714-8-15.142857-4.857142-17.714286-2.285715-16.571428-0.857143H508.28476v269.714286h32q96.571429 0.571429 112.571429-14t14.285714-103.142857q-0.571429-35.428571-0.571429-57.142857z m181.142857 112.571428V507.428571q0-16.571429-1.142857-25.714285t-5.428571-19.142857-14-14.285715-26.285714-4.285714q-26.285714 0-44 19.428571V375.428571h-66.857143v269.714286h62.857143l4-17.142857q17.142857 20.571429 44 20.571429 28.571429 0 37.714285-17.428572t9.142857-47.714286z m102.857143-418.857142v694.857142q0 37.714286-26.857143 64.571429t-64.571428 26.857143H164.28476q-37.714286 0-64.571429-26.857143T72.856189 859.428571V164.571429q0-37.714286 26.857142-64.571429t64.571429-26.857143h694.857143q37.714286 0 64.571428 26.857143t26.857143 64.571429z"})])],-1),w1=t("p",null,"Search in IMDb",-1),g1=[r1,w1],p1=["href"],u1=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"200 200 624 624",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M432.49 410.61V590.3l-44.86-.06V479l-43.31 51.29-42.43-52.44-.43 112.75H256V410.65h47l39.79 54.29 43-54.31zm184.06 44.14.53 135.15h-50.45l-.17-61.25h-59.73c1.49 10.65 4.48 27 8.9 38 3.31 8.13 6.36 16 12.44 24.06l-36.37 24c-7.45-13.57-13.27-28.52-18.73-44.42a198.31 198.31 0 0 1-10.82-46.49c-1.81-16-2.07-31.38 2.28-47.19a83.37 83.37 0 0 1 24.77-39.81c6.68-6.25 16-10.67 23.47-14.66s15.85-5.63 23.62-7.66a158 158 0 0 1 25.41-3.9c8.49-.73 23.62-1.41 51-.6l11.63 37.31h-58.78c-12.65.17-18.73 0-28.61 4.46a47.7 47.7 0 0 0-27.26 41l56.81.7.81-38.61h49.26zM701.72 410v141.35L768 552l-9.17 37.87H656.28V409.33z"})])],-1),k1=t("p",null,"Search in MyAnimeList",-1),x1=[u1,k1],f1=["href"],b1=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M853.333333 981.333333H170.666667c-72.533333 0-128-55.466667-128-128V384c0-72.533333 55.466667-128 128-128h682.666666c72.533333 0 128 55.466667 128 128v469.333333c0 72.533333-55.466667 128-128 128zM170.666667 341.333333c-25.6 0-42.666667 17.066667-42.666667 42.666667v469.333333c0 25.6 17.066667 42.666667 42.666667 42.666667h682.666666c25.6 0 42.666667-17.066667 42.666667-42.666667V384c0-25.6-17.066667-42.666667-42.666667-42.666667H170.666667z"}),t("path",{d:"M512 341.333333c-12.8 0-21.333333-4.266667-29.866667-12.8l-213.333333-213.333333c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0L512 238.933333l183.466667-183.466666c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733333l-213.333333 213.333333c-8.533333 8.533333-17.066667 12.8-29.866667 12.8z"})])],-1),z1=t("p",null,"搜索 Bangumi",-1),M1=[b1,z1],y1=["href"],V1=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M184.081688 539.606474c111.325025-23.971136 95.969849-157.134634 92.813507-186.224162-5.459618-44.78593-58.264362-123.182633-129.836543-116.86995-89.998392 7.933508-103.135598 138.196583-103.135598 138.196584-12.241487 60.141106 29.089528 188.783357 140.158634 164.854874m206.655076-223.503116c61.420704 0 111.069106-70.804422 111.069105-158.243618 0-87.012664-49.477789-157.817086-110.898492-157.817086S279.539698 70.420543 279.539698 157.859739s49.904322 158.243618 111.325025 158.243619m264.748825 10.45005c82.320804 11.089849 134.869628-76.77588 145.532945-143.314975 10.663317-66.112563-42.653266-143.314975-100.661709-156.537488-58.434975-13.478432-130.518995 79.932221-137.77005 140.755779-7.677588 74.643216 10.663317 148.8599 92.557588 159.395257M981.185931 438.688845c0-31.819337-26.146452-127.661226-124.121006-127.661226-97.889246 0-111.325025 90.424925-111.325025 154.404824 0 60.994171 5.033085 145.874171 127.32 143.314976 121.775076-2.985729 108.467257-138.196583 108.467257-170.186534M857.491458 717.470595s-127.32-98.529045-201.579337-204.735679c-100.661709-156.836061-243.763418-92.984121-291.492423-13.478432-47.771658 80.316101-121.988342 130.604302-132.438392 144.04008-10.663317 13.222513-153.551759 90.424925-121.732423 231.180704 31.98995 140.755779 143.314975 138.196583 143.314976 138.196584s81.894272 8.104121 177.437588-13.222513 177.437588 5.118392 177.437588 5.118392 222.095558 74.643216 283.558916-68.671759c60.738251-143.741508-34.549146-217.958191-34.549146-217.958191"})])],-1),q1=t("p",null,"搜索百度百科",-1),C1=[V1,q1],H1=["href"],B1=t("div",{class:"wiki_img_box"},[t("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M184.081688 539.606474c111.325025-23.971136 95.969849-157.134634 92.813507-186.224162-5.459618-44.78593-58.264362-123.182633-129.836543-116.86995-89.998392 7.933508-103.135598 138.196583-103.135598 138.196584-12.241487 60.141106 29.089528 188.783357 140.158634 164.854874m206.655076-223.503116c61.420704 0 111.069106-70.804422 111.069105-158.243618 0-87.012664-49.477789-157.817086-110.898492-157.817086S279.539698 70.420543 279.539698 157.859739s49.904322 158.243618 111.325025 158.243619m264.748825 10.45005c82.320804 11.089849 134.869628-76.77588 145.532945-143.314975 10.663317-66.112563-42.653266-143.314975-100.661709-156.537488-58.434975-13.478432-130.518995 79.932221-137.77005 140.755779-7.677588 74.643216 10.663317 148.8599 92.557588 159.395257M981.185931 438.688845c0-31.819337-26.146452-127.661226-124.121006-127.661226-97.889246 0-111.325025 90.424925-111.325025 154.404824 0 60.994171 5.033085 145.874171 127.32 143.314976 121.775076-2.985729 108.467257-138.196583 108.467257-170.186534M857.491458 717.470595s-127.32-98.529045-201.579337-204.735679c-100.661709-156.836061-243.763418-92.984121-291.492423-13.478432-47.771658 80.316101-121.988342 130.604302-132.438392 144.04008-10.663317 13.222513-153.551759 90.424925-121.732423 231.180704 31.98995 140.755779 143.314975 138.196583 143.314976 138.196584s81.894272 8.104121 177.437588-13.222513 177.437588 5.118392 177.437588 5.118392 222.095558 74.643216 283.558916-68.671759c60.738251-143.741508-34.549146-217.958191-34.549146-217.958191"})])],-1),L1=t("p",null,"访问百度百科词条",-1),S1=[B1,L1],j1=["href"],D1=t("div",{class:"wiki_img_box"},[t("p",null,"萌")],-1),P1=t("p",null,"搜索萌娘百科",-1),R1=[D1,P1],A1=["href"],N1=t("div",{class:"wiki_img_box"},[t("p",null,"萌")],-1),E1=t("p",null,"访问萌娘百科词条",-1),F1=[N1,E1],I1={class:"movie_detail_main content"},K1={key:0,class:"section"},T1=t("h2",{class:"section_title"},"简介",-1),U1={class:"content"};function G1(s,v,e,r,o,i){const w=d("Rate"),h=d("Dropdown"),x=d("CommunityPost");return _(),c("div",H,[t("div",B,[t("div",L,[t("div",{class:"movie_detail_bg_item",style:g({"background-image":"url("+e.movie_data.cover+")"})},null,4)]),t("div",S,[t("div",j,[t("div",{class:"img",style:g({"background-image":"url("+e.movie_data.cover+")"})},P,4)]),t("div",R,[t("div",A,[t("div",N,[t("h1",null,a(e.movie_data.title),1),e.movie_data.title_t&&i.display_json_text(e.movie_data.title_t)?(_(),c("h2",E,a(i.display_json_text(e.movie_data.title_t)),1)):l("",!0),i.title_t_second&&i.title_t_second!=i.display_json_text(e.movie_data.title_t)?(_(),c("h2",F,a(i.title_t_second),1)):l("",!0)]),t("div",I,[t("div",K,[n(w,{rate:e.movie_data.rate},null,8,["rate"]),e.movie_data.publish_date?(_(),c("div",T,a(e.movie_data.publish_date),1)):l("",!0),e.movie_data.region?(_(),c("div",U,a(s.$text("regions."+e.movie_data.region)),1)):l("",!0),e.movie_data.type?(_(),c("div",G,a(s.$text("movie_type."+e.movie_data.type)),1)):l("",!0)])]),t("div",J,[n(h,{width:260},{dropdown:m(()=>[t("div",Q,[t("a",{href:"https://search.bilibili.com/all?keyword="+i.search_name,target:"_blank",class:"movie_wiki_item"},Z,8,W),t("a",{href:"https://acg.gamer.com.tw/",target:"_blank",class:"movie_wiki_item"},i1,8,$),s1,o1])]),default:m(()=>[O]),_:1}),n(h,{width:260},{dropdown:m(()=>[t("div",l1,[t("a",{href:"https://www.douban.com/search?q="+e.movie_data.title,target:"_blank",class:"movie_wiki_item"},m1,8,n1),t("a",{href:"https://www.imdb.com/find/?q="+e.movie_data.title,target:"_blank",class:"movie_wiki_item"},g1,8,v1),t("a",{href:"https://myanimelist.net/search/all?q="+e.movie_data.title+"&cat=all",target:"_blank",class:"movie_wiki_item"},x1,8,p1),t("a",{href:"https://bgm.tv/subject_search/"+e.movie_data.title.replaceAll("!","")+"?cat=2",target:"_blank",class:"movie_wiki_item"},M1,8,f1),t("a",{href:"https://baike.baidu.com/search?word="+i.search_name,target:"_blank",class:"movie_wiki_item"},C1,8,y1),t("a",{href:"https://baike.baidu.com/item/"+i.search_name,target:"_blank",class:"movie_wiki_item"},S1,8,H1),t("a",{href:"https://zh.moegirl.org.cn/Special:Search/"+i.search_name,target:"_blank",class:"movie_wiki_item"},R1,8,j1),t("a",{href:"https://zh.moegirl.org.cn/"+i.search_name,target:"_blank",class:"movie_wiki_item"},F1,8,A1)])]),default:m(()=>[t("div",_1,[a1,t("p",c1,a(s.$text("archive.wiki_rate")),1)])]),_:1})])])])])]),t("div",I1,[i.display_json_text(e.movie_data.intro_t)?(_(),c("div",K1,[T1,t("p",null,a(i.display_json_text(e.movie_data.intro_t)),1)])):l("",!0)]),t("div",U1,[n(x,{post_id:"archive/movies/"+e.movie_data.movie_id},null,8,["post_id"])])])}const J1=u(C,[["render",G1]]),O1={components:{MovieDetail:J1,Placeholder:k},async beforeRouteEnter(s,v,e){const r=await p("/archive/get_movie_detail.php",{movie_id:s.params.id});e(o=>o.set_movie_data(r))},async beforeRouteUpdate(s,v){const e=await p("/archive/get_movie_detail.php",{movie_id:s.params.id});this.set_movie_data(e)},data(){return{movie_data:null,not_found:!1}},methods:{set_movie_data(s){s.status=="success"?(this.movie_data=s.data,document.title=this.movie_data.title+" - Kloudy Shape"):(this.movie_data=null,this.not_found=!0)}}};function Q1(s,v,e,r,o,i){const w=d("MovieDetail"),h=d("Placeholder");return _(),c(M,null,[o.movie_data?(_(),z(w,{key:0,movie_data:o.movie_data},null,8,["movie_data"])):l("",!0),n(h,{loading:!o.movie_data&&!o.not_found,error:!o.movie_data&&o.not_found,error_title:s.$text("page_not_found")},null,8,["loading","error","error_title"])],64)}const h6=u(O1,[["render",Q1]]);export{h6 as default};

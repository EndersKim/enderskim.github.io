import{j as _,G as c,o as t,d as n,g as p,a4 as i,e as u,v as l,p as y,k as r}from"./index-1cda587c.js";import{_ as m}from"./AccountPlaceholder-63233d46.js";const d={class:"PropertyList"},f=u("h2",{class:"section_title"},"全部持有物",-1),h={__name:"PropertyList",setup(o){const e=_({loading:!0});c([{property_id:1,property_name:"房子",property_count:1}]),s();async function s(){e.loading=!1}return(a,k)=>(t(),n("div",d,[f,p(i,{empty:!0,empty_title:a.$text("account.no_property")},null,8,["empty_title"])]))}},x={__name:"property",setup(o){const e=l();return(s,a)=>y(e).active_character?(t(),r(h,{key:0})):(t(),r(m,{key:1}))}};export{x as default};

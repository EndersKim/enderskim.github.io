import{B as s}from"./BlogArticlesList-7b0a1620.js";import{_ as i}from"./PageTitle-e2d4c141.js";import{_ as c}from"./BlogCategoriesSmall-9308a93d.js";import{a5 as l,a1 as n,o as a,d as m,g as r,k as p,e as _}from"./index-1cda587c.js";import"./Pagination.vue_vue_type_style_index_0_lang-2c238ca0.js";import"./More-bcff1299.js";import"./ArticleItemMiddle-b357f279.js";import"./ArrowShape-191b3b9e.js";/* empty css                                                   *//* empty css                                                  */const u={class:"content"},g=_("div",{style:{height:"40px"}},null,-1),j={__name:"category_articles",setup(d){const t=l(),e=n(()=>{if(t.params.id)return t.params.id.join("/")});return(o,f)=>(a(),m("div",u,[r(i,{title:o.$text("nav.blog.categories."+e.value),parent:{title:o.$text("nav.blog.categories"),link:"/blog/categories"}},null,8,["title","parent"]),r(c),(a(),p(s,{item_size:"large",category:e.value,key:e.value},null,8,["category"])),g]))}};export{j as default};

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5df68538"],{1799:function(e,t,c){"use strict";var a=c("7a23"),o={"aria-label":"Page navigation example"},r={class:"pagination"},n=Object(a["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(a["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function d(e,t,c,d,s,l){return Object(a["openBlock"])(),Object(a["createBlock"])("nav",o,[Object(a["createVNode"])("ul",r,[Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_pre}]},[Object(a["createVNode"])("a",{onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(t){return e.$emit("page-change",c.page.current_page-1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Previous"},[n])],2),(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(c.page.total_pages,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])("li",{class:[{active:t===c.page.current_page},"page-item"],key:t},[Object(a["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(a["withModifiers"])((function(c){return e.$emit("page-change",t)}),["prevent"])},Object(a["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(a["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_next}]},[Object(a["createVNode"])("a",{onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(t){return e.$emit("page-change",c.page.current_page+1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Next"},[i])],2)])])}var s={props:["page"]};s.render=d;t["a"]=s},"1dde":function(e,t,c){var a=c("d039"),o=c("b622"),r=c("2d00"),n=o("species");e.exports=function(e){return r>=51||!a((function(){var t=[],c=t.constructor={};return c[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"341e":function(e,t,c){"use strict";c("58df")},"4de4":function(e,t,c){"use strict";var a=c("23e7"),o=c("b727").filter,r=c("1dde"),n=r("filter");a({target:"Array",proto:!0,forced:!n},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"58df":function(e,t,c){},8418:function(e,t,c){"use strict";var a=c("c04e"),o=c("9bf2"),r=c("5c6c");e.exports=function(e,t,c){var n=a(t);n in e?o.f(e,n,r(0,c)):e[n]=c}},"99af":function(e,t,c){"use strict";var a=c("23e7"),o=c("d039"),r=c("e8b5"),n=c("861d"),i=c("7b0b"),d=c("50c4"),s=c("8418"),l=c("65f0"),b=c("1dde"),u=c("b622"),p=c("2d00"),f=u("isConcatSpreadable"),g=9007199254740991,j="Maximum allowed index exceeded",O=p>=51||!o((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),h=b("concat"),v=function(e){if(!n(e))return!1;var t=e[f];return void 0!==t?!!t:r(e)},m=!O||!h;a({target:"Array",proto:!0,forced:m},{concat:function(e){var t,c,a,o,r,n=i(this),b=l(n,0),u=0;for(t=-1,a=arguments.length;t<a;t++)if(r=-1===t?n:arguments[t],v(r)){if(o=d(r.length),u+o>g)throw TypeError(j);for(c=0;c<o;c++,u++)c in r&&s(b,u,r[c])}else{if(u>=g)throw TypeError(j);s(b,u++,r)}return b.length=u,b}})},e6dc:function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o=Object(a["withScopeId"])("data-v-7ad3fc42");Object(a["pushScopeId"])("data-v-7ad3fc42");var r={class:"container"},n={style:{"--bs-breadcrumb-divider":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")"},"aria-label":"breadcrumb",class:"mt-3"},i={class:"breadcrumb"},d={class:"breadcrumb-item"},s=Object(a["createTextVNode"])("首頁"),l=Object(a["createVNode"])("li",{class:"breadcrumb-item active","aria-current":"page"}," 產品總覽 ",-1),b=Object(a["createVNode"])("h1",{class:"mt-3 mb-5 border-bottom pb-3 text-start"},"產品總覽",-1),u={class:"container"},p={class:"row"},f={class:"col-md-3"},g={class:"btn-group-vertical w-100",role:"group","aria-label":"Basic radio toggle button group"},j=Object(a["createVNode"])("label",{class:"btn-list border-0 btn btn-outline-secondary py-3",for:"btnradio1"},"全部",-1),O=Object(a["createVNode"])("label",{class:"btn-list border-0 btn btn-outline-secondary py-3",for:"btnradio2"},"慢跑鞋",-1),h=Object(a["createVNode"])("label",{class:"btn-list border-0 btn btn-outline-secondary  py-3",for:"btnradio3"},"休閒鞋",-1),v={class:"col-md-9"},m={class:"row"},N={class:"card"},V={class:"card-body"},k={class:"card-title text-dark"},y={class:"card-body p-0"},w={class:"mt-4 text-secondary"},x={class:"d-flex justify-content-center mt-5"};Object(a["popScopeId"])();var C=o((function(e,t,c,C,B,L){var F=Object(a["resolveComponent"])("router-link"),_=Object(a["resolveComponent"])("loading"),P=Object(a["resolveComponent"])("Pagination"),M=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("nav",n,[Object(a["createVNode"])("ol",i,[Object(a["createVNode"])("li",d,[Object(a["createVNode"])(F,{class:"text-decoration-none",to:"/"},{default:o((function(){return[s]})),_:1})]),l])]),b]),Object(a["createVNode"])("div",u,[Object(a["createVNode"])("div",p,[Object(a["createVNode"])("div",f,[Object(a["createVNode"])("div",g,[Object(a["createVNode"])("input",{onClick:t[1]||(t[1]=function(e){return L.categoryFilter("all")}),type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""}),j,Object(a["createVNode"])("input",{onClick:t[2]||(t[2]=function(e){return L.categoryFilter("慢跑鞋")}),type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off"}),O,Object(a["createVNode"])("input",{onClick:t[3]||(t[3]=function(e){return L.categoryFilter("休閒鞋")}),type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3",autocomplete:"off"}),h])]),Object(a["createVNode"])("div",v,[Object(a["createVNode"])(_,{active:B.isLoading,"onUpdate:active":t[4]||(t[4]=function(e){return B.isLoading=e})},null,8,["active"]),Object(a["createVNode"])("div",m,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(B.products,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"col-md-4 mb-3",key:e.id},[Object(a["createVNode"])("div",N,[Object(a["createVNode"])(F,{to:"/product/".concat(e.id),class:"text-decoration-none"},{default:o((function(){return[Object(a["createVNode"])("div",V,[Object(a["createVNode"])("h5",k,Object(a["toDisplayString"])(e.title),1),Object(a["createVNode"])("div",y,[Object(a["createVNode"])("img",{class:"w-100",src:e.imageUrl,alt:"{{item.id}}"},null,8,["src"]),Object(a["createVNode"])("h3",w,"售價："+Object(a["toDisplayString"])(e.price.toLocaleString()),1)])])]})),_:2},1032,["to"])])])})),128)),Object(a["createVNode"])("div",x,[Object(a["createVNode"])(P,{page:B.pagination,onPageChange:L.getProducts},null,8,["page","onPageChange"])])])])])]),Object(a["createVNode"])(M)],64)})),B=(c("99af"),c("4de4"),c("1799")),L=c("fd2d"),F={components:{Pagination:B["a"],Footer:L["a"]},data:function(){return{products:[],pagination:"",isLoading:!1}},methods:{getProducts:function(e){var t=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/products?page=").concat(e)).then((function(e){e.data.success&&(t.isLoading=!1,t.pagination=e.data.pagination,t.products=e.data.products)}))},categoryFilter:function(e){var t=this;this.products=[],this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/products")).then((function(c){c.data.success&&(t.isLoading=!1,t.products="all"!==e?c.data.products.filter((function(t){return t.category===e})):c.data.products)}))}},created:function(){this.getProducts()}};c("341e");F.render=C,F.__scopeId="data-v-7ad3fc42";t["default"]=F},fd2d:function(e,t,c){"use strict";var a=c("7a23"),o={class:"bg-dark py-3 mt-3"},r={class:"container d-flex justify-content-center"},n={class:"row mb-3"},i={class:"col"},d={class:"d-flex mx-3",style:{width:"10%"}},s=Object(a["createVNode"])("i",{class:"bi bi-instagram pe-2",style:{"font-size":"1.5em",color:"white"}},null,-1),l=Object(a["createVNode"])("span",{class:"align-middle text-white"},"Instagram",-1),b={class:"col"},u={class:"d-flex mx-3",style:{width:"10%"}},p=Object(a["createVNode"])("i",{class:"bi bi-facebook pe-2",style:{"font-size":"1.5em",color:"white"}},null,-1),f=Object(a["createVNode"])("span",{class:"align-middle text-white"},"Facebook",-1),g={class:"col"},j={class:"d-flex mx-3",style:{width:"10%"}},O=Object(a["createVNode"])("i",{class:"bi bi-twitter pe-2",style:{"font-size":"1.5em",color:"white"}},null,-1),h=Object(a["createVNode"])("span",{class:"align-middle text-white"},"Twitter",-1),v=Object(a["createVNode"])("span",{class:"text-white"},"Copyright © 1999-2021 鞋頭物語 All rights reserved.",-1);function m(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("footer",o,[Object(a["createVNode"])("div",r,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])("div",i,[Object(a["createVNode"])("div",d,[s,Object(a["createVNode"])("a",{href:"#",class:"text-decoration-none",onClick:t[1]||(t[1]=Object(a["withModifiers"])((function(){return e.none&&e.none.apply(e,arguments)}),["prevent"]))},[l])])]),Object(a["createVNode"])("div",b,[Object(a["createVNode"])("div",u,[p,Object(a["createVNode"])("a",{href:"#",class:"text-decoration-none",onClick:t[2]||(t[2]=Object(a["withModifiers"])((function(){return e.none&&e.none.apply(e,arguments)}),["prevent"]))},[f])])]),Object(a["createVNode"])("div",g,[Object(a["createVNode"])("div",j,[O,Object(a["createVNode"])("a",{href:"#",class:"text-decoration-none",onClick:t[3]||(t[3]=Object(a["withModifiers"])((function(){return e.none&&e.none.apply(e,arguments)}),["prevent"]))},[h])])])])]),v])}const N={};N.render=m;t["a"]=N}}]);
//# sourceMappingURL=chunk-5df68538.eae8b596.js.map
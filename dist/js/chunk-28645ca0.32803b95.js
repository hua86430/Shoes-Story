(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28645ca0"],{"08c0":function(e,t,a){},1799:function(e,t,a){"use strict";var c=a("7a23"),o={"aria-label":"Page navigation example"},r={class:"pagination"},n=Object(c["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(c["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function d(e,t,a,d,s,l){return Object(c["openBlock"])(),Object(c["createBlock"])("nav",o,[Object(c["createVNode"])("ul",r,[Object(c["createVNode"])("li",{class:["page-item",{disabled:!a.page.has_pre}]},[Object(c["createVNode"])("a",{onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(t){return e.$emit("page-change",a.page.current_page-1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Previous"},[n])],2),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.page.total_pages,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:[{active:t===a.page.current_page},"page-item"],key:t},[Object(c["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(c["withModifiers"])((function(a){return e.$emit("page-change",t)}),["prevent"])},Object(c["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(c["createVNode"])("li",{class:["page-item",{disabled:!a.page.has_next}]},[Object(c["createVNode"])("a",{onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(t){return e.$emit("page-change",a.page.current_page+1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Next"},[i])],2)])])}var s={props:["page"]};s.render=d;t["a"]=s},"1dde":function(e,t,a){var c=a("d039"),o=a("b622"),r=a("2d00"),n=o("species");e.exports=function(e){return r>=51||!c((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"4de4":function(e,t,a){"use strict";var c=a("23e7"),o=a("b727").filter,r=a("1dde"),n=r("filter");c({target:"Array",proto:!0,forced:!n},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},8418:function(e,t,a){"use strict";var c=a("c04e"),o=a("9bf2"),r=a("5c6c");e.exports=function(e,t,a){var n=c(t);n in e?o.f(e,n,r(0,a)):e[n]=a}},"8cda":function(e,t,a){"use strict";a("08c0")},"99af":function(e,t,a){"use strict";var c=a("23e7"),o=a("d039"),r=a("e8b5"),n=a("861d"),i=a("7b0b"),d=a("50c4"),s=a("8418"),l=a("65f0"),b=a("1dde"),u=a("b622"),p=a("2d00"),v=u("isConcatSpreadable"),g=9007199254740991,f="Maximum allowed index exceeded",h=p>=51||!o((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),j=b("concat"),O=function(e){if(!n(e))return!1;var t=e[v];return void 0!==t?!!t:r(e)},m=!h||!j;c({target:"Array",proto:!0,forced:m},{concat:function(e){var t,a,c,o,r,n=i(this),b=l(n,0),u=0;for(t=-1,c=arguments.length;t<c;t++)if(r=-1===t?n:arguments[t],O(r)){if(o=d(r.length),u+o>g)throw TypeError(f);for(a=0;a<o;a++,u++)a in r&&s(b,u,r[a])}else{if(u>=g)throw TypeError(f);s(b,u++,r)}return b.length=u,b}})},e6dc:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),o=Object(c["withScopeId"])("data-v-7738d9cd");Object(c["pushScopeId"])("data-v-7738d9cd");var r={class:"container"},n={style:{"--bs-breadcrumb-divider":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")"},"aria-label":"breadcrumb",class:"mt-3"},i={class:"breadcrumb"},d={class:"breadcrumb-item"},s=Object(c["createTextVNode"])("Home"),l=Object(c["createVNode"])("li",{class:"breadcrumb-item active","aria-current":"page"}," Products ",-1),b=Object(c["createVNode"])("h1",{class:"mt-3 mb-5 border-bottom pb-3 text-start"},"Product overview",-1),u={class:"container"},p={class:"row"},v={class:"col-md-3"},g={class:"btn-group-vertical w-100",role:"group","aria-label":"Basic radio toggle button group"},f=Object(c["createVNode"])("label",{class:"btn-list border-0 btn btn-outline-secondary py-3",for:"btnradio1"},"全部",-1),h=Object(c["createVNode"])("label",{class:"btn-list border-0 btn btn-outline-secondary  py-3",for:"btnradio2"},"慢跑鞋",-1),j=Object(c["createVNode"])("label",{class:"btn-list border-0 btn btn-outline-secondary  py-3",for:"btnradio3"},"休閒鞋",-1),O={class:"col-md-9"},m={class:"row"},N={class:"card"},V={class:"card-body"},y={class:"card-title"},w={class:"card-body"},k={class:"mt-3"},x={class:"btn-group",role:"group","aria-label":"Basic example"},C=Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary px-5"}," 產品介紹 ",-1),B=Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary px-5"}," 加入購物車 ",-1),L={class:"d-flex justify-content-center mt-5"},P=Object(c["createStaticVNode"])('<footer class="bg-dark py-3 mt-3" data-v-7738d9cd><div class="container d-flex justify-content-center" data-v-7738d9cd><div class="row mb-3" data-v-7738d9cd><div class="col" data-v-7738d9cd><div class="d-flex mx-3" style="width:10%;" data-v-7738d9cd><i class="bi bi-instagram pe-2" style="font-size:1.5em;color:white;" data-v-7738d9cd></i><a href="#" class="text-decoration-none" data-v-7738d9cd><span class="align-middle text-white" data-v-7738d9cd>Instagram</span></a></div></div><div class="col" data-v-7738d9cd><div class="d-flex mx-3" style="width:10%;" data-v-7738d9cd><i class="bi bi-facebook pe-2" style="font-size:1.5em;color:white;" data-v-7738d9cd></i><a href="#" class="text-decoration-none" data-v-7738d9cd><span class="align-middle text-white" data-v-7738d9cd>Facebook</span></a></div></div><div class="col" data-v-7738d9cd><div class="d-flex mx-3" style="width:10%;" data-v-7738d9cd><i class="bi bi-twitter pe-2" style="font-size:1.5em;color:white;" data-v-7738d9cd></i><a href="#" class="text-decoration-none" data-v-7738d9cd><span class="align-middle text-white" data-v-7738d9cd>Twitter</span></a></div></div></div></div><span class="text-white" data-v-7738d9cd>Copyright © 1999-2021 鞋頭物語 All rights reserved.</span></footer>',1);Object(c["popScopeId"])();var _=o((function(e,t,a,_,S,F){var E=Object(c["resolveComponent"])("router-link"),I=Object(c["resolveComponent"])("loading"),M=Object(c["resolveComponent"])("pagination");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("nav",n,[Object(c["createVNode"])("ol",i,[Object(c["createVNode"])("li",d,[Object(c["createVNode"])(E,{class:"text-decoration-none",to:"/"},{default:o((function(){return[s]})),_:1})]),l])]),b]),Object(c["createVNode"])("div",u,[Object(c["createVNode"])("div",p,[Object(c["createVNode"])("div",v,[Object(c["createVNode"])("div",g,[Object(c["createVNode"])("input",{onClick:t[1]||(t[1]=function(e){return F.categoryFilter("all")}),type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""}),f,Object(c["createVNode"])("input",{onClick:t[2]||(t[2]=function(e){return F.categoryFilter("慢跑鞋")}),type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off"}),h,Object(c["createVNode"])("input",{onClick:t[3]||(t[3]=function(e){return F.categoryFilter("休閒鞋")}),type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3",autocomplete:"off"}),j])]),Object(c["createVNode"])("div",O,[Object(c["createVNode"])(I,{active:S.isLoading,"onUpdate:active":t[4]||(t[4]=function(e){return S.isLoading=e})},null,8,["active"]),Object(c["createVNode"])("div",m,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(S.products,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"col-md-4 mb-3",key:e.id},[Object(c["createVNode"])("div",N,[Object(c["createVNode"])("div",V,[Object(c["createVNode"])("h5",y,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])("div",w,[Object(c["createVNode"])("img",{class:"w-100",src:e.imageUrl,alt:""},null,8,["src"]),Object(c["createVNode"])("h3",k,"售價："+Object(c["toDisplayString"])(e.price.toLocaleString()),1)]),Object(c["createVNode"])("div",x,[Object(c["createVNode"])(E,{to:"/product/".concat(e.id)},{default:o((function(){return[C]})),_:2},1032,["to"]),B])])])])})),128)),Object(c["createVNode"])("div",L,[Object(c["createVNode"])(M,{page:S.pagination,onPageChange:F.getProducts},null,8,["page","onPageChange"])])])])])]),P],64)})),S=(a("99af"),a("4de4"),a("1799")),F={components:{Pagination:S["a"]},data:function(){return{products:[],pagination:"",isLoading:!1}},methods:{getProducts:function(e){var t=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/products?page=").concat(e)).then((function(e){e.data.success&&(t.isLoading=!1,t.pagination=e.data.pagination,t.products=e.data.products)}))},categoryFilter:function(e){var t=this;this.products=[],this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/products")).then((function(a){a.data.success&&(t.isLoading=!1,t.products="all"!==e?a.data.products.filter((function(t){return t.category===e})):a.data.products)}))}},created:function(){this.getProducts()}};a("8cda");F.render=_,F.__scopeId="data-v-7738d9cd";t["default"]=F}}]);
//# sourceMappingURL=chunk-28645ca0.32803b95.js.map
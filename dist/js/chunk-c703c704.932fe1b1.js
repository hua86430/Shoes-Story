(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c703c704"],{"1dde":function(e,t,a){var c=a("d039"),r=a("b622"),o=a("2d00"),n=r("species");e.exports=function(e){return o>=51||!c((function(){var t=[],a=t.constructor={};return a[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},3168:function(e,t,a){},"41f1":function(e,t,a){"use strict";a("3168")},"4de4":function(e,t,a){"use strict";var c=a("23e7"),r=a("b727").filter,o=a("1dde"),n=o("filter");c({target:"Array",proto:!0,forced:!n},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(e,t,a){var c=a("861d"),r=a("e8b5"),o=a("b622"),n=o("species");e.exports=function(e,t){var a;return r(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?c(a)&&(a=a[n],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},8418:function(e,t,a){"use strict";var c=a("c04e"),r=a("9bf2"),o=a("5c6c");e.exports=function(e,t,a){var n=c(t);n in e?r.f(e,n,o(0,a)):e[n]=a}},"99af":function(e,t,a){"use strict";var c=a("23e7"),r=a("d039"),o=a("e8b5"),n=a("861d"),i=a("7b0b"),s=a("50c4"),d=a("8418"),l=a("65f0"),b=a("1dde"),u=a("b622"),p=a("2d00"),f=u("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=p>=51||!r((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),j=b("concat"),O=function(e){if(!n(e))return!1;var t=e[f];return void 0!==t?!!t:o(e)},m=!h||!j;c({target:"Array",proto:!0,forced:m},{concat:function(e){var t,a,c,r,o,n=i(this),b=l(n,0),u=0;for(t=-1,c=arguments.length;t<c;t++)if(o=-1===t?n:arguments[t],O(o)){if(r=s(o.length),u+r>v)throw TypeError(g);for(a=0;a<r;a++,u++)a in o&&d(b,u,o[a])}else{if(u>=v)throw TypeError(g);d(b,u++,o)}return b.length=u,b}})},b727:function(e,t,a){var c=a("0366"),r=a("44ad"),o=a("7b0b"),n=a("50c4"),i=a("65f0"),s=[].push,d=function(e){var t=1==e,a=2==e,d=3==e,l=4==e,b=6==e,u=7==e,p=5==e||b;return function(f,v,g,h){for(var j,O,m=o(f),y=r(m),N=c(v,g,3),V=n(y.length),w=0,x=h||i,k=t?x(f,V):a||u?x(f,0):void 0;V>w;w++)if((p||w in y)&&(j=y[w],O=N(j,w,m),e))if(t)k[w]=O;else if(O)switch(e){case 3:return!0;case 5:return j;case 6:return w;case 2:s.call(k,j)}else switch(e){case 4:return!1;case 7:s.call(k,j)}return b?-1:d||l?l:k}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterOut:d(7)}},e6dc:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),r=Object(c["withScopeId"])("data-v-04c322f2");Object(c["pushScopeId"])("data-v-04c322f2");var o={class:"container"},n={style:{"--bs-breadcrumb-divider":"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")"},"aria-label":"breadcrumb",class:"mt-3"},i={class:"breadcrumb"},s={class:"breadcrumb-item"},d=Object(c["createTextVNode"])("Home"),l=Object(c["createVNode"])("li",{class:"breadcrumb-item active","aria-current":"page"}," Products ",-1),b=Object(c["createVNode"])("h1",{class:"mt-3 mb-5 border-bottom pb-3 text-start"},"Product overview",-1),u={class:"container"},p={class:"row"},f={class:"col-md-3"},v={class:"btn-group-vertical w-100",role:"group","aria-label":"Basic radio toggle button group"},g=Object(c["createVNode"])("label",{class:"btn-list border-0 btn btn-outline-secondary py-3",for:"btnradio1"},"全部",-1),h=Object(c["createVNode"])("label",{class:"btn-list border-0 btn btn-outline-secondary  py-3",for:"btnradio2"},"慢跑鞋",-1),j=Object(c["createVNode"])("label",{class:"btn-list border-0 btn btn-outline-secondary  py-3",for:"btnradio3"},"休閒鞋",-1),O={class:"col-md-9"},m={class:"row"},y={class:"card"},N={class:"card-body"},V={class:"card-title"},w={class:"card-body"},x={class:"mt-3"},k=Object(c["createVNode"])("div",{class:"btn-group",role:"group","aria-label":"Basic example"},[Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary px-5"}," 產品介紹 "),Object(c["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary px-5"}," 加入購物車 ")],-1),C={class:"d-flex justify-content-center mt-5"},B=Object(c["createStaticVNode"])('<footer class="bg-dark py-3 mt-3" data-v-04c322f2><div class="container d-flex justify-content-center" data-v-04c322f2><div class="row mb-3" data-v-04c322f2><div class="col" data-v-04c322f2><div class="d-flex mx-3" style="width:10%;" data-v-04c322f2><i class="bi bi-instagram pe-2" style="font-size:1.5em;color:white;" data-v-04c322f2></i><a href="#" class="text-decoration-none" data-v-04c322f2><span class="align-middle text-white" data-v-04c322f2>Instagram</span></a></div></div><div class="col" data-v-04c322f2><div class="d-flex mx-3" style="width:10%;" data-v-04c322f2><i class="bi bi-facebook pe-2" style="font-size:1.5em;color:white;" data-v-04c322f2></i><a href="#" class="text-decoration-none" data-v-04c322f2><span class="align-middle text-white" data-v-04c322f2>Facebook</span></a></div></div><div class="col" data-v-04c322f2><div class="d-flex mx-3" style="width:10%;" data-v-04c322f2><i class="bi bi-twitter pe-2" style="font-size:1.5em;color:white;" data-v-04c322f2></i><a href="#" class="text-decoration-none" data-v-04c322f2><span class="align-middle text-white" data-v-04c322f2>Twitter</span></a></div></div></div></div><span class="text-white" data-v-04c322f2>Copyright © 1999-2021 鞋頭物語 All rights reserved.</span></footer>',1);Object(c["popScopeId"])();var L=r((function(e,t,a,L,P,S){var _=Object(c["resolveComponent"])("router-link"),A=Object(c["resolveComponent"])("loading"),F=Object(c["resolveComponent"])("pagination");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",o,[Object(c["createVNode"])("nav",n,[Object(c["createVNode"])("ol",i,[Object(c["createVNode"])("li",s,[Object(c["createVNode"])(_,{class:"text-decoration-none",to:"/"},{default:r((function(){return[d]})),_:1})]),l])]),b]),Object(c["createVNode"])("div",u,[Object(c["createVNode"])("div",p,[Object(c["createVNode"])("div",f,[Object(c["createVNode"])("div",v,[Object(c["createVNode"])("input",{onClick:t[1]||(t[1]=function(e){return S.categoryFilter("all")}),type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""}),g,Object(c["createVNode"])("input",{onClick:t[2]||(t[2]=function(e){return S.categoryFilter("慢跑鞋")}),type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off"}),h,Object(c["createVNode"])("input",{onClick:t[3]||(t[3]=function(e){return S.categoryFilter("休閒鞋")}),type:"radio",class:"btn-check",name:"btnradio",id:"btnradio3",autocomplete:"off"}),j])]),Object(c["createVNode"])("div",O,[Object(c["createVNode"])(A,{active:P.isLoading,"onUpdate:active":t[4]||(t[4]=function(e){return P.isLoading=e})},null,8,["active"]),Object(c["createVNode"])("div",m,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(P.products,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"col-md-4 mb-3",key:e.id},[Object(c["createVNode"])("div",y,[Object(c["createVNode"])("div",N,[Object(c["createVNode"])("h5",V,Object(c["toDisplayString"])(e.title),1),Object(c["createVNode"])("div",w,[Object(c["createVNode"])("img",{class:"w-100",src:e.imageUrl,alt:""},null,8,["src"]),Object(c["createVNode"])("h3",x,"售價："+Object(c["toDisplayString"])(e.price.toLocaleString()),1)]),k])])])})),128)),Object(c["createVNode"])("div",C,[Object(c["createVNode"])(F,{page:P.pagination,onPageChange:S.getProducts},null,8,["page","onPageChange"])])])])])]),B],64)})),P=(a("99af"),a("4de4"),a("9062")),S=a.n(P),_=(a("e40d"),{"aria-label":"Page navigation example"}),A={class:"pagination"},F=Object(c["createVNode"])("span",{"aria-hidden":"true"},"«",-1),E=Object(c["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function I(e,t,a,r,o,n){return Object(c["openBlock"])(),Object(c["createBlock"])("nav",_,[Object(c["createVNode"])("ul",A,[Object(c["createVNode"])("li",{class:["page-item",{disabled:!a.page.has_pre}]},[Object(c["createVNode"])("a",{onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(t){return e.$emit("page-change",a.page.current_page-1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Previous"},[F])],2),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.page.total_pages,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{class:[{active:t===a.page.current_page},"page-item"],key:t},[Object(c["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(c["withModifiers"])((function(a){return e.$emit("page-change",t)}),["prevent"])},Object(c["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(c["createVNode"])("li",{class:["page-item",{disabled:!a.page.has_next}]},[Object(c["createVNode"])("a",{onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(t){return e.$emit("page-change",a.page.current_page+1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Next"},[E])],2)])])}var M={props:["page"]};M.render=I;var $=M,z={components:{Pagination:$,Loading:S.a},data:function(){return{products:[],pagination:"",isLoading:!1}},methods:{getProducts:function(e){var t=this;this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/products?page=").concat(e)).then((function(e){e.data.success&&(t.isLoading=!1,t.pagination=e.data.pagination,t.products=e.data.products)}))},categoryFilter:function(e){var t=this;this.products=[],this.isLoading=!0,this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/products")).then((function(a){a.data.success&&(t.isLoading=!1,t.products="all"!==e?a.data.products.filter((function(t){return t.category===e})):a.data.products)}))}},created:function(){this.getProducts()}};a("41f1");z.render=L,z.__scopeId="data-v-04c322f2";t["default"]=z},e8b5:function(e,t,a){var c=a("c6b6");e.exports=Array.isArray||function(e){return"Array"==c(e)}}}]);
//# sourceMappingURL=chunk-c703c704.932fe1b1.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b004169"],{"057f":function(e,t,c){var o=c("fc6a"),a=c("241c").f,r={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return a(e)}catch(t){return n.slice()}};e.exports.f=function(e){return n&&"[object Window]"==r.call(e)?i(e):a(o(e))}},1799:function(e,t,c){"use strict";var o=c("7a23"),a={"aria-label":"Page navigation example"},r={class:"pagination"},n=Object(o["createVNode"])("span",{"aria-hidden":"true"},"«",-1),i=Object(o["createVNode"])("span",{"aria-hidden":"true"},"»",-1);function d(e,t,c,d,l,s){return Object(o["openBlock"])(),Object(o["createBlock"])("nav",a,[Object(o["createVNode"])("ul",r,[Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_pre}]},[Object(o["createVNode"])("a",{onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(t){return e.$emit("page-change",c.page.current_page-1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Previous"},[n])],2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.page.total_pages,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:[{active:t===c.page.current_page},"page-item"],key:t},[Object(o["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(c){return e.$emit("page-change",t)}),["prevent"])},Object(o["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.page.has_next}]},[Object(o["createVNode"])("a",{onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(t){return e.$emit("page-change",c.page.current_page+1)}),["prevent"])),class:"page-link",href:"#","aria-label":"Next"},[i])],2)])])}var l={props:["page"]};l.render=d;t["a"]=l},"4de4":function(e,t,c){"use strict";var o=c("23e7"),a=c("b727").filter,r=c("1dde"),n=r("filter");o({target:"Array",proto:!0,forced:!n},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));c("b64b"),c("a4d3"),c("4de4"),c("e439"),c("159b"),c("dbb4");function o(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function a(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,o)}return c}function r(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?a(Object(c),!0).forEach((function(t){o(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):a(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}},"746f":function(e,t,c){var o=c("428f"),a=c("5135"),r=c("e538"),n=c("9bf2").f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});a(t,e)||n(t,e,{value:r.f(e)})}},a434:function(e,t,c){"use strict";var o=c("23e7"),a=c("23cb"),r=c("a691"),n=c("50c4"),i=c("7b0b"),d=c("65f0"),l=c("8418"),s=c("1dde"),u=s("splice"),b=Math.max,p=Math.min,O=9007199254740991,j="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,o,s,u,f,m,h=i(this),g=n(h.length),v=a(e,g),V=arguments.length;if(0===V?c=o=0:1===V?(c=0,o=g-v):(c=V-2,o=p(b(r(t),0),g-v)),g+c-o>O)throw TypeError(j);for(s=d(h,o),u=0;u<o;u++)f=v+u,f in h&&l(s,u,h[f]);if(s.length=o,c<o){for(u=v;u<g-o;u++)f=u+o,m=u+c,f in h?h[m]=h[f]:delete h[m];for(u=g;u>g-o+c;u--)delete h[u-1]}else if(c>o)for(u=g-o;u>v;u--)f=u+o-1,m=u+c-1,f in h?h[m]=h[f]:delete h[m];for(u=0;u<c;u++)h[u+v]=arguments[u+2];return h.length=g-o+c,s}})},a4d3:function(e,t,c){"use strict";var o=c("23e7"),a=c("da84"),r=c("d066"),n=c("c430"),i=c("83ab"),d=c("4930"),l=c("fdbf"),s=c("d039"),u=c("5135"),b=c("e8b5"),p=c("861d"),O=c("825a"),j=c("7b0b"),f=c("fc6a"),m=c("c04e"),h=c("5c6c"),g=c("7c73"),v=c("df75"),V=c("241c"),N=c("057f"),y=c("7418"),k=c("06cf"),w=c("9bf2"),x=c("d1e7"),U=c("9112"),M=c("6eeb"),z=c("5692"),S=c("f772"),P=c("d012"),$=c("90e3"),C=c("b622"),B=c("e538"),D=c("746f"),_=c("d44e"),T=c("69f3"),I=c("b727").forEach,F=S("hidden"),L="Symbol",E="prototype",Q=C("toPrimitive"),J=T.set,A=T.getterFor(L),R=Object[E],W=a.Symbol,q=r("JSON","stringify"),G=k.f,H=w.f,K=N.f,X=x.f,Y=z("symbols"),Z=z("op-symbols"),ee=z("string-to-symbol-registry"),te=z("symbol-to-string-registry"),ce=z("wks"),oe=a.QObject,ae=!oe||!oe[E]||!oe[E].findChild,re=i&&s((function(){return 7!=g(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(e,t,c){var o=G(R,t);o&&delete R[t],H(e,t,c),o&&e!==R&&H(R,t,o)}:H,ne=function(e,t){var c=Y[e]=g(W[E]);return J(c,{type:L,tag:e,description:t}),i||(c.description=t),c},ie=l?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof W},de=function(e,t,c){e===R&&de(Z,t,c),O(e);var o=m(t,!0);return O(c),u(Y,o)?(c.enumerable?(u(e,F)&&e[F][o]&&(e[F][o]=!1),c=g(c,{enumerable:h(0,!1)})):(u(e,F)||H(e,F,h(1,{})),e[F][o]=!0),re(e,o,c)):H(e,o,c)},le=function(e,t){O(e);var c=f(t),o=v(c).concat(Oe(c));return I(o,(function(t){i&&!ue.call(c,t)||de(e,t,c[t])})),e},se=function(e,t){return void 0===t?g(e):le(g(e),t)},ue=function(e){var t=m(e,!0),c=X.call(this,t);return!(this===R&&u(Y,t)&&!u(Z,t))&&(!(c||!u(this,t)||!u(Y,t)||u(this,F)&&this[F][t])||c)},be=function(e,t){var c=f(e),o=m(t,!0);if(c!==R||!u(Y,o)||u(Z,o)){var a=G(c,o);return!a||!u(Y,o)||u(c,F)&&c[F][o]||(a.enumerable=!0),a}},pe=function(e){var t=K(f(e)),c=[];return I(t,(function(e){u(Y,e)||u(P,e)||c.push(e)})),c},Oe=function(e){var t=e===R,c=K(t?Z:f(e)),o=[];return I(c,(function(e){!u(Y,e)||t&&!u(R,e)||o.push(Y[e])})),o};if(d||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=$(e),c=function(e){this===R&&c.call(Z,e),u(this,F)&&u(this[F],t)&&(this[F][t]=!1),re(this,t,h(1,e))};return i&&ae&&re(R,t,{configurable:!0,set:c}),ne(t,e)},M(W[E],"toString",(function(){return A(this).tag})),M(W,"withoutSetter",(function(e){return ne($(e),e)})),x.f=ue,w.f=de,k.f=be,V.f=N.f=pe,y.f=Oe,B.f=function(e){return ne(C(e),e)},i&&(H(W[E],"description",{configurable:!0,get:function(){return A(this).description}}),n||M(R,"propertyIsEnumerable",ue,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:W}),I(v(ce),(function(e){D(e)})),o({target:L,stat:!0,forced:!d},{for:function(e){var t=String(e);if(u(ee,t))return ee[t];var c=W(t);return ee[t]=c,te[c]=t,c},keyFor:function(e){if(!ie(e))throw TypeError(e+" is not a symbol");if(u(te,e))return te[e]},useSetter:function(){ae=!0},useSimple:function(){ae=!1}}),o({target:"Object",stat:!0,forced:!d,sham:!i},{create:se,defineProperty:de,defineProperties:le,getOwnPropertyDescriptor:be}),o({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:pe,getOwnPropertySymbols:Oe}),o({target:"Object",stat:!0,forced:s((function(){y.f(1)}))},{getOwnPropertySymbols:function(e){return y.f(j(e))}}),q){var je=!d||s((function(){var e=W();return"[null]"!=q([e])||"{}"!=q({a:e})||"{}"!=q(Object(e))}));o({target:"JSON",stat:!0,forced:je},{stringify:function(e,t,c){var o,a=[e],r=1;while(arguments.length>r)a.push(arguments[r++]);if(o=t,(p(t)||void 0!==e)&&!ie(e))return b(t)||(t=function(e,t){if("function"==typeof o&&(t=o.call(this,e,t)),!ie(t))return t}),a[1]=t,q.apply(null,a)}})}W[E][Q]||U(W[E],Q,W[E].valueOf),_(W,L),P[F]=!0},d536:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a=Object(o["createVNode"])("h1",{class:"mt-3 mb-3"},"產品總覽",-1),r={class:"container"},n={class:"d-grid gap-2 d-md-flex justify-content-md-end"},i={class:"table table-hover align-middle mt-4"},d=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",null,[Object(o["createVNode"])("th",{width:"120"}," 分類 "),Object(o["createVNode"])("th",null,"產品名稱"),Object(o["createVNode"])("th",{width:"120"}," 原價 "),Object(o["createVNode"])("th",{width:"120"}," 售價 "),Object(o["createVNode"])("th",{width:"100"}," 是否啟用 "),Object(o["createVNode"])("th",{width:"150"})])],-1),l={class:"btn-group"},s={class:"d-flex justify-content-center mt-5"};function u(e,t,c,u,b,p){var O=Object(o["resolveComponent"])("pagination"),j=Object(o["resolveComponent"])("ProductModal"),f=Object(o["resolveComponent"])("DeleteModal"),m=Object(o["resolveComponent"])("InstockModal");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[a,Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("button",{onClick:t[1]||(t[1]=function(t){return p.openModal("add",e.item)}),class:"btn btn-lg btn-primary"},"新增產品")]),Object(o["createVNode"])("table",i,[d,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(b.products,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:e.id},[Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.category),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.title),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.origin_price),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.price),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.is_enabled?"啟用":"未啟用"),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])("button",{onClick:function(t){return p.openModal("instock",e)},type:"button",class:"btn btn-outline-info btn-sm"}," 查看庫存",8,["onClick"]),Object(o["createVNode"])("button",{onClick:function(t){return p.openModal("edit",e)},type:"button",class:"btn btn-outline-primary btn-sm"}," 編輯 ",8,["onClick"]),Object(o["createVNode"])("button",{onClick:function(t){return p.openModal("delete",e)},type:"button",class:"btn btn-outline-danger btn-sm"}," 刪除 ",8,["onClick"])])])])})),128))])])]),Object(o["createVNode"])("div",s,[Object(o["createVNode"])(O,{page:b.pagination,onPageChange:p.getProducts},null,8,["page","onPageChange"])]),Object(o["createVNode"])(j,{onRefresh:p.getProducts,ref:"modal"},null,8,["onRefresh"]),Object(o["createVNode"])(f,{onDeldata:p.getProducts,ref:"deleteModal"},null,8,["onDeldata"]),Object(o["createVNode"])(m,{onInstockModal:p.getProducts,ref:"instockModal"},null,8,["onInstockModal"])],64)}var b=c("5530"),p=(c("99af"),c("1799")),O={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},j={class:"modal-dialog modal-xl modal-dialog-centered"},f={class:"modal-content border-0"},m=Object(o["createVNode"])("div",{class:"modal-header bg-dark text-white"},[Object(o["createVNode"])("h5",{id:"productModalLabel",class:"modal-title"},[Object(o["createVNode"])("span",null,"新增產品")]),Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),h={class:"modal-body"},g={class:"row"},v={class:"col-sm-4"},V={class:"mb-1"},N={class:"form-group"},y=Object(o["createVNode"])("label",{for:"imageUrl"},"輸入圖片網址",-1),k=Object(o["createVNode"])("div",{class:"m-2 d-block text-center"},"或",-1),w={class:"d-block btn btn-primary text-black mb-4"},x=Object(o["createVNode"])("div",{class:"text-center"},"新增主要圖片",-1),U=Object(o["createVNode"])("div",{class:"text-secondary mb-2"},"多圖新增",-1),M={key:0},z={key:1},S={class:"col-sm-8"},P={class:"form-group"},$=Object(o["createVNode"])("label",{for:"title"},"標題",-1),C={class:"row"},B={class:"form-group col-md-6"},D=Object(o["createVNode"])("label",{for:"category"},"分類",-1),_={class:"form-group col-md-6"},T=Object(o["createVNode"])("label",{for:"unit"},"單位",-1),I={class:"row"},F={class:"form-group col-md-6"},L=Object(o["createVNode"])("label",{for:"origin_price"},"原價",-1),E={class:"form-group col-md-6"},Q=Object(o["createVNode"])("label",{for:"price"},"售價",-1),J=Object(o["createVNode"])("hr",null,null,-1),A={class:"form-group"},R=Object(o["createVNode"])("label",{for:"content"},"說明內容",-1),W={class:"table mt-3"},q={class:"align-middle"},G=Object(o["createVNode"])("th",{scope:"col"},"尺寸",-1),H=Object(o["createVNode"])("th",{scope:"col"},"數量",-1),K={width:"15%",scope:"col"},X={class:"align-middle"},Y=Object(o["createVNode"])("i",{class:"bi bi-trash-fill"},null,-1),Z={class:"form-group"},ee={class:"form-check"},te=Object(o["createVNode"])("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),ce={class:"modal-footer"},oe=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," Close ",-1);function ae(e,t,c,a,r,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",O,[Object(o["createVNode"])("div",j,[Object(o["createVNode"])("div",f,[m,Object(o["createVNode"])("div",h,[Object(o["createVNode"])("div",g,[Object(o["createVNode"])("div",v,[Object(o["createVNode"])("div",V,[Object(o["createVNode"])("div",N,[y,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",placeholder:"請輸入圖片連結","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.productObj.imageUrl=e})},null,512),[[o["vModelText"],r.productObj.imageUrl]])]),k,Object(o["createVNode"])("label",w,[Object(o["createVNode"])("input",{style:{display:"none"},onChange:t[2]||(t[2]=function(e){return n.upload("main",e)}),type:"file",class:"form-control",id:"file",placeholder:"新增圖片"},null,32),x]),Object(o["createVNode"])("img",{class:"img-fluid",src:r.productObj.imageUrl,alt:""},null,8,["src"])]),U,(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.productObj.imagesUrl,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:t},[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"border-0 text-secondary border-bottom border-primary-light\n                  bg-light w-100 p-2 mb-2",placeholder:"請輸入圖片連結","onUpdate:modelValue":function(e){return r.productObj.imagesUrl[t]=e}},null,8,["onUpdate:modelValue"]),[[o["vModelText"],r.productObj.imagesUrl[t]]]),Object(o["createVNode"])("img",{class:"img-fluid mb-2",src:r.productObj.imagesUrl[t]},null,8,["src"])])})),128)),!r.productObj.imagesUrl.length||r.productObj.imagesUrl[r.productObj.imagesUrl.length-1]?(Object(o["openBlock"])(),Object(o["createBlock"])("div",M,[Object(o["createVNode"])("button",{onClick:t[3]||(t[3]=function(){return n.addImage&&n.addImage.apply(n,arguments)}),class:"btn btn-outline-primary btn-sm d-block w-100"}," 新增圖片 ")])):(Object(o["openBlock"])(),Object(o["createBlock"])("div",z,[Object(o["createVNode"])("button",{onClick:t[4]||(t[4]=function(){return n.delImage&&n.delImage.apply(n,arguments)}),class:"btn btn-outline-danger btn-sm d-block w-100"}," 刪除圖片 ")]))]),Object(o["createVNode"])("div",S,[Object(o["createVNode"])("div",P,[$,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.productObj.title=e})},null,512),[[o["vModelText"],r.productObj.title,void 0,{trim:!0}]])]),Object(o["createVNode"])("div",C,[Object(o["createVNode"])("div",B,[D,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.productObj.category=e})},null,512),[[o["vModelText"],r.productObj.category,void 0,{trim:!0}]])]),Object(o["createVNode"])("div",_,[T,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.productObj.unit=e})},null,512),[[o["vModelText"],r.productObj.unit,void 0,{trim:!0}]])])]),Object(o["createVNode"])("div",I,[Object(o["createVNode"])("div",F,[L,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.productObj.origin_price=e})},null,512),[[o["vModelText"],r.productObj.origin_price,void 0,{number:!0}]])]),Object(o["createVNode"])("div",E,[Q,Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.productObj.price=e})},null,512),[[o["vModelText"],r.productObj.price,void 0,{number:!0}]])])]),J,Object(o["createVNode"])("div",A,[R,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":t[10]||(t[10]=function(e){return r.productObj.content=e})},null,512),[[o["vModelText"],r.productObj.content,void 0,{trim:!0}]])]),Object(o["createVNode"])("table",W,[Object(o["createVNode"])("thead",q,[Object(o["createVNode"])("tr",null,[G,H,Object(o["createVNode"])("th",K,[Object(o["createVNode"])("button",{onClick:t[11]||(t[11]=function(){return n.addSize&&n.addSize.apply(n,arguments)}),type:"button",class:"btn btn-sm btn-secondary"}," 新增尺寸 ")])])]),Object(o["createVNode"])("tbody",X,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.productObj.size,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t},[Object(o["createVNode"])("td",null,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"text-center","onUpdate:modelValue":function(e){return r.productObj.size[t].sizeNum=e}},null,8,["onUpdate:modelValue"]),[[o["vModelText"],r.productObj.size[t].sizeNum,void 0,{trim:!0}]])]),Object(o["createVNode"])("td",null,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"text-center",min:"1","onUpdate:modelValue":function(e){return r.productObj.size[t].sizeQty=e}},null,8,["onUpdate:modelValue"]),[[o["vModelText"],r.productObj.size[t].sizeQty,void 0,{trim:!0}]])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("button",{type:"button",class:"btn",onClick:function(e){return n.delSize(t)}},[Y],8,["onClick"])])])})),128))])]),Object(o["createVNode"])("div",Z,[Object(o["createVNode"])("div",ee,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{id:"is_enabled",class:"form-check-input",type:"checkbox",value:r.productObj.is_enabled,"onUpdate:modelValue":t[12]||(t[12]=function(e){return r.productObj.is_enabled=e}),checked:r.productObj.is_enabled},null,8,["value","checked"]),[[o["vModelCheckbox"],r.productObj.is_enabled]]),te])])])])]),Object(o["createVNode"])("div",ce,[oe,Object(o["createVNode"])("button",{onClick:t[13]||(t[13]=function(){return n.updateProduct&&n.updateProduct.apply(n,arguments)}),type:"button",class:"btn btn-primary"}," Update ")])])])],512)}c("a434"),c("b64b");var re=c("7c2b"),ne=c.n(re),ie={data:function(){return{modal:"",productObj:{imagesUrl:[],size:[]},buttomStatus:""}},methods:{delSize:function(e){this.productObj.size.splice(e,1)},addSize:function(){0===this.productObj.size.length&&this.productObj.size.push({}),0!==Object.keys(this.productObj.size[this.productObj.size.length-1]).length&&this.productObj.size.push({})},upload:function(e,t){var c=this,o=t.target.files[0],a=new FormData;a.append("file-to-upload",o),this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/upload"),a).then((function(e){c.productObj.imageUrl=e.data.imageUrl,console.log(e)})).catch((function(e){console.log(e)}))},addImage:function(){""===this.productObj.imagesUrl&&(this.productObj.imagesUrl=[]),""!==this.productObj.imagesUrl[this.productObj.imagesUrl.length-1]&&this.productObj.imagesUrl.push("")},delImage:function(){this.productObj.imagesUrl.splice(this.productObj.imagesUrl.length-1,1)},updateProduct:function(){var e=this;"新增"===this.buttomStatus?this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/product"),{data:this.productObj}).then((function(t){t.data.success?(e.$swal("".concat(t.data.message)),e.$emit("refresh"),e.modal.hide()):e.$swal("".concat(t.data.message))})).catch((function(t){e.$swal("".concat(t.data.message))})):"編輯"===this.buttomStatus&&this.$http.put("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/product/").concat(this.productObj.id),{data:this.productObj}).then((function(t){t.data.success?(e.$swal("".concat(t.data.message)),e.$emit("refresh"),e.modal.hide(),console.log(e.productObj)):e.$swal("".concat(t.data.message))})).catch((function(t){e.$swal("".concat(t.data.message))}))}},mounted:function(){this.modal=new ne.a(this.$refs.modal)}};ie.render=ae;var de=ie,le={class:"modal fade",id:"delProductModal","aria-labelledby":"delProductModalLabel","aria-hidden":"true",ref:"deleteModal",tabindex:"-1"},se={class:"modal-dialog modal-dialog-centered"},ue={class:"modal-content"},be=Object(o["createVNode"])("div",{class:"modal-header bg-danger text-white"},[Object(o["createVNode"])("h5",{class:"modal-title"},"刪除以下商品"),Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),pe={class:"modal-body"},Oe={class:"modal-footer"},je=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function fe(e,t,c,a,r,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",le,[Object(o["createVNode"])("div",se,[Object(o["createVNode"])("div",ue,[be,Object(o["createVNode"])("div",pe,[Object(o["createVNode"])("p",null,Object(o["toDisplayString"])(r.productObj.title),1)]),Object(o["createVNode"])("div",Oe,[je,Object(o["createVNode"])("button",{onClick:t[1]||(t[1]=function(){return n.deleteItem&&n.deleteItem.apply(n,arguments)}),type:"button",class:"btn btn-danger"},"確認刪除")])])])],512)}var me={data:function(){return{modal:"",productObj:{imagesUrl:[]}}},methods:{deleteItem:function(){var e=this;this.$http.delete("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/product/").concat(this.productObj.id)).then((function(t){t.data.success&&(e.$emit("deldata"),e.$swal(t.data.message),e.modal.hide())}))}},mounted:function(){this.modal=new ne.a(this.$refs.deleteModal)}};me.render=fe;var he=me,ge={class:"modal fade my-auto",tabindex:"-1",id:"instockStatus",ref:"instock"},ve={class:"modal-dialog modal-dialog-centered modal-lg"},Ve={class:"modal-content"},Ne={class:"modal-header"},ye={class:"modal-title"},ke=Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),we={class:"modal-body"},xe={class:"table"},Ue={class:"align-middle"},Me=Object(o["createVNode"])("th",{scope:"col"},"尺寸",-1),ze=Object(o["createVNode"])("th",{scope:"col"},"數量",-1),Se={width:"15%",scope:"col"},Pe=Object(o["createVNode"])("i",{class:"bi bi-trash-fill"},null,-1),$e={class:"modal-footer"},Ce=Object(o["createVNode"])("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal"}," Close ",-1);function Be(e,t,c,a,r,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",ge,[Object(o["createVNode"])("div",ve,[Object(o["createVNode"])("div",Ve,[Object(o["createVNode"])("div",Ne,[Object(o["createVNode"])("h5",ye,Object(o["toDisplayString"])(r.productObj.title)+" 庫存狀態",1),ke]),Object(o["createVNode"])("div",we,[Object(o["createVNode"])("table",xe,[Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",Ue,[Me,ze,Object(o["createVNode"])("th",Se,[Object(o["createVNode"])("button",{onClick:t[1]||(t[1]=function(){return n.addSize&&n.addSize.apply(n,arguments)}),type:"button",class:"btn btn-sm btn-secondary"}," 新增尺寸 ")])])]),Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.productObj.size,(function(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:t,class:"align-middle"},[Object(o["createVNode"])("td",null,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"text-center","onUpdate:modelValue":function(e){return r.productObj.size[t].sizeNum=e}},null,8,["onUpdate:modelValue"]),[[o["vModelText"],r.productObj.size[t].sizeNum,void 0,{trim:!0}]])]),Object(o["createVNode"])("td",null,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"text-center",min:"1","onUpdate:modelValue":function(e){return r.productObj.size[t].sizeQty=e}},null,8,["onUpdate:modelValue"]),[[o["vModelText"],r.productObj.size[t].sizeQty,void 0,{trim:!0}]])]),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("button",{type:"button",class:"btn",onClick:function(e){return n.delSize(t)}},[Pe],8,["onClick"])])])})),128))])])]),Object(o["createVNode"])("div",$e,[Ce,Object(o["createVNode"])("button",{onClick:t[2]||(t[2]=function(){return n.instockUpdate&&n.instockUpdate.apply(n,arguments)}),type:"button",class:"btn btn-primary"},"UpDate")])])])],512)}var De={data:function(){return{modal:"",productObj:{}}},methods:{delSize:function(e){this.productObj.size.splice(e,1)},addSize:function(){0===this.productObj.size.length&&this.productObj.size.push({}),0!==Object.keys(this.productObj.size[this.productObj.size.length-1]).length&&this.productObj.size.push({})},instockUpdate:function(){var e=this;this.$http.put("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/product/").concat(this.productObj.id),{data:this.productObj}).then((function(t){t.data.success&&(e.$swal("".concat(t.data.message)),e.$emit("instockModal"),e.modal.hide())}))}},mounted:function(){this.modal=new ne.a(this.$refs.instock)}};De.render=Be;var _e=De,Te={components:{Pagination:p["a"],ProductModal:de,DeleteModal:he,InstockModal:_e},data:function(){return{products:[],pagination:{}}},methods:{getProducts:function(e){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/admin/products?page=").concat(e)).then((function(e){t.products=e.data.products,t.pagination=e.data.pagination})).catch((function(e){t.$swal(e.data.message)}))},openModal:function(e,t){"edit"===e?(this.$refs.modal.modal.show(),this.$refs.modal.productObj=Object(b["a"])({imagesUrl:[],size:[]},t),this.$refs.modal.buttomStatus="編輯"):"add"===e?(this.$refs.modal.modal.show(),this.$refs.modal.productObj={imagesUrl:[],size:[]},this.$refs.modal.productObj.size.push({}),this.$refs.modal.buttomStatus="新增"):"instock"===e?(this.$refs.instockModal.modal.show(),this.$refs.modal.productObj.size.push({}),this.$refs.instockModal.productObj=Object(b["a"])({},t)):"delete"===e&&(this.$refs.deleteModal.modal.show(),this.$refs.deleteModal.productObj=Object(b["a"])({imagesUrl:[]},t))}},created:function(){this.getProducts()},mounted:function(){}};Te.render=u;t["default"]=Te},dbb4:function(e,t,c){var o=c("23e7"),a=c("83ab"),r=c("56ef"),n=c("fc6a"),i=c("06cf"),d=c("8418");o({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,c,o=n(e),a=i.f,l=r(o),s={},u=0;while(l.length>u)c=a(o,t=l[u++]),void 0!==c&&d(s,t,c);return s}})},e439:function(e,t,c){var o=c("23e7"),a=c("d039"),r=c("fc6a"),n=c("06cf").f,i=c("83ab"),d=a((function(){n(1)})),l=!i||d;o({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(e,t){return n(r(e),t)}})},e538:function(e,t,c){var o=c("b622");t.f=o}}]);
//# sourceMappingURL=chunk-3b004169.d71f3f8f.js.map
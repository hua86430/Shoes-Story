(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1d3e41c"],{"395d":function(e,t,c){"use strict";c.r(t);c("b0c0");var a=c("7a23"),o=Object(a["createVNode"])("h1",{class:"mt-3 mb-3"},"購物車",-1),n={key:0,class:"container",style:{"margin-top":"10%"}},r=Object(a["createVNode"])("p",{class:"fs-1 text-danger"},"Oops!",-1),l=Object(a["createTextVNode"])(" 購物車是空的 立即選購！"),s=Object(a["createVNode"])("br",null,null,-1),d=Object(a["createVNode"])("button",{type:"button",class:"btn btn-lg btn-outline-secondary px-5 mt-3"},"開始選購",-1),i={key:1,class:"container"},u={class:"row"},b={class:"col"},m={class:"text-end"},j={class:"table align-middle"},p=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",null,[Object(a["createVNode"])("th",{width:"5%"}),Object(a["createVNode"])("th",{width:"20%"},"品名"),Object(a["createVNode"])("th"),Object(a["createVNode"])("th",{width:"10%"},"單價 / 數量"),Object(a["createVNode"])("th",{width:"25%"},"總金額")])],-1),O={class:"align-middle"},h=Object(a["createVNode"])("i",{class:"bi bi-trash-fill"},null,-1),f={class:"text-decoration-none",href:"#"},V={class:"text-baseline"},N=Object(a["createVNode"])("td",{colspan:"3",class:"text-end fs-2"},"總計",-1),g={colspan:"2",class:"text-center"},v={class:"my-5 row justify-content-center"},y={class:"mb-3"},k=Object(a["createVNode"])("label",{for:"email",class:"form-label"},"Email",-1),C={class:"mb-3"},w=Object(a["createVNode"])("label",{for:"name",class:"form-label"},"收件人姓名",-1),x={class:"mb-3"},S=Object(a["createVNode"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),L={class:"mb-3"},B=Object(a["createVNode"])("label",{for:"address",class:"form-label"},"收件人地址",-1),$=Object(a["createVNode"])("div",{class:"mb-3"},[Object(a["createVNode"])("label",{for:"message",class:"form-label"},"留言"),Object(a["createVNode"])("textarea",{id:"message",class:"form-control",cols:"30",rows:"10",required:""})],-1),q=Object(a["createVNode"])("div",{class:"text-end"},[Object(a["createVNode"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function U(e,t,c,U,D,z){var E=Object(a["resolveComponent"])("loading"),T=Object(a["resolveComponent"])("router-link"),I=Object(a["resolveComponent"])("Field"),M=Object(a["resolveComponent"])("ErrorMessage"),F=Object(a["resolveComponent"])("Form"),A=Object(a["resolveComponent"])("CartItemCheck");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[o,Object(a["createVNode"])(E,{active:D.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return D.isLoading=e})},null,8,["active"]),D.isEmpty?(Object(a["openBlock"])(),Object(a["createBlock"])("div",n,[r,l,s,Object(a["createVNode"])(T,{to:"/products",class:"nav-link","aria-current":"page"},{default:Object(a["withCtx"])((function(){return[d]})),_:1})])):(Object(a["openBlock"])(),Object(a["createBlock"])("div",i,[Object(a["createVNode"])("div",u,[Object(a["createVNode"])("div",b,[Object(a["createVNode"])("div",m,[Object(a["createVNode"])("button",{class:"btn btn-outline-danger",type:"button",onClick:t[2]||(t[2]=function(){return z.deleteAll&&z.deleteAll.apply(z,arguments)})}," 清空購物車 ")]),Object(a["createVNode"])("table",j,[p,Object(a["createVNode"])("tbody",O,[D.carts?(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],{key:0},Object(a["renderList"])(D.carts.carts,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:e.id},[Object(a["createVNode"])("td",null,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-secondary btn-sm",onClick:function(t){return z.deleteItem(e.id)},disabled:D.loadingStatus.loadingItem===e.id},[h],8,["onClick","disabled"])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])(T,{class:"text-decoration-none",to:"/product/".concat(e.product_id)},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])("a",f,[Object(a["createVNode"])("img",{src:e.product.imageUrl,class:"w-100",alt:e.product.title},null,8,["src","alt"]),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(e.product.title),1)])]})),_:2},1032,["to"])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("button",{type:"button",class:"btn btn-sm btn-outline-info",onClick:function(t){return z.cartCheck(e)}}," 查看選擇尺寸 ",8,["onClick"])]),Object(a["createVNode"])("td",V,Object(a["toDisplayString"])(e.product.price.toLocaleString())+" / "+Object(a["toDisplayString"])(e.qty),1),Object(a["createVNode"])("td",null,Object(a["toDisplayString"])((e.product.price*e.qty).toLocaleString()),1)])})),128)):Object(a["createCommentVNode"])("",!0)]),Object(a["createVNode"])("tfoot",null,[Object(a["createVNode"])("tr",null,[N,Object(a["createVNode"])("td",g,"NTD. "+Object(a["toDisplayString"])(D.carts.total),1)])])])]),Object(a["createVNode"])("div",v,[Object(a["createVNode"])(F,{ref:"form",class:"col-md-6 mx-auto",onSubmit:z.onSubmit},{default:Object(a["withCtx"])((function(e){var c=e.errors;return[Object(a["createVNode"])("div",y,[k,Object(a["createVNode"])(I,{id:"email",name:"信箱",type:"email",rules:"email|required",class:["form-control",{"is-invalid":c["信箱"]}],placeholder:"請輸入 Email",modelValue:D.order.user.email,"onUpdate:modelValue":t[3]||(t[3]=function(e){return D.order.user.email=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(M,{name:"信箱",class:"invalid-feedback"})]),Object(a["createVNode"])("div",C,[w,Object(a["createVNode"])(I,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":c["姓名"]}],placeholder:"請輸入姓名",rules:"required",modelValue:D.order.user.name,"onUpdate:modelValue":t[4]||(t[4]=function(e){return D.order.user.name=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(M,{name:"姓名",class:"invalid-feedback"})]),Object(a["createVNode"])("div",x,[S,Object(a["createVNode"])(I,{id:"tel",name:"電話",type:"number",rules:z.isPhone,class:["form-control",{"is-invalid":c["電話"]}],placeholder:"請輸入電話",modelValue:D.order.user.tel,"onUpdate:modelValue":t[5]||(t[5]=function(e){return D.order.user.tel=e})},null,8,["rules","class","modelValue"]),Object(a["createVNode"])(M,{name:"電話",class:"invalid-feedback"})]),Object(a["createVNode"])("div",L,[B,Object(a["createVNode"])(I,{id:"address",name:"地址",type:"text",class:["form-control",{"is-invalid":c["地址"]}],placeholder:"請輸入地址",rules:"required",modelValue:D.order.user.address,"onUpdate:modelValue":t[6]||(t[6]=function(e){return D.order.user.address=e})},null,8,["class","modelValue"]),Object(a["createVNode"])(M,{name:"地址",class:"invalid-feedback"})]),$,q]})),_:1},8,["onSubmit"])])])])),Object(a["createVNode"])(A,{onCartCheckModal:z.getCart,ref:"cartCheck"},null,8,["onCartCheckModal"])],64)}c("99af");var D={class:"modal fade my-auto",tabindex:"-1",id:"instockStatus",ref:"instock"},z={class:"modal-dialog modal-dialog-centered modal-lg"},E={class:"modal-content"},T={class:"modal-header"},I={class:"modal-title"},M=Object(a["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),F={class:"modal-body"},A={class:"table"},_=Object(a["createVNode"])("thead",null,[Object(a["createVNode"])("tr",{class:"align-middle"},[Object(a["createVNode"])("th",{width:"30%",scope:"col"},"尺寸"),Object(a["createVNode"])("th",{width:"30%",scope:"col"},"數量"),Object(a["createVNode"])("th",{width:"15%",scope:"col"})])],-1),J={class:"text-center"},P=Object(a["createVNode"])("i",{class:"bi bi-trash-fill"},null,-1),G={class:"modal-footer border-0"},H=Object(a["createVNode"])("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal"}," Close ",-1);function K(e,t,c,o,n,r){var l=Object(a["resolveComponent"])("loading");return Object(a["openBlock"])(),Object(a["createBlock"])("div",D,[Object(a["createVNode"])(l,{active:n.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return n.isLoading=e})},null,8,["active"]),Object(a["createVNode"])("div",z,[Object(a["createVNode"])("div",E,[Object(a["createVNode"])("div",T,[Object(a["createVNode"])("h5",I,Object(a["toDisplayString"])(n.productObj.product.title)+" 尺寸 / 數量",1),M]),Object(a["createVNode"])("div",F,[Object(a["createVNode"])("table",A,[_,Object(a["createVNode"])("tbody",null,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(n.productObj.size,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("tr",{key:t,class:"align-middle"},[Object(a["createVNode"])("td",null,[Object(a["createVNode"])("span",J,Object(a["toDisplayString"])(n.productObj.size[t].num),1)]),Object(a["createVNode"])("td",null,[Object(a["withDirectives"])(Object(a["createVNode"])("input",{type:"number",class:"text-center",min:"1","onUpdate:modelValue":function(e){return n.productObj.size[t].qty=e}},null,8,["onUpdate:modelValue"]),[[a["vModelText"],n.productObj.size[t].qty,void 0,{number:!0}]])]),Object(a["createVNode"])("td",null,[Object(a["createVNode"])("button",{type:"button",class:"btn",onClick:function(e){return r.delSize(t)}},[P],8,["onClick"])])])})),128))])])]),Object(a["createVNode"])("div",G,[H,Object(a["createVNode"])("button",{onClick:t[2]||(t[2]=function(){return r.instockUpdate&&r.instockUpdate.apply(r,arguments)}),type:"button",class:"btn btn-primary"},"UpDate")])])])],512)}c("a434"),c("159b");var Q=c("7c2b"),R=c.n(Q),W={data:function(){return{modal:"",productObj:{product:{},size:[],id:"",qty:1},qtyTemp:0,isLoading:!1}},methods:{delSize:function(e){this.productObj.size.splice(e,1)},instockUpdate:function(){var e=this;this.isLoading=!0,this.productObj.qty=0,this.productObj.size.forEach((function(t){e.productObj.qty+=t.qty})),console.log(this.productObj.qty),this.$http.put("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/cart/").concat(this.productObj.id),{data:this.productObj}).then((function(t){t.data.success&&(e.isLoading=!1,e.$swal("".concat(t.data.message)),e.$emit("cartCheckModal"),e.modal.hide())})).catch((function(e){console.log(e.data)}))}},mounted:function(){this.modal=new R.a(this.$refs.instock)}},X=c("d959"),Y=c.n(X);const Z=Y()(W,[["render",K]]);var ee=Z,te={components:{CartItemCheck:ee},data:function(){return{cartTemp:{},carts:[],loadingStatus:{loadingItem:""},order:{user:{name:"",email:"",tel:"",address:""},message:""},isLoading:!1,isEmpty:!1}},methods:{cartCheck:function(e){this.$refs.cartCheck.modal.show(),this.$refs.cartCheck.productObj=e,console.log(this.$refs.cartCheck.productObj)},deleteItem:function(e){var t=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/cart");this.loadingStatus.loadingItem=e,this.$http.delete("".concat(c,"/").concat(e)).then((function(e){t.loadingStatus.loadingItem="",t.getCart(),t.$swal({showConfirmButton:!1,text:e.data.message,icon:"success"}),t.isLoading=!1,setTimeout((function(){window.location.reload()}),1500)}))},deleteAll:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/carts");this.$http.delete(t).then((function(t){e.getCart(),e.$swal({showConfirmButton:!1,text:t.data.message,icon:"success"}),e.isLoading=!1,setTimeout((function(){window.location.reload()}),1500)}))},getCart:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/cart");this.$http.get(t).then((function(t){e.carts=t.data.data,e.carts.total=t.data.data.total.toLocaleString(),e.isLoading=!1,e.carts.carts.length<=0?e.isEmpty=!0:e.isEmpty=!1,console.log(e.carts)})).catch((function(e){console.log(e.data)}))},onSubmit:function(){var e=this;this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/order"),{data:this.order}).then((function(t){t.data.success?(e.$refs.form.resetForm(),e.getCart(),e.$swal(t.data.message)):e.$swal(t.data.message)}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"}},created:function(){this.getCart()}};const ce=Y()(te,[["render",U]]);t["default"]=ce},a434:function(e,t,c){"use strict";var a=c("23e7"),o=c("23cb"),n=c("a691"),r=c("50c4"),l=c("7b0b"),s=c("65f0"),d=c("8418"),i=c("1dde"),u=i("splice"),b=Math.max,m=Math.min,j=9007199254740991,p="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!u},{splice:function(e,t){var c,a,i,u,O,h,f=l(this),V=r(f.length),N=o(e,V),g=arguments.length;if(0===g?c=a=0:1===g?(c=0,a=V-N):(c=g-2,a=m(b(n(t),0),V-N)),V+c-a>j)throw TypeError(p);for(i=s(f,a),u=0;u<a;u++)O=N+u,O in f&&d(i,u,f[O]);if(i.length=a,c<a){for(u=N;u<V-a;u++)O=u+a,h=u+c,O in f?f[h]=f[O]:delete f[h];for(u=V;u>V-a+c;u--)delete f[u-1]}else if(c>a)for(u=V-a;u>N;u--)O=u+a-1,h=u+c-1,O in f?f[h]=f[O]:delete f[h];for(u=0;u<c;u++)f[u+N]=arguments[u+2];return f.length=V-a+c,i}})},b0c0:function(e,t,c){var a=c("83ab"),o=c("9bf2").f,n=Function.prototype,r=n.toString,l=/^\s*function ([^ (]*)/,s="name";a&&!(s in n)&&o(n,s,{configurable:!0,get:function(){try{return r.call(this).match(l)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-e1d3e41c.8a3d9fd4.js.map
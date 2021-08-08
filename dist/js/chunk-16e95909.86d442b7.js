(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16e95909"],{f820:function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a={class:"position-relative"},r=Object(o["createVNode"])("div",{class:"position-absolute",style:{top:"0",bottom:"0",left:"0",right:"0","background-image":"url(https://images.unsplash.com/photo-1512626120412-faf41adb4874?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80)","background-position":"right",opacity:"0.1","pointer-events":"none"}},null,-1),s={class:"container",style:{"min-height":"89vh"}},l={class:"row pt-5 justify-content-center"},n=Object(o["createVNode"])("div",{class:"col-md-12"},[Object(o["createVNode"])("h1",{class:"py-5"},"About"),Object(o["createVNode"])("p",null,[Object(o["createTextVNode"])(" 1993年，那時候的還是懵懂無知的學生，天天看著路人們穿著的鞋子，用羨慕的眼光想像著某一天自己也能擁有獨一無二的限量鞋款。"),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" 長大後有能力了，卻始終無法找到心目中的鞋子，卻因為共同的興趣結交了一群和我一樣的愛好者，也就是我目前的夥伴們。"),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" 相識幾年後我們決定創立一個讓大家都可以快速且安心，卻可以用更實惠的價格購買到自己喜歡的鞋款"),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" 於是就有了現在的我們，Shoes Story 。 ")])],-1),i=Object(o["createVNode"])("div",{class:"col-md-5 py-5"},[Object(o["createVNode"])("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.5372322483615!2d120.32281910809884!3d22.613694322288183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04a0fc5dc531%3A0x2002f77ba0ed26af!2zODA26auY6ZuE5biC5YmN6Y6u5Y2A56u55YyX6YeM!5e0!3m2!1szh-TW!2stw!4v1627652741134!5m2!1szh-TW!2stw",style:{border:"0"},width:"100%",height:"400px",allowfullscreen:"",loading:"lazy"})],-1),d={class:"col-md-5 py-5"},b={class:"mb-3"},m=Object(o["createVNode"])("label",{for:"name",class:"form-label fs-4"},"姓名",-1),f={class:"mb-3"},j=Object(o["createVNode"])("label",{for:"tel",class:"form-label fs-4"},"電話",-1),O=Object(o["createVNode"])("div",{class:"mb-3"},[Object(o["createVNode"])("label",{for:"message",class:"form-label fs-4"},"留言"),Object(o["createVNode"])("textarea",{id:"message",rules:"required",class:"form-control",cols:"30",rows:"10"})],-1),u=Object(o["createVNode"])("div",{class:"text-end"},[Object(o["createVNode"])("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function p(e,t,c,p,N,V){var h=Object(o["resolveComponent"])("Field"),v=Object(o["resolveComponent"])("error-message"),w=Object(o["resolveComponent"])("Form"),x=Object(o["resolveComponent"])("Footer");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",a,[r,Object(o["createVNode"])("div",s,[Object(o["createVNode"])("div",l,[n,i,Object(o["createVNode"])("div",d,[Object(o["createVNode"])(w,{ref:"form",class:"col-md-6 mx-auto",onSubmit:V.onSubmit},{default:Object(o["withCtx"])((function(e){var t=e.errors;return[Object(o["createVNode"])("div",b,[m,Object(o["createVNode"])(h,{id:"name",name:"姓名",type:"text",class:["form-control",{"is-invalid":t["姓名"]}],placeholder:"請輸入姓名",rules:"required"},null,8,["class"]),Object(o["createVNode"])(v,{name:"姓名",class:"invalid-feedback"})]),Object(o["createVNode"])("div",f,[j,Object(o["createVNode"])(h,{id:"tel",name:"電話",type:"number",rules:V.isPhone,class:["form-control",{"is-invalid":t["電話"]}],placeholder:"請輸入電話"},null,8,["rules","class"]),Object(o["createVNode"])(v,{name:"電話",class:"invalid-feedback"})]),O,u]})),_:1},8,["onSubmit"])])])])]),Object(o["createVNode"])(x)],64)}var N=c("fd2d"),V={components:{Footer:N["a"]},methods:{isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的電話號碼"},onSubmit:function(){this.$swal("成功送出，我們會盡快回覆！"),this.$refs.form.resetForm()}}};V.render=p;t["default"]=V},fd2d:function(e,t,c){"use strict";var o=c("7a23"),a={class:"bg-dark py-3 mt-3"},r={class:"container d-flex justify-content-center"},s={class:"row mb-3"},l={class:"col"},n={class:"d-flex mx-3",style:{width:"10%"}},i=Object(o["createVNode"])("i",{class:"bi bi-instagram pe-2",style:{"font-size":"1.5em",color:"white"}},null,-1),d=Object(o["createVNode"])("span",{class:"align-middle text-white"},"Instagram",-1),b={class:"col"},m={class:"d-flex mx-3",style:{width:"10%"}},f=Object(o["createVNode"])("i",{class:"bi bi-facebook pe-2",style:{"font-size":"1.5em",color:"white"}},null,-1),j=Object(o["createVNode"])("span",{class:"align-middle text-white"},"Facebook",-1),O={class:"col"},u={class:"d-flex mx-3",style:{width:"10%"}},p=Object(o["createVNode"])("i",{class:"bi bi-twitter pe-2",style:{"font-size":"1.5em",color:"white"}},null,-1),N=Object(o["createVNode"])("span",{class:"align-middle text-white"},"Twitter",-1),V=Object(o["createVNode"])("span",{class:"text-white"},"Copyright © 1999-2021 鞋頭物語 All rights reserved.",-1);function h(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("footer",a,[Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",s,[Object(o["createVNode"])("div",l,[Object(o["createVNode"])("div",n,[i,Object(o["createVNode"])("a",{href:"#",class:"text-decoration-none",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(){return e.none&&e.none.apply(e,arguments)}),["prevent"]))},[d])])]),Object(o["createVNode"])("div",b,[Object(o["createVNode"])("div",m,[f,Object(o["createVNode"])("a",{href:"#",class:"text-decoration-none",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(){return e.none&&e.none.apply(e,arguments)}),["prevent"]))},[j])])]),Object(o["createVNode"])("div",O,[Object(o["createVNode"])("div",u,[p,Object(o["createVNode"])("a",{href:"#",class:"text-decoration-none",onClick:t[3]||(t[3]=Object(o["withModifiers"])((function(){return e.none&&e.none.apply(e,arguments)}),["prevent"]))},[N])])])])]),V])}const v={};v.render=h;t["a"]=v}}]);
//# sourceMappingURL=chunk-16e95909.86d442b7.js.map
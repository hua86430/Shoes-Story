(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59f34dc2"],{"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,c="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,i=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,s,l,u){var d=n+e.length,p=s.length,f=i;return void 0!==l&&(l=r(l),f=o),c.call(u,f,(function(r,c){var o;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(d);case"<":o=l[c.slice(1,-1)];break;default:var i=+c;if(0===i)return r;if(i>p){var u=a(i/10);return 0===u?r:u<=p?void 0===s[u-1]?c.charAt(1):s[u-1]+c.charAt(1):r}o=s[i-1]}return void 0===o?"":o}))}},"0e63":function(e,t,n){"use strict";n("3f64")},"107c":function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),c=n("2d00"),o=a("species");e.exports=function(e){return c>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"3f64":function(e,t,n){},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("d039"),c=n("825a"),o=n("50c4"),i=n("a691"),s=n("1d80"),l=n("8aa5"),u=n("0cb2"),d=n("14c3"),p=n("b622"),f=p("replace"),v=Math.max,g=Math.min,b=function(e){return void 0===e?e:String(e)},h=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),O=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));r("replace",(function(e,t,n){var r=x?"$":"$0";return[function(e,n){var r=s(this),a=void 0==e?void 0:e[f];return void 0!==a?a.call(e,r,n):t.call(String(r),e,n)},function(e,a){if("string"===typeof a&&-1===a.indexOf(r)&&-1===a.indexOf("$<")){var s=n(t,this,e,a);if(s.done)return s.value}var p=c(this),f=String(e),h="function"===typeof a;h||(a=String(a));var x=p.global;if(x){var O=p.unicode;p.lastIndex=0}var y=[];while(1){var j=d(p,f);if(null===j)break;if(y.push(j),!x)break;var k=String(j[0]);""===k&&(p.lastIndex=l(f,o(p.lastIndex),O))}for(var m="",w=0,N=0;N<y.length;N++){j=y[N];for(var V=String(j[0]),$=v(g(i(j.index),f.length),0),I=[],S=1;S<j.length;S++)I.push(b(j[S]));var T=j.groups;if(h){var C=[V].concat(I,$,f);void 0!==T&&C.push(T);var E=String(a.apply(void 0,C))}else E=u(V,f,$,I,T,a);$>=w&&(m+=f.slice(w,$)+E,w=$+V.length)}return m+f.slice(w)}]}),!O||!h||x)},8418:function(e,t,n){"use strict";var r=n("c04e"),a=n("9bf2"),c=n("5c6c");e.exports=function(e,t,n){var o=r(t);o in e?a.f(e,o,c(0,n)):e[o]=n}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),c=n("5692"),o=n("7c73"),i=n("69f3").get,s=n("fce3"),l=n("107c"),u=RegExp.prototype.exec,d=c("native-string-replace",String.prototype.replace),p=u,f=function(){var e=/a/,t=/b*/g;return u.call(e,"a"),u.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),v=a.UNSUPPORTED_Y||a.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],b=f||g||v||s||l;b&&(p=function(e){var t,n,a,c,s,l,b,h=this,x=i(h),O=x.raw;if(O)return O.lastIndex=h.lastIndex,t=p.call(O,e),h.lastIndex=O.lastIndex,t;var y=x.groups,j=v&&h.sticky,k=r.call(h),m=h.source,w=0,N=e;if(j&&(k=k.replace("y",""),-1===k.indexOf("g")&&(k+="g"),N=String(e).slice(h.lastIndex),h.lastIndex>0&&(!h.multiline||h.multiline&&"\n"!==e[h.lastIndex-1])&&(m="(?: "+m+")",N=" "+N,w++),n=new RegExp("^(?:"+m+")",k)),g&&(n=new RegExp("^"+m+"$(?!\\s)",k)),f&&(a=h.lastIndex),c=u.call(j?n:h,N),j?c?(c.input=c.input.slice(w),c[0]=c[0].slice(w),c.index=h.lastIndex,h.lastIndex+=c[0].length):h.lastIndex=0:f&&c&&(h.lastIndex=h.global?c.index+c[0].length:a),g&&c&&c.length>1&&d.call(c[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c&&y)for(c.groups=l=o(null),s=0;s<y.length;s++)b=y[s],l[b[0]]=c[b[1]];return c}),e.exports=p},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("d039"),c=n("e8b5"),o=n("861d"),i=n("7b0b"),s=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),p=n("b622"),f=n("2d00"),v=p("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",h=f>=51||!a((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),x=d("concat"),O=function(e){if(!o(e))return!1;var t=e[v];return void 0!==t?!!t:c(e)},y=!h||!x;r({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,r,a,c,o=i(this),d=u(o,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(c=-1===t?o:arguments[t],O(c)){if(a=s(c.length),p+a>g)throw TypeError(b);for(n=0;n<a;n++,p++)n in c&&l(d,p,c[n])}else{if(p>=g)throw TypeError(b);l(d,p++,c)}return d.length=p,d}})},"9f7f":function(e,t,n){var r=n("d039"),a=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d504:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a=Object(r["withScopeId"])("data-v-a5a0fc4c");Object(r["pushScopeId"])("data-v-a5a0fc4c");var c={id:"navbarTop",class:"navbar navbar-expand-lg navbar-light bg-light sticky-top py-2",ref:"navbar"},o={class:"container"},i=Object(r["createTextVNode"])("Shoes Story"),s={class:"navbar-toggler",ref:"navbarToggle",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l=Object(r["createVNode"])("span",{class:"navbar-toggler-icon"},null,-1),u={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav ms-auto mb-lg-0"},p={class:"nav-item my-auto"},f=Object(r["createTextVNode"])("首頁"),v={class:"nav-item my-auto"},g=Object(r["createTextVNode"])("產品總覽"),b={class:"nav-item my-auto"},h=Object(r["createTextVNode"])("關於我們"),x={class:"nav-item my-auto mx-auto"},O={class:"nav-item ms-3"},y=Object(r["createVNode"])("i",{class:"bi bi-cart3",style:{"font-size":"2em"}},null,-1),j={key:0,class:"position-absolute",style:{top:"0px",right:"45%","min-width":"15px","background-color":"gray",color:"white","border-radius":"50%",padding:"1.5px"}},k={key:1,class:"position-absolute",style:{top:"0px",right:"6px","min-width":"15px","background-color":"gray",color:"white","border-radius":"50%",padding:"1.5px"}},m=Object(r["createVNode"])("span",null,"➠",-1);Object(r["popScopeId"])();var w=a((function(e,t,n,w,N,V){var $=Object(r["resolveComponent"])("router-link"),I=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])("nav",c,[Object(r["createVNode"])("div",o,[Object(r["createVNode"])($,{to:"/",class:"navbar-brand"},{default:a((function(){return[i]})),_:1}),Object(r["createVNode"])("button",s,[l],512),Object(r["createVNode"])("div",u,[Object(r["createVNode"])("ul",d,[Object(r["createVNode"])("li",p,[Object(r["createVNode"])($,{to:"/",class:"nav-link","aria-current":"page",onClick:V.navbarToggle},{default:a((function(){return[f]})),_:1},8,["onClick"])]),Object(r["createVNode"])("li",v,[Object(r["createVNode"])($,{to:"/products",class:"nav-link","aria-current":"page",onClick:V.navbarToggle},{default:a((function(){return[g]})),_:1},8,["onClick"])]),Object(r["createVNode"])("li",b,[Object(r["createVNode"])($,{to:"/about",class:"nav-link","aria-current":"page",onClick:V.navbarToggle},{default:a((function(){return[h]})),_:1},8,["onClick"])]),Object(r["createVNode"])("li",x,[Object(r["createVNode"])("button",{onClick:t[1]||(t[1]=function(){return V.login&&V.login.apply(V,arguments)}),type:"button",class:"btn nav-link","aria-current":"page"}," 後台系統 ")]),Object(r["createVNode"])("li",O,[Object(r["createVNode"])($,{to:"/carts",class:"nav-link position-relative","aria-current":"page",onClick:V.navbarToggle},{default:a((function(){return[y,N.is_response?(Object(r["openBlock"])(),Object(r["createBlock"])("p",j,Object(r["toDisplayString"])(N.carts),1)):(Object(r["openBlock"])(),Object(r["createBlock"])("p",k,Object(r["toDisplayString"])(N.carts),1)),m]})),_:1},8,["onClick"])])])])])],512),Object(r["createVNode"])(I)],64)})),N=(n("99af"),n("ac1f"),n("5319"),{data:function(){return{loginCheck:!1,carts:[],screenWidth:"",is_response:!1}},methods:{login:function(){var e=this;this.$http.post("".concat("https://vue3-course-api.hexschool.io/","api/user/check")).then((function(t){t.data.success?(e.$router.push("/dashboard"),console.log("yes",t.data.success)):(e.$router.push("/login"),console.log(t.data.success))}))},getCart:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("hua430","/cart");this.$http.get(t).then((function(t){e.carts=t.data.data.carts.length})).catch((function(e){console.log(e.data)}))},navbarToggle:function(){!0===this.is_response&&this.$refs.navbarToggle.click()}},created:function(){var e=document.cookie.replace(/(?:(?:^|.*;\s*)huaToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=e,this.getCart(),this.screenWidth=window.innerWidth,this.screenWidth>991?this.is_response=!1:this.is_response=!0},mounted:function(){var e=this;window.onresize=function(){e.screenWidth=window.innerWidth,e.screenWidth>991?e.is_response=!1:e.is_response=!0}}});n("0e63");N.render=w,N.__scopeId="data-v-a5a0fc4c";t["default"]=N},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),c=n("d039"),o=n("b622"),i=n("9112"),s=o("species"),l=RegExp.prototype;e.exports=function(e,t,n,u){var d=o(e),p=!c((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),f=p&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!p||!f||n){var v=/./[d],g=t(d,""[e],(function(e,t,n,r,c){var o=t.exec;return o===a||o===l.exec?p&&!c?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,g[0]),r(l,d,g[1])}u&&i(l[d],"sham",!0)}},fce3:function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-59f34dc2.f4a7035d.js.map
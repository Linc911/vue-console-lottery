(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f6f8673"],{"06ca":function(t,e,n){},"0d17":function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e,n){n(7);var o=n(5)(n(2),n(6),null,null);t.exports=o.exports},function(t,e,n){"use strict";t.exports=function(t){function e(e){e.preventDefault(),"function"==typeof t&&t(e)}function n(t){27===t.keyCode&&e(t)}var o=!1;return{get isListening(){return o},start:function(t){window.addEventListener("click",e,!0),window.addEventListener("keyup",n,!0),o=!0,"function"==typeof t&&t()},stop:function(t){window.removeEventListener("click",e,!0),window.removeEventListener("keyup",n,!0),o=!1,"function"==typeof t&&t()}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),i=o(r);e.default={name:"context-menu",props:{id:{type:String,default:"default-ctx"}},data:function(){var t=this;return{locals:{},align:"left",ctxTop:0,ctxLeft:0,ctxVisible:!1,bodyClickListener:(0,i.default)(function(e){var n=!!t.ctxVisible,o=n&&!t.$el.contains(e.target);if(o){if(1!==e.which)return e.preventDefault(),e.stopPropagation(),!1;t.ctxVisible=!1,t.$emit("ctx-cancel",t.locals),e.stopPropagation()}else t.ctxVisible=!1,t.$emit("ctx-close",t.locals)})}},methods:{setPositionFromEvent:function(t){var e=this;t=t||window.event;var n=document.scrollingElement||document.documentElement;return t.pageX||t.pageY?(this.ctxLeft=t.pageX,this.ctxTop=t.pageY-n.scrollTop):(t.clientX||t.clientY)&&(this.ctxLeft=t.clientX+n.scrollLeft,this.ctxTop=t.clientY+n.scrollTop),this.$nextTick(function(){var t=e.$el,n=(t.style.minHeight||t.style.height).replace("px","")||32,o=(t.style.minWidth||t.style.width).replace("px","")||32,r=t.scrollHeight||n,i=t.scrollWidth||o,a=window.innerHeight-r-25,c=window.innerWidth-i-25;e.ctxTop>a&&(e.ctxTop=a),e.ctxLeft>c&&(e.ctxLeft=c)}),t},open:function(t,e){return this.ctxVisible&&(this.ctxVisible=!1),this.ctxVisible=!0,this.$emit("ctx-open",this.locals=e||{}),this.setPositionFromEvent(t),this.$el.setAttribute("tab-index",-1),this.bodyClickListener.start(),this}},watch:{ctxVisible:function(t,e){!0===e&&!1===t&&this.bodyClickListener.stop(function(t){})}},computed:{ctxStyle:function(){return{display:this.ctxVisible?"block":"none",top:(this.ctxTop||0)+"px",left:(this.ctxLeft||0)+"px"}}}}},function(t,e,n){e=t.exports=n(4)(void 0),e.push([t.i,'.ctx{position:relative}.ctx-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:.9rem;color:#373a3c;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;-moz-box-shadow:0 0 5px #ccc;-webkit-box-shadow:0 0 5px #ccc;box-shadow:0 0 5px #ccc}.ctx-divider{height:1px;margin:.5rem 0;overflow:hidden;background-color:#e5e5e5}.ctx-item{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.5;color:#373a3c;text-align:inherit;white-space:nowrap;background:none;border:0;cursor:default}.ctx-item:focus,.ctx-item:hover{color:#2b2d2f;text-decoration:none;background-color:#f5f5f5;cursor:normal}.ctx-item.active,.ctx-item.active:focus,.ctx-item.active:hover{color:#fff;text-decoration:none;background-color:#0275d8;outline:0}.ctx-item.disabled,.ctx-item.disabled:focus,.ctx-item.disabled:hover{color:#818a91}.ctx-item.disabled:focus,.ctx-item.disabled:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:"progid:DXImageTransform.Microsoft.gradient(enabled = false)"}.open>.ctx-menu{display:block}.open>a{outline:0}.ctx-menu-right{right:0;left:auto}.ctx-menu-left{right:auto;left:0}.ctx-header{display:block;padding:3px 20px;font-size:.9rem;line-height:1.5;color:#818a91;white-space:nowrap}.ctx-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.ctx-menu{right:0;left:auto}.ctx-menu-container{position:fixed;padding:0;border:1px solid #bbb;background-color:#f5f5f5;z-index:99999;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r),a=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function o(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,"+e;return"/*# "+n+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e){t.exports=function(t,e,n,o){var r,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,i=t.default);var c="function"==typeof i?i.options:i;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n),o){var s=c.computed||(c.computed={});Object.keys(o).forEach(function(t){var e=o[t];s[t]=function(){return e}})}return{esModule:r,exports:i,options:c}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"contextMenu",staticClass:"ctx-menu-container",style:t.ctxStyle,attrs:{id:t.id},on:{click:function(t){t.stopPropagation()},contextmenu:function(t){t.stopPropagation()}}},[n("div",{staticClass:"ctx open",staticStyle:{"background-color":"transparent"}},[n("ul",{staticClass:"ctx-menu",class:{"ctx-menu-right":"right"===t.align,"ctx-menu-left":"left"===t.align},attrs:{role:"menu"}},[t._t("default")],2)])])},staticRenderFns:[]}},function(t,e,n){var o=n(3);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals),n(8)("0df30a58",o,!0)},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(a(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var i=[];for(r=0;r<n.parts.length;r++)i.push(a(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:i}}}}function r(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=i[0],c=i[1],s=i[2],u=i[3],l={css:c,media:s,sourceMap:u};o[a]?(l.id=t+":"+o[a].parts.length,o[a].parts.push(l)):(l.id=t+":0",n.push(o[a]={id:a,parts:[l]}))}return n}function i(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function a(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]'),r=null!=o;if(r&&h)return m;if(b){var a=p++;o=d||(d=i()),e=c.bind(null,o,a,!1),n=c.bind(null,o,a,!0)}else o=o||i(),e=s.bind(null,o),n=function(){o.parentNode.removeChild(o)};return r||e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function c(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function s(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var r=n(9),l={},f=u&&(document.head||document.getElementsByTagName("head")[0]),d=null,p=0,h=!1,m=function(){},b="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){h=n;var i=r(t,e);return o(i),function(e){for(var n=[],a=0;a<i.length;a++){var c=i[a],s=l[c.id];s.refs--,n.push(s)}e?(i=r(t,e),o(i)):i=[];for(a=0;a<n.length;a++){s=n[a];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete l[s.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=i[0],c=i[1],s=i[2],u=i[3],l={id:t+":"+r,css:c,media:s,sourceMap:u};o[a]?o[a].parts.push(l):n.push(o[a]={id:a,parts:[l]})}return n}},function(t,e,n){"use strict";var o=n(0);o.install=function(t){var e=t.component("context-menu",o);return e},window.VueContextMenu=o,t.exports=t.exports.default=o}])})},"2c95":function(t,e,n){},"41e0":function(t,e,n){},"513b":function(t,e,n){"use strict";var o=n("41e0"),r=n.n(o);r.a},"563c":function(t,e,n){"use strict";var o=n("06ca"),r=n.n(o);r.a},"7ec2":function(t,e,n){},9064:function(t,e,n){},"983e":function(t,e){t.exports="data:image/png;base64,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"},"9ff9":function(t,e,n){"use strict";var o=n("2c95"),r=n.n(o);r.a},a0f0:function(t,e,n){"use strict";var o=n("7ec2"),r=n.n(o);r.a},b529:function(t,e){t.exports="data:image/png;base64,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"},bcf9:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"breadcrumb-container"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},t._l(t.breadcrumb,function(e){return n("el-breadcrumb-item",{key:e.name,class:{activeLink:e.path},attrs:{to:e.path}},[t._v("\n      "+t._s(e.name)+"\n    ")])}))],1)},r=[],i={name:"BaseBreadcrumb",props:{breadcrumb:{type:Array,default:function(){return[]}}}},a=i,c=(n("9ff9"),n("048f")),s=Object(c["a"])(a,o,r,!1,null,"2e30f0bb",null);s.options.__file="BaseBreadcrumb.vue";e["a"]=s.exports},c095:function(t,e,n){"use strict";var o=n("9064"),r=n.n(o);r.a},ca56:function(t,e,n){"use strict";var o=n("ef04"),r=n.n(o);r.a},da47:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",function(){return o})},e643:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home-layout"},[n("el-container",[n("el-header",[n("TheHeader")],1),n("el-container",[n("el-aside",{attrs:{width:"220px"}},[n("TheSidebar")],1),n("el-container",[n("el-main",[n("TapPanel"),n("BaseBreadcrumb",{attrs:{breadcrumb:t.$route.meta.breadcrumb}}),n("div",{staticClass:"content-container"},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("router-view")],1)],1),n("el-footer",{attrs:{height:"auto"}},[n("TheFooter")],1)],1)],1)],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"the-header clearfix"},[n("div",{staticClass:"head-logo"},[n("router-link",{staticClass:"head-logo-link",attrs:{to:"/home"}},[t._v("后台管理系统")]),n("div",{staticClass:"history-go"},[n("div",{staticClass:"history-go-item",on:{click:function(e){t.myWindow.history.back()}}},[n("i",{staticClass:"el-icon-d-arrow-left"}),n("span",[t._v("上一页")])]),n("div",{staticClass:"history-go-item",on:{click:function(e){t.myWindow.history.forward()}}},[n("span",[t._v("下一页")]),n("i",{staticClass:"el-icon-d-arrow-right"})])])],1),n("div",{staticClass:"head-user"},[n("div",{staticClass:"user-info"},[n("img",{staticClass:"user-avatar",attrs:{src:t.avatarUrl,alt:"User avatar"}}),n("span",{staticClass:"user-username"},[t._v(t._s(t.userInfo.nickname))])]),n("el-dropdown",{on:{command:t.handleDropdownCommand}},[n("span",[n("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.menuDropdown,function(e){return n("el-dropdown-item",{key:e.name,attrs:{command:e.command}},[n("i",{staticClass:"fa",class:e.icon}),n("span",[t._v(t._s(e.name))])])}))],1)],1)])},a=[],c={name:"TheHeader",data:function(){return{userInfo:{nickname:"",sex:0},menuDropdown:[{name:"个人信息",icon:"fa-user-circle",command:"info"},{name:"上传头像",icon:"fa-drupal",command:"avatar"},{name:"绑定手机",icon:"fa-mobile-phone",command:"phone"},{name:"退出",icon:"fa-sign-out",command:"logout"}]}},created:function(){this.getUserInfo()},computed:{avatarUrl:function(){var t=n("983e"),e=n("b529");return this.userInfo.sex?t:e}},methods:{handleDropdownCommand:function(t){switch(t){case"info":this.$router.push({name:"UserActiveInfoUpdate"});break;case"avatar":this.$router.push({name:"UserActiveAvatarUpdate"});break;case"phone":this.$router.push({name:"UserActivePhoneUpdate"});break;case"logout":this.$store.dispatch("auth/logout");break;default:this.$message.error("操作异常，请检查代码！")}},getUserInfo:function(){var t=this;this.$httpAPI.fetchUserInfo().then(function(e){t.userInfo=e.data.data}).catch(function(t){return console.log(t)})}}},s=c,u=(n("ca56"),n("048f")),l=Object(u["a"])(s,i,a,!1,null,"58b0cb40",null);l.options.__file="TheHeader.vue";var f=l.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"the-sidebar"},[n("el-menu",{attrs:{mode:"vertical","text-color":"#fff","background-color":"#324057","active-text-color":"#409eff"}},[t._l(t.menu[0],function(e){return[n("el-submenu",{key:e.id,attrs:{index:e.name}},[n("template",{slot:"title"},[n("i",{class:"fa "+e.css}),n("span",[t._v(t._s(e.name))])]),t._l(t.menu[e.id],function(e){return n("router-link",{key:e.id,attrs:{to:e.url}},[n("el-menu-item",{class:{"unprepared-link":"/users/unset"===e.url},attrs:{index:e.name}},[n("i",{class:"fa "+e.css}),n("span",[t._v(t._s(e.name))])])],1)})],2)]})],2)],1)},p=[],h=n("da47");function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){Object(h["a"])(t,e,n[e])})}return t}var b=n("f2de"),x=Object(b["a"])("sidebar"),v=x.mapGetters,g=x.mapActions,y={name:"TheSidebar",data:function(){return{}},created:function(){this.fetchSidebarMenu()},computed:v(["menu"]),methods:m({},g(["refreshMenu"]),{fetchSidebarMenu:function(){this.refreshMenu()}})},k=y,w=(n("513b"),Object(u["a"])(k,d,p,!1,null,"751dc10e",null));w.options.__file="TheSidebar.vue";var C=w.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-panel"},[n("el-tag",{class:{current:"HomePage"===t.$route.name},nativeOn:{click:function(e){return t.highlightHomeTab(e)}}},[n("i",{staticClass:"fa fa-home"}),n("span",[t._v("主页")])]),t._l(t.routes,function(e,o){return n("el-tag",{key:e.path,class:{current:e.active},attrs:{closable:""},on:{close:function(e){t.closeRoute(o)}},nativeOn:{click:function(n){t.openRoute(e.path)},contextmenu:function(e){e.preventDefault(),t.openContextMenu(o)}}},[t._v(t._s(e.name))])}),n("contextMenu",{ref:"ctxMenu",staticClass:"context-menu-list"},[n("li",{staticClass:"context-menu-item",on:{click:function(e){t.removeRoute(t.activeIndex)}}},[t._v("关闭当前标签")]),n("li",{staticClass:"context-menu-item",on:{click:function(e){t.removeOtherRoutes(t.activeIndex)}}},[t._v("关闭其他标签")]),n("li",{staticClass:"context-menu-item",on:{click:function(e){t.removeLeftRoutes(t.activeIndex)}}},[t._v("关闭左标签")]),n("li",{staticClass:"context-menu-item",on:{click:function(e){t.removeRightRoutes(t.activeIndex)}}},[t._v("关闭右标签")]),n("li",{staticClass:"context-menu-item",on:{click:function(e){t.clearRoutes()}}},[t._v("关闭所有标签")])])],2)},V=[],j=n("0d17"),L=n.n(j),R=Object(b["a"])("tab"),q=R.mapGetters,U=R.mapActions,E={name:"TabPanel",components:{contextMenu:L.a},data:function(){return{activeIndex:0}},computed:q(["routes"]),methods:m({},q(["getPreviousRoutePath"]),U(["initRoutesStatus","highlightRoute","removeRoute","removeLeftRoutes","removeRightRoutes","removeOtherRoutes","clearRoutes"]),{openContextMenu:function(t){this.activeIndex=t,this.$refs.ctxMenu.open()},highlightHomeTab:function(){this.initRoutesStatus(),this.$router.push({name:"HomePage"})},openRoute:function(t){this.$router.push(t),this.highlightRoute(t)},closeRoute:function(t){this.removeRoute(t)}})},O=E,Z=(n("c095"),Object(u["a"])(O,A,V,!1,null,"224f4605",null));Z.options.__file="TabPanel.vue";var z=Z.exports,P=n("bcf9"),T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"the-footer"},[n("p",{staticClass:"footer-description"},[t._v("xiaoweijiagou@163.com ©小威架构")])])}],W={name:"TheFooter"},X=W,I=(n("563c"),Object(u["a"])(X,T,G,!1,null,"0f012197",null));I.options.__file="TheFooter.vue";var F=I.exports,J={name:"HomeLayout",components:{TheHeader:f,TheSidebar:C,TapPanel:z,BaseBreadcrumb:P["a"],TheFooter:F}},S=J,H=(n("a0f0"),Object(u["a"])(S,o,r,!1,null,"3ccffb6f",null));H.options.__file="HomeLayout.vue";e["default"]=H.exports},ef04:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3f6f8673.a67f2305.js.map
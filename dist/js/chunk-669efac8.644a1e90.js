(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-669efac8"],{"0e90":function(t,e,n){"use strict";var a=n("1129"),r=a["c"].reactiveProp;e["a"]={extends:a["b"],mixins:[r],props:["chartData","options"],mounted:function(){this.renderChart(this.chartData,this.options)}}},"34ee":function(t,e,n){(function(n){var a,r,i,o={scope:{}};o.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},o.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:"undefined"!=typeof n&&null!=n?n:t},o.global=o.getGlobal(this),o.SYMBOL_PREFIX="jscomp_symbol_",o.initSymbol=function(){o.initSymbol=function(){},o.global.Symbol||(o.global.Symbol=o.Symbol)},o.symbolCounter_=0,o.Symbol=function(t){return o.SYMBOL_PREFIX+(t||"")+o.symbolCounter_++},o.initSymbolIterator=function(){o.initSymbol();var t=o.global.Symbol.iterator;t||(t=o.global.Symbol.iterator=o.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&o.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return o.arrayIterator(this)}}),o.initSymbolIterator=function(){}},o.arrayIterator=function(t){var e=0;return o.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},o.iteratorPrototype=function(t){return o.initSymbolIterator(),t={next:t},t[o.global.Symbol.iterator]=function(){return this},t},o.array=o.array||{},o.iteratorFromArray=function(t,e){o.initSymbolIterator(),t instanceof String&&(t+="");var n=0,a={next:function(){if(n<t.length){var r=n++;return{value:e(r,t[r]),done:!1}}return a.next=function(){return{done:!0,value:void 0}},a.next()}};return a[Symbol.iterator]=function(){return a},a},o.polyfill=function(t,e,n,a){if(e){for(n=o.global,t=t.split("."),a=0;a<t.length-1;a++){var r=t[a];r in n||(n[r]={}),n=n[r]}t=t[t.length-1],a=n[t],e=e(a),e!=a&&null!=e&&o.defineProperty(n,t,{configurable:!0,writable:!0,value:e})}},o.polyfill("Array.prototype.keys",function(t){return t||function(){return o.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var s=this;(function(n,o){r=[],a=o,i="function"===typeof a?a.apply(e,r):a,void 0===i||(t.exports=i)})(0,function(){function t(t){if(!V.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var n=t.length,a=2<=arguments.length?arguments[1]:void 0,r=[],i=0;i<n;i++)if(i in t){var o=t[i];e.call(a,o,i,t)&&r.push(o)}return r}function n(t){return t.reduce(function(t,e){return t.concat(V.arr(e)?n(e):e)},[])}function a(e){return V.arr(e)?e:(V.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function r(t,e){return t.some(function(t){return t===e})}function i(t){var e,n={};for(e in t)n[e]=t[e];return n}function o(t,e){var n,a=i(t);for(n in t)a[n]=e.hasOwnProperty(n)?e[n]:t[n];return a}function u(t,e){var n,a=i(t);for(n in e)a[n]=V.und(t[n])?e[n]:t[n];return a}function c(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,a){return e+e+n+n+a+a});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var n=parseInt(e[2],16);e=parseInt(e[3],16);return"rgba("+t+","+n+","+e+",1)"}function l(t){function e(t,e,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?t+6*(e-t)*n:.5>n?e:n<2/3?t+(e-t)*(2/3-n)*6:t}var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(n[1])/360;var a=parseInt(n[2])/100,r=parseInt(n[3])/100;n=n[4]||1;if(0==a)r=a=t=r;else{var i=.5>r?r*(1+a):r+a-r*a,o=2*r-i;r=e(o,i,t+1/3),a=e(o,i,t);t=e(o,i,t-1/3)}return"rgba("+255*r+","+255*a+","+255*t+","+n+")"}function f(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function d(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}function m(t,e){return V.fnc(t)?t(e.target,e.id,e.total):t}function p(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function h(t,e){return V.dom(t)&&r(j,e)?"transform":V.dom(t)&&(t.getAttribute(e)||V.svg(t)&&t[e])?"attribute":V.dom(t)&&"transform"!==e&&p(t,e)?"css":null!=t[e]?"object":void 0}function y(t,n){var a=d(n);a=-1<n.indexOf("scale")?1:0+a;if(t=t.style.transform,!t)return a;for(var r=[],i=[],o=[],s=/(\w+)\((.+?)\)/g;r=s.exec(t);)i.push(r[1]),o.push(r[2]);return t=e(o,function(t,e){return i[e]===n}),t.length?t[0]:a}function v(t,e){switch(h(t,e)){case"transform":return y(t,e);case"css":return p(t,e);case"attribute":return t.getAttribute(e)}return t[e]||0}function g(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var a=f(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(n[0],"")),n[0][0]){case"+":return e+t+a;case"-":return e-t+a;case"*":return e*t+a}}function b(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function w(t){t=t.points;for(var e,n=0,a=0;a<t.numberOfItems;a++){var r=t.getItem(a);0<a&&(n+=b(e,r)),e=r}return n}function x(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return b({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return w(t);case"polygon":var e=t.points;return w(t)+b(e.getItem(e.numberOfItems-1),e.getItem(0))}}function _(t,e){function n(n){return n=void 0===n?0:n,t.el.getPointAtLength(1<=e+n?e+n:0)}var a=n(),r=n(-1),i=n(1);switch(t.property){case"x":return a.x;case"y":return a.y;case"angle":return 180*Math.atan2(i.y-r.y,i.x-r.x)/Math.PI}}function C(t,e){var n,a=/-?\d*\.?\d+/g;if(n=V.pth(t)?t.totalLength:t,V.col(n))if(V.rgb(n)){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=r?"rgba("+r[1]+",1)":n}else n=V.hex(n)?c(n):V.hsl(n)?l(n):void 0;else r=(r=f(n))?n.substr(0,n.length-r.length):n,n=e&&!/\s/g.test(n)?r+e:r;return n+="",{original:n,numbers:n.match(a)?n.match(a).map(Number):[0],strings:V.str(t)||e?n.split(a):[]}}function A(t){return t=t?n(V.arr(t)?t.map(a):a(t)):[],e(t,function(t,e,n){return n.indexOf(t)===e})}function S(t){var e=A(t);return e.map(function(t,n){return{target:t,id:n,total:e.length}})}function k(t,e){var n=i(e);if(V.arr(t)){var r=t.length;2!==r||V.obj(t[0])?V.fnc(e.duration)||(n.duration=e.duration/r):t={value:t}}return a(t).map(function(t,n){return n=n?0:e.delay,t=V.obj(t)&&!V.pth(t)?t:{value:t},V.und(t.delay)&&(t.delay=n),t}).map(function(t){return u(t,n)})}function M(t,e){var n,a={};for(n in t){var r=m(t[n],e);V.arr(r)&&(r=r.map(function(t){return m(t,e)}),1===r.length&&(r=r[0])),a[n]=r}return a.duration=parseFloat(a.duration),a.delay=parseFloat(a.delay),a}function I(t){return V.arr(t)?E.apply(this,t):B[t]}function P(t,e){var n;return t.tweens.map(function(a){a=M(a,e);var r=a.value,i=v(e.target,t.name),o=n?n.to.original:i,s=(o=V.arr(r)?r[0]:o,g(V.arr(r)?r[1]:r,o));i=f(s)||f(o)||f(i);return a.from=C(o,i),a.to=C(s,i),a.start=n?n.end:t.offset,a.end=a.start+a.delay+a.duration,a.easing=I(a.easing),a.elasticity=(1e3-Math.min(Math.max(a.elasticity,1),999))/1e3,a.isPath=V.pth(r),a.isColor=V.col(a.from.original),a.isColor&&(a.round=1),n=a})}function D(t,a){return e(n(t.map(function(t){return a.map(function(e){var n=h(t.target,e.name);if(n){var a=P(e,t);e={type:n,property:e.name,animatable:t,tweens:a,duration:a[a.length-1].end,delay:a[0].delay}}else e=void 0;return e})})),function(t){return!V.und(t)})}function O(t,e,n,a){var r="delay"===t;return e.length?(r?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):r?a.delay:n.offset+a.delay+a.duration}function F(t){var e,n=o($,t),a=o(T,t),r=S(t.targets),i=[],s=u(n,a);for(e in t)s.hasOwnProperty(e)||"targets"===e||i.push({name:e,offset:s.offset,tweens:k(t[e],a)});return t=D(r,i),u(n,{children:[],animatables:r,animations:t,duration:O("duration",t,n,a),delay:O("delay",t,n,a)})}function N(t){function n(){return window.Promise&&new Promise(function(t){return f=t})}function a(t){return m.reversed?m.duration-t:t}function r(t){for(var n=0,a={},r=m.animations,i=r.length;n<i;){var o=r[n],s=o.animatable,u=o.tweens,c=u.length-1,l=u[c];c&&(l=e(u,function(e){return t<e.end})[0]||l);u=Math.min(Math.max(t-l.start-l.delay,0),l.duration)/l.duration;for(var f=isNaN(u)?1:l.easing(u,l.elasticity),d=(u=l.to.strings,l.round),h=(c=[],void 0),y=(h=l.to.numbers.length,0);y<h;y++){var v=void 0,g=(v=l.to.numbers[y],l.from.numbers[y]);v=l.isPath?_(l.value,f*v):g+f*(v-g);d&&(l.isColor&&2<y||(v=Math.round(v*d)/d)),c.push(v)}if(l=u.length)for(h=u[0],f=0;f<l;f++)d=u[f+1],y=c[f],isNaN(y)||(h=d?h+(y+d):h+(y+" "));else h=c[0];q[o.type](s.target,o.property,h,a,s.id),o.currentValue=h,n++}if(n=Object.keys(a).length)for(r=0;r<n;r++)L||(L=p(document.body,"transform")?"transform":"-webkit-transform"),m.animatables[r].target.style[L]=a[r].join(" ");m.currentTime=t,m.progress=t/m.duration*100}function i(t){m[t]&&m[t](m)}function o(){m.remaining&&!0!==m.remaining&&m.remaining--}function s(t){var e=m.duration,s=m.offset,p=s+m.delay,h=m.currentTime,y=m.reversed,v=a(t);if(m.children.length){var g=m.children,b=g.length;if(v>=m.currentTime)for(var w=0;w<b;w++)g[w].seek(v);else for(;b--;)g[b].seek(v)}(v>=p||!e)&&(m.began||(m.began=!0,i("begin")),i("run")),v>s&&v<e?r(v):(v<=s&&0!==h&&(r(0),y&&o()),(v>=e&&h!==e||!e)&&(r(e),y||o())),i("update"),t>=e&&(m.remaining?(c=u,"alternate"===m.direction&&(m.reversed=!m.reversed)):(m.pause(),m.completed||(m.completed=!0,i("complete"),"Promise"in window&&(f(),d=n()))),l=0)}t=void 0===t?{}:t;var u,c,l=0,f=null,d=n(),m=F(t);return m.reset=function(){var t=m.direction,e=m.loop;for(m.currentTime=0,m.progress=0,m.paused=!0,m.began=!1,m.completed=!1,m.reversed="reverse"===t,m.remaining="alternate"===t&&1===e?2:e,r(0),t=m.children.length;t--;)m.children[t].reset()},m.tick=function(t){u=t,c||(c=u),s((l+u-c)*N.speed)},m.seek=function(t){s(a(t))},m.pause=function(){var t=z.indexOf(m);-1<t&&z.splice(t,1),m.paused=!0},m.play=function(){m.paused&&(m.paused=!1,c=0,l=a(m.currentTime),z.push(m),R||U())},m.reverse=function(){m.reversed=!m.reversed,c=0,l=a(m.currentTime)},m.restart=function(){m.pause(),m.reset(),m.play()},m.finished=d,m.reset(),m.autoplay&&m.play(),m}var L,$={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},T={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},j="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),V={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return V.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||V.svg(t)},str:function(t){return"string"===typeof t},fnc:function(t){return"function"===typeof t},und:function(t){return"undefined"===typeof t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return V.hex(t)||V.rgb(t)||V.hsl(t)}},E=function(){function t(t,e,n){return(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t}return function(e,n,a,r){if(0<=e&&1>=e&&0<=a&&1>=a){var i=new Float32Array(11);if(e!==n||a!==r)for(var o=0;11>o;++o)i[o]=t(.1*o,e,a);return function(o){if(e===n&&a===r)return o;if(0===o)return 0;if(1===o)return 1;for(var s=0,u=1;10!==u&&i[u]<=o;++u)s+=.1;--u;u=s+(o-i[u])/(i[u+1]-i[u])*.1;var c=3*(1-3*a+3*e)*u*u+2*(3*a-6*e)*u+3*e;if(.001<=c){for(s=0;4>s;++s){if(c=3*(1-3*a+3*e)*u*u+2*(3*a-6*e)*u+3*e,0===c)break;var l=t(u,e,a)-o;u=u-l/c}o=u}else if(0===c)o=u;else{u=s,s=s+.1;var f=0;do{l=u+(s-u)/2,c=t(l,e,a)-o,0<c?s=l:u=l}while(1e-7<Math.abs(c)&&10>++f);o=l}return t(o,n,r)}}}}(),B=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),a={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,n){return 1-t(1-e,n)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,n){return.5>e?t(2*e,n)/2:1-t(-2*e+2,n)/2}]},r={linear:E(.25,.25,.75,.75)},i={};for(e in a)i.type=e,a[i.type].forEach(function(t){return function(e,a){r["ease"+t.type+n[a]]=V.fnc(e)?e:E.apply(s,e)}}(i)),i={type:i.type};return r}(),q={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,a,r){a[r]||(a[r]=[]),a[r].push(e+"("+n+")")}},z=[],R=0,U=function(){function t(){R=requestAnimationFrame(e)}function e(e){var n=z.length;if(n){for(var a=0;a<n;)z[a]&&z[a].tick(e),a++;t()}else cancelAnimationFrame(R),R=0}return t}();return N.version="2.2.0",N.speed=1,N.running=z,N.remove=function(t){t=A(t);for(var e=z.length;e--;)for(var n=z[e],a=n.animations,i=a.length;i--;)r(t,a[i].animatable.target)&&(a.splice(i,1),a.length||n.pause())},N.getValue=v,N.path=function(e,n){var a=V.str(e)?t(e)[0]:e,r=n||100;return function(t){return{el:a,property:t,totalLength:x(a)*(r/100)}}},N.setDashoffset=function(t){var e=x(t);return t.setAttribute("stroke-dasharray",e),e},N.bezier=E,N.easings=B,N.timeline=function(t){var e=N(t);return e.pause(),e.duration=0,e.add=function(n){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),a(n).forEach(function(n){var a=u(n,o(T,t||{}));a.targets=a.targets||t.targets,n=e.duration;var r=a.offset;a.autoplay=!1,a.direction=e.direction,a.offset=V.und(r)?n:g(r,n),e.began=!0,e.completed=!0,e.seek(a.offset),a=N(a),a.began=!0,a.completed=!0,a.duration>n&&(e.duration=a.duration),e.children.push(a)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},N.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},N})}).call(this,n("d635"))},8589:function(t,e,n){"use strict";var a=n("1129"),r=a["c"].reactiveProp;e["a"]={extends:a["a"],mixins:[r],props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}}},b0f0:function(t,e,n){},d60a:function(t,e,n){"use strict";var a=n("b0f0"),r=n.n(a);r.a},f4a9:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-index"},[n("section",{staticClass:"data-summary"},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("i",{staticClass:"fa fa-gears"}),n("span",[t._v(" 关键数据实时指标")])]),t.dataReady?n("ul",{staticClass:"clearfix"},t._l(t.summary,function(e){return n("router-link",{key:e.identifier,staticClass:"data-summary-item",class:e.color,attrs:{to:e.path,tag:"li"}},[n("p",{staticClass:"data-summary-number"},[n("AnimatedNumber",{attrs:{value:t.statisticData[e.identifier],formatValue:t.formatValue,duration:600}})],1),n("p",{staticClass:"data-summary-title"},[t._v(t._s(e.title))])])})):t._e()])],1),n("section",{staticClass:"data-summary"},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("i",{staticClass:"fa fa-gears"}),n("span",[t._v(" 关键数据指标")])]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData1,"show-header":!1,size:"small",border:"",stripe:""}},[n("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("nameTransfer")(e.row.name)))])]}}])}),n("el-table-column",{attrs:{prop:"value"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",[0===e.$index?n("span",[t._v(t._s(t._f("number")(e.row.value)))]):n("span",[t._v(t._s(t._f("RMB")(e.row.value)))])])]}}])})],1),n("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:t.tableData2,"show-header":!1,size:"small",border:"",stripe:""}},[n("el-table-column",{attrs:{prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("nameTransfer")(e.row.name)))])]}}])}),n("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("number")(e.row.value)))])]}}])})],1)],1)],1),n("div",{staticClass:"data-summary"},[n("section",{staticClass:"data-summary"},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("i",{staticClass:"fa fa-gears"}),n("span",[t._v(" 存款统计")])]),n("div",{staticClass:"chart-container"},[n("DoughnutChart",{attrs:{"chart-data":t.chartDoughnutData,width:920}})],1)])],1),n("section",{staticClass:"data-summary"},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("i",{staticClass:"fa fa-gears"}),n("span",[t._v(" 系统公告")])]),n("div",[n("ul",t._l(t.systemNotices,function(e){return n("li",{key:e.id,staticClass:"note-item clearfix"},[n("span",{staticClass:"note-info"},[t._v("\n                "+t._s(e.title)+"\n              ")]),n("span",{staticClass:"note-time"},[t._v(t._s(t._f("time")(e.onlineTime)))])])}))])])],1),n("section",{staticClass:"data-summary"},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("i",{staticClass:"fa fa-gears"}),n("span",[t._v(" 系统消息")])]),n("ul",t._l(t.systemMessages,function(e){return n("li",{key:e.id,staticClass:"note-item clearfix"},[n("span",{staticClass:"note-info"},[t._v("\n              "+t._s(e.title)+"\n            ")]),n("span",{staticClass:"note-time"},[t._v(t._s(t._f("time")(e.createTime)))])])}))])],1),n("section",{staticClass:"data-summary"},[n("el-card",[n("div",{attrs:{slot:"header"},slot:"header"},[n("i",{staticClass:"fa fa-gears"}),n("span",[t._v(" 登录异常警告")])]),n("div",{staticStyle:{"min-height":"120px"}},[n("p",[t._v("暂无内容")])])])],1)])])},r=[],i=(n("3a0f"),n("a3a3"),n("4d0b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v(t._s(t.formatValue(Number(t.animatedValue))))])}),o=[],s=(n("84fb"),n("34ee")),u=n.n(s),c={props:{value:{type:[Number,String],default:"0",required:!0},formatValue:{type:Function,default:function(t){return t}},easing:{type:String,default:"linear"},duration:{type:Number,default:1e3},update:Function,begin:Function,complete:Function,run:Function,delay:{type:Number,default:0}},data:function(){return{animatedValue:0}},mounted:function(){this.animateValue(this.value)},watch:{value:function(t){this.animateValue(t)}},methods:{animateValue:function(t){var e=this.begin,n=this.easing,a=this.duration,r=this.complete,i=this.update,o=this.run,s=this.delay;u()({targets:this,animatedValue:t,duration:a,easing:n,update:i,begin:e,complete:r,run:o,delay:s})}}},l=c,f=n("048f"),d=Object(f["a"])(l,i,o,!1,null,null,null);d.options.__file="AnimatedNumber.vue";var m=d.exports,p=n("8589"),h=n("0e90"),y={name:"homeIndex",components:{AnimatedNumber:m,BarChart:p["a"],DoughnutChart:h["a"]},filters:{nameTransfer:function(t){switch(t){case"onlineuseramount":return"当前在线人数";case"useramount":return"总注册会员数";case"todayuseramount":return"今日新增会员数";case"todayorderamount":return"今日注单笔数";case"todayordermoney":return"今日注单总额";case"totalAwardAmount":return"今日派彩总额";case"controlamount":return"监控会员数";case"activeuseramount":return"活跃用户数";case"depositmoney":return"今日充值金额";case"drawmoney":return"今日提款金额";default:return""}}},data:function(){return{show:!0,chartBarData:null,chartDoughnutData:null,systemNotices:[],systemMessages:[],statisticData:{},dataReady:!1,tableData1:[],tableData2:[],summary:[{title:"今日新增会员数量",identifier:"todayuseramount",color:"blue",path:{name:"UsersList"}},{title:"总会员数量",identifier:"useramount",color:"orange",path:{name:"UsersList"}},{title:"今日注单笔数",identifier:"todayorderamount",color:"purple",path:{name:"LotteryStatistics"}},{title:"今日注单总额",identifier:"todayordermoney",color:"green",path:{name:"LotteryStatistics"}},{title:"今日派彩总额",identifier:"totalAwardAmount",color:"red",path:{name:"LotteryStatistics"}}]}},created:function(){this.fetchIndexStatistic(),this.fetchSystemNotices(),this.fetchSystemMessages(),this.fetchKeyData()},mounted:function(){this.fetchUsersOnline(),this.fetchUsersDeposit()},methods:{formatValue:function(t){return t.toFixed(0)},fetchIndexStatistic:function(){var t=this;this.$axios.get("/api-b/index/statistic").then(function(e){t.statisticData=e.data.data,t.dataReady=!0}).catch(function(t){return console.log(t)})},fetchUsersOnline:function(){var t=this;this.$axios.get("/api-b/index/statistic/online").then(function(e){t.chartBarData={labels:t.$_.map(e.data.data.today,"time"),datasets:[{label:"今日 会员在线人数",backgroundColor:"#60A5B5",data:t.$_.map(e.data.data.today,"amount")},{label:"昨日 会员在线人数",backgroundColor:"#5AC79D",data:t.$_.map(e.data.data.yesterday,"amount")}]}}).catch(function(t){return console.log(t)})},fetchSystemNotices:function(){var t=this;this.$httpAPI.fetchSystemNoticeList({params:{pageNo:1,pageSize:10}}).then(function(e){t.systemNotices=e.data.data}).catch(function(t){return console.log(t)})},fetchSystemMessages:function(){var t=this;this.$httpAPI.fetchSystemMessageList({params:{pageNo:1,pageSize:10}}).then(function(e){t.systemMessages=e.data.data}).catch(function(t){return console.log(t)})},fetchKeyData:function(){var t=this;this.$httpAPI.fetchKeyData().then(function(e){var n=e.data.data,a=[],r=[];for(var i in n)switch(i){case"onlineuseramount":r[0]={name:i,value:n[i]};break;case"useramount":r[2]={name:i,value:n[i]};break;case"todayuseramount":r[3]={name:i,value:n[i]};break;case"todayorderamount":a[0]={name:i,value:n[i]};break;case"todayordermoney":a[1]={name:i,value:n[i]};break;case"totalAwardAmount":a[2]={name:i,value:n[i]};break;case"controlamount":r[4]={name:i,value:n[i]};break;case"activeuseramount":r[1]={name:i,value:n[i]};break;case"depositmoney":a[3]={name:i,value:n[i]};break;case"drawmoney":a[4]={name:i,value:n[i]};break;default:return}t.tableData1=a,t.tableData2=r}).catch(function(t){return console.log(t)})},fetchUsersDeposit:function(){var t=this;this.$axios.get("/api-b/index/statistic/deposit").then(function(e){var n=e.data.data,a=[],r=[];for(var i in n)a.push(t._transferPayType(i)),r.push(n[i].toFixed(2));t.chartDoughnutData={labels:a,datasets:[{backgroundColor:["#FC7A6A","#60A5B5","#F1C77A","#8994A8","#5AC79D"],data:r}]}}).catch(function(t){return console.log(t)})},_transferPayType:function(t){switch(t){case"ali":return"支付宝";case"qq":return"Q币";case"remittance":return"汇款";case"unionpay":return"银联";case"wechat":return"微信";default:return"支付宝"}}}},v=y,g=(n("d60a"),Object(f["a"])(v,a,r,!1,null,"fa27feec",null));g.options.__file="HomePage.vue";e["default"]=g.exports}}]);
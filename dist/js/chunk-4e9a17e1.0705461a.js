(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e9a17e1"],{"123f":function(t,e,a){"use strict";var n=a("4923"),i=a.n(n);i.a},"2d3b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dice",class:t.diceClassName})},i=[],r=(a("84fb"),{props:{number:{type:Number,default:1},size:{type:String,default:"small"}},computed:{diceClassName:function(){return"".concat(this.size," ").concat(this.size,"-").concat(this.number)}}}),s=r,l=(a("8f5f"),a("048f")),o=Object(l["a"])(s,n,i,!1,null,"36f70314",null);o.options.__file="BaseDice.vue";e["a"]=o.exports},"322c":function(t,e,a){"use strict";a("5616");var n={validateRequired:function(t){return{required:!0,message:"".concat(t,"不能为空")}},validateSelect:function(t){return{required:!0,message:"".concat(t,"至少选择其中一个")}},validateInteger:function(t,e){return arguments[1]?[{required:!0,message:"".concat(t,"不能为空")},{pattern:new RegExp("^[0-9]{1,".concat(e,"}$")),message:"".concat(t,"必须 0 - ").concat(i(e)," 为之间整数")}]:[{required:!0,message:"".concat(t,"不能为空")},{pattern:/^[0-9]+$/,message:"".concat(t,"必须为整数")}]}};function i(t){for(var e="",a=0;a<t;a++)e+="9";return e}e["a"]=n},4923:function(t,e,a){},5616:function(t,e,a){var n=a("53da"),i=a("69d8"),r=a("9a0d").f,s=a("e853").f,l=a("c28a"),o=a("2fc4"),u=n.RegExp,c=u,d=u.prototype,m=/a/g,f=/a/g,b=new u(m)!==m;if(a("f711")&&(!b||a("cce3")(function(){return f[a("5761")("match")]=!1,u(m)!=m||u(f)==f||"/a/i"!=u(m,"i")}))){u=function(t,e){var a=this instanceof u,n=l(t),r=void 0===e;return!a&&n&&t.constructor===u&&r?t:i(b?new c(n&&!r?t.source:t,e):c((n=t instanceof u)?t.source:t,n&&r?o.call(t):e),a?this:d,u)};for(var p=function(t){t in u||r(u,t,{configurable:!0,get:function(){return c[t]},set:function(e){c[t]=e}})},h=s(c),g=0;h.length>g;)p(h[g++]);d.constructor=u,u.prototype=d,a("7e22")(n,"RegExp",u)}a("2943")("RegExp")},"66e9":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"games-menu"},[a("el-menu",{attrs:{"default-active":t.gameType,mode:"vertical","unique-opened":""}},[t._l(t.menu,function(e){return[a("el-submenu",{key:e.id,attrs:{index:String(e.id)}},[a("template",{slot:"title"},[a("span",[t._v(t._s(e.name))])]),t._l(e.children,function(n){return[a("el-menu-item",{key:n.id,attrs:{index:String(n.id)},on:{click:function(a){t.$emit("on-change",{groupId:e.id,itemId:n.id})}}},[a("span",[t._v(t._s(n.name))])])]})],2)]})],2)],1)},i=[],r=(a("3a0f"),a("a3a3"),a("4d0b"),{name:"gamesMenu",props:{gameType:{type:String,default:""}},data:function(){return{menu:[]}},created:function(){this.getGamesMenu()},methods:{getGamesMenu:function(){var t=this;this.$httpAPI.fetchGamesMenu().then(function(e){t.menu=e.data.data}).catch(function(t){return console.log(t)})}}}),s=r,l=a("048f"),o=Object(l["a"])(s,n,i,!1,null,null,null);o.options.__file="GamesMenu.vue";e["a"]=o.exports},"8f5f":function(t,e,a){"use strict";var n=a("eb02"),i=a.n(n);i.a},"97ae":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("aside",{staticClass:"aside-menu"},[a("GamesMenu",{attrs:{gameType:"3"},on:{"on-change":t.handleMenuChange}})],1),a("div",{staticClass:"content-container"},[a("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tableData,function(t){return a("el-tab-pane",{key:t.type,attrs:{label:t.name,name:t.type}})})),t.subtabVisible?a("el-tabs",{attrs:{type:"card"},on:{"tab-click":t.handleSubtabClick},model:{value:t.activeSubtab,callback:function(e){t.activeSubtab=e},expression:"activeSubtab"}},t._l(t.subGame,function(t){return a("el-tab-pane",{key:t.type,attrs:{label:t.name,name:t.type}})})):t._e(),a("LotteryOddsTable",{attrs:{data:t.finalData},on:{"on-updated":function(e){t.fetchTableData()}}})],1)])},i=[],r=(a("3a0f"),a("a3a3"),a("4d0b"),a("1b629")),s=a("66e9"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{attrs:{data:t.data,size:"small","max-height":590,"highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"gameName",label:"彩票类型","min-width":100}}),a("el-table-column",{attrs:{prop:"name",label:"类型名称","min-width":120},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.remark.includes("三军")?a("span",[a("BaseDice",{attrs:{number:Number(e.row.name)}})],1):e.row.remark.match(/围骰\/全骰_\d+|长牌|短牌/)?a("span",[t._l(e.row.name.split(""),function(t,e){return[a("BaseDice",{key:e,attrs:{number:Number(t)}})]})],2):a("span",[t._v(t._s(e.row.name))])]}}])}),a("el-table-column",{attrs:{prop:"odds1",label:"赔率"}}),a("el-table-column",{attrs:{prop:"sort",label:"排列顺序"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":120}}),a("el-table-column",{attrs:{prop:"operations",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){t.showDialog(e.row,"dialogUpdate")}}})]}}])})],1),a("LotteryOddsDialogUpdate",{ref:"dialogUpdate",attrs:{data:t.activeItem},on:{"on-updated":function(e){t.$emit("on-updated")}}})],1)},o=[],u=a("2d3b"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.dialogVisible,title:"修改返水计划设置",width:"400px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"formUpdate",attrs:{model:t.formData,rules:t.rules,"label-width":"90px",size:"small"}},[a("el-form-item",{attrs:{prop:"name",label:"类型名称"}},[a("el-input",{attrs:{placeholder:"类型名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name","string"===typeof e?e.trim():e)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{prop:"odds1",label:"赔率"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"赔率"},model:{value:t.formData.odds1,callback:function(e){t.$set(t.formData,"odds1","string"===typeof e?e.trim():e)},expression:"formData.odds1"}})],1),a("el-form-item",{attrs:{prop:"sort",label:"排列顺序"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"排列顺序"},model:{value:t.formData.sort,callback:function(e){t.$set(t.formData,"sort","string"===typeof e?e.trim():e)},expression:"formData.sort"}})],1),a("el-form-item",{attrs:{prop:"remark",label:"备注"}},[a("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"备注"},model:{value:t.formData.remark,callback:function(e){t.$set(t.formData,"remark","string"===typeof e?e.trim():e)},expression:"formData.remark"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.submitForm("formUpdate")}}},[t._v("确定")])],1)],1)},d=[],m=(a("20a2"),a("322c")),f={name:"LotteryOddsDialogUpdate",mixins:[r["c"]],data:function(){return{updateHttpAPI:"updateLotterOddsItem",idParams:{},formData:{name:"",odds1:"",sort:0},rules:{name:m["a"].validateRequired("类型名称"),odds1:m["a"].validateRequired("赔率"),sort:m["a"].validateInteger("排列顺序")}}},watch:{data:function(){this.formData=Object.assign(this.formData,this.data),this.idParams={gameType:this.data.gameType,type:this.data.type,multiple:!0}}}},b=f,p=a("048f"),h=Object(p["a"])(b,c,d,!1,null,null,null);h.options.__file="LotteryOddsDialogUpdate.vue";var g=h.exports,v={name:"ResultsElevenTable",components:{BaseDice:u["a"],LotteryOddsDialogUpdate:g},mixins:[r["i"]]},y=v,x=Object(p["a"])(y,l,o,!1,null,null,null);x.options.__file="LotteryOddsTable.vue";var D=x.exports,_={name:"LotteryResults",components:{GamesMenu:s["a"],LotteryOddsTable:D},mixins:[r["m"]],data:function(){return{tableData:[],tableHttpAPI:"fetchLotterOddsList",requestParams:{gameType:3},tabIndex:0,subtabIndex:0}},computed:{activeTab:{get:function(){return this.tableData.length?this.tableData[this.tabIndex].type:"1"},set:function(){}},activeSubtab:{get:function(){return this.tableData.length?this.tableData[this.tabIndex].children[0].type:"1.1"},set:function(){}},subtabVisible:function(){return!!this.tableData.length&&null!==this.tableData[this.tabIndex].children[0].children},subGame:function(){return this.tableData.length?this.tableData[this.tabIndex].children:[]},finalData:function(){return this.tableData.length?this.subtabVisible?this.tableData[this.tabIndex].children[this.subtabIndex].children:this.tableData[this.tabIndex].children:[]}},methods:{handleTabClick:function(t){this.tabIndex=t.index,this.subtabIndex=0},handleSubtabClick:function(t){this.subtabIndex=t.index},handleMenuChange:function(t){t.groupId;var e=t.itemId;this.tabIndex=0,this.subtabIndex=0,this.requestParams={gameType:e,pageNo:1,pageSize:10},this.fetchTableData()}}},k=_,w=(a("123f"),Object(p["a"])(k,n,i,!1,null,"608abaf7",null));w.options.__file="index.vue";e["default"]=w.exports},eb02:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4e9a17e1.0705461a.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73698309"],{"0c92":function(e,t,a){},"209d":function(e,t,a){"use strict";var n=a("c6c3"),r=a.n(n);r.a},"2d3b":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dice",class:e.diceClassName})},r=[],l=(a("84fb"),{props:{number:{type:[Number,String],default:99},size:{type:String,default:"small"}},computed:{diceClassName:function(){return"".concat(this.size," ").concat(this.size,"-").concat(this.number)}}}),i=l,s=(a("953c"),a("048f")),c=Object(s["a"])(i,n,r,!1,null,"8c2702dc",null);c.options.__file="BaseDice.vue";t["a"]=c.exports},"322c":function(e,t,a){"use strict";a("5616");var n={validateRequired:function(e){return{required:!0,message:"".concat(e,"不能为空")}},validateSelect:function(e){return{required:!0,message:"".concat(e,"至少选择其中一个")}},validatePhone:function(e){return[{required:!0,message:"".concat(e,"不能为空")},{pattern:/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,message:"请输入有效的11位手机号码"}]},validateStringLength:function(e,t,a){return[{required:!0,message:"".concat(e,"不能为空")},{min:t,max:a,message:"".concat(e,"长度在 ").concat(t," - ").concat(a," 字符之间")}]},validateInteger:function(e,t){return arguments[1]?[{required:!0,message:"".concat(e,"不能为空")},{pattern:new RegExp("^[0-9]{1,".concat(t,"}$")),message:"".concat(e,"必须 0 - ").concat(r(t)," 为之间整数")}]:[{required:!0,message:"".concat(e,"不能为空")},{pattern:/^[0-9]+$/,message:"".concat(e,"必须为整数")}]}};function r(e){for(var t="",a=0;a<e;a++)t+="9";return t}t["a"]=n},5616:function(e,t,a){var n=a("53da"),r=a("69d8"),l=a("9a0d").f,i=a("e853").f,s=a("c28a"),c=a("2fc4"),o=n.RegExp,d=o,u=o.prototype,m=/a/g,h=/a/g,f=new o(m)!==m;if(a("f711")&&(!f||a("cce3")(function(){return h[a("5761")("match")]=!1,o(m)!=m||o(h)==h||"/a/i"!=o(m,"i")}))){o=function(e,t){var a=this instanceof o,n=s(e),l=void 0===t;return!a&&n&&e.constructor===o&&l?e:r(f?new d(n&&!l?e.source:e,t):d((n=e instanceof o)?e.source:e,n&&l?c.call(e):t),a?this:u,o)};for(var p=function(e){e in o||l(o,e,{configurable:!0,get:function(){return d[e]},set:function(t){d[e]=t}})},b=i(d),y=0;b.length>y;)p(b[y++]);u.constructor=o,o.prototype=u,a("7e22")(n,"RegExp",o)}a("2943")("RegExp")},"66e9":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{attrs:{"default-active":e.gameType,mode:"vertical","unique-opened":""}},[e._l(e.menu,function(t){return[29!==t.id?a("el-submenu",{key:t.id,attrs:{index:String(t.id)}},[a("template",{slot:"title"},[a("span",[e._v(e._s(t.name))])]),e._l(t.children,function(t){return[a("el-menu-item",{key:t.id,attrs:{index:String(t.id)},on:{click:function(a){e.$emit("on-change",t)}}},[a("span",[e._v(e._s(t.name))])])]})],2):e._e()]})],2)},r=[],l=(a("84fb"),a("25d7"),{name:"GamesMenu",props:{gameType:{type:String,default:""}},data:function(){return{menu:[]}},created:function(){this.getGamesMenu()},methods:{getGamesMenu:function(){var e=this;this.$httpAPI.fetchGamesMenu().then(function(t){e.menu=t.data.data,e.$_.forEach(e.menu,function(t){e.$_.forEach(t.children,function(t){t.type===Number(e.gameType)&&e.$emit("on-loaded",t)})})}).catch(function(e){return console.log(e)})}}}),i=l,s=a("048f"),c=Object(s["a"])(i,n,r,!1,null,null,null);c.options.__file="GamesMenu.vue";t["a"]=c.exports},"953c":function(e,t,a){"use strict";var n=a("0c92"),r=a.n(n);r.a},"97ae":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("aside",{staticClass:"aside-menu"},[a("GamesMenu",{attrs:{gameType:"19"},on:{"on-change":e.handleMenuChange}})],1),a("div",{staticClass:"content-container"},[e.layers>0?a("el-tabs",{on:{"tab-click":function(t){e.handleTabClick(t,0)}},model:{value:e.layer1Tab,callback:function(t){e.layer1Tab=t},expression:"layer1Tab"}},e._l(e.tableData,function(e){return a("el-tab-pane",{key:e.type,attrs:{label:e.name,name:e.type}})})):e._e(),e.layers>1?a("el-tabs",{on:{"tab-click":function(t){e.handleTabClick(t,1)}},model:{value:e.layer2Tab,callback:function(t){e.layer2Tab=t},expression:"layer2Tab"}},e._l(e.tableData[e.layer1Index].children,function(e){return a("el-tab-pane",{key:e.type,attrs:{label:e.name,name:e.type}})})):e._e(),e.layers>2?a("el-tabs",{on:{"tab-click":function(t){e.handleTabClick(t,2)}},model:{value:e.layer3Tab,callback:function(t){e.layer3Tab=t},expression:"layer3Tab"}},e._l(e.tableData[e.layer1Index].children[e.layer2Index].children,function(e){return a("el-tab-pane",{key:e.type,attrs:{label:e.name,name:e.type}})})):e._e(),e.layers>3?a("el-tabs",{on:{"tab-click":e.handleTabClick},model:{value:e.layer4Tab,callback:function(t){e.layer4Tab=t},expression:"layer4Tab"}},e._l(e.tableData[e.layer1Index].children[e.layer2Index].children[e.layer3Index].children,function(e){return a("el-tab-pane",{key:e.type,attrs:{label:e.name,name:e.type}})})):e._e(),e.layers>4?a("el-tabs",{on:{"tab-click":e.handleTabClick},model:{value:e.layer4Tab,callback:function(t){e.layer4Tab=t},expression:"layer4Tab"}},e._l(e.tableData[0].children[0].children[0].children[0].children,function(e){return a("el-tab-pane",{key:e.type,attrs:{label:e.name,name:e.type}})})):e._e(),a("LotteryOddsTable",{attrs:{data:e.finalData},on:{"on-updated":function(t){e.fetchTableData()}}})],1)])},r=[],l=a("66e9"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.data,size:"small","max-height":590,"highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"gameName",label:"彩票类型","min-width":100}}),a("el-table-column",{attrs:{prop:"name",label:"类型名称","min-width":120},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.remark.includes("三军")?a("span",[a("BaseDice",{attrs:{number:Number(t.row.name)}})],1):t.row.remark.match(/围骰\/全骰_\d+|长牌|短牌/)?a("span",[e._l(t.row.name.split(""),function(e,t){return[a("BaseDice",{key:t,attrs:{number:Number(e)}})]})],2):a("span",[e._v(e._s(t.row.name))])]}}])}),a("el-table-column",{attrs:{prop:"odds1",label:"赔率"}}),a("el-table-column",{attrs:{prop:"sort",label:"排列顺序"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":120}}),a("el-table-column",{attrs:{prop:"operations",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogUpdate")}}})]}}])})],1),a("LotteryOddsDialogUpdate",{ref:"dialogUpdate",attrs:{data:e.activeItem},on:{"on-updated":function(t){e.$emit("on-updated")}}})],1)},s=[],c=a("1b629"),o=a("2d3b"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"修改彩票赔率设置",width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("LotteryOddsForm",{ref:"form",attrs:{data:e.data},on:{"on-validated":e.handleValidationSuccess}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.$refs.form.validateForm()}}},[e._v("确定")])],1)],1)},u=[],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{prop:"name",label:"类型名称"}},[a("el-input",{attrs:{placeholder:"类型名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name","string"===typeof t?t.trim():t)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{prop:"odds1",label:"赔率"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"赔率"},model:{value:e.formData.odds1,callback:function(t){e.$set(e.formData,"odds1","string"===typeof t?t.trim():t)},expression:"formData.odds1"}})],1),a("el-form-item",{attrs:{prop:"sort",label:"排列顺序"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"排列顺序"},model:{value:e.formData.sort,callback:function(t){e.$set(e.formData,"sort","string"===typeof t?t.trim():t)},expression:"formData.sort"}})],1),a("el-form-item",{attrs:{prop:"remark",label:"备注"}},[a("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"备注"},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark","string"===typeof t?t.trim():t)},expression:"formData.remark"}})],1)],1)},h=[],f=(a("3a0f"),a("a3a3"),a("4d0b"),a("322c")),p={name:"LotteryOddsForm",mixins:[c["e"]],data:function(){return{formData:{name:"",odds1:"",sort:0},rules:{name:f["a"].validateRequired("类型名称"),odds1:f["a"].validateRequired("赔率"),sort:f["a"].validateInteger("排列顺序")}}}},b=p,y=a("048f"),x=Object(y["a"])(b,m,h,!1,null,null,null);x.options.__file="LotteryOddsForm.vue";var g=x.exports,v={name:"LotteryOddsDialogUpdate",components:{LotteryOddsForm:g},mixins:[c["d"]],data:function(){return{updateHttpAPI:"updateLotterOddsItem",httpParams:{}}},watch:{data:function(){this.httpParams={gameType:this.data.gameType,type:this.data.type}}}},_=v,k=Object(y["a"])(_,d,u,!1,null,null,null);k.options.__file="LotteryOddsDialogUpdate.vue";var D=k.exports,T={name:"ResultsElevenTable",components:{BaseDice:o["a"],LotteryOddsDialogUpdate:D},mixins:[c["o"]]},I=T,w=Object(y["a"])(I,i,s,!1,null,null,null);w.options.__file="LotteryOddsTable.vue";var $=w.exports,L={name:"LotteryResults",components:{GamesMenu:l["a"],LotteryOddsTable:$},data:function(){return{tableData:[],tableHttpAPI:"fetchLotterOddsList",requestParams:{gameType:19},tabIndex:0,subtabIndex:0,layers:0,layer1Tab:"",layer1Index:0,layer2Tab:"",layer2Index:0,layer3Tab:"",layer3Index:0,layer4Tab:""}},created:function(){this.fetchTableData()},computed:{finalData:function(){switch(this.layers){case 0:return this.tableData.length&&(this.layer1Tab=this.tableData[this.layer1Index].type),this.tableData;case 1:return this.tableData[this.layer1Index].children;case 2:return this.tableData[this.layer1Index].children[this.layer2Index].children;case 3:return this.tableData[this.layer1Index].children[this.layer2Index].children[this.layer3Index].children;case 4:return this.tableData[0].children[0].children[0].children[0].children;default:return[]}}},methods:{handleTabClick:function(e,t){switch(t){case 0:this.layers=this._calcLayers(this.tableData[e.index].children)+1,this.layer1Index=e.index,this.layer2Index=0,this.layer3Index=0;break;case 1:this.layers=this._calcLayers(this.tableData[this.layer1Index].children[e.index].children)+2,this.layer2Index=e.index,this.layer3Index=0;break;case 2:this.layer3Index=e.index;break;case 3:this.layer4Index=e.index;break}},handleMenuChange:function(e){this.layer1Tab="",this.layer2Tab="",this.layer3Tab="",this.layer4Tab="",this.layer1Index=0,this.layer2Index=0,this.layer3Index=0,this.requestParams={gameType:e.type,pageNo:1,pageSize:10},this.fetchTableData()},fetchTableData:function(){var e=this;this.$httpAPI[this.tableHttpAPI](this.requestParams).then(function(t){t.data.data?(e.tableData=t.data.data,e.layers=e._calcLayers(e.tableData)):e.tableData=[]}).catch(function(e){return console.log(e)})},_calcLayers:function(e){if(!Array.isArray(e))throw new Error("Parameter must be Array");return e[0].children?e[0].children[0].children?e[0].children[0].children[0].children?e[0].children[0].children[0].children[0].children?e[0].children[0].children[0].children[0].children[0].children?e[0].children[0].children[0].children[0].children[0].children[0].children?6:5:4:3:2:1:0}}},O=L,E=(a("209d"),Object(y["a"])(O,n,r,!1,null,"738cb1aa",null));E.options.__file="index.vue";t["default"]=E.exports},c6c3:function(e,t,a){}}]);
//# sourceMappingURL=chunk-73698309.6faa1671.js.map
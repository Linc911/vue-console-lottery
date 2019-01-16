(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a69be2e4"],{"012c":function(e,t,a){"use strict";var n=a("1dbd"),l=a.n(n);l.a},"0c92":function(e,t,a){},"0ec5":function(e,t,a){"use strict";var n=a("c33a"),l=a.n(n);l.a},"1dbd":function(e,t,a){},"2d3b":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dice",class:e.diceClassName})},l=[],s=(a("84fb"),{props:{number:{type:[Number,String],default:99},size:{type:String,default:"small"}},computed:{diceClassName:function(){return"".concat(this.size," ").concat(this.size,"-").concat(this.number)}}}),i=s,r=(a("953c"),a("048f")),o=Object(r["a"])(i,n,l,!1,null,"8c2702dc",null);o.options.__file="BaseDice.vue";t["a"]=o.exports},"2e6c":function(e,t,a){},"30ce":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{style:e.styles,attrs:{placeholder:e.placeholder,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},l=[],s=(a("84fb"),{name:"FormSelectStatic",props:{value:{type:[String,Number],default:""},options:{type:Array,required:!0},placeholder:{type:String,default:"请选择"},styles:{type:Object,default:function(){return{}}}},data:function(){return{selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},methods:{reset:function(){this.selectedOption=""}}}),i=s,r=a("048f"),o=Object(r["a"])(i,n,l,!1,null,null,null);o.options.__file="FormSelectStatic.vue";t["a"]=o.exports},"66e9":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-menu",{attrs:{"default-active":e.gameType,mode:"vertical","unique-opened":""}},[e._l(e.menu,function(t){return[29!==t.id?a("el-submenu",{key:t.id,attrs:{index:String(t.id)}},[a("template",{slot:"title"},[a("span",[e._v(e._s(t.name))])]),e._l(t.children,function(t){return[a("el-menu-item",{key:t.id,attrs:{index:String(t.id)},on:{click:function(a){e.$emit("on-change",t)}}},[a("span",[e._v(e._s(t.name))])])]})],2):e._e()]})],2)},l=[],s=(a("84fb"),a("25d7"),{name:"GamesMenu",props:{gameType:{type:String,default:""}},data:function(){return{menu:[]}},created:function(){this.getGamesMenu()},methods:{getGamesMenu:function(){var e=this;this.$httpAPI.fetchGamesMenu().then(function(t){e.menu=t.data.data,e.$_.forEach(e.menu,function(t){e.$_.forEach(t.children,function(t){t.type===Number(e.gameType)&&e.$emit("on-loaded",t)})})}).catch(function(e){return console.log(e)})}}}),i=s,r=a("048f"),o=Object(r["a"])(i,n,l,!1,null,null,null);o.options.__file="GamesMenu.vue";t["a"]=o.exports},"6ffa":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("LotteryResultsSearch",{ref:"resultsSearch",on:{"on-search":e.handleSearch}}),a("div",[a("aside",{staticClass:"aside-menu"},[a("GamesMenu",{attrs:{gameType:"3"},on:{"on-loaded":e.handleLoaded,"on-change":e.handleMenuChange}})],1),a("div",{staticClass:"content-container"},[e.tableShow?a("LotteryResultsTable",{attrs:{data:e.tableData,rules:e.gameRules},on:{"on-changed":function(t){e.fetchTableData()}}}):e._e(),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1)])],1)},l=[],s=(a("fc47"),a("1b629")),i=a("66e9"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("FormInput",{ref:"drawno",attrs:{label:"彩票期号",width:"174px"},on:{submit:function(e){e.preventDefault(),e.stopPropagation()},"on-change":function(t){e.$set(e.formData,"drawno",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}}),a("FormDateRange",{ref:"dateRange",attrs:{label:"开奖时间"},on:{"on-change":e.handleDateRangeChange}}),a("FormSelectStatic",{ref:"status",attrs:{options:[{value:0,label:"未开奖"},{value:1,label:"未结算"},{value:2,label:"已结算"},{value:3,label:"已撤单"}],label:"结算状态",width:"100px"},on:{"on-change":function(t){e.$set(e.formData,"status",t)}}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)},o=[],c=a("b34f"),u=a("30ce"),d=a("8968"),m={name:"RemittanceShortcutSearch",components:{FormInput:c["a"],FormSelectStatic:u["a"],FormDateRange:d["a"]},mixins:[s["h"]],methods:{handleDateRangeChange:function(e){var t=e.startTime,a=e.endTime;this.formData.startDate=t,this.formData.endDate=a}}},f=m,p=a("048f"),h=Object(p["a"])(f,r,o,!1,null,null,null);h.options.__file="LotteryResultsSearch.vue";var b=h.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"gameName",label:"彩票类型","min-width":100}}),a("el-table-column",{attrs:{prop:"drawno",label:"彩票期号","min-width":80}}),a("el-table-column",{attrs:{label:"开奖时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.updateTime)))])]}}])}),a("el-table-column",{attrs:{label:"彩球号码","min-width":200},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[t.row.gameType>=7&&t.row.gameType<=17&&10!=t.row.gameType?e._l(t.row.balls,function(e,t){return a("span",{key:t},[a("BaseDice",{attrs:{number:e}})],1)}):e._l(t.row.balls,function(e,t){return a("span",{key:t},[a("LotteryBall",{attrs:{number:e}})],1)})],2)]}}])}),a("el-table-column",{attrs:{prop:"ballSum",label:"总和","min-width":45}}),a("el-table-column",{attrs:{label:"结算状态","min-width":70},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("lotteryStatus")(t.row.status)))])]}}])}),a("el-table-column",{attrs:{label:"操作","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[2!==t.row.status?a("div",[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialogManual(t.row,"dialogManual")}}},[e._v("手动开奖")])],1):e._e()]}}])})],1),a("LotteryResultsDialogManual",{ref:"dialogManual",attrs:{data:e.rules},on:{"on-changed":function(t){e.$emit("on-changed")}}}),a("LotteryResultsDialogCancel",{ref:"dialogCancel",attrs:{data:e.activeItem},on:{"on-canceled":function(t){e.$emit("on-changed")}}})],1)},v=[],y=a("2d3b"),_=a("e040"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"手动开奖",width:"768px",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"开奖选择："}},[this.data.gameType>=7&&this.data.gameType<=17&&10!=this.data.gameType?a("div",{staticClass:"container-box"},e._l(e.balls,function(t,n){return a("span",{key:n},[a("BaseDice",{attrs:{number:t},nativeOn:{click:function(a){e.choseBall(t,n)}}})],1)})):a("div",{staticClass:"container-box"},e._l(e.balls,function(t,n){return a("span",{key:n},[a("LotteryBall",{attrs:{number:t},nativeOn:{click:function(a){e.choseBall(t,n)}}})],1)}))]),a("el-form-item",{attrs:{label:"开奖结果："}},[this.data.gameType>=7&&this.data.gameType<=17&&10!=this.data.gameType?a("div",{staticClass:"container-box"},[a("draggable",{on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.results,callback:function(t){e.results=t},expression:"results"}},e._l(e.results,function(t,n){return a("span",{key:n},[a("BaseDice",{attrs:{number:t},nativeOn:{dblclick:function(a){e.undoBall(t,n)}}})],1)}))],1):a("div",{staticClass:"container-box"},[a("draggable",{on:{start:function(t){e.drag=!0},end:function(t){e.drag=!1}},model:{value:e.results,callback:function(t){e.results=t},expression:"results"}},e._l(e.results,function(t,n){return a("span",{key:n},[a("LotteryBall",{attrs:{number:t},nativeOn:{dblclick:function(a){e.undoBall(t,n)}}})],1)}))],1)]),a("el-form-item",[a("div",{staticClass:"tip-container"},[a("p",{staticClass:"tip-content"},[e._v("\n          操作提示："),a("br"),e._v("\n              1. 单击开奖选择框中的数字，可以选中该数字"),a("br"),e._v("\n              2. 双击开奖结果框中的数字，可以撤销该数字"),a("br"),e._v("\n              3. 拖动开奖结果框中的数字，可以调换顺序"),a("br")])])]),a("el-form-item",{staticStyle:{"text-align":"right"}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleConfirm}},[e._v("确认")])],1)],1)],1)},D=[],S=(a("4141"),a("20a2"),a("99ca")),k=a("93b1"),O=a.n(k),T={name:"LotteryResultsDialogCancel",components:{draggable:O.a,BaseDice:y["a"],LotteryBall:_["a"]},props:{data:{type:Object,required:!0}},data:function(){return{results:[],balls:Object.assign([],this.data.balls),dialogVisible:!1}},watch:{data:function(){this.balls=Object.assign([],this.data.balls),this.results=[]}},methods:{choseBall:function(e,t){this.results.length<this.data.ballNum?(this.results.push(e),this.data.repeat||this.balls.splice(t,1)):this.$message.warning("不符合游戏开奖规则：开奖数字为 ".concat(this.data.ballNum," 位"))},undoBall:function(e,t){this.results.splice(t,1),this.data.repeat||(this.balls.push(e),this.balls.sort(function(e,t){return e-t}))},handleConfirm:function(){var e=this;this.results.length<this.data.ballNum?this.$message.warning("不符合游戏开奖规则：开奖位数为 ".concat(this.data.ballNum," 位")):(this.dialogVisible=!1,this.$httpAPI.updateLotteryResultManual({gameType:this.data.gameType,drawno:this.data.drawno,balls:this.results}).then(function(t){200===t.data.status?(e.$emit("on-changed"),e.$message.success(S["a"].OPERATION_SUCCEEDED)):e.$message.error("".concat(S["a"].OPERATION_FAILED,": ").concat(t.data.msg))}).catch(function(t){console.log(t),e.$message.error(S["a"].SERVER_RESPONSE_EXCEPTION)}))},toggleDialogVisible:function(e){this.dialogVisible=e}}},C=T,R=(a("c5b0"),Object(p["a"])(C,w,D,!1,null,"a3505e28",null));R.options.__file="LotteryResultsDialogManual.vue";var $=R.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"撤单确认",width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("span",{staticClass:"highlight-text"},[e._v("撤单 ")]),e._v("游戏类型:\n    "),a("span",{staticClass:"highlight-text"},[e._v(e._s(e.data.gameName))]),e._v("    期号：\n    "),a("span",{staticClass:"highlight-text"},[e._v(e._s(e.data.drawno)+" ?")])]),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleConfirm}},[e._v("确认")]),a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")])],1)])},E=[],L={name:"LotteryResultsDialogCancel",props:{data:{type:Object,required:!0}},data:function(){return{dialogVisible:!1}},methods:{handleConfirm:function(){var e=this;this.dialogVisible=!1,this.$httpAPI.updateLotteryBillCancel({gameType:this.data.gameType,drawno:this.data.drawno}).then(function(t){200===t.data.status?(e.$emit("on-canceled"),e.$message.success(S["a"].OPERATION_SUCCEEDED)):e.$message.error("".concat(S["a"].OPERATION_FAILED,": ").concat(t.data.msg))}).catch(function(t){console.log(t),e.$message.error(S["a"].SERVER_RESPONSE_EXCEPTION)})},toggleDialogVisible:function(e){this.dialogVisible=e}}},N=L,P=(a("9c8a"),Object(p["a"])(N,x,E,!1,null,"039bf92d",null));P.options.__file="LotteryResultsDialogCancel.vue";var B=P.exports,I={name:"ResultsElevenTable",components:{BaseDice:y["a"],LotteryBall:_["a"],LotteryResultsDialogManual:$,LotteryResultsDialogCancel:B},props:{rules:{type:Object,required:!0}},mixins:[s["o"]],data:function(){return{activeItem:this.rules}},methods:{showDialogManual:function(e,t){var a=e.gameType,n=e.drawno;this.$refs[t].toggleDialogVisible(!0),this.rules.gameType=a,this.rules.drawno=n}}},j=I,M=Object(p["a"])(j,g,v,!1,null,null,null);M.options.__file="LotteryResultsTable.vue";var V=M.exports,F={name:"LotteryResults",components:{GamesMenu:i["a"],LotteryResultsSearch:b,LotteryResultsTable:V},data:function(){return{gameRules:{},tableShow:!1,tableHttpAPI:"fetchLotteryResultsList",requestParams:{gameType:3,pageNo:1,pageSize:10},page:{current:0,size:10,total:10}}},mixins:[s["j"],s["p"]],methods:{handleLoaded:function(e){var t=e.balls,a=e.ballNum,n=e.repeat;this.gameRules={balls:t,ballNum:a,repeat:n},this.tableShow=!0},handleMenuChange:function(e){var t=e.balls,a=e.ballNum,n=e.repeat,l=e.type;this.gameRules={ballNum:a,balls:t,repeat:n},this.$refs.resultsSearch.reset(),this.requestParams={gameType:l,pageNo:1,pageSize:10},this.fetchTableData()}}},A=F,z=(a("f605"),Object(p["a"])(A,n,l,!1,null,"33865caa",null));z.options.__file="index.vue";t["default"]=z.exports},8968:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:e.prop,label:e.label}},[a("el-date-picker",{style:{width:e.width},attrs:{type:"daterange","picker-options":e.pickerOptions,"default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small",align:"right"},on:{change:e.handleDatePickerChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},l=[],s={name:"FormDateRange",props:{prop:{type:String,default:""},label:{type:String,default:"时间查询"},width:{type:String,default:"auto"}},data:function(){return{value:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},methods:{handleDatePickerChange:function(e){var t;t=e?{startTime:Date.parse(e[0]),endTime:Date.parse(e[1])}:{startTime:"",endTime:""},this.$emit("on-change",t)},reset:function(){this.value=""}}},i=s,r=(a("012c"),a("048f")),o=Object(r["a"])(i,n,l,!1,null,"20ba6115",null);o.options.__file="FormDateRange.vue";t["a"]=o.exports},"953c":function(e,t,a){"use strict";var n=a("0c92"),l=a.n(n);l.a},"9c8a":function(e,t,a){"use strict";var n=a("cdcc"),l=a.n(n);l.a},b34f:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-input",{style:e.styles,attrs:{placeholder:e.placeholder,clearable:""},on:{input:function(t){e.$emit("on-change",t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},l=[],s={name:"FormInput",props:{placeholder:{type:String,default:"请输入内容"},styles:{type:Object,default:function(){return{}}}},data:function(){return{value:""}},methods:{reset:function(){this.value=""}}},i=s,r=a("048f"),o=Object(r["a"])(i,n,l,!1,null,null,null);o.options.__file="FormInput.vue";t["a"]=o.exports},c33a:function(e,t,a){},c5b0:function(e,t,a){"use strict";var n=a("dd67"),l=a.n(n);l.a},cdcc:function(e,t,a){},dd67:function(e,t,a){},e040:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"ball",style:{backgroundColor:e.bgcolor}},[e._v(e._s(e.number))])},l=[],s=(a("84fb"),{props:{number:{type:[Number,String],default:0},bgcolor:{type:String,default:"#189F92"}}}),i=s,r=(a("0ec5"),a("048f")),o=Object(r["a"])(i,n,l,!1,null,"f31dd8f8",null);o.options.__file="LotteryBall.vue";t["a"]=o.exports},f605:function(e,t,a){"use strict";var n=a("2e6c"),l=a.n(n);l.a}}]);
//# sourceMappingURL=chunk-a69be2e4.728a47d3.js.map
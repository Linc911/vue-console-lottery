(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09afcfe8"],{4009:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form-item",{class:{"custom-block":t.multiple},attrs:{prop:t.prop,label:t.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+t.label,multiple:t.multiple,filterable:t.filterable,clearable:""},on:{change:function(e){t.$emit("on-change",t.selectedOption)}},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)},n=[],r=(a("25d7"),a("84fb"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var t=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(e){t.$_.forEach(e.data.data,function(e){t.$_.forEach(e.children,function(e){t.options.push({value:e[t.valueAttr],label:e[t.labelAttr]})})})}).catch(function(t){return console.log(t)})}}}),i=r,s=a("048f"),o=Object(s["a"])(i,l,n,!1,null,null,null);o.options.__file="FormSelectGame.vue";e["a"]=o.exports},"498b":function(t,e,a){"use strict";var l=a("ef49"),n=a.n(l);n.a},"4beb":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form-item",{class:{"custom-block":t.multiple},attrs:{prop:t.prop,label:t.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+t.label,multiple:t.multiple,filterable:t.filterable,clearable:""},on:{change:function(e){t.$emit("on-change",t.selectedOption)}},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}},[t.optionRoot?a("el-option",{attrs:{label:t.rootLabel,value:t.rootValue}}):t._e(),t._l(t.options,function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})],2)],1)},n=[],r=(a("25d7"),a("84fb"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},optionRoot:{type:Boolean,default:!1},rootLabel:{type:String,default:"root"},rootValue:{type:[String,Number],default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var t=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(e){t.$_.forEach(e.data.data,function(e){t.options.push({value:e[t.valueAttr],label:e[t.labelAttr]})})}).catch(function(t){return console.log(t)})}}}),i=r,s=a("048f"),o=Object(s["a"])(i,l,n,!1,null,null,null);o.options.__file="FormSelect.vue";e["a"]=o.exports},"570d":function(t,e,a){"use strict";var l=a("5730"),n=a.n(l);n.a},5730:function(t,e,a){},8968:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form-item",{attrs:{prop:t.prop,label:t.label}},[a("el-date-picker",{style:{width:t.width},attrs:{type:t.type,"picker-options":t.pickerOptions,"default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small",align:"right"},on:{change:t.handleDatePickerChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},n=[],r={name:"FormDateRange",props:{prop:{type:String,default:""},type:{type:String,default:"daterange"},label:{type:String,default:"时间查询"},width:{type:String,default:"auto"}},data:function(){return{value:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]}}},methods:{handleDatePickerChange:function(t){var e;e=t?{startTime:Date.parse(t[0]),endTime:Date.parse(t[1])}:{startTime:"",endTime:""},this.$emit("on-change",e)},reset:function(){this.value=""}}},i=r,s=(a("570d"),a("048f")),o=Object(s["a"])(i,l,n,!1,null,"0f23e67f",null);o.options.__file="FormDateRange.vue";e["a"]=o.exports},ef49:function(t,e,a){},f563:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("StatisticsUsersSearch",{on:{"on-search":t.handleSearch}}),a("div",[a("ul",{staticClass:"statistics-summary clearfix"},[a("li",{staticClass:"pull-left"},[t._v("合计： 注单数量：【"+t._s(t.statistics.totalBets)+"】")]),a("li",{staticClass:"pull-left"},[t._v("下注金额：【"+t._s(t._f("RMB")(t.statistics.totalAmount))+"】")]),a("li",{staticClass:"pull-left"},[t._v("未结算金额："+t._s(t._f("RMB")(t.statistics.unsettled))+"】")]),a("li",{staticClass:"pull-left"},[t._v("净输赢：【"+t._s(t._f("RMB")(t.statistics.totalAwardAmount))+"】")])]),a("StatisticsUsersTable",{attrs:{data:t.tableData}}),a("BasePagination",{attrs:{page:t.page,httpURL:t.tableHttpAPI,requestParams:t.requestParams},on:{"on-change":t.handlePaginationChange}})],1)],1)},n=[],r=a("1b629"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{attrs:{model:t.formData,size:"small",inline:""}},[a("FormSelect",{ref:"userId",attrs:{httpAPIName:"fetchPublicUsers",httpAPIParams:{params:{pageNo:1,pageSize:1e3}},labelAttr:"username",valueAttr:"id",prop:"userId",label:"会员账户",width:"140px",filterable:""},on:{"on-change":function(e){t.$set(t.formData,"userId",e)}}}),a("FormSelectGame",{ref:"gameType",attrs:{httpAPIName:"fetchGamesMenu",httpAPIParams:{params:{type:1}},labelAttr:"name",valueAttr:"id",prop:"gameType",label:"游戏类型",filterable:""},on:{"on-change":function(e){t.$set(t.formData,"gameType",e)}}}),a("FormDateRange",{ref:"dateRange",attrs:{label:"下注时间"},on:{"on-change":t.handleDateRangeChange}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(e){return t.search(e)}}}),a("SearchReset",{nativeOn:{click:function(e){return t.reset(e)}}})],1)],1)},s=[],o=a("4beb"),c=a("4009"),u=a("8968"),p={name:"StatisticsUsersSearch",components:{FormSelect:o["a"],FormSelectGame:c["a"],FormDateRange:u["a"]},mixins:[r["h"]],methods:{handleDateRangeChange:function(t){var e=t.startTime,a=t.endTime;this.formData.startTime=e,this.formData.endTime=a}}},f=p,m=a("048f"),d=Object(m["a"])(f,i,s,!1,null,null,null);d.options.__file="StatisticsUsersSearch.vue";var h=d.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{attrs:{data:t.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"username",label:"会员账户"}}),a("el-table-column",{attrs:{prop:"nickname",label:"会员昵称"}}),a("el-table-column",{attrs:{prop:"gameName",label:"游戏名称"}}),a("el-table-column",{attrs:{prop:"totalBets",label:"注单数量"}}),a("el-table-column",{attrs:{prop:"totalAmount",label:"注单金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("RMB")(e.row.totalAmount)))])]}}])}),a("el-table-column",{attrs:{prop:"unsettled",label:"未结算金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("RMB")(e.row.unsettled)))])]}}])}),a("el-table-column",{attrs:{prop:"totalAwardAmount",label:"输赢金额"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("RMB")(e.row.totalAwardAmount)))])]}}])})],1)},v=[],g={name:"StatisctisUsersTable",mixins:[r["o"]]},_=g,S=Object(m["a"])(_,b,v,!1,null,null,null);S.options.__file="StatisticsUsersTable.vue";var y=S.exports,A={name:"LottoryStatisticsUsers",components:{StatisticsUsersSearch:h,StatisticsUsersTable:y},mixins:[r["l"],r["p"]],data:function(){return{statistics:{totalBets:"",totalAmount:"",unsettled:"",totalAwardAmount:""},tableData:[],tableHttpAPI:"fetchLotterStatisticsUsers",requestParams:{pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}}},k=A,O=(a("498b"),Object(m["a"])(k,l,n,!1,null,"2c424780",null));O.options.__file="index.vue";e["default"]=O.exports}}]);
//# sourceMappingURL=chunk-09afcfe8.17d87cf7.js.map
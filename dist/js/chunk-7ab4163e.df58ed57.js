(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ab4163e"],{"0b3d":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form-item",{attrs:{prop:t.prop,label:t.label}},[a("el-radio-group",{on:{change:function(e){t.$emit("on-change",e)}},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}},t._l(t.options,function(e){return a("el-radio",{key:e.value,attrs:{label:e.label}},[t._v(t._s(e.title))])}))],1)},o=[],i=(a("84fb"),{name:"FormRadio",props:{value:{type:[String,Number],default:""},options:{type:Array,required:!0},prop:{type:String,default:""},label:{type:String,default:""}},data:function(){return{selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},methods:{reset:function(){this.selectedOption=""}}}),r=i,n=a("048f"),s=Object(n["a"])(r,l,o,!1,null,null,null);s.options.__file="FormRadio.vue";e["a"]=s.exports},"4beb":function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form-item",{class:{"custom-block":t.multiple},attrs:{prop:t.prop,label:t.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+t.label,multiple:t.multiple,filterable:t.filterable,clearable:""},on:{change:function(e){t.$emit("on-change",t.selectedOption)}},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}},[t.optionRoot?a("el-option",{attrs:{label:t.rootLabel,value:t.rootValue}}):t._e(),t._l(t.options,function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})],2)],1)},o=[],i=(a("25d7"),a("84fb"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},optionRoot:{type:Boolean,default:!1},rootLabel:{type:String,default:"root"},rootValue:{type:[String,Number],default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var t=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(e){t.$_.forEach(e.data.data,function(e){t.options.push({value:e[t.valueAttr],label:e[t.labelAttr]})})}).catch(function(t){return console.log(t)})}}}),r=i,n=a("048f"),s=Object(n["a"])(r,l,o,!1,null,null,null);s.options.__file="FormSelect.vue";e["a"]=s.exports},6857:function(t,e,a){},"72c5":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{on:{"tab-click":t.handleTabClick},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},t._l(t.tableData,function(t){return a("el-tab-pane",{key:t.name,attrs:{label:t.name,name:t.name}})})),a("LotterySettingTable",{attrs:{data:t.realTableData},on:{"on-status-changed":function(e){t.fetchTableData()}}})],1)},o=[],i=(a("cf54"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{attrs:{data:t.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"name",label:"游戏名称"}}),a("el-table-column",{attrs:{prop:"startTime",label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("sortTime")(e.row.startTime)))])]}}])}),a("el-table-column",{attrs:{prop:"endTime",label:"结束时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("sortTime")(e.row.endTime)))])]}}])}),a("el-table-column",{attrs:{prop:"intervalTime",label:"相隔时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("sortTime")(e.row.intervalTime)))])]}}])}),a("el-table-column",{attrs:{prop:"url",label:"开奖结果地址","min-width":160}}),a("el-table-column",{attrs:{prop:"crontab",label:"开奖结果定时器crontab表达式","min-width":105}}),a("el-table-column",{attrs:{prop:"myCrontab",label:"系统封盘定时器crontab表达式","min-width":105}}),a("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":45}}),a("el-table-column",{attrs:{prop:"status",label:"启用状态","min-width":70},scopedSlots:t._u([{key:"default",fn:function(e){return[a("BaseSwitch",{attrs:{propValue:Boolean(e.row.status),payload:{id:e.row.id}},on:{"on-change":t.handleSwitchChange}})]}}])}),a("el-table-column",{attrs:{prop:"operations",label:"操作","min-width":90},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-view",size:"mini"},on:{click:function(a){t.showDialog(e.row,"dialogDetail")}}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){t.showDialog(e.row,"dialogUpdate")}}})]}}])})],1),a("LotterySettingDialogUpdate",{ref:"dialogUpdate",attrs:{data:t.activeItem},on:{"on-updated":function(e){t.$emit("on-updated")}}}),a("LotterySettingDialogDetail",{ref:"dialogDetail",attrs:{data:t.activeItem}})],1)}),r=[],n=a("1b629"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.dialogVisible,title:"修改彩票游戏配置",width:"760px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{ref:"formUpdate",staticClass:"clearfix",attrs:{model:t.formData,"label-width":"100px",size:"small"}},[a("el-form-item",{attrs:{prop:"name",label:"游戏名称"}},[a("el-input",{attrs:{placeholder:"广东11选5"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name","string"===typeof e?e.trim():e)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{prop:"information",label:"游戏副标题"}},[a("el-input",{attrs:{placeholder:"11选5"},model:{value:t.formData.information,callback:function(e){t.$set(t.formData,"information","string"===typeof e?e.trim():e)},expression:"formData.information"}})],1),a("el-form-item",{attrs:{prop:"startTime",label:"开始时间"}},[a("BaseTimePicker",{attrs:{second:t.formData.startTime},on:{"on-change":t.handleTimePickerChange}})],1),a("el-form-item",{attrs:{prop:"endTime",label:"结束时间"}},[a("BaseTimePicker",{attrs:{second:t.formData.endTime},on:{"on-change":t.handleTimePickerChange}})],1),a("el-form-item",{attrs:{prop:"intervalTime",label:"相隔时间"}},[a("BaseTimePicker",{attrs:{second:t.formData.intervalTime},on:{"on-change":t.handleTimePickerChange}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{prop:"url",label:"开奖结果地址"}},[a("el-input",{attrs:{placeholder:"https://baidu.com"},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url","string"===typeof e?e.trim():e)},expression:"formData.url"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{prop:"icon",label:"游戏图标地址"}},[a("el-input",{attrs:{placeholder:"https://baidu.com"},model:{value:t.formData.icon,callback:function(e){t.$set(t.formData,"icon","string"===typeof e?e.trim():e)},expression:"formData.icon"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{prop:"crontab",label:"开奖结果定时器crontab表达式","label-width":"200px"}},[a("el-input",{attrs:{placeholder:"0 0/5 9-23 * * ?"},model:{value:t.formData.crontab,callback:function(e){t.$set(t.formData,"crontab","string"===typeof e?e.trim():e)},expression:"formData.crontab"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{prop:"myCrontab",label:"系统封盘定时器crontab表达式","label-width":"200px"}},[a("el-input",{attrs:{placeholder:"0 0/5 9-23 * * ?"},model:{value:t.formData.myCrontab,callback:function(e){t.$set(t.formData,"myCrontab","string"===typeof e?e.trim():e)},expression:"formData.myCrontab"}})],1),a("el-form-item",{attrs:{prop:"sort",label:"排序"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"0"},model:{value:t.formData.sort,callback:function(e){t.$set(t.formData,"sort","string"===typeof e?e.trim():e)},expression:"formData.sort"}})],1),a("el-form-item",{attrs:{label:"启用状态"}},[a("el-radio-group",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("el-radio",{attrs:{label:1}},[t._v("启用")]),a("el-radio",{attrs:{label:0}},[t._v("禁用")])],1)],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.submitForm("formUpdate")}}},[t._v("确定")])],1)],1)],1)},c=[],u=a("4beb"),m=a("0b3d"),p=a("fee4"),f={name:"LotterySettingDialogUpdate",components:{FormSelect:u["a"],FormRadio:m["a"],FormTimeSelect:p["a"]},mixins:[n["d"],n["s"]],data:function(){return{radio:1,radio2:3,updateHttpAPI:"updateLotterySettingItem",idParams:{},formData:{}}},watch:{data:function(){this.idParams={id:this.data.id}}}},d=f,b=(a("ec13"),a("048f")),h=Object(b["a"])(d,s,c,!1,null,"c5a03de6",null);h.options.__file="LotterySettingDialogUpdate.vue";var v=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.dialogVisible,title:"彩票游戏配置详情",width:"760px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{staticClass:"clearfix",attrs:{model:t.formData,"label-width":"100px",size:"small",disabled:""}},[a("el-form-item",{attrs:{label:"游戏名称"}},[a("el-input",{attrs:{value:t.formData.name}})],1),a("el-form-item",{attrs:{label:"开始时间"}},[a("el-input",{attrs:{value:t._f("sortTime")(t.formData.startTime)}})],1),a("el-form-item",{attrs:{label:"结束时间"}},[a("el-input",{attrs:{value:t._f("sortTime")(t.formData.endTime)}})],1),a("el-form-item",{attrs:{label:"相隔时间"}},[a("el-input",{attrs:{value:t._f("sortTime")(t.formData.intervalTime)}})],1),a("el-form-item",{attrs:{label:"开奖结果地址"}},[a("el-input",{attrs:{value:t.formData.url}})],1),a("el-form-item",{attrs:{label:"排序"}},[a("el-input",{attrs:{value:t.formData.sort}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"开奖结果定时器crontab表达式","label-width":"200px"}},[a("el-input",{attrs:{value:t.formData.crontab}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"系统封盘定时器crontab表达式","label-width":"200px"}},[a("el-input",{attrs:{value:t.formData.myCrontab}})],1),a("el-form-item",{attrs:{label:"启用状态"}},[a("el-radio-group",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("el-radio",{attrs:{label:0}},[t._v("禁用")]),a("el-radio",{attrs:{label:1}},[t._v("启用")])],1)],1),a("el-form-item",{attrs:{label:"ID"}},[a("el-input",{attrs:{value:t.formData.id}})],1),a("el-form-item",{attrs:{label:"上级分类"}},[a("el-input",{attrs:{value:t.formData.parentType}})],1),a("el-form-item",{attrs:{label:"游戏副标题"}},[a("el-input",{attrs:{value:t.formData.information}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"游戏图标地址"}},[a("el-input",{attrs:{value:t.formData.icon}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"备注"}},[a("el-input",{attrs:{value:t.formData.remark,type:"textarea",rows:"3"}})],1)],1)],1)],1)},D=[],y={name:"LotterySettingDialogDetail",components:{FormSelect:u["a"]},mixins:[n["c"]]},T=y,k=(a("81fc"),Object(b["a"])(T,g,D,!1,null,"fa96c60c",null));k.options.__file="LotterySettingDialogDetail.vue";var _=k.exports,S={components:{LotterySettingDialogUpdate:v,LotterySettingDialogDetail:_},name:"LotterySettingTable",mixins:[n["o"],n["n"]],data:function(){return{activeItem:{},switchObj:{API:"updateLotterySettingItem",attrId:"id",attrValue:"status"}}}},x=S,w=Object(b["a"])(x,i,r,!1,null,null,null);w.options.__file="LotterySettingTable.vue";var C=w.exports,O={name:"SystemLotterySetting",components:{LotterySettingTable:C},data:function(){return{realTableData:[],activeTab:"",activeTabIndex:0,tableData:[],tableHttpAPI:"fetchGamesMenu",requestParams:{}}},created:function(){this.fetchTableData()},methods:{handleTabClick:function(t){this.activeTabIndex=t.index,this.realTableData=this.tableData[t.index].children},fetchTableData:function(){var t=this;this.$httpAPI[this.tableHttpAPI](this.requestParams).then(function(e){e.data.data?(t.tableData=e.data.data,t.activeTab=t.tableData[t.activeTabIndex].name,t.realTableData=t.tableData[t.activeTabIndex].children):t.tableData=[]}).catch(function(t){return console.log(t)})}}},$=O,P=Object(b["a"])($,l,o,!1,null,null,null);P.options.__file="index.vue";e["default"]=P.exports},"81fc":function(t,e,a){"use strict";var l=a("d113"),o=a.n(l);o.a},d113:function(t,e,a){},ec13:function(t,e,a){"use strict";var l=a("6857"),o=a.n(l);o.a},fee4:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form-item",{attrs:{prop:t.prop,label:t.label}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{"picker-options":t.pickerOptions,"default-time":t.defaltTime,type:"datetime",placeholder:"选择日期时间",align:"right"},on:{change:function(e){t.$emit("on-change",Date.parse(e))}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},o=[],i=(a("84fb"),{name:"SearchUsername",props:{time:{props:Number,default:""},prop:{type:String,default:""},label:{type:String,default:"时间查询"},placeholder:{type:String,default:"选择日期时间"},defaltTime:{type:String,default:"00:00:00"}},data:function(){return{value:this.time,pickerOptions:{shortcuts:[{text:"今天",onClick:function(t){t.$emit("pick",new Date)}},{text:"昨天",onClick:function(t){var e=new Date;e.setTime(e.getTime()-864e5),t.$emit("pick",e)}},{text:"一周前",onClick:function(t){var e=new Date;e.setTime(e.getTime()-6048e5),t.$emit("pick",e)}}]}}},watch:{time:function(){this.value=this.time}},methods:{reset:function(){this.value=""}}}),r=i,n=a("048f"),s=Object(n["a"])(r,l,o,!1,null,null,null);s.options.__file="FormTimeSelect.vue";e["a"]=s.exports}}]);
//# sourceMappingURL=chunk-7ab4163e.df58ed57.js.map
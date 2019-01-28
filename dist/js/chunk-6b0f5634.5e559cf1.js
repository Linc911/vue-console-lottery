(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b0f5634"],{"0ac2":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"el-range-editor--small el-date-editor el-range-editor"},[a("div",{staticClass:"el-input__inner"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.start,expression:"start"}],staticClass:"el-range-input",attrs:{placeholder:e.startPlaceholder,type:"number"},domProps:{value:e.start},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-enter")},keydown:e.handleBlur,input:function(t){t.target.composing||(e.start=t.target.value)}}}),a("span",{staticClass:"el-range-separator"},[e._v("至")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.end,expression:"end"}],staticClass:"el-range-input",attrs:{placeholder:e.endPlaceholder,type:"number"},domProps:{value:e.end},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-enter")},keydown:e.handleBlur,input:function(t){t.target.composing||(e.end=t.target.value)}}})])])},i=[],l=(a("3a0f"),a("a3a3"),a("4d0b"),{name:"FormNumberRange",props:{label:{type:String,default:"数字范围"},startPlaceholder:{type:String,default:"最小金额"},endPlaceholder:{type:String,default:"最大金额"}},data:function(){return{start:"",end:""}},methods:{handleBlur:function(){this.$emit("on-change",{start:this.start,end:this.end})},reset:function(){this.start="",this.end=""}}}),o=l,r=(a("47a0"),a("048f")),s=Object(r["a"])(o,n,i,!1,null,"20927655",null);s.options.__file="SearchNumberRange.vue";t["a"]=s.exports},"47a0":function(e,t,a){"use strict";var n=a("af23"),i=a.n(n);i.a},6321:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-date-picker",{attrs:{type:e.type,"picker-options":e.pickerOptions,"default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",size:"small",align:"right"},on:{change:e.handleDatePickerChange},model:{value:e.pickerValue,callback:function(t){e.pickerValue=t},expression:"pickerValue"}})},i=[],l=(a("3a0f"),a("a3a3"),a("4d0b"),{name:"SearchDatePicker",props:{value:{type:[String,Array],default:""},type:{type:String,default:"datetimerange"}},data:function(){return{pickerValue:"",pickerOptions:{shortcuts:[{text:"最近一天",onClick:function(e){var t=new Date,a=new Date;t.setTime(new Date(a.toDateString()).getTime()+864e5),a.setTime(t.getTime()-864e5),e.$emit("pick",[a,t])}},{text:"最近两天",onClick:function(e){var t=new Date,a=new Date;t.setTime(new Date(a.toDateString()).getTime()+864e5),a.setTime(t.getTime()-1728e5),e.$emit("pick",[a,t])}},{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;t.setTime(new Date(a.toDateString()).getTime()+864e5),a.setTime(t.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;t.setTime(new Date(a.toDateString()).getTime()+864e5),a.setTime(t.getTime()-2592e6),e.$emit("pick",[a,t])}}]}}},watch:{value:function(){this.pickerValue=this.value}},methods:{handleDatePickerChange:function(e){var t;t=e?{start:Date.parse(e[0]),end:Date.parse(e[1])}:{start:"",end:""},this.$emit("on-change",t)},reset:function(){this.pickerValue=""}}}),o=l,r=a("048f"),s=Object(r["a"])(o,n,i,!1,null,null,null);s.options.__file="SearchDatePicker.vue";t["a"]=s.exports},"886a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("SearchLayout",[a("div",{attrs:{slot:"left"},slot:"left"},[a("AccountListSearch",{on:{"on-search":e.handleSearch}})],1),a("div",{attrs:{slot:"right"},slot:"right"},[a("BaseAdd",{nativeOn:{click:function(t){e.$router.push({name:"AgentCreate"})}}})],1)]),a("div",[a("AccountListTable",{attrs:{data:e.tableData},on:{"on-changed":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1)],1)},i=[],l=(a("3a0f"),a("a3a3"),a("4d0b"),a("1b629")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("SearchFormLayout",{on:{"on-search":function(t){e.search()},"on-reset":e.handleRefresh}},[a("el-form-item",{attrs:{label:"代理账户"}},[a("FormInput",{ref:"username",attrs:{placeholder:"代理账户",styles:{width:"140px"}},on:{"on-change":function(t){e.$set(e.formData,"username",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}})],1),a("el-form-item",{attrs:{label:"时间查询"}},[a("SearchDatePicker",{ref:"loginRange",on:{"on-change":function(t){e.handleTimeRangeChange(t,"startTime","endTime")}}})],1),a("el-form-item",{attrs:{label:"会员余额"}},[a("SearchNumberRange",{ref:"numberRange",on:{"on-change":function(t){e.handleNumberRangeChange(t,"minWin","maxWin")},"on-enter":function(t){e.$emit("on-search",e.formData)}}})],1)],1)],1)},r=[],s=a("b34f"),u=a("6321"),c=a("0ac2"),p={name:"AccountListSearch",components:{FormInput:s["a"],SearchDatePicker:u["a"],SearchNumberRange:c["a"]},mixins:[l["h"]]},d=p,f=a("048f"),m=Object(f["a"])(d,o,r,!1,null,null,null);m.options.__file="AccountListSearch.vue";var h=m.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("LayoutTablePlain",{attrs:{tableData:e.data}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"username",label:"代理账户"}}),a("el-table-column",{attrs:{prop:"parentUsername",label:"上级代理"}}),a("el-table-column",{attrs:{prop:"depositMoney",label:"充值金额",align:"right","win-width":120},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.depositMoney)))])]}}])}),a("el-table-column",{attrs:{prop:"type0Money",label:"取款金额",align:"right","win-width":120},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.type0Money)))])]}}])}),a("el-table-column",{attrs:{prop:"win",label:"输赢",align:"right","win-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.win)))])]}}])}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"operations",label:"操作",width:240},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogSublevel")}}},[e._v("直属下级")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogSuplevel")}}},[e._v("变更上级")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogInterest")}}},[e._v("修改分润")])]}}])})],1),a("DialogSublevelList",{ref:"dialogSublevel",attrs:{id:e.activeItem.id}}),a("DialogSuplevelUpdate",{ref:"dialogSuplevel",attrs:{childId:e.activeItem.id},on:{"on-changed":function(t){e.$emit("on-changed")}}}),a("DialogInterestUpdate",{ref:"dialogInterest",attrs:{id:e.activeItem.id},on:{"on-changed":function(t){e.$emit("on-changed")}}})],1)},b=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticStyle:{"min-width":"760px"},attrs:{visible:e.dialogVisible,title:"直属下级列表",width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-table",{attrs:{data:e.tableData,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"username",label:"代理账号"}}),a("el-table-column",{attrs:{prop:"agentAmount",label:"下级代理数量","min-width":60}}),a("el-table-column",{attrs:{prop:"userAmount",label:"下级会员数量","min-width":60}}),a("el-table-column",{attrs:{prop:"totalAmount",label:"投注笔数","min-width":45}}),a("el-table-column",{attrs:{prop:"totalBets",label:"投注金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.totalBets)))])]}}])}),a("el-table-column",{attrs:{prop:"banlance",label:"账号余额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.banlance)))])]}}])}),a("el-table-column",{attrs:{prop:"depositMoney",label:"账号存款"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.depositMoney)))])]}}])}),a("el-table-column",{attrs:{prop:"type0Money",label:"账号取款"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.type0Money)))])]}}])}),a("el-table-column",{attrs:{prop:"depositMoney",label:"账号存款"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.depositMoney)))])]}}])}),a("el-table-column",{attrs:{prop:"type4Money",label:"账号返水"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.type4Money)))])]}}])}),a("el-table-column",{attrs:{prop:"type12Money",label:"账号分润"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.type12Money)))])]}}])}),a("el-table-column",{attrs:{prop:"type8Money",label:"代理分润"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.type8Money)))])]}}])}),a("el-table-column",{attrs:{prop:"win",label:"账号输赢"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.win)))])]}}])})],1)],1)},_=[],y=(a("84fb"),{name:"DialogSublevelList",props:{id:{type:[Number,String],required:!0}},data:function(){return{dialogVisible:!1,tableData:[]}},watch:{id:function(){this.id&&this.dialogVisible&&this.fetchSublevelList()}},methods:{toggleDialogVisible:function(e){this.dialogVisible=e},fetchSublevelList:function(){var e=this;this.$httpAPI.fetchAgentPerformanceList({params:{parentUserId:this.id,pageNo:1,pageSize:1e3}}).then(function(t){t.data.data?e.tableData=t.data.data:e.tableData=[],e.tableData.length||e.$message.info("该代理账号暂时没有直属下级")}).catch(function(e){return console.log(e)})}}}),w=y,D=Object(f["a"])(w,v,_,!1,null,null,null);D.options.__file="DialogSublevelList.vue";var k=D.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"变更下级代理",width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.formData,size:"small"}},[a("el-form-item",{attrs:{prop:"parentId",label:"代理账号"}},[a("el-select",{staticStyle:{width:"300px"},attrs:{placeholder:"选择上级代理账户",filterable:""},model:{value:e.formData.parentId,callback:function(t){e.$set(e.formData,"parentId",t)},expression:"formData.parentId"}},[e._l(e.options,function(t){return[a("el-option",{directives:[{name:"show",rawName:"v-show",value:t.id!=e.childId,expression:"item.id != childId"}],key:t.id,attrs:{label:t.username,value:t.id}})]})],2)],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.submitForm()}}},[e._v("确定")])],1)],1)},I=[],$={name:"DialogSuplevelUpdate",props:{childId:{type:[Number,String],required:!0}},data:function(){return{dialogVisible:!1,options:[],formData:{userId:this.childId,parentId:""}}},watch:{childId:function(){this.formData.userId=this.childId,this.childId&&this.dialogVisible&&this.fetchSuplevelList()}},methods:{submitForm:function(){var e=this;this.dialogVisible=!1,this.formData.parentId&&this.$httpAPI.updateAgentSeniorLevel(this.formData).then(function(t){200===t.data.status?(e.$emit("on-changed",e.formData),e.$message.success("变更成功！")):e.$message.error("变更失败！")}).catch(function(e){return console.log(e)})},toggleDialogVisible:function(e){this.dialogVisible=e},fetchSuplevelList:function(){var e=this;this.$httpAPI.fetchAgentAccountList({params:{pageNo:1,pageSize:1e4}}).then(function(t){t.data.data?e.options=t.data.data:e.options=[]}).catch(function(e){return console.log(e)})}}},x=$,A=Object(f["a"])(x,S,I,!1,null,null,null);A.options.__file="DialogSuplevelUpdate.vue";var M=A.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"修改分润",width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.formData,size:"small","label-width":"90px"}},[a("el-form-item",{attrs:{label:"分润比例%"}},[a("el-input",{attrs:{type:"number"},model:{value:e.formData.rate,callback:function(t){e.$set(e.formData,"rate",t)},expression:"formData.rate"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.submitForm()}}},[e._v("确定")])],1)],1)},P=[],V={name:"DialogInterestUpdate",props:{id:{type:[Number,String],required:!0}},data:function(){return{dialogVisible:!1,formData:{id:this.id,rate:""}}},watch:{id:function(){this.id&&this.dialogVisible&&(this.formData.id=this.id,this.fetchInterestRate())}},methods:{submitForm:function(){var e=this;this.dialogVisible=!1,this.formData.rate&&this.$httpAPI.updateAgentAccountInterest(this.formData).then(function(t){200===t.data.status?(e.$emit("on-changed",e.formData),e.$message.success("变更成功！")):e.$message.error("变更失败！")}).catch(function(e){return console.log(e)})},toggleDialogVisible:function(e){this.dialogVisible=e},fetchInterestRate:function(){var e=this;this.$httpAPI.fetchAgentAccountInterest({params:{userId:this.id}}).then(function(t){e.formData=t.data.data}).catch(function(e){return console.log(e)})}}},L=V,R=Object(f["a"])(L,T,P,!1,null,null,null);R.options.__file="DialogInterestUpdate.vue";var B=R.exports,C={name:"AccountListTable",components:{DialogSublevelList:k,DialogSuplevelUpdate:M,DialogInterestUpdate:B},mixins:[l["n"]],data:function(){return{activeItem:{id:""}}}},z=C,N=Object(f["a"])(z,g,b,!1,null,null,null);N.options.__file="AccountListTable.vue";var O=N.exports,E={name:"AgentAcountList",components:{AccountListSearch:h,AccountListTable:O},mixins:[l["i"],l["o"]],data:function(){return{tableHttpAPI:"fetchAgentAccountList",requestParams:{pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}}},U=E,j=Object(f["a"])(U,n,i,!1,null,null,null);j.options.__file="index.vue";t["default"]=j.exports},af23:function(e,t,a){},b34f:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-input",{style:e.styles,attrs:{placeholder:e.placeholder,clearable:""},on:{input:function(t){e.$emit("on-change",t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},i=[],l={name:"FormInput",props:{placeholder:{type:String,default:"请输入内容"},styles:{type:Object,default:function(){return{}}}},data:function(){return{value:""}},methods:{reset:function(){this.value=""}}},o=l,r=a("048f"),s=Object(r["a"])(o,n,i,!1,null,null,null);s.options.__file="FormInput.vue";t["a"]=s.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59b4c464"],{"0040":function(e,t,a){"use strict";var n=a("b295"),l=a.n(n);l.a},"012c":function(e,t,a){"use strict";var n=a("1dbd"),l=a.n(n);l.a},"1dbd":function(e,t,a){},5732:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("DepositFormSearch",{on:{"on-search":e.handleSearch}}),a("el-tabs",{on:{"tab-click":e.handleTabClick},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"填单存款待审核列表",name:"unchecked"}}),a("el-tab-pane",{attrs:{label:"填单存款已审核列表",name:"checked"}})],1),a("div",[a("DepositFormTable",{attrs:{data:e.tableData},on:{"on-changed":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{page:e.page,requestParams:e.requestParams,httpURL:e.tableHttpAPI},on:{"on-change":e.handlePaginationChange}})],1)],1)},l=[],r=(a("20a2"),a("cf54"),a("3a0f"),a("a3a3"),a("4d0b"),a("1b629")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.formData,size:"small","label-width":"80px",inline:""}},[a("FormInput",{ref:"username",attrs:{label:"汇款账号",width:"174px"},on:{"on-change":function(t){e.$set(e.formData,"username",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}}),a("FormDateRange",{ref:"dateRange",attrs:{label:"汇款时间"},on:{"on-change":e.handleDateRangeChange}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)},s=[],o=a("b34f"),u=a("8968"),c={name:"DepositeFormSearch",components:{FormInput:o["a"],FormDateRange:u["a"]},mixins:[r["g"]],methods:{handleDateRangeChange:function(e){var t=e.startTime,a=e.endTime;this.formData.startTime=t,this.formData.endTime=a}}},m=c,p=a("048f"),d=Object(p["a"])(m,i,s,!1,null,null,null);d.options.__file="DepositFormSearch.vue";var f=d.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"createUsername",label:"汇款账号"}}),a("el-table-column",{attrs:{prop:"bankUsername",label:"支付户名"}}),a("el-table-column",{attrs:{prop:"configPayTypeName",label:"支付方式"}}),a("el-table-column",{attrs:{label:"汇款金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.remitMoney)))])]}}])}),a("el-table-column",{attrs:{prop:"bankAccount",label:"银行账户"}}),a("el-table-column",{attrs:{prop:"bankName",label:"银行名称"}}),a("el-table-column",{attrs:{prop:"bankAddress",label:"银行地址"}}),a("el-table-column",{attrs:{label:"汇款时间",width:140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogDeposit")}}},[e._v(e._s(e._f("auditTransfer")(t.row.status)))])]}}])})],1),a("DepositFormDialogAudit",{ref:"dialogDeposit",attrs:{data:e.activeItem},on:{"on-success":function(t){e.$emit("on-changed")}}})],1)},h=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"填单存款每项详情",width:"760px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{staticClass:"clearfix",attrs:{model:e.data,"label-width":"110px",size:"small",disabled:""}},[a("el-form-item",{attrs:{label:"支付户名"}},[a("el-input",{attrs:{value:e.data.bankUsername}})],1),a("el-form-item",{attrs:{label:"支付方式"}},[a("el-input",{attrs:{value:e.data.configPayTypeName}})],1),a("el-form-item",{attrs:{label:"汇款时间"}},[a("el-input",{attrs:{value:e._f("time")(e.data.remitTime)}})],1),a("el-form-item",{attrs:{label:"汇款金额"}},[a("el-input",{attrs:{value:e._f("RMB")(e.data.remitMoney)}})],1),a("el-form-item",{attrs:{label:"汇款人账号"}},[a("el-input",{attrs:{value:e.data.createUsername}})],1),a("el-form-item",{attrs:{label:"汇款人账号昵称"}},[a("el-input",{attrs:{value:e.data.createNickname}})],1),a("el-form-item",{attrs:{label:"填单时间"}},[a("el-input",{attrs:{value:e.data.createTime}})],1),a("el-form-item",{attrs:{label:"审核状态"}},[a("el-input",{attrs:{value:e.data.status}})],1),a("el-form-item",{attrs:{label:"银行名称"}},[a("el-input",{attrs:{value:e.data.bankName}})],1),a("el-form-item",{attrs:{label:"银行账户"}},[a("el-input",{attrs:{value:e.data.bankAccount}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"银行地址"}},[a("el-input",{attrs:{value:e.data.bankAddress}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"备注"}},[a("el-input",{attrs:{value:e.data.remark,type:"textarea",rows:"3"}})],1)],1),e.data.status<=1?a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.changeStatus(2)}}},[e._v("审批通过")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){e.changeStatus(3)}}},[e._v("审批拒绝")])],1):e._e()],1)},g=[],k={name:"DepositFormDialog",mixins:[r["a"]],data:function(){return{requestParams:{remitInfoId:this.data.remitInfoId},audit:{httpAPI:"updateFinanceDepositFormStatus",attrName:"status"}}},watch:{data:function(){this.requestParams.remitInfoId=this.data.remitInfoId}}},D=k,_=(a("0040"),Object(p["a"])(D,v,g,!1,null,"02ce5c12",null));_.options.__file="DepositFormDialogAudit.vue";var T=_.exports,w={name:"DepositFormTable",components:{DepositFormDialogAudit:T},mixins:[r["n"]],data:function(){return{activeItem:{}}}},y=w,F=Object(p["a"])(y,b,h,!1,null,null,null);F.options.__file="DepositFormTable.vue";var x=F.exports,S={name:"FinanceDepositForm",components:{DepositFormSearch:f,DepositFormTable:x},mixins:[r["i"],r["o"]],data:function(){return{activeTab:"unchecked",tableHttpAPI:"fetchFinanceDepositForm",page:{current:0,size:10,total:10},requestParams:{status:0,pageNo:1,pageSize:10}}},methods:{handleTabClick:function(e){this.page.current=1,"unchecked"===e.name?this.requestParams.status=0:this.requestParams=Object.assign(this.requestParams,{pageNo:1,status:"2,3"}),this.fetchTableData()}}},I=S,P=Object(p["a"])(I,n,l,!1,null,null,null);P.options.__file="index.vue";t["default"]=P.exports},8968:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:e.prop,label:e.label}},[a("el-date-picker",{style:{width:e.width},attrs:{type:"daterange","picker-options":e.pickerOptions,"default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small",align:"right"},on:{change:e.handleDatePickerChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},l=[],r=(a("3a0f"),a("a3a3"),a("4d0b"),{name:"FormDateRange",props:{prop:{type:String,default:""},label:{type:String,default:"时间查询"},width:{type:String,default:"auto"}},data:function(){return{value:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},methods:{handleDatePickerChange:function(e){var t;t=e?{startTime:Date.parse(e[0]),endTime:Date.parse(e[1])}:{startTime:"",endTime:""},this.$emit("on-change",t)},reset:function(){this.value=""}}}),i=r,s=(a("012c"),a("048f")),o=Object(s["a"])(i,n,l,!1,null,"20ba6115",null);o.options.__file="FormDateRange.vue";t["a"]=o.exports},b295:function(e,t,a){},b34f:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:e.label,width:e.width}},[a("el-input",{attrs:{placeholder:e.label,clearable:""},on:{input:function(t){e.$emit("on-change",t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},l=[],r={name:"FormInput",props:{label:{type:String,default:"请输入内容"},width:{type:String,default:""}},data:function(){return{value:""}},methods:{reset:function(){this.value=""}}},i=r,s=a("048f"),o=Object(s["a"])(i,n,l,!1,null,null,null);o.options.__file="FormInput.vue";t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-59b4c464.14da749e.js.map
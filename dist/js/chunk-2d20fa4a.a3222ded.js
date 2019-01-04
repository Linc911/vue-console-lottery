(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fa4a"],{b501:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"balance-manipulation"},[a("el-tabs",{on:{"tab-click":e.handleTabClick},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"创建加减款请求",name:"creating"}}),a("el-tab-pane",{attrs:{label:"加减款待审核列表",name:"unchecked"}}),a("el-tab-pane",{attrs:{label:"加减款已审核列表",name:"checked"}})],1),a(e.currentTabComponent,{tag:"component",on:{"on-created":e.handleCreated}})],1)},l=[],o=(a("cf54"),a("3a0f"),a("a3a3"),a("4d0b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manipulation-form"},[a("el-form",{ref:"balanceForm",staticStyle:{"max-width":"800px"},attrs:{model:e.formData,rules:e.rules,"label-width":"120px"}},[a("el-form-item",{attrs:{prop:"username",label:"会员账号"}},[a("el-input",{attrs:{placeholder:"会员账号"},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1),a("FormAccountType",{ref:"formAccountType",on:{"on-change":function(t){e.formData.gameType=t}}}),a("el-form-item",{attrs:{prop:"type",label:"调整方向"}},[a("el-radio-group",{model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},[a("el-radio",{attrs:{label:0}},[e._v("增加")]),a("el-radio",{attrs:{label:1}},[e._v("减少")])],1)],1),a("FormLoanType",{ref:"formLoanType",on:{"on-change":function(t){e.formData.loanType=t}}}),a("el-form-item",{attrs:{prop:"money",label:"调整金额"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"调整金额"},model:{value:e.formData.money,callback:function(t){e.$set(e.formData,"money",t)},expression:"formData.money"}})],1),a("el-form-item",{attrs:{prop:"remark",label:"调整理由"}},[a("el-input",{attrs:{type:"textarea",rows:3,placeholder:"调整理由"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.submitForm("balanceForm")}},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.submitForm("balanceForm")}}},[e._v("提交")])],1)],1)],1)}),r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:"loanType",label:"借贷类型"}},[a("el-select",{attrs:{placeholder:"选择借贷类型"},on:{change:function(t){e.$emit("on-change",t)}},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}},e._l(e.types,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)},i=[],c=(a("25d7"),{name:"FormLoanType",data:function(){return{selectedType:"",types:[]}},created:function(){this.fetchFinanceLoanType()},methods:{reset:function(){this.selectedType=""},fetchFinanceLoanType:function(){var e=this;this.$httpAPI.fetchFinanceLoanType({params:{type:0}}).then(function(t){e.$_.forEach(t.data.data,function(t){e.types.push({label:t.name,value:t.dictionaryId})})}).catch(function(e){return console.log(e)})}}}),u=c,m=a("048f"),p=Object(m["a"])(u,s,i,!1,null,null,null);p.options.__file="FormLoanType.vue";var f=p.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:"gameType",label:"账户类型"}},[a("el-select",{attrs:{placeholder:"选择账户类型"},on:{change:function(t){e.$emit("on-change",t)}},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}},e._l(e.AccountTypes,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)},h=[],b={data:function(){return{selectedType:"",AccountTypes:[]}},created:function(){this.fetchGamesList()},methods:{reset:function(){this.selectedType=""},fetchGamesList:function(){var e=this;this.$httpAPI.fetchGamesList().then(function(t){e.$_.forEach(t.data.data,function(t){e.AccountTypes.push({label:t.name,value:t.id})})}).catch(function(e){return console.log(e)})}}},g=b,y=Object(m["a"])(g,d,h,!1,null,null,null);y.options.__file="FormAccountType.vue";var v=y.exports,_={name:"BalanceManipulationForm",components:{FormLoanType:f,FormAccountType:v},data:function(){var e=this,t=function(t,a,n){e.$httpAPI.fetchUserId({params:{username:a}}).then(function(e){null===e.data.data?n(new Error("系统中没有找到匹配的会员帐号！")):n()}).catch(function(e){return console.log(e)})};return{loanTypes:[],gameTypes:[],formData:{username:"",gameType:"",type:"",loanType:"",money:"",remark:""},rules:{username:[{required:!0,message:"用户名不能为空"},{validator:t,trigger:"blur"}],gameType:{required:!0,message:"必须选择其中一个游戏类型"},type:{required:!0,message:"必须选择其中一个调整方向"},loanType:{required:!0,message:"必须选择其中一个借贷类型"},money:[{required:!0,message:"调整金额不能为空"}]}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$httpAPI.saveFinanceBalanceChange(t.formData).then(function(){t.$utils.initializeObjectProperties(t.formData),t.$refs.formLoanType.reset(),t.$refs.formAccountType.reset(),t.$emit("on-created"),t.$message.success("创建加减款成功！")}).catch(function(e){return console.log(e)}):t.$message.warning("表单填写不正确，请根据提示填写！")})}}},k=_,D=Object(m["a"])(k,o,r,!1,null,null,null);D.options.__file="BalanceManipulationForm.vue";var T=D.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"unchecked-list"},[a("BalanceManipulationSearch",{on:{"on-search":e.handleSearch}}),a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.tableData,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"创建时间",width:140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"username",label:"会员账号"}}),a("el-table-column",{attrs:{prop:"gameName",label:"账户类型"}}),a("el-table-column",{attrs:{prop:"loanName",label:"借贷类型"}}),a("el-table-column",{attrs:{label:"调整方向"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("depositDircetion")(t.row.type)))])]}}])}),a("el-table-column",{attrs:{label:"调整金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.money)))])]}}])}),a("el-table-column",{attrs:{label:"审核状态","min-width":110},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("depositStatus")(t.row.status)))])]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialogAudit(t.row)}}},[e._v(e._s(e._f("auditTransfer")(t.row.status)))])]}}])})],1),a("BasePagination",{attrs:{page:e.page,requestParams:e.requestParams,httpURL:e.tableHttpAPI},on:{"on-change":e.handlePaginationChange}})],1),a("BalanceManipulationDialogAudit",{ref:"dialogAudit",attrs:{formData:e.currentItem},on:{"on-success":function(t){e.fetchTableData()}}})],1)},$=[],B=(a("20a2"),a("1b629")),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("el-form",{attrs:{model:e.formData,size:"small","label-width":"80px",inline:""}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)},A=[],M=a("9ab4"),x=a("85f7"),F={name:"DepositFormSearch",components:{SearchIcon:M["a"],SearchReset:x["a"]},data:function(){return{formData:{username:"",gameType:"",loanType:"",type:""}}},methods:{search:function(){this.$emit("on-search",this.formData)},reset:function(){for(var e in this.$refs)this.$refs[e].reset();this.$utils.initializeObjectProperties(this.formData)}}},C=F,P=Object(m["a"])(C,S,A,!1,null,null,null);P.options.__file="BalanceManipulationSearch.vue";var I=P.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dialog-deposit"},[a("el-dialog",{attrs:{visible:e.dialogVisible,title:"加减款操作每项详情",width:"760px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.formData,"label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"会员账号"}},[a("el-input",{attrs:{value:e.formData.username,size:"small",disabled:""}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"会员昵称"}},[a("el-input",{attrs:{value:e.formData.nickname,size:"small",disabled:""}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"金额类型"}},[a("el-input",{attrs:{value:e.formData.gameName,size:"small",disabled:""}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"借贷类型"}},[a("el-input",{attrs:{value:e.formData.loanName,size:"small",disabled:""}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"调整方向"}},[a("el-input",{attrs:{value:e._f("depositDircetion")(e.formData.type),size:"small",disabled:""}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"调整金额"}},[a("el-input",{attrs:{value:e.formData.money,size:"small",disabled:""}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"创建时间"}},[a("el-input",{attrs:{value:e._f("time")(e.formData.createTime),size:"small",disabled:""}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"创建者"}},[a("el-input",{attrs:{value:e.formData.createName,size:"small",disabled:""}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"调整理由"}},[a("el-input",{attrs:{value:e.formData.remark,type:"textarea",rows:"3",disabled:""}})],1)],1)],1)],1),e.formData.status<=1?a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.changeStatus(2)}}},[e._v("审批通过")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){e.changeStatus(3)}}},[e._v("审批拒绝")])],1):e._e()],1)],1)},z=[],q={name:"BalanceManipulationDialogAudit",props:{formData:{type:Object,required:!0}},data:function(){return{dialogVisible:!1}},methods:{toggleDialogVisible:function(e){this.dialogVisible=e},changeStatus:function(e){var t=this;this.$httpAPI.updateDepositFormStatus({params:{changeId:this.formData.changeId,status:e}}).then(function(){t.$emit("on-success",{changeId:t.formData.changeId,status:e}),t.dialogVisible=!1,t.$message.success("修改状态成功！")}).catch(function(e){return console.log(e)})}}},O=q,j=Object(m["a"])(O,L,z,!1,null,null,null);j.options.__file="BalanceManipulationDialogAudit.vue";var E=j.exports,N={name:"BalanceManipulationListUnchecked",components:{BalanceManipulationSearch:I,BalanceManipulationDialogAudit:E},mixins:[B["o"]],data:function(){return{tableData:[],tableHttpAPI:"fetchFinanceBalanceManipulation",requestParams:{pageNo:1,pageSize:10,status:0},page:{current:1,size:10,total:10},currentItem:{}}},methods:{handleSearch:function(e){this.requestParams=Object.assign(this.requestParams,e,{pageNo:1}),this.fetchTableData()},showDialogAudit:function(e){this.currentItem=e,this.$refs.dialogAudit.toggleDialogVisible(!0)}}},U=N,V=Object(m["a"])(U,w,$,!1,null,null,null);V.options.__file="BalanceManipulationListUnchecked.vue";var R=V.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"unchecked-list"},[a("BalanceManipulationSearch",{on:{"on-search":e.handleSearch}}),a("div",{staticClass:"table-list"},[a("el-table",{attrs:{data:e.tableData,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"创建时间",width:140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"username",label:"会员账号"}}),a("el-table-column",{attrs:{prop:"gameName",label:"账户类型"}}),a("el-table-column",{attrs:{prop:"loanName",label:"借贷类型"}}),a("el-table-column",{attrs:{label:"调整方向"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("depositDircetion")(t.row.type)))])]}}])}),a("el-table-column",{attrs:{label:"调整金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.money)))])]}}])}),a("el-table-column",{attrs:{label:"审核状态","min-width":110},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("depositStatus")(t.row.status)))])]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialogAudit(t.row)}}},[e._v(e._s(e._f("auditTransfer")(t.row.status)))])]}}])})],1),a("BasePagination",{attrs:{page:e.page,requestParams:e.requestParams,httpURL:e.tableHttpAPI},on:{"on-change":e.handlePaginationChange}})],1),a("BalanceManipulationDialogAudit",{ref:"dialogAudit",attrs:{formData:e.currentItem},on:{"on-success":function(t){e.fetchTableData()}}})],1)},G=[],J={name:"BalanceManipulationListChecked",components:{BalanceManipulationSearch:I,BalanceManipulationDialogAudit:E},mixins:[B["o"]],data:function(){return{tableData:[],tableHttpAPI:"fetchFinanceBalanceManipulation",requestParams:{pageNo:1,pageSize:10,status:"2,3"},page:{current:1,size:10,total:10},currentItem:{}}},methods:{handleSearch:function(e){this.requestParams=Object.assign(this.requestParams,e,{pageNo:1}),this.fetchTableData()},showDialogAudit:function(e){this.currentItem=e,this.$refs.dialogAudit.toggleDialogVisible(!0)}}},K=J,Q=Object(m["a"])(K,H,G,!1,null,null,null);Q.options.__file="BalanceManipulationListChecked.vue";var W=Q.exports,X={name:"FinanceBalanceManipulation",components:{BalanceManipulationForm:T,BalanceManipulationListUnchecked:R,BalanceManipulationListChecked:W},data:function(){return{activeTab:"creating",currentTabComponent:"BalanceManipulationForm"}},methods:{handleCreated:function(){this.activeTab="unchecked",this.currentTabComponent="BalanceManipulationListUnchecked"},handleTabClick:function(e){switch(e.name){case"creating":this.currentTabComponent="BalanceManipulationForm";break;case"unchecked":this.currentTabComponent="BalanceManipulationListUnchecked";break;case"checked":this.currentTabComponent="BalanceManipulationListChecked";break;default:this.currentTabComponent="BalanceManipulationForm"}}}},Y=X,Z=Object(m["a"])(Y,n,l,!1,null,null,null);Z.options.__file="index.vue";t["default"]=Z.exports}}]);
//# sourceMappingURL=chunk-2d20fa4a.a3222ded.js.map
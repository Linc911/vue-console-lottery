(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6745d539"],{"30ce":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{style:e.styles,attrs:{placeholder:e.placeholder,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},l=[],r=(a("84fb"),{name:"FormSelectStatic",props:{value:{type:[String,Number],default:""},options:{type:Array,required:!0},placeholder:{type:String,default:"请选择"},styles:{type:Object,default:function(){return{}}}},data:function(){return{selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},methods:{reset:function(){this.selectedOption=""}}}),o=r,i=a("048f"),c=Object(i["a"])(o,n,l,!1,null,null,null);c.options.__file="FormSelectStatic.vue";t["a"]=c.exports},"322c":function(e,t,a){"use strict";a("5616");var n={validateRequired:function(e){return{required:!0,message:"".concat(e,"不能为空")}},validateSelect:function(e){return{required:!0,message:"".concat(e,"至少选择其中一个")}},validatePhone:function(e){return[{required:!0,message:"".concat(e,"不能为空")},{pattern:/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,message:"请输入有效的11位手机号码"}]},validateStringLength:function(e,t,a){return[{required:!0,message:"".concat(e,"不能为空")},{min:t,max:a,message:"".concat(e,"长度在 ").concat(t," - ").concat(a," 字符之间")}]},validateInteger:function(e,t){return arguments[1]?[{required:!0,message:"".concat(e,"不能为空")},{pattern:new RegExp("^[0-9]{1,".concat(t,"}$")),message:"".concat(e,"必须 0 - ").concat(l(t)," 为之间整数")}]:[{required:!0,message:"".concat(e,"不能为空")},{pattern:/^[0-9]+$/,message:"".concat(e,"必须为整数")}]}};function l(e){for(var t="",a=0;a<e;a++)t+="9";return t}t["a"]=n},"4beb":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{class:{"custom-block":e.multiple},attrs:{prop:e.prop,label:e.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+e.label,multiple:e.multiple,filterable:e.filterable,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},[e.optionRoot?a("el-option",{attrs:{label:e.rootLabel,value:e.rootValue}}):e._e(),e._l(e.options,function(e){return a("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})],2)],1)},l=[],r=(a("25d7"),a("84fb"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},optionRoot:{type:Boolean,default:!1},rootLabel:{type:String,default:"root"},rootValue:{type:[String,Number],default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var e=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(t){e.$_.forEach(t.data.data,function(t){e.options.push({value:t[e.valueAttr],label:t[e.labelAttr]})})}).catch(function(e){return console.log(e)})}}}),o=r,i=a("048f"),c=Object(i["a"])(o,n,l,!1,null,null,null);c.options.__file="FormSelect.vue";t["a"]=c.exports},5616:function(e,t,a){var n=a("53da"),l=a("69d8"),r=a("9a0d").f,o=a("e853").f,i=a("c28a"),c=a("2fc4"),s=n.RegExp,u=s,p=s.prototype,m=/a/g,f=/a/g,d=new s(m)!==m;if(a("f711")&&(!d||a("cce3")(function(){return f[a("5761")("match")]=!1,s(m)!=m||s(f)==f||"/a/i"!=s(m,"i")}))){s=function(e,t){var a=this instanceof s,n=i(e),r=void 0===t;return!a&&n&&e.constructor===s&&r?e:l(d?new u(n&&!r?e.source:e,t):u((n=e instanceof s)?e.source:e,n&&r?c.call(e):t),a?this:p,s)};for(var b=function(e){e in s||r(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},h=o(u),v=0;h.length>v;)b(h[v++]);p.constructor=s,s.prototype=p,a("7e22")(n,"RegExp",s)}a("2943")("RegExp")},"768d":function(e,t,a){"use strict";var n=a("79d3"),l=a.n(n);l.a},"79d3":function(e,t,a){},b34f:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-input",{style:e.styles,attrs:{placeholder:e.placeholder,clearable:""},on:{input:function(t){e.$emit("on-change",t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},l=[],r={name:"FormInput",props:{placeholder:{type:String,default:"请输入内容"},styles:{type:Object,default:function(){return{}}}},data:function(){return{value:""}},methods:{reset:function(){this.value=""}}},o=r,i=a("048f"),c=Object(i["a"])(o,n,l,!1,null,null,null);c.options.__file="FormInput.vue";t["a"]=c.exports},b501:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{on:{"tab-click":e.handleTabClick},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[a("el-tab-pane",{attrs:{label:"创建加减款请求",name:"creating"}}),a("el-tab-pane",{attrs:{label:"加减款待审核列表",name:"unchecked"}}),a("el-tab-pane",{attrs:{label:"加减款已审核列表",name:"checked"}})],1),a(e.currentTabComponent,{tag:"component",on:{"on-created":e.handleCreated}})],1)},l=[],r=(a("cf54"),a("3a0f"),a("a3a3"),a("4d0b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",staticStyle:{"max-width":"800px"},attrs:{model:e.formData,rules:e.rules,"label-width":"120px",size:"medium"}},[a("FormSelect",{attrs:{httpAPIName:"fetchPublicUsersBasic",labelAttr:"username",valueAttr:"id",prop:"username",label:"用户账号",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"username",t)}}}),a("FormSelect",{ref:"gameType",attrs:{httpAPIName:"fetchGamesList",labelAttr:"name",valueAttr:"id",prop:"gameType",label:"账户类型",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"gameType",t)}}}),a("el-form-item",{attrs:{prop:"type",label:"调整方向"}},[a("el-radio-group",{model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},[a("el-radio",{attrs:{label:0}},[e._v("增加")]),a("el-radio",{attrs:{label:1}},[e._v("减少")])],1)],1),a("FormSelect",{ref:"loanType",attrs:{httpAPIName:"fetchFinanceLoanType",labelAttr:"name",valueAttr:"dictionaryId",prop:"loanType",label:"账户类型",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"loanType",t)}}}),a("el-form-item",{attrs:{prop:"money",label:"调整金额"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"调整金额"},model:{value:e.formData.money,callback:function(t){e.$set(e.formData,"money",t)},expression:"formData.money"}})],1),a("el-form-item",{attrs:{prop:"remark",label:"调整理由"}},[a("el-input",{attrs:{type:"textarea",rows:5,placeholder:"调整理由"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.submitForm("balanceForm")}},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1),a("el-form-item",[a("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v(e._s(e.saveString))]),a("el-button",{staticStyle:{"margin-left":"50px"},attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("提交")])],1)],1)}),o=[],i=a("99ca"),c=a("322c"),s=a("4beb"),u={name:"BalanceManipulationForm",components:{FormSelect:s["a"]},data:function(){return{checked:!0,saveString:i["a"].COMPONENT_CREATION_RECORD,createHttpAPI:"saveFinanceBalanceChange",formData:{type:0},rules:{username:c["a"].validateRequired("用户账号"),gameType:c["a"].validateSelect("游戏类型"),type:c["a"].validateSelect("调整方向"),loanType:c["a"].validateSelect("借贷类型"),money:c["a"].validateRequired("调整金额不能为空")}}},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(a){a?t.$httpAPI[t.createHttpAPI](t.formData).then(function(a){200===a.data.status?(t.checked||(t.$utils.invokeRefResetMothod(t.$refs),t.$refs[e].resetFields()),t.$emit("on-created"),t.$message.success(i["a"].CREATE_SUCCEEDED)):t.$message.error("".concat(i["a"].CREATE_FAILED,": ").concat(a.data.msg))}).catch(function(e){console.dir(e),t.$message.error(i["a"].CREATE_FAILED)}):t.$message.warning(i["a"].VALIDATION_FAILED)})}}},p=u,m=a("048f"),f=Object(m["a"])(p,r,o,!1,null,null,null);f.options.__file="BalanceManipulationForm.vue";var d=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("BalanceManipulationSearch",{on:{"on-search":e.handleSearch}}),a("div",[a("BalanceManipulationTable",{attrs:{data:e.tableData},on:{"on-changed":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1)],1)},h=[],v=a("1b629"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.formData,size:"small","label-width":"80px",inline:""}},[a("FormInput",{ref:"username",attrs:{label:"用户账号",width:"174px"},on:{"on-change":function(t){e.$set(e.formData,"username",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}}),a("FormSelect",{ref:"gameType",attrs:{httpAPIName:"fetchGamesList",labelAttr:"name",valueAttr:"id",prop:"gameType",label:"账户类型",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"gameType",t)}}}),a("FormSelect",{ref:"loanType",attrs:{httpAPIName:"fetchFinanceLoanType",labelAttr:"name",valueAttr:"dictionaryId",prop:"loanType",label:"账户类型",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"loanType",t)}}}),a("FormSelectStatic",{ref:"type",attrs:{options:[{value:0,label:"增加"},{value:1,label:"减少"}],label:"调整方向",width:"100px"},on:{"on-change":function(t){e.$set(e.formData,"type",t)}}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)},y=[],_=a("b34f"),k=a("30ce"),S={name:"BalanceManipulationSearch",components:{FormInput:_["a"],FormSelect:s["a"],FormSelectStatic:k["a"]},mixins:[v["h"]]},A=S,T=Object(m["a"])(A,g,y,!1,null,null,null);T.options.__file="BalanceManipulationSearch.vue";var x=T.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"username",label:"用户账号","min-width":100}}),a("el-table-column",{attrs:{prop:"gameName",label:"账户类型"}}),a("el-table-column",{attrs:{prop:"loanName",label:"借贷类型","min-width":100}}),a("el-table-column",{attrs:{label:"调整方向"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("depositDircetion")(t.row.type)))])]}}])}),a("el-table-column",{attrs:{label:"调整金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.money)))])]}}])}),a("el-table-column",{attrs:{label:"创建时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{label:"审核状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("depositStatus")(t.row.status)))])]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":120}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialog(t.row,"audit")}}},[e._v(e._s(e._f("auditTransfer")(t.row.status)))])]}}])})],1),a("DialogAudit",{ref:"audit",attrs:{data:e.activeItem},on:{"on-success":function(t){e.$emit("on-changed")}}})],1)},$=[],B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"加减款操作每项详情",width:"760px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{staticClass:"clearfix",attrs:{model:e.data,"label-width":"100px",size:"small",disabled:""}},[a("el-form-item",{attrs:{label:"会员账号"}},[a("el-input",{attrs:{value:e.data.username}})],1),a("el-form-item",{attrs:{label:"会员昵称"}},[a("el-input",{attrs:{value:e.data.nickname}})],1),a("el-form-item",{attrs:{label:"金额类型"}},[a("el-input",{attrs:{value:e.data.gameName}})],1),a("el-form-item",{attrs:{label:"借贷类型"}},[a("el-input",{attrs:{value:e.data.loanName}})],1),a("el-form-item",{attrs:{label:"调整方向"}},[a("el-input",{attrs:{value:e._f("depositDircetion")(e.data.type)}})],1),a("el-form-item",{attrs:{label:"调整金额"}},[a("el-input",{attrs:{value:e.data.money}})],1),a("el-form-item",{attrs:{label:"创建时间"}},[a("el-input",{attrs:{value:e._f("time")(e.data.createTime)}})],1),a("el-form-item",{attrs:{label:"创建者"}},[a("el-input",{attrs:{value:e.data.createName}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"调整理由"}},[a("el-input",{attrs:{value:e.data.remark,type:"textarea",rows:"3"}})],1)],1),e.data.status<=1?a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.changeStatus(2)}}},[e._v("审批通过")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){e.changeStatus(3)}}},[e._v("审批拒绝")])],1):e._e()],1)},F=[],O={name:"BalanceManipulationDialogAudit",mixins:[v["a"]],data:function(){return{requestParams:{changeId:this.data.changeId},audit:{httpAPI:"updateDepositFormStatus",attrName:"status"}}}},I=O,w=(a("768d"),Object(m["a"])(I,B,F,!1,null,"1320ba41",null));w.options.__file="DialogAudit.vue";var P=w.exports,M={name:"Audit",components:{DialogAudit:P},mixins:[v["o"]],data:function(){return{activeItem:{}}}},E=M,C=Object(m["a"])(E,D,$,!1,null,null,null);C.options.__file="BalanceManipulationTable.vue";var L=C.exports,N={name:"BalanceManipulationListUnchecked",components:{BalanceManipulationSearch:x,BalanceManipulationTable:L},mixins:[v["j"],v["p"]],data:function(){return{tableHttpAPI:"fetchFinanceBalanceManipulation",requestParams:{pageNo:1,pageSize:10,status:0},page:{current:1,size:10,total:10}}}},R=N,q=Object(m["a"])(R,b,h,!1,null,null,null);q.options.__file="BalanceManipulationListUnchecked.vue";var j=q.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("BalanceManipulationSearch",{on:{"on-search":e.handleSearch}}),a("div",[a("BalanceManipulationTable",{attrs:{data:e.tableData},on:{"on-changed":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1)],1)},U=[],H={name:"BalanceManipulationListChecked",components:{BalanceManipulationSearch:x,BalanceManipulationTable:L},mixins:[v["j"],v["p"]],data:function(){return{tableHttpAPI:"fetchFinanceBalanceManipulation",requestParams:{pageNo:1,pageSize:10,status:"2,3"},page:{current:1,size:10,total:10}}}},V=H,G=Object(m["a"])(V,z,U,!1,null,null,null);G.options.__file="BalanceManipulationListChecked.vue";var J=G.exports,K={name:"FinanceBalanceManipulation",components:{BalanceManipulationForm:d,BalanceManipulationListUnchecked:j,BalanceManipulationListChecked:J},data:function(){return{activeTab:"creating",currentTabComponent:"BalanceManipulationForm"}},methods:{handleCreated:function(){this.activeTab="unchecked",this.currentTabComponent="BalanceManipulationListUnchecked"},handleTabClick:function(e){switch(e.name){case"creating":this.currentTabComponent="BalanceManipulationForm";break;case"unchecked":this.currentTabComponent="BalanceManipulationListUnchecked";break;case"checked":this.currentTabComponent="BalanceManipulationListChecked";break;default:this.currentTabComponent="BalanceManipulationForm"}}}},Q=K,W=Object(m["a"])(Q,n,l,!1,null,null,null);W.options.__file="index.vue";t["default"]=W.exports}}]);
//# sourceMappingURL=chunk-6745d539.f84e7d50.js.map
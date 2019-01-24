(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61698b3e"],{"09d2":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{staticClass:"custom-block",attrs:{placeholder:t.placeholder,multiple:t.multiple,filterable:t.filterable,clearable:""},on:{change:function(e){t.$emit("on-change",t.selectedOption)}},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}},[t.rootVisible?a("el-option",{attrs:{label:t.rootLabel,value:t.rootValue}}):t._e(),t._l(t.options,function(t){return a("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})})],2)},l=[],o=(a("25d7"),a("84fb"),a("3a0f"),a("a3a3"),a("4d0b"),{name:"FormSelectAsync",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},placeholder:{type:String,default:"请选择"},rootVisible:{type:Boolean,default:!1},rootLabel:{type:String,default:"root"},rootValue:{type:[String,Number],default:0},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var t=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(e){t.$_.forEach(e.data.data,function(e){t.options.push({value:e[t.valueAttr],label:e[t.labelAttr]})})}).catch(function(t){return console.log(t)})}}}),n=o,i=a("048f"),s=Object(i["a"])(n,r,l,!1,null,null,null);s.options.__file="FormSelectAsync.vue";e["a"]=s.exports},"0f03":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("SearchLayout",[a("div",{attrs:{slot:"left"},slot:"left"},[a("WithdrawAccountSearch",{on:{"on-search":t.handleSearch}})],1),a("div",{attrs:{slot:"right"},slot:"right"},[a("BaseAdd",{nativeOn:{click:function(e){t.$refs.dialogCreate.toggleDialogVisible(!0)}}})],1)]),a("div",[a("WithdrawAccountTable",{attrs:{data:t.tableData},on:{"on-changed":function(e){t.fetchTableData()}}})],1),a("WithdrawAccountDialogCreate",{ref:"dialogCreate",on:{"on-created":function(e){t.fetchTableData()}}})],1)},l=[],o=a("1b629"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{attrs:{model:t.formData,size:"small",inline:""}},[a("SearchFormLayout",{on:{"on-search":function(e){t.search()},"on-reset":t.handleRefresh}},[a("el-form-item",{attrs:{label:"类型名称"}},[a("FormInput",{ref:"name",attrs:{placeholder:"类型名称",styles:{width:"140px"}},on:{"on-change":function(e){t.$set(t.formData,"name",e)}},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("on-search",t.formData)}}})],1),a("el-form-item",{attrs:{label:"接口类型名称"}},[a("FormSelectAsync",{ref:"dictionaryId",attrs:{httpAPIName:"fetchWithdrawAccountTypeList",httpAPIParams:{params:{type:5}},labelAttr:"name",valueAttr:"dictionaryId"},on:{"on-change":function(e){t.$set(t.formData,"dictionaryId",e)}}})],1),a("el-form-item",{attrs:{label:"商户ID"}},[a("FormInput",{ref:"merchantId",attrs:{placeholder:"商户ID",styles:{width:"100px"}},on:{"on-change":function(e){t.$set(t.formData,"merchantId",e)}},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("on-search",t.formData)}}})],1),a("el-form-item",{attrs:{label:"操作人"}},[a("FormInput",{ref:"operator",attrs:{placeholder:"操作人",styles:{width:"120px"}},on:{"on-change":function(e){t.$set(t.formData,"operator",e)}},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.$emit("on-search",t.formData)}}})],1),a("el-form-item",{attrs:{label:"启用状态"}},[a("FormSelectArray",{ref:"status",attrs:{options:["启用","禁用"],styles:{width:"100px"}},on:{"on-change":function(e){t.$set(t.formData,"status",e)}}})],1)],1)],1)},i=[],s=a("2c53"),c=a("b34f"),u=a("09d2"),m=a("57fb"),p={name:"WithdrawAccountSearch",components:{SearchFormLayout:s["a"],FormInput:c["a"],FormSelectAsync:u["a"],FormSelectArray:m["a"]},mixins:[o["h"]]},f=p,d=a("048f"),h=Object(d["a"])(f,n,i,!1,null,null,null);h.options.__file="WithdrawAccountSearch.vue";var b=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{attrs:{data:t.data,size:"small","max-height":"600","highlight-current-row":"",stripe:"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"name",label:"类型名称"}}),a("el-table-column",{attrs:{prop:"dictionaryName",label:"接口类型名称"}}),a("el-table-column",{attrs:{prop:"merchantId",label:"商户ID"}}),a("el-table-column",{attrs:{prop:"operator",label:"操作人"}}),a("el-table-column",{attrs:{prop:"operator",label:"接口类型名称"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}}),a("el-table-column",{attrs:{prop:"publicKey",label:"公钥"}}),a("el-table-column",{attrs:{prop:"privateKey",label:"私钥"}}),a("el-table-column",{attrs:{prop:"whiteList",label:"白名单"}}),a("el-table-column",{attrs:{prop:"status",label:"启用状态","min-width":70},scopedSlots:t._u([{key:"default",fn:function(e){return[a("BaseSwitch",{attrs:{propValue:!Boolean(e.row.status),payload:{id:e.row.paymentMerchantId},opposite:""},on:{"on-change":t.handleSwitchChange}})]}}])}),a("el-table-column",{attrs:{prop:"sort",label:"排序"}}),a("el-table-column",{attrs:{prop:"remarks",label:"备注"}}),a("el-table-column",{attrs:{prop:"operations",label:"操作","min-width":130},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-view",size:"mini"},on:{click:function(a){t.showDialog(e.row,"dialogDetail")}}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){t.showDialog(e.row,"dialogUpdate")}}}),a("el-button",{attrs:{type:"warning",icon:"el-icon-delete",size:"mini"},on:{click:function(a){t.showDialog(e.row,"dialogDelete")}}})],1)]}}])})],1),a("WithdrawAccountDialogDetail",{ref:"dialogDetail",attrs:{data:t.activeItem}}),a("WithdrawAccountDialogUpdate",{ref:"dialogUpdate",attrs:{data:t.activeItem},on:{"on-updated":function(e){t.$emit("on-changed")}}}),a("DialogDeleteConfirm",{ref:"dialogDelete",attrs:{title:"类型名称",name:t.activeItem.name},on:{"on-confirm":t.handleDeleteConfirm}})],1)},y=[],g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.dialogVisible,title:"出款商户配置详情",width:"760px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{staticClass:"clearfix",attrs:{model:t.formData,"label-width":"100px",size:"small",disabled:""}},[a("el-form-item",{attrs:{label:"接口名称"}},[a("el-input",{attrs:{value:t.formData.name}})],1),a("el-form-item",{attrs:{label:"接口类型名称"}},[a("el-input",{attrs:{value:t.formData.dictionaryName}})],1),a("el-form-item",{attrs:{label:"排列顺序"}},[a("el-input",{attrs:{value:t.formData.sort}})],1),a("el-form-item",{attrs:{label:"启用状态"}},[a("el-radio-group",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status",e)},expression:"formData.status"}},[a("el-radio",{attrs:{label:0}},[t._v("启用")]),a("el-radio",{attrs:{label:1}},[t._v("禁用")])],1)],1),a("el-form-item",{attrs:{label:"商户ID"}},[a("el-input",{attrs:{value:t.formData.merchantId}})],1),a("el-form-item",{attrs:{label:"操作人"}},[a("el-input",{attrs:{value:t.formData.operator}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"地址"}},[a("el-input",{attrs:{value:t.formData.address}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"秘钥(公钥)"}},[a("el-input",{attrs:{value:t.formData.publicKey,placeholder:"秘钥(公钥)"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"秘钥(私钥)"}},[a("el-input",{attrs:{value:t.formData.privateKey,placeholder:"秘钥(私钥)"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"IP白名单"}},[a("el-input",{attrs:{value:t.formData.whiteList,placeholder:"ip白名单，多个用逗号分隔"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{label:"备注"}},[a("el-input",{attrs:{value:t.formData.remark,type:"textarea",rows:"3"}})],1),a("el-form-item",{attrs:{label:"创建时间"}},[a("el-input",{attrs:{value:t._f("time")(t.formData.createTime)}})],1)],1)],1)},D=[],w={name:"WithdrawTypeDialogDetail",mixins:[o["c"]]},_=w,A=(a("3f50"),Object(d["a"])(_,g,D,!1,null,"6b344492",null));A.options.__file="WithdrawAccountDialogDetail.vue";var k=A.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.dialogVisible,title:"修改出款商户配置",width:"768px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("WithdrawAccountForm",{ref:"form",attrs:{data:t.data},on:{"on-validated":t.handleValidationSuccess}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.$refs.form.validateForm()}}},[t._v("确定")])],1)],1)},x=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"form",staticClass:"clearfix",attrs:{model:t.formData,rules:t.rules,size:"small","label-width":"100px"}},[a("el-form-item",{attrs:{prop:"name",label:"接口名称"}},[a("el-input",{attrs:{placeholder:"接口名称"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name","string"===typeof e?e.trim():e)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{prop:"dictionaryId",label:"接口类型"}},[a("FormSelectAsync",{ref:"dictionaryId",attrs:{value:t.formData.dictionaryId,httpAPIName:"fetchWithdrawAccountTypeList",httpAPIParams:{params:{type:5}},labelAttr:"name",valueAttr:"dictionaryId"},on:{"on-change":function(e){t.$set(t.formData,"dictionaryId",e)}}})],1),a("el-form-item",{attrs:{prop:"sort",label:"排列顺序"}},[a("el-input",{attrs:{placeholder:"排列顺序",type:"number"},model:{value:t.formData.sort,callback:function(e){t.$set(t.formData,"sort","string"===typeof e?e.trim():e)},expression:"formData.sort"}})],1),a("el-form-item",{attrs:{prop:"status",label:"启用状态"}},[a("el-radio-group",{model:{value:t.formData.status,callback:function(e){t.$set(t.formData,"status","string"===typeof e?e.trim():e)},expression:"formData.status"}},[a("el-radio",{attrs:{label:0}},[t._v("启用")]),a("el-radio",{attrs:{label:1}},[t._v("禁用")])],1)],1),a("el-form-item",{attrs:{prop:"merchantId",label:"商户ID"}},[a("el-input",{attrs:{placeholder:"支付宝"},model:{value:t.formData.merchantId,callback:function(e){t.$set(t.formData,"merchantId","string"===typeof e?e.trim():e)},expression:"formData.merchantId"}})],1),a("el-form-item",{attrs:{prop:"operator",label:"操作人"}},[a("el-input",{attrs:{placeholder:"超级管理员"},model:{value:t.formData.operator,callback:function(e){t.$set(t.formData,"operator","string"===typeof e?e.trim():e)},expression:"formData.operator"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{prop:"address",label:"支付地址"}},[a("el-input",{attrs:{placeholder:"广东广州"},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address","string"===typeof e?e.trim():e)},expression:"formData.address"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{prop:"publicKey",label:"秘钥(公钥)"}},[a("el-input",{attrs:{placeholder:"秘钥(公钥)"},model:{value:t.formData.publicKey,callback:function(e){t.$set(t.formData,"publicKey","string"===typeof e?e.trim():e)},expression:"formData.publicKey"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{prop:"privateKey",label:"秘钥(私钥)"}},[a("el-input",{attrs:{placeholder:"秘钥(私钥)"},model:{value:t.formData.privateKey,callback:function(e){t.$set(t.formData,"privateKey","string"===typeof e?e.trim():e)},expression:"formData.privateKey"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{prop:"whiteList",label:"IP白名单"}},[a("el-input",{attrs:{placeholder:"ip白名单，多个用逗号分隔"},model:{value:t.formData.whiteList,callback:function(e){t.$set(t.formData,"whiteList","string"===typeof e?e.trim():e)},expression:"formData.whiteList"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{prop:"remark",label:"备注"}},[a("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"备注"},model:{value:t.formData.remark,callback:function(e){t.$set(t.formData,"remark","string"===typeof e?e.trim():e)},expression:"formData.remark"}})],1)],1)},$=[],O=a("322c"),W={name:"PaymentPortForm",components:{FormSelectAsync:u["a"]},mixins:[o["e"]],data:function(){return{formData:{name:"",dictionaryId:"",sort:0,status:0},rules:{name:O["a"].validateRequired("接口名称不能为空"),dictionaryId:O["a"].validateSelect("接口类型"),status:O["a"].validateSelect("启用状态"),sort:O["a"].validateInteger("排列顺序")}}}},C=W,F=(a("3c45"),Object(d["a"])(C,S,$,!1,null,"0326eebc",null));F.options.__file="WithdrawAccountForm.vue";var P=F.exports,V={name:"WithdrawAccountDialogUpdate",components:{WithdrawAccountForm:P},mixins:[o["d"]],data:function(){return{updateHttpAPI:"updateWithdrawAccountItem",httpParams:{}}},watch:{data:function(){this.httpParams.paymentMerchantId=this.data.paymentMerchantId}}},E=V,L=Object(d["a"])(E,I,x,!1,null,null,null);L.options.__file="WithdrawAccountDialogUpdate.vue";var j=L.exports,q=a("aa68"),K={name:"WithdrawAccountTable",components:{WithdrawAccountDialogDetail:k,WithdrawAccountDialogUpdate:j,DialogDeleteConfirm:q["a"]},mixins:[o["n"],o["m"]],data:function(){return{deleteHttpAPI:"deleteWithdrawAccountItem",deleteAttrName:"paymentMerchantId",deleteId:"paymentMerchantId",switchObj:{API:"updateWithdrawAccountItem",attrId:"paymentMerchantId",attrValue:"status"},activeItem:{name:""}}}},T=K,N=Object(d["a"])(T,v,y,!1,null,null,null);N.options.__file="WithdrawAccountTable.vue";var z=N.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.dialogVisible,title:"创建新出款商户配置",width:"760px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("WithdrawAccountForm",{ref:"form",on:{"on-validated":t.handleValidationSuccess}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-checkbox",{staticClass:"pull-left",model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v(t._s(t.saveString))]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){t.$refs.form.validateForm()}}},[t._v("确定")])],1)],1)},B=[],M={name:"WithdrawAccountDialogCreate",components:{WithdrawAccountForm:P},mixins:[o["b"]],data:function(){return{createHttpAPI:"updateWithdrawAccountItem"}}},U=M,H=Object(d["a"])(U,R,B,!1,null,null,null);H.options.__file="WithdrawAccountDialogCreate.vue";var J=H.exports,G={name:"TransactionWithdrawAccount",components:{WithdrawAccountSearch:b,WithdrawAccountTable:z,WithdrawAccountDialogCreate:J},mixins:[o["i"],o["q"]],data:function(){return{tableHttpAPI:"fetchWithdrawAccountList",requestParams:{}}}},Q=G,X=Object(d["a"])(Q,r,l,!1,null,null,null);X.options.__file="index.vue";e["default"]=X.exports},"16c3":function(t,e,a){},"2c53":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default"),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(e){t.$emit("on-search")}}}),a("SearchReset",{nativeOn:{click:function(e){t.$emit("on-reset")}}})],1)],2)},l=[],o=a("9ab4"),n=a("85f7"),i={name:"SearchFormLayout",components:{SearchIcon:o["a"],SearchReset:n["a"]}},s=i,c=a("048f"),u=Object(c["a"])(s,r,l,!1,null,null,null);u.options.__file="SearchFormLayout.vue";e["a"]=u.exports},"322c":function(t,e,a){"use strict";a("5616");var r={validateRequired:function(t){return{required:!0,message:"".concat(t,"不能为空")}},validateSelect:function(t){return{required:!0,message:"".concat(t,"至少选择其中一个")}},validatePhone:function(t){return[{required:!0,message:"".concat(t,"不能为空")},{pattern:/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,message:"请输入有效的11位手机号码"}]},validateStringLength:function(t,e,a){return[{required:!0,message:"".concat(t,"不能为空")},{min:e,max:a,message:"".concat(t,"长度在 ").concat(e," - ").concat(a," 字符之间")}]},validateInteger:function(t,e){return arguments[1]?[{required:!0,message:"".concat(t,"不能为空")},{pattern:new RegExp("^[0-9]{1,".concat(e,"}$")),message:"".concat(t,"必须 0 - ").concat(l(e)," 为之间整数")}]:[{required:!0,message:"".concat(t,"不能为空")},{pattern:/^[0-9]+$/,message:"".concat(t,"必须为整数")}]}};function l(t){for(var e="",a=0;a<t;a++)e+="9";return e}e["a"]=r},"3be5":function(t,e,a){},"3c45":function(t,e,a){"use strict";var r=a("80c4"),l=a.n(r);l.a},"3f50":function(t,e,a){"use strict";var r=a("3be5"),l=a.n(r);l.a},"54b5":function(t,e,a){"use strict";var r=a("16c3"),l=a.n(r);l.a},5616:function(t,e,a){var r=a("53da"),l=a("69d8"),o=a("9a0d").f,n=a("e853").f,i=a("c28a"),s=a("2fc4"),c=r.RegExp,u=c,m=c.prototype,p=/a/g,f=/a/g,d=new c(p)!==p;if(a("f711")&&(!d||a("cce3")(function(){return f[a("5761")("match")]=!1,c(p)!=p||c(f)==f||"/a/i"!=c(p,"i")}))){c=function(t,e){var a=this instanceof c,r=i(t),o=void 0===e;return!a&&r&&t.constructor===c&&o?t:l(d?new u(r&&!o?t.source:t,e):u((r=t instanceof c)?t.source:t,r&&o?s.call(t):e),a?this:m,c)};for(var h=function(t){t in c||o(c,t,{configurable:!0,get:function(){return u[t]},set:function(e){u[t]=e}})},b=n(u),v=0;b.length>v;)h(b[v++]);m.constructor=c,c.prototype=m,a("7e22")(r,"RegExp",c)}a("2943")("RegExp")},"57fb":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-select",{style:t.styles,attrs:{placeholder:t.placeholder,clearable:""},on:{change:function(e){t.$emit("on-change",t.selectedOption)}},model:{value:t.selectedOption,callback:function(e){t.selectedOption=e},expression:"selectedOption"}},t._l(t.options,function(t,e){return a("el-option",{key:e,attrs:{label:t,value:e}})}))},l=[],o=(a("84fb"),{name:"FormSelectArray",props:{value:{type:[String,Number],default:""},options:{type:Array,required:!0},placeholder:{type:String,default:"请选择"},styles:{type:Object,default:function(){return{}}}},data:function(){return{selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},methods:{reset:function(){this.selectedOption=""}}}),n=o,i=a("048f"),s=Object(i["a"])(n,r,l,!1,null,null,null);s.options.__file="FormSelectArray.vue";e["a"]=s.exports},"80c4":function(t,e,a){},aa68:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{visible:t.dialogVisible,title:"删除确认",width:"400px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",[a("span",{staticClass:"highlight-text"},[t._v("删除")]),t._v("\n    "+t._s(t.title)+" 为\n    "),a("span",{staticClass:"highlight-text"},[t._v(t._s(t.name)+" ")]),t._v("数据?\n  ")]),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$emit("on-confirm")}}},[t._v("确认")]),a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取消")])],1)])},l=[],o={props:{title:{type:String,required:!0},name:{type:String,required:!0}},data:function(){return{dialogVisible:!1}},methods:{toggleDialogVisible:function(t){this.dialogVisible=t}}},n=o,i=(a("54b5"),a("048f")),s=Object(i["a"])(n,r,l,!1,null,"e7eae444",null);s.options.__file="DialogDeleteConfirm.vue";e["a"]=s.exports},b34f:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-input",{style:t.styles,attrs:{placeholder:t.placeholder,clearable:""},on:{input:function(e){t.$emit("on-change",e)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},l=[],o={name:"FormInput",props:{placeholder:{type:String,default:"请输入内容"},styles:{type:Object,default:function(){return{}}}},data:function(){return{value:""}},methods:{reset:function(){this.value=""}}},n=o,i=a("048f"),s=Object(i["a"])(n,r,l,!1,null,null,null);s.options.__file="FormInput.vue";e["a"]=s.exports}}]);
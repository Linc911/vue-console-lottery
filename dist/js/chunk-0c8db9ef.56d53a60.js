(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c8db9ef"],{"0101":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("SearchLayout",[a("div",{attrs:{slot:"left"},slot:"left"},[a("FeedbackManagementSearch",{on:{"on-search":e.handleSearch}})],1),a("div",{attrs:{slot:"right"},slot:"right"},[a("BaseAdd",{nativeOn:{click:function(t){e.$refs.dialogCreate.toggleDialogVisible(!0)}}})],1)]),a("div",[a("FeedbackManagementTable",{attrs:{data:e.tableData},on:{"on-changed":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1),a("FeedbackManagementDialogCreate",{ref:"dialogCreate",on:{"on-created":function(t){e.fetchTableData()}}})],1)},l=[],i=(a("3a0f"),a("a3a3"),a("4d0b"),a("1b629")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("FormInput",{ref:"username",attrs:{label:"用户账号",width:"174px"},on:{"on-change":function(t){e.$set(e.formData,"username",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}}),a("FormSelectStatic",{ref:"status",attrs:{options:[{value:0,label:"待审核"},{value:1,label:"已查看"},{value:2,label:"待解决"},{value:3,label:"已解决"},{value:4,label:"不予解决"}],label:"处理状态",width:"100px"},on:{"on-change":function(t){e.$set(e.formData,"status",t)}}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)},r=[],c=a("b34f"),s=a("30ce"),u={name:"ActivityListSearch",components:{FormInput:c["a"],FormSelectStatic:s["a"]},mixins:[i["f"]]},d=u,f=a("048f"),m=Object(f["a"])(d,o,r,!1,null,null,null);m.options.__file="FeedbackManagementSearch.vue";var p=m.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"title",label:"反馈标题","min-width":120}}),a("el-table-column",{attrs:{prop:"content",label:"反馈内容","min-width":240}}),a("el-table-column",{attrs:{prop:"fileUrl",label:"附件URL","min-width":70}}),a("el-table-column",{attrs:{prop:"status",label:"处理状态","min-width":70},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("statusPipe")(t.row.status)))])]}}])}),a("el-table-column",{attrs:{prop:"operations",label:"操作","min-width":130},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-view",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogDetail")}}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogUpdate")}}}),a("el-button",{attrs:{type:"warning",icon:"el-icon-delete",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogDelete")}}})],1)]}}])})],1),a("FeedbackManagementDialogDetail",{ref:"dialogDetail",attrs:{data:e.activeItem}}),a("FeedbackManagementDialogUpdate",{ref:"dialogUpdate",attrs:{data:e.activeItem},on:{"on-updated":function(t){e.$emit("on-changed")}}}),a("DialogDeleteConfirm",{ref:"dialogDelete",attrs:{title:"反馈标题",name:e.activeItem.title},on:{"on-confirm":e.handleDeleteConfirm}})],1)},g=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"会员注册配置详情",width:"450px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.formData,size:"small","label-width":"80px",disabled:""}},[a("el-form-item",{attrs:{label:"显示名称"}},[a("el-input",{attrs:{value:e.formData.name}})],1),a("el-form-item",{attrs:{label:"注册属性"}},[a("el-input",{attrs:{value:e.formData.value}})],1),a("el-form-item",{attrs:{label:"排序"}},[a("el-input",{attrs:{value:e.formData.sort}})],1),a("el-form-item",{attrs:{label:"启用状态"}},[a("el-radio-group",{attrs:{value:e.formData.status}},[a("el-radio",{attrs:{label:0}},[e._v("启用")]),a("el-radio",{attrs:{label:1}},[e._v("禁用")])],1)],1),a("el-form-item",{attrs:{label:"备用"}},[a("el-input",{attrs:{value:e.formData.remark,type:"textarea",rows:"3"}})],1)],1)],1)},h=[],k={name:"RegistryUserDialogDetail",mixins:[i["b"]]},_=k,D=Object(f["a"])(_,v,h,!1,null,null,null);D.options.__file="FeedbackManagementDialogDetail.vue";var w=D.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"修改问题反馈",width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("FeedbackManagementForm",{ref:"form",attrs:{data:e.data},on:{"on-validated":e.handleValidationSuccess}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.submitForm("formUpdate")}}},[e._v("确定")])],1)],1)},F=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{prop:"title",label:"反馈标题"}},[a("el-input",{attrs:{placeholder:"字数控制在50字以内"},model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title","string"===typeof t?t.trim():t)},expression:"formData.title"}})],1),a("el-form-item",{attrs:{prop:"fileUrl",label:"文件路径"}},[a("el-input",{attrs:{placeholder:"http://www.baidu.com/xxx.doc"},model:{value:e.formData.fileUrl,callback:function(t){e.$set(e.formData,"fileUrl","string"===typeof t?t.trim():t)},expression:"formData.fileUrl"}})],1),a("el-form-item",{attrs:{prop:"content",label:"反馈内容"}},[a("el-input",{attrs:{type:"textarea",rows:"5",placeholder:"字数控制在150字以内,内容较多可以上传附件形式上传"},model:{value:e.formData.content,callback:function(t){e.$set(e.formData,"content","string"===typeof t?t.trim():t)},expression:"formData.content"}})],1)],1)},S=[],M=a("322c"),$={name:"FeedbackManagemen",mixins:[i["d"]],data:function(){return{formData:{title:"",fileUrl:"",content:""},rules:{title:M["a"].validateRequired("反馈标题"),content:M["a"].validateRequired("反馈内容"),fileUrl:M["a"].validateRequired("文件路径")}}}},I=$,O=Object(f["a"])(I,y,S,!1,null,null,null);O.options.__file="FeedbackManagementForm.vue";var U=O.exports,q={name:"FeedbackManagementDialogUpdate",components:{FeedbackManagementForm:U},mixins:[i["c"]],data:function(){return{updateHttpAPI:"updateWebsiteFeedbackItem"}}},C=q,E=Object(f["a"])(C,x,F,!1,null,null,null);E.options.__file="FeedbackManagementDialogUpdate.vue";var V=E.exports,P=a("aa68"),R={name:"FeedbackManagementTable",components:{FeedbackManagementDialogDetail:w,FeedbackManagementDialogUpdate:V,DialogDeleteConfirm:P["a"]},filters:{statusPipe:function(e){switch(e){case 0:return"待审核";case 1:return"已查看";case 2:return"待解决";case 3:return"已解决";case 4:return"不予解决";default:return"其他"}}},mixins:[i["m"]],data:function(){return{activeItem:{title:""},deleteHttpAPI:"deleteWebsiteFeedbackItem",deleteAttrName:"feedbackId",deleteId:"feedbackId"}}},z=R,j=Object(f["a"])(z,b,g,!1,null,null,null);j.options.__file="FeedbackManagementTable.vue";var A=j.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"创建新问题反馈",width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("FeedbackManagementForm",{ref:"form",on:{"on-validated":e.handleValidationSuccess}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-checkbox",{staticClass:"pull-left",model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v(e._s(e.saveString))]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.submitForm("formCreate")}}},[e._v("确定")])],1)],1)},T=[],H={name:"FeedbackManagementDialogCreate",components:{FeedbackManagementForm:U},mixins:[i["a"]],data:function(){return{createHttpAPI:"updateWebsiteFeedbackItem"}}},W=H,N=Object(f["a"])(W,L,T,!1,null,null,null);N.options.__file="FeedbackManagementDialogCreate.vue";var B=N.exports,J={name:"WebsiteFeedbackManagement",components:{FeedbackManagementSearch:p,FeedbackManagementTable:A,FeedbackManagementDialogCreate:B},mixins:[i["g"],i["n"]],data:function(){return{tableHttpAPI:"fetchWebsiteFeedbackList",requestParams:{pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}}},G=J,K=Object(f["a"])(G,n,l,!1,null,null,null);K.options.__file="index.vue";t["default"]=K.exports},"16c3":function(e,t,a){},"30ce":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:e.prop,label:e.label}},[a("el-select",{style:{width:e.width},attrs:{placeholder:e.label,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)},l=[],i=(a("84fb"),{name:"FormSelectStatic",props:{value:{type:[String,Number],default:""},options:{type:Array,required:!0},label:{type:String,default:"状态"},prop:{type:String,default:""},width:{type:String,default:""}},data:function(){return{selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},methods:{reset:function(){this.selectedOption=""}}}),o=i,r=a("048f"),c=Object(r["a"])(o,n,l,!1,null,null,null);c.options.__file="FormSelectStatic.vue";t["a"]=c.exports},"322c":function(e,t,a){"use strict";a("5616");var n={validateRequired:function(e){return{required:!0,message:"".concat(e,"不能为空")}},validateSelect:function(e){return{required:!0,message:"".concat(e,"至少选择其中一个")}},validatePhone:function(e){return[{required:!0,message:"".concat(e,"不能为空")},{pattern:/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,message:"请输入有效的11位手机号码"}]},validateStringLength:function(e,t,a){return[{required:!0,message:"".concat(e,"不能为空")},{min:t,max:a,message:"".concat(e,"长度在 ").concat(t," - ").concat(a," 字符之间")}]},validateInteger:function(e,t){return arguments[1]?[{required:!0,message:"".concat(e,"不能为空")},{pattern:new RegExp("^[0-9]{1,".concat(t,"}$")),message:"".concat(e,"必须 0 - ").concat(l(t)," 为之间整数")}]:[{required:!0,message:"".concat(e,"不能为空")},{pattern:/^[0-9]+$/,message:"".concat(e,"必须为整数")}]}};function l(e){for(var t="",a=0;a<e;a++)t+="9";return t}t["a"]=n},"54b5":function(e,t,a){"use strict";var n=a("16c3"),l=a.n(n);l.a},5616:function(e,t,a){var n=a("53da"),l=a("69d8"),i=a("9a0d").f,o=a("e853").f,r=a("c28a"),c=a("2fc4"),s=n.RegExp,u=s,d=s.prototype,f=/a/g,m=/a/g,p=new s(f)!==f;if(a("f711")&&(!p||a("cce3")(function(){return m[a("5761")("match")]=!1,s(f)!=f||s(m)==m||"/a/i"!=s(f,"i")}))){s=function(e,t){var a=this instanceof s,n=r(e),i=void 0===t;return!a&&n&&e.constructor===s&&i?e:l(p?new u(n&&!i?e.source:e,t):u((n=e instanceof s)?e.source:e,n&&i?c.call(e):t),a?this:d,s)};for(var b=function(e){e in s||i(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},g=o(u),v=0;g.length>v;)b(g[v++]);d.constructor=s,s.prototype=d,a("7e22")(n,"RegExp",s)}a("2943")("RegExp")},aa68:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"删除确认",width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("span",{staticClass:"highlight-text"},[e._v("删除")]),e._v("\n    "+e._s(e.title)+" 为\n    "),a("span",{staticClass:"highlight-text"},[e._v(e._s(e.name)+" ")]),e._v("数据?\n  ")]),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$emit("on-confirm")}}},[e._v("确认")]),a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")])],1)])},l=[],i={props:{title:{type:String,required:!0},name:{type:String,required:!0}},data:function(){return{dialogVisible:!1}},methods:{toggleDialogVisible:function(e){this.dialogVisible=e}}},o=i,r=(a("54b5"),a("048f")),c=Object(r["a"])(o,n,l,!1,null,"e7eae444",null);c.options.__file="DialogDeleteConfirm.vue";t["a"]=c.exports},b34f:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:e.label,width:e.width}},[a("el-input",{attrs:{placeholder:e.label,clearable:""},on:{input:function(t){e.$emit("on-change",t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},l=[],i={name:"FormInput",props:{label:{type:String,default:"请输入内容"},width:{type:String,default:""}},data:function(){return{value:""}},methods:{reset:function(){this.value=""}}},o=i,r=a("048f"),c=Object(r["a"])(o,n,l,!1,null,null,null);c.options.__file="FormInput.vue";t["a"]=c.exports}}]);
//# sourceMappingURL=chunk-0c8db9ef.56d53a60.js.map
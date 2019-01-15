(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34ca6c1e"],{"16c3":function(e,t,a){},"30ce":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:e.prop,label:e.label}},[a("el-select",{style:{width:e.width},attrs:{placeholder:e.label,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)},i=[],o=(a("84fb"),{name:"FormSelectStatic",props:{value:{type:[String,Number],default:""},options:{type:Array,required:!0},label:{type:String,default:"状态"},prop:{type:String,default:""},width:{type:String,default:""}},data:function(){return{selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},methods:{reset:function(){this.selectedOption=""}}}),r=o,n=a("048f"),s=Object(n["a"])(r,l,i,!1,null,null,null);s.options.__file="FormSelectStatic.vue";t["a"]=s.exports},"322c":function(e,t,a){"use strict";a("5616");var l={validateRequired:function(e){return{required:!0,message:"".concat(e,"不能为空")}},validateSelect:function(e){return{required:!0,message:"".concat(e,"至少选择其中一个")}},validatePhone:function(e){return[{required:!0,message:"".concat(e,"不能为空")},{pattern:/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,message:"请输入有效的11位手机号码"}]},validateStringLength:function(e,t,a){return[{required:!0,message:"".concat(e,"不能为空")},{min:t,max:a,message:"".concat(e,"长度在 ").concat(t," - ").concat(a," 字符之间")}]},validateInteger:function(e,t){return arguments[1]?[{required:!0,message:"".concat(e,"不能为空")},{pattern:new RegExp("^[0-9]{1,".concat(t,"}$")),message:"".concat(e,"必须 0 - ").concat(i(t)," 为之间整数")}]:[{required:!0,message:"".concat(e,"不能为空")},{pattern:/^[0-9]+$/,message:"".concat(e,"必须为整数")}]}};function i(e){for(var t="",a=0;a<e;a++)t+="9";return t}t["a"]=l},3885:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-upload",{attrs:{action:e.action,"on-success":e.handleUploadSuccess,"on-remove":e.handleRemoveFile,limit:e.limit,disabled:e.uploadDisabled,"list-type":"picture-card"}},[a("i",{staticClass:"el-icon-plus"})])},i=[],o=(a("84fb"),{name:"FormUploadImage",props:{limit:{type:Number,default:1}},data:function(){return{action:"http://192.168.5.129:8080/api-f/files-anon/fdfsupload",uploadDisabled:!1}},methods:{handleUploadSuccess:function(e,t,a){this.$message.success("上传成功 该功能只能上传".concat(this.limit,"张图片")),this.$emit("on-uploaded",{response:e,file:t,fileList:a})},handleRemoveFile:function(e){this.limit<=1?this.$emit("on-removed",""):this.$emit("on-removed",e)}}}),r=o,n=a("048f"),s=Object(n["a"])(r,l,i,!1,null,null,null);s.options.__file="FormUploadImage.vue";t["a"]=s.exports},"54b5":function(e,t,a){"use strict";var l=a("16c3"),i=a.n(l);i.a},5616:function(e,t,a){var l=a("53da"),i=a("69d8"),o=a("9a0d").f,r=a("e853").f,n=a("c28a"),s=a("2fc4"),c=l.RegExp,u=c,m=c.prototype,d=/a/g,f=/a/g,p=new c(d)!==d;if(a("f711")&&(!p||a("cce3")(function(){return f[a("5761")("match")]=!1,c(d)!=d||c(f)==f||"/a/i"!=c(d,"i")}))){c=function(e,t){var a=this instanceof c,l=n(e),o=void 0===t;return!a&&l&&e.constructor===c&&o?e:i(p?new u(l&&!o?e.source:e,t):u((l=e instanceof c)?e.source:e,l&&o?s.call(e):t),a?this:m,c)};for(var g=function(e){e in c||o(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},b=r(u),v=0;b.length>v;)g(b[v++]);m.constructor=c,c.prototype=m,a("7e22")(l,"RegExp",c)}a("2943")("RegExp")},"8ed5":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:e.dialogWidth},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{attrs:{src:e.imgUrl,width:"100%",height:"100%"}}),a("div",{staticStyle:{padding:"14px"}},[a("p",{staticStyle:{"word-break":"break-all"}},[e._v(e._s(e.imgUrl))])])])],1)},i=[],o=(a("3a0f"),a("a3a3"),a("4d0b"),{props:{dialogTitle:{type:String,default:"图片预览"},dialogWidth:{type:String,default:"450px"},imgUrl:{type:String,required:!0}},data:function(){return{dialogVisible:!1}},methods:{toggleDialogVisible:function(e){this.dialogVisible=e}}}),r=o,n=a("048f"),s=Object(n["a"])(r,l,i,!1,null,null,null);s.options.__file="DialogImagePreview.vue";t["a"]=s.exports},a531:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("i",{staticClass:"el-icon-search",on:{click:function(t){e.$emit("on-click")}}})},i=[],o=(a("a692"),a("048f")),r={},n=Object(o["a"])(r,l,i,!1,null,"46b5fda1",null);n.options.__file="BasePreview.vue";t["a"]=n.exports},a692:function(e,t,a){"use strict";var l=a("b89a"),i=a.n(l);i.a},aa68:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"删除确认",width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("span",{staticClass:"highlight-text"},[e._v("删除")]),e._v("\n    "+e._s(e.title)+" 为\n    "),a("span",{staticClass:"highlight-text"},[e._v(e._s(e.name)+" ")]),e._v("数据?\n  ")]),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$emit("on-confirm")}}},[e._v("确认")]),a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")])],1)])},i=[],o={props:{title:{type:String,required:!0},name:{type:String,required:!0}},data:function(){return{dialogVisible:!1}},methods:{toggleDialogVisible:function(e){this.dialogVisible=e}}},r=o,n=(a("54b5"),a("048f")),s=Object(n["a"])(r,l,i,!1,null,"e7eae444",null);s.options.__file="DialogDeleteConfirm.vue";t["a"]=s.exports},b34f:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:e.label,width:e.width}},[a("el-input",{attrs:{placeholder:e.label,clearable:""},on:{input:function(t){e.$emit("on-change",t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},i=[],o={name:"FormInput",props:{label:{type:String,default:"请输入内容"},width:{type:String,default:""}},data:function(){return{value:""}},methods:{reset:function(){this.value=""}}},r=o,n=a("048f"),s=Object(n["a"])(r,l,i,!1,null,null,null);s.options.__file="FormInput.vue";t["a"]=s.exports},b89a:function(e,t,a){},d432:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("SearchLayout",[a("div",{attrs:{slot:"left"},slot:"left"},[a("ImagePhoneSearch",{on:{"on-search":e.handleSearch}})],1),a("div",{attrs:{slot:"right"},slot:"right"},[a("BaseAdd",{nativeOn:{click:function(t){e.$refs.dialogCreate.toggleDialogVisible(!0)}}})],1)]),a("div",[a("ImagePhoneTable",{attrs:{data:e.tableData},on:{"on-changed":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1),a("ImagePhoneDialogCreate",{ref:"dialogCreate",on:{"on-created":function(t){e.fetchTableData()}}})],1)},i=[],o=(a("3a0f"),a("a3a3"),a("4d0b"),a("1b629")),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("FormInput",{ref:"name",attrs:{label:"图片名称",width:"174px"},on:{"on-change":function(t){e.$set(e.formData,"name",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}}),a("FormSelectStatic",{ref:"status",attrs:{options:[{value:0,label:"启用"},{value:1,label:"禁用"}],label:"启用状态",width:"100px"},on:{"on-change":function(t){e.$set(e.formData,"status",t)}}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)},n=[],s=a("b34f"),c=a("30ce"),u={name:"ActivityListSearch",components:{FormInput:s["a"],FormSelectStatic:c["a"]},mixins:[o["h"]]},m=u,d=a("048f"),f=Object(d["a"])(m,r,n,!1,null,null,null);f.options.__file="ImagePhoneSearch.vue";var p=f.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"name",label:"图片名称",width:150}}),a("el-table-column",{attrs:{prop:"coverUrl",label:"图片地址","min-width":70},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.coverUrl?a("span",[e._v("\n          查看 "),a("BasePreview",{nativeOn:{click:function(a){e.showPreviewImage(t.row.coverUrl)}}})],1):e._e()]}}])}),a("el-table-column",{attrs:{prop:"url",label:"跳转地址",width:240}}),a("el-table-column",{attrs:{prop:"status",label:"启用状态","min-width":70},scopedSlots:e._u([{key:"default",fn:function(t){return[a("BaseSwitch",{attrs:{propValue:!Boolean(t.row.status),payload:{id:t.row.coverConfigId},opposite:""},on:{"on-change":e.handleSwitchChange}})]}}])}),a("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":45}}),a("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":120}}),a("el-table-column",{attrs:{prop:"operations",label:"操作","min-width":130},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-view",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogDetail")}}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogUpdate")}}}),a("el-button",{attrs:{type:"warning",icon:"el-icon-delete",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogDelete")}}})]}}])})],1),a("DialogImagePreview",{ref:"imagePreview",attrs:{imgUrl:e.imgUrl,dialogWidth:"600px"}}),a("ImagePhoneDialogDetail",{ref:"dialogDetail",attrs:{data:e.activeItem}}),a("ImagePhoneDialogUpdate",{ref:"dialogUpdate",attrs:{data:e.activeItem},on:{"on-updated":function(t){e.$emit("on-changed")}}}),a("DialogDeleteConfirm",{ref:"dialogDelete",attrs:{title:"图片名称",name:e.activeItem.name},on:{"on-confirm":e.handleDeleteConfirm}})],1)},b=[],v=a("a531"),h=a("8ed5"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"手机首页图片详情",width:"600px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.formData,size:"small","label-width":"80px",disabled:""}},[a("el-form-item",{attrs:{label:"图片名称"}},[a("el-input",{attrs:{value:e.formData.name}})],1),a("el-form-item",{attrs:{label:"跳转地址"}},[a("el-input",{attrs:{value:e.formData.url}})],1),a("el-form-item",{attrs:{label:"图片地址"}},[a("div",{staticClass:"image-box"},[a("img",{staticClass:"activity-image",attrs:{src:e.formData.coverUrl,alt:"封面图片"}})])]),a("el-form-item",{attrs:{label:"启用状态"}},[a("el-radio-group",{attrs:{value:e.formData.status}},[a("el-radio",{attrs:{label:0}},[e._v("启用")]),a("el-radio",{attrs:{label:1}},[e._v("禁用")])],1)],1),a("el-form-item",{attrs:{label:"排列顺序"}},[a("el-input",{attrs:{value:e.formData.sort}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{value:e.formData.remark,type:"textarea",rows:"3"}})],1)],1)],1)},w=[],_={name:"ImagePhoneDialogDetail",mixins:[o["c"]]},I=_,y=(a("fc4e"),Object(d["a"])(I,D,w,!1,null,"05152e59",null));y.options.__file="ImagePhoneDialogDetail.vue";var x=y.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"修改手机首页图片",width:"600px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"formUpdate",attrs:{model:e.formData,rules:e.rules,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{prop:"name",label:"图片名称"}},[a("el-input",{attrs:{placeholder:"双11大优惠",clearable:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name","string"===typeof t?t.trim():t)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{prop:"url",label:"跳转地址"}},[a("el-input",{attrs:{placeholder:"http://www.baidu.com",clearable:""},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url","string"===typeof t?t.trim():t)},expression:"formData.url"}})],1),a("el-form-item",{attrs:{prop:"status",label:"启用状态"}},[a("el-radio-group",{model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}},[a("el-radio",{attrs:{label:0}},[e._v("启用")]),a("el-radio",{attrs:{label:1}},[e._v("禁用")])],1)],1),a("el-form-item",{attrs:{prop:"sort",label:"排序"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"整数"},model:{value:e.formData.sort,callback:function(t){e.$set(e.formData,"sort","string"===typeof t?t.trim():t)},expression:"formData.sort"}})],1),a("el-form-item",{attrs:{prop:"remark",label:"活动内容"}},[a("el-input",{attrs:{type:"textarea",rows:"3",clearable:"",placeholder:"图片用双11当前活动促销..."},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark","string"===typeof t?t.trim():t)},expression:"formData.remark"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.submitForm("formUpdate")}}},[e._v("确定")])],1)],1)},P=[],S=a("322c"),$={name:"ImagePhoneDialogUpdate",mixins:[o["d"]],data:function(){return{updateHttpAPI:"updateWebsiteImagePhoneItem",idParams:{},formData:{name:"",url:"",status:0,sort:0},rules:{name:S["a"].validateRequired("图片名称"),status:S["a"].validateSelect("启用状态"),sort:S["a"].validateInteger("排序"),coverUrl:S["a"].validateRequired("图片地址"),url:S["a"].validateRequired("跳转地址")}}},watch:{data:function(){this.idParams={coverConfigId:this.data.coverConfigId}}}},U=$,C=Object(d["a"])(U,k,P,!1,null,null,null);C.options.__file="ImagePhoneDialogUpdate.vue";var O=C.exports,V=a("aa68"),q={name:"ImagePhoneTable",components:{BasePreview:v["a"],DialogImagePreview:h["a"],ImagePhoneDialogDetail:x,ImagePhoneDialogUpdate:O,DialogDeleteConfirm:V["a"]},mixins:[o["o"],o["n"]],data:function(){return{activeItem:{name:""},imgUrl:"",deleteHttpAPI:"deleteWebsiteImagePhoneItem",deleteAttrName:"coverConfigId",deleteId:"coverConfigId",switchObj:{API:"updateWebsiteImagePhoneItem",attrId:"coverConfigId",attrValue:"status"}}},methods:{showPreviewImage:function(e){this.imgUrl=e,this.$refs.imagePreview.toggleDialogVisible(!0)}}},E=q,F=Object(d["a"])(E,g,b,!1,null,null,null);F.options.__file="ImagePhoneTable.vue";var R=F.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"创建新手机首页图片",width:"600px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"formCreate",attrs:{model:e.formData,rules:e.rules,"label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{prop:"name",label:"图片名称"}},[a("el-input",{attrs:{placeholder:"双11大优惠"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name","string"===typeof t?t.trim():t)},expression:"formData.name"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{prop:"coverUrl",label:"图片地址"}},[a("FormUploadImage",{on:{"on-uploaded":function(t){e.$set(e.formData,"coverUrl",t.response)},"on-removed":function(t){e.$set(e.formData,"coverUrl",t)}}})],1),a("el-form-item",{attrs:{prop:"url",label:"跳转地址"}},[a("el-input",{attrs:{placeholder:"http://www.baidu.com"},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url","string"===typeof t?t.trim():t)},expression:"formData.url"}})],1),a("el-form-item",{attrs:{prop:"status",label:"启用状态"}},[a("el-radio-group",{model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}},[a("el-radio",{attrs:{label:0}},[e._v("启用")]),a("el-radio",{attrs:{label:1}},[e._v("禁用")])],1)],1),a("el-form-item",{attrs:{prop:"sort",label:"排序"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"整数"},model:{value:e.formData.sort,callback:function(t){e.$set(e.formData,"sort","string"===typeof t?t.trim():t)},expression:"formData.sort"}})],1),a("el-form-item",{staticClass:"custom-block",attrs:{prop:"remark",label:"备注"}},[a("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"图片用双11当前活动促销..."},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark","string"===typeof t?t.trim():t)},expression:"formData.remark"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.submitForm("formCreate")}}},[e._v("确定")])],1)],1)},z=[],A=a("3885"),W={name:"ImagePhoneDialogCreate",components:{FormUploadImage:A["a"]},mixins:[o["b"]],data:function(){return{createHttpAPI:"updateWebsiteImagePhoneItem",formData:{status:0,sort:0},rules:{name:S["a"].validateRequired("图片名称"),status:S["a"].validateSelect("启用状态"),sort:S["a"].validateInteger("排序"),coverUrl:S["a"].validateRequired("图片地址"),url:S["a"].validateRequired("跳转地址")}}}},T=W,B=Object(d["a"])(T,j,z,!1,null,null,null);B.options.__file="ImagePhoneDialogCreate.vue";var L=B.exports,H={name:"WebsiteImagePhone",components:{ImagePhoneSearch:p,ImagePhoneTable:R,ImagePhoneDialogCreate:L},mixins:[o["i"],o["p"]],data:function(){return{tableHttpAPI:"fetchWebsiteImagePhoneList",requestParams:{pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}}},N=H,J=Object(d["a"])(N,l,i,!1,null,null,null);J.options.__file="index.vue";t["default"]=J.exports},d75d:function(e,t,a){},fc4e:function(e,t,a){"use strict";var l=a("d75d"),i=a.n(l);i.a}}]);
//# sourceMappingURL=chunk-34ca6c1e.7e04754a.js.map
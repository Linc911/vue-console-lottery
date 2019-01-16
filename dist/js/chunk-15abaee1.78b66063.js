(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15abaee1"],{"2c07":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("SearchLayout",[a("div",{attrs:{slot:"left"},slot:"left"},[a("LotteryRulesSearch",{on:{"on-search":e.handleSearch}})],1),a("div",{attrs:{slot:"right"},slot:"right"},[a("BaseAdd",{nativeOn:{click:function(t){e.$refs.dialogCreate.toggleDialogVisible(!0)}}})],1)]),a("div",[a("LotteryRulesTable",{attrs:{data:e.tableData},on:{"on-changed":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{httpURL:e.tableHttpAPI,requestParams:e.requestParams,page:e.page},on:{"on-change":e.handlePaginationChange}})],1),a("LotteryRulesDialogCreate",{ref:"dialogCreate",on:{"on-created":function(t){e.fetchTableData()}}})],1)},n=[],o=a("1b629"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("FormSelectGame",{ref:"gameType",attrs:{httpAPIName:"fetchGamesMenu",httpAPIParams:{params:{type:1}},labelAttr:"name",valueAttr:"id",prop:"gameType",label:"游戏类型",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"gameType",t)}}}),a("FormSelectStatic",{ref:"type",attrs:{options:[{value:0,label:"电脑页面"},{value:1,label:"手机页面"},{value:2,label:"手机APP"}],label:"应用场景",width:"100px"},on:{"on-change":function(t){e.$set(e.formData,"type",t)}}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)},r=[],s=a("4009"),c=a("30ce"),u={name:"UsersSettingSearch",components:{FormSelectGame:s["a"],FormSelectStatic:c["a"]},mixins:[o["h"]]},p=u,m=a("048f"),f=Object(m["a"])(p,i,r,!1,null,null,null);f.options.__file="LotteryRulesSearch.vue";var d=f.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.data,size:"small","max-height":590,"highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"gameName",label:"游戏类型"}}),a("el-table-column",{attrs:{prop:"type",label:"应用场景"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("scenario")(t.row.type)))])]}}])}),a("el-table-column",{attrs:{prop:"explain",label:"游戏说明","min-width":200},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BasePopoverTextarea",{attrs:{data:e.row.explain,maxlength:28,triggerType:"click"}})]}}])}),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.updateTime)))])]}}])}),a("el-table-column",{attrs:{prop:"operations",label:"操作","min-width":90},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogUpdate")}}}),a("el-button",{attrs:{type:"warning",icon:"el-icon-delete",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogDelete")}}})],1)]}}])})],1),a("LotteryRulesDialogUpdate",{ref:"dialogUpdate",attrs:{data:e.activeItem},on:{"on-updated":function(t){e.$emit("on-changed")}}}),a("DialogDeleteConfirm",{ref:"dialogDelete",attrs:{name:e.activeItem.gameName,title:"游戏类型"},on:{"on-confirm":e.handleDeleteConfirm}})],1)},b=[],v=a("99ca"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticStyle:{"min-width":"768px"},attrs:{visible:e.dialogVisible,title:"修改游戏规则",width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("LotteryRulesForm",{ref:"form",attrs:{data:e.data},on:{"on-validated":e.handleValidationSuccess}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.$refs.form.validateForm()}}},[e._v("确定")])],1)],1)},y=[],_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,"label-width":"80px",size:"small"}},[a("FormSelectGame",{ref:"gameType",attrs:{value:e.formData.gameType,httpAPIName:"fetchGamesMenu",httpAPIParams:{params:{type:1}},labelAttr:"name",valueAttr:"id",prop:"gameType",label:"游戏类型",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"gameType",t)}}}),a("el-form-item",{attrs:{prop:"type",label:"应用场景"}},[a("el-radio-group",{model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},[a("el-radio",{attrs:{label:0}},[e._v("电脑页面")]),a("el-radio",{attrs:{label:1}},[e._v("手机页面")]),a("el-radio",{attrs:{label:2}},[e._v("手机APP")])],1)],1),a("el-form-item",{attrs:{prop:"explain",label:"游戏说明"}},[a("quill-editor",{ref:"myQuillEditor",attrs:{options:e.editorOption},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)],1)},D=[],S=(a("3040"),a("cac2"),a("1e58"),a("322c")),x=a("b881"),L={name:"GroupSettingForm",components:{quillEditor:x["quillEditor"],FormSelectGame:s["a"]},mixins:[o["e"]],data:function(){return{content:"",editorOption:{placeholder:"游戏规则详情"},formData:{gameType:"",type:0,explain:""},rules:{gameType:S["a"].validateSelect("游戏类型"),type:S["a"].validateSelect("应用场景"),explain:S["a"].validateRequired("游戏说明")}}},watch:{data:function(){this.content=this.formData.explain}},mounted:function(){this.content=this.formData.explain},methods:{validateForm:function(){var e=this;this.$refs.form.validate(function(t){t?(e.formData.explain=e.content,e.$emit("on-validated",e.formData)):e.$message.warning(v["a"].VALIDATION_FAILED)})}}},A=L,O=Object(m["a"])(A,_,D,!1,null,null,null);O.options.__file="LotteryRulesForm.vue";var w=O.exports,P={name:"LotteryRulesDialogUpdate",components:{LotteryRulesForm:w},mixins:[o["d"]],data:function(){return{updateHttpAPI:"updateLotteryRulesItem"}}},$=P,k=Object(m["a"])($,g,y,!1,null,null,null);k.options.__file="LotteryRulesDialogUpdate.vue";var E=k.exports,I=a("1955"),R=a("aa68"),T={name:"LotteryRulesTable",components:{LotteryRulesDialogUpdate:E,BasePopoverTextarea:I["a"],DialogDeleteConfirm:R["a"]},mixins:[o["o"]],filters:{scenario:function(e){switch(e){case 0:return"电脑页面";case 1:return"手机页面";case 2:return"手机APP";default:return"其他"}}},data:function(){return{activeItem:{gameName:""}}},methods:{handleDeleteConfirm:function(){var e=this;this.$refs.dialogDelete.toggleDialogVisible(!1),this.$httpAPI.deleteLotteryRulesItem({params:{gameType:this.activeItem.gameType,type:this.activeItem.type}}).then(function(t){200===t.data.status?(e.$emit("on-changed"),e.$message.success(v["a"].DELETE_SUCCEEDED)):e.$message.error("".concat(v["a"].DELETE_FAILED,": ").concat(t.data.msg))}).catch(function(t){console.log(t),e.$message.warning(v["a"].DELETE_FAILED)})}}},F=T,C=(a("a0c0"),Object(m["a"])(F,h,b,!1,null,"37c8f49e",null));C.options.__file="LotteryRulesTable.vue";var q=C.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticStyle:{"min-width":"768px"},attrs:{visible:e.dialogVisible,title:"创建新游戏规则",width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("LotteryRulesForm",{ref:"form",on:{"on-validated":e.handleValidationSuccess}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-checkbox",{staticClass:"pull-left",model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v(e._s(e.saveString))]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.$refs.form.validateForm()}}},[e._v("确定")])],1)],1)},j=[],z={name:"LotteryRulesDialogCreate",components:{LotteryRulesForm:w},mixins:[o["b"]],data:function(){return{createHttpAPI:"updateLotteryRulesItem"}}},U=z,V=Object(m["a"])(U,N,j,!1,null,null,null);V.options.__file="LotteryRulesDialogCreate.vue";var G=V.exports,B={name:"LotteryRulesList",components:{LotteryRulesSearch:d,LotteryRulesTable:q,LotteryRulesDialogCreate:G},mixins:[o["i"],o["p"]],data:function(){return{tableHttpAPI:"fetchLotteryRulesList",requestParams:{pageNo:1,pageSize:10},page:{current:0,size:10,total:10}}}},H=B,J=Object(m["a"])(H,l,n,!1,null,null,null);J.options.__file="index.vue";t["default"]=J.exports},"30ce":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{style:e.styles,attrs:{placeholder:e.placeholder,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},n=[],o=(a("84fb"),{name:"FormSelectStatic",props:{value:{type:[String,Number],default:""},options:{type:Array,required:!0},placeholder:{type:String,default:"请选择"},styles:{type:Object,default:function(){return{}}}},data:function(){return{selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},methods:{reset:function(){this.selectedOption=""}}}),i=o,r=a("048f"),s=Object(r["a"])(i,l,n,!1,null,null,null);s.options.__file="FormSelectStatic.vue";t["a"]=s.exports},4009:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{class:{"custom-block":e.multiple},attrs:{prop:e.prop,label:e.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+e.label,multiple:e.multiple,filterable:e.filterable,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)},n=[],o=(a("25d7"),a("84fb"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var e=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(t){e.$_.forEach(t.data.data,function(t){e.$_.forEach(t.children,function(t){e.options.push({value:t[e.valueAttr],label:t[e.labelAttr]})})})}).catch(function(e){return console.log(e)})}}}),i=o,r=a("048f"),s=Object(r["a"])(i,l,n,!1,null,null,null);s.options.__file="FormSelectGame.vue";t["a"]=s.exports},"74af":function(e,t,a){},a0c0:function(e,t,a){"use strict";var l=a("74af"),n=a.n(l);n.a}}]);
//# sourceMappingURL=chunk-15abaee1.78b66063.js.map
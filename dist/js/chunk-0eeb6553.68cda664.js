(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0eeb6553"],{"16c3":function(e,t,a){},"2c07":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("SearchLayout",[a("div",{attrs:{slot:"left"},slot:"left"},[a("LotteryRulesSearch",{on:{"on-search":e.handleSearch}})],1),a("div",{attrs:{slot:"right"},slot:"right"},[a("BaseAdd",{nativeOn:{click:function(t){e.$refs.dialogCreate.toggleDialogVisible(!0)}}})],1)]),a("div",[a("LotteryRulesTable",{attrs:{data:e.tableData},on:{"on-changed":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{httpURL:e.tableHttpAPI,requestParams:e.requestParams,page:e.page},on:{"on-change":e.handlePaginationChange}})],1),a("LotteryRulesDialogCreate",{ref:"dialogCreate",on:{"on-created":function(t){e.fetchTableData()}}})],1)},n=[],o=a("1b629"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("FormSelectGame",{ref:"gameType",attrs:{httpAPIName:"fetchGamesMenu",httpAPIParams:{params:{type:1}},labelAttr:"name",valueAttr:"id",prop:"gameType",label:"游戏类型",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"gameType",t)}}}),a("FormSelectStatic",{ref:"type",attrs:{options:[{value:0,label:"电脑页面"},{value:1,label:"手机页面"},{value:2,label:"手机APP"}],label:"应用场景",width:"100px"},on:{"on-change":function(t){e.$set(e.formData,"type",t)}}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)},r=[],s=(a("3a0f"),a("a3a3"),a("4d0b"),a("4009")),c=a("30ce"),u={name:"UsersSettingSearch",components:{FormSelectGame:s["a"],FormSelectStatic:c["a"]},mixins:[o["f"]]},p=u,f=a("048f"),m=Object(f["a"])(p,i,r,!1,null,null,null);m.options.__file="LotteryRulesSearch.vue";var d=m.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.data,size:"small","max-height":590,"highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"gameName",label:"游戏类型"}}),a("el-table-column",{attrs:{prop:"type",label:"应用场景"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("scenario")(t.row.type)))])]}}])}),a("el-table-column",{attrs:{prop:"explain",label:"游戏说明","min-width":240}}),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.updateTime)))])]}}])}),a("el-table-column",{attrs:{prop:"operations",label:"操作","min-width":90},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogUpdate")}}}),a("el-button",{attrs:{type:"warning",icon:"el-icon-delete",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogDelete")}}})],1)]}}])})],1),a("LotteryRulesDialogUpdate",{ref:"dialogUpdate",attrs:{data:e.activeItem},on:{"on-updated":function(t){e.$emit("on-changed")}}}),a("DialogDeleteConfirm",{ref:"dialogDelete",attrs:{name:e.activeItem.gameName,title:"游戏类型"},on:{"on-confirm":e.handleDeleteConfirm}})],1)},g=[],b=a("99ca"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"修改游戏规则",width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("LotteryRulesForm",{ref:"form",attrs:{data:e.data},on:{"on-validated":e.handleValidationSuccess}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.$refs.form.validateForm()}}},[e._v("确定")])],1)],1)},y=[],_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{model:e.formData,rules:e.rules,"label-width":"80px",size:"small"}},[a("FormSelectGame",{ref:"gameType",attrs:{value:e.formData.gameType,httpAPIName:"fetchGamesMenu",httpAPIParams:{params:{type:1}},labelAttr:"name",valueAttr:"id",prop:"gameType",label:"游戏类型",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"gameType",t)}}}),a("el-form-item",{attrs:{prop:"type",label:"应用场景"}},[a("el-radio-group",{model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},[a("el-radio",{attrs:{label:0}},[e._v("电脑页面")]),a("el-radio",{attrs:{label:1}},[e._v("手机页面")]),a("el-radio",{attrs:{label:2}},[e._v("手机APP")])],1)],1),a("el-form-item",{attrs:{prop:"explain",label:"游戏说明"}},[a("el-input",{attrs:{type:"textarea",rows:"8",placeholder:"游戏说明"},model:{value:e.formData.explain,callback:function(t){e.$set(e.formData,"explain","string"===typeof t?t.trim():t)},expression:"formData.explain"}})],1)],1)},S=[],D=a("322c"),x={name:"GroupSettingForm",components:{FormSelectGame:s["a"]},mixins:[o["d"]],data:function(){return{formData:{gameType:"",type:0,explain:""},rules:{gameType:D["a"].validateSelect("游戏类型"),type:D["a"].validateSelect("应用场景"),explain:D["a"].validateRequired("游戏说明")}}}},L=x,w=Object(f["a"])(L,_,S,!1,null,null,null);w.options.__file="LotteryRulesForm.vue";var R=w.exports,$={name:"LotteryRulesDialogUpdate",components:{LotteryRulesForm:R},mixins:[o["c"]],data:function(){return{updateHttpAPI:"updateLotteryRulesItem"}}},A=$,P=Object(f["a"])(A,v,y,!1,null,null,null);P.options.__file="LotteryRulesDialogUpdate.vue";var k=P.exports,E=a("aa68"),O={name:"LotteryRulesTable",components:{LotteryRulesDialogUpdate:k,DialogDeleteConfirm:E["a"]},mixins:[o["m"]],filters:{scenario:function(e){switch(e){case 0:return"电脑页面";case 1:return"手机页面";case 2:return"手机APP";default:return"其他"}}},data:function(){return{activeItem:{gameName:""}}},methods:{handleDeleteConfirm:function(){var e=this;this.$refs.dialogDelete.toggleDialogVisible(!1),this.$httpAPI.deleteLotteryRulesItem({params:{gameType:this.activeItem.gameType,type:this.activeItem.type}}).then(function(t){200===t.data.status?(e.$emit("on-changed"),e.$message.success(b["a"].DELETE_SUCCEEDED)):e.$message.error("".concat(b["a"].DELETE_FAILED,": ").concat(t.data.msg))}).catch(function(t){console.log(t),e.$message.warning(b["a"].DELETE_FAILED)})}}},I=O,T=Object(f["a"])(I,h,g,!1,null,null,null);T.options.__file="LotteryRulesTable.vue";var F=T.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"创建新游戏规则",width:"500px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("LotteryRulesForm",{ref:"form",on:{"on-validated":e.handleValidationSuccess}}),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-checkbox",{staticClass:"pull-left",model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v(e._s(e.saveString))]),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.$refs.form.validateForm()}}},[e._v("确定")])],1)],1)},q=[],V={name:"LotteryRulesDialogCreate",components:{LotteryRulesForm:R},mixins:[o["a"]],data:function(){return{createHttpAPI:"updateLotteryRulesItem"}}},j=V,N=Object(f["a"])(j,C,q,!1,null,null,null);N.options.__file="LotteryRulesDialogCreate.vue";var z=N.exports,U={name:"LotteryRulesList",components:{LotteryRulesSearch:d,LotteryRulesTable:F,LotteryRulesDialogCreate:z},mixins:[o["g"],o["n"]],data:function(){return{tableHttpAPI:"fetchLotteryRulesList",requestParams:{pageNo:1,pageSize:10},page:{current:0,size:10,total:10}}}},G=U,B=Object(f["a"])(G,l,n,!1,null,null,null);B.options.__file="index.vue";t["default"]=B.exports},"30ce":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:e.prop,label:e.label}},[a("el-select",{style:{width:e.width},attrs:{placeholder:e.label,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)},n=[],o=(a("84fb"),{name:"FormSelectStatic",props:{value:{type:[String,Number],default:""},options:{type:Array,required:!0},label:{type:String,default:"状态"},prop:{type:String,default:""},width:{type:String,default:""}},data:function(){return{selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},methods:{reset:function(){this.selectedOption=""}}}),i=o,r=a("048f"),s=Object(r["a"])(i,l,n,!1,null,null,null);s.options.__file="FormSelectStatic.vue";t["a"]=s.exports},"322c":function(e,t,a){"use strict";a("5616");var l={validateRequired:function(e){return{required:!0,message:"".concat(e,"不能为空")}},validateSelect:function(e){return{required:!0,message:"".concat(e,"至少选择其中一个")}},validatePhone:function(e){return[{required:!0,message:"".concat(e,"不能为空")},{pattern:/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,message:"请输入有效的11位手机号码"}]},validateStringLength:function(e,t,a){return[{required:!0,message:"".concat(e,"不能为空")},{min:t,max:a,message:"".concat(e,"长度在 ").concat(t," - ").concat(a," 字符之间")}]},validateInteger:function(e,t){return arguments[1]?[{required:!0,message:"".concat(e,"不能为空")},{pattern:new RegExp("^[0-9]{1,".concat(t,"}$")),message:"".concat(e,"必须 0 - ").concat(n(t)," 为之间整数")}]:[{required:!0,message:"".concat(e,"不能为空")},{pattern:/^[0-9]+$/,message:"".concat(e,"必须为整数")}]}};function n(e){for(var t="",a=0;a<e;a++)t+="9";return t}t["a"]=l},4009:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{class:{"custom-block":e.multiple},attrs:{prop:e.prop,label:e.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+e.label,multiple:e.multiple,filterable:e.filterable,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)},n=[],o=(a("25d7"),a("84fb"),a("3a0f"),a("a3a3"),a("4d0b"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var e=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(t){e.$_.forEach(t.data.data,function(t){e.$_.forEach(t.children,function(t){e.options.push({value:t[e.valueAttr],label:t[e.labelAttr]})})})}).catch(function(e){return console.log(e)})}}}),i=o,r=a("048f"),s=Object(r["a"])(i,l,n,!1,null,null,null);s.options.__file="FormSelectGame.vue";t["a"]=s.exports},"54b5":function(e,t,a){"use strict";var l=a("16c3"),n=a.n(l);n.a},5616:function(e,t,a){var l=a("53da"),n=a("69d8"),o=a("9a0d").f,i=a("e853").f,r=a("c28a"),s=a("2fc4"),c=l.RegExp,u=c,p=c.prototype,f=/a/g,m=/a/g,d=new c(f)!==f;if(a("f711")&&(!d||a("cce3")(function(){return m[a("5761")("match")]=!1,c(f)!=f||c(m)==m||"/a/i"!=c(f,"i")}))){c=function(e,t){var a=this instanceof c,l=r(e),o=void 0===t;return!a&&l&&e.constructor===c&&o?e:n(d?new u(l&&!o?e.source:e,t):u((l=e instanceof c)?e.source:e,l&&o?s.call(e):t),a?this:p,c)};for(var h=function(e){e in c||o(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},g=i(u),b=0;g.length>b;)h(g[b++]);p.constructor=c,c.prototype=p,a("7e22")(l,"RegExp",c)}a("2943")("RegExp")},aa68:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"删除确认",width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("span",{staticClass:"highlight-text"},[e._v("删除")]),e._v("\n    "+e._s(e.title)+" 为\n    "),a("span",{staticClass:"highlight-text"},[e._v(e._s(e.name)+" ")]),e._v("数据?\n  ")]),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$emit("on-confirm")}}},[e._v("确认")]),a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")])],1)])},n=[],o={props:{title:{type:String,required:!0},name:{type:String,required:!0}},data:function(){return{dialogVisible:!1}},methods:{toggleDialogVisible:function(e){this.dialogVisible=e}}},i=o,r=(a("54b5"),a("048f")),s=Object(r["a"])(i,l,n,!1,null,"e7eae444",null);s.options.__file="DialogDeleteConfirm.vue";t["a"]=s.exports}}]);
//# sourceMappingURL=chunk-0eeb6553.68cda664.js.map
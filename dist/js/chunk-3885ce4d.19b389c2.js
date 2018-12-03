(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3885ce4d"],{"0b3d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:e.prop,label:e.label}},[a("el-radio-group",{on:{change:function(t){e.$emit("on-change",t)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(t){return a("el-radio",{key:t.value,attrs:{label:t.label}},[e._v(e._s(t.title))])}))],1)},r=[],n=(a("84fb"),{name:"FormRadio",props:{value:{type:[String,Number],default:""},options:{type:Array,required:!0},prop:{type:String,default:""},label:{type:String,default:""}},data:function(){return{selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},methods:{reset:function(){this.selectedOption=""}}}),l=n,o=a("048f"),s=Object(o["a"])(l,i,r,!1,null,null,null);s.options.__file="FormRadio.vue";t["a"]=s.exports},"16c3":function(e,t,a){},"3af3":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search-container"},[a("div",{staticClass:"search-left-part"},[e._t("left")],2),a("div",{staticClass:"search-right-part"},[e._t("right")],2)])},r=[],n={name:"SearchLayout"},l=n,o=(a("5442"),a("048f")),s=Object(o["a"])(l,i,r,!1,null,"2b75b3fe",null);s.options.__file="SearchLayout.vue";t["a"]=s.exports},"46e2":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",size:"small",type:"primary"}},[e._t("default",[e._v("添加")])],2)},r=[],n=a("048f"),l={},o=Object(n["a"])(l,i,r,!1,null,null,null);o.options.__file="BaseAdd.vue";t["a"]=o.exports},"4beb":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{class:{"custom-block":e.multiple},attrs:{prop:e.prop,label:e.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+e.label,multiple:e.multiple,filterable:e.filterable,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},[e.optionRoot?a("el-option",{attrs:{label:e.rootLabel,value:e.rootValue}}):e._e(),e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})],2)],1)},r=[],n=(a("25d7"),a("84fb"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},optionRoot:{type:Boolean,default:!1},rootLabel:{type:String,default:"root"},rootValue:{type:[String,Number],default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var e=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(t){e.$_.forEach(t.data.data,function(t){e.options.push({value:t[e.valueAttr],label:t[e.labelAttr]})})}).catch(function(e){return console.log(e)})}}}),l=n,o=a("048f"),s=Object(o["a"])(l,i,r,!1,null,null,null);s.options.__file="FormSelect.vue";t["a"]=s.exports},5442:function(e,t,a){"use strict";var i=a("ddb0"),r=a.n(i);r.a},"54b5":function(e,t,a){"use strict";var i=a("16c3"),r=a.n(i);r.a},"5b60":function(e,t,a){"use strict";var i=a("b1f9"),r=a.n(i);r.a},7460:function(e,t,a){},"9dbf":function(e,t,a){"use strict";var i=a("da68"),r=a.n(i);r.a},a221:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e.opposite?a("i",{class:e.status?"el-icon-error":"el-icon-success"}):a("i",{class:e.status?"el-icon-success":"el-icon-error"})])},r=[],n=(a("84fb"),{props:{status:{type:[Number,Boolean],required:!0},opposite:{type:Boolean,default:!1}}}),l=n,o=(a("ced7"),a("048f")),s=Object(o["a"])(l,i,r,!1,null,"8a8351ae",null);s.options.__file="BaseIndicator.vue";t["a"]=s.exports},a599:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{on:{"tab-click":e.handleTabClick},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},e._l(e.games,function(e){return a("el-tab-pane",{key:e.name,attrs:{label:e.name,name:String(e.id)}})})),a("SearchLayout",[a("div",{attrs:{slot:"left"},slot:"left"},[a("RebateSettingSearch",{on:{"on-search":e.handleSearch}})],1),a("div",{attrs:{slot:"right"},slot:"right"},[a("BaseAdd",{nativeOn:{click:function(t){e.$refs.dialogCreate.toggleDialogVisible(!0)}}})],1)]),a("div",[a("RebateSettingTable",{attrs:{data:e.tableData},on:{"on-updated":function(t){e.fetchTableData()},"on-deleted":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{page:e.page,requestParams:e.requestParams,httpURL:e.tableHttpAPI},on:{"on-change":e.handlePaginationChange}})],1),a("RebateSettingDialogCreate",{ref:"dialogCreate",on:{"on-created":e.handleCreatedNewItem}})],1)},r=[],n=(a("cf54"),a("3a0f"),a("a3a3"),a("4d0b"),a("1b629")),l=a("3af3"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"search"},[a("el-form",{attrs:{model:e.formData,size:"small",inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormInput",{ref:"name",attrs:{label:"返水名称",width:"174px"},on:{submit:function(e){e.preventDefault(),e.stopPropagation()},"on-change":function(t){e.$set(e.formData,"name",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)],1)},s=[],u=a("b34f"),c={name:"RemittanceShortcutSearch",components:{FormInput:u["a"]},mixins:[n["e"]]},m=c,p=a("048f"),f=Object(p["a"])(m,o,s,!1,null,null,null);f.options.__file="RebateSettingSearch.vue";var d=f.exports,b=a("46e2"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:40}}),a("el-table-column",{attrs:{prop:"name",label:"返水计划名称","min-width":120}}),a("el-table-column",{attrs:{prop:"upperLimit",label:"投注上限",width:80}}),a("el-table-column",{attrs:{prop:"lowerLimit",label:"投注下限",width:80}}),a("el-table-column",{attrs:{prop:"ratio",label:"返佣比例",width:80},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("percent")(t.row.ratio)))])]}}])}),a("el-table-column",{attrs:{prop:"sysGroupNames",label:"会员分组","min-width":120},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("separator")(t.row.sysGroupNames," ")))])]}}])}),a("el-table-column",{attrs:{prop:"startTime",label:"计划开始时间",width:140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.startTime)))])]}}])}),a("el-table-column",{attrs:{prop:"endTime",label:"计划结束时间",width:140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.endTime)))])]}}])}),a("el-table-column",{attrs:{prop:"status",label:"启用状态",width:70},scopedSlots:e._u([{key:"default",fn:function(t){return[a("BaseSwitch",{attrs:{propValue:!t.row.status,payload:{id:t.row.id}},on:{"on-change":e.handleSwitchChange}})]}}])}),a("el-table-column",{attrs:{prop:"operations",label:"操作","min-width":130},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-view",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogDetail")}}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogUpdate")}}}),a("el-button",{attrs:{type:"warning",icon:"el-icon-delete",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogDelete")}}})]}}])})],1),a("RebateSettingDialogUpdate",{ref:"dialogUpdate",attrs:{data:e.activeItem},on:{"on-updated":function(t){e.$emit("on-updated")}}}),a("DialogDeleteConfirm",{ref:"dialogDelete",attrs:{title:"返水计划名称",name:e.activeItem.name},on:{"on-confirm":e.handleDeleteConfirm}})],1)},g=[],v=(a("84fb"),a("a221")),_=a("1346"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{visible:e.dialogVisible,title:"修改返水计划设置",width:"760px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"formUpdate",staticClass:"clearfix",attrs:{model:e.formData,rules:e.rules,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{prop:"name",label:"返水计划名称"}},[a("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name","string"===typeof t?t.trim():t)},expression:"formData.name"}})],1),a("FormSelect",{ref:"gameConfigId",attrs:{value:e.formData.gameConfigId,httpAPIName:"fetchGameClasses",labelAttr:"name",valueAttr:"id",prop:"gameConfigId",label:"游戏类型"},on:{"on-change":function(t){e.$set(e.formData,"gameConfigId",t)}}}),a("el-form-item",{attrs:{prop:"upperLimit",label:"投注上限"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"投注上限"},model:{value:e.formData.upperLimit,callback:function(t){e.$set(e.formData,"upperLimit","string"===typeof t?t.trim():t)},expression:"formData.upperLimit"}})],1),a("el-form-item",{attrs:{prop:"lowerLimit",label:"投注下限"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"投注下限"},model:{value:e.formData.lowerLimit,callback:function(t){e.$set(e.formData,"lowerLimit","string"===typeof t?t.trim():t)},expression:"formData.lowerLimit"}})],1),a("el-form-item",{attrs:{prop:"ratio",label:"返佣比率%"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"返佣比率"},model:{value:e.formData.ratio,callback:function(t){e.$set(e.formData,"ratio","string"===typeof t?t.trim():t)},expression:"formData.ratio"}})],1),a("el-form-item",{attrs:{prop:"status",label:"是否启用"}},[a("el-radio-group",{model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}},[a("el-radio",{attrs:{label:0}},[e._v("启用")]),a("el-radio",{attrs:{label:1}},[e._v("禁用")])],1)],1),a("FormTimeSelect",{ref:"startTime",attrs:{time:e.formData.startTime,prop:"startTime",label:"计划开始时间",placeholder:"开始时间"},on:{"on-change":function(t){e.$set(e.formData,"startTime",t)}}}),a("FormTimeSelect",{ref:"endTime",attrs:{time:e.formData.endTime,prop:"endTime",label:"计划结束时间",placeholder:"结束时间"},on:{"on-change":function(t){e.$set(e.formData,"endTime",t)}}}),a("FormSelect",{ref:"rebateUserGroups",attrs:{value:e.formData.rebateUserGroups,httpAPIName:"fetchUserGroups",httpAPIParams:{params:{pageNo:1,pageSize:100}},labelAttr:"name",valueAttr:"groupId",prop:"rebateUserGroups",label:"会员分组",multiple:""},on:{"on-change":function(t){e.$set(e.formData,"rebateUserGroups",t)}}})],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.submitForm("formUpdate")}}},[e._v("确定")])],1)],1)],1)},S=[],y=a("4beb"),w=a("0b3d"),k=a("fee4"),C={name:"RebateSettingDialogCreate",components:{FormSelect:y["a"],FormRadio:w["a"],FormTimeSelect:k["a"]},mixins:[n["c"]],data:function(){return{updateHttpAPI:"createRebateSettingList",idParams:{},formData:{name:"",gameConfigId:"",upperLimit:"",lowerLimit:"",ratio:"",rebateUserGroups:[],status:0},rules:{name:{required:!0,message:"返水名称不能为空"},gameConfigId:{required:!0,message:"游戏类型必须选择一个"},upperLimit:[{required:!0,message:"投注上限不能为空"},{pattern:/^[0-9]+$/,message:"投注上限必须为整数"}],lowerLimit:[{required:!0,message:"投注下限不能为空"},{pattern:/^[0-9]+$/,message:"投注下限必须为整数"}],ratio:{required:!0,message:"返佣比率不能为空"},status:{required:!0,message:"启用状态必须选择一个"},rebateUserGroups:{required:!0,message:"会员分组至少选择一个",trigger:"change"}}}},watch:{data:function(){this.idParams={id:this.data.id}}}},$=C,I=(a("5b60"),Object(p["a"])($,D,S,!1,null,"1b4d4090",null));I.options.__file="RebateSettingDialogUpdate.vue";var x=I.exports,T=a("aa68"),A={name:"RebateSettingTable",components:{BaseIndicator:v["a"],BaseSwitch:_["a"],RebateSettingDialogUpdate:x,DialogDeleteConfirm:T["a"]},mixins:[n["i"]],data:function(){return{deleteHttpAPI:"deleteRebateSettingItem",deleteAttrName:"rebateId"}},methods:{handleSwitchChange:function(e){var t=this;this.$httpAPI.updateRebateSettingStatus({params:{rebateId:e.id,status:Number(!e.value)}}).then(function(e){200===e.data.status?t.$message.success("修改启用状态成功！"):t.$message.error("修改启用状态失败！")}).catch(function(e){return console.log(e)})}}},O=A,L=Object(p["a"])(O,h,g,!1,null,null,null);L.options.__file="RebateSettingTable.vue";var P=L.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{visible:e.dialogVisible,title:"创建新返水计划设置",width:"760px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"formCreate",staticClass:"clearfix",attrs:{model:e.formData,rules:e.rules,"label-width":"120px",size:"small"}},[a("el-form-item",{attrs:{prop:"name",label:"返水计划名称"}},[a("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name","string"===typeof t?t.trim():t)},expression:"formData.name"}})],1),a("FormSelect",{ref:"gameConfigId",attrs:{value:e.formData.gameConfigId,httpAPIName:"fetchGameClasses",labelAttr:"name",valueAttr:"id",prop:"gameConfigId",label:"游戏类型"},on:{"on-change":function(t){e.$set(e.formData,"gameConfigId",t)}}}),a("el-form-item",{attrs:{prop:"upperLimit",label:"投注上限"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"投注上限"},model:{value:e.formData.upperLimit,callback:function(t){e.$set(e.formData,"upperLimit","string"===typeof t?t.trim():t)},expression:"formData.upperLimit"}})],1),a("el-form-item",{attrs:{prop:"lowerLimit",label:"投注下限"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"投注下限"},model:{value:e.formData.lowerLimit,callback:function(t){e.$set(e.formData,"lowerLimit","string"===typeof t?t.trim():t)},expression:"formData.lowerLimit"}})],1),a("el-form-item",{attrs:{prop:"ratio",label:"返佣比率%"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"返佣比率"},model:{value:e.formData.ratio,callback:function(t){e.$set(e.formData,"ratio","string"===typeof t?t.trim():t)},expression:"formData.ratio"}})],1),a("el-form-item",{attrs:{prop:"status",label:"启用状态"}},[a("el-radio-group",{model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}},[a("el-radio",{attrs:{label:0}},[e._v("启用")]),a("el-radio",{attrs:{label:1}},[e._v("禁用")])],1)],1),a("FormTimeSelect",{ref:"startTime",attrs:{prop:"startTime",label:"计划开始时间",placeholder:"开始时间"},on:{"on-change":function(t){e.$set(e.formData,"startTime",t)}}}),a("FormTimeSelect",{ref:"endTime",attrs:{prop:"endTime",label:"计划结束时间",placeholder:"结束时间"},on:{"on-change":function(t){e.$set(e.formData,"endTime",t)}}}),a("FormSelect",{ref:"rebateUserGroups",attrs:{value:e.formData.rebateUserGroups,httpAPIName:"fetchUserGroups",httpAPIParams:{params:{pageNo:1,pageSize:100}},labelAttr:"name",valueAttr:"groupId",prop:"rebateUserGroups",label:"会员分组",multiple:""},on:{"on-change":function(t){e.$set(e.formData,"rebateUserGroups",t)}}})],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.submitForm("formCreate")}}},[e._v("确定")])],1)],1)],1)},F=[],q={name:"RebateSettingDialogCreate",components:{FormSelect:y["a"],FormRadio:w["a"],FormTimeSelect:k["a"]},mixins:[n["a"]],data:function(){return{createHttpAPI:"createRebateSettingList",formData:{rebateUserGroups:[],status:0},rules:{name:{required:!0,message:"返水名称不能为空"},gameConfigId:{required:!0,message:"游戏类型必须选择一个"},upperLimit:this.$utils.generateFormValidatorInteger("投注上限"),lowerLimit:this.$utils.generateFormValidatorInteger("投注下限"),ratio:{required:!0,message:"返佣比率不能为空"},status:{required:!0,message:"启用状态必须选择一个"},rebateUserGroups:{required:!0,message:"会员分组至少选择一个",trigger:"change"}}}}},U=q,N=(a("9dbf"),Object(p["a"])(U,R,F,!1,null,"73cba5d2",null));N.options.__file="RebateSettingDialogCreate.vue";var G=N.exports,V={name:"RebateSettingList",components:{SearchLayout:l["a"],RebateSettingSearch:d,BaseAdd:b["a"],RebateSettingTable:P,RebateSettingDialogCreate:G},mixins:[n["f"],n["j"]],data:function(){return{games:[],activeTab:"",tableData:[],tableHttpAPI:"fetchRebateSettingList",requestParams:{gameConfigId:0,pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}},created:function(){this.fetchGameClasses()},methods:{handleTabClick:function(e){this.activeTab=e.name,this.requestParams.gameConfigId=e.name,this.requestParams.pageNo=1,this.fetchTableData()},handleCreatedNewItem:function(e){this.activeTab=String(e.gameConfigId),this.requestParams.gameConfigId=this.activeTab,this.requestParams.pageNo=1,this.fetchTableData()},fetchGameClasses:function(){var e=this;this.$httpAPI.fetchGameClasses().then(function(t){e.games=t.data.data}).catch(function(e){return console.log(e)})}}},j=V,E=Object(p["a"])(j,i,r,!1,null,null,null);E.options.__file="index.vue";t["default"]=E.exports},aa68:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"删除确认",width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",[a("span",{staticClass:"highlight-text"},[e._v("删除")]),e._v("\n    "+e._s(e.title)+" 为\n    "),a("span",{staticClass:"highlight-text"},[e._v(e._s(e.name)+" ")]),e._v("数据?\n  ")]),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.$emit("on-confirm")}}},[e._v("确认")]),a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")])],1)])},r=[],n={props:{title:{type:String,required:!0},name:{type:String,required:!0}},data:function(){return{dialogVisible:!1}},methods:{toggleDialogVisible:function(e){this.dialogVisible=e}}},l=n,o=(a("54b5"),a("048f")),s=Object(o["a"])(l,i,r,!1,null,"e7eae444",null);s.options.__file="DialogDeleteConfirm.vue";t["a"]=s.exports},b1f9:function(e,t,a){},b34f:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:e.label,width:e.width}},[a("el-input",{attrs:{placeholder:e.label,clearable:""},on:{input:function(t){e.$emit("on-change",t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},r=[],n={name:"FormInput",props:{label:{type:String,default:"请输入内容"},width:{type:String,default:""}},data:function(){return{value:""}},methods:{reset:function(){this.value=""}}},l=n,o=a("048f"),s=Object(o["a"])(l,i,r,!1,null,null,null);s.options.__file="FormInput.vue";t["a"]=s.exports},ced7:function(e,t,a){"use strict";var i=a("7460"),r=a.n(i);r.a},da68:function(e,t,a){},ddb0:function(e,t,a){},fee4:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:e.prop,label:e.label}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{"picker-options":e.pickerOptions,"default-time":e.defaltTime,type:"datetime",placeholder:"选择日期时间",align:"right"},on:{change:function(t){e.$emit("on-change",Date.parse(t))}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},r=[],n=(a("84fb"),{name:"SearchUsername",props:{time:{props:Number,default:""},prop:{type:String,default:""},label:{type:String,default:"时间查询"},placeholder:{type:String,default:"选择日期时间"},defaltTime:{type:String,default:"00:00:00"}},data:function(){return{value:this.time,pickerOptions:{shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"一周前",onClick:function(e){var t=new Date;t.setTime(t.getTime()-6048e5),e.$emit("pick",t)}}]}}},watch:{time:function(){this.value=this.time}},methods:{reset:function(){this.value=""}}}),l=n,o=a("048f"),s=Object(o["a"])(l,i,r,!1,null,null,null);s.options.__file="FormTimeSelect.vue";t["a"]=s.exports}}]);
//# sourceMappingURL=chunk-3885ce4d.19b389c2.js.map
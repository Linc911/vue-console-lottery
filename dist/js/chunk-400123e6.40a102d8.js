(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-400123e6"],{"0a5a":function(e,t,a){},"18de":function(e,t,a){"use strict";var l=a("0a5a"),r=a.n(l);r.a},1955:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[null===e.data?[a("span")]:String(e.data).length<=e.maxLength?[a("span",[e._v(e._s(e.data))])]:[a("el-popover",{attrs:{width:"400",trigger:e.triggerType}},[a("div",{domProps:{innerHTML:e._s(e.data)}}),a("div",{attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(e.data.substr(0,e.maxLength))+"...")]),a("i",{staticClass:"el-icon-search"})])])]],2)},r=[],n=(a("84fb"),{name:"BasePopoverTextarea",props:{data:{type:[String,Number,Object],reqrired:!0},maxLength:{type:Number,default:30},triggerType:{type:String,default:"hover"}}}),o=n,i=(a("2794"),a("048f")),s=Object(i["a"])(o,l,r,!1,null,"59528fca",null);s.options.__file="BasePopoverTextarea.vue";t["a"]=s.exports},"19b2":function(e,t,a){},2794:function(e,t,a){"use strict";var l=a("19b2"),r=a.n(l);r.a},4009:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{class:{"custom-block":e.multiple},attrs:{prop:e.prop,label:e.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+e.label,multiple:e.multiple,filterable:e.filterable,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)},r=[],n=(a("25d7"),a("84fb"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var e=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(t){e.$_.forEach(t.data.data,function(t){e.$_.forEach(t.children,function(t){e.options.push({value:t[e.valueAttr],label:t[e.labelAttr]})})})}).catch(function(e){return console.log(e)})}}}),o=n,i=a("048f"),s=Object(i["a"])(o,l,r,!1,null,null,null);s.options.__file="FormSelectGame.vue";t["a"]=s.exports},"4beb":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{class:{"custom-block":e.multiple},attrs:{prop:e.prop,label:e.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+e.label,multiple:e.multiple,filterable:e.filterable,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},[e.optionRoot?a("el-option",{attrs:{label:e.rootLabel,value:e.rootValue}}):e._e(),e._l(e.options,function(e){return a("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})],2)],1)},r=[],n=(a("25d7"),a("84fb"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},optionRoot:{type:Boolean,default:!1},rootLabel:{type:String,default:"root"},rootValue:{type:[String,Number],default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var e=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(t){e.$_.forEach(t.data.data,function(t){e.options.push({value:t[e.valueAttr],label:t[e.labelAttr]})})}).catch(function(e){return console.log(e)})}}}),o=n,i=a("048f"),s=Object(i["a"])(o,l,r,!1,null,null,null);s.options.__file="FormSelect.vue";t["a"]=s.exports},6872:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{staticClass:"el-range-editor--small el-date-editor el-range-editor",attrs:{label:e.label}},[a("div",{staticClass:"el-input__inner"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.start,expression:"start"}],staticClass:"el-range-input",attrs:{placeholder:e.startPlaceholder,type:"number"},domProps:{value:e.start},on:{blur:e.handleBlur,input:function(t){t.target.composing||(e.start=t.target.value)}}}),a("span",{staticClass:"el-range-separator"},[e._v("至")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.end,expression:"end"}],staticClass:"el-range-input",attrs:{placeholder:e.endPlaceholder,type:"number"},domProps:{value:e.end},on:{blur:e.handleBlur,input:function(t){t.target.composing||(e.end=t.target.value)}}})])])},r=[],n={name:"FormNumberRange",props:{label:{type:String,default:"数字范围"},startPlaceholder:{type:String,default:"开始"},endPlaceholder:{type:String,default:"结束"}},data:function(){return{start:"",end:""}},methods:{handleBlur:function(){this.$emit("on-change",{start:this.start,end:this.end})},reset:function(){this.start="",this.end=""}}},o=n,i=(a("846e"),a("048f")),s=Object(i["a"])(o,l,r,!1,null,"9949181a",null);s.options.__file="FormNumberRange.vue";t["a"]=s.exports},7460:function(e,t,a){},"846e":function(e,t,a){"use strict";var l=a("eadad"),r=a.n(l);r.a},a221:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e.opposite?a("i",{class:e.status?"el-icon-error":"el-icon-success"}):a("i",{class:e.status?"el-icon-success":"el-icon-error"})])},r=[],n=(a("84fb"),{props:{status:{type:[Number,Boolean],required:!0},opposite:{type:Boolean,default:!1}}}),o=n,i=(a("ced7"),a("048f")),s=Object(i["a"])(o,l,r,!1,null,"8a8351ae",null);s.options.__file="BaseIndicator.vue";t["a"]=s.exports},ced7:function(e,t,a){"use strict";var l=a("7460"),r=a.n(l);r.a},d8ee:function(e,t,a){},e835:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"users-list"},[a("UsersListSearch",{on:{"on-search":e.handleSearch}}),a("div",[a("UsersListTable",{attrs:{data:e.tableData},on:{"on-changed":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1)],1)},r=[],n=(a("25d7"),a("1b629")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("el-form-item",{attrs:{label:"会员账户"}},[a("FormInput",{ref:"username",style:{width:"150px"},attrs:{placehoder:"会员账户"},on:{"on-change":function(t){e.$set(e.formData,"username",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}})],1),a("FormDateRange",{ref:"dateRange",attrs:{label:"注册时间"},on:{"on-change":e.handleDateRangeChange}}),a("FormSelect",{ref:"groupId",attrs:{httpAPIName:"fetchUserGroups",httpAPIParams:{params:{pageNo:1,pageSize:100}},labelAttr:"name",valueAttr:"groupId",label:"会员分组",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"groupId",t)}}}),a("FormNumberRange",{ref:"numberRange",attrs:{label:"会员余额",startPlaceholder:"最小金额",endPlaceholder:"最大金额"},on:{"on-change":e.handleNumberRangeChange}}),a("FormNumberRange",{ref:"winRange",attrs:{label:"输赢金额",startPlaceholder:"最小金额",endPlaceholder:"最大金额"},on:{"on-change":e.handleWinRangeChange}}),a("el-form-item",{attrs:{label:"监控状态"}},[a("FormSelectStatic",{ref:"control",attrs:{options:[{value:0,label:"禁用"},{value:1,label:"启用"}],styles:{width:"90px"}},on:{"on-change":function(t){e.$set(e.formData,"control",t)}}})],1),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)},i=[],s=(a("20a2"),a("b34f")),u=a("4beb"),c=a("8968"),p=a("6872"),d=a("30ce"),m={name:"UsersListSearch",components:{FormInput:s["a"],FormSelect:u["a"],FormDateRange:c["a"],FormNumberRange:p["a"],FormSelectStatic:d["a"]},mixins:[n["h"]],methods:{handleDateRangeChange:function(e){var t=e.startTime,a=e.endTime;this.formData=Object.assign(this.formData,{startTime:t,endTime:a})},handleNumberRangeChange:function(e){var t=e.start,a=e.end;this.formData.minBanlance=t,this.formData.maxBanlance=a},handleWinRangeChange:function(e){var t=e.start,a=e.end;this.formData.minWin=t,this.formData.maxWin=a}}},f=m,h=a("048f"),b=Object(h["a"])(f,o,i,!1,null,null,null);b.options.__file="UsersListSearch.vue";var g=b.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"username",label:"会员账号","min-width":100}}),a("el-table-column",{attrs:{label:"分组",width:120},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("span",[e._v(e._s(t.row.groupNames))]),a("BaseIcon",{staticClass:"pull-right",attrs:{icon:"el-icon-edit"},on:{"on-click":function(a){e.showDialog(t.row,"dialogGroup")}}})],1)]}}])}),a("el-table-column",{attrs:{prop:"relation",label:"邀请码"}}),a("el-table-column",{attrs:{label:"会员余额","min-width":100},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.banlance)))])]}}])}),a("el-table-column",{attrs:{prop:"win",label:"输赢","min-width":100},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.win)))])]}}])}),a("el-table-column",{attrs:{prop:"agent",label:"代理状态",width:45},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BaseIndicator",{attrs:{status:e.row.agent}})]}}])}),a("el-table-column",{attrs:{prop:"recharge",label:"充值状态",width:45},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BaseIndicator",{attrs:{status:e.row.recharge}})]}}])}),a("el-table-column",{attrs:{prop:"control",label:"监控状态",width:70},scopedSlots:e._u([{key:"default",fn:function(t){return[a("BaseSwitch",{attrs:{propValue:Boolean(t.row.control),payload:{id:t.row.id}},on:{"on-change":e.handleSwitchChange}})]}}])}),a("el-table-column",{attrs:{prop:"enable",label:"账号状态",width:45},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.enabled?"正常":"异常"))])]}}])}),a("el-table-column",{attrs:{label:"操作","min-width":200},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-view",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogDetail")}}}),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogBets")}}},[e._v("注单详情")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogLogs")}}},[e._v("日志详情")])]}}])})],1),a("DialogGroupSetting",{ref:"dialogGroup",attrs:{user:e.activeItem},on:{"on-group-changed":function(t){e.$emit("on-changed")}}}),a("UsersListDialogDetail",{ref:"dialogDetail",attrs:{data:e.activeItem}}),a("UsersListDialogBets",{ref:"dialogBets",attrs:{id:e.activeItem.id},on:{"on-group-changed":function(t){e.$emit("on-changed")}}}),a("UsersListDialogLogs",{ref:"dialogLogs",attrs:{id:e.activeItem.id},on:{"on-group-changed":function(t){e.$emit("on-changed")}}})],1)},_=[],y=a("2d6f"),w=a("a221"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"会员分组修改",width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"会员分组","label-width":"80px"}},[a("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"选择分组",size:"small"},model:{value:e.selectedGroupId,callback:function(t){e.selectedGroupId=t},expression:"selectedGroupId"}},e._l(e.options,function(e){return a("el-option",{key:e.groupId,attrs:{label:e.name,value:String(e.groupId)}})}))],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.confirmGroupChange}},[e._v("确认")])],1)],1)},D=[],I={name:"DialogGroupSetting",props:{user:{type:Object,required:!0}},data:function(){return{dialogVisible:!1,options:[],selectedGroupId:this.user.groupIds}},watch:{user:function(){this.selectedGroupId=this.user.groupIds}},created:function(){this.fetchUserGroups()},methods:{confirmGroupChange:function(){var e=this;this.dialogVisible=!1,this.$httpAPI.postUserGroupSetting({userId:this.user.id,groupId:this.selectedGroupId}).then(function(t){200===t.data.status?(e.$message.success("修改成功！"),e.$emit("on-group-changed")):e.$message.error("修改失败")}).catch(function(e){return console.log(e)})},toggleDialogVisible:function(e){this.dialogVisible=!0},fetchUserGroups:function(){var e=this;this.$httpAPI.fetchUserGroups({params:{pageNo:1,pageSize:100}}).then(function(t){e.options=t.data.data}).catch(function(e){return console.log(e)})}}},x=I,P=Object(h["a"])(x,S,D,!1,null,null,null);P.options.__file="DialogGroupSetting.vue";var k=P.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rebate-setting"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.showDialog}},[e._v("抽点详情")]),a("el-dialog",{attrs:{title:"会员抽点详情",visible:e.dialogVisible,width:"400px",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.rebateForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"真人视讯%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.zrss,callback:function(t){e.$set(e.rebateForm,"zrss",t)},expression:"rebateForm.zrss"}})],1),a("el-form-item",{attrs:{label:"电子游艺%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.dzyy,callback:function(t){e.$set(e.rebateForm,"dzyy",t)},expression:"rebateForm.dzyy"}})],1),a("el-form-item",{attrs:{label:"皇冠体育%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.hgty,callback:function(t){e.$set(e.rebateForm,"hgty",t)},expression:"rebateForm.hgty"}})],1),a("el-form-item",{attrs:{label:"彩票游戏%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.cpyx,callback:function(t){e.$set(e.rebateForm,"cpyx",t)},expression:"rebateForm.cpyx"}})],1),a("el-form-item",{attrs:{label:"港彩游戏%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.gcyx,callback:function(t){e.$set(e.rebateForm,"gcyx",t)},expression:"rebateForm.gcyx"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleRebateFormConfirm}},[e._v("确认")])],1)],1)],1)},B=[],O={name:"UserRebateSetting",props:{userId:{type:String,required:!0}},data:function(){return{dialogVisible:!1,rebateForm:{zrss:0,dzyy:0,hgty:0,cpyx:0,gcyx:0}}},methods:{showDialog:function(){var e=this;this.rebateForm.userId||this.$httpAPI.getUsersRebate({params:{userId:this.userId}}).then(function(t){e.rebateForm=t.data.data}).catch(function(e){return console.log(e)}),this.dialogVisible=!0},handleRebateFormConfirm:function(){var e=this;this.$httpAPI.updateUsersRebate(this.rebateForm).then(function(){e.dialogVisible=!1,e.$message.success("修改抽点比例成功！")}).catch(function(){return e.$message.error("修改抽点比例失败！")})}}},A=O,F=(a("f47e"),Object(h["a"])(A,$,B,!1,null,"6853954c",null));F.options.__file="UserRebateSetting.vue";var L=F.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"会员信息详情",width:"760px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{staticClass:"clearfix",attrs:{model:e.formData,"label-width":"100px",size:"small",disabled:""}},[a("el-form-item",{attrs:{prop:"id",label:"账号ID"}},[a("el-input",{attrs:{value:e.formData.id}})],1),a("el-form-item",{attrs:{prop:"username",label:"会员账号"}},[a("el-input",{attrs:{value:e.formData.username}})],1),a("el-form-item",{attrs:{prop:"nickname",label:"会员昵称"}},[a("el-input",{attrs:{value:e.formData.nickname}})],1),a("el-form-item",{attrs:{prop:"groupNames",label:"会员分组"}},[a("el-input",{attrs:{value:e.formData.groupNames}})],1),a("el-form-item",{attrs:{prop:"relation",label:"邀请码"}},[a("el-input",{attrs:{value:e.formData.relation}})],1),a("el-form-item",{attrs:{prop:"banlance",label:"会员余额"}},[a("el-input",{attrs:{value:e._f("RMB")(e.formData.banlance)}})],1),a("el-form-item",{attrs:{prop:"win",label:"输赢"}},[a("el-input",{attrs:{value:e._f("RMB")(e.formData.win)}})],1),a("el-form-item",{attrs:{prop:"agent",label:"是否代理"}},[a("el-input",{attrs:{value:e.formData.agent?"代理":"未代理"}})],1),a("el-form-item",{attrs:{prop:"rechange",label:"充值状态"}},[a("el-input",{attrs:{value:e.formData.rechange?"充值":"未充值"}})],1),a("el-form-item",{attrs:{prop:"control",label:"监控状态"}},[a("el-input",{attrs:{value:e.formData.control?"监控":"未监控"}})],1),a("el-form-item",{attrs:{prop:"enabled",label:"账号状态"}},[a("el-input",{attrs:{value:e.formData.enabled?"正常":"异常"}})],1),a("el-form-item",{attrs:{prop:"createTime",label:"创建时间"}},[a("el-input",{attrs:{value:e._f("time")(e.formData.createTime)}})],1)],1)],1)},U=[],z={name:"UsersListDialogDetail",mixins:[n["c"]]},N=z,C=(a("18de"),Object(h["a"])(N,R,U,!1,null,"5562c74e",null));C.options.__file="UsersListDialogDetail.vue";var T=C.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticStyle:{"min-width":"760px"},attrs:{visible:e.dialogVisible,title:"会员投注记录列表",width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("FormInput",{ref:"drawno",attrs:{label:"彩票期号",width:"174px"},on:{"on-change":function(t){e.$set(e.formData,"drawno",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}}),a("FormSelectGame",{ref:"gameType",attrs:{httpAPIName:"fetchGamesMenu",httpAPIParams:{params:{type:1}},labelAttr:"name",valueAttr:"id",prop:"gameType",label:"游戏类型",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"gameType",t)}}}),a("FormSelectStatic",{ref:"status",attrs:{options:[{value:0,label:"未结算"},{value:1,label:"中奖"},{value:2,label:"未中奖"}],label:"处理状态",width:"100px"},on:{"on-change":function(t){e.$set(e.formData,"status",t)}}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1),a("div",[a("el-table",{attrs:{data:e.tableData,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"username",label:"账户名称",width:100}}),a("el-table-column",{attrs:{prop:"currentDrawno",label:"投注期号","min-width":90}}),a("el-table-column",{attrs:{prop:"gameName",label:"彩票类型","min-width":120}}),a("el-table-column",{attrs:{prop:"id",label:"注单ID","min-width":150}}),a("el-table-column",{attrs:{prop:"totalBets",label:"投注数",width:90},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.totalBets))]),a("BaseIcon",{staticClass:"pull-right",on:{"on-click":function(a){e.showDialog(t.row,"dialogDetail")}}})]}}])}),a("el-table-column",{attrs:{prop:"totalAmount",label:"投注金额","min-width":80},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.totalAmount)))])]}}])}),a("el-table-column",{attrs:{prop:"totalAwardAmount",label:"中奖金额","min-width":80},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.totalAwardAmount)))])]}}])}),a("el-table-column",{attrs:{prop:"status",label:"注单状态","min-width":70},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("lotteryOrderStatus")(t.row.status)))])]}}])}),a("el-table-column",{attrs:{prop:"createDate",label:"投注时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createDate)))])]}}])})],1),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1),a("DialogBetsDetail",{ref:"dialogDetail",attrs:{id:e.activeItem.id}})],1)},V=[],q=a("4009"),j=a("1955"),E=a("adfb"),M={name:"UsersListDialogLogs",components:{FormInput:s["a"],FormSelectGame:q["a"],FormSelectStatic:d["a"],BasePopoverTextarea:j["a"],BaseIcon:y["a"],DialogBetsDetail:E["a"]},mixins:[n["g"]],data:function(){return{activeItem:{id:""},tableHttpAPI:"fetchLotterBetsList",requestParams:{userId:this.id,pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}},watch:{id:function(){!this.dialogVisible&&this.tableData.length||(this.page.current=1,this.reset(),this.$set(this.requestParams,"userId",this.id),this.fetchTableData({userId:this.id}))}}},H=M,W=Object(h["a"])(H,G,V,!1,null,null,null);W.options.__file="UsersListDialogBets.vue";var J=W.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticStyle:{"min-width":"760px"},attrs:{visible:e.dialogVisible,title:"会员日志列表",width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)]),a("div",[a("el-table",{attrs:{data:e.tableData,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"module",label:"请求模块","min-width":120}}),a("el-table-column",{attrs:{prop:"params",label:"请求参数","min-width":200},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BasePopoverTextarea",{attrs:{data:e.row.params,maxLength:50}})]}}])}),a("el-table-column",{attrs:{prop:"ip",label:"ip地址"}}),a("el-table-column",{attrs:{prop:"area",label:"所属区域"}}),a("el-table-column",{attrs:{prop:"createTime",label:"请求时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":150},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BasePopoverTextarea",{attrs:{data:e.row.remark,maxLength:15}})]}}])})],1),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1)],1)},Q=[],X={name:"UsersListDialogLogs",components:{BasePopoverTextarea:j["a"]},mixins:[n["g"]],data:function(){return{tableHttpAPI:"fetchUsersLogsList",requestParams:{userId:this.id,pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}},watch:{id:function(){!this.dialogVisible&&this.tableData.length||(this.page.current=1,this.reset(),this.$set(this.requestParams,"userId",this.id),this.fetchTableData({userId:this.id}))}}},Y=X,Z=Object(h["a"])(Y,K,Q,!1,null,null,null);Z.options.__file="UsersListDialogLogs.vue";var ee=Z.exports,te={name:"UsersListTable",components:{BaseIcon:y["a"],BaseIndicator:w["a"],DialogGroupSetting:k,UserRebateSetting:L,UsersListDialogDetail:T,UsersListDialogBets:J,UsersListDialogLogs:ee},mixins:[n["o"],n["n"]],data:function(){return{activeItem:{id:""},switchObj:{API:"updateUserListStatus",attrId:"userId",attrValue:"control"}}}},ae=te,le=Object(h["a"])(ae,v,_,!1,null,null,null);le.options.__file="UsersListTable.vue";var re=le.exports,ne={name:"UsersList",components:{UsersListSearch:g,UsersListTable:re},mixins:[n["p"],n["j"]],data:function(){return{tableHttpAPI:"fetchUsersList",requestParams:{pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}},methods:{syncGroupData:function(e){this.$_.forEach(this.tableData,function(t){String(t.id)===e.userId&&(t.groupIds=e.value,t.groupNames=e.label)})}}},oe=ne,ie=Object(h["a"])(oe,l,r,!1,null,null,null);ie.options.__file="index.vue";t["default"]=ie.exports},eadad:function(e,t,a){},f47e:function(e,t,a){"use strict";var l=a("d8ee"),r=a.n(l);r.a}}]);
//# sourceMappingURL=chunk-400123e6.40a102d8.js.map
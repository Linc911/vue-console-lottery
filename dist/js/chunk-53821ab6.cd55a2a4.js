(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53821ab6"],{"07b2":function(e,t,a){var n=a("4cee"),r=a("3a50"),l=a("5761")("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&(t=t[l],null===t&&(t=void 0))),void 0===t?Array:t}},"0c93":function(e,t,a){var n=a("fffe"),r=a("6a37"),l=a("03a4"),o=a("5896"),i=a("50a7");e.exports=function(e,t){var a=1==e,s=2==e,u=3==e,c=4==e,p=6==e,d=5==e||p,f=t||i;return function(t,i,m){for(var h,b,g=l(t),v=r(g),y=n(i,m,3),_=o(v.length),S=0,w=a?f(t,_):s?f(t,0):void 0;_>S;S++)if((d||S in v)&&(h=v[S],b=y(h,S,g),e))if(a)w[S]=b;else if(b)switch(e){case 3:return!0;case 5:return h;case 6:return S;case 2:w.push(h)}else if(c)return!1;return p?-1:u||c?c:w}}},"30ce":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:e.prop,label:e.label}},[a("el-select",{style:{width:e.width},attrs:{placeholder:e.label,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)},r=[],l=(a("84fb"),{name:"FormSelectStatic",props:{value:{type:[String,Number],default:""},options:{type:Array,required:!0},label:{type:String,default:"状态"},prop:{type:String,default:""},width:{type:String,default:""}},data:function(){return{selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},methods:{reset:function(){this.selectedOption=""}}}),o=l,i=a("048f"),s=Object(i["a"])(o,n,r,!1,null,null,null);s.options.__file="FormSelectStatic.vue";t["a"]=s.exports},3157:function(e,t,a){},"3a50":function(e,t,a){var n=a("af55");e.exports=Array.isArray||function(e){return"Array"==n(e)}},"4beb":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{class:{"custom-block":e.multiple},attrs:{prop:e.prop,label:e.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+e.label,multiple:e.multiple,filterable:e.filterable,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},[e.optionRoot?a("el-option",{attrs:{label:e.rootLabel,value:e.rootValue}}):e._e(),e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})],2)],1)},r=[],l=(a("25d7"),a("84fb"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},optionRoot:{type:Boolean,default:!1},rootLabel:{type:String,default:"root"},rootValue:{type:[String,Number],default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var e=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(t){e.$_.forEach(t.data.data,function(t){e.options.push({value:t[e.valueAttr],label:t[e.labelAttr]})})}).catch(function(e){return console.log(e)})}}}),o=l,i=a("048f"),s=Object(i["a"])(o,n,r,!1,null,null,null);s.options.__file="FormSelect.vue";t["a"]=s.exports},"50a7":function(e,t,a){var n=a("07b2");e.exports=function(e,t){return new(n(e))(t)}},"73ba":function(e,t,a){"use strict";var n=a("fa40"),r=a.n(n);r.a},7460:function(e,t,a){},8968:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:e.prop,label:e.label}},[a("el-date-picker",{attrs:{type:"daterange","picker-options":e.pickerOptions,"default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small",align:"right"},on:{change:e.handleDatePickerChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},r=[],l=(a("3a0f"),a("a3a3"),a("4d0b"),{name:"SearchUsername",props:{prop:{type:String,default:""},label:{type:String,default:"时间查询"}},data:function(){return{value:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},methods:{handleDatePickerChange:function(e){var t;t=e?{startTime:Date.parse(e[0]),endTime:Date.parse(e[1])}:{startTime:"",endTime:""},this.$emit("on-change",t)},reset:function(){this.value=""}}}),o=l,i=(a("73ba"),a("048f")),s=Object(i["a"])(o,n,r,!1,null,"24034934",null);s.options.__file="FormDateRange.vue";t["a"]=s.exports},a221:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e.opposite?a("i",{class:e.status?"el-icon-error":"el-icon-success"}):a("i",{class:e.status?"el-icon-success":"el-icon-error"})])},r=[],l=(a("84fb"),{props:{status:{type:[Number,Boolean],required:!0},opposite:{type:Boolean,default:!1}}}),o=l,i=(a("ced7"),a("048f")),s=Object(i["a"])(o,n,r,!1,null,"8a8351ae",null);s.options.__file="BaseIndicator.vue";t["a"]=s.exports},b15c:function(e,t,a){"use strict";var n=a("d176"),r=a.n(n);r.a},b335:function(e,t,a){"use strict";var n=a("d6dd"),r=a.n(n);r.a},b34f:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:e.label,width:e.width}},[a("el-input",{attrs:{placeholder:e.label,clearable:""},on:{input:function(t){e.$emit("on-change",t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},r=[],l={name:"FormInput",props:{label:{type:String,default:"请输入内容"},width:{type:String,default:""}},data:function(){return{value:""}},methods:{reset:function(){this.value=""}}},o=l,i=a("048f"),s=Object(i["a"])(o,n,r,!1,null,null,null);s.options.__file="FormInput.vue";t["a"]=s.exports},c154:function(e,t,a){"use strict";var n=a("8718"),r=a("0c93")(5),l="find",o=!0;l in[]&&Array(1)[l](function(){o=!1}),n(n.P+n.F*o,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("ccb3")(l)},ced7:function(e,t,a){"use strict";var n=a("7460"),r=a.n(n);r.a},d176:function(e,t,a){},d6dd:function(e,t,a){},d8ee:function(e,t,a){},e835:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"users-list"},[a("UsersListSearch",{on:{"on-search":e.handleSearch}}),a("div",[a("UsersListTable",{attrs:{data:e.tableData},on:{"on-status-change":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{page:e.page,requestParams:e.requestParams,httpURL:"fetchUsersList"},on:{"on-change":e.handlePaginationChange}})],1)],1)},r=[],l=(a("25d7"),a("3a0f"),a("a3a3"),a("4d0b"),a("1b629")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("FormInput",{ref:"username",attrs:{label:"会员账户",width:"174px"},on:{"on-change":function(t){e.$set(e.formData,"username",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}}),a("FormDateRange",{ref:"dateRange",attrs:{label:"注册时间"},on:{"on-change":e.handleDateRangeChange}}),a("FormSelect",{ref:"groupId",attrs:{httpAPIName:"fetchUserGroups",httpAPIParams:{params:{pageNo:1,pageSize:100}},labelAttr:"name",valueAttr:"groupId",label:"会员分组",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"groupId",t)}}}),a("FormNumberRange",{ref:"numberRange",attrs:{label:"会员余额",startPlaceholder:"最小金额",endPlaceholder:"最大金额"},on:{"on-change":e.handleNumberRangeChange}}),a("FormNumberRange",{ref:"winRange",attrs:{label:"输赢金额",startPlaceholder:"最小金额",endPlaceholder:"最大金额"},on:{"on-change":e.handleWinRangeChange}}),a("FormSelectStatic",{ref:"control",attrs:{options:[{value:0,label:"禁用"},{value:1,label:"启用"}],label:"监控状态",width:"100px"},on:{"on-change":function(t){e.$set(e.formData,"control",t)}}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)],1)},i=[],s=(a("20a2"),a("b34f")),u=a("4beb"),c=a("8968"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{staticClass:"el-range-editor--small el-date-editor el-range-editor",attrs:{label:e.label}},[a("div",{staticClass:"el-input__inner"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.start,expression:"start"}],staticClass:"el-range-input",attrs:{placeholder:e.startPlaceholder,type:"number"},domProps:{value:e.start},on:{blur:e.handleBlur,input:function(t){t.target.composing||(e.start=t.target.value)}}}),a("span",{staticClass:"el-range-separator"},[e._v("至")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.end,expression:"end"}],staticClass:"el-range-input",attrs:{placeholder:e.endPlaceholder,type:"number"},domProps:{value:e.end},on:{blur:e.handleBlur,input:function(t){t.target.composing||(e.end=t.target.value)}}})])])},d=[],f={name:"SearchNumberRange",props:{label:{type:String,required:!0},startPlaceholder:{type:String,default:"开始"},endPlaceholder:{type:String,default:"结束"}},data:function(){return{start:"",end:""}},methods:{handleBlur:function(){this.$emit("on-change",{start:this.start,end:this.end})},reset:function(){this.start="",this.end=""}}},m=f,h=(a("b335"),a("048f")),b=Object(h["a"])(m,p,d,!1,null,"95e22706",null);b.options.__file="FormNumberRange.vue";var g=b.exports,v=a("30ce"),y={name:"UsersListSearch",components:{FormInput:s["a"],FormSelect:u["a"],FormDateRange:c["a"],FormNumberRange:g,FormSelectStatic:v["a"]},mixins:[l["e"]],methods:{handleDateRangeChange:function(e){var t=e.startTime,a=e.endTime;this.formData=Object.assign(this.formData,{startTime:t,endTime:a})},handleNumberRangeChange:function(e){var t=e.start,a=e.end;this.formData.minBanlance=t,this.formData.maxBanlance=a},handleWinRangeChange:function(e){var t=e.start,a=e.end;this.formData.minWin=t,this.formData.maxWin=a}}},_=y,S=Object(h["a"])(_,o,i,!1,null,null,null);S.options.__file="UsersListSearch.vue";var w=S.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-container"},[a("el-table",{attrs:{data:e.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"createTime",label:"注册时间",width:140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"username",label:"会员账号","min-width":100}}),a("el-table-column",{attrs:{label:"分组",width:120},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.groupNames))]),a("BaseSetting",{staticClass:"pull-right",nativeOn:{click:function(a){e.showGroupSetting(t.row.id,t.row.groupIds)}}})]}}])}),a("el-table-column",{attrs:{prop:"",label:"邀请码"}}),a("el-table-column",{attrs:{prop:"agent",label:"代理状态",width:45},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BaseIndicator",{attrs:{status:e.row.agent}})]}}])}),a("el-table-column",{attrs:{prop:"recharge",label:"充值状态",width:45},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BaseIndicator",{attrs:{status:e.row.recharge}})]}}])}),a("el-table-column",{attrs:{prop:"enable",label:"账号状态",width:45},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.enabled?"正常":"异常"))])]}}])}),a("el-table-column",{attrs:{prop:"control",label:"监控状态",width:70},scopedSlots:e._u([{key:"default",fn:function(t){return[a("BaseSwitch",{attrs:{propValue:Boolean(t.row.control),payload:{id:t.row.id}},on:{"on-change":e.handleSwitchChange}})]}}])}),a("el-table-column",{attrs:{label:"会员余额","min-width":100},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.banlance)))])]}}])}),a("el-table-column",{attrs:{prop:"win",label:"输赢","min-width":100},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.win)))])]}}])}),a("el-table-column",{attrs:{label:"操作",width:250},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.$router.push("/users/"+t.row.id+"/bets?user="+t.row.username)}}},[e._v("注单详情")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.$router.push("/users/"+t.row.id+"/httpLogs")}}},[e._v("日志详情")]),a("UserRebateSetting",{attrs:{userId:String(t.row.id)}})]}}])})],1),a("DialogGroupSetting",{ref:"groupSetting",attrs:{user:e.activeItem},on:{"on-success":e.handleGroupChangeSuccess}})],1)},x=[],I=(a("c154"),a("84fb"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("i",{staticClass:"el-icon-edit-outline",on:{click:function(t){e.$emit("on-click")}}})}),$=[],F=(a("eedd"),{}),O=Object(h["a"])(F,I,$,!1,null,"d5cd7262",null);O.options.__file="BaseSetting.vue";var D=O.exports,P=a("a221"),C=a("1346"),R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"会员分组修改",width:"320px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"会员分组","label-width":"80px"}},[a("el-select",{attrs:{placeholder:"选择分组",size:"small"},model:{value:e.selectedGroupId,callback:function(t){e.selectedGroupId=t},expression:"selectedGroupId"}},e._l(e.groupOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.confirmGroupChange}},[e._v("确认")])],1)],1)},A=[],z=(a("cf54"),{name:"DialogGroupSetting",props:{user:{type:Object,required:!0}},data:function(){return{dialogVisible:!1,groupOptions:[],selectedGroupId:this.user.groupId}},created:function(){this.fetchUserGroups()},methods:{toggleDialogVisible:function(e){this.dialogVisible=!0},confirmGroupChange:function(){var e=this,t={userId:this.user.userId,groupId:this.selectedGroupId},a=this.$_.find(this.groupOptions,function(t){return t.value===e.selectedGroupId});this.$httpAPI.postUserGroupSetting({params:t}).then(function(){e.$message.success("修改分组成功！"),e.$emit("on-success",Object.assign(t,{groupName:a.label}))}).catch(function(e){return console.log(e)}),this.dialogVisible=!1},fetchUserGroups:function(){var e=this;this.$httpAPI.fetchUserGroups({params:{pageNo:1,pageSize:100}}).then(function(t){e.$_.forEach(t.data.data,function(t){e.groupOptions.push({value:String(t.groupId),label:t.name})})}).catch(function(e){return console.log(e)})}}}),N=z,U=Object(h["a"])(N,R,A,!1,null,null,null);U.options.__file="DialogGroupSetting.vue";var B=U.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rebate-setting"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.showDialog}},[e._v("抽点详情")]),a("el-dialog",{attrs:{title:"会员抽点详情",visible:e.dialogVisible,width:"400px",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.rebateForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"真人视讯%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.zrss,callback:function(t){e.$set(e.rebateForm,"zrss",t)},expression:"rebateForm.zrss"}})],1),a("el-form-item",{attrs:{label:"电子游艺%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.dzyy,callback:function(t){e.$set(e.rebateForm,"dzyy",t)},expression:"rebateForm.dzyy"}})],1),a("el-form-item",{attrs:{label:"皇冠体育%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.hgty,callback:function(t){e.$set(e.rebateForm,"hgty",t)},expression:"rebateForm.hgty"}})],1),a("el-form-item",{attrs:{label:"彩票游戏%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.cpyx,callback:function(t){e.$set(e.rebateForm,"cpyx",t)},expression:"rebateForm.cpyx"}})],1),a("el-form-item",{attrs:{label:"港彩游戏%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.gcyx,callback:function(t){e.$set(e.rebateForm,"gcyx",t)},expression:"rebateForm.gcyx"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleRebateFormConfirm}},[e._v("确认")])],1)],1)],1)},T=[],j={name:"UserRebateSetting",props:{userId:{type:String,required:!0}},data:function(){return{dialogVisible:!1,rebateForm:{zrss:0,dzyy:0,hgty:0,cpyx:0,gcyx:0}}},methods:{showDialog:function(){var e=this;this.rebateForm.userId||this.$httpAPI.getUsersRebate({params:{userId:this.userId}}).then(function(t){e.rebateForm=t.data.data}).catch(function(e){return console.log(e)}),this.dialogVisible=!0},handleRebateFormConfirm:function(){var e=this;this.$httpAPI.updateUsersRebate(this.rebateForm).then(function(){e.dialogVisible=!1,e.$message.success("修改抽点比例成功！")}).catch(function(){return e.$message.error("修改抽点比例失败！")})}}},E=j,L=(a("f47e"),Object(h["a"])(E,G,T,!1,null,"6853954c",null));L.options.__file="UserRebateSetting.vue";var V=L.exports,q={name:"UsersListTable",components:{BaseSetting:D,BaseIndicator:P["a"],BaseSwitch:C["a"],DialogGroupSetting:B,UserRebateSetting:V},mixins:[l["i"]],methods:{handleSwitchChange:function(e){var t=this;this.$httpAPI.updateUserControlStatus({params:{userId:e.id,control:Number(e.value)}}).then(function(e){200===e.data.status?(t.$emit("on-status-change"),t.$message.success("修改状态成功！")):t.$message.error("修改状态失败！")}).catch(function(e){return console.log(e)})},showGroupSetting:function(e,t){this.activeItem={userId:e,groupId:t},this.$refs.groupSetting.toggleDialogVisible(!0)},handleGroupChangeSuccess:function(e){this.$_.find(this.data,function(t){t.id===e.userId&&(t.groupIds=e.gourpId,t.groupNames=e.groupName)})}}},W=q,J=Object(h["a"])(W,k,x,!1,null,null,null);J.options.__file="UsersListTable.vue";var M=J.exports,H={name:"UsersList",components:{UsersListSearch:w,UsersListTable:M},mixins:[l["j"],l["f"]],data:function(){return{tableData:[],tableHttpAPI:"fetchUsersList",requestParams:{pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}},methods:{syncGroupData:function(e){this.$_.forEach(this.tableData,function(t){String(t.id)===e.userId&&(t.groupIds=e.value,t.groupNames=e.label)})}}},K=H,Q=(a("b15c"),Object(h["a"])(K,n,r,!1,null,"0052427b",null));Q.options.__file="index.vue";t["default"]=Q.exports},eedd:function(e,t,a){"use strict";var n=a("3157"),r=a.n(n);r.a},f47e:function(e,t,a){"use strict";var n=a("d8ee"),r=a.n(n);r.a},fa40:function(e,t,a){}}]);
//# sourceMappingURL=chunk-53821ab6.cd55a2a4.js.map
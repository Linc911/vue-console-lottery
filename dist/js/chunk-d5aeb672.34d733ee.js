(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5aeb672"],{"012c":function(e,t,a){"use strict";var l=a("1dbd"),n=a.n(l);n.a},"093c":function(e,t,a){},"0c92":function(e,t,a){},"0ec5":function(e,t,a){"use strict";var l=a("c33a"),n=a.n(l);n.a},1955:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[null===e.data?[a("span")]:String(e.data).length<=e.maxLength?[a("span",[e._v(e._s(e.data))])]:[a("el-popover",{attrs:{width:"400",trigger:e.triggerType}},[a("div",{domProps:{innerHTML:e._s(e.data)}}),a("div",{attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(e.data.substr(0,e.maxLength))+"...")]),a("i",{staticClass:"el-icon-search"})])])]],2)},n=[],r=(a("84fb"),{name:"BasePopoverTextarea",props:{data:{type:[String,Number,Object],reqrired:!0},maxLength:{type:Number,default:30},triggerType:{type:String,default:"hover"}}}),i=r,o=(a("2794"),a("048f")),s=Object(o["a"])(i,l,n,!1,null,"59528fca",null);s.options.__file="BasePopoverTextarea.vue";t["a"]=s.exports},"19b2":function(e,t,a){},"1dbd":function(e,t,a){},2794:function(e,t,a){"use strict";var l=a("19b2"),n=a.n(l);n.a},"2d3b":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dice",class:e.diceClassName})},n=[],r=(a("84fb"),{props:{number:{type:[Number,String],default:99},size:{type:String,default:"small"}},computed:{diceClassName:function(){return"".concat(this.size," ").concat(this.size,"-").concat(this.number)}}}),i=r,o=(a("953c"),a("048f")),s=Object(o["a"])(i,l,n,!1,null,"8c2702dc",null);s.options.__file="BaseDice.vue";t["a"]=s.exports},"2d57":function(e,t,a){"use strict";var l=a("093c"),n=a.n(l);n.a},"2d6f":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("i",{class:e.icon,on:{click:function(t){e.$emit("on-click")}}})},n=[],r=(a("3a0f"),a("a3a3"),a("4d0b"),{name:"BaseIcon",props:{icon:{type:String,default:"el-icon-edit"}}}),i=r,o=(a("afdd"),a("048f")),s=Object(o["a"])(i,l,n,!1,null,"4d870bc2",null);s.options.__file="BaseIcon.vue";t["a"]=s.exports},"30ce":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{style:e.styles,attrs:{placeholder:e.placeholder,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))},n=[],r=(a("84fb"),{name:"FormSelectStatic",props:{value:{type:[String,Number],default:""},options:{type:Array,required:!0},placeholder:{type:String,default:"请选择"},styles:{type:Object,default:function(){return{}}}},data:function(){return{selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},methods:{reset:function(){this.selectedOption=""}}}),i=r,o=a("048f"),s=Object(o["a"])(i,l,n,!1,null,null,null);s.options.__file="FormSelectStatic.vue";t["a"]=s.exports},4009:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{class:{"custom-block":e.multiple},attrs:{prop:e.prop,label:e.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+e.label,multiple:e.multiple,filterable:e.filterable,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},e._l(e.options,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)},n=[],r=(a("25d7"),a("84fb"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var e=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(t){e.$_.forEach(t.data.data,function(t){e.$_.forEach(t.children,function(t){e.options.push({value:t[e.valueAttr],label:t[e.labelAttr]})})})}).catch(function(e){return console.log(e)})}}}),i=r,o=a("048f"),s=Object(o["a"])(i,l,n,!1,null,null,null);s.options.__file="FormSelectGame.vue";t["a"]=s.exports},"4beb":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{class:{"custom-block":e.multiple},attrs:{prop:e.prop,label:e.label}},[a("el-select",{staticClass:"custom-block",attrs:{placeholder:"选择"+e.label,multiple:e.multiple,filterable:e.filterable,clearable:""},on:{change:function(t){e.$emit("on-change",e.selectedOption)}},model:{value:e.selectedOption,callback:function(t){e.selectedOption=t},expression:"selectedOption"}},[e.optionRoot?a("el-option",{attrs:{label:e.rootLabel,value:e.rootValue}}):e._e(),e._l(e.options,function(e){return a("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})],2)],1)},n=[],r=(a("25d7"),a("84fb"),{name:"FormSelect",props:{value:{type:[String,Number,Array],default:""},httpAPIName:{type:String,required:!0},httpAPIParams:{type:Object,default:function(){return{}}},labelAttr:{type:String,required:!0},valueAttr:{type:String,required:!0},prop:{type:String,default:""},label:{type:String,default:""},optionRoot:{type:Boolean,default:!1},rootLabel:{type:String,default:"root"},rootValue:{type:[String,Number],default:""},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1}},data:function(){return{options:[],selectedOption:this.value}},watch:{value:function(){this.selectedOption=this.value}},created:function(){this.fetchOptions()},methods:{reset:function(){this.selectedOption=this.multiple?[]:""},fetchOptions:function(){var e=this;this.$httpAPI[this.httpAPIName](this.httpAPIParams).then(function(t){e.$_.forEach(t.data.data,function(t){e.options.push({value:t[e.valueAttr],label:t[e.labelAttr]})})}).catch(function(e){return console.log(e)})}}}),i=r,o=a("048f"),s=Object(o["a"])(i,l,n,!1,null,null,null);s.options.__file="FormSelect.vue";t["a"]=s.exports},"4f73":function(e,t,a){},6872:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{staticClass:"el-range-editor--small el-date-editor el-range-editor",attrs:{label:e.label}},[a("div",{staticClass:"el-input__inner"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.start,expression:"start"}],staticClass:"el-range-input",attrs:{placeholder:e.startPlaceholder,type:"number"},domProps:{value:e.start},on:{blur:e.handleBlur,input:function(t){t.target.composing||(e.start=t.target.value)}}}),a("span",{staticClass:"el-range-separator"},[e._v("至")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.end,expression:"end"}],staticClass:"el-range-input",attrs:{placeholder:e.endPlaceholder,type:"number"},domProps:{value:e.end},on:{blur:e.handleBlur,input:function(t){t.target.composing||(e.end=t.target.value)}}})])])},n=[],r={name:"FormNumberRange",props:{label:{type:String,default:"数字范围"},startPlaceholder:{type:String,default:"开始"},endPlaceholder:{type:String,default:"结束"}},data:function(){return{start:"",end:""}},methods:{handleBlur:function(){this.$emit("on-change",{start:this.start,end:this.end})},reset:function(){this.start="",this.end=""}}},i=r,o=(a("846e"),a("048f")),s=Object(o["a"])(i,l,n,!1,null,"9949181a",null);s.options.__file="FormNumberRange.vue";t["a"]=s.exports},7460:function(e,t,a){},"846e":function(e,t,a){"use strict";var l=a("eadad"),n=a.n(l);n.a},8968:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{prop:e.prop,label:e.label}},[a("el-date-picker",{style:{width:e.width},attrs:{type:"daterange","picker-options":e.pickerOptions,"default-time":["00:00:00","23:59:59"],"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",size:"small",align:"right"},on:{change:e.handleDatePickerChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},n=[],r={name:"FormDateRange",props:{prop:{type:String,default:""},label:{type:String,default:"时间查询"},width:{type:String,default:"auto"}},data:function(){return{value:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},methods:{handleDatePickerChange:function(e){var t;t=e?{startTime:Date.parse(e[0]),endTime:Date.parse(e[1])}:{startTime:"",endTime:""},this.$emit("on-change",t)},reset:function(){this.value=""}}},i=r,o=(a("012c"),a("048f")),s=Object(o["a"])(i,l,n,!1,null,"20ba6115",null);s.options.__file="FormDateRange.vue";t["a"]=s.exports},"953c":function(e,t,a){"use strict";var l=a("0c92"),n=a.n(l);n.a},a221:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e.opposite?a("i",{class:e.status?"el-icon-error":"el-icon-success"}):a("i",{class:e.status?"el-icon-success":"el-icon-error"})])},n=[],r=(a("84fb"),{props:{status:{type:[Number,Boolean],required:!0},opposite:{type:Boolean,default:!1}}}),i=r,o=(a("ced7"),a("048f")),s=Object(o["a"])(i,l,n,!1,null,"8a8351ae",null);s.options.__file="BaseIndicator.vue";t["a"]=s.exports},adfb:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticStyle:{"min-width":"768px"},attrs:{visible:e.dialogVisible,title:"每注注单详情",center:"",width:"70%","append-to-body":""},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-table",{attrs:{data:e.bets,size:"small","max-height":"441","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"ballValue",label:"投注内容","min-width":300},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e.gameType>=7&&e.gameType<=17&&10!=e.gameType?e._l(t.row.ballValue,function(t,l){return a("span",{key:l},[/^[0-9]+/.test(t)?[a("BaseDice",{attrs:{number:t}})]:[a("span",[e._v(e._s(t))])]],2)}):e._l(t.row.ballValue,function(t,l){return a("span",{key:l},[/^[0-9]+/.test(t)?[a("LotteryBall",{attrs:{number:t}})]:[a("span",[e._v(e._s(t))])]],2)})],2)]}}])}),a("el-table-column",{attrs:{prop:"actor",label:"玩法类型","min-width":120}}),a("el-table-column",{attrs:{prop:"rate1",label:"赔率","min-width":60}}),a("el-table-column",{attrs:{prop:"betAmount",label:"投注金额","min-width":80},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.betAmount)))])]}}])}),a("el-table-column",{attrs:{prop:"awardAmount",label:"中奖金额","min-width":100,sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.awardAmount)))])]}}])}),a("el-table-column",{attrs:{prop:"betResult",label:"投注输赢","min-width":100,sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("betResult")(t.row.betResult)))])]}}])})],1)],1)},n=[],r=(a("84fb"),a("e040")),i=a("2d3b"),o={name:"DialogBetsDetail",components:{LotteryBall:r["a"],BaseDice:i["a"]},props:{id:{type:[String,Number],required:!0}},data:function(){return{dialogVisible:!1,bets:[],gameType:0}},watch:{id:function(){this.fetchBetDetail(this.id)}},methods:{toggleDialogVisible:function(e){this.dialogVisible=e},fetchBetDetail:function(e){var t=this;this.$httpAPI.fetchLotterBetDetail({params:{id:e}}).then(function(e){e.data.data?(t.bets=e.data.data,t.gameType=e.data.gameType):t.bets=[]}).catch(function(e){return console.log(e)})}}},s=o,u=a("048f"),c=Object(u["a"])(s,l,n,!1,null,null,null);c.options.__file="DialogBetsDetail.vue";t["a"]=c.exports},afdd:function(e,t,a){"use strict";var l=a("4f73"),n=a.n(l);n.a},b34f:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-input",{style:e.styles,attrs:{placeholder:e.placeholder,clearable:""},on:{input:function(t){e.$emit("on-change",t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})},n=[],r={name:"FormInput",props:{placeholder:{type:String,default:"请输入内容"},styles:{type:Object,default:function(){return{}}}},data:function(){return{value:""}},methods:{reset:function(){this.value=""}}},i=r,o=a("048f"),s=Object(o["a"])(i,l,n,!1,null,null,null);s.options.__file="FormInput.vue";t["a"]=s.exports},c33a:function(e,t,a){},ced7:function(e,t,a){"use strict";var l=a("7460"),n=a.n(l);n.a},d8ee:function(e,t,a){},e040:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"ball",style:{backgroundColor:e.bgcolor}},[e._v(e._s(e.number))])},n=[],r=(a("84fb"),{props:{number:{type:[Number,String],default:0},bgcolor:{type:String,default:"#189F92"}}}),i=r,o=(a("0ec5"),a("048f")),s=Object(o["a"])(i,l,n,!1,null,"f31dd8f8",null);s.options.__file="LotteryBall.vue";t["a"]=s.exports},e835:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("UsersListSearch",{on:{"on-search":e.handleSearch}}),a("div",[a("UsersListTable",{attrs:{data:e.tableData},on:{"on-changed":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1)],1)},n=[],r=(a("25d7"),a("3a0f"),a("a3a3"),a("4d0b"),a("1b629")),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("el-form-item",{attrs:{label:"会员账户"}},[a("FormInput",{ref:"username",style:{width:"150px"},attrs:{placehoder:"会员账户"},on:{"on-change":function(t){e.$set(e.formData,"username",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}})],1),a("FormDateRange",{ref:"dateRange",attrs:{label:"注册时间"},on:{"on-change":e.handleDateRangeChange}}),a("FormSelect",{ref:"groupId",attrs:{httpAPIName:"fetchUserGroups",httpAPIParams:{params:{pageNo:1,pageSize:100}},labelAttr:"name",valueAttr:"groupId",label:"会员分组",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"groupId",t)}}}),a("FormNumberRange",{ref:"numberRange",attrs:{label:"会员余额",startPlaceholder:"最小金额",endPlaceholder:"最大金额"},on:{"on-change":e.handleNumberRangeChange}}),a("FormNumberRange",{ref:"winRange",attrs:{label:"输赢金额",startPlaceholder:"最小金额",endPlaceholder:"最大金额"},on:{"on-change":e.handleWinRangeChange}}),a("el-form-item",{attrs:{label:"监控状态"}},[a("FormSelectStatic",{ref:"control",attrs:{options:[{value:0,label:"禁用"},{value:1,label:"启用"}],styles:{width:"90px"}},on:{"on-change":function(t){e.$set(e.formData,"control",t)}}})],1),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)},o=[],s=(a("20a2"),a("b34f")),u=a("4beb"),c=a("8968"),p=a("6872"),d=a("30ce"),m={name:"UsersListSearch",components:{FormInput:s["a"],FormSelect:u["a"],FormDateRange:c["a"],FormNumberRange:p["a"],FormSelectStatic:d["a"]},mixins:[r["h"]],methods:{handleDateRangeChange:function(e){var t=e.startTime,a=e.endTime;this.formData=Object.assign(this.formData,{startTime:t,endTime:a})},handleNumberRangeChange:function(e){var t=e.start,a=e.end;this.formData.minBanlance=t,this.formData.maxBanlance=a},handleWinRangeChange:function(e){var t=e.start,a=e.end;this.formData.minWin=t,this.formData.maxWin=a}}},f=m,h=a("048f"),b=Object(h["a"])(f,i,o,!1,null,null,null);b.options.__file="UsersListSearch.vue";var g=b.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-table",{attrs:{data:e.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"username",label:"会员账号","min-width":100}}),a("el-table-column",{attrs:{label:"注册时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{label:"最近登录时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.loginTime)))])]}}])}),a("el-table-column",{attrs:{label:"分组",width:120},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("span",[e._v(e._s(t.row.groupNames))]),a("BaseIcon",{staticClass:"pull-right",attrs:{icon:"el-icon-edit"},on:{"on-click":function(a){e.showDialog(t.row,"dialogGroup")}}})],1)]}}])}),a("el-table-column",{attrs:{label:"会员余额","min-width":120},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.banlance)))]),a("el-popover",{attrs:{trigger:"hover",placement:"right",width:"350"}},[a("el-table",{attrs:{data:t.row.banlanceDetail}},[a("el-table-column",{attrs:{width:"200",property:"name",label:"账号"}}),a("el-table-column",{attrs:{width:"150",property:"balance",label:"金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{color:"red"}},[e._v(e._s(e._f("RMB")(t.row.balance)))])]}}])})],1),a("BaseIcon",{staticClass:"pull-right",attrs:{slot:"reference",icon:"el-icon-zoom-in"},slot:"reference"})],1)]}}])}),a("el-table-column",{attrs:{prop:"win",label:"输赢","min-width":100},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.win)))])]}}])}),a("el-table-column",{attrs:{prop:"agent",label:"代理状态",width:45},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BaseIndicator",{attrs:{status:e.row.agent}})]}}])}),a("el-table-column",{attrs:{prop:"recharge",label:"充值状态",width:45},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BaseIndicator",{attrs:{status:e.row.recharge}})]}}])}),a("el-table-column",{attrs:{prop:"control",label:"监控状态",width:70},scopedSlots:e._u([{key:"default",fn:function(t){return[a("BaseSwitch",{attrs:{propValue:Boolean(t.row.control),payload:{id:t.row.id}},on:{"on-change":e.handleSwitchChange}})]}}])}),a("el-table-column",{attrs:{prop:"enable",label:"账号状态",width:45},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.enabled?"正常":"异常"))])]}}])}),a("el-table-column",{attrs:{label:"操作","min-width":200},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-view",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogDetail")}}}),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogBets")}}},[e._v("注单详情")]),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.showDialog(t.row,"dialogLogs")}}},[e._v("日志详情")])]}}])})],1),a("DialogGroupSetting",{ref:"dialogGroup",attrs:{user:e.activeItem},on:{"on-group-changed":function(t){e.$emit("on-changed")}}}),a("UsersListDialogDetail",{ref:"dialogDetail",attrs:{data:e.activeItem}}),a("DialogBetsList",{ref:"dialogBets",attrs:{id:e.activeItem.id},on:{"on-group-changed":function(t){e.$emit("on-changed")}}}),a("UsersListDialogLogs",{ref:"dialogLogs",attrs:{id:e.activeItem.id},on:{"on-group-changed":function(t){e.$emit("on-changed")}}})],1)},_=[],y=a("2d6f"),w=a("a221"),S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"会员分组修改",width:"400px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"会员分组","label-width":"80px"}},[a("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:"选择分组",size:"small"},model:{value:e.selectedGroupId,callback:function(t){e.selectedGroupId=t},expression:"selectedGroupId"}},e._l(e.options,function(e){return a("el-option",{key:e.groupId,attrs:{label:e.name,value:String(e.groupId)}})}))],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.confirmGroupChange}},[e._v("确认")])],1)],1)},D=[],k={name:"DialogGroupSetting",props:{user:{type:Object,required:!0}},data:function(){return{dialogVisible:!1,options:[],selectedGroupId:this.user.groupIds}},watch:{user:function(){this.selectedGroupId=this.user.groupIds}},created:function(){this.fetchUserGroups()},methods:{confirmGroupChange:function(){var e=this;this.dialogVisible=!1,this.$httpAPI.postUserGroupSetting({userId:this.user.id,groupId:this.selectedGroupId}).then(function(t){200===t.data.status?(e.$message.success("修改成功！"),e.$emit("on-group-changed")):e.$message.error("修改失败")}).catch(function(e){return console.log(e)})},toggleDialogVisible:function(e){this.dialogVisible=!0},fetchUserGroups:function(){var e=this;this.$httpAPI.fetchUserGroups({params:{pageNo:1,pageSize:100}}).then(function(t){e.options=t.data.data}).catch(function(e){return console.log(e)})}}},x=k,I=Object(h["a"])(x,S,D,!1,null,null,null);I.options.__file="DialogGroupSetting.vue";var P=I.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rebate-setting"},[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.showDialog}},[e._v("抽点详情")]),a("el-dialog",{attrs:{title:"会员抽点详情",visible:e.dialogVisible,width:"400px",center:""},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.rebateForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"真人视讯%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.zrss,callback:function(t){e.$set(e.rebateForm,"zrss",t)},expression:"rebateForm.zrss"}})],1),a("el-form-item",{attrs:{label:"电子游艺%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.dzyy,callback:function(t){e.$set(e.rebateForm,"dzyy",t)},expression:"rebateForm.dzyy"}})],1),a("el-form-item",{attrs:{label:"皇冠体育%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.hgty,callback:function(t){e.$set(e.rebateForm,"hgty",t)},expression:"rebateForm.hgty"}})],1),a("el-form-item",{attrs:{label:"彩票游戏%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.cpyx,callback:function(t){e.$set(e.rebateForm,"cpyx",t)},expression:"rebateForm.cpyx"}})],1),a("el-form-item",{attrs:{label:"港彩游戏%"}},[a("el-input",{attrs:{size:"small"},model:{value:e.rebateForm.gcyx,callback:function(t){e.$set(e.rebateForm,"gcyx",t)},expression:"rebateForm.gcyx"}})],1)],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.handleRebateFormConfirm}},[e._v("确认")])],1)],1)],1)},O=[],$={name:"UserRebateSetting",props:{userId:{type:String,required:!0}},data:function(){return{dialogVisible:!1,rebateForm:{zrss:0,dzyy:0,hgty:0,cpyx:0,gcyx:0}}},methods:{showDialog:function(){var e=this;this.rebateForm.userId||this.$httpAPI.getUsersRebate({params:{userId:this.userId}}).then(function(t){e.rebateForm=t.data.data}).catch(function(e){return console.log(e)}),this.dialogVisible=!0},handleRebateFormConfirm:function(){var e=this;this.$httpAPI.updateUsersRebate(this.rebateForm).then(function(){e.dialogVisible=!1,e.$message.success("修改抽点比例成功！")}).catch(function(){return e.$message.error("修改抽点比例失败！")})}}},F=$,A=(a("f47e"),Object(h["a"])(F,B,O,!1,null,"6853954c",null));A.options.__file="UserRebateSetting.vue";var L=A.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{visible:e.dialogVisible,title:"用户信息详情",width:"768px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{staticClass:"clearfix",attrs:{model:e.formData,size:"small","label-width":"120px",disabled:""}},[a("el-form-item",{attrs:{prop:"id",label:"账号ID"}},[a("el-input",{attrs:{value:e.formData.id}})],1),a("el-form-item",{attrs:{prop:"username",label:"会员账号"}},[a("el-input",{attrs:{value:e.formData.username}})],1),a("el-form-item",{attrs:{prop:"nickname",label:"会员昵称"}},[a("el-input",{attrs:{value:e.formData.nickname}})],1),a("el-form-item",{attrs:{prop:"groupNames",label:"会员分组"}},[a("el-input",{attrs:{value:e.formData.groupNames}})],1),a("el-form-item",{attrs:{prop:"relation",label:"邀请码"}},[a("el-input",{attrs:{value:e.formData.relation}})],1),a("el-form-item",{attrs:{prop:"banlance",label:"会员余额"}},[a("el-input",{attrs:{value:e._f("RMB")(e.formData.banlance)}})],1),a("el-form-item",{attrs:{prop:"win",label:"输赢"}},[a("el-input",{attrs:{value:e._f("RMB")(e.formData.win)}})],1),a("el-form-item",{attrs:{prop:"agent",label:"是否代理"}},[a("el-input",{attrs:{value:e.formData.agent?"代理":"未代理"}})],1),a("el-form-item",{attrs:{prop:"rechange",label:"充值状态"}},[a("el-input",{attrs:{value:e.formData.rechange?"充值":"未充值"}})],1),a("el-form-item",{attrs:{prop:"control",label:"监控状态"}},[a("el-input",{attrs:{value:e.formData.control?"监控":"未监控"}})],1),a("el-form-item",{attrs:{prop:"enabled",label:"账号状态"}},[a("el-input",{attrs:{value:e.formData.enabled?"正常":"异常"}})],1),a("el-form-item",{attrs:{prop:"createTime",label:"创建时间"}},[a("el-input",{attrs:{value:e._f("time")(e.formData.createTime)}})],1),a("el-form-item",{attrs:{prop:"loginTime",label:"最近登录时间"}},[a("el-input",{attrs:{value:e._f("time")(e.formData.loginTime)}})],1)],1)],1)},R=[],z={name:"UsersListDialogDetail",mixins:[r["c"]]},C=z,N=(a("2d57"),Object(h["a"])(C,T,R,!1,null,"4e4dc20e",null));N.options.__file="UsersListDialogDetail.vue";var U=N.exports,V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticStyle:{"min-width":"768px"},attrs:{visible:e.dialogVisible,title:"投注记录列表",width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("el-form-item",{attrs:{label:"彩票期号"}},[a("FormInput",{ref:"drawno",attrs:{placeholder:"可模糊搜索",styles:{width:"120px"}},on:{"on-change":function(t){e.$set(e.formData,"drawno",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}})],1),a("FormSelectGame",{ref:"gameType",attrs:{httpAPIName:"fetchGamesMenu",httpAPIParams:{params:{type:1}},labelAttr:"name",valueAttr:"id",prop:"gameType",label:"游戏类型",filterable:""},on:{"on-change":function(t){e.$set(e.formData,"gameType",t)}}}),a("el-form-item",{attrs:{label:"注单状态"}},[a("FormSelectStatic",{ref:"status",attrs:{options:[{value:0,label:"未结算"},{value:1,label:"中奖"},{value:2,label:"未中奖"}],styles:{width:"100px"}},on:{"on-change":function(t){e.$set(e.formData,"status",t)}}})],1),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1),a("div",[a("el-table",{attrs:{data:e.tableData,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"username",label:"账户名称",width:100}}),a("el-table-column",{attrs:{prop:"currentDrawno",label:"投注期号","min-width":90}}),a("el-table-column",{attrs:{prop:"gameName",label:"彩票类型","min-width":120}}),a("el-table-column",{attrs:{prop:"totalBets",label:"投注数",width:95,sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.totalBets))]),a("BaseIcon",{staticClass:"pull-right",on:{"on-click":function(a){e.showDialog(t.row,"dialogDetail")}}})]}}])}),a("el-table-column",{attrs:{prop:"totalAmount",label:"投注金额","min-width":95,sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.totalAmount)))])]}}])}),a("el-table-column",{attrs:{prop:"totalAwardAmount",label:"中奖金额","min-width":95,sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("RMB")(t.row.totalAwardAmount)))])]}}])}),a("el-table-column",{attrs:{prop:"status",label:"注单状态","min-width":70},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("lotteryOrderStatus")(t.row.status)))])]}}])}),a("el-table-column",{attrs:{prop:"id",label:"注单ID","min-width":150}}),a("el-table-column",{attrs:{prop:"createDate",label:"投注时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createDate)))])]}}])})],1),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1),a("DialogBetsDetail",{ref:"dialogDetail",attrs:{id:e.activeItem.id}})],1)},j=[],E=a("4009"),G=a("1955"),q=a("adfb"),M={name:"UsersListDialogLogs",components:{FormInput:s["a"],FormSelectGame:E["a"],FormSelectStatic:d["a"],BasePopoverTextarea:G["a"],BaseIcon:y["a"],DialogBetsDetail:q["a"]},mixins:[r["g"]],data:function(){return{activeItem:{id:""},tableHttpAPI:"fetchLotterBetsList",requestParams:{userId:this.id,pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}},watch:{id:function(){!this.dialogVisible&&this.tableData.length||(this.page.current=1,this.reset(),this.$set(this.requestParams,"userId",this.id),this.fetchTableData({userId:this.id}))}}},H=M,W=Object(h["a"])(H,V,j,!1,null,null,null);W.options.__file="DialogBetsList.vue";var J=W.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{staticStyle:{"min-width":"760px"},attrs:{visible:e.dialogVisible,title:"会员日志列表",width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{model:e.formData,size:"small",inline:""}},[a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)]),a("div",[a("el-table",{attrs:{data:e.tableData,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"module",label:"请求模块","min-width":120}}),a("el-table-column",{attrs:{prop:"params",label:"请求参数","min-width":200},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BasePopoverTextarea",{attrs:{data:e.row.params,maxLength:50}})]}}])}),a("el-table-column",{attrs:{prop:"ip",label:"ip地址"}}),a("el-table-column",{attrs:{prop:"area",label:"所属区域"}}),a("el-table-column",{attrs:{prop:"createTime",label:"请求时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":150},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BasePopoverTextarea",{attrs:{data:e.row.remark,maxLength:15}})]}}])})],1),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1)],1)},Q=[],X={name:"UsersListDialogLogs",components:{BasePopoverTextarea:G["a"]},mixins:[r["g"]],data:function(){return{tableHttpAPI:"fetchUsersLogsList",requestParams:{userId:this.id,pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}},watch:{id:function(){this.dialogVisible&&!this.tableData.length&&(this.page.current=1,this.reset(),this.$set(this.requestParams,"userId",this.id),this.fetchTableData({userId:this.id}))}}},Y=X,Z=Object(h["a"])(Y,K,Q,!1,null,null,null);Z.options.__file="UsersListDialogLogs.vue";var ee=Z.exports,te={name:"UsersListTable",components:{BaseIcon:y["a"],BaseIndicator:w["a"],DialogGroupSetting:P,UserRebateSetting:L,UsersListDialogDetail:U,DialogBetsList:J,UsersListDialogLogs:ee},mixins:[r["o"],r["n"]],data:function(){return{activeItem:{id:""},switchObj:{API:"updateUserListStatus",attrId:"userId",attrValue:"control"}}}},ae=te,le=Object(h["a"])(ae,v,_,!1,null,null,null);le.options.__file="UsersListTable.vue";var ne=le.exports,re={name:"UsersList",components:{UsersListSearch:g,UsersListTable:ne},mixins:[r["p"],r["j"]],data:function(){return{tableHttpAPI:"fetchUsersList",requestParams:{pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}},methods:{syncGroupData:function(e){this.$_.forEach(this.tableData,function(t){String(t.id)===e.userId&&(t.groupIds=e.value,t.groupNames=e.label)})}}},ie=re,oe=Object(h["a"])(ie,l,n,!1,null,null,null);oe.options.__file="index.vue";t["default"]=oe.exports},eadad:function(e,t,a){},f47e:function(e,t,a){"use strict";var l=a("d8ee"),n=a.n(l);n.a}}]);
//# sourceMappingURL=chunk-d5aeb672.34d733ee.js.map
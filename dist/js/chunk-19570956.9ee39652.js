(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19570956"],{1955:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[null===e.data?[a("span")]:String(e.data).length<=e.maxLength?[a("span",[e._v(e._s(e.data))])]:[a("el-popover",{attrs:{width:"400",trigger:e.triggerType}},[a("div",{domProps:{innerHTML:e._s(e.data)}}),a("div",{attrs:{slot:"reference"},slot:"reference"},[a("span",[e._v(e._s(e.data.substr(0,e.maxLength))+"...")]),a("i",{staticClass:"el-icon-search"})])])]],2)},r=[],l=(a("84fb"),{name:"BasePopoverTextarea",props:{data:{type:[String,Number,Object],reqrired:!0},maxLength:{type:Number,default:30},triggerType:{type:String,default:"hover"}}}),s=l,o=(a("2794"),a("048f")),i=Object(o["a"])(s,n,r,!1,null,"59528fca",null);i.options.__file="BasePopoverTextarea.vue";t["a"]=i.exports},"19b2":function(e,t,a){},2794:function(e,t,a){"use strict";var n=a("19b2"),r=a.n(n);r.a},"706c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("LogsListSearch",{on:{"on-search":e.handleSearch}}),a("div",[a("LogsListTable",{attrs:{data:e.tableData},on:{"on-changed":function(t){e.fetchTableData()}}}),a("BasePagination",{attrs:{page:e.page,httpURL:e.tableHttpAPI,requestParams:e.requestParams},on:{"on-change":e.handlePaginationChange}})],1)],1)},r=[],l=a("1b629"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{attrs:{model:e.formData,size:"small",inline:""},nativeOn:{submit:function(e){e.preventDefault()}}},[a("FormInput",{ref:"username",attrs:{label:"请求账号",width:"174px"},on:{"on-change":function(t){e.$set(e.formData,"username",t)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.$emit("on-search",e.formData)}}}),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(t){return e.search(t)}}}),a("SearchReset",{nativeOn:{click:function(t){return e.reset(t)}}})],1)],1)},o=[],i=a("b34f"),u={name:"LogsListSearch",components:{FormInput:i["a"]},mixins:[l["f"]]},c=u,p=a("048f"),m=Object(p["a"])(c,s,o,!1,null,null,null);m.options.__file="LogsListSearch.vue";var f=m.exports,d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{attrs:{data:e.data,size:"small","highlight-current-row":"",border:""}},[a("el-table-column",{attrs:{type:"index",width:36}}),a("el-table-column",{attrs:{prop:"createTime",label:"请求时间","min-width":140},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("time")(t.row.createTime)))])]}}])}),a("el-table-column",{attrs:{prop:"module",label:"请求模块","min-width":120}}),a("el-table-column",{attrs:{prop:"params",label:"请求参数","min-width":240},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BasePopoverTextarea",{attrs:{data:e.row.params,maxLength:60}})]}}])}),a("el-table-column",{attrs:{prop:"username",label:"请求账号","min-width":100}}),a("el-table-column",{attrs:{prop:"ip",label:"ip地址"}}),a("el-table-column",{attrs:{prop:"area",label:"所属区域"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注","min-width":150},scopedSlots:e._u([{key:"default",fn:function(e){return[a("BasePopoverTextarea",{attrs:{data:e.row.remark,maxLength:20}})]}}])})],1)},h=[],b=a("1955"),v={name:"UsersListTable",components:{BasePopoverTextarea:b["a"]},mixins:[l["m"]]},g=v,_=Object(p["a"])(g,d,h,!1,null,null,null);_.options.__file="LogsListTable.vue";var L=_.exports,x={name:"UsersLogsList",components:{LogsListSearch:f,LogsListTable:L},mixins:[l["n"],l["h"]],data:function(){return{tableHttpAPI:"fetchUsersLogsList",requestParams:{pageNo:1,pageSize:10},page:{current:1,size:10,total:10}}}},w=x,S=Object(p["a"])(w,n,r,!1,null,null,null);S.options.__file="index.vue";t["default"]=S.exports},b34f:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:e.label,width:e.width}},[a("el-input",{attrs:{placeholder:e.label,clearable:""},on:{input:function(t){e.$emit("on-change",t)}},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},r=[],l={name:"FormInput",props:{label:{type:String,default:"请输入内容"},width:{type:String,default:""}},data:function(){return{value:""}},methods:{reset:function(){this.value=""}}},s=l,o=a("048f"),i=Object(o["a"])(s,n,r,!1,null,null,null);i.options.__file="FormInput.vue";t["a"]=i.exports}}]);
//# sourceMappingURL=chunk-19570956.9ee39652.js.map
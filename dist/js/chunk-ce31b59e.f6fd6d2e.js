(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce31b59e"],{1346:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-switch",{on:{change:t.handleSwitchChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})},i=[],s=(a("20a2"),a("84fb"),{name:"BaseSwitch",props:{propValue:{type:[Boolean,Number,String],required:!0},payload:{type:Object,default:function(){return{}}},opposite:{type:Boolean,default:!1}},data:function(){return{value:this.propValue}},watch:{propValue:function(){this.value=this.propValue}},methods:{handleSwitchChange:function(){this.$emit("on-change",Object.assign(this.payload,{value:this.opposite?!this.value:this.value}))}}}),r=s,o=a("048f"),c=Object(o["a"])(r,n,i,!1,null,null,null);c.options.__file="BaseSwitch.vue";e["a"]=c.exports},"1b629":function(t,e,a){"use strict";a("dccb"),a("63af"),a("5a09"),a("9ce1"),a("cf54");var n=a("da47"),i=(a("84fb"),a("20a2"),a("3a0f"),a("a3a3"),a("4d0b"),a("99ca")),s=a("9769"),r=a("1346"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-time-picker",{staticStyle:{width:"100%"},attrs:{clearable:!1},on:{change:t.handleTimePickerChange},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})},c=[],u={props:{second:{type:Number,required:!0}},data:function(){return{time:this.second}},watch:{second:function(){var t="1900-1-1 "+this.transferSecondToTime(this.second);this.time=new Date(t)}},methods:{handleTimePickerChange:function(t){this.$emit("on-change",this.transferTimeToSeconds(t))},transferTimeToSeconds:function(t){var e=new Date(t),a=e.getHours(),n=e.getMinutes(),i=e.getSeconds();return 3600*a+60*n+i},transferSecondToTime:function(t){var e=this.addZeroPrefix(t%60),a=this.addZeroPrefix(Math.floor(t/60)%60),n=this.addZeroPrefix(Math.floor(t/3600));return"".concat(n,":").concat(a,":").concat(e)},addZeroPrefix:function(t){return t>=10?t:"0"+t}}},l=u,h=a("048f"),f=Object(h["a"])(l,o,c,!1,null,null,null);f.options.__file="BaseTimePicker.vue";var d=f.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-table",{attrs:{data:t.tableData,size:"small","max-height":"600","highlight-current-row":"",stripe:"",border:""}},[t._t("default",[t._v("需要传form相关组件进来")])],2)},p=[],g={name:"LayoutTablePlain",props:{tableData:{type:Array,default:function(){return[]}}}},b=g,D=Object(h["a"])(b,m,p,!1,null,null,null);D.options.__file="LayoutTablePlain.vue";var E=D.exports,v=a("3af3"),_=a("2c53"),P=a("46e2"),O=a("9ab4"),A=a("85f7"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-button",{attrs:{type:"primary",icon:"el-icon-view",size:"mini",title:"预览"}})},S=[],I={},T=Object(h["a"])(I,$,S,!1,null,null,null);T.options.__file="ButtonOperationPreview.vue";var C=T.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini",title:"编辑"}})},j=[],w={},L=Object(h["a"])(w,y,j,!1,null,null,null);L.options.__file="ButtonOperationEdit.vue";var V=L.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-button",{attrs:{type:"warning",icon:"el-icon-delete",size:"mini",title:"删除"}})},N=[],z={},q=Object(h["a"])(z,R,N,!1,null,null,null);q.options.__file="ButtonOperationDelete.vue";var U=q.exports;a.d(e,"m",function(){return k}),a.d(e,"r",function(){return F}),a.d(e,"f",function(){return B}),a.d(e,"k",function(){return H}),a.d(e,"j",function(){return M}),a.d(e,"i",function(){return Z}),a.d(e,"l",function(){return G}),a.d(e,"h",function(){return J}),a.d(e,"o",function(){return X}),a.d(e,"p",function(){return W}),a.d(e,"q",function(){return K}),a.d(e,"n",function(){return Q}),a.d(e,"g",function(){return Y}),a.d(e,"e",function(){return tt}),a.d(e,"b",function(){return et}),a.d(e,"d",function(){return at}),a.d(e,"c",function(){return nt}),a.d(e,"a",function(){return it});var x=function(t,e){t.page&&(t.requestParams.pageNo=1,t.page.current=1),t.requestParams=Object.assign(t.requestParams,e),t.fetchTableData()},k=(r["a"],{components:{BaseSwitch:r["a"]},methods:{handleSwitchChange:function(t){var e,a=this;this.$httpAPI[this.switchObj.API]((e={},Object(n["a"])(e,this.switchObj.attrId,t.id),Object(n["a"])(e,this.switchObj.attrValue,Number(t.value)),e)).then(function(e){200===e.data.status?(a.$emit("on-changed",t.id),a.$message.success(i["a"].UPDATE_SUCCEEDED)):a.$message.error(i["a"].UPDATE_FAILED)}).catch(function(t){return console.log(t)})}}}),F={components:{BaseTimePicker:d},methods:{handleTimePickerChange:function(t){console.log(t)}}},B={created:function(){this.fetchMenuData()},methods:{handleTabClick:function(t){this.$emit("on-change",{id:t.name,name:t.label})},fetchMenuData:function(){var t=this;this.$httpAPI[this.menuHttpAPI]({params:this.requestParams}).then(function(e){e.data.data?t.menu=e.data.data:t.menu=[]}).catch(function(t){return console.log(t)})}}},H={components:{SearchLayout:v["a"],BaseAdd:P["a"]}},M={methods:{handleSearch:function(t){x(this,t)}}},Z={components:{SearchLayout:v["a"],BaseAdd:P["a"]},methods:{handleSearch:function(t){x(this,t)}}},G={methods:{handleSearch:function(t){this.requestParams=Object.assign(this.requestParams,t,{pageNo:1}),this.fetchTableData()}}},J={components:{SearchFormLayout:_["a"],SearchIcon:O["a"],SearchReset:A["a"]},data:function(){return{formData:{}}},methods:{handleTimeRangeChange:function(t,e,a){var n=t.start,i=t.end;this.formData[e]=n,this.formData[a]=i,this.$emit("on-search",this.formData)},handleNumberRangeChange:function(t,e,a){var n=t.start,i=t.end;this.formData[e]=n,this.formData[a]=i},handleSelectChange:function(t,e){this.$set(this.formData,e,t),this.$emit("on-search",this.formData)},handleRefresh:function(){this.reset(),this.search()},search:function(){this.$emit("on-search",this.formData)},reset:function(){for(var t in this.$refs)this.$refs[t].reset();this.$utils.initializeObjectProperties(this.formData)}}},X={components:{BasePagination:s["a"]},data:function(){return{tableData:[]}},created:function(){this.fetchTableData()},methods:{handlePaginationChange:function(t){this.tableData=t},fetchTableData:function(){var t=this;this.$httpAPI[this.tableHttpAPI]({params:this.requestParams}).then(function(e){e.data.data?t.tableData=e.data.data:t.tableData=[],t.page.total=e.data.amount,"[object Object]"===Object.prototype.toString.call(t.statistics)&&(t.statistics=e.data)}).catch(function(t){return console.log(t)})}}},W={components:{BasePagination:s["a"]},data:function(){return{tableData:[]}},created:function(){this.fetchTableData()},methods:{handlePaginationChange:function(t){this.tableData=t},fetchTableData:function(){var t=this;this.$httpAPI[this.tableHttpAPI](this.requestParams).then(function(e){e.data.data?t.tableData=e.data.data:t.tableData=[],t.page.total=e.data.amount}).catch(function(t){return console.log(t)})}}},K={data:function(){return{tableData:[]}},created:function(){this.fetchTableData()},methods:{fetchTableData:function(){var t=this;this.$httpAPI[this.tableHttpAPI]({params:this.requestParams}).then(function(e){e.data.data?t.tableData=e.data.data:t.tableData=[]}).catch(function(t){return console.log(t)})}}},Q={components:{LayoutTablePlain:E,ButtonOperationPreview:C,ButtonOperationEdit:V,ButtonOperationDelete:U},props:{data:{type:Array,required:!0}},data:function(){return{activeItem:{}}},methods:{showDialog:function(t,e){this.activeItem=t,this.$refs[e].toggleDialogVisible(!0)},handleDeleteConfirm:function(){var t=this;this.$refs.dialogDelete.toggleDialogVisible(!1),this.$httpAPI[this.deleteHttpAPI]({params:Object(n["a"])({},this.deleteAttrName,this.deleteId?this.activeItem[this.deleteId]:this.activeItem["id"])}).then(function(e){200===e.data.status?(t.$emit("on-changed"),t.$message.success(i["a"].DELETE_SUCCEEDED)):t.$message.error("".concat(i["a"].DELETE_FAILED,": ").concat(e.data.msg))}).catch(function(e){console.log(e),t.$message.warning(i["a"].DELETE_FAILED)})}}},Y={components:{SearchIcon:O["a"],SearchReset:A["a"],BasePagination:s["a"]},props:{id:{type:[String,Number],required:!0}},data:function(){return{dialogVisible:!1,formData:{},tableData:[]}},methods:{handlePaginationChange:function(t){this.tableData=t},search:function(){this.fetchTableData(this.formData)},reset:function(){for(var t in this.$refs)t.includes("dialog")||this.$refs[t].reset();this.$utils.initializeObjectProperties(this.formData)},showDialog:function(t,e){this.activeItem=t,this.$refs[e].toggleDialogVisible(!0)},fetchTableData:function(t){var e=this;this.$httpAPI[this.tableHttpAPI]({params:Object.assign(this.requestParams,t)}).then(function(t){e.page.total=t.data.amount,t.data.data?e.tableData=t.data.data:e.tableData=[]}).catch(function(t){return console.log(t)})},toggleDialogVisible:function(t){this.dialogVisible=t}}},tt={props:{data:{type:Object,default:function(){return{}}}},watch:{data:function(){this.formData=Object.assign(this.formData,this.data)}},mounted:function(){this.formData=Object.assign(this.formData,this.data)},methods:{validateForm:function(){var t=this;this.$refs.form.validate(function(e){e?t.$emit("on-validated",t.formData):t.$message.warning(i["a"].VALIDATION_FAILED)})},resetFields:function(){this.$refs.form.resetFields()}}},et={data:function(){return{saveString:i["a"].COMPONENT_CREATION_RECORD,dialogVisible:!1,checked:!0}},methods:{handleValidationSuccess:function(t){var e=this;this.dialogVisible=!1,this.$httpAPI[this.createHttpAPI](t).then(function(a){200===a.data.status?(e.checked||(e.$utils.invokeRefResetMothod(e.$refs),e.$refs.form.resetFields()),e.$emit("on-created",t),e.$message.success(i["a"].CREATE_SUCCEEDED)):e.$message.error("".concat(i["a"].CREATE_FAILED,": ").concat(a.data.msg))}).catch(function(t){console.dir(t),e.$message.error(i["a"].CREATE_FAILED)})},toggleDialogVisible:function(t){this.dialogVisible=t}}},at={props:{data:{type:Object,required:!0}},data:function(){return{dialogVisible:!1}},methods:{handleValidationSuccess:function(t){var e=this;this.dialogVisible=!1;var a=this.$utils.isEquivalentObjects(this.data,t);if(a)this.$message.info(i["a"].VALIDATION_UNCHANGED);else{var n=this.$utils.generateObjectWithChangedProperties(this.data,t);this.$httpAPI[this.updateHttpAPI](Object.assign(n,this.httpParams)).then(function(t){200===t.data.status?(e.$emit("on-updated"),e.$message.success(i["a"].UPDATE_SUCCEEDED)):e.$message.error("".concat(i["a"].UPDATE_FAILED,": ").concat(t.data.msg))}).catch(function(t){console.dir(t),e.$message.error(i["a"].UPDATE_FAILED)})}},toggleDialogVisible:function(t){this.dialogVisible=t}}},nt={props:{data:{type:Object,required:!0}},data:function(){return{formData:{},dialogVisible:!1}},watch:{data:function(){this.formData=this.data}},methods:{toggleDialogVisible:function(t){this.dialogVisible=t}}},it={props:{data:{type:Object,required:!0}},data:function(){return{dialogVisible:!1}},methods:{toggleDialogVisible:function(t){this.dialogVisible=t},changeStatus:function(t){var e=this;this.dialogVisible=!1,this.$httpAPI[this.audit.httpAPI](Object.assign(this.requestParams,Object(n["a"])({},this.audit.attrName,t))).then(function(t){200===t.data.status?(e.$emit("on-success"),e.$message.success(i["a"].AUDIT_SUCCEEDED)):e.$message.error("".concat(i["a"].AUDIT_FAILED,": ").concat(t.data.msg))}).catch(function(t){console.log(t),e.$message.error(i["a"].SERVER_RESPONSE_EXCEPTION)})}}}},"20a2":function(t,e,a){var n=a("8718");n(n.S+n.F,"Object",{assign:a("f42f")})},"2c53":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default"),a("div",{staticStyle:{display:"inline-block"}},[a("SearchIcon",{nativeOn:{click:function(e){t.$emit("on-search")}}}),a("SearchReset",{nativeOn:{click:function(e){t.$emit("on-reset")}}})],1)],2)},i=[],s=a("9ab4"),r=a("85f7"),o={name:"SearchFormLayout",components:{SearchIcon:s["a"],SearchReset:r["a"]}},c=o,u=a("048f"),l=Object(u["a"])(c,n,i,!1,null,null,null);l.options.__file="SearchFormLayout.vue";e["a"]=l.exports},"3af3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-container"},[a("div",{staticClass:"search-left-part"},[t._t("left")],2),a("div",{staticClass:"search-right-part"},[t._t("right")],2)])},i=[],s={name:"SearchLayout"},r=s,o=(a("5442"),a("048f")),c=Object(o["a"])(r,n,i,!1,null,"2b75b3fe",null);c.options.__file="SearchLayout.vue";e["a"]=c.exports},"46e2":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-button",{attrs:{icon:"el-icon-circle-plus-outline",size:"small",type:"primary"},on:{click:function(e){t.$emit("on-click")}}},[t._t("default",[t._v("添加")])],2)},i=[],s={name:"BaseAdd"},r=s,o=a("048f"),c=Object(o["a"])(r,n,i,!1,null,null,null);c.options.__file="BaseAdd.vue";e["a"]=c.exports},5442:function(t,e,a){"use strict";var n=a("ddb0"),i=a.n(n);i.a},"85f7":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form-item",[a("el-button",{staticStyle:{"font-size":"16px"},attrs:{type:"primary",icon:"el-icon-refresh",size:"mini",title:"重置"}})],1)},i=[],s=(a("3a0f"),a("a3a3"),a("4d0b"),{name:"SearchReset"}),r=s,o=a("048f"),c=Object(o["a"])(r,n,i,!1,null,null,null);c.options.__file="SearchReset.vue";e["a"]=c.exports},9769:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-pagination",{attrs:{"current-page":t.page.current,"page-size":t.page.size,total:t.page.total,"page-sizes":[10,20,40,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})},i=[],s=(a("20a2"),a("84fb"),{name:"BasePagination",props:{httpURL:{type:String,required:!0},httpMethod:{type:String,default:"get"},requestParams:{type:Object,default:function(){return{}}},pageTotal:{type:Number,default:10},page:{type:Object,default:function(){return{current:1,size:10,total:10}}}},methods:{handleCurrentChange:function(t){this.getData({current:this.page.current=t,size:this.page.size})},handleSizeChange:function(t){this.getData({current:this.page.current=1,size:this.page.size=t})},getData:function(t){var e=this;this.$httpAPI[this.httpURL](this._calculateParams(t)).then(function(t){e.$emit("on-change",t.data.data)}).catch(function(t){return console.log(t)})},_calculateParams:function(t){return"get"===this.httpMethod?{params:Object.assign(this.requestParams,{pageNo:t.current,pageSize:t.size})}:Object.assign(this.requestParams,{pageNo:t.current,pageSize:t.size})}}}),r=s,o=a("048f"),c=Object(o["a"])(r,n,i,!1,null,null,null);c.options.__file="BasePagination.vue";e["a"]=c.exports},"99ca":function(t,e,a){"use strict";var n={VALIDATION_FAILED:"表单填写不正确，请按提示填写",VALIDATION_UNCHANGED:"检测数据没有变化，不发送修改请求",CREATE_SUCCEEDED:"创建成功",CREATE_FAILED:"创建失败",UPDATE_SUCCEEDED:"修改成功",UPDATE_FAILED:"修改失败",DELETE_SUCCEEDED:"删除成功",DELETE_FAILED:"删除失败",AUDIT_SUCCEEDED:"审核成功",AUDIT_FAILED:"审核失败",OPERATION_SUCCEEDED:"操作成功",OPERATION_FAILED:"操作失败",SERVER_RESPONSE_EXCEPTION:"服务器异常，请稍后重试",COMPONENT_CREATION_RECORD:"保存创建记录"};e["a"]=n},"9ab4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form-item",[a("el-button",{staticStyle:{"font-size":"16px"},attrs:{type:"primary",icon:"el-icon-search",size:"mini",title:"搜索"}})],1)},i=[],s={name:"SearchIcon"},r=s,o=a("048f"),c=Object(o["a"])(r,n,i,!1,null,null,null);c.options.__file="SearchIcon.vue";e["a"]=c.exports},"9ce1":function(t,e,a){a("9add")("search",1,function(t,e,a){return[function(a){"use strict";var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},a]})},da47:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}a.d(e,"a",function(){return n})},ddb0:function(t,e,a){},f42f:function(t,e,a){"use strict";var n=a("bd18"),i=a("fef4"),s=a("b3d5"),r=a("03a4"),o=a("6a37"),c=Object.assign;t.exports=!c||a("cce3")(function(){var t={},e={},a=Symbol(),n="abcdefghijklmnopqrst";return t[a]=7,n.split("").forEach(function(t){e[t]=t}),7!=c({},t)[a]||Object.keys(c({},e)).join("")!=n})?function(t,e){var a=r(t),c=arguments.length,u=1,l=i.f,h=s.f;while(c>u){var f,d=o(arguments[u++]),m=l?n(d).concat(l(d)):n(d),p=m.length,g=0;while(p>g)h.call(d,f=m[g++])&&(a[f]=d[f])}return a}:c},fef4:function(t,e){e.f=Object.getOwnPropertySymbols}}]);
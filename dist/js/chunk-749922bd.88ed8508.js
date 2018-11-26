(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-749922bd"],{"5c37e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"game-preview"},[a("el-form",{ref:"gameForm",attrs:{model:e.formData,rules:e.rules,"label-width":"130px"}},[a("el-form-item",{attrs:{label:"游戏名称",prop:"name"}},[a("el-input",{attrs:{placeholder:"游戏名称"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"游戏副标题",prop:"information"}},[a("el-input",{attrs:{placeholder:"游戏副标题"},model:{value:e.formData.information,callback:function(t){e.$set(e.formData,"information",t)},expression:"formData.information"}})],1),a("el-form-item",{attrs:{label:"游戏图标",prop:"icon"}},[a("el-input",{attrs:{placeholder:"游戏图标"},model:{value:e.formData.icon,callback:function(t){e.$set(e.formData,"icon",t)},expression:"formData.icon"}})],1),a("el-form-item",{attrs:{label:"开始时间",prop:"startTime"}},[a("BaseTimePicker",{attrs:{second:e.formData.startTime},on:{"on-change":e.handleTimePickerChange}})],1),a("el-form-item",{attrs:{label:"结束时间",prop:"endTime"}},[a("BaseTimePicker",{attrs:{second:e.formData.endTime},on:{"on-change":e.handleTimePickerChange}})],1),a("el-form-item",{attrs:{label:"每期相隔的时间",prop:"intervalTime"}},[a("BaseTimePicker",{attrs:{second:e.formData.intervalTime},on:{"on-change":e.handleTimePickerChange}})],1),a("el-form-item",{attrs:{label:"开奖结果的地址",prop:"url"}},[a("el-input",{attrs:{placeholder:"开奖结果的地址"},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),a("el-form-item",{attrs:{label:"开奖结果的定时器的crontab表达式",prop:"crontab"}},[a("el-input",{attrs:{placeholder:"开奖结果的定时器的crontab表达式"},model:{value:e.formData.crontab,callback:function(t){e.$set(e.formData,"crontab",t)},expression:"formData.crontab"}})],1),a("el-form-item",{attrs:{label:"系统封盘的定时器的crontab表达式",prop:"myCrontab"}},[a("el-input",{attrs:{placeholder:"系统封盘的定时器的crontab表达式"},model:{value:e.formData.myCrontab,callback:function(t){e.$set(e.formData,"myCrontab",t)},expression:"formData.myCrontab"}})],1),a("el-form-item",{attrs:{label:"排列顺序"}},[a("el-input",{attrs:{type:"number",min:"0",placeholder:"排列顺序"},model:{value:e.formData.sort,callback:function(t){e.$set(e.formData,"sort",t)},expression:"formData.sort"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",placeholder:"备注"},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("gameForm")}}},[e._v("确认")]),a("el-button",{attrs:{type:"info"},on:{click:function(t){e.$router.push({name:"SystemLotteryList"})}}},[e._v("返回")])],1)],1)],1)},o=[],n=(a("3a0f"),a("a3a3"),a("4d0b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-time-picker",{staticStyle:{width:"100%"},attrs:{clearable:!1},on:{change:e.handleTimePickerChange},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})}),i=[],l=(a("84fb"),{props:{second:{type:Number,required:!0}},data:function(){return{time:this.second}},watch:{second:function(){var e="1900-1-1 "+this.transferSecondToTime(this.second);this.time=new Date(e)}},methods:{handleTimePickerChange:function(e){this.$emit("on-change",this.transferTimeToSeconds(e))},transferTimeToSeconds:function(e){var t=new Date(e),a=t.getHours(),r=t.getMinutes(),o=t.getSeconds();return 3600*a+60*r+o},transferSecondToTime:function(e){var t=this.addZeroPrefix(e%60),a=e>=3600?this.addZeroPrefix(e%3600):this.addZeroPrefix(Math.floor(e/60)),r=this.addZeroPrefix(Math.floor(e/3600));return"".concat(r,":").concat(a,":").concat(t)},addZeroPrefix:function(e){return e>=10?e:"0"+e}}}),m=l,s=a("048f"),c=Object(s["a"])(m,n,i,!1,null,null,null);c.options.__file="BaseTimePicker.vue";var f=c.exports,u={components:{BaseTimePicker:f},data:function(){return{formData:{name:"",information:"",icon:"",startTime:0,endTime:0,url:"",intervalTime:0,crontab:"",myCrontab:"",sort:0,remark:""},rules:{name:[{required:!0,message:"游戏名称不能为空"},{max:30,message:"游戏名称长度不能超过30个字符"}]}}},created:function(){this.fetchGameInfo()},methods:{handleTimePickerChange:function(e,t){console.log(this),console.log(e,t)},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$axios.post("/api-g/GameTypeConfig/save",{id:t.formData.id,startTime:t.formData.startTime}).then(function(){t.$message.warning("修改游戏配置成功！")}).catch(function(e){console.log(e),t.$message.error("修改游戏配置失败！")}):t.$message.warning("表单验证不通过，请检查填写内容。")})},fetchGameInfo:function(){var e=this;this.$httpAPI.fetchLotterySettingInfo({params:{id:this.$route.params.gameId}}).then(function(t){e.formData=t.data.data}).catch(function(e){return console.log(e)})}}},p=u,d=Object(s["a"])(p,r,o,!1,null,null,null);d.options.__file="SystemLotteryUpdate.vue";t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-749922bd.88ed8508.js.map
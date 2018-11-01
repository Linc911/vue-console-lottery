<template lang="html">
  <div class="unknown">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="发布系统消息" name="first">
        <el-form ref="form" :model="systemform" label-width="80px">
          <el-form-item label="消息作者">
            <el-input v-model="author" placeholder="请输入消息作者" style="width: 526px"></el-input>
          </el-form-item>
          <el-form-item label="消息标题">
            <el-input v-model="title" placeholder="请输入消息标题"></el-input>
          </el-form-item>
          <el-form-item label="消息对象">
            <el-radio v-model="radio" label="1">所有会员</el-radio>
            <el-radio v-model="radio" label="2">在线会员</el-radio>
            <el-radio v-model="radio" label="3">新会员组</el-radio>
            <el-radio v-model="radio" label="4">公司会员组</el-radio>
            <el-radio v-model="radio" label="5">公司上级组</el-radio>
            <el-radio v-model="radio" label="6">第1组</el-radio>
            <el-radio v-model="radio" label="7">垃圾会员组</el-radio>
            <el-radio v-model="radio" label="8">不给提款组</el-radio>
            <el-radio v-model="radio" label="9">测试组</el-radio>
            <el-radio v-model="radio" label="10">指定会员</el-radio>
          </el-form-item>
          <el-form-item label="消息内容">
            <el-input type="textarea" v-model="content"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary" style="width: 90px" @click="systemSubmit">添加</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="查看系统消息" name="second">
        <el-input v-model="messager" placeholder="消息发送者" style="width: 130px"></el-input>
        <el-select v-model="allMessage" placeholder="全部消息" style="width: 110px;margin-left: 10px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="messageObject" placeholder="消息对象" style="width: 130px;margin-left: 10px"></el-input>
        <el-select v-model="time" placeholder="发布时间" style="width: 110px;margin-left: 10px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-date-picker
          v-model="value1"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="—"
          start-placeholder="请选择开始日期"
          end-placeholder="请选择结束日期"
          :picker-options="pickerOptions">
        </el-date-picker>
        <el-button type="primary" icon="el-icon-search"></el-button>
        <div class="table-list">
          <!-- 表格 -->
          <el-table
            :data="tableData"
            size="small"
            highlight-current-row
            border
          >
            <el-table-column type="index" :min-width="30" />
            <el-table-column prop="" label="消息发送者">
            </el-table-column>
            <el-table-column prop="" label="消息类型">
            </el-table-column>
            <el-table-column prop="" label="消息标题">
            </el-table-column>
            <el-table-column prop="" label="系统用户名">
            </el-table-column>
            <el-table-column prop="" label="消息对象">
            </el-table-column>
            <el-table-column prop="" label="发布时间">
            </el-table-column>
            <el-table-column prop="" label="阅读时间">
            </el-table-column>
            <el-table-column prop="" label="是否阅读">
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="发布代理消息" name="third">
        <el-form ref="form" :model="agentform" label-width="80px">
          <el-form-item label="消息作者">
            <el-input v-model="author" placeholder="请输入消息作者" style="width: 526px"></el-input>
          </el-form-item>
          <el-form-item label="消息标题">
            <el-input v-model="title" placeholder="请输入消息标题"></el-input>
          </el-form-item>
          <el-form-item label="指定代理">
            <el-input v-model="agent" placeholder="请输入代理账号" style="width: 526px"></el-input>
          </el-form-item>
          <el-form-item label="消息内容">
            <el-input type="textarea" v-model="content"></el-input>
          </el-form-item>
          <el-form-item style="text-align: center">
            <el-button type="primary" style="width: 90px" @click="agentSubmit">添加</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="查看代理消息" name="fourth">
        <el-input v-model="messager" placeholder="消息发送者" style="width: 130px"></el-input>
        <el-input v-model="messageObject" placeholder="消息对象" style="width: 130px;margin-left: 10px"></el-input>
        <el-select v-model="time" placeholder="发布时间" style="width: 110px;margin-left: 10px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-date-picker
          v-model="value1"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="—"
          start-placeholder="请选择开始日期"
          end-placeholder="请选择结束日期"
          :picker-options="pickerOptions">
        </el-date-picker>
        <el-button type="primary" icon="el-icon-search"></el-button>
        <el-button type="primary" icon="el-icon-refresh" style="float: right"></el-button>
        <div class="table-list">
          <!-- 表格 -->
          <el-table
            :data="tableData"
            size="small"
            highlight-current-row
            border
          >
            <el-table-column type="index" :min-width="30" />
            <el-table-column prop="" label="消息发送者" :min-width="90">
            </el-table-column>
            <el-table-column prop="" label="消息标题" :min-width="110">
            </el-table-column>
            <el-table-column prop="" label="消息对象" :min-width="90" />
            <el-table-column prop="" label="发布时间" :width="110">
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage2"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="sizes, prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>

export default {
  data () {
    return {
      radio: '1',
      activeName: 'first',
      systemform: {},
      allMessage: '',
      agentform: {
        author: '',
        title: '',
        agent: ''
      },
      tableData: [],
      time: '',
      messager: '',
      content: '',
      messageObject: '',
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      value1: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleSizeChange (val) {

    },
    systemSubmit () {
      console.log('submit!')
    },
    agentSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style lang="scss" scoped>
  .table-list {
    margin-top: 20px;
  }
</style>

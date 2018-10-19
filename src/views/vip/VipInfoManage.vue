<template lang="html">
  <section class="vip-info-manage">
    <!-- 条件筛选 -->
    <div class="search-container clearfix">
      <div class="search-left">
        <template>
          <span class="form-label">注册时间：</span>
          <el-date-picker
            v-model="valueDate"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']"
            size="small"
            clearable
            style="width: 240px; margin-right: 20px;"
          />
        </template>
        <template>
          <span class="form-label">所属分组：</span>
          <el-select v-model="valueData" size="small" placeholder="全部">
            <el-option label="在线" :value="0"></el-option>
            <el-option label="充值" :value="1"></el-option>
            <el-option label="彩金" :value="2"></el-option>
          </el-select>
        </template>
      </div>
      <div class="search-right">
        <el-input v-model="input4" size="small" placeholder="请输入内容" style="width: 240px;">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button icon="el-icon-refresh" size="small" style="margin-left: 10px;"></el-button>
      </div>
    </div>
    <!-- 表格数据 -->
    <div class="">
      <el-table
        :data="tableData"
        :header-cell-style="{ textAlign: 'center', fontSize: '13px' }"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index" :width="40"></el-table-column>
        <el-table-column prop="ivitiveCode" label="邀请码"></el-table-column>
        <el-table-column prop="registerDate" label="注册时间" :width="140">
          <template slot-scope="scope">
            <span v-localtime="scope.row.registerDate"></span>
          </template>
        </el-table-column>
        <el-table-column prop="accountNumber" label="账号编码"></el-table-column>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="type" label="类型"></el-table-column>
        <!-- <el-table-column prop="level" label="级别"></el-table-column> -->
        <el-table-column prop="accountBalance" label="账户余额"></el-table-column>
        <!-- <el-table-column prop="accountReceive" label="返水账号"></el-table-column>
        <el-table-column prop="accountChange" label="输赢"></el-table-column> -->
        <!-- <el-table-column prop="isMonitored" label="是否受监管" :width="40">
          <template slot-scope="scope">
            <i :class="[ scope.row.isMonitored ? 'el-icon-success' : 'el-icon-error' ]"></i>
          </template>
        </el-table-column>
        <el-table-column prop="isChanged" label="是否已充值" :width="40">
          <template slot-scope="scope">
            <i :class="[ scope.row.isChanged ? 'el-icon-success' : 'el-icon-error' ]"></i>
          </template>
        </el-table-column> -->
        <!-- <el-table-column prop="registerIP" label="注册IP"></el-table-column>
        <el-table-column prop="loginInfo" label="登录信息"></el-table-column> -->
        <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <span class="table-operations-item">会员详情</span>
            <span class="table-operations-item">安全预测</span>
            <span class="table-operations-item">赔率预览</span>
            <span class="table-operations-item">抽点详情</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      input4: '',
      time: '',
      valueDate: '',
      valueData: '',
      tableData: [
        {
          ivitiveCode: 123,
          registerDate: new Date(),
          accountNumber: 'vip01',
          username: 'Jhon',
          type: '新会员',
          level: '钻石会员',
          accountBalance: 1883,
          accountReceive: 0.1,
          accountChange: 0,
          isMonitored: false,
          isChanged: false,
          registerIP: '1.2.3.4',
          loginInfo: ''
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  margin-bottom: 20px;
}
.search-left {
  float: left;
}
.search-right {
  float: right;
  text-align: right;
}
.form-label {
  font-size: 14px;
  color: #606266;
}
.table-operations-item {
  display: inline-block;
  width: 60px;
  text-align: center;
}
</style>

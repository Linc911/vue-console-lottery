<template lang="html">
  <section class="lottery-users">
    <!-- 条件筛选 -->
    <div class="">
      <span>存款开始时间：</span>
      <el-date-picker
        v-model="value5"
        @change="handleDatePickerChange"
        type="datetimerange"
        :picker-options="pickerOptions2"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        size="small"
        align="right"
      />
    </div>
    <!-- 表格数据 -->
    <div class="table-list">
      <!-- 表格 -->
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index" />

        <el-table-column prop="username" label="会员账号" />

        <el-table-column prop="nickname" label="会员昵称" />

        <el-table-column label="会员余额" :min-width="120">
          <template slot-scope="scope">
            <span>{{scope.row.banlance | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="rechargeAmount" label="存款次数" />

        <el-table-column label="存款金额">
          <template slot-scope="scope">
            <span>{{scope.row.rechargeMoney | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column prop="withdrawAmount" label="取款次数" />

        <el-table-column label="取款金额">
          <template slot-scope="scope">
            <span>{{scope.row.withdrawMoney | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column label="额度转入">
          <template slot-scope="scope">
            <span>{{scope.row.backendAddMoney | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column label="额度转出">
          <template slot-scope="scope">
            <span>{{scope.row.backendSubtractMoney | RMB}}</span>
          </template>
        </el-table-column>

        <!-- <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="showTip"  size="mini">相关操作</el-button>
          </template>
        </el-table-column> -->
      </el-table>
      <!-- 分页 -->
      <BasePagination
        @on-change="handlePaginationChange"
        :pageTotal="pageTotal"
        :requestParams="requestParams"
        httpURL="fetchFinanceSheet"
      />
    </div>
  </section>
</template>

<script>
import FilterArea from '@/components/others/FilterArea'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'LotteryUsersInfo',
  components: {
    FilterArea,
    BasePagination
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0,
      requestParams: {},
      value5: '',
      pickerOptions2: {
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
  created () {
    this.fetchFinanceSheet()
  },
  methods: {
    handleDatePickerChange (timeArray) {
      console.log(Date.parse(timeArray[0]))
      console.log(Date.parse(timeArray[1]))
      this.requestParams = {
        startInTime: String(Date.parse(timeArray[0])),
        endInTime: String(Date.parse(timeArray[1]))
      }
      this.fetchFinanceSheet()
    },
    showTip () {
      this.$message.warning('该功能正在开发中...')
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchFinanceSheet () {
      this.$httpAPI.fetchFinanceSheet({
        params: Object.assign({ pageNo: 1, pageSize: 10 }, this.requestParams)
      }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>

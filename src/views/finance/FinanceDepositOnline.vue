<template lang="html">
  <section class="deposit-online">
    <!-- 条件筛选 -->
    <FilterArea />
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

        <el-table-column prop="orderID" label="订单流水号" :width="170" />

        <el-table-column label="支付时间" :width="140">
          <template slot-scope="scope">
            <span>{{scope.row.payTime | time}}</span>
          </template>
        </el-table-column>

        <el-table-column label="支付类型">
          <template slot-scope="scope">
            <span>{{scope.row.payType | paymentType}}</span>
          </template>
        </el-table-column>

        <el-table-column label="支付金额">
          <template slot-scope="scope">
            <span>{{scope.row.payNum | RMB}}</span>
          </template>
        </el-table-column>

        <el-table-column label="订单状态">
          <template slot-scope="scope">
            <span>{{scope.row.selfStatus | paymentStatus}}</span>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <BasePagination @on-change="handlePaginationChange" :pageTotal="pageTotal" httpURL="fetchFinanceDepositOnline" />
    </div>
  </section>
</template>

<script>
import FilterArea from '@/components/others/FilterArea'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'FinanceDepositOnline',
  components: {
    FilterArea,
    BasePagination
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0
    }
  },
  created () {
    this.fetchFinanceDepositOnline()
  },
  methods: {
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchFinanceDepositOnline () {
      this.$httpAPI.fetchFinanceDepositOnline({ params: { pageNo: 1, pageSize: 10 } }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>

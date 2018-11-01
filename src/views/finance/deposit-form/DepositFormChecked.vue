<template lang="html">
  <section class="deposit-form-unchecked">
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

        <!-- <el-table-column prop="nickname" label="会员姓名" /> -->

        <el-table-column prop="groupNames" label="会员分组" />

        <el-table-column prop="unknown" label="存款单号" />
        <el-table-column prop="banlance" label="存款金额" />
        <el-table-column prop="unknown" label="优惠金额" />
        <el-table-column prop="unknown" label="存款时间" />
        <el-table-column prop="unknown" label="存款状态" />
        <el-table-column prop="unknown" label="存款类型" />
        <el-table-column prop="unknown" label="付款方信息" />
        <el-table-column prop="unknown" label="收款方信息" />

        <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" @click="showTip"  size="mini">相关操作</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <BasePagination @on-change="handlePaginationChange" :pageTotal="pageTotal" httpURL="nuknown" />
    </div>
  </section>
</template>

<script>
import FilterArea from '@/components/others/FilterArea'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'DepositFormUnchecked',
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
    this.fetchBalanceChangeList()
  },
  methods: {
    showTip () {
      this.$message.warning('该功能正在开发中...')
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchBalanceChangeList () {
      this.$httpAPI.fetchBalanceChangeList({ params: { pageNo: 1, pageSize: 10 } }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = response.data.amount
      }).catch(error => console.log(error))
    }
  }
}
</script>

<template lang="html">
  <el-table
    :data="data"
    :row-class-name="tableRowClassName"
    size="small"
    max-height="600"
    highlight-current-row
    border
  >
    <el-table-column type="index" :width="36" />

    <el-table-column prop="username" label="用户账号" />

    <el-table-column prop="orderID" label="订单流水号" :min-width="170" />

    <el-table-column label="支付类型">
      <template slot-scope="scope">
        <span>{{ scope.row.payType | paymentType }}</span>
      </template>
    </el-table-column>

    <el-table-column label="支付金额" align="right">
      <template slot-scope="scope">
        <span>{{ scope.row.payNum | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column label="支付时间" :min-width="140">
      <template slot-scope="scope">
        <span>{{ scope.row.payTime | time }}</span>
      </template>
    </el-table-column>

    <el-table-column label="订单状态">
      <template slot-scope="scope">
        <span>{{ scope.row.selfStatus | paymentStatus }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'DepositOnlineTable',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    tableRowClassName ({ row }) {
      if (row.selfStatus !== 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

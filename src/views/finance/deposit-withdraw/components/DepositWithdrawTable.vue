<template lang="html">
  <el-table
    :data="data"
    size="small"
    max-height="600"
    highlight-current-row
    stripe
    border
  >
    <el-table-column type="index" :width="36" />

    <el-table-column prop="username" label="会员账号" />

    <el-table-column label="支付类型">
      <template slot-scope="scope">
        <span>{{ scope.row.payType }}</span>
      </template>
    </el-table-column>

    <el-table-column label="支付金额" align="right">
      <template slot-scope="scope">
        <span>{{ scope.row.payNum | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="orderID" label="订单流水号" />

    <el-table-column label="支付时间">
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
  }
}
</script>

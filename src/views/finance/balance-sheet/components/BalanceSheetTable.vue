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

    <el-table-column label="会员余额" align="right" :min-width="120">
      <template slot-scope="scope">
        <span>{{ scope.row.banlance | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="rechargeAmount" label="存款次数" />

    <el-table-column label="存款金额" align="right">
      <template slot-scope="scope">
        <span>{{ scope.row.rechargeMoney | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="withdrawAmount" label="取款次数" />

    <el-table-column label="取款金额" align="right">
      <template slot-scope="scope">
        <span>{{ scope.row.withdrawMoney | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column label="额度转入" align="right">
      <template slot-scope="scope">
        <span>{{ scope.row.backendAddMoney | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column label="额度转出" align="right">
      <template slot-scope="scope">
        <span>{{ scope.row.backendSubtractMoney | RMB }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'BalanceSheetTable',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

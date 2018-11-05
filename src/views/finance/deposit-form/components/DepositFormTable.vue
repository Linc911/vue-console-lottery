<template lang="html">
  <el-table
    :data="data"
    size="small"
    highlight-current-row
    border
  >
    <el-table-column type="index" />

    <el-table-column prop="username" label="会员账号" />

    <el-table-column prop="nickname" label="会员昵称" />

    <el-table-column prop="gameName" label="账户类型" />

    <el-table-column prop="loanName" label="借贷类型" />

    <el-table-column label="调整方向">
      <template slot-scope="scope">
        <span>{{scope.row.type | depositDircetion}}</span>
      </template>
    </el-table-column>

    <el-table-column label="调整金额">
      <template slot-scope="scope">
        <span>{{scope.row.money | RMB}}</span>
      </template>
    </el-table-column>

    <el-table-column label="审核状态" :min-width="110">
      <template slot-scope="scope">
        <span>{{scope.row.status | depositStatus}}</span>
      </template>
    </el-table-column>

    <el-table-column prop="remark" label="备注" />

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          @click="showDialogAudit(scope.row)"
          type="primary"
        >{{scope.row.status | auditTransfer}}</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'DepositFormTable',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    showDialogAudit (payload) {
      this.$emit('on-show', payload)
    }
  }
}
</script>

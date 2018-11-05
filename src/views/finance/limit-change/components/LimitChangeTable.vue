<template lang="html">
  <el-table
    :data="data"
    size="small"
    highlight-current-row
    border
  >
    <el-table-column type="index" />

    <el-table-column prop="username" label="会员账号" />

    <el-table-column prop="targetName" label="账户类型" />

    <el-table-column label="转换金额">
      <template slot-scope="scope">
        <span>{{scope.row.money | RMB}}</span>
      </template>
    </el-table-column>

    <el-table-column label="转换前金额">
      <template slot-scope="scope">
        <span>{{scope.row.beforeMoney | RMB}}</span>
      </template>
    </el-table-column>

    <el-table-column label="转换后金额">
      <template slot-scope="scope">
        <span>{{scope.row.afterMoney | RMB}}</span>
      </template>
    </el-table-column>

    <el-table-column label="审核状态" :min-width="100">
      <template slot-scope="scope">
        <span>{{scope.row.status | depositStatus}}</span>
      </template>
    </el-table-column>

    <el-table-column prop="remark" label="备注" />

    <el-table-column prop="operations" label="操作">
      <template slot-scope="scope">
        <el-button
          @click="showDialog(scope.row)"
          type="primary"
          size="mini"
        >{{scope.row.status | auditTransfer}}</el-button>
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
    showDialog (payload) {
      this.$emit('on-show', payload)
    }
  }
}
</script>

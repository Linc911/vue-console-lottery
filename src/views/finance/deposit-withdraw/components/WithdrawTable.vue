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

    <el-table-column prop="orderId" label="申请单号" :min-width="140" />

    <el-table-column label="申请时间" :min-width="140">
      <template slot-scope="scope">
        <span>{{scope.row.applyTime | time}}</span>
      </template>
    </el-table-column>

    <el-table-column prop="username" label="会员账号" />

    <el-table-column label="取款金额">
      <template slot-scope="scope">
        <span>{{scope.row.money | RMB}}</span>
      </template>
    </el-table-column>

    <el-table-column label="审批状态" :width="120">
      <template slot-scope="scope">
        <span>{{scope.row.status | auditStatus}}</span>
      </template>
    </el-table-column>

    <el-table-column prop="remark" label="备注" />

    <el-table-column prop="operations" label="操作">
      <template slot-scope="scope">
        <el-button @click="showDialog(scope.row)" type="primary" size="mini">
          {{ scope.row.status | auditTransfer }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'WithdrawApplyTable',
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

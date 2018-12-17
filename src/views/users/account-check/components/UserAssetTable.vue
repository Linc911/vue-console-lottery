<template lang="html">
  <el-table
    :data="data"
    size="small"
    highlight-current-row
    border
  >
    <el-table-column type="index" />

    <el-table-column label="创建时间" :width="140">
      <template slot-scope="scope">
        <span>{{scope.row.createTime | time}}</span>
      </template>
    </el-table-column>

    <el-table-column prop="createUsername" label="汇款人账号" />

    <el-table-column prop="bankUsername" label="支付户名" />

    <el-table-column prop="configPayTypeName" label="支付方式" />

    <el-table-column label="汇款金额">
      <template slot-scope="scope">
        <span>{{scope.row.remitMoney | RMB}}</span>
      </template>
    </el-table-column>

    <el-table-column prop="bankAccount" label="银行账户" />

    <el-table-column prop="bankName" label="银行名称" />

    <el-table-column prop="bankAddress" label="银行地址" />

    <!-- <el-table-column label="审核状态" :min-width="110">
      <template slot-scope="scope">
        <span>{{scope.row.status | depositStatus}}</span>
      </template>
    </el-table-column> -->

    <el-table-column prop="remark" label="备注" />

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          @click="showDialogAudit(scope.row)"
          type="primary"
          size="mini"
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

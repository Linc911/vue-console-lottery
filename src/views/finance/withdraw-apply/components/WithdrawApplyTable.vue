<template lang="html">
  <div>
    <el-table
      :data="data"
      :row-class-name="tableRowClassName"
      size="small"
      max-height="600"
      highlight-current-row
      border
    >
     <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="用户账号" :min-width="100" />

      <el-table-column prop="orderId" label="申请单号" :min-width="140" />

      <el-table-column label="申请时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.applyTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="提款金额" align="right" :min-width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column label="审批状态" :min-width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.status | auditStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" :min-width="120" />

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogWithdraw')" type="primary" size="mini">
            {{ scope.row.status | auditTransfer }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 审核弹框 -->
    <WithdrawApplyDialogAudit
      @on-success="$emit('on-changed')"
      :data="activeItem"
      ref="dialogWithdraw"
    />

  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import WithdrawApplyDialogAudit from './WithdrawApplyDialogAudit'

export default {
  name: 'WithdrawApplyTable',
  components: {
    WithdrawApplyDialogAudit
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: {}
    }
  },
  methods: {
    tableRowClassName ({ row }) {
      if (row.status === 2) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

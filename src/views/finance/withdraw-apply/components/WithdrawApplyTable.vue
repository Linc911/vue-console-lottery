<template lang="html">
  <div>
    <el-table
      :data="data"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" />

      <el-table-column prop="username" label="用户账号" />

      <el-table-column prop="orderId" label="申请单号" :min-width="140" />

      <el-table-column label="申请时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.applyTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="提款金额">
        <template slot-scope="scope">
          <span>{{ scope.row.money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column label="审批状态" :width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.status | auditStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" />

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogWithdraw')" type="primary" size="mini">
            {{ scope.row.status | auditTransfer }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 审核弹框 -->
    <WithdrawApplyDialog
      @on-success="$emit('on-changed')"
      :data="activeItem"
      ref="dialogWithdraw"
    />

  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import WithdrawApplyDialog from './WithdrawApplyDialog'

export default {
  name: 'WithdrawApplyTable',
  components: {
    WithdrawApplyDialog
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: {}
    }
  }
}
</script>

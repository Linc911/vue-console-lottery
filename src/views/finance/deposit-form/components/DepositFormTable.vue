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
      <el-table-column type="index" />

      <el-table-column prop="createUsername" label="汇款账号" />

      <el-table-column prop="bankUsername" label="支付户名" />

      <el-table-column prop="configPayTypeName" label="支付方式" />

      <el-table-column label="汇款金额" :min-width="100" align="right" sortable>
        <template slot-scope="scope">
          <span>{{ scope.row.remitMoney | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="bankAccount" label="银行账户" />

      <el-table-column prop="bankName" label="银行名称" />

      <el-table-column prop="bankAddress" label="银行地址" />

      <el-table-column label="汇款时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" />

      <el-table-column label="审批状态" :min-width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.status | auditStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="showDialog(scope.row, 'dialogDeposit')"
            type="primary"
            size="mini"
          >{{ scope.row.status | auditTransfer }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 审核弹框 -->
    <DepositFormDialogAudit
      @on-success="$emit('on-changed')"
      :data="activeItem"
      ref="dialogDeposit"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import DepositFormDialogAudit from './DepositFormDialogAudit'

export default {
  name: 'DepositFormTable',
  components: {
    DepositFormDialogAudit
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

<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column label="创建时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="username" label="用户账号" />

      <el-table-column prop="gameName" label="账户类型" />

      <el-table-column prop="loanName" label="借贷类型" />

      <el-table-column label="调整方向">
        <template slot-scope="scope">
          <span>{{ scope.row.type | depositDircetion }}</span>
        </template>
      </el-table-column>

      <el-table-column label="调整金额">
        <template slot-scope="scope">
          <span>{{ scope.row.money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column label="审核状态" :min-width="110">
        <template slot-scope="scope">
          <span>{{ scope.row.status | depositStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" />

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="showDialogAudit(scope.row)"
            type="primary"
            size="mini"
          >{{ scope.row.status | auditTransfer }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 审核弹框 -->
    <BalanceManipulationDialogAudit
      @on-success="$emit('on-changed')"
      :data="activeItem"
      ref="dialogAudit"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BalanceManipulationDialogAudit from './BalanceManipulationDialogAudit'

export default {
  name: 'BalanceManipulationDialogAudit',
  components: {
    BalanceManipulationDialogAudit
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: {}
    }
  }
}
</script>

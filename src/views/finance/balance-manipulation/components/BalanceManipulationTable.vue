<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="用户账号" :min-width="100" />

      <el-table-column prop="gameName" label="账户类型" />

      <el-table-column prop="loanName" label="借贷类型" :min-width="100" />

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

      <el-table-column label="创建时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="审核状态">
        <template slot-scope="scope">
          <span>{{ scope.row.status | depositStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" :min-width="120" />

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="showDialog(scope.row, 'audit')"
            type="primary"
            size="mini"
          >{{ scope.row.status | auditTransfer }}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 审核弹框 -->
    <DialogAudit
      @on-success="$emit('on-changed')"
      :data="activeItem"
      ref="audit"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import DialogAudit from './DialogAudit'

export default {
  name: 'Audit',
  components: {
    DialogAudit
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: {}
    }
  }
}
</script>

<template lang="html">
  <div>
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

      <el-table-column label="创建时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column label="转换金额" align="right">
        <template slot-scope="scope">
          <span>{{ scope.row.money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="sourceName" label="源头账户" />

      <el-table-column label="源头转换前金额" align="right">
        <template slot-scope="scope">
          <span>{{ scope.row.sourceBefore | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column label="源头转换后金额" align="right">
        <template slot-scope="scope">
          <span>{{ scope.row.sourceAfter | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="targetName" label="目标账户" />

      <el-table-column label="目标转换前金额" align="right">
        <template slot-scope="scope">
          <span>{{  scope.row.targetBefore | RMB  }}</span>
        </template>
      </el-table-column>

      <el-table-column label="目标转换后金额" align="right">
        <template slot-scope="scope">
          <span>{{  scope.row.targerAfter | RMB  }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

export default {
  name: 'LimitationTransferTable',
  mixins: [ tableComponentMixin ]
}
</script>

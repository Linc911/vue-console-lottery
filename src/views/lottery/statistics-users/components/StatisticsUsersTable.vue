<template lang="html">
  <el-table :data="data" size="small" highlight-current-row border>

    <el-table-column type="index" :width="36" />

    <el-table-column prop="username" label="会员账户" />

    <el-table-column prop="nickname" label="会员昵称" />

    <el-table-column prop="gameName" label="游戏名称" />

    <el-table-column prop="totalBets" label="注单数量" />

    <el-table-column prop="totalAmount" label="注单金额">
      <template slot-scope="scope">
        <span>{{ scope.row.totalAmount | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="unsettled" label="未结算金额">
      <template slot-scope="scope">
        <span>{{ scope.row.unsettled | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="totalAwardAmount" label="输赢金额">
      <template slot-scope="scope">
        <span>{{ scope.row.totalAwardAmount | RMB }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

export default {
  name: 'StatisctisUsersTable',
  mixins: [ tableComponentMixin ]
}
</script>

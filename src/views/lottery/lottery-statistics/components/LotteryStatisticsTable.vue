<template lang="html">
  <el-table :data="data" size="small" max-height="640" highlight-current-row border>

    <el-table-column type="index" :width="36" />

    <el-table-column prop="gameName" label="游戏名称" />

    <el-table-column prop="totalBets" label="注单数量" />

    <el-table-column prop="totalAmount" label="注单金额">
      <template slot-scope="scope">
        <span>{{ scope.row.totalAmount | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="validBet" label="有效投注金额">
      <template slot-scope="scope">
        <span>{{ scope.row.validBet | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="awardAmount" label="派彩金额">
      <template slot-scope="scope">
        <span>{{ scope.row.awardAmount | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="totalAwardAmount" label="平台输赢金额" sortable>
      <template slot-scope="scope">
        <span>{{ scope.row.totalAwardAmount | RMB }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

export default {
  name: 'LotteryStatisctisTable',
  mixins: [ tableComponentMixin ]
}
</script>

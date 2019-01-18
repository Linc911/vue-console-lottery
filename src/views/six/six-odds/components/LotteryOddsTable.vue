<template lang="html">
  <div v-if="data.length">
    <el-table :data="data" size="small" :max-height="590" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="gameName" label="彩票类型" :min-width="100" />

      <el-table-column prop="name" label="类型名称" :min-width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <!-- 部分玩法有两种赔率 -->
      <div v-if="data[0].odds2">
        <el-table-column prop="odds1" label="赔率1" />
        <el-table-column prop="odds2" label="赔率2" />
      </div>
      <div v-else>
        <el-table-column prop="odds1" label="赔率" />
      </div>

      <el-table-column prop="rebate" label="返水比例%" />

      <el-table-column prop="sort" label="排列顺序" />

      <el-table-column prop="remark" label="备注" :min-width="120" />

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button
            @click="showDialog(scope.row, 'dialogUpdate')"
            type="primary"
            icon="el-icon-edit"
            size="mini"
          />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改弹框 -->
    <LotteryOddsDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseDice from '@/components/base/BaseDice'
import LotteryOddsDialogUpdate from './LotteryOddsDialogUpdate'

export default {
  name: 'ResultsElevenTable',
  components: {
    BaseDice,
    LotteryOddsDialogUpdate
  },
  mixins: [ tableComponentMixin ]
}
</script>

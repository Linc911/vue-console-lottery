<template lang="html">
  <div>
    <el-table :data="data" size="small" :max-height="590" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="gameName" label="彩票类型" :min-width="100" />

      <el-table-column prop="name" label="类型名称" :min-width="120">
        <template slot-scope="scope">
          <span v-if="scope.row.remark.includes('三军')">
            <BaseDice :number="Number(scope.row.name)" />
          </span>
          <span v-else-if="scope.row.remark.match(/围骰\/全骰_\d+|长牌|短牌/)">
            <template v-for="(item, index) in scope.row.name.split('')">
              <BaseDice :number="Number(item)" :key="index" />
            </template>
          </span>
          <span v-else>{{ scope.row.name }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="odds1" label="赔率" />

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

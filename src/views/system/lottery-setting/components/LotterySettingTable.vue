<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="游戏名称" />

      <el-table-column prop="startTime" label="开始时间">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime | sortTime }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="endTime" label="结束时间">
        <template slot-scope="scope">
          <span>{{ scope.row.endTime | sortTime }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="intervalTime" label="相隔时间">
        <template slot-scope="scope">
          <span>{{ scope.row.intervalTime | sortTime }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="url" label="开奖结果地址" :min-width="160" />

      <el-table-column prop="crontab" label="开奖结果定时器crontab表达式" :min-width="105" />

      <el-table-column prop="myCrontab" label="系统封盘定时器crontab表达式" :min-width="105" />

      <el-table-column prop="sort" label="排序" :min-width="45" />

      <el-table-column prop="status" label="启用状态" :min-width="70">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="Boolean(scope.row.status)"
            :payload="{ id: scope.row.id }"
          />
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作" :min-width="90">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改弹框 -->
    <LotterySettingDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />
    <!-- 删除弹框 -->
    <LotterySettingDialogDetail :data="activeItem" ref="dialogDetail" />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import LotterySettingDialogUpdate from './LotterySettingDialogUpdate'
import LotterySettingDialogDetail from './LotterySettingDialogDetail'

export default {
  components: {
    LotterySettingDialogUpdate,
    LotterySettingDialogDetail
  },
  name: 'LotterySettingTable',
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      activeItem: {},
      switchObj: {
        API: 'updateLotterySettingItem',
        attrId: 'id',
        attrValue: 'status'
      }
    }
  }
}
</script>

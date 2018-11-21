<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>

      <el-table-column type="index" :width="40" />

      <el-table-column prop="name" label="返水计划名称" :min-width="120" />

      <el-table-column prop="username" label="用户账号" />

      <el-table-column prop="rebateBegin" label="开始时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.rebateBegin | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="rebateEnd" label="结束时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.rebateEnd | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="rebateDate" label="返水日期" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.rebateDate | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="rebateTypeDesc" label="返水类型" />

      <el-table-column prop="gameTypeDesc" label="返水账户" />

      <el-table-column prop="rebateMoney" label="返水金额">
        <template slot-scope="scope">
          <span>{{ scope.row.rebateMoney | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="rebateStatus" label="返水状态">
        <template slot-scope="scope">
          <span>{{ scope.row.rebateStatus | rebateStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 详情弹框 -->
    <RebateListDialogDetail :data="activeItem" ref="dialogDetail" />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import RebateListDialogDetail from './RebateListDialogDetail'

export default {
  name: 'RebateListTable',
  components: {
    RebateListDialogDetail
  },
  mixins: [ tableComponentMixin ]
}
</script>

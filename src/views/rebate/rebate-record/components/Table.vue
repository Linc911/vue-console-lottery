<template lang="html">
  <div>
    <LayoutTablePlain :tableData="data">
      <el-table-column type="index" :width="36" />

      <el-table-column prop="rebateName" label="返水计划名称" :min-width="120" />

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

      <el-table-column prop="gameTypeDesc" label="返水账户" />

      <el-table-column prop="rebateMoney" label="返水金额" align="right">
        <template slot-scope="scope">
          <span>{{ scope.row.rebateMoney | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="validBetting" label="投注金额" align="right">
        <template slot-scope="scope">
          <span>{{ scope.row.validBetting | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="rebateStatus" label="返水状态">
        <template slot-scope="scope">
          <span>{{ scope.row.rebateStatus | rebateStatus }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <ButtonOperationPreview @click.native="showDialog(scope.row, 'dialogDetail')" />
        </template>
      </el-table-column>
    </LayoutTablePlain>

    <!-- 详情弹框 -->
    <DialogDetail :data="activeItem" ref="dialogDetail" />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import DialogDetail from './DialogDetail'

export default {
  name: 'RebateRecordTable',
  components: {
    DialogDetail
  },
  mixins: [ tableComponentMixin ]
}
</script>

<template lang="html">
  <div>
    <LayoutTablePlain :tableData="data">

      <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="代理账户" />

      <el-table-column prop="parentUsername" label="上级代理" />

      <el-table-column prop="depositMoney" label="充值金额" align="right" :win-width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.depositMoney | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type0Money" label="取款金额" align="right" :win-width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.type0Money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="win" label="输赢" align="right" :win-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.win | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="createTime" label="创建时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作" :width="240">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogSublevel')" type="primary" size="mini">直属下级</el-button>
          <el-button @click="showDialog(scope.row, 'dialogSuplevel')" type="primary" size="mini">变更上级</el-button>
          <el-button @click="showDialog(scope.row, 'dialogInterest')" type="primary" size="mini">修改分润</el-button>
        </template>
      </el-table-column>
    </LayoutTablePlain>

    <!-- 下级弹框 -->
    <DialogSublevelList :id="activeItem.id" ref="dialogSublevel" />

    <!-- 上级弹框 -->
    <DialogSuplevelUpdate @on-changed="$emit('on-changed')" :childId="activeItem.id" ref="dialogSuplevel" />

    <!-- 分润弹框 -->
    <DialogInterestUpdate @on-changed="$emit('on-changed')" :id="activeItem.id" ref="dialogInterest" />

  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import DialogSublevelList from './DialogSublevelList'
import DialogSuplevelUpdate from './DialogSuplevelUpdate'
import DialogInterestUpdate from './DialogInterestUpdate'

export default {
  name: 'AccountListTable',
  components: {
    DialogSublevelList,
    DialogSuplevelUpdate,
    DialogInterestUpdate
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: { id: '' }
    }
  }
}
</script>

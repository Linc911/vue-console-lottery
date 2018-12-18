<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="会员账号" />

      <el-table-column prop="orderId" label="订单号" :min-width="140" />

      <el-table-column prop="discount" label="优惠%" />

      <el-table-column prop="poundage" label="手续费">
        <template slot-scope="scope">
          <span>{{ scope.row.poundage | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="money" label="金额">
        <template slot-scope="scope">
          <span>{{ scope.row.money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="before" label="改变前金额">
        <template slot-scope="scope">
          <span>{{ scope.row.before | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="after" label="改变后金额">
        <template slot-scope="scope">
          <span>{{ scope.row.after | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type" label="类型">
        <template slot-scope="scope">
          <span>{{ scope.row.type | typeFilter }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="处理状态">
        <template slot-scope="scope">
          <span>{{ scope.row.status | statusFilter }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" />

      <el-table-column prop="operations" label="操作" :min-width="90">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />

          <el-button @click="showDialog(scope.row, 'dialogRetrieve')" type="primary" icon="el-icon-sold-out" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 详情弹框 -->
    <UserAssetDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 回收弹框 -->
    <UserAssetDialogRetrieve @on-status-changed="$emit('on-status-changed')" :data="activeItem" ref="dialogRetrieve" />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import UserAssetDialogDetail from './UserAssetDialogDetail'
import UserAssetDialogRetrieve from './UserAssetDialogRetrieve'

export default {
  name: 'UsersAssetTable',
  components: {
    UserAssetDialogDetail,
    UserAssetDialogRetrieve
  },
  filters: {
    typeFilter (value) {
      switch (value) {
        case 0:
          return '提款'
        case 1:
          return '在线存款'
        case 2:
          return '填单存款'
        case 3:
          return '优惠'
        case 4:
          return '返水'
        case 5:
          return '派送'
        case 6:
          return '红包转入'
        case 7:
          return '红包转出'
        case 8:
          return '分润'
        case 9:
          return '人工加款'
        case 10:
          return '人工减款'
        default:
          return '其他'
      }
    },
    statusFilter (value) {
      switch (value) {
        case 0:
          return '待处理'
        case 1:
          return '成功'
        case 2:
          return '失败'
        case 3:
          return '回收'
        default:
          return '其他'
      }
    }
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: {}
    }
  }
}
</script>

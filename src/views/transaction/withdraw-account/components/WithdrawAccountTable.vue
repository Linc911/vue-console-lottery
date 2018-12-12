<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="类型名称" :min-width="140" />

      <el-table-column prop="status" label="启用状态" :min-width="70">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="!Boolean(scope.row.status)"
            :payload="{ id: scope.row.dictionaryId }"
            opposite
          />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排序" :min-width="45" />

      <el-table-column prop="remarks" label="备注" :min-width="160" />

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />

          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />

          <el-button
            @click="showDialog(scope.row, 'dialogDelete')"
            type="warning"
            icon="el-icon-delete"
            size="mini"
          />
        </template>
      </el-table-column>
    </el-table>

    <!-- 详情弹框 -->
    <WithdrawAccountDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <WithdrawAccountDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="类型名称"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import BaseSwitch from '@/components/base/BaseSwitch'
import WithdrawAccountDialogDetail from './WithdrawAccountDialogDetail'
import WithdrawAccountDialogUpdate from './WithdrawAccountDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'WithdrawAccountTable',
  components: {
    BaseSwitch,
    WithdrawAccountDialogDetail,
    WithdrawAccountDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteTransactionWithdrawAccountItem',
      deleteAttrName: 'id',
      switchObj: {
        API: 'updateTransactionWithdrawAccountItem',
        attrId: 'dictionaryId',
        attrValue: 'status'
      },
      activeItem: { name: '' }
    }
  }
}
</script>

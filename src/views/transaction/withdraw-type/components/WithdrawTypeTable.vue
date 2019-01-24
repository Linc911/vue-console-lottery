<template lang="html">
  <div>
    <el-table :data="data" size="small" max-height="600" highlight-current-row stripe border>
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

      <el-table-column prop="remark" label="备注" :min-width="160" />

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <div>
            <el-button
              @click="showDialog(scope.row, 'dialogDetail')"
              type="primary"
              icon="el-icon-view"
              size="mini"
            />

            <el-button
              @click="showDialog(scope.row, 'dialogUpdate')"
              type="primary"
              icon="el-icon-edit"
              size="mini"
            />

            <el-button
              @click="showDialog(scope.row, 'dialogDelete')"
              type="warning"
              icon="el-icon-delete"
              size="mini"
            />
          </div>
        </template>
      </el-table-column>
    </el-table>

    <!-- 详情弹框 -->
    <WithdrawTypeDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <WithdrawTypeDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />

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
import WithdrawTypeDialogDetail from './WithdrawTypeDialogDetail'
import WithdrawTypeDialogUpdate from './WithdrawTypeDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'WithdrawTypeTable',
  components: {
    BaseSwitch,
    WithdrawTypeDialogDetail,
    WithdrawTypeDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteWithdrawAccountTypeItem',
      deleteAttrName: 'dictionaryId',
      deleteId: 'dictionaryId',
      switchObj: {
        API: 'updateWithdrawAccountTypeItem',
        attrId: 'dictionaryId',
        attrValue: 'status'
      },
      activeItem: { name: '' }
    }
  }
}
</script>

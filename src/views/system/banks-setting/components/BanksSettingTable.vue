<template lang="html">
  <div>
    <el-table
      :data="data"
      size="small"
      max-height="600"
      highlight-current-row
      stripe
      border
    >
      <el-table-column type="index" :width="36" />

      <el-table-column prop="areaName" label="所属地区" />

      <el-table-column prop="name" label="银行名称" />

      <el-table-column prop="amount" label="下级银行数量" />

      <el-table-column prop="status" label="启用状态">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="!scope.row.status"
            :payload="{ id: scope.row.id }"
          />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排序" />

      <el-table-column prop="remark" label="备注" />

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <div>
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

    <!-- 修改弹框 -->
    <BanksSettingDialogUpdate
      @on-updated="$emit('on-changed')"
      :data="activeItem"
      ref="dialogUpdate"
    />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="银行名称"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import BanksSettingDialogUpdate from './BanksSettingDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'BanksSettingTable',
  components: {
    BanksSettingDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteSystemBanksItem',
      deleteAttrName: 'bankConfigId',
      deleteId: 'bankConfigId',
      switchObj: {
        API: 'updateSystemUsersItem',
        attrId: 'id',
        attrValue: 'enabled'
      },
      activeItem: { name: '' }
    }
  }
}
</script>

<template lang="html">
  <div>
    <el-table :data="data" size="small" :max-height="590" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="id" label="ID" :min-width="40" />

      <el-table-column prop="name" label="权限名称" />

      <el-table-column prop="permission" label="权限标识" />

      <el-table-column prop="createTime" label="创建时间" >
        <template slot-scope="scope">
          <span>{{scope.row.createTime | time}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="updateTime" label="创建时间" >
        <template slot-scope="scope">
          <span>{{scope.row.updateTime | time}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作" :min-width="90">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogDelete')" type="warning" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改弹框 -->
    <PermissionsSettingDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirmAnother"
      :name="activeItem.name"
      title="权限名称"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import PermissionsSettingDialogUpdate from './PermissionsSettingDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'PermissionsSettingTable',
  components: {
    PermissionsSettingDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: { name: '' },
      deleteHttpAPI: 'deleteRebateSettingItem',
      deleteAttrName: 'groupId',
      deleteId: 'groupId'
    }
  },
  methods: {
    handleDeleteConfirmAnother () {
      this.$refs.dialogDelete.toggleDialogVisible(false) // 隐藏弹框

      this.$axios.delete('/api-u/permissions/' + this.activeItem.id).then(() => {
        this.$emit('on-deleted')
        this.$message.success('删除权限成功！')
      }).catch(() => this.$message.error('删除权限失败！'))
    }
  }
}
</script>

<template lang="html">
  <div>
    <el-table :data="data" size="small" max-height="590" highlight-current-row stripe border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="分组名称" />

      <el-table-column prop="groupId" label="分组ID" :min-width="150" />

      <el-table-column prop="remark" label="备注" :min-width="150" />

      <el-table-column prop="operations" label="操作" :min-width="90">
        <!-- 默认分组不能编辑和删除 -->
        <template v-if="scope.row.groupId" slot-scope="scope">
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
    <GroupSettingDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      :name="activeItem.name"
      title="分组名称"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import GroupSettingDialogUpdate from './GroupSettingDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'GroupSettingTable',
  components: {
    GroupSettingDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: { name: '' },
      deleteHttpAPI: 'deleteSystemGroupItem',
      deleteAttrName: 'groupId',
      deleteId: 'groupId'
    }
  }
}
</script>

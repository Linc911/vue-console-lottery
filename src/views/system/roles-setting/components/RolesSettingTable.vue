<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="code" label="角色编码" :min-width="100" />

      <el-table-column prop="name" label="角色名称" :min-width="120" />

      <el-table-column prop="createTime" label="创建时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="updateTime" label="最新修改时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作" :width="240">
        <template slot-scope="scope">
          <el-button
            @click="showDialog(scope.row, 'dialogUpdate')"
            type="primary"
            icon="el-icon-edit"
            size="mini"
          />

          <el-button
            @click="showDialog(scope.row, 'dialogPermissions')"
            type="primary"
            size="mini"
          >分配权限</el-button>

          <el-button
            @click="showDialog(scope.row, 'dialogMenu')"
            type="primary"
            size="mini"
          >分配菜单</el-button>

          <el-button
            @click="showDialog(scope.row, 'dialogDelete')"
            type="warning"
            icon="el-icon-delete"
            size="mini"
          />
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改弹框 -->
    <RolesSettingDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />

    <!-- 权限弹框 -->
    <RolesSettingDialogPermissions
      @on-permissions-changed="$emit('on-permissions-changed')"
      :id="activeItem.id"
      ref="dialogPermissions"
    />

    <!-- 菜单弹框 -->
    <RolesSettingDialogMenu
      @on-menu-changed="$emit('on-permissions-changed')"
      :id="activeItem.id"
      ref="dialogMenu"
    />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="角色名称"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import RolesSettingDialogUpdate from './RolesSettingDialogUpdate'
import RolesSettingDialogPermissions from './RolesSettingDialogPermissions'
import RolesSettingDialogMenu from './RolesSettingDialogMenu'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'RolesSettingTable',
  components: {
    RolesSettingDialogUpdate,
    RolesSettingDialogPermissions,
    RolesSettingDialogMenu,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteSystemRolesItem',
      deleteAttrName: 'id',
      activeItem: { name: '' }
    }
  }
}
</script>

<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="用户账户" :min-width="140" />

      <el-table-column prop="nickname" label="用户昵称" :min-width="120" />

      <el-table-column prop="realname" label="真实姓名" :min-width="100" />

      <el-table-column prop="sex" label="性别" :min-width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.sex | gender }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="phone" label="手机号码" :min-width="105">
        <template slot-scope="scope">
          <span>{{ scope.row.phone | phoneFormat }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="roleNames" label="角色类型" :min-width="120">
        <template slot-scope="scope">
          <div>
            <span>{{ scope.row.roleNames | separator('&nbsp;&nbsp;') }}</span>
            <BaseIcon
              @on-click="showDialog(scope.row, 'dialogRole')"
              icon="el-icon-edit"
              class="pull-right"
            />
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="enabled" label="启用状态" :width="70">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="scope.row.enabled"
            :payload="{ id: scope.row.id }"
          />
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogDelete')" type="warning" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 角色弹框 -->
    <UsersSettingDialogRole @on-changed="$emit('on-changed')" :data="activeItem" ref="dialogRole" />

    <!-- 详情弹框 -->
    <UsersSettingDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <UsersSettingDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="用户账户"
      :name="activeItem.username"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import BaseIcon from '@/components/base/BaseIcon'
import BaseIndicator from '@/components/base/BaseIndicator'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'
import UsersSettingDialogRole from './UsersSettingDialogRole'
import UsersSettingDialogDetail from './UsersSettingDialogDetail'
import UsersSettingDialogUpdate from './UsersSettingDialogUpdate'

export default {
  name: 'UsersSettingTable',
  components: {
    BaseIcon,
    BaseIndicator,
    UsersSettingDialogRole,
    UsersSettingDialogDetail,
    UsersSettingDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      activeItem: { username: '' },
      deleteHttpAPI: 'deleteSystemUsersItem',
      deleteAttrName: 'id',
      deleteId: 'idStr',
      switchObj: {
        API: 'updateSystemUsersItem',
        attrId: 'id',
        attrValue: 'enabled'
      }
    }
  }
}
</script>

<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="createTime" label="创建时间" :width="90">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | date }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="username" label="用户账户" />

      <el-table-column prop="nickname" label="用户昵称" />

      <el-table-column prop="realname" label="真实姓名" />

      <el-table-column prop="sex" label="性别" :width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.sex | gender }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="phone" label="手机号码" :width="105">
        <template slot-scope="scope">
          <span>{{ scope.row.phone | phoneFormat }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="email" label="邮箱地址" />

      <el-table-column prop="type" label="类型" :width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.type | userType }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="banlance" label="账户余额" :min-width="120">
        <template slot-scope="scope">
          <span>{{scope.row.banlance | RMB}}</span>
        </template>
      </el-table-column>

      <el-table-column prop="control" label="监控状态" :width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.control" opposite />
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

    <!-- 修改弹框 -->
    <UsersSettingDialogDetail :data="activeItem" ref="dialogDetail" />
    <!-- 修改弹框 -->
    <UsersSettingDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />
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

import BaseIndicator from '@/components/base/BaseIndicator'
import UsersSettingDialogDetail from './UsersSettingDialogDetail'
import UsersSettingDialogUpdate from './UsersSettingDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'RebateSettingTable',
  components: {
    BaseIndicator,
    UsersSettingDialogDetail,
    UsersSettingDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteRebateSettingItem',
      deleteAttrName: 'rebateId',
      switchObj: {
        API: 'updateSystemUsersItem',
        attrId: 'id',
        attrValue: 'enabled'
      },
      activeItem: { username: '' }
    }
  }
}
</script>

<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="代理账号" />

      <!-- <el-table-column prop="nickname" label="代理姓名" /> -->

      <el-table-column prop="unknown" label="代理级别" />

      <el-table-column prop="unknown" label="下级会员数" />
      <el-table-column prop="unknown" label="下级代理数" />
      <el-table-column prop="unknown" label="会员投注笔数" />
      <el-table-column prop="unknown" label="会员投注" />
      <el-table-column prop="unknown" label="会员游戏投注" />
      <el-table-column prop="unknown" label="会员总余额" />
      <el-table-column prop="unknown" label="会员总优惠" />
      <el-table-column prop="unknown" label="会员总存款" />
      <el-table-column prop="unknown" label="会员总取款" />
      <el-table-column prop="unknown" label="会员总返水" />
      <el-table-column prop="unknown" label="会员总分润" />
      <el-table-column prop="unknown" label="代理分润" />
      <el-table-column prop="unknown" label="会员总输赢" />

      <el-table-column prop="createTime" label="创建时间" :width="90">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | date }}</span>
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

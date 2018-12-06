<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="title" label="活动标题" />

      <el-table-column prop="content" label="活动内容" />

      <el-table-column prop="introduce" label="活动简介" />

      <el-table-column prop="applyMode" label="申请方式" />

      <el-table-column prop="activityBylaws" label="活动细则" />

      <el-table-column prop="activityClause" label="活动条款" />

      <el-table-column prop="startTime" label="开始时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="endTime" label="结束时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.endTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="coverImg" label="封面图片" />

      <el-table-column prop="activityImg" label="活动内容图片" />

      <el-table-column prop="pc" label="是否电脑段" :width="60">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.pc" />
        </template>
      </el-table-column>

      <el-table-column prop="phone" label="是否电脑段" :width="60">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.phone" />
        </template>
      </el-table-column>

      <el-table-column prop="status" label="启用状态" :width="70">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="scope.row.status"
            :payload="{ id: scope.row.id }"
          />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排序" />

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
  name: 'UsersSettingTable',
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

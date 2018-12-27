<template lang="html">
  <div class="table-container">
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="会员账号" :min-width="100" />

      <el-table-column label="分组" :width="120">
        <template slot-scope="scope">
          <div>
            <span>{{ scope.row.groupNames }}</span>
            <BaseIcon
              @on-click="showDialog(scope.row, 'dialogGroup')"
              icon="el-icon-edit"
              class="pull-right"
            />
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="relation" label="邀请码" />

      <el-table-column label="会员余额" :min-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.banlance | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="win" label="输赢" :min-width="100">
        <template slot-scope="scope">
          <span>{{ scope.row.win | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="agent" label="代理状态" :width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.agent"/>
        </template>
      </el-table-column>

      <el-table-column prop="recharge" label="充值状态" :width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.recharge"/>
        </template>
      </el-table-column>

      <el-table-column prop="control" label="监控状态" :width="70">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="Boolean(scope.row.control)"
            :payload="{ id: scope.row.id }"
          />
        </template>
      </el-table-column>

      <el-table-column prop="enable" label="账号状态" :width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.enabled ? '正常': '异常' }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" :min-width="275">
        <template slot-scope="scope">
          <el-button
            @click="showDialog(scope.row, 'dialogDetail')"
            type="primary"
            icon="el-icon-view"
            size="mini"
          />

          <el-button
            @click="$router.push(`/users/${scope.row.id}/bets?user=${scope.row.username}`)"
            type="primary"
            size="mini"
          >注单详情</el-button>

          <el-button
            @click="$router.push(`/users/${scope.row.id}/httpLogs`)"
            type="primary"
            size="mini"
          >日志详情</el-button>

          <UserRebateSetting :userId="String(scope.row.id)" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 详情弹框 -->
    <UsersListDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <DialogGroupSetting :user="activeItem" @on-group-changed="$emit('on-changed')" ref="dialogGroup" />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import BaseIcon from '@/components/base/BaseIcon'
import BaseIndicator from '@/components/base/BaseIndicator'
import DialogGroupSetting from './DialogGroupSetting'
import UserRebateSetting from './UserRebateSetting'
import UsersListDialogDetail from './UsersListDialogDetail'

export default {
  name: 'UsersListTable',
  components: {
    BaseIcon,
    BaseIndicator,
    DialogGroupSetting,
    UserRebateSetting,
    UsersListDialogDetail
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      activeItem: {},
      switchObj: {
        API: 'updateUserListStatus',
        attrId: 'userId',
        attrValue: 'control'
      }
    }
  }
}
</script>

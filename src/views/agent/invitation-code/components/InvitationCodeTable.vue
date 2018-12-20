<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="inviteCode" label="邀请码" />

      <el-table-column prop="username" label="注册人员" />

      <el-table-column prop="cpyx" label="彩票游戏" />

      <el-table-column prop="qpyx" label="棋牌游戏" />

      <el-table-column prop="tyjj" label="体育竞技" />

      <el-table-column prop="zrsx" label="真人视讯" />

      <el-table-column prop="dzyy" label="电子游艺" />

      <el-table-column prop="qtcp" label="其他彩票" />

      <el-table-column prop="createTime" label="创建时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.createTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDelete')" type="warning" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="邀请码"
      :name="activeItem.inviteCode"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'InvitationCodeTable',
  components: {
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteAgentInvitationCodeItem',
      deleteAttrName: 'id',
      activeItem: { inviteCode: '' }
    }
  }
}
</script>

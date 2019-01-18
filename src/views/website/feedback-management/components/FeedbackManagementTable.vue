<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="用户账号" :min-width="100"/>

      <el-table-column prop="title" label="反馈标题" :min-width="120"/>

      <el-table-column prop="content" label="反馈内容" :min-width="240"/>

      <el-table-column prop="fileUrl" label="附件URL" :min-width="70" />

      <el-table-column prop="status" label="处理状态" :min-width="70" >
        <template slot-scope="scope">
          <span>{{ scope.row.status | statusPipe }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <div>
            <el-button
              @click="showDialog(scope.row, 'dialogDetail')"
              type="primary"
              icon="el-icon-view"
              size="mini"
            />

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

    <!-- 详情弹框 -->
    <FeedbackManagementDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <FeedbackManagementDialogUpdate
      @on-updated="$emit('on-changed')"
      :data="activeItem"
      ref="dialogUpdate"
    />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="反馈标题"
      :name="activeItem.title"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import FeedbackManagementDialogDetail from './FeedbackManagementDialogDetail'
import FeedbackManagementDialogUpdate from './FeedbackManagementDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'FeedbackManagementTable',
  components: {
    FeedbackManagementDialogDetail,
    FeedbackManagementDialogUpdate,
    DialogDeleteConfirm
  },
  filters: {
    statusPipe (value) {
      switch (value) {
        case 0:
          return '待审核'
        case 1:
          return '已查看'
        case 2:
          return '待解决'
        case 3:
          return '已解决'
        case 4:
          return '不予解决'
        default:
          return '其他'
      }
    }
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: { title: '' },
      deleteHttpAPI: 'deleteWebsiteFeedbackItem',
      deleteAttrName: 'feedbackId',
      deleteId: 'feedbackId'
    }
  }
}
</script>

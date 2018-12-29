<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="title" label="公告标题" :min-width="120" />

      <el-table-column prop="content" label="公告内容" :min-width="200">
        <template slot-scope="scope">
          <BasePopoverTextarea :data="scope.row.content" :maxLength="28" />
        </template>
      </el-table-column>

      <el-table-column prop="startTime" label="开始时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.startTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="endTime" label="截止时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.endTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="启用状态">
        <template slot-scope="scope">
          <span>{{ scope.row.status | statusTrible }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排序" :min-width="45" />

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
              v-if="scope.row.status !== 2"
              @click="showDialog(scope.row, 'dialogUpdate')"
              type="primary"
              icon="el-icon-edit"
              size="mini"
            />

            <el-button
              v-if="scope.row.status !== 2"
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
    <NoticeListDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <NoticeListDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="公告标题"
      :name="activeItem.title"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BasePopoverTextarea from '@/components/base/BasePopoverTextarea'
import NoticeListDialogDetail from './NoticeListDialogDetail'
import NoticeListDialogUpdate from './NoticeListDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'NoticeListTable',
  components: {
    BasePopoverTextarea,
    NoticeListDialogDetail,
    NoticeListDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteNoticeItem',
      deleteAttrName: 'id',
      activeItem: { title: '' }
    }
  }
}
</script>

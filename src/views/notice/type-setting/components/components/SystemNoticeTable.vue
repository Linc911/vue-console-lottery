<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="title" label="公告标题" :min-width="140" />

      <el-table-column prop="content" label="公告内容" :min-width="200">
        <template slot-scope="scope">
          <span v-if="!scope.row.content">{{ scope.row.content }}</span>
          <span v-else-if="scope.row.content.length <= 40">{{ scope.row.content }}</span>
          <BasePopoverTextarea v-else :data="scope.row.content" :maxLength="30" />
        </template>
      </el-table-column>

      <el-table-column prop="onlineTime" label="上线时间" :width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.onlineTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="pc" label="是否PC" :min-width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.pc"/>
        </template>
      </el-table-column>

      <el-table-column prop="mp" label="是否MP" :min-width="45">
        <template slot-scope="scope">
          <BaseIndicator :status="scope.row.mp"/>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="启用状态" :min-width="45">
        <template slot-scope="scope">
          <span>{{ scope.row.status | statusTrible }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排序" :min-width="45" />

      <el-table-column prop="remarks" label="备注" :min-width="160" />

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />

          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />

          <el-button
            v-if="scope.row.status !== 2"
            @click="showDialog(scope.row, 'dialogDelete')"
            type="warning"
            icon="el-icon-delete"
            size="mini"
          />
        </template>
      </el-table-column>
    </el-table>

    <!-- 详情弹框 -->
    <SystemNoticeDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <SystemNoticeDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />

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
import { tableComponentMixin, switchMixin } from '@/mixins'

import BaseIndicator from '@/components/base/BaseIndicator'
import BasePopoverTextarea from '@/components/base/BasePopoverTextarea'
import SystemNoticeDialogDetail from './SystemNoticeDialogDetail'
import SystemNoticeDialogUpdate from './SystemNoticeDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'SystemNoticeTable',
  components: {
    BasePopoverTextarea,
    BaseIndicator,
    SystemNoticeDialogDetail,
    SystemNoticeDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteSystemNoticeItem',
      deleteAttrName: 'id',
      activeItem: { title: '' }
    }
  }
}
</script>

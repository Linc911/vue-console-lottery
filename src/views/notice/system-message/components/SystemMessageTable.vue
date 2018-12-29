<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="author" label="消息作者" :min-width="100" />

      <el-table-column prop="title" label="消息标题" :min-width="140" />

      <el-table-column prop="targetName" label="消息对象" :min-width="100" />

      <el-table-column prop="content" label="消息内容" :min-width="200">
        <template slot-scope="scope">
          <BasePopoverTextarea :data="scope.row.content" :maxLength="28" />
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
    <SystemMessageDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <SystemMessageDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="消息标题"
      :name="activeItem.title"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BasePopoverTextarea from '@/components/base/BasePopoverTextarea'
import SystemMessageDialogDetail from './SystemMessageDialogDetail'
import SystemMessageDialogUpdate from './SystemMessageDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'SystemMessageTable',
  components: {
    BasePopoverTextarea,
    SystemMessageDialogDetail,
    SystemMessageDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteSystemMessageItem',
      deleteAttrName: 'id',
      activeItem: { title: '' }
    }
  }
}
</script>

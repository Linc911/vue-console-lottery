<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="author" label="消息作者" :min-width="100" />

      <el-table-column prop="title" label="消息标题" :min-width="140" />

      <el-table-column prop="target" label="消息对象" :min-width="140" />

      <el-table-column prop="content" label="消息内容" :min-width="200">
        <template slot-scope="scope">
          <span v-if="!scope.row.content">{{ scope.row.content }}</span>
          <span v-else-if="scope.row.content.length <= 40">{{ scope.row.content }}</span>
          <BasePopoverTextarea v-else :data="scope.row.content" :maxLength="30" />
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

    <!-- 详情弹框 -->
    <SystemMessageDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <SystemMessageDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />

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
import { tableComponentMixin, switchMixin } from '@/mixins'

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
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteSystemMessageItem',
      deleteAttrName: 'id',
      activeItem: { title: '' }
    }
  }
}
</script>

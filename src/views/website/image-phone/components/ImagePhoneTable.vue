<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="图片名称" :width="150" />

      <el-table-column prop="coverUrl" label="图片地址" :min-width="70">
        <template slot-scope="scope">
          <span v-if="scope.row.coverUrl">
            查看 <BasePreview @click.native="showPreviewImage(scope.row.coverUrl)" />
          </span>
        </template>
      </el-table-column>

      <el-table-column prop="url" label="跳转地址" :width="240" />

      <el-table-column prop="status" label="启用状态" :min-width="70">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="!Boolean(scope.row.status)"
            :payload="{ id: scope.row.coverConfigId }"
            opposite
          />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排序" :min-width="45" />

      <el-table-column prop="remark" label="备注" :min-width="120" />

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogDelete')" type="warning" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </el-table>

    <!-- 图片详情弹框 -->
    <DialogImagePreview :imgUrl="imgUrl" dialogWidth="600px" ref="imagePreview" />

    <!-- 详情弹框 -->
    <ImagePhoneDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <ImagePhoneDialogUpdate @on-updated="$emit('on-updated')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="图片名称"
      :name="activeItem.name"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import BasePreview from '@/components/base/BasePreview'
import DialogImagePreview from '@/components/dialog/DialogImagePreview'
import ImagePhoneDialogDetail from './ImagePhoneDialogDetail'
import ImagePhoneDialogUpdate from './ImagePhoneDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'ActivityListTable',
  components: {
    BasePreview,
    DialogImagePreview,
    ImagePhoneDialogDetail,
    ImagePhoneDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteActivityItem',
      deleteAttrName: 'coverConfigId',
      deleteId: 'coverConfigId',
      switchObj: {
        API: 'updateWebsiteImagePhoneItem',
        attrId: 'coverConfigId',
        attrValue: 'status'
      },
      activeItem: { name: '' },
      imgUrl: ''
    }
  },
  methods: {
    showPreviewImage (imgUrl) {
      this.imgUrl = imgUrl

      this.$refs.imagePreview.toggleDialogVisible(true)
    }
  }
}
</script>

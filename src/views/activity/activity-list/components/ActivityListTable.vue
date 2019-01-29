<template lang="html">
  <div>
    <LayoutTablePlain :tableData="data">
      <el-table-column type="index" :width="36" />

      <el-table-column prop="title" label="活动标题" :width="120" />

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

      <el-table-column prop="coverImg" label="封面图片" :min-width="70">
        <template slot-scope="scope">
          <span v-if="scope.row.coverImg">
            查看 <BasePreview @click.native="showPreviewImage(scope.row.coverImg)" />
          </span>
        </template>
      </el-table-column>

      <el-table-column prop="activityImg" label="活动内容图片" :min-width="70">
        <template slot-scope="scope">
          <span v-if="scope.row.activityImg">
            查看 <BasePreview @click.native="showPreviewImage(scope.row.activityImg)" />
          </span>
        </template>
      </el-table-column>

      <el-table-column prop="type" label="应用设备" :width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.type ? '手机端' : '电脑端' }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="启用状态" :width="70">
        <template slot-scope="scope">
          <BaseSwitch
            @on-change="handleSwitchChange"
            :propValue="!Boolean(scope.row.status)"
            :payload="{ id: scope.row.id }"
            opposite
          />
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排序" :min-width="45" />

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <el-button @click="showDialog(scope.row, 'dialogDetail')" type="primary" icon="el-icon-view" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogUpdate')" type="primary" icon="el-icon-edit" size="mini" />
          <el-button @click="showDialog(scope.row, 'dialogDelete')" type="warning" icon="el-icon-delete" size="mini" />
        </template>
      </el-table-column>
    </LayoutTablePlain>

    <!-- 图片详情弹框 -->
    <DialogImagePreview :imgUrl="imgUrl" dialogWidth="800px" ref="imagePreview" />

    <!-- 详情弹框 -->
    <ActivityListDialogDetail :data="activeItem" ref="dialogDetail" />

    <!-- 修改弹框 -->
    <ActivityListDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogUpdate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="用户账户"
      :name="activeItem.title"
      ref="dialogDelete"
    />
  </div>
</template>

<script>
import { tableComponentMixin, switchMixin } from '@/mixins'

import BasePreview from '@/components/base/BasePreview'
import DialogImagePreview from '@/components/dialog/DialogImagePreview'
import ActivityListDialogDetail from './ActivityListDialogDetail'
import ActivityListDialogUpdate from './ActivityListDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'

export default {
  name: 'ActivityListTable',
  components: {
    BasePreview,
    DialogImagePreview,
    ActivityListDialogDetail,
    ActivityListDialogUpdate,
    DialogDeleteConfirm
  },
  mixins: [ tableComponentMixin, switchMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteActivityItem',
      deleteAttrName: 'id',
      switchObj: {
        API: 'updateActivityItem',
        attrId: 'id',
        attrValue: 'status'
      },
      activeItem: { title: '' },
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

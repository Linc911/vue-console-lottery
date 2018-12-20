<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>

      <el-table-column type="index" :width="36" />

      <el-table-column prop="name" label="游戏名称" />

      <el-table-column prop="dictionaryId" label="游戏编号" />

      <el-table-column prop="updateTime" label="更新时间" :min-width="140">
        <template slot-scope="scope">
          <span>{{ scope.row.updateTime | time }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="value" label="分润基数(%)" :width="96">
        <template slot-scope="scope">
          <span>{{ scope.row.value }}</span>
          <IconEdit @on-click="showDialog(scope.row, 'dialogInput')" class="pull-right" />
        </template>
      </el-table-column>

      <el-table-column prop="remark" label="备注" :min-width="140" />
    </el-table>

    <!-- 修改弹框 -->
    <DialogInput
      @on-confirm="handleEditConfirm"
      :value="activeItem.value"
      title="修改分润基数"
      ref="dialogInput"
    />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import IconEdit from '@/components/icon/IconEdit'
import DialogInput from '@/components/dialog/DialogInput'

export default {
  name: 'InterestGameTable',
  components: {
    IconEdit,
    DialogInput
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      activeItem: { value: '' }
    }
  },
  methods: {
    handleEditConfirm (value) {
      // 隐藏弹框
      this.$refs.dialogInput.toggleDialogVisible(false)

      const data = [ Object.assign(this.activeItem, { value }) ]
      this.$httpAPI.updateInterestGame(data).then((response) => {
        if (response.data.status === 200) {
          this.$emit('on-changed')
          this.$message.success('修改分润基数成功！')
        } else {
          this.$message.error('修改分润基数失败！')
        }
      }).catch((error) => {
        this.$message.error('修改分润基数失败！')
        console.log(error)
      })
    }
  }
}
</script>

<template lang="html">
  <div class="group-setting">
    <BaseSetting @on-click="handleGroupSetting" />
    <!-- 会员分组修改弹框 -->
    <el-dialog :visible.sync="dialogVisible" title="会员状态修改" width="320px" center>
      <div>
        <el-select v-model="innerGroupId" placeholder="是否启用" size="small">
          <el-option
            v-for="item in groupOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <span slot="footer">
          <el-button @click="handleGroupChange" type="primary" size="small">确认</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import BaseSetting from '@/components/base/BaseSetting'

export default {
  name: 'UserStatusSetting',
  components: {
    BaseSetting
  },
  props: {
    // 必须要传入字符串，id 数字已经超过JavaScript最大整数值
    userId: {
      type: String,
      required: true
    },
    groupId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      groupOptions: [{ label: '启用', value: '0' }, { label: '禁用', value: '1' }],
      innerGroupId: this.groupId
    }
  },
  methods: {
    // 显示修改分组弹框；获取分组数据
    handleGroupSetting () {
      this.dialogVisible = true
    },
    // 找到修改后的分组id和name，传递到父组件；同步修改分组的id和groudNames
    handleGroupChange () {
      if (this.groupId !== this.innerGroupId) {
        this.$httpAPI.rebateStatus({
          params: { rebateId: this.userId, status: this.innerGroupId }
        }).then(() => {
          const groupObject = this.$_.find(this.groupOptions, item => item.value === this.innerGroupId)
          this.$emit('on-change', Object.assign({ userId: this.userId }, groupObject))
        }).catch(error => console.log(error))
      }
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-button {
    margin-left: 10px;
  }
</style>

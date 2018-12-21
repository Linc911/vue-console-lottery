<template lang="html">
    <el-dialog
      :visible.sync="dialogVisible"
      title="变更下级代理"
      width="450px"
    >
      <el-form :model="formData" size="small">
        <el-form-item prop="parentId" label="代理账号">
          <el-select
            v-model="formData.parentId"
            placeholder="选择上级代理账户"
            style="width: 300px"
            filterable
          >
            <template v-for="item in options">
              <el-option
                v-show="item.id != childId"
                :key="item.id"
                :label="item.username"
                :value="item.id"
              />
            </template>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button @click="submitForm()" type="primary" size="small">确定</el-button>
      </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'DialogSuplevelUpdate',
  props: {
    childId: {
      type: [ Number, String ],
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      options: [],
      formData: { userId: this.childId, parentId: '' }
    }
  },
  watch: {
    childId () {
      this.formData.userId = this.childId

      if (this.childId) {
        this.fetchSuplevelList()
      }
    }
  },
  methods: {
    // 提交表单
    submitForm () {
      this.dialogVisible = false

      if (this.formData.parentId) {
        this.$httpAPI.updateAgentSeniorLevel(this.formData).then(response => {
          if (response.data.status === 200) {
            this.$emit('on-changed', this.formData)
            this.$message.success('变更成功！')
          } else {
            this.$message.error('变更失败！')
          }
        }).catch(error => console.log(error))
      }
    },
    // 显示与隐藏弹框（外部调用）
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    // 获取所有代理账号列表
    fetchSuplevelList () {
      this.$httpAPI.fetchAgentAccountList({
        params: { pageNo: 1, pageSize: 10000 }
      }).then((response) => {
        response.data.data ? (this.options = response.data.data) : (this.options = [])
      }).catch((error) => console.log(error))
    }
  }
}
</script>

<template lang="html">
  <div class="dialog-limit-form">
    <el-dialog :visible.sync="dialogVisible" title="额度转换详情" width="760px">
      <el-form :model="formData" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="用户ID">
              <el-input :value="formData.userId" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="会员账号">
              <el-input :value="formData.username" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="会员昵称">
              <el-input :value="formData.nickname" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="金额">
              <el-input :value="formData.money | RMB" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="转换前金额">
              <el-input :value="formData.beforeMoney | RMB" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="转换后金额">
              <el-input :value="formData.afterMoney | RMB" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="目标账户ID">
              <el-input :value="formData.target" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="目标账户">
              <el-input :value="formData.targetName" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建者ID">
              <el-input :value="formData.createId" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建者">
              <el-input :value="formData.createName" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="创建时间">
              <el-input :value="formData.createTime | time" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="操作类型">
              <el-input :value="formData.type ? '平台用户操作' : '后台用户操作'" size="small" disabled />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注">
              <el-input :value="formData.remark" type="textarea" rows="3" disabled />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span v-if="unchecked" slot="footer">
        <el-button @click="changeStatus(2)" type="primary" size="small">审批通过</el-button>
        <el-button @click="changeStatus(3)" type="danger" size="small">审批拒绝</el-button>
        <el-button @click="changeStatus(1)" size="small">已查阅，待审批</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'DialogLimitForm',
  props: {
    formData: {
      type: Object,
      required: true
    },
    unchecked: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    changeStatus (status) {
      this.$httpAPI.updateFinanceLimitChangeStatus({
        params: { convertId: this.formData.convertId, status }
      }).then(() => {
        this.$emit('on-success', { convertId: this.formData.convertId, status })
        this.dialogVisible = false
        this.$message.success('修改状态成功！')
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

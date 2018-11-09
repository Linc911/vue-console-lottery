<template>
<div class="dialog-update">
  <el-dialog :visible.sync="dialogVisible" title="修改支付类型配置" width="450px">
    <el-form :model="data" ref="formUpdate" label-width="80px" size="small">
      <el-form-item prop="name" label="类型名称">
        <el-input :value="data.name" disabled />
      </el-form-item>

      <el-form-item props="sort" label="是否推荐">
        <el-select v-model="data.status" placeholder="是否推荐" style="width: 100%">
          <el-option :value="0" label="推荐" />
          <el-option :value="1" label="不推荐" />
        </el-select>
      </el-form-item>

      <el-form-item props="sort" label="排序">
        <el-input v-model="data.sort" type="number" min="0" placeholder="排序" />
      </el-form-item>

      <el-form-item props="remark" label="备注">
        <el-input v-model="data.remark" @keyup.native.enter="submitForm" type="textarea" rows="3" placeholder="备注" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'PaymentTypeDialogUpdate',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    submitForm () {
      const { id, status, sort, remark } = this.data
      this.$httpAPI.updateTransactionPaymentType({ id, status, sort, remark }).then(response => {
        if (response.data.status === 200) {
          this.$utils.initializeObjectProperties(this.data)
          this.$emit('on-updated')
          this.$message.success('修改支付类型配置成功！')
        } else {
          this.$message.error(`修改支付类型配置（${response.data.msg}）！`)
        }
      }).catch(error => console.log(error))

      this.dialogVisible = false
    },
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>

<template>
<div>
  <el-dialog :visible.sync="dialogVisible" title="浏览支付类型详情" width="450px">
    <el-form :model="formData" label-width="80px" size="small">
      <el-form-item prop="name" label="类型名称">
        <el-input v-model="formData.name" disabled />
      </el-form-item>

      <el-form-item prop="status" label="推荐状态">
        <el-radio-group v-model="formData.status" disabled>
          <el-radio :label="0">推荐</el-radio>
          <el-radio :label="1">不推荐</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="sort" label="排序">
        <el-input v-model="formData.sort" disabled />
      </el-form-item>

      <el-form-item prop="sort" label="创建时间">
        <el-input :value="formData.createTime | time" disabled />
      </el-form-item>

      <el-form-item prop="sort" label="更新时间">
        <el-input :value="formData.updateTime | time" disabled />
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input v-model="formData.remark" type="textarea" rows="3" disabled />
      </el-form-item>
    </el-form>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: 'PaymentTypeDialogDetail',
  props: {
    formData: {
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
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>

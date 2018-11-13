<template>
<div class="dialog-create">
  <el-dialog :visible.sync="dialogVisible" title="创建新支付类型" width="450px">
    <el-form :model="formData" :rules="rules" ref="formCreate" label-width="80px" size="small">
      <el-form-item prop="name" label="类型名称">
        <el-input v-model="formData.name" placeholder="类型名称" />
      </el-form-item>

      <el-form-item prop="sort" label="排序">
        <el-input v-model="formData.sort" type="number" min="0" placeholder="排序" />
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input v-model="formData.remark" type="textarea" rows="3" placeholder="备注" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import { createMixin } from '@/mixins'

export default {
  name: 'PaymentTypeDialogCreate',
  mixins: [ createMixin ],
  data () {
    return {
      createHttpAPI: 'createTransactionPaymentType',
      formData: { name: '', sort: '', remark: '' },
      rules: {
        name: [
          { required: true, message: '类型名称不能为空' },
          { min: 2, max: 20, message: '类型名称长度在 2 - 20 字符之间' }
        ],
        sort: { required: true, message: '排列顺序不能为空' }
      }
    }
  }
}
</script>

<template>
<div>
  <el-dialog :visible.sync="dialogVisible" title="创建新支付类型" width="450px">
    <el-form :model="formData" :rules="rules" ref="formCreate" label-width="80px" size="small">
      <el-form-item prop="name" label="类型名称">
        <el-input v-model.trim="formData.name" placeholder="类型名称" />
      </el-form-item>

      <el-form-item prop="status" label="是否推荐">
        <el-radio-group v-model="formData.status">
          <el-radio :label="0">推荐</el-radio>
          <el-radio :label="1">不推荐</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item prop="sort" label="排序">
        <el-input v-model.trim="formData.sort" type="number" min="0" max="99" placeholder="排序" />
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="备注" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

export default {
  name: 'PaymentTypeDialogCreate',
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'createTransactionPaymentType',
      formData: { name: '', status: 0, sort: 0, remark: '' },
      rules: {
        name: [
          { required: true, message: '类型名称不能为空' },
          { min: 2, max: 20, message: '类型名称长度在 2 - 20 字符之间' }
        ],
        status: { required: true, message: '推荐状态至少选择一个' },
        sort: [
          { required: true, message: '排列顺序不能为空' },
          { pattern: /^[0-9]{1,2}$/, message: '排列顺序必须为 0 - 99 整数' }
        ]
      }
    }
  }
}
</script>

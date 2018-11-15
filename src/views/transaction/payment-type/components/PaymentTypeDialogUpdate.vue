<template>
<div class="dialog-update">
  <el-dialog :visible.sync="dialogVisible" title="修改支付类型配置" width="450px">
    <el-form :model="formData" :rules="rules" label-width="80px" size="small" ref="formUpdate">
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
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

export default {
  name: 'PaymentTypeDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateTransactionPaymentType',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { name: '', sort: '', status: '' },
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
  },
  watch: {
    data () {
      this.idParams = { id: this.data.id }
    }
  }
}
</script>

<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改返水计划设置" width="400px">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="90px"
      size="small"
      ref="formUpdate"
    >
      <el-form-item prop="name" label="类型名称">
        <el-input v-model.trim="formData.name" placeholder="类型名称" />
      </el-form-item>

      <el-form-item prop="odds1" label="赔率">
        <el-input v-model.trim="formData.odds1" type="number" min="0" placeholder="赔率" />
      </el-form-item>

      <el-form-item prop="sort" label="排列顺序">
        <el-input v-model.trim="formData.sort" type="number" min="0" placeholder="排列顺序" />
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input v-model.trim="formData.remark" type="textarea" rows="3" placeholder="备注" />
      </el-form-item>
    </el-form>

    <span slot="footer">
      <el-button @click="submitForm('formUpdate')" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'
import FormValidation from '@/config/form'

export default {
  name: 'LotteryOddsDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateLotterOddsItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { name: '', odds1: '', sort: 0 },
      rules: {
        name: FormValidation.validateRequired('类型名称'),
        odds1: FormValidation.validateRequired('赔率'),
        sort: FormValidation.validateInteger('排列顺序')
      }
    }
  },
  watch: {
    data () {
      this.formData = Object.assign(this.formData, this.data)
      this.idParams = { gameType: this.data.gameType, type: this.data.type, multiple: true }
    }
  }
}
</script>

<template lang="html">
  <div class="load-form">
    <el-form :model="formData" :rules="rules" label-width="120px" ref="loanForm">
      <el-form-item prop="name" label="借贷类型名称">
        <el-input v-model="formData.name" placeholder="借贷类型名称" />
      </el-form-item>

      <el-form-item prop="sort" label="排列顺序">
        <el-input v-model="formData.sort" type="number" min="1" max="100" placeholder="排列顺序" />
      </el-form-item>

      <el-form-item prop="remark" label="备注">
        <el-input v-model="formData.remark" type="textarea" :rows="3" placeholder="备注" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loanForm')">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoadForm',
  props: {
    data: {
      type: Object,
      default () {
        return {
          type: 0,
          name: '',
          sort: 0,
          remark: ''
        }
      }
    }
  },
  data () {
    return {
      formData: Object.assign({}, this.data),
      rules: {
        name: [
          { required: true, message: '借贷类型名称不能为空' },
          { max: 20, message: '借贷类型名称长度不能超过20个字符' }
        ],
        sort: [
          { required: true, message: '排列顺序不能为空' }
          // { min: 0, max: 100, message: '排列顺序在 0-100 之间'}
        ]
      }
    }
  },
  watch: {
    data () {
      this.formData = Object.assign({}, this.data)
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$httpAPI.createFinanceLoan(this.formData).then(() => {
            this.$emit('on-success', this.formData)
          }).catch(error => console.log(error))
        } else {
          this.$message.warning('表单填写不正确，请根据提示填写！')
        }
      })
    }
  }
}
</script>

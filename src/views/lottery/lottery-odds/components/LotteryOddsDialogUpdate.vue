<template lang="html">
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'LotteryOddsDialogCreate',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false,
      updateHttpAPI: 'updateLotterOddsItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { name: '', odds1: '', sort: 0 },
      rules: {
        name: { required: true, message: '类型名称不能为空' },
        odds1: { required: true, message: '赔率不能为空' },
        sort: this.$utils.generateFormValidatorInteger('排列顺序')
      }
    }
  },
  watch: {
    data () {
      this.formData = Object.assign(this.formData, this.data)
      this.idParams = { gameType: this.data.gameType, type: this.data.type }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = false

          // 判断两个对象是否相等（自有属性和属性值一一对应）
          const same = this.$utils.isEquivalentObjects(this.data, this.formData)
          if (!same) {
            // 生成需要修改属性组成的对象，仅包含变动的属性（两个参数位置要按顺序）
            const postData = this.$utils.generateObjectWithChangedProperties(this.data, this.formData)

            this.$httpAPI[this.updateHttpAPI]([ Object.assign(this.idParams, postData) ]).then(response => {
              if (response.data.status === 200) {
                this.$emit('on-updated')
                this.$message.success('修改成功！')
              } else {
                this.$message.error('修改失败！')
              }
            }).catch(error => console.log(error))
          } else {
            this.$message.info('检测数据没有变化，不发送修改请求。')
          }
        } else {
          this.$message.warning('表单填写不正确，请根据提示填写！')
        }
      })
    },
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>

<template lang="html">
  <div class="limit-add">
    <el-button
      @click="dialogVisible = true"
      icon="el-icon-circle-plus-outline"
      size="small"
      type="primary"
      class="pull-right"
    >添加</el-button>

    <el-dialog title="添加新转换金额" :visible.sync="dialogVisible" width="500px">
      <el-form :model="formData" :rules="rules" label-width="100px" ref="limitForm">
        <el-form-item prop="username" label="会员账号">
          <el-input v-model="formData.username" placeholder="会员账号" />
        </el-form-item>

        <el-form-item prop="target" label="目标账户">
          <el-select v-model="formData.target" placeholder="选择目标账户" style="width: 100%">
            <el-option v-for="item in gameTypes" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </el-form-item>

        <el-form-item prop="money" label="转换金额">
          <el-input v-model="formData.money" type="number" min="0" placeholder="调整金额" />
        </el-form-item>

        <el-form-item prop="remark" label="备注">
          <el-input v-model="formData.remark" type="textarea" :rows="3" placeholder="备注" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('limitForm')">确认</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'LimitAdd',
  data () {
    return {
      gameTypes: [],
      formData: {
        username: '', money: '', target: '', remark: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空' },
          { min: 2, max: 20, message: '用户名长度在 2 - 20 字符之间' }
        ],
        target: { required: true, message: '必须选择其中一个游戏类型' },
        money: [
          { required: true, message: '调整金额不能为空' }
        ]
      },
      dialogVisible: false
    }
  },
  created () {
    this.fetchGamesList()
  },
  methods: {
    handleCreatedLoadItem (load) {
      this.dialogVisible = false
      this.$emit('on-success', load)
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$httpAPI.createFinanceLimitChange(this.formData).then(() => {
            this.$emit('on-success')
            this.dialogVisible = false
            this.formData = { username: '', money: '', target: '', remark: '' }
            this.$message.success('转换成功！')
          }).catch(error => console.log(error))
        } else {
          this.$message.warning('表单填写不正确，请根据提示填写！')
        }
      })
    },
    fetchGamesList () {
      this.$httpAPI.fetchGamesList().then(response => {
        this.$_.forEach(response.data.data, item => {
          this.gameTypes.push({
            label: item.name,
            value: item.id
          })
        })
      }).catch(error => console.log(error))
    }
  }
}
</script>

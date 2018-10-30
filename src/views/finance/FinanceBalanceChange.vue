<template lang="html">
  <div class="balance-change">
    <el-form :model="formData" :rules="rules" ref="loginForm" label-width="120px">
      <el-form-item prop="username" label="会员账号">
        <el-input v-model="formData.username" placeholder="会员账号" />
      </el-form-item>

      <el-form-item prop="username" label="金额类型">
        <el-select placeholder="选择类型" v-model="value1">
            <el-option label="我的钱包" :value="1" />
            <el-option label="其他钱包" :value="2" />
          </el-select>
      </el-form-item>

      <el-form-item prop="password" label="调整方向">
        <el-checkbox-group v-model="value1">
          <el-checkbox :value="1">增加</el-checkbox>
          <el-checkbox :value="-1">扣减</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item prop="username" label="借贷类型">
        <el-select placeholder="选择类型" v-model="value1">
            <el-option label="会员彩金派送" :value="1" />
            <el-option label="其他派送" :value="2" />
          </el-select>
      </el-form-item>

      <el-form-item prop="username" label="调整金额">
        <el-input v-model="formData.username" placeholder="调整金额" />
      </el-form-item>

      <el-form-item prop="username" label="调整理由">
        <el-input v-model="formData.username" type="textarea" placeholder="调整理由" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginUsername',
  data () {
    return {
      formData: { username: '', password: '' },
      rules: {
        username: [
          { required: true, message: '用户名不能为空' },
          { min: 2, max: 20, message: '用户名长度在 2 - 20 字符之间' }
        ],
        password: [
          { required: true, message: '密码不能为空' },
          { min: 6, max: 20, message: '密码长度在 6 - 20 字符之间' }
        ]
      },
      value1: 1
    }
  },
  created () {
    this.fetchBalanceChangeList()
    this.fetchBalanceChangeItem()
  },
  methods: {
    fetchBalanceChangeList (page) {
      this.$httpAPI.fetchBalanceChangeList({ params: { pageNo: 1, pageSize: 3 } }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = 3
      }).catch(error => console.log(error))
    },
    fetchBalanceChangeItem (page) {
      this.$httpAPI.fetchBalanceChangeItem({ params: { changeId: 1 } }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = 3
      }).catch(error => console.log(error))
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        } else {
          this.$message.warning('用户名或密码格式不正确，无法登录！')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

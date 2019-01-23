<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="80px"
    inline
    size="medium"
    ref="createForm"
  >
    <el-card>
      <div slot="header">
        <span>会员信息</span>
      </div>
      <div>
        <el-form-item prop="username" label="会员账户">
          <el-input
            v-model.trim="formData.username"
            placeholder="会员账户"
            style="min-width: 300px"
          />
        </el-form-item>
        <el-form-item prop="password" label="登陆密码">
          <el-input
            v-model.trim="formData.password"
            type="password"
            placeholder="登陆密码"
            style="min-width: 300px"
          />
        </el-form-item>
      </div>
    </el-card>

    <el-card>
      <div slot="header">
        <span>代理会员抽取点数（点数越小，代理会员分润越多）</span>
      </div>
      <div>
        <el-table :data="tableData" size="small" highlight-current-row border>
          <el-table-column prop="name" label="玩法大类" />

          <el-table-column label="抽取点数" :width="340">
            <template slot-scope="scope">
              <el-form-item :prop="scope.row.prop">
                <el-input
                  v-model="formData[scope.row.prop]"
                  :placeholder="scope.row.placeholder"
                  type="number"
                  min="0"
                  style="width: 300px"
                />
              </el-form-item>
            </template>
          </el-table-column>

          <el-table-column prop="options" label="操作">
            <template slot-scope="scope">
              <!-- <el-button type="primary" size="small">赔率预览</el-button> -->
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

    <div>
      <el-button @click="submitForm('createForm')" type="primary" size="medium">确认提交</el-button>
    </div>
  </el-form>
</template>

<script type="text/javascript">
import FormValidation from '@/config/form'

export default {
  name: 'AgentCreate',
  data () {
    return {
      formData: {},
      rules: {
        username: FormValidation.validateRequired('会员账户'),
        password: FormValidation.validateRequired('登陆密码'),
        cpyx: FormValidation.validateRequired('彩票游戏'),
        qpyx: FormValidation.validateRequired('棋牌游戏'),
        tyjj: FormValidation.validateRequired('体育竞技'),
        zrsx: FormValidation.validateRequired('真人视讯'),
        dzyy: FormValidation.validateRequired('电子游艺'),
        qtcp: FormValidation.validateRequired('其他彩票')
      },
      tableData: [
        { name: '彩票游戏', prop: 'cpyx', placeholder: '当前【彩票游戏】最大抽取点数为5.00' },
        { name: '棋牌游戏', prop: 'qpyx', placeholder: '当前【棋牌游戏】最大抽取点数为5.00' },
        { name: '体育竞技', prop: 'tyjj', placeholder: '当前【体育竞技】最大抽取点数为5.00' },
        { name: '真人视讯', prop: 'zrsx', placeholder: '当前【真人视讯】最大抽取点数为5.00' },
        { name: '电子游艺', prop: 'dzyy', placeholder: '当前【电子游艺】最大抽取点数为5.00' },
        { name: '其他彩票', prop: 'qtcp', placeholder: '当前【其他彩票】最大抽取点数为5.00' }
      ]
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$httpAPI.createAgentUserAccount(this.formData).then(response => {
            if (response.data.status === 200) {
              this.$refs.createForm.resetFields()

              this.$router.push({ name: 'AgentAccountList' })
              this.$message.success('创建成功！')
            } else {
              this.$message.error('创建失败！')
            }
          }).catch(error => console.log(error))
        } else {
          this.$message.warning('表单填写不正确，请按提示填写！')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  max-width: 900px;
  margin-bottom: 30px;
}
</style>

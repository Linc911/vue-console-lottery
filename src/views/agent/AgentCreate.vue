<template lang="html">
  <div class="agent-manage">
    <el-card>
      <div slot="header">
        <span>会员信息</span>
      </div>
      <el-form :model="formData1" label-width="120px">
        <el-form-item prop="phone">
          <el-input v-model="formData1.phone" placeholder="手机号码" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="formData1.password" placeholder="登录密码" />
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <div slot="header">
        <span>会员信息</span>
      </div>
      <el-form :model="formData1">
        <el-table
          :data="tableData"
          size="small"
          highlight-current-row
          border
        >
          <el-table-column prop="name" label="玩法大类" />

          <el-table-column label="抽取点数">
            <template slot-scope="scope">
              <el-input v-model="formData1.password" :placeholder="scope.row.placeholder" />
            </template>
          </el-table-column>

          <el-table-column prop="options" label="操作">
            <template slot-scope="scope">
              <el-button type="primary" size="small">赔率预览</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form>
    </el-card>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      formData1: { phone: '', password: '' },
      tableData: [
        { name: '六合彩', placeholder: '当前【六合彩】最大抽取点数为5.00' },
        { name: '皇冠体育', placeholder: '当前【皇冠体育】最大抽取点数为5.00' },
        { name: '真人视讯', placeholder: '当前【真人视讯】最大抽取点数为5.00' },
        { name: '彩票游戏', placeholder: '当前【彩票游戏】最大抽取点数为5.00' },
        { name: '电子游艺', placeholder: '当前【电子游艺】最大抽取点数为5.00' }
      ]
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

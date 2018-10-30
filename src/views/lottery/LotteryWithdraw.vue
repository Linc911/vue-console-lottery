<template lang="html">
  <div class="">
    <el-form :model="formData" :rules="rules" ref="loginForm">
      <el-form-item prop="所属彩种">
        <el-select v-model="formData.value" placeholder="Select" style="width: 100%">
          <el-option
            v-for="item in tableData"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="所属彩种">
        <el-input v-model="formData.phone" placeholder="输入期号"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">确认撤单</el-button>
        <el-button type="primary" @click="$router.push({ name: 'HomePage' })">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LotteryUsersInfo',
  data () {
    return {
      formData: { name: '', value: 2 },
      tableData: [
        { label: '江苏快3', value: 1 },
        { label: '广东11选5', value: 2 },
        { label: '北京时时彩', value: 3 }
      ]
    }
  },
  created () {
    // this.fetchUsersList()
  },
  mounted () {
    this.$notify({
      title: '提示',
      message: '页面使用模拟数据，接口正在调试中...',
      type: 'warning',
      duration: 8000
    })
  },
  methods: {
  }
}
</script>

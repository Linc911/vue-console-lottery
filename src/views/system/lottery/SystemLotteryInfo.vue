<template lang="html">
  <section class="game-preview">
    <el-form
      :model="formData"
      label-width="130px"
      ref="gameForm"
    >
      <el-form-item label="游戏名称">
        <el-input :value="formData.name" disabled />
      </el-form-item>

      <el-form-item label="开始时间">
        <el-input :value="formData.startTime | sortTime" disabled />
      </el-form-item>

      <el-form-item label="结束时间">
        <el-input :value="formData.endTime | sortTime" disabled />
      </el-form-item>

      <el-form-item label="每期相隔的时间">
        <el-input :value="formData.intervalTime | sortTime" disabled />
      </el-form-item>

      <el-form-item label="开奖结果的地址">
        <el-input :value="formData.url" disabled />
      </el-form-item>

      <el-form-item label="开奖结果的定时器的crontab表达式">
        <el-input :value="formData.crontab" disabled />
      </el-form-item>

      <el-form-item label="系统封盘的定时器的crontab表达式">
        <el-input :value="formData.myCrontab" disabled />
      </el-form-item>

      <el-form-item label="备注">
        <el-input :value="formData.remark" type="textarea" disabled />
      </el-form-item>

      <el-form-item>
        <el-button @click="$router.push({ name: 'SystemLotteryUpdate', params: { gameId: $route.params.gameId } })" type="primary">修改</el-button>
        <el-button @click="$router.push({ name: 'SystemLotteryList' })" type="info">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  data () {
    return {
      formData: {}
    }
  },
  created () {
    this.fetchGameInfo()
  },
  methods: {
    // 获取全部菜单
    fetchGameInfo () {
      this.$httpAPI.fetchLotterySettingInfo({ params: { id: this.$route.params.gameId } }).then(response => {
        this.formData = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>

<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="min-height: 845px;">
      <el-tab-pane v-for="(item,index) in gameType" :key="item.value" :label="item.name">
        <Child :gameConfigId="index" :gameType="gameType"></Child>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Child from './child/routeChild'

export default {
  name: 'route',
  components: {
    Child
  },
  data () {
    return {
      tabPosition: 'left',
      gameType: []
    }
  },
  created () {
    this.fetchConfigPayTypeList()
  },
  methods: {
    // 获取游戏列表
    fetchConfigPayTypeList () {
      this.$httpAPI.configPayTypeList().then(response => {
        this.gameType = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

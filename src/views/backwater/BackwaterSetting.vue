<template lang="html">
  <div class="unknown">
    <el-tabs :tab-position="tabPosition" style="min-height: 845px;">
      <el-tab-pane v-for="(item,index) in gameType" :key="item.value" :label="item.name">
        <Child :gameConfigId="index+1"></Child>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Child from './child/BackwaterSettingChild'

export default {
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
    this.fetchGamesList()
  },
  methods: {
    fetchGamesList () {
      this.$httpAPI.fetchGamesList().then(response => {
        this.gameType = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>

<template lang="html">
  <div class="unknown">
    <el-tabs v-model="activeName" style="height: 845px;">
      <el-tab-pane v-for="(item,index) in gameType" :key="item.id" :label="item.name" :name="item.name">
        <Child :gameConfigId="index"></Child>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Child from './child/BackwaterListChild'

export default {
  components: {
    Child
  },
  data () {
    return {
      activeName: '我的账户',
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

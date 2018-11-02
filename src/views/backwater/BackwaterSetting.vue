<template lang="html">
  <div class="unknown">
    <el-tabs :tab-position="tabPosition" style="height: 845px;" >
      <el-tab-pane v-for="item in gameType" :key="item.value" :label="item.name" >
        <Child></Child>
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
    this.fetchRebateList()
  },
  methods: {
    fetchGamesList () {
      this.$httpAPI.fetchGamesList().then(response => {
        this.gameType = response.data.data
        console.log(this.gameType)
      }).catch(error => console.log(error))
    },
    fetchRebateList () {
      this.$httpAPI.rebateList({
        gameConfigId: 1,
        pageNo: 1,
        pageSize: 10
      }).then(response => {
        this.gameType = response
        console.log(this.gameType)
      }).catch(error => console.log(error))
    }
  }
}
</script>

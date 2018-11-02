<template lang="html">
  <div class="unknown">
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="皇冠体育">
        <Child></Child>
      </el-tab-pane>
      <el-tab-pane label="真人视讯">
        <Child></Child>
      </el-tab-pane>
      <el-tab-pane label="电子游艺">
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
      tabPosition: 'left'
    }
  }
}
</script>

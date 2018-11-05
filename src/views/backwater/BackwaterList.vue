<template lang="html">
  <div class="unknown">
    <el-tabs v-model="activeName" style="height: 845px;">
      <el-tab-pane label="六合彩返水日志" name="first">
        <Child></Child>
      </el-tab-pane>
      <el-tab-pane label="彩票返水日志" name="second">
        <Child></Child>
      </el-tab-pane>
      <el-tab-pane label="真人返水日志" name="third">
        <Child></Child>
      </el-tab-pane>
      <el-tab-pane label="电子返水日志" name="fourth">
        <Child></Child>
      </el-tab-pane>
      <el-tab-pane label="体育返水日志" name="fifth">
        <Child></Child>
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
      activeName: 'first'
    }
  },
  methods: {}
}
</script>

<template lang="html">
  <div class="load-create">
    <el-button
      @click="dialogVisible = true"
      icon="el-icon-circle-plus-outline"
      size="small"
      type="primary"
      class="pull-right"
    >添加</el-button>

    <el-dialog title="会员抽点详情" :visible.sync="dialogVisible" width="500px">
      <LoadForm @on-success="handleCreatedLoadItem" />
    </el-dialog>
  </div>
</template>

<script>
import LoadForm from './LoadForm'

export default {
  name: 'LoadCreate',
  components: {
    LoadForm
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleCreatedLoadItem (load) {
      this.dialogVisible = false
      this.$emit('on-success', load)
    }
  }
}
</script>

<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="删除确认" width="400px">
    <div>
      <span class="highlight-text">删除</span>
      {{title}} 为
      <span class="highlight-text">{{name}} </span>数据?
    </div>
    <span slot="footer">
      <el-button type="primary" @click="$emit('on-confirm')">确认</el-button>
      <el-button @click="dialogVisible = false">取消</el-button>
    </span>
  </el-dialog>
</template>

<script type="text/javascript">
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    toggleDialogVisible (status) {
      this.dialogVisible = status
    }
  }
}
</script>

<style lang="scss" scoped>
.highlight-text {
  color: #F56C6C;
}
</style>

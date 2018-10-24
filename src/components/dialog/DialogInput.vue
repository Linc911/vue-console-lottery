<template lang="html">
  <el-dialog :visible.sync="dialogVisible" :title="title" width="400px">
    <el-input
      @keyup.native.enter="$emit('on-confirm', innerValue)"
      v-model="innerValue"
      :placeholder="placeholder"
    />
    <span slot="footer">
      <el-button type="primary" @click="$emit('on-confirm', innerValue)">确认</el-button>
    </span>
  </el-dialog>
</template>

<script type="text/javascript">
export default {
  props: {
    title: {
      type: String,
      default: '设置对话框'
    },
    value: {
      required: true
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  },
  data () {
    return {
      dialogVisible: false,
      innerValue: this.value
    }
  },
  watch: {
    value () {
      this.innerValue = this.value
    }
  },
  methods: {
    toggleDialogStatus (status) {
      this.dialogVisible = status
    }
  }
}
</script>

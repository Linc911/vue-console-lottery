<template lang="html">
  <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" :width="dialogWidth">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="imgUrl" width="100%" height="100%">
      <div style="padding: 14px;">
        <p style="word-break: break-all;">{{ imgUrl }}</p>
      </div>
    </el-card>
  </el-dialog>
</template>

<script type="text/javascript">
export default {
  props: {
    dialogTitle: {
      type: String,
      default: '图片预览'
    },
    dialogWidth: {
      type: String,
      default: '450px'
    },
    imgUrl: {
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

<template lang="html">
  <!-- 手工结算弹框 -->
  <el-dialog :visible.sync="dialogVisible" title="手工结算" width="500px">
    <el-form :model="data" label-width="100px" size="small">
      <el-form-item label="期号">
        <el-input :value="data.drawno" disabled />
      </el-form-item>

      <el-form-item label="彩票类型">
        <el-input :value="data.gameName" disabled />
      </el-form-item>

      <el-form-item label="第一球">
        <el-input v-model="data.ball1" />
      </el-form-item>

      <el-form-item label="第二球">
        <el-input v-model="data.ball2" />
      </el-form-item>

      <el-form-item label="第三球">
        <el-input v-model="data.ball3" />
      </el-form-item>

      <el-form-item label="第四球">
        <el-input v-model="data.ball4" />
      </el-form-item>

      <el-form-item label="第五球">
        <el-input v-model="data.ball5" />
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button @click="confirmMuaulChange" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'ResultsElevenDialogHandwork',
  props: {
    data: {
      type: Object,
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
    },
    confirmMuaulChange () {
      this.$httpAPI.updateLotteryResultEleven({
        params: this.data
      }).then(() => {
        this.dialogVisible = false
        this.$emit('on-success')
      }).catch(error => console.log(error))
    }
  }
}
</script>

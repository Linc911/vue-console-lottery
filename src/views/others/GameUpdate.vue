<template lang="html">
  <section class="game-preview">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="130px"
      ref="gameForm"
    >
      <el-form-item label="游戏名称" prop="name">
        <el-input v-model="formData.name" placeholder="游戏名称" />
      </el-form-item>

      <el-form-item label="开始时间" prop="startTime">
        <BaseTimePicker :second="formData.startTime" @on-change="handleTimePickerChange" />
      </el-form-item>

      <el-form-item label="结束时间" prop="endTime">
        <BaseTimePicker :second="formData.endTime" @on-change="handleTimePickerChange" />
      </el-form-item>

      <el-form-item label="每期相隔的时间" prop="intervalTime">
        <BaseTimePicker :second="formData.intervalTime" @on-change="handleTimePickerChange" />
      </el-form-item>

      <el-form-item label="开奖结果的地址" prop="url">
        <el-input v-model="formData.url" placeholder="开奖结果的地址" />
      </el-form-item>

      <el-form-item label="开奖结果的定时器的crontab表达式" prop="crontab">
        <el-input v-model="formData.crontab" placeholder="开奖结果的定时器的crontab表达式" />
      </el-form-item>

      <el-form-item label="系统封盘的定时器的crontab表达式" prop="myCrontab">
        <el-input v-model="formData.myCrontab" placeholder="系统封盘的定时器的crontab表达式" />
      </el-form-item>

      <el-form-item label="备注">
        <el-input v-model="formData.remark" type="textarea" placeholder="备注" />
      </el-form-item>

      <el-form-item>
        <el-button @click="submitForm('gameForm')" type="primary">确认</el-button>
        <el-button @click="$router.push('/games/list')" type="info">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
import BaseTimePicker from '@/components/base/BaseTimePicker'

export default {
  components: {
    BaseTimePicker
  },
  data () {
    return {
      formData: {
        name: '',
        startTime: 0,
        endTime: 0,
        url: '',
        intervalTime: 0,
        crontab: '',
        myCrontab: '',
        remark: ''
      },
      rules: {
        name: [
          { required: true, message: '游戏名称不能为空' },
          { max: 30, message: '游戏名称长度不能超过30个字符' }
        ],
        startTime: { required: true, message: '时间不能为空' },
        endTime: { required: true, message: '时间不能为空' },
        url: [
          { required: true, message: '开奖结果的地址不能为空' }
          // { pattern: /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/, message: '开奖结果的地址格式不正确' }
        ],
        intervalTime: { required: true, message: '时间不能为空' },
        crontab: { required: true, message: '表达式不能为空' },
        myCrontab: { required: true, message: '表达式不能为空' }
      }
    }
  },
  created () {
    this.fetchGameInfo()
  },
  methods: {
    // 当时间选择器改变时，赋值给对应的 formData 属性
    handleTimePickerChange (value, propertyName) {
      console.log(this)
      console.log(value, propertyName)
      // this.formData.startTime = this._transferTimeToSeconds(value)
    },
    // 提交表单时，先验证表单
    submitForm (fromName) {
      this.$refs[fromName].validate(valid => {
        if (valid) {
          this.$axios.post('/api-g/GameTypeConfig/save', {
            id: this.formData.id,
            startTime: this.formData.startTime
          }).then(() => {
            this.$message.warning('修改游戏配置成功！')
          }).catch(error => {
            console.log(error)
            this.$message.error('修改游戏配置失败！')
          })
        } else {
          this.$message.warning('表单验证不通过，请检查填写内容。')
        }
      })
    },
    // 获取全部菜单
    fetchGameInfo () {
      this.$axios.get('/api-g/GameTypeConfig/get', {
        params: { id: this.$route.params.id }
      }).then(response => {
        this.formData = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>

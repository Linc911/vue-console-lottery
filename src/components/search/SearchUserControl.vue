<template lang="html">
  <el-form-item label="监控状态">
    <el-select v-model="controlStatus" @change="$emit('on-change', controlStatus)" placeholder="监控状态" clearable>
      <el-option
        v-for="item in status"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchUserControl',
  data () {
    return {
      controlStatus: '',
      status: [
        { label: '关闭监控', value: 0 },
        { label: '开启监控', value: 1 }
      ]
    }
  },
  methods: {
    reset () {
      this.controlStatus = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 100px;
}
</style>

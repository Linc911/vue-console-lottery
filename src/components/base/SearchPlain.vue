<template lang="html">
  <el-input
    v-model="search"
    @input="searchInfo"
    :placeholder="placeholder"
    suffix-icon="el-icon-search"
    size="small"
    style="width: 240px;"
  />
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    }
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    // 根据输入框内容，显示符合匹配条件的角色
    searchInfo: _.debounce(function () {
      this.$emit('on-input', this.search)
    }, 400)
  }
}
</script>

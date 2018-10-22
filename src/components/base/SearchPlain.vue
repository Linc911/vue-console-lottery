<template lang="html">
  <el-input
    v-model="search"
    @input="searchInfo"
    :placeholder="placeholder"
    :debounce="400"
    suffix-icon="el-icon-search"
    size="small"
    style="width: 240px;"
  />
</template>

<script>
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
    searchInfo () {
      this.$emit('on-input', this.search)
    }
  }
}
</script>

<template lang="html">
  <el-form-item label="期号" label-width="40px">
    <el-input
      v-model="issue"
      @input="$emit('on-change', issue)"
      placeholder="期号"
      clearable
    />
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchIssue',
  data () {
    return {
      issue: ''
    }
  },
  methods: {
    reset () {
      this.issue = ''
    }
  }
}
</script>

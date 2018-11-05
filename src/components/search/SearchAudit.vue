<template lang="html">
  <el-form-item label="审批状态">
    <el-select v-model="auditStatus" @change="$emit('on-change', auditStatus)" placeholder="选择审批状态" clearable>
      <el-option
        v-for="option in auditOptions"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchAudit',
  data () {
    return {
      auditStatus: '',
      auditOptions: [
        { label: '待审核', value: 0 },
        { label: '已查阅，待确认', value: 1 },
        { label: '审批通过', value: 2 },
        { label: '审批拒绝', value: 3 }
      ]
    }
  }
}
</script>

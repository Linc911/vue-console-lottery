<template lang="html">
  <el-form-item label="会员分组">
    <el-select
      v-model="selectedGroup"
      @change="$emit('on-change', selectedGroup)"
      placeholder="选择会员分组"
      clearable
    >
      <el-option
        v-for="group in groups"
        :key="group.value"
        :label="group.label"
        :value="group.value"
      />
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'SearchUserGroup',
  data () {
    return {
      selectedGroup: '',
      groups: []
    }
  },
  created () {
    this.fetchUserGroups()
  },
  methods: {
    reset () {
      this.selectedGroup = ''
    },
    fetchUserGroups () {
      this.$httpAPI.fetchUserGroups({ params: { pageNo: 1, pageSize: 100 } }).then(response => {
        this.$_.forEach(response.data.data, group => {
          this.groups.push({
            value: group.groupId,
            label: group.name
          })
        })
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.el-select {
  width: 100px;
}
</style>

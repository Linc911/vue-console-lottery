<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="分配角色权限" width="560px">
    <el-transfer
      v-model="transferCurrentData"
      :data="transferData"
      :filter-method="transferFilterMethod"
      :titles="[ '已分配权限', '未分配权限' ]"
      filter-placeholder="角色权限"
      filterable
    />
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

export default {
  name: 'RolesSettingDialogUpdate',
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateSystemRolesItem',
      idParams: {}, // 必须携带的Id参数/及其他参数
      formData: { name: '' },
      rules: {
        name: [
          { required: true, message: '角色名称' },
          { max: 20, message: '角色名称不能超过20位字符' }
        ]
      }
    }
  },
  watch: {
    data () {
      this.idParams = { id: this.data.id }
    }
  }
}
</script>

<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="创建新公告" width="500px">
    <NoticeListDialogForm @on-validated="handleValidationSuccess" ref="form" />

    <span slot="footer">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogCreateMixin } from '@/mixins'

import NoticeListDialogForm from './NoticeListDialogForm'

export default {
  name: 'NoticeListDialogCreate',
  components: {
    NoticeListDialogForm
  },
  mixins: [ dialogCreateMixin ],
  data () {
    return {
      createHttpAPI: 'updateNoticeItem'
    }
  }
}
</script>

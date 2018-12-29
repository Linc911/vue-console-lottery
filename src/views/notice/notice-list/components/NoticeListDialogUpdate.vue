<template lang="html">
  <el-dialog :visible.sync="dialogVisible" title="修改公告" width="500px">
    <NoticeListDialogForm @on-validated="handleValidationSuccess" :data="data" ref="form" />

    <span slot="footer">
      <el-button @click="$refs.form.validateForm()" type="primary" size="small">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { dialogUpdateMixin } from '@/mixins'

import NoticeListDialogForm from './NoticeListDialogForm'

export default {
  name: 'NoticeListDialogUpdate',
  components: {
    NoticeListDialogForm
  },
  mixins: [ dialogUpdateMixin ],
  data () {
    return {
      updateHttpAPI: 'updateNoticeItem'
    }
  }
}
</script>

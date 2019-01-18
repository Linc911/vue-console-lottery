<template lang="html">
  <el-form :model="formData" size="small" inline>
    <el-form-item label="是否PC">
      <FormSelectArray
        @on-change="$set(formData, 'pc', $event)"
        :options="[ '否', '是' ]"
        :styles="{ width: '100px' }"
        ref="pc"
      />
    </el-form-item>

    <el-form-item label="是否MP">
      <FormSelectArray
        @on-change="$set(formData, 'mp', $event)"
        :options="[ '否', '是' ]"
        :styles="{ width: '100px' }"
        ref="mp"
      />
    </el-form-item>

    <el-form-item label="启用状态">
      <FormSelectArray
        @on-change="$set(formData, 'status', $event)"
        :options="[ '启用', '禁用', '发布' ]"
        :styles="{ width: '100px' }"
        ref="status"
      />
    </el-form-item>

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'SystemNoticeSearch',
  components: {
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>

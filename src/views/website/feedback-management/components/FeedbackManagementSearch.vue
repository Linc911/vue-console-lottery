<template lang="html">
  <el-form :model="formData" size="small" inline>
    <el-form-item label="用户账号">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        placeholder="用户账号"
        :styles="{ width: '140px' }"
        ref="username"
      />
    </el-form-item>

    <el-form-item label="处理状态">
      <FormSelectArray
        @on-change="$set(formData, 'status', $event)"
        :options="[ '待审核', '已查看', '待解决', '已解决', '不予解决' ]"
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

import FormInput from '@/components/form/FormInput'
import FormSelectArray from '@/components/form/FormSelectArray'

export default {
  name: 'ActivityListSearch',
  components: {
    FormInput,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>

<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'author', $event)"
      label="消息作者"
      width="174px"
      ref="author"
    />

    <FormSelect
      @on-change="$set(formData, 'target', $event)"
      httpAPIName="fetchPublicUserGroup"
      :httpAPIParams="{ params: { pageNo: 1, pageSize: 1000 } }"
      labelAttr="name"
      valueAttr="groupId"
      prop="target"
      label="消息对象"
      width="100px"
      filterable
      ref="target"
    />

    <div style="display: inline-block">
      <SearchIcon @click.native="search" />
      <SearchReset @click.native="reset" />
    </div>
  </el-form>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'SystemMessageSearch',
  components: {
    FormInput,
    FormSelect
  },
  mixins: [ searchInnerMixin ]
}
</script>

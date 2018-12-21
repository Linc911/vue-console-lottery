<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form :model="formData" size="small" inline>
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @submit.prevent.stop
        @on-change="$set(formData, 'username', $event)"
        label="代理账户"
        width="174px"
        ref="username"
      />

      <FormSelectStatic
        @on-change="$set(formData, 'status', $event)"
        :options="[
          { value: 0, label: '启用' },
          { value: 1, label: '禁用' },
        ]"
        label="启用状态"
        width="100px"
        ref="status"
      />

      <div style="display: inline-block">
        <SearchIcon @click.native="search" />
        <SearchReset @click.native="reset" />
      </div>
    </el-form>
  </div>
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormInput from '@/components/form/FormInput'
import FormSelect from '@/components/form/FormSelect'
import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'RebateSettingSearch',
  components: {
    FormInput,
    FormSelect,
    FormSelectStatic
  },
  mixins: [ searchInnerMixin ]
}
</script>

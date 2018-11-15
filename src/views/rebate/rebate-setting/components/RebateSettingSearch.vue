<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form @submit.native.prevent :model="formData" size="small" label-width="80px" inline>
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @submit.prevent.stop
        @on-change="$set(formData, 'name', $event)"
        label="返水名称"
        width="174px"
        ref="name"
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

export default {
  name: 'RemittanceShortcutSearch',
  components: {
    FormInput
  },
  mixins: [ searchInnerMixin ]
}
</script>

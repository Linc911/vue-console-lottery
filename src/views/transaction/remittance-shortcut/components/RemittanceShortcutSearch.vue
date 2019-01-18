<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form @submit.native.prevent :model="formData" size="small" label-width="80px" inline>
      <el-form-item label="支付户名">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'payName', $event)"
          placeholder="支付户名"
          :styles="{ width: '150px' }"
          ref="payName"
        />
      </el-form-item>

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

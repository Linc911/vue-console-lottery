<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form @submit.native.prevent :model="formData" size="small" inline>
      <el-form-item label="返水名称">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'name', $event)"
          placeholder="返水名称"
          :styles="{ width: '150px' }"
          ref="name"
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
  name: 'RebateSettingSearch',
  components: {
    FormInput
  },
  mixins: [ searchInnerMixin ]
}
</script>

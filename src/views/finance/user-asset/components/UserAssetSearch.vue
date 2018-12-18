<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormInput
      @keyup.native.enter="$emit('on-search', formData)"
      @on-change="$set(formData, 'username', $event)"
      label="会员账户"
      width="174px"
      ref="username"
    />

    <FormSelectStatic
      @on-change="$set(formData, '类型', $event)"
      :options="[
        { value: 0, label: '提款' },
        { value: 1, label: '在线存款' },
        { value: 2, label: '填单存款' },
        { value: 3, label: '优惠' },
        { value: 4, label: '返水' },
        { value: 5, label: '派送' },
        { value: 6, label: '红包转入' },
        { value: 7, label: '红包转出' },
        { value: 8, label: '分润' },
        { value: 9, label: '人工加款' },
        { value: 10, label: '人工减款' }
      ]"
      label="类型"
      width="120px"
      ref="status"
    />

    <FormSelectStatic
      @on-change="$set(formData, 'status', $event)"
      :options="[
        { value: 0, label: '待处理' },
        { value: 1, label: '成功' },
        { value: 2, label: '失败' },
        { value: 3, label: '回收' }
      ]"
      label="处理状态"
      width="100px"
      ref="status"
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
import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'UserAssetSearch',
  components: {
    FormInput,
    FormSelect,
    FormSelectStatic
  },
  mixins: [ searchInnerMixin ]
}
</script>

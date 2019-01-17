<template lang="html">
  <el-form :model="formData" size="small" inline>
    <el-form-item label="会员账号">
      <FormInput
        @keyup.native.enter="$emit('on-search', formData)"
        @on-change="$set(formData, 'username', $event)"
        placeholder="会员账号"
        :styles="{ width: '140px' }"
        ref="username"
      />
    </el-form-item>

    <el-form-item label="类型">
      <FormSelectArray
        @on-change="$set(formData, 'type', $event)"
        :options="[ '提款', '在线存款', '填单存款', '优惠', '返水', '派送', '红包转入', '红包转出', '分润', '人工加款', '人工减款' ]"
        :styles="{ width: '100px' }"
        ref="type"
      />
    </el-form-item>

    <el-form-item label="处理状态">
      <FormSelectArray
        @on-change="$set(formData, 'status', $event)"
        :options="[ '待处理', '成功', '失败', '回收' ]"
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
  name: 'UserAssetSearch',
  components: {
    FormInput,
    FormSelectArray
  },
  mixins: [ searchInnerMixin ]
}
</script>

<template lang="html">
  <el-form :model="formData" size="small" inline>
    <FormSelectStatic
      @on-change="$set(formData, 'pc', $event)"
      :options="[
        { value: 0, label: '否' },
        { value: 1, label: '是' }
      ]"
      label="是否PC"
      width="100px"
      ref="pc"
    />

    <FormSelectStatic
      @on-change="$set(formData, 'mp', $event)"
      :options="[
        { value: 0, label: '否' },
        { value: 1, label: '是' }
      ]"
      label="是否MP"
      width="100px"
      ref="mp"
    />

    <FormSelectStatic
      @on-change="$set(formData, 'status', $event)"
      :options="[
        { value: 0, label: '启用' },
        { value: 1, label: '禁用' },
        { value: 2, label: '发布' }
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
</template>

<script type="text/javascript">
import { searchInnerMixin } from '@/mixins'

import FormSelectStatic from '@/components/form/FormSelectStatic'

export default {
  name: 'SystemNoticeSearch',
  components: {
    FormSelectStatic
  },
  mixins: [ searchInnerMixin ]
}
</script>

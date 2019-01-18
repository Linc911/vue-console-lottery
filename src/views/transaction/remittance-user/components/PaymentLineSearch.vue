<template lang="html">
  <!-- 条件筛选 -->
  <div class="search">
    <el-form @submit.native.prevent :model="formData" size="small" label-width="80px" inline>
      <el-form-item label="收款户名">
        <FormInput
          @keyup.native.enter="$emit('on-search', formData)"
          @on-change="$set(formData, 'username', $event)"
          placeholder="收款户名"
          :styles="{ width: '140px' }"
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
import FormInput from '@/components/form/FormInput'
import FormSelect from '@/components/form/FormSelect'
import SearchIcon from '@/components/search/SearchIcon'
import SearchReset from '@/components/search/SearchReset'

export default {
  name: 'PaymentLineSearch',
  components: {
    FormInput,
    FormSelect,
    SearchIcon,
    SearchReset
  },
  data () {
    return {
      formData: {}
    }
  },
  methods: {
    search () {
      // this.$message.warning('接口正在调试中...')
      this.$emit('on-search', this.formData)
    },
    reset () {
      for (let key in this.$refs) {
        this.$refs[key].reset()
      }

      this.formData = {}
    }
  }
}
</script>

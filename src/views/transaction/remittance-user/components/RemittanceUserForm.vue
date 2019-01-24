<template lang="html">
  <el-form :model="formData" :rules="rules" size="small" label-width="100px" ref="form" class="clearfix">
    <el-form-item prop="username" label="支付户名">
      <el-input v-model.trim="formData.username" placeholder="支付户名" />
    </el-form-item>

    <el-form-item prop="discountRatio" label="优惠比例%">
      <el-input v-model.trim="formData.discountRatio" type="number" placeholder="优惠比例" />
    </el-form-item>

    <el-form-item prop="sort" label="排列顺序">
      <el-input v-model.trim="formData.sort" type="number" placeholder="排列顺序" />
    </el-form-item>

    <el-form-item prop="codeUrl" label="二维码" class="custom-block">
      <FormUploadImage
        @on-uploaded="$set(formData, 'codeUrl', $event.response)"
        @on-removed="$set(formData, 'codeUrl', $event)"
        :fileList="formData.codeUrl ? [{ name: formData.username, url: formData.codeUrl }] : []"
      />
    </el-form-item>

    <el-form-item prop="bank" label="收款银行" class="custom-block" >
      <el-input v-model.trim="formData.bank" placeholder="收款银行"/>
    </el-form-item>

    <el-form-item prop="userAccount" label="收款账号" class="custom-block">
      <el-input v-model.trim="formData.userAccount" placeholder="收款账号" />
    </el-form-item>

    <el-form-item prop="bankAddress" label="银行地址" class="custom-block">
      <el-input v-model.trim="formData.bankAddress" placeholder="银行地址" />
    </el-form-item>

    <el-form-item prop="userGroups" label="会员分组" class="custom-block">
      <FormSelectAsync
        @on-change="$set(formData, 'userGroups', $event)"
        :value="formData.userGroups"
        httpAPIName="fetchUserGroups"
        :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
        labelAttr="name"
        valueAttr="groupId"
        multiple
      />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormSelectAsync from '@/components/form/FormSelectAsync'
import FormUploadImage from '@/components/form/FormUploadImage'

export default {
  name: 'RemittanceUserForm',
  components: {
    FormSelectAsync,
    FormUploadImage
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      formData: { username: '', discountRatio: '', sort: 0, userGroups: '' },
      rules: {
        username: validators.validateRequired('支付户名不能为空'),
        discountRatio: validators.validateRequired('优惠比例不能为空'),
        sort: validators.validateRequired('排序顺序不能为空'),
        userGroups: validators.validateSelect('会员分组至少选择一个')
      }
    }
  }
}
</script>

<style scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>

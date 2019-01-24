<template lang="html">
  <el-form :model="formData" :rules="rules" size="small" label-width="100px" ref="form" class="clearfix">
    <el-form-item prop="name" label="接口名称">
      <el-input v-model.trim="formData.name" placeholder="接口名称" />
    </el-form-item>

    <el-form-item prop="interfaceTypeId" label="接口类型">
      <FormSelectAsync
        @on-change="$set(formData, 'interfaceTypeId', $event)"
        :value="formData.interfaceTypeId"
        httpAPIName="fetchTransactionPaymentPortType"
        :httpAPIParams="{ params: { type: 1 } }"
        labelAttr="name"
        valueAttr="dictionaryId"
        ref="interfaceTypeId"
      />
    </el-form-item>

    <el-form-item prop="payTypeId" label="支付类型">
      <FormSelectAsync
        @on-change="$set(formData, 'payTypeId', $event)"
        :value="formData.payTypeId"
        httpAPIName="fetchTransactionPaymentType"
        :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
        labelAttr="name"
        valueAttr="id"
        ref="payTypeId"
      />
    </el-form-item>

    <el-form-item prop="discountRatio" label="优惠比例%">
      <el-input v-model="formData.discountRatio" type="number" placeholder="优惠比例" />
    </el-form-item>

    <el-form-item prop="sort" label="排列顺序">
      <el-input v-model="formData.sort" placeholder="排列顺序" type="number" />
    </el-form-item>

    <el-form-item prop="status" label="启用状态">
      <el-radio-group v-model="formData.status">
        <el-radio :label="0">启用</el-radio>
        <el-radio :label="1">禁用</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item prop="rebateUserGroups" label="会员分组" class="custom-block">
      <FormSelectAsync
        @on-change="$set(formData, 'rebateUserGroups', $event)"
        :value="formData.userGroups"
        httpAPIName="fetchUserGroups"
        :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
        labelAttr="name"
        valueAttr="groupId"
        multiple
        ref="rebateUserGroups"
      />
    </el-form-item>

    <el-form-item prop="merchantId" label="商家账号" class="custom-block">
      <el-input v-model="formData.merchantId" placeholder="商家账号" />
    </el-form-item>

    <el-form-item prop="payAddress" label="支付地址" class="custom-block">
      <el-input v-model="formData.payAddress" placeholder="支付地址" />
    </el-form-item>

    <el-form-item prop="publicKey" label="秘钥(公钥)" class="custom-block">
      <el-input v-model="formData.publicKey" placeholder="秘钥(公钥)" />
    </el-form-item>

    <el-form-item prop="privateKey" label="秘钥(私钥)" class="custom-block">
      <el-input v-model="formData.privateKey" placeholder="秘钥(私钥)" />
    </el-form-item>

    <el-form-item prop="ipWhiteList" label="IP白名单" class="custom-block">
      <el-input v-model="formData.ipWhiteList" placeholder="ip白名单，多个用逗号分隔" />
    </el-form-item>

    <el-form-item label="备注" class="custom-block">
      <el-input v-model="formData.remark" type="textarea" rows="3" placeholder="" />
    </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormSelectAsync from '@/components/form/FormSelectAsync'

export default {
  name: 'PaymentPortForm',
  components: {
    FormSelectAsync
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      formData: {
        name: '',
        interfaceTypeId: '',
        payTypeId: '',
        discountRatio: '',
        status: '',
        sort: '',
        rebateUserGroups: '',
        merchantId: '',
        payAddress: '',
        publicKey: '',
        privateKey: '',
        ipWhiteList: ''
      },
      rules: {
        name: validators.validateRequired('接口名称不能为空'),
        interfaceTypeId: validators.validateSelect('接口类型必须选择一个'),
        payTypeId: validators.validateSelect('支付类型须必须选择一个'),
        discountRatio: validators.validateSelect('优惠比例不能为空'),
        status: validators.validateSelect('启用状态必须选择一个'),
        sort: validators.validateRequired('排序顺序不能为空'),
        rebateUserGroups: validators.validateSelect('会员分组至少选择一个'),
        merchantId: validators.validateRequired('商家账号不能为空'),
        payAddress: validators.validateRequired('支付地址不能为空'),
        publicKey: validators.validateRequired('秘钥(公钥)不能为空'),
        privateKey: validators.validateRequired('秘钥(私钥)不能为空'),
        ipWhiteList: validators.validateRequired('IP白名单不能为空')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>

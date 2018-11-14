<template lang="html">
  <div class="port-create">
    <el-dialog :visible.sync="dialogVisible" title="修改支付接口配置" width="760px">
      <el-form
        :model="formData"
        :rules="rules"
        label-width="100px"
        size="small"
        ref="formPaymentPortUpdate"
        class="clearfix"
      >
        <el-form-item prop="name" label="接口名称">
          <el-input v-model.trim="formData.name" placeholder="接口名称" />
        </el-form-item>

        <FormSelect
          @on-change="$set(formData, 'interfaceTypeId', $event)"
          :value="formData.interfaceTypeId"
          httpAPIName="fetchTransactionPaymentPortType"
          :httpAPIParams="{ params: { type: 1 } }"
          labelAttr="name"
          valueAttr="dictionaryId"
          prop="interfaceTypeId"
          label="接口类型"
          ref="interfaceTypeId"
        />

        <FormSelect
          @on-change="$set(formData, 'payTypeId', $event)"
          :value="formData.payTypeId"
          httpAPIName="fetchTransactionPaymentType"
          :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
          labelAttr="name"
          valueAttr="id"
          prop="payTypeId"
          label="支付类型"
          ref="payTypeId"
        />

        <el-form-item prop="discountRatio" label="优惠比例%">
          <el-input v-model="formData.discountRatio" type="number" placeholder="优惠比例" />
        </el-form-item>

        <el-form-item prop="sort" label="排列顺序">
          <el-input v-model="formData.sort" placeholder="排列顺序" type="number" />
        </el-form-item>

        <FormRadio
          @on-change="$set(formData, 'status', $event)"
          :value="formData.status"
          :options="[
            { label: 0, title: '启用' },
            { label: 1, title: '不启用' }
          ]"
          prop="status"
          label="是否启用"
          ref="status"
        />

        <FormSelect
          @on-change="$set(formData, 'rebateUserGroups', $event)"
          :value="formData.userGroups"
          httpAPIName="fetchUserGroups"
          :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
          labelAttr="name"
          valueAttr="groupId"
          prop="rebateUserGroups"
          label="会员分组"
          multiple
          ref="rebateUserGroups"
        />

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

      <span slot="footer">
        <el-button @click="submitForm('formPaymentPortUpdate')" type="primary" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { updateMixin } from '@/mixins'

import FormSelect from '@/components/form/FormSelect'
import FormRadio from '@/components/form/FormRadio'

export default {
  name: 'PaymentPortDialogCreate',
  components: {
    FormSelect,
    FormRadio
  },
  mixins: [ updateMixin ],
  data () {
    return {
      idObject: { id: this.data.id }, // 必须携带的参数
      updateHttpAPI: 'updateTransactionPaymentPort',
      formData: this.data,
      rules: {
        name: { required: true, message: '接口名称不能为空' },
        interfaceTypeId: { required: true, message: '接口类型必须选择一个' },
        payTypeId: { required: true, message: '支付类型须必须选择一个' },
        discountRatio: { required: true, message: '优惠比例不能为空' },
        status: { required: true, message: '启用状态必须选择一个' },
        sort: { required: true, message: '排序顺序不能为空' },
        // rebateUserGroups: { required: true, message: '会员分组至少选择一个' },
        merchantId: { required: true, message: '商家账号不能为空' },
        payAddress: { required: true, message: '支付地址不能为空' },
        publicKey: { required: true, message: '秘钥(公钥)不能为空' },
        privateKey: { required: true, message: '秘钥(私钥)不能为空' },
        ipWhiteList: { required: true, message: 'IP白名单不能为空' }
      }
    }
  },
  watch: {
    data () {
      this.idObject = { id: this.data.id }
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

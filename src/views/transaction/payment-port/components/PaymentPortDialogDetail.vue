<template lang="html">
  <div>
    <el-dialog :visible.sync="dialogVisible" title="修改支付接口配置" width="760px">
      <el-form
        :model="formData"
        label-width="100px"
        size="small"
        disabled
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

        <el-form-item prop="status" label="启用状态">
          <el-radio-group v-model="formData.status">
            <el-radio :label="0">启用</el-radio>
            <el-radio :label="1">禁用</el-radio>
          </el-radio-group>
        </el-form-item>

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

        <el-form-item prop="createTime" label="创建时间">
          <el-input :value="formData.createTime | time" />
        </el-form-item>

        <el-form-item prop="createId" label="创建用户">
          <el-input :value="formData.createId" />
        </el-form-item>

        <el-form-item prop="updateTime" label="上次修改时间">
          <el-input :value="formData.updateTime | time" />
        </el-form-item>

        <el-form-item prop="updateId" label="修改用户">
          <el-input :value="formData.updateId" />
        </el-form-item>

        <el-form-item prop="limitStatus" label="限额状态">
          <el-radio-group v-model="formData.limitStatus">
            <el-radio :label="0">限额</el-radio>
            <el-radio :label="1">不限额</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="fineTuningStatus" label="微调状态">
          <el-radio-group v-model="formData.fineTuningStatus">
            <el-radio :label="0">微调</el-radio>
            <el-radio :label="1">不能微调</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="pcStatus" label="是否 电脑端">
          <el-radio-group v-model="formData.pcStatus">
            <el-radio :label="0">电脑端</el-radio>
            <el-radio :label="1">不是电脑端</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item prop="phoneStatus" label="是否 手机端">
          <el-radio-group v-model="formData.phoneStatus">
            <el-radio :label="0">手机端</el-radio>
            <el-radio :label="1">不是手机端</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { dialogDetailMixin } from '@/mixins'

import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'PaymentPortDialogDetail',
  components: {
    FormSelect
  },
  mixins: [ dialogDetailMixin ]
}
</script>

<style lang="scss" scoped>
.el-form-item {
  float: left;
  width: 50%;
}
</style>

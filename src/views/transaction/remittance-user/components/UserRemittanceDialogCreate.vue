<template lang="html">
  <div class="remittance-create">
    <el-dialog :visible.sync="dialogVisible" title="创建新汇款配置" width="760px">
      <el-form
        :model="formData"
        :rules="rules"
        label-width="100px"
        size="small"
        class="clearfix"
        ref="formCreate"
      >
        <el-form-item prop="username" label="收款户名">
          <el-input v-model.trim="formData.username" placeholder="收款户名" />
        </el-form-item>

        <el-form-item label="收款方式">
          <el-radio-group v-model="receiptWay">
            <el-radio :label="0">二维码</el-radio>
            <el-radio :label="1">银行</el-radio>
          </el-radio-group>
        </el-form-item>

        <template v-if="!receiptWay">
          <el-form-item label="二维码上传" class="custom-block">
            <el-upload
              action="http://192.168.5.182:8080/api-f/files-anon/fdfsupload"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-success="handleUploadSuccess"
              :disabled="uploadDisabled"
              >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogImageVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item prop="bank" label="收款银行">
            <el-input v-model.trim="formData.bank" placeholder="收款银行" />
          </el-form-item>

          <el-form-item prop="userAccount" label="收款账号" class="custom-block">
            <el-input v-model.trim="formData.userAccount" placeholder="收款账号" />
          </el-form-item>

          <el-form-item prop="bankAddress" label="银行地址" class="custom-block">
            <el-input v-model.trim="formData.bankAddress" placeholder="银行地址" />
          </el-form-item>
        </template>

        <el-form-item prop="sort" label="排列顺序">
          <el-input v-model.trim="formData.sort" type="number" min="0" max="99" placeholder="排列顺序" />
        </el-form-item>

        <el-form-item prop="discountRatio" label="赠送比例%">
          <el-input v-model.trim="formData.discountRatio" type="number" placeholder="赠送比例" />
        </el-form-item>

        <FormSelect
          @on-change="$set(formData, 'userGroups', $event)"
          :value="formData.userGroups"
          httpAPIName="fetchUserGroups"
          :httpAPIParams="{ params: { pageNo: 1, pageSize: 100 } }"
          labelAttr="name"
          valueAttr="groupId"
          prop="userGroups"
          label="会员分组"
          multiple
        />
      </el-form>

      <span slot="footer">
        <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'UserRemittanceDialogCreate',
  components: {
    FormSelect
  },
  data () {
    return {
      dialogImageUrl: '',
      dialogImageVisible: false,
      uploadDisabled: false,
      receiptWay: 0,
      dialogVisible: false,
      formData: { sort: 0, userGroups: [] },
      rules: {
        username: { required: true, message: '支付户名不能为空' },
        discountRatio: { required: true, message: '优惠比例不能为空' },
        // codeUrl: { required: true, message: '二维码地址不能为空' },
        sort: [
          { required: true, message: '排列顺序不能为空' },
          { pattern: /^[0-9]{1,2}$/, message: '排列顺序必须为 0 - 99 整数' }
        ],
        // bank: { required: true, message: '收款银行不能为空' },
        // userAccount: { required: true, message: '收款账号不能为空' },
        // bankAddress: { required: true, message: '银行地址不能为空' }
        userGroups: { required: true, message: '会员分组至少选择一个' }
      }
    }
  },
  methods: {
    handleUploadSuccess (response) {
      this.formData.codeUrl = response
      this.uploadDisabled = true
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
      this.uploadDisabled = true
    },
    toggleDialogVisible (status) {
      this.dialogVisible = status
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogVisible = false

          this.$httpAPI.createTransactionRemittance(this.formData).then(response => {
            if (response.data.status === 200) {
              this.$emit('on-created')
              this.$message.success('创建新会员汇款设置成功！')
            }
          }).catch(error => console.log(error))
        } else {
          this.$message.warning('表单填写不正确，请根据提示填写！')
        }
      })
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

<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="80px"
    size="small"
    ref="form"
    class="clearfix"
  >
     <el-form-item prop="username" label="用户名称">
        <el-input v-model.trim="formData.username" placeholder="用户名称" />
      </el-form-item>

      <el-form-item prop="nickname" label="用户昵称" >
        <el-input v-model.trim="formData.nickname" placeholder="用户昵称" />
      </el-form-item>

      <el-form-item prop="phone" label="手机号码" >
        <el-input v-model.trim="formData.phone" type="number" placeholder="手机号码" />
      </el-form-item>

      <FormSelect
        :value="formData.roleIds"
        @on-change="$set(formData, 'roleIds', $event)"
        httpAPIName="fetchSystemRolesList"
        labelAttr="name"
        valueAttr="id"
        prop="roleIds"
        label="角色类型"
        multiple
        ref="roleIds"
      />

      <!-- 如果是修改状态，传入hidden;隐藏这部分内容 -->
      <div v-if="!hidden">
        <el-form-item prop="password" label="登录密码">
          <el-input v-model.trim="formData.password" placeholder="登录密码" />
        </el-form-item>
      </div>

      <el-form-item prop="qq" label="QQ号码">
        <el-input v-model.trim="formData.qq" placeholder="QQ号码" />
      </el-form-item>

      <el-form-item prop="wechat" label="微信号">
        <el-input v-model.trim="formData.wechat" placeholder="微信号" />
      </el-form-item>

      <el-form-item prop="email" label="电子邮箱">
        <el-input v-model.trim="formData.email" type="mail" placeholder="电子邮箱" />
      </el-form-item>

      <el-form-item prop="enabled" label="启用状态">
        <el-radio-group v-model="formData.enabled">
          <el-radio :label="0">禁用</el-radio>
          <el-radio :label="1">启用</el-radio>
        </el-radio-group>
      </el-form-item>
  </el-form>
</template>

<script>
import { formComponentMixin } from '@/mixins'

import validators from '@/config/form'

import FormSelect from '@/components/form/FormSelect'

export default {
  name: 'UsersSettingForm',
  components: {
    FormSelect
  },
  props: {
    hidden: {
      type: Boolean,
      default: false
    }
  },
  mixins: [ formComponentMixin ],
  data () {
    return {
      // 验证的form属性必须要初始化，否则在更新时无法验证
      formData: { username: '', password: '123456', enabled: 1, type: 'BACKEND' },
      rules: {
        username: validators.validateRequired('用户名称'),
        roleIds: validators.validateSelect('角色类型'),
        password: validators.validateStringLength('登录密码', 6, 20)
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

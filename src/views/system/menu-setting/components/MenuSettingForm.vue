<template lang="html">
  <el-form
    :model="formData"
    :rules="rules"
    label-width="80px"
    size="small"
    ref="formCreate"
  >
    <el-form-item label="上级菜单" prop="parentId">
      <el-select
        @change="hanldeSelectChanged"
        v-model="formData.parentId"
        placeholder="选择上级菜单"
        class="custom-block"
        filterable
      >
        <el-option key="root" label="root" :value="0"/>
        <template v-for="item in options">
          <el-option :key="item.id" :label="item.name" :value="item.id" />
        </template>
      </el-select>
    </el-form-item>

    <el-form-item label="菜单名称" prop="name">
      <el-input v-model.trim="formData.name" placeholder="系统设置" />
    </el-form-item>

    <el-form-item label="路由地址" prop="url">
      <el-input v-model.trim="formData.url" placeholder="/system/menu" />
    </el-form-item>

    <el-form-item label="图标代码" prop="css">
      <el-input v-model.trim="formData.css" placeholder="fa-gear" style="width: 75%;" />
      <span class="pull-right">图标示例：<i class="fa" :class="formData.css"></i></span>
    </el-form-item>

    <el-form-item label="排列顺序" prop="sort">
      <el-input
        @keyup.native.enter="submitForm('formCreate')"
        v-model.trim="formData.sort"
        type="number"
        :min="1"
        :max="100"
        placeholder="排列顺序"
      />
    </el-form-item>

    <el-form-item style="text-align: right">
      <el-checkbox v-model="checked" class="pull-left">{{ saveString }}</el-checkbox>
      <el-button @click="submitForm('formCreate')" type="primary" size="small">确定</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import config from '@/config/data'
import validators from '@/config/form'

export default {
  name: 'MenuSettingForm',
  props: {
    data: {
      type: Object,
      default () {
        return { parentId: '', name: '', url: '', css: 'fa-gear', sort: 0 }
      }
    }
  },
  data () {
    return {
      saveString: config.COMPONENT_CREATION_RECORD,
      checked: true,
      options: [],
      formData: this.data,
      rules: {
        parentId: validators.validateSelect('上级菜单'),
        name: validators.validateRequired('菜单名称'),
        url: this.data.parentId ? validators.validateRequired('路由地址') : {},
        css: validators.validateRequired('图标代码'),
        sort: validators.validateRequired('排序')
      }
    }
  },
  watch: {
    data () {
      this.formData = Object.assign(this.formData, this.data)

      this._generateValidationOfUrl(this.data.parentId) // 根据选择不同级别的菜单，url 字段是否是必填
    }
  },
  created () {
    this.fetchMenuList()
  },
  methods: {
    // 根据选择不同级别的菜单，url 字段是否是必填
    hanldeSelectChanged (value) {
      this._generateValidationOfUrl(value)
    },
    // 提交表单
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('on-validated', { data: this.formData, checked: this.checked })
        } else {
          this.$message.warning(config.VALIDATION_FAILED)
        }
      })
    },
    // 初始化表单
    resetFields () {
      this.$refs.formCreate.resetFields()
    },
    // 请求菜单数据，获取第一级菜单
    fetchMenuList () {
      this.$httpAPI.fetchSystemMenuList().then(response => {
        this.options = this.$_.filter(response.data, (item) => !item.parentId)
      }).catch(error => console.log(error))
    },
    // 根据上级菜单是root时， url才是选填；其他情况必须填写
    _generateValidationOfUrl (vale) {
      if (vale) {
        this.$set(this.rules, 'url', validators.validateRequired('路由地址'))
      } else {
        this.$set(this.rules, 'url', {})
      }
    }
  }
}
</script>

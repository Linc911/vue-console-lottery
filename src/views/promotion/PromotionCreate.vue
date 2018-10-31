<template lang="html">
  <section class="permission-create">
    <el-form
      :model="formData"
      :rules="rules"
      label-width="120px"
      ref="permissionCreateForm"
    >
      <el-form-item prop="permission" label="站点编码">
        <el-input placeholder="站点编码" />
      </el-form-item>
      <el-form-item prop="permission" label="排序">
        <el-input placeholder="排序" />
      </el-form-item>
      <el-form-item prop="permission" label="活动标题">
        <el-input placeholder="活动标题" />
      </el-form-item>

      <el-form-item label="活动时间">
        <el-date-picker
          v-model="valueDate"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
          size="small"
          clearable
        />
        <!-- style="width: 240px; margin-right: 20px;" -->
      </el-form-item>

      <el-form-item prop="permission" label="是否启用">
        <el-switch v-model="value" />
      </el-form-item>

      <el-form-item prop="permission" label="平台">
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="PC端" />
            <el-checkbox label="手机" />
            <el-checkbox label="iPad" />
          </el-checkbox-group>
      </el-form-item>

      <el-form-item prop="permission" label="平台">
        <!-- <el-upload
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">Click to upload</el-button>
          <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </el-upload> -->
      </el-form-item>

      <el-form-item prop="permission" label="活动内容">
        <el-input type="textarea" placeholder="活动标题" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('permissionCreateForm')">确认</el-button>
        <el-button type="info" @click="$router.push('/promotion/list')">返回</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
export default {
  name: 'permissionCreate',
  data () {
    return {
      valueDate: '',
      value: '',
      checkList: '',
      formData: {
        name: '',
        permission: ''
      },
      rules: {
        name: [
          { required: true, message: '权限名不能为空' },
          { max: 20, message: '权限名长度不能超过20个字符' }
        ],
        permission: [
          { required: true, message: '权限标识不能为空' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.$axios.post('/api-u/permissions', this.formData).then(() => {
          //   this.$router.push('/system/permissions')
          // }).catch(error => console.log(error))
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  margin-bottom: 20px;
}
.search-left {
  float: left;
}
.search-right {
  float: right;
  text-align: right;
}
</style>

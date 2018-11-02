<template lang="html">
  <div class="unknown">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="公告类型" style="display: inline-block">
        <el-select v-model="form.noticeType" placeholder="请选择公告类型" style="width: 695px">
          <el-option label="站内公告" value="notice1"></el-option>
          <el-option label="内部公告" value="notice2"></el-option>
          <el-option label="支付公告" value="notice2"></el-option>
          <el-option label="彩票公告" value="notice2"></el-option>
          <el-option label="彩票图片" value="notice2"></el-option>
          <el-option label="手机弹窗" value="notice2"></el-option>
          <el-option label="PC弹窗" value="notice2"></el-option>
          <el-option label="优博弹窗公告" value="notice2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否显示" style="display: inline-block;margin-left: 145px">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="显示" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="站点编码">
        <el-input v-model="form.siteCode" style="width: 695px"></el-input>
      </el-form-item>
      <el-form-item label="截至时间" style="display: inline-block">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 695px"></el-date-picker>
      </el-form-item>
      <el-form-item label="排序" style="display: inline-block">
        <el-input v-model="form.sort" style="width: 695px"></el-input>
      </el-form-item>
      <el-form-item label="公告标题">
        <el-input v-model="form.noticeTitle"></el-input>
      </el-form-item>
      <el-form-item label="公告内容">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确认提交</el-button>
        <el-button type="primary" @click="onPreview">公告预览</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        noticeType: '',
        siteCode: '',
        date1: '',
        type: [],
        noticeTitle: '',
        sort: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    onPreview () {
      console.log('preview!')
    }
  }
}
</script>

<template lang="html">
  <!-- 条件筛选 -->
  <div class="filter-area clearfix">
    <div class="pull-left">
      <template>
        <span class="form-label">注册时间：</span>
        <el-date-picker
          v-model="valueDate"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
          size="small"
          clearable
          style="width: 240px; margin-right: 20px;"
        />
      </template>
      <template>
        <span class="form-label">所属分组：</span>
        <el-select v-model="valueData" size="small" placeholder="全部">
          <el-option label="在线" :value="0"></el-option>
          <el-option label="充值" :value="1"></el-option>
          <el-option label="彩金" :value="2"></el-option>
        </el-select>
      </template>
    </div>
    <div class="filter-right">
      <el-input v-model="input4" size="small" placeholder="请输入内容" style="width: 240px;">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button icon="el-icon-refresh" size="small" style="margin-left: 10px;"></el-button>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      input4: '',
      valueDate: '',
      valueData: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-area {
  margin-bottom: 20px;
}
.filter-right {
  float: right;
  text-align: right;
}
</style>

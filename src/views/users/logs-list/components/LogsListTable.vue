<template>
  <el-table :data="data" size="small" highlight-current-row border>
    <el-table-column type="index" :width="36" />

    <el-table-column prop="createTime" label="请求时间" :min-width="140">
      <template slot-scope="scope">
        <span>{{scope.row.createTime | time}}</span>
      </template>
    </el-table-column>

    <el-table-column prop="module" label="请求模块" :min-width="120" />

    <el-table-column prop="params" label="请求参数" :min-width="240">
      <template slot-scope="scope">
        <BasePopoverTextarea :data="scope.row.params" :maxLength="60" />
      </template>
    </el-table-column>

    <el-table-column prop="username" label="请求账号" :min-width="100" />

    <el-table-column prop="ip" label="ip地址" />

    <el-table-column prop="area" label="所属区域" />

    <el-table-column prop="remark" label="备注" :min-width="150">
      <template slot-scope="scope">
        <BasePopoverTextarea :data="scope.row.remark" :maxLength="20" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BasePopoverTextarea from '@/components/base/BasePopoverTextarea'

export default {
  name: 'UsersListTable',
  components: {
    BasePopoverTextarea
  },
  mixins: [ tableComponentMixin ]
}
</script>

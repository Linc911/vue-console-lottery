<template lang="html">
  <el-table :data="data" size="small" highlight-current-row border>
    <el-table-column type="index" :width="36" />

    <el-table-column prop="username" label="会员账号" />

    <el-table-column prop="type0Amount" label="提款次数" sortable />

    <el-table-column prop="type0Money" label="提款金额" sortable>
      <template slot-scope="scope">
        <span>{{ scope.row.type0Money | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="depositAmount" label="存款次数" sortable />

    <el-table-column prop="depositMoney" label="存款金额" sortable>
      <template slot-scope="scope">
        <span>{{ scope.row.depositMoney | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="type4Money" label="返水金额" sortable>
      <template slot-scope="scope">
        <span>{{ scope.row.type4Money | RMB }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="banlance" label="会员余额" sortable>
      <template slot-scope="scope">
        <span>{{ scope.row.banlance | RMB }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'AccountCheckTable',
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

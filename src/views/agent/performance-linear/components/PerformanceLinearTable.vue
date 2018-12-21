<template lang="html">
  <div>
    <el-table :data="data" size="small" highlight-current-row border>
      <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="代理账号" />

      <el-table-column prop="nickname" label="代理姓名" />

      <el-table-column prop="agentAmount" label="下级代理数" :min-width="60" />

      <el-table-column prop="userAmount" label="下级会员数" :min-width="60"  />

      <el-table-column prop="totalAmount" label="会员投注笔数" :min-width="60"  />

      <el-table-column prop="totalBets" label="会员投注" :min-width="45"  />

      <el-table-column prop="banlance" label="会员余额">
        <template slot-scope="scope">
          <span>{{ scope.row.banlance | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="depositMoney" label="会员存款">
        <template slot-scope="scope">
          <span>{{ scope.row.depositMoney | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type0Money" label="会员取款">
        <template slot-scope="scope">
          <span>{{ scope.row.type0Money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="depositMoney" label="会员存款">
        <template slot-scope="scope">
          <span>{{ scope.row.depositMoney | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type4Money" label="会员返水">
        <template slot-scope="scope">
          <span>{{ scope.row.type4Money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type12Money" label="会员分润">
        <template slot-scope="scope">
          <span>{{ scope.row.type12Money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="type8Money" label="代理分润">
        <template slot-scope="scope">
          <span>{{ scope.row.type8Money | RMB }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="win" label="会员输赢">
        <template slot-scope="scope">
          <span>{{ scope.row.win | RMB }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

export default {
  name: 'PerformanceLinearTable',
  mixins: [ tableComponentMixin ]
}
</script>

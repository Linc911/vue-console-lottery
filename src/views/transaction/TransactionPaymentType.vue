<template>
  <div>
    <div>
      <el-button type="primary" icon="el-icon-plus" style="float: left;margin-bottom: 15px" @click="add"></el-button>
      <el-button type="primary" icon="el-icon-refresh" style="float: right;margin-bottom: 15px" @click="refresh"></el-button>
    </div>
    <el-table
      :data="tableData"
      size="small"
      highlight-current-row
      border
    >
      <el-table-column type="index" :min-width="30" />
      <el-table-column prop="name" label="支付类型">
      </el-table-column>
      <el-table-column prop="status" label="是否推荐">
        <template slot-scope="scope">
          <i @click="toggleControlStatus(scope.row.id, scope.row.status)"
            :class="scope.row.status ? 'el-icon-error' : 'el-icon-success'"
          ></i>
        </template>
      </el-table-column>
      <el-table-column prop="remark" label="备注">
      </el-table-column>
      <el-table-column prop="sort" label="排序" sortable>
      </el-table-column>
      <el-table-column prop="" label="操作">
        <template slot-scope="scope">
          <ModifyTheRemark :userId="String(scope.row.id)" :remarkProps="String(scope.row.remark)" />
          <ModifyTheSort :userId="String(scope.row.id)" />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import ModifyTheRemark from './child/ModifyTheRemark'
import ModifyTheSort from './child/ModifyTheSort'

export default {
  name: 'Describe',
  components: {
    ModifyTheRemark,
    ModifyTheSort
  },
  data () {
    return {
      tableData: []
    }
  },
  created () {
    this.fetchConfigPayTypeList()
  },
  methods: {
    add () {},
    refresh () {},
    fetchConfigPayTypeList () {
      this.$httpAPI.configPayTypeList().then(response => {
        console.log(response)
        this.tableData = response.data.data
      }).catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
  .el-icon-success {
    color: #189F92;
  }
</style>

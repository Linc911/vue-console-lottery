<template lang="html">
  <section class="users-keyinfo">
    <!-- 条件筛选 -->
    <FilterArea />
    <!-- 表格数据 -->
    <div class="table-list">
      <!-- 表格 -->
      <el-table
        :data="tableData"
        size="small"
        highlight-current-row
        border
      >
        <el-table-column type="index" />

        <el-table-column prop="username" label="用户名称" />

        <el-table-column prop="nickname" label="昵称" />

        <el-table-column prop="phone" label="手机号码" />

        <el-table-column prop="ivitedCode" label="邀请码" />

        <el-table-column prop="operations" label="操作">
          <template slot-scope="scope">
            <el-button @click="showDialog(scope.row)" icon="el-icon-edit" type="primary" size="mini" />
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <BasePagination @on-change="handlePaginationChange" :pageTotal="pageTotal" httpURL="fetchUsersList" />
    </div>
    <!-- 会员抽点详情及设置弹框 -->
    <el-dialog title="关键信息修改" :visible.sync="dialogVisible" width="400px">
      <el-form :model="userForm" label-width="100px">
        <el-form-item label="用户名" >
          <el-input v-model="userForm.username" size="small" />
        </el-form-item>

        <el-form-item label="昵称" >
          <el-input v-model="userForm.nickname" size="small" />
        </el-form-item>

        <el-form-item label="手机号码" >
          <el-input v-model="userForm.phone" size="small" />
        </el-form-item>

        <el-form-item label="邀请码" >
          <el-input v-model="userForm.ivitedCode" size="small" />
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="handleRebateFormConfirm" size="small">确认</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script>
import FilterArea from '@/components/others/FilterArea'
import BasePagination from '@/components/base/BasePagination'

export default {
  name: 'UsersKeyInfo',
  components: {
    FilterArea,
    BasePagination
  },
  data () {
    return {
      tableData: [],
      pageTotal: 0,
      dialogVisible: false,
      userForm: { username: '', nickname: '', phone: '', ivitedCode: '' }
    }
  },
  created () {
    this.fetchUsersList()
  },
  mounted () {
    this.$notify({
      title: '提示',
      message: '页面使用模拟数据，接口正在调试中...',
      type: 'warning',
      duration: 8000
    })
  },
  methods: {
    showDialog (user) {
      this.userForm = user
      this.dialogVisible = true
    },
    // 分页变化时，更新数据
    handlePaginationChange (data) {
      this.tableData = data
    },
    fetchUsersList (page) {
      this.$httpAPI.fetchUsersList({ params: { pageNo: 1, pageSize: 3 } }).then(response => {
        this.tableData = response.data.data
        this.pageTotal = 3
      }).catch(error => console.log(error))
    }
  }
}
</script>

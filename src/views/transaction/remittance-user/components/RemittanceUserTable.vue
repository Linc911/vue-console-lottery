<template lang="html">
  <div>
    <LayoutTablePlain :tableData="data">
      <el-table-column type="index" :width="36" />

      <el-table-column prop="username" label="收款户名" :min-width="120" />

      <el-table-column prop="userAccount" label="收款账号" :min-width="140" />

      <el-table-column prop="bank" label="收款银行" />

      <el-table-column prop="bankAddress" label="银行地址" />

      <el-table-column prop="codeUrl" label="二维码地址">
        <template slot-scope="scope">
          <span v-if="scope.row.codeUrl">
            查看 <BaseIcon @on-click="showDialogImage(scope.row, 'dialogImage')" icon="el-icon-zoom-in" />
          </span>
        </template>
      </el-table-column>

      <el-table-column prop="sysGroupNames" label="会员分组" :min-width="150">
        <template slot-scope="scope">
          <span>{{ scope.row.sysGroupNames | separator(' ') }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="discountRatio" label="优惠比例%" :min-width="70">
        <template slot-scope="scope">
          <span>{{ scope.row.discountRatio | percent }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="sort" label="排列顺序" :min-width="45" />

      <el-table-column prop="operations" label="操作" :min-width="130">
        <template slot-scope="scope">
          <div>
            <el-button
              @click="showDialog(scope.row, 'dialogCreate')"
              type="primary"
              icon="el-icon-edit"
              size="mini"
            />

            <el-button
              @click="showDialog(scope.row, 'dialogDelete')"
              type="primary"
              icon="el-icon-delete"
              size="mini"
            />
          </div>
        </template>
      </el-table-column>
    </LayoutTablePlain>

    <!-- 修改弹框 -->
    <RemittanceUserDialogUpdate @on-updated="$emit('on-changed')" :data="activeItem" ref="dialogCreate" />

    <!-- 删除弹框 -->
    <DialogDeleteConfirm
      @on-confirm="handleDeleteConfirm"
      title="支付户名"
      :name="activeItem.username"
      ref="dialogDelete"
    />

    <!-- 图片弹框 -->
    <DialogImagePreview :imgUrl="imgUrl" dialogWidth="350px" ref="dialogImage" />
  </div>
</template>

<script>
import { tableComponentMixin } from '@/mixins'

import BaseIcon from '@/components/base/BaseIcon'
import RemittanceUserDialogUpdate from './RemittanceUserDialogUpdate'
import DialogDeleteConfirm from '@/components/dialog/DialogDeleteConfirm'
import DialogImagePreview from '@/components/dialog/DialogImagePreview'

export default {
  name: 'RemittanceUserTable',
  components: {
    BaseIcon,
    RemittanceUserDialogUpdate,
    DialogDeleteConfirm,
    DialogImagePreview
  },
  mixins: [ tableComponentMixin ],
  data () {
    return {
      deleteHttpAPI: 'deleteTransactionRemittance',
      deleteAttrName: 'remitId',
      deleteId: 'id',
      activeItem: { username: '' },
      imgUrl: ''
    }
  },
  methods: {
    // 显示弹框；将当前点击的数据记录下来
    showDialogImage (item, ref) {
      this.imgUrl = item.codeUrl

      this.$refs[ref].toggleDialogVisible(true)
    }
  }
}
</script>

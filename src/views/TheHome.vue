<template>
  <section class="home">
    <el-container>
      <el-header>
        <HeadNav />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <AsideNav />
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <el-footer height="auto">
            <FooterMain />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </section>
</template>

<script type="text/javascript">
import HeadNav from '@/components/global/HeadNav'
import AsideNav from '@/components/global/AsideNav'
import FooterMain from '@/components/global/FooterMain'

export default {
  name: 'home',
  components: {
    HeadNav,
    AsideNav,
    FooterMain
  }
}
</script>

<style lang="scss" scoped>
.el-main {
  border-top: 2px solid #324057;
}
.el-footer {
  padding: 0;
}
</style>

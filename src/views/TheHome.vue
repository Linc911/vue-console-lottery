<template>
  <section class="home">
    <el-container>
      <el-header>
        <HeadNav />
      </el-header>
      <el-container>
        <el-aside width="220px">
          <AsideNav />
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
            <!-- <keep-alive>
            </keep-alive> -->
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
.home {
  min-width: 1190px;
  margin: 0 auto;
}
.el-header {
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #324057;
  background-color: #fff;
}
.el-aside {
  position: fixed;
  z-index: 10;
  height: 100%;
  margin-top: 60px;
  background-color: #324057;
}
.el-main {
  margin: 60px 0 30px 220px;
  background-color: #f8f8f8;
}
.el-footer {
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: calc(100% - 220px);
  margin-left: 220px;
  padding: 0;
}
</style>

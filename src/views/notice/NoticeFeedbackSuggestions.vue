<template lang="html">
  <div>
    <div class="suggestions">
      <span class="baseColor">文件夹</span><br>
      <i class="el-icon-news folder baseColor"><span class="untreated">未处理</span></i><br>
      <i class="el-icon-message folder baseColor"><span class="processed">已处理</span></i><br>
      <i class="el-icon-delete folder"><span class="dustbin">垃圾箱</span></i><br>
      <span class="baseColor">分类</span>
      <div class="folder baseColor">
        <div class="circle qin"></div>
        <span class="dustbin">其他</span>
      </div>
      <div class="folder baseColor">
        <div class="circle orange"></div>
        <span class="dustbin">优化建议</span>
      </div>
      <div class="folder baseColor">
        <div class="circle blue"></div>
        <span class="dustbin">提款投诉</span>
      </div>
      <div class="folder baseColor">
        <div class="circle black"></div>
        <span class="dustbin">存款投诉</span>
      </div>
      <div class="folder baseColor">
        <div class="circle green"></div>
        <span class="dustbin">客服投诉</span>
      </div>
    </div>
    <div class="content">
      <div class="badge">0</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .baseColor {
    color: #374554;
  }

  .suggestions {
    float: left;
    display: inline-block;
    width: 240px;
    height: 818px;
    margin: 55px 35px;
    font-size: 14px;
    line-height: 40px;
    cursor: pointer;
  }

  .folder {
    padding-right: 160px;
    line-height: 30px;
  }

  .untreated {
    margin-left: 10px;
    color: #fc0019;
  }

  .processed {
    margin-left: 10px;
    color: #107715;
  }

  .dustbin {
    margin-left: 10px;
    line-height: 40px;
    color: #5d5d5d;
  }

  .circle {
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

  .qin {
    background-color: #2cc0c1;
  }

  .orange {
    background-color: #f5a357;
  }

  .blue {
    background-color: #227bbd;
  }

  .black {
    background-color: #374554;
  }

  .green {
    background-color: #24ac8b;
  }

  .content {
    display: inline-block;
    float: left;
    width: 1410px;
    border: 1px solid #000;
    background-color: #189F92;
  }

  .badge {
    width: 35px;
    height: 20px;
  }
</style>

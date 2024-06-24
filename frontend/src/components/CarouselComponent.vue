<script setup>

</script>

<template>
  <section id="banner" class="carousel slide" data-bs-ride="carousel">
    <!-- 指示符 -->
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#banner" data-bs-slide-to="0"
              class="active"></button>
      <button type="button" data-bs-target="#banner" data-bs-slide-to="1"
              class=""></button>
      <button type="button" data-bs-target="#banner" data-bs-slide-to="2"
              class=""></button>
    </div>

    <!-- 轮播图片 -->
    <div class="carousel-inner banner">
      <div class="carousel-item active">
        <img src="@/assets/banner/1717320629.jpg"
             alt="CSSEC CMS">
        <div class="carousel-caption">
          <h2>CSSEC CMS</h2>
          <small>CSSEC CMS 是一个简单的内容管理系统，基于 PHP 语言开发，使用 MySQL 数据库存储数据，用作信安组 AWD 练习的
            Web 题目。</small>
        </div>
      </div>
      <div class="carousel-item ">
        <img src="@/assets/banner/1717320708.jpg"
             alt="信息安全组 | CSSEC">
        <div class="carousel-caption">
          <h2>信息安全组 | CSSEC</h2>
          <small>信息安全组，简称信安组，也称 CSSEC，是 四川师范大学IT培优 项目下编程组所属的一个学习小组。小组致力于在川师计科学院营造良好的网络安全
            & CTF 学习氛围。</small>
        </div>
      </div>
      <div class="carousel-item ">
        <img src="@/assets/banner/1717320920.png"
             alt="Seek2 Team">
        <div class="carousel-caption">
          <h2>Seek2 Team</h2>
          <small>一个专注于 CTF 赛事的团队，我们希望它能更加纯粹（请忽略这个草率的 logo）。</small>
        </div>
      </div>
    </div>

    <!-- 左右切换按钮 -->
    <button class="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
    </button>
  </section>
</template>

<style scoped>

</style>
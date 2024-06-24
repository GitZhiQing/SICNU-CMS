<script setup>

</script>

<template>
  <section class="admin-container">
    <div class="admin-default">
      <h1>CSSEC CMS 后台管理</h1>
      <RouterLink to="/" class="admin-default-home" target="_blank"
                  onclick="return confirm('确定离开后台？')">返回首页
      </RouterLink>
      <h2 class="admin-default-articles-count">文章数量：7</h2>
      <h2 class="admin-default-users-count">用户数量：1</h2>
      <div class="admin-default-notice">
        <h2>当前公告：CSSEC AWD 001 正在进行中！！！</h2>
        <p>
          由信安组（CSSEC）策划并承办的 CSSEC AWD 001 赛事已经端上来啦。本次比赛为 23 级 2 班与 3 班 CTF
          创新与实践课程考核，希望来自两个班的近 100 名同学们攻防一体，赛出智慧、赛出风格、赛出友谊、赛出佳绩！ </p>
      </div>
      <div class="admin-default-banners">
        <h2>当前展板：</h2>
        <ul>
          <li class="admin-default-banners-item">
            <img src="@/assets/banner/1717320629.jpg"
                 alt="CSSEC CMS">
            <div class="admin-default-banners-item-text">
              <h3>CSSEC CMS</h3>
              <p>CSSEC CMS 是一个简单的内容管理系统，基于 PHP 语言开发，使用 MySQL 数据库存储数据，用作信安组 AWD 练习的
                Web 题目。</p>
            </div>
          </li>
          <li class="admin-default-banners-item">
            <img src="@/assets/banner/1717320708.jpg"
                 alt="信息安全组 | CSSEC">
            <div class="admin-default-banners-item-text">
              <h3>信息安全组 | CSSEC</h3>
              <p>信息安全组，简称信安组，也称 CSSEC，是 四川师范大学IT培优 项目下编程组所属的一个学习小组。小组致力于在川师计科学院营造良好的网络安全
                & CTF 学习氛围。</p>
            </div>
          </li>
          <li class="admin-default-banners-item">
            <img src="@/assets/banner/1717320920.png"
                 alt="Seek2 Team">
            <div class="admin-default-banners-item-text">
              <h3>Seek2 Team</h3>
              <p>一个专注于 CTF 赛事的团队，我们希望它能更加纯粹（请忽略这个草率的 logo）。</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
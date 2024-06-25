<script setup>
function confirmDeleteBanner() {
  return confirm('确定删除展板');
}

// 确定编辑展板函数
function confirmEditBanner() {
  return confirm('确定编辑展板');
}
</script>

<template>
  <section class="admin-container">

    <div class="admin-banners-edit">
      <h1>展板编辑</h1>
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
                 alt="SICNU CMS">
            <div class="carousel-caption">
              <h2>SICNU CMS</h2>
              <small>SICNU CMS 是一个简单的内容管理系统，基于 PHP 语言开发，使用 MySQL 数据库存储数据，用作信安组 AWD 练习的
                Web 题目。</small>
            </div>
          </div>
          <div class="carousel-item ">
            <img src="@/assets/banner/1717320708.jpg"
                 alt="信息安全组 | SICNU">
            <div class="carousel-caption">
              <h2>信息安全组 | SICNU</h2>
              <small>信息安全组，简称信安组，也称 SICNU，是 四川师范大学IT培优 项目下编程组所属的一个学习小组。小组致力于在川师计科学院营造良好的网络安全
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
      <ul>
        <li class="admin-banners-edit-banners-item">
          <img src="@/assets/banner/1717320629.jpg"
               alt="SICNU CMS">
          <div class="admin-banners-edit-banners-item-text">
            <div class="admin-banners-edit-banners-item-text-header">
              <h3>SICNU CMS</h3>
              <div>
                <form action="admin_banners_edit.php" method="post" style="display: inline;">
                  <input type="hidden" name="id" value="1">
                  <input type="submit" name="delete" value="删除" onclick="return confirmDeleteBanner()">
                </form>
                <a href="index.php?action=post&target=banners&id=1"
                   onclick="return confirmEditBanner()">编辑</a>
              </div>
            </div>
            <p>SICNU CMS 是一个简单的内容管理系统，基于 PHP 语言开发，使用 MySQL 数据库存储数据，用作信安组 AWD 练习的 Web
              题目。</p>
          </div>
        </li>
        <li class="admin-banners-edit-banners-item">
          <img src="@/assets/banner/1717320708.jpg"
               alt="信息安全组 | SICNU">
          <div class="admin-banners-edit-banners-item-text">
            <div class="admin-banners-edit-banners-item-text-header">
              <h3>信息安全组 | SICNU</h3>
              <div>
                <form action="admin_banners_edit.php" method="post" style="display: inline;">
                  <input type="hidden" name="id" value="2">
                  <input type="submit" name="delete" value="删除" onclick="return confirmDeleteBanner()">
                </form>
                <a href="index.php?action=post&target=banners&id=2"
                   onclick="return confirmEditBanner()">编辑</a>
              </div>
            </div>
            <p>信息安全组，简称信安组，也称 SICNU，是 四川师范大学IT培优 项目下编程组所属的一个学习小组。小组致力于在川师计科学院营造良好的网络安全
              & CTF 学习氛围。</p>
          </div>
        </li>
        <li class="admin-banners-edit-banners-item">
          <img src="@/assets/banner/1717320920.png"
               alt="Seek2 Team">
          <div class="admin-banners-edit-banners-item-text">
            <div class="admin-banners-edit-banners-item-text-header">
              <h3>Seek2 Team</h3>
              <div>
                <form action="admin_banners_edit.php" method="post" style="display: inline;">
                  <input type="hidden" name="id" value="3">
                  <input type="submit" name="delete" value="删除" onclick="return confirmDeleteBanner()">
                </form>
                <a href="index.php?action=post&target=banners&id=3"
                   onclick="return confirmEditBanner()">编辑</a>
              </div>
            </div>
            <p>一个专注于 CTF 赛事的团队，我们希望它能更加纯粹（请忽略这个草率的 logo）。</p>
          </div>
        </li>
      </ul>

    </div>
  </section>
</template>

<style scoped>

</style>
<script setup>

</script>

<template>
  <div class="admin-actions">
    <ul class="admin-actions-list">
      <li class="admin-actions-item admin-logo">
        <h2>
          <RouterLink to='/admin/'>SICNU
            CMS
          </RouterLink>
        </h2>
      </li>
      <li class="admin-actions-item ">
        <RouterLink to='/admin/post-notices'>公告发布</RouterLink>
      </li>
      <li class="admin-actions-item ">
        <RouterLink to='/admin/edit-notices'>公告管理</RouterLink>
      </li>
      <li class="admin-actions-item ">
        <a href='/admin/post-banners'>展板发布</a></li>
      <li class="admin-actions-item ">
        <a href='/admin/edit-banners'>展板管理</a></li>
      <li class="admin-actions-item ">
        <a href='/admin/post-articles'>文章发布</a></li>
      <li class="admin-actions-item ">
        <a href='/admin/edit-articles'>文章管理</a></li>
      <li class="admin-actions-item ">
        <a href='/admin/edit-users'>用户管理</a></li>
      <li class="admin-info"><p>管理员：admin <a href="./../logout.php">注销</a></p></li>
    </ul>
    <footer>
      <small>&copy; 2024 <a href="https://www.yuque.com/SICNU/wiki" target="_blank">SICNU</a></small>
    </footer>
  </div>
</template>

<style scoped>

</style>
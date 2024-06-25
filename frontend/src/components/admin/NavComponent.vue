<script setup>
import {inject} from 'vue';

const user = inject('user');

const logout = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:9999/api/logout', {
      method: 'GET',
    });
    const data = await response.json();
    if (data.msg === 'success') {
      alert('注销成功');
      user.isLoggedIn = false;
      user.username = '';
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('username');
      window.location.href = '/';
    }
  } catch (error) {
    alert('调用/api/logout失败');
  }
};
</script>

<template>
  <div class="admin-actions">
    <ul class="admin-actions-list">
      <li class="admin-actions-item admin-logo">
        <h2>
          <RouterLink to='/admin/'>
            SICNU CMS
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
      <li class="admin-info"><p>管理员：{{ user.username }}</p>
        <RouterLink to="/" @click="logout" class="admin-info">注销</RouterLink>
      </li>
    </ul>
    <footer>
      <small>&copy; 2024 <a href="https://www.yuque.com/SICNU/wiki" target="_blank">SICNU</a></small>
    </footer>
  </div>
</template>

<style scoped>

</style>
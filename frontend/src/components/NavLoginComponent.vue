<script setup>

const logout = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:9999/api/logout', {
      method: 'GET',
    });
    const data = await response.json();
    if (data.msg === 'success') {
      alert('注销成功');
      window.location.href = '/';
    }
  } catch (error) {
    alert('调用/api/logout失败');
  }
};
</script>

<template>
  <nav>
    <ul class="nav-list">
      <li class="nav-item">
        <RouterLink to="/">首页</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/about">关于</RouterLink>
      </li>
      <li class='nav-item admin-operate'>
        <RouterLink to="/post">发布</RouterLink>
      </li>
      <li class='nav-item admin-operate'>
        <RouterLink to="/admin/">管理</RouterLink>
      </li>
    </ul>
    <ul class="account-operate">
      <li class='nav-item'><a>欢迎您，admin</a></li>
      <li class='nav-item'>
        <RouterLink to="/" @click="logout">注销</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
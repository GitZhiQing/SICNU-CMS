<script setup>
import {ref} from 'vue';

const username = ref('');
const password = ref('');

const login = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:9999/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username.value, password: password.value}),
    });
    const data = await response.json();
    if (data.msg === "success") {
      alert('登录成功');
      window.location.href = '/';
    } else {
      alert('登录失败');
    }
  } catch (error) {
    alert('调用/api/login失败');
  }
};
</script>

<template>
  <form class="login-form" @submit="login">
    <h2>登录 CSSEC CMS</h2>
    <div class="form-group">
      <label for="username"></label>
      <input type="text" id="username" name="username" placeholder="请输入用户名" required>
    </div>
    <div class="form-group">
      <label for="password"></label>
      <input type="password" id="password" name="password" placeholder="请输入密码" required>
    </div>
    <div class="form-group">
      <input type="submit" value="登录">
    </div>

    <RouterLink to="/register">还没有账号？点击注册</RouterLink>
  </form>
</template>

<style scoped>

</style>
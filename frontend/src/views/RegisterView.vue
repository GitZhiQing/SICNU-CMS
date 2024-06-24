<script setup>
import {ref} from "vue";

const username = ref('');
const password = ref('');

const register = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:9999/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: username.value, password: password.value}),
    });
    const data = await response.json();
    if (data.msg === "success") {
      alert('注册成功');
      window.location.href = '/login';
    }
  } catch (error) {
    alert('调用/api/register失败');
  }
};
</script>

<template>
  <form class="login-form register" @submit="register">
    <h2>注册 CSSEC CMS</h2>
    <div class="form-group">
      <label for="username"></label>
      <input type="text" id="username" name="username" placeholder="请输入用户名" required>
    </div>
    <div class="form-group">
      <label for="password"></label>
      <input type="password" id="password" name="password" placeholder="请输入密码" required>
    </div>
    <div class="form-group">
      <label for="repassword"></label>
      <input type="password" id="repassword" name="repassword" placeholder="请再次输入密码" required>
    </div>
    <div class="form-group">
      <input type="submit" value="注册">
    </div>

    <RouterLink to="/login">已经有账号？点击登录</RouterLink>
  </form>
</template>

<style scoped>

</style>
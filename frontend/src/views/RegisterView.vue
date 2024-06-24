<script setup>
import {reactive} from 'vue';

const form = reactive({
  username: '',
  password: '',
  repassword: '',
  error: ''
});

const register = async (e) => {
  e.preventDefault();
  if (!form.username || !form.password || !form.repassword) {
    form.error = '请输入用户名和密码';
    return;
  }
  if (form.password !== form.repassword) {
    form.error = '两次输入的密码不一致';
    return;
  }
  try {
    const response = await fetch('http://localhost:9999/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: form.username, password: form.password}),
    });
    const data = await response.json();
    if (data.msg === "注册成功") {
      form.error = '';
      alert('注册成功');
      window.location.href = '/login';
    } else {
      form.error = data.msg;
    }
  } catch (error) {
    form.error = '调用/api/register失败';
  }
};
</script>

<template>
  <form class="login-form register" @submit="register">
    <h2>注册 SICNU CMS</h2>
    <div class="form-group">
      <label for="username"></label>
      <input type="text" id="username" name="username" v-model="form.username" placeholder="请输入用户名" required>
    </div>
    <div class="form-group">
      <label for="password"></label>
      <input type="password" id="password" name="password" v-model="form.password" placeholder="请输入密码" required>
    </div>
    <div class="form-group">
      <label for="repassword"></label>
      <input type="password" id="repassword" name="repassword" v-model="form.repassword" placeholder="请再次输入密码"
             required>
    </div>
    <div class="form-group">
      <input type="submit" value="注册">
    </div>
    <p v-if="form.error" class="error">{{ form.error }}</p>
    <RouterLink to="/login">已经有账号？点击登录</RouterLink>
  </form>
</template>

<style scoped>
.error {
  text-align: center;
  color: red;
}
</style>
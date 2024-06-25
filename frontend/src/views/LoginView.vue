<script setup>
import {reactive, inject} from 'vue';

const form = reactive({
  username: '',
  password: '',
  error: ''
});

const user = inject('user');

const login = async (e) => {
  e.preventDefault();
  if (!form.username || !form.password) {
    form.error = '请输入用户名和密码';
    return;
  }
  try {
    const response = await fetch('http://localhost:9999/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username: form.username, password: form.password}),
    });
    const data = await response.json();
    if (data.msg === "success") {
      form.error = '';
      alert('登录成功');
      user.isLoggedIn = true;
      user.username = form.username;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', form.username);
      window.location.href = '/';
    } else {
      form.error = '用户名或密码错误';
    }
  } catch (error) {
    form.error = '调用/api/login失败';
  }
};
</script>

<template>
  <form class="login-form" @submit="login">
    <h2>登录 SICNU CMS</h2>
    <div class="form-group">
      <label for="username"></label>
      <input type="text" id="username" name="username" v-model="form.username" placeholder="请输入用户名" required>
    </div>
    <div class="form-group">
      <label for="password"></label>
      <input type="password" id="password" name="password" v-model="form.password" placeholder="请输入密码" required>
    </div>
    <div class="form-group">
      <input type="submit" value="登录">
    </div>
    <p v-if="form.error" class="error">{{ form.error }}</p>
    <RouterLink to="/register">还没有账号？点击注册</RouterLink>
  </form>
</template>

<style scoped>
.error {
  text-align: center;
  color: red;
}
</style>
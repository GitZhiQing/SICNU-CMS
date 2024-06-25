<script setup>
import {ref} from "vue";

const title = ref('');
const content = ref('');

const post = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:9999/api/articles/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title: title.value, content: content.value}),
    });
    const data = await response.json();
    if (data.msg === "success") {
      alert('发布成功');
      window.location.href = "/post";
    }
  } catch (error) {
    alert('调用/api/articles/new失败');
  }
};
</script>

<template>
  <form class="post-form container" @submit="post">
    <h2>发布文章</h2>
    <div class="form-group">
      <label for="title">文章标题</label>
      <input type="text" id="title" name="title" v-model="title" placeholder="请输入文章标题" required>
    </div>
    <div class="form-group">
      <label for="content">文章内容</label>
      <textarea id="content" name="content" v-model="content" placeholder="请输入文章内容" required></textarea>
    </div>
    <input type="submit" value="发布">
  </form>
</template>

<style scoped>

</style>
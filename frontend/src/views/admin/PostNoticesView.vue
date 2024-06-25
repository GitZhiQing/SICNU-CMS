<script setup>
import {ref} from 'vue';
import axios from 'axios';

const title = ref('');
const content = ref('');

const submitForm = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:9999/api/notices/new', {
      title: title.value,
      content: content.value,
    });
    if (response.data.msg === 'success') {
      title.value = '';
      content.value = '';
      alert('公告发布成功');
      setTimeout(() => {
        window.location.href = '/admin';
      }, 500);
    } else {
      alert('公告发布失败');
    }
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <section class="admin-container">
    <div class="admin-notice-post">
      <h1>公告发布</h1>
      <form @submit="submitForm">
        <label for="title">标题：</label>
        <input type="text" name="title" id="title" v-model="title" required>
        <label for="content">内容：</label>
        <textarea name="content" id="content" cols="30" rows="10" v-model="content" required></textarea>
        <input type="submit" value="发布公告">
      </form>
    </div>
  </section>
</template>

<style scoped>

</style>
<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

const id = ref(null);
const title = ref('');
const content = ref('');

const getLatestNotice = async () => {
  try {
    const response = await axios.get('http://localhost:9999/api/notices');
    const latestNotice = response.data[response.data.length - 1];
    id.value = latestNotice.id;
    title.value = latestNotice.title;
    content.value = latestNotice.content;
  } catch (error) {
    console.error(error);
  }
};

const updateNotice = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:9999/api/notices/new', {
      title: title.value,
      content: content.value,
    });
    if (response.data.msg === 'success') {
      alert('公告更新成功');
    } else {
      alert('公告更新失败');
    }
  } catch (error) {
    console.error(error);
  }
};

onMounted(getLatestNotice);

const clearNotice = async (event) => {
  event.preventDefault();
  if (id.value === null) {
    alert('没有公告可以清空');
    return;
  }
  title.value = '暂无公告';
  content.value = '平静的一天~';
  await updateNotice(event);
};
</script>

<template>
  <section class="admin-container">
    <div class="admin-notice-edit admin-notice-post">
      <h1>公告编辑</h1>
      <form @submit="updateNotice">
        <label for="title">标题：</label>
        <input type="text" id="title" v-model="title" required>
        <label for="content">内容：</label>
        <textarea id="content" cols="30" rows="10" v-model="content" required></textarea>
        <input type="submit" value="更新公告">
      </form>
      <form class="admin-notice-edit-clear" @submit="clearNotice">
        <input type="submit" value="清空公告">
      </form>
    </div>
  </section>
</template>

<style scoped>

</style>
<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
// 获取公告，文章数量，用户数量，展板
const noticesRef = ref([]);
const articlesCountRef = ref(0);
const usersCountRef = ref(0);
const bannersRef = ref([]);

onMounted(async () => {
  const response1 = await axios.get("http://localhost:9999/api/notices");
  noticesRef.value = response1.data;

  const response2 = await axios.get("http://localhost:9999/api/articles");
  articlesCountRef.value = response2.data.length;

  const response3 = await axios.get("http://localhost:9999/api/users");
  usersCountRef.value = response3.data.length;

  const response4 = await axios.get("http://localhost:9999/api/banners");
  bannersRef.value = response4.data;
});
</script>

<template>
  <section class="admin-container">
    <div class="admin-default">
      <h1>SICNU CMS 后台管理</h1>
      <RouterLink to="/" class="admin-default-home" target="_blank"
                  onclick="return confirm('确定离开后台？')">返回首页
      </RouterLink>
      <h2 class="admin-default-articles-count">文章数量：{{ articlesCountRef }}</h2>
      <h2 class="admin-default-users-count">用户数量：{{ usersCountRef }}</h2>
      <div class="admin-default-notice" v-for="notice in noticesRef" :key="notice.id">
        <h2>{{ notice.title }}</h2>
        <p>{{ notice.content }}</p>
      </div>
      <div class="admin-default-banners" v-if="bannersRef.length > 0">
        <h2>当前展板：</h2>
        <ul>
          <li class="admin-default-banners-item" v-for="banner in bannersRef" :key="banner.id">
            <img :src="banner.image"
                 :alt="banner.title">
            <div class="admin-default-banners-item-text">
              <h3>{{ banner.title }}</h3>
              <p>{{ banner.content }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
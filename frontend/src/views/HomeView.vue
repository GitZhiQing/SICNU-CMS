<script setup>
import CarouselComponent from "@/components/CarouselComponent.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

const noticesRef = ref([]);
const articlesRef = ref([]);
const page = ref(1);
const allLoaded = ref(false);

// 获取首页数据，默认获取第一页的文章
onMounted(async () => {
  const response1 = await axios.get("http://localhost:9999/api/notices");
  noticesRef.value = response1.data;
  const response2 = await axios.get(`http://localhost:9999/api/articles/paginated?page=${page.value}&limit=5`);
  articlesRef.value = response2.data;
  if (response2.data.length < 5) {
    allLoaded.value = true;
  }
});

// 加载更多文章
const loadMoreArticles = async () => {
  page.value++;
  const response = await axios.get(`http://localhost:9999/api/articles/paginated?page=${page.value}&limit=5`);
  articlesRef.value = articlesRef.value.concat(response.data);
  if (response.data.length < 5) {
    allLoaded.value = true;
  }
};
</script>

<template>
  <CarouselComponent/>
  <section class="about-notice container" v-for="notice in noticesRef" :key="notice.id">
    <h2>{{ notice.title }}</h2>
    <p>{{ notice.content }}</p>
  </section>

  <section class="articles container">
    <ul class="article-list">
      <li class='article-item' v-for="article in articlesRef" :key="article.id">
        <h3 class='article-title'>{{ article.title }}</h3>
        <p class='article-content-outline'>{{ article.content }}</p>
        <small class='article-meta'>
          <span class='article-time'>{{ article.time }}</span>
          <router-link :to="`/article/${article.id}`" class='article-read-all'>阅读全文 >>></router-link>
        </small>
      </li>
    </ul>
  </section>
  <button id="more-articles" class="btn" v-if="!allLoaded" @click="loadMoreArticles">更多文章</button>
  <button id="more-articles" class="btn" v-else>已经加载所有文章</button>
</template>
<script setup>
import CarouselComponent from "@/components/CarouselComponent.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

const noticesRef = ref([]);
const articlesRef = ref([]);

onMounted(async () => {
  const response1 = await axios.get("http://localhost:9999/api/notices");
  noticesRef.value = response1.data;
  const response2 = await axios.get("http://localhost:9999/api/articles");
  articlesRef.value = response2.data;
});


</script>

<template>
  <CarouselComponent/>
  <section class="notice container" v-for="notice in noticesRef" :key="notice.id">
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
          <router-link :to="`/article?id=${article.id}`" class='article-read-all'>阅读全文 >>></router-link>
        </small>
      </li>
    </ul>
    <button id="more-articles" class="btn">已显示全部文章</button>
  </section>
</template>
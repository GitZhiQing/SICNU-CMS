<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";

const route = useRoute();
const Content = ref({});
const articleId = ref('');

onMounted(async () => {
  articleId.value = route.params.id;
  const response = await axios.get(`http://localhost:9999/api/article/${articleId.value}`);
  Content.value = response.data;
});
</script>

<template>
  <section class="container article-read">
    <div class="article-read-head">
      <h1 class="article-read-title">{{ Content.title }}</h1>
      <p class="article-read-meta">
        <span class="article-read-author">作者：{{ Content.author }}</span>
        <span class="article-read-ctime">发布时间：{{ Content.created_at }}</span>
        <span class="article-read-utime">更新时间：{{ Content.updated_at }}</span>
      </p>
    </div>
    <div class="article-read-content">
      <div v-html="Content.content"></div>
    </div>
  </section>
</template>

<style scoped>

</style>
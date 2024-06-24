<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";

const route = useRoute();
const contentsRef = ref([]);
const Content = ref('');
const articleId = ref('');

onMounted(async () => {
  const queryParams = new URLSearchParams(route.fullPath.split('?')[1]);
  articleId.value = queryParams.get('id');
  const response = await axios.get("http://localhost:9999/api/contents");
  contentsRef.value = response.data;
  Content.value = contentsRef.value.find(content => content.id === parseInt(articleId.value, 10));
});
</script>

<template>
  <HeaderComponent/>
  <section class="container article-read">
    <div class="article-read-head">
      <h1 class="article-read-title">{{ Content.title }}</h1>
      <p class="article-read-meta">
        <span class="article-read-author">作者：{{ Content.author }}</span>
        <span class="article-read-ctime">发布时间：{{ Content.created_at }}</span>
        <span class="article-read-utime">更新时间：{{ Content.updated_at }}}</span>
      </p>
    </div>
    <div class="article-read-content">
      <div v-html="Content.content"></div>
    </div>
  </section>
</template>

<style scoped>

</style>
<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";

const bannersRef = ref([]);

onMounted(async () => {
  const response4 = await axios.get("http://localhost:9999/api/banners");
  bannersRef.value = response4.data;
});

function confirmDeleteBanner() {
  return confirm('确定删除展板');
}

// 确定编辑展板函数
function confirmEditBanner() {
  return confirm('确定编辑展板');
}
</script>

<template>
  <section class="admin-container">

    <div class="admin-banners-edit">
      <h1>展板编辑</h1>
      <section id="banner" class="carousel slide" data-bs-ride="carousel">
        <!-- 指示符 -->
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#banner" data-bs-slide-to="0"
                  class="active"></button>
          <button type="button" data-bs-target="#banner" data-bs-slide-to="1"
                  class=""></button>
          <button type="button" data-bs-target="#banner" data-bs-slide-to="2"
                  class=""></button>
        </div>

        <!-- 轮播图片 -->
        <div class="carousel-inner banner">
          <div class="carousel-item active">
            <img src="@/assets/banner/SICNU-CMS.jpg"
                 alt="SICNU CMS">
            <div class="carousel-caption">
              <h2>SICNU CMS</h2>
              <small>SICNU CMS 是一个基于 Vue.js 和 Node.js 的前后端分离的内容管理系统。</small>
            </div>
          </div>
          <div class="carousel-item ">
            <img src="@/assets/banner/sicnu.jpg"
                 alt="四川师范大学 | SICNU">
            <div class="carousel-caption">
              <h2>四川师范大学 | SICNU</h2>
              <small>四川师范大学，或简称川师大。是一所位于中国四川省成都市的公立师范类本科院校。前身是位于四川省南充市的四川师范学院。四川师范大学是中国西部重要的师范大学之一。</small>
            </div>
          </div>
          <div class="carousel-item ">
            <img src="@/assets/banner/640.png"
                 alt="Seek2 Team">
            <div class="carousel-caption">
              <h2>四川师范大学 78 周年校庆</h2>
              <small>川师大78周岁生日来啦！</small>
            </div>
          </div>
        </div>

        <!-- 左右切换按钮 -->
        <button class="carousel-control-prev" type="button" data-bs-target="#banner" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#banner" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </section>
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
  </section>
</template>

<style scoped>

</style>
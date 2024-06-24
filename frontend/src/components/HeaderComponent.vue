<script setup>

import NavLoginComponent from "@/components/NavLoginComponent.vue";
import NavLogoutComponent from "@/components/NavLogoutComponent.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

const isLoginRef = ref(false);

onMounted(async () => {
  const response = await axios.get("http://localhost:9999/api/profile");
  isLoginRef.value = response.data.isLogin;
});
</script>

<template>
  <header class="header">
    <h1 class="logo">
      <RouterLink to="/">CSSEC CMS</RouterLink>
    </h1>
  </header>
  <component :is="isLoginRef ? NavLoginComponent : NavLogoutComponent"/>
</template>

<style scoped>

</style>
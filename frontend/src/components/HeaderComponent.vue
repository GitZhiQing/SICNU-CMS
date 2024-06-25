<script setup>
import NavLoginComponent from "@/components/NavLoginComponent.vue";
import NavLogoutComponent from "@/components/NavLogoutComponent.vue";
import {inject} from "vue";

const user = inject('user');
</script>

<template>
  <header class="header">
    <h1 class="logo">
      <RouterLink to="/">SICNU CMS</RouterLink>
    </h1>
  </header>
  <NavLoginComponent v-if="user.isLoggedIn"/>
  <NavLogoutComponent v-else/>
</template>

<style scoped>

</style>
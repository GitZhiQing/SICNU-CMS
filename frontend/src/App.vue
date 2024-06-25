<script setup>
import {RouterLink, RouterView} from 'vue-router'
import PageTitle from './components/PageTitle.vue'
import {reactive, provide} from 'vue'

const user = reactive({
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  username: localStorage.getItem('username') || '',
});
provide('user', user);
</script>

<template>
  <PageTitle title="SICNU CMS"/>
  <RouterView/>
</template>

<style scoped>

</style>
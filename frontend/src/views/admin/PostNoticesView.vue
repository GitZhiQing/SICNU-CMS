<script setup>

</script>

<template>
  <section class="admin-container">
    <div class="admin-notice-post">
      <h1>公告发布</h1>
      <form action="/api/post-notices" method="post">
        <label for="title">标题：</label>
        <input type="text" name="title" id="title" required>
        <label for="content">内容：</label>
        <textarea name="content" id="content" cols="30" rows="10" required></textarea>
        <input type="submit" value="发布公告">
      </form>
    </div>
  </section>
</template>

<style scoped>

</style>
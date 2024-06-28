<script setup>
function confirmPostArticle() {
  confirm('发布成功');
}
</script>

<template>
  <section class="admin-container">
    <div class="admin-articles-post">
      <h1>文章发布</h1>
      <form>
        <label for="title">标题：</label>
        <input type="text" name="title"
               id="title" required>
        <label for="content">内容：</label>
        <textarea name="content" id="content" cols="30" rows="10"
                  required></textarea>
        <input type="submit" value="发布" @click="confirmPostArticle">
      </form>
    </div>
  </section>
</template>

<style scoped>

</style>
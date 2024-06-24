<script setup>

</script>

<template>
  <section class="admin-container">
    <div class="admin-banners-post">
      <h1>展板发布</h1>
      <form action="admin_banners_post.php" method="post" enctype="multipart/form-data">
        <div class="admin-banners-post-title">
          <label for="title">标题：</label>
          <input type="text" name="title" id="title"
                 required>
        </div>
        <input type="file" name="pic" id="pic" required>
        <div id="preview" onclick="document.getElementById('pic').click()">
          <p>图片预览（点击上传图片）</p>
        </div>
        <div class="admin-banners-post-content">
          <label for="content">内容：</label>
          <textarea name="content" id="content" cols="30" rows="10"
                    required></textarea>
        </div>
        <input type="submit" value="发布">
      </form>
    </div>
  </section>
</template>

<style scoped>

</style>
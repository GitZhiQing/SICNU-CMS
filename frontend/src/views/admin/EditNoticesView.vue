<script setup>

</script>

<template>
  <section class="admin-container">
    <div class="admin-notice-edit admin-notice-post">
      <h1>公告编辑</h1>
      <form action="admin_notices_edit.php" method="post">
        <label for="title">标题：</label>
        <input type="text" name="title" id="title" value="SICNU AWD 001 正在进行中！！！" required>
        <label for="content">内容：</label>
        <textarea name="content" id="content" cols="30" rows="10" required>由信安组（SICNU）策划并承办的 SICNU AWD 001 赛事已经端上来啦。本次比赛为 23 级 2 班与 3 班 CTF 创新与实践课程考核，希望来自两个班的近 100 名同学们攻防一体，赛出智慧、赛出风格、赛出友谊、赛出佳绩！</textarea>
        <input type="submit" value="更新公告">
      </form>

      <form action="admin_notices_edit.php" method="post" class="admin-notice-edit-clear">
        <input type="hidden" name="clear" value="1">
        <input type="submit" value="清空公告">
      </form>
    </div>
  </section>
</template>

<style scoped>

</style>
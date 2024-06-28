<script setup>
function confirmDeleteUser(username) {
  return confirm("确定要删除用户 " + username + " 吗？");
}

function confirmResetPassword(username) {
  return confirm("确定要重置用户 " + username + " 的密码吗？");
}
</script>

<template>
  <section class="admin-container">
    <div class="admin-users-edit">
      <h1>用户管理</h1>
      <table>
        <tr>
          <th>用户名</th>
          <th>权限</th>
          <th>注册时间</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>admin</td>
          <td>
            <form>
              <input type="hidden" name="id" value="1">
              <label>
                <select name="power" onchange="this.form.submit()">
                  <option value="0">不允许访问
                  </option>
                  <option value="1">允许访问
                  </option>
                  <option value="2">允许编辑
                  </option>
                  <option value="3" selected>允许管理
                  </option>
                </select>
              </label>
            </form>
          </td>
          <td>2024-06-02 09:13:34</td>
          <td>
            <form>
              <input type="hidden" name="id" value="1">
              <input type="hidden" name="action" value="delete">
              <input type="submit" value="删除用户"
                     @click="confirmDeleteUser('admin')">
            </form>
            <form>
              <input type="hidden" name="id" value="1">
              <input type="hidden" name="action" value="reset">
              <input type="submit" value="重置密码"
                     @click="confirmResetPassword('admin')">
            </form>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<style scoped>

</style>
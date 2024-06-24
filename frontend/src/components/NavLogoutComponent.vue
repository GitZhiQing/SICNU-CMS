<template>
  <nav>
    <ul class="nav-list">
      <li class="nav-item">
        <RouterLink to="/">首页</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/about">关于</RouterLink>
      </li>
    </ul>
    <ul class="account-operate">
      <li class='nav-item'>
        <RouterLink to='/login'>登录</RouterLink>
      </li>
      <li class='nav-item'>
        <RouterLink to='/register'>注册</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

</style>
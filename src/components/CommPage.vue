<template>
  <div>
    这是公共页面
    <div @click="$router.push({path:'/'})">返回首页</div>
  </div>
</template>

<script>
  export default {
    name: "CommPage"
  }
</script>

<style scoped>
</style>

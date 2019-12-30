<template>
    <div>
      权限不足，无法访问
      <div @click="$router.push({path:'/'})">返回首页</div>
    </div>
</template>

<script>
    export default {
        name: "NoPermission"
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <div>user add</div>
    <div @click="home">返回首页</div>
  </div>
</template>

<script>
  export default {
    name: "UserAdd",
    methods:{
      home(){
        this.$router.push({path:'/'})
      }
    }
  }
</script>

<style scoped>

</style>

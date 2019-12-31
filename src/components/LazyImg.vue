<template>
  <div>
    <div @click="home">返回首页</div>
    <div v-for="i in 20">
      <img width="200" height="200" src="@/images/youatowb.jpg" v-img-lazy-load  />
    </div>
  </div>
</template>

<script>
  export default {
    name: "LazyImg",
    methods:{
      home(){
        this.$router.push({path:'/'})
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="m-banner"><button @click="reTri">刷新</button>
    <textarea>{{this.pattern}}</textarea>
    <div :style="{ backgroundImage: 'url(' + this.pattern2 + ')' ,width: '350px',height: '150px'}"></div>
    <div :style="{ backgroundImage: 'url(' + this.pattern + ')' ,width: '350px',height: '150px'}"></div>
    <div :style="{ backgroundImage: 'url(' + this.pattern + ')' ,width: '1200px',height: '500px'}"></div>
  </div>
</template>
<script>
    import Trianglify from 'trianglify'
// 120:280 10kb
// 100:250 8.6kb
    export default {
        data() {
            return {
              height:400,
              width:1800,
              pattern: '',
              pattern2: '',
            }
        },
        created() {
            let pattern = Trianglify({
                width: this.width,
                height: this.height
            }).png();
            this.pattern = pattern
        },
      methods:{
        reTri(){
          let pattern = Trianglify({
            width: this.width,
            height: this.height,
          }).png();
          this.pattern = pattern
        }
      },
    }
</script>

<style scoped>
  .m-banner div {
    height: 300px;
    background-position: 50% 50%;
    background-size: cover;
  }
</style>

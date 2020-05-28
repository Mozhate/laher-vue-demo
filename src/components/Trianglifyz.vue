<template>
  <div class="m-banner">1

    <div :style="{ backgroundImage: 'url(' + this.pattern + ')' ,width: '350px',height: '150px'}"></div>
    <div :style="{ backgroundImage: 'url(' + this.pattern + ')' ,width: '1800px',height: '500px'}"></div>
    {{this.pattern}}
  </div>
</template>
<script>
    import Trianglify from 'trianglify'

    export default {
        data() {
            return {pattern: ''}
        },
        created() {
            let pattern = Trianglify({
                width: 1800,
                height: 500
            }).png();
            this.pattern = pattern
        }
    }
</script>

<style scoped>
  .m-banner div {
    height: 300px;
    background-position: 50% 50%;
    background-size: cover;
  }
</style>

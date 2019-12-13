<template>
  <div class="m-banner">1
    <div :style="{ backgroundImage: 'url(' + this.pattern + ')' }"></div>
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
                width: 1500,
                height: 300
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

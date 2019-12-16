<template>
  <div>
    <img :src="data">
    <div id="url" :style="{'background':css}">
      11111
    </div>
  </div>
</template>

<script>
  import GeoPattern from 'geopattern'
  export default {
    data(){
      return {
        data:null,
        css:null,
      }
    },
    created(){
      const pattern = GeoPattern.generate('lock');
      this.css = pattern.toDataUrl()
      this.data = pattern.toDataUri()
      console.log(pattern.toBase64())
    }
  }
</script>

<style scoped>

</style>
